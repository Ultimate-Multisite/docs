---
title: Pagpamatuod sa Sovereign Migration
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Verification {#sovereign-migration-verification}

Ang Ultimate Multisite: Multi-Tenancy 1.2.0 naglakip na og mga WP-CLI verification commands para sa sovereign tenant migrations. Gamita kini kung ang paglipat sa tenant, SSO visit, o isolated install dili molihok sama sa gipaabot nimo.

## Mga Command nga i-run {#commands-to-run}

I-run ang verification gikan sa network WordPress install:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Gamita ang site ID para sa tenant nga imong ilipat. Ang unang command nag-check kung ang tenant dili na magdepende sa legacy data sa network side. Ang ikaduha nga command nagsusi kung ang mga sovereign push jobs makaproseso ug makapagawas (drain).

## Mga Kasagaran nga kabug-aton (Common failures) {#common-failures}

### Dili tugma ang database grants sa host {#database-grants-do-not-match-the-host}

Kung nagreport ang verification og sayop sa grant o writer-user, i-check ang configured database host. Ang `localhost`, `127.0.0.1`, ug ang ngalan sa container service usa ka lain nga MySQL grant hosts. Update ang tenant host binding o database grants, unya i-run pag-usab ang verification.

### Dili makakonekta ang Bedrock o local installs {#bedrock-or-local-installs-cannot-connect}

Ang Bedrock ug local socket installs mahimong magreport nga `localhost` ang database samtang ang runtime nagkonektar pinaagi sa usa ka normalized address. Ang Version 1.2.0 nag-normalize sa same-machine host strings, apan ang custom host overrides mahimong makalibog pa gihapon sa mga database grants.

### Dili ma-drain ang Async push queue {#async-push-queue-does-not-drain}

Kung dili matapos ang `verify-sovereign-push`, i-check ang Action Scheduler o ang configured async runner. Limpyohan lang ang mga napakyas nga jobs human naseguro nga luwas kini para i-retry o itaboy (discard).

### Sayop ang bilang sa user sa tenant {#tenant-user-count-is-wrong}

Ang migration kinahanglan mag-provision og mga user alang sa sovereign tenant. Kung wala ang gipaabot nga install user, i-run pag-usab ang step sa user provisioning sa dili pa i-retry ang SSO.

### Gi-reject ang SSO visit {#sso-visit-is-rejected}

Kinahanglan magtugma ang domain sa tenant, origin pin, token purpose, nonce, ug expiry para sa stateless tenant autologin. Siguraduhon nga tama ang URL sa tenant ug ang login gisulod pagkahuman sa paghimo og SSO visit.

## Kanus-a Mag-retry {#when-to-retry}

I-retry ang verification human sa matag kausaban sa infrastructure. Ayaw usba ang production traffic, ayaw pagtanggal sa source data, o ayaw tangtangon ang migration credentials hangtod nga na-pass tanan nga mga check sa verification.
