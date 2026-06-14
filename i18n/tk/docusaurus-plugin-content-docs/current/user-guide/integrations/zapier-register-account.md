---
title: Zapier arkaly hasaba ýazyň
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Zapier arkalyma goýular bilen hasaba goşmak

[Integrating Ultimate Multisite with Zapier](zapier.md) makatasinda biz Zapier-i ulanyp Ultimate Multisite içinde triggerlar we eventler esaslarynda dürli hereketleri nädip amala aşyrylmagyny gürrüň berdik. Bu makatda size 3-njy taraply programmalary nädip birleşdire biljekdigini görkezeli. Biz Google Sheets-i maglumat manbai hökmünde ulanyp, hasaba goşmak üçin bu maglumatlary Ultimate Multisite-a göndereýäris.

Zapier bilen baglanmazdan öň, **Ultimate Multisite > Settings > API & Webhooks** bölümini geçip API-ni işleýärlikde (enabled) bolup baýlansanyň we API Key we API Secreti üçin bu ekran wagty Zapier sizden Ultimate Multisite hasabynyň agzajlaryny soraýan wagtda nusga lap bilersiňiz.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Ilki bilen, Google Drive-da özüňize bir **Google Sheet** döredip bilmeniz zerurdyr. Maglumatlary soňra kolay ýaly eşde maýlamak üçin her bir saryny düzgünle görkezmekden habersiz bolmaly.

Google sheetini döredenden soň, Zapier hasabyňyza giriş edip zap döretmäge başlap bilersiňiz.

**"App event"** diýen gözlegli ulanyjy boýununda **"Google Sheets"**-i saýlaň.

Soňra "**Event** " bölümi üçin "**New spreadsheet row**" (New spreadsheet row) diýip saýlaň we "**Continue**" (Devam et) düwmenine basyň.

Indiki ädimde maglumatlary geljekdigini görkezýän **Google Account**-y saýlamagy soraýar, bu ýerde Google Sheet saklanýar. Şonuň üçin dogry Google hasaby kesgitlenendiginden habersiz bolmaly.

**"Set up trigger"** boýununda siz maglumatlary geljek Google spreadsheet we worksheetini saýlaň we kesgitleniň, bu ýerde maglumatlar geljekdigini görkezýärsiňiz. Soňra olar bilen dolyp, "**Continue**" düwmenine basyň.

Indiki ädimde Google sheetinizi dogry baglanmagyny barlamak üçin **"test your trigger"** (triggeri test ediň) geçirişdirýäris.

Eger testiniz üstünlikli bolan bolsa, öz spreadsheetlerinizden käbir bahalary görkezýän netijeleri görmeli size görä. Dolanyňda dowam etmek üçin "**Continue**" düwmenine basyň.

Indiki ädimi Ultimate Multisite-da akkaunt açan ýa-da goşandygy üçin ikinji hili goýmagyň wagtydyr. Goşmaça ugurlarynda "**Ultimate Multisite(2.0.2)** "ni saýlaň.

"**Event**" ulanyp, "**Register an Account in Ultimate Multisite** "ni saýlaň, soň " **Continue** " düwmenine basyň.

"**Set up an action**" boýunça, iňlis müşteri maglumatlary, üjeleşmeler, önümçilikler üçin dürli ulanylyp biljek ulanyjy barlaglary görkeziler. Siz bu ugurlardaky wariantlary öz Google sheet-iňiz bilen eşleşdirip, skrinşotda görkezilýän ýaly ol maglumatlary goýulmaly bolan dogry ulanyjygyna laýyklaşdyrarsyň.

Maglumatlary eşleşdirip geçenden soň, ugury test edip bilersiňiz.
