---
title: "Getting Paid"
sidebar_position: 15
---

# Getting Paid (v2)

_**IMPORTANT NOTE: This article refers to Ultimate Multisite version 2.x.**_

Ultimate Multisite has a built-in membership and billing system. For our billing system to function, we have integrated the most common payment gateways used in e-commerce. The default payment gateways in Ultimate Multisite are _Stripe_ , _PayPal_ , and Manual Payment. You can also use _WooCommerce_ , _GoCardless_ and _Payfast_ to receive payments by installing their respective add-ons.

## Basic Settings

You can configure any of these payment gateways under Ultimate Multisite payment settings. You can find it by going to **Ultimate Multisite menu > Settings > Payments.**

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Before you setup your payment gateway, please take a look at the basic payment settings you can configure:

**Force auto-rene** **w:** This will make sure that the payment will automatically recur at the end of every billing cycle depending on the billing frequency the user selected.

![Force Auto-Renew toggle setting on the Payments settings page](/img/config/payments-force-auto-renew.png)

**Allow trials without payment** **method:** With this option enabled your client won't have to add any financial information during the registration process. This will only be required once the trial period expires.

![Allow Trials Without Payment Method toggle on the Payments settings page](/img/config/payments-allow-trials.png)

**Send invoice on payment confirmation:** This gives you an option whether or not to send an invoice after payment. Note that users will have access to their payment history under their subsite dashboard. This option doesn't apply to the Manual Gateway.

![Send Invoice on Payment Confirmation toggle on the Payments settings page](/img/config/payments-send-invoice.png)

**Invoice numbering scheme:** Here, you can select either a payment reference code or a sequential number scheme. If you choose to use a payment reference code for your invoices, you don't need to configure anything. If you choose to use a sequential number scheme, you will need to configure the **next invoice number** (This number will be used as the invoice number for the next invoice generated on the system. It is incremented by one every time a new invoice is created. You can change it and save it to reset the invoice sequential number to a specific value) and the **invoice number prefix.**

![Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options](/img/config/payments-invoice-scheme.png)

![Next invoice number and invoice number prefix fields shown when Sequential Number is selected](/img/config/payments-invoice-sequential.png)

## Where to find the gateways:

You can setup the payment gateways on the same page ( **Ultimate Multisite > Settings > Payments**). Right below **active payment gateways** , you will be able to see: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ and _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

We have a dedicated article for each payment gateway that will guide you through the steps of setting it up which you can find on the links below.

You can view and edit payment details:

![Payment edit interface](/img/admin/payment-edit.png)

Here's a full view of the payment edit page:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Here's also a full view of the payment gateways settings:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Setting up the Stripe gateway**

**Setting up the PayPal gateway**** **

**Setting up manual payments**

Now, if you want to use _WooCommerce_ , _GoCardless_ or _Payfast_ as your payment gateway, you will need to **install and configure their add-ons**.

### How to install the WooCommerce add-on:

We understand that _Stripe_ and _PayPal_ are not available in some countries which limit or hinders Ultimate Multisite users from effectively using our plugin. So we created an add-on to integrate _WooCommerce,_ which is a very popular e-commerce plugin. Developers around the world created add-ons to integrate different payment gateways to it. We took advantage of this to extend the payment gateways you can use with the Ultimate Multisite billing system.

_**IMPORTANT:** Ultimate Multisite: WooCommerce Integration requires WooCommerce to be activated at least on your main site._

First, please go to the add-ons page. You can find it by going to **Ultimate Multisite > Settings**. You should see the **Add-ons** table. Click on **Check our Add-ons**.

![Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link](/img/config/settings-addons-table.png)

After clicking on **Check our Add-ons** , you will be redirected to the add-ons page. Here you can find all Ultimate Multisite add-ons. Click on the **Ultimate Multisite: WooCommerce Integration** add-on.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

A window will pop up with the add-on details. Just click on **Install Now**.

![Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button](/img/addons/addon-install-woocommerce.png)

After the installation is done, you will be redirected to the plugins page. Here, just click on **Network Activate** and the WooCommerce add-on will be activated on your network.

![Plugins page with the Network Activate link for the WooCommerce Integration add-on](/img/addons/addon-network-activate-woocommerce.png)

After activating it, if you still don't have the WooCommerce plugin installed and activated on your website, you will receive a reminder.

![Admin notice reminding the administrator to install and activate the WooCommerce plugin](/img/addons/addon-woocommerce-reminder.png)

To read more about the WooCommerce Integration add-on, **click here**.

### How to install the GoCardless add-on:

The steps to install the _GoCardless_ add-on are pretty much the same as the _WooCommerce_ add-on. Please go to the add-ons page and select the **Ultimate Multisite: GoCardless Gateway** add-on.

![Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted](/img/addons/addons-page-gocardless.png)

The add-on window will pop up. Click on **Install Now**.

![Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button](/img/addons/addon-install-gocardless.png)

After the installation is done, you will be redirected to the plugins page. Here, just click on **Network Activate** and the _GoCardless_ add-on will be activated on your network.

![Plugins page with the Network Activate link for the GoCardless Gateway add-on](/img/addons/addon-network-activate-gocardless.png)

To learn how to get started with the _GoCardless_ gateway, **read this article**.

### How to install the Payfast add-on:

Go to the add-ons page and select the **Ultimate Multisite: Payfast Gateway** add-on.

![Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted](/img/addons/addons-page-payfast.png)

The add-on window will pop up. Click on **Install Now.**

![Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button](/img/addons/addon-install-payfast.png)

After the installation is done, you will be redirected to the plugins page. Here, just click on **Network Activate** and the _Payfast_ add-on will be activated on your network.

![Plugins page with the Network Activate link for the Payfast Gateway add-on](/img/addons/addon-network-activate-payfast.png)
