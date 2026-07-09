---
title: Webhook-ak
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks-ekuzki ikuspe (v2) {#a-first-look-on-webhooks-v2}

_**ESKUPEN: Ez dago eratu, hori edo testua oso eskaintzeko erabiltzen da.**_

**Webhook** bat da aplikazio edo software batek, Ultimate Multisite bezala, beste aplikazioetara informazio pertsonal edo real-timea emateko eragune. Webhook bat datu edo payloadak beste aplikazioetara horren aldizkoan iritsi du, म्हणजे **datu ondo aurretik jartzen duzu.**

Hau laguntzak da, Ultimate Multisite-natik dagoen bestelako CRM edo sistema batean edozein testiera event bat geratu ondoren datu edo bestelako datuak iritsi behar dutenean. Adibidez, leku berri erabiltzaile bat sortzen duenean, erabiltzailearen pertsonalari eta email-a mailing list batean auratzitela behar duzu.

## Webhook bat sortzeko {#how-to-create-a-webhook}

Webhook bat sortzeko, network admin dashboard-era jarraitu. **Ultimate Multisite > Webhooks > Add New Webhook** (Webhooks berri gehitu) klikatu.

![Empty Webhooks list page with Add New Webhook button](/img/admin/webhooks-list-empty.png)

Gero, webhookaren konfiguratura editatuta duzu:

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

Webhook berri bat sortzen duenean, **Name** (Izena), **URL** eta **Event** (Gertaera) informazioak galdatuko da. Webhookaren aur egindukten zerbait izena ere baduzu. Lehen daude URL-a eta Event-a.

![Webhook edit interface showing the URL field and payload preview](/img/admin/webhook-url-field.png)

URL-a da **endpoint edo aukera** hori zehandiz Ultimate Multisite-ak **payload edo datuak** bidali duela. Hau da aplikazioa datuak hartuko duela.

Zapier da erabiltzaileek 3rd party aplikazioekin integratzea eraginkorik egin dezaten lehen soluzioa. Zapier bezala plataforma ez dutenean, datuak hartzeko eta procesatzeko aukera duen funtazioa manuaz sortu behar duzu. **Ultimate Multisite webhook-a Zapierarekin nola erabiltzen** (how to use Ultimate Multisite webhook with Zapier) testua ikusi.

Hau artikuluan, webhook fun zer gurea konseptua dagoena eta Ultimate Multisite-an aurkitzen dituen gaitasun hauek ezagutuko dugu. [requestbin.com](https://requestbin.com/) dela gure 3rd party webguneak erabiliz. Hau modu ere gure partebat endpoint bat emateko eta payloada (datua) kod egite gabe hartzeko aukera ematen du. _**Eztabaidia: horrek datuak hartu dauna iragutzea izango da.**_ Payload-arekin ez da ebazpen edo zehaztu edozein aksio bat egin dezake.

[requestbin.com](https://requestbin.com/) funduan jarraitu eta "Create Request Bin" (Gaitua Erdatu) ditu.

Horrebiak klik egin ondoren, akun du beste iragutzeko edo registro egiteko eskatzen da. Akontu dagoen akun du beste, horrek direktu egiten du bere dashboard-era. Bere dashboard-an, hemen izango da endpointa edo URL-era eta Ultimate Multisite webhook-a sortzeko erabiliko duen.

URL-a kopiatu eta Ultimate Multisite-ra itzultu. Endpointa-k URL lekuan jarri eta dropdown menua ondorioz gaitasuna bat ematen du. Hau testuaren bitartean, **Payment Received** (Pagament hartuta dago) aukeratu da.

Hau gaitasuna da erabiltzaile bat ordain eginenean sortzen da. Gaitasun guztiek, deskribapena eta payload-ek lekuaren amaieran ematen dira. Webhooka saiozera egiteko **Add New Webhook** (Webhook berria gehitu) botoia klik egin behar du.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Aurrerkin, testu gaitasuna bat göndegi gabe endpoint-era daingo dugu zera funtzionatzen duen ikusteko. Hau egiten da webhook-a sortutakoan "Send Test Event" (Testu Gaitasuna göndegi) botoia klik egin behar du.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Hau testua ondo dagoela esaitzen confirmazio finestra bat erakusten du.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Aur baino, haurrekin irakurri dugu _Requestbin_ websteian, ikusten duz bere payload-a hartu duela eta test datuak barne dutela.

Hau da webhook eta endpoint-ek zer modu berean funtzionatzen duen erantzunaren esentzia handia. Hau custom endpoint bat ezarritan, Ultimate Multisite-tik hartutako datua procesatzeko custom function bat ezartu behar duzu.
