---
title: Spesifíocht site Skill
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Fíneadh Spraoi Site {#site-specification-skill}

Is an **Site Specification skill** (Fíneadh Spraoi Site) curteas a chuid ar fáil chun teachtaireacht, úsáidóra agus teachtaireacht chuid site a laigh a gcurt. Tá an t-aithris seo ag cur isteach i **site_brief** (fíneadh spraoi site), a bhíonn ag na agents ag iarraidh ar aghaidh tréimhseanna chun cúramocht a bheith cinnte agus ag teachtaireacht a bheith ag fáil ar chuid context.

## Cad é Site Specification? {#what-is-site-specification}

Is Site Specification an chur chun feidhm a dhéanamh ar:

- **Spraoi site**: Cad a dhéanann an site agus cúramh a bhaineann go bhfuil sé ag teachtaireacht
- **Úsáidór teachtaireachta (Target audience)**: Conas a bhíonn siad ag teachtaireacht ar an site agus conas a bhíonn siad ag teachtaireacht agat
- **Teachtaireacht chuid (Brand identity)**: Do chroime, tónal agus stíl foirmiúil
- **Spraoi uile (Business goals)**: Cad a bheith cinnte ar an site agat
- **Struitú curtha (Content structure)**: Conas a bhíonn an site ag curtha

Bíonn an spraoi seo ag teachtaireacht agat mar **site_brief**, un curtha cinnte a bhíonn na agents ag úsáid chun an context chuid site a bheith ag fáil.

## Cad a bheith ag úsáid Site Specification? {#why-use-site-specification}

### Cúramocht ar tréimhseanna (Consistency Across Sessions) {#consistency-across-sessions}

Gan site_brief, beidh tú ag réiteach an spraoi site agat mar chomh cheana féin ag cur isteach ar chuid context ar chuid site ar mhothú. Leat é sin, beidh na agents ag fáil agad go léir:

- Spraoi agus úsáidóra a chuid site
- Chroime agus tónal chuid
- Struitú curtha chuid
- Spraoi uile agat

### Riec a bheith níos fearr (Better Recommendations) {#better-recommendations}

Bíonn na agents ag úsáid site_brief agat chun:

- Fáil ar feidhm atá ag teachtaireacht chuid site
- Teachtaireachtaí curtha a chur ar fáil a bhaineann le do spraoi
- Déanacha a chur ar fáil a bheith cinnte le do teachtaireacht chuid
- An t-aithris feidhm atá ag teachtaireacht agat

### Chúramocht a dhéanamh níos tapa (Faster Onboarding) {#faster-onboarding}

Beidh na agents nua (mar áit na agents ar mhothú nua) ag fáil an t-aithris go tapa ag cur isteach mar chleachta site_brief agat chun spriocais a chur ar fáil mar aistéar ag gcuir léi chruinneacha.

## Déanadh Site Specification {#initiating-site-specification}

### Ag dlú Onboarding Theme Builder (During Theme Builder Onboarding) {#during-theme-builder-onboarding}

Bíonn an Site Specification skill ag cur isteach go tapa ag **onboarding flow** na **Theme Builder**. Beidh an agent Setup Assistant ag iarraidh iarrachtaí agus ag cur site_brief agat.

### Déanadh le chéile (Manual Initiation) {#manual-initiation}

Leat anseo an Site Specification ag dul:

```
"Déan mé spesifikeacht an mo site"
```

nó

```
"Céad mí a chur ar fáil leat an brief site"
```

## An Proces Site Specification {#the-site-specification-process}

### Step 1: An Taisceán an Site (Site Purpose) {#step-1-site-purpose}

Níl an agent ag iarraidh:

```
Cad é an t-aistriú príomhaigh an site?
- Store e-commerce
- Blog nó site iadromaithe
- Portfolio nó sgaoi
- Application SaaS
- Comhoole nó forum
- Áirítear eile: [dligite]
```

Is féidir leat a chomhacht a chur ar fáil nó aistriú an t-aistriú duit.

### Step 2: An Meánachas (Target Audience) {#step-2-target-audience}

```
Cad é an meánachas príomhaigh agat?
- Uachtarach / seomraí
- Professionals uachtarach
- Déveltar / úsáidte technical
- Studént / oideúiteoirí
- Áirítear eile: [dligite]

Cé an t-aistriúcháin chomhartha a bhaineann leis?
```

### Step 3: An Chuid Brand (Brand Identity) {#step-3-brand-identity}

```
Cad é na coluracht a bhaineann le do brand?
- Colur príomhaigh: [cur chuig léiri nó code hex]
- Colur secundach: [cur chuig léiri nó code hex]
- Colur chuid: [fola]

Conas a chur ar fáil do tone an brand?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### Step 4: Teastáil Business (Business Goals) {#step-4-business-goals}

```
Cad é an saolais an t-aistriúcháin duit?
- Áirítear lead
- Aistriú príobháid
- Déan comhooleacht
- Spás na héacht
- Déan athbhreithniú
- Áirítear eile: [dligite]

Cé an t-aistriúchán príomhaigh agat?
- Revenue (Teangacht)
- User engagement (Comhghníomhú úsáideoirí)
- Content reach (Spás na héacht an chontaint)
- Conversions (Athbhreithniú)
- Áirítear eile
```

### Step 5: Struchtúr An Chontaint (Content Structure) {#step-5-content-structure}

```
Conas a bhaineann do chontaint?
- Flat (cá bhfuil an curteacha ag curteacha éifeachtach)
- Hierarchical (catagóirí agus subcatagóirí)
- Chronological (style blog)
- Product-based (catalog)
- Áirítear eile: [dligite]

Cé na tairgseacha chontaint a bhaineann leat?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Áirítear eile
```

## An Meamhras site_brief (Your site_brief Memory) {#your-sitebrief-memory}

Tar éis an Site Specification, tá do chuid fadaí ag cur isteach mar **site_brief** i mheamhras an agent. Is é seo curteacha stráta ceanglaíonn:

## Fhéadadh agus Athchunadh an Site_brief {#viewing-and-updating-your-sitebrief}

### Léigh an Site_brief {#view-your-sitebrief}

Ceannais ar an agent:

```
"Show me my site brief"
```

nó

```
"What do you know about my site?"
```

Béidh an agent ag dangreáil an spesification atá agat.

### Athchunadh an Site_brief {#update-your-sitebrief}

Má tá an t-site agat a bhfáthach, leat é a athrú:

```
"Update my site brief: we're now targeting B2B customers"
```

nó

```
"Refresh my site specification"
```

Is é seo ag réiteáil ar an Site Specification skill ag úsáid do chuid fada agus sprioc as gcomhthabhairt.

## Conas a Uileann na Agents a Uileann an Site_brief {#how-agents-use-sitebrief}

### Rialacha Déanach {#design-recommendations}

Nuair a gcurann tú thar aistriúcháin déanach, beidh na agents ag cur isteach ar an site_brief:

```
Tú: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Sugstail Físhiau {#feature-suggestions}

Taispeáin na agents físhiau ag cur isteach le haghaidh do spriocanna:

```
Tú: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Struchtúr Contant {#content-structure}

Taispeáin na agents struchtúr contant ag cur isteach ar an sprioc agat:

In: "Conas anor é a bhlog mo?"
Agent: "Nuair aistriú le catolog rialta le bhlog, tá mé ag curte a chur i bhfint an postanna ar chathair príobháideach agus a chur in áit 'guidteacha stála' a thaispeáin pearsanaí go leim-spar."

## Beasach Árasta {#best-practices}

### Bánach Déanach (Be Specific) {#be-specific}

An taitin "faoiúla ginearálta" níl go bhfuil an-dúil agat, ach díonraigh ar chuid fháil:

- ✓ "Féileanna 25-45, ag iarraidh modaí sùilte"
- ✗ "Céad sin"

### Athchunnamh Go Léimeann (Update Regularly) {#update-regularly}

Mar a bhíonn an site agat ag athrú, athrúchais an `site_brief` duit:

- Nuair a bhíonn tú ag athrú ar fháil nua
- Nuair a bhíonn tú ag iarraidh nua lineanna féile
- Nuair a tharrfhaíonn do chuid chuid fháil
- Nuair a tharrfhaíonn do gníomhartha uile

### Use Terminology Cothromach (Use Consistent Terminology) {#use-consistent-terminology}

Use an amair sin ar shéasanna:

- ✓ Déan "sùilte sùilte" go léir (ni "sùilte eco-friendly" agus "píobail gréine")
- ✓ Cuir do chuid fháil i bhfint an amair sin go leim-spar

### Includ an Context (Include Context) {#include-context}

Cuir curtha chuid féin a thaispeáin ar chuid fháil a dhéanann do chuid fháil:

- "Táimid ag teacht ar phrofeisionail a bhíonn ag iarraidh chuid ardán ná pearsantais"
- "Tá an t-aistriú mochtúla agus tá sé ag iarraidh díonrachas nua"
- "Tá mé ag dul ar aghaidh mar startup a bhíodh ag curtha, mar seo ag curte soluinaí leatach"

## Rincán le Chléireacht Theme Builder Onboarding {#relationship-to-theme-builder-onboarding}

Tá an foirmiar Site Specification curtha i **Theme Builder onboarding flow**. Nuair a tharrfhaíonn tú an onboarding, tá an `site_brief` agat ag curtha go mbeartas le curte chuid fháil a chur in áit.

Is féidir leat hefyd a dhriail Site Specification go hiomlán má tá tú ag iarraidh:

- Athchunnamh do specification tar éis an curte chuid féin
- Athchunnamh do site_brief mar a tharrfhaíonn an site agat
- Creidhtigh specification leatach ar aghaidh ar an t-aistriú Theme Builder

## Treo Chúrtacha (Troubleshooting) {#troubleshooting}

**Níl mo `site_brief` ag úsáid**
- Cuir do chuid féin a fháil ar fáil i bhfint an meagair
- Cuir do chuid féin a chur in áit "recall my site brief"
- Chléir go bhfuil an meagair curtha ar fáil i do chuid rócháin

**Tá mé ag cur isteach le nualach an site\_brief**
- Cé acuán: "Clár mo site brief agus slán an t-amach"
- Ansin déan Site Specification sé de ath bhfáineadh

**Tá an agent ag déanamh curteacha a bhíonn níl ag aiteann le mo site\_brief**
- Cé acuán: "Roinn mo site brief"
- Athraigh do site\_brief má tá sé ag cur isteach
- Déan curtha níos mó de chuid context i do rithiechtaí

## An t-amachas seo {#next-steps}

Tar éis tríúchán an Site Specification:

1. **Use Theme Builder**: Déan theme a bhuaite ar an site\_brief atá agat
2. **Refine Design**: Use Design System Aesthetics skill chun cur isteach ar na rannpháirt de chuid design le haghaidh curteacha ardchúramach
3. **Plan Content**: Rithiechtaí do agents chun curteacha struchtúr an t-amach a bheith agat
4. **Build Features**: Rithiechtaí chun curteacha a bheith ag curteacha ar chuid rialta

---
