# Audio bestanden downloaden voor Rallen

De structuur voor de Rallen pagina is compleet aangemaakt, maar de audio bestanden moeten handmatig worden gedownload van Xeno-canto.org omdat het domein geblokkeerd is tijdens de automatische setup.

## Te downloaden bestanden

Plaats alle bestanden in de map: `audio/rallen/`

### 1. Waterral (roep) - Rallus aquaticus
- **URL**: https://xeno-canto.org/687660
- **Bestandsnaam**: `XC687660 - Waterral roep - Rallus aquaticus.mp3`
- **Beschrijving**: Luide, schreeuwende roep

### 2. Waterral (balts) - Rallus aquaticus
- **URL**: https://xeno-canto.org/640469
- **Bestandsnaam**: `XC640469 - Waterral balts - Rallus aquaticus.mp3`
- **Beschrijving**: Baltsroep met snelle, ritmische roepen

### 3. Waterhoen - Gallinula chloropus
- **URL**: Zoek een geschikt geluid op https://xeno-canto.org/species/Gallinula-chloropus
- **Bestandsnaam**: `XC688234 - Waterhoen - Gallinula chloropus.mp3` (of gebruik het XC nummer van je keuze)
- **Beschrijving**: Scherp "krrruk" of "kik" geluid
- **Tip**: Zoek naar opnames met duidelijke roepen

### 4. Meerkoet - Fulica atra
- **URL**: Zoek een geschikt geluid op https://xeno-canto.org/species/Fulica-atra
- **Bestandsnaam**: `XC691456 - Meerkoet - Fulica atra.mp3` (of gebruik het XC nummer van je keuze)
- **Beschrijving**: Luid, explosief "kowt" of "pjok" geluid
- **Tip**: Zoek naar opnames met duidelijke roepen

## Instructies

1. Bezoek de Xeno-canto URL
2. Klik op de download knop op de pagina
3. Sla het bestand op met de exacte bestandsnaam zoals hierboven vermeld
4. Plaats het bestand in de `audio/rallen/` map
5. Als je een ander XC nummer gebruikt voor Waterhoen of Meerkoet, update dan ook:
   - `rallen.html` (de XC nummer in de beschrijving)
   - `script.js` (het audio pad in de birdsData.rallen array)

## Verificatie

Na het downloaden van de bestanden:
1. Open `index.html` in je browser
2. Klik op de "Rallen" kaart
3. Test of alle audio bestanden afspelen
4. Test de quiz om te zien of rallen species worden meegenomen

## Licentie noot

Alle opnames van Xeno-canto zijn beschikbaar onder verschillende Creative Commons licenties. 
Zorg ervoor dat je de recordist crediteert zoals aangegeven op de Xeno-canto pagina.
