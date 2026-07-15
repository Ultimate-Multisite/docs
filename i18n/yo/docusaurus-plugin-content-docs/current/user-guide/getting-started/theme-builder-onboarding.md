---
title: Ìlànà Ìbẹ̀rẹ̀ Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Ìṣàn Ìtọ́sọ́nà Ìbẹ̀rẹ̀ Theme Builder

Superdav AI Agent v1.12.0 mú **ìṣàn ìtọ́sọ́nà ìbẹ̀rẹ̀ Theme Builder** tí a ń darí wá, tí ó ràn ọ́ lọ́wọ́ láti dá akori block àdáni kan nígbà ìṣètò ìbẹ̀rẹ̀ rẹ. Èyí rọ́pò módù Site Builder àtijọ́ pẹ̀lú ọ̀nà tí ó rọrùn síi, tí agent ń ràn lọ́wọ́.

## Kí ni Ìṣàn Ìtọ́sọ́nà Ìbẹ̀rẹ̀ Theme Builder? {#what-is-the-theme-builder-onboarding-flow}

Ìṣàn ìtọ́sọ́nà ìbẹ̀rẹ̀ Theme Builder jẹ́ wizard ìṣètò alábáṣepọ̀ tí ó:

- Darí rẹ nípasẹ̀ àwọn ìpinnu àpẹrẹ (àwọn àwọ̀, typography, layout)
- Gba àwọn ìfẹ́kúfẹ̀ẹ́ ìdánimọ̀ ojúlé rẹ
- Ṣẹ̀dá akori block àdáni tí a ṣe bá àwọn àìní rẹ mu
- Mú akori náà ṣiṣẹ́ láìfọwọ́ṣe nígbà tí ó bá parí

Ìṣàn náà ń ṣiṣẹ́ nípasẹ̀ **Setup Assistant agent**, èyí tí ń béèrè àwọn ìbéèrè ìtúmọ̀ síi, tí ó sì ń kọ akori rẹ díẹ̀díẹ̀.

## Bíbẹ̀rẹ̀ Ìtọ́sọ́nà Ìbẹ̀rẹ̀ Theme Builder {#starting-the-theme-builder-onboarding}

### Ìṣètò Ìṣiṣẹ́ Àkọ́kọ́ {#first-run-setup}

Nígbà tí o bá kọ́kọ́ ṣe ìfilọ́lẹ̀ Superdav AI Agent lórí fífi WordPress tuntun sílẹ̀, ìwọ yóò rí:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Yan **"Build a custom theme"** láti wọ inú ìṣàn ìtọ́sọ́nà ìbẹ̀rẹ̀ Theme Builder.

### Mímú Ṣiṣẹ́ Pẹ̀lú Ọwọ́ {#manual-activation}

O tún lè bẹ̀rẹ̀ ìtọ́sọ́nà ìbẹ̀rẹ̀ Theme Builder nígbàkigbà nípa bíbẹ̀rẹ̀ pé:

```
"Start the Theme Builder onboarding"
```

tàbí

```
"Help me create a custom theme"
```

## Àwọn Ìgbésẹ̀ Ìtọ́sọ́nà Ìbẹ̀rẹ̀ {#the-onboarding-steps}

### Ìgbésẹ̀ 1: Yíyan Módù {#step-1-mode-selection}

Setup Assistant agent béèrè nípa ìfẹ́ rẹ:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Módù ìtọ́sọ́nà** ni a ṣedámọ̀ràn fún ọ̀pọ̀lọpọ̀ àwọn aṣàmúlò; agent náà máa ń ṣe àwọn ìmọ̀ràn àpẹrẹ tó dá lórí ilé-iṣẹ́ àti àwọn ibi-afẹ́ rẹ.

### Ìgbésẹ̀ 2: Àlàyé Ojúlé {#step-2-site-specification}

A óò béèrè lọ́wọ́ rẹ nípa ojúlé rẹ:

- **Ète ojúlé**: E-commerce, blog, portfolio, SaaS, abbl.
- **Àwọn olùwo àfojúsùn**: Ta ni àwọn àlejò rẹ?
- **Àwọn àwọ̀ brand**: Àwọn àwọ̀ àkọ́kọ́ àti kejì (tàbí "Mi ò dá mi lójú")
- **Ohùn**: Ti iṣẹ́ amọ̀ṣẹ́dunjú, àtinúdá, eré, kékeré, abbl.

Aláyé yìí ni a máa ń tọ́jú sínú ìrántí **site_brief** rẹ, èyí tí àwọn agent máa tọ́ka sí ní àwọn àkókò ọjọ́ iwájú.

### Ìgbésẹ̀ 3: Àwọn Ìpinnu Ètò Àpẹrẹ {#step-3-design-system-decisions}

Agent náà darí rẹ nípasẹ̀ yíyan àwọn token àpẹrẹ:

- **Typography**: Ìdílé font (serif, sans-serif, monospace) àti ìwọ̀n ìtẹ̀síwájú
- **Àkójọpọ̀ àwọ̀**: Àwọn àwọ̀ àkọ́kọ́, kejì, ìtẹnumọ́, àti aláìfarahàn
- **Ààlà ààyè**: Àwọn layout títẹ̀, deede, tàbí tó ní ààyè púpọ̀
- **Ìrìnàjò**: Àwọn animation àti transition (bí o bá fẹ́)

### Ìgbésẹ̀ 4: Ṣíṣẹ̀dá Akori {#step-4-theme-generation}

Setup Assistant agent kọ́ ìpilẹ̀ akori block àdáni rẹ pẹ̀lú:

- `theme.json` tí ó ní gbogbo àwọn token àpẹrẹ rẹ
- Àwọn template block fún àwọn layout tí a máa ń lò (homepage, blog, contact)
- Àwọn style block àdáni tí ó bá ètò àpẹrẹ rẹ mu
- Metadata akori àti àwọn ìkéde àtìlẹ́yìn WordPress

### Ìgbésẹ̀ 5: Mímú Ṣiṣẹ́ àti Ìjẹ́rìí {#step-5-activation-and-verification}

Akori náà ni a máa mú ṣiṣẹ́ láìfọwọ́ṣe, ìwọ yóò sì rí:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Lẹ́yìn náà, o lè ṣàbẹ̀wò sí ojúlé rẹ láti jẹ́rìí pé akori náà ń hàn dáadáa.

## Àlàyé Ojúlé àti Ìrántí site_brief {#site-specification-and-sitebrief-memory}

Nígbà ìtọ́sọ́nà ìbẹ̀rẹ̀, agent náà gba àlàyé ojúlé rẹ sínú ẹ̀ka ìrántí **site_brief** kan. Èyí ní:

- Ète àti àwọn ibi-afẹ́ ojúlé
- Àwọn olùwo àfojúsùn
- Àwọn àwọ̀ brand àti ohùn
- Àwọn ìfẹ́kúfẹ̀ẹ́ àpẹrẹ
- Ìgbékalẹ̀ àkóónú

### Ìdí tí site_brief Fi Ṣe Pàtàkì {#why-sitebrief-matters}

Ní àwọn àkókò ọjọ́ iwájú, àwọn agent máa ń tọ́ka sí site_brief rẹ láti:

- Pa ìbámu àpẹrẹ mọ́ kọjá àwọn ìyípadà
- Dábàá àwọn ẹya tí ó bá ète ojúlé rẹ mu
- Pèsè àwọn ìmọ̀ràn tó mọ àyíká
- Yàgò fún ṣíṣe àtúnṣe àwọn ìbéèrè ìṣètò

### Wíwo site_brief Rẹ {#viewing-your-sitebrief}

O lè béèrè lọ́wọ́ agent náà pé:

```
"Show me my site brief"
```

tàbí

```
"What do you know about my site?"
```

Agent náà yóò ṣàfihàn àlàyé ojúlé tí a tọ́jú fún ọ.

## Ṣíṣe Àdáni Lẹ́yìn Ìtọ́sọ́nà Ìbẹ̀rẹ̀ {#customizing-after-onboarding}

Lẹ́yìn tí ìtọ́sọ́nà ìbẹ̀rẹ̀ Theme Builder bá parí, o lè:

### Lo Ọgbọ́n Design System Aesthetics {#use-the-design-system-aesthetics-skill}

Bẹ̀rẹ̀ àwọn ìmúdára àpẹrẹ:

```
"Refine the typography to be more modern"
```

tàbí

```
"Adjust the color palette to be warmer"
```

**Ọgbọ́n Design System Aesthetics** máa ń darí rẹ nípasẹ̀ àwọn ìmúdójúìwọ̀n àpẹrẹ tó ní àfojúsùn.

### Ṣàtúnṣe theme.json Taara {#edit-themejson-directly}

Fún àwọn aṣàmúlò tó ti ni ìrírí, ṣàtúnṣe `/wp-content/themes/[theme-name]/theme.json` láti ṣàtúnṣe:

- Àwọn token àwọ̀
- Àwọn ìwọ̀n typography
- Àwọn iye ààlà ààyè
- Àwọn ìtumọ̀ border àti shadow

### Ṣẹ̀dá Àwọn Template Block Àdáni {#create-custom-block-templates}

Lo olùṣàtúnṣe block WordPress láti ṣẹ̀dá àwọn template àdáni fún:

- Àwọn layout homepage
- Àwọn ojúewé ìfìwéránṣẹ́ blog
- Àwọn ojúewé ọjà
- Àwọn fọ́ọ̀mù ìkànìyàn

## Ìfiwéra: Ìtọ́sọ́nà Ìbẹ̀rẹ̀ Àtijọ́ vs. Tuntun {#comparison-old-vs-new-onboarding}

| Ẹ̀ya | Site Builder (Àtijọ́) | Theme Builder (Tuntun) |
|---------|----------------------|-------------------|
| Ọ̀nà ìṣètò | Fọ́ọ̀mù tó dá lórí wizard | Ìjíròrò tí agent ń darí |
| Ṣíṣẹ̀dá akori | Àwọn template tó ní ààlà | Ìkọ́ ìpilẹ̀ àdáni |
| Àwọn token àpẹrẹ | Ìfọwọ́síwọlé pẹ̀lú ọwọ́ | Àwọn ìpinnu tí a darí |
| Ìrọ̀rùn | Àwọn aṣayan tí ó dúró | Ṣeé ṣe àdáni |
| Àwọn ìmúdójúìwọ̀n ọjọ́ iwájú | Kò tọ́ka sí | A tọ́jú sínú site_brief |

## Yíyanjú Ìṣòro {#troubleshooting}

**Ìṣàn ìtọ́sọ́nà ìbẹ̀rẹ̀ kò parí**
- Tún ìṣàn náà bẹ̀rẹ̀: "Start the Theme Builder onboarding"
- Ṣàyẹ̀wò pé fífi WordPress rẹ sílẹ̀ jẹ́ ti ìgbà tuntun
- Jẹ́rìí pé Setup Assistant agent ti ṣiṣẹ́

**A kò lo site_brief mi**
- Jẹ́rìí pé agent náà ní ààyè sí ìrántí
- Béèrè lọ́wọ́ agent náà láti "recall my site brief"
- Ṣàyẹ̀wò pé ìrántí ti ṣiṣẹ́ nínú àwọn settings rẹ

**Akori tí a ṣẹ̀dá kò bá àwọn ìfẹ́kúfẹ̀ẹ́ mi mu**
- Lo ọgbọ́n Design System Aesthetics láti mú un dára síi
- Béèrè lọ́wọ́ agent náà láti "regenerate the theme with [specific changes]"
- Ṣàtúnṣe theme.json taara fún ìṣàkóso pípé

## Àwọn Ìgbésẹ̀ Tó Kàn {#next-steps}

Lẹ́yìn pípárí ìtọ́sọ́nà ìbẹ̀rẹ̀ Theme Builder:

1. **Jẹ́rìí ojúlé rẹ**: Ṣàbẹ̀wò sí ojúlé rẹ láti rí akori tuntun náà
2. **Mú àpẹrẹ dára síi**: Lo ọgbọ́n Design System Aesthetics fún àwọn ìṣàtúnṣe
3. **Fi àkóónú kún un**: Bẹ̀rẹ̀ sí í kọ àkóónú ojúlé rẹ
4. **Ṣàwárí àwọn agbára**: Kọ́ nípa àwọn agbára agent míì bíi scaffold-block-theme àti activate-theme
