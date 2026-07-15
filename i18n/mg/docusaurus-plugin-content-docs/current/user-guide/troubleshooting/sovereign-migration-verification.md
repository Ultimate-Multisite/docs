---
title: Fanamafana Mpanjaka
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Verification

Ultimate Multisite: Multi-Tenancy 1.2.0 dia manome les commandes verification WP-CLI ho an'ny migration amin'ny tenant souverainy. Ampiasao izany rehefa tsy mihetsika araka ny tokony ho azy ny migration tenant, fidirana SSO, na fametrahana voafetra (isolated install).

## Ireo baiko tokony atao {#commands-to-run}

Andramo ny verification avy amin'ny WordPress napetraka ao anatin'ny tambajotra:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Ampiasao ny site ID ho an'ilay tenant izay atao migration. Ny baiko voalohany dia manamarina fa tsy miankina intsony ilay tenant amin'ny angona legacy ao amin'ny tambajotra. Ny baiko faharoa kosa dia manamarina fa afaka mandray sy manala (process and drain) ny asa push souverainy.

## Fahasimbana mahazatra {#common-failures}

### Tsy mitovy ny fanomezana (grants) an'ny database amin'ny host {#database-grants-do-not-match-the-host}

Raha mampiseho fialan-tsiny momba ny grants na writer-user ny verification, jereo ny host database voafetra. Ny `localhost`, `127.0.0.1`, ary ny anaran'ny service container dia host MySQL grant hafa. Ampio fanavaozana ny fifandraisana amin'ny tenant host na ny grants database, avy eo avereno ny verification.

### Tsy afaka mifandray ny Bedrock na local installs {#bedrock-or-local-installs-cannot-connect}

Mety manambara fa `localhost` no database rehefa mampiasa Bedrock sy socket install aho, fa ny runtime dia mifandray amin'ny adiresy voafetra (normalized address). Ny dikan-teny 1.2.0 dia manamboatra ireo string host ao anatin'ny solosaina mitovy, saingy ny fanovana host manokana dia mbola mety hifandray amin'ny grants database.

### Tsy mandeha (drain) ny async push queue {#async-push-queue-does-not-drain}

Raha tsy vita ny `verify-sovereign-push`, jereo ny Action Scheduler na ny async runner voafetra. Manadio ireo asa tsy nahomby fotsiny rehefa manamarina fa azo atao indray na esorina izany.

### Tsy marina ny isan'ny mpampiasa ao amin'ny tenant {#tenant-user-count-is-wrong}

Tokony ho vita ny fametrahana mpampiasa ho an'ilay tenant souverainy. Raha tsy misy ilay isan'ny mpampiasa tokony ho voatanisa, avereno ny dingana fanomezana mpampiasa alohan'ny hiverenana amin'ny SSO.

### Nisy fandavana (rejected) ny fidirana SSO {#sso-visit-is-rejected}

Ny fampidirana automatique (autologin) ho an'ny mpanjara tsy manana toerana voatete dia mitaky ny domain an'ilay mpanjara, origin pin, tanjona ny token, nonce ary fotoana fahataperany (expiry) mba mitovy. Ampahafantaro fa marina ny URL an'ilay mpanjara ary andramo ny fidirana vao avy rehefa nanao SSO visit ianao.

## Rahoviana tokony hamerina indray {#when-to-retry}

Avereno ny fanamarinana aorian'ny fiovana amin'ny fototra (infrastructure change) tsirairay. Aza manova ny fifidadian'ny tsenin'ny famokarana (production traffic), aza manala ny angona fototra, na aza manala ny fitaovana nampiasaina hanovana (migration credentials) mandra-pahatongan'ny fanamarinana rehetra.
