---
title: Magparehistro ng Account sa pamamagitan ng Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Kaganapan: Mag-register ng account gamit ang Zapier

Sa artikulong [Integrating Ultimate Multisite with Zapier](zapier.md), tinalakay natin kung paano gamitin ang Zapier para gumawa ng iba't ibang aksyon sa loob ng Ultimate Multisite batay sa mga trigger at event. Sa artikulong ito, ipapakita namin kung paano mag-integrate ng third-party applications. Gagamit tayo ng Google Sheets bilang source ng data at ipapadala ang impormasyon nito sa Ultimate Multisite para mag-register ng account.

Bago kumonekta sa Zapier, pumunta ka muna sa **Ultimate Multisite > Settings > API & Webhooks** at i-confirm na naka-enable ang API. Kopyahin ang API Key at API Secret mula sa screen na ito kapag tinanong ka ng Zapier para sa mga credentials ng Ultimate Multisite account.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Una, kailangan mo munang gumawa ng **Google Sheet** sa ilalim ng iyong Google Drive. Siguraduhin na tama ang pagtukoy mo sa bawat column para madali mong mai-mapa (mapa) ang data mamaya.

Pagkatapos mong gawin ang Google sheet, maaari ka nang mag-log in sa iyong Zapier account at magsimulang gumawa ng zap.

Sa search field para sa **"App event"**, piliin ang **"Google Sheets"**.

Pagkatapos ay para sa field na "**Event**", piliin ang "**New spreadsheet row**" at pindutin ang "**Continue**".

Ang susunod na hakbang ay hihiling sa iyo na pumili ng **Google Account** kung saan nakaimbak ang **Google Sheet**. Kaya siguraduhin lang na tama ang napiling Google account.

Sa ilalim ng **"Set up trigger"**, kailangan mong piliin at tukuyin ang google spreadsheet at worksheet na gagamitin mo kung saan nanggagaling ang data. I-fill mo lang ito at pindutin ang "**Continue**".

Susunod ay ang "**test your trigger**" para masigurado na maayos ang koneksyon ng iyong Google Sheet.

Kung matagumpay ang iyong test, dapat makita mo ang resulta na nagpapakita ng ilang values mula sa iyong spreadsheets. I-click ang "**Continue**" para magpatuloy.

Ang susunod na hakbang ay i-set up ang pangalawang aksyon na magpapatakbo ng paglikha o pagrehistro ng account sa Ultimate Multisite. Sa search field, piliin ang "**Ultimate Multisite(2.0.2)** ".

Sa ilalim ng field na "**Event** ", piliin ang "**Register an Account in Ultimate Multisite** " tapos i-click ang button na "**Continue** ".

Sa ilalim ng "**Set up an action** ", makikita mo ang iba't ibang fields para sa data ng customer, membership, produkto, atbp. Maaari mong i-map (iugnay) ang mga values mula sa iyong google sheet at italaga ito sa tamang field kung saan dapat mapuno ayon sa ipinapakitang screenshot sa ibaba.

Pagkatapos mong ma-map ang mga values, maaari mo nang subukan (test) ang aksyon.
