---
title: Webhookai
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhookai pagrindinis vaizdas (v2)

_**PAŽYMĖ: Ši funkcija arba straipsnis skirti pažangos vartotojams.**_

**Webhookas** yra būdas, kaip programėlė ar softvaras, pavyzdžiui Ultimate Multisite, gali pateikti kitoms programėlėms realios laiko informaciją. Webhookas siunčia duomenis arba payload'us kitoms programėlėms genau tada, kai tai pasireiškia, o tai reiškia, kad **jūs gausite duomenis iš karto.**

Tai yra naudinga, jei turite integruoti ar pateikti saugias duomenis nuo Ultimate Multisite į kitą CRM arba sistemą kiekvienai laiku, kai pasiekiama jokių įvykio. Pavyzdžiui, jums reikia siuntioti vartotojo vardą ir el. pašto adresą į el. sąrašą kiekvienai naujausios vartotojo paskyros kūrimo metu.

## Kaip sukurti webhooką

Sukurti webhooką galite eiti į savo tinklo administratoriaus dashboardą. Spauskite **Ultimate Multisite > Webhooks > Pridėti naują webhooką.**

![Mažai vaizdas vidutinis webhookų sąrašas su mygtuku Pridėti naują webhooką](/img/admin/webhooks-list-empty.png)

Tada galite redaguoti webhooko konfigūraciją:

![Pridėti naują webhooką forma su laukais Pavadinimas, Įvykis ir URL](/img/admin/webhook-add-modal.png)

Sukurdant naują webhooką jums bus pateikta informacija, pabaudus **Pavadinimą, URL** ir **Įvykį**. Galite naudoti bet kokį pavadinimą savo webhookui. Svarbiausi visi laukai yra URL ir Įvykis.

![Webhooko redaguojimo sąsajos vaizdas rodo URL lauką ir payload previzu](/img/admin/webhook-url-field.png)

URL yra **priešgauntoji vieta arba tikslas**, į kurį Ultimate Multisite išsiųs **payload'ą arba duomenis**. Tai yra programėlė, kuri gaus šiuos duomenis.

Zapier yra popiausiestasis sprendimas, kurį vartotojai naudoja, kad integruoti su trečiosiomis programėlėmis būtų lengvai. Be platformos kaip Zapier turite nustatyti jautrą funkciją, kuri pasirodo duomenis ir juos apdorojasi. Paskutiniame straipsnyje skonei apie tai, **kaip naudoti Ultimate Multisite webhooką su Zapier.**

Šiame straipsnyje pateiksime pagrindinius sąlygus, kaip veikia webhook ir kokie įvykiai yra skirti Ultimate Multisite. Mes naudos trečios šalies svetainę vadinusią [requestbin.com](https://requestbin.com/). Šiame puslapyje galime sukurti endpointą ir užfiksuoti payload (išsiliektį) be jokių kodavimo. _**Atsakingas pranešimas: jis tik rodo, kad duomenys buvo priimti.**_ Nėra jokio apdorojimo ar kitos veiksmų atlikamos su šiuo payloadu.

Eikite į [requestbin.com](https://requestbin.com/) ir paspauskite "Create Request Bin".

Pas spausdami tą mygtuką jūsų užduosis prisiųsti, jei turite anksčiau paskyros arba registruotis naujai. Jei jau turite paskyrą, jis tiesiai nukreipia jus į savo dashboardą. Jo dashboarde jūs iš karto pamatys endpointą ar URL, kurį galite naudoti su savo Ultimate Multisite webhook.

Nuo kopijuokite URL ir vėl eikite į Ultimate Multisite. Įdėkite endpointą į URL laukelį ir pasirinkite įvykį iš 드롭-down meniu (dropdown). Šiame pavyzdžiu pasirinksimas bus **Payment Received** (Mokėjimas priimtas).

Šis įvykis pasiekiama kiekvieną kartą, kai vartotojas atlikia mokėjimą. Visi skirti įvykiai, jų aprašymas ir payloadai yra nurodyti puslapio apačioje. Paspauskite mygtuką **Add New Webhook** (Pridėti naują webhook), kad išsaugotumėte webhooką.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Dabar galime siųsti testinį įvykį į endpointą, kad pamatytumėme, ar kurio webhookas mes sukurti veikia. Mes galime tai padaryti paspaudus **Send Test Event** (Siųsti testinį įvykį) po sukurtu webhooku.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Tai rodo patvirtinimo langą, kad testas buvo sėkmingas.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Atgal į _Requestbin_ sąsmedį, ir pjausmai matys, kad duomenų pakėklis buvo prikeltas su vėliavimu testinių duomenų.

Tai yra pagrindinis principas, kaip veikia webhookai ir endpointai. Jei norite sukelti savo özelą endpointą, jums reikės sukurti özelą funkciją, kuri procesuos duomenis, kuriuos gaunate iš Ultimate Multisite.
