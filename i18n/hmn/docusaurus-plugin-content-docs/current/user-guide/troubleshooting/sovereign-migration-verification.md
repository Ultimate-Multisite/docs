---
title: Khai mlooj txhais txhua yam uas hluas tau txais txhais
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Verification

Ultimate Multisite: Multi-Tenancy 1.2.0 에는 sovereign tenant migration-ന് WP-CLI verification commands 들이 포함되어 있습니다. 테넌트 마이그레이션, SSO 방문, 또는 격리된 설치가 예상대로 작동하지 않을 때 이 명령어들을 사용하세요.

## இயக்குх команд (Commands to run) {#commands-to-run}

네트워크 WordPress install-ൽ verification-ը ධාවනය කරන්න:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

ඔබ මාරු කරන 테넌트 එකේ site ID භාවිතා කරන්න. පළමු command එකෙන් කියන්නේ ඒ 테넌ට් එක තවදුරටත් පැරණි network-side data (පැරණි ජාල දත්ත) මත රඳා නොපවතින්න කියලා පරීක්ෂා කරනවා. දෙවන command එකෙන් කියන්නේ sovereign push jobs වලට process කරලා drain කරන්න පුළුවන්ද කියලා තහවුරු කරනවා.

## පොදු අසාර්ථකතා (Common failures) {#common-failures}

### Database grants do not match the host (Database හි දීමනා සේවා ස්ථානය නොගැලපීම) {#database-grants-do-not-match-the-host}

verification එකෙන් grant හෝ writer-user failure පෙන්වන්නේ නම්, configure කර ඇති database host එක බලන්න. `localhost`, `127.0.0.1`, සහ container service name කියන්නේ MySQL grant hosts වල වෙනස් දේවල්. tenant host binding නැවත update කරන්න හෝ database grants වෙනස් කරලා verification එක නැවත run කරන්න.

### Bedrock or local installs cannot connect (Bedrock හෝ local socket ස්ථාපන සම්බන්ධ විය නොහැකි වීම) {#bedrock-or-local-installs-cannot-connect}

Bedrock සහ local socket installations වලදී, runtime එක normalized address හරහා සම්බන්ධ වුවත්, database එක `localhost` ලෙස පෙන්විය හැකියි. Version 1.2.0 එකේ same-machine host strings normalize කරනවා, නමුත් custom host overrides වලට database grants සමඟ ගැටුමක් ඇති විය හැකියි.

### Async push queue does not drain (Async push කූඩය හිස් නොවීම) {#async-push-queue-does-not-drain}

`verify-sovereign-push` අවසන් නොවන්නේ නම්, Action Scheduler හෝ configure කර ඇති async runner එක පරීක්ෂා කරන්න. jobs නැවත run කිරීමට හෝ discard කිරීමට ආරක්ෂිත බව තහවුරු කළ පසු පමණක් failed jobs වලට ඉවත් කරන්න (clear).

### Tenant user count is wrong (테넌트 පරිශීලක ගණන වැරදි වීම) {#tenant-user-count-is-wrong}

migration එකෙන් sovereign tenant සඳහා users provision කළ යුතුයි. අපේ බලාපොරොත්තු වන install user නැතිනම්, SSO නැවත run කිරීමට පෙර user provisioning step එක නැවත run කරන්න.

### SSO visit is rejected (SSO පිවිසුම ප්‍රතික්ෂේප වීම) {#sso-visit-is-rejected}

Hojm, hauv lom lom koj xav ua haujlwm zoo. Hlub luam no:

Thum xoaeg (Stateless tenant autologin) yuav tso siv dombov (tenant domain), origin pin, token purpose, nonce, thiab expiry thiaj txaw lm neeg rau cov ntawv thaws xoo tias nws hais txawm. Thua teeb kho le ua rau koj xav tias lom lom no yog laum tawm tsim los thaum uas hlub luam (SSO visit) nuav ua raws li. Xawm xov nrhiav ti siab ti yuav ua haoj yee txoj thov (tenant URL) zoo thiab teeb kho le, thiab tsis xaiv kawg sau ntawv lom lom (login attempt) rau sau ntawv uas hlub luam (SSO visit) tsim los.

## Tha nuam txhais (When to retry) {#when-to-retry}

Tha koj thev kho hauv tswv tsim los (infrastructure change), yuav tso siv qhia (retry verification) hauv txhua yam. Tsis txhob xaiv traffic uas yog rau production, tsis txhob tso cai (delete) cov ntaub chaw uas yog tus nrhiav (source data), loss cov khoom thov migration credentials tsuas taws txog txhua qhov teeb kho le.
