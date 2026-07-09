---
title: Présentation de l’API REST
sidebar_position: 1
_i18n_hash: cabcc173f6a77e5de94e39fff19bc2fa
---
# Référence de l’API REST

## Configuration de base

**URL de base :** `{site_url}/wp-json/wu/v2/`
**Authentification :** clé API et secret (authentification HTTP Basic ou paramètres d’URL)

## Authentification

### Activer l’API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Obtenir les identifiants API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Méthodes d’authentification

**Authentification HTTP Basic (recommandée) :**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Paramètres d’URL :**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Points de terminaison principaux

### 1. API des clients

**Route de base :** `/customers`

**Obtenir tous les clients**
```http
GET /wu/v2/customers
```

**Obtenir un client unique**
```http
GET /wu/v2/customers/{id}
```

**Créer un client**
```http
POST /wu/v2/customers
Content-Type: application/json

{
    "user_id": 123,
    "email_verification": "verified",
    "type": "customer",
    "has_trialed": false,
    "vip": false
}
```

**Mettre à jour un client**
```http
PUT /wu/v2/customers/{id}
Content-Type: application/json

{
    "vip": true,
    "extra_information": "VIP customer notes"
}
```

**Supprimer un client**
```http
DELETE /wu/v2/customers/{id}
```

### 2. API des sites

**Route de base :** `/sites`

**Créer un site**
```http
POST /wu/v2/sites
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "domain": "example.com",
    "path": "/",
    "title": "My New Site",
    "template_id": 1,
    "type": "customer_owned"
}
```

### 3. API des adhésions

**Route de base :** `/memberships`

**Créer une adhésion**
```http
POST /wu/v2/memberships
Content-Type: application/json

{
    "customer_id": 5,
    "plan_id": 3,
    "status": "active",
    "gateway": "stripe",
    "gateway_subscription_id": "sub_1234567890",
    "auto_renew": true
}
```

### 4. API des produits

**Route de base :** `/products`

**Obtenir tous les produits**
```http
GET /wu/v2/products
```

### 5. API des paiements

**Route de base :** `/payments`

**Créer un paiement**
```http
POST /wu/v2/payments
Content-Type: application/json

{
    "customer_id": 5,
    "membership_id": 10,
    "status": "completed",
    "gateway": "stripe",
    "gateway_payment_id": "pi_1234567890",
    "total": 29.99,
    "currency": "USD"
}
```

### 6. API des domaines

**Route de base :** `/domains`

**Mapper un domaine**
```http
POST /wu/v2/domains
Content-Type: application/json

{
    "domain": "custom-domain.com",
    "customer_id": 5,
    "primary_domain": 1,
    "stage": "domain-mapping"
}
```

## Point de terminaison d’inscription

Le point de terminaison `/register` fournit un flux complet de paiement/d’inscription :

```http
POST /wu/v2/register
Content-Type: application/json

{
    "customer": {
        "username": "newuser",
        "password": "securepass123",
        "email": "user@example.com"
    },
    "products": ["basic-plan"],
    "duration": 1,
    "duration_unit": "month",
    "auto_renew": true,
    "site": {
        "site_url": "mynewsite",
        "site_title": "My New Site",
        "template_id": 1
    },
    "payment": {
        "status": "completed"
    },
    "membership": {
        "status": "active"
    }
}
```

**Réponse :**
```json
{
    "customer": { ... },
    "membership": { ... },
    "payment": { ... },
    "site": { "id": 123 }
}
```

## Points de terminaison des tenants souverains

Ultimate Multisite: Multi-Tenancy 1.2.0 ajoute une couverture REST des tenants souverains pour les intégrations qui provisionnent, inspectent ou vérifient des tenants isolés.

La charge utile exacte de la requête dépend de la capacité d’hôte activée, mais les intégrations doivent s’attendre à ces groupes de points de terminaison :

```http
POST /wu/v2/tenants/{site_id}/bootstrap
GET /wu/v2/tenants/{site_id}/migration-status
POST /wu/v2/tenants/{site_id}/verify
DELETE /wu/v2/tenants/{site_id}
```

Utilisez le point de terminaison bootstrap pour préparer le registre du tenant, la base de données, le système de fichiers et l’état du routage. Utilisez les points de terminaison d’état de migration et de vérification avant de basculer le trafic de production. Utilisez le point de terminaison de suppression pour le démantèlement souverain afin que les identifiants de base de données soient supprimés via le flux de nettoyage de l’addon.

Les réponses typiques d’état de migration incluent :

```json
{
    "site_id": 123,
    "isolation_model": "sovereign",
    "database_host": "localhost",
    "verification": {
        "no_legacy": "passed",
        "sovereign_push": "passed",
        "tenant_users": "passed"
    },
    "ready": true
}
```

Traitez `ready: false` comme un blocage avant lancement. Vérifiez les détails de vérification, corrigez la liaison de l’hôte de base de données, la file d’attente, le provisionnement des utilisateurs ou le problème de routage, puis relancez la vérification.

## Réponses d’erreur

```json
{
    "code": "wu_rest_invalid_parameter",
    "message": "Invalid parameter value",
    "data": {
        "status": 400,
        "params": {
            "email": "Invalid email format"
        }
    }
}
```

## Pagination et filtrage

**Paramètres de requête :**
```http
GET /wu/v2/customers?per_page=20&page=2&search=john&status=active
```

Paramètres courants :
- `per_page` - Éléments par page (par défaut : 20, max : 100)
- `page` - Numéro de page
- `search` - Terme de recherche
- `orderby` - Champ de tri
- `order` - Direction du tri (asc/desc)
- `status` - Filtrer par statut
- `date_created` - Filtrer par plage de dates
