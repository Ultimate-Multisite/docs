---
title: Abilités Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Capables de Theme Builder : Scaffold ak Block Themes

Superdav AI Agent v1.12.0 bay nou de tou de fòs kapab ou kreye epi deplwaye custom block themes dirèkt nan chat interface la.

## Aperçu {#overview}

Capabiliti **scaffold-block-theme** ak **activate-theme** yo pèmèt agents yo:
- Kreye complete, pròp pou pwodiksyon block themes baze sou spesifikasyon ou bay nou
- Mete themes yo otomatikman sou sit ou san okenn entèvansyon manual
- Kreye idantite vizyèl ki kohezif atravè desizyon konsepsyon ki gide pa nou

## Scaffold Block Theme {#scaffold-block-theme}

Capabiliti **scaffold-block-theme** la kreye yon nou WordPress block theme ki gen tout estrikti theme a, ki gen ladan:

- Konfigirasyon `theme.json` ak design tokens
- Fichiers template Block pou layout komen yo
- Estil ak varyasyon blok koutim
- Metadata theme ak deklarasyon sipò

### Kijan pou Ou Chèche Li (How to Invoke) {#how-to-invoke}

Nan chat ou a ak Superdav AI Agent, ou ka mande kreye yon theme:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent la pral fè sa:
1. Rasanble prefere konsepsyon ou atravè konvèsasyon an
2. Kreye tout estrikti theme a
3. Kreye tout fichye theme ki nesesè yo
4. Prepare theme a pou activate li

### Rezilta Ki Ou Dwe Konnen (Expected Output) {#expected-output}

Lè capabiliti a eksekite siksè, ou pral wè:

- Konfimasyon ke theme a te scaffold (kreye an kòmanse)
- Non ak lokalizasyon theme a
- Yon rezime de design tokens ki aplike yo (koulè, tipografi, espas)
- Stat "Ready to activate" (Prêt pou aktive)

Egzanp rezilta:
```
✓ Theme "Modern Agency" scaffolded siksè
  Lokalizasyon: /wp-content/themes/modern-agency/
  Koulè: Primary #0066CC, Secondary #FFFFFF
  Tipografi: Inter (sans-serif)
  Stat: Ready to activate
```

## Activate Theme {#activate-theme}

La capacité **activate-theme** change ton site pour utiliser un thème que tu as nouvellement créé ou qui existe déjà.

### Comment l'utiliser {#how-to-invoke-1}

Après avoir créé un thème, tu peux l'activer tout de suite :

```
"Activer le thème Modern Agency"
```

Ou activer n'importe quel thème existant :

```
"Passer au thème Twentytwentyfour"
```

### Résultat attendu {#expected-output-1}

Quand l'activation réussit :

- Confirmation du thème actif
- Nom de l'ancien thème (pour référence)
- URL du site où le thème est maintenant en ligne
- Toute note de configuration spécifique au thème

Exemple de résultat :
```
✓ Thème activé avec succès
  Thème actif : Modern Agency
  Ancien thème : Twentytwentyfour
  En ligne à : https://yoursite.com
  Note : Vérifie ta page d'accueil pour confirmer la mise en page
```

## Flux de travail : Créer et Activer {#workflow-scaffold-and-activate}

Un flux de travail typique combine les deux capacités :

1. **Demander la génération du thème**: "Créer un thème bloc pour ma page d'atterrissage SaaS"
2. **L'agent crée le thème**: Génère les fichiers et les jetons de conception (design tokens)
3. **Examiner et affiner**: Discuter des changements de design si nécessaire
4. **Activer**: "Activer le thème maintenant"
5. **Vérifier**: Visiter ton site pour confirmer que le nouveau design est en ligne

## Jetons de conception (Design Tokens) et Personnalisation {#design-tokens-and-customization}

Les thèmes créés sont basés sur les jetons de conception WordPress (via `theme.json`) pour :

- **Couleurs** : Palette principale, secondaire, accent, neutre
- **Typographie** : Familles de polices, tailles, graisses, hauteurs de ligne
- **Espacement** : Padding, marge, échelles d'espacement
- **Bordures** : Jetons de rayon et de largeur
- **Ombres** : Niveaux d'élévation

Ces jetons sont centralisés dans `theme.json`, ce qui facilite l'ajustement de tout ton système de design à partir d'un seul fichier.

## Limitations et Notes {#limitations-and-notes}

Les thèmes s'installent dans `/wp-content/themes/` et doivent suivre les conventions de nommage de WordPress.
L'activation demande des permissions appropriées sur votre site WordPress.
Le code PHP personnalisé dans les thèmes est minimal ; utilisez des plugins pour les fonctionnalités complexes.
Les thèmes basés sur les blocs fonctionnent au mieux avec WordPress 5.9 et versions ultérieures.

## Dépannage {#troubleshooting}

**Le thème n'apparaît pas après l'installation (scaffolding)**
- Vérifiez que le dossier du thème existe et qu'il a les permissions appropriées.
- Assurez-vous que `theme.json` est un JSON valide.
- Vérifiez que le nom du thème ne entre en conflit avec d'autres thèmes existants.

**L'activation échoue**
- Confirmez que vous avez les permissions d'administrateur.
- Vérifiez que le dossier du thème est lisible par WordPress.
- Consultez les journaux d'erreurs de WordPress pour plus de détails.

**Les tokens de conception ne s'appliquent pas**
- Vérifiez que la syntaxe de `theme.json` est correcte.
- Effacez tous les plugins de mise en cache (caching).
- Vérifiez que votre version de WordPress prend en charge les tokens que vous utilisez.

## Prochaines étapes {#next-steps}

Après avoir activé votre thème, vous pouvez :
- Utiliser la **compétence Esthétique du Système de Conception** pour affiner la typographie, les couleurs et l'espacement.
- Personnaliser les styles des blocs individuels via l'éditeur de blocs WordPress.
- Ajouter du CSS personnalisé dans le fichier `style.css` du thème.
- Créer des modèles de blocs personnalisés pour des types de pages spécifiques
