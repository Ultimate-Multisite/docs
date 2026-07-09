---
title: 'Aralin 7: Gawin Mong Sa Iyo'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lesson 7: Gawin Mong Sarili Mo {#lesson-7-making-it-yours}

Hindi dapat kailanman maramdaman ng mga customer mo na gumagamit sila ng "isang WordPress plugin." Dapat nilang maramdaman na gumagamit sila ng FitSite — isang platform na ginawa para sa industriya nila. Tinatalakay ng lesson na ito ang branding, white-labeling, at kung paano gawing produkto ang platform.

## Saan Tayo Tumigil {#where-we-left-off}

Ang FitSite ay may gumaganang checkout flow na nagdadala sa mga may-ari ng fitness studio mula sa pagpili ng plano hanggang sa isang live na site. Ngayon, gagawin nating parang isang buo at branded na produkto ang buong karanasan.

## Domain ng Platform Mo {#your-platform-domain}

Ang pundasyon ng iyong brand ay ang iyong domain. Para sa FitSite:

- **Main domain**: `fitsite.com` (ang iyong marketing site at root ng network)
- **Customer sites**: `studioname.fitsite.com` (subdomains)
- **Custom domains**: Ang mga customer sa Growth at Pro plans ay maaaring mag-map ng sarili nilang domain

### Pag-set Up ng Iyong Domain {#setting-up-your-domain}

1. Irehistro ang iyong platform domain
2. I-point ito sa iyong hosting provider
3. I-configure ang wildcard DNS (`*.fitsite.com`) para sa mga customer subdomains
4. Siguraduhin na aktibo ang wildcard SSL

Tingnan ang [How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) para sa detalyadong mga tagubilin.

## White-Labeling ng Admin Experience {#white-labeling-the-admin-experience}

Kapag nag-log in ang isang may-ari ng fitness studio sa dashboard ng kanilang site, dapat makita nila ang brand mo, hindi ang branding ng WordPress o Ultimate Multisite.

### Custom Login Page {#custom-login-page}

I-customize ang WordPress login page para ipakita ang:

- Logo ng FitSite
- Background imagery na angkop sa fitness
- Mga kulay ng brand mo

### Dashboard Branding {#dashboard-branding}

Gamitin ang [Admin Page Creator](/addons/admin-page-creator) addon o custom CSS para:

- Palitan ang logo ng WordPress ng logo ng FitSite
- I-customize ang admin color scheme para tumugma sa brand mo
- Magdagdag ng custom dashboard widget na may mga quick links at help resources na specific sa fitness

### Custom Admin Pages {#custom-admin-pages}

Isaalang-alang ang paggawa ng custom admin pages na nagpapakita ng pinaka-relevant na aksyon para sa mga may-ari ng fitness studio:

- "Edit Your Class Schedule"
- "Update Trainer Profiles"
- "View Your Site"

Binabawasan nito ang learning curve sa pamamagitan ng paglalagay ng mga aksyon na relevant sa niche sa harap at gitna, sa halip na itago ang mga ito sa standard na menu ng WordPress.

## Pagba-brand ng Iyong Komunikasyon {#branding-your-communications}

Ang bawat email, invoice, at notification ay dapat magpatibay sa brand mo.

### System Emails {#system-emails}

Pumunta sa **Ultimate Multisite > Settings > Emails** at i-customize ang lahat ng system emails:

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: Gumamit ng kulay at logo ng brand mo
- **Language**: Fitness-specific sa buong nilalaman

Mga pangunahing email na kailangang i-customize:

| Email | Generic Version | FitSite Version |
|-------|----------------|-----------------|
| Welcome | "Your new site is ready" | "Your fitness studio website is live" |
| Payment receipt | "Payment received" | "FitSite subscription payment confirmed" |
| Trial ending | "Your trial is ending soon" | "Your FitSite trial ends in 3 days -- keep your studio website live" |

### Invoices {#invoices}

I-customize ang invoice templates gamit ang:

- Logo at brand colors ng FitSite
- Mga detalye ng iyong negosyo
- Mga pangalan ng produkto na specific sa fitness (hindi generic plan IDs)

## Ang Site na Nakikita ng Customer {#the-customer-facing-site}

Ang iyong main domain (`fitsite.com`) ay nangangailangan ng isang marketing site na nagbebenta ng platform. Ito ay hiwalay sa Ultimate Multisite network admin — ito ang pampublikong mukha ng iyong negosyo.

Mga pangunahing pahina:

- **Homepage**: Malinaw na value proposition para sa mga fitness business
- **Features**: Ano ang ginagawa ng FitSite, sa mga termino ng fitness
- **Pricing**: Ang iyong tatlong plano na may paghahambing ng feature na specific sa niche
- **Examples**: Ipakita ang mga site na ginawa gamit ang platform
- **Sign Up**: Mga link sa iyong checkout form

:::tip Ang Marketing Site Mo ay Maaaring Maging Network Site
Gumawa ng marketing site mo bilang isang site sa loob ng sarili mong network. Pinapayagan ka nitong pamahalaan ito mula sa parehong dashboard at ipinapakita ang kakayahan ng sarili mong platform.
:::

## Custom Domain para sa mga Customer {#custom-domain-for-customers}

Para sa mga customer na nasa mga plan na kasama ang custom domains, idokumento nang malinaw ang proseso:

1. Irehistro o ililipat ng customer ang kanilang domain sa isang registrar
2. I-uupdate ng customer ang DNS para ituro sa iyong platform (magbigay ng eksaktong records)
3. Ang Ultimate Multisite ang magha-handle ng domain mapping at SSL

Gumawa ng isang help article o knowledge base entry na partikular para sa prosesong ito, na isinulat para sa mga may-ari ng fitness studio na hindi teknikal.

## Ang FitSite Network Hanggang Ngayon {#the-fitsite-network-so-far}

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

## Ano ang Binuo Natin sa Lesson na Ito {#what-we-built-this-lesson}

- **Platform domain at DNS** na naka-configure para sa branded experience
- **White-labeled admin** na may FitSite branding sa lahat ng bahagi
- **In-customize na komunikasyon** -- emails, invoices, at notifications na lahat ay on-brand
- **Isang marketing site** na nagbebenta ng FitSite sa mga may-ari ng fitness studio
- **Dokumentasyon ng custom domain** para sa mga customer na gusto ng sarili nilang domain

---

**Next:** [Lesson 8: Customer Onboarding](lesson-8-onboarding) -- idinisenyo natin ang karanasan na nagpapalit sa isang bagong pag-sign up sa isang aktibo at masayang customer.
