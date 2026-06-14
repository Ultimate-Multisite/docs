---
title: Registreeri konto Zapieri abil
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Tõste: Konto registreerida Zapier abil

Artikkelis [Ultimate Multisite integreerimise Zapieriga](zapier.md) käsitlesime, kuidas zapieri kasutades Ultimate Multisite'i abil erinevaid tegevusi käivitajaid ja sündmusi (triggers and events) põhjal teha. Selle artiklis näitame, kuidas saate kolmandate osaliste rakendusi integreerida. Kasutame Google Sheets-i andmeallikat ja ületame teavet Ultimate Multisite'ile konto registreerimiseks.

Zapieriga ühendamise enne, külastage **Ultimate Multisite > Settings > API & Webhooks** ja kinnitage, et API on aktiveeritud. Kopige API Key ja API Secret sellest ekraanist, kui Zapier koordineerib Ultimate Multisite'i konti andmeid.

![API ja Webhooki seadistused API-keyga, API-salduga ja API aktiivsetamise valikuga](/img/admin/settings-api-webhooks.png)

Enne tuleb luua **Google Sheet** oma Google Drive'is. Pärast iga kolonniga õiget definimist on võimalik hiljem andmeid lihtsalt koondada.

Google Sheet loomise pärast saate logida oma Zapier kontole ja alustada zap loomist.

**"App event"** otsingukil valige **"Google Sheets"**.

Seejärel **"Event"** -väljalikku valige **"New spreadsheet row"** (Uus leht) ja klõpsake **"Continue"** (Jätka).

Järgmine samm küsib teid Google Accounti valima, kus **Google Sheet** on salvestatud. Veidi veendake, et siin on õige Google konto määratud.

**"Set up trigger"** all pead valima ja määratama Google Sheets-i ja leht, mida kasutate andmete allikatena. lihtsalt täita need ja klõpsake **"Continue"**.

Järgmine on **"test your trigger"**, et veenduda, et teie Google Sheet on õigesti ühendatud.

Kui test on õnnestunud, peaksite näha tulemuse, mis näitab mõningaid väärtusi teie lehtest. Jätke edasi klõpsamiseks **"Continue"**.

Järgmine samm on teada seadistamine teise toimiku, mis luuakse või registreerib konto Ultimate Multisite'is. Otsingukil valige "**Ultimate Multisite(2.0.2)** ".

"Sündmus" (Event) -välil valige "**Register an Account in Ultimate Multisite**" ja klõpsake "Jätka" (Continue) nupul.

"Toimiku seadistamine" (Set up an action) allpool näete erinevaid välju, mis on saadaval kliendikundile, liitustele, toodetele jne. Saate valuta väärtusi oma Google Sheet'ist ja määrata neid õigekasutavalele välja, kus neil tuleb täita infot nagu näed allpool piltis.

Vääruste määramise pärast saate toimiku testida.
