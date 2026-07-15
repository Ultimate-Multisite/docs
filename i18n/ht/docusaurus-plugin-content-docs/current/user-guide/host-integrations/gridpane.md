---
title: Entegrasyon GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Intégrasyon GridPane

## Aperçu {#overview}
GridPane separe yon panèl kontwòl wèb WordPress ki espesyalize pou pwofesyonèl WordPress ki seri. Entegrasyon sa a pèmèt senkronizasyon domèn otomatik ak jere sertifikat SSL ant Ultimate Multisite ak GridPane.

## Fonctionnalite {#features}
- Senkronizasyon domèn otomatik
- Jere sertifikat SSL
- Konfigirasyon otomatik pou konstante SUNRISE

## Requis {#requirements}
Konstante sa yo dwe defini nan fichye `wp-config.php` ou:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Enstriksyon Konfigirasyon {#setup-instructions}

### 1. Jwenn Kredyans API GridPane ou {#1-get-your-gridpane-api-credentials}

1. Log in nan dashboard GridPane ou
2. Ale nan "Settings" > "API"
3. Kreye yon API key si ou pa genyen youn deja
4. Kopye API key ou a

### 2. Jwenn ID Server ak Site ou yo {#2-get-your-server-and-site-ids}

1. Nan dashboard GridPane ou, ale nan "Servers"
2. Chwazi server kote WordPress multisite ou laje
3. Note Server ID (ki wè nan URL la oswa sou paj detay server la)
4. Ale nan "Sites" epi chwazi sit WordPress ou a
5. Note Site ID (ki wè nan URL la oswa sou paj detay site la)

### 3. Ajoute Konstante yo nan wp-config.php {#3-add-constants-to-wp-configphp}

Ajoute konstante sa yo nan fichye `wp-config.php` ou:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Kòmanse Entegrasyon an {#4-enable-the-integration}

1. Nan admin WordPress ou, ale nan Ultimate Multisite > Settings
2. Navige nan onglet "Domain Mapping" (Mape Domèn)
3. Desann pou "Host Integrations" (Entegrasyonjwèjwè)
4. Aktive entegrasyon GridPane la
5. Klike sou "Save Changes" (Konserve Chanjman yo)

## Kijan Li Travye {#how-it-works}

Lè yon domèn mapye nan Ultimate Multisite:

1. L'intégration envoie une requête à l'API de GridPane pour ajouter le domaine à votre site
2. GridPane gère automatiquement la fourniture du certificat SSL
3. Quand vous supprimez un mappage de domaine, l'intégration retirera le domaine de GridPane

L'intégration gère également automatiquement la constante SUNRISE dans votre fichier wp-config.php, qui est nécessaire pour que le mappage de domaine fonctionne correctement.

## Gestion de la constante SUNRISE {#sunrise-constant-management}

Une fonctionnalité unique de l'intégration GridPane est qu'elle réinitialise automatiquement la constante SUNRISE dans wp-config.php pour éviter les conflits avec le système de mappage de domaine de GridPane lui-même. Cela garantit que les deux systèmes peuvent fonctionner ensemble sans problème.

## Dépannage {#troubleshooting}

### Problèmes de connexion API {#api-connection-issues}
- Vérifiez que votre clé API est correcte
- Assurez-vous que votre identifiant de serveur et de site sont corrects
- Assurez-vous que votre compte GridPane dispose des permissions nécessaires

### Problèmes de certificat SSL {#ssl-certificate-issues}
- GridPane peut prendre un certain temps pour émettre les certificats SSL
- Vérifiez que vos domaines pointent correctement vers l'adresse IP de votre serveur
- Vérifiez les paramètres SSL de GridPane pour votre site

### Domaine non ajouté {#domain-not-added}
- Consultez les logs Ultimate Multisite pour toute message d'erreur
- Vérifiez que le domaine n'est pas déjà ajouté à GridPane
- Assurez-vous que les enregistrements DNS de votre domaine sont correctement configurés
