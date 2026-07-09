---
title: 'Aralin 9: Pagpepresyo para sa Kita'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Aralin 9: Pagpepresyo para sa Kita {#lesson-9-pricing-for-profit}

Sa Aralin 5 itinakda natin ang mga paunang presyo para sa mga plano ng FitSite. Ngayon, pinapahusay natin ang estratehiya sa pagpepresyo gamit ang mga teknik na nagpapataas ng kita, naghihikayat ng mga upgrade, at nagpapababa ng churn.

## Kung Saan Tayo Huminto {#where-we-left-off}

May mga plano, template, pag-checkout, branding, at onboarding na ang FitSite. Ang paunang pagpepresyo ay $49/$99/$199 kada buwan. Ngayon, gagawin nating mas epektibo ang pagpepresyong iyon.

## Mga Prinsipyo sa Pagpepresyo para sa mga Niche Platform {#pricing-principles-for-niche-platforms}

### Presyuhan Batay sa Halaga, Hindi sa Gastos {#price-on-value-not-cost}

Maaaring $5-$15 kada customer site ang iyong gastos sa hosting. Hindi ibig sabihin nito na dapat $20 ang iyong presyo. Hindi ka nagbebenta ng hosting. Ang ibinebenta mo ay:

- Isang propesyonal na fitness website na nagkakahalaga ng $2,000-$5,000 kung ipapagawa nang custom
- Patuloy na maintenance, mga update, at seguridad na hindi na nila kailangang alalahanin
- Mga feature na partikular sa niche na hindi iniaalok ng mga generic builder
- Ang kredibilidad ng isang platform na ginawa para sa kanilang industriya

Magpresyo batay sa halagang naihahatid mo, hindi sa gastos para maihatid ito.

### I-angkla sa mga Alternatibo {#anchor-to-alternatives}

Kapag sinusuri ng may-ari ng fitness studio ang FitSite, ikinukumpara nila ito sa:

- **Pagkuha ng web developer**: $2,000-$5,000 na paunang bayad + $50-$100/buwan na maintenance
- **Wix/Squarespace**: $16-$45/buwan ngunit walang mga feature na partikular sa fitness, at sila mismo ang gagawa nito
- **Walang gagawin**: Nawawalang mga member na hindi sila mahanap online

Sa $49-$199/buwan, mas mura ang FitSite kaysa sa developer, mas may kakayahan kaysa sa mga generic builder, at walang kapantay na mas mabuti kaysa sa walang website.

## Pagpapatupad ng mga Pagkakaiba sa Presyo {#implementing-price-variations}

Hinihikayat ng taunang pagpepresyo ang commitment at binabawasan ang churn. Pumunta sa tab na **Price Variations** ng bawat plano at magdagdag ng mga taunang opsyon:

| Plano | Buwanang | Taunan (kada buwan) | Kabuuang Taunan | Matitipid |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

Magdagdag ng field na **Period Selection** sa iyong form sa pag-checkout para makapagpalit ang mga customer sa pagitan ng buwanan at taunang pagsingil. Tingnan ang [Mga Form sa Pag-checkout](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Bakit Gumagana ang Taunang Pagpepresyo {#why-annual-pricing-works}

- **Para sa iyo**: Paunang cash, mas mababang churn (ang mga customer na nagbabayad taun-taon ay mas malabong magkansela sa kalagitnaan ng termino)
- **Para sa kanila**: Tunay na pagtitipid, predictable na badyet

## Mga Setup Fee {#setup-fees}

Isaalang-alang ang isang one-time setup fee para sa mga planong may kasamang hands-on na configuration:

- **Starter**: Walang setup fee (alisin ang mga hadlang sa pagsisimula)
- **Growth**: $99 setup fee (sumasaklaw sa custom domain configuration at paunang konsultasyon)
- **Pro**: $299 setup fee (sumasaklaw sa multi-location setup at onboarding call)

I-configure ang mga setup fee sa seksyon ng pagpepresyo ng bawat plano. Tingnan ang [Paglikha ng Iyong Unang Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) para sa mga detalye.

## Mga Trial Period {#trial-periods}

Ang pag-aalok ng trial ay nagpapababa ng hadlang sa pag-sign up ngunit nagdadala ng panganib na hindi mag-convert. Para sa FitSite:

- **7-araw na libreng trial** sa Starter plan lamang
- Walang trial sa Growth at Pro (mas committed ang mga customer na ito at inaasahang magbabayad)

I-configure ang trial sa seksyon ng pagpepresyo ng Starter plan sa pamamagitan ng pag-enable sa toggle na **Offer Trial** at pagtatakda ng tagal sa 7 araw.

### Pagpapaconvert ng mga Trial {#making-trials-convert}

Gumagana lamang ang trial kung nararanasan ng customer ang halaga sa panahon ng trial period. Kritikal dito ang iyong onboarding sequence (Aralin 8) -- dapat nakatakda ang oras ng mga welcome email upang magtulak ng engagement sa loob ng 7-araw na window.

## Mga Discount Code {#discount-codes}

Gumawa ng mga strategic discount code para sa mga partikular na layunin:

- **FITLAUNCH** -- 30% off sa unang 3 buwan (para sa launch promotion)
- **ANNUAL20** -- 20% off sa mga taunang plano (kung hindi pa naka-discount)
- **REFERRAL** -- 1 buwang libre (para sa mga referral ng customer)

Pumunta sa **Ultimate Multisite > Discount Codes** para gawin ang mga ito. Tingnan ang [Paglikha ng mga Discount Code](/user-guide/configuration/creating-discount-codes) para sa kumpletong gabay.

:::tip Huwag Magbigay ng Discount bilang Default
Dapat maging mga strategic tool ang mga discount, hindi permanenteng bahagi. Kung lahat ay nakakakuha ng discount, hindi ito discount -- ito ang tunay mong presyo. Gamitin ang mga ito para sa mga partikular na campaign, referral, at time-limited promotion.
:::

## Pangangasiwa ng Buwis {#tax-handling}

Kung nagpapatakbo ka sa isang hurisdiksiyong nangangailangan ng pangongolekta ng buwis:

1. I-configure ang mga tax rate sa **Ultimate Multisite > Settings > Taxes**
2. Ilapat ang mga tax category sa iyong mga plano
3. Tiyaking tama ang pagpapakita ng buwis sa mga invoice

Tingnan ang [Pangangasiwa ng Buwis](/user-guide/payment-gateways/tax-handling) para sa detalyadong configuration. Kung naglilingkod ka sa mga customer sa iba’t ibang bansa, isaalang-alang ang [VAT addon](/addons/vat) para sa pagsunod sa EU.

## Pagsusuri sa Iyong Pagpepresyo {#reviewing-your-pricing}

Pagkatapos ng launch, balikan ang pagpepresyo kada quarter. Tingnan ang:

- **Conversion rate ayon sa plano**: Kung mahusay mag-convert ang Starter ngunit hindi ang Growth, maaaring masyadong malaki ang agwat sa pagitan nila
- **Upgrade rate**: Kung kakaunti ang mga customer na nag-a-upgrade mula Starter patungong Growth, maaaring hindi sapat ang karagdagang halagang iniaalok ng Growth plan
- **Churn ayon sa plano**: Kung mas mababa ang churn ng taunang mga customer, mas agresibong itulak ang taunang pagpepresyo
- **Pagpepresyo ng competitor**: Magkano ang sinisingil ng mga alternatibo? Tama ba ang iyong positioning?

## Ang FitSite Network sa Ngayon {#the-fitsite-network-so-far}

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

## Ang Binuo Natin sa Araling Ito {#what-we-built-this-lesson}

- **Taunang pagpepresyo** na may 20% diskuwento upang hikayatin ang pagtatalaga
- **Mga bayarin sa setup** sa mas matataas na tier upang masaklaw ang pagsisikap sa onboarding
- **Isang panahon ng trial** sa entry-level na plan upang mabawasan ang hadlang sa signup
- **Mga estratehikong code ng diskuwento** para sa launch, referrals, at campaigns
- **Configuration ng buwis** para sa billing na sumusunod sa mga tuntunin
- **Isang framework sa pagsusuri ng pagpepresyo** para sa patuloy na optimization

---

**Susunod:** [Aralin 10: Araw ng Launch](lesson-10-launch) -- ang checklist bago ang launch at pag-live.
