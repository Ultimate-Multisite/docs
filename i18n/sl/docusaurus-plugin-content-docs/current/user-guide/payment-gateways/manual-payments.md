---
title: Ustavitev ručnih plačil
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Uporaba ručno plačevanja (v2)

_**POMEMBNE NAPOMOTE: Ta članek se nanaša na Ultimate Multisite verzijo 2.x.**_

Ručna plačevanja so način, kako lahko ponudite druge metode plačanja, če **Stripe** ali **PayPal** niso na voljo za vaše uporabnike. Lahko je to bankovni transfer ali kakršna koli drugo sredstvo za plačevanje, ki je na voljo vašim uporabnikom lokalno.

## Kako vključiti ručna plačanja

Uporaba ručnih plačanj je zelo preprosta. Samo morate vključiti možnost pod payment gateways in vpisati podrobne navodila, kako uporabnik mora opraviti plačilo.

Prvo, gre do **Ultimate Multisite > Settings > Payments**. Pod **Payment Gateways** vklopite **Manual**. Boste videli, da se vam pojavijo okno za **Payment Instructions**.

V to okno dodajte informacije, ki jih bo vaš stranko potrebovala za opravljanje plačila. Lahko so to podatki o vašem bankovni računu in vaša e-pošta, tako da lahko stranka pošlje potrdbo plačila na primer.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Tukaj je interfejs nastavitev ručne vgate:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Po nastavitvah, samo kliknite na **Save Settings** in je gotovo. Ko se uporabniki prijajo v vašo mrežno omrežje, bodo videli sporočilo, ki jih obavazi, da bodo prejeli vaše navodila za dokončanje nakupa.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

In bodo tudi prejeli sporočilo na vaši strani **Thank You** z vašimi navodili za plačilo.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Potrditev ručnih plačanj

Za potrditev ručne plačbe se obclankajte v meniul **Payments** na levi strani. Tam boste videli vse plačbe na vašeta omrežju in njihove podatke, vključno z njihovim **statusom**. Ručna plačba bo vedno imela status **Pending** (Oczekujoča), dokler ga sami ne spremenite.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Vnesite stran za plačbo, kliknjo na **reference code** (referenčni kod). Na tej strani boste imeli vse podatke o odločeni plačbi, kot so reference ID, izdelki, časovni oznake in še veliko več.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Na desni strani lahko spremenite status plačbe. Zamenjanjem na **Completed** (Ukončano) in preklopom možnosti **Activate Membership** (Aktiviraj članstvo) boste omogočili stran vašega stranke in njegovo članstvo bo aktivno.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
