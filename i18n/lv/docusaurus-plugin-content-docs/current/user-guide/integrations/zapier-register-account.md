---
title: Reģistrēties ar kontu ar Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Reģistrēties ar kontu ar Zapieru {#event-register-an-account-via-zapier}

Latīgajā rakstā [Integrācija Ultimate Multisite ar Zapieru](zapier.md) mēs apspārdaļojām, kā izmantot Zapieru veikt dažādus darbības Ultimate Multisite bazas datu un notikumiem atkarībā no triggeriem un eventiem. Šajā rakstā parādīsim, kā integrēt treto puses lietojumus. Mēs izmantosim Google Sheets kā datu avotu un nosūtīsim informāciju uz Ultimate Multisite, lai reģistrētu kontu.

Pirms savas Zapieru savienošanu veidošanu, atgriezties uz **Ultimate Multisite > Settings > API & Webhooks** un apstipriniet, ka API ir ieslēgts. Kopējiet API Key un API Secret no šīs ekrāna, kad Zapieru jautā vai Ultimate Multisite konta datus.

![API un Webhooki iestatījumi ar API Key, API Secret un API ieslēgšanas opcijas](/img/admin/settings-api-webhooks.png)

Pirms tas, jums ir jāizveido **Google Sheets** savā Google Drive. Nodrošinieties, ka katras kolona ir labi definēta, lai jūs vēlāk varētu viegli mapejāt datus.

Pēc Google Sheets izveidoto, varat iekļūt savā Zapieru kontā un sākt veidot zap.

Meklēšanas laukā **"App event"** izvēlieties **"Google Sheets"**.

Tad, jaotnē **"Event"** laukā izvēlieties **"New spreadsheet row"** (Jaunais saraksta rindi) un nospiediet **"Continue"** (Turpināt).

Nākamais soļums jautās jums izvēlēties un noteikt Google kontu, kur atrodas **Google Sheets**. Tādējādi nodrošinieties, ka precīti pareizais Google konts ir norādīts.

Ap **"Set up trigger"** (Iestatīt triggeri) jums būs jāizvēlas un noteikta Google Sheets un lapas (worksheet), ko izmantot datums tiks iegūti. Vienkārši aizpildiet šos laukus un nospiediet **"Continue"**.

Nākamais ir **"test your trigger"** (Pārtests jūsu triggeri), lai pārliecinātos, ka jūsu Google Sheets labi savienots.

Ja tests veiksmīgi, jūs redzēs rezultātus, kas parāda dažas vērtības no jūsu sarakstiem. Nospiediet **"Continue"**, lai turpinātu.

Nā nākamais soļum ir iestatīts otrs darbība, kas radīs vai reģistrē kontu Ultimate Multisite. Meitnējiet meklēšanas laukā "**Ultimate Multisite(2.0.2)** ".

Ap "**Event** " lauku izvēlieties "**Register an Account in Ultimate Multisite** ", pēc tam nospressiet "**Continue** " pogu.

Ap "**Set up an action** " redziet dažādus laukus, kas ir pieejami klientu datiem, memberships, produktiem un tā citi. Jūs varat mapēt vērtības savā Google Sheet-ā un atļaut tās konkrētajā laukā, kur tās jāievieto, kā redzams attēlā zemāk.

Pēc vērtību mapēšanas varat pārtests darbību.
