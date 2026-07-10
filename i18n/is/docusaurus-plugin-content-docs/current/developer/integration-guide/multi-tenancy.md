---
title: Samþætting fjölleigjenda
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy samþætting {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 breytir nokkrum samþættingarsnertiflötum fyrir sjálfstæða leigjendur, staðfestingu flutnings og sjálfvirkni lífsferils leigjanda.

## Ræsingarflæði leigjanda {#tenant-bootstrap-flow}

Samþættingar sem búa til eða breyta leigjendum ættu að fylgja þessari röð:

1. Finna færslu leigjanda í skrá og einangrunarlíkan.
2. Búa til eða staðfesta gagnagrunnsritara leigjanda.
3. Ræsa skema leigjanda.
4. Úthluta notendum leigjanda.
5. Skrá beiningu leigjanda og slóðir í skráarkerfi.
6. Keyra staðfestingu flutnings áður en leigjandinn er gerður aðgengilegur.

Ekki gera ráð fyrir að sjálfstæður leigjandi geti endurnýtt gagnagrunnstengingu netsins. Notaðu leigjandaskrána og ritaraútdrættina sem viðbótin útvegar.

## SSO og REST krókar {#sso-and-rest-hooks}

Ástandslaus sjálfvirk innskráning leigjanda notar skammlífa tóka með tilgangskröfu, JTI vörn gegn endurspilun, hámarki á gildistíma og festingu uppruna. Samþættingar sem bæta við innskráningarhnöppum eða fjartenglum fyrir stjórnun ættu að búa til heimsóknir leigjanda í gegnum studda SSO flæðið í stað þess að smíða innskráningarslóðir leigjanda beint.

API endurskoðunaratburðir á netshlið og daglegar samantektir eru tiltækar fyrir gáttir sjálfstæðra leigjenda. Notaðu þær skrár þegar þú villuleitar ytri kerfi sem kalla á endapunkta lífsferils leigjanda.

## Vefslóðir aðgerða sjálfstæðra viðskiptavina {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 beinir aðgerðum viðskiptavina sjálfstæðra leigjenda aftur á aðalsíðuna fyrir Account, checkout, reikninga, reikningagerð, síðu, skipti á sniðmáti og lénakortlagningarflæði. Samþættingar sem birta stjórnunartengla á leigjandahlið ættu að vísa þessum aðgerðum á viðskiptavinaborð aðalsíðunnar og innihalda staðfest endurkomumarkmið þegar notandinn á að geta farið aftur til leigjandans eftir að aðgerðinni er lokið.

Notaðu kjarna SSO umbúðina fyrir stjórnunartengla milli léna:

```php
$url = wu_with_sso($main_site_customer_url);
```

Myndaða vefslóðin er áfram síanleg í gegnum `wu_sso_url`, sem fær SSO vefslóðina, núverandi notanda, auðkenni marksíðu og endurbeiningarsamhengi. Viðbætur geta notað þá síu til að bæta við samhengisupplýsingum sértækum fyrir veitanda eða til að skipta út miðlaraslóðinni á meðan staðfestingu Ultimate Multisite á tókanum er varðveitt.

Ekki tvítaka stöðu aðildar, reiknings, reikningsfangs, sniðmáts eða lénastjórnunar inni í sjálfstæða leigjandanum. Líttu á stjórnborð leigjandans sem ræsiforritið og viðskiptavinaborð aðalsíðunnar sem kerfið sem heldur utan um skráðar upplýsingar fyrir stýrðar aðgerðir.

## Staðfesting flutnings {#migration-verification}

Eftir að flutningur eða lífsferilssamþætting breytir gögnum leigjanda skaltu keyra staðfestingarhliðin:

- `wp tenant verify-no-legacy --site=<site-id>` staðfestir að leigjandinn sé ekki lengur háður eldri slóðum á netshlið.
- `wp tenant verify-sovereign-push --site=<site-id>` staðfestir að sjálfstæð ýtiverk geti unnið og tæmst.

Samþættingar ættu að líta á misheppnaða staðfestingu sem hindrun fyrir útgáfu og forðast að merkja leigjanda sem virkan fyrr en bilunin hefur verið leyst.

## Eyðing leigjanda {#tenant-deletion}

Eyðingarflæði ættu að kalla á niðurrifsleið viðbótarinnar svo gagnagrunnsskilríki leigjanda séu hreinsuð. Ytri samþættingar mega fjarlægja tilföng veitanda eftir að niðurrif tekst, en ættu ekki að eyða hýsilgagnagrunnum eða möppum á meðan staðfesting eða ósamstillt ýtiverk eru enn í gangi.

## Úreltur gagnagrunnsbeinir {#deprecated-database-router}

Eldri `Database_Router` hefur verið skipt út fyrir úreldingarstub. Nýjar samþættingar ættu að finna leigjendur í gegnum núverandi síðubeini og API leigjandaskrár í stað þess að treysta á gamla beiniklasann.
