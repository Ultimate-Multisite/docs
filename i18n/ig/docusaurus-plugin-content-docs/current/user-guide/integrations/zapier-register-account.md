---
title: Nyo aka aka aka na Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Register an account via Zapier

Na ọrịre [Integrating Ultimate Multisite with Zapier](zapier.md), anyị gosi ya na ị chọrọ jiri Zapier do gụny ihe ndị dị iche iche n'Ultimate Multisite dựa ọkụziri (triggers) na ihe ndị bụ events. Na ọrịre a, anyị ga-arị gosi gị ahụ ka ị chụrụ ihe ndị ọrụ ọzọ (3rd party applications). Anyị ga-ri jiri Google Sheets dịka ihe na-agbanwe data (source of data) ma anyị ga-anọchịrị mme information ahụ n'Ultimate Multisite do gụny aka.

Mbi ị chọrọ Zapier, jiji **Ultimate Multisite > Settings > API & Webhooks** ma ị chọrọ ka API dị njọ (enabled). Kopi API Key na API Secret tun uche a mgbe Zapier chọrọ account credentials Ultimate Multisite.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Mbi ọrụ, ị ga-arị kọwa **Google Sheet** n'ụlọ Google Drive gị. Keti ka ị chọrọ mma ma ị gbanwe từng column (column) nke ọma ka ị ọnụ ma ị chọrọ map data ahụ mme.

Ọ bụrụ na ị chọrọ Google sheet, ị ga-anọchịrị n'account Zapier gị ma ị inizia kọwa zap.

N'ime search field nke **"App event"** (ọkụziri ihe ọrụ), ji chọrọ **"Google Sheets"**.

Ọ bụrụ na ọ bụ Google Sheet, jiji field **"Event"**, ji chọrọ **"New spreadsheet row"** ma jikọ **"Continue"**.

Ihe ndị daa nke ọzọ ga-ekwu maka ị chọrọ **Google Account** (account Google) na-enwe Google Sheet ahụ n'ụlọ. Ka ọ bụrụ na ị gbanwe account Google dị mma.

N'ime **"Set up trigger"**, ị ga-arị chọrọ ka ị chọrọ ma ị gbanwe google spreadsheet na worksheet ị ga-ri jiri ya n'ime where data ahụ ga-abịa. Ka ọ bụrụ na ị chọrọ, ji gbanwe ihe ndị a ma jikọ **"Continue"**.

Ihe daa nke ọzọ bụ **"test your trigger"** (ji chọpụta okụziri) maka ị chọpụta mma ka Google Sheet gị dị n'aka.

Ọ bụrụ na uji gị na-agbanwe, ị ga-anọchịrị ihe ndị ọrụ dịka a na-agbanwe ụfọdụ (values) n'ime spreadsheets gị. Jikọ **"Continue"** maka ịgba ọsọ.

Ihe mmezi na ndụ nke kacha ahụ bụ ịset up akụkọ (action) abụọ nke ga-agbanwe lebe ma ọ bụ gbanwe aka (account) n'Ultimate Multisite. Na search field, chọrọ "**Ultimate Multisite(2.0.2)** ".

N'field "**Event** ", chọrọ "**Register an Account in Ultimate Multisite** " sonra chọrọ nút "**Continue** ".

N'field "**Set up an action** ", ị ga-ekwu m nkwado (fields) dị iche iche na-akọwa maka data customer, memberships, products, na ihe ndị ọzọ. Ị ga-enwe ike ịgba (map) mga-anị (values) nke Google Sheet tusi na gbanne ha n'field ọ bụla ọ bụla ọ bụla e ji anọ site n'akaa onye a bụrụ na ha ga-agbanwe ha dị ka ọkụziro (populated) dịka ọkụziro na-akọwa n'screenshot a.

Ọ bụrụ na ịgba mga-anị ndị ahụ, ị ga-anọ ike ịgbanwe akụkọ (test the action).
