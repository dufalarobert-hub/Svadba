# Svadobny web - Robert & Alexandra

Svadobna stranka pre svadbu Roberta Dufalu a Alexandry Durajkovej, ktora sa bude konat 25. septembra 2026 v Bardejove.

## Technologie

- **Next.js 16** - React framework
- **Tailwind CSS 4** - Styling
- **Google Sheets** - Ukladanie RSVP odpovedi cez Apps Script

## Funkcie

- Responzivny single-page dizajn
- RSVP formular s podporou viacerych osob
- Napojenie na Google Sheets pre spravu hosti
- Sekcie: Uvod, Nas pribeh, Obrad, Hostina, Organizacia, Ubytovanie, Tipy, Dresscode

## Spustenie lokalne

```bash
npm install
npm run dev
```

Web bezi na http://localhost:3000

## Konfiguracia

Vytvor subor `.env.local` s:

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/[YOUR_SCRIPT_ID]/exec
```

## Google Apps Script

V Google Sheets vytvor Apps Script cez Rozsirenia -> Apps Script s tymto kodom:

```javascript
function doGet(e) {
  if (!e.parameter || !e.parameter.meno) {
    return ContentService.createTextOutput(JSON.stringify({status: 'ok'}))
      .setMimeType(ContentService.MimeType.JSON);
  }

  var ss = SpreadsheetApp.openById('[SPREADSHEET_ID]');
  var sheet = ss.getSheetByName('RSVP');

  sheet.appendRow([
    new Date(),
    e.parameter.email || '',
    e.parameter.telefon || '',
    e.parameter.pocetOsob || '',
    e.parameter.poradieOsoby || '',
    e.parameter.meno || '',
    e.parameter.stravovanie || '',
    e.parameter.intolerancie || '',
    e.parameter.alkohol || '',
    e.parameter.ubytovanie || '',
    e.parameter.terminUbytovania || '',
    e.parameter.poznamka || ''
  ]);

  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Farby

- Burgundy: `#800020`
- Cream: `#F7F3EB`

## Deploy

```bash
npx vercel
```

## Autor

Vytvorene s pomocou Claude Code
