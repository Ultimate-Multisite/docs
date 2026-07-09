---
title: Recherche de domaine dans l’en-tête
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Recherche de domaine dans l’en-tête

Utilisez cette configuration lorsque vous voulez un petit formulaire d’en-tête qui lance une recherche de domaine, puis permet au client de choisir parmi les domaines disponibles dans le checkout Ultimate Multisite.

## Prérequis

- Ultimate Multisite actif sur le réseau.
- Multisite Ultimate Domain Seller actif sur le réseau.
- Au moins un produit d’enregistrement de domaine actif avec :
  - `domain_provider` défini sur un fournisseur configuré.
  - Des TLD pris en charge configurés, par exemple `com`, `net` et `org`.
- Un formulaire de checkout valide contenant le champ **Sélection de domaine**.

## Formulaire de checkout

1. Créez ou modifiez le formulaire de checkout utilisé par la page d’inscription.
2. Ajoutez les champs de checkout/Account normalement requis, y compris **Nom d’utilisateur**. Un formulaire de checkout contenant uniquement le champ de domaine est rejeté par la validation Ultimate Multisite.
3. Ajoutez un champ **Sélection de domaine**.
4. Définissez le mode Domain Selection sur **Register Only** lorsque le flux doit se concentrer sur les domaines enregistrés plutôt que sur les sous-domaines gratuits ou les domaines existants.
5. Assignez le produit d’enregistrement de domaine à ce champ.

La page d’inscription doit afficher le formulaire de checkout, par exemple :

```text
[wu_checkout slug="domain-form"]
```

## Formulaire d’en-tête

Ajoutez un petit formulaire `GET` dans l’en-tête du site qui envoie le terme de recherche saisi à la page de checkout sous forme de `domain_name` :

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ne présélectionnez pas de domaine dans du JavaScript d’en-tête personnalisé. L’en-tête doit uniquement transmettre le terme de recherche. Le script de checkout Domain Seller lit `?domain_name=example`, remplit la zone de recherche du checkout et lance la recherche de disponibilité afin que le client puisse choisir parmi les domaines renvoyés.

## Comportement attendu

Rechercher `example` dans l’en-tête doit ouvrir :

```text
/register/?domain_name=example
```

Le checkout doit ensuite afficher des résultats sélectionnables tels que :

- `example.com`
- `example.net`
- `example.org` indisponible
- d’autres TLD pris en charge par le fournisseur

Après avoir sélectionné un résultat disponible, le récapitulatif de la commande doit inclure le produit d’enregistrement de domaine et le nom de domaine sélectionné.

## Vérification

1. Ouvrez la page d’accueil.
2. Recherchez un nom brut, par exemple `example`.
3. Confirmez que l’URL du checkout inclut `?domain_name=example`.
4. Confirmez que le champ de domaine du checkout contient `example`.
5. Confirmez qu’une liste de choix de domaines apparaît.
6. Cliquez sur **Sélectionner** pour un domaine disponible.
7. Confirmez que le récapitulatif de la commande contient `Domain Registration - example.com` ou le domaine sélectionné.

## Dépannage

- Si aucune liste n’apparaît, vérifiez l’onglet réseau du navigateur pour `admin-ajax.php?action=wu_domain_search` et confirmez qu’il renvoie des `domains` ou `results` non vides.
- Si le formulaire de checkout échoue à la validation lors de l’enregistrement, ajoutez les champs Account requis tels que **Nom d’utilisateur**.
- Si la sélection d’un domaine ne met pas à jour le panier, confirmez que `window.wu_checkout_form` existe et que les ressources de checkout Domain Seller sont chargées sur la page de checkout.
