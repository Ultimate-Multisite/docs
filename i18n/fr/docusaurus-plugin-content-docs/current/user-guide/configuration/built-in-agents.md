---
title: Agents intégrés
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents intégrés

Gratis AI Agent v1.9.0 est livré avec cinq agents intégrés, chacun préconfiguré avec un ensemble d'outils ciblés, un prompt système adapté et des suggestions de démarrage correspondant aux tâches courantes de ce domaine. Changer d'agent modifie ce que l'assistant peut faire et la manière dont il répond — sans aucune configuration de votre part.

## Qu'est-ce qu'un agent ?

Chaque agent est un profil de configuration nommé qui combine :

- **Outils** — les capacités que l'agent est autorisé à invoquer (par exemple, un rédacteur de contenu a accès aux capacités de création de publication ; un Studio de design a accès aux capacités CSS et theme.json)
- **Prompt système** — des instructions qui définissent le ton, les priorités et les contraintes de l'agent
- **Suggestions** — des prompts pré-rédigés affichés dans l'interface de chat pour vous aider à démarrer rapidement

## Accéder au sélecteur d'agents (Agent Picker)

1. Ouvrez le panneau **Gratis AI Agent** dans la barre latérale d'administration de WordPress.
2. Cliquez sur l'**icône d'agent** dans le coin supérieur gauche de l'en-tête de chat (l'icône change pour refléter l'agent actif).
3. Le **Agent Picker** s'ouvre comme une superposition de type tableau de formulaire. Chaque agent est listé avec son icône, son nom et une brève description.
4. Cliquez sur une ligne d'agent pour l'activer. L'en-tête de chat est mis à jour immédiatement.

Vous pouvez également changer d'agent en cours de conversation — le prompt système du nouvel agent prend effet à partir du prochain message.

## Les cinq agents intégrés

### Rédacteur de contenu (Content Writer)

**Objectif :** Créer et modifier des articles, des pages et des formulaires de contact.

**Outils disponibles :** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Ce qu'il fait bien :**
- Rédiger et publier des articles de blog à partir d'un bref ou d'un plan
- Créer des lots de pages de destination pour un nouveau site
- Construire des formulaires de contact et de demande d'information
- Définir des images à la une sur des articles à partir d'une URL ou d'une recherche

**Suggestions de démarrage :**
- *Rédige un article de blog de 500 mots sur les avantages de WordPress multisite.*
- *Crée une page À propos, Services et Contact et publie-les.*
- *Ajoute un formulaire de demande de réservation à la page Contact.*

---

### Constructeur de site (Site Builder)

**Objectif :** Création de site web de bout en bout à partir d'un seul prompt.

**Outils disponibles :** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Ce qu'il fait bien :**
- Générer un plan de construction de site multi-phases pour un type d'entreprise décrit
- Exécuter chaque phase de manière autonome — structure, contenu, navigation, design
- Se remettre des erreurs en cours de plan sans nécessiter d'intervention manuelle
- Installer des plugins recommandés dans le cadre de la construction
- Créer des formulaires de contact directement depuis l'interface de chat (Superdav AI Agent v1.10.0+)

**Suggestions de démarrage :**
- *Construis un site portfolio de photographie avec un type de publication galerie, une page de réservation et un formulaire de contact.*
- *Crée un site de restaurant avec un menu en ligne, les heures d'ouverture et un formulaire de demande de réservation de table.*
- *Configure un site de consultant indépendant avec des pages de services, une section portfolio et un blog.*
- *Ajoute un formulaire de contact à la page Contact en utilisant le constructeur de site.*

---

### Studio de design (Design Studio)

**Objectif :** Personnalisation visuelle — couleurs, typographie, CSS et modèles de blocs.

**Outils disponibles :** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Ce qu'il fait bien :**
- Appliquer des préréglages de thème nommés (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Affiner la typographie globale et les palettes de couleurs via theme.json
- Injecter du CSS personnalisé pour des remplacements spécifiques à la marque
- Prendre une capture d'écran d'une page et la réviser pour détecter des problèmes de design

**Suggestions de démarrage :**
- *Applique le préréglage warm-editorial, puis définis la couleur primaire sur #2d6a4f.*
- *Prends une capture d'écran de la page d'accueil et dis-moi ce que tu améliorerais.*
- *Crée un modèle de bloc héros réutilisable avec une image de fond pleine largeur et un titre centré.*

---

### Gestionnaire de plugins (Plugin Manager)

**Objectif :** Découvrir, installer et gérer les plugins WordPress.

**Outils disponibles :** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Ce qu'il fait bien :**
- Recommander le meilleur plugin pour un cas d'utilisation décrit
- Installer des packs de capacités à partir du registre
- Parcourir le catalogue de capacités disponibles par catégorie

**Suggestions de démarrage :**
- *Quel est le meilleur plugin pour un annuaire d'adhésion ?*
- *Installe le pack de capacités WooCommerce.*
- *Montre-moi tous les packs de capacités e-commerce disponibles.*

---

### Assistant de support (Support Assistant)

**Objectif :** Répondre aux questions sur le contenu du site, les paramètres et la configuration de WordPress.

**Outils disponibles :** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ce qu'il fait bien :**
- Consulter les paramètres et options actuels du site
- Expliquer ce que sont les types de publication, les taxonomies et les menus configurés sur le site
- Répondre aux questions du type « qu'est-ce que ce paramètre fait ? » en lisant les valeurs en direct
- Servir de couche de diagnostic en lecture seule avant d'effectuer des modifications

**Suggestions de démarrage :**
- *Quels plugins et paramètres sont actuellement actifs sur ce site ?*
- *Liste tous les types de publication personnalisés enregistrés sur ce site.*
- *Quels menus de navigation existent et où sont-ils assignés ?*

---

## Personnaliser les agents

Chaque agent intégré peut être étendu ou remplacé via le filtre `gratis_ai_agent_agents`.

### Ajouter un prompt système personnalisé à un agent existant

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Enregistrer un nouvel agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Le nouvel agent apparaît dans le Agent Picker immédiatement après l'exécution du filtre.

### Supprimer un agent intégré

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
