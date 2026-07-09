---
title: 'Aralin 5: Pagpaplano ng Iyong mga Plano'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Aralin 5: Pagdidisenyo ng Iyong mga Plano {#lesson-5-designing-your-plans}

Ang mga *plan tier* mo ay hindi lang basta mga antas ng presyo—ito ay repleksyon kung paano talaga nag-ooperate ang mga *niche* customer mo. Sa araling ito, magdidisenyo tayo ng mga *product tier* na tumutugma sa totoong pangangailangan ng mga *fitness business* sa iba't ibang yugto.

## Saan Tayo Tumigil {#where-we-left-off}

May tatlong *template* na handa na ang FitSite (Studio Essential, Gym Pro, Fitness Chain). Ngayon, gagawa tayo ng mga plano na magde-determine kung ano ang maa-access ng mga customer at kung magkano ang babayaran nila.

## Pag-iisip sa mga Customer Segment {#thinking-in-customer-segments}

Ang pagkakamali ng karamihan ay ang pagdidisenyo ng mga plano batay sa mga *technical feature* (tulad ng *storage*, *bandwidth*, o bilang ng *pages*). Ang mga *niche customer* mo ay hindi nag-iisip sa mga terminong iyon. Ang isang *gym owner* ay nag-iisip tungkol sa kailangan niyang gawin para patakbuhin ang kanyang negosyo.

Para sa mga *fitness studio*, may tatlong natural na *segment*:

| Segment | Sino Sila | Ano ang Kailangan Nila |
|---------|-------------|----------------|
| **Solo trainers / small studios** | 1-3 staff, isang lokasyon, nagsisimula pa lang | Isang propesyonal na *site*, impormasyon sa klase, *contact form* |
| **Established gyms** | 5-20 staff, isang lokasyon, lumalaki na | Lahat ng nasa itaas plus *booking*, *blog*, *gallery*, *custom domain* |
| **Fitness chains** | Maraming lokasyon, established na brand | Lahat ng nasa itaas plus *multi-site*, *locations pages*, *staff directory* |

Ang mga plano mo ay dapat naka-map sa mga *segment* na ito, hindi sa mga arbitraryong *feature bundle*.

## Paglikha ng mga FitSite Plans {#creating-the-fitsite-plans}

Pumunta sa **Ultimate Multisite > Products > Add Product** para sa bawat plano.

### Plan 1: FitSite Starter -- $49/month {#plan-1-fitsite-starter----49month}

**Target**: Solo trainers at maliit na *studio*

**Description tab**:
- Name: FitSite Starter
- Description: "Lahat ng kailangan ng isang *personal trainer* o maliit na *studio* para magmukhang propesyonal online."

**General tab**:
- Product type: Plan
- Customer role: Administrator

**Site Templates tab**:
- Allow site templates: Enabled
- Available templates: Studio Essential only

**Limitations**:
- Sites: 1
- Disk space: 1 GB
- Custom domain: Disabled (uses `studioname.fitsite.com`)

**Plugins tab**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Not Available (upgrade incentive)

**Themes tab**:
- Your selected theme: Force Activate
- All other themes: Hidden

### Plan 2: FitSite Growth -- $99/month {#plan-2-fitsite-growth----99month}

**Target**: Established single-location gyms

**Description tab**:
- Name: FitSite Growth
- Description: "Para sa mga *established gym* na handang palakihin ang kanilang *online presence* at makaakit ng mga bagong miyembro."

**Site Templates tab**:
- Available templates: Studio Essential and Gym Pro

**Limitations**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Plugins tab**:
- Everything in Starter, plus:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Blog functionality: Available

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 2

### Plan 3: FitSite Pro -- $199/month {#plan-3-fitsite-pro----199month}

**Target**: Multi-location fitness chains

**Description tab**:
- Name: FitSite Pro
- Description: "Ang kumpletong *platform* para sa mga *fitness brand* na may maraming lokasyon."

**Site Templates tab**:
- Available templates: All three templates

**Limitations**:
- Sites: 5 (one per location)
- Disk space: 20 GB
- Custom domain: Enabled

**Plugins tab**:
- Everything in Growth, plus:
- All premium plugins: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## Pag-set Up ng Plan Group {#setting-up-the-plan-group}

Tinitiyak ng *plan group* na ang mga customer ay makakapag-*upgrade* o makakapag-*downgrade* lamang sa loob ng pamilya ng FitSite plans. Sa **Up & Downgrades** tab ng bawat plano:

1. I-set ang **Plan Group** sa "FitSite Plans" para sa tatlong plano
2. I-set ang **Product Order** sa 1 (Starter), 2 (Growth), 3 (Pro)

Gumagawa ito ng malinaw na *upgrade path*: Starter → Growth → Pro.

## Pagdaragdag ng Order Bumps {#adding-order-bumps}

Ang *Order bumps* ay mga *add-on product* na inaalok habang nagche-checkout. Para sa FitSite, isaalang-alang ang:

- **Extra Storage Pack** ($19/month) -- dagdag na 5 GB *disk space*
- **Priority Support** ($29/month) -- mas mabilis na *response time*
- **Additional Site** ($39/month) -- para sa mga customer na nangangailangan ng mas maraming *site* kaysa sa pinapayagan ng kanilang plano

Gumawa ng mga ito bilang mga *Package* type products sa Ultimate Multisite at iugnay ang mga ito sa mga kaugnay na plano.

## Bakit Gumagana ang Istruktura na Ito {#why-this-structure-works}

- Ang **Starter** ay nag-aalis ng mga hadlang sa pagsisimula -- mababang presyo, simpleng alok, mabilis na nagpapa-online sa mga *trainer*
- Ang **Growth** ay nagdaragdag ng mga *feature* na talagang hinihingi ng mga *gym* -- *booking*, *gallery*, *custom domain*
- Ang **Pro** ay nagsisilbi sa *high-value segment* na nangangailangan ng *multi-location support*
- Ang **Order bumps** ay nagpapahintulot sa mga customer na mag-customize nang hindi pinakomplikado ang mga pangunahing plano
- Ang **Malinaw na upgrade path** ay nangangahulugang ang mga customer ay lumalaki kasama ka sa halip na umalis

## Ang FitSite Network Hanggang Ngayon {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Ano ang Binuo Natin sa Araling Ito {#what-we-built-this-lesson}

- **Tatlong *plan tier*** na naka-map sa totoong *fitness business segment*
- **Feature gating** gamit ang *plugin* at *template* controls ng Ultimate Multisite
- **Isang *plan group*** na may malinaw na *upgrade path*
- **Order bump products** para sa dagdag na kita
- **Isang *pricing structure*** na nakabatay sa *customer value*, hindi sa *technical specs*

---

**Next:** [Lesson 6: The Signup Experience](lesson-6-checkout) -- gagawa tayo ng *checkout flow* na magko-convert sa mga *fitness studio owner* na nagbabayad na customer.
