---
title: Mga Kinahanglanon sa Site nga Kahanas
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Kahan ang Skill sa Site Specification

Ang **Site Specification skill** usa ka estruktura nga pamaagi para ma-capture ang mga tumong, audience, ug brand identity sa imong site. Kini nga impormasyon gi-store sa imong **site_brief memory**, diin ang mga agent nagrefer aron maghatag og pareho ug konteksto-aware nga tabang bisan unsa pa ka taas nga session.

## Unsa ang Site Specification?

Ang Site Specification kay ang proseso sa pagdokumento ni:

- **Site purpose**: Unsa ang gibuhat sa imong site ug nganong kini nagigikan
- **Target audience**: Kinsa ang moadto sa imong site ug unsa ang ilang gikinahanglan
- **Brand identity**: Ang imong mga kolor, tono, ug porma sa biswal (visual style)
- **Business goals**: Unsa ang hitsura sa kalampusan alang sa imong site
- **Content structure**: Giunsa pag-organisa sa imong site

Kini nga specification mahimong imong **site_brief**, usa ka permanente nga memorya nga gigamit sa mga agent aron masabtan nila ang konteksto sa imong site.

## Ngano Gamiton ang Site Specification?

### Consistency sa Matag Session

Kung walay site_brief, kinahanglan nimo i-re-explain ang tumong sa imong site matag higayon nga magsugod ka og bag-ong session. Sa paggamit niini, dayon masabtan sa mga agent:

- Ang mga tumong ug audience sa imong site
- Ang mga kolor ug tono sa imong brand
- Ang istruktura sa imong content
- Ang imong mga tumong sa negosyo

### Mas Maayong Rekomendasyon

Gigamit sa mga agent ang imong site_brief aron:

- Maghatag og mga feature nga nag-align sa tumong sa imong site
- Magrekomendar og mga istruktura sa content nga tugma sa imong mga tumong
- Mag-propose og mga disenyo nga pareho sa imong brand
- Malikayan ang pagsuha og mga feature nga dili mag-match

### Mas Dali nga Pagsugod (Faster Onboarding)

Ang mga bag-ong agent (o mga agent sa bag-ong sessions) dali ra makasabay pinaagi sa pagbasa sa imong site_brief imbes nga mangutana og mga klaripikasyon.

## Pag-initiate sa Site Specification

### Atol sa Theme Builder Onboarding

Ang Skill sa Site Specification awtomatikong magsugod atol sa **Theme Builder onboarding flow**. Ang Setup Assistant agent magpangutana ug maghimo sa imong site_brief.

### Manual Initiation

Pwede ka magsimula sa Site Specification bisan kanun-o:

```
"Atong ihatag ang akong site specification"
```

o

```
"Tabangi ko paghimo og site brief"
```

## Ang Proseso sa Site Specification

### Lakang 1: Tumong sa Site (Site Purpose)

Ang agent mangutana:

```
Unsa ang pangunang tumong sa imong site?
- E-commerce store
- Blog o content site
- Portfolio o showcase
- SaaS application
- Community o forum
- Uban: [ihulagway]
```

Pwede ka magpili og category o isaysay ang imong kaugaling nga tumong.

### Lakang 2: Target Audience

```
Kinsa ang imong pangunang audience?
- Mga Konsumidor / general public
- Mga Propesyonal sa negosyo
- Mga Developer / technical users
- Estudyante / mga magtutudlo
- Uban: [ihulagway]

Unsa ang ilang mga panginahanglan?
```

### Lakang 3: Brand Identity

```
Unsa ang mga kolor sa imong brand?
- Primary color: [color picker o hex code]
- Secondary color: [color picker o hex code]
- Accent color: [opsyonal]

Unsaon nimo i-describe ang tono sa imong brand?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### Lakang 4: Business Goals

```
Unsa ang hitsura sa kalampusan para sa imong site?
- Paghimo og leads
- Pagbaligya og mga produkto
- Pagtukod og community
- Pagpaambit og kahibalo
- Pagpamatud sa awtoridad
- Uban: [ihulagway]

Unsa ang imong pangunang metric (sukatan)?
- Revenue
- User engagement
- Content reach
- Conversions
- Uban
```

### Lakang 5: Estruktura sa Content (Content Structure)

```
Unsaon pag-organisa sa imong content?
- Flat (tanang content sa parehas nga lebel)
- Hierarchical (categories ug subcategories)
- Chronological (style sa blog)
- Product-based (catalog)
- Uban: [ihulagway]

Unsa nga mga klase sa content ang imong gigamit?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Uban
```

## Ang Memorya sa imong site_brief

Human makahuman sa Site Specification, ang imong impormasyon i-store isip **site_brief** sa imong agent memory. Kini usa ka structured nga rekord nga naglangkob sa:

## Pagtan-aw ug Pagsulod sa Imong site_brief

### Tan-awa ang Imong site_brief

Pagpangutana sa agent:

```
"Show me my site brief"
```

o

```
"Unsa may nahibal-an nimo bahin sa akong site?"
```

Ipakita sa agent ang imong gitabi nga detalye.

### I-update ang Imong site_brief

Kung magbag-o na ang imong site, pwede nimo kini i-update:

```
"Update my site brief: we're now targeting B2B customers"
```

o

```
"Refresh my site specification"
```

Kini mag-re-run sa Site Specification skill gamit ang imong kasamtangang impormasyon isip nagsugod nga punto.

## Unsaon Gigamit sa mga Agents ang site_brief

### Mga Rekomendasyon sa Disenyo

Kung mangayo ka og mga pagbag-o sa disenyo, magrefer ang mga agent sa imong site_brief:

```
Ikaw: "Redesign my homepage"
Agent: "Base sa imong site brief, nagtargeting ka og mga babaye nga edad 25-45
nga adunay init ug artisanal nga tono. Maghimo ko og disenyo nga maghatag og gibug-aton
sa imong handmade jewelry ug sustainable values."
```

### Mga Suhestiyon sa Feature

Magsuha ang mga agent og mga feature nga naka-align sa imong mga tumong:

```
Ikaw: "What features should I add?"
Agent: "Para sa e-commerce store nga nag-focus sa loyalty sa customer,
magrekomenda ko ni: loyalty program, customer reviews, email newsletter,
ug product recommendations."
```

### Estruktura sa Content

Magusoha ang mga agent og pag-organisa sa content base sa imong estruktura:

Para sa mga nagapangayo: "Paano ko dapat ayusin ang aking blog?"
Awtomatiko nga tubag: "Tungod kay naggamit ka og product catalog uban ang blog, akong sugyot nga i-organisa ang mga post base sa kategorya sa produkto ug maghimo og 'styling guides' nga nagpakita og daghang mga produkto nga magkauban."

## Mga Pinakamaayo nga Pamaagi (Best Practices)

### Magpabiling Espesipiko (Be Specific)

Imbes nga "general audience" lang, isulti kung kinsa gyud imong target:

- ✓ "Mga babaye nga 25-45 anyos, interesado sa sustainable fashion"
- ✗ "Tanan"

### Regular nga Update

Samtang nagbag-o ang imong site, i-update ang imong `site_brief`:

- Kung mag-pivot ka ngadto sa bag-ong audience
- Kung magdugang ka og mga bag-ong linya sa produkto
- Kung mausab ang imong brand identity
- Kung nagbag-o ang imong mga tumong sa negosyo

### Gamit og Parehas nga Terminolohiya (Use Consistent Terminology)

Gamita ang parehas nga mga pulong sa tanang higayon:

- ✓ Kanunay gamita ang "sustainable jewelry" (dili "eco-friendly jewelry" ug "green products")
- ✓ Kanunay nga tawgon ang imong audience sa parehas nga paagi

### Isulod og Konteksto (Include Context)

Hatag og background nga makatabang sa mga agent nga masabtan ang imong mga desisyon:

- "Target nato ang mga propesyonal nga naghatag og importansya sa kalidad kaysa presyo"
- "Ang among audience kay tech-savvy ug naghulat og modernong disenyo"
- "Tungod kay kami usa ka startup nga giputang lang ang puhunan, kinahanglan nato ang mga solusyon nga makatipid sa gasto"

## Relasyon sa Theme Builder Onboarding

Ang Site Specification skill gi-integrate sa **Theme Builder onboarding flow**. Kung makahuman ka na sa onboarding, awtomatikong maghimo og `site_brief` ang imong site uban sa impormasyong imong gihatag.

Mahimo usab nimo pagpatakbo og Site Specification nga independente kung gusto nimo:

- I-refine ang imong specification human sa unang setup
- I-update ang imong site brief samtang nagbag-o ang imong site
- Maghimo og detalyado nga specification sa dili pa magsugod sa Theme Builder

## Pag-troubleshoot (Troubleshooting)

**Dili gigamit ang akong `site_brief`**
- Siguraduhon nga naa ang agent og access sa memory
- Pangutana sa agent nga "recall my site brief"
- Siguraduhon nga ang memory enabled sa imong settings

**Gusto nako mag-start pag-usab sa bag-ong site_brief**
- Pangutana sa agent: "Clear my site brief and start fresh" (Limpyohan ang akong site brief ug magsugod pag-usab)
- Unya i-run pag-usab ang Site Specification

**Ang agent naghatag og mga rekomendasyon nga dili tugma sa akong site_brief**
- Pangutana sa agent nga "review my site brief" (rebyuha ang akong site brief)
- I-update ang imong site_brief kung kini naayo na
- Hatagi og dugang konteksto sa imong mga request

## Sunod nga mga Lakang

Human nimong gi-define ang imong site specification:

1. **Gamita ang Theme Builder**: Paghimo og custom theme base sa imong site_brief
2. **Pinoho ang Disenyo (Refine Design)**: Gamita ang Design System Aesthetics skill para sa detalyadong trabaho sa disenyo
3. **Plana ang Content (Plan Content)**: Pangutana sa mga agent alang sa rekomendasyon sa istraktura sa content
4. **Buhaton ang Features (Build Features)**: Hangyo og mga features nga tugma sa imong mga tumong sa negosyo
