---
title: Fhòcas a' chluainn Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Flow Onboarding Theme Builder

Superdav AI Agent v1.12.0 le sgaidhneachd **flow onboarding Theme Builder** a tha a' tuig an t-sgaidhneachadh theme ùr gu bhith agad air an uair atairtseach. Tha seo a' cur atharrachadh airson mode Site Builder a tha a' sealltain, agus a bhith a' chùcas air a' sgaidhneachd, a tha fòcasach air an agent.

## Cè a tha Flow Onboarding Theme Builder?

Tha flow onboarding Theme Builder gu bhith na sgaidhneachadh le fhaighinn (interactive setup wizard) a tha:

- A' tuig a tha deidhean deasachaidh (columadh, tairgseachd, leaghalainn)
- A' ghràdh a tha ri chàrachan sgaidhneachd site a tha thu.
- A' gineadh theme bloc ùr a tha a' tuig air a tha thu.
- A' chùcas an theme gu fìor gu am faighinn.

Tha flow seo a' tòiseachadh de **Setup Assistant agent**, a tha a' toirt ceistean a tha a' tuig agus a' dèanamh theme a tha thu gu leathanach.

## A' tòiseachadh air Flow Onboarding Theme Builder

### Setup an uair atairtseach (First-Run Setup)

Nuair a thabhair thu Superdav AI Agent air an uair atairtseach ar urrainn WordPress ùr, tha thu ag fheuchain:

```
Fan-a tha thu a' tuig?

1. A' gineadh theme ùr (Theme Builder)
2. A' sgaidhneachd theme a tha air a bhith agad
3. A' tòiseachadh airson an t-sgaidhneach airson a tha thu
```

Thoir **"Build a custom theme"** chun flow onboarding Theme Builder a thabhair thu.

### A' chùcas gu leathanach (Manual Activation)

Is e cheann eile a tha thu a' tuig Flow Onboarding Theme Builder air a bheith gu leathanach gu am faighinn de dhòigh:

```
"Start the Theme Builder onboarding"
```

amar

```
"Help me create a custom theme"
```

## Cèan na sgaidhneacha (The Onboarding Steps)

### Step 1: Sealltain Mode

Tha Setup Assistant agent a' toirt ceistean air a tha thu deasachaidh:

```
Fan-a tha thu a' tuig a' gineadh theme?
- A' gineadh (Tha mi ag toirt ceistean agus tha mi a' tòiseachadh)
- A' sgaidhneachd gu leathanach (Tha mi a' sealltain eumpannach agus tha thu a' dèanamh deidheach)
```

**Mode a gineadh** tha a' tuig airson fìor chùis; a tha an agent a' toirt ceannas deasachaidh gu sgaidhneachd air a tha thu agus air a' tairgseachan.

### Step 2: Seòlas Site (Site Specification)

Tha thu ag toirt ceistean air site a tha thu:

- **Am cumhachd an site**: E-commerce, blog, portfolio, SaaS, etc.
- **Audience a' chlàradh**: Cò a tha a' chlàradh agad?
- **Colùir cridhe**: Colùir cridhe agus colùir seacaid (amar a tha thuinn "chan eil mi a' faicinn")
- **Tòna**: Proffessional, cridhe, ceartach, minimal, etc.

Tha an t-aithreachas seo a' chlàradhdaidh tu gu leithid na deicidhean sinneadh:

### Step 3: Deicidhean System Design (Design System Decisions)

Tha an aithreachas a' chlàradhdaidh tu gu leithid na deicidhean token design:

- **Typoghraf**: Famhàil fònt (serif, sans-serif, monospace) agus scala tairgse
- **Colùir**: Colùir cridhe, seacaid, accent, agus colùir nàdarra
- **Spacings**: Layouts coimnifeachdach, normal, no spiseacha
- **Motion**: Animais agus transitions (chan eil thuinn a' faicinn)

### Step 4: Tònaith Theme (Theme Generation)

Tha an aithreachas Setup Assistant a' chlàradhdaidh tu gu leithid tònaith block-theme agad gyda:

- `theme.json` a' tòisich àrd-chùl design sinneadh agad
- Template blocks airson layoutan coimhnrithe (homepage, blog, contact)
- Stailan block airson system design sinneadh agad
- Metadata tònaith agus deaclochan WordPress

### Step 5: Ailinn agus Sealladh (Activation and Verification)

Tha an tònaith a' ailinn gu fìor, agus tha thu ag faicinn:

```
✓ Tha an tònaith agad a' sealltainn gu fìor!
  Tònaith namh: Theme [Ainse Site]
  Colùir: [Cridhe] / [Seacaid]
  Typoghraf: [Famhàil Fònt]

  Thàinig agad air an site a' faicinn design ùr.
```

Le ansin, le tuar a' chlàradhdaidh thu agad air an site a' faicinn design gu fìor.

## Spesifikeadh Site agus Memory site_brief

Agair mbeinn a' chlàradhdaidh tu, a tha an aithreachas a' ghràdhdaidh na spesifikeadh site agad anns an catagairt memory **site_brief**. Tha seo a' tòisich:

- Am cumhachd an site agus àiteannach
- Audience a' chlàradh
- Colùir cridhe, seacaid, agus tòna
- Deicidhean design
- Struchtar ainmhean (content structure)

### Cuimhne a tha site_brief a' tòisich

Agair mbeinn a' chlàradhdaidh tu, a thàinig na aithreachasan a' faicinn an site_brief agad gu leithid:

- Maint an design co-consistent a' chlàradhlan
- Suggeast feàrrtean a' leaghalta ri eurt site
- Proiviad recommandations a' leaghalta ri eurt sithe
- Aoid a' tairt a' chruinneachadh acu seannachdan

### Aims Eurt Site_brief a ghlèidheachadh

Is e gu bheil thu ag iarraidh:

```
"Show me my site brief"
```

amar

or

```
"What do you know about my site?"
```

Bhaidh an agent a thabhairt eurt spéis a stòradhda.

## A' chruinneachadh an tairgseachdaireachd an uair a tha thu ag iarraidh (Onboarding)

An uair a thabhas an Theme Builder onboarding, leide a tha thu ag iarraidh:

### Aig an Skill Design System Aesthetics a uileachadh

Coimhead airson fhaighinn am fhaighinn design:

```
"Refine the typography to be more modern"
```

amar

or

```
"Adjust the color palette to be warmer"
```

Bhaidh an **Design System Aesthetics skill** a' chlàradhnuibh thu gu leithid air atharrachadh design.

### Ath-ghinne an theme.json gu dìreach

 airson uisgeilidhnean a' chluich, ath-ghinne `/wp-content/themes/[theme-name]/theme.json` gus atharrachadh:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Creag amhailtean block customach

Coimhead a' chluich an editor block WordPress gu leithid airson:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## A' chluich: Seannachdan vs. Nàrr (Onboarding)

| Feature | Site Builder (Seannach) | Theme Builder (Nàrr) |
|---------|----------------------|-------------------|
| Setup method | Form a' chruinneachadh | Cùineadh a' chlàradhnuibh an agent |
| Theme generation | Templatean leatamach | Scaffolding a' chluich |
| Design tokens | A' chluich manual | Cùineadh gu leithid |
| Flexibility | Opciones fìrnéidh | Ath-chluich |
| Future updates | Cha thu a' chlàradhnuibh | Stòradhda i site_brief |

## A' chruinneachadh (Troubleshooting)

**Bha an tairgseachdaireachd an uair a tha thu ag iarraidh a' chluich**
- Ath-ghinne an fhaighinn: "Start the Theme Builder onboarding"
- Comharr a' chluich gu bheil eurt WordPress installation a' chlàradhnuibh
- Comharr gu bheil an Setup Assistant agent a' chlàradhnuibh

**Tha mo `site_brief` a chaidh a' sgair**
- Comharrachadh gu bheil an agent ag obair agad air a' mhobhair (memory)
- Gnìomh an agent airson "a gcurt mo site brief" (recall my site brief)
- Comharrachadh gu bheil mhobhair a' sgairdaidh anns a chùineadh agad

**Tha thiam a ginealachdach a chan eil a' tighinn ri mo chàrachan**
- Aig an fòcas Design System Aesthetics airson a sgileadh (refine)
- Gnìomh an agent airson "a ginealachd an thiam le [tharrasan a tha agad]" (regenerate the theme with [specific changes])
- Amrudh `theme.json` gu dìreach airson currachadh mòr

## Tha am fhaighinn a' sgairdaidh

An uair a tholadh an Onboarding Theme Builder:

1. **Comharrachadh an site agad**: Ghaith air an site agad airson faigh an thiam ùr
2. **A sgileadh design**: Aig an fòcas Design System Aesthetics airson currachadh
3. **Addh a' chunnich**: Gnìomh a' chunnich a' sgairdaidh a' chàrachad agad
4. **A' chùinean a' faighinn**: Lòidhneach air chùinean eile a tha ag an agent, agus a thabhairt `activate-theme`
