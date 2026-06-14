---
title: Svetbuotojo kontaktiniai formai
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontaktformatai weboldalépítő eszközökkel

Superdav AI Agent v1.10.0 lehetővé teszi kontaktformációk létrehozania direkt czatfelületen Site Builder agent segítségével. Ez lehetővé teszi, hogy bármilyen oldalon teljesen működő kontaktformációkat létrehozzonunk anélkül, hogy elhagyanánk a czatot.

## Áttekintés

A Site Builder kontaktformációk létrehozási funkció (`create_contact_form`) automatikusan az telepített form plugin-ot felismeri és a plugin eredeti képességeit használva kontaktformációt hozza létre. Támogatott form pluginok közé tartoznak:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Az asszisztens automatikusan kiválasztja az Ön weboldalán elérhető legjobb form pluginet és a pluginhez illeszkedő kontaktformációt generál.

## Kontaktformáció létrehozása

A Site Builder segítségével kontaktformáció létrehozásához:

1. Nyissa meg a **Gratis AI Agent** czatpanellet az WordPress admin felületén.
2. Váltasson a **Site Builder** agentre, kattintva a czatfejsegtér ikonára.
3. Leírja azt a kontaktformációt, amit létrehozni szeretne. Például:

   > "Hozzon létre egy kontaktformációt az Kontakt oldalon név, e-mail cím, üzenet és telefonszám mezőkkel."

   Vagy egyszerűen csak:

   > "Hozzon létre egy kontaktformációt a Kontakt oldalra."

4. A Site Builder generálja a kontaktformációt és visszatér egy rövid kódot (shortcode), amelyet beépíthető.

## Generált rövid kód használata

A Site Builder létrehozása után egy rövid kódot ad vissza (például `[contact-form-7 id="123"]`). Ön megteheti:

1. **Beépítése oldalon vagy cikkben** — Másolja ki a rövid kódot és viselje be bármilyen oldalra vagy cikkbe a blokkból vagy klasszikus éditor segítségével.
2. **Hozzáadása a Site Builder segítségével** — Kérje meg a Site Builder, hogy automatikusan adja hozzá a formát egy adott oldalon:

   > "Hozzon létre a kontaktformációt a Kontakt oldalra."

3. **Pakeite jį šabloone** — Jei jau esate pasidiegę PHP, galite pridėti shortcode į temo šabloono failą.

## Kontakto formos pritaikymas

Po to, kai Site Builder sukuria kontakto formą, ją galite further pritaikyti:

### Per čatą interfeisą

Paklausykite Site Builder'ą pakeisti formą:

> "Atnaujinkite kontakto formą, pridėkite lauką „Pavadinimas“ ir padaugite laukui „Mes“, kad jis būtų privalomas."

Site Builder atnaujins formą ir atsisiųs naują atnaujintą shortcode.

### Per formos plokštadienio administravimo interfeisą

Galite taip pat tiesiogiai pritaikyti formą savo formos plokštadienio nustatyjimu:

1. Eikite į **Contact Form 7** (arba jūsų įdaliotą formos plokštadienį) WordPress administravimo pusėje.
2. Raskirkite tą formą, kurą sukurė Site Builder.
3. Redaguokite formos laukus, patikrinimo taisykles ir el. laiškų pranešimus, jei reikia.

## Formos plokštadieniai ir supraveikojimas

Site Builder automatiškai nurodo, kuris formos plokštadienis yra įdaliotas jūsų svetainėje, ir naudoja jį kontakto formos kūrimui. Jei įdaliotas įdalioti formos plokštai yra daug, Site Builder priorizuojasi šioje reikalavime:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Jei nė vienas iš šių plokštadienų nėra įdaliotas, Site Builder siūlys įdalioti vieną prieš kūrimą kontakto formos.

## El. laiškų pranešimai

Site Builder sukurtos kontakto formos nustatytos automatiškai siųsti el. laiškus administratorui svetainės, kaip pagrindinį nustatymą. Galite pakeisti gausdančio el. pašto adresą ir pranešimo žinutę:

1. Eikite į jūsų formos plokštadienio administravimo interfeisą.
2. Raskirkite tą formą, kurą sukurė Site Builder.
3. Redaguokite nustatyjus el. laiškų pranešimus.

Daugiau informacijos rasirkite jūsų formos plokštadienio dokumentacijai:

- [E-mail pranešimai Contact Form 7](https://contactform7.com/docs/)
- [E-mail pranešimai WPForms](https://wpforms.com/docs/)
- [E-mail pranešimai Fluent Forms](https://fluentforms.com/docs/)
- [E-mail pranešimai Gravity Forms](https://docs.gravityforms.com/)

## Pavyzdiniai naudojimo atvejai

### Paprastas kontaktinis forma

> "Sukurti paprastą kontaktinį formą su laukais vardas, el. pašto adresas ir žinutė."

### Multistepi forma

> "Sukurti kontaktinę formą su pirmuoju etapu kontaktinių informacijos ir antriejimu etapu žinutės ir mėgstamo kontaktų būdo."

### Forma su laikinai logika

> "Sukurti kontaktinę formą, kuri rodo skirtingus laukus priklausomai nuo vartotojo pasirinkimo iš 드롭-down meniu."

### Forma su failų įkrovimu

> "Sukurti kontaktinę formą, kurio vartotojai gali įkrauti failą arba pridelį."

:::note
Kontaktinės formos kūrimas yra skirtas Superdav AI Agent v1.10.0 ir vėliau versijoms. Svidu Dydimo agentas turi būti aktyvus, kad naudotumytumėte šią funkciją.
:::
