---
title: 'Leasan 6: Eòlas a’ chlàraidh'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Leasan 6: An t-Eòlas Clàraidh

’S ann san t-sruth checkout a thèid ùidh na teachd-a-steach. Caillidh pròiseas clàraidh troimh-chèile no ro choitcheann luchd-ceannach. Tionndaidhidh sruth sònraichte don niche, a bhruidhneas an cànan aca agus a tha a’ faireachdainn furasta, iad gu luchd-ceannach.

## Far an do Stad Sinn {#where-we-left-off}

Tha teamplaidean agus planaichean aig FitSite air an rèiteachadh. A-nis togaidh sinn an t-eòlas clàraidh is checkout a thionndaidheas sealbhadairean stiùideothan fallaineachd gu luchd-ceannach pàighidh.

## A’ Tuigsinn an t-Sruth Clàraidh {#understanding-the-registration-flow}

Tha foirmean checkout Ultimate Multisite nan foirmean ioma-cheum a ghabhas gnàthachadh gu tur. Airson FitSite, tha sinn ag iarraidh sruth a tha:

1. A’ faireachdainn mar gun deach a thogail airson gnìomhachasan fallaineachd
2. A’ cruinneachadh dìreach na tha a dhìth
3. A’ toirt an neach-ceannach gu làrach obrach cho luath ’s a ghabhas

Faic [An Sruth Clàraidh](/user-guide/configuration/the-registration-flow) airson an làn-iomradh teicnigeach.

## A’ Dealbhadh Checkout FitSite {#designing-the-fitsite-checkout}

Seòl gu **Ultimate Multisite > Foirmean Checkout** agus cruthaich foirm ùr.

### Ceum 1: Taghadh Plana {#step-1-plan-selection}

Bu chòir gur e na planaichean, air an taisbeanadh ann am briathran a thuigeas iad, a’ chiad rud a chì sealbhadair stiùideo fallaineachd.

- Cuir raon **Clàr Phrìsean** ris
- Rèitich e gus na trì planaichean FitSite uile a shealltainn
- Nochdaidh tuairisgeulan nam planaichean a sgrìobh thu ann an Leasan 5 an seo -- dèan cinnteach gu bheil iad a’ bruidhinn ri feumalachdan gnìomhachais fallaineachd, chan ri feartan teicnigeach

:::tip Tha Cànan Niche Cudromach
Chan eil "1 GB storage" a’ ciallachadh dad do shealbhadair gym. Tha "A h-uile rud a dh’fheumas tu airson làrach-lìn stiùideo proifeiseanta" a’ ciallachadh a h-uile rud. Sgrìobh tuairisgeulan plana ann an cànan an neach-ceannach agad.
:::

### Ceum 2: Taghadh Teamplaid {#step-2-template-selection}

Às dèidh dhaibh plana a thaghadh, taghaidh an neach-ceannach an teamplaid tòiseachaidh aca.

- Cuir raon **Taghadh Teamplaid** ris
- Tha na teamplaidean a tha rim faighinn air an sìoladh leis a’ phlana a thagh iad (air a rèiteachadh ann an Leasan 5)
- Bu chòir ìomhaigh ro-sheallaidh a bhith aig gach teamplaid a sheallas dealbhadh sònraichte do fhallaineachd

### Ceum 3: Cruthachadh Account {#step-3-account-creation}

Cùm seo cho beag ’s a ghabhas. Cruinnich a-mhàin:

- Seòladh puist-d
- Facal-faire
- Ainm an stiùideo/gnìomhachais (bidh seo na ainm làraich aca)

Na iarr fiosrachadh nach eil a dhìth ort aig àm clàraidh. Lùghdaichidh gach raon a bharrachd tionndaidhean.

### Ceum 4: Suidheachadh Làraich {#step-4-site-setup}

- **Tiotal làraich**: Ro-lìon bhon ainm stiùideo a chaidh a chur a-steach ann an Ceum 3
- **URL làraich**: Gin gu fèin-obrachail bhon ainm stiùideo (m.e., `ironworks.fitsite.com`)

### Ceum 5: Pàigheadh {#step-5-payment}

- Cuir an raon **Pàigheadh** ris
- Rèitich do gheata pàighidh (tha [Stripe](/user-guide/payment-gateways/stripe) air a mholadh airson bileachadh fo-sgrìobhaidh)
- Ma chruthaich thu tairgsean àrdachaidh òrduigh ann an Leasan 5, cuir raon **Tairgse Àrdachaidh Òrduigh** ris ron cheum pàighidh

### Ceum 6: Dearbhadh {#step-6-confirmation}

- Gnàthaich an teachdaireachd dearbhaidh le cànan sònraichte do fhallaineachd
- Eisimpleir: "Tha làrach-lìn an stiùideo fallaineachd agad ga cruthachadh. Thèid do stiùireadh chun làraich ùir agad ann am beagan dhiog."

## A’ Cur Toggle Taghadh Ùine Ris {#adding-a-period-selection-toggle}

Ma shuidhich thu caochlaidhean prìse anns na planaichean agad (mìosail an aghaidh bliadhnail), cuir raon **Taghadh Ùine** ris an fhoirm checkout gus am faod luchd-ceannach gluasad eadar amannan bileachaidh. Faic [Foirmean Checkout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) airson stiùireadh.

## A’ Rèiteachadh Pàighidh {#configuring-payment}

Mura do shuidhich thu geata pàighidh mu thràth:

1. Seòl gu **Ultimate Multisite > Roghainnean > Geataichean Pàighidh**
2. Lean [stiùireadh rèiteachaidh Stripe](/user-guide/payment-gateways/stripe) no an geata as fheàrr leat
3. Dèan deuchainn air sruth checkout slàn le pàigheadh deuchainn

Faic [A’ Faighinn Pàighte](/user-guide/payment-gateways/getting-paid) airson mion-fhiosrachadh air mar a bhios pàighidhean a’ sruthadh chun Account agad.

## A’ Dèanamh Deuchainn air an t-Sruth {#testing-the-flow}

Mus gluais thu air adhart, cuir crìoch air clàradh deuchainn slàn:

1. Fosgail an fhoirm checkout ann an uinneag brobhsaire incognito/prìobhaideach
2. Tagh plana
3. Tagh teamplaid
4. Cruthaich Account
5. Cuir crìoch air pàigheadh (cleachd modh deuchainn)
6. Dearbhaich gu bheil an làrach air a chruthachadh leis an teamplaid cheart

Dèan cinnteach gu bheil:

- [ ] Tuairisgeulan nam planaichean soilleir agus sònraichte don niche
- [ ] Ro-sheallaidhean teamplaid a’ sealltainn dhealbhaidhean iomchaidh do fhallaineachd
- [ ] URL na làraich ga ghineadh gu ceart bho ainm an stiùideo
- [ ] Am pàigheadh ga phròiseasadh gu soirbheachail
- [ ] An neach-ceannach a’ tighinn air tìr air làrach obrach leis an teamplaid a chaidh a thaghadh
- [ ] Puist-d dearbhaidh a’ cleachdadh cànan sònraichte do fhallaineachd

## Lìonra FitSite Gu Ruige Seo {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## Na Thog Sinn sa Leasan Seo {#what-we-built-this-lesson}

- **Foirm checkout ioma-cheum** air a tàillearachd do shealbhadairean stiùideothan fallaineachd
- **Cànan sònraichte don niche** air feadh an t-srutha clàraidh
- **Suathadh as lugha** -- dìreach raointean riatanach, slighe luath gu làrach obrach
- **Amalachadh pàighidh** le dearbhadh deuchainn
- **Sruth deireadh-gu-deireadh air a dhearbhadh** bho thaghadh plana gu làrach obrach

---

**Air adhart:** [Leasan 7: Ga Dhèanamh Leat Fhèin](lesson-7-branding) -- cuiridh sinn white-label air an àrd-ùrlar agus stèidhichidh sinn FitSite mar bhrand.
