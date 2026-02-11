---
title: Améliorer l'intégration du panneau de contrôle
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Intégration du panneau de contrôle Enhance

## Vue d'ensemble
Enhance est un panneau de contrôle moderne qui offre des capacités d'automatisation et de gestion d'hébergement puissantes. Cette intégration permet la synchronisation automatique des domaines et la gestion des certificats SSL entre Ultimate Multisite et Enhance Control Panel.

**Discussion liée :** Voir [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) pour des conseils communautaires et des informations supplémentaires.

## Fonctionnalités
- Synchronisation automatique des domaines lorsqu'ils sont mappés dans Ultimate Multisite
- Provisionnement automatique de certificats SSL via LetsEncrypt lorsque le DNS se résout
- Prise en charge des sous-domaines pour les réseaux fonctionnant en mode sous-domaine
- Suppression du domaine lorsqu'un mappage est supprimé
- Test de connexion pour vérifier les identifiants API

## Exigences

### Exigences système
- Panneau de contrôle Enhance installé et accessible
- Installation WordPress Multisite hébergée sur ou connectée à un serveur Enhance
- Serveur web Apache (Enhance prend actuellement en charge les configurations Apache ; LiteSpeed Enterprise est disponible à un coût réduit)

### Accès API
Vous devez disposer d'un accès administrateur au panneau de contrôle Enhance pour créer des jetons API.

## Obtenir vos identifiants API

### 1. Créer un jeton API

1. Connectez-vous à votre panneau de contrôle Enhance en tant qu'administrateur
2. Cliquez sur **Settings** dans le menu de navigation
3. Accédez à **Access Tokens**
4. Cliquez sur **Create Token**
5. Donnez au jeton un nom descriptif (par ex., "Ultimate Multisite Integration")
6. Attribuez le rôle **System Administrator**
7. Pour la date d'expiration :
   - Laissez vide si vous voulez que le jeton n'expire jamais
   - Ou définissez une date d'expiration spécifique pour des raisons de sécurité
8. Cliquez sur **Create**

Après la création, votre **Access Token** et votre **Organization ID** seront affichés. **Enregistrez-les immédiatement** car le jeton ne sera affiché qu'une seule fois.

### 2. Obtenir votre ID d'organisation

L'ID d'organisation est affiché sur la page des jetons d'accès dans une boîte d'information bleue intitulée "Org ID : {your_id}".

L'ID d'organisation est un UUID formaté comme : `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Vous pouvez également trouver l'ID d'organisation d'un client en :

1. Accédez à la page **Customers**
2. Cliquez sur **Manage customer** pour le client concerné
3. Regardez l'URL - l'ID d'organisation est constitué des caractères alphanumériques après `/customers/`

### 3. Obtenir votre ID de serveur

Pour trouver votre ID de serveur (nécessaire pour les opérations de domaine) :

1. Dans le panneau de contrôle Enhance, accédez à **Servers**
2. Cliquez sur le serveur où votre installation WordPress est en cours d'exécution
3. L'ID de serveur (format UUID) sera visible dans l'URL ou les détails du serveur
4. Alternativement, vous pouvez utiliser l'API pour lister les serveurs :

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

L'ID de serveur suit le format UUID : `00000000-0000-0000-0000-000000000000`

### 4. Obtenir votre URL API

Votre URL API est l'URL de votre panneau de contrôle Enhance avec `/api/` ajouté :

```
https://your-enhance-panel.com/api/
```

**Important :** Le chemin `/api/` est requis. Les erreurs courantes incluent :  
- Utiliser uniquement le domaine sans `/api/`  
- Utiliser HTTP au lieu de HTTPS (HTTPS est requis pour la sécurité)

## Configuration

### Constantes requises

Ajoutez les constantes suivantes à votre fichier `wp-config.php` :

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Configuration via l'assistant d'intégration

1. Dans votre administration WordPress, accédez à **Ultimate Multisite** > **Settings**
2. Accédez à l'onglet **Integrations**
3. Trouvez **Enhance Control Panel Integration** et cliquez sur **Configuration**
4. L'assistant vous guidera à travers la configuration :
   - **Étape 1 :** Introduction et aperçu des fonctionnalités
   - **Étape 2 :** Saisissez vos identifiants API (Token, URL API, ID de serveur)
   - **Étape 3 :** Testez la connexion
   - **Étape 4 :** Passez en revue et activez

Vous pouvez choisir de :
- Laisser l'assistant injecter les constantes dans votre fichier `wp-config.php` automatiquement
- Copier les définitions de constantes et les ajouter manuellement

## Configuration WordPress supplémentaire

Basé sur les retours de la communauté ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), vous pourriez avoir besoin de configurer ces paramètres supplémentaires :

### Configuration .htaccess

Si vous rencontrez des problèmes avec le mappage de domaine :
1. Supprimez le fichier `.htaccess` original d'Enhance
2. Remplacez-le par le fichier `.htaccess` standard de WordPress Multisite

### Constantes de cookie

Ajoutez ces constantes à `wp-config.php` pour assurer une gestion correcte des cookies sur les domaines mappés :

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Comment ça fonctionne

### Lorsqu'un domaine est mappé

1. Un utilisateur mappe un domaine personnalisé dans Ultimate Multisite (ou un nouveau site est créé en mode sous-domaine)
2. L'intégration envoie une requête POST à l'API d'Enhance : `/servers/{server_id}/domains`
3. Enhance ajoute le domaine à votre configuration serveur
4. Lorsque le DNS se résout vers votre serveur, Enhance provisionne automatiquement un certificat SSL via LetsEncrypt
5. Le domaine devient actif avec HTTPS

### Lorsqu'un domaine est supprimé

1. Un mappage de domaine est supprimé dans Ultimate Multisite
2. L'intégration interroge Enhance pour trouver l'ID du domaine
3. Une requête DELETE est envoyée à : `/servers/{server_id}/domains/{domain_id}`
4. Enhance supprime le domaine de votre configuration serveur

### Vérification DNS et SSL

Ultimate Multisite inclut une vérification DNS et SSL intégrée :
- Vous pouvez configurer l'intervalle de vérification dans **Domain Mapping Settings** (par défaut : 300 secondes/5 minutes)
- Le système vérifiera la propagation DNS avant de marquer un domaine comme actif
- La validité du certificat SSL est vérifiée automatiquement
- Enhance gère le provisionnement SSL automatiquement, donc la configuration SSL manuelle n'est pas requise

## Vérification de la configuration

### Tester la connexion

1. Dans l'assistant d'intégration, utilisez l'étape **Test Connection**
2. Le plugin tentera de lister les domaines sur votre serveur
3. Un message de succès confirme :
   - Les identifiants API sont corrects
   - L'URL API est accessible
   - L'ID de serveur est valide
   - Les autorisations sont correctement définies

### Après le mappage d'un domaine

1. Mappez un domaine de test dans Ultimate Multisite
2. Vérifiez les journaux d'Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Vérifiez dans le panneau de contrôle Enhance que le domaine a été ajouté :
   - Accédez à **Servers** > **Your Server** > **Domains**
   - Le nouveau domaine doit apparaître dans la liste
4. Une fois que le DNS se propage, vérifiez que le SSL est provisionné automatiquement

## Dépannage

### Problèmes de connexion API

**Erreur : "Échec de la connexion à l'API Enhance"**  
- Vérifiez que `WU_ENHANCE_API_URL` inclut `/api/` à la fin  
- Assurez-vous d'utiliser HTTPS, pas HTTP  
- Vérifiez que le panneau Enhance est accessible depuis votre serveur WordPress  
- Vérifiez qu'il n'y a pas de règles de pare-feu bloquant la connexion

**Erreur : "Jeton API Enhance introuvable"**  
- Assurez-vous que `WU_ENHANCE_API_TOKEN` est défini dans `wp-config.php`  
- Vérifiez que le jeton n'a pas été supprimé ou expiré dans Enhance  
- Vérifiez les fautes de frappe dans la valeur du jeton

**Erreur : "ID de serveur non configuré"**  
- Vérifiez que `WU_ENHANCE_SERVER_ID` est défini dans `wp-config.php`  
- Assurez-vous que l'ID de serveur est un format UUID valide  
- Confirmez que le serveur existe dans votre panneau Enhance

### Domaine non ajouté

**Vérifiez les journaux :**  
1. Accédez à **Ultimate Multisite** > **Logs**  
2. Filtrez par **integration-enhance**  
3. Recherchez les messages d'erreur indiquant le problème

**Causes courantes :**  
- Format de nom de domaine invalide  
- Domaine déjà existant dans Enhance  
- Permissions API insuffisantes (assurez-vous que le jeton a le rôle System Administrator)  
- L'ID de serveur ne correspond pas au serveur réel dans Enhance

### Problèmes de certificat SSL

**SSL non provisionné :**  
- Vérifiez que le DNS pointe vers l'adresse IP de votre serveur  
- Vérifiez que le domaine se résout correctement : `nslookup yourdomain.com`  
- Enhance nécessite que le DNS se résolve avant de pouvoir provisionner SSL  
- Le provisionnement SSL prend généralement 5 à 10 minutes après la propagation DNS  
- Vérifiez les journaux du panneau de contrôle Enhance pour les erreurs spécifiques SSL

**Dépannage SSL manuel dans Enhance :**  
1. Accédez à **Servers** > **Your Server** > **Domains**  
2. Trouvez votre domaine et vérifiez son statut SSL  
3. Vous pouvez déclencher manuellement le provisionnement SSL si nécessaire

### Intervalle de vérification DNS

Si les domaines ou les certificats SSL mettent trop de temps à s'activer :  
1. Accédez à **Ultimate Multisite** > **Settings** > **Domain Mapping**  
2. Trouvez le paramètre **DNS Check Interval**  
3. Ajustez à partir de la valeur par défaut de 300 secondes vers une valeur inférieure (minimum : 10 secondes)  
4. **Remarque :** Des intervalles plus courts signifient des vérifications plus fréquentes mais une charge serveur plus élevée

### Erreurs d'authentification

**Erreurs HTTP 401/403 :**  
- Régénérez votre jeton API dans Enhance  
- Vérifiez que le jeton a le rôle **System Administrator**  
- Vérifiez que le jeton n'a pas expiré  
- Assurez-vous d'utiliser le bon ID d'organisation (même si il n'est généralement pas requis dans l'URL)

### Analyse des journaux

Activez la journalisation détaillée :  
```php
// Add to wp-config.php for enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Puis vérifiez les journaux à :  
- Journaux d'Ultimate Multisite : **Ultimate Multisite** > **Logs**  
- Journal de débogage WordPress : `wp-content/debug.log`  
- Journaux du panneau Enhance : disponibles dans l'interface d'administration d'Enhance

## Référence API

### Authentification

Toutes les requêtes API utilisent l'authentification Bearer token :

```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Points de terminaison communs utilisés

**List Servers :**  
```
GET /servers
```

**List Domains on a Server :**  
```
GET /servers/{server_id}/domains
```

**Add a Domain :**  
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Delete a Domain :**  
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Documentation API complète

Documentation API complète : [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Bonnes pratiques

### Sécurité

- **Ne jamais commettre de jetons API dans le contrôle de version**  
- Stockez les jetons dans `wp-config.php` qui doit être exclu de Git  
- Utilisez des jetons avec les autorisations appropriées (System Administrator pour une intégration complète)  
- Définissez des dates d'expiration de jeton pour les environnements de production  
- Faites tourner les jetons périodiquement

### Performance

- Utilisez l'intervalle de vérification DNS par défaut (300 secondes) pour éviter les appels API excessifs  
- Surveillez les ressources serveur Enhance lors de l'exécution d'opérations de domaine à grande échelle  
- Envisagez de répartir les ajouts de domaine si vous mappez de nombreux domaines à la fois

### Surveillance

- Vérifiez régulièrement les journaux d'Ultimate Multisite pour les erreurs d'intégration  
- Mettez en place une surveillance des ajouts de domaine échoués  
- Vérifiez que les certificats SSL sont provisionnés correctement  
- Gardez un œil sur la capacité serveur Enhance et les limites de domaine

## Ressources supplémentaires

- **Documentation officielle d'Enhance :** [https://enhance.com/docs](https://enhance.com/docs)
- **Documentation API d'Enhance :** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum communautaire d'Enhance :** [https://community.enhance.com](https://community.enhance.com)
- **Discussion GitHub :** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Guide de mappage de domaine Ultimate Multisite :** Voir la page wiki "How to Configure Domain Mapping v2"

## Support

Si vous rencontrez des problèmes :  
1. Vérifiez la section Dépannage ci-dessus  
2. Passez en revue les journaux d'Ultimate Multisite  
3. Consultez les [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)  
4. Contactez le support Enhance pour les problèmes spécifiques au panneau  
5. Créez une nouvelle discussion avec des journaux d'erreurs détaillés pour l'assistance communautaire

## Notes

- Cette intégration ne gère que les alias de domaine ; Enhance gère le SSL automatiquement  
- L'intégration prend en charge à la fois les mappages de domaine personnalisés et les sites basés sur des sous-domaines  
- La création automatique de sous-domaine www peut être configurée dans les paramètres de mappage de domaine  
- Enhance prend actuellement en charge les configurations Apache (LiteSpeed Enterprise disponible)  
- La suppression de domaine depuis Ultimate Multisite supprimera le domaine d'Enhance mais ne supprimera pas immédiatement les certificats SSL associés
