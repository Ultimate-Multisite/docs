---
title: 'Leksyon 3: Pag-set up sa Imong Network'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lesson 3: Pag-set up sa Imong Network {#lesson-3-setting-up-your-network}

Oras na aron magtukod. Sa lesson ni, i-install nimo ang Ultimate Multisite ug i-configure ang pundasyon sa FitSite network. Ang matag desisyon dinhi gihunahuna ang fitness niche.

## Asa Kita Nahuman {#where-we-left-off}

Gipili nato ang mga fitness studio isip atong niche ug gi-validate ang oportunidad. Karon, himoon nato kining ideya nga usa ka naglihok nga plataporma.

## Pagpili sa Imong Hosting {#choosing-your-hosting}

Ang imong pagpili sa hosting mas importante para sa usa ka niche nga plataporma kaysa sa usa lang ka website. Wala ka mag-host og usa ka site—nag-host ka og network nga motubo ngadto sa dose o gatosan ka mga sites.

### Unsa ang Kinahanglan Tan-awon {#what-to-look-for}

- **WordPress Multisite support**: Dili tanang hosts makadawat og multisite maayo
- **Wildcard SSL**: Importante para sa mga network nga gigamit ang subdomain
- **Scalable resources**: Kinahanglan nimo og espasyo aron motubo nga dili kinahanglang magbalhin (migrate)
- **Ultimate Multisite integration**: Ang automated domain mapping ug SSL makadaginot kaayo sa effort sa pagdumala

### Rekomendado nga Paagi {#recommended-approach}

Piliha ang usa ka host gikan sa listahan sa [Compatible Providers](/user-guide/host-integrations/closte). Kini gi-test na uban sa Ultimate Multisite ug naghatag og mga integration nga imong kinahanglan para sa domain mapping ug SSL automation.

Para sa FitSite, mogamit kita og subdomain configuration. Nagpasabot kini nga ang mga site sa kustomer magsugod nga makita isip `studioname.fitsite.com` sa wala pa sila mag-map sa ilang kaugalingon nga domain.

## Pag-install sa WordPress Multisite {#installing-wordpress-multisite}

Kung wala ka pa’y WordPress Multisite installation:

1. I-install ang WordPress sa imong hosting provider
2. Sunda ang [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) guide
3. Piliha ang **subdomain** configuration kung pangutan-on ka

:::tip Ngano Subdomains?
Ang subdomains naghatag sa matag site sa kustomer og kaugalingong address (`studio.fitsite.com`) imbes nga usa ka path (`fitsite.com/studio`). Mas propesyonal kini para sa imong mga kustomer ug makalikay sa permalink conflicts. Tan-awa ang [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) alang sa detalyado nga pagtandi.
:::

## Pag-install sa Ultimate Multisite {#installing-ultimate-multisite}

Sunda ang [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) guide aron:

1. I-upload ug i-activate ang plugin network-wide
2. Paandar ang [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Atol sa setup wizard, hinumdomi ang FitSite niche:

- **Currency**: Itakda kini sa currency nga gigamit sa imong mga kustomer sa fitness studio
- **Company name**: "FitSite" (o ang imong gipili nga brand name)
- **Company logo**: I-upload ang logo sa inyong brand -- kini makita sa mga invoice ug emails

## Pag-configure para sa Fitness Niche {#configuring-for-the-fitness-niche}

Sa pagka-install na sa Ultimate Multisite, himoa kining niche-specific nga configuration choices:

### General Settings {#general-settings}

Pangadto sa **Ultimate Multisite > Settings** ug i-configure:

- **Site name**: FitSite
- **Default role**: Administrator -- ang mga tag-iya sa fitness studio kinahanglan og bug-os nga kontrol sa ilang site content
- **Registration**: I-enable ang user registration aron ang mga tag-iya sa studio makarehistro sa ilang kaugalingon

### Email Configuration {#email-configuration}

Ang imong system emails kinahanglang mosulti sa pinulongan sa imong niche. Pangadto sa **Ultimate Multisite > Settings > Emails** ug i-customize:

- I-ilis ang generic nga "your new site" language og mensahe nga espesipiko sa fitness
- Example welcome subject: "Andam na ang website sa inyong fitness studio"
- Example welcome body: Paghisgot bahin sa ilang studio, mga klase, ug pagpasiugda sa ilang fitness site

Mas paayo pa nato ni kini sa Lesson 8 (Customer Onboarding), apan ang pagtakda sa tono karon makasiguro nga bisan ang sayong test signups gibati nga niche-specific.

### Domain Configuration {#domain-configuration}

Kung naggamit ka og compatible hosting provider, i-configure na ang domain mapping:

1. Pangadto sa **Ultimate Multisite > Settings > Domain Mapping**
2. Sunda ang integration guide para sa imong specific host
3. I-test nga ang mga bag-ong subsites makakuha og SSL automatically

Kini nagsiguro nga kung magsugod na kita paghimo og templates ug test sites sa sunod nga lesson, mahimong molihok tanan gikan sa sinugdano hangtod sa katapusan.

## Ang FitSite Network Hangtud Karon {#the-fitsite-network-so-far}

Sa katapusan niining lesson, mao kini ang imong nakuha:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## Unsa ang Nato Gitukod Niining Lesson {#what-we-built-this-lesson}

- **Usa ka naglihok nga WordPress Multisite** installation sa subdomain mode
- **Ultimate Multisite gi-install** ug giconfigure uban ang FitSite branding
- **Hosting ug SSL** nga gitakda para sa usa ka motubo nga network
- **Domain mapping** nga giconfigure alang sa imong hosting provider
- **Niche-specific email tone** nga gitukod sukad pa sa sinugdanan

---

**Next:** [Lesson 4: Building Niche Templates](lesson-4-templates) -- maghimo kita og site templates nga gusto gyud gamiton sa mga tag-iya sa fitness studio.
