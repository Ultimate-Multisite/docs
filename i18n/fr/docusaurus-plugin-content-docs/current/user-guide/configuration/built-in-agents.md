---
title: Agents intégrés
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents intégrés

Gratis AI Agent v1.9.0 fournit cinq agents intégrés, chacun préconfiguré avec un ensemble ciblé d’outils, un prompt système adapté et des suggestions de démarrage correspondant aux tâches courantes dans ce domaine. Passer d’un agent à l’autre modifie ce que l’assistant peut faire et la façon dont il répond — sans aucune configuration de votre part. Superdav AI Agent v1.18.0 peut ajouter à ces workflows des outils tenant compte du planning, des enregistrements de rappels, des étapes d’approbation et des notifications SMS lorsque les intégrations associées sont configurées.

## Qu’est-ce qu’un agent ? {#what-is-an-agent}

Chaque agent est un profil de configuration nommé qui combine :

- **Outils** — les capacités que l’agent est autorisé à invoquer (par ex. un Content Writer a accès aux capacités de création de publications ; un Design Studio a accès aux capacités CSS et theme.json)
- **Prompt système** — des instructions qui définissent le ton, les priorités et les contraintes de l’agent
- **Suggestions** — des prompts préécrits affichés dans l’interface de chat pour vous aider à démarrer rapidement

## Accéder au sélecteur d’agents {#accessing-the-agent-picker}

1. Ouvrez le panneau **Gratis AI Agent** dans la barre latérale d’administration WordPress.
2. Cliquez sur l’**icône d’agent** en haut à gauche de l’en-tête du chat (l’icône change pour refléter l’agent actif).
3. Le **Sélecteur d’agents** s’ouvre sous forme de superposition en tableau de formulaire. Chaque agent est répertorié avec son icône, son nom et une description en une ligne.
4. Cliquez sur la ligne d’un agent pour l’activer. L’en-tête du chat se met à jour immédiatement.

Vous pouvez également changer d’agent au milieu d’une conversation — le prompt système du nouvel agent prend effet à partir du message suivant.

## Les cinq agents intégrés {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Priorité :** Création et modification de publications, de pages et de formulaires de contact.

**Outils disponibles :** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Avec les intégrations Superdav AI Agent v1.18.0 activées, le contexte de calendrier configuré, les étapes d’approbation, les rappels et les outils de notification SMS peuvent également être disponibles pour les workflows approuvés.

**Ce qu’il fait bien :**
- Rédiger et publier des articles de blog à partir d’un brief ou d’un plan
- Créer des lots de pages d’atterrissage pour un nouveau site
- Construire des formulaires de contact et de demande de renseignements
- Définir les images mises en avant des publications à partir d’une URL ou d’une recherche
- Rédiger des messages de suivi d’événement à partir du contexte Google Calendar configuré, puis mettre en pause pour approbation avant l’envoi des notifications

**Suggestions de démarrage :**
- *Rédigez un article de blog de 500 mots sur les avantages de WordPress multisite.*
- *Créez une page À propos, Services et Contact, puis publiez-les.*
- *Ajoutez un formulaire de demande de réservation à la page Contact.*
- *Rédigez un rappel pour les participants à l’événement de calendrier configuré de demain et attendez l’approbation avant de l’envoyer.*

---

### Site Builder {#site-builder}

**Priorité :** Création de site web de bout en bout à partir d’un seul prompt.

**Outils disponibles :** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Avec Superdav AI Agent v1.18.0, des outils configurés de service géré, d’approbation, de rappel, de calendrier et de SMS peuvent être disponibles là où les administrateurs les activent.

**Ce qu’il fait bien :**
- Générer un plan de construction de site en plusieurs phases pour un type d’entreprise décrit
- Exécuter chaque phase de façon autonome — structure, contenu, navigation, design
- Récupérer après des erreurs au milieu d’un plan sans nécessiter d’intervention manuelle
- Installer des plugins recommandés dans le cadre de la construction
- Créer des formulaires de contact directement depuis l’interface de chat (Superdav AI Agent v1.10.0+)
- Coordonner les rappels de lancement ou le suivi des participants sans notifications en double lorsque les étapes d’approbation et les enregistrements de rappels sont activés

**Suggestions de démarrage :**
- *Construisez un site portfolio de photographie avec un type de publication galerie, une page de réservation et un formulaire de contact.*
- *Créez un site web de restaurant avec un menu en ligne, des horaires d’ouverture et un formulaire de demande de réservation de table.*
- *Configurez un site de conseil freelance avec des pages de services, une section portfolio et un blog.*
- *Ajoutez un formulaire de contact à la page Contact à l’aide du site builder.*
- *Une fois la checklist de lancement du site approuvée, envoyez un rappel SMS au contact de partie prenante configuré.*

---

### Design Studio {#design-studio}

**Priorité :** Personnalisation visuelle — couleurs, typographie, CSS et motifs de blocs.

**Outils disponibles :** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Ce qu’il fait bien :**
- Appliquer des préréglages de thème nommés (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Affiner la typographie globale et les palettes de couleurs via theme.json
- Injecter du CSS personnalisé pour les dérogations propres à la marque
- Prendre une capture d’écran d’une page et l’examiner pour détecter des problèmes de design

**Suggestions de démarrage :**
- *Appliquez le préréglage warm-editorial, puis définissez la couleur principale sur #2d6a4f.*
- *Prenez une capture d’écran de la page d’accueil et dites-moi ce que vous amélioreriez.*
- *Créez un motif de bloc hero réutilisable avec une image d’arrière-plan pleine largeur et un titre centré.*

### Plugin Manager {#plugin-manager}

**Priorité :** Découverte, installation et gestion des plugins WordPress.

**Outils disponibles :** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Ce qu’il fait bien :**
- Recommander le meilleur plugin pour un cas d’utilisation décrit
- Installer des packs de capacités depuis le registre
- Parcourir le catalogue de capacités disponibles par catégorie

**Suggestions de démarrage :**
- *Quel est le meilleur plugin pour un annuaire de membres ?*
- *Installez le pack de capacités WooCommerce.*
- *Montrez-moi tous les packs de capacités ecommerce disponibles.*

---

### Support Assistant {#support-assistant}

**Priorité :** Répondre aux questions sur le contenu du site, les réglages et la configuration WordPress.

**Outils disponibles :** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ce qu’il fait bien :**
- Rechercher les réglages et options actuels du site
- Expliquer quels types de publication, taxonomies et menus sont configurés sur le site
- Répondre aux questions « à quoi sert ce réglage ? » en lisant les valeurs en direct
- Servir de couche de diagnostic en lecture seule avant d’apporter des modifications

**Suggestions pour commencer :**
- *Quels plugins et réglages sont actuellement actifs sur ce site ?*
- *Liste tous les types de publication personnalisés enregistrés sur ce site.*
- *Quels menus de navigation existent et où sont-ils assignés ?*

---

## Intégrations d’automatisation Superdav {#superdav-automation-integrations}

Lorsque les intégrations Superdav AI Agent v1.18.0 sont configurées, les agents intégrés peuvent participer à des workflows d’automatisation plus sûrs tenant compte de la planification :

- **Les outils de lecture Google Calendar** permettent aux agents d’inspecter les calendriers et événements configurés avant de rédiger le travail de suivi.
- **Le mappage des contacts et des participants** aide à faire correspondre les participants à un événement avec des utilisateurs WordPress ou des contacts connus.
- **Les points de validation humaine** mettent en pause les actions sensibles jusqu’à ce qu’un utilisateur autorisé les examine et les confirme.
- **Les enregistrements de rappel** évitent les notifications en double lorsque les tâches planifiées réessaient ou se répètent.
- **Les notifications SMS TextBee** envoient les messages texte configurés uniquement lorsque les identifiants SMS et les autorisations de workflow sont activés.

Workflow recommandé : demandez à l’agent de préparer le message ou l’action, examinez l’invite d’approbation, puis autorisez la reprise de l’action approuvée. Pour les rappels récurrents, gardez la déduplication des rappels activée afin que le même événement ou contact ne soit pas notifié à plusieurs reprises.

---

## Personnalisation des agents {#customising-agents}

Chaque agent intégré peut être étendu ou remplacé via le filtre `gratis_ai_agent_agents`.

### Ajouter une invite système personnalisée à un agent existant {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Enregistrer un nouvel agent {#registering-a-new-agent}

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

Le nouvel agent apparaît dans le sélecteur d’agents immédiatement après l’exécution du filtre.

### Supprimer un agent intégré {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
