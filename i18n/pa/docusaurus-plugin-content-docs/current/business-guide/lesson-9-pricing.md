---
title: 'ਪਾਠ 9: ਲਾਭ ਲਈ ਕੀਮਤ ਨਿਰਧਾਰਣ'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lesson 9: Profit De Liye Pricing

Lesson 5 vich assi FitSite plans de shuruaati daam set kiye si. Hun assi pricing strategy nu refine karenge, jin techniques naal revenue badhaya ja sake, upgrades ko encourage kiya ja sake, ate churn (grahak nu chhod dena) kam kiya ja sake.

## Kithon Ruk Gaye

FitSite vich plans, templates, checkout, branding, ate onboarding set hai. Shuruaati pricing $49/$99/$199 per month si. Hun assi us pricing nu zyada kaam karne deya.

## Niche Platforms Lai Pricing Principles

### Cost Nahi, Value Te Price Karo

Tuhade hosting da kharcha har customer site te $5-$15 ho sakda hai. Is da matlab eh nahi ki tuhada daam $20 hona chahida hai. Tusi hosting nahi vech rahe. Tusi vech rahe ho:

- Ik professional fitness website, jisnu custom banwana $2,000-$5,000 tak da kharcha aunda
- Lagataar maintenance, updates, ate security, jin baare vich unnu soch nahi karni padegi
- Niche-specific features, jo general builders nahi de sakde
- Ik platform di credibility, jo unhan de industry layi banaya gaya hai

Apne deliver kitte value te price karo, na ki us cost te jo deliver karna paira.

### Alternatives naal Compare Karo (Anchor)

Jadon ik fitness studio owner FitSite nu evaluate karda hai, taan woh us nu in cheezan naal compare karda hai:

- **Web developer nu hire karna**: $2,000-$5,000 shuruaat vich + $50-$100/month maintenance
- **Wix/Squarespace**: $16-$45/month, par koi fitness-specific features nahi, oh khud banaunde ne
- **Kuch nahi karna**: Members nu kho dena jo online nahi mil paaunde

$49-$199/month te, FitSite developer ton sasta hai, generic builders ton zyada capable hai, ate koi website na hone ton kahin zyada behtar hai.

## Price Variations Implement Karna

Annual pricing commitment nu encourage karda hai ate churn kam karda hai. Har plan de **Price Variations** tab te jaao ate annual options add karo:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

Apne checkout form vich ik **Period Selection** field add karo taaki customers monthly ate annual billing vich toggle kar sakein. [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) dekhna.

### Annual Pricing Kyun Kaam Karda Hai

- **Tuhade layi**: Shuruaati cash, kam churn (jo log annual pay karde ne, oh beech vich cancel karan de kam chance hunde ne)
- **Ohna de layi**: Asli savings, budget te predictability

## Setup Fees

Oh plans layi ik-baar da setup fee rakhne te soche jo hands-on configuration shamil karde ne:

- **Starter**: Koi setup fee nahi (entry de barriers hatao)
- **Growth**: $99 setup fee (custom domain configuration ate shuruaati consultation cover karda hai)
- **Pro**: $299 setup fee (multi-location setup ate onboarding call cover karda hai)

Har plan de pricing section te setup fees configure karo. Details layi [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) dekhna.

## Trial Periods

Ik trial offer karna signup friction nu kam karda hai, par non-conversion da risk paida karda hai. FitSite layi:

- Starter plan te **7-day free trial** hi
- Growth ate Pro te koi trial nahi (yeh customers zyada committed hunde ne ate pay karna expect karde ne)

Starter plan de pricing section te trial configure karo, **Offer Trial** toggle enable karke ate duration 7 din set karke.

### Trials nu Convert Karna

Ik trial sirf tab kaam karda hai jadon customer nu trial period vich value mehsoos hove. Tuhadi onboarding sequence (Lesson 8) yahan critical hai — welcome emails nu is tarah time karna chahida hai ki 7-day window vich engagement badhe.

## Discount Codes

Khaas maqsadan layi strategic discount codes banao:

- **FITLAUNCH** -- pehlan 3 mahine te 30% off (launch promotion layi)
- **ANNUAL20** -- annual plans te 20% off (je pehlan hi discount nahi hai)
- **REFERRAL** -- 1 mahina free (customer referrals layi)

Innu banane layi **Ultimate Multisite > Discount Codes** te jaao. Poori guide layi [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) dekhna.

:::tip Default Tor Te Discount Na Dena
Discounts strategic tools hone chahiye, permanent fixtures nahi. Je sab nu discount milega, taan oh discount nahi hai — oh tuhada asli daam hai. Ohna nu khaas campaigns, referrals, ate time-limited promotions layi istemal karo.
:::

## Tax Handling

Je tusi kisi aise jurisdiction vich kaam karde ho jithe tax collect karna zaroori hai:

1. **Ultimate Multisite > Settings > Taxes** vich tax rates configure karo
2. Apne plans te tax categories apply karo
3. Ensure karo ki invoices te tax sahi tarah display hove

Detailed configuration layi [Tax Handling](/user-guide/payment-gateways/tax-handling) dekhna. Je tusi international customers nu service karde ho, ta EU compliance layi [VAT addon](/addons/vat) consider karna.

## Apni Pricing Review Karna

Launch karan baad, pricing nu har teen mahine vich revisit karna. In cheezan nu dekho:

- **Plan hisaab naal conversion rate**: Je Starter achha convert karda hai par Growth nahi, taan ohna vich gap bahut zyada ho sakda hai
- **Upgrade rate**: Je kam customers Starter ton Growth te upgrade karde ne, taan Growth plan shayad kafi zyada additional value nahi de reha
- **Plan hisaab naal churn**: Je annual customers kam churn karde ne, taan annual pricing nu zyada zor deke promote karo
- **Competitor pricing**: Alternatives ki charge kar rahe ne? Ki tusi sahi jagah par position kiye ho?

## FitSite Network Hun Tak

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

## Iss Lesson Vich Ki Banaya

- Commitment encourage karan layi 20% discount naal **Annual pricing**
- Onboarding effort cover karan layi higher tiers te **Setup fees**
- Signup friction kam karan layi entry-level plan te **A trial period**
- Launch, referrals, ate campaigns layi **Strategic discount codes**
- Compliant billing layi **Tax configuration**
- Lagataar optimization layi **A pricing review framework**

---

**Next:** [Lesson 10: Launch Day](lesson-10-launch) -- pre-launch checklist ate live karna.
