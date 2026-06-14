---
title: Fampifandraisana Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Fandahana amin'ny Cloudways

## Famarahabana (Overview)
Ny Cloudways dia sehatra fampiasam-bola hosting an-tserasera (managed cloud hosting platform) izay ahafahanao mametraka ireo tranonkala WordPress maro samihafa eo amin'ny manome serivisy an-tserasera isan-karazany toy ny DigitalOcean, AWS, Google Cloud ary hafa. Ity fampifandraisana ity dia ahafahana mitazona ny domain sy ny SSL certificate ho voafehy ho azy eo amin'ny Ultimate Multisite sy Cloudways.

## Toetran'izy ireo (Features)
- Fandefasana domain ho azy (Automatic domain syncing)
- Fitantanana SSL certificate
- Fanohanana domain hafa (Support for extra domains)
- Fanamarinana DNS ho an'ny SSL certificates

## Fepetra Takiana (Requirements)
Ireo constants manaraka dia tsy maintsy voarakitra ao amin'ny rakitra `wp-config.php` anao:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Mba azo atao koa ny mamaritra ireto:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'lisitra, mizara amin\'ny tsipika, an'ny domain');
```

## Toromarika Fampidirana (Setup Instructions)

### 1. Fahazoana ny API Credentials anao avy amin'ny Cloudways

1. Midira ao amin'ny dashboard an'ny Cloudways anao
2. Mandehana any amin'ny "Account" > "API Keys"
3. Mamorona API key raha mbola tsy manana azy ianao
4. Apetra ny email sy ny API key anao

### 2. Fahazoana ny Server ID sy Application ID anao

1. Ao amin'ny dashboard Cloudways anao, mandehana any amin'ny "Servers"
2. Safidio ilay server izay misy ny WordPress multisite anao
3. Ny Server ID dia hita ao amin'ny URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Mandehana any amin'ny "Applications" ary safidio ny application WordPress anao
5. Ny App ID dia hita ao amin'ny URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Fampidirana ireo Constants ao amin'ny wp-config.php

Ampidiro ireto constants manaraka ao anatin'ny rakitra `wp-config.php` anao:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Si ou avez des domaines **externes** supplémentaires (en dehors de votre réseau multisite) qui doivent toujours rester sur la liste des alias Cloudways :

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Ne pas inclure le wildcard de votre propre réseau
Ne mettez **pas** `*.votre-reseau.com` (ou tout autre modèle de sous-domaine de votre propre réseau) dans `WU_CLOUDWAYS_EXTRA_DOMAINS`. Voir [Important — piège du SSL wildcard](#important--wildcard-ssl-pitfall) ci-dessous pour comprendre pourquoi cela empêche l'émission des certificats SSL par locataire.
:::

### 4. Activer l'Intégration

1. Dans votre administration WordPress, allez dans Ultimate Multisite > Settings (Paramètres).
2. Allez à l'onglet "Domain Mapping" (Mappage de domaine).
3. Faites défiler jusqu'à "Host Integrations" (Intégrations d'hébergement).
4. Activez l'intégration Cloudways.
5. Cliquez sur "Save Changes" (Enregistrer les modifications).

## Comment ça fonctionne

### Synchronisation des domaines

Quand un domaine est mappé dans Ultimate Multisite :

1. L'intégration récupère tous les domaines actuellement mappés.
2. Elle ajoute le nouveau domaine à la liste (avec une version www si applicable).
3. Elle envoie la liste complète à Cloudways via l'API.
4. Cloudways met à jour les alias de domaine pour votre application.

Note : L'API Cloudways exige d'envoyer la liste complète des domaines à chaque fois, et non seulement d'ajouter ou de supprimer des domaines individuels.

### Gestion des certificats SSL

Après la synchronisation des domaines :

1. L'intégration vérifie quels domaines ont des enregistrements DNS valides pointant vers votre serveur.
2. Elle envoie une requête à Cloudways pour installer les certificats SSL Let's Encrypt pour ces domaines.
3. Cloudways gère l'émission et l'installation du certificat SSL.

Ny fampifandra (integration) dia mangataka hatrany ny sertifika **standard** (tsy misy wildcard) avy amin'ny Let's Encrypt avy ao amin'ny Cloudways foana. Raha misy pattern wildcard eo amin'ny `WU_CLOUDWAYS_EXTRA_DOMAINS`, dia esorina aloha ilay `*.` alohan'ny fangatahana SSL — tsy ho voalaza mihitsy ny wildcard io no apetraka avy amin'ity fampifandra ity. Raha te hampiasa sertifika wildcard ianao ao amin'ny Cloudways, dia mila apetraka manokana ianao, fa izany dia manakana ny famoahana Let's Encrypt ho an'ny domain manokana mifandray (mapped custom domains) ireo (jereo ny loza eto ambany).

## Extra Domains (Domain hafa)

Ny constant `WU_CLOUDWAYS_EXTRA_DOMAINS` dia ahafahanao manome domain **ekstrana** hafa izay tokony ho ao foana amin'ny lisitry ny alias an'ny fampiharana Cloudways. Ampiasao izany ho an'izay:

- Domain ekstrana tsy vitan'ny Ultimate Multisite (ohatra, tranokala marketing manokana mitondra ny fampiharana Cloudways mitovy).
- Domain parky na staging tianao ho ao amin'ny lisitry ny alias an'ny fampiharana.

**Aza** mampiasa ity constant ity ho an'ny subdomain wildcard an'ny tambajotranareo manokana (ohatra, `*.your-network.com`). Jereo ny loza SSL wildcard eto ambany.

## Zava-dehibe — Loza SSL Wildcard

Ny fahadisoana mahazatra rehefa manaraka ny fametrahana an'ny Cloudways default dia ny fanampiana wildcard toy ny `*.your-network.com` ao amin'ny `WU_CLOUDWAYS_EXTRA_DOMAINS`, na ny fametrahana sertifika SSL wildcard avy amin'ny Cloudways manokana ho an'io wildcard io.

**Raha ataonao izany, dia hameren'ny Cloudways tsy hanome sertifika Let's Encrypt ho an'ireo domain manokana mifandray (per-tenant custom domains) izay atao an'ny Ultimate Multisite.** Ny Cloudways dia manolo ny sertifika SSL miankina amin'ny fampiharana isaky ny fotoana, ary ny sertifika wildcard efa misy ao amin'ny fampiharana dia manakana ny famoahana Let's Encrypt ho an'ny domain tsirairay izay iantsoan'ity fampifandra ity.

### Fandaharana SSL Cloudways azo atao ho an'ny tambajotran'ny Ultimate Multisite

1. Cloudways application's **SSL Certificate** sekansiye, `your-network.com` ani `www.your-network.com` nefa fotsiny (wildcard) iray ny mari-paha (standard Let's Encrypt certificate).

2. Aza atao ny `*.your-network.com` (na firafitry subdomain hafa an'ny tambajotra anareo) ao amin'ny `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ataovy ho manana io constant io ho an'ny domain **ekely** ihany.

3. Atao ny wildcard subdomain isan-teny (per-tenant) eo amin'ny **DNS** level ihany fotsiny (record `A` ho an'ny `*.your-network.com` mitondra ny IP an'ny server Cloudways anareo) mba hahafahan'ny subsites mifandray tsara. Ny SSL ho an'ny domain manokana voafidy dia hamoahana azy ho azy amin'ny alalan'ny integration mampiasa Let's Encrypt.

Raha toa ka tsy afaka mandeha ny domain manokana anareo noho ny tsy fisian'ny SSL, jereo ny SSL tab ao amin'ny Cloudways. Raha misy wildcard certificate miasa eo dia esory izany, avereno mamorona Let's Encrypt standard certificate ho an'ny domain lehibe ihany, ary esory ireo fidirana wildcard rehetra ao amin'ny `WU_CLOUDWAYS_EXTRA_DOMAINS`. Avy eo, avereno manao mapping ny domain (na andramo indray) ary hanomboka mamoaka certificate isan-domain indray ny integration.

## Fandresena Olana (Troubleshooting)

### Olana amin'ny Fifandraisana API
- Fantaro fa marina ny email sy ny API key anareo.
- Jereo fa marina ny server ID sy ny application ID anareo.
- Antsoy fa manana ny alalana ilaina ao amin'ny kaontina Cloudways anareo ianao.

### Olana amin'ny SSL Certificate

- Mila manana DNS records marina manarona ny server anareo alohan'ny hanomezana SSL certificates ny Cloudways.
- Ny integration dia manamarina ireo DNS records alohan'ny mangataka SSL certificates.
- Raha tsy nampanome SSL certificates ianao, jereo raha toa ka marina ny fiparitahan'ny domain anareo amin'ny IP address an'ny server anareo.
- **Domain manokana (per-tenant) tsy afaka mandeha nefa tsy misy SSL?** Jereo ny tab "SSL Certificate" ao amin'ny application Cloudways. Raha mbola misy wildcard certificate (nampidirina manokana, na manao `*.your-network.com`) dia tsy hanome SSL certificates Let's Encrypt ho an'ireo domain manokana izay voafidy manokana ny Cloudways. Ampidiro izany amin'ny SSL certificate mahazatra (standard Let's Encrypt) izay manana ny domain lehibe fotsiny (`your-network.com`, `www.your-network.com`) ary esory ireo entry wildcard ao amin'ny `WU_CLOUDWAYS_EXTRA_DOMAINS`. Avy eo, avereno mandefa mapping an'ny domain (na andramo ny manaraka) ary ny integration dia mangataka SSL certificates isaky ny domain.

### Domain tsy nampidirina

- Jereo ireo logs ao amin'ny Ultimate Multisite raha misy hafatra fahadisoana.
- Fantaro fa tsy voafidy anao mialoha ny domain ao Cloudways.
- Antsoy fa manome ny plan Cloudways anareo ny isan'ny domain izay asiana.
