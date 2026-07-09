---
title: Whakawhanaungatanga akauata i te whakatau aka via Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Pūrerehua: Whakawhanaungatanga akaupā via Zapier {#event-register-an-account-via-zapier}

I roto i te article [Integrating Ultimate Multisite with Zapier](zapier.md), i whakatakuta mātou i te mea he pēhea te whakamahi i Zapier mō te whakamaoritanga mahi ā-aupā (triggers) me ngā pūrere (events) i runga i Ultimate Multisite. I tēnei article, ka whakaatu atu mātou i a koe pēhea e taea ai te whaiwhakarite (integrate) ngā mea whakamahi o aua wāhi (3rd party applications). Ka whakamahia mātou i Google Sheets mō te waiata o ngā āhuatanga (source of data) me te tino pai i te whakamahi i Ultimate Multisite ki te whakamaoritanga akaupā.

Iha te whakatutuki i Zapier, pēnei i te **Ultimate Multisite > Settings > API & Webhooks**, kia kore eke atu ai te API (API) i te whakahirahira. Kopu i te API Key me te API Secret mai tēnei whero i te screen i roto i te wā e kawhia a Zapier i ngā kredensial o te Ultimate Multisite.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

I muri i te whakatō i Google Sheet, i taea e koe te mārama (log in) ki tō account Zapier me te tīmata te whakamaoritanga o te zap.

I runga i te search field mō **"App event"**, te whiri i **"Google Sheets"**.

I muri i tuatahi, mō te taiao "**Event**", whiri i "**New spreadsheet row**" (Whakawāhi hou o te sheet) me te whai i "**Continue**".

Te mahi whakaaro (next step) ka whakataki atu ki te whiri i **Google Account** i te mea ko te **Google Sheet** e pēnei. I roto i te wā e kawhia, kia kore eke ai te account Google tika.

I runga i "**Set up trigger**", ka taea e koe te whiri me te tino whakatakuta i te google spreadsheet me te worksheet (taiao o ngā data) i te mea ko te data e noho ana ihi. Ka pēnei, whakatō atu me whai i "**Continue**".

I muri i tēnei, he **"test your trigger"** kia kore eke ai te whakamahi i tō google sheet i te tika.

Ko te tino pai o tō whakamārama (test) ka taea e koe te whakaatu i ngā uta (values) mō tō spreadsheets. Whai i "**Continue**" ki te whakatika atu.

I te whakamārama anō, te whakamahinga eke i te whakamahinga kedua o te mahi (action) kia whakatō ana akauata (account) he tino multisite i Ultimate Multisite. I te search field, rongo mai "**Ultimate Multisite(2.0.2)** ".

I te faahi "**Event**", rongo mai "**Register an Account in Ultimate Multisite**" ā, kua whakamārama i te button "**Continue**".

I te faahi "**Set up an action**", ka roto i koe e whakaatu i ngā faahi whānui mō ngā whakaaro o te mea whai whenua (customer data), membership, aua (products), me ngā mea katoa. Kei te tino tika ana ki te mapu i ngā wāhi o ngā wāhi o Google Sheet mo ngā wāhi whakahou (map) ā, kia whakatō rā i te faahi tika i te kaha e whakaatu ai i te screenshot i runga i roto.

I te mea kua whakahou koe i ngā wāhi o ngā wāhi, ka taea e koe whakamārama i te mahi (action) akua.
