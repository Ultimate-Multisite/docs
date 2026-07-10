---
title: Registro de cambios de los planes medidos
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Registro de cambios de planes medidos {#metered-plans-changelog}

Versión 1.1.0 - Publicada el 2026-05-05
- Nuevo: Facturación de tokens de AI para subsitios multisite — rastrea y factura el uso de tokens de AI en sitios de clientes con tarifas configurables por token
- Nuevo: Aplicación de conectores reconstruida con descubrimiento dinámico de límites y escritura directa, lo que garantiza precisión en tiempo real en todos los conectores
- Corrección: Las actualizaciones de tablas de base de datos ahora están correctamente alineadas con las definiciones de esquema de BerlinDB, lo que evita fallos de actualización en instalaciones nuevas
- Corrección: Las callbacks de actualización de base de datos se convirtieron al formato correcto, resolviendo fallos de actualización silenciosos
- Corrección: Ahora se aceptan valores fraccionarios en el campo de entrada AI Usage Overage Markup
- Corrección: Se resolvieron errores fatales y problemas de doble inicialización al cargar el plugin
- Mejorado: Se añadió el script npm check-env para que los entornos de desarrollo se autoconfiguren en la primera ejecución

### 1.0.3 {#103}
* Actualizado a Plugin Update Checker v5
* Añadidos headers modernos de plugin de WordPress
* Compatibilidad mejorada con las versiones más recientes de WordPress
* Rendimiento mejorado del seguimiento de uso

### 1.0.2 {#102}
* Correcciones de errores y mejoras de rendimiento
* Informes de uso mejorados

### 1.0.0 {#100}
* Versión inicial
* Funcionalidad principal de facturación medida
* Seguimiento de uso y cálculo de excedentes
* Generación automática de facturas
