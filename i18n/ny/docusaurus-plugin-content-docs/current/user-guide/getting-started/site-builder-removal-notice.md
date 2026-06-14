---
title: Kufotera Koma la Site Builder Mode
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Kufufu Koma ya Kuondoka kwa Site Builder Mode

**Site Builder mode yaliondokera m'Superdav AI Agent v1.12.0.** Mwena muli likitumia Site Builder mode, muli lazima mwende ku **Setup Assistant agent** kwa ajili ya kukwiri theme na kusanidiza site.

## Kuliye Nini Kilichotokea?

### Site Builder Mode (Legacy)

Site Builder mode lilikuwa interface iliyopangwa kama wizard kwa ajili ya:

- Kukwiri sites kutoka templates
- Kusanidiza mipangilio ya msingi
- Kuchagua theme
- Kusanidiza maudhui ya awali

### Kilichobadilika Nalo?

**Setup Assistant agent** sasa inashughulikia kila kazi ya Site Builder kwa kutumia:

- Usimamizi wa setup unaoruhusu kubadilika zaidi na mwandishi (agent)
- Chaguo bora za kubadilisha theme
- Uunganishaji na Theme Builder onboarding
- Kumbukumbu thabiti ya site_brief kwa vipindi vya baadaye

## Ikiwa Ulikuwa Unaotumia Site Builder Mode

### Sites Yako Ziko Salama

- Sites zilizoundwa awali kwa kutumia Site Builder mode zinaendelea kufanya kazi
- Hakuna kupotea kwa data au kukatika kwa site
- Unaweza kuendelea kusimamia sites zako kama kawaida

### Mwende kwenye Setup Assistant Agent

Kwa setup ya site mpya au kubadilisha theme, tumia Setup Assistant agent:

```
"Help me set up a new site"
```

au

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent inatoa kazi zile zile lakini kwa uwezo mwingi zaidi.

## Ulinganisho: Site Builder vs. Setup Assistant

| Sifa | Site Builder (Iliyoondoka) | Setup Assistant (Mpya) |
|---|---|---|
| Jinsi ya Setup | Fomu ya wizard | Mazungumzo ya agent |
| Kuchagua Theme | Templates zilizopangwa mapema | Uundaji wa kibinafsi |
| Kubadilisha | Chaguo chache tu | Mfumo mzima wa kubuni |
| Site brief | Hakuna kuhifadhi | Kumbukumbu thabiti (Persistent memory) |
| Vipindi vya baadaye | Setup tena | Tumia site_brief iliyohifadhiwa |
| Uwezo | Workflow imefungwa | Mazungumzo yanayobadilika |

## Kuendelea kwenye Setup Assistant Agent

### Kwa Sites Mpya

Muli pa kuti Site Builder mode:

1. Kufuna kuthandza kusonena site yeka: "Ndinayembetsa site yeka"
2. The Setup Assistant agent idzikuwera monga momwe:
   - Chiyembekezero ya site ndi zolemba
   - Mwayi wopereka (Target audience)
   - Kukhala kwa brand (Brand identity)
   - Kuthengera theme (Theme generation)
   - Kufotokozera m'mwayi woyamba (Initial configuration)

### Kwa Sites Zomaliza

Ngati muli ndi site yeka yomwe yali m'Site Builder mode:

1. Muli ndi ulemu kuti muli ndi ulemu monga momwe ndi momwe
2. Kuti mutere theme, chiyembekezero: "Redesign my site" (Tenera kuphatikiza site yeka)
3. The Setup Assistant agent idzikuthandizira kukhazikitsa theme yeka yeka
4. Data ya site yeka ikulimbikizidwa

### Kwa Kusintha Theme

Muli ndi kusintha theme m'Site Builder mode:

1. Chiyembekezero: "Change my theme" (Sinthani theme yeka)
2. The Setup Assistant agent idzikuthandizira:
   - Kufunsa za zolemba lanu la design
   - Kuthengera theme yeka yeka
   - Kukhazikitsa m'site yeka

## Zomwe Ziri Mwayi Woyamba (Key Differences)

### Site Builder Mode

```
1. Choose a template
2. Select a theme
3. Configure basic settings
4. Done
```

### Setup Assistant Agent

```
1. Describe your site's purpose
2. Define your target audience
3. Choose design preferences
4. Agent generates custom theme
5. Agent activates theme
6. Site brief stored for future sessions
```

## Zomwe Ziri Mwayi Woyamba (Benefits of Setup Assistant Agent)

### Kukhala ndi Mwayi Wopereka Kwambiri (More Flexible)

- Chiyembekezero site yeka m'chonde (natural language)
- Kupereka zolemba zomwe mumakonda
- Kuthandizira m'mwayi wanu wosonyeza kwambiri

### Kusintha Kwambiri Kuti Zikwaniritsidwe (Better Customization)

- Kuthengera theme yeka yeka
- Zomwe zikuyenera za design system
- Design tokens zomwe zimakhala m'mwayi wosonyeza kwambiri

### Mwayi Wopereka Kwambiri (Persistent Memory)

- site_brief yanu ikulimbikizidwa
- Agents ena adziwitsa kuti ndi site yanu lili
- Samukufunsa zolemba za setup m'mwayi wosonyeza kwambiri

### Mwayi Wopereka Kwambiri (Integrated Workflow)

- Onboarding ya Theme Builder
- Skill ya Design System Aesthetics
- Ulemu wa Kukhala ndi Visibility controls
- Zinthu zonse zimakukumbutsa m'mwayi wosonyeza kwambiri

## Kusintha Mwayi Woyamba (Troubleshooting)

### Sindikupatsa Site Builder mode

Site Builder mode yali yera. Gwani Setup Assistant agent monga momwe:

"Niyangonani kukhulupanga site wamba"

### Ndikufuna kukweraite site wamba ku Site Builder

Muliye kukhulupanga mwayi muku Site Builder kwa:

1. Kufuna: "Help me set up a new site" (Niyangonani kukhulupanga site wamba)
2. Mufotokoza ntchito ya site yanu yomwe yakhala ndi chiyani ndi chiyani
3. Agent iyu idzogera theme yomwe imodzi mwayi
4. `site_brief` yanu idzagwira chithandizo kwa nthawi zina

### Site Builder yanu yomwe ikhale pansi sikukweraite

Sites zomwe zikukhala ndi Site Builder mode zimakhala zikukweraite. Ngati mukuona mavuto:

1. Onani kuti theme yanu ikhale ikhale
2. Onani kuti plugins yanu zikukhala zikukhala
3. Onani logs za WordPress za mavuto
4. Onani ndi chithandizo ngati mavuto akukula

### Kodi ndiyenera kukhala ndi templates za Site Builder zamene?

Templates za Site Builder sikukhala kwa nthawi yomwe. Komabe:

- Sites zanu zomwe zikukhala pansi zimakhala zikukweraite
- Muliye kukhulupanga sites mwayi wosonyeza ndi Setup Assistant agent
- Setup Assistant agent imapereka chiwerengero chokhazikitsa kwambiri

## Zinthu Zomwe Zikupezedwa Kuti Mulibe

1. **Pansi kwa sites zamba**: Onani kuti Setup Assistant agent iye
2. **Pansi kwa sites zomwe zikukhala pansi**: Onani kukhala ndi zina monga momwe yomwe mukuona
3. **Pansi kwa kusintha theme**: Onani chithandizo kuchokera kwa Setup Assistant agent
4. **Pansi kwa kusintha mpingo (design)**: Onani Design System Aesthetics skill

## Zinthu Zofunika

- **Theme Builder Onboarding**: Kukhulupanga momwe mukuwera theme zosonyeza
- **Setup Assistant Agent**: Kukweraite site mwayi wosonyeza ndi agent
- **Site Specification Skill**: Kufotokoza zolemba za site yanu ndi anthu zomwe mukuwera
- **Design System Aesthetics Skill**: Kusintha mpingo wa site yanu

```html
<p>Help me set up a new site</p>
```
