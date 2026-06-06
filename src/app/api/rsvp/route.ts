import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = (process.env.GOOGLE_SCRIPT_URL || "").trim();

interface OsobaData {
  meno: string;
  stravovanie: string;
  intolerancie: string;
  alkohol: string;
  ubytovanie: string;
  terminUbytovania: string;
}

interface RSVPData {
  email: string;
  telefon: string;
  pocetOsob: number;
  osoby: OsobaData[];
  poznamka: string;
  datum: string;
}

export async function POST(request: Request) {
  try {
    const data: RSVPData = await request.json();

    // Validácia
    if (!data.email || !data.osoby || data.osoby.length === 0) {
      return NextResponse.json(
        { error: "Chýbajú povinné polia" },
        { status: 400 }
      );
    }

    // Validácia mien
    for (const osoba of data.osoby) {
      if (!osoba.meno) {
        return NextResponse.json(
          { error: "Chýba meno osoby" },
          { status: 400 }
        );
      }
    }

    if (!GOOGLE_SCRIPT_URL) {
      console.log("RSVP Data received (test mode):", JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true, message: "Data received (test mode)" });
    }

    // Priprav dáta pre Google Sheets - každá osoba bude v samostatnom riadku
    // ale zoskupená podľa emailu/rezervácie
    const responses = [];

    for (let i = 0; i < data.osoby.length; i++) {
      const osoba = data.osoby[i];

      // Vytvor URL parametre
      const params = new URLSearchParams({
        email: data.email,
        telefon: data.telefon || "",
        pocetOsob: data.pocetOsob.toString(),
        poradieOsoby: (i + 1).toString(),
        meno: osoba.meno,
        stravovanie: osoba.stravovanie,
        intolerancie: osoba.intolerancie || "",
        alkohol: osoba.alkohol || "",
        ubytovanie: osoba.ubytovanie || "",
        terminUbytovania: osoba.terminUbytovania || "",
        poznamka: i === 0 ? (data.poznamka || "") : "", // Poznámka len pri prvej osobe
        datum: data.datum,
      });

      const url = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

      const response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        cache: "no-store",
      });

      const responseText = await response.text();
      responses.push(responseText);

      // Apps Script vracia {"success":true} pri zápise, {"status":"ok"} keď neprišli
      // parametre, a HTML chybovú stránku keď je URL/deployment zlý. Route predtým
      // vracala success naslepo a tiché chyby prepadli — tu overíme reálny výsledok.
      if (!responseText.includes('"success"')) {
        console.error("RSVP Apps Script neuložil riadok. Odpoveď:", responseText.slice(0, 300));
        throw new Error(
          `Apps Script nezapísal (HTTP ${response.status}): ${responseText.slice(0, 200)}`
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    console.error("RSVP Error:", detail);
    return NextResponse.json(
      { error: "Nepodarilo sa uložiť odpoveď", detail },
      { status: 500 }
    );
  }
}
