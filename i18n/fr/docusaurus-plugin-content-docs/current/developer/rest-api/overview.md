---
title: Vue d'ensemble de l'API REST
sidebar_position: 1
_i18n_hash: 4e511d92e0002dff445f45ff05adbeda
---
# Référence de l'API REST

## Configuration de base

**URL de base :** `{site_url}/wp-json/wu/v2/`  
**Authentification :** API Key & Secret (Authentification HTTP Basic ou Paramètres d'URL)

## Authentification

### Activer l'API
```php
// Enable API in Ultimate Multisite settings or programmatically
wu_save_setting('enable_api', true);
```

### Obtenir les identifiants API
```php
$api_key = wu_get_setting('api_key');
$api_secret = wu_get_setting('api_secret');
```

### Méthodes d'authentification

**Authentification HTTP Basic (Recommandé) :**
```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

**Paramètres d'URL :**
```bash
curl "https://yoursite.com/wp-json/wu/v2/customers?api_key=your_key&api_secret=your_secret"
```

## Points de terminaison principaux

### 1. API Clients

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

### 2. API Sites

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

### 3. API Abonnements

**Route de base :** `/memberships`

**Créer un abonnement**
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

### 4. API Produits

**Route de base :** `/products`

**Obtenir tous les produits**
```http
GET /wu/v2/products
```

### 5. API Paiements

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

### 6. API Domaines

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

## Point de terminaison d'enregistrement

Le point de terminaison `/register` fournit un flux complet de paiement/enregistrement :

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

## Réponses d'erreur

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

Paramètres communs :
- `per_page` - Articles par page (défaut : 20, maximum : 100)
- `page` - Numéro de page
- `search` - Terme de recherche
- `orderby` - Champ de tri
- `order` - Direction de tri (asc/desc)
- `status` - Filtrer par statut
- `date_created` - Filtrer par plage de dates
