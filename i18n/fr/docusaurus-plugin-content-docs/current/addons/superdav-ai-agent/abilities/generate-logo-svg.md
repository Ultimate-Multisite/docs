---
title: Générer Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Générer un logo SVG

La capacité **Générer un logo SVG** permet à Theme Builder de créer et d'intégrer des logos SVG personnalisés directement sur votre site WordPress, avec un assainissement automatique et sécurisé des espaces de noms.

## Aperçu

Cette fonctionnalité génère des logos en graphiques vectoriels évolutifs (SVG) basés sur l'orientation de marque et les préférences de conception de votre site. Les SVG générés sont automatiquement assainis pour garantir qu'ils sont sûrs à utiliser dans WordPress tout en conservant leur intégrité visuelle.

## Paramètres

| Paramètre | Type | Requis | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Oui | Le nom du site pour lequel générer le logo |
| `style` | string | Oui | Le style de conception (ex. : "moderne", "classique", "minimaliste", "joueur") |
| `colors` | array | Non | Tableau de codes couleurs hexadécimaux à utiliser dans le logo (ex. : `["#678233", "#ffffff"]`) |
| `width` | number | Non | Largeur du SVG en pixels (par défaut : 200) |
| `height` | number | Non | Hauteur du SVG en pixels (par défaut : 200) |
| `include_text` | boolean | Non | Indiquer si le nom du site doit être inclus sous forme de texte dans le logo (par défaut : true) |

## Format de sortie

La fonctionnalité renvoie une chaîne SVG avec la structure suivante :

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Comportement d'assainissement SVG

Les SVG générés subissent un assainissement automatique sécurisé des espaces de noms afin de :

- **Supprimer les attributs non sécurisés** — supprime les gestionnaires d'événements, les scripts et les attributs potentiellement dangereux.
- **Préserver les espaces de noms** — maintient les espaces de noms SVG (xmlns, xlink) pour un rendu correct.
- **Valider la structure** — garantit que le SVG est conforme aux normes W3C.
- **Encoder les entités** — échappe correctement les caractères spéciaux dans le contenu textuel.
- **Supprimer les références externes** — supprime les feuilles de style et les références d'images externes.

Ceci garantit que le SVG est sûr à intégrer directement dans WordPress sans nécessiter d'assainissement supplémentaire.

## Exemple d'utilisation

**Invite :**
```
Générer un logo moderne pour ma startup technologique appelée "CloudSync" en utilisant des couleurs bleu et blanc.
```

**Résultat :**
La fonctionnalité crée un logo SVG qui :
- Intègre le nom du site "CloudSync"
- Utilise la palette de couleurs bleu et blanc spécifiée
- Suit les principes de conception modernes
- Est automatiquement assaini et prêt à être utilisé

## Intégration avec Theme Builder

Lorsque vous utilisez la sélection d'orientation de conception de Theme Builder, la fonctionnalité Générer un logo SVG :

1. Analyse votre orientation de conception et votre palette de couleurs.
2. Génère un logo SVG personnalisé correspondant à vos préférences.
3. Intègre automatiquement le logo dans l'en-tête/la zone de marque de votre site.
4. Stocke le SVG comme un logo personnalisé dans la médiathèque de WordPress.

## Bonnes pratiques

- **Fournir des préférences de style claires** — décrivez le style de conception souhaité (moderne, classique, joueur, etc.).
- **Spécifier les couleurs** — incluez les couleurs de votre marque pour assurer la cohérence.
- **Tester le rendu** — vérifiez que le logo s'affiche correctement sur différentes tailles d'écran.
- **Personnaliser davantage** — utilisez les outils de personnalisation de logo de WordPress pour ajuster la taille et le placement.

## Limitations

- Les logos SVG sont générés comme graphiques statiques (non animés).
- Les logos complexes avec de nombreux éléments peuvent nécessiter un affinement manuel.
- Les polices personnalisées ne sont pas prises en charge ; le texte utilise les polices système.
- Des dimensions très grandes ou très petites peuvent affecter la qualité.

## Fonctionnalités associées

- [Validate Palette Contrast](./validate-palette-contrast.md) — vérifier le contraste des couleurs pour l'accessibilité
- [Create Menu](./create-menu.md) — créer des menus de navigation pour votre site
