---
title: 'Isomo rya 6: Uko kwiyandikisha bigenda'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Isomo rya 6: Uburambe bwo Kwiyandikisha {#lesson-6-the-signup-experience}

Inzira yo kwishyura ni ho inyungu ihinduka amafaranga yinjira. Uburyo bwo kwiyandikisha buteye urujijo cyangwa busanzwe cyane butuma utakaza abakiriya. Inzira yihariye ku cyiciro runaka, ivuga ururimi rwabo kandi yumvikana nk’iyoroshye, irabahindura abakiriya bishyura.

## Aho Twari Tugeze {#where-we-left-off}

FitSite ifite inyandikorugero na plans byamaze gushyirwaho. Ubu tugiye kubaka uburambe bwo kwiyandikisha no kwishyura buhindura ba nyiri studio za fitness abakiriya bishyura.

## Gusobanukirwa Inzira yo Kwiyandikisha {#understanding-the-registration-flow}

Amafishi yo kwishyura ya Ultimate Multisite ni amafishi y’intambwe nyinshi ashobora guhindurwa uko ushaka. Kuri FitSite, dushaka inzira:

1. Yumvikana nk’iyubakiwe ubucuruzi bwa fitness
2. Ikusanya gusa ibikenewe
3. Igeza umukiriya ku rubuga rukora vuba bishoboka

Reba [Inzira yo Kwiyandikisha](/user-guide/configuration/the-registration-flow) kugira ngo ubone ibisobanuro byose bya tekiniki.

## Gutegura Checkout ya FitSite {#designing-the-fitsite-checkout}

Jya kuri **Ultimate Multisite > Amafishi yo Kwishyura** maze ukore ifishi nshya.

### Intambwe ya 1: Guhitamo Plan {#step-1-plan-selection}

Ikintu cya mbere nyiri studio ya fitness abona kigomba kuba ari plans, zigaragajwe mu magambo yumva.

- Ongeramo umwanya wa **Imbonerahamwe y'Ibiciro**
- Wushyireho kugira ngo werekane plans zose uko ari eshatu za FitSite
- Ibisobanuro bya plan wanditse mu Isomo rya 5 bigaragara hano -- banza urebe neza ko bivuga ku bikenewe n’ubucuruzi bwa fitness, atari ibintu bya tekiniki

:::tip Ururimi rw'Icyiciro Runaka Rufite Akamaro
"Ububiko bwa 1 GB" nta cyo bivuze kuri nyiri gym. "Ibintu byose ukeneye ku rubuga rw'umwuga rwa studio" bivuze byose. Andika ibisobanuro bya plan mu rurimi rw'umukiriya wawe.
:::

### Intambwe ya 2: Guhitamo Inyandikorugero {#step-2-template-selection}

Nyuma yo guhitamo plan, umukiriya ahitamo inyandikorugero aheraho.

- Ongeramo umwanya wa **Guhitamo Inyandikorugero**
- Inyandikorugero ziboneka zungururwa hashingiwe kuri plan yahisemo (byashyizweho mu Isomo rya 5)
- Buri nyandikorugero igomba kugira ishusho y'ibanze igaragaza design yihariye ya fitness

### Intambwe ya 3: Gukora Account {#step-3-account-creation}

Bigumane byoroheje. Kusanya gusa:

- Aderesi ya email
- Ijambo ry'ibanga
- Izina rya studio/ubucuruzi (iri rihinduka izina ry'urubuga rwabo)

Ntugasabe amakuru udakeneye mu gihe cyo kwiyandikisha. Buri mwanya w'inyongera ugabanya umubare w'abiyandikisha.

### Intambwe ya 4: Gushyiraho Urubuga {#step-4-site-setup}

- **Umutwe w'urubuga**: Wuzuze mbere uhereye ku izina rya studio ryinjijwe mu Ntambwe ya 3
- **URL y'urubuga**: Yikore mu buryo bwikora uhereye ku izina rya studio (urugero, `ironworks.fitsite.com`)

### Intambwe ya 5: Kwishyura {#step-5-payment}

- Ongeramo umwanya wa **Kwishyura**
- Shyiraho inzira yawe yo kwakira ubwishyu ([Stripe](/user-guide/payment-gateways/stripe) ni yo isabwa ku kwishyurisha subscription)
- Niba wakoze order bumps mu Isomo rya 5, ongeramo umwanya wa **Order Bump** mbere y’intambwe yo kwishyura

### Intambwe ya 6: Kwemeza {#step-6-confirmation}

- Hindura ubutumwa bwo kwemeza ukoresheje ururimi rwihariye rwa fitness
- Urugero: "Urubuga rwa studio yawe ya fitness rurimo gukorwa. Urahita woherezwa ku rubuga rwawe rushya mu masegonda make."

## Kongeramo Akabuto ko Guhitamo Igihe {#adding-a-period-selection-toggle}

Niba warashyizeho itandukaniro ry'ibiciro muri plans zawe (buri kwezi ugereranyije n’umwaka), ongeramo umwanya wa **Guhitamo Igihe** ku ifishi yo kwishyura kugira ngo abakiriya bashobore guhinduranya ibihe byo kwishyuriraho. Reba [Amafishi yo Kwishyura](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) kugira ngo ubone amabwiriza.

## Gushyiraho Ubwishyu {#configuring-payment}

Niba utarashyiraho inzira yo kwakira ubwishyu:

1. Jya kuri **Ultimate Multisite > Igenamiterere > Inzira zo Kwakira Ubwishyu**
2. Kurikiza [umurongo ngenderwaho wo gushyiraho Stripe](/user-guide/payment-gateways/stripe) cyangwa indi nzira wifuza
3. Gerageza inzira yose yo kwishyura ukoresheje ubwishyu bw'igerageza

Reba [Kwakira Ubwishyu](/user-guide/payment-gateways/getting-paid) kugira ngo ubone ibisobanuro ku buryo ubwishyu bugera kuri konti yawe.

## Kugerageza Inzira {#testing-the-flow}

Mbere yo gukomeza, urangize igerageza ryuzuye ryo kwiyandikisha:

1. Fungura ifishi yo kwishyura mu idirishya rya browser rya incognito/private
2. Hitamo plan
3. Hitamo inyandikorugero
4. Kora Account
5. Rangiza kwishyura (koresha uburyo bw'igerageza)
6. Emeza ko urubuga rwakozwe rufite inyandikorugero ikwiye

Genzura ko:

- [ ] Ibisobanuro bya plan bisobanutse kandi byihariye ku cyiciro
- [ ] Amashusho y'ibanze y’inyandikorugero agaragaza designs zibereye fitness
- [ ] URL y'urubuga yikora neza uhereye ku izina rya studio
- [ ] Ubwishyu bukorwa neza
- [ ] Umukiriya agera ku rubuga rukora rufite inyandikorugero yahisemo
- [ ] Emails zo kwemeza zikoresha ururimi rwihariye rwa fitness

## Urusobe rwa FitSite Kugeza Ubu {#the-fitsite-network-so-far}

```
Urusobe rwa FitSite
├── WordPress Multisite (uburyo bwa subdomain)
├── Ultimate Multisite (byashyizweho)
├── Hosting ifite wildcard SSL + guhuza domain
├── Inyandikorugero z'Urubuga (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Inzira yo Kwishyura
│   ├── Guhitamo plan bifite ibisobanuro byihariye ku cyiciro
│   ├── Guhitamo inyandikorugero bifite amashusho y'ibanze ya fitness
│   ├── Gukora Account mu buryo bucye
│   ├── Kwishyura binyuze muri Stripe
│   └── Kwemeza byihariye bya fitness
└── Biteguye branding (isomo rikurikira)
```

## Ibyo Twubatse muri Iri Somo {#what-we-built-this-lesson}

- **Ifishi yo kwishyura y’intambwe nyinshi** igenewe ba nyiri studio za fitness
- **Ururimi rwihariye ku cyiciro** mu nzira yose yo kwiyandikisha
- **Inzitizi nke** -- imyanya y'ingenzi gusa, inzira yihuse igana ku rubuga rukora
- **Guhuza ubwishyu** hamwe no kubigenzura mu igerageza
- **Inzira yageragejwe kuva ku ntangiriro kugeza ku musozo** kuva ku guhitamo plan kugeza ku rubuga rukora

---

**Ibikurikira:** [Isomo rya 7: Kubigira Ibyawe](lesson-7-branding) -- dushyiraho white-label kuri platform kandi tukemeza FitSite nka brand.
