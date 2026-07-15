---
title: Registro de cambios multi-red
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Registro de cambios de Multi-Network

### 1.3.0 {#130}
* Nuevo: Previsualizador de plantillas de red — explora y previsualiza plantillas de red con un panel en vivo antes de comprar.
* Nuevo: Selector de plantillas de red en el pago — los clientes pueden seleccionar una plantilla de red durante el flujo de registro y pago.
* Nuevo: SSO con magic link entre redes — los clientes pueden acceder a subredes sin interrupciones mediante autenticación con magic-link.
* Nuevo: Clonación de medios de red — los medios del sitio se duplican correctamente al clonar redes desde una plantilla.
* Corrección: La clonación de redes ahora funciona sin el addon de multitenencia; los privilegios de superadministrador se vuelven a conceder después de la clonación.
* Corrección: La creación de redes ahora es compatible con WooCommerce y todas las pasarelas de pago.
* Corrección: El número de puerto ahora se incluye en la generación del dominio de respaldo.
* Corrección: El CSS del selector de plantillas se movió a una hoja de estilos encolada para una representación correcta en todos los themes.
* Corrección: Protección contra la clave `network_id` no definida en el alcance de consulta del sitio.
* Corrección: La comprobación de permisos de red antes del cambio de contexto evita errores de propiedades de tabla de `wpdb`.

### 1.0.4 {#104}
* Corrección: Creación de una red nueva.
* Corrección: Representación de menús.

### 1.0.3 {#103}
* Actualizado a Plugin Update Checker v5
* Añadidas cabeceras modernas de plugin de WordPress
* Compatibilidad mejorada con las versiones más recientes de WordPress

### 1.0.2 {#102}
* Correcciones de errores y mejoras de rendimiento
* Aislamiento de red mejorado

### 1.0.0 {#100}
* Lanzamiento inicial
* Funcionalidad multinetwork principal
* Integración con Multisite Ultimate
