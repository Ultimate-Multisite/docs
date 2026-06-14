---
title: Staðfesting á sjálfstæðum migrasjóði
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Verification

Ultimate Multisite: Multi-Tenancy 1.2.0 hefur inn verifiseringar WP-CLI kommandofer til migrasjonar fyrir suverene leigum. Notaðu þau þegar leigummigra migrasjon, SSO-visiting eða ísolated install ekki virka eins og væntan.

## Kommandofer til að nota

Kjör verifisering frá WordPress installinni á netverkinu:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Notuðu site ID fyrir leiguna sem þú migrasjar. Fyrir kommandoferinn skennur það að leiguna ekki lengur sé afhlytt við gamla netverksháttum. Norðung kommandoferinn skennur að suverena push jobs geta verða að virka og tømast.

## Almenn feil

### Database grants eru ekki jafn með hostnum

Ef verifisering fer til að sýna feil á grant eða writer-user, skoða þann settu database host. `localhost`, `127.0.0.1` og nafn kerfis fyrir container service eru ólíkar MySQL grant hosts. Uppfærðu binding leigunnar host eða database grants, síðan kjör verifisering aftur.

### Bedrock eða local installs geta ekki tengjast

Bedrock og local socket installs geta sýna databaseinn sem `localhost` en runtime tengist með normlaðri heiti. Versjon 1.2.0 normar sama-mánum host stringar, en sérstaklega úrvaldir hostir geta enn að vera í ólíkingu við database grants.

### Async push queue er ekki tømð

Ef `verify-sovereign-push` ekki fer aftur, skoða Action Scheduler eða settu async runner. Tømðu feilja jobs bara eftir að hafa staðfest að þeir séu tryggjandi til að reyna aftur eða skipta út.

### Innbyggðar notandastafn er órétt

Migrasjoninn þarf að setja upp notendur fyrir suverena leiguna. Ef ekki er væntan installað notandinn, kjör innbyggðar notandastafna aftur áður en þú reynir SSO aftur.

### SSO-visiting er negtitt

Autologin fyrir statsléttar leigendur krefst að leigandahreppann (tenant domain), origin pin, token purpose, nonce og sett tíðni (expiry) sé tómari. Staða URL-sins leigandans er rétt og prófanir innsignunar eru gerðar strax eftir að SSO-visitið hefur verið skráð.

## Þegar þarf að prófa aftur

Prófa againn eftir hverjum breytingu í uppbyggingu (infrastructure change). Skipti ekki við produktionstrafiki, slettja ekki upplýsingar sem eru kjelda data eða fjórnuðu migra sjónarferli (migration credentials) þar til all verfið prófanir hafa listi.
