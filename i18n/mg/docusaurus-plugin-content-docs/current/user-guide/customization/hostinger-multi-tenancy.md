---
title: Multi-Tenancy an'ny Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-Tenancy an' Hostinger

Ultimate Multisite: Multi-Tenancy 1.2.0 dia mampisana fahaizana multi-tenancy an' Hostinger, izay ahafahana manao fanomezana tenant sovereignty (tenant manokana) miaraka amin'ny fandraisana anjara ao amin'ny fandaminana domain anananareo efa misy.

Ampiasao ity fahaizana ity rehefa fitantanana ny domain an'ny tenant sy ny fototra infrastructure an'ilay tenant dia ataon'ny Hostinger hPanel.

## Fanamarihana fanamboarana (Setup notes) {#setup-notes}

1. Ampidiro ny integration Hostinger fototra ao amin'ny **Ultimate Multisite > Settings > Host Integrations**.
2. Fantaro fa azo atao ny token API an'Hostinger mba hitantana ilay domain na subdomain tiana.
3. Ampirisihina (Enable) ny addon Multi-Tenancy.
4. Ampidiro ny paikady fanisana (isolation strategy) ho an'ny tenant alohan'ny famoahana azy.
5. Atao ny workflow verification migration alohan'ny handefasana traffic amin'ny tontolo iainana (production traffic) ho an'ilay tenant.

Mampiasa ny connection Hostinger miaraka dia ampiasaina amin'ny asa eo amin'ny lafiny server (host-side operations) ity fahaizana ity. Na izany aza, tsy maintsy mitondra ny domain mankany amin'ny kaontry Hostinger marina ianao, ary mbola misy fetran'ny kaontry hPanel.

## Fiovana mifandraika amin'ny fahaizana manokana (Capability-specific changes) {#capability-specific-changes}

- Azo ataon'ny tenant sovereignty izay manana asa domain miankina amin'ny host (host-aware domain operations).
- Ny string an'ny database host ao amin'ny solosaina mitovy dia voamarina alohan'ny fanamarinana.
- Ireo tenant vitan'i Hostinger dia tokony hampiasa ny sandan'ny host database haseho ao amin'ny hPanel raha tsy mitaky famerenana eo anivon'ny WordPress runtime (WordPress runtime) fampanomezan-dalana manokana (local override).
- Ny fitsidihana SSO dia miankina amin'ny domain an'ilay tenant izay mandroso ho ao amin'ny tenant vitan'i Hostinger.

## Fandresena ny tenant Hostinger (Troubleshooting Hostinger tenants) {#troubleshooting-hostinger-tenants}

- Raha tsy mandeha ny fametrahana tenant iray, jereo raha efa voampiana ny domain tamin'ny kaontry Hostinger.
- Raha tsy mandeha ny fanamarinana database, dia apetraho ao anatin'ny hPanel ny anaran'ny mpampiasa (username), anaran'ny database ary ny fifandraisana amin'ny host (host binding) an'ilay tenant.
- Raha tsy mandeha ny **Visit (SSO)**, dia avereno antoka fa misy DNS sy SSL ho an'ilay domain an'ilay tenant.
- Raha miala ny loharanon-tsaina (teardown) ireo loharanon-tsaina (host resources), dia esory izay database, mpampiasa (users) na folder sisa ao amin'ny hPanel aorian'ny fanamarinana ny backup.
