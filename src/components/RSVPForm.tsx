"use client";

import { useState } from "react";

const alcoholOptions = [
  { id: "vino-biele", label: "Biele víno" },
  { id: "vino-cervene", label: "Červené víno" },
  { id: "vino-ruzove", label: "Ružové víno" },
  { id: "pivo", label: "Pivo" },
  { id: "rum", label: "Rum" },
  { id: "vodka", label: "Vodka" },
  { id: "gin", label: "Gin" },
  { id: "whisky", label: "Whisky" },
  { id: "tequila", label: "Tequila" },
  { id: "prosecco", label: "Prosecco / Šampanské" },
  { id: "nealko", label: "Nealkoholické nápoje" },
  { id: "nepijem", label: "Nepijem alkohol" },
];

const stravovanieOptions = [
  { value: "standard", label: "Štandardné (všetko)" },
  { value: "vegetarian", label: "Vegetarián" },
  { value: "vegan", label: "Vegán" },
];

interface OsobaData {
  meno: string;
  stravovanie: string;
  intolerancie: string;
  alkohol: string[];
}

interface FormData {
  email: string;
  telefon: string;
  pocetOsob: number;
  osoby: OsobaData[];
  ubytovanie: string;
  terminUbytovania: string;
  poznamka: string;
}

const createEmptyOsoba = (): OsobaData => ({
  meno: "",
  stravovanie: "standard",
  intolerancie: "",
  alkohol: [],
});


export default function RSVPForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    telefon: "",
    pocetOsob: 1,
    osoby: [createEmptyOsoba()],
    ubytovanie: "",
    terminUbytovania: "",
    poznamka: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "pocetOsob") {
      const newCount = parseInt(value) || 1;
      const currentCount = formData.osoby.length;

      let newOsoby = [...formData.osoby];

      if (newCount > currentCount) {
        // Pridaj nové osoby
        for (let i = currentCount; i < newCount; i++) {
          newOsoby.push(createEmptyOsoba());
        }
      } else if (newCount < currentCount) {
        // Odstráň osoby
        newOsoby = newOsoby.slice(0, newCount);
      }

      setFormData((prev) => ({ ...prev, pocetOsob: newCount, osoby: newOsoby }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleOsobaChange = (
    index: number,
    field: keyof OsobaData,
    value: string | string[]
  ) => {
    setFormData((prev) => {
      const newOsoby = [...prev.osoby];
      newOsoby[index] = { ...newOsoby[index], [field]: value };
      return { ...prev, osoby: newOsoby };
    });
  };

  const handleAlcoholChange = (index: number, alcoholId: string) => {
    setFormData((prev) => {
      const newOsoby = [...prev.osoby];
      const currentAlcohol = newOsoby[index].alkohol;

      if (currentAlcohol.includes(alcoholId)) {
        newOsoby[index].alkohol = currentAlcohol.filter((a) => a !== alcoholId);
      } else {
        newOsoby[index].alkohol = [...currentAlcohol, alcoholId];
      }

      return { ...prev, osoby: newOsoby };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Priprav dáta pre odoslanie
      const dataToSend = {
        email: formData.email,
        telefon: formData.telefon,
        pocetOsob: formData.pocetOsob,
        ubytovanie: formData.ubytovanie,
        terminUbytovania: formData.terminUbytovania,
        poznamka: formData.poznamka,
        osoby: formData.osoby.map((osoba) => ({
          ...osoba,
          alkohol: osoba.alkohol.join(", "),
        })),
        datum: new Date().toISOString(),
      };

      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          email: "",
          telefon: "",
          pocetOsob: 1,
          osoby: [createEmptyOsoba()],
          ubytovanie: "",
          terminUbytovania: "",
          poznamka: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const showTerminUbytovania = formData.ubytovanie === "ano";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Kontaktné údaje */}
      <div className="space-y-6">
        <h3 className="font-playfair text-xl text-burgundy border-b border-burgundy/20 pb-2">
          Kontaktné údaje
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-burgundy/20 bg-white focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 outline-none transition-all"
              placeholder="jan@example.com"
            />
          </div>

          <div>
            <label htmlFor="telefon" className="block text-sm font-medium text-dark mb-1">
              Telefón
            </label>
            <input
              type="tel"
              id="telefon"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-burgundy/20 bg-white focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 outline-none transition-all"
              placeholder="+421 900 000 000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="pocetOsob" className="block text-sm font-medium text-dark mb-1">
            Počet osôb *
          </label>
          <select
            id="pocetOsob"
            name="pocetOsob"
            required
            value={formData.pocetOsob}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-burgundy/20 bg-white focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 outline-none transition-all"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? "osoba" : num < 5 ? "osoby" : "osôb"}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Údaje o osobách */}
      {formData.osoby.map((osoba, index) => (
        <div key={index} className="space-y-6">
          <h3 className="font-playfair text-xl text-burgundy border-b border-burgundy/20 pb-2">
            {formData.pocetOsob === 1 ? "Vaše údaje" : `${index + 1}. osoba`}
          </h3>

          <div>
            <label
              htmlFor={`meno-${index}`}
              className="block text-sm font-medium text-dark mb-1"
            >
              Meno a priezvisko *
            </label>
            <input
              type="text"
              id={`meno-${index}`}
              required
              value={osoba.meno}
              onChange={(e) => handleOsobaChange(index, "meno", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-burgundy/20 bg-white focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 outline-none transition-all"
              placeholder="Ján Novák"
            />
          </div>

          <div>
            <label
              htmlFor={`stravovanie-${index}`}
              className="block text-sm font-medium text-dark mb-1"
            >
              Stravovanie *
            </label>
            <select
              id={`stravovanie-${index}`}
              required
              value={osoba.stravovanie}
              onChange={(e) => handleOsobaChange(index, "stravovanie", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-burgundy/20 bg-white focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 outline-none transition-all"
            >
              {stravovanieOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {(osoba.stravovanie === "vegetarian" || osoba.stravovanie === "vegan") && (
            <div>
              <label
                htmlFor={`intolerancie-${index}`}
                className="block text-sm font-medium text-dark mb-1"
              >
                Intolerancie / Alergie
              </label>
              <input
                type="text"
                id={`intolerancie-${index}`}
                value={osoba.intolerancie}
                onChange={(e) => handleOsobaChange(index, "intolerancie", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-burgundy/20 bg-white focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 outline-none transition-all"
                placeholder="Napr. bezlepková diéta, alergia na orechy..."
              />
            </div>
          )}

          <fieldset>
            <legend className="block text-sm font-medium text-dark mb-2">
              Preferencia alkoholu
            </legend>
            <p className="text-xs text-dark/60 mb-3">Vyberte všetko, čo vám chutí</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {alcoholOptions.map((option) => (
                <label
                  key={`${index}-${option.id}`}
                  className="flex items-center gap-2 p-2 rounded-lg border border-burgundy/20 bg-white hover:border-burgundy/40 cursor-pointer text-sm"
                >
                  <input
                    type="checkbox"
                    name={`alkohol-${index}`}
                    value={option.id}
                    checked={osoba.alkohol.includes(option.id)}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      if (checked) {
                        handleOsobaChange(index, "alkohol", [...osoba.alkohol, option.id]);
                      } else {
                        handleOsobaChange(index, "alkohol", osoba.alkohol.filter(a => a !== option.id));
                      }
                    }}
                    className="w-4 h-4 accent-burgundy"
                  />
                  <span className="text-dark">{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      ))}

      {/* Ubytovanie */}
      <div className="space-y-6">
        <h3 className="font-playfair text-xl text-burgundy border-b border-burgundy/20 pb-2">
          Ubytovanie
        </h3>

        <div>
          <label htmlFor="ubytovanie" className="block text-sm font-medium text-dark mb-1">
            Máte záujem o ubytovanie? *
          </label>
          <select
            id="ubytovanie"
            name="ubytovanie"
            required
            value={formData.ubytovanie}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-burgundy/20 bg-white focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 outline-none transition-all"
          >
            <option value="">-- Vyberte --</option>
            <option value="ano">Áno, mám záujem</option>
            <option value="nie">Nie, zabezpečím si sám/sama</option>
          </select>
        </div>

        {showTerminUbytovania && (
          <div>
            <label className="block text-sm font-medium text-dark mb-3">
              Termín ubytovania *
            </label>
            <div className="flex flex-wrap gap-4">
              <label
                className={`flex items-center gap-2 p-4 rounded-lg border cursor-pointer transition-all ${
                  formData.terminUbytovania === "stvrtok-sobota"
                    ? "border-burgundy bg-burgundy/10"
                    : "border-burgundy/20 bg-white hover:border-burgundy/40"
                }`}
              >
                <input
                  type="radio"
                  name="terminUbytovania"
                  value="stvrtok-sobota"
                  checked={formData.terminUbytovania === "stvrtok-sobota"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-burgundy"
                />
                <div>
                  <span className="font-medium text-dark">Štvrtok – Sobota</span>
                  <p className="text-xs text-dark/60">Pre tých, čo chcú viac času</p>
                </div>
              </label>

              <label
                className={`flex items-center gap-2 p-4 rounded-lg border cursor-pointer transition-all ${
                  formData.terminUbytovania === "piatok-sobota"
                    ? "border-burgundy bg-burgundy/10"
                    : "border-burgundy/20 bg-white hover:border-burgundy/40"
                }`}
              >
                <input
                  type="radio"
                  name="terminUbytovania"
                  value="piatok-sobota"
                  checked={formData.terminUbytovania === "piatok-sobota"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-burgundy"
                />
                <div>
                  <span className="font-medium text-dark">Piatok – Sobota</span>
                  <p className="text-xs text-dark/60">Klasická voľba</p>
                </div>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Poznámka */}
      <div className="space-y-6">
        <h3 className="font-playfair text-xl text-burgundy border-b border-burgundy/20 pb-2">
          Ešte niečo?
        </h3>

        <div>
          <label htmlFor="poznamka" className="block text-sm font-medium text-dark mb-1">
            Poznámka
          </label>
          <textarea
            id="poznamka"
            name="poznamka"
            value={formData.poznamka}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-burgundy/20 bg-white focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 outline-none transition-all resize-none"
            placeholder="Čokoľvek ďalšie, čo by sme mali vedieť..."
          />
        </div>
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-full font-semibold text-lg shadow-lg transition-all ${
            isSubmitting
              ? "bg-burgundy/50 text-white cursor-not-allowed"
              : "bg-burgundy text-white hover:bg-burgundy-dark hover:scale-[1.02]"
          }`}
        >
          {isSubmitting ? "Odosielam..." : "Potvrdiť účasť"}
        </button>

        {submitStatus === "success" && (
          <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-center">
            <p className="text-green-800 font-medium">
              Ďakujeme! Vaša odpoveď bola úspešne odoslaná.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg text-center">
            <p className="text-red-800 font-medium">
              Ups, niečo sa pokazilo. Skúste to prosím znova.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
