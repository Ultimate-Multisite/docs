---
title: 'Chidzidzo 6: Chiitiko cheKunyoresa'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Chidzidzo 6: Chiitiko cheKunyoresa

Mafambiro echeckout ndipo panoshanduka kufarira kuva mari. Maitiro ekunyoresa anovhiringidza kana akajairika anorasisa vatengi. Mafambiro akanangana neboka rako, anotaura mutauro wavo uye anonzwa ari nyore, anoshandura vanhu kuva vatengi.

## Patakagumira

FitSite ine matemplate nezvirongwa zvakagadziriswa. Iye zvino tinovaka chiitiko chekunyoresa necheckout chinoshandura varidzi vemastudio ekusimbisa muviri kuva vatengi vanobhadhara.

## Kunzwisisa Mafambiro eKunyoresa

Mafomu echeckout eUltimate Multisite anogoneka kugadziridzwa zvizere uye ane nhanho dzakawanda. KuFitSite, tinoda mafambiro ano:

1. Nzwa sekuti akavakirwa mabhizinesi ekusimbisa muviri
2. Unganidza chete zvinodiwa
3. Endesa mutengi kusaiti inoshanda nekukurumidza sezvinobvira

Ona [Mafambiro eKunyoresa](/user-guide/configuration/the-registration-flow) kuti uwane gwaro rose rehunyanzvi.

## Kugadzira Checkout yeFitSite

Enda ku **Ultimate Multisite > Checkout Forms** ugadzire fomu idzva.

### Nhanho 1: Kusarudza Chirongwa

Chinhu chekutanga chinoonekwa nemuridzi westudio yekusimbisa muviri chinofanira kuva zvirongwa, zvichiratidzwa nemashoko avanonyatsonzwisisa.

- Wedzera ndima ye **Tafura yeMitengo**
- Igadzirise kuti iratidze zvirongwa zvitatu zvose zveFitSite
- Tsananguro dzezvirongwa dzawakanyora muChidzidzo 5 dzinoonekwa pano -- iva nechokwadi chekuti dzinotaura nezvezvinodiwa nemabhizinesi ekusimbisa muviri, kwete maficha ehunyanzvi

:::tip Mutauro weBoka Rako Wakakosha
"1 GB storage" hazvirevi chinhu kumuridzi wejimu. "Zvose zvaunoda kuti uve newebhusaiti yestudio yehunyanzvi" zvinoreva zvose. Nyora tsananguro dzezvirongwa nemutauro wemutengi wako.
:::

### Nhanho 2: Kusarudza Template

Mushure mekusarudza chirongwa, mutengi anosarudza template yavanotangira nayo.

- Wedzera ndima ye **Kusarudza Template**
- Matemplate aripo anosefwa nechirongwa chavakasarudza (chakagadziriswa muChidzidzo 5)
- Template imwe neimwe inofanira kuva nemufananidzo wepreview unoratidza dhizaini yakanangana nekusimbisa muviri

### Nhanho 3: Kugadzira Account

Ita kuti izvi zvive zvishoma. Unganidza chete:

- Kero yeemail
- Password
- Zita restudio/bhizinesi (rinova zita resaiti yavo)

Usabvunze ruzivo rwausingadi pakunyoresa. Ndima imwe neimwe yakawedzerwa inoderedza shanduko dzevatengi.

### Nhanho 4: Kugadzira Saiti

- **Musoro wesaiti**: Zadza kare kubva kuzita restudio rakaiswa muNhanho 3
- **Site URL**: Gadzira otomatiki kubva kuzita restudio (semuenzaniso, `ironworks.fitsite.com`)

### Nhanho 5: Muripo

- Wedzera ndima ye **Muripo**
- Gadzirisa payment gateway yako ([Stripe](/user-guide/payment-gateways/stripe) inokurudzirwa pakubhadharisa subscription)
- Kana wakagadzira maorder bump muChidzidzo 5, wedzera ndima ye **Order Bump** pamberi penhanho yemuripo

### Nhanho 6: Kusimbisa

- Gadzirisa meseji yekusimbisa nemutauro wakanangana nekusimbisa muviri
- Muenzaniso: "Webhusaiti yestudio yako yekusimbisa muviri iri kugadzirwa. Uchaendeswa kusaiti yako itsva mumasekonzi mashoma."

## Kuwedzera Toggle Yekusarudza Nguva

Kana wakamisa misiyano yemitengo muzvirongwa zvako (pamwedzi vs. pagore), wedzera ndima ye **Kusarudza Nguva** kufomu recheckout kuitira kuti vatengi vagone kuchinja pakati penguva dzekubhadhara. Ona [Mafomu eCheckout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) kuti uwane mirayiridzo.

## Kugadzirisa Muripo

Kana usati wagadzira payment gateway:

1. Enda ku **Ultimate Multisite > Settings > Payment Gateways**
2. Tevera [gwaro rekugadzira Stripe](/user-guide/payment-gateways/stripe) kana gateway yaunoda
3. Edza mafambiro echeckout akazara nemuripo wekuyedza

Ona [Kubhadharwa](/user-guide/payment-gateways/getting-paid) kuti uwane ruzivo rwekuti mari inoyerera sei kuaccount yako.

## Kuyedza Mafambiro

Usati waenderera mberi, pedzisa kunyoresa kwekuyedza kwakazara:

1. Vhura fomu recheckout pahwindo rebrowser re incognito/private
2. Sarudza chirongwa
3. Sarudza template
4. Gadzira account
5. Pedzisa muripo (shandisa test mode)
6. Simbisa kuti saiti yagadzirwa ne template chaiyo

Tarisa kuti:

- [ ] Tsananguro dzezvirongwa dzakajeka uye dzakanangana neboka rako
- [ ] Mapreview ematemplate anoratidza madhizaini akakodzera kusimbisa muviri
- [ ] Site URL inogadzirwa nemazvo kubva kuzita restudio
- [ ] Muripo unofambiswa zvinobudirira
- [ ] Mutengi anosvika pasaiti inoshanda ine template yakasarudzwa
- [ ] Maemail ekusimbisa anoshandisa mutauro wakanangana nekusimbisa muviri

## Network yeFitSite Kusvika Parizvino

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

## Zvatakavaka muChidzidzo Ichi

- **Fomu recheckout rine nhanho dzakawanda** rakagadzirirwa varidzi vemastudio ekusimbisa muviri
- **Mutauro wakanangana neboka rako** mumafambiro ose ekunyoresa
- **Kushomeka kwezvipingaidzo** -- ndima dzinokosha chete, nzira inokurumidza kuenda kusaiti inoshanda
- **Kubatanidzwa kwemuripo** nekusimbiswa kwekuyedza
- **Mafambiro akayedzwa kubva pakutanga kusvika pakupedzisira** kubva pakusarudza chirongwa kusvika kusaiti inoshanda

---

**Zvinotevera:** [Chidzidzo 7: Kuita Kuti Chive Chako](lesson-7-branding) -- tichaisa white-label papuratifomu uye kusimbisa FitSite sebrand.
