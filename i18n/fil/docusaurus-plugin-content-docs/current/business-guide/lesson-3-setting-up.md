---
title: 'Aralin 3: Pag-aayos ng Iyong Network'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lesson 3: Pag-set Up ng Iyong Network

Oras na para magtayo. Sa araling ito, i-iinstall natin ang Ultimate Multisite at i-ko-configure ang pundasyon ng FitSite network. Ang bawat desisyon dito ay isinasaalang-alang ang fitness niche.

## Saan Tayo Tumigil

Pinili natin ang mga fitness studio bilang ating niche at napatunayan natin ang pagkakataon. Ngayon, gagawin nating gumaganang platform ang ideyang iyon.

## Pagpili ng Hosting

Mas mahalaga ang pagpili mo ng hosting para sa isang niche platform kaysa sa isang website lang. Hindi ka nagho-host ng isang site—nagho-host ka ng isang network na lalaki hanggang sa dose-dosenang o daan-daang sites.

### Ano ang Dapat Hanapin

- **WordPress Multisite support**: Hindi lahat ng host ay mahusay sa multisite
- **Wildcard SSL**: Mahalaga ito para sa mga network na gumagamit ng subdomain
- **Scalable resources**: Kailangan mo ng espasyo para lumaki nang hindi na kailangang mag-migrate
- **Ultimate Multisite integration**: Ang awtomatikong pag-map ng domain at SSL ay nakakatipid ng malaking effort sa operasyon

### Inirerekomendang Paraan

Pumili ng host mula sa listahan ng [Compatible Providers](/user-guide/host-integrations/closte). Nasubukan na ang mga ito kasama ang Ultimate Multisite at nagbibigay sila ng mga integrasyon na kailangan mo para sa domain mapping at SSL automation.

Para sa FitSite, gagamit tayo ng subdomain configuration. Ibig sabihin, ang mga site ng customer ay magsisimula na magpakita bilang `studioname.fitsite.com` bago nila opsyonal na i-map ang sarili nilang domain.

## Pag-install ng WordPress Multisite

Kung wala ka pang WordPress Multisite installation:

1. I-install ang WordPress sa iyong hosting provider
2. Sundin ang gabay na [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Piliin ang **subdomain** configuration kapag tinanong ka

:::tip Bakit Subdomains?
Ang mga subdomain ay nagbibigay sa bawat site ng customer ng sarili nitong natatanging address (`studio.fitsite.com`) sa halip na isang path (`fitsite.com/studio`). Mas propesyonal ito para sa iyong mga customer at iniiwasan nito ang mga conflict sa permalink. Tingnan ang [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) para sa detalyadong paghahambing.
:::

## Pag-install ng Ultimate Multisite

Sundin ang [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) guide para:

1. I-upload at i-activate ang plugin sa buong network
2. Patakbuhin ang [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Habang ginagawa ang setup wizard, tandaan ang FitSite niche:

- **Currency**: Itakda sa currency na ginagamit ng mga customer ng fitness studio mo
- **Company name**: "FitSite" (o ang napili mong brand name)
- **Company logo**: I-upload ang logo ng brand mo -- ito ay lalabas sa mga invoice at email

## Pag-configure para sa Fitness Niche

Sa pagka-install ng Ultimate Multisite, gawin ang mga sumusunod na niche-specific configuration choices:

### General Settings

Pumunta sa **Ultimate Multisite > Settings** at i-configure ang:

- **Site name**: FitSite
- **Default role**: Administrator -- kailangan ng mga may-ari ng fitness studio ang buong kontrol sa nilalaman ng kanilang site
- **Registration**: I-enable ang user registration para makapag-sign up ang mga may-ari ng studio

### Email Configuration

Ang mga system email mo ay dapat nagsasalita ng wika ng iyong niche. Pumunta sa **Ultimate Multisite > Settings > Emails** at i-customize ang:

- Palitan ang generic na "your new site" language ng mensaheng specific sa fitness
- Halimbawa ng subject ng welcome: "Handa na ang website ng fitness studio mo"
- Halimbawa ng katawan ng welcome: Banggitin ang kanilang studio, mga klase, at kung paano magsimula sa kanilang fitness site

Pagpapahusay pa natin ito sa Lesson 8 (Customer Onboarding), ngunit ang pagtatakda ng tono ngayon ay nagsisiguro na kahit ang mga maagang test sign-up ay pakiramdam na niche-specific.

### Domain Configuration

Kung gumagamit ng compatible hosting provider, i-configure na ang domain mapping:

1. Pumunta sa **Ultimate Multisite > Settings > Domain Mapping**
2. Sundin ang integration guide para sa iyong specific host
3. Subukan na ang mga bagong subsites na awtomatikong nakakakuha ng SSL

Tinitiyak nito na kapag nagsimula na tayong gumawa ng mga template at test sites sa susunod na lesson, lahat ay gumagana mula simula hanggang katapusan.

## Ang FitSite Network Hanggang Ngayon

Sa pagtatapos ng araling ito, ito ang meron ka:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## Ano ang Binuo Natin sa Araling Ito

- **Isang gumaganang WordPress Multisite** installation sa subdomain mode
- **Ultimate Multisite na naka-install** at naka-configure na may FitSite branding
- **Hosting at SSL** na naka-set up para sa isang lumalaking network
- **Domain mapping** na naka-configure para sa iyong hosting provider
- **Niche-specific email tone** na itinatag mula pa sa simula

---

**Next:** [Lesson 4: Building Niche Templates](lesson-4-templates) -- gagawa tayo ng mga site template na talagang gugustuhin gamitin ng mga may-ari ng fitness studio.
