---
title: 'Ẹ̀kọ́ 3: Ṣíṣètò Nẹ́tíwọ́ọ̀kì Rẹ'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Ẹ̀kọ́ 3: Ṣíṣètò Nẹ́tíwọ́ọ̀kì Rẹ {#lesson-3-setting-up-your-network}

Àkókò láti kọ́ ọ. Nínú ẹ̀kọ́ yìí, ìwọ yóò fi Ultimate Multisite sílẹ̀, kí o sì ṣètò ìpìlẹ̀ nẹ́tíwọ́ọ̀kì FitSite. Gbogbo ìpinnu níbí ni a ṣe pẹ̀lú niche amọdájú ara ní lokàn.

## Ibi Tí A Dúró Sí {#where-we-left-off}

A yan àwọn studio amọdájú ara gẹ́gẹ́ bí niche wa, a sì jẹ́rìí pé àǹfààní wà níbẹ̀. Ní báyìí, a yóò yí èrò yẹn padà sí platform tó ń ṣiṣẹ́.

## Yíyan Hosting Rẹ {#choosing-your-hosting}

Yíyan hosting rẹ ṣe pàtàkì jù fún platform niche ju fún ojúlé wẹẹbu kan ṣoṣo lọ. Kì í ṣe ojúlé kan ni o ń host -- nẹ́tíwọ́ọ̀kì kan ni o ń host, èyí tí yóò dàgbà sí ọ̀pọ̀lọpọ̀ tàbí ọgọ́rọ̀ọ̀rún ojúlé.

### Ohun Tí O Yẹ Kí O Wá {#what-to-look-for}

- **Àtìlẹ́yìn WordPress Multisite**: Kì í ṣe gbogbo host ni ó máa ń bójú tó multisite dáadáa
- **Wildcard SSL**: Ó ṣe pàtàkì fún àwọn nẹ́tíwọ́ọ̀kì tó dá lórí subdomain
- **Àwọn ohun àmúṣiṣẹ́ tí a lè gbooro sí**: O nílò ààyè láti dàgbà láì ṣe migration
- **Ìṣàkóso Ultimate Multisite**: Domain mapping àti SSL aládàáṣiṣẹ́ ń fipamọ́ ìsapá iṣẹ́ púpọ̀

### Ọ̀nà Tí A Dábàá {#recommended-approach}

Yan host kan láti inú àtòkọ [Àwọn Olùpèsè Tó Bá Mu](/user-guide/host-integrations/closte). A ti dán àwọn wọ̀nyí wò pẹ̀lú Ultimate Multisite, wọ́n sì ń pèsè àwọn ìṣàkóso tí o nílò fún domain mapping àti SSL automation.

Fún FitSite, a ó lo ìṣètò subdomain. Èyí túmọ̀ sí pé àwọn ojúlé oníbàárà yóò kọ́kọ́ hàn bí `studioname.fitsite.com` kí wọ́n tó lè, bí wọ́n bá fẹ́, tọ́ka domain tiwọn sí i.

## Fífi WordPress Multisite Sílẹ̀ {#installing-wordpress-multisite}

Tí o kò bá tíì ní ìfísílẹ̀ WordPress Multisite:

1. Fi WordPress sílẹ̀ lórí olùpèsè hosting rẹ
2. Tẹ̀lé ìtọ́sọ́nà [Bí A Ṣe Lè Fi WordPress Multisite Sílẹ̀](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Yan ìṣètò **subdomain** nígbà tí wọ́n bá béèrè

:::tip Kí Nìdí Tí A Fi Yan Subdomains?
Subdomains ń fún ojúlé oníbàárà kọ̀ọ̀kan ní àdírẹ́sì tirẹ̀ tó yàtọ̀ (`studio.fitsite.com`) dípò path (`fitsite.com/studio`). Èyí dára síi nípa amóye fún àwọn oníbàárà rẹ, ó sì ń yàgò fún ìforígbárí permalink. Wo [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) fún àfiwé pẹ̀lú àlàyé kíkún.
:::

## Fífi Ultimate Multisite Sílẹ̀ {#installing-ultimate-multisite}

Tẹ̀lé ìtọ́sọ́nà [Fífi Ultimate Multisite Sílẹ̀](/user-guide/getting-started/installing-ultimate-multisite) láti:

1. Upload kí o sì activate afikun náà jákèjádò nẹ́tíwọ́ọ̀kì
2. Ṣiṣe [Olùrànlọ́wọ́ Ìṣètò](/user-guide/getting-started/multisite-setup-wizard)

Nígbà olùrànlọ́wọ́ ìṣètò, jẹ́ kí niche FitSite wà ní lokàn:

- **Currency**: Ṣètò sí owó tí àwọn oníbàárà studio amọdájú ara rẹ ń lò
- **Orúkọ ilé-iṣẹ́**: "FitSite" (tàbí orúkọ brand tí o yan)
- **Àmì ilé-iṣẹ́**: Upload àmì brand rẹ -- èyí máa ń hàn lórí àwọn invoice àti email

## Ṣíṣètò Fún Niche Amọdájú Ara {#configuring-for-the-fitness-niche}

Pẹ̀lú Ultimate Multisite tí a ti fi sílẹ̀, ṣe àwọn yíyan ìṣètò wọ̀nyí tó jẹ mọ́ niche:

### Àwọn Ètò Gbogbogbò {#general-settings}

Lọ sí **Ultimate Multisite > Settings** kí o sì ṣètò:

- **Orúkọ ojúlé**: FitSite
- **Ipò aiyipada**: Administrator -- àwọn onílé studio amọdájú ara nílò àkóso kíkún lórí àkóónú ojúlé wọn
- **Ìforúkọsílẹ̀**: Mú ìforúkọsílẹ̀ oníṣe ṣiṣẹ́ kí àwọn onílé studio lè forúkọ sílẹ̀ fúnra wọn

### Ìṣètò Email {#email-configuration}

Àwọn email eto rẹ gbọ́dọ̀ sọ èdè niche rẹ. Lọ sí **Ultimate Multisite > Settings > Emails** kí o sì ṣe àtúnṣe:

- Rọ́pò èdè gbogbogbò "ojúlé tuntun rẹ" pẹ̀lú ìfiránṣẹ́ tó jẹ mọ́ amọdájú ara
- Àpẹẹrẹ koko ìkíni: "Ojúlé wẹẹbu studio amọdájú ara rẹ ti ṣetán"
- Àpẹẹrẹ ara ìkíni: Tọ́ka sí studio wọn, àwọn kíláàsì, àti bí wọ́n ṣe lè bẹ̀rẹ̀ pẹ̀lú ojúlé amọdájú ara wọn

A ó tún àwọn wọ̀nyí ṣe dáadáa síi ní Ẹ̀kọ́ 8 (Ìbẹ̀rẹ̀ Oníbàárà), ṣùgbọ́n ṣíṣètò ìmọ̀lára náà báyìí ń jẹ́ kó dájú pé àwọn ìforúkọsílẹ̀ ìdánwò àkọ́kọ́ pàápàá ní ìmọ̀lára tó jẹ mọ́ niche.

### Ìṣètò Domain {#domain-configuration}

Tí o bá ń lo olùpèsè hosting tó bá mu, ṣètò domain mapping báyìí:

1. Lọ sí **Ultimate Multisite > Settings > Domain Mapping**
2. Tẹ̀lé ìtọ́sọ́nà ìṣàkóso fún host pàtó rẹ
3. Dán an wò pé àwọn subsite tuntun ń gba SSL láìfọwọ́ṣe

Èyí ń jẹ́ kó dájú pé nígbà tí a bá bẹ̀rẹ̀ sí í dá àwọn template àti àwọn ojúlé ìdánwò sílẹ̀ nínú ẹ̀kọ́ tó tẹ̀lé, gbogbo nǹkan ń ṣiṣẹ́ láti ìbẹ̀rẹ̀ dé òpin.

## Nẹ́tíwọ́ọ̀kì FitSite Títí Dé Báyìí {#the-fitsite-network-so-far}

Ní ìparí ẹ̀kọ́ yìí, ohun tí o ní rèé:

```
Nẹ́tíwọ́ọ̀kì FitSite
├── WordPress Multisite (ipo subdomain)
├── Ultimate Multisite (a ti fi sílẹ̀, a sì ti ṣètò)
├── Hosting pẹ̀lú wildcard SSL
├── Domain mapping tí a ti ṣètò
├── Àwọn template email tó jẹ mọ́ niche (àkọ́kọ́)
└── Ó ṣetán fún àwọn template ojúlé (ẹ̀kọ́ tó tẹ̀lé)
```

## Ohun Tí A Kọ́ Nínú Ẹ̀kọ́ Yìí {#what-we-built-this-lesson}

- **Ìfísílẹ̀ WordPress Multisite tó ń ṣiṣẹ́** nínú ipo subdomain
- **Ultimate Multisite tí a ti fi sílẹ̀** tí a sì ti ṣètò pẹ̀lú branding FitSite
- **Hosting àti SSL** tí a ti ṣètò fún nẹ́tíwọ́ọ̀kì tó ń dàgbà
- **Domain mapping** tí a ti ṣètò fún olùpèsè hosting rẹ
- **Ìmọ̀lára email tó jẹ mọ́ niche** tí a ti dá sílẹ̀ láti ọjọ́ kìíní

---

**Tó tẹ̀lé:** [Ẹ̀kọ́ 4: Kíkọ́ Àwọn Template Niche](lesson-4-templates) -- a ó dá àwọn template ojúlé sílẹ̀ tí àwọn onílé studio amọdájú ara yóò fẹ́ lò gan-an.
