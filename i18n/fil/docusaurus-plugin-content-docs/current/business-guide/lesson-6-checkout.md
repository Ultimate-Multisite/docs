---
title: 'Lesson 6: Ang Karanasan sa Pagpaparehistro'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lesson 6: Ang Karanasan sa Pagpaparehistro (The Signup Experience)

Dito sa checkout flow nagiging kita ang interes. Ang magulo o pangkalahatang proseso ng pag-sign up ay nagpapahamak sa mga customer. Ang isang daloy na espesipiko sa isang larangan (niche-specific) na nagsasalita ng kanilang wika at parang walang hirap ay nagko-convert sa kanila.

## Saan Tayo Tumigil {#where-we-left-off}

May mga templates at plans na naka-configure na ang FitSite. Ngayon, gagawin natin ang registration at checkout experience na magpapalit sa mga may-ari ng fitness studio na nagbabayad na customer.

## Pag-unawa sa Registration Flow {#understanding-the-registration-flow}

Ang mga checkout form ng Ultimate Multisite ay mga fully customizable na multi-step form. Para sa FitSite, gusto natin ng isang daloy na:

1. Parang ginawa talaga para sa mga fitness business
2. Kumukuha lang ng kailangan
3. Mabilis na makapagpatakbo ng site ang customer

Tingnan ang [The Registration Flow](/user-guide/configuration/the-registration-flow) para sa kumpletong technical reference.

## Pagdidisenyo ng FitSite Checkout {#designing-the-fitsite-checkout}

Pumunta sa **Ultimate Multisite > Checkout Forms** at gumawa ng bagong form.

### Step 1: Pagpili ng Plan {#step-1-plan-selection}

Ang unang makikita ng isang may-ari ng fitness studio ay dapat ang mga plans, na ipinapakita sa mga termino na naiintindihan nila.

- Magdagdag ng **Pricing Table** field
- I-configure ito para ipakita ang tatlong FitSite plans
- Ang mga plan descriptions na isinulat mo sa Lesson 5 ay lalabas dito -- siguraduhin na nagsasalita ito sa pangangailangan ng fitness business, hindi sa technical features

:::tip Mahalaga ang Wika ng Niche
"1 GB storage" ay walang ibig sabihin sa isang may-ari ng gym. Ang "Lahat ng kailangan mo para sa isang propesyonal na website ng studio" ay nangangahulugang lahat. Isulat ang mga plan descriptions sa wika ng iyong customer.
:::

### Step 2: Pagpili ng Template {#step-2-template-selection}

Pagkatapos pumili ng plan, pipili ang customer ng kanilang starting template.

- Magdagdag ng **Template Selection** field
- Ang mga available na templates ay naka-filter batay sa plan na pinili nila (na naka-configure sa Lesson 5)
- Ang bawat template ay dapat may preview image na nagpapakita ng disenyo na angkop sa fitness

### Step 3: Paglikha ng Account {#step-3-account-creation}

Panatilihing simple ito. Kolektahin lang ang:

- Email address
- Password
- Studio/business name (ito ang magiging site name nila)

Huwag magtanong ng impormasyon na hindi naman kailangan sa pag-sign up. Bawat dagdag na field ay nagpapababa ng conversions.

### Step 4: Pag-set up ng Site {#step-4-site-setup}

- **Site title**: Awtomatikong punan mula sa studio name na ipinasok sa Step 3
- **Site URL**: Awtomatikong bubuo mula sa studio name (hal., `ironworks.fitsite.com`)

### Step 5: Pagbabayad (Payment) {#step-5-payment}

- Magdagdag ng **Payment** field
- I-configure ang iyong payment gateway ([Stripe](/user-guide/payment-gateways/stripe) ay inirerekomenda para sa subscription billing)
- Kung gumawa ka ng order bumps sa Lesson 5, magdagdag ng **Order Bump** field bago ang payment step

### Step 6: Pagkumpirma (Confirmation) {#step-6-confirmation}

- I-customize ang confirmation message gamit ang fitness-specific language
- Halimbawa: "Ginagawa na ang website ng fitness studio mo. Iri-redirect ka sa iyong bagong site sa loob ng ilang segundo."

## Pagdaragdag ng Period Selection Toggle {#adding-a-period-selection-toggle}

Kung nag-set up ka ng price variations sa iyong plans (monthly vs. annual), magdagdag ng **Period Selection** field sa checkout form para ma-toggle ng mga customer ang billing periods. Tingnan ang [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) para sa mga instructions.

## Pag-configure ng Pagbabayad {#configuring-payment}

Kung hindi mo pa naka-set up ang payment gateway:

1. Pumunta sa **Ultimate Multisite > Settings > Payment Gateways**
2. Sundin ang [Stripe setup guide](/user-guide/payment-gateways/stripe) o ang iyong preferred gateway
3. Subukan ang isang kumpletong checkout flow gamit ang test payment

Tingnan ang [Getting Paid](/user-guide/payment-gateways/getting-paid) para sa detalye kung paano dumadaloy ang mga bayad sa iyong account.

## Pag-test ng Flow {#testing-the-flow}

Bago magpatuloy, kumpletuhin ang isang full test signup:

1. Buksan ang checkout form sa isang incognito/private browser window
2. Pumili ng plan
3. Pumili ng template
4. Gumawa ng account
5. Kumpletuhin ang pagbabayad (gamit ang test mode)
6. I-verify na nagawa ang site gamit ang tamang template

Tiyakin na:

- [ ] Malinaw at niche-specific ang plan descriptions
- [ ] Nagpapakita ang template previews ng mga disenyo na angkop sa fitness
- [ ] Tama ang pagbuo ng site URL mula sa studio name
- [ ] Matagumpay ang pagproseso ng pagbabayad
- [ ] Ang customer ay napupunta sa isang gumaganang site na may napiling template
- [ ] Gumagamit ang confirmation emails ng fitness-specific language

## Ang FitSite Network Hanggang Ngayon {#the-fitsite-network-so-far}

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

## Ano ang Binuo Natin sa Lesson na Ito {#what-we-built-this-lesson}

- **Isang multi-step checkout form** na ginawa para sa mga may-ari ng fitness studio
- **Niche-specific language** sa buong signup flow
- **Minimal friction** -- tanging mga essential fields, mabilis na daan patungo sa isang gumaganang site
- **Payment integration** na may test verification
- **Isang na-test na end-to-end flow** mula sa pagpili ng plan hanggang sa gumaganang site

---

**Next:** [Lesson 7: Making It Yours](lesson-7-branding) -- gagawin natin ang white-labeling ng platform at itatatag ang FitSite bilang isang brand.
