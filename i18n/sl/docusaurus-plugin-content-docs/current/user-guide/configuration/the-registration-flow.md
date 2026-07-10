---
title: Potok registracije
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Registracijski tok (v2) {#the-registration-flow-v2}

_**POMEMBNO OPOMENILO: Ta članek se nanaša na Ultimate Multisite verzijo 2.x.**_

Uporabniki lahko se na vašo mrežno omrežje registrirajo na različne načine. Lahko uporabljajo vaš obrazec za registracijo ali deliteľni link do predodbrane paketa. Tukaj vam bom pokazal, kako bodo vaši kupci mogli se registrirati na vašo mrežno omrežje z uporabo na voljo poti in kaj se bo zgodilo po tem, ko se se registrajo na vašo mrežno omrežje.

## Uporaba obrazca za registracijo: {#using-the-registration-form}

To je standardni proces registracije. Ustvarite stran za registracijo s **obrazcem za plačevanje (checkout form)** in to bo bilo mesto, kjer bodo vaši kupci šli, da se se se registrajo na vašo mrežno omrežje in naročajo na paket. Lahko imate več strani za registracijo, vsaka z drugim obrazcem za registracijo, če želite.

Standardna stran za registracijo je [_**yourdomain.com/register**_](http://yourdomain.com/register), vendar lahko to spremenite v katerem koli trenutku na **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Ko uporabnik pride do vaše strani za registracijo (običajno klikom na gumb **Sign in** ali **Buy now**), mu bo prikazan vaš obrazec za registracijo.

![Registračni obrazec prikazan na strani za registracijo](/img/frontend/registration-form.png)

Tukaj je primer obrazca za plačevanje, kot se pojavlja na sprednji strani:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Vse morajo storiti je polninj all mandatory fields - email, username, password, itd... - in zaplatiti paket ali potrditi svoj e-poštni naslov, če se se registrirajo za brezplačni paket ali plačevani paket z območjem za vprašanje brez informacij o plačevanju.

Na strani "Hvala" bodo videli sporočilo, ki jim bo povedalo, ali morajo potrditi svoj e-poštni naslov ali če je njihov spletni portal že aktiv in lahko začnejo uporabljati.

![Hranjevalna stran po registraciji](/img/frontend/registration-thank-you.png)

Če je potrebna potrditev e-poštenja, bodo morali iti v svoj inbox in klikniti na povezavo za verifikacijo. Vaša spletna stran se ne bo aktivirala, če se njihov e-poštni naslov ne preveri.

Če so se registrirali na plačnem načrtu ali je potrditev e-pošte na vašeta mreži ni obvezna, bodo njihova spletna stran aktivirana takoj po dokončanju nakupa in imajo prikazano povezavo za prijavu na svoj dashboard.

![Splet aktiviran z povezavo za prijavu na dashboard](/img/frontend/site-activated.png)

## Uporaba deliteljne povezave: {#using-a-shareable-link}

Postopek registracije z uporabo deliteljne povezave je v osnovi isti kot pri obrazcu za registracijo, edina razlika je, da z delitelnico povezavo lahko vaši kupci na nakupni obrazcu predhodno izberemo produkt ali templat spletne strani (pogledajte sekcijo Predizbiro produktov in templatov preko URL parametrov) ali morda dodamo kupon kod (pogledajte sekcijo Uporaba URL parametrov).

Postopek registracije bo isti: bodo morali vpisati ime, uporabniško ime, e-poštni naslov, ime spletne strani in naslov itd... vendar bo načrt ali templat strani že predizbran za njih.

### Registracija z ročnimi plačami: {#registering-using-manual-payments}

Če ne želite uporabljati PayPal, Stripe ali kakršno koli drugo platno brambo, ki jo ponuja Ultimate Multisite ali njegove dodatne integracije, lahko uporabite ročne naloge za vaše kupce. Na ta način lahko generirate račun za njihovo plačilo na vašem predvladanem sistemu za obdelavo plačil po temeljni registraciji na vaši mreži.

Postopek registracije bo identičen kot zgoraj, vendar bodo vaše kupce na strani za registracijo videli sporočilo, da bodo prejeli e-pošto z dodatnimi navodili za dokončanje plačila.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Inključno z registracijo bodo videli navodila za plačilo, ki jih ste postavili (in jih prejmejo tudi na svoj e-poštni naslov).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Navodila za plačilo lahko spremenite v **Ultimate Multisite > Settings > Payments** zamenjajo možnost plačila **Manual**:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Ko vaši kupci dokončajo ručno plačilo in vam pošljejo potrdilo, morate **ručno potrditi plačilo**, da bi aktivirali članstvo in spletno mesto za tega kupca.

Za to gre do **Ultimate Multisite > Payments** in najdete plačilo kupca. Na njem še vedno mora prikazati status **Pending** (Očekuje).

![Payments list with pending manual payment](/img/admin/payments-list.png)

Kliknite na številko plačila in boste lahko spremenili njegov status na **Completed** (Dokončano).

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Po spremembi statusu na **Completed** boste videli sporočilo **Activate membership** (Aktiviraj članstvo). Preklopite to opcijo na **on** (vкл.) za aktivacijo članstva in spletnega mesta, ki so povezani z tem kupcem. Nato kliknite na **Save Payment** (Shrani plačilo).

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Vaš kupce bodo zdaj lahko dostopali do dashboarda in vseh funkcij, ki so se zasnovali.
