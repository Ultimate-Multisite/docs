---
title: Mavhiki ekugadzirwa
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Mhando Yechinjisa (v2) {#the-registration-flow-v2}

_**CHINTO CHINTO: Iriye iyi inyandiro iriri iUltimate Multisite v2.x.**_

Vakuru vanogona kudzinjisa mune nzvimbo dzakawanda dako. Vanogona kuita zvinhu neform yechinjiso yako kana link inoshandiswa kuti vashandise plan yakasiitirwa. Mutauro wese unonyira sei vakuru vanogone kudzinjisa munzvimbo yako nekuti zvichiri kuitika panguva yaingine uye zvakaitika panguva yaingine.

## Kuti Usanidzidze neform yechinjiso: {#using-the-registration-form}

Iyi nzira yakakwana yekutanga. Unokwanisa kuita page yekuchinjisa (registration page) inozivikanwa ne**checkout form**, uye iyi ndiyo inozvakanisa vakuru vachiri kuitika munzvimbo yako nekuti vanoreva plan. Unogona kuva nepage dzakuchinjiso dzakawanda, zvichine form dzakuchinjiso dzakasiitirwa dzinotsanana kana unoda.

Page yakakwana yekutanga yekuchinjisa ndiyo [_**yourdomain.com/register**_](http://yourdomain.com/register), asi unogona kuva nekuura iyi chii panguva ingine mu **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Apana mutundu anenge akatiye page yako yekuchinjisa (kuti zvichiri kuitika nekuti vanoita click pa button inosvika "Sign in" kana "Buy now"), vanogona kuona iform yechinjiso yako panguva iyi.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Iyi nzira yakakwana yekuchinjiso inoratidzo sei pane frontend:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Zvakasiitika kuti vashandise zvose zvinoshandiswa - email, username, password, kana zvinhu zvakasiitirwa... uye vanoreva plan kana kuonana neemail yavo kana vanoreva plan yakasiitirwa inozvakanisa kunge vanovaka.

Pane page ya "Thank you", vanogona kuona message inoti vanofanira kuonana neemail yavo kana kuti website yavo rakaita kuitika nekuti vanogona kuramba vashandise.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

Kana kune chine kuendesa kana confirmation ya email, vano dzine dzinogona kuenda ku inbox yavo uye kuclick kuti vhondso rinoone verification link. Website yavo haizovaka kana email yavo isingazobva verified.

Kana vachiregistra munzira yakashandiswa (paid plan) kana kana verification ya email haisi mandatory kwenye mweya wenyu, vanoona website yavo zvichivaka nguva doro poora checkout uye vachiona link yekuti vashandise kuti vashandise dashboard yavo.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## Kutora Link Inotsigirwa (Using a Shareable Link): {#using-a-shareable-link}

Kugadzira registration nekuita zvakanaka nelink inotsigirwa kunoita zvinhu zvakasiyi nemafomu yekugadzira, asi chine chinhu chinotevera: nekuti kuita registration nelink inotsigirwa, vanhu vavo vanogona kuva na product kana template ya website yakasikwa muna checkout form (shandisa section Pre-selecting products and templates via URL parameters) kana kuti kuita coupon code yakanaka (shandisa section Using URL Parameters).

Kugadzira registration kunoita zvinhu zvakasiyi: vanofanira kuisa zvinoda vavo, username, email address, website name uye title, nendiri... asi plan kana template ya site itarisikwa muna kuti vavo.

### Kutora Registration Nezvinhu Zvakanaka (Registering Using Manual Payments): {#registering-using-manual-payments}

Kana haunoda kushandisa PayPal, Stripe kana nzira yanyanya dzinogona kuita payment dzine Ultimate Multisite kana add-on integrations dzake, unogona kushandisa manual payments kune vanhu vavo. Izvi zvinoita kuti uone invoice (fatura) kune vavo kuti vashandise kupasa munzira yenyu yekuti vashandise payment processor yakasiyana.

Kugadzira registration kunoita zvinhu zvakasiyi chete, asi pane message kupeji ye registration vanhu vavo vanogona kuona inoti vachapain email inotevera misangano yakanaka yekuti vashandise payment.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Ndiro nepfungwaro dzinobva pfungwa dzinogona kuitawo (registration).

Nepo nguva yakachengetedza, vanovha zvinhu zvinoratidzorwa nezvinhu zvinogone kuitawo (payment instructions) zvako (nezo zvinhu zvinoitwa), uye vanoitawowo pema email.

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Ndinogona kunge kuwedzera zvinhu zvinoratidzorwa nezvinhu zvinogone kuitawo (payment instructions) mu **Ultimate Multisite > Settings > Payments** kana uchigadzira option ya **Manual**.

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Apana mutenda wako unokumbira nekuitawo (customer complete the manual payment) uye ungaunza confirmation, unofanira **kugadzirisa kuitawo (manually confirm the payment)** kuti utange kutenderwa kwemumwe (activate the customer membership) uye website.

Kuti urambe iye, enda ku **Ultimate Multisite > Payments** uye ndigone kutaura nekuitawo ya mutenda. Inogona kunge inoratidza status ya **Pending**.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Chirare kana namba ya kuitawo, unogona kutamba status yake ku **Completed**.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Apana utambire status yake ku **Completed**, unogona kuona meseji inoti **Activate membership** (tenderera umwe). Tsvaka option iyi **on** kuti utange kutenderwa kwemumwe uye website inosimbisa iye. Ndipo, tsvaka kuti **Save Payment**.

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Mutenda wako unogona kuenda mu dashboard uye zvinhu zvose zvinogone kwemumwe (features that they subscribed to).
