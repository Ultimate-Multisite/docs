---
title: 'Aralin 3: Pagse-set up ng Iyong Network'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Aralin 3: Pag-set Up ng Iyong Network {#lesson-3-setting-up-your-network}

Oras na para bumuo. Sa araling ito, i-install mo ang Ultimate Multisite at iko-configure ang pundasyon ng FitSite network. Bawat desisyon dito ay ginawa nang isinasaalang-alang ang fitness niche.

## Saan Tayo Huminto {#where-we-left-off}

Pinili natin ang mga fitness studio bilang ating niche at napatunayan ang oportunidad. Ngayon, gagawin nating gumaganang platform ang ideyang iyon.

## Pagpili ng Iyong Hosting {#choosing-your-hosting}

Mas mahalaga ang pagpili mo ng hosting para sa isang niche platform kaysa sa isang solong website. Hindi ka nagho-host ng isang site -- nagho-host ka ng isang network na lalaki hanggang maging dose-dosenang o daan-daang site.

### Ano ang Hahanapin {#what-to-look-for}

- **Suporta sa WordPress Multisite**: Hindi lahat ng host ay mahusay humawak ng multisite
- **Wildcard SSL**: Mahalaga para sa mga network na nakabatay sa subdomain
- **Nasusukat na resources**: Kailangan mo ng espasyo para lumago nang hindi nagmi-migrate
- **Ultimate Multisite integration**: Ang awtomatikong domain mapping at SSL ay nakakatipid ng malaking operasyonal na pagsisikap

### Inirerekomendang Paraan {#recommended-approach}

Pumili ng host mula sa listahan ng [Mga Compatible Provider](/user-guide/host-integrations/closte). Nasubukan na ang mga ito kasama ng Ultimate Multisite at nagbibigay ng mga integration na kailangan mo para sa domain mapping at SSL automation.

Para sa FitSite, gagamit tayo ng subdomain configuration. Ibig sabihin nito, sa simula ay lalabas ang mga customer site bilang `studioname.fitsite.com` bago nila opsyonal na i-map ang sarili nilang domain.

## Pag-install ng WordPress Multisite {#installing-wordpress-multisite}

Kung wala ka pang WordPress Multisite installation:

1. I-install ang WordPress sa iyong hosting provider
2. Sundin ang gabay na [Paano I-install ang WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Piliin ang **subdomain** configuration kapag hiniling

:::tip Bakit Subdomains?
Binibigyan ng subdomains ang bawat customer site ng sarili nitong natatanging address (`studio.fitsite.com`) sa halip na path (`fitsite.com/studio`). Mas propesyonal ito para sa iyong mga customer at iniiwasan ang mga permalink conflict. Tingnan ang [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) para sa detalyadong paghahambing.
:::

## Pag-install ng Ultimate Multisite {#installing-ultimate-multisite}

Sundin ang gabay na [Pag-install ng Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) para:

1. I-upload at i-activate ang plugin sa buong network
2. Patakbuhin ang [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Habang nasa setup wizard, isaisip ang FitSite niche:

- **Currency**: Itakda sa currency na ginagamit ng iyong mga customer na fitness studio
- **Pangalan ng kumpanya**: "FitSite" (o ang napili mong brand name)
- **Logo ng kumpanya**: I-upload ang iyong brand logo -- lumalabas ito sa mga invoice at email

## Pag-configure para sa Fitness Niche {#configuring-for-the-fitness-niche}

Kapag naka-install na ang Ultimate Multisite, gawin ang mga pagpiling configuration na partikular sa niche:

### Mga Pangkalahatang Setting {#general-settings}

Pumunta sa **Ultimate Multisite > Settings** at i-configure:

- **Pangalan ng site**: FitSite
- **Default na role**: Administrator -- kailangan ng mga may-ari ng fitness studio ng buong kontrol sa nilalaman ng kanilang site
- **Registration**: I-enable ang user registration para makapag-sign up mismo ang mga may-ari ng studio

### Configuration ng Email {#email-configuration}

Dapat magsalita ang iyong mga system email sa wika ng iyong niche. Pumunta sa **Ultimate Multisite > Settings > Emails** at i-customize:

- Palitan ang generic na pananalitang "your new site" ng messaging na partikular sa fitness
- Halimbawang welcome subject: "Handa na ang website ng iyong fitness studio"
- Halimbawang welcome body: Tukuyin ang kanilang studio, mga klase, at pagsisimula sa kanilang fitness site

Pipinuhin pa natin ang mga ito sa Aralin 8 (Customer Onboarding), ngunit ang pagtatakda ng tono ngayon ay nagsisiguro na kahit ang mga maagang test signup ay ramdam na partikular sa niche.

### Configuration ng Domain {#domain-configuration}

Kung gumagamit ng compatible hosting provider, i-configure na ngayon ang domain mapping:

1. Pumunta sa **Ultimate Multisite > Settings > Domain Mapping**
2. Sundin ang integration guide para sa iyong partikular na host
3. Subukan na awtomatikong nakakakuha ng SSL ang mga bagong subsite

Tinitiyak nito na kapag nagsimula tayong gumawa ng mga template at test site sa susunod na aralin, gumagana ang lahat mula simula hanggang dulo.

## Ang FitSite Network sa Ngayon {#the-fitsite-network-so-far}

Sa dulo ng araling ito, narito ang mayroon ka:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (naka-install at naka-configure)
├── Hosting na may wildcard SSL
├── Naka-configure ang domain mapping
├── Mga template ng email na partikular sa niche (pauna)
└── Handa na para sa mga template ng site (susunod na aralin)
```

## Ang Binuo Natin sa Araling Ito {#what-we-built-this-lesson}

- **Isang gumaganang WordPress Multisite** installation sa subdomain mode
- **Naka-install ang Ultimate Multisite** at naka-configure kasama ang FitSite branding
- **Hosting at SSL** na naka-set up para sa lumalaking network
- **Domain mapping** na naka-configure para sa iyong hosting provider
- **Tono ng email na partikular sa niche** na naitatag mula unang araw

---

**Susunod:** [Aralin 4: Pagbuo ng Mga Niche Template](lesson-4-templates) -- gagawa tayo ng mga site template na talagang gugustuhing gamitin ng mga may-ari ng fitness studio.
