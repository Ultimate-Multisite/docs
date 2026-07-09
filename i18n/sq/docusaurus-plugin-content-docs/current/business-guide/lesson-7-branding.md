---
title: 'Mësimi 7: Bëjeni tuajin'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Mësimi 7: Duke e bërë tuajën

Klientët tuaj nuk duhet të ndihen kurrë sikur po përdorin "ndonjë plugin WordPress." Ata duhet të ndihen sikur po përdorin FitSite -- një platformë e ndërtuar për industrinë e tyre. Ky mësim mbulon branding, white-labeling dhe bërjen e platformës të ndihet si një produkt.

## Ku e lamë

FitSite ka një rrjedhë funksionale checkout që i çon pronarët e studiove të fitnesit nga përzgjedhja e planit te një sajt live. Tani e bëjmë të gjithë përvojën të ndihet si një produkt koheziv dhe i markuar.

## Domain-i i platformës suaj

Themeli i markës suaj është domain-i juaj. Për FitSite:

- **Domain kryesor**: `fitsite.com` (sajti juaj i marketingut dhe rrënja e rrjetit)
- **Sajtet e klientëve**: `studioname.fitsite.com` (subdomains)
- **Domains të personalizuar**: Klientët në planet Growth dhe Pro mund të lidhin domain-in e tyre

### Konfigurimi i domain-it tuaj

1. Regjistroni domain-in e platformës suaj
2. Drejtojeni te ofruesi juaj i hosting
3. Konfiguroni wildcard DNS (`*.fitsite.com`) për subdomains të klientëve
4. Sigurohuni që wildcard SSL është aktiv

Shihni [Si të konfiguroni Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) për udhëzime të detajuara.

## White-Labeling për përvojën e admin

Kur një pronar studioje fitnesi hyn në Dashboard të sajtit të tij, ai duhet të shohë markën tuaj, jo branding të WordPress ose Ultimate Multisite.

### Faqe hyrjeje e personalizuar

Personalizoni faqen e hyrjes së WordPress për të shfaqur:

- Logon tuaj FitSite
- Imazheri sfondi të përshtatshme për fitnes
- Ngjyrat e markës suaj

### Branding i Dashboard

Përdorni addon [Krijuesi i faqeve admin](/addons/admin-page-creator) ose CSS të personalizuar për të:

- Zëvendësuar logon WordPress me logon tuaj FitSite
- Personalizuar skemën e ngjyrave të admin që të përputhet me markën tuaj
- Shtuar një widget të personalizuar në Dashboard me lidhje të shpejta dhe burime ndihme specifike për fitnes

### Faqe admin të personalizuara

Merrni parasysh krijimin e faqeve admin të personalizuara që nxjerrin në pah veprimet më të rëndësishme për pronarët e studiove të fitnesit:

- "Redaktoni orarin tuaj të klasave"
- "Përditësoni profilet e trajnerëve"
- "Shikoni sajtin tuaj"

Kjo e ul kurbën e të mësuarit duke vendosur veprimet e rëndësishme për fushën përpara dhe në qendër, në vend që t'i fshehë në menunë standarde të WordPress.

## Branding i komunikimeve tuaja

Çdo email, faturë dhe njoftim duhet të forcojë markën tuaj.

### Email-et e sistemit

Navigoni te **Ultimate Multisite > Settings > Emails** dhe personalizoni të gjitha email-et e sistemit:

- **Emri From**: FitSite
- **Email From**: hello@fitsite.com
- **Modelet e email-it**: Përdorni ngjyrat dhe logon e markës suaj
- **Gjuha**: Specifike për fitnes nga fillimi në fund

Email-e kyçe për t'u personalizuar:

| Email | Versioni gjenerik | Versioni FitSite |
|-------|----------------|-----------------|
| Mirëseardhje | "Sajti juaj i ri është gati" | "Faqja e internetit e studios suaj të fitnesit është live" |
| Dëftesë pagese | "Pagesa u mor" | "Pagesa e abonimit FitSite u konfirmua" |
| Përfundimi i provës | "Prova juaj po përfundon së shpejti" | "Prova juaj FitSite përfundon për 3 ditë -- mbajeni live faqen e internetit të studios suaj" |

### Faturat

Personalizoni modelet e faturave me:

- Logon tuaj FitSite dhe ngjyrat e markës
- Detajet e biznesit tuaj
- Emra produktesh specifikë për fitnes (jo ID planesh gjenerike)

## Sajti që shohin klientët

Domain-i juaj kryesor (`fitsite.com`) ka nevojë për një sajt marketingu që shet platformën. Ky është i ndarë nga admin i rrjetit Ultimate Multisite -- është fytyra publike e biznesit tuaj.

Faqet kyçe:

- **Faqja kryesore**: Propozim vlere i qartë për bizneset e fitnesit
- **Veçoritë**: Çfarë bën FitSite, në terma fitnesi
- **Çmimet**: Tre planet tuaja me krahasime veçorish specifike për fushën
- **Shembuj**: Shfaqni sajte të ndërtuara në platformë
- **Regjistrohu**: Lidhje drejt formularit tuaj checkout

:::tip Sajti juaj i marketingut mund të jetë një sajt rrjeti
Krijoni sajtin tuaj të marketingut si një sajt brenda rrjetit tuaj. Kjo ju lejon ta menaxhoni nga i njëjti Dashboard dhe demonstron aftësitë e platformës suaj.
:::

## Domain i personalizuar për klientët

Për klientët në planet që përfshijnë domains të personalizuar, dokumentoni qartë procesin:

1. Klienti regjistron ose transferon domain-in e tij te një registrar
2. Klienti përditëson DNS për ta drejtuar te platforma juaj (jepni rekordet e sakta)
3. Ultimate Multisite trajton domain mapping dhe SSL

Krijoni një artikull ndihme ose hyrje në bazën e njohurive posaçërisht për këtë proces, të shkruar për pronarë jo-teknikë të studiove të fitnesit.

## Rrjeti FitSite deri tani

```
Rrjeti FitSite
├── WordPress Multisite (modalitet subdomain)
├── Ultimate Multisite (i konfiguruar + i markuar)
├── Domain i platformës (fitsite.com + wildcard SSL)
├── Modele sajti (Studio Essential, Gym Pro, Fitness Chain)
├── Produkte (Starter, Growth, Pro + Order Bumps)
├── Rrjedhë checkout (specifike për fushën, e testuar)
├── Branding
│   ├── Faqe hyrjeje e personalizuar
│   ├── Dashboard admin i markuar
│   ├── Email-e sistemi specifike për fushën
│   ├── Fatura të markuara
│   └── Sajt marketingu në fitsite.com
└── Gati për rrjedhën e onboarding (mësimi tjetër)
```

## Çfarë ndërtuam në këtë mësim

- **Domain i platformës dhe DNS** të konfiguruara për një përvojë të markuar
- **Admin white-labeled** me branding FitSite nga fillimi në fund
- **Komunikime të personalizuara** -- email-et, faturat dhe njoftimet të gjitha në përputhje me markën
- **Një sajt marketingu** që ua shet FitSite pronarëve të studiove të fitnesit
- **Dokumentim për domain të personalizuar** për klientët që duan domain-in e tyre

---

**Tjetër:** [Mësimi 8: Onboarding i klientëve](lesson-8-onboarding) -- ne projektojmë përvojën që e kthen një regjistrim të ri në një klient aktiv dhe të kënaqur.
