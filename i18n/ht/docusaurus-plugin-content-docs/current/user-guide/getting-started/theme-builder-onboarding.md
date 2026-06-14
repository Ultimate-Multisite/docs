---
title: Flè de Inisyalizasyon Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Fluxyal Onboarding Flow pou Theme Builder

Superdav AI Agent v1.12.0 bay yon **fluxyal onboarding flow** ki ede w kreye yon custom block theme pandan etap enpòtan an ou kòmanse. Sa a ranplase mod site legacy la ak yon apwòch ki pi fleksib, ki gen asistans nan agent la.

## Ki sa se Fluxyal Onboarding Flow la?

Fluxyal onboarding flow la se yon wizard setup interaktif ki:

- Pran w lidè atravè desizyon konsepsyon (koulè, tipografi, layout)
- Kòmanse identite vizyèl sit ou a
- Kreye yon custom block theme ki adapte pou bezwen ou yo
- Aktive theme a otomatikman lè li fini

Flow la pouse pa **Setup Assistant agent** la, ki poze kesyon klarifikasyon ak bati theme ou etap pa etap.

## Kòman kòmanse Fluxyal Onboarding la

### Setup Premye Fwa (First-Run Setup)

Lè w lanse Superdav AI Agent pou premye fwa sou yon nou WordPress installation, ou pral wè sa a:

```
Bienvenue nan Superdav AI Agent!

Kisa ou ta renmen fè?
1. Bati yon theme custom (Theme Builder)
2. Itilize yon theme ki egziste deja
3. Pase setup pou kounye a
```

Chwazi **"Bati yon theme custom"** pou antre nan fluxyal onboarding flow la.

### Aktive Manmanèl (Manual Activation)

Ou ka kòmanse fluxyal onboarding la nenpòt lè ou mande:

```
"Start the Theme Builder onboarding"
```

oswa

```
"Help me create a custom theme"
```

## Etap Onboarding la

### Etap 1: Chwazi Mod (Mode Selection)

Setup Assistant agent la ap poze sou prefere ou:

```
Kijan ou ta renmen bati theme ou a?
- Lidè (Mwen pral poze kesyon epi mwen pral bati li pou ou)
- Pratik (Mwen pral montre w opsyon yo e ou deside)
```

**Guided mode** la rekouvè pou pi gwo itilizatè; agent la fè rekòmande konsepsyon baze sou endistri ak objektif ou.

### Etap 2: Spesifikasyon Sit la (Site Specification)

Ou pral mande sou sit ou a:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, etc. (Objekt sit la pou fè)
- **Target audience**: Who are your visitors? (Ki moun ki vizite sit ou a?)
- **Brand colors**: Primary and secondary colors (or "I'm not sure") (Koulè mark: koulè prensipal ak sekondè (oswa "Mwen pa sèten"))
- **Tone**: Professional, creative, playful, minimal, etc. (Ton: Pwofesyonèl, kreyatif, jwesi, minimal, elatriye)

Enfòmasyon sa a se estoke nan memwa **site_brief** ou a, ki genyen agent yo referansye nan sesyon kap vini yo.

### Etap 3: Desizyon Sistèm Konpòtman (Design System Decisions)

Agent la ap gide ou atravè chwazi token konsepsyon an:

- **Typography**: Font family (serif, sans-serif, monospace) ak eskala gwosè
- **Color palette**: Koulè prensipal, sekondè, aksan, ak koulè nòmal
- **Spacing**: Layout ki kout, normal, oswa espas la gwo
- **Motion**: Animasyon ak transisyon (si ou vle)

### Etap 4: Jenerasyon Thème (Theme Generation)

Agent Setup Assistant la ap bay ou yon thèm blòk koutmè ou a avèk:

- `theme.json` ki gen tout token konsepsyon ou yo
- Template blòk pou layout komen (page kay, blog, kontak)
- Estil blòk koutmè ki koresponn ak sistèm konsepsyon ou an
- Metadata thèm ak deklarasyon sipò WordPress

### Etap 5: Aktivasyon ak Verifikasyon (Activation and Verification)

Thèm nan ap aktive otomatikman, epi ou pral wè sa a:

```
✓ Thèm koutmè ou la kounye a viv!
  Non thèm: Thème [Non Sit Ou]
  Koulè: [Prensipal] / [Sekondè]
  Typography: [Font Family]

  Vizite sit ou pou w wè konsepsyon nou yo.
```

Lè sa a, ou ka ale vizite sit ou pou w verifye ke thèm nan ap montre kòrèk.

## Spesifikasyon Sit ak Memwa site_brief (Site Specification and site_brief Memory)

Pandyan ou ap fè onboarding la, agent la ap pran spesifikasyon sit ou an nan kategori memwa **site_brief**. Sa gen ladan:

- Objekt sit la ak objekt yo
- Piblisite ou a (Target audience)
- Koulè mark ak ton
- Pwèfans konsepsyon
- Estrikti kontni

### Poukisa site_brief enpòtan

Nan sesyon kap vini yo, agent yo ap referansye site_brief ou a pou:

### Konsolwayaj Site Brief ou Vizyè Site_brief la

Ou ka mande ajan an:

```
"Montre m site brief mwen"
```

oswa

```
"Ki sa ou konnen sou sit mwen?"
```

Ajan an ap montre spesifikasyon site ou ki te estoke.

## Kòmanize Apre Onboarding la

Malgre ke onboarding Theme Builder fini, ou ka:

### Itilize Konpetans Design System Aesthetics Skill

Mandate amelyorasyon design:

```
"Amelyore tipografi a pou li pi modèn"
```

oswa

```
"Ajuste palèt koulè a pou li pi chofe"
```

**Design System Aesthetics skill** ap gide ou nan amelyorasyon design ki byen detaye.

### Edite theme.json dirèkteman

Pou itilizat avanse, edite `/wp-content/themes/[theme-name]/theme.json` pou ajiste:

- Color tokens
- Typography scales
- Spacing values
- Border ak shadow definitions

### Kreye Custom Block Templates

Itilize WordPress block editor la pou kreye template koutim pou:

- Layouts paj kay (Homepage layouts)
- Paj post blog (Blog post pages)
- Paj pwodwi (Product pages)
- Fòm kontak (Contact forms)

## Konparezon: Anvan ak Apre Onboarding la

| Caractéristique | Site Builder (Anvan) | Theme Builder (Apre) |
|---------|----------------------|-------------------|
| Metòd Setup | Fòm ki baze sou Wizard | Konvèsasyon ki gide pa Ajan an |
| Jenere Tema | Template limitatif | Scaffolding koutim |
| Design tokens | Entri manèl | Desizyon ki gide |
| Fleksibilite | Opsyon fiks | Koutimabilite |
| Update nan lavni | Pa refi | Estoke nan site_brief |

## Resous Solisyon (Troubleshooting)

**Onboarding la pa fini**
- Rete kòmanse: "Start the Theme Builder onboarding"
- Kontwe ke enstalasyon WordPress ou a gen dènye vèsyon
- Verify ke Setup Assistant agent la aktif

**Mon site_brief n'est pas utilisé**
- Konfime ke l'agent gen aksè a memwa (memory)
- Demande an l'agent pou li "recall my site brief"
- Kontwe ke memwa la active nan tout paramèt ou

**Tema ki te jene pa koresponn ak preferans mwen**
- Itilize skill Design System Aesthetics pou amelyore li
- Demande an l'agent pou li "regenerate the theme with [specific changes]"
- Edite theme.json dirèkteman pou kontwole byen pres

## Prochè Etapes (Next Steps)

Malgre ou fin konplè onboarding Theme Builder la:

1. **Verifie sit ou an**: Ale sou sit ou pou w wè tema ki nou genyen
2. **Ajuste konsepsyon an**: Itilize skill Design System Aesthetics pou fè chanjman
3. **Ajoute kontni**: Kòmanse bati kontni sit ou a
4. **Eksplore kapasite yo**: Aprann sou lòt kapasite agent tankou scaffold-block-theme ak activate-theme
