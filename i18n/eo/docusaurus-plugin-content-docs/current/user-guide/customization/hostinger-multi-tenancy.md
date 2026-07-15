---
title: Hostinger Multitenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 donas uma kapasite de multi-tenancy Hostinger, ki domeno ospresentil povas partoprenui en provizio de tenanto sovraj (sovereign tenant) koin kun la ekzista integriĝo de mapado de domen Hostinger.

Uzu ĉi ti kapasite, kiam tenanto domenoj kaj izolita infrastrukturaj sistemoj estas administritaj per Hostinger hPanel.

## Notoj pri montro (Setup notes) {#setup-notes}

1. Konfiguru la bazan integracion de Hostinger sub **Ultimate Multisite > Settings > Host Integrations**.
2. Konfirme, ke la Hostinger API token povas administri la celan domenon aŭ subdomainon.
3. Aktivu la addon Multi-Tenancy.
4. Konfiguru la strategion de izolado de tenanto antaŭ publikigi la tenanton.
5. Rajnu la flujon de verifikado de migrado (migration verification workflow) antaŭ enviigi produkcion trafikon al la tenanto.

La Hostinger kapasite uzas la partilan konekton de Hostinger por operaciaj akcioj de la hosto. DNS devas tutplene pointedigi al la ĝusta konto de Hostinger, kaj limitoj de la konto hPanel estas tutplene aplikeble.

## Alteroj specifaj por kapasitoj (Capability-specific changes) {#capability-specific-changes}

- Sovraj tenantoj povas esti kreitaj kun domeno operacioj komprenant la hoston.
- La stringoj de bazan hosto de la bazado per la sama makina estas normalizita antaŭ doni verifikadon.
- Hostinger-administritaj tenantoj devas uzi la valor de la bazan hosto, kiun oni vidas en hPanel, mal se la WordPress runtime postulas lokalan sovridon (local override).
- SSO vizitoj dependas de ke la domeno de la tenanto resolvas al la Hostinger-administritita tenanto.

## Problemoj pri Hostinger tenantoj (Troubleshooting Hostinger tenants) {#troubleshooting-hostinger-tenants}

- Se instalado de tenanto ne funkcias, verifimu, ke la domeno estas 이미 atachita al la konto de Hostinger.
- Se bazan verifikado ne funkcias, kompare la nombone de la baza datum de la tenanto, la nomon de la baza datum, kaj la host binding kun hPanel.
- Se **Visit (SSO)** ne funkcias, konfirme DNS kaj SSL estas aktiva por la domeno de la tenanto.
- Se demontado labos host resurs post la konfirmado de rezervoj (backups), forigu ĉian restan bazdon datumojn, uzantojn aŭ vortarojn el hPanel.
