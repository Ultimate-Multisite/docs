---
title: "Setting Up Manual Payments"
sidebar_position: 20
---

# Setting Up Manual Payments (v2)

_**IMPORTANT NOTE: This article refers to Ultimate Multisite version 2.x.**_

Manual payments are a way for to you offer other payment methods should **Stripe** or **PayPal** is not available for your users. It can be a wire or bank transfer or any other payment method available to your users locally.

## How to enable Manual Payments

Setting up manual payment is very easy. You just need to enable it under payment gateways and put in detailed instructions on how the user should send the payment.

First, go to **Ultimate Multisite > Settings > Payments**. Below **Payment Gateways** , toggle **Manual** on. You will see that a **Payment Instructions** box will show up for you.

Add to this box the information your customer will need to make the payment. It can be your bank account details and your email so the customer can send you the payment confirmation, for example.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

After setting it up, just click on **Save Settings** and it is done. When users register to your network, they will see a message telling them that they will receive your instructions to complete the purchase.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

And they will also receive a message on your **Thank You** page with your payment instructions.

![Thank You page showing payment instructions after checkout](/img/frontend/manual-thank-you.png)

## Confirming manual payments

To confirm a manual payment, go to the **Payments** menu on the left bar. There you can see all the payments on your network and their details, including their **status**. A manual payment will always have a **Pending** status until you manually change it.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Enter the payment page by clicking the **reference code**. On this page you have all the details of the pending payment, such as reference ID, products, timestamps and more.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

On the right column, you can alter the status of the payment. Changing it to **Completed** and **toggling the Activate Membership** option will enable your customer’s site and their membership will be active.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
