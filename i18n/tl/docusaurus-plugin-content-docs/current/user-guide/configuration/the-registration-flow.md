---
title: Ang Daloy ng Pagpaparehistro
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Ang Daloy ng Pagpaparehistro (v2)

_**MAHALAGANG PAUNA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x.**_

Maaaring magparehistro ang mga user sa iba't ibang paraan sa iyong network. Maaari nilang gamitin ang iyong registration form o isang shareable link patungo sa isang pre-selected na plano. Ipakikita namin dito kung paano magre-register ang iyong mga customer sa iyong network gamit ang mga available na daanan at ano ang mangyayari pagkatapos silang magparehistro sa iyong network.

## Paggamit ng Registration Form:

Ito ang standard na proseso ng pagpaparehistro. Gumagawa ka ng registration page na may **checkout form** at dito pupunta ang iyong mga customer para magre-register sa iyong network at mag-subscribe sa isang plano. Maaari kang magkaroon ng maraming registration pages, bawat isa ay may iba't ibang registration form kung gusto mo.

Ang default na page para sa pagpaparehistro ay [_**yourdomain.com/register**_](http://yourdomain.com/register), ngunit maaari mo itong baguhin anumang oras sa **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Pagdating ng user sa iyong registration page (karaniwan ay pag-click sa button na **Sign in** o **Buy now**), makikita nila ang iyong registration form doon.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Narito ang halimbawa ng checkout form kung paano ito lumalabas sa frontend:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Ang kailangan lang nilang gawin ay punan ang lahat ng mandatory fields - email, username, password, atbp... - at bayaran para sa plano o i-confirm ang kanilang email address kung nagre-register sila para sa libreng plano o isang may bayad na plano na may trial period nang walang impormasyon sa pagbabayad.

Sa "Thank you" page, makikita nila ang mensahe na nagsasabi kung kailangan ba nilang i-confirm ang kanilang email address o kung aktibo na ang kanilang website at maaari na silang magsimulang gumamit nito.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Kung kailangan ng confirmation sa email address, kailangan nilang pumunta sa kanilang inbox at i-click ang verification link. Hindi magiging aktibo ang kanilang website kung hindi ma-verify ang kanilang email address.

Kung nag-register sila sa isang paid plan o kung hindi mandatory ang email verification sa inyong network, maaari na nilang i-activate ang kanilang website pagkatapos ng checkout at ipapakita sa kanila ang link para mag-sign in sa kanilang dashboard.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Paggamit ng Shareable Link:

Ang proseso ng pag-register gamit ang shareable link ay halos pareho lang sa registration form, ang tanging pagkakaiba ay kapag gumagamit ng shareable link, maaari nang piliin ng mga customer mo ang isang product o website template bago sila mag-checkout (tingnan ang seksyon Pre-selecting products and templates via URL parameters) o baka may coupon code na idadagdag (tingnan ang seksyon Using URL Parameters).

Ang proseso ng registration ay pareho lang: kailangan nilang punan ang kanilang pangalan, username, email address, pangalan ng website at title, atbp... pero ang plan o site template ay naka-pre-select na para sa kanila.

### Pagrehistro Gamit ang Manual Payments:

Kung ayaw mo gumamit ng PayPal, Stripe o anumang ibang payment gateway na inaalok ng Ultimate Multisite o ng mga add-on integrations nito, maaari kang gumamit ng manual payments para sa iyong mga customer. Sa ganitong paraan, makakagawa ka ng invoice para sila ang magbayad sa iyong preferred payment processor pagkatapos nilang mag-register sa inyong network.

Ang proseso ng registration ay eksaktong pareho gaya ng nasa itaas, pero sa registration page, makikita ng mga customer mo ang mensahe na tatanggap sila ng email na may karagdagang instruksyon para tapusin ang pagbabayad.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

At pagkatapos ma-complete ang registration, makikita nila ang mga instruksyon sa pagbabayad na in-set mo (at matatanggap din nila ito sa kanilang email).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Maaari mong baguhin ang mga instruksyon sa pagbabayad sa **Ultimate Multisite > Settings > Payments** pagkatapos mong i-toggle ang opsyon na **Manual**:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Pagkatapos magbayad nang manual ang iyong mga customer at magpadala sila ng kumpirmasyon sa iyo, kailangan mo silang **i-confirm ang bayad nang mano** para ma-activate ang membership ng customer at ang website.

Para gawin ito, pumunta ka sa **Ultimate Multisite > Payments** at hanapin ang payment ng customer. Dapat ay mayroon pa itong status na **Pending**.

![Payments list with pending manual payment](/img/admin/payments-list.png)

I-click ang numero ng bayad at magagawa mong baguhin ang status nito sa **Completed**.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Pagkatapos mong baguhin ang status nito sa **Completed**, dapat makakita ka ng mensaheng **Activate membership**. I-toggle ito nang **on** para ma-activate ang membership at website na konektado sa customer na ito. Pagkatapos, i-click para **Save Payment**.

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Ang iyong customer ay dapat na makapasok sa dashboard at lahat ng features na kanilang sinubukan.
