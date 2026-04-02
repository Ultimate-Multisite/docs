---
title: "Lesson 6: The Signup Experience"
sidebar_position: 7
---

# Lesson 6: The Signup Experience

The checkout flow is where interest becomes revenue. A confusing or generic signup process loses customers. A niche-specific flow that speaks their language and feels effortless converts them.

## Where We Left Off

FitSite has templates and plans configured. Now we build the registration and checkout experience that turns fitness studio owners into paying customers.

## Understanding the Registration Flow

Ultimate Multisite's checkout forms are fully customizable multi-step forms. For FitSite, we want a flow that:

1. Feels like it was built for fitness businesses
2. Collects only what is needed
3. Gets the customer to a working site as fast as possible

See [The Registration Flow](/user-guide/configuration/the-registration-flow) for the full technical reference.

## Designing the FitSite Checkout

Navigate to **Ultimate Multisite > Checkout Forms** and create a new form.

### Step 1: Plan Selection

The first thing a fitness studio owner sees should be the plans, presented in terms they understand.

- Add a **Pricing Table** field
- Configure it to show all three FitSite plans
- The plan descriptions you wrote in Lesson 5 appear here -- make sure they speak to fitness business needs, not technical features

:::tip Niche Language Matters
"1 GB storage" means nothing to a gym owner. "Everything you need for a professional studio website" means everything. Write plan descriptions in your customer's language.
:::

### Step 2: Template Selection

After choosing a plan, the customer picks their starting template.

- Add a **Template Selection** field
- The available templates are filtered by the plan they selected (configured in Lesson 5)
- Each template should have a preview image showing a fitness-specific design

### Step 3: Account Creation

Keep this minimal. Collect only:

- Email address
- Password
- Studio/business name (this becomes their site name)

Do not ask for information you do not need at signup. Every extra field reduces conversions.

### Step 4: Site Setup

- **Site title**: Pre-fill from the studio name entered in Step 3
- **Site URL**: Auto-generate from the studio name (e.g., `ironworks.fitsite.com`)

### Step 5: Payment

- Add the **Payment** field
- Configure your payment gateway ([Stripe](/user-guide/payment-gateways/stripe) is recommended for subscription billing)
- If you created order bumps in Lesson 5, add an **Order Bump** field before the payment step

### Step 6: Confirmation

- Customize the confirmation message with fitness-specific language
- Example: "Your fitness studio website is being created. You will be redirected to your new site in a few seconds."

## Adding a Period Selection Toggle

If you set up price variations in your plans (monthly vs. annual), add a **Period Selection** field to the checkout form so customers can toggle between billing periods. See [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) for instructions.

## Configuring Payment

If you have not already set up a payment gateway:

1. Navigate to **Ultimate Multisite > Settings > Payment Gateways**
2. Follow the [Stripe setup guide](/user-guide/payment-gateways/stripe) or your preferred gateway
3. Test a complete checkout flow with a test payment

See [Getting Paid](/user-guide/payment-gateways/getting-paid) for details on how payments flow to your account.

## Testing the Flow

Before moving on, complete a full test signup:

1. Open the checkout form in an incognito/private browser window
2. Select a plan
3. Choose a template
4. Create an account
5. Complete payment (use test mode)
6. Verify the site is created with the correct template

Check that:

- [ ] Plan descriptions are clear and niche-specific
- [ ] Template previews show fitness-appropriate designs
- [ ] The site URL generates correctly from the studio name
- [ ] Payment processes successfully
- [ ] The customer lands on a working site with the selected template
- [ ] Confirmation emails use fitness-specific language

## The FitSite Network So Far

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

## What We Built This Lesson

- **A multi-step checkout form** tailored to fitness studio owners
- **Niche-specific language** throughout the signup flow
- **Minimal friction** -- only essential fields, fast path to a working site
- **Payment integration** with test verification
- **A tested end-to-end flow** from plan selection to working site

---

**Next:** [Lesson 7: Making It Yours](lesson-7-branding) -- we white-label the platform and establish FitSite as a brand.
