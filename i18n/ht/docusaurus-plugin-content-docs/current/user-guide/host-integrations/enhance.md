---
title: Amelyore entegrasyon Panèl Kontwòl la
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Améliorer l'Intégration du Panneau de Contrôle

## Vue d'ensemble {#overview}
Enhance se pawe yon panèl kontwòl modèn ki bay kapasite otomatik pou fè wè (hosting automation) ak jere sit la. Intégrasyon sa a pèmèt sincronizasyon domèn otomatik ak jere sertifikat SSL ant Ultimate Multisite ak Enhance Control Panel.

**Diskisyon Relatè:** Gade [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) pou konsèy kominote ak plis enfòmasyon.

## Fonctionnalite {#features}
- Sincronizasyon domèn otomatik lè ou map (map) domèn yo nan Ultimate Multisite
- Pwovizyon sertifikat SSL otomatik atravè LetsEncrypt lè DNS reyalize (resolves)
- Sipò sous-domèn pou rezo ki itilize mode sous-domèn
- Retire domèn lè map yo deletee
- Test koneksyon pou verifye kredans API ou

## Requis {#requirements}

### Requis Sistèm {#system-requirements}
- Enhance Control Panel enstale epi li rive jwenn aksè
- Enstalasyon WordPress Multisite ki ospite sou oswa konekte ak yon sèvè Enhance
- Apache web server (Enhance sipò konfigirasyon Apache; LiteSpeed Enterprise disponib ak pri redwi)

### Aksès API {#api-access}
Ou dwe gen aksè administrateur nan Enhance Control Panel pou kreye token API.

## Jwenn Kredans API ou {#getting-your-api-credentials}

### 1. Kreye yon Token API {#1-create-an-api-token}

1. Konekte epi log in nan Enhance Control Panel ou kòm yon administrateur
2. Klike sou **Settings** (Rann) nan mennu navigasyon an
3. Navige ale **Access Tokens** (Token Aksè)
4. Klike sou **Create Token** (Kreye Token)
5. Bay token an non ki deskriptif (pa egzanp, "Ultimate Multisite Integration")
6. Asigne wòl **System Administrator** (Administrate Sistèm)
7. Pou dat ekspirasyon:
   - Kite li vid si ou vle ke token la pa janm expire
   - Oswa mete yon dat ekspirasyon espesifik pou rezon sekirite
8. Klike sou **Create** (Kreye)

Aprè kreye, ou pral wè **Access Token** ak **Organization ID**. **Konsèvi sa imedyatman** paske token la sèlman ap montre yon fwa.

### 2. Jwenn Organization ID ou a {#2-get-your-organization-id}

Organization ID la parèt sou paj Access Tokens nan yon bo k enfòmasyon ble ki labele "Org ID: {your_id}".

Organization ID la se yon UUID ki fòme tankou sa a: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Ou ka tou jwenn Organization ID yon kliyan pa janm:
1. Ale sou paj **Customers** (Kliyan yo)
2. Klike sou **Manage customer** (Jere kliyan an) pou kliyan ki enpòtan an
3. Gade URL la - Organization ID la se karaktè alfanumè yo apre `/customers/`

### 3. Jwenn Server ID ou a {#3-get-your-server-id}

Pou jwenn Server ID ou a (ki nesesit pou operasyon nan domèn):

1. Nan Enhance Control Panel, ale sou **Servers** (Sèvè yo)
2. Klike sou sèvè kote enstalasyon WordPress ou la ap mache
3. Server ID la (fòma UUID) pral wè nan URL la oswa nan detay sèvè a
4. Alternatifman, ou ka itilize API pou lis sèvè yo:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID la swiv fòma UUID sa a: `00000000-0000-0000-0000-000000000000`

### 4. Jwenn API URL ou a {#4-get-your-api-url}

API URL ou a se URL Enhance Control Panel ou a ki gen `/api/` ajoute:

```
https://your-enhance-panel.com/api/
```

**Enpòtan:** Wout `/api/` la nesesit. Erè komen yo gen ladan:
- Itilize sèlman domèn an san `/api/`
- Itilize HTTP olye HTTPS (HTTPS la nesesit pou sekirite)

## Konfigirasyon {#configuration}

### Konstante ki nesesit {#required-constants}

Ajoute konstante sa yo nan fichye `wp-config.php` ou a:

// Améliorer l'intégration du Control Panel
define('WU_ENHANCE_API_TOKEN', 'votre-token-bearer-ici');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'votre-uuid-serveur-ici');

### Configuration via l'Assistant d'Intégration (Integration Wizard) {#setup-via-integration-wizard}

1. Dans votre administration WordPress, allez à **Ultimate Multisite** > **Settings**
2. Allez dans l'onglet **Integrations**
3. Trouvez **Enhance Control Panel Integration** et cliquez sur **Configuration**
4. L'assistant vous guidera à travers la configuration :
   - **Étape 1 :** Introduction et aperçu des fonctionnalités
   - **Étape 2 :** Entrez vos identifiants API (Token, API URL, Server ID)
   - **Étape 3 :** Testez la connexion
   - **Étape 4 :** Examinez et activez

Vous pouvez choisir de :
- Laisser l'assistant injecter les constantes dans votre fichier `wp-config.php` automatiquement
- Copier les définitions des constantes et les ajouter manuellement

## Configuration WordPress Supplémentaire {#additional-wordpress-configuration}

D'après les retours de la communauté ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), vous pourriez avoir besoin de configurer ces paramètres supplémentaires :

### Configuration .htaccess {#htaccess-configuration}

Si vous rencontrez des problèmes avec le mappage de domaine :
1. Supprimez le fichier `.htaccess` Enhance original
2. Remplacez-le par le fichier `.htaccess` Multisite standard de WordPress

### Constantes Cookies {#cookie-constants}

Ajoutez ces constantes à `wp-config.php` pour assurer une bonne gestion des cookies sur les domaines mappés :

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Comment ça Marche {#how-it-works}

### Quand un Domaine est Mappé {#when-a-domain-is-mapped}

1. Yon itilizatè yon domèn koutim nan Ultimate Multisite (oswa yon nouvo sit ki kreye nan mod subdomain)
2. Entegrasyon an voye yon POST request pou API Enhance la: `/servers/{server_id}/domains`
3. Enhance ajoute domèn nan konfigirasyon sèvè ou a
4. Lè DNS reyalize koneksyon ak sèvè ou, Enhance ap bay yon sertifikat SSL otomatikman atravè LetsEncrypt
5. Domèn nan vin aktif ak HTTPS

### Lè Yon Domèn Retire {#when-a-domain-is-removed}

1. Yon mapaj domèn ap delete nan Ultimate Multisite
2. Entegrasyon an mande Enhance pou jwenn ID domèn nan
3. Yon DELETE request voye bay: `/servers/{server_id}/domains/{domain_id}`
4. Enhance retire domèn nan nan konfigirasyon sèvè ou a

### Kontwòl DNS ak SSL {#dns-and-ssl-checking}

Ultimate Multisite gen kontwòl DNS ak SSL ki bati an:
- Ou ka configure interval kontwòl la nan **Domain Mapping Settings** (default: 300 segond/5 minit)
- Sistèm nan ap verifi propajasyon DNS anvan li mete yon domèn kòm aktif
- Valide sertifikat SSL la otomatikman
- Enhance ap jere bay sertifikat SSL la otomatikman, kidonk konfigirasyon SSL manèl pa nesesè

## Verify Setup La {#verifying-setup}

### Test Koneksyon an {#test-the-connection}

1. Nan Integration Wizard la, itilize etap **Test Connection**
2. Plugin nan ap eseye lis domèn yo sou sèvè ou a
3. Yon mesaj siksè ap konfime:
   - API credentials yo kòrèk
   - API URL la rive jwenn li
   - Server ID la valide
   - Pèmisyon yo mete byen

### Apre Mapaj Yon Domèn {#after-mapping-a-domain}

1. Map yon domèn test nan Ultimate Multisite
2. Kontwe log Ultimate Multisite a (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verify nan Enhance Control Panel la ke domèn nan te ajoute:
   - Ale nan **Servers** > **Your Server** > **Domains**
   - Domèn nou an ap parèt nan lis la
4. Lè DNS propaje, verify ke SSL la bay otomatikman

## Resousè pou rezoud pwoblèm (Troubleshooting) {#troubleshooting}

### Problèm koneksyon API {#api-connection-issues}

**Erè: "Failed to connect to Enhance API" (Echou konekte ak Enhance API)**
- Verify ke `WU_ENHANCE_API_URL` gen `/api/` nan fen li.
- Asire w ap itilize HTTPS, pa HTTP.
- Kontwole ke panel Enhance la rive jwenn aksè de sèvè WordPress ou an.
- Verify ke pa gen okenn règ firewall ki bloke koneksyon an.

**Erè: "Enhance API Token not found" (Token API Enhance pa jwenn)**
- Asire w `WU_ENHANCE_API_TOKEN` la define nan `wp-config.php`.
- Verify ke token la pa te delete oswa expire nan Enhance.
- Kontwole pou ti erè (typo) nan valè token an.

**Erè: "Server ID is not configured" (ID Sèvè pa configure)**
- Verify ke `WU_ENHANCE_SERVER_ID` la define nan `wp-config.php`.
- Asire w Server ID la gen fòma UUID ki valide.
- Konfime ke sèvè a egziste nan panel Enhance ou an.

### Domèn pa ajoute (Domain Not Added) {#domain-not-added}

**Kontwe log yo:**
1. Ale nan **Ultimate Multisite** > **Logs**.
2. Filtre pa **integration-enhance**.
3. Gade pou mesaj erè ki endike pwoblèm nan.

**Kòz komen:**
- Fòma non domèn ki pa valide.
- Domèn an deja egziste nan Enhance.
- Pèmisyon API ki pa ase (asire ke token gen wòl System Administrator).
- Server ID la pa koresponn ak sèvè reyèl la nan Enhance.

### Problèm Sersè SSL (SSL Certificate Issues) {#ssl-certificate-issues}

**SSL pa mete an pwodwi (SSL not provisioning):**
- Verify ke DNS ap pointe pou adrès IP sèvè ou a.
- Kontwole ke domèn an rezoud kòrèktman: `nslookup yourdomain.com`.
- Enhance mande DNS la rezoud anvan li ka mete SSL la an pwodwi.
- Mete SSL la an tipik pran 5-10 min apre propagasyon DNS a fini.
- Kontwole log panel Enhance Control pou erè ki espesifik nan SSL la.

**Resousè SSL manèl nan Enhance:**
1. Ale nan **Servers** > **Your Server** > **Domains**.
2. Jwenn domèn ou an epi kontwole status SSL li.
3. Ou ka mete SSL la an manèl si nesesè.

### Interval Kontche DNS (DNS Check Interval) {#dns-check-interval}

Si les domaines o les certificats SSL prend trop de temps à s'activer :
1. Allez dans **Ultimate Multisite** > **Settings** > **Domain Mapping** (Cartographie des noms de domaine)
2. Trouvez le réglage **DNS Check Interval** (Intervalle de vérification DNS)
3. Modifiez-le du réglage par défaut de 300 secondes à une valeur plus basse (minimum : 10 secondes)
4. **Note :** Des intervalles plus courts signifient des vérifications plus fréquentes mais une charge serveur plus élevée

### Erreurs d'authentification {#authentication-errors}

**Erreurs HTTP 401/403 :**
- Régénérez votre jeton API (API token) dans Enhance
- Vérifiez que le jeton a le rôle de **System Administrator** (Administrateur Système)
- Assurez-vous que le jeton n'a pas expiré
- Vérifiez que vous utilisez le bon ID d'Organisation (même si ce n'est généralement pas requis dans l'URL)

### Analyse des logs {#log-analysis}

Activez la journalisation détaillée :
```php
// Ajoutez ceci à wp-config.php pour un débogage amélioré
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Puis vérifiez les logs aux endroits suivants :
- Logs Ultimate Multisite : **Ultimate Multisite** > **Logs**
- Log de débogage WordPress : `wp-content/debug.log`
- Logs du panneau Enhance : Disponibles dans l'interface d'administration d'Enhance

## Référence API {#api-reference}

### Authentification {#authentication}
Toutes les requêtes API utilisent l'authentification par jeton Bearer (Bearer token) :
```
Authorization: Bearer VOTRE_TOKEN_ICI
```

### Points de terminaison courants utilisés {#common-endpoints-used}

**Lister les serveurs :**
```
GET /servers
```

**Lister les domaines sur un serveur :**
```
GET /servers/{server_id}/domains
```

**Ajouter un domaine :**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Supprimer un domaine :**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Documentation API complète {#full-api-documentation}
Documentation API complète : [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Bonnes pratiques {#best-practices}

### Sécurité {#security}
- **Pa n'commit jamais les API tokens dans votre version control**
- Gardez les tokens dans `wp-config.php` qui doit être exclu de Git
- Utilisez des tokens avec les permissions appropriées (System Administrator pour une intégration complète)
- Définissez des dates d'expiration pour les environnements de production
- Faites tourner les tokens périodiquement

### Performance {#performance}
- Utilisez l'intervalle de vérification DNS par défaut (300 secondes) pour éviter trop d'appels API
- Surveillez les ressources du serveur Enhance lorsque vous effectuez des opérations sur de grands domaines
- Pensez à étaler l'ajout de domaines si vous mappez beaucoup de domaines en même temps

### Surveillance {#monitoring}
- Vérifiez régulièrement les logs Ultimate Multisite pour les erreurs d'intégration
- Mettez en place une surveillance pour les ajouts de domaine échoués
- Vérifiez que les certificats SSL sont provisionnés correctement
- Gardez un œil sur la capacité du serveur Enhance et les limites de domaines

## Ressources Supplémentaires {#additional-resources}

- **Documentation Officielle Enhance :** [https://enhance.com/docs](https://enhance.com/docs)
- **Documentation API Enhance :** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum Communauté Enhance :** [https://community.enhance.com](https://community.enhance.com)
- **Discussion GitHub :** [Issue #265 - Conseils d'intégration Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Guide de Cartographie de Domaine Ultimate Multisite :** Voir la page wiki "Comment configurer la cartographie de domaine v2"

## Support {#support}

Si vous rencontrez des problèmes :
1. Vérifiez la section Dépannage ci-dessus
2. Examinez les logs Ultimate Multisite
3. Consultez les [Discussions GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Contactez le support Enhance pour les problèmes spécifiques au panneau
5. Créez une nouvelle discussion avec des journaux d'erreurs détaillés pour obtenir de l'aide de la communauté

## Notes {#notes}

- Entegrasyon sa a sèlman jere alias de domaine; Enhance ap jere SSL otomatikman.
- Entegrasyon an sipòte mapaj domèn kreyatif ak sit ki baze sou sous-domaine.
- Kreyasyon otomatik www subdomain ka configure nan rann mapaj Domain Mapping.
- Enhance ap sipò konfigirasyon Apache (LiteSpeed Enterprise disponib).
- Retire yon domèn nan Ultimate Multisite ap retire domèn sa a nan Enhance men li pa ka efase sertifikat SSL ki asosye yo imedyatman.
