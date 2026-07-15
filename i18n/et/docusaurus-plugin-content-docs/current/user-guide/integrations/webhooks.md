---
title: Webhookid
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooki es esilek (v2)

_**TÄHELE: Pärast seda funktsiooni või artikli kasutamist on mõeldud edasivõtmiseks.**_

**Webhook** on viis, kuidas rakendus või software nagu Ultimate Multisite teeb muud rakendust informatsioonist reaalse ajal. Webhook toob andmeid või pakkumisi muudesse rakendustele just need, tähendades, et **saadate andmed kohe.**

See on kas kasulik, kui vajad integreerida või ületada teatud andmeid Ultimate Multisite'ist mõne CRM-i või süsteemile iga kord, kui sündmus käivitub. Näiteks pead saama kasutaja nime ja e-posti aadressi jagamiseks postitusjuhtiga iga kord, kui uus kasutaja konto luuakse.

## Webhooki loomine {#how-to-create-a-webhook}

Webhooki loomiseks külasta oma võrerekande administraatori dashboardi. Klõpsake **Ultimate Multisite > Webhooks > Lisaindige uue webhooki.**

![Tühja webhooki loendikupiisega "Lisaindige uue webhook" nupuga](/img/admin/webhooks-list-empty.png)

Seejärel saate konfiguratsiooni muuta:

![Uue webhooki loomise formaaliga, kus on Nimi, Sündmus ja URL väljad](/img/admin/webhook-add-modal.png)

Uue webhooki loomisel pead antuma teada nagu **Nimi, URL** ja **Sündmus**. Saate kasutada mida sahtuda webhookile. Kõige olulisemad on URL ja Sündmus.

![Webhooki editasema näegu, kus on URL-välj ja pakkumise esilekuva](/img/admin/webhook-url-field.png)

URL on **punkt või sihtkohak,** millele Ultimate Multisite toob **pakkumise või andmed.** See on see rakendus, mis saab andmeid.

Zapier on kõige levinud lahendus, mida kasutajad kasutavad kolmandate osaldujatega integreerimiseks lihtsamaks. Zapieri nagu platforma ilma, pead manuaalselt luoma oma sügavuse funktsiooni, mis võtab andmed ja töötleb neid. Leia selle artikli **Ultimate Multisite webhooki kasutamise kohta Zapieriga.**

Sellel artiklis uurime webhooki põhialust ja Ultimate Multisite'is saadaval olevate sündmustest. Kasutame selleks kolmandat osutust [requestbin.com](https://requestbin.com/). See veebileht võimaldab meile luua endpointi ja saada käsitletavala (payload) ilma koodi üritamata. _**Vastutus: see teeb ainult seda, et näitab meile, et andmeid on saanud.**_ Payloadiga ei tehtud edasi töötlemist ega muid toimende.

Minum [requestbin.com](https://requestbin.com) ja klõpsake Create Request Bin (Loo küsimusliide).

Nuppu klõpsamise pärast küsib see, kas teil on juba konto või registreeruda. Kui teil on juba konto, viitab see teid otseselt nende dashboardile. Nende dashboardil näete kohe endpointi või URL-i, mida saate kasutada Ultimate Multisite webhooki luomiseks.

Kopierte ja külge tagasi Ultimate Multisite'ile. Pandige endpoint URL-väljaolele ja valige sündmustest välja dropdownist. Sellel juhul valime **Payment Received** (Makse saavutatud).

See sündmus käivitub iga kord, kui kasutaja teeb makse. Kõik saadaval olevad sündmused, nende kirjeldused ja payloadid on nendel lehel all. Klõpsake **Add New Webhook** (Lisa uus webhook) nupul, et salvestada webhook.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Saame nüüd testida sündmust endpointile, et näha, kas loodud webhook toimib. Saame seda teha klõpsates **Send Test Event** (Lendage testisündmus) loogus webhooki all, mida olete lunud.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

See näitab kinnituskasti, et test oli õnnestunud.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Tehtise tagasi _Requestbin_ leidingu nähaid, et on saadud sinna väärtustestide sarnastiga kohaliku.

See on aluseks viidat sellele, kuidas webhook'id ja endpointid töötavad. Kui te soovite uut kordistatud endpunkti (custom endpoint) luua, peab te looda ülesannutav funktsioon, mille abil saate Ultimate Multisite'ilt saadetud andmeid käsitella.
