---
title: Verifika Migrazzjoni Sovrana
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifika Migrazzjon Sovran {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 inclúi komandi verifikazzjoni WP-CLI għall migrazzjonijiet ta tenant sovran. Użahom meta migrazzjoni ta tenant, żiżita SSO, jew installazzjoni isolata ma jaffarix b'mod attesa.

## Komandi li għandek tqessi {#commands-to-run}

Esegui verifikazzjoni mill-installazzjoni WordPress fuq la-rete:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Uża l-ID ta'sito għall tenant li qed tmigrazzja. Il-komanda l-prima tqesser li il-tenant ma jippurizzja aktar ma data legacy tal-rete. Il-komanda terza tverifika li jobs ta sovereign push jistgħu jiġu proċessati u jiġu sfumati (drain).

## Fallimenti comuni {#common-failures}

### Grantijiet tal-database ma jidukqux mal-host {#database-grants-do-not-match-the-host}

Meta verifikazzjoni tipporta fallimenti fil-grant o fil-writer-user, tqesser l-host tal-database konfigurat. `localhost`, `127.0.0.1`, u ism servizz container huma host MySQL grant differenti. Iġibrilu (update) il-binding tal-tenant host jew il-grantijiet tal-database, u ririgji l-verifikazzjoni.

### Bedrock jew installazzjonijiet lokali ma jistgħux jiġu konnessi {#bedrock-or-local-installs-cannot-connect}

Bedrock u installazzjonijiet socket lokali jiddisagwirt id-database b'localhost meta l-runtime jkonnet per id-indirizz address normalizzat. Versjoni 1.2.0 tnorma l-string host tal-maħsuba fuq ma' s-sistemi, iżda override host kustom jistgħu jipparxju mal-grantijiet tal-database.

### Il-async push queue ma jiġi sfumata (drain) {#async-push-queue-does-not-drain}

Meta `verify-sovereign-push` ma tcommenxixx, tqesser Action Scheduler jew l-runner async konfigurat. Tnaqqis il-jobs fejgħu biss wara li ti jkun siguri biex titrova (retry) jew tixgħlu (discard).

### Il-numru ta'utenti tal-tenant huwa xieq {#tenant-user-count-is-wrong}

Il-migrazzjoni għandha tipprovvidi utenti għall tenant sovran. Meta l-installazzjoni esperta tal-utenti m'għadd, ririgji l-istep tal-provisioning tal-utenti qabel ma titrova SSO.

### Żiżita SSO tiddirja (rejected) {#sso-visit-is-rejected}

B'istella l-logħin autogenerat għall-tenant li ma jgħidu xogħol (stateless tenant), jekk il-domain tal-tenant, il-origin pin, il-token purpose, il-nonce u l-expiry la jgħandu. Jiddeq il-URL tal-tenant huwa korrett u jipprovdi l-logħin qrib minn meta jgħidu l-SSO visit.

## Meta tista' tiġi riprova {#when-to-retry}
Riprova verifikazzjoni dopo kada fattura infrastrutturali. Ma tgħmliwx switch għat-traffic ta produċjoni, ma tal-delet tal-dati diġuni sorsa, u ma tal-eliminazzjoni tal-credentials ta migrazzjoni fin ma jgħandu l-koll tal-verifikazzjoni.
