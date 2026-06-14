---
title: Fluss tal l-onboarding għall-Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Flūdu Onboarding tal-Theme Builder

Superdav AI Agent v1.12.0 jiddu **flūdu onboarding tal-Theme Builder** li jgħadhom biex tgħmli theme kustom bl-block klawdini meta tistawli l-setup inizjali tiegħek. Dan jagħmel il-mode legacy Site Builder aktar flessibbli u assistiti min l-agent.

## X'għandu huwa il-Flūdu Onboarding tal-Theme Builder?

Il-flūdu onboarding tal-Theme Builder huwa wizard ta setup interattivi li:

- Jidirek għall-deċiedi tas-disjen (kuluri, tipografja, layout)
- Jikkapsola l-preferenzi vis-visual tal-sajtu tiegħek
- Jigħmli theme kustom bl-block li huwa adatta għall-ħtieġات tiegħek
- Jaċċerta l-theme awtomatik meta jkun kumplitt

Il-flūdu huwa mħondobb mill-**Setup Assistant agent**, li jistaqsi mistennijiet u jbni l-theme tiegħek grad by grad.

## Inċipju tal-Theme Builder Onboarding

### Setup Primarju (First-Run Setup)

Meta tistawli l-Superdav AI Agent fl-prima volta fuq installazzjoni WordPress nuova, tista' tgħleb:

```
Benġiet b’Superdav AI Agent!

X'għandek li tagħmel?
1. Iġbida theme kustom (Theme Builder)
2. Uża theme esistenti
3. Ttwalel setup għal prole
```

Iċekkja fuq **"Build a custom theme"** biex tidħol fl-flūdu onboarding tal-Theme Builder.

### Aċċettazzjoni Manuali (Manual Activation)

Tista' tistartilli l-Theme Builder onboarding fil-ħin li għandek biex tiġi riċievi:

```
"Start the Theme Builder onboarding"
```

jew

```
"Help me create a custom theme"
```

## Il-Istadi Onboarding

### Istadju 1: Selezzjoni tal-Mod

L-Setup Assistant agent jistaqsi dwar il-preferenza tiegħek:

```
Come tista' tgħmli l-theme tiegħek?
- Guida (Għalli nistaqsi mistennijiet u nbni għalik)
- Pratti (Għalli nistabbilok opzjonijiet u tiċċiedi)
```

**Mod Guida (Guided mode)** huwa mġieħed għal ħafna utenti; l-agent jagħmel rekomendazzjonijiet ta disjen bbażat fuq l-industrija tiegħek u l-objettivi tiegħek.

### Istadju 2: Spesifikazzjoni tal-Sajtu

Tista' tiġi tistaqsi dwar is-sajtu tiegħek:

- **Għda ta' siti**: E-commerce, blog, portfolio, SaaS, ecc.
- **L-aġġutant target**: Min jiddu l-visitanti tagħhom?
- **Vetri brand**: Colori primari u sekondarji (jew "m'għandx b'żmien")
- **Ton**: Professionali, kreattivi, giocosi, minimali, ecc.

Dan informazzjoni hija magħalna f il memoria ta **site_brief**, li l-agentijiet jreferuha fil-sessioni futuri.

### Idrass 3: Decisioni tal-Design System

L-agent giandu b'lek għipprovdija għall-selezzjoni tal-design tokens (elementi tal-design):

- **Tipografia**: Famija font (serif, sans-serif, monospace) u skala tal-għażla
- **Palette tal-kolori**: Colori primari, sekondarji, accent u neutrali
- **Spazji (Spacing)**: Layouts kompakti, normali jew spazjuabbli
- **Moviment (Motion)**: Animazzjonijiet u transizzjonijiet (jefit għal xi ħaġa)

### Idrass 4: Generazzjoni tal-Theme

L-agent Setup Assistant jgħinek li t-scaffoldi l-custom block theme tiegħek b'attrezzamenti kif segueh:

- `theme.json` li jinkludi kull design token tiegħek
- Template blocks għall-layout comuni (homepage, blog, contact)
- Stili tal-block kustom li jidduja mat-tnaqqis mal-design system tiegħek
- Metadata tal-theme u deklarazzjonijiet b'suport WordPress

### Idrass 5: Attivazzjoni u Verifikazzjoni

Il-theme jattivaw dwar l-auto, u tista' tara:

```
✓ Il-theme kustom tiegħek huwa live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visita is-sajtu tiegħek biex tara l-design nuwveli.
```

Immen l-meħdem, tista' tvisita is-sajtu tiegħek biex tverifika li l-theme jiddispleggi b'mod korrett.

## Spesifikazzjoni tal-Sajtu u Memoria site_brief

Dimandwar il-agent klini specifikazzjoni tal-sajtu tiegħek f kategoria memoria **site_brief**. Dan inkludi:

- Għda ta' siti u l-objettivi
- L-aġġutant target
- Vetri brand u ton
- Preferenzi tal-design
- Struttura tal-kontenut

### Perché il-site_brief importanti

F sessioni futuri, l-agentijiet jreferu l-site_brief tiegħek biex:

### Mantenere l-design koonsistenti durante i cambiamenti

* Suggerix caratteristiche allineati malajtembix siti.
* Fornisci raccomandazioni b'aħħar konnessjoni (context-aware).
* Evita li tikkunsidxi it-istgħaqlijiet ta setup.

### Viste il-site_brief tiegħek

Tista' tistaqsi lill-agent:

```
"Show me my site brief"
```

jew

```
"What do you know about my site?"
```

L-agent juri skopixxi siti tiegħek li għandu stoccjat.

## Customizzazzjoni Wara l-Onboarding

Wara li jkomplettu l-onboarding tal-Theme Builder, tista' tiġi:

### Uża l-Skill ta Aesthetics tal-Design System

Ixtieq raccomandazzjonijiet ta design:

```
"Refine the typography to be more modern"
```

jew

```
"Adjust the color palette to be warmer"
```

L-**Design System Aesthetics skill** tivveħquk fil-aħħar bizzjoni ta aġġuntamenti ta design.

### Edita theme.json Direttament

For advanced users, edita `/wp-content/themes/[theme-name]/theme.json` biex tista' tistaqsi:

* Color tokens
* Typography scales
* Spacing values
* Border and shadow definitions

### Crea Custom Block Templates

Uża l-WordPress block editor biex tista' tistaqsi template kustom għal:

* Homepage layouts
* Blog post pages
* Product pages
* Contact forms

## Konparazzjoni: Qwieter vs. Nuw

| Caratteristika | Site Builder (Legacy) | Theme Builder (Nuw) |
|---------|----------------------|-------------------|
| Metodu Setup | Form bbażat fuq wizard | Conversazzjoni guidata mill-agent |
| Generazzjoni tal-Theme | Template limitati | Scaffolding kustom |
| Design tokens | Iscritta manualment | Decisioni guidati |
| Flessibilità | Oprezzjonijiet fiks | Kustomizzabbli |
| Aġġuntamenti futuri | Ma jkun referenziati | Stoccjati f'site_brief |

## Problemi (Troubleshooting)

**L-onboarding flow ma jkomplettu**
* Ril-start il-flow: "Start the Theme Builder onboarding"
* Kontrolla li l-installazzjoni tal-WordPress tiegħek hija aggiornata
* Verifika li l-Setup Assistant agent huwa aktib

**Il mio `site_brief` m'utilizza mhux**
- Konferma li l-agent għandu l-access għall-memory (memoria)
- Ixtelli l-agent biex jgħid "recall my site brief" (riċorda il-brief tal-sit tiegħi)
- Kontrolla li l-memory aktiva f settings tiegħek

**Il-theme li jgħandu mhux jgħati mal-preferenzi tiegħi**
- Uża l-skill Design System Aesthetics biex tiffina (refine)
- Ixtelli l-agent biex jgħid "regenerate the theme with [specific changes]" (rigenera l-theme ma' [modifikazzjonijiet speċifi)
- Edita direktament il-`theme.json` għall-kontroll precisi

## Prossi Xtanx

Wara li tgħmli l-onboarding tal-Theme Builder:

1. **Verifika is-sit tiegħek**: Visita is-sit tiegħek biex tara l-theme ġdid
2. **Tiffina n-disign**: Uża l-skill Design System Aesthetics għall-aġustamenti
3. **Aggiungi kontent**: Incominci biex تبني l-kontent tal-sit tiegħek
4. **Esplora l-abbliżi (abilities)**: Iġbed informazzjoni dwar oħra l-abbliżi tal-agent bħal `scaffold-block-theme` u `activate-theme`
