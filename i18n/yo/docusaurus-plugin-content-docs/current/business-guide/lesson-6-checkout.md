---
title: 'Ẹ̀kọ́ 6: Ìrírí Ìforúkọsílẹ̀'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Ẹ̀kọ́ 6: Ìrírí Ìforúkọsílẹ̀ {#lesson-6-the-signup-experience}

Ìṣàn checkout ni ibi tí ìfẹ́ ti di owó-wíwọlé. Ilana signup tí ó rú ẹni lójú tàbí tí ó wọ́pọ̀ ju máa ń pàdánù àwọn oníbàárà. Ìṣàn tó dá lórí niche pàtó, tó ń sọ èdè wọn, tí ó sì rọrùn, máa ń yí wọn padà sí oníbàárà.

## Ibi Tí A Dúró Sí {#where-we-left-off}

FitSite ti ní àwọn template àti àwọn plan tí a ti ṣètò. Ní báyìí a kọ ìrírí ìforúkọsílẹ̀ àti checkout tí yóò yí àwọn oní studio amọdájú padà sí oníbàárà tó ń san owó.

## Lílóye Ìṣàn Ìforúkọsílẹ̀ {#understanding-the-registration-flow}

Àwọn fọ́ọ̀mù checkout ti Ultimate Multisite jẹ́ fọ́ọ̀mù onígbésẹ̀-púpọ̀ tí a lè ṣe àtúnṣe rẹ̀ pátápátá. Fún FitSite, a fẹ́ ìṣàn kan tí:

1. Ń rí bí ẹni pé a kọ ọ́ fún àwọn ilé iṣẹ́ amọdájú
2. Ń gba ohun tí ó ṣe pàtàkì nìkan
3. Ń mú oníbàárà dé ibi tí ó ní site tó ń ṣiṣẹ́ ní kíákíá bí ó ti ṣeé ṣe

Wo [Ìṣàn Ìforúkọsílẹ̀](/user-guide/configuration/the-registration-flow) fún ìtọ́kasí imọ̀-ẹ̀rọ kíkún.

## Ṣíṣe Àpẹrẹ Checkout FitSite {#designing-the-fitsite-checkout}

Lọ sí **Ultimate Multisite > Checkout Forms** kí o sì dá fọ́ọ̀mù tuntun kan.

### Ìgbésẹ̀ 1: Yíyan Plan {#step-1-plan-selection}

Ohun àkọ́kọ́ tí oní studio amọdájú yẹ kí ó rí ni àwọn plan, tí a gbé kalẹ̀ ní àwọn ọ̀rọ̀ tí wọ́n lóye.

- Ṣàfikún field **Pricing Table**
- Ṣètò rẹ̀ kí ó fi gbogbo plan FitSite mẹ́ta hàn
- Àwọn àpèjúwe plan tí o kọ ní Ẹ̀kọ́ 5 yóò hàn níbí -- rí dájú pé wọ́n ń bá àwọn àìní ilé iṣẹ́ amọdájú sọ̀rọ̀, kì í ṣe àwọn àbùdá imọ̀-ẹ̀rọ

:::tip Èdè Niche Ṣe Pàtàkì
"1 GB storage" kò túmọ̀ sí ohunkóhun sí oní gym. "Gbogbo ohun tí o nílò fún website studio amọdájú amọ̀ja" túmọ̀ sí ohun gbogbo. Kọ àwọn àpèjúwe plan ní èdè oníbàárà rẹ.
:::

### Ìgbésẹ̀ 2: Yíyan Template {#step-2-template-selection}

Lẹ́yìn yíyan plan, oníbàárà yóò yan template ìbẹ̀rẹ̀ wọn.

- Ṣàfikún field **Template Selection**
- Àwọn template tó wà nílẹ̀ ni a máa ṣe àlẹmọ́ nípasẹ̀ plan tí wọ́n yàn (tí a ṣètò ní Ẹ̀kọ́ 5)
- Template kọ̀ọ̀kan yẹ kí ó ní àwòrán àkọ́wò tí ń fi apẹrẹ amọdájú-pàtó hàn

### Ìgbésẹ̀ 3: Ṣíṣẹ̀dá Account {#step-3-account-creation}

Jẹ́ kí èyí kéré. Gba wọ̀nyí nìkan:

- Àdírẹ́sì imeeli
- Ọ̀rọ̀ aṣínà
- Orúkọ studio/ilé iṣẹ́ (èyí yóò di orúkọ site wọn)

Má béèrè fún ìwífún tí o kò nílò nígbà signup. Field àfikún kọ̀ọ̀kan máa ń dín conversions kù.

### Ìgbésẹ̀ 4: Ṣíṣètò Site {#step-4-site-setup}

- **Àkọlé site**: Kún un ṣáájú láti inú orúkọ studio tí a tẹ ní Ìgbésẹ̀ 3
- **URL site**: Ṣẹ̀dá laifọwọ́yí láti inú orúkọ studio (fún àpẹẹrẹ, `ironworks.fitsite.com`)

### Ìgbésẹ̀ 5: Ìsanwó {#step-5-payment}

- Ṣàfikún field **Payment**
- Ṣètò payment gateway rẹ ([Stripe](/user-guide/payment-gateways/stripe) ni a ṣe àbá fún ìsanwó subscription)
- Tí o bá ti ṣẹ̀dá àwọn order bump ní Ẹ̀kọ́ 5, ṣàfikún field **Order Bump** ṣáájú ìgbésẹ̀ ìsanwó

### Ìgbésẹ̀ 6: Ìfìdímúlẹ̀ {#step-6-confirmation}

- Ṣe àtúnṣe ìfiranṣẹ́ ìfìdímúlẹ̀ pẹ̀lú èdè amọdájú-pàtó
- Àpẹẹrẹ: "A ń ṣẹ̀dá website studio amọdájú rẹ. A ó darí rẹ sí site tuntun rẹ ní ìṣẹ́jú-aaya díẹ̀."

## Ṣíṣàfikún Toggle Yíyan Àkókò {#adding-a-period-selection-toggle}

Tí o bá ṣètò àwọn ìyàtọ̀ owó nínú àwọn plan rẹ (oṣooṣù sí ọdọọdún), ṣàfikún field **Period Selection** sí fọ́ọ̀mù checkout kí àwọn oníbàárà lè yí padà láàárín àwọn àkókò ìsanwó. Wo [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) fún àwọn ìtọ́nisọ́nà.

## Ṣíṣètò Ìsanwó {#configuring-payment}

Tí o kò bá tíì ṣètò payment gateway:

1. Lọ sí **Ultimate Multisite > Settings > Payment Gateways**
2. Tẹ̀lé [ìtọ́nisọ́nà ṣíṣètò Stripe](/user-guide/payment-gateways/stripe) tàbí gateway tí o fẹ́ràn
3. Dán ìṣàn checkout kíkún kan wò pẹ̀lú ìsanwó ìdánwò

Wo [Gbígba Owó Sísan](/user-guide/payment-gateways/getting-paid) fún àlàyé lórí bí àwọn ìsanwó ṣe ń ṣàn sí account rẹ.

## Dídán Ìṣàn Náà Wò {#testing-the-flow}

Ṣáájú kí o tó tẹ̀síwájú, parí signup ìdánwò kíkún kan:

1. Ṣí fọ́ọ̀mù checkout nínú fèrèsé aṣàwákiri incognito/ikọ̀kọ̀
2. Yan plan kan
3. Yan template kan
4. Ṣẹ̀dá account kan
5. Parí ìsanwó (lo ipo ìdánwò)
6. Jẹ́rìí pé a ṣẹ̀dá site náà pẹ̀lú template tó tọ́

Ṣàyẹ̀wò pé:

- [ ] Àwọn àpèjúwe plan ṣe kedere, wọ́n sì jẹ́ niche-pàtó
- [ ] Àwọn àkọ́wò template fi àwọn apẹrẹ tó yẹ fún amọdájú hàn
- [ ] URL site ń ṣẹ̀dá dáadáa láti inú orúkọ studio
- [ ] Ìsanwó ń ṣiṣẹ́ láìṣòro
- [ ] Oníbàárà dé sí site tó ń ṣiṣẹ́ pẹ̀lú template tí a yàn
- [ ] Àwọn imeeli ìfìdímúlẹ̀ lo èdè amọdájú-pàtó

## Nẹ́tíwọ́ọ̀kì FitSite Títí Di Báyìí {#the-fitsite-network-so-far}

```
Nẹ́tíwọ́ọ̀kì FitSite
├── WordPress Multisite (ipo subdomain)
├── Ultimate Multisite (tí a ṣètò)
├── Ìgbàlejò pẹ̀lú wildcard SSL + ìtọ́ka domain
├── Àwọn Template Site (Studio Essential, Gym Pro, Fitness Chain)
├── Àwọn Ọjà (Starter, Growth, Pro + Order Bumps)
├── Ìṣàn Checkout
│   ├── Yíyan plan pẹ̀lú àwọn àpèjúwe niche-pàtó
│   ├── Yíyan template pẹ̀lú àwọn àkọ́wò amọdájú
│   ├── Ṣíṣẹ̀dá account kékeré
│   ├── Ìsanwó nípasẹ̀ Stripe
│   └── Ìfìdímúlẹ̀ amọdájú-pàtó
└── Ṣetán fún branding (ẹ̀kọ́ tó kàn)
```

## Ohun Tí A Kọ Ní Ẹ̀kọ́ Yìí {#what-we-built-this-lesson}

- **Fọ́ọ̀mù checkout onígbésẹ̀-púpọ̀** tí a ṣe fún àwọn oní studio amọdájú
- **Èdè niche-pàtó** jálẹ̀ ìṣàn signup
- **Ìkọ̀sẹ̀ díẹ̀ jù** -- àwọn field pàtàkì nìkan, ọ̀nà yára sí site tó ń ṣiṣẹ́
- **Ìṣepọ̀ ìsanwó** pẹ̀lú ìjẹ́rìí ìdánwò
- **Ìṣàn opin-sí-opin tí a ti dán wò** láti yíyan plan sí site tó ń ṣiṣẹ́

---

**Tó kàn:** [Ẹ̀kọ́ 7: Ṣíṣe É Ní Tirẹ](lesson-7-branding) -- a máa ṣe white-label platform náà, a sì máa fi FitSite múlẹ̀ gẹ́gẹ́ bí brand.
