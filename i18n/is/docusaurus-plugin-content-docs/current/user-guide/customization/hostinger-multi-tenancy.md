---
title: Hostinger Multi-Tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 íðurkennaðar Hostinger multi-tenancy möguleika, sem gerir því að hostaðir domænir geta teilast sjálfstæðum leitum (tenant provisioning) á sama tíma sem núverandi viðbótun fyrir domén-mappingu Hostinger.

Notið þennan möguleika þegar leitandi domænir og sjálfstæð leitandi innri kerfi eru stýrt með Hostinger hPanel.

## Notat til uppsetningar

1. Stillingi kjarna Hostinger viðbótunar undir **Ultimate Multisite > Settings > Host Integrations**.
2. Staða þess að Hostinger API token geti stýrt lánandi domæni eða subdomain.
3. Skilið Multi-Tenancy viðbótuna (addon).
4. Stillingi að leiðarstefnu fyrir leitandi áður en leitandi er útsettur (published).
5. Kjarnafærslufarferðina (migration verification workflow) þarf að ganga í gang áður en framkvæmdarferli verða sendar til leitandans.

Hostinger möguleiki notar sama Hostinger tengingu fyrir verkefni á host-síðuna. DNS þarf enn að stýra til rétta Hostinger reikning, og takmarkanir hPanel reiknings eru framkvæmdar.

## Breytileikur skipti í möguleika

- Sjálfstæð leitandi geta verið sköpt með domén-áhrifum sem eru kjarnafærðar (host-aware).
- Samsamaþættir stafræn steypum fyrir host-stringur á sama kerfi er normlaga áður en leiðarstefna er staðfest.
- Leitandi sem er stýrt af Hostinger þarf að nota database host gildi sýnt í hPanel, nema WordPress runtime krefte lokala úverðunar (override).
- SSO leikningar byggja á því að leitandi domén geti leiða til Hostinger-hostaða leitandans.

## Feilfellingar fyrir Hostinger leitandi

- Ef install leitandi missar, staðfestu að domæni sé ekki eingöngu viðbótt til Hostinger reiknings.
- Ef staðfesting databaseins missar, samanbeita notendann DBs, nafn DBs og host binding með hPanel.
- Ef **Visit (SSO)** missar, staðfestu að DNS og SSL séu á hjá leitandi doméni.
- Ef afskjálfurferli missar host orkustöðvar bakandi, fjörðu alla eftirbætur databaseins, notenda eða foldra í hPanel eftir að staðfesta bakanda.
