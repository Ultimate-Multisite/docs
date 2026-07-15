---
title: 'Chidzidzo 3: Kumisikidza Netiweki Yako'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Chidzidzo 3: Kugadzira Network Yako

Nguva yekuvaka. Muchidzidzo chino uchaisa Ultimate Multisite uye kugadzirisa hwaro hweFitSite network. Sarudzo yega yega pano inoitwa tichifunga nezve niche yefitness.

## Patakasiira {#where-we-left-off}

Takasarudza masitudiyo efitenesi se niche yedu uye tikasimbisa mukana wacho. Iye zvino tinoshandura pfungwa iyoyo kuva platform inoshanda.

## Kusarudza Hosting Yako {#choosing-your-hosting}

Sarudzo yako yehosting inokosha zvikuru ku niche platform kupfuura kuwebsite imwe chete. Hausi kuhosta saiti imwe chete -- uri kuhosta network ichakura kusvika kumasaiti mazhinji kana mazana.

### Zvekutarisa {#what-to-look-for}

- **Rutsigiro rweWordPress Multisite**: Havasi vese mahost vanobata multisite zvakanaka
- **Wildcard SSL**: Yakakosha kuma network anoshandisa subdomain
- **Zviwanikwa zvinokwanisa kukura**: Unoda nzvimbo yekukura usingatamisi
- **Ultimate Multisite integration**: Automated domain mapping neSSL zvinoderedza zvikuru basa rekushanda

### Nzira Inokurudzirwa {#recommended-approach}

Sarudza host kubva parondedzero ye[Compatible Providers](/user-guide/host-integrations/closte). Ava vakaedzwa neUltimate Multisite uye vanopa ma integrations aunoda e domain mapping neSSL automation.

KuFitSite, tichashandisa subdomain configuration. Izvi zvinoreva kuti masaiti evatengi achatanga kuoneka se `studioname.fitsite.com` vasati vasarudza kumapa domain yavo.

## Kuisa WordPress Multisite {#installing-wordpress-multisite}

Kana usati watova ne WordPress Multisite installation:

1. Isa WordPress pa hosting provider yako
2. Tevera gwaro re[How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Sarudza **subdomain** configuration paunobvunzwa

:::tip Sei Subdomains?
Subdomains dzinopa saiti yemutengi wega wega kero yayo yakasiyana (`studio.fitsite.com`) pane nzira (`fitsite.com/studio`). Izvi zvinoita sehunyanzvi zvikuru kuvatengi vako uye zvinodzivirira kusawirirana kwepermalink. Ona [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) kuti uwane kuenzanisa kwakadzama.
:::

## Kuisa Ultimate Multisite {#installing-ultimate-multisite}

Tevera gwaro re[Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) kuti:

1. Uise uye uactivate chokuwedzera pa network yose
2. Mhanyisa [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Panguva ye setup wizard, ramba uchifunga nezve FitSite niche:

- **Currency**: Gadzirisa kumari inoshandiswa nevatengi vako vemastudio efitenesi
- **Company name**: "FitSite" (kana zita rebrand rawakasarudza)
- **Company logo**: Isa logo yebrand yako -- iyi inooneka pama invoice nemaemail

## Kugadzirisa kuFitness Niche {#configuring-for-the-fitness-niche}

NeUltimate Multisite yaiswa, ita sarudzo idzi dzekugadzirisa dzakanangana ne niche:

### General Settings {#general-settings}

Enda ku **Ultimate Multisite > Settings** uye gadzirisa:

- **Site name**: FitSite
- **Default role**: Administrator -- varidzi vemastudio efitenesi vanoda kutonga zvizere zviri musaiti yavo
- **Registration**: Vhura kunyoresa kwevashandisi kuitira kuti varidzi vemastudio vakwanise kusaina vega

### Kugadzirisa Email {#email-configuration}

Maemail esystem yako anofanira kutaura mutauro we niche yako. Enda ku **Ultimate Multisite > Settings > Emails** uye gadzirisa:

- Tsiva mutauro wakajairika wekuti "your new site" nemameseji akanangana nefitenesi
- Muenzaniso we welcome subject: "Website yestudio yako yefitenesi yagadzirira"
- Muenzaniso we welcome body: Taura nezvestudio yavo, makirasi, uye kutanga kushandisa saiti yavo yefitenesi

Tichazvinatsiridza zvakare muChidzidzo 8 (Customer Onboarding), asi kugadzirisa matauriro izvozvi kunoita kuti kunyange ma test signups ekutanga anzwe akanangana ne niche.

### Kugadzirisa Domain {#domain-configuration}

Kana uchishandisa compatible hosting provider, gadzirisa domain mapping izvozvi:

1. Enda ku **Ultimate Multisite > Settings > Domain Mapping**
2. Tevera gwaro re integration rehost yako chaiyo
3. Edza kuti subsites matsva awane SSL otomatiki

Izvi zvinoita kuti patinotanga kugadzira templates nemasaiti ekuyedza muchidzidzo chinotevera, zvese zvishande kubva pakutanga kusvika pakupedzisira.

## FitSite Network Kusvika Parizvino {#the-fitsite-network-so-far}

Pakupera kwechidzidzo chino, hezvino zvaunazvo:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (yakaiswa uye yakagadziriswa)
├── Hosting ine wildcard SSL
├── Domain mapping yakagadziriswa
├── Ma email templates akanangana ne niche (ekutanga)
└── Yakagadzirira site templates (chidzidzo chinotevera)
```

## Zvatakavaka Muchidzidzo Chino {#what-we-built-this-lesson}

- **WordPress Multisite inoshanda** installation mu subdomain mode
- **Ultimate Multisite yaiswa** uye yakagadziriswa neFitSite branding
- **Hosting neSSL** zvakagadzirirwa network iri kukura
- **Domain mapping** yakagadziriswa kuhosting provider yako
- **Matauriro eemail akanangana ne niche** akatangwa kubva pazuva rekutanga

---

**Chinotevera:** [Chidzidzo 4: Kuvaka Niche Templates](lesson-4-templates) -- tinogadzira site templates dzichanyatsoda kushandiswa nevaridzi vemastudio efitenesi.
