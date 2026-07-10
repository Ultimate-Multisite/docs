---
title: Gukoresha Umuco w'Ubwiriro bw'Ubutumwa
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Kumenyo Kwibuka Ubwujyanye n'Ubwuziyo bw'Umuco (Sovereign Migration Verification) {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 yifashije amagambo yo gukora verification ku WP-CLI cyo muco w'uburyo bwa tenant (sovereign tenant migrations). Yishyira mu gihe ushaka gukoresha ibyo iyo uburyo bwa tenant, cyangwa se uburyo bwa SSO cyangwa uburyo bwa install yashyirwaho mu buryo bw'ibindi.

## Amagambo yo gukora (Commands to run) {#commands-to-run}

Gukora verification ku WordPress yashyirwaho mu rwego rwawe:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Gukoresha site ID ya tenant ugiye gukora. Icyo cyo mbere kigira umwujiza ko tenant yose itagira ubushobozi bwa data bw'uburyo bwa network (legacy). Icyo cyo kabiri kigira umwujiza ko ibikorwa byo push ya sovereign (sovereign push jobs) birashobora gukora no gufata.

## Uburyo bwa Gukora (Common failures) {#common-failures}

### Ubwumvikane bw'uburyo bwa database bwa host batagira uburyo bwa host (Database grants do not match the host) {#database-grants-do-not-match-the-host}

Iyo verification itanga ibintu byo grant cyangwa writer-user batagira umwujiza, ushaka gushyira mu buryo bwa host ya database. `localhost`, `127.0.0.1`, n'izina ry'container service ni ibindi uburyo bwa host bw'MySQL. Shobora guhindura uburyo bwa host ya tenant cyangwa ibyo byo grant y'database, mbere yuko ukarira verification.

### Bedrock cyangwa install yashyirwaho mu rwego rwawe (Local installs) batagira ubushobozi bwa gutanga (cannot connect) {#bedrock-or-local-installs-cannot-connect}

Bedrock n'install yashyirwaho mu socket (local socket installs) ishobora gukoresha database itangwa nk'localhost, ariko runtime igira uburyo bwa address bw'ibindi. Version 1.2.0 ifata ibyo byo host ku gihe cyiza cyane, ariko uburyo bwa host buhindurwa (custom host overrides) bishobora gutera umwujiza n'uburyo bwa database.

### Async push queue itagira ubushobozi bwa gufata (Async push queue does not drain) {#async-push-queue-does-not-drain}

Iyo `verify-sovereign-push` itagira uburyo bwa gufata, ushaka gushyira mu buryo bwa Action Scheduler cyangwa async runner yashirwaho. Shobora gufata ibyo jobs byo batagira mbere yuko wumva ko ari byiza gukora cyangwa gufata.

### Icyo cyo ku rwego rwa tenant (Tenant user count) ni ryiza (wrong) {#tenant-user-count-is-wrong}

Icyo cyo muco (migration) kigomba gutanga abantu b'uburyo bwa sovereign tenant. Niba umuntu wese yashoboye gukoresha y'install yose yashyirwaho, ushaka gukora cyangwa gufata ibyo byo gutanga abantu mbere yuko ukarira SSO.

### Uburyo bwa SSO batagira ubushobozi (SSO visit is rejected) {#sso-visit-is-rejected}

Urugero rwo gukoresha autologin (autologin) kuri tenant usaba umubare w'ibyo mu gihe cyose: domain ya tenant, origin pin, token purpose, nonce, no mu gihe cyo gufite ubutumwa. Guhagarara ko URL ya tenant yari yiza kandi ko ubu bwo gukoresha autologin bishobora kwitwarira nyuma y'uko wamukoresheye gukora SSO visit.

## Icyo gukora nyuma {#when-to-retry}

Gukoresha ubushobozi (retry) nyuma y'uko wamukoresheye gukora ibyerekezo by'ubwoko bw'ibyo mu gihe cyose. Usaba ko ushaka uburyo bwo gukoresha traffic ya production, ushaka gukoresha data ya mbere, cyangwa ushaka gufita credentials y'umvugo (migration credentials) mbere y'uko byose byemeje ibyo byerekana.
