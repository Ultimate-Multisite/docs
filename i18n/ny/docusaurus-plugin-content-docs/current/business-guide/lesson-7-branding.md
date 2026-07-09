---
title: 'Phunziro 7: Kuchipanga Kukhala Chanu'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Phunziro 7: Kupangitsa Kukhala Kwanu

Makasitomala anu asamamve ngati akugwiritsa ntchito "plugin inayake ya WordPress." Ayenera kumva ngati akugwiritsa ntchito FitSite -- pulatifomu yomangidwa kwa makampani awo. Phunziroli limafotokoza za branding, white-labeling, ndi kupangitsa pulatifomu kumveka ngati chinthu chathunthu.

## Kumene Tinathera

FitSite ili ndi njira ya checkout yomwe ikugwira ntchito, yomwe imatenga eni ma studio a fitness kuchokera posankha plan mpaka ku site yamoyo. Tsopano tikupangitsa chidziwitso chonse kumveka ngati chinthu chimodzi chogwirizana, chokhala ndi brand.

## Domain ya Pulatifomu Yanu

Maziko a brand yanu ndi domain yanu. Kwa FitSite:

- **Domain yayikulu**: `fitsite.com` (site yanu ya marketing ndi muzu wa network)
- **Ma site a makasitomala**: `studioname.fitsite.com` (ma subdomain)
- **Ma domain apadera**: Makasitomala pa ma plan a Growth ndi Pro angathe kulumikiza domain yawo

### Kukhazikitsa Domain Yanu

1. Lembetsani domain ya pulatifomu yanu
2. Ilozetseni kwa hosting provider wanu
3. Konzani wildcard DNS (`*.fitsite.com`) ya ma subdomain a makasitomala
4. Onetsetsani kuti wildcard SSL ikugwira ntchito

Onani [Momwe Mungakonzere Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) kuti mupeze malangizo atsatanetsatane.

## White-Labeling Chidziwitso cha Admin

Mwini studio ya fitness akalowa mu dashboard ya site yawo, ayenera kuona brand yanu, osati WordPress kapena branding ya Ultimate Multisite.

### Tsamba la Login Lapadera

Sinthani tsamba la login la WordPress kuti liwonetse:

- Logo yanu ya FitSite
- Zithunzi zakumbuyo zoyenerera fitness
- Mitundu ya brand yanu

### Branding ya Dashboard

Gwiritsani ntchito addon ya [Wopanga Tsamba la Admin](/addons/admin-page-creator) kapena CSS yapadera kuti:

- M'malo mwa logo ya WordPress muyike logo yanu ya FitSite
- Sinthani dongosolo la mitundu ya admin kuti lifanane ndi brand yanu
- Onjezani widget yapadera ya dashboard yokhala ndi ma link achangu okhudzana ndi fitness ndi zothandizira za thandizo

### Masamba Apadera a Admin

Ganizirani kupanga masamba apadera a admin omwe amaonetsa zochita zofunika kwambiri kwa eni ma studio a fitness:

- "Sinthani Ndandanda ya Makalasi Anu"
- "Sinthani Mbiri za Ma Trainer"
- "Onani Site Yanu"

Izi zimachepetsa zovuta zophunzirira poika zochita zofunikira ku niche patsogolo ndi pakati m'malo mozibisa mu menyu yokhazikika ya WordPress.

## Branding ya Mauthenga Anu

Imelo iliyonse, invoice iliyonse, ndi notification iliyonse ziyenera kulimbikitsa brand yanu.

### Maimelo a System

Pitani ku **Ultimate Multisite > Settings > Emails** ndipo sinthani maimelo onse a system:

- **Dzina la wotumiza**: FitSite
- **Imelo ya wotumiza**: hello@fitsite.com
- **Ma template a imelo**: Gwiritsani ntchito mitundu ya brand yanu ndi logo
- **Chilankhulo**: Chokhudzana ndi fitness ponseponse

Maimelo ofunika kusintha:

| Imelo | Mtundu Wamba | Mtundu wa FitSite |
|-------|----------------|-----------------|
| Kulandira | "Site yanu yatsopano yakonzeka" | "Webusayiti ya studio yanu ya fitness ili live" |
| Risiti ya malipiro | "Malipiro alandiridwa" | "Malipiro a subscription ya FitSite atsimikiziridwa" |
| Trial ikutha | "Trial yanu ikutha posachedwa" | "Trial yanu ya FitSite imatha m'masiku 3 -- sungani webusayiti ya studio yanu ili live" |

### Ma Invoice

Sinthani ma template a invoice ndi:

- Logo yanu ya FitSite ndi mitundu ya brand
- Tsatanetsatane wa bizinesi yanu
- Mayina a zinthu okhudzana ndi fitness (osati ma ID a plan wamba)

## Site Yomwe Makasitomala Amaiona

Domain yanu yayikulu (`fitsite.com`) imafunika site ya marketing yomwe imagulitsa pulatifomu. Izi ndi zosiyana ndi network admin ya Ultimate Multisite -- ndi nkhope yapagulu ya bizinesi yanu.

Masamba ofunika:

- **Tsamba Loyamba**: Phindu lomveka bwino kwa mabizinesi a fitness
- **Mawonekedwe**: Zomwe FitSite imachita, m’mawu a fitness
- **Mitengo**: Ma plan anu atatu ndi kuyerekezera kwa mawonekedwe okhudzana ndi niche
- **Zitsanzo**: Onetsani ma site omangidwa pa pulatifomu
- **Kulembetsa**: Ma link opita ku fomu yanu ya checkout

:::tip Your Marketing Site Can Be a Network Site
Create your marketing site as a site within your own network. This lets you manage it from the same dashboard and demonstrates your own platform's capabilities.
:::

## Custom Domain ya Makasitomala

Kwa makasitomala omwe ali pa ma plan omwe akuphatikiza ma custom domain, lembani ndondomekoyi momveka bwino:

1. Kasitomala amalembetsa kapena kusamutsa domain yake kwa registrar
2. Kasitomala amasinthira DNS kuti iloze ku pulatifomu yanu (perekani ma record enieni)
3. Ultimate Multisite imasamalira domain mapping ndi SSL

Pangani nkhani ya thandizo kapena cholemba cha knowledge base makamaka cha ndondomekoyi, cholembedwa kwa eni ma studio a fitness omwe si a technical.

## Network ya FitSite Mpaka Pano

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

## Zomwe Tamanga mu Phunziroli

- **Domain ya pulatifomu ndi DNS** zakonzedwa kuti zipereke chidziwitso chokhala ndi brand
- **Admin ya white-labeled** yokhala ndi branding ya FitSite ponseponse
- **Mauthenga osinthidwa** -- maimelo, ma invoice, ndi ma notification onse ali pa brand
- **Site ya marketing** yomwe imagulitsa FitSite kwa eni ma studio a fitness
- **Zolemba za custom domain** kwa makasitomala omwe akufuna domain yawo

---

**Chotsatira:** [Phunziro 8: Onboarding ya Makasitomala](lesson-8-onboarding) -- tikupanga chidziwitso chomwe chimasintha kulembetsa kwatsopano kukhala kasitomala wogwira ntchito komanso wokondwa.
