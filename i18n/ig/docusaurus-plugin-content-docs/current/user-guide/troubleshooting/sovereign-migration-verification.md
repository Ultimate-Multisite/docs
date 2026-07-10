---
title: Ihe Ihe Nkwupụta Ọnụ Ahụike
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifikasyon Migraçyon Sovereign {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 nwere command verification commands na-akara (WP-CLI) fɛr migraçyon tenant sovereign. Rere use deyọọ n'ihi tenant migration, SSO visit, or isolated install ebe ọkụrụ dị ka onwere ike ịdị anaghị mazi.

## Commands da rere {#commands-to-run}

Rere verifikasyon n'ihi WordPress na-akara (network install):

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Use site ID nke tenant ị mere migraçyon. Command ọzọ na-akara na tenant ị mere migraçyon. Command ọzọ na-akara na jobs sovereign push na-agbaje (process and drain).

## Onye ihe ndị dị n'ụlọ {#common-failures}

### Database grants ahụ na-enweghị metụtara host {#database-grants-do-not-match-the-host}

Ọ bụrụ na verifikasyon na-arị anụ grant or writer-user failures, jiji check database host nke ị set. `localhost`, `127.0.0.1`, na ime service name container bụ host MySQL grants dị iche iche. Update tenant host binding ma ọ bụ database grants, karị rere verifikasyon.

### Bedrock or local installs na-anọghị ike ịgụ (connect) {#bedrock-or-local-installs-cannot-connect}

Bedrock na local socket installs ga-arị anaghị mazi database ahụ bụ `localhost` ọbụghị na runtime na-agụ n'ime address dị nwere normalization. Version 1.2.0 na-normalize host strings nke same-machine, ma overrides host custom ga-anọghị ike ịdị anaghị mazi database grants.

### Async push queue na-anọghị ike ịgụ (drain) {#async-push-queue-does-not-drain}

Ọ bụrụ na `verify-sovereign-push` na-agbaje, jiji check Action Scheduler ma ọ bụ async runner nke ị set. Clear failed jobs karị rere ọzọ onwe gị ọ bụrụ na ị na-eme ihe ndị ahụ dị mma ka rere again ma ọ bụ discard.

### Onye aka tenant na-anọghị metụtara (wrong) {#tenant-user-count-is-wrong}

Migration ga-arị provision users fɛr tenant sovereign. Ọ bụrụ na user install nke a bụ onye anaghị metụtara, karị rere step provisioning user mburu ọzọ ọzọ ọzọ ọzọ before retrying SSO.

### SSO visit na-anọghị agbaje (rejected) {#sso-visit-is-rejected}

Ngozi na n'ụm n'ụlọ (tenant) autologin (autologin) na-akọwa anụmanụ (stateless tenant autologin) na-eji domain n'ụlọ, origin pin, token purpose, nonce, na expiry. Ọ bụrụ na ihe ndị a dị iche ắpụtụ, ka ị chọrọ ịchekwa na URL n'ụlọ ọ bụ n'ụlọ (tenant) ya, ma ọ bụ iji login n'ụlọ ahụ anyị ga-akọwa n'ụlọ SSO (SSO visit).

## Ọ dị n'ihe gị gara {#when-to-retry}

Chọrọ ịchekwa na verification ọbụla (verification) ọ bụrụ na oge ọ bụla a ị chọrọ ịgba ọsọ (infrastructure change). Ahụrụ na ị chọrọ ka ị chọrọ ịgba ọsọ, ị chọrọ ka ị gbagba data n'ụlọ ahụ, ma ọ bụ ị ri dị mmeghị (migration credentials) mgbe a na-akọwa anụmanụ.
