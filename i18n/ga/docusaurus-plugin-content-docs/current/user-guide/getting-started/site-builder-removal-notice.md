---
title: An naiscint an t-amach ar fáil ar fáil an chuid de Bhailte Site
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Notice Removal Mode Site Builder

**Bhaileadh an Site Builder mode a bhaint ar Superdav AI Agent v1.12.0.** Máthair thuair a bhí ag úsáid de Site Builder mode, is féidir leat a bheith ag teacht (migrate) go **Setup Assistant agent** chun themeanna agus curthaiteas site a dhéanamh.

## Cad a Bháir?

### Site Builder Mode (An Ulaidh)

Site Builder mode bhí chuid fáilteoir-based interface ar:

- Création de siteanna ó template
- Cúramharteas curthaiteas bunaithe
- Choimselt ar theme
- Curthaiteas curthaiteas áithreach

### Cad a Bhail Éad?

An **Setup Assistant agent** a chiallaíonn an curthaiteas Site Builder le:

- Cúramharteas áthrócháin, ag teacht an agent
- Oibríochtaí máireamh níos fearr ar themeanna
- Iomlánú le Theme Builder onboarding
- Meamú site_brief a bhaint ar fáil do seisiúin tapaidh

## Má Bhair Bha Ag Úsáid de Site Builder Mode

### Tá Siteanna Maith

- Siteanna a chur i ngníomh ag Site Builder mode a bhí ag dul go léir
- Níl aon déan data nó curthaiteas site
- Is féidir leat an curthaiteas site a dhéanamh ar bhealach niamar

### Teacht (Migrate) go Setup Assistant Agent

Do curthaiteas site nua nó thabhairtacha themeanna, usaigh an Setup Assistant agent:

```
"Help me set up a new site"
```

nó

```
"Start the Theme Builder onboarding"
```

Is é an Setup Assistant agent ag teacht an curthaiteas seo le fáilteoir níos fearr.

## Aistriú: Site Builder vs. Setup Assistant

| Feature | Site Builder (Bhaint) | Setup Assistant (Nua) |
|---------|----------------------|----------------------|
| Curthaiteas | Form Wizard | Caint an Agent |
| Choimselt ar Theme | Template Predefined | Création Custom |
| Máireamh | Oibríochtaí Maithluaithe | System Design Oibríochta |
| Site Brief | Níl ag teacht | Meamú a bhaint ar fáil |
| Seisiúin Tapaidh | Curthaiteas Léimeann | Use site_brief a bhaint ar fáil |
| Fáilteoir | Workflow Físe | Caint Athrócháin |

## Teacht (Migrate) go Setup Assistant Agent

### Do Siteanna Nua

Anu an Site Builder mode a bheith:

1. Rian: "Déan mé a chur ar fáil site nua"
2. Beidh an Agent Setup Assistant ag cur chun cinn tú trí:
   - An t-amach agus na ríomhpháirtí an site
   - An t-amach ar an ghrúpa uile
   - An t-aonacht chuid fháilteachta
   - Glúin theam (theme generation)
   - Cothromchúchas a chur ar fáil

### Do Chuid Site Uaisteacha

Má tá tú site uaisteacha ag an Site Builder mode:

1. Is féidir leat é a úsáid mar atá
2. Chun a chur in áit theam (theme) aistriú, ríomh: "Ríomh mo site"
3. Beidh an Agent Setup Assistant ag cur tú ar fáil i gcás theam nua
4. Bhéal dáta an site ag cur chun cinn ní fhágáil

### Do Changú Theam

An t-amach ar na seachtainn theam a bhí ag Site Builder mode:

1. Rian: "Chang mo theam"
2. Beidh an Agent Setup Assistant ag:
   - Aillt ar do chuid fháilteachta díreacha
   - Glúin theam nua
   - Athchúchas é ar do site

## Ciallaí Fhinn (Key Differences)

### Site Builder Mode

```
1. Déan template
2. Seachaint theam
3. Cothromchúchas a chur ar fáil
4. Done
```

### Agent Setup Assistant

```
1. Déan an t-amach ar do site
2. Déan an ghrúpa uile a chur ar fáil
3. Seachaint na ríomhpháirtí díreacha
4. Glúin theam nua ag an Agent
5. Athchúchas theam a chur ar fáil ag an Agent
6. Bhéal site brief a chur in áit chun seachtainn eile
```

## Spéisteacha an Agent Setup Assistant

### Níos Flegma (More Flexible)

- Déan do chuid site trín taalannla
- Déan rathúil díreacha ag an Agent
- Athchúchas ar do chuid raibh tú ag cur chun cinn

### Athchúchas Níos Fearnna (Better Customization)

- Glúin theam nua
- Déan fhoireann díreacha (design system decisions)
- Tokení díreacha a bhíonn ag cur in áit

### Memoire Persistent (Persistent Memory)

- Tá an site_brief agat
- Beidh na agents eile ag iarraidh a bheith ag tú ar do site
- Níl aon chuid féin a chur ar fáil mar gheall ar an t-amach

### Workflow Iomlánaithe (Integrated Workflow)

- Onboarding the Theme Builder
- Skill Design System Aesthetics
- Athchúchas Visibility controls
- Bhíonn gach chéim ag cur chun cinn go díreach

"Bíne mé a fáilte ar nua site"

### Baibí mé an site ó Site Builder a réimseart

Is féidir é a réimseart le haghaidh agent Setup Assistant:

1. **Ráistíocht**: "Help me set up a new site" (Bíne mé a fáilte ar nua site)
2. **Síl:** Déan díriú ar an t-amach agus ar an chuid design de do site ó rang.
3. **An agent** beidh theme similar ag teacht.
4. Beidh an `site_brief` agat chun é a úsáid le haghaidh cur síos leat.

### Níl mo site Site Builder a bheith agat ag eolas?

Tá na site atá cur síos le mode Site Builder ag dul ar aghaidh leat. Má tá tú ag iarraidh an t-amach:

1. **Chrau:** Déan cinnte go bhfuil an theme agat ag teacht.
2. **Féach:** Déan cinnte go bhfuil na pluginí agat ag fáilte.
3. **Féach ar logarru error WordPress** (WordPress error logs).
4. **Contact support** (contact support) má tá na treoclóid ag dul ar aghaidh.

### Can éimhin mo template Site Builder uile a bheith agam?

Níl templates Site Builder agat anois. Mar sin féin:

- Tá na site atá cur síos leat ag dul ar aghaidh leat.
- Is féidir leat a réimseart site similar le haghaidh agent Setup Assistant.
- Is féidir leis an agent Setup Assistant fháil ar chuid cur síos níos mó.

## An t-amachas Taispeánta (Next Steps)

1. **Do nua siteanna**: Urfaigh an agent Setup Assistant.
2. **Do siteanna atá agat**: Déan cinnte go bhfuil siad ag dul ar aghaidh mar a bheith.
3. **Do mothúcháin theme**: Róna help ó the Setup Assistant agent.
4. **Do cur síos design**: Urfaigh an skill Design System Aesthetics.

## Tópacaí Related (Related Topics)

- **Theme Builder Onboarding**: Cur síos leat ar fáil do themes custom.
- **Setup Assistant Agent**: Cur síos site ag teacht le haghaidh agent.
- **Site Specification Skill**: Déan cur síos ar do chuid rann agus ar do chuid neartú.
- **Design System Aesthetics Skill**: Réimseart an chuid foirmiúil de do site.
