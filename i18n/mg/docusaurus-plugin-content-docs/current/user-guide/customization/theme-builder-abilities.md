---
title: Fahaizana an'ny Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Fahaiza Ahorana: Scaffold sy Aktiva Block Themes

Ny Superdav AI Agent v1.12.0 dia manolotra fahaizana roa mahery izay ahafahanao mamorona sy mampiasa block themes manokana mivantana amin'ny alalan'ny chat interface.

## Famarahabana {#overview}

Ny fahaizana **scaffold-block-theme** sy **activate-theme** dia ahafahan'ny agents:
- Mamorona block themes feno, vonona ho an'ny famokarana (production-ready) mifototra amin'ny fanazavanao
- Manao aktiva ny themes ao amin'ny tranokalanare tsy mila fampindramam-pahefana manokana
- Mamorona maha-izy azy ara-tsipika amin'ny alalan'ny fanapahan-kevitra famolavolana voarafo

## Scaffold Block Theme {#scaffold-block-theme}

Ny fahaizana **scaffold-block-theme** dia mamorona block theme WordPress vaovao misy rafitry ny theme manontolo, anisan'izany:

- `theme.json` configuration miaraka amin'ny design tokens
- Fily template ho an'ny layout mahazatra
- Styles sy fomba hafa (variations) ho an'ny block manokana
- Metadata ary fanambarana famahana ny theme

### Ahoana no Atao {#how-to-invoke}

Ao amin'ny chat anao miaraka amin'ny Superdav AI Agent, afaka mangataka famoronana theme ianao:

```
"Mamorona block theme antsoina hoe 'Modern Agency' misy loko manga sy fotsy,
font sans-serif, ary layout matihanina"
```

Ny agent dia hatao ireto:
1. Angona ny safidy famolavolanao amin'ny alalan'ny resaka
2. Mamorona ny rafitry ny theme manontolo
3. Mamorona ireo fichier theme ilaina rehetra
4. Manomana ny theme ho an'ny fanatanterahana (activation)

### Vokatry ny Fandikana {#expected-output}

Rehefa mandeha tsara ny fahaizana, dia hahita ireto:

- Fanamafisana fa efa namboarina ny theme
- Ny anaran'ny theme sy toerany misy azy
- Famintinana ireo design tokens nampiasaina (loko, font, elanelana)
- Toerana vonona ho an'ny fanatanterahana

Ohatra vokatry ny fandikana:
```
✓ Theme "Modern Agency" efa voavaha tsara
  Toerana: /wp-content/themes/modern-agency/
  Loko: Primary #0066CC, Secondary #FFFFFF
  Font: Inter (sans-serif)
  Toerana: Vonona ho an'ny fanatanterahana
```

## Aktiva Theme {#activate-theme}

Ny fahaizana **activate-theme** dia manova ny tranokalao ho theme vaovao na efa misy block theme.

### Ahoana no Fampiasana azy {#how-to-invoke-1}

Rehefa nanao scaffolding (fanamboarana fototra) theme ianao, dia afaka mampiasa azy avy hatrany:

```
"Ampirisihina ny Modern Agency theme"
```

Na ampiana aiza na theme efa misy:

```
"Mendrika ny Twentytwentyfour theme"
```

### Vokatry ny Fandikana (Expected Output) {#expected-output-1}

Rehefa mandeha tsara ny activation:

- Fanamafisana ny theme efa miasa
- Anaran'ny theme teo aloha (ho fanazavana)
- URL an'ny tranokala izay misy ilay theme izao
- Fanamarihana manokana momba ny fametrahana ny theme

Ohatra vokatra:
```
✓ Theme dia nampiasa tsara
  Theme miasa: Modern Agency
  Theme teo aloha: Twentytwentyfour
  Misy an'izany eto: https://yoursite.com
  Fanamarihana: Jereo ny homepage anao mba hanamarinana ny endrika vaovao
```

## Fomba Fiasa: Scaffolding sy Activation {#workflow-scaffold-and-activate}

Ny fomba fiasana mahazatra dia mampifangaro ireo fahaizana roa ireo:

1. **Mangataka famoronana theme**: "Ataovy block theme ho an'ny landing page SaaS-ko"
2. **Manao scaffolding ny agent**: Mamorona rakitra sy design tokens
3. **Fahafantarana sy fanatsarana**: Miady momba ny fiovana amin'ny endrika raha ilaina
4. **Activation**: "Ampiana an'ity theme ity izao"
5. **Fanamarinana**: Mandehana any amin'ny tranokalao mba hanamafisana fa miasa ny endrika vaovao

## Design Tokens sy Fanatsarana (Customization) {#design-tokens-and-customization}

Ny theme efa nanao scaffolding dia mampiasa design tokens an'i WordPress (amin'ny alalan'ny `theme.json`) ho an'izay manaraka:

- **Loko**: Primary, secondary, accent, palette malefaka
- **Typografia**: Font families, habeny, lanjany, halavany tsipika
- **Espace**: Padding, margin, gap scales
- **Bordron'ny zavatra**: Radius sy tokens ho an'ny lavany
- **Shadows**: Ny haavo (elevation levels)

Ireo tokens ireo dia mifantoka ao amin'ny `theme.json`, ka mora atao ny manova ny rafitry ny endrika rehetra avy amin'ny rakitra iray.

## Fepetra sy Fanamarihana {#limitations-and-notes}

- Les thèmes dia fanamboatra ao `/wp-content/themes/` ary tsy maintsy manaraka ny fomba anaran'ny WordPress.
- Ny activation (fanatanterahana) dia mitaky alalana mety amin'ny tranonkala WordPress anao.
- Ny code PHP manokana ao anatin'ny thèmes dia kely ihany; ampiasao ireo plugins ho an'ny fiasa sarotra.
- Ireo block themes dia miasa tsara indrindra amin'ny WordPress 5.9 sy aorian'izay.

## Fandresena olana (Troubleshooting) {#troubleshooting}

**Tsy miseho ny thème aorian'ny famoronana azy (scaffolding)**
- Jereo raha misy ny lalana (directory) an'ny thème ary manana alalana mety.
- Fantaro fa marina ny `theme.json` ho JSON.
- Antsoy mba hahazo antoka fa tsy mifandray amin'ny thèmes efa misy ny anarana ilay thème vaovao.

**Tsy mitovy ny activation (Activation fails)**
- Fantaro fa manana alalana administrator ianao.
- Jereo raha azo vakiana avy amin'ny WordPress ny lalana an'ny thème.
- Jereo ireo error logs an'ny WordPress mba hahazoana antsipiriany momba izany.

**Tsy miasa ny design tokens (Design tokens not applying)**
- Fantaro fa marina ny fomba fanoratana (`syntax`) ao amin'ny `theme.json`.
- Manadio (clear) ireo caching plugins rehetra.
- Jereo raha mifanaraka amin'ny dikan-teny (version) WordPress anao ny tokens ampiasainao.

## Dingana manaraka (Next Steps) {#next-steps}

Aorian'ny activation ny thème anao, afaka:
- Mampiasa ny **Design System Aesthetics skill** mba hanatsarana ny fomba fanoratana (typography), loko ary ny toerana misy zavatra (spacing).
- Manova ny fomba fiasan'ny block tsirairay amin'ny alalan'ny WordPress block editor.
- Ampiana CSS manokana ao anatin'ny rakitra `style.css` an'ilay thème.
- Mamorona template block manokana ho karazana pejy manokana.
