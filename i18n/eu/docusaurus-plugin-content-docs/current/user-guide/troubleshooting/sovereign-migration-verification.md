---
title: Bestea migrazio bidezko bidezka eta bidezka-biderua
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migrazio Bidezki Dantza

Ultimate Multisite 1.2.0-ean WP-CLI bidezko (sovereign) tenent migrazioak dira. Tenent migrazio bat, SSO bisita edo aisialditu instalazio bat ez jakin dituzenean, hauek erabiliz.

## Erakunde egindako komandak {#commands-to-run}

WordPress installa network-ean erakunde egin:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Migrazio egiten duen tenentaren site ID-a erabiliz. Lehen komandak bat ez daude network-eko datu historietan depengatu. Bigarren komandak dira sovereign push job-ek procesatuta eta drainatuta kondiziotzen.

## Okerrako ezberdinetak {#common-failures}

### Database grant-ek host-ekin ez du {#database-grants-do-not-match-the-host}
Erakundea erakuntzen edo writer-user-ek ez du, database host-a konponduki ikustee. `localhost`, `127.0.0.1` eta container service-aren nabizak MySQL grant host-ez dira. Tenent host binding edo database grant-ek updateatu, gaur erakunde egin.

### Bedrock edo local instalazioak konektatzen ez dute {#bedrock-or-local-installs-cannot-connect}
Bedrock eta local socket instalazioak database-a `localhost` denari ematen dezakete, baina runtime-ak normalizatutako adresu bidez konektatzen du. Versio 1.2.0-ean erabilera egonbatzen host strings-ek normalizatu dira, baina custom host override-ek database grant-ekin konfrontazioa izan daiteke.

### Async push queue ez drainatzen {#async-push-queue-does-not-drain}
`verify-sovereign-push`-ak amaitzen ez du, Action Scheduler edo konponduki egindako async runner-a ikustee. Job-ek berri errepenean saioa baino lehenik drainatu ondoren saioa aldatu edo descarte egin.

### Tenentaren erabiltzaileko koertea ez da {#tenant-user-count-is-wrong}
Migrazioak sovereign tenentariako erabiltzaileko koertuak provisionatu behar dira. Esperatutako instalazio erabiltzaileko ez dagoenean, SSO-re berri erakunde egiten saioa baino lehenik erabiltzailearen provisionamendu irakurri.

### SSO bisitua ez daude {#sso-visit-is-rejected}
SSO bisita ez daude.

Stateless tenant autologin-ek domaina tenentia, origin pinak, token-aren testuingtxari eta edukioloa (expiry) jateness beharrezkoa da. Tenentian URL-ek ondo dagoela eta SSO bisita sortu egin ondoren login-a eragiten daiko garrantzia da.

## Geroan jartzea (When to retry) {#when-to-retry}

Bestea infraestructura-ren jarraipenaren ondoren testuingtxari jartu. Produksio trafikoa ez aldatu, gure datuen źródoa ez dauriazuk edo migrazio kredentzialak ez badura haie guztiek testuingtxari jartzen duenean.
