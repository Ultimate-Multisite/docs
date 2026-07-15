---
title: Verifikacija sovrenske migracije
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifikacija migracije suverena

Ultimate Multisite: Multi-Tenancy 1.2.0 vključuje WP-CLI komande za verifikacijo migracij suverenih tenentov. Uporabite ih če se migracija tenenta, objava SSO ali izolirana instalacija ne ponašajo kot pričakovano.

## Komande za izvršanje {#commands-to-run}

Izvršite verifikacijo iz WordPress instalacije v mreži:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Uporabite ID tenenta ki ga migrirate. Prva komanda preverja da tenent več ne zavisi od stare mreže podatkov. Druga komanda verifiira da so zadnje zaobčine (sovereign push jobs) sposobni obdelati in prazniti.

## Pogostej napaki {#common-failures}

### Dovoljenja v bazi podatkov ne ustrezuje gostu {#database-grants-do-not-match-the-host}

Če verifikacija omenja napake pri dovoljenjih ali uporabnikih pisateljev, preverite konfiguriran host baze podatkov. `localhost`, `127.0.0.1` in ime servisa kontejnera so različni MySQL hosti za dovoljenja. Obnovite vez za host tenenta ali dovoljenja v bazi podatkov, nato ponovite verifikacijo.

### Bedrock ali lokalne instalacije ne morejo povezati se {#bedrock-or-local-installs-cannot-connect}

Bedrock in lokalne soketne instalacije lahko omenjajo bazo podatkov kot `localhost`, medtem ko se runtime povezuje preko normalizirane pade. Verzija 1.2.0 normalizira host stringe na istoj strogi, vendar so prilagojene nadomestitve hostov še vedno lahko v konfliktu z dovoljenji v bazi podatkov.

### Asinkronska vrža za push ni praznjena (drain) {#async-push-queue-does-not-drain}

Če `verify-sovereign-push` ne končaja, preverite Action Scheduler ali konfiguriran asinkronski runner. Očiščite neuspešne zadaje le po potrjenju, da so varno ponovno poskušanje ali odkastitev.

### Število uporabnikov tenenta je napakljivo {#tenant-user-count-is-wrong}

Migracija bi morala ustvariti uporabnike za suverenega tenenta. Če manjka pričakovane instalirane uporabnika, ponovite korak za ustvarjanje uporabnikov pred ponovnim poskušanjem SSO.

### Objava SSO je zavrnjena {#sso-visit-is-rejected}

Autologin za brezstresne najemnike zahteva, da se domen najemnika, origin pin, namen tokena, nonce in datum istehanja (expiry) morajo ena biti identični. Preverite, da je URL najemnika pravilno nastavljen in da se naloga za prijavu poskuša takoj po generiranju SSO obiska.

## Kdaj ponoviti preizkušanje {#when-to-retry}

Ponovno preizkusite preizkušanje po vsaki spremembi v infrastrukturi. Ne preklajajte prometa na produkcijo, ne brišete izvorni podatke in ne odstranjujte podatke za migracijo, dokler se ne uspeva z drugimi preizkušanjem.
