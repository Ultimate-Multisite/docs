---
title: 'Sapak 7: Ony özüňizki etmek'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Sapak 7: Ony Özüňize Degişli Etmek {#lesson-7-making-it-yours}

Müşderileriňiz hiç haçan "haýsydyr bir WordPress plugin" ulanýandygyny duýmaly däldir. Olar öz pudagy üçin gurlan platforma -- FitSite ulanýandygyny duýmaly. Bu sapak branding, white-labeling we platformany hakyky product ýaly duýdurmak barada.

## Nirede Galypdyk {#where-we-left-off}

FitSite-de fitness studiýa eýelerini plan saýlamakdan janly site-e çenli alyp barýan işleýän checkout akymy bar. Indi tutuş tejribäni bitewi, branded product ýaly duýdurýarys.

## Platforma Domain-iňiz {#your-platform-domain}

Brand-iňiziň binýady domain-iňizdir. FitSite üçin:

- **Esasy domain**: `fitsite.com` (marketing site-iňiz we network köki)
- **Müşderi site-leri**: `studioname.fitsite.com` (subdomain-ler)
- **Custom domain-ler**: Growth we Pro plan-laryndaky müşderiler öz domain-ini map edip biler

### Domain-iňizi Sazlamak {#setting-up-your-domain}

1. Platforma domain-iňizi bellige alyň
2. Ony hosting üpjün edijiňize gönükdiriň
3. Müşderi subdomain-leri üçin wildcard DNS (`*.fitsite.com`) sazlaň
4. Wildcard SSL-iň işjeňdigine göz ýetiriň

Jikme-jik görkezmeler üçin [Domain Mapping-i Nädip Sazlamaly](/user-guide/domain-mapping/how-to-configure-domain-mapping) serediň.

## Admin Tejribesini White-Label Etmek {#white-labeling-the-admin-experience}

Fitness studiýa eýesi öz site dashboard-yna girende, WordPress ýa-da Ultimate Multisite branding-ini däl-de, siziň brand-iňizi görmeli.

### Custom Login Sahypasy {#custom-login-page}

WordPress login sahypasyny şulary görkezmek üçin sazlaň:

- FitSite logo-yňyz
- Fitness-e laýyk fon şekilleri
- Brand reňkleriňiz

### Dashboard Branding {#dashboard-branding}

[Admin Page Creator](/addons/admin-page-creator) addon-yny ýa-da custom CSS ulanyp:

- WordPress logo-syny FitSite logo-yňyz bilen çalyşyň
- Admin reňk shemasyny brand-iňize laýyk sazlaň
- Fitness-e degişli çalt link-ler we kömek resurslary bilen custom dashboard widget goşuň

### Custom Admin Sahypalary {#custom-admin-pages}

Fitness studiýa eýeleri üçin iň degişli hereketleri öňe çykarýan custom admin sahypalary döretmegi göz öňünde tutuň:

- "Sapak Tertibiňizi Redaktirläň"
- "Trainer Profillerini Täzeläň"
- "Site-iňizi Görüň"

Bu, olary adaty WordPress menu-synda gizlemegiň ýerine, niche-e degişli hereketleri öňe we merkeze çykaryp, öwreniş egri çyzygyny peseldýär.

## Aragatnaşyklaryňyzy Brand Etmek {#branding-your-communications}

Her email, invoice we notification brand-iňizi güýçlendirmeli.

### System Email-ler {#system-emails}

**Ultimate Multisite > Settings > Emails** bölümine geçiň we ähli system email-leri sazlaň:

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: Brand reňkleriňizi we logo-yňyzy ulanyň
- **Language**: Ähli ýerde fitness-e mahsus bolsun

Sazlamaly esasy email-ler:

| Email | Umumy Wersiýa | FitSite Wersiýasy |
|-------|----------------|-----------------|
| Hoş geldiňiz | "Täze site-iňiz taýýar" | "Fitness studiýa website-iňiz janly" |
| Töleg receipt-i | "Töleg alyndy" | "FitSite subscription tölegi tassyklandy" |
| Synag möhleti gutarýar | "Synag möhletiňiz ýakyn wagtda gutarýar" | "FitSite synag möhletiňiz 3 günden gutarýar -- studiýa website-iňizi janly saklaň" |

### Invoice-ler {#invoices}

Invoice template-lerini şular bilen sazlaň:

- FitSite logo-yňyz we brand reňkleriňiz
- Business maglumatlaryňyz
- Fitness-e mahsus product atlary (umumy plan ID-leri däl)

## Müşderä Görünýän Site {#the-customer-facing-site}

Esasy domain-iňiz (`fitsite.com`) platformany satýan marketing site-e mätäç. Bu Ultimate Multisite network admin-den aýry -- ol business-iňiziň köpçülige görünýän ýüzüdir.

Esasy sahypalar:

- **Homepage**: Fitness business-leri üçin aýdyň gymmatlyk teklibi
- **Features**: FitSite näme edýär, fitness sözleri bilen
- **Pricing**: Niche-e mahsus feature deňeşdirmeleri bilen üç plan-yňyz
- **Examples**: Platformada gurlan site-leri görkeziň
- **Sign Up**: Checkout form-a link-ler

:::tip Marketing Site-iňiz Network Site Bolup Biler
Marketing site-iňizi öz network-iňiziň içindäki site hökmünde dörediň. Bu ony şol bir dashboard-dan dolandyrmaga mümkinçilik berýär we öz platformaňyzyň mümkinçiliklerini görkezýär.
:::

## Müşderiler üçin Custom Domain {#custom-domain-for-customers}

Custom domain-leri öz içine alýan plan-lardaky müşderiler üçin prosesi aýdyň dokumentleşdiriň:

1. Müşderi domain-ini registrar-da bellige alýar ýa-da geçirýär
2. Müşderi DNS-i platformaňyza gönükdirer ýaly täzelýär (takyk ýazgylary beriň)
3. Ultimate Multisite domain mapping-i we SSL-i dolandyrýar

Bu proses üçin ýörite help article ýa-da knowledge base ýazgysyny dörediň, ony tehniki bolmadyk fitness studiýa eýeleri üçin ýazyň.

## Şu Wagta Çenli FitSite Network {#the-fitsite-network-so-far}

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

## Bu Sapakda Guran Zatlarymyz {#what-we-built-this-lesson}

- **Platforma domain-i we DNS** branded tejribe üçin sazlandy
- **White-labeled admin** ähli ýerde FitSite branding-i bilen
- **Sazlanan aragatnaşyklar** -- email-ler, invoice-ler we notification-lar hemmesi brand-e laýyk
- **Marketing site** FitSite-i fitness studiýa eýelerine satýar
- Öz domain-ini isleýän müşderiler üçin **custom domain dokumentasiýasy**

---

**Indiki:** [Sapak 8: Müşderini Onboarding Etmek](lesson-8-onboarding) -- täze signup-y işjeň, hoşal müşderä öwürýän tejribäni dizaýn edýäris.
