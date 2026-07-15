---
title: Xaqiijinta Milidnimada
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Xaqiijinta Iskaashi (Sovereign Migration Verification)

Ultimate Multisite 1.2.0-r-ka waxaa ku jira amarrada xaqiijinta WP-CLI ee ka caawinaya guurka qoysaska (tenant migrations). Isticmaal kuwa haddii guurka qoyska, booqashada SSO, ama rakibidda gaarka ah oo aan sida ay la filaynu u shaqaynayn.

## Amarrada loo isticmaalo {#commands-to-run}

Samayso xaqiijinta ka bilaabta rakibka WordPress ee shirkadda (network):

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Isticmaal ID-ga site-ka qoyska aad guurayso. Amarka koowaad wuxuu hubinayaa in qoysku aanu weli ku tiirsan xogta hore ee shirkadda (legacy network-side data). Amarka labaad wuxuu hubinayaa in hawlaha "sovereign push" ay awood u leeyihiin inay maamulaan oo ay ka soo saaraan.

## Waxyaabaha caadiga ah ee ku guuldareysan {#common-failures}

### Ujeeddooyinka database-ka (Database grants) ma laha isku-dubbar {#database-grants-do-not-match-the-host}

Haddii xaqiijinta ay sheegto guuldaro ku saabsan ujeeddooyinka ama isticmaalayaasha writer-user, hubi host-ka database-ka oo aad dejisay. `localhost`, `127.0.0.1`, iyo magaca adeegga container-ka (container service name) waxay yihiin host-yada MySQL grant-ka ee kala duwan. Cusboonaysii xiriirka host-ka qoyska ama ujeeddooyinka database-ka, ka dibna dib u samayso xaqiijinta.

### Bedrock ama rakibidda deegaanka (local installs) ma laha isku xirnaansho {#bedrock-or-local-installs-cannot-connect}

Bedrock iyo rakibidda socket-ka ee deegaanka (local socket installs) waxay soo sheegi karaan database-ka inuu yahay `localhost` halka ay hawlgalka (runtime) si kale ula xiriiraan qaab furfuran oo la habaysan. Version 1.2.0 waxay habaysataa xarfo host-ka isku-dhow ee hal computer, laakiin badbaadhista host-ka gaarka ah (custom host overrides) weli waxay keeni karaan isku dhac ah oo u saabsan ujeeddooyinka database-ka.

### Qaybta async push queue ma soo baxdo (does not drain) {#async-push-queue-does-not-drain}

Haddii `verify-sovereign-push` aysan dhammaan, hubi Action Scheduler ama hawlaha async runner-ka aad dejisay. Ka saar hawlaha guuldareysay kaliya ka dib marka aad hubiso inay tahay mid ammaan ah oo la dib u samayn karo ama la burburin karo.

### Tirada isticmaalayaasha qoysku ma sax ahayd (Tenant user count is wrong) {#tenant-user-count-is-wrong}

Guurka waa inuu abuuro isticmaalayaal (users) qoyska sovereign-ka. Haddii isticmaalka la filayay ee rakibidda ay maqan tahay, dib u samayso tillaabada bixinta isticmaalayaasha ka hor intaadan dib u samayn SSO.

### Booqashada SSO ma diidnaayo (SSO visit is rejected) {#sso-visit-is-rejected}

Xogga laabista (tenant) oo aan lahayn xog (stateless autologin) waxay u baahan tahay in deganimada (domain), pin-ka asalka ah (origin pin), ujeedada token-ka, nonce-ka, iyo mudada ka dhaca inay isku dhawaan. Hubi in URL-ka tenant-ka uu sax yahay oo in la isku dayo in la galo si gaaban ka dib marka la soo saaro booqashada SSO (SSO visit).

## Marka la isku dayo mar kale {#when-to-retry}

Isbeddel xaqiijinta (verification) kadib markaad samayso isbeddellada barnaamijka (infrastructure change). Ha beddel traffic-ka wax soo saarka (production traffic), ha nisbo data-da asalka ah, ama ha ka saarto awoodaha guurka (migration credentials) ilaa dhammaan baaritaannada xaqiijinta ay ku guuleystaan.
