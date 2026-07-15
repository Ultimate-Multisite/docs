---
title: Kuviri Kwemutsimbiso weMugara
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Verification

Ultimate Multisite: Multi-Tenancy 1.2.0 inorat commands dzine kuita kuti migirira tenant sovereignty. Unoda kuita iye kana migirira tenant, kana kuenda neSSO, kana kuinstalla isolated zvakasiyana zvachange zvinoreva zvinhu zvakasiyana.

## Commands to run {#commands-to-run}

Tsvaka verification kubva kune WordPress install yenyu ye network:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Rendai site ID yenyu ye tenant inozvinogirira. Command yakareya inotika kuti tenant haunoda data ya legacy yenyu ye network. Command yakareya inotika kuti jobs dzine sovereign push dzinogona kuita uye kuenda (drain).

## Common failures {#common-failures}

### Database grants do not match the host {#database-grants-do-not-match-the-host}

Kana verification inoratira zvinoreva grant kana writer-user failures, ndiramba kuona database host inozviratidzorera. `localhost`, `127.0.0.1`, uye runyane rwe service ye container zviri dziri dzakasiyana dze MySQL grant hosts. Rende binding yenyu ye tenant kana grants dze database, ndipo endeka verification pfungwa.

### Bedrock or local installs cannot connect {#bedrock-or-local-installs-cannot-connect}

Bedrock uye socket installs zvinogona kuita kuti database inoreve `localhost` kunyange runtime inoratidzorera kupi neaddress inoreva zvakasiyana. Version 1.2.0 inoreva strings dze host dzine machine yese, asi overrides dze host dzine custom zvinogona kuita kuti zvisingane nezvinhu zve database grants.

### Async push queue does not drain {#async-push-queue-does-not-drain}

Kana `verify-sovereign-push` isingazovaka, ndiramba kuona Action Scheduler kana async runner inozviratidzorera. Rende jobs dzakasiyana pfungwa panguva dzinogone kuita kuti zvinoreve kana kuzvisingane.

### Tenant user count is wrong {#tenant-user-count-is-wrong}

Migration inofanira kuinstalla users kubva kune tenant sovereignty. Kana user anokurudzwa (expected install user) haunobva, endeka step ye provisioning ya user pfungwa panguva dzinoreva SSO.

### SSO visit is rejected {#sso-visit-is-rejected}

Kutanga autologin weineye (stateless tenant) kunoda kuti domain ye tenant, origin pin, token purpose, nonce, uye expiry zvinowanikwa. Simbisa kuti URL ya tenant inenge yakwanisa uye login inotenderwa panguva yakapfuura kubva kuita SSO visit.

## Nenzani Unofanira Kuratidza (Retry) {#when-to-retry}

Riratidza verification panguva yakapfuura kugadzirwa kweinfrastructure. Usanenge uchigadzirisa traffic ye production, usanenge uchifumidza data ya source, kana usanenge uchifumidza credentials dze migration mpaka zvose zvinobatsira kuita verification zvinhasi.
