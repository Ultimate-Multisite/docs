---
title: Gukoresha akaonto ku Ubwumvikane bwa Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Fani: Kumenya akaunti bishobora ku itangira bishobora n'amafunzo (Zapier) {#event-register-an-account-via-zapier}

Mu ndimi y'urugero [Integrating Ultimate Multisite with Zapier](zapier.md), twagushoboraga uko utangira Zapier kugira ngo ugerageza ibisubizo bitandukanye mu Ultimate Multisite aho ugiye ku byerekezo n'ibindi byerekezo (triggers and events). Mu ndimi y'urugero iryo, twakwibanda uko wiyemo amafunzo y'abantu b'ibindi. Tworera gukoresha Google Sheets nk'ubushobozi bw'ubwoko kandi twagufi ibyerekezo ku Ultimate Multisite kugira ngo yitangire akaunti.

Mbere yo gutanga Zapier, gukora **Ultimate Multisite > Settings > API & Webhooks** kandi ugufi ko API iri mu gihe cyo. Gukoresha API Key n'API Secret ushobora kumenya ku igice cyo cyane iyo Zapier yugushobora kugira ngo uburyo bwo gutanga akaunti ya Ultimate Multisite.

![Settings za API na Webhooks n'API Key, API Secret, n'Uburyo bwo gukoresha API](/img/admin/settings-api-webhooks.png)

Mbere, ugomba gukora **Google Sheet** mu Google Drive yawe. Ugingize ibyo byiza ku gihe cyose kugira ngo ugerageze gukoresha data mu buryo bw'ubwoko.

Icyiza cyangwa ukora Google sheet, ushobora gutangira akaunti ya Zapier yawe kandi ugomba gutangira gukora zap (zap).

Mu igice cyo cyo kumenya **"App event"**, gukoresha **"Google Sheets"**.

Kandi mu gihe cyo cyo cyo **"Event"**, gukoresha **"New spreadsheet row"** kandi ugomba gukora **"Continue"**.

Icyo cy'ingenzi cyangwa ikindi cyo ni ukwumva **Google Account** aho Google Sheet yari yagutse. Ugingize uburyo bwo gutangira akaunti ya Google yiza.

Mu gihe cyo cyo kumenya **"Set up trigger"**, ugomba gukoresha kandi kugufi Google Spreadsheet n'worksheet (tab) wiyumva ko data izabona aho izagera. Ugingize ibyo byiza kandi ukora **"Continue"**.

Icyo cyangwa ikindi ni **"test your trigger"** kugira ngo ugerageze ko Google Sheet yawe yari yagutse neza.

Niba uburyo bwo gutestya bwagize umwanya, uza kubona ibisubizo byerekana ibyo byose bigize mu spreadsheet zawe. Gukora **"Continue"** kugira ngo utangire.

Icyo ni igikorwa cyiza kenshi. Icyo ukora ni gukora ikoranabuhanga cy'ingenzi (action) ya kabiri itangira gukora cyangwa gukoresha aka kanya mu Ultimate Multisite. Mu search field, ugomba gukoresha "**Ultimate Multisite(2.0.2)** ".

Hano ku field "Event", ugomba gukoresha "**Register an Account in Ultimate Multisite**" kandi ukora button ya "**Continue**".

Mu field "Set up an action", uza kubona amakuru y'ibyo mu gihe cyangwa ibyo mu gihe cyangwa ibyo mu byerekeye umuntu (customer data), memberships, products, n'ibindi. Uzi gukoresha amakuru yawe mu google sheet kandi ugomba kuyagize ku field igitekerezo cyangwa igice cyiza cyo gukorera mu kintu cyiza nk'uko urimo gushobora kubona mu screenshot yacu hano.

Nyuma yo gukora uburyo bwo gukoresha amakuru, uza kuba ufite ubushobozi bwo gushyira umwanya (test) iyo action yawe.
