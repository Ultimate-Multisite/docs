---
title: Entegrasyon Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Entegrasyon Cloudways

## Aperçu {#overview}
Cloudways separe yon platfòm wè hosting nan bulwa ki pèmèt ou deplwaye sit WordPress sou divès founisè bulwa tankou DigitalOcean, AWS, Google Cloud, e plis ankò. Entegrasyon sa a pèmèt senkronizasyon domèn otomatik ak jere sertifikat SSL ant Ultimate Multisite ak Cloudways la.

## Fonctionnalite {#features}
- Senkronizasyon domèn otomatik
- Jere sertifikat SSL
- Sipò pou domèn ekstrèm (extra domains)
- Valide DNS pou sertifikat SSL

## Requis {#requirements}
Ou dwe defini konstante ki anba a nan fichye `wp-config.php` ou:

```php
define('WU_CLOUDWAYS_EMAIL', 'email_cloudways_ou');
define('WU_CLOUDWAYS_API_KEY', 'api_key_ou');
define('WU_CLOUDWAYS_SERVER_ID', 'id_server_ou');
define('WU_CLOUDWAYS_APP_ID', 'id_app_ou');
```

Oswa opsyonèlman, ou ka defini:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'lis_domèn_separe_pa_virmye');
```

## Enstriksyon Konfigirasyon {#setup-instructions}

### 1. Jwenn Kredyans API Cloudways ou yo {#1-get-your-cloudways-api-credentials}

1. Log in nan dashboard Cloudways ou a
2. Ale nan "Account" > "API Keys" (Kont ak Clé API)
3. Kreye yon API key si ou pa genyen youn deja
4. Kopye email ou ak API key ou la

### 2. Jwenn ID Server ak Aplikasyon ou yo {#2-get-your-server-and-application-ids}

1. Nan dashboard Cloudways ou a, ale nan "Servers" (Sèvè yo)
2. Chwazi sèvè kote WordPress multisite ou a aloje
3. ID Sèvè a parèt nan URL la: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Ale nan "Applications" epi chwazi aplikasyon WordPress ou a
5. ID Aplikasyon an parèt nan URL la: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Ajoute Konstante yo nan wp-config.php {#3-add-constants-to-wp-configphp}

Ajoute konstante ki anba a nan fichye `wp-config.php` ou a:

```php
define('WU_CLOUDWAYS_EMAIL', 'email-Cloudways-ouvwa');
define('WU_CLOUDWAYS_API_KEY', 'api-key-Cloudways-ouvwa');
define('WU_CLOUDWAYS_SERVER_ID', 'id-serveur-Cloudways-ouvwa');
define('WU_CLOUDWAYS_APP_ID', 'id-app-Cloudways-ouvwa');
```

Si ou avez des domaines **externes** supplémentaires (en dehors de votre réseau multisite) qui doivent toujours rester sur la liste des alias Cloudways :

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Ne pas inclure le wildcard de votre propre réseau
Ne mettez **pas** `*.votre-reseau.com` (ou tout autre modèle de sous-domaine de votre propre réseau) dans `WU_CLOUDWAYS_EXTRA_DOMAINS`. Voir [Important — piège du SSL wildcard](#important--wildcard-ssl-pitfall) ci-dessous pour comprendre pourquoi cela empêche l'émission des certificats SSL par locataire.
:::

### 4. Activer l'Intégration {#4-enable-the-integration}

1. Dans votre administration WordPress, allez à Ultimate Multisite > Settings (Paramètres).
2. Naviguez vers l'onglet "Domain Mapping" (Mappage de domaine).
3. Faites défiler jusqu'à "Host Integrations" (Intégrations d'hébergement).
4. Activez l'intégration Cloudways.
5. Cliquez sur "Save Changes" (Enregistrer les modifications).

## Comment ça fonctionne {#how-it-works}

### Synchronisation des domaines {#domain-syncing}

Quand un domaine est mappé dans Ultimate Multisite :

1. L'intégration récupère tous les domaines actuellement mappés.
2. Elle ajoute le nouveau domaine à la liste (avec une version www si applicable).
3. Elle envoie la liste complète à Cloudways via l'API.
4. Cloudways met à jour les alias de domaine pour votre application.

Note : L'API Cloudways exige d'envoyer la liste complète des domaines à chaque fois, et pas seulement d'ajouter ou de supprimer des domaines individuels.

### Gestion du certificat SSL {#ssl-certificate-management}

Après la synchronisation des domaines :

1. L'intégration vérifie quels domaines ont des enregistrements DNS valides pointant vers votre serveur.
2. Elle envoie une requête à Cloudways pour installer les certificats SSL Let's Encrypt pour ces domaines.
3. Cloudways gère l'émission et l'installation du certificat SSL.

L'intégration demande toujours des certificats Let's Encrypt **standards** (sans joker) de Cloudways. Si un modèle de joker est fourni dans `WU_CLOUDWAYS_EXTRA_DOMAINS`, le `*.` initial est supprimé avant la demande SSL — le joker lui-même n'est jamais installé par cette intégration. Pour utiliser un certificat joker sur Cloudways, vous devriez l'installer manuellement, mais le faire bloque l'émission Let's Encrypt pour chaque domaine personnalisé mappé (voir le piège ci-dessous).

## Domaines Supplémentaires {#extra-domains}

La constante `WU_CLOUDWAYS_EXTRA_DOMAINS` vous permet de spécifier des domaines **externes** supplémentaires qui doivent toujours être conservés dans la liste des alias de l'application Cloudways. Utilisez-la pour :

- Les domaines externes qui ne sont pas gérés par Ultimate Multisite (par exemple, un site marketing séparé partageant la même application Cloudways).
- Des domaines en pause ou de staging que vous voulez garder sur la liste des alias de l'application.

**Ne** pas utiliser cette constante pour le sous-domaine joker de votre propre réseau (par exemple, `*.votre-reseau.com`). Voir le piège du SSL joker ci-dessous.

## Important — Piège du SSL Joker {#important--wildcard-ssl-pitfall}

Une erreur courante lorsque vous suivez la configuration par défaut de Cloudways est d'ajouter un joker comme `*.votre-reseau.com` à `WU_CLOUDWAYS_EXTRA_DOMAINS`, ou d'installer manuellement un certificat SSL joker Cloudways pour ce joker.

**Si vous faites cela, Cloudways refusera d'émettre des certificats Let's Encrypt pour les domaines personnalisés par locataire que Ultimate Multisite mappe.** Cloudways remplace le certificat SSL actif sur l'application à chaque fois, et un certificat joker préexistant sur l'application bloque l'émission Let's Encrypt par domaine pour laquelle l'intégration dépend.

### Configuration SSL recommandée pour un réseau Ultimate Multisite sur Cloudways {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Nan tab **SSL Certificate** nan aplikasyon Cloudways la, mete yon **standard Let's Encrypt certificate** ki kouvri sèlman `your-network.com` ak `www.your-network.com` — **pa** yon wildcard.
2. Pa mete `*.your-network.com` (oswa nenpòt patat sous-domèn rezo ou a) nan `WU_CLOUDWAYS_EXTRA_DOMAINS`. Rezève konstante sa pou **domain ki soti anvan**.
3. Kreye wildcard subdomain pa tenant la la nivo **DNS** sèlman (yon `A` record pou `*.your-network.com` ap pointe nan IP sèvè Cloudways ou a) pou sous-sit yo ka rezoudi. SSL pou domain koutim ki map yo otomatikman emisyon pa entegrasyon an atravè Let's Encrypt.

Si domain koutim tanan ou yo bloke san SSL, kontwole tab SSL Cloudways la. Si yon wildcard certificate aktif la la, retire li, re-emisyon yon standard Let's Encrypt certificate pou sèlman domain rezo prensipal la, epi retire nenpòt entri wildcard nan `WU_CLOUDWAYS_EXTRA_DOMAINS`. Apre sa, retèchye yon mapaj domain (oswa tann pou youn ki vini apre) e entegrasyon an ap kòmanse emisyon certificate pa domèn ankò.

## Resous pwoblèm (Troubleshooting) {#troubleshooting}

### Pwoblèm koneksyon API {#api-connection-issues}
- Verifye ke imèl ou ak API key ou yo kòrèk
- Kontwole ke ID sèvè ou ak aplikasyon ou yo kòrèk
- Asire w ke kont Cloudways ou a gen pèmisyon ki nesesè

### Problèm ak Sèfseri SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- Cloudways mande ke domèn yo genyen enregistrem DNS valide ki ap pointe nan sèvè ou anvan li bay sertifikat SSL.
- Integrasyon an ap valide enregistrem DNS anvan li mande sertifikat SSL.
- Si sertifikat SSL pa bay, verifye ke domèn ou yo ap pointe byen nan adrès IP sèvè ou a.
- **Domèn kreyòl pèsonèl (Per-tenant custom domains) ki bloke san SSL?** Kontwe onglet Sertifikat SSL aplikasyon Cloudways la. Si yon sertifikat wildcard (ki te enstale manman, oswa ki kouvri `*.your-network.com`) ap aktif, Cloudways pa pral bay sertifikat Let's Encrypt pou domèn pèsonèl ki mapman anpil. Ranplase li ak yon sertifikat Let's Encrypt standard ki kouvri sèlman domèn rezo prensipal la (`your-network.com`, `www.your-network.com`) epi retire nenpòt entansyon wildcard nan `WU_CLOUDWAYS_EXTRA_DOMAINS`. Apre sa, retweki yon mapman domèn (oswa tann pou youn ki vini an) e integrasyon an ap mande sertifikat pèsonèl pou chak domèn.

### Domèn Pa Ajoute {#domain-not-added}
- Kontwe log Ultimate Multisite a pou nenpòt mesaj erè.
- Verifye ke domèn nan pa deja ajoute nan Cloudways.
- Asire ou ke plan Cloudways ou la sipòte kantite domèn ou ap ajoute.
