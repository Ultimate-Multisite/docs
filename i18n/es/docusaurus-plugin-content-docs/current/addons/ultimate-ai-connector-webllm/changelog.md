---
title: Registro de cambios de Ultimate AI Connector para WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Registro de Cambios {#ultimate-ai-connector-for-webllm-changelog}

## Versión 1.1.0 — Lanzada el 2026-04-09 {#version-110--released-on-2026-04-09}

* Nuevo: Widget de chat flotante con indicador de estado en la barra de administración: cualquier usuario conectado puede activar el LLM del lado del navegador directamente desde el *front end*.
* Nuevo: Entorno de ejecución SharedWorker: el motor MLC ahora se ejecuta en un SharedWorker, por lo que múltiples pestañas comparten una sesión de GPU en lugar de competir por ella.
* Nuevo: Interceptor de middleware apiFetch: Las solicitudes de WordPress REST que coinciden con el patrón del AI Client SDK se enrutan transparentemente al *broker* local de WebLLM, sin necesidad de un viaje de ida y vuelta HTTP de bucle cerrado.
* Nuevo: Interfaz de usuario de configuración del widget en el panel del Conector para activar/desactivar el widget de chat y configurar el comportamiento de auto-prompt.
* Corrección: Se fuerza el *backend* de caché IndexedDB para que las descargas de pesos del modelo sobrevivan a las redirecciones CDN de HuggingFace xet que rompen la ruta predeterminada de la API de Caché.
* Corrección: Se omite la anulación del caché KV de `context_window` para los modelos de incrustación (no tienen decodificador y la anulación causó un error en tiempo de ejecución).
* Corrección: Se anuncia el modelo candidato de arranque en frío en `/webllm/v1/models` antes de que la pestaña del *worker* haya cargado, para que los consumidores del SDK vean un modelo inmediatamente.
* Corrección: Se conecta WebLLM al filtro `wpai_preferred_text_models` para que la función de Experimentos de IA se dirija al motor del navegador cuando se configura un modelo.
* Mejorado: Se corrigieron problemas de *cache-busting*, normalización de contenido y referencia de hardware detectados durante las pruebas de extremo a extremo.

## Versión 1.0.0 — Lanzamiento inicial {#version-100--initial-release}
