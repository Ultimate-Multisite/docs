---
title: Whakawāhi i te Whakamārama o te Rere
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verification Migrāte Sovereign

Ultimate Multisite: Multi-Tenancy 1.2.0 mārama (verification) commands mo te WP-CLI mō migration o tenant sovereign. Roto i ahau i roto i tēnei whakamārama i te wā e ka taea te whakamaoritia i te migration o tenant, te wāha SSO, au te install isolated, he mea nui ko te mana o ia.

## Command mo roto atu

Roto i te whakamārama (verification) no te WordPress install o te network:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Kia whai i te site ID o te tenant e ka kitea. Ko te command tūroa (first command) e hakatutaku ana ko he mea e pai ai te tenant, he mea e pēnei i te data legacy o te network. Ko te command tētorua e hakatutaku ana ko he mea e taea ai ngā jobs sovereign push whakam처리 (process) me te whakatū (drain).

## Pākehā (Common failures)

### He whakatere database (Database grants) ka whakahouhia i te host

Ko te mea e pēnei i he whakahaupū (grant) au te writer-user, kia whakaaro i te host o te database. Ko `localhost`, `127.0.0.1`, me te ingoa o te service container he hoki nui i ngā host o MySQL grant. Whakawhiti (Update) i te binding o te tenant host au te grant o te database, ā, roto i te whakamārama tēnei, roto i te whakamārama tēnei.

### He Bedrock me local installs ka whakatika i te koneki (cannot connect)

He mea e pēnei i he Bedrock me socket install, he taea ai te hoki i te database ki `localhost` i roto i te wā e ka whakatika te runtime i te address e whakahouhia. Ko Version 1.2.0 e whakamahi ana i te same-machine host strings (strings o te koneki o te machine tona), engari he taea ai ngā overrides o te host ka hoa (conflict) ki ngā grant o te database.

### Async push queue ka whakatika i te drain (does not drain)

Ko te `verify-sovereign-push` e ka ora ana, kia whakaaro i Action Scheduler au te async runner e whakahouhia. Whakawhiti (Clear) i ngā jobs e pēnei i he safe ai te retry au te discard.

### He hā (count) o user tenant ka pēnei

Ko te migration e hakatutaku ana i user mō te tenant sovereign. Ko te expected install user e whai ake, ko te whakamārama tūroa (provisioning) o te user e roto i te step e hakatutaku i te retry SSO.

### He wāha SSO ka pēnei (is rejected)

Mā te mārama, he tino nui tēnei: te whānui o te tenant autologin (autologin o te tenant) e hiahia ana i te domain o te tenant, te origin pin, te token purpose, te nonce, me te expiry kia whai ake. Kia titi i te URL o te tenant he tino pai, ā, ka whakatika te login i tētahi wakamārama SSO (SSO visit) i tētahi wakamārama pō.

## I te wā e taea te whakatika (When to retry)

Whakatika i te whakamārama (verification) i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto i roto
