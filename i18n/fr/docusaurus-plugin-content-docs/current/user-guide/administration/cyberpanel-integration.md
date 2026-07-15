---
title: Intégration CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Intégration CyberPanel

Ce guide explique comment configurer l'intégration Ultimate Multisite CyberPanel afin que les domaines mappés de votre réseau soient automatiquement ajoutés (et supprimés) comme hôtes virtuels dans CyberPanel, avec une attribution SSL automatique optionnelle via Let's Encrypt.

## Ce que cela fait {#what-it-does}

*   Lorsqu'un domaine est mappé dans Ultimate Multisite, l'intégration appelle l'API de CyberPanel pour créer un hôte virtuel pour ce domaine.
*   Lorsqu'un mappage de domaine est supprimé, l'intégration appelle l'API pour supprimer l'hôte virtuel correspondant.
*   Lorsque l'SSL automatique est activé, l'intégration déclenche immédiatement l'émission d'un certificat Let's Encrypt après la création de l'hôte virtuel.
*   Ajoute/supprime optionnellement l'alias `www.` en fonction de votre paramètre « Auto-create www subdomain » (Créer automatiquement le sous-domaine www) dans les paramètres de mappage de domaine.

## Prérequis {#prerequisites}

*   Une instance CyberPanel fonctionnelle (v2.3 ou ultérieure recommandée) accessible depuis votre serveur WordPress.
*   Un site web existant dans CyberPanel qui sert déjà la racine de votre réseau WordPress. L'intégration attache les nouveaux hôtes virtuels à ce serveur.
*   L'accès à l'API CyberPanel doit être activé. L'authentification utilise votre nom d'utilisateur et votre mot de passe administrateur CyberPanel.
*   Vos enregistrements DNS pour les domaines mappés doivent déjà pointer vers l'adresse IP de votre serveur avant que l'SSL automatique ne puisse émettre un certificat valide.

## Exigences {#requirements}

Les constantes suivantes doivent être définies dans votre fichier `wp-config.php` :

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Optionnellement, vous pouvez également définir :

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Défaut : true — émettre un SSL Let's Encrypt après la création du domaine
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Défaut : PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Utilisé pour le contact du certificat SSL
```

## Instructions de configuration {#setup-instructions}

### 1. Activer l'API CyberPanel {#1-enable-the-cyberpanel-api}

1. Connectez-vous à votre tableau de bord CyberPanel en tant qu'administrateur.
2. Allez dans **Security** > **SSL** et confirmez que l'SSL est actif sur l'interface CyberPanel elle-même (requis pour les appels API sécurisés).
3. L'API CyberPanel est disponible par défaut à `https://your-server-ip:8090/api/`. Aucune étape supplémentaire n'est nécessaire pour l'activer — elle est activée par défaut pour les utilisateurs administrateurs.

### 2. Ajouter les constantes à wp-config.php {#2-add-constants-to-wp-configphp}

Ajoutez les constantes suivantes à votre fichier `wp-config.php` avant la ligne `/* That's all, stop editing! */` :

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Pour activer l'SSL automatique (recommandé) :

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Activer l'intégration {#3-enable-the-integration}

1. Dans l'administration de votre réseau WordPress, allez dans **Ultimate Multisite** > **Settings**.
2. Naviguez vers l'onglet **Domain Mapping**.
3. Faites défiler jusqu'à **Host Integrations**.
4. Activez l'intégration **CyberPanel**.
5. Cliquez sur **Save Changes**.

### 4. Vérifier la connectivité {#4-verify-connectivity}

Utilisez le test de connexion intégré dans l'assistant de configuration :

1. Allez dans **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Cliquez sur **Test Connection**.
3. Un message de succès confirme que le plugin peut atteindre l'API CyberPanel et s'authentifier correctement.

## Fonctionnement {#how-it-works}

### Mappage de domaine {#domain-mapping}

Lorsqu'un domaine est mappé dans Ultimate Multisite :

1. L'intégration envoie une requête `POST` à `/api/createWebsite` sur votre hôte CyberPanel.
2. CyberPanel crée un nouvel hôte virtuel pour le domaine sous le package configuré.
3. Le répertoire racine est défini pour pointer vers le répertoire racine de votre réseau WordPress.
4. Lorsque le mappage de domaine est supprimé, l'intégration appelle `/api/deleteWebsite` pour nettoyer l'hôte virtuel.

### SSL automatique {#auto-ssl}

Lorsque `WU_CYBERPANEL_AUTO_SSL` est `true` :

1. Après la création de l'hôte virtuel, l'intégration appelle `/api/issueSSL` pour le domaine.
2. CyberPanel demande un certificat Let's Encrypt en utilisant le défi ACME HTTP-01.
3. Le certificat est automatiquement renouvelé par CyberPanel avant son expiration.

> **Important :** Les DNS doivent être entièrement propagés vers l'adresse IP de votre serveur avant que Let's Encrypt ne puisse valider le domaine. Si l'émission SSL échoue immédiatement après le mappage, attendez la propagation DNS et relancez l'SSL depuis le tableau de bord CyberPanel sous **SSL** > **Manage SSL**.

### Sous-domaine www {#www-subdomain}

Si **Auto-create www subdomain** est activé dans vos paramètres de mappage de domaine, l'intégration crée également un alias d'hôte virtuel pour `www.<domaine>` et, lorsque l'SSL automatique est activé, émet un certificat couvrant à la fois les variantes de l'apex et de www.

### Transfert d'e-mails {#email-forwarders}

Lorsque le [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon est actif, CyberPanel peut également fournir des transferts d'e-mails clients. Les transferts acheminent les messages d'une adresse de domaine vers une autre boîte de réception sans créer une boîte aux lettres complète, ce qui est utile pour les alias tels que `info@customer-domain.test` ou `support@customer-domain.test`.

Avant d'activer les transferts pour les clients :

1. Confirmez que les constantes CyberPanel ci-dessus sont configurées et que le test de connexion réussit.
2. Activez le fournisseur de messagerie CyberPanel dans les paramètres de l'addon Emails.
3. Confirmez que le domaine client existe déjà dans CyberPanel avant de créer le transfert.
4. Créez un transfert de test et envoyez un message via celui-ci avant d'offrir la fonctionnalité sur les plans de production.

Si la création du transfert échoue, vérifiez d'abord les journaux d'activité d'Ultimate Multisite, puis confirmez dans CyberPanel que le domaine source existe et que l'utilisateur API dispose des permissions de gestion des e-mails.

## Référence de configuration {#configuration-reference}

| Constante | Requis | Défaut | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Oui | — | URL complète de votre instance CyberPanel incluant le port, ex. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Oui | — | Nom d'utilisateur administrateur CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Oui | — | Mot de passe administrateur CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Oui | `Default` | Package d'hébergement CyberPanel à assigner aux nouveaux hôtes virtuels |
| `WU_CYBERPANEL_AUTO_SSL` | Non | `true` | Émettre un certificat SSL Let's Encrypt après la création du domaine |
| `WU_CYBERPANEL_PHP_VERSION` | Non | `PHP 8.2` | Version PHP pour les nouveaux hôtes virtuels (doit correspondre à une version installée dans CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Non | — | E-mail de contact pour l'enregistrement du certificat SSL |

## Notes importantes {#important-notes}

*   L'API de CyberPanel utilise une authentification par jeton basée sur des sessions. L'intégration gère l'acquisition du jeton automatiquement lors de chaque appel API.
*   Votre compte administrateur CyberPanel doit avoir les permissions de création et de suppression de sites web.
*   CyberPanel fonctionne par défaut sur le port `8090`. Si votre serveur utilise un pare-feu, assurez-vous que ce port est accessible depuis le serveur d'application WordPress.
*   L'intégration ne gère pas les enregistrements DNS. Vous devez pointer les DNS du domaine vers l'adresse IP de votre serveur avant de mapper le domaine dans Ultimate Multisite.
*   Si vous utilisez OpenLiteSpeed (OLS), un redémarrage en douceur est déclenché automatiquement après les modifications d'hôtes virtuels. Aucune intervention manuelle n'est nécessaire.

## Dépannage {#troubleshooting}

### Connexion API refusée {#api-connection-refused}

*   Vérifiez que le port `8090` est ouvert dans le pare-feu de votre serveur.
*   Confirmez que la valeur `WU_CYBERPANEL_HOST` inclut le protocole correct (`https://`) et le port.
*   Vérifiez que votre certificat SSL CyberPanel est valide ; les certificats auto-signés peuvent provoquer des échecs de vérification TLS. Définissez `WU_CYBERPANEL_VERIFY_SSL` sur `false` uniquement dans des environnements réseau privés de confiance.

### Erreurs d'authentification {#authentication-errors}

*   Confirmez que votre `WU_CYBERPANEL_USERNAME` et `WU_CYBERPANEL_PASSWORD` sont corrects en vous connectant directement à CyberPanel.
*   CyberPanel verrouille les comptes après des tentatives de connexion échouées répétées. Vérifiez **Security** > **Brute Force Monitor** dans CyberPanel si des blocages se produisent.

### Domaine non créé {#domain-not-created}

*   Vérifiez les journaux d'activité d'Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) pour les messages d'erreur API.
*   Vérifiez que le package défini dans `WU_CYBERPANEL_PACKAGE` existe dans CyberPanel (**Packages** > **List Packages**).
*   Assurez-vous que le domaine n'est pas déjà enregistré comme site web dans CyberPanel — la création de sites web en double renvoie une erreur.

### Certificat SSL non émis {#ssl-certificate-not-issued}

*   Confirmez que les DNS ont été entièrement propagés : `dig +short your-domain.com` devrait retourner l'adresse IP de votre serveur.
*   Let's Encrypt applique des limites de débit. Si vous avez récemment émis plusieurs certificats pour le même domaine, attendez avant de réessayer.
*   Vérifiez les journaux SSL CyberPanel sous **Logs** > **Error Logs** pour les détails sur les échecs d'émission de certificat.
*   En dernier recours, vous pouvez émettre l'SSL manuellement depuis CyberPanel : **SSL** > **Manage SSL** > sélectionnez le domaine > **Issue SSL**.

## Références {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
