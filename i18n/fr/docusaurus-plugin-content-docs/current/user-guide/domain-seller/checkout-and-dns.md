---
title: Champ de validation de commande et DNS du client
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Champ de paiement et gestion DNS client

## Le champ de paiement Sélection de domaine {#the-domain-selection-checkout-field}

Le champ **Sélection de domaine** est un élément de paiement qui donne aux clients le choix de la manière d’obtenir le domaine de leur site. Ajoutez-le à n’importe quel formulaire de paiement pour activer la vente de domaines.

### Ajouter le champ à un formulaire de paiement {#adding-the-field-to-a-checkout-form}

1. Allez dans **Administration du réseau › Ultimate Multisite › Formulaires de paiement**
2. Ouvrez ou créez un formulaire de paiement
3. Dans l’éditeur de paiement, cliquez sur **Ajouter un champ**
4. Choisissez **Sélection de domaine** dans la liste des champs
5. Configurez les options du champ (voir ci-dessous)
6. Enregistrez le formulaire

### Options du champ {#field-options}

**Modes de domaine** — Choisissez les onglets que le client voit. Chaque mode peut être activé ou désactivé indépendamment :

| Mode | Ce qu’il fait |
|---|---|
| **Sous-domaine** | Le client utilise un sous-domaine gratuit sur votre réseau (par exemple, `mysite.yournetwork.com`). Aucun paiement requis. |
| **Enregistrer un nouveau domaine** | Le client recherche un nouveau domaine et l’enregistre via votre fournisseur configuré. Utilise le produit de domaine correspondant pour la tarification. |
| **Domaine existant** | Le client mappe un domaine qu’il possède déjà. Aucun frais d’enregistrement. Le domaine est mappé automatiquement à son site. |

**Mode par défaut** — Lorsque les trois modes sont activés, l’onglet qui s’ouvre en premier. Définissez sur **Sous-domaine** pour garder l’enregistrement de domaine facultatif, ou sur **Enregistrer un nouveau domaine** pour encourager les achats.

**Produit de domaine** — Épinglez éventuellement ce champ à un produit de domaine spécifique. S’il n’est pas défini, l’addon sélectionne automatiquement le produit correspondant en fonction du TLD recherché par le client.

### Champs de contact du titulaire {#registrant-contact-fields}

Lorsqu’un client sélectionne l’onglet **Enregistrer un nouveau domaine**, le formulaire de paiement ajoute les champs de contact du titulaire directement dans le formulaire :

- Prénom / Nom
- Adresse e-mail
- Adresse (ligne 1, ville, état/province, code postal, pays)
- Numéro de téléphone

Ils sont requis par tous les bureaux d’enregistrement et validés avant l’appel à l’API d’enregistrement. Les numéros de téléphone sont automatiquement formatés au format international `+CC.NNN` attendu par les bureaux d’enregistrement.

### URL de site générée automatiquement {#auto-generated-site-url}

Lorsqu’un client enregistre ou mappe un domaine, le champ URL du site est automatiquement rempli à partir du domaine choisi. Les clients n’ont pas besoin de remplir un champ URL séparé.

### Comportement de recherche {#search-behaviour}

- La disponibilité du domaine est vérifiée en temps réel avec AJAX à mesure que le client saisit
- Des suggestions de TLD alternatifs sont affichées lorsque le domaine préféré est indisponible
- Les prix sont récupérés en direct et affichés clairement (prix d’enregistrement, prix de renouvellement, frais facultatifs de confidentialité WHOIS)
- Les codes de coupon s’appliquent aux produits de domaine comme à tout autre produit

**Ajuster la réactivité de la recherche :**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Ajouter des champs personnalisés au formulaire de recherche de domaine :**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## Gestion DNS client {#customer-dns-management}

Les clients peuvent gérer les enregistrements DNS de leurs domaines enregistrés depuis la page **Mon Account**, sous l’entrée de leur domaine.

### Types d’enregistrements pris en charge {#supported-record-types}

| Type | Utilisation |
|---|---|
| **A** | Mapper un nom d’hôte à une adresse IPv4 |
| **AAAA** | Mapper un nom d’hôte à une adresse IPv6 |
| **CNAME** | Créer un alias pointant vers un autre nom d’hôte |
| **MX** | Définir le serveur d’échange de courrier |
| **TXT** | Ajouter des enregistrements SPF, DMARC, de vérification ou d’autres enregistrements texte |

### Quels fournisseurs prennent en charge la gestion DNS ? {#which-providers-support-dns-management}

La gestion DNS (ajout, modification, suppression d’enregistrements) est disponible avec **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** et **Openprovider**. Les domaines **Hostinger** peuvent mettre à jour les serveurs de noms via Domain Seller ; les enregistrements DNS des domaines hébergés sont gérés par l’intégration principale de mappage de domaines Hostinger. Les domaines Namecheap, GoDaddy et NameSilo affichent les informations de statut et d’expiration, mais le DNS doit être géré directement dans le panneau de contrôle du bureau d’enregistrement.

### Enregistrements DNS par défaut {#default-dns-records}

Vous pouvez configurer des enregistrements DNS par défaut appliqués automatiquement lorsqu’un domaine est enregistré. Allez dans **Réglages › Domain Seller › Enregistrements DNS par défaut**.

Les valeurs d’enregistrement par défaut prennent en charge deux tokens :

| Token | Remplacé par |
|---|---|
| `{DOMAIN}` | Le nom de domaine enregistré (par exemple, `example.com`) |
| `{SITE_URL}` | L’URL du site WordPress pour le site du client |

**Exemple — faire pointer le domaine apex et www vers l’IP de votre serveur :**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin : consulter et modifier le DNS {#admin-viewing-and-editing-dns}

Les administrateurs réseau peuvent consulter et modifier les enregistrements DNS de n’importe quel domaine client depuis la page de modification du domaine dans **Administration du réseau › Ultimate Multisite › Domaines**.
