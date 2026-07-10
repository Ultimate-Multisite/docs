---
title: Vèifikasyon Migrasyon Souverain
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifikasyon Migrasyon Souverain {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 gen kè WP-CLI verification commands pou migrasyon tenant souverain. Itilize yo lè yon migrasyon tenant, vizit SSO, o enstalasyon izole pa pa mache jan ou te espere.

## Command ki pou w ekwi {#commands-to-run}

Eksèktye verifikasyon soti nan enstalasyon WordPress rezo a:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Itilize ID sit la pou tenant ou ap migre. Premye komand la kontwole ke tenant la pa depann sou done legacy rezo a ankò. Dezyèm komand la verifi ke job sovereign push yo ka pwoเซse epi desan (drain).

## Echanj komen {#common-failures}

### Grant baz done pa koresponn ak anbatè (host) {#database-grants-do-not-match-the-host}

Si verifikasyon an rapòt échec grant oswa writer-user, kontwole anbatè baz done ki configure a. `localhost`, `127.0.0.1`, ak non sèvis kontèner la se diferan anbatè MySQL grant. Mete souvan (host binding) tenant la oswa grant baz done yo epi re-ekwi verifikasyon an.

### Enstalasyon Bedrock o lokal pa ka konekte {#bedrock-or-local-installs-cannot-connect}

Enstalasyon Bedrock ak socket lokal ka rapòte baz done a kòm `localhost` pandan ke runtime a konekte atravè yon adrès normalize. Vèsyon 1.2.0 normalize string anbatè menm makin, men override anbatè kay yo ka toujou kontani ak grant baz done yo.

### Fila push asinchrone pa desan (drain) {#async-push-queue-does-not-drain}

Si `verify-sovereign-push` pa fini, kontwole Action Scheduler o runner asinchrone ki configure a. Netwaye job ki échèk sèlman apre ou konfime ke yo an sekirite pou re-eseye oswa pou despare.

### Kantite itilizat tenant la pa bon {#tenant-user-count-is-wrong}

Migrasyon an dwe bay itilizat pou tenant souverain la. Si itilizat enstalasyon ki espere a manke, re-ekwi etap bay itilizat anvan ou re-eseye SSO.

### Vizit SSO te refize {#sso-visit-is-rejected}

Gwole yon sijè ki pa gen menm fonksyon (stateless tenant autologin) mande pou domèn vantè a, pin orijin, objektif token la, nonce, ak dat ekspozyon an koresponn. Konfime ke devès vantè a koutou a kòrèk epi ou pral eskouw pou login la imedyatman apre w gen yon vizit SSO yo.

## Lè pou w rep nou {#when-to-retry}
Rep nou fòmasyon aprè chak chanjman nan enfwòtè a. Pa chanje trafik pwodiksyon, aswèt done sou kote ou te jwenn li, oswa retire kredansyèl migrasyon an menm jan ou pa pase tout verifikasyon yo.
