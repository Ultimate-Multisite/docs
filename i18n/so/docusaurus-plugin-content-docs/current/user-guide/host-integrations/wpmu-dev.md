---
title: Integraashada WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Isku-dhaafinta WPMU DEV {#wpmu-dev-integration}

## Guudbixitaanka (Overview) {#overview}
WPMU DEV waa platform WordPress oo dhammaystiran oo bixiya hosting, plugins, iyo adeegyo loogu talagalay goobaha WordPress. Isku-dhafka (integration) kan wuxuu kuu oggolaanayaa isku-dubbaridda domain-ka (domain syncing) iyo maamulka shahaadada SSL-ka (SSL certificate management) inta badan ka dhexe Ultimate Multisite iyo hosting-ga WPMU DEV.

## Tilmaamaha (Features) {#features}
- Isku-dubbaridda automatic ee domain-ka
- Maamulka shahaadada SSL-ka
- Isku-dhafinta weerarrada lagu xaqiijiyo shahaadada SSL-ka oo la ballaaran

## Shuruudaha (Requirements) {#requirements}
Isku-dhafka wuxuu si toos ah u ogaadaa haddii aad ku hosting tahay WPMU DEV wuxuuna isticmaalaa API-ga la bilaabay. Ma baahna wax cusub lagu hagaajin karo haddii aad ku hosting tahay WPMU DEV.

Isku-dhafka wuxuu hubinayaa jiritaanka badankoodka `WPMUDEV_HOSTING_SITE_ID`, kaas oo si toos ah loo qeexaa marka la hosting yahay WPMU DEV.

## Tallaabooyinka Qaab-dhismeedka (Setup Instructions) {#setup-instructions}

### 1. Hubinta Hosting-ga WPMU DEV {#1-verify-wpmu-dev-hosting}

Haddii aad ku hosting tahay WPMU DEV, badankoodka badankoodka constants-ka loo baahan waa la qeexay. Hubi in:

1. Badankoodka `WPMUDEV_HOSTING_SITE_ID` uu la qeexan yahay deegaankaaga (environment)
2. Aad ayaad leedahay wixii WPMU DEV-ga oo leh iibsi API ah (API access)

### 2. Furista Isku-dhafka (Enable the Integration) {#2-enable-the-integration}

1. Admin-ka WordPress-kaaga, tag Ultimate Multisite > Settings
2. Tag tab-ka "Domain Mapping"
3. Hoos u soo saar "Host Integrations"
4. Fur isku-dhafka WPMU DEV
5. Click "Save Changes" (Wax ka beddel)

## Sida Ay U Shaqeeyo (How It Works) {#how-it-works}

### Isku-dubbaridda Domain-ka (Domain Syncing) {#domain-syncing}

Marka domain la isku-dubbaro Ultimate Multisite:

1. Isku-dhafka wuxuu isticmaalaa API-ga WPMU DEV si uu domain-ka ku daro xisaabta hosting-kaaga
2. Waxay sidoo kale si toos ah u kordhisaa nooca www ee domain-ka
3. WPMU DEV waxay maamushaa hagaajinta domain-ka iyo bixinta shahaadada SSL-ka

### Maamulka Shahaadada SSL-ka (SSL Certificate Management) {#ssl-certificate-management}

Wax-ka isku xirna ayaa loo dejiyay inuu kordhiyo tirada weerarrada xaqiijinta shahaadada SSL ee adeegsiga WPMU DEV, sababtoo ah waxa laga yaabaa inay qaadan doonto waqti si shahaadada SSL loogu soo saarto oo loo rakibo. Si aasaasi ah, waxay isku dayi doontaa ilaa 10 jeer oo lagu xaqiijinayo shahaadada SSL, halkii ay ka tahay 5 weerar oo caadiga ah.

## Firiirta Muhiimka ah {#important-notes}

### Ka saarista Domain-ka (Domain Removal) {#domain-removal}

Hadda, API-ga WPMU DEV ma bixiyo hab lagu ka saaro domain-yada. Marka la ka saaro xariigga domain-ka (domain mapping) Ultimate Multisite-ka, domain-ku wuxuu ku sii jirayaa koontada adeegsiga WPMU DEV ee aad leedahay. Haddii loo baahdo, waxaad u baahan doontaa inaad si gacanta ah uga saarto dashboard-ka adeegsiga WPMU DEV.

### Xaqiijinta API (API Authentication) {#api-authentication}

Isku xirna waxay isticmaashaa furaha API ee WPMU DEV oo lagu kaydiyo database-ka WordPress-ka sida doorashada `wpmudev_apikey`. Tani si toos ah ayaa loo dejiyaa marka aad isku xirto website-kaaga WPMU DEV.

## Xallinta Dhibaatooyinka (Troubleshooting) {#troubleshooting}

### Dhibaatooyinka Isku Xirna API (API Connection Issues) {#api-connection-issues}
- Hubi in website-kaagu si sax ah ugu xiran yahay WPMU DEV
- Hubi in doorashada `wpmudev_apikey` ay ku jiro database-ka WordPress-kaaga
- Hubi in xaqaaga WPMU DEV uu socon yahay (active)

### Dhibaatooyinka Shahaadada SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- WPMU DEV waxay qaadan kartaa waqti si shahaadada SSL loogu soo saarto (caadi ahaan 5-15 daqiiqo)
- Isku xirna waxaa loo dejiyay inuu isku dayo ilaa 10 jeer oo lagu xaqiijinayo shahaadada SSL
- Haddii shahaadada SSL weli aan la soo saarin ka dib weerarro badan, la xiriir taageerada WPMU DEV

### Domain-ka Aan La Bixin (Domain Not Added) {#domain-not-added}
- Hubi logs-ka Ultimate Multisite si aad u ogaato wax khalad ah oo dhacay
- Hubi in domain-ku aadan weli ku lahayn WPMU DEV
- Hubi in qorshaha adeegsiga WPMU DEV ee aad leedahay uu taageero tirada domain-yada aad darayso
