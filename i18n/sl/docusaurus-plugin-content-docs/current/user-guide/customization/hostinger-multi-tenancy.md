---
title: Multi-tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 dodaje možnost multi-tenancy Hostingerja, ki omogoča, da lahko hostirani domene vstopijo v proces ustvarjanja suverenih tenentov obravnavan skupaj z obstoječo integracijo mapiranja domen Hostingerja.

Uporabite to možnost, če upravljate domene tenentov in izolirano infrastrukturo tenentov preko Hostinger hPanel-a.

## Opombe za nastavitve {#setup-notes}

1. Konfigurišite osnovno integracijo Hostingerja pod **Ultimate Multisite > Settings > Host Integrations**.
2. Potrdite, da je Hostinger API token v stanie upravljati ciljni domen ali poddomen.
3. Vklopite dodatek Multi-Tenancy.
4. Konfigurišite strategijo izolacije tenentov pred objavo tenenta.
5. Preden pošljete produkcijski promet k tenentu, izvedite workflow za preverjanje migracije.

Hostinger možnost uporablja deljeno Hostinger povezavo za operacije na strani hosta. DNS mora še vedno usmerjati na pravi Hostinger račun, in omejitve računa hPanel se še vedno nanašajo.

## Zmene specifične za možnost {#capability-specific-changes}

- Suverene tenente lahko ustvarite z domenami, ki so obveščeni o hostih.
- Stringovi hosta baze podatkov na isti strani sta normalizirani pred potrditvijo dostopa.
- Tenenti upravljani Hostingerjem morajo uporabljati vrednost hosta baze podatkov prikazano v hPanel, razen če WordPress runtime zahteva lokalno nadomestitev.
- Obrazenia SSO se oslanjajo na to, da domen tenenta razrešuje na tenenta hostiranega Hostingerja.

## Reševanje težav z Hostinger tenenti {#troubleshooting-hostinger-tenants}

- Če ne uspe instalacija tenenta, preverite, ali je domen že pripisan k računu Hostingerja.
- Če potrditev baze podatkov ne uspe, primerjte uporabnika baze podatkov, ime baze podatkov in host binding s hPanelom.
- Če **Visit (SSO)** ne uspe, potrdite, da so DNS in SSL aktivni za domen tenenta.
- Če je odpravljanje iz črpanja ostalo host resurse, odstranite vse preostale baze podatkov, uporabnike ali foldere iz hPanel nakon potrditve rezervacij.
