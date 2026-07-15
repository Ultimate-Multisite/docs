---
title: Compétences en esthétique des systèmes de conception
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Maîtriser l'esthétique du système de design

La **compétence Esthétique du système de design** est une approche guidée pour affiner l'identité visuelle de votre site. Elle vous aide à prendre des décisions cohérentes concernant la typographie, la couleur, l'espacement et les *tokens* de mouvement qui définissent votre système de design.

## Qu'est-ce que l'esthétique du système de design ? {#what-is-design-system-aesthetics}

L'esthétique du système de design est une compétence structurée qui couvre :

- **Typographie** : Familles de polices, tailles, graisses et interlignages
- **Couleur** : Palettes primaires, secondaires, d'accentuation et neutres
- **Espacement** : Échelles de rembourrage (*padding*), de marge (*margin*) et d'écart (*gap*)
- **Bordures** : *Tokens* de rayon et de largeur
- **Ombres** : *Tokens* d'élévation et de profondeur
- **Mouvement** : Animations et transitions

Ces décisions sont enregistrées dans le fichier `theme.json` de votre thème, créant ainsi un système visuel cohérent.

## Pourquoi utiliser l'esthétique du système de design ? {#why-use-design-system-aesthetics}

### Cohérence {#consistency}

Un système de design garantit que :

- Tout le texte utilise la même échelle typographique
- Les couleurs sont utilisées de manière uniforme sur l'ensemble de votre site
- L'espacement suit un modèle prévisible
- Les animations semblent unifiées

### Efficacité {#efficiency}

Au lieu de prendre des décisions de design page par page, vous :

- Définissez les *tokens* une seule fois
- Les appliquez partout
- Les mettez à jour globalement en modifiant une seule valeur

### Flexibilité {#flexibility}

Vous pouvez :

- Ajuster l'intégralité de votre système de design rapidement
- Expérimenter avec différentes esthétiques
- Maintenir la cohérence de la marque tout en évoluant

## Déclencher la compétence Esthétique du système de design {#triggering-the-design-system-aesthetics-skill}

### Activation manuelle {#manual-activation}

Vous pouvez démarrer la compétence à tout moment :

```
"Aidez-moi à affiner mon système de design"
```

ou

```
"Améliorons l'esthétique de mon site"
```

ou

```
"Guidez-moi à travers les décisions de système de design"
```

### Suggestions automatiques {#automatic-suggestions}

Les agents peuvent suggérer d'utiliser cette compétence lorsque vous :

- Demandez des modifications de design
- Sollicitez une refonte "moderne" ou "professionnelle"
- Souhaitez améliorer la cohérence visuelle
- Vous préparez à lancer votre site

## Le processus d'esthétique du système de design {#the-design-system-aesthetics-process}

### Étape 1 : Typographie {#step-1-typography}

L'agent vous pose des questions sur vos choix de polices :

```
Quel est votre style typographique préféré ?
- Sérif (traditionnel, élégant)
- Sans-sérif (moderne, épuré)
- Monospace (technique, axé sur le code)

Pour la police de vos titres :
- Voulez-vous une police de titre distincte, ou utiliser celle du corps de texte ?
- Préférence : audacieux, élégant, ludique, minimaliste ?

Pour la police de votre corps de texte :
- La lisibilité est essentielle. Préférez-vous :
  - Un texte plus grand et plus aéré
  - Un texte compact et efficace
  - Une taille standard
```

L'agent définit ensuite :

- **Police de titre** : Police principale pour les titres et les en-têtes
- **Police de corps** : Police pour les paragraphes et le texte principal
- **Police monospace** : Police pour le code et le contenu technique
- **Échelle de taille** : Tailles prédéfinies (petit, base, grand, XL, etc.)
- **Échelle de graisse** : Graisses de police (régulier, moyen, gras, etc.)
- **Interlignage** : Espacement entre les lignes pour une meilleure lisibilité

### Étape 2 : Palette de couleurs {#step-2-color-palette}

```
Définissons votre palette de couleurs.

Couleur primaire (la couleur de votre marque) :
- Actuel : [affiche la couleur existante]
- Changer pour : [sélecteur de couleur ou code hexadécimal]

Couleur secondaire (couleur de soutien) :
- Actuel : [affiche la couleur existante]
- Changer pour : [sélecteur de couleur ou code hexadécimal]

Couleur d'accentuation (mise en évidence et CTA) :
- Actuel : [affiche la couleur existante]
- Changer pour : [sélecteur de couleur ou code hexadécimal]

Palette neutre (gris pour le texte, les bordures, les arrière-plans) :
- Clair : [couleur]
- Moyen : [couleur]
- Foncé : [couleur]
```

L'agent crée une palette complète incluant :

- Les couleurs primaire, secondaire et d'accentuation
- Les gris neutres (clair, moyen, foncé)
- Les couleurs sémantiques (succès, avertissement, erreur)
- Les états de survol et actifs

### Étape 3 : Espacement {#step-3-spacing}

```
Combien d'espace de respiration souhaitez-vous ?

Préférence d'échelle d'espacement :
- Compact (dispositions serrées, efficaces)
- Normal (espacement équilibré)
- Aéré (beaucoup d'espace blanc)

Ceci affecte :
- Le rembourrage à l'intérieur des boutons et des cartes
- Les marges entre les sections
- L'écart entre les éléments de grille
```

L'agent définit des *tokens* d'espacement :

- Unité de base (généralement 4px ou 8px)
- Échelle : xs, sm, md, lg, xl, 2xl
- Valeurs spécifiques pour le rembourrage, la marge, l'écart

### Étape 4 : Bordures et ombres {#step-4-borders-and-shadows}

```
Profondeur et définition visuelles :

Préférence de rayon de bordure :
- Net (sans arrondi)
- Subtil (petit rayon)
- Arrondi (rayon moyen)
- Très arrondi (grand rayon)

Profondeur de l'ombre :
- Plat (pas d'ombres)
- Subtil (ombres légères)
- Prononcé (ombres fortes)
```

L'agent crée :

- Des *tokens* de rayon de bordure (pour les boutons, les cartes, les champs de saisie)
- Des *tokens* d'ombre pour les niveaux d'élévation
- Des *tokens* de largeur de bordure

### Étape 5 : Mouvement et animation {#step-5-motion-and-animation}

```
Comment votre site doit-il se sentir lorsqu'il est interactif ?

Préférence d'animation :
- Minimal (pas d'animations)
- Subtil (transitions douces)
- Ludique (animations perceptibles)

Animations spécifiques :
- Transitions de page : fondu, glissement ou aucun ?
- Survol de bouton : échelle, changement de couleur, ou les deux ?
- États de chargement : spinner, squelette ou barre de progression ?
```

L'agent définit :

- Durées de transition (rapide, normal, lent)
- Fonctions d'accélération (*easing functions*) (ease-in, ease-out, ease-in-out)
- Images clés d'animation pour les interactions courantes

## Appliquer l'esthétique du système de design {#applying-design-system-aesthetics}

### Application automatique {#automatic-application}

Après avoir terminé la compétence, l'agent :

1. Met à jour le `theme.json` de votre thème avec tous les *tokens*
2. Applique le système de design à votre thème actif
3. Régénère les styles de blocs pour correspondre au nouveau système
4. Active le thème mis à jour

### Application manuelle {#manual-application}

Vous pouvez également modifier `theme.json` directement :

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Visualiser votre système de design {#viewing-your-design-system}

### Demander à l'agent {#ask-the-agent}

```
"Montrez-moi mon système de design"
```

ou

```
"Quels sont mes tokens de design actuels ?"
```

L'agent affichera votre typographie, vos couleurs, votre espacement et vos autres *tokens*.

### Voir theme.json {#view-themejson}

Ouvrez `/wp-content/themes/[theme-name]/theme.json` dans un éditeur de texte pour voir les définitions brutes des *tokens*.

## Mettre à jour votre système de design {#updating-your-design-system}

### Mises à jour rapides {#quick-updates}

Demandez à l'agent des changements spécifiques :

```
"Rendre la couleur primaire plus foncée"
```

ou

```
"Augmenter l'échelle d'espacement de 20 %"
```

ou

```
"Changer la police de titre pour une sérif"
```

### Refonte complète {#full-redesign}

Relancez la compétence Esthétique du système de design :

```
"Redesigner l'intégralité de mon système de design"
```

Cela vous guidera à travers toutes les décisions, en partant de vos valeurs actuelles.

### Mises à jour partielles {#partial-updates}

Mettez à jour des aspects spécifiques :

```
"Mettre à jour uniquement la palette de couleurs, garder le reste"
```

## Bonnes pratiques du système de design {#design-system-best-practices}

### Cohérence {#consistency-1}

- Utiliser les mêmes *tokens* partout
- Ne pas créer de couleurs ou de tailles ponctuelles
- Faire référence aux *tokens* plutôt que de coder en dur des valeurs

### Nommage {#naming}

Utiliser des noms clairs et sémantiques :

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Évolutivité (Scalability) {#scalability}

Concevoir votre système pour qu'il puisse évoluer :

- Utiliser des unités relatives (rem, em) plutôt que des pixels
- Créer des échelles (xs, sm, md, lg, xl) plutôt que des valeurs arbitraires
- Prévoir les ajouts futurs

### Documentation {#documentation}

Documenter votre système de design :

- Pourquoi vous avez choisi des couleurs spécifiques
- Quand utiliser chaque *token*
- Les exceptions et cas limites

## Schémas courants de système de design {#common-design-system-patterns}

### Minimaliste moderne {#modern-minimalist}

- Typographie sans-sérif (Inter, Helvetica)
- Palette de couleurs limitée (2-3 couleurs)
- Espacement généreux
- Ombres subtiles
- Animations fluides et rapides

### Chaleureux et amical {#warm-and-friendly}

- Mélange de sérif et sans-sérif
- Palette de couleurs chaudes (oranges, gris chauds)
- Coins arrondis
- Ombres douces
- Animations ludiques

### Corporate professionnel {#professional-corporate}

- Sans-sérif épuré (Roboto, Open Sans)
- Palette neutre avec couleur d'accentuation
- Espacement structuré
- Ombres minimales
- Transitions subtiles

### Créatif et audacieux {#creative-and-bold}

- Typographie distinctive
- Palette de couleurs audacieuse
- Espacement varié
- Ombres fortes
- Animations perceptibles

## Dépannage {#troubleshooting}

**Mes changements de système de design ne s'affichent pas**
- Vider le cache de votre navigateur
- Reconstruire votre site si vous utilisez un générateur statique
- Vérifier que `theme.json` est un JSON valide
- Vérifier que le thème est actif

**Les couleurs sont différentes sur différentes pages**
- Vérifier les conflits CSS dans les plugins
- Vérifier que toutes les pages utilisent le même thème
- Vider tout plugin de mise en cache

**Je veux revenir à un système de design précédent**
- Demander à l'agent : "Montrez-moi l'historique de mon système de design"
- Modifier manuellement `theme.json` avec les anciennes valeurs
- Relancer la compétence avec des choix différents

## Prochaines étapes {#next-steps}

Après avoir défini votre système de design :

1. **Examiner votre site** : Visitez votre site pour voir le nouveau design
2. **Affiner davantage** : Effectuer des ajustements en utilisant à nouveau la compétence
3. **Créer des modèles** : Construire des modèles de blocs personnalisés en utilisant vos *tokens* de design
4. **Documenter** : Partager votre système de design avec les membres de l'équipe
