---
title: Workflow ta Migrazzjoni Sovranija
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow Migrazzjon Sovran

Ultimate Multisite: Multi-Tenancy 1.2.0 aggi sistemi verifikazzjoni għall-migrazzjoni biex tinqel subsite standard għal infrastruttura tal-tenant sovran.

## Qabel ma tibda

Konferma li għandek:

- Backup attwali tal-sajt sorgenti.
- L-addon Multi-Tenancy huwa aktiv.
- Il-database tal-tenant destinazzjoni, root tal-filesystem, u id-dominju huma pronti.
- Binding tal-host tal-database li jidher (binding) jittlaq mal-ambiente destinazzjonat.
- Aċċess biex tgħidu WP-CLI commands għall-network.

## Workflow mġiegħt għal-irsekuzzjoni

1. Ipprepara il-database tal-tenant u l-filesystem destinazzjonati.
2. Iscrivi jew aġġenna is-setting tal-isolazzjoni tal-tenant.
3. Esegwi l-migrazzjoni tal-tenant.
4. Prossivi jew verifika l-utenti tal-tenant.
5. Svuota (drain) il-jobs ta migrazzjoni asinċrona.
6. Esegwi verifikazzjoni tal-migrazzjoni sovran.
7. Visita il-tenant b SSO.
8. Switch id-DNS jew l-routing *għandu* jipprovvdi *għodda* lill-verifikazzjoni.

## Portali ta verifikazzjoni (Verification gates)

Il-workflow tal-verifikazzjoni jikkontrolla l-migrazzjoni min żiel ħafna angoli:

- Il-schema tal-tenant huwa esiste u jista' jiwtiġib bil database writer tal-tenant.
- L-host tal-database konfigurat għandu grants validi.
- L-utenti tal-tenant huma presenti u jidduq mal-għadd ta l-utenti tal-installazzjoni sovran attar.
- Il-queue ta push asinċrona tista' tasvuota b'mod stabbli.
- Il-data paths legati għall-network li huma legacy ma għandux jkun għal tenant sovran.

Trattja l-fallijiet tal-verifikazzjoni bħala bloker pre-launch. Ipprova l-problema tal-database, utent, queue, jew routing li qed tinrappreża, u phirri verifika min id-nuqba qabel ma tixponi il-tenant lil kliementi.

## Visita prodduzzjonali l-prima

Wara ma jittlaq il-verifikazzjoni, uża **Visit (SSO)** mill-screen tal-gestjoni tal-sajt għall-visita amministrattiva l-prima. Dan jkonferma l-routing tal-tenant, it-trattament tal-token SSO, in-pinning tal-origin, u il-provisioning tal-utenti tal-tenant f un step kontrollata.
