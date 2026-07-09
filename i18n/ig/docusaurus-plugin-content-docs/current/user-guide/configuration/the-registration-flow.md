---
title: Nkwado Ọrụ
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Awụm Nkwado (v2) {#the-registration-flow-v2}

_**NOTE MUỌLỊ: Ati dị ọnụ này na-enwe na Ultimate Multisite version 2.x.**_

Nwanyị ndị nwere ike ịzụta nchekwa gị nchebe ọtụtụ ụzọ. Ha ga-arụrụ ihe nwere ike ịchọrọ akụm nkwado (registration form) tò nchebe, lebe link a nwere ike ịchiaụ ya n'ụzọ dị mma nke ewu plan onye anọ. Ọ bụrụ na anyị ga-arụrụ ihe ndị a, anyị ga-enweghị gị ọkụzi ahụ na ụzọ ndị dị n'ebe ahụ na ụzọ ndị a ga-eme ka ha azụta nchekwa gị, ma ọ bụ ihe ịdị ezi okwu anọ n'aka ha tarakwa ha azụta.

## Ụzọ ịnweta Akụm Nkwado: {#using-the-registration-form}

Ọ bụ akụkọ nkwado ọ bụla. Ị ga-eme akụkọ nkwado (registration page) nke na-enwe **checkout form** ahụ, ma ọ bụ ihe a bụ ebe ndị mmadụ anọ ga-arụrụ ịzụta nchekwa gị na nchebe site na plan. Ị ga-anọ akụkọ nkwado ọtụtụ, ma ọ bụrụ na ị chọrọ, ọ bụrụ na ọ bụrụ na akụm nkwado dị ọnụ dị Ọ bụla.

Akụkọ nkwado dị ọdị osisi bụ [_**yourdomain.com/register**_](http://yourdomain.com/register), ma ị ga-anọchịrị ya anya ụta na **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Ọ bụrụ na onye ahụ nwere ike ịgidi akụkọ nkwado gị (ụbọchị ọ bụla, ma ọ bụrụ na ha na-akpọ button **Sign in** ma ọ bụ **Buy now**), ha ga-enweghị akụm nkwado anọ.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Ọ bụ ihe ndị mmadụ ga-arụrụ bụ ịkwupụta akụkọ ọ bụla nke na-enwe (email, username, password, sns...) ma ọ bụ ịkwado plan ahụ ma ọ bụ ịgba nkwado email ha ma ọ bụrụ na ha na-azụta plan ewu ma ọ bụ plan ewu na-eme ihe tarakwa ha anọ n'aka ha.

Na akụkọ "Thank you", ha ga-enweghị oge a na-eme ka ha kwadara ịgba nkwado email ha ma ọ bụrụ na website ha jara azụta barị ahụ ya ma ha chụrụ ịga eme ihe anọ.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Ka ọ bụrụ ihe ị chọrọ xác nhận địa chỉ email, ha ga-agbịa n'email inbox ha na klikye pụrụiche verification link ahụ. Ụbọchị website ha ga-abịa ma ọ bụ akwaọrọ ma ọ bụrụ na a kpọrọ địa chỉ email ha.

Ọ bụrụ na ha bụrụ onye zare na plan a ajiro ma ọ bụ ọ bụ na xác nhận email ahụ bụ ihe dị mkpa na nwere ọkụ na mbụ, ha ga-abịa website ha ma ọ bụrụ na a kpọrọ địa chỉ email ha. Ha ga-abịa link don login ebe dashboard ha onwe ya.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Ụdị Link Shareable (Shareable Link): {#using-a-shareable-link}

Nkwado ịzụta website n'ime amakọrịta link shareable bụ ihe dị gị na akụkọ zare, ọ bụghị ihe dị mkpa na ọrụ ahụ. Ọ dị mma ma ị chọrọ ka ndị biara ịrụ registration ha na-agbịa product ma website template pre-selected (kpọrọ section Pre-selecting products and templates via URL parameters) ma ọ bụ nwere coupon code kpọrọ (kpọrọ section Using URL Parameters).

Nkwado registration ga-abụ dị sama: ha ga-agbịa onye ahụ, username, email address, website name na title, ma ọ bụ ihe ndị ọzọ... ma plan ma template site ahụ ga-abụ dị pre-selected (kpọrọ) anọ.

### Ịzụta Imebe Imebi (Manual Payments): {#registering-using-manual-payments}

Ọ bụrụ na ị chọrọ ka ị lafu PayPal, Stripe ma ọ bụ ihe ọ bụla dị n'ime payment gateway ndị Ultimate Multisite ma ọ bụ add-on ha na-agbịa, ị ga-anọ site manual payments. Biko, ị ga-abụ invoice (kwapụrụ) gị maka ha ka ha chọrọ ịpay ọkụ ahụ na processor payment ahụ ị chọrọ onye ahụ zare na network ha.

Nkwado registration ga-abụ dị sama dị ka a jiwobe above, ma na page registration, ndị biara ịrụ registration ga-agbịa message na ọ bụ na ha ga-anọ email nke mere anyị gị maka ịkomi ihe ịpay ahụ.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Apụmọbi, men wetara mme a bụ ihe ndị ọzọ dị n'ụlọ anọ.

And after the registration is completed, they will see the payment instructions that you set (and also receive it on their email).

Akpọbi, men afọ ọrụ ya bụ ị chọpụta mme a nke ị seto (na ọkụkọ-mmine ya) (na ọkụkọ-mmine ya na-anọ n'email ha).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Ọ dị mma ị chọpụta mme a nke ị seto na **Ultimate Multisite > Settings > Payments** ọ bụrụ na ị chọpụta option **Manual**:

The payment instructions can be changed on **Ultimate Multisite > Settings > Payments** after toggling on the **Manual** payment option:

Ọ dị mma ị chọpụta mme a nke ị seto na **Ultimate Multisite > Settings > Payments** ọ bụrụ na ị chọpụta option **Manual**:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Akpọbi, men afọ ọrụ ya bụ ị chọpụta mme a nke ị seto na **Ultimate Multisite > Payments** na ị chọpụta customer payment. Ọ nwere ike ịbụ status **Pending**.

After your customers complete the manual payment and send you the confirmation, you need to **manually confirm the payment** to activate the customer membership and website.

Akpọbi, men afọ ọrụ ya bụ ị chọpụta mme a nke ị seto na **Ultimate Multisite > Payments** na ị chọpụta customer payment. Ọ nwere ike ịbụ status **Pending**.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Click on the payment number and you will be able to change its status to **Completed**.

Chọpụta n'ịgbazụ nọ na nọ, ọ ga-akụkọ ịgba status ya na **Completed**.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Ọ bụrụ na ịgba status ya na **Completed**, ị ga ịhụ oge **Activate membership** (Chọpụta Membership). Toggle option a **on** (chọpụta on) maka ịgbakọ membership na website nke nwere ike ịbụ na-agba customer a. Tetingbe, chọpụta n'ị **Save Payment**.

Ọ bụrụ na ịgba status ya na **Completed**, ị ga ịhụ oge **Activate membership** (Chọpụta Membership). Toggle option a **on** (chọpụta on) maka ịgbakọ membership na website nke nwere ike ịbụ na-agba customer a. Tetingbe, chọpụta n'ị **Save Payment**.

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Ọ bụrụ na ịgba status ya na **Completed**, ọ ga-akụkọ ịga n'ụlọ anọ (dashboard) na olu ndị dị ka ha chọpụta.

Your customer should now be able to access the dashboard and all features that they subscribed to.

Ọ bụrụ na ịgba status ya na **Completed**, ọ ga-akụkọ ịga n'ụlọ anọ (dashboard) na olu ndị dị ka ha chọpụta.
