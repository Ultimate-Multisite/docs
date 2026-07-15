---
title: Fluach Initiúla Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Flow Onboarding an Theme Builder

Superdav AI Agent v1.12.0 leagann cur **flow onboarding Theme Builder** a thugann leat faoi chuid theme custom ag fáilteachúil chun bhfáthach a chur i bhfeidhm ag an t-amhlaigh ar an chuid féachrúil. Is é seo a shatann an mod site builder uair a bhí an t-amlaigh, le curte a bheith níos foirmeacha agus ag curte a bheith ag an t-amhlaigh.

## Cad é an Flow Onboarding Theme Builder? {#what-is-the-theme-builder-onboarding-flow}

Is é an flow onboarding Theme Builder un chuid wizard féachrúil a bhfuil na rathanna seo:

- Ag cur isteach tú i bhfeidhm ar na cúiseanna de chuid d'fháil (cailín, typography, leas)
- A chur in iad faoi chuid fáilteachtais an site
- A ginearálann un chuid theme custom a thugann ar do chuid raointe
- A chruinneadh an theme go mbeartas nuair a bhíonn sé de dhuit

Tá an flow seo ag curte ag an **Setup Assistant agent**, a bhfuil cúiseanna a chur iad agus a ginearálann do theme go mbeartas.

## Déan an Flow Onboarding Theme Builder {#starting-the-theme-builder-onboarding}

### Setup ar an Chuid Atama {#first-run-setup}

Nuair a bhíonn Superdav AI Agent ag dul ar chuid WordPress nua, beidh tú ag fheiceáil:

```
Fáilteán chuig Superdav AI Agent!

Cad a bhfuil tú ag déanamh?
1. Déan theme custom (Theme Builder)
2. Use an theme atá agat
3. Slánadh an setup ar aghaidh anois
```

Taispeáin **"Déan theme custom"** chun an flow onboarding Theme Builder a chuid féachrúil a fháil.

### Atama Manual {#manual-activation}

Is féidir leat a thabhairt an flow onboarding Theme Builder ag aon am chun é a chur i bhfeidhm ag curte:

```
"Start the Theme Builder onboarding"
```

nu

```
"Help me create a custom theme"
```

## An Cúseqanna Onboarding {#the-onboarding-steps}

### Step 1: Seachtain Déan {#step-1-mode-selection}

Taispeáin an Setup Assistant agent faoi do chuid fáilteacht:

```
Conas a chur i bhfeidhm do theme?
- Curte (Beidh mé ag cur cúiseanna agus beidh mé ag é a chur chun cinn leat)
- Hands-on (Beidh mé ag tairgseán na oifige, agus beidh tú ag curt)
```

**Curte mode** is féidir é a chur ar fáil do chuid úsáidorachtais; déan an agent curte a chur chun cinn ar bhealach a thugann tú faoi do ardal agus do raointe.

### Step 2: Cuidán Site {#step-2-site-specification}

Beidh tú ag iarraidh cúiseanna faoi do site:

- **Cúramacht an site**: E-commerce, blog, portfolio, SaaS, etc.
- **Audience a bhfaidh tú ar an sin**: Conas a bheith do chuid ar an sin?
- **Colranna branda**: Colur príomhaidh agus colur deacair (nó "ním tábhachtúil")
- **Téanaíocht**: Professional, créoleach, playful, minimal, os caite.

Tá an t-aithris seo ag teacht i **site_brief** memory, a bhfaidh na agentacha a bheith ag cur isteach ar feadh seisiúin ach ansin.

### Step 3: Cothrom Chéadtaí Design System {#step-3-design-system-decisions}

Bíonn an agent ag cur chuid ar do chomhthéacsanna design (design tokens):

- **Téanaíocht**: Fáilte (serif, sans-serif, monospace) agus scale tábla
- **Colranna**: Príomhaidh, deacair, accent, agus colur caite
- **Spéisiúla**: Layouts compact, normal, nó spóiseach
- **Motion**: Animation agus transitions (má tá tú ag cur isteach)

### Step 4: Glacadh Teama {#step-4-theme-generation}

Bíonn an agent Setup Assistant ag cur chuid ar do theme custom le:

- `theme.json` a bhfuil gach design token agat
- Template blocks do layoutí common (homepage, blog, contact)
- Stailí block chun cinnitheamh le do design system
- Metadata theme agus deacair support WordPress

### Step 5: Athchúis agus Cathrachadh {#step-5-activation-and-verification}

Bíonn an theme ag athchúis go mbeidh tú ag fheiceáil:

```
✓ Tá an theme custom agat ar fáil anois!
  Teama: Theme [Tainm Site]
  Coluranna: [Príomhaidh] / [Deacair]
  Téanaíocht: [Fáilte]

  Fáilte ar do site chun design nua a fheiceáil.
```

Ansin leat is féidir leat cur isteach ar do site chun an theme a bheith ag déanamh go ceart a athbhreithniú.

## Cothrom Site agus site_brief Memory {#site-specification-and-sitebrief-memory}

Agusán áirítear an agent do chothrom site agat i gcuid category **site_brief memory**. Is é seo ag cur isteach:

- Cothrom an site agus na golema
- Audience a bhfaidh tú ar an sin
- Coluranna branda agus téanaíocht
- Spéisiúla design
- Struchtúr an curtha

### Conas Tá site_brief Ag Duine {#why-sitebrief-matters}

Agusán ach ansin, ag cur isteach ar do site_brief chun:

- Déanann an díriúch ar fháil go léir na mothúcháin
- Déan tú féin feichar iarrachtaí a bheith ag cur chun cinn le haghaidh do site
- Cuir tú rathúil ag cur chun cinn ag cur isteach an talamhán (context-aware recommendations)
- Déan tú féin fáil an tascáil ar chuid iarrachtaí cur isteach

### Aileamh ar an site_brief {#viewing-your-sitebrief}

Is féidir leat a gcur áit:

```
"Show me my site brief"
```

nó

```
"What do you know about my site?"
```

Beidh an agent ag tairiscint an spesifike site atá ag cur isteach.

## Déanán ar an t-amach tar éis an onbórdáil (Onboarding) {#customizing-after-onboarding}

Tar éis a thaispeadáin an Theme Builder a deireann, leat féidir leat:

### Aistriú le Fíneadh System Aesthetics Skill {#use-the-design-system-aesthetics-skill}

Rfogais rathúil ar na chuid fíneadh:

```
"Refine the typography to be more modern"
```

nó

```
"Adjust the color palette to be warmer"
```

Bíonn an **Design System Aesthetics skill** ag cur tú leat isteach athrúchais ar fáil.

### Déanán ar theme.json go díreach {#edit-themejson-directly}

Do chuid úsáidheoirí ardchúramach, déanán ar `/wp-content/themes/[theme-name]/theme.json` chun athrú a dhéanamh ar:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Creoliad Teampadanna Bloc Custom {#create-custom-block-templates}

Use an editor bloc WordPress chun teampadanna custom a chur i bhfeidm do:

- Layouts an Homepage
- Peispáí blog
- Peispáí rialta (Product pages)
- Fomracha contact

## Déanán: An ulaigh vs. An nua onbórdáil {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Form ar fáil (Wizard-based) | Caint ag an agent (Agent-guided conversation) |
| Theme generation | Teampadanna cur isteach (Limited templates) | Scaffolding custom (Custom scaffolding) |
| Design tokens | Cur isteach manualmente (Manual entry) | Déanán ag cur tú leat isteach (Guided decisions) |
| Flexibility | Opciones a chluainn (Fixed options) | Athrúchais ar fáil (Customizable) |
| Future updates | Ní bhfhéidir a chur in áit (Not referenced) | Atá cur isteach i site_brief |

## Déanán: Treoicíocht {#troubleshooting}

**Ní chluainn an onbórdáil amach**
- Athrocht an flow: "Start the Theme Builder onboarding"
- Déan tú féin fáil ar an t-amach a bhaineann le do WordPress installation a bheith ag cur isteach (up to date)
- Déan tú féin fáil ar an agent Setup Assistant a bheith ag cur isteach

**Ní bhíonn an mo site_brief a úsáid**
- Féach ar an t-agent má tá cur chuig an meagair (memory)
- Cuir isteach ag an t-agent go dtí "recall my site brief"
- Chnail an t-meagair (memory) in áit na stóir (settings)

**Ndiú an theme a bhainn ní a bhíonn ag cur chuig mo chuid fáilte**
- Use Design System Aesthetics skill chun é a glanadh (refine)
- Cuir isteach ag an t-agent go dtí "regenerate the theme with [specific changes]"
- Edit theme.json go díreach chun cur chuig an t-iontú (control)

## An t-aontúcháin Taispeánta (Next Steps) {#next-steps}

Tar éis an t-onraithe (onboarding) deatach ar Theme Builder:

1. **Féach ar an site:** Bhéal go dtí an site a fheiceáil an theme nua
2. **Glánadh an dúnadh:** Use Design System Aesthetics skill chun cur chuig é a athrú
3. **Add an curtha:** Déan an t-amháil (content) deatach ar do site
4. **Féach ar na cúilte:** Déan cinnte ag cur chuig cur chuige eile mar scaffold-block-theme agus activate-theme
