---
title: Champ de paiement et DNS client
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Gestion des champs de paiement et des DNS clients

## Le champ de sélection de domaine

Le champ **Sélection de domaine** est un élément de paiement qui permet aux clients de choisir comment obtenir le domaine de leur site. Ajoutez-le à n'importe quel formulaire de paiement pour activer la vente de domaines.

### Ajouter le champ à un formulaire de paiement

1. Allez dans **Admin réseau › Ultimate Multisite › Formulaires de paiement**
2. Ouvrez ou créez un formulaire de paiement
3. Dans l'éditeur de paiement, cliquez sur **Ajouter un champ**
4. Choisissez **Sélection de domaine** dans la liste des champs
5. Configurez les options du champ (voir ci-dessous)
6. Enregistrez le formulaire

### Options du champ

**Modes de domaine** — Choisissez les onglets que le client verra. Chaque mode peut être activé ou désactivé indépendamment :

| Mode | Fonctionnalité |
|---|---|
| **Sous-domaine** | Le client utilise un sous-domaine gratuit sur votre réseau (ex. : `mysite.votre-reseau.com`). Aucun paiement requis. |
| **Enregistrer un nouveau domaine** | Le client recherche et enregistre un nouveau domaine via votre fournisseur configuré. Utilise le produit de domaine correspondant pour le prix. |
| **Domaine existant** | Le client lie un domaine qu'il possède déjà. Pas de frais d'enregistrement. Le domaine est lié automatiquement à son site. |

**Mode par défaut** — Lorsque les trois modes sont activés, quel onglet s'ouvre en premier. Définissez sur **Sous-domaine** pour que l'enregistrement de domaine reste optionnel, ou sur **Enregistrer un nouveau domaine** pour encourager les achats.

**Produit de domaine** — Vous pouvez optionnellement lier ce champ à un produit de domaine spécifique. S'il n'est pas défini, l'addon sélectionne automatiquement le produit correspondant en fonction du TLD que le client recherche.

### Champs de contact du titulaire

Lorsqu'un client sélectionne l'onglet **Enregistrer un nouveau domaine**, le formulaire de paiement ajoute des champs de contact du titulaire en ligne :

- Prénom / Nom
- Adresse e-mail
- Adresse (ligne 1, ville, état/province, code postal, pays)
- Numéro de téléphone

Ces informations sont requises par tous les registraires et validées avant que l'appel API d'enregistrement ne soit effectué. Les numéros de téléphone sont automatiquement formatés au format international `+CC.NNN` attendu par les registraires.

### URL du site générée automatiquement

Lorsqu'un client enregistre ou lie un domaine, le champ URL du site est automatiquement rempli à partir du domaine choisi. Les clients n'ont pas besoin de remplir un champ URL séparé.

### Comportement de recherche

- La disponibilité du domaine est vérifiée en temps réel via AJAX pendant que le client tape
- Des suggestions de TLD alternatifs sont affichées lorsque le domaine préféré est indisponible
- Les prix sont récupérés en direct et affichés clairement (prix d'enregistrement, prix de renouvellement, frais optionnels de confidentialité WHOIS)
- Les codes de réduction s'appliquent aux produits de domaine comme à n'importe quel autre produit

**Ajuster la réactivité de la recherche :**

```php
// Augmenter le délai de débouncing (millisecondes) pour réduire les appels API sur les connexions lentes
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // par défaut : 500
});
```

**Ajouter des champs personnalisés au formulaire de recherche de domaine :**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Notes supplémentaires',
    ];
    return $fields;
});
```

---

## Gestion DNS des clients

Les clients peuvent gérer les enregistrements DNS de leurs domaines enregistrés depuis la page **Mon compte**, sous l'entrée de leur domaine.

### Types d'enregistrements pris en charge

| Type | Utilisation |
|---|---|
| **A** | Lie un nom d'hôte à une adresse IPv4 |
| **AAAA** | Lie un nom d'hôte à une adresse IPv6 |
| **CNAME** | Crée un alias pointant vers un autre nom d'hôte |
| **MX** | Définit le serveur d'échange de courrier |
| **TXT** | Ajoute des enregistrements texte SPF, DMARC, de vérification ou autres |

### Quels fournisseurs prennent en charge la gestion DNS ?

La gestion DNS (ajout, modification, suppression d'enregistrements) est disponible avec **OpenSRS**, **ResellerClub** et **Enom**. Les domaines Namecheap, GoDaddy et NameSilo affichent les informations de statut et d'expiration, mais les DNS doivent être gérés directement dans le panneau de contrôle du registraire.

### Enregistrements DNS par défaut

Vous pouvez configurer des enregistrements DNS par défaut qui sont appliqués automatiquement lorsqu'un domaine est enregistré. Allez dans **Réglages › Vendeur de domaine › Enregistrements DNS par défaut**.

Les valeurs d'enregistrement par défaut prennent en charge deux jetons :

| Jeton | Remplacé par |
|---|---|
| `{DOMAIN}` | Le nom de domaine enregistré (ex. : `example.com`) |
| `{SITE_URL}` | L'URL du site WordPress du client |

**Exemple — pointer le domaine racine et www vers l'IP de votre serveur :**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Administrateur : visualisation et modification des DNS

Les administrateurs réseau peuvent visualiser et modifier les enregistrements DNS de n'importe quel domaine client depuis la page d'édition du domaine dans **Admin réseau › Ultimate Multisite › Domaines**.
