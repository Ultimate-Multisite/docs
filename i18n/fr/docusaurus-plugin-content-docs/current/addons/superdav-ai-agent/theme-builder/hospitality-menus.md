---
title: Menus de restauration
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menus de Restauration {#hospitality-menus}

La fonctionnalité **Menus de Restauration** permet à Theme Builder de générer et d'intégrer des pages de menus de nourriture et de boissons structurés directement sur votre site WordPress.

## Aperçu {#overview}

Theme Builder peut désormais créer des pages de menus professionnelles et structurées pour les entreprises de l'hôtellerie, y compris les restaurants, les cafés, les bars et les services de traiteur. Ces menus sont entièrement intégrés au design de votre site et peuvent être facilement mis à jour et gérés.

## Types de Restauration Pris en Charge {#supported-hospitality-types}

- **Restaurants** — menus de restauration complets
- **Cafés** — menus de café et de plats légers
- **Bars et Salons** — menus de boissons et d'amuse-gueules
- **Boulangeries** — menus de pâtisseries et de pains
- **Services de Traiteur** — options de menus pour événements
- **Food Trucks** — menus de service de nourriture mobile
- **Brasseries et Vignobles** — menus de boissons avec descriptions

## Structure du Menu {#menu-structure}

### Catégories de Menu {#menu-categories}

Les menus sont organisés par catégories :

- **Amuse-gueules** — entrées et petites assiettes
- **Plats Principaux** — plats principaux
- **Accompagnements** — accompagnements et légumes
- **Desserts** — douceurs
- **Boissons** — boissons (alcoolisées et non alcoolisées)
- **Spécialités** — spécialités du jour ou de saison

### Format des Articles de Menu {#menu-item-format}

Chaque article de menu comprend :

```json
{
  "name": "Saumon grillé",
  "description": "Saumon atlantique frais avec sauce au beurre et citron",
  "price": "$24.95",
  "dietary_info": ["Sans gluten", "Riche en protéines"],
  "allergens": ["Poisson"],
  "availability": "Quotidien"
}
```

#### Champs de l'Article {#item-fields}

| Champ | Type | Description |
|-------|------|-------------|
| `name` | string | Nom du plat ou de la boisson |
| `description` | string | Description détaillée de l'article |
| `price` | string | Prix (formaté avec la devise) |
| `dietary_info` | array | Attributs alimentaires (Végétarien, Sans gluten, etc.) |
| `allergens` | array | Allergènes courants (Noix, Crustacés, etc.) |
| `availability` | string | Quand il est disponible (Quotidien, Saisonniers, etc.) |

## Création de Menus de Restauration {#creating-hospitality-menus}

### Étape 1 : Fournir les Informations du Menu {#step-1-provide-menu-information}

Parlez à Theme Builder de votre menu :

```
Crée un menu de restaurant pour mon restaurant italien avec des amuse-gueules,
des plats de pâtes, des plats principaux et des desserts. Inclure les prix et les descriptions.
```

### Étape 2 : Theme Builder Génère le Menu {#step-2-theme-builder-generates-menu}

Theme Builder :

1. Crée une page de menu structurée
2. La conçoit pour correspondre au thème de votre site
3. Organise les articles par catégories
4. Formate les prix et les descriptions
5. Ajoute les informations diététiques et les allergènes

### Étape 3 : Réviser et Personnaliser {#step-3-review-and-customize}

Vous pouvez :

1. Modifier les articles et les prix du menu
2. Ajouter ou supprimer des catégories
3. Réorganiser les articles au sein des catégories
4. Mettre à jour les descriptions et les informations diététiques
5. Ajuster le style et la mise en page

## Options d'Affichage du Menu {#menu-display-options}

### Page de Menu Complète {#full-menu-page}

Une page dédiée affichant votre menu complet :

- Organisé par catégorie
- Recherchable et filtrable
- Mise en page adaptée à l'impression
- Design réactif sur mobile

### Widget de Menu {#menu-widget}

Intégrez des sections de menu sur d'autres pages :

- Articles vedettes sur la page d'accueil
- Spécialités du jour dans la barre latérale
- Menu des boissons sur la page du bar
- Vitrine de desserts dans le pied de page

### PDF de Menu {#menu-pdf}

Générez un menu PDF téléchargeable :

- Format professionnel
- Qualité prête à imprimer
- Inclut des images et des descriptions
- Facile à partager et à envoyer par e-mail

## Informations Diététiques et Allergènes {#dietary-and-allergen-information}

### Attributs Diététiques {#dietary-attributes}

Marquez les articles avec des informations diététiques :

- **Végétarien** — sans viande
- **Vegan** — sans produits animaux
- **Sans gluten** — sûr pour les personnes atteintes de maladie cœliaque
- **Sans produits laitiers** — sans produits laitiers
- **Sans noix** — sans noix de croisement ni arachides
- **Faible en glucides** — glucides réduits
- **Riche en protéines** — riche en protéines

### Avertissements d'Allergènes {#allergen-warnings}

Incluez les allergènes courants :

- **Noix** — noix de croisement et arachides
- **Crustacés** — crustacés et mollusques
- **Poisson** — toutes les espèces de poissons
- **Laitiers** — lait et produits laitiers
- **Œufs** — œufs de poulet
- **Soja** — produits de soja
- **Gluten** — blé et céréales contenant du gluten
- **Sésame** — graines et huile de sésame

## Gestion du Menu {#menu-management}

### Mise à Jour des Prix {#updating-prices}

Mettez facilement à jour les prix du menu :

1. Accédez à la page du menu
2. Cliquez sur "Modifier le menu"
3. Mettez à jour les prix des articles
4. Enregistrez les modifications
5. Les changements apparaissent immédiatement sur votre site

### Ajout d'Articles Saisonniers {#adding-seasonal-items}

Créez des variations de menu saisonnières :

1. Créez une nouvelle version du menu
2. Ajoutez les articles saisonniers
3. Marquez les articles comme "Saisonniers"
4. Planifiez les dates de disponibilité
5. Affichage automatique pendant la saison

### Gestion des Spécialités {#managing-specials}

Affichez les spécialités quotidiennes ou hebdomadaires :

1. Créez une catégorie "Spécialités"
2. Ajoutez des articles avec des dates de disponibilité
3. Mettez en évidence les spécialités sur la page d'accueil
4. Mettez à jour quotidiennement ou hebdomadairement
5. Archivez les anciennes spécialités

## Intégration avec Theme Builder {#integration-with-theme-builder}

Lorsque vous utilisez Theme Builder pour les sites de restauration :

1. **Détection automatique du menu** — identifie si vous êtes une entreprise alimentaire/boissons
2. **Création de page de menu** — génère des pages de menu professionnelles
3. **Adaptation au design** — les menus correspondent au thème de votre site
4. **Optimisation mobile** — les menus s'affichent magnifiquement sur les téléphones
5. **Optimisation SEO** — les menus sont adaptés aux moteurs de recherche

## Bonnes Pratiques {#best-practices}

### Design du Menu {#menu-design}

- **Organisation claire** — structure de catégories logique
- **Descriptions lisibles** — appétissantes et informatives
- **Tarification cohérente** — devise et formatage clairs
- **Photos professionnelles** — images de nourriture de haute qualité
- **Espace blanc** — ne surchargez pas la page

### Contenu {#content}

- **Descriptions précises** — décrivez les articles avec exactitude
- **Mettre en évidence les spécialités** — faites ressortir les spécialités
- **Inclure les allergènes** — listez toujours les allergènes
- **Mettre à jour régulièrement** — gardez les prix et les articles à jour
- **Utiliser un langage appétissant** — faites paraître les articles délicieux

### Accessibilité {#accessibility}

- **Polices lisibles** — utilisez des polices claires et lisibles
- **Contraste suffisant** — assurez-vous que le texte est lisible
- **Étiquettes diététiques** — marquez clairement les options alimentaires
- **Avertissements d'allergènes** — affichez les allergènes de manière visible
- **Compatible mobile** — testez sur tous les appareils

## Exemples {#examples}

### Structure de Menu de Restaurant {#restaurant-menu-structure}

```
Amuse-gueules
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salade Caprese

Plats de pâtes
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Plats Principaux
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Sélection de Glaces
```

### Structure de Menu de Café {#cafe-menu-structure}

```
Café
├── Espresso
├── Cappuccino
└── Latte

Pâtisseries
├── Croissants
├── Muffins
└── Scones

Sandwichs
├── Panini Caprese
├── Club au dinde fumée
└── Wrap végétarien
```

## Fonctionnalités Associées {#related-features}

- [Créer un Menu](../abilities/create-menu.md) — créer des menus de navigation
- [Direction du Design](./design-direction.md) — personnaliser le design de votre site
- [Entretien de Découverte](./discovery-interview.md) — planifier la structure de votre site
