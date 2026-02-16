---
title: Ang Daloy ng Pagpaparehistro
sidebar_position: 3
_i18n_hash: 73484be47ec750747cb9d94ea874d97f
---
# Ang Registration Flow (v2)

_**MAHALAGANG PAALALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite version 2.x.**_

Maaaring mag-register ang mga user sa iba't ibang paraan sa iyong network. Maaari nilang gamitin ang iyong registration form o isang shareable link papunta sa isang pre-selected na plan. Dito ipapakita namin kung paano makakapag-register ang iyong mga customer sa iyong network gamit ang mga available na paraan at kung ano ang mangyayari pagkatapos nilang mag-register sa iyong network.

## Paggamit ng Registration Form:

Ito ang karaniwang proseso ng registration. Gagawa ka ng registration page na may **checkout form** at dito pupunta ang iyong mga customer para mag-register sa iyong network at mag-subscribe sa isang plan. Maaari kang magkaroon ng maraming registration page, bawat isa ay may ibang registration form kung gusto mo.

Ang default na page para sa registration ay [_**yourdomain.com/register**_](http://yourdomain.com/register), pero maaari mo itong baguhin anumang oras sa **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Pagkatapos makapunta ng user sa iyong registration page (karaniwang nag-click sa **Sign in** o **Buy now** button), makikita nila ang iyong registration form doon.

![Registration form na ipinapakita sa registration page](/img/config/checkout-forms-list.png)

Ang kailangan lang nilang gawin ay punan ang lahat ng mandatory fields - email, username, password, atbp... - at magbayad para sa plan o i-confirm ang kanilang email address kung nagre-register sila para sa isang libreng plan o isang bayad na plan na may trial period na walang payment information.

Sa "Thank you" page, makakakita sila ng mensahe na nagsasabi kung kailangan nilang i-confirm ang kanilang email address o kung ang kanilang website ay activated na at maaari na nilang gamitin.

![Thank You page pagkatapos ng registration](/img/config/checkout-form-editor.png)

Kung kailangan ng email address confirmation, kakailanganin nilang pumunta sa kanilang email inbox at i-click ang verification link. Hindi maa-activate ang kanilang website kung hindi ma-verify ang kanilang email address.

Kung nag-register sila sa isang bayad na plan o hindi mandatory ang email verification sa iyong network, maa-activate agad ang kanilang website pagkatapos ng checkout at ipapakita sa kanila ang link para mag-sign in sa kanilang dashboard.

![Na-activate na site na may link para mag-sign in sa dashboard](/img/config/checkout-form-editor.png)

## Paggamit ng Shareable Link:

Ang proseso ng pag-register gamit ang shareable link ay halos pareho sa registration form, ang pagkakaiba lang ay kapag gumamit ng shareable link, maaaring may pre-selected na product o website template na ang iyong mga customer sa checkout form (tingnan ang seksyon na Pre-selecting products and templates via URL parameters) o maaaring may naka-add na coupon code (tingnan ang seksyon na Using URL Parameters).

Pareho pa rin ang registration process: kakailanganin nilang punan ang kanilang name, username, email address, website name at title, atbp... pero ang plan o site template ay pre-selected na para sa kanila.

### Pag-register Gamit ang Manual Payments:

Kung ayaw mong gumamit ng PayPal, Stripe o anumang ibang payment gateway na ino-offer ng Ultimate Multisite o ng mga add-on integration nito, maaari kang gumamit ng manual payments para sa iyong mga customer. Sa ganitong paraan, maaari kang mag-generate ng invoice para mabayaran nila sa iyong preferred na payment processor pagkatapos nilang mag-register sa iyong network.

Eksaktong pareho ang registration process tulad ng nasa itaas, pero sa registration page makikita ng iyong mga customer ang isang mensahe na nagsasabing makakatanggap sila ng email na may karagdagang instructions para makumpleto ang payment.

![Mensahe ng manual payment habang nagre-register](/img/config/settings-payment-gateways.png)

At pagkatapos makumpleto ang registration, makikita nila ang payment instructions na iyong itinakda (at matatanggap din nila ito sa kanilang email).

![Payment instructions na ipinapakita pagkatapos ng registration](/img/config/settings-payment-gateways.png)

Maaaring baguhin ang payment instructions sa **Ultimate Multisite > Settings > Payments** pagkatapos i-toggle on ang **Manual** payment option:

![Manual payment toggle na may payment instructions field](/img/config/settings-payment-gateways.png)

Pagkatapos makumpleto ng iyong mga customer ang manual payment at ipadala sa iyo ang confirmation, kailangan mong **manual na i-confirm ang payment** para ma-activate ang customer membership at website.

Para magawa ito, pumunta sa **Ultimate Multisite > Payments** at hanapin ang customer payment. Dapat ay nagpapakita pa rin ito ng **Pending** status.

![Listahan ng payments na may pending manual payment](/img/admin/payments-list.png)

I-click ang payment number at maaari mong baguhin ang status nito sa **Completed**.

![Payment details page](/img/admin/payments-list.png)

![Pagpapalit ng payment status sa Completed](/img/admin/payments-list.png)

Pagkatapos baguhin ang status nito sa **Completed**, dapat makakita ka ng **Activate membership** na mensahe. I-toggle **on** ang option na ito para ma-activate ang membership at website na naka-associate sa customer na ito. Pagkatapos, i-click ang **Save Payment**.

![Activate membership toggle at Save Payment button](/img/admin/payments-list.png)

Dapat ay ma-access na ngayon ng iyong customer ang dashboard at lahat ng features na kanilang na-subscribe.
