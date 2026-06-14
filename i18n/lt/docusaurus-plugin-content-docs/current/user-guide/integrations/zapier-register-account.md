---
title: Registruokite paskyrą per Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Zaregistruoti paskyba per Zapier

Šiame straipsnyje [Integracija Ultimate Multisite su Zapieriu](zapier.md) meseliai diskutavome, kaip naudoti Zapierį atlikti skirtingus veiksmus Ultimate Multisite bazavus įspūdis ir įvykius. Šiame straipsnyje pateiksime, kaip galite integruoti trečias pusės programėles (3rd party applications). Naudojime Google Sheets kaip duomenų šaltinį ir siunčiame informaciją į Ultimate Multisite, kad nustatytumėte paskyrą.

Prieš sujungdami Zapierį, eikite į **Ultimate Multisite > Settings > API & Webhooks** ir patvirtinkite, kad API yra įjungtas (enabled). Kopkite API Key ir API Secret iš šios skrinio, kai Zapieris užklausys Ultimate Multisite paskyros kredencijas.

![API ir Webhookų nustatymai su API Key, API Secret ir API įjungimo opsijomis](/img/admin/settings-api-webhooks.png)

Pirmajau, turite sukurti **Google Sheet** savo Google Drive'je. Įsitikinkite, kad kiekviena kolona yra tinkamai nurodyta, kad vėliau galėtumėte lengvai mapuoti duomenis.

Po sukūrim Google Sheet-o galite praleisti į savo Zapierio paskyrą ir pradėti sukurti zap (zap workflow).

Tvarkyje paieškos lauke **"App event"** pasirinkite **"Google Sheets"**.

Tada lauke **"Event"** pasirinkite **"New spreadsheet row"** ir spauskite **"Continue"**.

Kitas žingsnis užklausys jūsų pasirinkti **Google Account**, kur pateikta **Google Sheet**. Taigi, visai tiksliai patikrinkite, kad nurodytas tinkamas Google paskirtis.

Tvarkyje **"Set up trigger"** turėtumėte pasirinkti ir nurodyti tą Google Sheetą ir lapą (worksheet), kurį naudosite duomenims. Tiesiog užpildykite šiuose lauke ir spauskite **"Continue"**.

Kitas žingsnis yra **"test your trigger"**, kad patikrintumėte, ar jūsų Google Sheetas tinkamai sujungtas.

Jei jūsų testas sėkmingai vyks, turite pamatyti rezultatą, skirantys kelis vertus iš jūsų spreadsheetų. Spauskite **"Continue"**, kad tęstumėtumėte.

Kitas žingsnis – nustatyti paskutintą veiksmą, kuris sukripsi arba registruoja paskyrą Ultimate Multisite. Paieška lauke pasirinkite "**Ultimate Multisite(2.0.2)** ".

Under "**Event** " (Svetainis), pasirinkite "**Register an Account in Ultimate Multisite** " (Registruoti paskyrą Ultimate Multisite) ir spauskite mygtuką "**Continue** " (Tęsti).

Under "**Set up an action** " (Nustatyti veiksmą), pamatysite skirtingus laukus, skirtus klientų duomenims, nuskaitomoms, produktams ir kitoms dalykoms. Jūs galite nurodyti vert.</p>
```html
<img src="path/to/screenshot.png" alt="Screenshot showing the mapping of data fields in Ultimate Multisite setup">
```
> ... į savo google sheet (Google puslapį) ir nurodyti, kurio laukui šie reikšmės turi būti įtrauktos, kaip pateikta žemiau pateikto vaizde.

Po vert.</p>
```html
<img src="path/to/screenshot2.png" alt="Screenshot showing the testing of the action">
```
> ... nurodytus vert.</p>
```
