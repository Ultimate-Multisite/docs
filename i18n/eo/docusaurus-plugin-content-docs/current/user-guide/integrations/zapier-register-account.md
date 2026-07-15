---
title: Registri konton per Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Evento: Registri konto per Zapier

En la artiklo [Integrating Ultimate Multisite with Zapier](zapier.md), diskutis ni sa si Zapier për të bërë veprime të ndryshme brenda Ultimate Multisite bazuar në trigger dhe event. Në këtë artikull, do t'ju shohim se si mund ta integroni aplikacione e palëve të treta. Do të përdorim Google Sheets si burimi i të dhënave dhe do t'i dërgojmë informacionin Ultimate Multisite për të regjistruar një llogari.

Para se të lidhni Zapier, shkoni te **Ultimate Multisite > Settings > API & Webhooks** dhe konfirmojeni që API është i aktivizuar. Kopjoni API Key dhe API Secret nga ky ekran kur Zapier kërkon kredencialet e llogarisë Ultimate Multisite.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Para se të filloni, ju duhet të krijoni një **Google Sheet** në Google Drive tuaj. Sigurohuni që të përcaktoni si duhet çdo kolone në mënyrë të duhur, që të mund ta mapi të dhënat lehtësisht më vonë.

Pas krijimit të Google sheet-it, ju mund të hyeni në llogarinë tuaj Zapier dhe të filloni të krijoni një zap.

Nën fushën e kërkimit për **"App event"** (Event i aplikacionit), zgjidhni **"Google Sheets"**.

Pastaj për fushën "**Event**", zgjidhni "**New spreadsheet row**" (Rresht i ri të sheet-it) dhe shtypni "**Continue**" (Prekoni).

Hapi i ardhshëm do t'ju kërkojë të zgjidhni një **Google Account** (Llogari Google) ku është ruajtur **Google Sheet**-i. Kështu që thjesht sigurohuni që llogaria Google e duhur është specifikuar.

Nën "**Set up trigger**" (Konfiguroni triggerin), do të duhet të zgjidhni dhe të specifikoni Google Sheet-in dhe worksheet-in ku do të vijë të dhënat. Thjesht vazhdoni me plotësimet dhe shtypni "**Continue**".

Hapi tjetër është "**test your trigger**" (Testoni triggerin) për të siguruar që Google Sheet-i juaj është lidhur si duhet.

Nëse testi ju mbaron me sukses, do të shihni rezultatin duke parë disa vlera nga sheet-et tuaja. Klikoni "**Continue**" për të vazhduar.

La proksma paŝo estas konfiguri la sekundan akcion, kiu kreos aŭ registras konton en Ultimate Multisite. Sur la flado de la serĉa campo selektu "**Ultimate Multisite(2.0.2)** ".

Sub la flado "**Event** ", selektu "**Register an Account in Ultimate Multisite** " kaj tikti la buton "**Continue** ".

Sub "**Set up an action** ", vi vidos diversajn flado por datan kontadon, membronojn, produktojn, etc. Vi povas mapi la valorojn sub via Google Sheet kaj atribui ilin al la ĝusta flado kie ili devas esti populariĝita kiel shown en la skrofo anulo.

Post mapi la valorojn, vi povas testu la akcion.
