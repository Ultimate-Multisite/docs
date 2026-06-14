---
title: Kuyenda ku Admin Panel
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Kufuna Panel ya Usimamizi (Admin Panel)

Ultimate Multisite imelenga kuwepesa kuleli na kutofautana kwa njia rahisi, kompyuta inaleta chombo hiki chenye nguvu kidogo, chote kinaweza kukusaidia kupata safari iliyongozwa. Tusianze kwenye kuruka kwenye ukurasa wa usimamizi ili kukusaidia kujisikia nyumbani.

## Dashboard (Mchanganuo Mkuu)

**Dashboard** ya Ultimate Multisite inaonyesha ripoti na takwimu za msingi, ikiwemo mapato, shughuli za tovuti, ukuaji wa wanachama, idadi ya wageni, na data ya kijiografia.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Hapa kuna mwonekano kamili wa dashboard:

![Ultimate Multisite Dashboard full page](/img/admin/um-dashboard-full.png)

Na sehemu ya chini ya dashboard:

![Ultimate Multisite Dashboard bottom section](/img/admin/um-dashboard-bottom.png)

Hapa pia kuna mwonekano kamili wa dashboard ya mtandao (network):

![Network Dashboard full page](/img/admin/network-dashboard-full-page.png)

## Checkout Forms (Fomu za Kulipia)

**Checkout Forms** zinakupa uwezo wa kuunda kurasa za usajili maalum. Unaweza kubadilisha sehemu, kuingiza classes na scripts zako mwenyewe, na kuzuia watu kuingia kulingana na nchi au eneo la wageni.

![Checkout Forms list](/img/admin/checkout-forms-list.png)

## Products (Bidhaa)

Sehemu ya **Products** ndipo unapounda mipango tofauti, paketi, na huduma kwa mtandao wako. Unafafanua bei, mara za malipo, na mipaka/viwango kwenye kiwango cha bidhaa.

![Products list](/img/admin/products-list.png)

## Memberships (Wanachama)

Ukurasa wa **Memberships** unaonyesha usajili wote katika mtandao wako. Angalia na ubadilishe maelezo ya usajili ikiwemo mipango, bidhaa, kiasi cha malipo, na mara za malipo, historia ya malipo, na muda wa kutolewa (timestamps).

![Memberships list](/img/admin/memberships-list.png)

## Payments (Malipo)

Msonse ya **Payments** imelemaza chondelelo ya malipano pa msonkhoto wanu wote wa mtandawuni wanu, ndi mavuto omwe ali ndi maidiyo omwile kwa zochitika zomwe zili ndi zinthu zina ndi mphamvu.

![Payments list](/img/admin/payments-list.png)

## Customers

Msonse ya **Customers** imalimbikitsa onse mwanzeru wosangalala wosangalala m'mtandawuni wanu ndi mawuyera omwe ali ndi mavuto omwile monga dzina la munthu, email, kusaukira kwa mwamba, ndipo muli ndi link yomwe mungayambe kuwoleka msonkhoto wanu.

![Customers list](/img/admin/customers-list.png)

## Sites

Msonse ya **Sites** imalimbikitsa onse msonkhoto wosangalala m'mtandawuni wanu, kumwamba ndi zithunzi za msonkhoto ndi msonkhoto omwe wosangalala ali m'muli. Mungayendetsa bwino ma-domain omwe muli ndi mapulogalamu (mapped domains), mapulogalamu ndi quota, plugins ndi themes, ndipo zithunzi za msonkhoto.

![Sites list](/img/admin/sites-list.png)

## Domains

Msonse ya **Domains** imalimbikitsa ma-domain omwe muli ndi msonkhoto wosangalala. Mwachidule, monga super admin, mungayendetsa bwino ma-domain omwe muli ndi msonkhoto wosangalala ndipo mungawone DNS records ndi logs.

![Domains list](/img/admin/domains-list.png)

## Discount Codes

**Discount Codes** imapangitsa kuti mupereke coupon codes kuti mupereke zochitika za kupereka mphamvu kwa onse wanu wosangalala. Mungowonetsa ndalama ya kuperekeza ndi onse wosangalala kapena m'muli omwe ali m'muli.

![Discount Codes list](/img/admin/discount-codes-list.png)

## Broadcasts

**Broadcasts** ndi chombo chomwe chimapangitsa kuti mupereke obwuludwe (announcements) kapena kupereke messages za kupangalala kwa onse wanu wosangalala. Mungowonetsa onse wosangalala omwe ali m'muli monga plan kapena product omwe ali m'muli.

![Broadcasts list](/img/admin/broadcasts-list.png)

## Settings

Msonse ya **Settings** ndi yemwe mungayendetsa kuti Ultimate Multisite imene — settings za registration, malipano, API ndi webhooks, mapping ya domain, ndipo zinthu zina zomwe muli ndi zowonjezera.

Kutenge list ya OAuth provider pools zomwe zili zikubwera kwa m'moyo wanu: Anthropic Max, OpenAI ChatGPT/Codex, ndi Google AI Pro. Kofunsa la provider lina kutanthauza kuti super admins angathe kukhubikitsa accounts, kudachitira upatanitsa wa accounts zomwe zili zikuperekedwa, kuwamba accounts mwachidule kwa email, ndikuwamba manual OAuth fallback pamene sandboxed environment imapanga redirect ya browser. Zoperekedwa za Cursor Pro zikuyendera kuchokera pa admin panel.

Accounts za ChatGPT/Codex zimeneza kuti zikubwera ndi chitsanzo chomwe chimaperekedwa kwa connector, komwe operation imapangitsa kuti mwayi wosangalatsa (tools) amathandizira, chifukwa chidziwika cha admin workflows zomwe zimaperekedwa pa operations zomwe zili zikubwera ndi connector.

![Settings page](/img/admin/settings-general.png)

Iliyi ndiyo chitsogozo chake kwa settings general:

![Settings general full page](/img/admin/settings-general-full.png)

Ndipo iliyani la emails:

![Settings emails full page](/img/admin/settings-emails-full.png)

Ndipo iliyani la payments:

![Settings payments full page](/img/admin/settings-payments-full.png)

Ndipo sehemu yomwe imapuka pa settings ya payments:

![Settings payments bottom section](/img/admin/settings-payments-bottom.png)

Ndipo iliyani la sites:

![Settings sites full page](/img/admin/settings-sites-full.png)

## Events

Iliyi Events page imapereka chitsogozo cha onse za events ndi logs m'moyo wanu. Imaperekera zinthu monga mapulogolo a plan, kupanga accounts, ndi zinthu zina zomwe zimaperekedwa — zimaperekera kuti mwayi wosangalatsa (monitoring) wanu woyenera multisite.

![Events list](/img/admin/events-list.png)

## Webhooks

**Webhooks** zimapangitsa kuti mupereke data kwa application ine. Zili zofunika kuti mupereke data kuchokera pa Ultimate Multisite ku platforms monga Zapier.

![Webhooks list](/img/admin/webhooks-list.png)
