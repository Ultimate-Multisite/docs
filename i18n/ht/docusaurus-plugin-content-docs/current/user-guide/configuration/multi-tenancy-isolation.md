---
title: Izolasyon Multi-Tenant
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolasyon Multi-Tenancy (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 aksepte izolasyon bazabase ak dosyer pou chak sous-site pou yon moun ki gen kont pou yo. Sa kenbe done tenant yo sepà pandan ou kenbe disponiblite rezo, faktirizasyon, ak administrasyon la menm jan an.

## Estrateji Isolasyon (Isolation strategy) {#isolation-strategy}

Itilize izolasyon souveren (sovereign isolation) pou kliyan ki bezwen separasyon done pi fò, estoke dosyer dedye, oswa yon limitèjwenn (host boundary) sepandan.

Chak tenant souveren dwe gen:

- Yon bazabase tenant dedye oswa yon estrateji prefiks bazabase ki ap aprann pou host la.
- Yon root dosyer sistèm (filesystem root) tenant dedye.
- Yon entri registry tenant ki mapite sit la ak bazabasan li, chemen root, non anviwònman (hostname), epi modèl izolasyon an.
- Yon rezilta verifikasyon migrasyon anvan yo konsidere tenant la kòm aktif (live).

## Liyye Host Bazabase (Database host binding) {#database-host-binding}

Vèsyon 1.2.0 chanje konpòtman default liyye host menm makin pou enstalasyon souveren. Valè menm makin tankou `localhost` yo normalize souvan, sa k fè Bedrock, FrankenPHP, ak WordPress ki gen kontyènerize ka bay epi verifi pèmisyon an kont string host MySQL la de reyalman.

Lè ou ap konfigire yon tenant souveren:

1. Mete host bazabasan a nan valè ki nesesè pa runtime tenant la.
2. Itilize `localhost` pou enstalasyon socket lokal lè host la ap tann koneksyon lokal.
3. Itilize `127.0.0.1` oswa non anviwònman sèvis (service hostname) sèlman lè sèvè bazabasan a bay privilèj a host sa a.
4. Fè verifikasyon migrasyon apre ou fin chanje liyye host la.

Si verifikasyon yo rapòte échec bay pèmisyon, konpare bay pèmisyon itilizatè bazabasan tenant la ak liyye host ki te configure a. Yon itilizatè ki bay pou `user@localhost` se diferan de `user@127.0.0.1` oswa `user@%`.

## Root Dosyer Sistèm (Filesystem root) {#filesystem-root}

Root du locataire (tenant root) dobe stable apre les redémarrages et les déploiements. Evite les chemins de montage temporaires. Pouvwa konfime ke root du locataire ap pointe nan web root WordPress ki espere pa tenant bootstrap la, epi pa sèlman root pwojè a.

## Ordre pwovizyon (Provisioning order) {#provisioning-order}

Pou nouvo locataires souverens, itilize sa lòd la:

1. Kreye entri registry locataire a.
2. Kreye baz done (database) ak itilizatè baz done a.
3. Bootstrap skema locataire a.
4. Pwoyoneit itilizatè locataire yo.
5. Konfigire chemen fiches sistèm (filesystem paths) locataire la.
6. Fè verifikasyon migrasyon an.
7. Chanje routage oswa DNS apre verifikasyon pase.

Lòd sa a ap anpeche locataires ki pa konplèman isolate yo resevwa trafik anvan ekriye baz done, itilizatè yo, ak fiches sistèm yo pare.

## Flèm jere kliyan souverens (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 kenbe aksyon jere kliyan yo sou sit prensipal la lè mode souverain anki enbleme. Yon locataire ka toujou mache kòm yon instalasyon WordPress isolate, men aksyon ki gen rapò ak kliyan ki depann sou fakturaj rezo a (network billing), membraz, oswa done kont ki pataje yo dwe renmen mande kliyan an tounen sit prensipal la olye pou eseye konplè aksyon anndan itilize locatè a.

Flèm sit prensipal la ap aplike pou:

- Chwazi (Checkout) ak chanjman plan.
- Oversijon kont ak aksyon profil kliyan yo.
- Mete adrès faktiraj ak ekran jere peman an.
- Vwa faktura ak istwa peman.
- Aksyon jere sit tankou ajoute sit oswa detwi yon sit.
- Chanje template (Template switching).
- Map domèn (Domain mapping) ak chanjman domèn prensipal la (primary-domain changes).

Lè yon kliyan kòmanse yon aksyon nan youn nan sa yo soti nan yon tenant souveren (sovereign tenant), Ultimate Multisite pral bati URL sit la prensipal an menm epi li pral kenbe tenant sou tè a kòm yon destinasyon pou retounen lè sa se an sekirite. Sa pèmèt kliyan an fini aksyon ki jere a kont rekò rezo yo, epi retounen nan kontèks tenant la san ou pa duplike eta faktouring oswa manm nan baz done souveren an.

Pou operatè yo, règ pratik la se: kenbe paj faktouring (billing), kont (account), checkout, faktura (invoice), template, ak jere domèn (domain-management) disponib sou sit prensipal la pou rezo souveren yo. Panèl tenant yo ka konekte nan paj sa yo, men sit prensipal la rete la sansyon (source of truth) pou aksyon an.
