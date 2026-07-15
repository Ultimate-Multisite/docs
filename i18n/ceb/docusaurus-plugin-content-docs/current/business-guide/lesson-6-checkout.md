---
title: 'Leksyon 6: Ang Pag-sign Up nga Kasinatian'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lesson 6: Ang Kasinatian sa Pagparehistro (Signup Experience)

Ang *checkout flow* mao ang dapit diin ang interes mahimong kwarta o kita. Kon maglibog o kasagaran ra kaayo ang proseso sa pagparehistro, mawala ang mga kustomer. Ang usa ka *flow* nga espesipiko sa industriya (niche-specific) ug nagsulti sa ilang pinulongan, ug dali ra kaayo gamiton, makapalit kanila.

## Sa Asa Kita Nagpahunong {#where-we-left-off}

Ang FitSite adunay mga *template* ug plano nga gi-configure na. Karon, maghimo kita sa proseso sa pagparehistro ug pagbayad (checkout experience) nga makapahimo sa mga tag-iya sa fitness studio nga mahimong nagbayad nga kustomer.

## Pag-ila sa Registration Flow {#understanding-the-registration-flow}

Ang mga *checkout form* sa Ultimate Multisite kay kompleto kaayo nga makapauswag (*customizable*) ug daghang lakang nga mga form. Para sa FitSite, gusto nato ang usa ka *flow* nga:

1.  Morag gihimo gyud para sa mga negosyo sa fitness
2.  Mokuha lang sa kinahanglanon ra gyud
3.  Makadala sa kustomer sa pag-andar nga site sa pinakadali nga paagi

Tan-awa ang [The Registration Flow](/user-guide/configuration/the-registration-flow) para sa kompleto nga teknikal nga sanggunan.

## Pagdisenyo sa FitSite Checkout {#designing-the-fitsite-checkout}

Pangitaa ang **Ultimate Multisite > Checkout Forms** ug paghimo og bag-ong form.

### Step 1: Pagpili sa Plano (Plan Selection) {#step-1-plan-selection}

Ang unang makita sa tag-iya sa fitness studio kinahanglan mao ang mga plano, nga ipresentar gamit ang mga termino nga ilang kasabutan.

- Dugangi ang usa ka **Pricing Table** field
- I-configure kini aron ipakita ang tanang tulo ka FitSite plans
- Ang mga deskripsyon sa plano nga imong gisulat sa Lesson 5 makita dinhi — siguroha nga nagsulti sila bahin sa panginahanglan sa negosyo sa fitness, dili lang teknikal nga *features*.

:::tip Importante ang Pinili nga Yuta sa Sugilanon (Niche Language Matters)
Ang "1 GB storage" walay kahulogan sa usa ka tag-iya og gym. Ang "Tanang kinahanglan nimo para sa propesyonal nga website sa studio" kay nagpasabot og tanan. Isulat ang mga deskripsyon sa plano gamit ang pinulongan sa imong kustomer.
:::

### Step 2: Pagpili sa Template (Template Selection) {#step-2-template-selection}

Pagkahuman sa pagpili og plano, ang kustomer mo-pick sa ilang sinugdanan nga *template*.

- Dugangi ang usa ka **Template Selection** field
- Ang mga available nga *templates* ma-filter base sa plano nga ilang gipili (gi-configure sa Lesson 5)
- Ang matag *template* kinahanglan adunay *preview image* nga nagpakita og disenyo nga espesipiko sa fitness.

### Step 3: Pagmugna og Account (Account Creation) {#step-3-account-creation}

Himo kini nga simple lang. Kuhaon lang ang:

- Email address
- Password
- Studio/business name (kini mahimong ilang site name)

Ayaw pangayo og impormasyon nga dili nimo kinahanglan sa pagparehistro. Ang matag dugang *field* makapamenos sa mga *conversion*.

### Step 4: Pag-set up sa Site (Site Setup) {#step-4-site-setup}

- **Site title**: Awtomatikong mapuno gikan sa studio name nga gihatag sa Step 3
- **Site URL**: Awtomatikong mahimo gikan sa studio name (e.g., `ironworks.fitsite.com`)

### Step 5: Pagbayad (Payment) {#step-5-payment}

- Dugangi ang **Payment** field
- I-configure ang imong *payment gateway* ([Stripe](/user-guide/payment-gateways/stripe) girekomenda para sa subscription billing)
- Kon nakahimo ka og order bumps sa Lesson 5, dugangi ang usa ka **Order Bump** field sa dili pa moabot sa payment step

### Step 6: Pagkumpirma (Confirmation) {#step-6-confirmation}

- I-customize ang *confirmation message* gamit ang pinulongan nga espesipiko sa fitness
- Pananglitan: "Naghimo na ang website sa imong fitness studio. Ire-redirect ka sa imong bag-ong site sulod sa pipila ka segundo."

## Pagdugang og Period Selection Toggle {#adding-a-period-selection-toggle}

Kon nag-set up ka og mga *price variations* sa imong plano (monthly vs. annual), dugangi ang usa ka **Period Selection** field sa *checkout form* aron makapahimo ang mga kustomer nga mag-toggle tali sa mga period sa pagbayad. Tan-awa ang [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) para sa mga instruksyon.

## Pag-configure sa Payment {#configuring-payment}

Kon wala pa ka mako-set up og *payment gateway*:

1.  Pangitaa ang **Ultimate Multisite > Settings > Payment Gateways**
2.  Sunda ang [Stripe setup guide](/user-guide/payment-gateways/stripe) o ang imong gusto nga *gateway*
3.  Sulayha ang tibuok *checkout flow* gamit ang test payment

Tan-awa ang [Getting Paid](/user-guide/payment-gateways/getting-paid) para sa mga detalye kung giun mag-flow ang bayad ngadto sa imong account.

## Pag-test sa Flow {#testing-the-flow}

Sa dili pa molabay, pagkompleto og tibuok *test signup*:

1.  Ablihi ang *checkout form* sa usa ka incognito/private browser window
2.  Pilia og plano (Select a plan)
3.  Pagpili og template (Choose a template)
4.  Pagmugna og account (Create an account)
5.  Kumpletoha ang pagbayad (gamit ang test mode)
6.  Susiha nga nahimo ang site gamit ang saktong *template*

Susiha nga:

- [ ] Ang mga deskripsyon sa plano klaro ug espesipiko sa niche
- [ ] Ang mga *preview* sa template nagpakita og disenyo nga angay sa fitness
- [ ] Ang site URL makahimo pag-ayo gikan sa studio name
- [ ] Ang pagbayad malampuson (Payment processes successfully)
- [ ] Ang kustomer mahitabo sa usa ka nag-andar nga site gamit ang napili nga *template*
- [ ] Ang mga confirmation email naggamit og pinulongan nga espesipiko sa fitness

## Ang FitSite Network Hangtud Karon {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## Unsa ang Among Gihimo Niining Lesson {#what-we-built-this-lesson}

- **Usa ka multi-step checkout form** nga gidesinyo para sa mga tag-iya sa fitness studio
- **Niche-specific language** sa tibuok *signup flow*
- **Minimal friction** — lang ang kinahanglanon ra gyud nga mga *field*, dali nga paagi padulong sa nag-andar nga site
- **Payment integration** uban sa test verification
- **Usa ka gi-test nga end-to-end flow** gikan sa pagpili og plano hangtod sa nag-andar nga site

---

**Next:** [Lesson 7: Making It Yours](lesson-7-branding) — atong i-white-label ang plataporma ug himoon ang FitSite isip usa ka brand.
