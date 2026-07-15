---
title: Multi-Tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-Tenancy Hostinger

Ultimate Multisite: Multi-Tenancy 1.2.0 shtronë një aftësi multi-tenancy nga Hostinger, që lejon domenët e hostuar të marrin pjesë në provizimin e qirave (tenant) soveraine së bashku me integrimin ekzistues të mapimit të domenit Hostinger.

Përdorni këtë aftësi kur menaxhoni domenët e qirave dhe infrastrukturën e izoluar të tyre përmes hPanel-it të Hostinger.

## Nota për konfigurimin {#setup-notes}

1. Konfigurojeni integrimin bazë të Hostinger në **Ultimate Multisite > Settings > Host Integrations**.
2. Sigurohuni që tokeni API i Hostinger mund të menaxhojë domenit ose subdomainin target.
3. Aktivizoni addon-in Multi-Tenancy.
4. Konfigurojeni strategjinë e izolimit të qirave para se ta publikoni qirën (tenant).
5. Ekzekutoni workflow-in e verifikimit të migrimit para se dërgoni trafikun e prodhimit te qira.

Aftësia Hostinger përdor lidhjen e përbashkët të Hostinger për operacionet në mbarë (host-side). DNS duhet ende të tregojë në llogarin Hostinger të saktë, dhe kufizimet e llogarisë hPanel vazhdojnë të aplikohen.

## Ndryshime specifike për aftësinë {#capability-specific-changes}

- Qirat soveraine mund të krijohen me operacione domenit që janë të njohura nga hosti (host-aware).
- Stringjet e hostit të bazës së të njëjtës makinë normalizohen para se të lejohet verifikimi.
- Qirat e menaxhuara nga Hostinger duhet të përdorin vlerën e hostit të bazës që shfaqet në hPanel, përveçse mjedisi WordPress kërkon një sovrasip lokal (local override).
- Vizitat SSO mbështeten te rezolucioni i domenit të qirës te qira e hostuar nga Hostinger.

## Zgjidhja e problemeve për qirat Hostinger {#troubleshooting-hostinger-tenants}

- Nëse instalimi i një qire dështon, verifikoni nëse domeni është tashmë bashkëngjitur me llogarin Hostinger.
- Nëse verifikimi i bazës së të dhënave (database) dështon, krahasoni emrin e përdoruesit të bazës së qirës, emrin e bazës dhe lidhjen e hostit me hPanel.
- Nëse **Visit (SSO)** dështon, konfirmoj se DNS dhe SSL janë aktive për domenit të qirës.
- Nëse fshirja (teardown) lë pas mbarime të hostit, hiqni çdo bazë të dhënash, përdorues ose folder që mbetet nga hPanel pasi ta konfirmoj rezervat e bëra (backups).
