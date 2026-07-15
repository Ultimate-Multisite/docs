---
title: Zapier integreerimine
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite integreerimise Zapieriga

Ühel artiklis käsitledime [Webhooks](webhooks.md) ja kuidas neid kasutada kolmandate asutuste abil ühendamiseks.

Webhookide kasutamine on mõnikord keeruline, kuna nõuab arengukevõrku koodi ja pakkumite (payloads) tuvastamise oskusi. **Zapier** on selline viis, kuidas sellest vältida.

Zapieril on ühendused üle 5000+ rakendusega, mis lihtsustab erinevate rakenduste vahel kommunikatsiooni.

Saate luua **Triggerid**, mis käivituvad, kui sissejuhatavud sündmused võrku jooksul esinevad (nt kasutaja loodakse ja käivitab `account_create` sündmuse), või genereerida **Actionid** võrku osas reageerimiseks välisestele sündmustele (nt uue kasutaja liitmise luomine Ultimate Multisite võrkuses).

See on võimalik, kuna **Ultimate Multisite Zapieri triggerid ja Actionid** on toetatud [REST API](https://developer.ultimatemultisite.com/api/docs/) abil.

## Kuidas alguses alustada {#how-to-start}

Eelise etappina otsige Ultimate Multisite Zapieril olevast rakenduste loendist. Alternatiivseks saate klõpsata [nimetule link](https://zapier.com/apps/wp-ultimo/integrations).

Minemise dashboardile ja klõpsake vasakustalika **+** **Create Zap** nupul, et luua uus Zap.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Te oled suunatud Zap loomise lehel.

Otsestuskuvakku kirjutage "wp ultimo". Klõpsake valienda **Beta** versiooni välja.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Rakendust valinud pärast, valige saadaval olev sündmus: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Nüüd peame Zapierile pääsuse võrku üle antsema. Klõpsates **Sign in** (Sisse logi), avaneb uue akna, mis nõuab **API ühendusandmeid**.

![Zapier sisse logi jaoks API võtme](https://www.zapier.com/sisse-logi-prompt-api-credentials)

Minust on vaja minna oma võrku administrati paneli ja navigada **Ultimate Multisite > Settings** > **API & Webhooks** sektsioonile, et leida API seadistuste osas.

Valige **Enable API** (API aktiveeri) valik, kuna see on vajalik selle ühenduse toimimiseks.

![API ja Webhooki seadistused API-seadistust ja Enable API valikuga](/img/admin/settings-api-webhooks.png)

Kasutage **Copy to Clipboard** (Kopile lehtile) ikooni API Key ja API Secret väljadest, ja liigutage need väärtused integreerimise ekraanile.

URL-väljalikule panna oma võrku täieliku URL-i, sealhulgas protokoll (HTTP või HTTPS).

![Zapier integraati ekraan API Key, Secret ja URL väljadega](/img/admin/webhooks-list.png)

Klõpsake **Yes, Continue** (Jah, jätka) nupul, et minna järgmise sammu viia. Kui kõik toimib hästi, tervitub teid teie uue ühendatud kontoga! Klõpsake **Continue** (Jätka), et luua uus trigger.

## Uue Triggeri loomine {#how-to-create-a-new-trigger}

Nüüd, kui konto on seotud, saate näha saadaval olevad sündmused. Selle tutori jaoks valige **payment_received** (maksutuse saamist) sündmust.

![Zapieris payment_received sündmuse valimine triggeril](/img/admin/webhooks-list.png)

Kui sündmus on valitud ja klõpsate **continue** (jätka), ilmub **test samm** (test-sammu).

![Zapier test-sammu triggerile](/img/admin/webhooks-list.png)

Selles etapis testib Zapier, kas teie Zap suudab selle sündmusele **spetsiifilise payload'i laemise**. Samas tüüpi tulevikusid on samast struktuuriga teavet saame.

![Zapier trigger testi õnnestult lõpetatud payloadiga](/img/admin/webhooks-list.png)

Mõõdistus meie tutoriaals oli **valmistatud õnnestult** ja tagasi sai laadimisnäite informatsiooni. See näide informatsioon on kasulik juhendamiseks, kui luute teid toimende loomisel. Teie trigger on nüüd loodud ja valmis ühendama teiste rakenduste kanssa.

## Kuidas luua Action'id (Toimendid) {#how-to-create-actions}

Action'id kasutavad teist triggeritest tulevat infot uute sissejuhtimist oma võrku.

**Action-sammi loomisel** valite Ultimate Multisite **Beta** ja **Create Items on Ultimate Multisite** välja.

![Actioni loomine Create Items on Ultimate Multisite abil](/img/admin/webhooks-list.png)

Järgmisel sammas luute või valite oma autentikas, nagu te tegid **Alustamise alguses**, või valige olemasoleva autentikaasi. Selle tutoriaalis valime sama autentikaasi, mille olles juba loomise ajal loodud.

![Autentikatsiooni valimine Zapier Actioni jaoks](/img/admin/webhooks-list.png)

### Actioni seadistamine {#setting-up-the-action}

See on **actioni peamine samm**, ja siin asjad on natuke erinevad. Esimene tegeleme antud infot, mis on **Item** (Element). Item on teie võrku **informatsioonimudel**, nagu **Kliendid, Makside, Sitat, E-kirjaleid** ja muutuvad.

![Zapier Actioni jaoks Item tüüpi valimine](/img/admin/webhooks-list.png)

Itemi valimisel **forme järjastub nii, et esinevad vajalikud kui ka valikuvälhed** valitud itemi kohta.

Näiteks, kui valite itemi **Customer** (Kliend), forme väljad toovad kõik, mida on vaja täita uue kliendi loomiseks võrku.

![Zapier Actioni seadistuses Customer itemi väljad](/img/admin/webhooks-list.png)

Kõiki **vajalikke** märgitatud väljade täitmise ja "Jätka" klõpsamise pärast näidab viimane ekräänikuga täidetud väljad ning neil jäänud välja jätud väljad.

![Zapier toimimise testimine, kus täidetud ja puudutud väljad näed](/img/admin/webhooks-list.png)

Testi lõpuni ja kui see õnnestub, on teie tegevus konfiguratsiooniga. On ka oluline kontrollida oma võrku, kas element luuti testiga teie tegevuse.
