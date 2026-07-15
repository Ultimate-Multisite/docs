---
title: Scealta a bhfuil an talamh chomhartha.
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Skills Aware de Theme

An Superdav AI Agent v1.10.0 chuireann séar nua skills built-in a bhfeolaí, a bhfuil an talamh WordPress atá agat ag obair ar na hionta. Teastaíonn na skills seo curte ag teacht chun cinn go mór agus a bheith ag fáil iarrachtaí agus cúaitheachta áitigh a shonraithe ar chuid ardán agus feichar na hionta.

## Cad é Skills Aware de Theme? {#what-are-theme-aware-skills}

Skills aware de theme is gnáthacha knowledge bases agus set tool atá curte ag an AI assistant chun cinn go mór mar a bhaineann le an talamh WordPress atá agat ar an t-am. Nuair a bhíonn tú ag athrú i hiontaí, tá na skills atá ar fáil ag an assistant ag athrú go mór — níl aon cheangacht manachain ag curte.

Is éard skill chuireann:

- **Dóchas de theme** — iarrachtaí ar chuid úsáid agus cúaitheacht an talamh
- **Réimseanna Block agus pattern** — block, patterns, agus oifneachtaí design atá ar fáil
- **Eileamanna cúaitheachta** — code snippets agus polaí cúaitheachta chun teastais a bheith ag curte
- **Best practices** — curteacha ar ardán an talamh agus ar chuid athrú

## Skills Aware At Ár Fáil {#available-theme-aware-skills}

### Block Themes {#block-themes}

**At áirítear:** Hiontaí atá ag úsáid ar ardán block-based (Full Site Editing) de WordPress.

Céadfaidh an skill Block Themes a chur chun cinn go mór ar:

- Creacht agus curte templates a bheith ag athrú ag úsáid an editor block
- Áisiú le patterns block agus blocks réusabail
- Cúaitheacht stail ghluthúil agus settings theme.json
- Úsáid deatachanna theme agus variations
- Creacht patterns block cúaitheachta ar chuid site

**Ag curte go mór nuair:** Tá an talamh atá agat ag obair ag fáil mar block theme (tá ag curte `block-templates`).

### Classic Themes {#classic-themes}

**At áirítear:** Hiontaí WordPress traditionla atá ag úsáid ar PHP templates agus ar an editor classic.

Céadfaidh an skill Classic Themes a chur chun cinn go mór ar:

Co leat ag an tairm ar fáil:

* Déan leat le fileachtail PHP agus hooks
* Athrú an foirme temh (theme) trí Customizer
* Uirlisí ábhar agus sidebars a úsáid
* Déan díriú ar CSS agus dévelament child theme
* Féachaint ar an chuid féin de temh agus tagraitheacht

**Ag fáil go dtí an t-am:** Má tá an temh atá agat ag an t-am (non-block) – is é seo an t-am a bhíonn agat.

### Kadence Blocks {#kadence-blocks}

**Ag fáil ar:** Sites a úsáid plugin Kadence Blocks chun díriú ar bloc-based design leat.

Céadfaidh an skill Kadence Blocks a chur i bhfeicimní ar:

* Uirlisí ar liosta bloc advanced de Kadence (Hero, Testimonials, Pricing, etc.)
* Déan chuidaradh ar settings agus oiriúnach responsive de blocanna Kadence
* Déan leat layout-a custom le grid agus container blocks de Kadence
* Féachaint ar an t-amhrán Kadence le teachtaireachtaí (plugins) agus tool-aí a bhaineann leis
* Uirlisí ar an chuid féin de design agus presets de Kadence

**Ag fáil go dtí an t-am:** Má tá plugin Kadence Blocks atá ar do site.

### Kadence Theme {#kadence-theme}

**Ag fáil ar:** Sites a úsáid an temh Kadence chun díriú ar bloc-based design agus chuidaradh leat.

Céadfaidh an skill Kadence Theme a chur i bhfeicimní ar:

* Déan chuidaradh ar an temh Kadence trí global styles agus theme.json
* Uirlisí ar an t-amhrán bloc agus templates atá ag Kadence
* Déan chuidaradh ar settings agus oiriúnach de temh Kadence
* Déan leat design-a custom le system de design de Kadence
* Féachaint ar an t-amhrán Kadence le teachtaireachtaí (plugins) agus tool-aí populara

**Ag fáil go dtí an t-am:** Má tá an temh Kadence atá ag an t-am.

## Conas a bhfaidh Skills a chur in áit {#how-skills-are-selected}

Bíonn an astir (assistant) ag féachaint ar an temh atá agat agus ar na pluginneatacha atá atá ar chomhlaoi ar mhíne ar chomhthéacs. Má tá skill atá ag tairm ar fáil a bhaineann leat leis an temh, baillíonn sé go dtí chomhthéacs an astir go dtí an t-am. Níl tú ag iarraidh é a chruinneáil nó athrú skills manualmente.

### Multiple Skills {#multiple-skills}

Má táiméad ag curtha ar an sinite (mar example, má tá Cadence Blocks agus Kadence Theme áitint), tá an astúid ag cur fáil ar gach scéal atá ag curtha. Is féidir leis a chur ar fáil a chuid de chomhthéacsí ó chomhthéacs na gceannaithe seo.

### Déanamh Athchúntais (Switching Themes) {#switching-themes}

Nuair a thaispeánat an t-theme atá agat, tá na scileanna atá ag cur fáil ar fáil ar an sinas ar an cur síos ar an ceadchaí. Mar example:

1. Tá tú ag úsáid un theme bloc le an scile **Block Themes** áitint.
2. Taispeánat go dtí un theme classic.
3. Ar an cur síos seo, tá an scile **Classic Themes** ag cur fáil ar fáil go dtí, agus níl aon scile **Block Themes** ar fáil anois.

## Uirlis Scileanna Atá Ag Cur Síos (Using Theme-Aware Skills) {#using-theme-aware-skills}

Leat a bheith ag úsáid un scile atá ag cur fáil ar fáil, déan go bhfuil tú ag cur fáil ar an chuid de do ardán i gcaint. Beidh an astúid ag cur fáil ar an cur síos atá ag cur fáil ar fáil go dtí.

### Eagraíochta Prompts (Example Prompts) {#example-prompts}

**Do Block Themes:**
> "Creoliad un seachtain hero le imáir backgound agus téacs ceart áitint a bheith ag bloc patterns."

**Do Classic Themes:**
> "Add an ardán widget custom go dtí an sidebar ag tine theme child."

**Do Kadence Blocks:**
> "Bailís un seachtain testimonials ag úsáid an block Kadence Testimonials."

**Do Kadence Theme:**
> "Athchúntais ar an ardán header agus ar an stíl na menu navigation."

Beidh an astúid ag cur fáil ar chuid de do theme agus ar na pluginí atá áitint.
