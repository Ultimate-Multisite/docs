---
title: Habilitats de Gestió de Plugins
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Capacitats de Gestió de Plugins

Gratis AI Agent v1.5.0 inclou **7 capacitats de gestió de plugins** que l'assistència AI pot cridar durant una conversa. Aquestes capacitats proporcionen un control programàtic sobre els plugins de WordPress instal·lats a través del [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Resum de Capacitats {#abilities-overview}

| Capacitat | Slug | Descripció |
|---|---|---|
| List Plugins | `list_plugins` | Restorna una llista de plugins disponibles a la botiga sandbox amb el seu estat. |
| Get Plugin | `get_plugin` | Recupera metadades i codi fonamental per a un plugin específic per slug. |
| Create Plugin | `create_plugin` | Genera un plugin nou a partir d'una descripció i el guarda al sandbox. |
| Update Plugin | `update_plugin` | Substitueix el codi fonamental d'un plugin amb una nova versió. |
| Delete Plugin | `delete_plugin` | Elimina un plugin de la botiga sandbox. Desactiva primer. |
| Install Plugin | `install_plugin` | Desplaça un plugin en sandbox al directori de plugins de WordPress en directe. |
| Activate Plugin | `activate_plugin` | Activa un plugin en sandbox en l'entorn sandbox de wp-env. |

## API de l'Instal·lador de Plugins {#plugin-installer-api}

L'instal·lador de plugins gestiona les operacions de sistema de fitxers quan es desplaça o es removeixen plugins. Comportaments clau:

- **Validació de camins**: Tots els camins de plugins es validen contra el directori de plugins permès abans de qualsevol escrivible de fitxer. S'estan rebutjats els intents de recorreguda de directoris.
- **Instal·lació multimítol**: Un plugin pot consistir en múltiples fitxeres. L'instal·lador crea el directori del plugin i escriu tots els fitxeres de manera atòmica.
- **Actualització**: Substitueix els fitxeres de plugin existents. Desactiva el plugin abans d'escriure per evitar errors d'estat parcial.
- **Eliminació per slug**: Localitza el directori del plugin per slug, el desactiva en tots els llocs web i després elimina el directori.

### Registrar un Gestor d'Instal·lació Personalitzat {#registering-a-custom-install-handler}

Podeu enganxar-vos al cicle vital d'instal·lació utilitzant les accions `gratis_ai_plugin_installer_before_install` i `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: el nom del directori del plugin
    // $files: array associatiu de camí relativ => contingut del fitxer
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Registre de l'Ecosistema {#ecosystem-registry}

Les capacitats es registren a través del **registre de l'ecosistema de plugins**. El registre mapeja els slugs de les capacitats a les seves classes gestores i les exponeix al desplaçador d'eines de l'agent AI.

Per registrar una capacitat de gestió de plugins personalitzada:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'My Custom Ability',
        'description' => 'Does something useful with plugins.',
    ];
    return $abilities;
});
```

La vostra classe de capacitat ha de implementar `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Does something useful with plugins.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'The plugin slug to operate on.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... your implementation ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Integració amb HookScanner {#hookscanner-integration}

Les capacitats `create_plugin` i `update_plugin` ejecuten automàticament **HookScanner** contra el codi nou generat. HookScanner retorna una llista d'accions i filtres d'accions de WordPress registrats pel plugin.

Per recuperar els resultats de HookScanner programàticament:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Action: {$hook['hook']} — callback: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filter: {$hook['hook']} — callback: {$hook['callback']}\n";
}
```

HookScanner salta automàticament els directoris `vendor/` i `node_modules/`.

## Arquitectura de Treball Assíncric (Async Job) {#async-job-architecture}

Les operacions de plugins de llarga durada (generar, instal·lar) es desplaçaixen com a **treballs assíncronics (async jobs)** amb seguiment de progrés en temps real. L'interfecciòn de xat AI consulta el progrés i transmet actualitzacions d'estat a l'usuari:

1. **Desplaçar (Dispatch)** — la capacitat crea un treball assíncronic i retorna un ID de treball.
2. **Consultar (Poll)** — l'agent consulta `gratis_ai_job_status($job_id)` cada 2 segons.
3. **Transmetre (Stream)** — els missatges de progrés intermediaris es canvien al fil de xat.
4. **Completar (Complete)** — es retorna i es mostra el resultat final (èxit o error).

Per enganxar-se als esdeveniments del cicle vital del treball:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
