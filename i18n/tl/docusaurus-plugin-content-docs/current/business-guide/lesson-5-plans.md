---
title: 'Aralin 5: Pagdidisenyo ng Iyong mga Plano'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Aralin 5: Pagdidisenyo ng Iyong mga Plan

Ang iyong mga tier ng plan ay hindi lamang mga antas ng presyo -- salamin ang mga ito ng kung paano talaga gumagana ang iyong mga niche customer. Sa araling ito, magdidisenyo ka ng mga tier ng produkto na tumutugma sa tunay na pangangailangan ng mga fitness business sa iba't ibang yugto.

## Kung Saan Tayo Huminto

May tatlong template nang handa ang FitSite (Studio Essential, Gym Pro, Fitness Chain). Ngayon, gagawin natin ang mga plan na tumutukoy kung ano ang maa-access ng mga customer at kung magkano ang babayaran nila.

## Pag-iisip Ayon sa mga Segment ng Customer

Ang pagkakamaling ginagawa ng karamihan ay ang pagdidisenyo ng mga plan batay sa mga teknikal na feature (storage, bandwidth, bilang ng mga page). Hindi nag-iisip sa ganoong paraan ang iyong mga niche customer. Iniisip ng isang may-ari ng gym kung ano ang kailangan nila para patakbuhin ang kanilang negosyo.

Para sa mga fitness studio, may tatlong natural na segment:

| Segment | Sino Sila | Ano ang Kailangan Nila |
|---------|-------------|----------------|
| **Mga solo trainer / maliliit na studio** | 1-3 staff, iisang lokasyon, nagsisimula pa lang | Isang propesyonal na site, impormasyon ng klase, contact form |
| **Mga establisadong gym** | 5-20 staff, iisang lokasyon, lumalago | Lahat ng nasa itaas kasama ang booking, blog, gallery, custom domain |
| **Mga fitness chain** | Maraming lokasyon, establisadong brand | Lahat ng nasa itaas kasama ang multi-site, mga page ng lokasyon, staff directory |

Dapat tumugma ang iyong mga plan sa mga segment na ito, hindi sa basta-bastang mga bundle ng feature.

## Paggawa ng mga FitSite Plan

Pumunta sa **Ultimate Multisite > Products > Add Product** para sa bawat plan.

### Plan 1: FitSite Starter -- $49/buwan

**Target**: Mga solo trainer at maliliit na studio

**Description tab**:
- Pangalan: FitSite Starter
- Paglalarawan: "Lahat ng kailangan ng isang personal trainer o maliit na studio para magmukhang propesyonal online."

**General tab**:
- Uri ng produkto: Plan
- Papel ng customer: Administrator

**Site Templates tab**:
- Payagan ang site templates: Enabled
- Mga available na template: Studio Essential lamang

**Mga Limitasyon**:
- Mga site: 1
- Disk space: 1 GB
- Custom domain: Disabled (gumagamit ng `studioname.fitsite.com`)

**Plugins tab**:
- Contact form plugin: Force Activate
- SEO plugin: Force Activate
- Booking plugin: Not Available (insentibo para mag-upgrade)

**Themes tab**:
- Napili mong theme: Force Activate
- Lahat ng ibang theme: Hidden

### Plan 2: FitSite Growth -- $99/buwan

**Target**: Mga establisadong gym na may iisang lokasyon

**Description tab**:
- Pangalan: FitSite Growth
- Paglalarawan: "Para sa mga establisadong gym na handang palaguin ang kanilang presensya online at makahikayat ng mga bagong miyembro."

**Site Templates tab**:
- Mga available na template: Studio Essential at Gym Pro

**Mga Limitasyon**:
- Mga site: 1
- Disk space: 5 GB
- Custom domain: Enabled

**Plugins tab**:
- Lahat ng nasa Starter, kasama ang:
- Booking plugin: Force Activate
- Gallery plugin: Force Activate
- Functionality ng blog: Available

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 2

### Plan 3: FitSite Pro -- $199/buwan

**Target**: Mga fitness chain na may maraming lokasyon

**Description tab**:
- Pangalan: FitSite Pro
- Paglalarawan: "Ang kumpletong platform para sa mga fitness brand na may maraming lokasyon."

**Site Templates tab**:
- Mga available na template: Lahat ng tatlong template

**Mga Limitasyon**:
- Mga site: 5 (isa bawat lokasyon)
- Disk space: 20 GB
- Custom domain: Enabled

**Plugins tab**:
- Lahat ng nasa Growth, kasama ang:
- Lahat ng premium plugin: Force Activate

**Up & Downgrades tab**:
- Plan group: FitSite Plans
- Product order: 3

## Pagse-set Up ng Plan Group

Tinitiyak ng plan group na makakapag-upgrade o makakapag-downgrade lamang ang mga customer sa loob ng pamilya ng FitSite plan. Sa **Up & Downgrades** tab ng bawat plan:

1. Itakda ang **Plan Group** sa "FitSite Plans" para sa lahat ng tatlong plan
2. Itakda ang **Product Order** sa 1 (Starter), 2 (Growth), 3 (Pro)

Lumilikha ito ng malinaw na landas ng upgrade: Starter → Growth → Pro.

## Pagdaragdag ng mga Order Bump

Ang mga order bump ay mga add-on na produkto na iniaalok habang nagche-checkout. Para sa FitSite, isaalang-alang ang:

- **Extra Storage Pack** ($19/buwan) -- karagdagang 5 GB na disk space
- **Priority Support** ($29/buwan) -- mas mabilis na oras ng pagtugon
- **Additional Site** ($39/buwan) -- para sa mga customer na nangangailangan ng mas maraming site kaysa pinapayagan ng kanilang plan

Gawin ang mga ito bilang mga produkto na uri ng **Package** sa Ultimate Multisite at iugnay ang mga ito sa mga kaugnay na plan.

## Bakit Gumagana ang Estrukturang Ito

- **Starter** nag-aalis ng mga hadlang sa pagsisimula -- mababang presyo, simpleng alok, mabilis na napapa-online ang mga trainer
- **Growth** nagdaragdag ng mga feature na talagang hinihingi ng mga gym -- booking, mga gallery, custom domain
- **Pro** nagsisilbi sa segment na mataas ang halaga na nangangailangan ng suporta para sa maraming lokasyon
- **Order bumps** hinahayaan ang mga customer na mag-customize nang hindi pinapakumplika ang mga pangunahing plan
- **Malinaw na landas ng upgrade** nangangahulugang lumalago ang mga customer kasama ka sa halip na umalis

## Ang FitSite Network Sa Ngayon

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

## Ano ang Nabuo Natin sa Araling Ito

- **Tatlong tier ng plan** na itinugma sa tunay na mga segment ng fitness business
- **Feature gating** gamit ang mga kontrol ng plugin at template ng Ultimate Multisite
- **Isang plan group** na may malinaw na landas ng upgrade
- **Mga produktong order bump** para sa karagdagang kita
- **Isang estruktura ng presyo** batay sa halaga para sa customer, hindi sa mga teknikal na spec

---

**Susunod:** [Aralin 6: Ang Karanasan sa Signup](lesson-6-checkout) -- gagawa tayo ng checkout flow na nagko-convert sa mga may-ari ng fitness studio bilang nagbabayad na customer.
