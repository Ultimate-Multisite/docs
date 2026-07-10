---
title: Magrehistro ng Account sa pamamagitan ng Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Kaganapan: Magparehistro ng Account sa pamamagitan ng Zapier {#event-register-an-account-via-zapier}

Sa artikulong [Pagsasama ng Ultimate Multisite sa Zapier](zapier.md), tinalakay namin kung paano gamitin ang Zapier upang magsagawa ng iba’t ibang aksyon sa loob ng Ultimate Multisite batay sa mga trigger at kaganapan. Sa artikulong ito, ipapakita namin kung paano mo maisasama ang mga 3rd party na application. Gagamitin namin ang Google Sheets bilang pinagmumulan ng data at ipapadala ang impormasyon sa Ultimate Multisite upang magparehistro ng Account.

Bago ikonekta ang Zapier, pumunta sa **Ultimate Multisite > Settings > API & Webhooks** at kumpirmahing naka-enable ang API. Kopyahin ang API Key at API Secret mula sa screen na ito kapag hiniling ng Zapier ang Ultimate Multisite Account credentials.

![Mga setting ng API at Webhooks na may API Key, API Secret, at mga opsyon sa Enable API](/img/admin/settings-api-webhooks.png)

Una, kailangan mong gumawa ng **Google Sheet** sa ilalim ng iyong Google Drive. Tiyaking maayos mong natutukoy ang bawat column upang madali mong mai-map ang data sa kalaunan.

Pagkatapos gumawa ng Google sheet, maaari kang mag-log in sa iyong Zapier account at magsimulang gumawa ng zap.

Sa ilalim ng search field para sa **"App event"** piliin ang **"Google Sheets"**


Pagkatapos para sa field na "**Event** " piliin ang "**New spreadsheet row** " at pindutin ang "**Continue** "

Hihilingin sa iyo ng susunod na hakbang na pumili ng **Google Account** kung saan naka-save ang **Google Sheet**. Kaya tiyakin lamang na ang tamang google account ang nakasaad.


Sa ilalim ng **"Set up trigger** ", kakailanganin mong piliin at tukuyin ang google spreadsheet at worksheet na gagamitin mo kung saan manggagaling ang data. Sige at punan ang mga iyon at pindutin ang "**Continue** "

Susunod ay ang "**test your trigger** " upang matiyak na maayos na nakakonekta ang iyong google sheet.

Kung matagumpay ang iyong test, dapat mong makita ang resultang nagpapakita ng ilang value mula sa iyong mga spreadsheet. I-click ang "**Continue** " upang magpatuloy.

Ang susunod na hakbang ay i-set up ang ikalawang aksyon na gagawa o magrerehistro ng Account sa Ultimate Multisite. Sa search field piliin ang "**Ultimate Multisite(2.0.2)** "


Sa ilalim ng field na "**Event** ", piliin ang "**Register an Account in Ultimate Multisite** " pagkatapos ay i-click ang button na "**Continue** ".

Sa ilalim ng "**Set up an action** ", makikita mo ang iba’t ibang field na available para sa data ng customer, memberships, produkto, atbp. Maaari mong i-map ang mga value sa ilalim ng iyong google sheet at italaga ang mga ito sa wastong field kung saan dapat mapunan ang mga ito gaya ng ipinapakita sa screenshot sa ibaba.


Pagkatapos i-map ang mga value, maaari mong subukan ang aksyon.
