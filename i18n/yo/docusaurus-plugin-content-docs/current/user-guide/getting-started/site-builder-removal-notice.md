---
title: Ìfitónilétí Yíyọ Ipo Akọ́lé Ojúlé Kúrò
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Ìfitónilétí Yíyọ Ipo Olùkọ́ Ojúlé Kúrò

**A ti yọ ipo Olùkọ́ Ojúlé kúrò nínú Superdav AI Agent v1.12.0.** Tí o bá ń lo ipo Olùkọ́ Ojúlé, ó yẹ kí o ṣí lọ sí **Setup Assistant agent** fún ṣíṣẹ̀dá akori àti ṣíṣètò ojúlé.

## Kí Ló Ṣẹlẹ̀? {#what-happened}

### Ipo Olùkọ́ Ojúlé (Àtijọ́) {#site-builder-mode-legacy}

Ipo Olùkọ́ Ojúlé jẹ́ ìfarahàn tó dá lórí olùtọ́sọ́nà fún:

- Ṣíṣẹ̀dá àwọn ojúlé láti inú àwọn awoṣe
- Ṣíṣètò àwọn ètò ìpilẹ̀
- Yíyan akori kan
- Ṣíṣètò àkóónú ìbẹ̀rẹ̀

### Kí Ló Rọ́pò Rẹ̀? {#what-replaced-it}

**Setup Assistant agent** ló ń bójú tó gbogbo iṣẹ́ Olùkọ́ Ojúlé báyìí pẹ̀lú:

- Ìṣètò tó rọrùn síi, tí aṣojú ń tọ́sọ́nà
- Àwọn aṣayan àdáṣe akori tó dára síi
- Ìṣọ̀kan pẹ̀lú ìbẹ̀rẹ̀ ìtọ́sọ́nà Theme Builder
- Ìrántí site_brief tó dúró fún àwọn ìgbà iṣẹ́ ọjọ́ iwájú

## Tí O Bá Ń Lo Ipo Olùkọ́ Ojúlé {#if-you-were-using-site-builder-mode}

### Àwọn Ojúlé Rẹ Wà Láìléwu {#your-sites-are-safe}

- Àwọn ojúlé tó wà tẹ́lẹ̀ tí a dá pẹ̀lú ipo Olùkọ́ Ojúlé ń bá a ṣiṣẹ́
- Kò sí ìpàdánù dátà tàbí ìdènà ojúlé
- O lè tẹ̀síwájú láti máa ṣàkóso àwọn ojúlé rẹ bí ó ti yẹ

### Ṣí Lọ sí Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Fún ìṣètò ojúlé tuntun tàbí àwọn ìyípadà akori, lo Setup Assistant agent:

```
"Ràn mí lọ́wọ́ láti ṣètò ojúlé tuntun kan"
```

tàbí

```
"Bẹ̀rẹ̀ ìbẹ̀rẹ̀ ìtọ́sọ́nà Theme Builder"
```

Setup Assistant agent ń pèsè iṣẹ́ kan náà pẹ̀lú ìrọ̀rùn tó pọ̀ síi.

## Àfiwé: Olùkọ́ Ojúlé vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Ẹ̀yà | Olùkọ́ Ojúlé (Tí a Yọ Kúrò) | Setup Assistant (Tuntun) |
|---------|----------------------|----------------------|
| Ọ̀nà ìṣètò | Fọ́ọ̀mù olùtọ́sọ́nà | Ìjíròrò aṣojú |
| Yíyan akori | Àwọn awoṣe tí a ti ṣètò ṣáájú | Ṣíṣẹ̀dá àdáṣe |
| Àdáṣe | Àwọn aṣayan díẹ̀ | Ètò àwòrán kíkún |
| Àkótán ojúlé | Kò sí ní ìpamọ́ | Ìrántí tó dúró |
| Àwọn ìgbà iṣẹ́ ọjọ́ iwájú | Tún ìṣètò ṣe | Lo site_brief tí a ti fipamọ́ |
| Ìrọ̀rùn | Ṣíṣàn iṣẹ́ tó dúró ṣinṣin | Ìjíròrò tó ń bá a mu |

## Ṣíṣí Lọ sí Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Fún Àwọn Ojúlé Tuntun {#for-new-sites}

Dípò lílo ipo Olùkọ́ Ojúlé:

1. Béèrè: "Ràn mí lọ́wọ́ láti ṣètò ojúlé tuntun kan"
2. Setup Assistant agent yóò tọ́ ọ kọjá:
   - Ète àti àwọn àfojúsùn ojúlé
   - Àwùjọ tí a ń dojú kọ
   - Ìdánimọ̀ brand
   - Ṣíṣẹ̀dá akori
   - Ìṣètò ìbẹ̀rẹ̀

### Fún Àwọn Ojúlé Tó Wà Tẹ́lẹ̀ {#for-existing-sites}

Tí o bá ní ojúlé tó wà tẹ́lẹ̀ láti ipo Olùkọ́ Ojúlé:

1. O lè tẹ̀síwájú láti lo ó bí ó ṣe rí
2. Láti ṣe imudójúìwọ̀n akori náà, béèrè: "Ṣe àtúnṣe àwòrán ojúlé mi"
3. Setup Assistant agent yóò ràn ọ́ lọ́wọ́ láti ṣẹ̀dá akori tuntun kan
4. Dátà ojúlé rẹ kò ní yí padà

### Fún Àwọn Ìyípadà Akori {#for-theme-changes}

Dípò yíyan akori ti ipo Olùkọ́ Ojúlé:

1. Béèrè: "Yí akori mi padà"
2. Setup Assistant agent yóò:
   - Béèrè nípa àwọn ohun tí o fẹ́ nínú àwòrán
   - Ṣẹ̀dá akori àdáṣe kan
   - Mú un ṣiṣẹ́ lórí ojúlé rẹ

## Àwọn Ìyàtọ̀ Pàtàkì {#key-differences}

### Ipo Olùkọ́ Ojúlé {#site-builder-mode}

```
1. Yan awoṣe kan
2. Yan akori kan
3. Ṣètò àwọn ètò ìpilẹ̀
4. Pari
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Ṣàpèjúwe ète ojúlé rẹ
2. Ṣàlàyé àwùjọ tí o ń dojú kọ
3. Yan àwọn ohun tí o fẹ́ nínú àwòrán
4. Aṣojú ṣẹ̀dá akori àdáṣe
5. Aṣojú mú akori ṣiṣẹ́
6. A fipamọ́ àkótán ojúlé fún àwọn ìgbà iṣẹ́ ọjọ́ iwájú
```

## Àwọn Àǹfààní Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Ó Rọrùn Síi {#more-flexible}

- Ṣàpèjúwe ojúlé rẹ ní èdè àdánidá
- Gba àwọn ìmòràn àdáṣe
- Bá àwọn àìní pàtó rẹ mu

### Àdáṣe Tó Dára Síi {#better-customization}

- Ṣíṣẹ̀dá akori àdáṣe
- Àwọn ìpinnu ètò àwòrán
- Àwọn àmì àwòrán tó dúró

### Ìrántí Tó Dúró {#persistent-memory}

- A fipamọ́ site_brief rẹ
- Àwọn aṣojú ọjọ́ iwájú yóò lóye ojúlé rẹ
- Kò sí ìdí láti tún ìwífún ìṣètò ṣe

### Ṣíṣàn Iṣẹ́ Tí a Ṣepọ̀ {#integrated-workflow}

- Ìbẹ̀rẹ̀ ìtọ́sọ́nà Theme Builder
- Ọgbọ́n Ìwòye Ètò Àwòrán
- Àwọn ìṣàkóso Ìfarahàn Agbára
- Gbogbo wọn ń ṣiṣẹ́ pọ̀ láìsí ìṣòro

## Yíyanjú Ìṣòro {#troubleshooting}

### Mi ò lè rí ipo Olùkọ́ Ojúlé {#i-cant-find-site-builder-mode}

A ti yọ ipo Olùkọ́ Ojúlé kúrò. Lo Setup Assistant agent dípò rẹ:

```
"Ràn mí lọ́wọ́ láti ṣètò ojúlé tuntun kan"
```

### Mo fẹ́ tún ojúlé kan dá láti Olùkọ́ Ojúlé {#i-want-to-recreate-a-site-from-site-builder}

O lè tún un dá pẹ̀lú Setup Assistant agent:

1. Béèrè: "Ràn mí lọ́wọ́ láti ṣètò ojúlé tuntun kan"
2. Ṣàpèjúwe ète àti àwòrán ojúlé ìbẹ̀rẹ̀ rẹ
3. Aṣojú náà yóò ṣẹ̀dá akori tó jọra
4. A ó fipamọ́ site_brief rẹ fún ìtọ́kasí ọjọ́ iwájú

### Ojúlé Olùkọ́ Ojúlé mi tó wà tẹ́lẹ̀ kò ṣiṣẹ́ {#my-existing-site-builder-site-isnt-working}

Àwọn ojúlé tó wà tẹ́lẹ̀ tí a dá pẹ̀lú ipo Olùkọ́ Ojúlé ń bá a ṣiṣẹ́. Tí o bá ń ní ìṣòro:

1. Ṣàyẹ̀wò pé akori rẹ ṣì ń ṣiṣẹ́
2. Ṣàrídájú pé àwọn àfikún rẹ ti ṣiṣẹ́
3. Ṣàyẹ̀wò àwọn àkọsílẹ̀ àṣìṣe WordPress
4. Kàn sí ìtìlẹ́yìn tí àwọn ìṣòro bá ń tẹ̀síwájú

### Ṣé mo ṣì lè lo àwọn awoṣe Olùkọ́ Ojúlé mi àtijọ́? {#can-i-still-use-my-old-site-builder-templates}

Àwọn awoṣe Olùkọ́ Ojúlé kò sí mọ́. Síbẹ̀:

- Àwọn ojúlé rẹ tó wà tẹ́lẹ̀ ń bá a ṣiṣẹ́
- O lè tún ṣẹ̀dá àwọn ojúlé tó jọra pẹ̀lú Setup Assistant agent
- Setup Assistant agent ń pèsè àwọn aṣayan àdáṣe tó pọ̀ síi

## Àwọn Ìgbésẹ̀ Tó Kàn {#next-steps}

1. **Fún àwọn ojúlé tuntun**: Lo Setup Assistant agent
2. **Fún àwọn ojúlé tó wà tẹ́lẹ̀**: Tẹ̀síwájú láti lo wọn bí wọ́n ṣe rí
3. **Fún àwọn ìyípadà akori**: Béèrè fún ìrànlọ́wọ́ láti Setup Assistant agent
4. **Fún fífi àwòrán ṣe dídára síi**: Lo ọgbọ́n Ìwòye Ètò Àwòrán

## Àwọn Kókó Tó Jọmọ́ {#related-topics}

- **Ìbẹ̀rẹ̀ Ìtọ́sọ́nà Theme Builder**: Ìṣètò tí a ń tọ́sọ́nà fún àwọn akori àdáṣe
- **Setup Assistant Agent**: Ìṣètò ojúlé tí aṣojú ń tọ́sọ́nà
- **Ọgbọ́n Ìtọ́kasí Ojúlé**: Ṣàlàyé àwọn àfojúsùn àti àwùjọ ojúlé rẹ
- **Ọgbọ́n Ìwòye Ètò Àwòrán**: Ṣe ìdánimọ̀ ojú ojúlé rẹ dídára síi
