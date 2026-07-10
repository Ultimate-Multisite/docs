---
title: 'Leksyon 5: Pagdisenyo sa Imong mga Plano'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Leksyon 5: Pagdisenyo sa Imong mga Plano {#lesson-5-designing-your-plans}

Ang imong mga plan tiers dili lang basta mga lebel sa presyo — kini nagpakita kung giun pa-andar ang atong target market nga kustomer. Sa leksyon ni, magdisenyo kita og product tiers nga mo-match sa tinuod nga panginahanglan sa mga fitness business sa lainlaing yugto.

## Sa diin mi mihunong {#where-we-left-off}

Ang FitSite adunay tulo ka templates nga andam na (Studio Essential, Gym Pro, Fitness Chain). Karon, maghimo kita sa mga plano nga magtino kung unsa ang ma-access sa kustomer ug unsa ilang bayran.

## Paghunahuna isip Customer Segments {#thinking-in-customer-segments}

Ang sayop nga gibuhat sa kadaghanan mao ang pagdisenyo og mga plano base sa technical features (storage, bandwidth, gidaghanon sa pages). Ang imong niche customers dili maghunahuna nianang termino. Ang usa ka gym owner naghunahuna bahin sa unsay iyang gikinahanglan aron padagan ang iyang negosyo.

Para sa fitness studios, adunay tulo ka natural nga segments:

| Segment | Kinsa Sila | Unsa ang Ilang Kinahanglan |
|---------|-------------|----------------|
| **Solo trainers / small studios** | 1-3 staff, single location, nagsugod pa lang | Usa ka propesyonal nga site, impormasyon sa klase, contact form |
| **Established gyms** | 5-20 staff, single location, nagkadako na | Tanang naa sa taas apan dugang pa ang booking, blog, gallery, custom domain |
| **Fitness chains** | Daghang lokasyon, established brand | Tanang naa sa taas apan dugang pa ang multi-site, locations pages, staff directory |

Ang imong mga plano kinahanglan nga mo-map niining mga segments, dili lang random nga pagpili og features.

## Paghimo sa FitSite Plans {#creating-the-fitsite-plans}

adto sa **Ultimate Multisite > Products > Add Product** para sa matag usa ka plano.

### Plan 1: FitSite Starter -- $49/month {#plan-1-fitsite-starter----49month}

**Target**: Solo trainers ug small studios

**Description tab**:
- Name: FitSite Starter
- Description: "Ang tanan nga gikinahanglan sa personal trainer o gamayng studio aron magpakita og propesyonal online."

**General tab**:
- Product type: Plan
- Customer role: Administrator

**Site Templates tab**:
- Allow site templates: Enabled
- Available templates: Studio Essential lang

**Limitations**:
- Sites: 1
- Disk space: 1 GB
- Custom domain: Disabled (mogamit og `studioname.fitsite.com`)

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
- Description: "Para sa mga established gym nga andam na pagpadako sa ilang online presence ug pagdani og bag-ong miyembro."

**Site Templates tab**:
- Available templates: Studio Essential ug Gym Pro

**Limitations**:
- Sites: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Plugins tab**:
- Tanang naa sa Starter, dugang pa ang:
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
- Description: "Ang kumpletong platform para sa mga fitness brand nga adunay daghang lokasyon."

**Site Templates tab**:
- Available templates: Tanang tulo ka templates

**Limitations**:
- Sites: 5 (usa matag lokasyon)
- Disk space: 20 GB
- Custom domain: Enabled

**Plugins tab**:
- Tanang naa sa Growth, dugang pa ang:
- All premium plugins: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## Pag-set up sa Plan Group {#setting-up-the-plan-group}

Ang plan group nagsiguro nga ang mga kustomer makapag-upgrade o makapag-downgrade lang sulod sa FitSite plan family. Sa **Up & Downgrades** tab sa matag plano:

1. I-set ang **Plan Group** ngadto sa "FitSite Plans" para sa tanang tulo ka plano
2. I-set ang **Product Order** ngadto sa 1 (Starter), 2 (Growth), 3 (Pro)

Kini magmugna og klaro nga upgrade path: Starter → Growth → Pro.

## Pagdugang og Order Bumps {#adding-order-bumps}

Ang order bumps mga add-on products nga ihatag atol sa checkout. Para sa FitSite, pagkonsiderar niining mga mosunod:

- **Extra Storage Pack** ($19/month) -- dugang 5 GB disk space
- **Priority Support** ($29/month) -- mas paspas nga response times
- **Additional Site** ($39/month) -- para sa kustomer nga nagkinahanglan og mas daghang sites kaysa gitugot sa ilang plano

Pagmugna niini isip mga produkto nga klase **Package** sa Ultimate Multisite ug i-associate kini sa may kalabutan nga mga plano.

## Ngano Kini Kaepektibo ang Structure {#why-this-structure-works}

- Ang **Starter** nagtangtang og babag aron magsugod — barato, simple nga paghatag, dali makapadagan online ang trainers
- Ang **Growth** magdugang og features nga gipangayo gyud sa mga gym — booking, galleries, custom domains
- Ang **Pro** moalagad sa high-value segment nga nagkinahanglan og multi-location support
- Ang **Order bumps** makapahimo sa kustomer nga makacustomize nga dili makakumplikado ang core plans
- Ang **Clear upgrade path** nagpasabot nga ang mga kustomer motubo uban kanimo imbis nga mobiya

## Ang FitSite Network Hangtud Karon {#the-fitsite-network-so-far}

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

## Unsa ang Atong Gibuhat Niining Leksyon {#what-we-built-this-lesson}

- **Tulo ka plan tiers** nga mo-map sa tinuod nga fitness business segments
- **Feature gating** gamit ang plugin ug template controls sa Ultimate Multisite
- **Usa ka plan group** nga adunay klaro nga upgrade path
- **Order bump products** para sa dugang kita
- **Usa ka pricing structure** base sa value sa kustomer, dili lang teknikal nga specs

---

**Next:** [Lesson 6: The Signup Experience](lesson-6-checkout) -- maghimo kita og checkout flow nga makapalit sa mga fitness studio owners ngadto sa nagbayad nga kustomer.
