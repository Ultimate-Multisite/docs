---
title: Saitide haldamine
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Soidudeid

Soidud (või subsaitid) on teie WaaS liiklussprofi jaoks oluline. Ultimate Multisite on kolme tüüpi soidude:

- **Kliendil omandatud** — Soidud, mis kuuluvad konkreetsetele klienditele
- **Soidute mallid (Site Templates)** — Esimeneid sõltuvate soidute, mida kliendid võivad algupunktina valita
- **Peamine oid (Main Site)** — Teie peamine võrkooid

## Soidude vaatamise {#viewing-sites}

Navige **Ultimate Multisite → Sites** menüü läbi, et näha kogu oma võrgust olevad subsaitid. Iga oid on tähistatud tüüpide poolt ja saate filtreerida All Sites (Kogu soidud), Customer-Owned (Kliendil omandatud), Templates (Mallid) või Pending (Ootamisel).

![Sites list page](/img/admin/sites-list.png)

## Uue soidu lisamine {#adding-a-new-site}

Klõpsake **Add Site** (Lisaind) nupul, et uut oid luua. Peab te anda:

- **Site Title** — Uue oidi nimi
- **Site URL** — Ootamine/teel olev domeen või polud
- **Site Type** — Kas see on kliendioid, mall või tavaline oid

**Copy Site** (Oidi kopimine) võimalus võimaldab teil uut oidi luua olemasoleva soidu malli põhjal. Kui see on aktiveeritud, saate valita, millist mallit algupunktina kasutada. Pärast kontrollige, et **Copy Media on Duplication** (Media kopimine duplikatud) oleks aktiveeritud, et sisaldada media failid.

## Olemasoleva oidi haldamine {#managing-an-existing-site}

Klõpsake igal oid **Manage** (Haldamine), et avata **Edit Site** (Oidi muutmise) leht. Siis leiate:

### Põhitut teavet {#basic-information}

Oidi nimi, tüüp, site ID ja kirjeldus. Näete ka mappitud domeeni, seotud li membershipi ja kliendikontu, mis oidi omandab.

### Oidi valikud (Site Options) {#site-options}

Konfigureerige oidi võimeid ja piiseid:

- **Visit limits** — Maksimaalne soidude külastamine
- **User account limits** — Kasutaja rollide kohta piisid
- **Disk space** — Oidi hoiatu kohalikud (storage)
- **Custom domain** — Aktiveerige domeen mappimine selle oidi jaoks
- **Plugin and theme visibility** — Kontrollige, millised pluginid ja teemad on nähtavad, salvestatud või ette aktiveeritud

Oletusarvona sivustot noudatavat jäsenyyden tasolla asetettuja rajoituksia. Sivuston tason rajoitusten asettaminen ylittää jäsenyysasetukset.

### Assosiaatiot {#associations}

Sivuston vaihtoehtojen alla löydät tiedot:

- **Mappatut domeenit**, jotka on liitetty sivustoon
- **Jäsenyys**, jolla sivu on
- **Asiakkaan tili**, joka on linkitetty sivustoon

### Oikeanpuoleinen sivupalkki {#right-sidebar}

Oikealla voit:

- **Aktivoida/deaktivoida sivuston** kytkimen avulla
- **Muuttaa sivuston tyyppiä** tai uudelleen määrittää omistajuuden
- **Asettaa sivun kuvan/pienoiskuvan** (näkyy etupaneelissa sivustotemplateihin)
- **Poistaa sivuston** pysyvästi

:::warning
Sivuston poistaminen ei ole peruuttamista. Sivu ja kaikki sen sisältö poistetaan pysyvästi.
:::
