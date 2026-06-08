---
title: Référence des capacités
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Référence des capacités

Les capacités sont les actions atomiques que l'Agent IA Gratuit peut déclencher sur votre installation WordPress. Chaque capacité est une classe PHP enregistrée qui expose un schéma JSON — l'agent lit ce schéma à l'exécution pour comprendre quels paramètres sont requis et ce que la capacité retourne.

Cette page documente toutes les capacités incluses avec Gratis AI Agent v1.9.0.

---

## Types de publications personnalisés (Custom Post Types)

Ces capacités gèrent les types de publications personnalisés (CPT) enregistrés via l'agent. Les enregistrements sont sauvegardés dans la table des options de WordPress, ce qui signifie qu'ils survivent à la désactivation et à la réactivation du plugin.

### `register_post_type`

Enregistre un nouveau type de publication personnalisé.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `slug` | string | Oui | La clé du type de publication (max 20 caractères, pas de majuscules, pas d'espaces) |
| `singular_label` | string | Oui | Nom singulier lisible par l'humain, ex: `Portfolio Item` |
| `plural_label` | string | Oui | Nom pluriel lisible par l'humain, ex: `Portfolio Items` |
| `public` | boolean | Non | Indique si le type de publication est accessible publiquement. Valeur par défaut : `true` |
| `supports` | array | Non | Fonctionnalités à supporter : `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Valeur par défaut : `["title","editor"]` |
| `has_archive` | boolean | Non | Indique si une page d'archive pour ce type de publication est activée. Valeur par défaut : `false` |
| `menu_icon` | string | Non | Classe Dashicons ou URL pour l'icône du menu admin. Valeur par défaut : `"dashicons-admin-post"` |
| `rewrite_slug` | string | Non | Slug d'URL pour le type de publication. Par défaut : `slug` |

**Exemple**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**Retourne** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Retourne tous les types de publication personnalisés enregistrés par l'agent.

**Paramètres** — aucun

**Retourne**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

### `delete_post_type`

Désenregistre un type de publication personnalisé précédemment enregistré par l'agent. Les publications existantes de ce type restent dans la base de données mais ne sont plus accessibles via le type de publication.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `slug` | string | Oui | La clé du type de publication à supprimer |

**Retourne** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomies personnalisées (Custom Taxonomies)

Ces fonctionnalités gèrent les taxonomies personnalisées. Tout comme les CPTs (Types de publications personnalisés), les enregistrements de taxonomie sont conservés.

### `register_taxonomy`

Enregistre une nouvelle taxonomie personnalisée.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `slug` | string | Oui | La clé de la taxonomie (max 32 caractères) |
| `singular_label` | string | Oui | Le nom singulier lisible par l'humain, par exemple : `Catégorie de projet` |
| `plural_label` | string | Oui | Le nom pluriel lisible par l'humain, par exemple : `Catégories de projets` |
| `post_types` | array | Oui | Les slugs des types de publication auxquels cette taxonomie doit être attachée |
| `hierarchical` | boolean | Non | `true` pour un style catégorie, `false` pour un style étiquette (tag). Par défaut : `true` |
| `public` | boolean | Non | Indique si les termes sont accessibles publiquement. Par défaut : `true` |
| `rewrite_slug` | string | Non | Le slug URL de la taxonomie. Par défaut : `slug` |

**Exemple**

```json
{
  "slug": "project-category",
  "singular_label": "Catégorie de projet",
  "plural_label": "Catégories de projets",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Retourne** `{ "success": true, "slug": "project-category" }`

### `list_taxonomies`

Retourne toutes les taxonomies personnalisées enregistrées par l'agent.

**Paramètres** — aucun

**Retour**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Catégorie de projet",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy`

Désenregistre une taxonomie personnalisée précédemment enregistrée par l'agent.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `slug` | string | Oui | La clé de la taxonomie à supprimer |

**Retour** `{ "success": true, "slug": "project-category" }`

---

## Design System

Les capacités du système de design modifient la présentation visuelle du site WordPress — allant du CSS personnalisé aux modèles de blocs et au logo du site.

### `inject_custom_css`

Ajoute du CSS dans la balise `<head>` du site via `wp_add_inline_style`. Le CSS est stocké dans l'option `gratis_ai_agent_custom_css` et est nettoyé proprement lorsque cette capacité est réinitialisée.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `css` | string | Oui | CSS valide à injecter |
| `label` | string | Non | Étiquette lisible par l'homme pour ce bloc CSS, utilisée dans les journaux de débogage. Valeur par défaut `"agent-injected"` |
| `replace` | boolean | Non | Si `true`, remplace tout le CSS précédemment injecté. Par défaut `false` (ajoute) |

**Exemple**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Retourne** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Enregistre un modèle de bloc réutilisable dans la bibliothèque de modèles WordPress.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `slug` | string | Oui | Identifiant du modèle, par exemple `gratis/hero-dark` |
| `title` | string | Oui | Nom lisible par l'homme du modèle affiché dans l'éditeur |
| `content` | string | Oui | Marque de bloc sérialisée (HTML) pour le modèle |
| `categories` | array | Non | Slugs des catégories de modèles, par exemple `["featured", "hero"]` |
| `description` | string | Non | Brève description affichée dans le sélecteur de modèles |
| `keywords` | array | Non | Mots-clés de recherche |

**Retourne** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Liste tous les modèles de blocs enregistrés par l'agent.

**Paramètres** — aucun

**Retourne**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo`

Définit le logo du site WordPress à un ID de pièce jointe donné ou à une URL d'image distante. Lorsqu'une URL est fournie, l'image est téléchargée et importée dans la Bibliothèque de médias.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `attachment_id` | integer | Non | ID d'une pièce jointe existante dans la Bibliothèque de médias |
| `url` | string | Non | URL d'image distante à importer et à définir comme logo |

L'un des paramètres `attachment_id` ou `url` doit être fourni.

**Retour** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Applique un modèle de couleur/typographie nommé au fichier `theme.json` (ou `global-styles`) du thème actif. Les modèles sont des ensembles soigneusement sélectionnés et maintenus par l'équipe de l'agent IA Gratuit.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `preset` | string | Oui | Nom du modèle, par exemple : `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Non | Si `true`, fusionner avec les valeurs existantes au lieu de les remplacer. Valeur par défaut : `false` |

**Modèles disponibles**

| Modèle | Description |
|---|---|
| `minimal-dark` | Arrière-plan presque noir, texte blanc, couleur d'accent unique |
| `warm-editorial` | Arrière-plan blanc cassé chaud, titres en police avec empattement (serif), couleurs d'accent terreuses |
| `corporate-blue` | Palette bleu marine et blanc avec typographie professionnelle |
| `vibrant-startup` | Dégradés vifs, coins arrondis, polices sans serif modernes |
| `classic-blog` | Gris neutres, interligne confortable, espacement de mise en page traditionnel |

**Retour** `{ "success": true, "preset": "minimal-dark" }`

---

## Styles Globaux

Les capacités des Styles Globaux lisent et écrivent les valeurs du fichier `theme.json` via l'API Global Styles de WordPress, affectant tous les blocs et modèles sur tout le site.

### `get_global_styles`

Retourne la configuration actuelle des styles globaux.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `path` | string | Non | Pointeur JSON vers une valeur spécifique, par exemple `/color/palette` ou `/typography/fontSizes`. Retourne l'objet complet si omis. |

**Retourne** l'objet de styles global complet ou la valeur à `path`.

---

### `set_global_styles`

Met à jour une ou plusieurs valeurs dans la configuration des styles globaux.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `path` | string | Oui | Pointeur JSON vers la valeur à définir, par exemple `/color/palette` |
| `value` | any | Oui | La nouvelle valeur |

**Exemple** — ajouter une couleur à la palette

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Retourne** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Réinitialise toutes les modifications des styles globaux appliquées par l'agent, restaurant ainsi les valeurs par défaut du thème.

**Paramètres** — aucun

**Retourne** `{ "success": true }`

---

## Menus de navigation

Les capacités des menus de navigation créent et gèrent les menus WordPress et leurs éléments.

### `create_menu`

Crée un nouveau menu de navigation WordPress.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `name` | string | Oui | Nom du menu, par exemple `Primary Navigation` |
| `location` | string | Non | Emplacement du thème auquel assigner ce menu, par exemple `primary` |

**Retourne** `{ "success": true, "menu_id": 7 }`

### `update_menu`

Renomme un menu ou réaffecte-le à un emplacement de thème.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `menu_id` | integer | Oui | ID du menu à mettre à jour |
| `name` | string | Non | Nouveau nom du menu |
| `location` | string | Non | Emplacement du thème auquel assigner ou réassigner |

**Retourne** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Ajoute un élément à un menu de navigation existant.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `menu_id` | integer | Oui | ID du menu cible |
| `type` | string | Oui | Type d'élément : `custom`, `post_type` ou `taxonomy` |
| `title` | string | Non | Libellé de l'élément du menu (requis pour le type `custom`) |
| `url` | string | Non | URL pour les éléments `custom` |
| `object_id` | integer | Non | ID de la publication ou de la terme pour les éléments `post_type`/`taxonomy` |
| `parent_id` | integer | Non | ID de l'élément du menu sous lequel insérer cet élément |
| `position` | integer | Non | Position zéro-indexée dans le menu |

**Retourne** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Supprime un élément d'un menu de navigation.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `item_id` | integer | Oui | ID de l'élément du menu à supprimer |

**Retourne** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Liste tous les menus de navigation WordPress, y compris leurs emplacements de thème assignés.

**Paramètres** — aucun

**Retourne**

## Gestion des options

Les capacités d'options permettent de lire et d'écrire les options WordPress via `get_option` / `update_option`. Un bloc de sécurité intégré empêche toute modification accidentelle des paramètres critiques.

### `get_option`

Lit une option WordPress.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `option_name` | string | Oui | La clé de l'option, par exemple `blogname` |

**Retourne** `{ "option_name": "blogname", "value": "Mon Site" }`

Renvoie une erreur si `option_name` est sur la liste de blocage de sécurité.

---

### `set_option`

Écrit une option WordPress.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `option_name` | string | Oui | La clé de l'option |
| `value` | any | Oui | La nouvelle valeur (sérialisée automatiquement pour les tableaux/objets) |
| `autoload` | string | Non | `"yes"` ou `"no"`. Par défaut, conserve le paramètre autoload existant |

Renvoie une erreur si `option_name` est sur la liste de blocage de sécurité.

**Retourne** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Supprime une option WordPress.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `option_name` | string | Oui | La clé de l'option à supprimer |

Renvoie une erreur si `option_name` est sur la liste de blocage de sécurité.

**Retourne** `{ "success": true, "option_name": "my_custom_option" }`

### `list_options`

Liste les options WordPress correspondant à un motif.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `pattern` | string | Non | Motif SQL LIKE pour filtrer les noms d'options, par exemple `gratis_%`. Retourne toutes les options si omis (à utiliser avec prudence sur les bases de données volumineuses). |
| `limit` | integer | Non | Nombre maximum de résultats. Défaut : `50`, maximum : `500`. |

**Retour**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Gestion du contenu (Content Management)

Les capacités de gestion du contenu permettent de créer et modifier les articles et pages WordPress. Les IDs des articles sont retournés afin que les étapes suivantes dans les plans multi-capacités puissent faire référence au contenu créé.

### `create_post`

Crée un nouvel article, une page ou une entrée de type de publication personnalisé WordPress.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `title` | string | Oui | Titre de la publication |
| `content` | string | Non | Corps de la publication — accepte du texte brut, du HTML ou une mise en forme par blocs sérialisée |
| `status` | string | Non | `draft`, `publish`, `pending`, `private`. Par défaut : `draft` |
| `post_type` | string | Non | Slug du type de publication, par exemple `post`, `page`, ou tout CPT enregistré. Par défaut : `post` |
| `excerpt` | string | Non | Résumé court affiché dans les archives et les résultats de recherche |
| `categories` | array | Non | Tableau des noms ou des IDs de catégories à assigner |
| `tags` | array | Non | Tableau des noms ou des IDs de tags à assigner |
| `author` | integer | Non | ID de l'utilisateur WordPress à définir comme auteur de la publication. Par défaut : l'utilisateur actuel |
| `date` | string | Non | Date de publication au format ISO 8601, par exemple `2026-05-01T09:00:00` |
| `page_template` | string | Non | Fichier de modèle à assigner à cette publication ou page, par exemple `page-full-width.php`. Utile uniquement lorsque le `post_type` est `page` ou un CPT prenant en charge les modèles de page. |

**Exemple**

```json
{
  "title": "Bienvenue sur notre nouveau site",
  "content": "<!-- wp:paragraph --><p>Bonjour le monde !</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Retourne** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Met à jour une publication ou une page WordPress existante.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `post_id` | integer | Oui | ID de l'article à mettre à jour |
| `title` | string | Non | Nouveau titre de l'article |
| `content` | string | Non | Nouveau corps de l'article |
| `status` | string | Non | Nouveau statut : `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Non | Nouvel extrait |
| `categories` | array | Non | Remplacer la liste complète des catégories par ce tableau de noms ou d'IDs |
| `tags` | array | Non | Remplacer la liste complète des tags par ce tableau de noms ou d'IDs |
| `page_template` | string | Non | Nouveau fichier de modèle à assigner à cet article ou cette page, par exemple `page-full-width.php`. Passe une chaîne vide pour supprimer l'assignation du modèle et revenir au modèle par défaut du thème. |

**Exemple** — changer le modèle après la création

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Retourne** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Crée plusieurs articles en une seule requête d'appel, ce qui réduit le nombre de communications pendant la construction du site ou l'importation de contenu en masse. Les articles sont créés séquentiellement ; si un article échoue, les autres continuent et l'échec est signalé dans le tableau des résultats.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `posts` | array | Oui | Tableau d'objets d'articles, chacun acceptant les mêmes paramètres que `create_post` |
| `stop_on_error` | boolean | Non | Si `true`, arrêter le traitement après la première erreur. Valeur par défaut : `false` |

**Exemple**

```json
{
  "posts": [
    {
      "title": "À Propos",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}

**Retourne**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "À Propos" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image`

Attribue une image mise en avant (vignette de publication) à une publication ou une page existante. Vous pouvez fournir l'ID d'un fichier déjà dans la Bibliothèque Média ou une URL d'image distante ; si vous fournissez une URL, l'image est téléchargée et importée automatiquement.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `post_id` | integer | Oui | ID de la publication ou de la page à mettre à jour |
| `attachment_id` | integer | Non | ID d'un fichier existant dans la Bibliothèque Média |
| `url` | string | Non | URL d'image distante à importer et à définir comme image mise en avant |
| `alt_text` | string | Non | Texte alternatif à appliquer au fichier s'il est importé depuis une URL |

L'un des paramètres `attachment_id` ou `url` doit être fourni.

**Retourne** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Crée un formulaire de contact en utilisant le plugin de formulaire actif (Contact Form 7, WPForms, Fluent Forms ou Gravity Forms, selon celui qui est installé). Il retourne un shortcode que vous pouvez intégrer dans n'importe quel article ou page.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `title` | string | Oui | Nom du formulaire affiché dans l'administration du plugin de formulaire |
| `fields` | array | Oui | Liste ordonnée des champs du formulaire (voir objet Field ci-dessous) |
| `recipient` | string | Non | Adresse e-mail pour recevoir les soumissions. Par défaut, c'est l'e-mail d'administration WordPress |
| `subject` | string | Non | Objet de l'e-mail. Supporte les placeholders `[votre-nom]` et `[votre-sujet]` lorsque vous utilisez Contact Form 7 |
| `confirmation_message` | string | Non | Message affiché après une soumission réussie. Par défaut : `"Merci pour votre message. Nous vous recontacterons bientôt."` |

**Objet Field (Champ)**

| Clé | Type | Requis | Description |
|---|---|---|---|
| `name` | string | Oui | Nom de champ interne / clé machine |
| `label` | string | Oui | Libellé lisible par l'homme affiché sur le formulaire |
| `type` | string | Oui | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Non | Indique si le champ doit être rempli avant la soumission. Par défaut : `false` |
| `options` | array | Non | Options pour les champs `select`, `checkbox` et `radio` |
| `placeholder` | string | Non | Texte de substitution (placeholder) pour les entrées de type texte |

**Exemple**

```json
{
  "title": "Demande de réservation au restaurant",
  "fields": [
    { "name": "your-name",    "label": "Nom",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Nombre de personnes",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Demandes spéciales", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "Nouvelle demande de réservation de [votre-nom]"
}
```

**Retour**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Demande de réservation au restaurant\"]"
}
```

---

## Revue Visuelle

Les capacités de Revue Visuelle permettent à l'agent de capturer des captures d'écran de pages en direct et de les analyser, ce qui permet une revue de conception autonome, des comparaisons avant/après et des vérifications de régression visuelle sans avoir besoin d'une extension de navigateur.

### `capture_screenshot`

Capture une capture d'écran d'une page WordPress à une URL donnée en utilisant un navigateur headless côté serveur. L'image est enregistrée dans la Bibliothèque Média et une URL CDN vous est retournée.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `url` | string | Oui | URL complète de la page à capturer, par exemple : `https://example.com/about/` |
| `width` | integer | Non | Largeur de la zone visible en pixels. Valeur par défaut : `1280` |
| `height` | integer | Non | Hauteur de la zone visible en pixels. Valeur par défaut : `800` |
| `full_page` | boolean | Non | Capturer toute la page défilante au lieu seulement de la zone visible (viewport). Valeur par défaut : `false` |
| `delay_ms` | integer | Non | Millisecondes à attendre après le chargement de la page avant la capture, utile pour le contenu animé. Valeur par défaut : `500` |
| `label` | string | Non | Étiquette lisible par l'homme stockée avec l'attachement dans la Media Library |

**Retourne**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots`

Prend deux captures d'écran et retourne un score de différence visuelle ainsi qu'une image de comparaison mettant en évidence les zones modifiées. Utile pour confirmer qu'un changement de conception a produit le résultat attendu ou pour détecter des régressions non intentionnelles.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `before_url` | string | Oui | URL de la page à capturer comme état "avant" |
| `after_url` | string | Oui | URL de la page à capturer comme état "après". Peut être la même URL si vous comparez sur une période donnée. |
| `width` | integer | Non | Largeur de la fenêtre (viewport) pour les deux captures. Valeur par défaut : `1280` |
| `threshold` | float | Non | Seuil de différence en pixels (de 0,0 à 1,0). Les pixels dans cette tolérance sont considérés comme inchangés. Valeur par défaut : `0.1` |

**Retourne**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

Un `diff_score` de `0.0` signifie qu'il n'y a aucun changement visible ; `1.0` signifie que chaque pixel a changé.

---

### `review_page_design`

Capture une capture d'écran d'une page et l'envoie au modèle de langage pour une analyse visuelle. Retourne une évaluation structurée couvrant la mise en page, la typographie, l'utilisation des couleurs et les problèmes d'accessibilité.

**Paramètres**

| Paramètre | Type | Requis | Description |
|---|---|---|---|
| `url` | string | Oui | URL complète de la page à examiner |
| `focus` | string | Non | Liste séparée par des virgules des zones d'examen à mettre en avant : `layout`, `typography`, `colour`, `accessibility`, `mobile`. Valeur par défaut : toutes les zones |
| `width` | integer | Non | Largeur de la fenêtre (viewport). Valeur par défaut : `1280` |

**Retourne**

## Capacités installables

Le Registre des capacités installables vous permet d'étendre l'agent avec des packs de capacités supplémentaires distribués sous forme de plugins WordPress. Chaque pack enregistre une ou plusieurs capacités en utilisant l'API de capacité standard.

### `list_available_abilities`

Retourne le catalogue des packs de capacités disponibles pour l'installation depuis le registre.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `category` | string | Non | Filtrer par catégorie : `ecommerce`, `seo`, `media`, `social`, `developer` |

**Retourne**

### `install_ability`

Télécharge et active un pack de capacités depuis le registre.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `slug` | string | Oui | Slug du plugin de pack de capacités |

**Retourne** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Interroge le registre des capacités pour trouver le meilleur plugin correspondant à un cas d'utilisation décrit et l'installe éventuellement.

**Paramètres**

| Paramètre | Type | Obligatoire | Description |
|---|---|---|---|
| `description` | string | Oui | Description en langage naturel de la fonctionnalité souhaitée |
| `install` | boolean | Non | Si `true`, installe immédiatement le plugin recommandé. Valeur par défaut : `false` |

**Exemple**

```json
{
  "description": "J'ai besoin d'un formulaire de contact avec support de téléchargement de fichiers et protection contre les spams",
  "install": false
}
```

**Retourne**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Large adoption, support des téléchargements de fichiers et intégration avec Akismet pour le filtrage des spams.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
