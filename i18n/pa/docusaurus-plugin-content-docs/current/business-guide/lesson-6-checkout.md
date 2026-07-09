---
title: 'ਪਾਠ 6: ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਦਾ ਅਨੁਭਵ'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lesson 6: Signup Experience {#lesson-6-the-signup-experience}

Checkout flow ਉਹ جگہ ਹੈ ਜਿੱਥੇ ਦਿਲਚਸਪੀ ਆਮਦਨ ਬਣਦੀ ਹੈ। ਇੱਕ ਗੁੰਝਲਦਾਰ ਜਾਂ ਆਮ ਸਾਈਨਅੱਪ ਪ੍ਰੋਸੈਸ ਗਾਹਕਾਂ ਨੂੰ ਗੁਆ ਦਿੰਦਾ ਹੈ। ਇੱਕ ਖਾਸ ਨਿਸ਼ (niche) ਨਾਲ ਜੁੜਿਆ ਪ੍ਰੋਸੈਸ ਜੋ ਉਨ੍ਹਾਂ ਦੀ ਜ਼ੁਬਾਨ ਵਿੱਚ ਗੱਲ ਕਰਦਾ ਹੈ ਅਤੇ ਆਸਾਨ ਲੱਗਦਾ ਹੈ, ਉਹ ਉਨ੍ਹਾਂ ਨੂੰ ਗਾਹਕ ਬਣਾਉਂਦਾ ਹੈ।

## Where We Left Off {#where-we-left-off}

FitSite ਦੇ ਕੋਲ templates ਅਤੇ plans configure ਹੋ ਚੁੱਕੇ ਹਨ। ਹੁਣ ਅਸੀਂ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਤੇ checkout experience ਬਣਾਵਾਂਗੇ ਜੋ ਫਿਟਨੈਸ ਸਟੂਡੀਓ ਮਾਲਕਾਂ ਨੂੰ ਭੁਗਤਾਨ ਕਰਨ ਵਾਲੇ ਗਾਹਕ ਬਣਾ ਦੇਵੇਗਾ।

## Understanding the Registration Flow {#understanding-the-registration-flow}

Ultimate Multisite ਦੇ checkout forms ਪੂਰੀ ਤਰ੍ਹਾਂ customizable multi-step forms ਹੁੰਦੇ ਹਨ। FitSite ਲਈ, ਅਸੀਂ ਇੱਕ flow ਚਾਹੁੰਦੇ ਹਾਂ ਜੋ:

1. ਫਿਟਨੈਸ ਕਾਰੋਬਾਰਾਂ ਲਈ ਬਣਿਆ ਹੋਇਆ ਲੱਗੇ
2. ਸਿਰਫ਼ ਜ਼ਰੂਰੀ ਚੀਜ਼ਾਂ ਇਕੱਠੀਆਂ ਕਰੇ
3. ਗਾਹਕ ਨੂੰ ਜਿੰਨੀ ਜਲਦੀ ਹੋ ਸਕੇ ਇੱਕ ਕੰਮ ਕਰਦਾ ਸਾਈਟ ਤੱਕ ਪਹੁੰਚਾ ਦੇਵੇ

ਪੂਰੇ technical reference ਲਈ [The Registration Flow](/user-guide/configuration/the-registration-flow) ਦੇਖੋ।

## Designing the FitSite Checkout {#designing-the-fitsite-checkout}

**Ultimate Multisite > Checkout Forms** 'ਤੇ ਜਾਓ ਅਤੇ ਇੱਕ ਨਵਾਂ form ਬਣਾਓ।

### Step 1: Plan Selection {#step-1-plan-selection}

ਸਭ ਤੋਂ ਪਹਿਲੀ ਚੀਜ਼ ਜੋ ਇੱਕ ਫਿਟਨੈਸ ਸਟੂਡੀਓ ਮਾਲਕ ਦੇਖੇ, ਉਹ plans ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ, ਜੋ ਉਨ੍ਹਾਂ ਦੀ ਸਮਝ ਵਿੱਚ ਆਉਣ ਵਾਲੀ ਭਾਸ਼ਾ ਵਿੱਚ ਪੇਸ਼ ਕੀਤੇ ਗਏ ਹੋਣ।

- ਇੱਕ **Pricing Table** field ਜੋੜੋ
- ਇਸਨੂੰ configure ਕਰੋ ਤਾਂ ਜੋ ਤਿੰਨਾਂ FitSite plans ਦਿਖਾਈ ਦੇਣ
- ਉਹ plan descriptions ਜੋ ਤੁਸੀਂ Lesson 5 ਵਿੱਚ ਲਿਖੇ ਸਨ, ਉਹ ਇੱਥੇ ਆਉਣਗੇ -- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਉਹ ਫਿਟਨੈਸ ਕਾਰੋਬਾਰ ਦੀਆਂ ਲੋੜਾਂ ਬਾਰੇ ਗੱਲ ਕਰਦੇ ਹਨ, ਨਾ ਕਿ technical features ਬਾਰੇ।

:::tip Niche Language Matters
"1 GB storage" ਇੱਕ ਜਿਮ ਮਾਲਕ ਲਈ ਕੁਝ ਨਹੀਂ ਹੈ। "ਤੁਹਾਨੂੰ ਇੱਕ professional studio website ਲਈ ਜੋ ਕੁਝ ਵੀ ਚਾਹੀਦਾ ਹੈ" ਉਹ ਕੁਝ ਵੀ ਹੈ। plan descriptions ਆਪਣੇ ਗਾਹਕ ਦੀ ਭਾਸ਼ਾ ਵਿੱਚ ਲਿਖੋ।
:::

### Step 2: Template Selection {#step-2-template-selection}

plan ਚੁਣਨ ਤੋਂ ਬਾਅਦ, ਗਾਹਕ ਆਪਣਾ ਸ਼ੁਰੂਆਤੀ template ਚੁਣਦਾ ਹੈ।

- ਇੱਕ **Template Selection** field ਜੋੜੋ
- ਉਪਲਬਧ templates ਉਸ plan ਨਾਲ filter ਹੋਣਗੇ ਜੋ ਉਨ੍ਹਾਂ ਨੇ ਚੁਣਿਆ ਹੈ (Lesson 5 ਵਿੱਚ configure ਕੀਤਾ ਗਿਆ)
- ਹਰੇਕ template ਵਿੱਚ ਇੱਕ preview image ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ ਜੋ ਫਿਟਨੈਸ-specific design ਦਿਖਾਉਂਦੀ ਹੋਵੇ।

### Step 3: Account Creation {#step-3-account-creation}

ਇਸਨੂੰ ਘੱਟ ਤੋਂ ਘੱਟ ਰੱਖੋ। ਸਿਰਫ਼ ਇਹ ਇਕੱਠੇ ਕਰੋ:

- Email address
- Password
- Studio/business name (ਇਹ ਉਨ੍ਹਾਂ ਦਾ site name ਬਣ ਜਾਵੇਗਾ)

ਜਿਹੀ ਜਾਣਕਾਰੀ ਦੀ ਤੁਹਾਨੂੰ ਸਾਈਨਅੱਪ 'ਤੇ ਲੋੜ ਨਹੀਂ, ਉਹ ਪੁੱਛੋ ਨਾ। ਹਰ ਵਾਧੂ field conversions ਨੂੰ ਘਟਾਉਂਦਾ ਹੈ।

### Step 4: Site Setup {#step-4-site-setup}

- **Site title**: Step 3 ਵਿੱਚ ਦ入 ਕੀਤਾ ਗਿਆ ਸਟੂਡੀਓ ਨਾਮ ਤੋਂ pre-fill ਕਰੋ
- **Site URL**: ਸਟੂਡੀਓ ਨਾਮ ਤੋਂ auto-generate ਕਰੋ (ਉਦਾਹਰਨ ਲਈ, `ironworks.fitsite.com`)

### Step 5: Payment {#step-5-payment}

- **Payment** field ਜੋੜੋ
- ਆਪਣੇ payment gateway ਨੂੰ configure ਕਰੋ ([Stripe](/user-guide/payment-gateways/stripe) subscription billing ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤਾ ਜਾਂਦਾ ਹੈ)
- ਜੇ ਤੁਸੀਂ Lesson 5 ਵਿੱਚ order bumps ਬਣਾਏ ਸਨ, ਤਾਂ payment step ਤੋਂ ਪਹਿਲਾਂ ਇੱਕ **Order Bump** field ਜੋੜੋ

### Step 6: Confirmation {#step-6-confirmation}

- confirmation message ਨੂੰ ਫਿਟਨੈਸ-specific language ਨਾਲ customize ਕਰੋ
- ਉਦਾਹਰਨ: "ਤੁਹਾਡੀ ਫਿਟਨੈਸ ਸਟੂਡੀਓ ਦੀ website ਬਣਾਈ ਜਾ ਰਹੀ ਹੈ। ਤੁਹਾਨੂੰ ਕੁਝ ਸਕਿੰਟਾਂ ਵਿੱਚ ਤੁਹਾਡੀ ਨਵੀਂ site 'ਤੇ redirect ਕੀਤਾ ਜਾਵੇਗਾ।"

## Adding a Period Selection Toggle {#adding-a-period-selection-toggle}

ਜੇ ਤੁਸੀਂ ਆਪਣੇ plans ਵਿੱਚ price variations ਸੈੱਟ ਕੀਤੇ ਹਨ (ਮਹੀਨਾਵਾਰ ਬਨਾਮ ਸਾਲਾਨਾ), ਤਾਂ checkout form ਵਿੱਚ ਇੱਕ **Period Selection** field ਜੋੜੋ ਤਾਂ ਜੋ ਗਾਹਕ ਬਿਲਿੰਗ period ਵਿਚਕਾਰ toggle ਕਰ ਸਕਣ। instructions ਲਈ [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) ਦੇਖੋ।

## Configuring Payment {#configuring-payment}

ਜੇ ਤੁਸੀਂ ਅਜੇ ਤੱਕ ਕੋਈ payment gateway ਸੈੱਟ ਨਹੀਂ ਕੀਤਾ ਹੈ:

1. **Ultimate Multisite > Settings > Payment Gateways** 'ਤੇ ਜਾਓ
2. [Stripe setup guide](/user-guide/payment-gateways/stripe) ਜਾਂ ਆਪਣੇ ਪਸੰਦੀਦਾ gateway ਦੀ ਪਾਲਣਾ ਕਰੋ
3. ਇੱਕ test payment ਨਾਲ ਪੂਰਾ checkout flow test ਕਰੋ

details ਲਈ [Getting Paid](/user-guide/payment-gateways/getting-paid) ਦੇਖੋ ਕਿ payments ਤੁਹਾਡੇ account ਵਿੱਚ ਕਿਵੇਂ ਆਉਂਦੇ ਹਨ।

## Testing the Flow {#testing-the-flow}

ਅੱਗੇ ਵਧਣ ਤੋਂ ਪਹਿਲਾਂ, ਇੱਕ ਪੂਰਾ test signup complete ਕਰੋ:

1. ਇੱਕ incognito/private browser window ਵਿੱਚ checkout form ਖੋਲ੍ਹੋ
2. ਇੱਕ plan select ਕਰੋ
3. ਇੱਕ template ਚੁਣੋ
4. ਇੱਕ account ਬਣਾਓ
5. payment complete ਕਰੋ (test mode ਵਰਤੋ)
6. verify ਕਰੋ ਕਿ site ਸਹੀ template ਨਾਲ ਬਣੀ ਹੈ

check ਕਰੋ ਕਿ:

- [ ] Plan descriptions clear ਅਤੇ niche-specific ਹਨ
- [ ] Template previews ਫਿਟਨੈਸ-appropriate designs ਦਿਖਾਉਂਦੇ ਹਨ
- [ ] Site URL ਸਟੂਡੀਓ ਨਾਮ ਤੋਂ ਸਹੀ ਤਰ੍ਹਾਂ generate ਹੁੰਦਾ ਹੈ
- [ ] Payment ਸਫਲਤਾਪੂਰਵਕ process ਹੁੰਦਾ ਹੈ
- [ ] ਗਾਹਕ ਸਹੀ template ਨਾਲ ਇੱਕ ਕੰਮ ਕਰਨ ਵਾਲੀ site 'ਤੇ ਪਹੁੰਚਦਾ ਹੈ
- [ ] Confirmation emails ਫਿਟਨੈਸ-specific language ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ

## The FitSite Network So Far {#the-fitsite-network-so-far}

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

## What We Built This Lesson {#what-we-built-this-lesson}

- **ਇੱਕ multi-step checkout form** ਜੋ ਫਿਟਨੈਸ ਸਟੂਡੀਓ ਮਾਲਕਾਂ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ
- **Niche-specific language** ਸਾਈਨਅੱਪ flow ਵਿੱਚ ਹਰ ਪਾਸੇ
- **Minimal friction** -- ਸਿਰਫ਼ ਜ਼ਰੂਰੀ fields, ਕੰਮ ਕਰਨ ਵਾਲੀ site ਤੱਕ ਤੇਜ਼ ਰਸਤਾ
- **Payment integration** test verification ਨਾਲ
- **ਇੱਕ test ਕੀਤਾ ਗਿਆ end-to-end flow** plan selection ਤੋਂ ਲੈ ਕੇ ਕੰਮ ਕਰਨ ਵਾਲੀ site ਤੱਕ

---

**Next:** [Lesson 7: Making It Yours](lesson-7-branding) -- ਅਸੀਂ platform ਨੂੰ white-label ਕਰਾਂਗੇ ਅਤੇ FitSite ਨੂੰ ਇੱਕ brand ਵਜੋਂ ਸਥਾਪਿਤ ਕਰਾਂਗੇ।
