---
title: Ang Daloy ng Pagpaparehistro
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Ang Daloy ng Pagpaparehistro (v2)

_**MAHALAGANG TALA: Ang artikulong ito ay tumutukoy sa Ultimate Multisite bersyon 2.x.**_

Maaaring magparehistro ang mga user sa iba't ibang paraan sa iyong network. Maaari nilang gamitin ang iyong form ng pagpaparehistro o isang naibabahaging link papunta sa paunang napiling plano. Dito, ipapakita namin kung paano maaaring magparehistro ang iyong mga customer sa iyong network gamit ang mga available na landas at kung ano ang mangyayari pagkatapos nilang magparehistro sa iyong network.

## Gamit ang Form ng Pagpaparehistro:

Ito ang karaniwang proseso ng pagpaparehistro. Gumagawa ka ng pahina ng pagpaparehistro na may **form ng pag-checkout** at dito pupunta ang iyong mga customer upang magparehistro sa iyong network at mag-subscribe sa isang plano. Maaari kang magkaroon ng maraming pahina ng pagpaparehistro, bawat isa ay may ibang form ng pagpaparehistro kung gusto mo.

Ang default na pahina para sa pagpaparehistro ay [_**yourdomain.com/register**_](http://yourdomain.com/register), ngunit maaari mo itong baguhin anumang oras sa **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Pagkatapos makarating ang isang user sa iyong pahina ng pagpaparehistro (karaniwang sa pamamagitan ng pag-click sa button na **Mag-sign in** o **Bumili ngayon**), makikita nila roon ang iyong form ng pagpaparehistro.

![Form ng pagpaparehistro na ipinapakita sa pahina ng pagpaparehistro](/img/frontend/registration-form.png)

Narito ang isang halimbawa ng form ng pag-checkout kung paano ito lumalabas sa frontend:

![Form ng pagpaparehistro sa frontend checkout](/img/config/checkout-frontend-registration.png)

Ang kailangan lang nilang gawin ay punan ang lahat ng mandatoryong field - email, username, password, atbp... - at bayaran ang plano o kumpirmahin ang kanilang email address kung nagpaparehistro sila para sa libreng plano o bayad na plano na may trial period nang walang impormasyon sa pagbabayad.

Sa pahinang "Salamat", makakakita sila ng mensahe na nagsasabi kung kailangan nilang kumpirmahin ang kanilang email address o kung na-activate na ang kanilang website at maaari na nilang simulan itong gamitin.

![Pahinang Salamat pagkatapos ng pagpaparehistro](/img/frontend/registration-thank-you.png)

Kung kinakailangan ang kumpirmasyon ng email address, kailangan nilang pumunta sa kanilang email inbox at i-click ang verification link. Hindi maa-activate ang kanilang website kung hindi mabe-verify ang kanilang email address.

Kung nagparehistro sila sa isang bayad na plano o hindi mandatoryo ang email verification sa iyong network, maa-activate ang kanilang website kaagad pagkatapos ng checkout at ipapakita sa kanila ang isang link para mag-sign in sa kanilang Dashboard.

![Website na na-activate na may link para mag-sign in sa Dashboard](/img/frontend/site-activated.png)

## Gamit ang Naibabahaging Link:

Ang proseso ng pagpaparehistro gamit ang naibabahaging link ay halos pareho sa form ng pagpaparehistro; ang tanging pagkakaiba ay kapag gumagamit ng naibabahaging link, maaaring may paunang napiling produkto o template ng website ang iyong mga customer sa form ng pag-checkout (tingnan ang seksyong Paunang pagpili ng mga produkto at template sa pamamagitan ng mga parameter ng URL) o maaaring may idinagdag na coupon code (tingnan ang seksyong Paggamit ng mga Parameter ng URL).

Magiging pareho ang proseso ng pagpaparehistro: kailangan nilang punan ang kanilang pangalan, username, email address, pangalan at pamagat ng website, atbp... ngunit ang plano o template ng website ay paunang napili na para sa kanila.

### Pagpaparehistro Gamit ang mga Manwal na Pagbabayad:

Kung ayaw mong gumamit ng PayPal, Stripe o anumang iba pang payment gateway na inaalok ng Ultimate Multisite o ng mga integrasyon ng add-on nito, maaari kang gumamit ng mga manwal na pagbabayad para sa iyong mga customer. Sa ganitong paraan, maaari kang gumawa ng invoice para mabayaran nila sa iyong gustong payment processor pagkatapos nilang magparehistro sa iyong network.

Magiging eksaktong pareho ang proseso ng pagpaparehistro tulad ng nasa itaas, ngunit sa pahina ng pagpaparehistro, makakakita ang iyong mga customer ng mensaheng nagsasaad na makakatanggap sila ng email na may karagdagang mga tagubilin upang makumpleto ang pagbabayad.

![Mensahe ng manwal na pagbabayad habang nagpaparehistro](/img/frontend/registration-manual-notice.png)

At pagkatapos makumpleto ang pagpaparehistro, makikita nila ang mga tagubilin sa pagbabayad na itinakda mo (at matatanggap din nila ito sa kanilang email).

![Mga tagubilin sa pagbabayad na ipinapakita pagkatapos ng pagpaparehistro](/img/frontend/registration-payment-instructions.png)

Maaaring baguhin ang mga tagubilin sa pagbabayad sa **Ultimate Multisite > Settings > Payments** pagkatapos i-toggle on ang opsyon sa pagbabayad na **Manwal**:

![Toggle ng manwal na pagbabayad na may field ng mga tagubilin sa pagbabayad](/img/config/manual-gateway-settings.png)

Pagkatapos makumpleto ng iyong mga customer ang manwal na pagbabayad at ipadala sa iyo ang kumpirmasyon, kailangan mong **manwal na kumpirmahin ang pagbabayad** upang i-activate ang pagiging miyembro at website ng customer.

Upang gawin ito, pumunta sa **Ultimate Multisite > Payments** at hanapin ang bayad ng customer. Dapat ay nagpapakita pa rin ito ng status na **Nakabinbin**.

![Listahan ng mga pagbabayad na may nakabinbing manwal na pagbabayad](/img/admin/payments-list.png)

I-click ang numero ng pagbabayad at magagawa mong baguhin ang status nito sa **Nakumpleto**.

![Pahina ng mga detalye ng pagbabayad](/img/admin/payment-edit.png)

![Pagbabago ng status ng pagbabayad sa Nakumpleto](/img/admin/payment-status-completed.png)

Pagkatapos baguhin ang status nito sa **Nakumpleto** , dapat kang makakita ng mensaheng **I-activate ang pagiging miyembro**. I-toggle ang opsyong ito **on** upang i-activate ang pagiging miyembro at website na nauugnay sa customer na ito. Pagkatapos, i-click ang **I-save ang Pagbabayad**.

![Toggle na I-activate ang pagiging miyembro at button na I-save ang Pagbabayad](/img/admin/payment-activate-membership.png)

Dapat ay maaari na ngayong ma-access ng iyong customer ang Dashboard at lahat ng feature na kanilang sinubscribe-an.
