---
title: Manangana kaonty amin'ny alalan'ny Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Oritaka: Manao ka kaontana amin'ny alalan'ny Zapier

Ao anatin'ilay lahatsoratra [Integrating Ultimate Multisite with Zapier](zapier.md), dia nolazainay ny fomba fampiasana Zapier mba hanaovana asa samihafa ao amin'ny Ultimate Multisite mifototra amin'ny trigger sy ny zava-nitranga (events). Amin'ity lahatsoratra ity, dia haseho antsika aho fa afaka mampifandray rindrambaiko avy any ivelany isika. Hampiasa Google Sheets ho loharanon'ny data ary hisomehezina ireo vaovao ho amin'ny Ultimate Multisite mba hamoronana kaonty.

Alohan'ny mifandray amin'ny Zapier, mandehin-doha ao amin'ny **Ultimate Multisite > Settings > API & Webhooks** ary avereno ny fanamafisana fa voafahana ny API (API is enabled). Apetraho eo amin'ity écran ity ny API Key sy API Secret rehefa mangataka ny fampahalalana momba ny kaonty Ultimate Multisite i Zapier.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Voalohany, mila mamorona **Google Sheet** ianao ao amin'ny Google Drive anao. Ataovy antoka fa voafaritra tsara ny tsirairay amin'ireo kolona (columns) mba hahafahana manova ny data mora kokoa aorian'izay.

Aorian'ny famoronana Google sheet, afaka miditra ao amin'ny kaontina Zapier anao ianao ary manomboka mamorona zap iray.

Ao anatin'ny fampahafantarana (search field) ho an'ny **"App event"**, safidio ny **"Google Sheets"**.

Avy eo, ho an'ilay toerana hoe "**Event**", safidio ny "**New spreadsheet row**" ary tsindrio ny "**Continue**".

Ny dingana manaraka dia hanontany anao mba hisafidianana **Google Account** izay misy ny **Google Sheet** voatahiry. Ka dia ataovy antoka fa ny kaonty Google marina no voasafidy.

Ao anatin'ny **"Set up trigger"**, mila safidy sy manome antsipiriany ianao momba ny google spreadsheet sy ny worksheet izay hampiasainao izay avy any amin'izay data ho tonga. Aza misalasala, vinanso feno ireo zavatra ireo ary tsindrio ny "**Continue**".

Ny dingana manaraka dia ny "**test your trigger**" mba hahazoana antoka fa mifandray tsara ny google sheet anao.

Raha nahomby ny test-nao, dia tokony ho hitanao ny vokatra mampiseho ny sandan'ny data avy amin'ireo spreadsheet anao. Tsindrio ny "**Continue**" mba handefasana azy.

Ny dingana manaraka dia ny fametrahana ny asa faharoa izay hamoronana na hanisana kaonty ao amin'ny Ultimate Multisite. Eo anelanelan'ny toerana fikarohana (search field), safidio hoe "**Ultimate Multisite(2.0.2)** ".

Eo ambanin'ny sehatry ny "**Event** ", safidio hoe "**Register an Account in Ultimate Multisite** " dia tsindrio ny bokotra "**Continue** ".

Eo ambanin'ny "**Set up an action** ", dia hahita sehatra samihafa azo atao ho an'ny angona mpanjifa, fandraisana (memberships), vokatra, sns. Afaka mifandray (map) ireo sandan'ny Google Sheet anareo ary manome azy ireo amin'ny toerana mety indrindra izay tokony ho voasoratra izy araka ny miseho ao amin'ilay sary etsy ambany.

Rehefa vita ny fifandraisana ireo sandana, dia afaka manandrana (test) ilay asa ianao.
