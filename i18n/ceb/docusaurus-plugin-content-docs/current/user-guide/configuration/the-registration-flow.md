---
title: Ang Daloy sa Pagparehistro
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Ang Proseso sa Pag-register (v2) {#the-registration-flow-v2}

_**MAHALAGANG PAHIBALO: Kini nga artikulo nagrefer sa Ultimate Multisite version 2.x.**_

Ang mga user pwede mag-register sa inyong network pinaagi sa lain-laing paagi. Mahimo nila gamiton ang inyong registration form o usa ka shareable link ngadto sa usa ka pre-selected plan. Atong ipakita diri kung unsaon pag-register sa inyong mga customer sa inyong network gamit ang mga available nga dalan ug unsa ang mahitabo human sila mag-register sa inyong network.

## Paggamit sa Registration Form: {#using-the-registration-form}

Kini mao ang standard nga proseso sa pag-register. Maghimo ka og registration page nga adunay **checkout form** ug dinhi na mosulod ang imong mga customer aron mag-register sa inyong network ug mag-subscribe sa usa ka plan. Mahimo kang maghimo og daghang registration pages, matag usa nga adunay lain nga registration form kung gusto nimo.

Ang default page para sa pag-register kay [_**yourdomain.com/register**_](http://yourdomain.com/register), pero pwede nimo kining usbon bisan kanus-a sa **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Human maabot ang usa ka user sa inyong registration page (kasagaran pinaagi sa pag-click sa button nga **Sign in** o **Buy now**), makita nila ang inyong registration form didto.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Ania usa ka pananglitan sa checkout form kung unsa kini hitsura sa frontend:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Ang tanan nga kinahanglan nila buhaton kay pun-on ang tanang mandatory fields - email, username, password, ug uban pa... - ug bayran para sa plan o kumpirmahon ang ilang email address kung nag-register sila alang sa libreng plan o usa ka paid plan nga adunay trial period nga walay impormasyon sa pagbayad.

Sa "Thank you" page, makakita sila og mensahe nga mag-ingon kanila kung kinahanglan ba nila kumpirmahon ang ilang email address o kung ang ilang website na aktibo na ug pwede na silang magsugod sa paggamit niini.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Kung kinahanglan ang kumpirmasyon pinaagi sa email address, kinahanglan lang nila nga moadto sa ilang inbox ug i-click ang verification link. Dili ma-activate ang ilang website kung dili ma-verify ang ilang email address.

Kung nag-register sila sa paid plan o kung wala kini obligasyon nga mag-verify sa email sa inyong network, ma-aactivate na dayon ang ilang website human sa checkout ug ipakita kanila ang link para mag-sign in sa ilang dashboard.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Paggamit og Shareable Link: {#using-a-shareable-link}

Ang proseso sa pag-register gamit ang shareable link halos pareho ra sa registration form, ang nag-inusarang kalainan kay pinaagi sa shareable link, ang mga customer ninyo makapili na og product o website template sa checkout form (tan-awa ang seksyon Pre-selecting products and templates via URL parameters) o basin adunay coupon code nga gidugang (tan-awa ang seksyon Using URL Parameters).

Ang proseso sa pag-register pareho ra: kinahanglan nila i-fill ang ilang ngalan, username, email address, website name ug title, ug uban pa... pero ang plan o site template kay pre-selected na para kanila.

### Pag-register Gamit og Manual Payments: {#registering-using-manual-payments}

Kung dili ninyo gusto gamiton ang PayPal, Stripe o bisan unsang gateway sa bayad nga gihatag sa Ultimate Multisite o sa mga add-on integrations niini, pwede kamo mogamit og manual payments para sa inyong mga customer. Sa paagi ani, makahimo mo og invoice para sila mobayad sa inyong gusto nga payment processor human mag-register sila sa inyong network.

Ang proseso sa pag-register pareho ra sama sa ibabaw, pero sa registration page, makakita ang inyong mga customer og mensahe nga makadawat sila og email nga adunay dugang instruksyon para makompleto ang bayad.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Ugdan paghuman sa registration, makakita sila sa mga instruksyon sa bayad nga imong gi-set (ug madawat usab kini sa ilang email).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Mahimo mong pasagda ang mga instruksyon sa bayad sa **Ultimate Multisite > Settings > Payments** human nimo i-toggle on ang opsyon nga **Manual**:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Human ma-complete sa imong mga customer ang manual payment ug magpadala sila og confirmation kanimo, kinahanglan nimong **manually i-confirm ang bayad** aron ma-activate ang membership sa customer ug ang website.

Para buhaton kini, adto sa **Ultimate Multisite > Payments** ug pangitaa ang bayad sa customer. Dapat gihapon kini ipakita nga status nga **Pending**.

![Payments list with pending manual payment](/img/admin/payments-list.png)

I-click ang numero sa bayad ug mahimo nimong usbon ang status niini ngadto sa **Completed**.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Human usbon nimo kini sa status nga **Completed**, makakita ka og mensahe nga **Activate membership**. I-toggle kining option ngadto sa **on** aron ma-activate ang membership ug website nga konektado niini nga customer. Unya, i-click para **Save Payment**.

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Ang imong customer na mahimong mag-access sa dashboard ug tanan nga mga feature nga ilang gisaub-on.
