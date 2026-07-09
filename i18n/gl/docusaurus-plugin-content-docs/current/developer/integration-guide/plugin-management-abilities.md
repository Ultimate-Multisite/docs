---
title: Capacidades de xestión de plugins
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Capacidades de xestión de complementos

Gratis AI Agent v1.5.0 inclúe **7 capacidades de xestión de complementos** que o asistente de IA pode invocar durante unha conversa. Estas capacidades proporcionan control programático sobre os complementos de WordPress instalados a través do [Sistema de creación de complementos e sandbox](../../user-guide/administration/plugin-builder-and-sandbox).

## Visión xeral das capacidades

| Capacidade | Slug | Descrición |
|---|---|---|
| Listar complementos | `list_plugins` | Devolve unha lista de complementos no almacén sandbox co seu estado. |
| Obter complemento | `get_plugin` | Recupera metadatos e código fonte dun complemento específico por slug. |
| Crear complemento | `create_plugin` | Xera un novo complemento a partir dunha descrición e almacénao no sandbox. |
| Actualizar complemento | `update_plugin` | Substitúe o código fonte dun complemento por unha nova versión. |
| Eliminar complemento | `delete_plugin` | Elimina un complemento do almacén sandbox. Desactívao primeiro. |
| Instalar complemento | `install_plugin` | Desprega un complemento en sandbox no directorio de complementos de WordPress en produción. |
| Activar complemento | `activate_plugin` | Activa un complemento en sandbox no contorno sandbox de wp-env. |

## API do instalador de complementos

O instalador de complementos xestiona as operacións do sistema de ficheiros ao despregar ou eliminar complementos. Comportamentos clave:

- **Validación de rutas**: Todas as rutas de complementos valídanse contra o directorio de complementos permitido antes de calquera escritura de ficheiro. Rexéitanse os intentos de percorrido de directorios.
- **Instalación multificheiro**: Un complemento pode constar de varios ficheiros. O instalador crea o directorio do complemento e escribe todos os ficheiros de forma atómica.
- **Actualización**: Substitúe os ficheiros existentes do complemento. Desactiva o complemento antes de escribir para evitar erros de estado parcial.
- **Eliminación por slug**: Localiza o directorio do complemento por slug, desactívao en todos os sitios e despois elimina o directorio.

### Rexistrar un xestor de instalación personalizado

Podes conectarte ao ciclo de vida da instalación usando as accións `gratis_ai_plugin_installer_before_install` e `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: the plugin's directory name
    // $files: associative array of relative path => file content
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Rexistro do ecosistema

As capacidades rexístranse a través do **rexistro do ecosistema de complementos**. O rexistro mapea os slugs das capacidades ás súas clases xestoras e expóñeas ao despachador de ferramentas do axente de IA.

Para rexistrar unha capacidade personalizada de xestión de complementos:

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

A túa clase de capacidade debe implementar `Gratis_AI_Ability_Interface`:

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

## Integración con HookScanner

As capacidades `create_plugin` e `update_plugin` executan automaticamente **HookScanner** sobre o código xerado recentemente. HookScanner devolve unha lista de hooks de acción e filtro de WordPress rexistrados polo complemento.

Para recuperar os resultados de HookScanner programaticamente:

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

HookScanner omite automaticamente os directorios `vendor/` e `node_modules/`.

## Arquitectura de traballos asíncronos

As operacións de complementos de longa duración (xerar, instalar) despáchanse como **traballos asíncronos** con seguimento do progreso en directo. A interface de chat de IA consulta o progreso e transmite actualizacións de estado ao usuario:

1. **Despacho** — a capacidade crea un traballo asíncrono e devolve un ID de traballo.
2. **Poll** — the agent polls `gratis_ai_job_status($job_id)` every 2 seconds.
3. **Transmisión** — as mensaxes de progreso intermedias envíanse ao fío do chat.
4. **Completado** — devólvese e móstrase o resultado final (éxito ou erro).

Para conectarte aos eventos do ciclo de vida dos traballos:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
