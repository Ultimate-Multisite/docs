---
title: Zapier integrācija
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrācija ar Ultimate Multisite un Zapieru

Vienā no mūsu rakstiem mēs apspriedām [Webhooks](webhooks.md) un to lietošanu integrācijās ar trešo pušu lietojumiem.

Webhooks izmantošana ir nedaudz sarežģīta, jo tas prasa attīstisko līmeņa zināšanas kodēšanā un datu (payloads) saņemšanā. Ar **Zapieru** jūs varat to apmeklēt vienkāršāk.

Zapieram ir integrācijas ar vairāk nekā 5000 lietojumiem, kas viegli padara komunikāciju starp dažādām aplikācijām.

Jūs varat izveidot **Triggers** (izsaukumus), kas tiks spēkļi, kad notiek notikumi jūsu tīklā (piemēram, krejas izveidots un spēkļi `account_create` notikumu). Vai arī veikt **Actions** (darbus) jūsu tīklā, atbildot uz ārējiem notikumiem (piemēram, izveidot jaunu lietotāja pievienojumu savā Ultimate Multisite tīklā).

Tas ir iespējams, jo **Ultimate Multisite Zapier's triggers** un actions tiek spēkļi ar [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Kā sākt {#how-to-start}

Vispirms meklējiet Ultimate Multisite Zapier lietotņu sarakstā. Alternatīvi varat nospiedēt šo [saistīto saiti](https://zapier.com/apps/wp-ultimo/integrations).

Atgriezties uz savu dashboard un nospiediet **+** **Create Zap** (Izveidot Zap) pogu, kas atrodas labajā pusē sarakstā, lai iestatītu jaunu Zap.

![Zapier dashboard ar Create Zap pogu](/img/admin/webhooks-list.png)

Jūs tiks novirzīts uz Zap izveide lapu.

Meitnējiet meklēšanas laukā "wp ultimo". Nospiediet, lai izvēlotu **Beta** versijas opciju.

![Meklēšana pēc WP Ultimo Zapier lietotņu sarakstā](/img/admin/webhooks-list.png)

Pēc tam, kad izvēlaties mūsu aplikāciju, izvēlieties pieejamu notikumu: **New Ultimate Multisite Event** (Jauns Ultimate Multisite notikums).

![Izvēle jauna Ultimate Multisite notikuma triggers](/img/admin/webhooks-list.png)

Tagad mums ir jāpiešķir Zapieram piekļuve **jūsu tīklam**. Nospiedot **Sign in** (Iejaukties), atveras jauns loga, kas prasa **API credentials** (API atestātus).

![Zapier iekļuve prompt API atbalsta datus](/img/admin/webhooks-list.png)

Dodieties uz savu tīkla administrācijas panelu un navigējiet uz **Ultimate Multisite > Settings** > **API & Webhooks** un meklējiet API Settings sadaļu.

Izvēlieties opciju **Enable API**, jo tas ir nepieciešams, lai šī savienojums darbotos.

![API un Webhooki iestatījumi ar API Settings un Enable API opcijām](/img/admin/settings-api-webhooks.png)

Izmantojiet ikonu **Copy to Clipboard** API Key un API Secret laukos un ievadiet šos vērtus integrācijas ekrānā.

URL laukā ievadiet savu tīkla pilnu URL adresi, ietverot protokolu (HTTP vai HTTPS).

![Zapier integrācijas ekrāns ar API Key, Secret un URL laukiem](/img/admin/webhooks-list.png)

Nospressiet pogu **Yes, Continue**, lai pāriet uz nअगlo stepu. Ja viss darbotasies labi, jūs jums parskatīs jūsu jauns savienots konts! Nospressiet **Continue** izveidot jaunu triggeri.

## Kā izveidot jaunu Triggeri {#how-to-create-a-new-trigger}

Tagad, kad jūsu konts ir savienots, varat redzēt pieejamus notikumus. Šajā tutorialā izvēlimos notikumu **payment_received**.

![Izvēle payment_received notikuma Zapier triggerī](/img/admin/webhooks-list.png)

Kad notikums būs izvēlēts un nospressiet **continue**, parādīsies **test step**.

![Zapier test step triggeram](/img/admin/webhooks-list.png)

Šajā posmā Zapier pārbaudīs, vai jūsu Zap var **atgūt konkrētu payload šim notikumam**. Nākamajos atjauninājumos tās pašas veida informācija tiks sūtīta ar šo pašu struktūru.

![Zapier trigger test veiksmīgi pabeigts ar payload](/img/admin/webhooks-list.png)

Mūsu tutorialā tests veikts **veidi veiksmīgi** un atgāja piemēra informāciju par payload. Šī piemēra informācija būs noderīga, lai mums palīdzētu veikt darbības. Jums triggers ir tagad izveidots un gatavs savienot ar citām lietojumām.

## Kā izveidot Actions (Darbības) {#how-to-create-actions}

Actions izmanto informāciju no citiem triggers, lai radītu jaunas ierakstus jūsu tīklā.

**Izveidojot action stepu** jūs izvēlaties Ultimate Multisite **Beta** un opciju **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Nākamajā solī jūs vai izveidat savu autentifikāciju, tāpat kā mēs to veiksim **Sākumā**, vai izvēlaties jau izveidotu autentifikāciju. Šajā tutorialā mēs izvēlamies iepriekš izveidoto autentifikācijas.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Action iestatīšana {#setting-up-the-action}

Šis ir **actiona galvenais solis**, un šeit lietas ir nedaudz atšķirīgas. Pirmais, ko jūs izvēlaties, ir **Item**. Item ir jūsu tīkla informācijas modelis, piemēram, **Customers (Klienti), Payments (Apmaksu), Sites (Vieta) vai Emails** un citi.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Izvēloties itemu, forma **pārkura**, lai atsauptu nepieciešamos un opcionālos laukus izvēlēto itema.

 Piemēram, izvēloties itemu **Customer (Klients)**, forma lauki iekļauj visu, kas ir nepieciešams, lai radītu jaunu klientu tīklā.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Pēc tam, kad iepildīti visi **nepieciešamie** lauki un noklikšķinājusi uz "continue" (turpināt), otrs ekrāns parādīs jums pilnīti iepildītos laukus un tos laukus, kas nav iepildīti.

[Zapier darbības tests, kas ir pūsti un nepalikts laukiem]

Lai gan jūsu tests būs veiksmīgs, lietotāja darbība tiks konfigurēta. Vairāk svarīgi ir pārbaudīt savu tīklu, vai šauns tika uzraudzīts ar jūsu darbības testu.
