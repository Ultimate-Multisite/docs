---
title: Spessifika tal-sit Kskills
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Skill di Specificazzjoni tal-Site

Il-**Skill di Specificazzjoni tal-Site** huwa approċċ strutturat biex tikkapsoli l-objettivi tal-site tiegħek, l-audience (l-publiku) u l-identità tal-brand. Dan informazzjoni hija magħal **site_brief** memory tiegħek, li l-agentijiet jreferwih b'mod konsistenti u b'aħjar kontekstu b'traxxen sessjonijiet.

## X'ja qed l-Site Specification?

Il-Site Specification huwa proċess ta dokumentazzjoni tal:

- **Għ탕 Site (Site purpose)**: X'inqas il-site tiegħek u għalfe jolt jolt
- **L-audience target**: Li jvisitt il-site tiegħek u x'għodhom biex jgħandu
- **Identità tal-brand**: L-colori, ton u stil vizjwali tiegħek
- **Objettivi tal-biznes**: X'inħobb l-suċċess għall-site tiegħek
- **Struttura tal-kontenut**: Come il-site tiegħek organizzatu

Dan spesifikazzjoni tikkawwi biex tikkawwi l-**site_brief** tiegħek, memory persistenti li l-agentijiet jikelmu biex jifhmu l-kontekstu tal-site tiegħek.

## Perché użaw Site Specification?

### Konsistenza b'traxxen sessjonijiet

B'assenza ta site_brief, terġa tista' tipprova l-objettivi tal-site tiegħek malajr meta tibda sessioni ġdissewn. Ma għandekx dan, l-agentijiet jifhmu mument li:

- L-objettivi u l-audience tal-site tiegħek
- L-colori u l-ton tal-brand tiegħek
- Struttura l-kontenut tiegħek
- L-objettivi tal-biznes tiegħek

### Rekommandazzjonijiet moħti

L-agentijiet jikelmu biex:

- Jipproponu features (funzjonijiet) li huma allineati mal-għan tal-site tiegħek
- Jikkunsidru strutture kontenut li jikkonferma l-objettivi tiegħek
- Jiproponu disjaini konsistenti mal-brand tiegħek
- Jevitu min propost funzjonijiet li ma jkollhomx konformità

### Onboarding aktar veloċi

L-agentijiet jiddefini (new agents) (jew l-agentijiet f sessjonijiet ġdissewn) jistintu malajr biex jikkonplu l-site_brief tiegħek invece tal-istiskarja suġestiji tajjeb.

## Inizjjarja Site Specification

### Durante l-Onboarding tal-Theme Builder

Il-Skill di Specificazzjoni tal-Site jinizjata awtomatikament durante l-**Theme Builder onboarding flow**. L-agent Setup Assistant jista' tixtellija suġestiji u tikkapsola l-site_brief tiegħek.

### Inizjjarja manuell

Tista' possi ti inizializza l-Site Specification quddiemma:

```
"Let's define my site specification"
```

o

```
"Help me create a site brief"
```

## Il Processu tal-Site Specification

### Epilogu 1: L-Scopi tal-Site (Site Purpose)

L-agent titpessela:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Tista' puoi selezxi una categoria o descrivi l-scop tal-site tieħed.

### Epilogu 2: L-Pubbliku Target (Target Audience)

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

X'għandhom bżonnijiet primari?

### Epilogu 3: L-Identità tal-Brand (Brand Identity)

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

Come tista' tdescritti l-tono tal-brand tiegħek?

### Epilogu 4: L-Oqod tal-Bizness (Business Goals)

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

X'għandu l-metru primarju tiegħek?

### Epilogu 5: Struttura tal-Kontenut (Content Structure)

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

X'typijiet tal-kontenut li tista' użaw?

## L-Memory tal-site_brief tiegħek

Wara li tiġi kumplita l-Site Specification, informazzjoni tiegħek titlobbija bħala **site_brief** f'l-memory tal-agent tiegħek. Dan huwa rekord strutturat li jinkludi:

## Visualizzazzjoni u Aġġiorar tal-site_brief tiegħek

### Visiżja tal-site_brief tiegħek

Itlaq għall-agent:

```
"Show me my site brief"
```

jew

```
"What do you know about my site?"
```

L-agent se tiffaċċja skettrizzjoni li għad-dħandalt.

### Aġġiorja l-site_brief tiegħek

Jekk is-siti tiegħek jidħol u jikmal, puoi tgħajjerhu:

```
"Update my site brief: we're now targeting B2B customers"
```

jew

```
"Refresh my site specification"
```

Dan se jiġi riapplikat is-Skill tal-Site Specification b informazzjoni li għad-dħandalt bħala punkt oħra biex jmur.

## Come l-Agenti użaw l-site_brief

### Rekommandazzjonijiet ta' Disjin

Meta tistaqsi għal bidżiżi ta' disjin, l-agentu jreferi l-site_brief tiegħek:

```
Int: "Redesign my homepage"
Agent: "Bbażat fuq l-site brief tiegħek, qed tgħanni nifħti ewriju 25-45
enni ton warm u artigianali. Inqasija disjin li tiffoka fuq
l-jewellery handmade tiegħek u l-valuri sostenibbli."
```

### Suggerimenti ta' Funzjonijiet (Features)

L-agentu jipproponi funzjonijiet allieħa mal-għanijiet tiegħek:

```
Int: "What features should I add?"
Agent: "Biex għall-e-commerce store li jifokki fuq l-loyalty tal-klijenti,
innejjemma: programmu ta' loyalty, review tal-klijenti, newsletter ta' e-mail,
u rrakkomandazzjonijiet ta' prodotti."
```

### Struttura tal-Kontenut

L-agentu jipproponi l-organizzazzjoni tal-kontenut bbażat fuq is-struttura tiegħek:

You: "Comeqt kif organizzaw blog?"
Agent: "Għalfor li tista'x it-product catalog ma jista' blog, innejj anqassix postijiet b'kategorija tal-prodotti u nistabbil 'styling guides' li jkun juri prodotti multipli flimkien."

## Best Practices

### Sejjeb Biex Tkun Spesifik
Bxejn "audience generali", iscritti l-audience tiegħek effettiva:

- ✓ "Inħasijiet 25-45enni, interessati fil-fashion sostenibbli"
- ✗ "Kulundu"

### Iżżerzu Regolari
Mentre siti tivolvix, aggiorna is-site_brief tiegħek:

- Meta tiġi pivot għal audience ġdid
- Meta tiddir prodotti jiddu
- Meta l-identità tal-brand tiegħek tistabbilixxi
- Meta l-oġġetti tal-bisnis tiegħek jidħlu

### Uża Termini Konsistenti
Uża isiemx isiemx fil-sessioni:

- ✓ Qol "sustainable jewelry" (ma qol "eco-friendly jewelry" u "green products")
- ✓ Iżżerzu l-audience flimkien b'mod identiku

### Inkludi Kontekst
Forri informazzjoni li tgħin il-agent jiftaħ f-decisionijiet tiegħek:

- "Niddaq fuq professionisti li jvalwaw l-qualità aktar min is-prezz"
- "L-audience tagħna hija tech-savvy u aspettuna design modern"
- "Niddaq biex nistartu come startup b'cost effettivi, għoli għall-soluzzjonijiet"

## Relazzjoni mal-Onboarding tal-Theme Builder

Il-skill ta Site Specification huwa integrat f'**Theme Builder onboarding flow**. Meta tgħmli l-onboarding, is-site_brief tiegħek jitcrea awtomatikament mal-informazzjoni li qolti.

Tista' tqed is-Site Specification b'mod indipendenti jekk għandek bidd:

- Tistabbilixxi aktar is-specification wara l-setup inizjali
- Aggiorna is-site brief tiegħek meta siti tivolvix
- Tcrea specification dettaljata qabel ma tibda Theme Builder

## Troubleshooting

**Is-site_brief tiegħi ma jgħinux**
- Konferma li l-agent għandu access għall-memory
- Istaqsi l-agent biex "recall my site brief"
- Kontrolla li l-memory aktiva f'settings tiegħek

**I want to start over with a new site\_brief**
- Smalt l'agent: "Clear my site brief and start fresh"
- Poi jara diġà Site Specification min id-ed.

**L-agent qed jgħid preċaċi li ma jgħandu xieq il-site\_brief tiegħi**
- Smalt l'agent biex jgħid: "Review my site brief" (Riviedi l-site\_brief tiegħi)
- Iġbed aġġorni l-site\_brief tiegħek se huwa outdated (mghinnu)
- Fornis kontekstu aggiem fil-istriek tiegħek

## Prossi Xtanu

Wara li tdefinix it-specifikazzjoni tal-site tiegħek:

1. **Uża Theme Builder**: Icrea tema kustom bbażat fuq l-site\_brief tiegħek
2. **Ipprova Disegni (Refine Design)**: Uża l-skill ta Design System Aesthetics għall lavori dettaljati ta' disjin
3. **Ipplanni Kontenut (Plan Content)**: Smalt l-agent biex jgħid preċaċi dwar il-struttura tal-kontenut
4. **Ibnu Funzjonijiet (Build Features)**: Ixtieq funzjonijiet li huma allineati mal-objettivi tal-biznes tiegħek
