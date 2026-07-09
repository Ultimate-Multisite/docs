---
title: Ọgbọn Ìtọ́kasí Ojúlé
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Ìmọ̀ Ìpèsè Àlàyé Ojúlé {#site-specification-skill}

**Ìmọ̀ Ìpèsè Àlàyé Ojúlé** jẹ́ ọ̀nà tí a ṣètò fún gbígba àwọn ibi-afẹ́ ojúlé rẹ, àwọn olùgbọ́ rẹ, àti ìdánimọ̀ brand. A máa ń tọ́jú ìwífún yìí sínú ìrántí **site_brief** rẹ, èyí tí àwọn agent máa ń tọ́ka sí kọjá àwọn ìgbà ìṣiṣẹ́ láti pèsè ìrànlọ́wọ́ tó dúró ṣinṣin, tó sì mọ àyíká.

## Kí ni Ìpèsè Àlàyé Ojúlé? {#what-is-site-specification}

Ìpèsè Àlàyé Ojúlé ni ìlànà fífi sílẹ̀ nínú ìwé:

- **Ète ojúlé**: Ohun tí ojúlé rẹ ń ṣe àti ìdí tí ó fi wà
- **Àwọn olùgbọ́ àfojúsùn**: Ẹni tó ń bẹ ojúlé rẹ wò àti ohun tí wọ́n nílò
- **Ìdánimọ̀ brand**: Àwọn àwọ̀ rẹ, ohùn rẹ, àti ara ìrísí
- **Àwọn ibi-afẹ́ ìṣòwò**: Bí àṣeyọrí ṣe rí fún ojúlé rẹ
- **Ètò àkóónú**: Bí a ṣe ṣètò ojúlé rẹ

Ìpèsè àlàyé yìí di **site_brief** rẹ, ìrántí tó ń dúró tí àwọn agent máa ń lò láti lóye àyíká ojúlé rẹ.

## Kí Ló Dé Tí Wàá Fi Lo Ìpèsè Àlàyé Ojúlé? {#why-use-site-specification}

### Ìdúróṣinṣin Kọjá Àwọn Ìgbà Ìṣiṣẹ́ {#consistency-across-sessions}

Láìsí site_brief, ìwọ yóò nílò láti tún ṣàlàyé ète ojúlé rẹ ní gbogbo ìgbà tí o bá bẹ̀rẹ̀ ìgbà ìṣiṣẹ́ tuntun. Pẹ̀lú rẹ, àwọn agent máa lóye lẹ́sẹ̀kẹsẹ̀:

- Àwọn ibi-afẹ́ ojúlé rẹ àti àwọn olùgbọ́
- Àwọn àwọ̀ brand rẹ àti ohùn rẹ
- Ètò àkóónú rẹ
- Àwọn àfojúsùn ìṣòwò rẹ

### Àwọn Ìṣàbẹ̀wò Tó Dáa Jù {#better-recommendations}

Àwọn agent máa ń lo site_brief rẹ láti:

- Dábàá àwọn àfikún tó bá ète ojúlé rẹ mu
- Ṣàbẹ̀wò àwọn ètò àkóónú tó bá àwọn ibi-afẹ́ rẹ mu
- Dábàá àwọn àpẹrẹ tó bá brand rẹ mu
- Yẹra fún dídábàá àwọn àfikún tí kò bá a mu

### Ìbẹ̀rẹ̀ Ìmúlò Tó Yára {#faster-onboarding}

Àwọn agent tuntun (tàbí àwọn agent nínú àwọn ìgbà ìṣiṣẹ́ tuntun) lè tètè lóye ohun tó yẹ nípa kíka site_brief rẹ dípò bíbéèrè àwọn ìbéèrè ìtúmọ̀.

## Bíbẹ̀rẹ̀ Ìpèsè Àlàyé Ojúlé {#initiating-site-specification}

### Nígbà Ìbẹ̀rẹ̀ Ìmúlò Theme Builder {#during-theme-builder-onboarding}

Ìmọ̀ Ìpèsè Àlàyé Ojúlé máa ń bẹ̀rẹ̀ laifọwọyi nígbà **ìṣàn ìbẹ̀rẹ̀ ìmúlò Theme Builder**. Setup Assistant agent máa ń béèrè àwọn ìbéèrè ó sì kọ site_brief rẹ.

### Ìbẹ̀rẹ̀ Pẹ̀lú Ọwọ́ {#manual-initiation}

O lè bẹ̀rẹ̀ Ìpèsè Àlàyé Ojúlé nígbàkigbà:

```
"Ẹ jẹ́ ká ṣàlàyé ìpèsè àlàyé ojúlé mi"
```

tàbí

```
"Ràn mí lọ́wọ́ láti ṣẹ̀dá àkópọ̀ ojúlé"
```

## Ìlànà Ìpèsè Àlàyé Ojúlé {#the-site-specification-process}

### Ìgbésẹ̀ 1: Ète Ojúlé {#step-1-site-purpose}

Agent náà máa béèrè:

```
Kí ni ète pàtàkì ojúlé rẹ?
- Ilé ìtajà e-commerce
- Blog tàbí ojúlé àkóónú
- Portfolio tàbí ibi ìfihàn
- Ohun èlò SaaS
- Àwùjọ tàbí forum
- Omiiran: [ṣàlàyé]
```

O lè yan ẹ̀ka kan tàbí ṣàlàyé ète tirẹ.

### Ìgbésẹ̀ 2: Àwọn Olùgbọ́ Àfojúsùn {#step-2-target-audience}

```
Ta ni àwọn olùgbọ́ pàtàkì rẹ?
- Àwọn oníbàárà / gbogbo ènìyàn
- Àwọn akosemose ìṣòwò
- Àwọn developer / àwọn aṣàmúlò ìmọ̀-ẹ̀rọ
- Àwọn akẹ́kọ̀ọ́ / àwọn olùkọ́
- Omiiran: [ṣàlàyé]

Kí ni àwọn àìní pàtàkì wọn?
```

### Ìgbésẹ̀ 3: Ìdánimọ̀ Brand {#step-3-brand-identity}

```
Kí ni àwọn àwọ̀ brand rẹ?
- Àwọ̀ pàtàkì: [olùyan àwọ̀ tàbí hex code]
- Àwọ̀ kejì: [olùyan àwọ̀ tàbí hex code]
- Àwọ̀ ìtẹnumọ́: [àṣàyàn]

Báwo ni wàá ṣe ṣàlàyé ohùn brand rẹ?
- Ti akosemose / ti ilé-iṣẹ́
- Tí ó ní ẹ̀dá / ti ọnà
- Tí ó ń ṣeré / àìlójúṣe
- Kékeré / òde òní
- Gbígbóná / ọ̀rẹ́
```

### Ìgbésẹ̀ 4: Àwọn Ibi-afẹ́ Ìṣòwò {#step-4-business-goals}

```
Báwo ni àṣeyọrí ṣe rí fún ojúlé rẹ?
- Ṣẹ̀dá àwọn lead
- Ta àwọn ọjà
- Kọ́ àwùjọ
- Pín ìmọ̀
- Fi àṣẹ hàn
- Omiiran: [ṣàlàyé]

Kí ni ìwọ̀n pàtàkì rẹ?
- Owó wọlé
- Ìfarapa aṣàmúlò
- Ìtànkálẹ̀ àkóónú
- Àwọn conversion
- Omiiran
```

### Ìgbésẹ̀ 5: Ètò Àkóónú {#step-5-content-structure}

```
Báwo ni a ṣe ṣètò àkóónú rẹ?
- Pẹlẹbẹ (gbogbo àkóónú ní ipele kan náà)
- Pẹ̀lú ìpele (àwọn ẹ̀ka àti àwọn abala-ẹ̀ka)
- Ní ìtẹ̀lé àkókò (bíi blog)
- Da lórí ọjà (catalog)
- Omiiran: [ṣàlàyé]

Irú àkóónú wo ni o ń lò?
- Àwọn àpilẹ̀kọ blog
- Àwọn ojúewé ọjà
- Àwọn ìwádìí ọ̀rọ̀
- Ìwé ìtọ́nisọ́nà
- Àwọn fídíò
- Omiiran
```

## Ìrántí site_brief Rẹ {#your-sitebrief-memory}

Lẹ́yìn tí o bá parí Ìpèsè Àlàyé Ojúlé, a máa tọ́jú ìwífún rẹ gẹ́gẹ́ bí **site_brief** nínú ìrántí agent rẹ. Èyí jẹ́ àkọsílẹ̀ tó ṣètò tó ní:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## Wíwo àti Ṣíṣe Àfikún sí site_brief Rẹ {#viewing-and-updating-your-sitebrief}

### Wo site_brief Rẹ {#view-your-sitebrief}

Béèrè lọ́wọ́ agent náà:

```
"Fi àkópọ̀ ojúlé mi hàn mí"
```

tàbí

```
"Kí ni o mọ̀ nípa ojúlé mi?"
```

Agent náà yóò fi ìpèsè àlàyé tí a tọ́jú rẹ hàn.

### Ṣe Àfikún sí site_brief Rẹ {#update-your-sitebrief}

Tí ojúlé rẹ bá ń dàgbà, o lè ṣe àfikún sí i:

```
"Ṣe àfikún sí àkópọ̀ ojúlé mi: a ti ń fojúsùn àwọn oníbàárà B2B báyìí"
```

tàbí

```
"Tún ìpèsè àlàyé ojúlé mi ṣe"
```

Èyí yóò tún ṣiṣẹ́ ìmọ̀ Ìpèsè Àlàyé Ojúlé pẹ̀lú ìwífún tó wà tẹ́lẹ̀ gẹ́gẹ́ bí ibi ìbẹ̀rẹ̀.

## Bí Àwọn Agent Ṣe Ń Lo site_brief {#how-agents-use-sitebrief}

### Àwọn Ìṣàbẹ̀wò Àpẹrẹ {#design-recommendations}

Nígbà tí o bá béèrè fún àwọn ìyípadà àpẹrẹ, àwọn agent máa ń tọ́ka sí site_brief rẹ:

```
Ìwọ: "Tún ojúewé ilé mi ṣe"
Agent: "Da lórí àkópọ̀ ojúlé rẹ, o ń fojúsùn àwọn obìnrin ọdún 25-45
pẹ̀lú ohùn gbígbóná, ti iṣẹ́ ọwọ́. Màá ṣẹ̀dá àpẹrẹ kan tó tẹnumọ́
ohun ọ̀ṣọ́ ọwọ́ rẹ àti àwọn iye ìdúróṣinṣin sí àyíká rẹ."
```

### Àwọn Ìdábàá Àfikún {#feature-suggestions}

Àwọn agent máa ń dábàá àwọn àfikún tó bá àwọn ibi-afẹ́ rẹ mu:

```
Ìwọ: "Àwọn àfikún wo ni kí n ṣàfikún?"
Agent: "Fún ilé ìtajà e-commerce tó dojúkọ ìdúróṣinṣin oníbàárà,
màá ṣàbẹ̀wò: ètò ìdúróṣinṣin, àwọn àyẹ̀wò oníbàárà, ìwé ìròyìn email,
àti àwọn ìṣàbẹ̀wò ọjà."
```

### Ètò Àkóónú {#content-structure}

Àwọn agent máa ń dábàá ìṣètò àkóónú da lórí ètò rẹ:

```
Ìwọ: "Báwo ni kí n ṣe ṣètò blog mi?"
Agent: "Níwọ̀n bí o ṣe ń lo catalog ọjà pẹ̀lú blog, màá dábàá
ṣíṣètò àwọn àpilẹ̀kọ nípasẹ̀ ẹ̀ka ọjà àti ṣíṣẹ̀dá 'àwọn ìtọ́nisọ́nà styling'
tó fi ọ̀pọ̀ ọjà hàn pọ̀."
```

## Àwọn Ìṣe Tó Dáa Jù {#best-practices}

### Ṣe Ní Pàtó {#be-specific}

Dípò "àwọn olùgbọ́ gbogbogbò," ṣàlàyé àwọn olùgbọ́ gidi rẹ:

- ✓ "Àwọn obìnrin ọdún 25-45, tí wọ́n nífẹ̀ẹ́ sí aṣọ alágbára fún àyíká"
- ✗ "Gbogbo ènìyàn"

### Ṣe Àfikún Déédéé {#update-regularly}

Bí ojúlé rẹ ṣe ń dàgbà, ṣe àfikún sí site_brief rẹ:

- Nígbà tí o bá yí sí àwọn olùgbọ́ tuntun
- Nígbà tí o bá ṣàfikún àwọn laini ọjà tuntun
- Nígbà tí ìdánimọ̀ brand rẹ bá yí padà
- Nígbà tí àwọn ibi-afẹ́ ìṣòwò rẹ bá yí padà

### Lo Àwọn Ọ̀rọ̀ Tó Dúró Ṣinṣin {#use-consistent-terminology}

Lo àwọn ọ̀rọ̀ kan náà kọjá àwọn ìgbà ìṣiṣẹ́:

- ✓ Máa sọ "ohun ọṣọ alagbero" nígbà gbogbo (kì í ṣe "ohun ọṣọ tó dára fún ayika" àti "àwọn ọjà aláwọ̀ ewé")
- ✓ Máa tọ́ka sí àwùjọ rẹ ní ọ̀nà kan náà ní gbogbo ìgbà

### Fi Àyíká Ọ̀rọ̀ Kún Un {#include-context}

Pèsè ìpìlẹ̀ tó máa ran àwọn aṣojú lọ́wọ́ láti lóye àwọn ìpinnu rẹ:

- "À ń fojú sọ́nà fún àwọn amọ̀ṣẹ́dunjú tí wọ́n ka dídára sí ju iye owó lọ"
- "Àwùjọ wa mọ imọ̀-ẹrọ dáadáa, wọ́n sì ń retí àwòrán igbalode"
- "A jẹ́ startup tí a ń gbé sókè pẹ̀lú ohun tí a ní, nítorí náà a nílò àwọn ojútùú tí kò náwó púpọ̀"

## Ìbáṣepọ̀ pẹ̀lú Ìbẹ̀rẹ̀ Lilo Theme Builder {#relationship-to-theme-builder-onboarding}

Ọgbọ́n Ìtọ́kasí Ojúlé ni a ti ṣepọ̀ sínú **ìṣàn ìbẹ̀rẹ̀ lilo Theme Builder**. Nígbà tí o bá parí ìbẹ̀rẹ̀ lilo, site_brief rẹ ni a máa dá sílẹ̀ laifọwọyi pẹ̀lú ìwífún tí o pèsè.

O tún lè ṣiṣẹ́ Ìtọ́kasí Ojúlé lọ́tọ̀ bí o bá fẹ́:

- Ṣàtúnṣe ìtọ́kasí rẹ lẹ́yìn ìṣètò àkọ́kọ́
- Ṣe ìmúdójúìwọ̀n àkópọ̀ ojúlé rẹ bí ojúlé rẹ ṣe ń dàgbàsókè
- Ṣẹ̀dá ìtọ́kasí kíkún kí o tó bẹ̀rẹ̀ Theme Builder

## Yíyanjú Ìṣòro {#troubleshooting}

**site_brief mi kò jẹ́ lílo**
- Jẹ́rìí pé aṣojú náà ní àyè sí ìrántí
- Béèrè lọ́wọ́ aṣojú náà pé kí ó "rántí àkópọ̀ ojúlé mi"
- Ṣàyẹ̀wò pé ìrántí wà ní mímu ṣiṣẹ́ nínú àwọn ètò rẹ

**Mo fẹ́ bẹ̀rẹ̀ láti ìbẹ̀rẹ̀ pẹ̀lú site_brief tuntun**
- Béèrè lọ́wọ́ aṣojú náà: "Pa àkópọ̀ ojúlé mi rẹ́ kí o sì bẹ̀rẹ̀ tuntun"
- Lẹ́yìn náà ṣiṣẹ́ Ìtọ́kasí Ojúlé lẹ́ẹ̀kansi

**Aṣojú náà ń ṣe àwọn ìmọ̀ràn tí kò bá site_brief mi mu**
- Béèrè lọ́wọ́ aṣojú náà kí ó "ṣàtúnyẹ̀wò àkópọ̀ ojúlé mi"
- Ṣe ìmúdójúìwọ̀n site_brief rẹ bí ó bá ti di àtijọ́
- Pèsè àyíká ọ̀rọ̀ àfikún nínú àwọn ìbéèrè rẹ

## Àwọn Ìgbésẹ̀ Tó Kàn {#next-steps}

Lẹ́yìn ṣíṣe ìtọ́kasí ojúlé rẹ:

1. **Lo Theme Builder**: Ṣẹ̀dá theme àkànṣe tó dá lórí site_brief rẹ
2. **Ṣàtúnṣe Àpẹrẹ**: Lo ọgbọ́n Ẹwà Ètò Àpẹrẹ fún iṣẹ́ àpẹrẹ pẹ̀kípẹ̀kí
3. **Gbero Àkóónú**: Béèrè lọ́wọ́ àwọn aṣojú fún àwọn ìmọ̀ràn ètò àkóónú
4. **Kọ́ Àwọn Ẹ̀yà**: Béèrè fún àwọn ẹ̀yà tó bá àwọn ibi-afẹ́ iṣowo rẹ mu
