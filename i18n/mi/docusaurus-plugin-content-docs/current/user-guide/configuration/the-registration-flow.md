---
title: Te Whakaritenga
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Te Whakaritenga Registration (v2)

_**TAHUINA WHAKANGA: Ko tēnei whakamārama he tino mō Ultimate Multisite version 2.x.**_

He aha ngā wera (ways) e taea ai ngā mea (users) te whakaritenga i te whenua (network) o koutou. He mahi ahau ki te whakamahi i tō fōme pōwhakaritenga (registration form) he tino tika, he aua link shareable mō plan e whai tika. I tēnei, ka whakaatu atu ahau i te mea he taea ai ngā mea (customers) te whakarite i te whenua o koutou i te whakamahi i ngā wera (paths) e kaha ana, ā, ko te mea e pēnei ana i te pēnei ana i te mea i tū mai i ngā mea.

## Whakarite i te Fōme Pōwhakaritenga:

He pēnei te mahi whakaritenga tika. Ka tino whakaaro ahau i te whakatō i he wāhi pōwhakaritenga (registration page) me heke i he **checkout form** (fōme checkout), ā, ko tēnei te wākohe e hoki ai ngā mea (customers) ki te whakarite i te whenua o koutou me te whai i plan. He taea ai ahau te pūmau i he wāhi pōwhakaritenga (registration pages) mō ngā mea (multiple), me heke i he fōme pōwhakaritenga (registration form) e hāngai ana ki te mea e tika ana, ko te mea e tino tika.

He wāhi pōwhakaritenga (default page) mo te whakaritenga he **[_yourdomain.com/register_]**, engari he taea ai ahau te whakawhiti i tēnei i ngā wāhi i runga i **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

I tēnei, i raro i te whakaritenga pōwhakaritenga o koutou (usually clicking on a **Sign in** or **Buy now** button), ka whakaatu atu ahau i tō fōme pōwhakaritenga.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

He pēnei te whakamārama mō te fōme checkout e pēnei ana i te frontend:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Ko te mea katoa e taea ana ahau he whakatipu i ngā wera (mandatory fields) katoa - email, username, password, etc... - me te whai i te plan ko peke (pay for the plan) ko te whakamana i tō email address ko te mea e tika ana ki te whakarite mō he plan mō te free (free plan) ko he paid plan e hiahia ai i te wā trial (trial period) me kore information o te pēke.

I te "Thank you" page, ka whakaatu atu ahau i he pēnei te whakatau ki a koe ana he mea e tika ana mō koe te whakamana i tō email address ko he tino tika ana i tō website ko e tino tika ana i te whakamahi i ai.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Kia kaha! Oreheke whakamārama:

Kei te wā e pēnei i te whai whakaae email (email address confirmation), ka taea e ngā mea he tino pai ana ki te pūtake o tō rāhui (inbox) me te whakatipu i te link whakamārama (verification link). Ka tautoko ahau i te waka wero (website) i te whakawhanake akorua (verify) i te email hoki.

Kei te wā he pēnei i ka rautahi i te plan pai (paid plan) me te whai whakaae email he āhua ana, ka tautoko ahau i te waka wero i runga i te checkout i tētahi wakamārama ki te whakatū i tō dashboard.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Whakarite i te Link Whakawhiti (Using a Shareable Link):

Te pēramatanga o te whakamahi link whakawhiti mō te whai whakaae he tino pai ana ki te fōm (form) o te whai whakaae, engari te pōtanga tekau (the only difference) he ka taea e ngā mea he tino pai ana ki te whaiwhakatika i te product he tino pai ana me te template o te waka wero i te checkout form (he tino pai ana ki te whakatipu i te product he tino pai ana me te template o te waka wero i te checkout form) (he tino pai ana ki te whakatipu i te product he tino pai ana me te template o te waka wero i te checkout form) (refer to the section Pre-selecting products and templates via URL parameters) ka taea hoki te whāhi i te coupon code (refer to the section Using URL Parameters).

Ka pēnei te pōtanga o te whai whakaae: ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, ingoa o te waka wero me te title, me ngā mea hoki... engari ko te plan he tino pai ana he ka template o te waka wero ka pēnei i te whakawhanake akorua mo ahau.

### Whai whakaae using Manual Payments (Whai whakaae mō te Rautiki):

Kei te wā he ka taea e koe te whakamahi whai whakaae manu (manual payments) mō ngā mea he tino pai ana ki te PayPal, Stripe, he tino pai ana me ngā gateway o whai whakaae he pēnei i Ultimate Multisite he tino pai ana me ngā whakawhanake akorua, engari ka taea e koe te whakamahi whai whakaae manu mō ngā mea he tino pai ana ki te customer. I tēnei wā, ka taea e koe te whakatipu i te invoice mo ngā mea he tino pai ana ki te pay on your preferred payment processor i ka pēnei i ka rautahi i te network o ahau.

Ka pēnei te pōtanga o te whai whakaae: ka pēnei i te pōtanga mā te whai whakaae, ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address, me ka ka taea e ngā mea he tino pai ana ki te whakatipu i tō ingoa, username, email address,

![Pāpihi whakamārama o rāhui i te whaiaro akorua](/img/frontend/registration-manual-notice.png)

Me pēhea, i raro i te whakamahi o te rāhui (registration), ka whakaatu i a koe i ngā whakamārama o te pai o te whaiwhero (payment instructions) kua whakaritea e koe (me pēhea, ka pēnei i te whaiaro i roto i email).

![Whakamārama o te pai o te whaiwhero i arahi i te rāhui](/img/frontend/registration-payment-instructions.png)

Kia kaha ki te whak whakarē i ngā whakamārama o te pai o te whaiwhero i **Ultimate Multisite > Settings > Payments** i roto i te toggling on (whakawātea) o te option o pai manu (Manual) ahau:

![Toggles o pai manu me te rohe whakamārama o te pai o te whaiwhero](/img/config/manual-gateway-settings.png)

I raro i te whakaingoa o ngā mea, ka taea e ngā akorua o koe te whakatō i te pai manu āhua (manual payment) me te tino whakamārama i te pai o te whaiwhero, me te whaiaro i te email.

Me pēhea te whakamaoritanga o te pai o te whaiwhero? Kia kaha ki te whak whakarē i ngā whakamārama o te pai o te whaiwhero i **Ultimate Multisite > Settings > Payments** i roto i te toggling on (whakawātea) o te option o pai manu (Manual).

I raro i te whakaingoa o ngā mea, ka taea e ngā akorua o koe te whakatō i te pai manu āhua (manual payment) me te tino whakamārama i te pai o te whaiwhero, me te whaiaro i te email.

Me pēhea te whakamaoritanga o te pai o te whaiwhero? Kia kaha ki te whak whakarē i ngā whakamārama o te pai o te whaiwhero i **Ultimate Multisite > Settings > Payments** i roto i te toggling on (whakawātea) o te option o pai manu (Manual).

I raro i te whakaingoa o ngā mea, ka taea e ngā akorua o koe te whakatō i te pai manu āhua (manual payment) me te tino whakamārama i te pai o te whaiwhero, me te whaiaro i te email.

Me pēhea te whakamaoritanga o te pai o te whaiwhero? Kia kaha ki te whak whakarē i ngā whakamārama o te pai o te whaiwhero i **Ultimate Multisite > Settings > Payments** i roto i te toggling on (whakawātea) o te option o pai manu (Manual).

I raro i te whakaingoa o ngā mea, ka taea e ngā akorua o koe te whakatō i te pai manu āhua (manual payment) me te tino whakamārama i te pai o te whaiwhero, me te whaiaro i te email.

Me pēhea te whakamaoritanga o te pai o te whaiwhero? Kia kaha ki te whak whakarē i ngā whakamārama o te pai o te whaiwhero i **Ultimate Multisite > Settings > Payments** i roto i te toggling on (whakawātea) o te option o pai manu (Manual).

I raro i te whakaingoa o ngā mea, ka taea e ngā akorua o koe te whakatō i te pai manu āhua (manual payment) me te tino whakamārama i te pai o te whaiwhero, me te whaiaro i te email.

Me pēhea te whakamaoritanga o te pai o te whaiwhero? Kia kaha ki te whak whakarē i ngā whakamārama o te pai o te whaiwhero i **Ultimate Multisite > Settings > Payments** i roto i te toggling on (whakawātea) o te option o pai manu (Manual).

I raro i te whakaingoa o ngā mea, ka taea e ngā akorua o koe te whakatō i te pai manu āhua (manual payment) me te tino whakamārama i te pai o te whaiwhero, me te whaiaro i te email.
