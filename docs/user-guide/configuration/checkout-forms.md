---
title: "Checkout Forms"
sidebar_position: 19
---

# Checkout Forms

Checkout Forms are an easy and flexible way to experiment with different approaches when trying to convert new customers.

Ultimate Multisite 2.0 offers a Checkout Form editor that allows you to create as many forms as you want, with different fields, products on offer, etc.

To access this feature, go to the Checkout Forms menu, on the left side-bar.

![Checkout Forms list](/img/config/checkout-forms-list.png)

On this page, you can see all the checkout forms you have.

If you want to create a new one, just click Add Checkout Form on the top of the page.

You can select one of these three options as your starting point: single step, multi-step or blank. Then, click to Go to the Editor.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternatively, you can edit or duplicate the forms you already have by clicking on the options below its name. There, you will also find the options to copy the form's shortcode or to delete the form.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

### Editing a Checkout Form

You can create checkout forms for different purposes. In this example we will work on a registration form.

After navigating to the checkout form editor, give your form a name (that will be used for internal reference only) and a slug (used to create shortcakes, for example).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Forms are made of steps and fields. You can add a new step by clicking on Add New Checkout Step.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

On the first tab of the modal window, fill the content of your form's step. Give it an ID, a name and a description. These items are mostly used internally.

![Checkout form step](/img/config/checkout-form-step.png)

Next, set the visibility of the step. You can choose between "Always show", "Only show for logged in users" or "Only show for guests".

![Checkout form step](/img/config/checkout-form-step.png)

Finally, configure the step style. These are optional fields.

![Checkout form step](/img/config/checkout-form-step.png)

Now, it's time to add fields to our first step. Just click to Add New Field and select the type of section you want.

![Checkout form step with fields](/img/config/checkout-form-step.png)

Each field has different parameters to be filled. For this first entrance, we will select the "Username" field.

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

You can add as many steps and fields as you need. To display your products for your customers to pick one, use the Pricing Table field. If you want to let your clients choose a template, add the Template Selection field. And so on.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Note:** username, email, password, site title, site URL, order summary, payment, and submit button are mandatory fields to create a checkout form._

While you are working on your checkout form, you can always use the Preview button to see how your clients will see the form. You can also alternate between view as an existing user or a visitor

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

Finally, on Advanced Options you can configure the message for the "Thank You" page, add snippets to track conversions, add custom CSS to your checkout form or restrict it to certain countries.

![Advanced Options](/img/config/checkout-form-advanced.png)

You can also manually enable or disable your checkout form by toggling this option on the right column, or delete permanently the form.

![Active toggle](/img/config/checkout-form-active.png)

Don't forget to save your checkout form!

![Save button](/img/config/checkout-form-save.png)

To get your form's shortcode click to Generate Shortcode and copy the result shown on the modal window.

![Save button with shortcode](/img/config/checkout-form-save.png)

### The Pricing Table Field

The **Pricing Table** field displays your products on the checkout form so customers can choose a plan. When you edit this field, you can configure several options:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

  * **Products**: Select which products to display and the order they appear in.
  * **Force Different Durations**: When enabled, all products are shown regardless of whether they have a matching price variation for the currently selected billing period. When disabled (default), products without a variation for the selected period are hidden.
  * **Hide when Pre-Selected**: Hides the pricing table when a plan has already been selected via the URL (e.g. `/register/premium`).
  * **Pricing Table Template**: Choose the visual template for the pricing table (Simple List, Legacy, etc.).

### Adding a Period Selection Toggle

If you have configured [Price Variations](creating-your-first-subscription-product#price-variations) on your products (e.g. monthly and annual pricing), you can add a **Period Selection** field to your checkout form. This field displays a toggle that allows customers to switch between billing periods, and the pricing table updates dynamically in real time.

#### Step 1: Set Up Price Variations on Your Products

Before adding the Period Selection field, make sure your products have price variations configured. Go to **Ultimate Multisite > Products**, edit a product, and navigate to the **Price Variations** tab to add alternate billing periods (e.g. Annual at a discounted price).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Step 2: Add the Period Selection Field to Your Checkout Form

1. Go to **Ultimate Multisite > Checkout Forms** and edit your checkout form.

2. Scroll down to the step that contains your **Pricing Table** field and click **Add new Field**.

3. In the field type selection dialog, click **Period Select**.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Configure the period options. Each option needs:
   * **Duration**: The number (e.g. `1`)
   * **Duration unit**: The period type (Days, Weeks, Months, or Years)
   * **Label**: The text customers will see (e.g. "Monthly", "Annual")

5. Click **+ Add Option** to add more period choices. These options must match the price variations you configured on your products.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

6. Choose a **Period Selector Template** (Clean is the default, which renders a simple styled selector ready for custom CSS).

7. Click **Save Field**.

#### Step 3: Position the Field Above the Pricing Table

For the best user experience, make sure the Period Selection field appears **before** the Pricing Table field in your checkout step. You can drag fields to reorder them in the checkout form editor. This way, customers first choose a billing period and then see prices for that period.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### How It Works on the Frontend

Once configured, customers visiting your registration page will see the period selector above the pricing table. When they click a different billing period:

  * The pricing table instantly updates to show prices for the selected period (no page reload required).
  * If **Force Different Durations** is disabled on the Pricing Table field, products without a price variation for the selected period will be hidden.
  * If **Force Different Durations** is enabled, all products remain visible even if they don't have a variation for the selected period (they will show their default price).

#### Pre-selecting a Billing Period via URL

You can also pre-select a product and billing period through the URL. Ultimate Multisite supports these URL patterns:

  * `/register/premium` — Pre-selects the "Premium" product only
  * `/register/premium/12` — Pre-selects the product and 12-month duration
  * `/register/premium/1/year` — Pre-selects the product with a 1-year duration
