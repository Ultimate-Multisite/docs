---
title: Ffylchion y Cyflwyniad o'r Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Ffylchion Gweithredig y Theme Builder

Mae Superdav AI Agent v1.12.0 yn cyflwyno **ffylchion gweithredig Theme Builder** aelodol sydd yn helpu chi i creu theme bloc cartrefol yn ystod eich setffryd cyntaf. Mae hyn yn hanesio'r modd Site Builder anheuluol gyda chyfresyddol, arfaidd yn cael ei gyflwyno gan weithredig.

## Beth yw ffylchion gweithredig Theme Builder?

Mae ffylchion gweithredig Theme Builder yn gwneud gwyrddedig setffryd (setup wizard) interaktif sy'n:

- Mae'n cyfarwyddo chi drwy penderfyniadau dylunio (gwynion, typografia, llwybr)
- Mae'n cyflogi eich penderfyniadau o hydref y site
- Mae'n dynnu theme bloc cartrefol wedi'i gyfnewid i'w angenau
- Mae'n gweithredig y theme yn awr gyda chwarae

Mae'r ffylchion yn cael eu cyflwyno gan **Setup Assistant agent**, sy'n gofyn cwestiynau glir ac yn adeiladu eich theme yn llwybr.

## Cynllunio'r Theme Builder Onboarding

### Setffryd Cyntaf (First-Run Setup)

Pan mae'ch first-launch Superdav AI Agent ar gyfer setffryd WordPress newydd, byddwch yn gweld:

```
Bore daid i Superdav AI Agent!

Beth byddwch yn gallu ei wneud?
1. Creu theme cartrefol (Theme Builder)
2. Defnyddio theme sydd ar gael
3. Mae'n gwneud setffryd erioed
```

Dechrau **"Creu theme cartrefol"** i fynd i ffylchion gweithredig Theme Builder.

### Awyr Manual (Manual Activation)

Gallwch hefyd entynnu'r ffylchion gweithredig Theme Builder mewn unrhyw amser drwy gyflwyno:

```
"Start the Theme Builder onboarding"
```

neu

```
"Help me create a custom theme"
```

## Ymddangosau'r Onboarding

### Cynllunio Modd (Mode Selection)

Mae'r Setup Assistant agent yn gofyn am eich penderfyniad:

```
Sut byddwch yn creu eich theme?
- Cyfarwyddol (Byddaf yn gofyn cwestiynau ac fyddaf yn ei dadeu i chi)
- Gweithredig (Byddaf yn dangos opsiynau ac byddwch yn penderfynu)
```

**Mod cyfarwyddol** mae'n cael ei roi arallion am ben iawn o benau; mae'r agent yn gwneud cadarnhau dylunio yn seiliedig ar eich dyfodol a'r cymysgau.

### Cynllunio'r Site (Site Specification)

Bydd eu gofynwch am eich site:

- **Gweith y gweith:** E-commerce, blog, portfolio, SaaS, etc.
- **Cyflwr y cyflwr:** Pwy yw eich y mynediadau?
- **Gwynionau'r brand:** Gwynionau prymedig a ddeallt (neu "Dydywn i'n sicr").
- **Tôn:** Profesiynol, chrefol, chwarae, minimol, etc.

Mae'r wybodaeth hwn yn cael ei storio mewn memoriad **site_brief** eich wefan, y pethau sy'n cyfeirio at eu cyflwyniadau yn ystod gyfarfynion yn dda.

### Cynllunio System Cyflwr (Design System)

Mae'r agent yn rhoi'n gweldwch chi drwy wybodaeth token cynllunio:

- **Tydyrdd:** Famau ffôn (serif, sans-serif, monospace) a gael y cyd-derbyniad
- **Palet o lliwiau:** Gwynion, ddeallt, accent, a neutral
- **Gael y cyflwr:** Llaid, normol, neu llawn y fethau
- **Mynediad:** Animacioedd a trawsioedd (os oes angen)

### Cynllunio Thymor (Theme Generation)

Mae'r agent Cyfathrebu Mae'n cyflwyno eich thymor bloc byw gyda:

- `theme.json` sydd â'r holl token cynllunio eich
- Modelau bloc ar gyfer llwybrau cyffredinol (gwefan cyntaf, blog, cysylltiad)
- Stilio blocau cyflwr yn cyfathogh eich system cynllunio
- Metadata thymor a cyflwyniadau WordPress

### Actywio a Cynodiad

Mae'r thymor yn cael ei actywio'n awtomatig, ac byddwch yn gweld:

```
✓ Mae eich thymor custom yn gweithredol!
  Enw thymor: Thymor [Enw eich Safon]
  Lliwiau: [Gwynion] / [Ddeallt]
  Tydyrdd: [Famau ffôn]

  Ymddangos eich gwefan i weld y cynllunio newydd.
```

Feichwch chi arno hynny eich gwefan i gweld os yn dda mae'r thymor yn dangos iawn.

## Cyflwr Y Safon a Memoriad site_brief

Yn ystod y cyflwyniad, mae'r agent yn cyflogi eich safon mewn cyfeiriad **site_brief** memoriad. Mae hyn yn cynnwys:

- Gweith y wefan a'r cymysgau
- Pwy yw'r mynediadau?
- Gwynionau'r brand a'r tôn
- Priadau cynllunio
- Estrwyتوى cynnwys

### Pam mae site_brief yn bwysig

Yn gyfarfynion yn dda, mae'r cyflwyniadau yn cyfeirio at eich site_brief i:

---
### Cadw your site_brief

Gallwch y gwenith eich site brief i'r aithryn:

```
"Wynni i ddweud am fy site brief"
```

neu

```
"Beth ydych chi'n gwybod am fy site?"
```

Bydd y aithryn yn dangos y spesifau eich site sy wedi'i storio.

## Gwahanu ar ôl Onboarding

Ar ôl i weinio'r Theme Builder, gallwch:

### Defnyddio'r Faddau Skill Design System Aesthetics

Gofyn adeiladu dylunio:

```
"Gwahanu'r typografia i fod yn fwy modern"
```

neu

```
"Gwahanu'r palet o lliw i fod yn fwy werthfawr"
```

Mae'r **Design System Aesthetics skill** yn gwneud eich cyflwyno trwy adeiladu dylunio wedi'i gyfeiriant.

### Redig theme.json yn dros y cyflym

Ar gyfer benau uchel, redig `/wp-content/themes/[theme-name]/theme.json` i sicrwch:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Creu Template Blocau Custom

Defnyddiwch y editor bloc WordPress i creu templateau custom ar gyfer:

- Layoutau y gartref cyntaf (Homepage layouts)
- Peidiadau post blog (Blog post pages)
- Peidiadau cynnyrch (Product pages)
- Ffurfion cyfathogh (Contact forms)

## Cyflwyniad: Canolbwyntio anhef vs. newydd

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Ffresg y cyflwyniad | Ffurf ar adael | Casgliad gan yr aithryn |
| Cynllunio'r theme | Templateau sydd yn hanesoedd | Scaffolding newydd |
| Tokenau dylunio | Cyfeiriant manwl | Penderfyniadau cyfarwydd |
| Gofal | Opsiadau hanesoedd | Gallu cael eu gwahanu |
| Atalau ychwanegol | Nid wedi'i cyfeirio | Stored yn site_brief |

## Cyflwyniad: Cynllunio anhef

**Nid oedd y ffordd onboarding yn gwblhau**
- Rytalydd y ffordd: "Start the Theme Builder onboarding" (Dechrau'r onboarding y Theme Builder)
- Gwylio i sicruddio bod eich cyflwyniad WordPress yn ddefnyddiol
- Gyfeiriad i sicruddio bod y aithryn Setup Assistant wedi'i chwarae

**Mae fy `site_brief` nid yn cael ei defnyddio**
- Cynnal ychwaneg i'r aelod (agent) i gael cyffredin ar y memori.
- Gofyn i'r aelod "recall my site brief" (cynnal fy nghyddu site).
- Gwylio bod y memori wedi'i chynllunio yn eich setegau.

**Mae'r theme a gennych yn ddim yn cyflawni'r dymuniadau fydd arall**
- Defnyddiwch y ffurfol Design System Aesthetics i gyfeiriadu'r dymuniad.
- Gofyn i'r aelod "regenerate the theme with [specific changes]" (regynat y theme gyda [newidiadau penodol]).
- Redigwch `theme.json` yn uniongyrchol ar gyfer cyddefnydd cyflawniach.

## Ymddangosau Canlynol

Ar ôl gwblhau'r onboarding Theme Builder:

1. **Gwylio eich site**: Ymddangoswch eich site i weld y theme newydd
2. **Gyfeiriadu'r dymuniad**: Defnyddiwch y ffurfol Design System Aesthetics ar gyfer adeiladu
3. **Ychwanegu cynnwys**: Dechrau guberdau'r cynnwys eich site
4. **Chwilio amthrawiadau**: Dysgu am ychwanegau aelod eraill fel scaffold-block-theme a activate-theme
