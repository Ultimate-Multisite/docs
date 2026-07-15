---
title: Fandaharam-potoana fampianarana Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Fandramba Fandramba (Onboarding Flow an'ny Loatra)

Ny Superdav AI Agent v1.12.0 dia manolotra **Theme Builder onboarding flow** izay manampy anao hahazo mamorona theme mifanaraka amin'ny zavatra tianao mandritra ny fanombohanao. Izany dia manolo ny Site Builder mode taloha amin'ny fomba mora kokoa sy miaraka amin'ny agent.

## Inona no Theme Builder Onboarding Flow? {#what-is-the-theme-builder-onboarding-flow}

Ny Theme Builder onboarding flow dia wizard fametrahana mampifandray izay:

- Mitondra anao lalana amin'ny fanapahan-kevitra momba ny famolavolana ( loko, endrika soratra, fomba fizarana)
- Manangona ny zavatra tian'ny site anao momba ny endriny
- Mamorona theme mifanaraka amin'ny zavatra ilainao
- Manatanteraka ho automatique rehefa vita

Ity flow ity dia ataon'ny **Setup Assistant agent**, izay manontany fanazavana sy mamorona ny theme anao tsikelikely.

## Fanombohana ny Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### Fametrahana Voalohany (First-Run Setup) {#first-run-setup}

Rehefa manomboka Superdav AI Agent ianao amin'ny WordPress vaovao, dia ho hitanao izao:

```
Faly anareo ao amin'ny Superdav AI Agent!

Inona no tianao hatao?
1. Mamorona theme mifanaraka (Theme Builder)
2. Mampiasa theme efa misy
3. Mandray anjara amin'ny fametrahana ankehitriny
```

Safidio ny **"Mamorona theme mifanaraka"** mba hidirana ao amin'ny Theme Builder onboarding flow.

### Fanatanterahana Manokana (Manual Activation) {#manual-activation}

Afaka manomboka ny Theme Builder onboarding aorian'izay na fotoana hafa ianao amin'ny alalan'ny fangatahana:

```
"Manomboha ny Theme Builder onboarding"
```

na

```
"Ampahafantaro aho hanoratra theme mifanaraka"
```

## Ireo Dingana An-onboarding {#the-onboarding-steps}

### Dingana 1: Safidy Modely (Mode Selection) {#step-1-mode-selection}

Ny Setup Assistant agent dia manontany momba ny safidinao:

```
Ahoana no tianao hamoronana ny theme anao?
- Mitondra lalana (Ho manontany sy hanoratra azy ho anao aho)
- Miasa mivantana (Haseho anao ireo safidy ary ianao no mamantatra)
```

**Guided mode** dia toa tsara indrindra ho an'ny mpampiasa maro; ny agent dia manome torohevitra momba ny famolavolana mifototra amin'ny sehatry ny asa sy ny tanjona anao.

### Dingana 2: Famaritana ny Site (Site Specification) {#step-2-site-specification}

Ho fantatra ny site anao izy ireo:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, sns.
- **Target audience**: Izao inona no manao anareo? (Who are your visitors?)
- **Brand colors**: loko fototra sy fampiharana (na "tsy fantatro")
- **Tone**: Matihanina, mamoron-baovao, miankina amin'ny zavatra tiana.

Ity fampahalalana ity dia voatahiry ao anatin'ny fitadidiana **site_brief** anareo, izay ampiasain'ny agents hafa amin'ny fotoana ho avy.

### Dingana 3: Fifidianana ny Design System {#step-3-design-system-decisions}

Ny agent dia hitarika anareo amin'ny safidy ireo design token (fepetra famolavolana):

- **Typography**: Karazan'ny soratra (serif, sans-serif, monospace) sy ny habeny
- **Color palette**: Loko fototra, fampiharana, fanasongadina ary loko tsy manana dikany
- **Spacing**: Fomba fametrahana (fohy, salama, na mivelatra)
- **Motion**: Animation sy transitions (raha tianareo)

### Dingana 4: Famoronana ny Theme {#step-4-theme-generation}

Ny agent Setup Assistant dia hanamboatra ny custom block theme anareo miaraka amin'ireto zavatra ireto:

- `theme.json` ahitana ny design tokens rehetra
- Block templates ho an'ny fametrahana (homepage, blog, contact)
- Style ho an'ny block manokana mifanaraka amin'ny design system anareo
- Metadata momba ny theme sy fanambarana fa miasa amin'ny WordPress

### Dingana 5: Fanatanterahana sy Fanamarihana {#step-5-activation-and-verification}

Ny theme dia hanafatra ho azy ho automatique, ary hahita ireto zavatra ireto:

```
✓ Efa vita ny custom theme anareo!
  Anaran'ny Theme: [Anaran'ny Tranokala Anareo] Theme
  Loko: [Fototra] / [Fampiharana]
  Typography: [Karazan'ny Soratra]

  Mandehana any amin'ny tranokalanareo mba hijerena ny famolavolana vaovao.
```

Avy eo, afaka mankany amin'ny tranokalanareo ianao mba hanamarinana fa mandeha tsara ny theme.

## Famaritana ny Tranokala sy ny Fitadidiana site_brief {#site-specification-and-sitebrief-memory}

Mandritra ny fanombohana (onboarding), ny agent dia mitazona ny famaritana ny tranokalanareo ao anatin'ny fampidirana **site_brief**. Tafiditra ao anatin'izany:

- Tanjon'ny tranokala sy ny tanjony
- Olona tiana ho vokatra (Target audience)
- Loko fototra, fomba fiteny ary fomba fijery
- Fifidianana famolavolana
- Fandaminana ny rafitry ny votoaty

### Nahoana no Zava-dehibe ny site_brief {#why-sitebrief-matters}

Amin'ny fotoana ho avy, ny agents dia mampiasa ny site_brief anareo mba:

### Maintieni ny fomba fanaovana endrika mitovy rehefa miova zavatra {#viewing-your-sitebrief}

- Manolora fepetra mifanaraka amin'ny tanjaran'ny tranokalanareo
- Manome torohevitra mifandray amin'ny toe-javatra misy anao (context-aware)
- Aza mamerina fanontaniana momba ny fametrahana zavatra maro

### Fijerena ny site_brief anao {#customizing-after-onboarding}

Afaka mangataka amin'ilay agent ianao:

```
"Asehoy ahy ny site brief-ko"
```

na

```
"Inona no fantatrao momba ny tranokala-ko?"
```

Hasehon'ny agent ny famaritana anao momba ny site voamarina.

## Fanovana Aorian'ny Fampidirana (Onboarding) {#use-the-design-system-aesthetics-skill}

Aorian'ny fampiharana Theme Builder dia vita, afaka:

### Mampiasa ny fahaizana Design System Aesthetics Skill {#edit-themejson-directly}

Mangataka fanitsiana endrika:

```
"Ataovy maoderina kokoa ny tipografia"
```

na

```
"Ataovy mafana kokoa ny loko"
```

Ny **Design System Aesthetics skill** no hitarika anao amin'ny fanavaozana endrika mifantoka.

### Manova mivantana ny theme.json {#create-custom-block-templates}

Ho an'ireo mpampiasa manana fahaiza-manao avo lenta, dia ampiasao ny manova `/wp-content/themes/[theme-name]/theme.json` mba hanitsiana:

- Color tokens (fepetra loko)
- Typography scales (fizarana tipografia)
- Spacing values (valiny fizarana)
- Border and shadow definitions (fanazavana ny lamba sy ny aloka)

### Mamorona Custom Block Templates {#comparison-old-vs-new-onboarding}

Ampiasao ny WordPress block editor mba hamoronana template manokana ho an'ny:

- Homepage layouts (fomba famolavolana pejy fialan-tany)
- Blog post pages (pejy lahatsoratra blog)
- Product pages (pejy vokatra)
- Contact forms (forms fifandraisana)

## Fampitahana: Taloha vs. Vaovao Fampidirana {#troubleshooting}

| Torohevitra | Site Builder (Taloha) | Theme Builder (Vaovao) |
|---------|----------------------|-------------------|
| Fomba fametrahana | Form mifototra amin'ny Wizard | Fifanakalozana hevitra ataon'ny Agent |
| Famoronana Theme | Template voafetra | Scaffolding manokana |
| Design tokens | Fampidirana tanana | Fanapahan-kevitra mitarika |
| Fleksibilita | Safidy voafetra | azo ovaina |
| Fanavaozana ho avy | Tsy voatendry intsony | Voarakitra ao amin'ny site_brief |

## Fandresena Olana (Troubleshooting) {#next-steps}

**Tsy vita ny dingana fampidirana (onboarding)**
- Manomboha indray ny dingana: "Start the Theme Builder onboarding"
- Jereo raha vaovao ny fametrahanao WordPress
- Fantaro fa voafahana ny Setup Assistant agent

**Tsy ampiasaina ny site_brief an'ny fampiasanao**
- Fantaro fa afaka miditra amin'ny fitadidiana (memory) ilay agent ve ianao?
- Mangataha ny agent mba "hanamarina ny site brief-ko" (*recall my site brief*)
- Jereo raha voafahana ny fitadidiana ao amin'ny setings anao

**Tsy mitovy ny lohateny (theme) namboarina tamin'ny zavatra tiako**
- Ampiasao ny fahaizana Design System Aesthetics mba hanatsarana azy
- Mangataha ny agent mba "hanamboarina indray ny lohateny amin'ny [fanovana manokana]" (*regenerate the theme with [specific changes]*)
- Manova mivantana ny theme.json mba hahazoana fanaraha-maso marina

## Dingana manaraka

Aorian'ny fampiharana (onboarding) an'ny Theme Builder:

1. **Fantaro ny site anao**: Mandehana any amin'ny site anao mba hijerena ny lohateny vaovao
2. **Hanatsara ny famolavolana**: Ampiasao ny fahaizana Design System Aesthetics ho fanitsiana
3. **Ampidiro votoaty**: Manomboha ny fanamboarana ny votoatry ny site anao
4. **Jereo ny fahaiza-manao hafa**: Fantaro momba ny fahaiza-manao hafa toy ny scaffold-block-theme sy activate-theme
