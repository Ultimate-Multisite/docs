---
title: Regjistro një Konton përmes Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Regjistrohu një llogari me Zapier {#event-register-an-account-via-zapier}

Në artikullin [Integrating Ultimate Multisite with Zapier](zapier.md), ne diskutuan se si të përdorim Zapier për të bërë veprime të ndryshme brenda Ultimate Multisite bazuar në trigger-e dhe event-et. Në këtë artikull, do t'ju tregojmë se si mund ta integroni aplikacione e palëve të treta. Do të përdorim Google Sheets si burimi i të dhënave dhe do t'i dërgojmë informacionin në Ultimate Multisite për të regjistruar një llogari.

Para se të lidhni Zapier, shkoni te **Ultimate Multisite > Settings > API & Webhooks** dhe konfirmojeni që API është i aktivizuar (enabled). Kopjoni API Key dhe API Secret nga ky ekran kur Zapier kërkon kredencialet e llogarisë Ultimate Multisite.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Para se të filloni, duhet të krijoni një **Google Sheet** në Google Drive tuaj. Sigurohuni që të përcaktoni siç duhet çdo kolone në mënyrë të duhur, që të mund ta maponi të dhënat lehtësisht më vonë.

Pas krijimit të Google sheet-it, mund të hyjni në llogarinë tuaj Zapier dhe të filloni të krijoni një zap.

Nën fushën e kërkimit për **"App event"** (Event i aplikacionit), zgjidhni **"Google Sheets"**.

Pastaj për fushën "**Event**", zgjidhni "**New spreadsheet row**" (Rresht i ri të sheet-it) dhe shtypni "**Continue**" (Kontinuo).

Hapi i ardhshëm do t'ju kërkojë të zgjidhni një **Google Account** (Llogari Google) ku është ruajtur **Google Sheet**. Kështu që vetëm sigurohuni që llogaria Google e duhur është specifikuar.

Nën "**Set up trigger**" (Konfiguroni triggerin), do të duhet të zgjidhni dhe të specifikoni Google Sheet-in dhe worksheet-in ku do të vijnë të dhënat. Thjesht vazhdoni me plotësimet dhe shtypni "**Continue**".

Hapi tjetër është "**test your trigger**" (Testoni triggerin) për të siguruar që Google Sheet-i juaj është lidhur siç duhet.

Nëse testi ju hapet me sukses, do të shihni rezultatin duke treguar disa vlerë nga sheet-të tuaja. Klikoni "**Continue**" (Kontinuo) për të vazhduar.

Hapi hapi është hapi i dytë që do të krijojë ose regjistrohet një llogari në Ultimate Multisite. Në fushën e kërkimit (search field), zgjidhni "**Ultimate Multisite(2.0.2)** ".

Në fushën "**Event** ", zgjidhni "**Register an Account in Ultimate Multisite** " dhe pastaj klikoni butonin "**Continue** ".

Në seksionin "**Set up an action** ", do të shihni fusha të ndryshme për të dhënat e klientit, anëtarësimet (memberships), produktet, etj. Ju mund t'i maponi vlerat në Google Sheet-in tuaj dhe t'i vendosni ato në fushën e duhur ku duhet të plotësohen, siç shfaqet në skenën më poshtë.

Pas mapi vlerat, ju mund ta provoni veprimin (action).
