---
title: Constructor y Entorno de Pruebas de Plugins
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 presenta el **Plugin Builder & Sandbox System**, que permite al asistente de IA generar, activar y gestionar plugins de WordPress en tu red, todo esto a través de un entorno sandbox seguro y aislado.

## Overview {#overview}

El Plugin Builder permite al asistente de IA escribir plugins personalizados de WordPress en respuesta a peticiones en lenguaje natural. Los plugins generados se validan, almacenan y activan dentro de una capa sandbox antes de afectar en cualquier momento la funcionalidad del sitio en vivo.

Los casos de uso incluyen:

- Generar plugins de utilidad ligeros sin necesidad de involucrar a desarrolladores.
- Crear prototipos de funcionalidades que requieren hooks de WordPress o tipos de contenido personalizados (custom post types).
- Crear scripts de automatización de corta duración para operaciones por lotes.

## Generating a Plugin via AI {#generating-a-plugin-via-ai}

Para generar un plugin, abre la interfaz de chat de Gratis AI Agent y describe lo que necesitas. Por ejemplo:

> "Crea un plugin que añada un aviso personalizado en el dashboard."

La IA hará lo siguiente:

1. Producirá el código PHP del plugin utilizando generación de código estructurada.
2. Validará la salida en busca de errores de sintaxis y patrones inseguros.
3. Guardará el plugin generado en el almacén (store) sandbox.
4. Devolverá una confirmación con el slug del plugin y un botón de **Activate in Sandbox**.

Puedes refinar el resultado haciendo preguntas de seguimiento en el mismo hilo de conversación antes de activarlo.

## Sandbox Activation {#sandbox-activation}

Activar un plugin generado en el sandbox es diferente a activarlo en la red en vivo. El sandbox:

- Ejecuta el plugin en un entorno WordPress aislado (wp-env).
- Captura cualquier error, advertencia o conflicto de hook de PHP.
- Informa el resultado de la activación de vuelta en la interfaz de chat.

Para activar un plugin en el sandbox, haz clic en el botón **Activate in Sandbox** en la respuesta del chat de IA, o usa el comando de barra:

```
/activate-plugin <plugin-slug>
```

Un mensaje de estado confirma si la activación tuvo éxito o falló. En caso de fallo, el registro de errores se mostrará en el hilo de chat.

## Managing Generated Plugins {#managing-generated-plugins}

Los plugins generados se listan en **Gratis AI Agent → Plugin Builder → Manage Plugins**. Desde esta pantalla puedes:

| Action | Description |
|---|---|
| **View source** | Revisar el código PHP completo del plugin. |
| **Re-activate in sandbox** | Volver a ejecutar la verificación de activación en el sandbox. |
| **Install on network** | Desplegar el plugin en la red en vivo (requiere confirmación manual). |
| **Update** | Proporcionar una nueva versión mediante la IA, reemplazando el código existente. |
| **Delete** | Eliminar el plugin del almacén sandbox. Primero lo desactiva de todos los sitios. |

:::warning
**Install on network** despliega el plugin generado en tu multisite de WordPress en vivo. Revisa el código del plugin antes de continuar. Gratis AI Agent solicitará confirmación antes de completar una instalación en vivo.
:::

## Installing a Generated Plugin on the Network {#installing-a-generated-plugin-on-the-network}

Cuando estés satisfecho con un plugin en el sandbox, puedes instalarlo en la red en vivo:

1. Ve a **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Haz clic en **Install on Network** junto al plugin que deseas desplegar.
3. Confirma el diálogo. El plugin se instala en `wp-content/plugins/` y se activa a nivel de red.

Alternativamente, usa el comando de barra en la interfaz de chat:

```
/install-plugin <plugin-slug>
```

## Plugin Updates {#plugin-updates}

Para actualizar un plugin generado, describe el cambio al asistente de IA en una nueva conversación:

> "Actualiza el plugin dashboard-notice para que solo muestre el aviso a los administradores."

La IA genera una nueva versión, que aparece en el sandbox junto a la versión actual. Tú revisas la diferencia (diff) y confirmas antes de que se aplique la actualización.

## HookScanner Integration {#hookscanner-integration}

El Plugin Builder utiliza un **HookScanner** integrado para analizar los hooks y filtros registrados por cada plugin generado. La salida de HookScanner se muestra en la respuesta del chat e incluye:

- Hooks de acción registrados (`add_action` calls).
- Hooks de filtro registrados (`add_filter` calls).
- Cualquier hook encontrado en las dependencias del plugin (omite los directorios `vendor/` y `node_modules/`).

Esto te ayuda a entender el comportamiento de un plugin antes de activarlo.

## Security Considerations {#security-considerations}

- Los plugins generados se almacenan por separado de los plugins instalados manualmente y no son accesibles a través de la pantalla estándar de gestión de plugins de WordPress hasta que los instales explícitamente en la red.
- El sandbox utiliza validación de rutas para prevenir la travesía de directorios al escribir archivos de plugin.
- Los plugins con llamadas a funciones peligrosas (ej., `eval`, `exec`, `system`) son marcados durante la validación y no se activarán.
