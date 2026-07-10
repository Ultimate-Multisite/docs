---
title: Enrejistre yon Kont kòmanse ak Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Even: Regiz yon kont avè Google Sheets ak Zapier {#event-register-an-account-via-zapier}

Nan artikel la [Integrating Ultimate Multisite with Zapier](zapier.md), nou te pale kijan pou itilize Zapier pou fè diferan aksyon nan Ultimate Multisite baze sou triggers ak events. Nan tèks sa a, nou pral montre w kijan ou ka mete aplikasyon twazyèm pati yo anba yon sistèm. Nou pral itilize Google Sheets kòm sous done epi voye enfòmasyon an nan Ultimate Multisite pou rezoud kont.

Anvan ou konekte Zapier, ale nan **Ultimate Multisite > Settings > API & Webhooks** epi konfime ke API a aktif. Kopi API Key ak API Secret yo soti nan ekran sa a lè Zapier mande kredansyèl kont Ultimate Multisite la.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Premye bagay ou bezwen se kreye yon **Google Sheet** anba Google Drive ou a. Asire w define chak kolòn byen pou ou ka map done yo fasil pi l ap fè la.

Malgre ou fin kreye yon Google sheet, ou ka konekte kont Zapier ou epi kòmanse kreye yon zap.

Anba chèf rechèch pou **"App event"**, chwazi **"Google Sheets"**.

Lè sa a, pou fye nan fld "**Event** ", chwazi "**New spreadsheet row** " epi klike sou "**Continue** ".

Etap answit la pral mande ou chwazi yon **Google Account** kote **Google Sheet** la ki sanble. Se pou w asire ke bon kont Google a spesifye.

Anba **"Set up trigger** ", ou pral bezwen chwazi epi spesify Google spreadsheet ak worksheet ou pral itilize kote done yo ap vini. Senplike, kontinye ranpli sa e klike sou "**Continue** ".

Etap answit la se pou w "**test your trigger** " pou asire ke Google sheet ou a konekte byen.

Si test ou reyisi, ou ta dwe wè rezilta ki montre kèk valè soti nan spreadsheets ou yo. Klike sou "**Continue** " pou kontinye.

L'étape suivante consiste à configurer la deuxième action qui va créer ou enregistrer un compte dans Ultimate Multisite. Dans le champ de recherche, sélectionnez "**Ultimate Multisite(2.0.2)** ".

Sous le champ "**Event** ", sélectionnez "**Register an Account in Ultimate Multisite** " puis cliquez sur le bouton "**Continue** ".

Sous "**Set up an action** ", vous verrez différents champs disponibles pour les données clients, les abonnements, les produits, etc. Vous pouvez faire correspondre (mapper) les valeurs dans votre Google Sheet et les assigner au bon champ où elles doivent être remplies comme montré dans la capture d'écran ci-dessous.

Après avoir fait le mapping des valeurs, vous pourrez tester l'action.
