---
title: Stripe iestatīšana
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe ģintala konfigurēšana (v2)

_**SVARĪTIE PIEMĒRUMI: Šis raksts attiecas uz Ultimate Multisite versiju 2.x.**_

Jūs varat aktivizēt līdz četrām maksājuma metodiem mūsu maksājumu iestatījumu lapā: Stripe, Stripe Checkout, PayPal un Manuāli. Šajā rakstā redzam, kā integrēties ar **Stripe**.

## Stripe aktivizēšana

Lai aktivizētu Stripe kā pieejamu maksājuma ģintalu savā tīklā, pārvietojies uz **Ultimate Multisite > Iestatījumi > Maksājumi** un atskaņojiet (tick) skaitli blakus **Stripe** vai **Stripe Checkout** "Aktīvo maksājumu ģintalu" sadaļā.

![Stripe aktivizēšana aktīvās maksājuma ģintalu sadaļā](/img/config/settings-payment-gateways.png)

### Stripe pret Stripe Checkout:

**Stripe:** Šis veids parādīs vietu, kur jūs iestatīsiet kredītu kartes numuru laikā kases procesā.

![Stripe integrēta kredītu kartes laukums kases laikā](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Šis veids novirzīs klientu uz Stripe Checkout lapu laikā kases procesā.

![Stripe Checkout novirzīšanas lapa kases laikā](/img/config/settings-payment-gateways.png)

### iegūšana Stripe API svariem

Kad Stripe būs aktivizēts kā maksājuma ģintals, jums būs jāievada **Stripe Publishable Key** un **Stripe Secret Key** laukos. Jūs varat to ieguvit, logojoties uz savu Stripe kontu.

_**Piezīme:** Jūs varat aktivizēt **Sandbox režīmu**, lai pārbaudītu, vai maksājuma metode darbojas._

![Stripe API svari un sandbox režīma skaitli](/img/config/settings-payment-gateways.png)

Jums Stripe dashboardā nospiediet **Developers** augšvecā stūrī, un pēc tam **API Keys** left menu no labajā pusē.

![Stripe dashboard Developers sadaļa ar API svariem](/img/config/settings-payment-gateways.png)

Jūs varat izmantot **Test Datus**, lai pārbaudītu, vai integrācija darbojas jūsu produkcijas vietnē, vai ne. Lai to mainītu, pārlikstiet **Viewing test data** reguli.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopējiet vērtību no lauku **Publishable key** un **Secret key**, no kolumnas **Token**, un iekļaujiet to Ultimate Multisite Stripe Gateway laukos. Pēc tam noklikšķiniet uz **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook konfigurēšana

Stripe sūta webhook notikumus, kas informē Ultimate Multisite katru reizi, kad notiek kāds notikums **jūrā stripe kontos**.

Noklikšķiniet uz **Developers** un pēc tam izvēlieties **Webhooks** lietotni left menu. Pēc tam labajā pusē noklikšķiniet uz **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Jums būs nepieciešams **Endpoint URL** *.* Ultimate Multisite automātiski izveido endpointu URL, ko varat atrast tieši zem lauka **Webhook Listener URL** sadaļā **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopējiet** endpointu URL un **iekļaujiet** to Stripe **Endpoint URL** laukā.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Tālāk izvēlieties **Event** *.* Šajā opcijā jums pietiks vien atstāt **Select all events** kopsavilkumu un noklikšķināt uz **Add events**. Pēc tam noklikšķiniet uz **Add Endpoint**, lai saglabātu izmaiņas.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Labi, tas ir pabeigta jūsu Stripe maksājumu integrācija!
