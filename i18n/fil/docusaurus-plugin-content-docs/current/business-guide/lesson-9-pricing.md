---
title: 'Lesson 9: Pagpepresyo para sa Kita'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Aralin 9: Pagpepresyo para sa Kita

Sa Aralin 5, nagtakda tayo ng paunang presyo para sa mga plano ng FitSite. Ngayon, pagpipino natin ang *pricing strategy* gamit ang mga teknik na magpapataas ng kita, maghihikayat ng pag-upgrade, at magbabawas ng *churn* (pag-alis ng customer).

## Saan Tayo Tumigil

Kumpleto na ang FitSite sa mga plano, template, checkout, branding, at onboarding. Ang paunang presyo ay $49/$99/$199 bawat buwan. Ngayon, gagawin nating mas epektibo ang paggamit ng presyong iyon.

## Mga Prinsipyo sa Pagpepresyo para sa Niche Platforms

### Magpresyo batay sa Halaga, Hindi sa Gastos

Ang iyong *hosting* cost ay maaaring $5-$15 bawat *customer site*. Hindi ibig sabihin nito na ang presyo mo ay dapat $20. Hindi ka nagbebenta ng *hosting*. Nagbebenta ka ng:

- Isang propesyonal na fitness website na magkakahalaga ng $2,000-$5,000 kung ipapagawa nang *custom*
- Patuloy na *maintenance*, *updates*, at seguridad na hindi na nila kailangang isipin
- Mga *feature* na espesipiko sa *niche* na hindi inaalok ng mga generic na *builder*
- Ang kredibilidad ng isang platform na ginawa para sa kanilang industriya

Magpresyo batay sa halaga na ibinibigay mo, hindi sa gastos para maibigay ito.

### Pag-uugnay sa mga Alternatibo

Kapag sinusuri ng isang *fitness studio owner* ang FitSite, ikukumpara nila ito sa:

- **Pagkuha ng web developer**: $2,000-$5,000 sa simula + $50-$100/buwan na *maintenance*
- **Wix/Squarespace**: $16-$45/buwan ngunit walang *fitness-specific features*, sila mismo ang magpapatayo
- **Walang ginagawa**: Pagkawala ng mga miyembro na hindi makahanap sa kanila online

Sa $49-$199/buwan, mas mura ang FitSite kaysa sa isang *developer*, mas kakayahan kaysa sa mga generic na *builder*, at walang katulad na mas maganda kaysa sa walang website.

## Pagpapatupad ng Pagkakaiba-iba ng Presyo

Ang pagpepresyo nang taunan ay naghihikayat ng pangako at nagbabawas ng *churn*. Pumunta sa tab na **Price Variations** ng bawat plano at magdagdag ng mga opsyon para sa taunan:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

Magdagdag ng **Period Selection** field sa iyong checkout form para makapag-toggle ang mga customer sa pagitan ng buwanan at taunan na pagbabayad. Tingnan ang [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Bakit Epektibo ang Taunang Pagpepresyo

- **Para sa iyo**: Cash sa simula, mas mababang *churn* (ang mga customer na nagbabayad nang taunan ay hindi gaanong malamang na mag-cancel sa kalagitnaan ng panahon)
- **Para sa kanila**: Tunay na matitipid, *budget predictability*

## Setup Fees (Mga Bayad sa Pag-set Up)

Isaalang-alang ang isang *one-time setup fee* para sa mga planong nangangailangan ng hands-on na pag-configure:

- **Starter**: Walang *setup fee* (para alisin ang mga hadlang sa pagpasok)
- **Growth**: $99 *setup fee* (sumasaklaw sa *custom domain configuration* at paunang konsultasyon)
- **Pro**: $299 *setup fee* (sumasaklaw sa *multi-location setup* at *onboarding call*)

I-configure ang *setup fees* sa *pricing section* ng bawat plano. Tingnan ang [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) para sa mga detalye.

## Trial Periods (Panahon ng Pagsubok)

Ang pag-aalok ng *trial* ay nagbabawas ng pagkaantala sa pag-sign up, ngunit nagdadala rin ito ng panganib na hindi mag-convert ang customer. Para sa FitSite:

- **7-day free trial** sa Starter plan lang
- Walang *trial* sa Growth at Pro (ang mga customer na ito ay mas committed at inaasahang magbabayad)

I-configure ang *trial* sa *pricing section* ng Starter plan sa pamamagitan ng pag-e-enable ng **Offer Trial** toggle at pagtatakda ng tagal sa 7 araw.

### Pagpapataas ng Conversion mula sa Trials

Ang isang *trial* ay gumagana lamang kung makakaranas ng halaga ang customer sa loob ng *trial period*. Ang iyong *onboarding sequence* (Aralin 8) ay kritikal dito — ang mga *welcome email* ay dapat naka-iskedyul para mag-udyok ng *engagement* sa loob ng 7-araw na *window*.

## Discount Codes (Mga Code ng Diskwento)

Gumawa ng mga estratehikong *discount code* para sa mga tiyak na layunin:

- **FITLAUNCH** — 30% off sa unang 3 buwan (para sa *launch promotion*)
- **ANNUAL20** — 20% off sa mga *annual plan* (kung hindi pa ito naka-discount)
- **REFERRAL** — 1 buwan libre (para sa *customer referrals*)

Pumunta sa **Ultimate Multisite > Discount Codes** para gawin ang mga ito. Tingnan ang [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) para sa kumpletong gabay.

:::tip Huwag Mag-diskwento nang Default
Ang mga diskwento ay dapat na mga estratehikong kasangkapan, hindi permanenteng bahagi. Kung lahat ay makakakuha ng diskwento, hindi na ito diskwento — ito na ang totoong presyo mo. Gamitin ang mga ito para sa mga tiyak na kampanya, *referral*, at *time-limited promotion*.
:::

## Tax Handling (Paghawak ng Buwis)

Kung nag-ooperate ka sa isang hurisdiksyon na nangangailangan ng pagkolekta ng buwis:

1. I-configure ang mga *tax rate* sa **Ultimate Multisite > Settings > Taxes**
2. Ilapat ang mga *tax category* sa iyong mga plano
3. Siguraduhin na tama ang pagpapakita ng buwis sa mga *invoice*

Tingnan ang [Tax Handling](/user-guide/payment-gateways/tax-handling) para sa detalyadong *configuration*. Kung naglilingkod ka sa mga customer sa ibang bansa, isaalang-alang ang [VAT addon](/addons/vat) para sa pagsunod sa EU.

## Pagre-review ng Iyong Pagpepresyo

Pagkatapos mag-launch, balikan ang pagpepresyo kada quarter. Tingnan ang:

- **Conversion rate by plan**: Kung mahusay mag-convert ang Starter ngunit hindi ang Growth, maaaring masyadong malaki ang agwat sa pagitan nila
- **Upgrade rate**: Kung kakaunti ang nag-u-upgrade mula Starter patungong Growth, maaaring hindi sapat ang dagdag na halaga na inaalok ng Growth plan
- **Churn by plan**: Kung mas mababa ang *churn* ng mga taunang customer, mas palakasin ang pagbebenta ng *annual pricing*
- **Competitor pricing**: Magkano ang sinisingil ng mga alternatibo? Tama ba ang posisyon mo?

## Ang FitSite Network Hanggang Ngayon

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo or $468/yr) + 7-day trial
│   ├── FitSite Growth ($99/mo or $948/yr) + $99 setup fee
│   ├── FitSite Pro ($199/mo or $1,908/yr) + $299 setup fee
│   └── Order Bumps + Discount Codes
├── Checkout Flow (with period selection toggle)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Annual discounts (20% off)
│   ├── Strategic setup fees
│   ├── 7-day trial on Starter
│   ├── Discount codes for campaigns and referrals
│   └── Tax configuration
└── Ready for launch (next lesson)
```

## Ano ang Binuo Natin sa Araling Ito

- **Annual pricing** na may 20% diskwento para hikayatin ang pangako
- **Setup fees** sa mas mataas na *tier* para masakop ang pagsisikap sa *onboarding*
- **Isang *trial period*** sa *entry-level plan* para mabawasan ang pagkaantala sa pag-sign up
- **Mga estratehikong discount code** para sa *launch*, *referral*, at mga kampanya
- **Tax configuration** para sa *compliant billing*
- **Isang *pricing review framework*** para sa patuloy na pag-o-optimize

---

**Susunod:** [Lesson 10: Launch Day](lesson-10-launch) — ang *pre-launch checklist* at pag-go live.
