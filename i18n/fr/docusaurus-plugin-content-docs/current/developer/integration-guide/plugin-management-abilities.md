---
title: Capacités de gestion des plugins
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Capacités de gestion des plugins

Gratis AI Agent v1.5.0 est livré avec **7 capacités de gestion des plugins** que l'assistant IA peut invoquer au cours d'une conversation. Ces capacités offrent un contrôle programmatique sur les plugins WordPress installés via le [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Aperçu des capacités {#abilities-overview}

| Capacité | Slug | Description |
|---|---|---|
| Lister les plugins | `list_plugins` | Retourne une liste des plugins disponibles dans le magasin sandbox avec leur statut. |
| Obtenir un plugin | `get_plugin` | Récupère les métadonnées et le code source d'un plugin spécifique par son slug. |
| Créer un plugin | `create_plugin` | Génère un nouveau plugin à partir d'une description et le stocke dans le sandbox. |
| Mettre à jour un plugin | `update_plugin` | Remplace le code source d'un plugin par une nouvelle version. |
| Supprimer un plugin | `delete_plugin` | Retire un plugin du magasin sandbox. Désactive d'abord. |
| Installer un plugin | `install_plugin` | Déploie un plugin sandboxé dans le répertoire de plugins WordPress actif. |
| Activer un plugin | `activate_plugin` | Active un plugin sandboxé dans l'environnement sandbox wp-env. |

## API d'installation de plugins {#plugin-installer-api}

L'installateur de plugins gère les opérations sur le système de fichiers lors du déploiement ou de la suppression de plugins. Comportements clés :

- **Validation des chemins** : Tous les chemins de plugins sont validés par rapport au répertoire de plugins autorisé avant toute écriture de fichier. Les tentatives de parcours de répertoire sont rejetées.
- **Installation multi-fichiers** : Un plugin peut être composé de plusieurs fichiers. L'installateur crée le répertoire du plugin et écrit tous les fichiers de manière atomique.
- **Mise à jour** : Remplace les fichiers de plugin existants. Il désactive le plugin avant d'écrire pour éviter les erreurs d'état partiel.
- **Suppression par slug** : Localise le répertoire du plugin par son slug, le désactive sur tous les sites, puis supprime le répertoire.

### Enregistrer un gestionnaire d'installation personnalisé {#registering-a-custom-install-handler}

Vous pouvez vous connecter au cycle de vie de l'installation en utilisant les actions `gratis_ai_plugin_installer_before_install` et `gratis_ai_plugin_installer_after_install` :

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: le nom du répertoire du plugin
    // $files: tableau associatif de chemin relatif => contenu du fichier
    error_log("Installation du plugin : {$slug} avec " . count($files) . " fichiers.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Le plugin {$slug} a été installé avec succès.");
    }
}, 10, 2);
```

## Registre de l'écosystème {#ecosystem-registry}

Les capacités sont enregistrées via le **registre de l'écosystème de plugins**. Ce registre associe les slugs des capacités à leurs classes de gestionnaires et les expose au répartiteur d'outils de l'agent IA.

Pour enregistrer une capacité de gestion de plugin personnalisée :

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Ma capacité personnalisée',
        'description' => 'Fait quelque chose d\'utile avec les plugins.',
    ];
    return $abilities;
});
```

Votre classe de capacité doit implémenter l'`Gratis_AI_Ability_Interface` :

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Fait quelque chose d\'utile avec les plugins.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'Le slug du plugin à traiter.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... votre implémentation ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Intégration HookScanner {#hookscanner-integration}

Les capacités `create_plugin` et `update_plugin` exécutent automatiquement **HookScanner** sur le code nouvellement généré. HookScanner retourne une liste des hooks d'action et de filtre WordPress enregistrés par le plugin.

Pour récupérer les résultats de HookScanner de manière programmatique :

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Action : {$hook['hook']} — callback : {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filtre : {$hook['hook']} — callback : {$hook['callback']}\n";
}
```

HookScanner ignore automatiquement les répertoires `vendor/` et `node_modules/`.

## Architecture des tâches asynchrones {#async-job-architecture}

Les opérations de plugins longues (génération, installation) sont envoyées comme **tâches asynchrones** avec un suivi de progression en temps réel. L'interface de chat IA interroge la progression et diffuse les mises à jour de statut à l'utilisateur :

1. **Dépôt** — la capacité crée une tâche asynchrone et retourne un ID de tâche.
2. **Interrogation** — l'agent interroge `gratis_ai_job_status($job_id)` toutes les 2 secondes.
3. **Diffusion** — les messages de progression intermédiaires sont envoyés au fil de discussion.
4. **Achèvement** — le résultat final (succès ou erreur) est retourné et affiché.

Pour se connecter aux événements du cycle de vie des tâches :

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Tâche {$job_id} démarrée pour la capacité : {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Tâche {$job_id} terminée. Succès : " . ($result['success'] ? 'oui' : 'non'));
}, 10, 2);
```
