---
title: 'Leksyon 7: Paghimo Nimo Kining Imo'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lesson 7: I-customize aron imo na {#lesson-7-making-it-yours}

Ang imong mga kustomer dili gayud angay magbati nga naggamit sila og "usa ra ka WordPress plugin." Kinahanglan nilang mabati nga naggamit sila sa FitSite — usa ka platform nga gilaraw alang sa ilang industriya. Kini nga leksyon naghisgot bahin sa branding, white-labeling, ug paghimo sa platform nga morag usa ka produkto mismo.

## Asa Kita Nagpahunong {#where-we-left-off}

Ang FitSite adunay functional checkout flow nga mohatod sa mga tag-iya sa fitness studio gikan sa pagpili og plano hangtod sa pagka-live nga site. Karon, himuon nato ang tibuok kasinatian nga morag usa ka bug-os ug branded nga produkto.

## Imong Platform Domain {#your-platform-domain}

Ang pundasyon sa imong brand mao ang imong domain. Para sa FitSite:

- **Main domain**: `fitsite.com` (imong marketing site ug network root)
- **Customer sites**: `studioname.fitsite.com` (subdomains)
- **Custom domains**: Ang mga kustomer nga naa sa Growth ug Pro plans makakonekta og ilang kaugalingon nga domain

### Pag-set up sa Imong Domain {#setting-up-your-domain}

1. Irehistro ang imong platform domain
2. I-point kini ngadto sa imong hosting provider
3. Konfigure ang wildcard DNS (`*.fitsite.com`) alang sa subdomains sa kustomer
4. Siguroha nga aktibo ang wildcard SSL

Tan-awa ang [How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) alang sa detalyado nga mga instruksyon.

## White-Labeling sa Admin Experience {#white-labeling-the-admin-experience}

Kung ang usa ka tag-iya sa fitness studio mo-log in sa ilang site dashboard, kinahanglan nga makakita sila sa imong brand, dili sa branding sa WordPress o Ultimate Multisite.

### Custom Login Page {#custom-login-page}

I-customize ang WordPress login page aron ipakita:

- Ang logo sa FitSite
- Background imagery nga angay sa fitness
- Ang mga kolor sa imong brand

### Dashboard Branding {#dashboard-branding}

Gamit ang [Admin Page Creator](/addons/admin-page-creator) addon o custom CSS aron:

- I-ilis ang WordPress logo sa imong FitSite logo
- I-customize ang admin color scheme aron magka-match sa imong brand
- Magdugang og custom dashboard widget nga adunay mga quick links ug help resources nga espesipiko sa fitness

### Custom Admin Pages {#custom-admin-pages}

Pagkonsiderar paghimo og custom admin pages nga nagpakita sa labing importante nga aksyon alang sa mga tag-iya sa fitness studio:

- "Edit Your Class Schedule"
- "Update Trainer Profiles"
- "View Your Site"

Makapamenos kini sa learning curve pinaagi sa pagbutang sa mga aksyon nga may kalabutan sa niche sa atubangan ug sentro, imbes nga itago kini sa standard WordPress menu.

## Pag-brand sa Imong Komunikasyon {#branding-your-communications}

Ang matag email, invoice, ug notification kinahanglan magpalig-on sa imong brand.

### System Emails {#system-emails}

Pangitaa ang **Ultimate Multisite > Settings > Emails** ug i-customize tanan nga system emails:

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: Gamit ang kolor ug logo sa imong brand
- **Language**: Fitness-specific sa tibuok

Mga importanteng email nga i-customize:

| Email | Generic Version | FitSite Version |
|-------|----------------|-----------------|
| Welcome | "Your new site is ready" | "Ang website sa fitness studio nimo kay live na" |
| Payment receipt | "Payment received" | "Nakareceive og bayad ang FitSite subscription payment confirmed" |
| Trial ending | "Your trial is ending soon" | "Mahurot na ang imong FitSite trial sa 3 ka adlaw — ipadayon pa ang website sa studio nimo" |

### Invoices {#invoices}

I-customize ang invoice templates uban niini:

- Ang logo ug kolor sa brand sa FitSite
- Imong business details
- Mga product names nga espesipiko sa fitness (dili generic plan IDs)

## Ang Site nga Makita sa Kustomer {#the-customer-facing-site}

Ang imong main domain (`fitsite.com`) kinahanglan og marketing site nga magbaligya sa platform. Kini lahi sa Ultimate Multisite network admin — kini ang publikong nawong sa imong negosyo.

Mga importanteng pages:

- **Homepage**: Klaro nga value proposition alang sa mga fitness businesses
- **Features**: Unsa ang gibuhat sa FitSite, sa termino sa fitness
- **Pricing**: Imong tulo ka plans nga adunay niche-specific feature comparisons
- **Examples**: Pagpakita og mga site nga gihimo gamit ang platform
- **Sign Up**: Mga link ngadto sa imong checkout form

:::tip Ang Imong Marketing Site Mahimong Network Site
Pagmugna og marketing site isip usa ka site sulod sa imong kaugalingon nga network. Kini makapahimo kanimo sa pagdumala niini gikan sa samang dashboard ug magpakita sa mga abilidad sa imong kaugalingon nga platform.
:::

## Custom Domain alang sa Kustomer {#custom-domain-for-customers}

Alang sa mga kustomer nga naa sa plans nga naglakip og custom domains, klaro nga idokumento ang proseso:

1. Irehistro o i-transfer sa kustomer ang ilang domain ngadto sa usa ka registrar
2. I-update sa kustomer ang DNS aron magtudlo kini sa imong platform (maghatag og eksaktong records)
3. Ang Ultimate Multisite mo-handle sa domain mapping ug SSL

Pagmugna og help article o knowledge base entry nga espesipiko alang niining prosesoha, nga gisulat para sa mga non-technical fitness studio owners.

## Ang FitSite Network Hangtud Karon {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Unsa ang Gibuhat Nato Niining Leksyon {#what-we-built-this-lesson}

- Ang **platform domain ug DNS** nga gikonfigure alang sa branded experience
- **White-labeled admin** uban sa FitSite branding sa tibuok
- **Gikuha og custom nga komunikasyon** — emails, invoices, ug notifications tanan naa'y brand
- **Usa ka marketing site** nga magbaligya sa FitSite ngadto sa mga tag-iya sa fitness studio
- **Custom domain documentation** alang sa mga kustomer nga gusto sa ilang kaugalingon nga domain

---

**Next:** [Lesson 8: Customer Onboarding](lesson-8-onboarding) — didesinyuhan nato ang kasinatian nga makapahimo sa usa ka bag-ong pag-sign up ngadto sa aktibo, malipayong kustomer.
