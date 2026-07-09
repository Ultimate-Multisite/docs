---
title: Gastamaj Menuoj
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Gastigadaj Menuoj

La trajto **Gastigadaj Menuoj** permesas al Theme Builder generi kaj enmeti strukturitajn manĝaĵajn kaj trinkaĵajn menuopaĝojn rekte en vian WordPress retejon.

## Superrigardo

Theme Builder nun povas krei profesiajn, strukturitajn menuopaĝojn por gastigadaj entreprenoj inkluzive de restoracioj, kafejoj, trinkejoj kaj manĝoprovizaj servoj. Ĉi tiuj menuoj estas plene integritaj en la dezajnon de via retejo kaj povas esti facile ĝisdatigitaj kaj administrataj.

## Subtenataj Gastigadaj Tipoj

- **Restoracioj** — plenservaj manĝmenuoj
- **Kafejoj** — kafaj kaj malpezmanĝaj menuoj
- **Trinkejoj kaj Salonoj** — trinkaĵaj kaj antaŭmanĝaj menuoj
- **Bakejoj** — bakaĵaj kaj panaj menuoj
- **Manĝoprovizaj Servoj** — eventaj menuopcioj
- **Manĝokamionoj** — moveblaj manĝservaj menuoj
- **Bierfarejoj kaj Vinfarejoj** — trinkaĵaj menuoj kun priskriboj

## Menua Strukturo

### Menuaj Kategorioj

Menuoj estas organizitaj en kategoriojn:

- **Antaŭmanĝoj** — komencaĵoj kaj malgrandaj pladoj
- **Ĉefpladoj** — ĉefaj manĝaĵoj
- **Akompanaĵoj** — akompanaĵoj kaj legomoj
- **Desertoj** — dolĉaj frandaĵoj
- **Trinkaĵoj** — trinkaĵoj (alkoholaj kaj senalkoholaj)
- **Specialaĵoj** — ĉiutagaj aŭ sezonaj specialaĵoj

### Menuero-Formato

Ĉiu menuero inkluzivas:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Eroj-Kampoj

| Kampo | Tipo | Priskribo |
|-------|------|-------------|
| `name` | string | Nomo de plado aŭ trinkaĵo |
| `description` | string | Detala priskribo de la ero |
| `price` | string | Prezo (formatita kun valuto) |
| `dietary_info` | array | Dietaj atributoj (Vegana, Sen-Glutena, ktp.) |
| `allergens` | array | Oftaj alergenoj (Nuksoj, Mariskoj, ktp.) |
| `availability` | string | Kiam disponebla (Ĉiutage, Sezona, ktp.) |

## Krei Gastigadajn Menuojn

### Paŝo 1: Provizu Menuajn Informojn

Diru al Theme Builder pri via menuo:

```
Kreu restoracian menuon por mia itala restoracio kun antaŭmanĝoj,
pastaj pladoj, ĉefpladoj kaj desertoj. Inkluzivu prezojn kaj priskribojn.
```

### Paŝo 2: Theme Builder Generas Menuon

Theme Builder:

1. Kreas strukturitan menuopaĝon
2. Dezajnas ĝin por kongrui kun la etoso de via retejo
3. Organizas erojn en kategoriojn
4. Formatas prezojn kaj priskribojn
5. Aldonas dietajn kaj alergenajn informojn

### Paŝo 3: Reviziu kaj Agordu

Vi povas:

1. Redakti menuerojn kaj prezojn
2. Aldoni aŭ forigi kategoriojn
3. Reordigi erojn ene de kategorioj
4. Ĝisdatigi priskribojn kaj dietajn informojn
5. Alĝustigi stiladon kaj aranĝon

## Menuaj Montraj Opcioj

### Plena Menuopaĝo

Dediĉita paĝo montranta vian kompletan menuon:

- Organizita laŭ kategorio
- Serĉebla kaj filtrebla
- Pres-taŭga aranĝo
- Poŝtelefon-adapta dezajno

### Menua Kromprogrameto

Enmetu menuajn sekciojn en aliajn paĝojn:

- Elstarigitaj eroj sur hejmpaĝo
- Ĉiutagaj specialaĵoj en flankpanelo
- Trinkaĵa menuo sur trinkeja paĝo
- Deserta montrofenestro en piedlinio

### Menua PDF

Generu elŝuteblan PDF-menuon:

- Profesia formatado
- Prespreta kvalito
- Inkluzivas bildojn kaj priskribojn
- Facila por kunhavigi kaj retpoŝti

## Dietaj kaj Alergenaj Informoj

### Dietaj Atributoj

Marku erojn per dietaj informoj:

- **Vegana** — neniuj bestaj produktoj
- **Vegetarana** — neniu viando
- **Sen-Glutena** — sekura por celiakio
- **Sen-Lakta** — neniuj laktoproduktoj
- **Sen-Nuksa** — neniuj arbonuksoj aŭ arakidoj
- **Malalt-Karbonhidrata** — reduktitaj karbonhidratoj
- **Alt-Proteina** — proteinriĉa

### Alergenaj Avertoj

Inkluzivu oftajn alergenojn:

- **Nuksoj** — arbonuksoj kaj arakidoj
- **Mariskoj** — krustacoj kaj moluskoj
- **Fiŝo** — ĉiuj fiŝospecioj
- **Laktaĵoj** — lakto kaj laktoproduktoj
- **Ovoj** — kokinaj ovoj
- **Sojo** — sojproduktoj
- **Gluteno** — tritiko kaj gluten-enhavantaj grenoj
- **Sezamo** — sezamaj semoj kaj oleo

## Menua Administrado

### Ĝisdatigado de Prezoj

Facile ĝisdatigu menuajn prezojn:

1. Iru al la menuopaĝo
2. Klaku "Redakti Menuon"
3. Ĝisdatigu prezojn por eroj
4. Konservu ŝanĝojn
5. Ŝanĝoj aperas tuj sur via retejo

### Aldoni Sezonajn Erojn

Kreu sezonajn menuovariaĵojn:

1. Kreu novan menuoversion
2. Aldonu sezonajn erojn
3. Marku erojn kiel "Sezonaj"
4. Planu disponeblajn datojn
5. Aŭtomate montru dum sezono

### Administri Specialaĵojn

Montru ĉiutagajn aŭ semajnajn specialaĵojn:

1. Kreu kategorion "Specialaĵoj"
2. Aldonu erojn kun disponeblaj datoj
3. Elstarigu specialaĵojn sur hejmpaĝo
4. Ĝisdatigu ĉiutage aŭ ĉiusemajne
5. Arkivu malnovajn specialaĵojn

## Integriĝo kun Theme Builder

Kiam vi uzas Theme Builder por gastigadaj retejoj:

1. **Aŭtomata menuodetekto** — identigas ĉu vi estas manĝaĵa/trinkaĵa entrepreno
2. **Kreo de menuopaĝo** — generas profesiajn menuopaĝojn
3. **Dezajna kongruo** — menuoj kongruas kun la etoso de via retejo
4. **Poŝtelefona optimumigo** — menuoj montriĝas bele sur telefonoj
5. **SEO-optimumigo** — menuoj estas serĉil-amika

## Plej Bonaj Praktikoj

### Menua Dezajno

- **Klara organizado** — logika kategoristrukturo
- **Legeblaj priskriboj** — apetitvekaj kaj informaj
- **Konsekvenca prezado** — klara valuto kaj formatado
- **Profesiaj fotoj** — altkvalitaj manĝobildoj
- **Blanka spaco** — ne troŝarĝu la paĝon

### Enhavo

- **Precizaj priskriboj** — priskribu erojn precize
- **Elstarigu specialaĵojn** — igu specialaĵojn rimarkeblaj
- **Inkluzivu alergenojn** — ĉiam listigu alergenojn
- **Ĝisdatigu regule** — tenu prezojn kaj erojn aktualaj
- **Uzu apetitvekan lingvaĵon** — igu erojn soni bongustaj

### Alirebleco

- **Legeblaj tiparoj** — uzu klarajn, legeblajn tiparojn
- **Sufiĉa kontrasto** — certigu, ke teksto estas legebla
- **Dietaj etikedoj** — klare marku dietajn opciojn
- **Alergenaj avertoj** — elstare montru alergenojn
- **Poŝtelefon-amika** — testu sur ĉiuj aparatoj

## Ekzemploj

### Restoracia Menua Strukturo

```
Antaŭmanĝaĵoj
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salato Caprese

Pastaj Pladoj
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Ĉefpladoj
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desertoj
├── Tiramisu
├── Panna Cotta
└── Elekto de Gelato
```

### Strukturo de Kafeja Menuo

```
Kafo
├── Espresso
├── Cappuccino
└── Latte

Bakaĵoj
├── Croissants
├── Muffins
└── Scones

Sandviĉoj
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetara Wrap
```

## Rilataj Funkcioj

- [Krei Menuon](../abilities/create-menu.md) — krei navigajn menuojn
- [Dezajna Direkto](./design-direction.md) — personecigi la dezajnon de via retejo
- [Malkovra Intervjuo](./discovery-interview.md) — plani la strukturon de via retejo
