---
title: Uthibitishaji wa Migrasi ya Uhuru
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Ukaguzi wa Migrasi ya Sovereign {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 inajumuisha amri za uthibitishaji (verification commands) za WP-CLI kwa migrasi ya wateja (tenants) wa sovereign. Tumia hizo wakati migrasi ya mteja, ziara ya SSO, au usakinishaji wa kuzungumza (isolated install) haifanyi kama inavyotarajiwa.

## Amri za kutekeleza {#commands-to-run}

Endesha uthibitishaji kutoka kwenye WP install ya mtandao:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Tumia ID ya mteja unaomigrasa. Amri ya kwanza inachunguza kwamba mteja haujitegemei tena kwenye data za zamani za mtandao (legacy network-side data). Amri ya pili inathibitisha kwamba kazi za sovereign push zinaweza kuchakata na kutolewa (drain).

## Makosa ya kawaida {#common-failures}

### Hali za database hazifanani na host {#database-grants-do-not-match-the-host}

Ikiwa uthibitishaji unaonyesha makosa ya grant au writer-user, angalia host iliyowekwa ya database. `localhost`, `127.0.0.1`, na jina la huduma ya container ni tofauti kwa host za MySQL grants. Sasisha uunganisho wa host wa mteja au grants za database, kisha endesha upya uthibitishaji.

### Usakinishaji wa Bedrock au local hauwezi kuungana {#bedrock-or-local-installs-cannot-connect}

Usakinishaji wa Bedrock na socket wa ndani unaweza kuonyesha database kama `localhost` wakati mfumo (runtime) unajumuisha kwa anwani iliyosawazishwa (normalized address). Toa 1.2.0 inasawazisha strings za host kwenye mashine yenyewe, lakini override ya host maalum inaweza bado kusababisha migogoro na grants za database.

### Pako la async push halitolewi (does not drain) {#async-push-queue-does-not-drain}

Ikiwa `verify-sovereign-push` haijakamilika, angalia Action Scheduler au runner wa async uliowekwa. Futa kazi zilizofeli tu baada ya kuthibitisha kuwa ni salama kujaribu tena au kuzitupa.

### Idadi ya watumiaji wa mteja ni mbaya (wrong) {#tenant-user-count-is-wrong}

Migrasi inapaswa kuandaa watumiaji kwa mteja wa sovereign. Ikiwa mtumiaji unaotarajiwa wa usakinishaji haina, endesha upya hatua ya kuandaa watumiaji kabla ya kujaribu tena SSO.

### Ziara ya SSO imekataliwa (is rejected) {#sso-visit-is-rejected}

Kuingia kiotomatiki (autologin) kwa wateja wasihafai (stateless tenant) kunahitaji kwamba domain la mteja, origin pin, madhumuni ya token, nonce, na muda wa kuisha lazima yalingane. Thibitisha kuwa URL ya mteja ni sahihi na kujaribu kuingia mara moja baada ya kutengeneza ziara ya SSO (SSO visit).

## Lini unapaswa kujaribu tena {#when-to-retry}

Jaribu uthibitishaji kila baada ya kubadilisha miundo (infrastructure change). Usibadilishe mtiririko wa matumizi ya uzalishaji (production traffic), usifute data ya chanzo, au uondoe vyeti vya uhamisho (migration credentials) hadi vipimo vyote vya uthibitisho vitakapopita.
