---
title: Mavhango ekugadzirwa kweSovereign Migration
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow Yekuruwe Sovereign {#sovereign-migration-workflow}

Ultimate Multisite: Multi-Tenancy 1.2.0 inenge kuita vhizha zvekuviri (migration verification gates) kuti mupedzisira unenge uri kuita migration kubva kune subsite yakachengetedza ku infrastructure ya sovereign tenant.

## Pasi wazvo {#before-you-start}

Tsvaga kuti uine:

- Backup upanobva we site yacho.
- Addon ye Multi-Tenancy inenge inenge imiitika (active).
- Database, filesystem root, uye domain ya tenant yakare (destination) inenge ine.
- Binding ye database host inenge inenge inosimbisa (matches) ienvironment ya tenant yakare.
- Access kuti uite WP-CLI commands dzemweya (network).

## Workflow inotarisirwa {#recommended-workflow}

1. Tara database uye filesystem ya tenant yakare.
2. Register kana kuenda nekuwedzera settings dze isolation ye tenant.
3. Iita migration yakanaka ye tenant.
4. Provision kana kuita verification yemumbe (users) ve tenant.
5. Dzaura (Drain) async migration jobs.
6. Iita sovereign migration verification.
7. Taura tenant neSSO.
8. Gita DNS kana routing panguva verification inenge inenge ine zvinhu zvakakubatsira.

## Gates dze Verification {#verification-gates}

Workflow yeverification inobvunza migration kubva mabhizimisi anonyanya:

- Schema ya tenant inenge inenge yakagara uye database writer yakanaka inogona kuita.
- Database host inenge inenge ine grants dzakakubatsira (valid).
- Users ve tenant vanenge vaine uye vanenge vakaita zvakakosha nezve number ye users anofanira kubva pa sovereign install.
- Async push queue inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge in
