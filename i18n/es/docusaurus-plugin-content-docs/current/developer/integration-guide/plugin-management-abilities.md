---
title: Habilidades de Gestión de Plugins
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Capacidades de Gestión de Plugins

Gratis AI Agent v1.5.0 incluye **7 capacidades de gestión de plugins** que el asistente de IA puede invocar durante una conversación. Estas capacidades proporcionan un control programático sobre los plugins de WordPress instalados a través del [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Resumen de Capacidades {#abilities-overview}

| Capacidad | Slug | Descripción |
|---|---|---|
| Listar Plugins | `list_plugins` | Devuelve una lista de plugins en la tienda sandbox con su estado. |
| Obtener Plugin | `get_plugin` | Recupera metadatos y código fuente de un plugin específico mediante su slug. |
| Crear Plugin | `create_plugin` | Genera un plugin nuevo a partir de una descripción y lo almacena en el sandbox. |
| Actualizar Plugin | `update_plugin` | Reemplaza el código fuente de un plugin con una nueva versión. |
| Eliminar Plugin | `delete_plugin` | Elimina un plugin de la tienda sandbox. Primero lo desactiva. |
| Instalar Plugin | `install_plugin` | Despliega un plugin sandboxed en el directorio de plugins de WordPress en vivo. |
| Activar Plugin | `activate_plugin` | Activa un plugin sandboxed en el entorno sandbox de wp-env. |

## API del Instalador de Plugins {#plugin-installer-api}

El instalador de plugins maneja operaciones del sistema de archivos al desplegar o eliminar plugins. Comportamientos clave:

- **Validación de rutas**: Todas las rutas de los plugins se validan contra el directorio de plugins permitido antes de cualquier escritura de archivos. Se rechazan intentos de recorrido de directorios.
- **Instalación de múltiples archivos**: Un plugin puede consistir en varios archivos. El instalador crea el directorio del plugin y escribe todos los archivos de forma atómica.
- **Actualización**: Reemplaza los archivos de un plugin existentes. Desactiva el plugin antes de escribir para evitar errores de estado parcial.
- **Eliminación por slug**: Localiza el directorio del plugin mediante el slug, lo desactiva en todos los sitios y luego elimina el directorio.

### Registro de un Manejador de Instalación Personalizado {#registering-a-custom-install-handler}

Puedes engancharte al ciclo de vida de la instalación usando las acciones `gratis_ai_plugin_installer_before_install` y `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: el nombre del directorio del plugin
    // $files: array asociativo de ruta relativa => contenido del archivo
    error_log("Instalando plugin: {$slug} con " . count($files) . " archivos.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} instalado exitosamente.");
    }
}, 10, 2);
```

## Registro del Ecosistema {#ecosystem-registry}

Las capacidades se registran a través del **registro de ecosistema de plugins**. El registro mapea los slugs de las capacidades a sus clases manejadoras y las expone al despachador de herramientas del agente de IA.

Para registrar una capacidad de gestión de plugins personalizada:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Mi Capacidad Personalizada',
        'description' => 'Hace algo útil con los plugins.',
    ];
    return $abilities;
});
```

Tu clase de capacidad debe implementar la `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Hace algo útil con los plugins.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'El slug del plugin sobre el que operar.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... tu implementación ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Integración con HookScanner {#hookscanner-integration}

Las capacidades `create_plugin` y `update_plugin` ejecutan automáticamente **HookScanner** contra el código recién generado. HookScanner devuelve una lista de hooks de acción y filtro de WordPress registrados por el plugin.

Para recuperar los resultados de HookScanner programáticamente:

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

HookScanner omite automáticamente los directorios `vendor/` y `node_modules/`.

## Arquitectura de Tareas Asíncronas {#async-job-architecture}

Las operaciones de plugins de larga duración (generar, instalar) se envían como **tareas asíncronas** con seguimiento de progreso en tiempo real. La interfaz de chat de IA consulta el progreso y transmite actualizaciones de estado al usuario:

1. **Despacho** — la capacidad crea una tarea asíncrona y devuelve un ID de tarea.
2. **Consulta** — el agente consulta `gratis_ai_job_status($job_id)` cada 2 segundos.
3. **Transmisión** — los mensajes de progreso intermedios se envían al hilo de chat.
4. **Completado** — se devuelve y se muestra el resultado final (éxito o error).

Para engancharse a los eventos del ciclo de vida de las tareas:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Tarea {$job_id} iniciada para capacidad: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Tarea {$job_id} completada. Éxito: " . ($result['success'] ? 'sí' : 'no'));
}, 10, 2);
```
