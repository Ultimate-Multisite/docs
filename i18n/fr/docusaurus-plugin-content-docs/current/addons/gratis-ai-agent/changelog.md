---
title: Journal des modifications
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog

## 1.9.0 — Publié le 2026-04-28

### Nouveautés

- **Capacité `create_contact_form`** — crée un formulaire de contact en utilisant le plugin de formulaire actif (Contact Form 7, WPForms, Fluent Forms ou Gravity Forms) et renvoie un shortcode prêt à être inséré dans n'importe quel article ou page.
- **Capacité `set_featured_image`** — assigne une image à la une à un article ou une page à partir d'un ID d'attachement existant dans la Bibliothèque de médias ou d'une URL distante ; importe automatiquement l'image lorsqu'une URL est fournie.
- **Capacité `batch_create_posts`** — crée plusieurs articles en un seul appel de capacité. Prend en charge les mêmes paramètres que `create_post`, signale le succès/l'échec article par article, et dispose d'un mode optionnel `stop_on_error`.
- **Paramètre `page_template`** — ajouté à `create_post` et `update_post`. Assigne un fichier de modèle de page PHP (par exemple, `page-full-width.php`) lors de la création ou de la mise à jour. Passe une chaîne vide à `update_post` pour revenir au modèle par défaut du thème.
- **Capacités de capture d'écran côté client** — `capture_screenshot`, `compare_screenshots`, et `review_page_design`. Capture des captures d'écran complètes ou de la zone visible de pages en direct via un navigateur sans tête côté serveur, compare deux captures d'écran, et fournit un examen de conception généré par IA couvrant la mise en page, la typographie, la couleur et l'accessibilité.
- **Cinq agents intégrés** — Rédacteur de contenu, Constructeur de site, Studio de design, Gestionnaire de plugins et Assistant de support. Chaque agent dispose d'un ensemble d'outils dédié, d'un prompt système adapté et de suggestions de démarrage. Commutables via le nouvel **Agent Picker** dans l'en-tête du chat. Voir [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Drapeaux de fonctionnalités (Feature flags)** — nouvel onglet **Réglages → Drapeaux de fonctionnalités** avec des commutateurs de contrôle d'accès (restreindre aux administrateurs, restreindre aux administrateurs réseau, accès abonné, désactiver pour les non-membres) et des options de marque (masquer l'attribution du pied de page, nom d'agent personnalisé, masquer l'agent picker, utiliser l'icône du site comme avatar de chat). Voir [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Restaurer la dernière session** — le panneau de chat recharge désormais automatiquement la conversation la plus récente au chargement de la page et lors de l'ouverture du widget, de sorte que le contexte n'est jamais perdu lors de la navigation entre les pages.
- **Liens d'action de plugin** — des liens rapides vers les Réglages et le Registre des capacités apparaissent désormais sur l'écran **Plugins → Plugins installés** de WordPress, sous la description du plugin.

### Amélioré

- **Nouvelle source d'image** — l'agent tente désormais toutes les sources d'images gratuites configurées avant de passer à une image générée par IA en cas d'échec du téléchargement.
- **Panneau d'informations sur le modèle** — toujours visible dans l'en-tête du chat ; n'est plus masqué après le premier message.
- **Comportement de défilement automatique** — le défilement automatique se met en pause lorsque l'utilisateur fait défiler vers le haut pour lire ; un bouton flottant **Aller en bas** apparaît et se désactive automatiquement lorsque l'utilisateur atteint le dernier message.
- **Interface utilisateur de l'Agent Picker** — repensée comme un survol de type tableau de formulaire avec des icônes par agent, ce qui facilite l'identification et le changement d'agent en un coup d'œil.
- **Fragments JS chargés paresseusement** — le bundle JavaScript initial du widget de chat est désormais divisé en fragments chargés paresseusement, réduisant les tailles de bundle initiales de 75 à 90 %.
- **Refonte du widget de chat** — une icône IA unifiée remplace l'ancien avatar personnalisé ; elle est cohérente avec le système d'agents intégré.
- **Lien de l'URL** — les URL apparaissant dans les messages système et les bulles de messages d'erreur sont désormais affichées comme des liens cliquables.

### Corrigé

- **Découvrabilité des capacités** — descriptions, références de prompts système et alignement des espaces de noms corrigés afin que toutes les capacités apparaissent de manière fiable dans la liste des outils de l'agent.
- **Cache des fournisseurs** — les fournisseurs sont désormais mis en cache à l'échelle du site via un compteur de version, empêchant les problèmes de fournisseurs obsolètes sur les réseaux multisites.
- **`ability_invalid_output`** — résolu dans 12 gestionnaires de capacités ; tous retournent des réponses JSON correctement structurées.
- **Pipeline `pending_client_tool_calls`** — câblé de bout en bout afin que les appels d'outils côté client se terminent correctement et renvoient les résultats au modèle.
- **Tiroir d'historique** — les modifications non réversibles sont exclues de la liste de réversion ; le lien **Voir l'historique complet** fonctionne désormais correctement.
- **Système de modifications/annulation** — cinq bugs distincts corrigés et unifiés sous la nouvelle interface d'administration.
- **Notification de sauvegarde des réglages** — la notification en bas de page apparaît désormais de manière fiable après avoir cliqué sur **Enregistrer les réglages**.
- **Menu contextuel de la corbeille** — ajout de l'option **Supprimer définitivement** afin que les éléments puissent être supprimés de manière irréversible sans quitter la vue de la corbeille.
- **Modifier et renvoyer** — cliquer sur l'icône d'édition place désormais en mode édition uniquement le message cliqué, et non tous les messages du fil de discussion.
- **Hauteur de la mise en page de chat** — le panneau de chat adapte sa hauteur lorsque du contenu injecté par un plugin (avis d'administration, bannières) apparaît au-dessus de la page, empêchant la zone de saisie d'être poussée hors écran.

---

## 1.4.0 — Publié le 2026-04-09

### Nouveautés

- **Commande de référence WP-CLI** (`wp gratis-ai-agent benchmark`) — exécute la suite de référence Agent Capabilities v1 depuis la ligne de commande pour les pipelines CI et les flux de travail d'évaluation de modèle. Prend en charge les exécutions par question, les substitutions de fournisseurs/modèles, et les sorties JSON/CSV.
- **Suite de référence Agent Capabilities v1** — un ensemble structuré de prompts complexes et multi-étapes qui font travailler toute la surface des capacités, avec un classement et un rapport de jetons/durée.
- **Capacités de type de publication personnalisé** — `register_post_type`, `list_post_types`, `delete_post_type`. Les enregistrements persistent après redémarrage via la table des options.
- **Capacités de taxonomie personnalisée** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Prend en charge les taxonomies hiérarchiques et plates avec des slugs de réécriture optionnels.
- **Capacités de système de design** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Inclut cinq préréglages sélectionnés : `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Capacités de styles globaux** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Lit et écrit les valeurs de theme.json via l'API des styles globaux de WordPress.
- **Capacité de gestion du menu de navigation** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Prend en charge les menus imbriqués et l'assignation de localisation de thème.
- **Capacité de gestion des options** — `get_option`, `set_option`, `delete_option`, `list_options`. Inclut une liste noire de sécurité intégrée protégeant les options critiques de WordPress de toute modification.
- **Registre de capacités installables** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Découvre et active des packs de capacités distribués sous forme de plugins WordPress.
- **Orchestration du constructeur de site v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plans de construction de site multi-phases avec découverte de plugins, références de sortie d'étapes, suivi des progrès et récupération d'erreurs autonome.
- **Question de référence pour site de restaurant** (`q-restaurant-website`) — test de bout en bout couvrant l'enregistrement de CPT, le système de design, la navigation et la découverte de plugins.
- **Plugins connecteurs de fournisseurs IA** ajoutés aux blueprints de WordPress Playground pour une configuration de développement local plus rapide.

### Amélioré

- Le fichier README a été mis à jour avec la documentation et les instructions de configuration des connecteurs de fournisseurs IA.

### Corrigé

- 25 échecs de tests PHPUnit sur la branche `main` résolus.
- Format de l'URL de publication GitHub dans `blueprint.json` corrigé.
- Renumérotation des IDs de tâches pour éviter les collisions avec les anciens IDs.

---

## 1.3.x

_Les notes de version précédentes sont maintenues dans le dépôt du plugin._
