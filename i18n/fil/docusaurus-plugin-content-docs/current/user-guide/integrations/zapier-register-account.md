---
title: Magrehistro ng Account sa pamamagitan ng Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Event: Magrehistro ng account gamit ang Zapier

Sa artikulong [Pag-integrate ng Ultimate Multisite sa Zapier](zapier.md), tinalakay natin kung paano gamitin ang Zapier para magsagawa ng iba't ibang aksyon sa loob ng Ultimate Multisite batay sa mga trigger at event. Sa artikulong ito, ipapakita namin kung paano mo mai-integrate ang mga 3rd party na application. Gagamitin natin ang Google Sheets bilang pinagmulan ng data at ipapadala ang impormasyon sa Ultimate Multisite para magrehistro ng account.

Una, kailangan mong gumawa ng **Google Sheet** sa ilalim ng iyong Google Drive. Siguraduhing maayos mong tinukoy ang bawat column para madali mong ma-map ang data mamaya.

![Google Sheet na may mga column para sa customer data](/img/admin/webhooks-list.png)Pagkatapos gumawa ng Google sheet, maaari kang mag-log in sa iyong Zapier account at magsimulang gumawa ng zap.

![Zapier dashboard para magsimulang gumawa ng zap](/img/admin/webhooks-list.png)Sa search field para sa **"App event"** piliin ang **"Google Sheets"**

![Pagpili ng Google Sheets bilang app event](/img/admin/webhooks-list.png)

Pagkatapos, sa field na "**Event**" piliin ang "**New spreadsheet row**" at i-click ang "**Continue**"

![Pagpili ng New spreadsheet row event sa Zapier](/img/admin/webhooks-list.png)Sa susunod na hakbang, hihilingin sa iyo na pumili ng **Google Account** kung saan naka-save ang **Google Sheet**. Siguraduhin lang na tama ang nakatukoy na google account.

![Pagpili ng Google Account para sa Google Sheet](/img/admin/webhooks-list.png)

Sa ilalim ng **"Set up trigger"**, kakailanganin mong piliin at tukuyin ang google spreadsheet at worksheet na gagamitin mo kung saan magmumula ang data. Punan lang ang mga ito at i-click ang "**Continue**"

![Set up trigger na may pagpili ng spreadsheet at worksheet](/img/admin/webhooks-list.png)Susunod ay ang "**test your trigger**" para matiyak na maayos na nakakonekta ang iyong google sheet.

![Hakbang ng Test your trigger sa Zapier](/img/admin/webhooks-list.png)Kung matagumpay ang iyong test, makikita mo ang resulta na nagpapakita ng ilang value mula sa iyong spreadsheet. I-click ang "**Continue**" para magpatuloy.

![Matagumpay na trigger test na nagpapakita ng mga value ng spreadsheet](/img/admin/webhooks-list.png)Ang susunod na hakbang ay ang pag-set up ng pangalawang aksyon na gagawa o magrerehistro ng account sa Ultimate Multisite. Sa search field piliin ang "**Ultimate Multisite(2.0.2)**"

![Pagpili ng Ultimate Multisite bilang action app](/img/admin/webhooks-list.png)

Sa ilalim ng field na "**Event**", piliin ang "**Register an Account in Ultimate Multisite**" pagkatapos ay i-click ang button na "**Continue**".

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)Sa ilalim ng "**Set up an action**", makikita mo ang iba't ibang field na available para sa customer data, membership, product, atbp. Maaari mong i-map ang mga value sa ilalim ng iyong google sheet at italaga sila sa tamang field kung saan sila dapat mapunan tulad ng ipinapakita sa screenshot sa ibaba.

![Pag-map ng mga value ng Google Sheet sa mga field ng Ultimate Multisite](/img/admin/webhooks-list.png)

Pagkatapos i-map ang mga value, maaari mong i-test ang aksyon.

![Pag-test ng register account Zapier action](/img/admin/webhooks-list.png)
