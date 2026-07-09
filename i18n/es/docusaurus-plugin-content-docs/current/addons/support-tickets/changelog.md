---
title: Registro de cambios de tickets de soporte
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Registro de cambios de tickets de soporte {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Mejorado: Eliminado el directorio vendor/ del seguimiento de Git (ya cubierto por .gitignore), reduciendo el tamaño del repositorio
* Mejorado: Probado hasta WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Corrección: Aceptar valores null en los setters del modelo de ticket anulable
* Corrección: Almacenar todos los tickets en tablas globales para toda la red para un soporte multisite adecuado
* Corrección: Ocultar campos del personal y corregir la redirección de página en blanco en el formulario de nuevo ticket del cliente
* Corrección: Reemplazar llamadas add_meta() no definidas por update_meta() correcto para el almacenamiento de metadatos
* Corrección: Reemplazar la comprobación de capacidad no registrada por wu_view_all_support_tickets correcto
* Corrección: Añadir handlers AJAX faltantes para el estado del ticket, la asignación y las acciones de edición rápida
* Corrección: Corregir el nombre del método para la detección de respuestas del personal en las vistas de ticket
* Corrección: Consolidar handlers de respuesta duplicados y alinear los nombres de acción nonce
* Corrección: Añadir la vista frontend faltante para el shortcode [wu_submit_ticket]
* Corrección: Añadir la columna user_id faltante y corregir el método Support_Ticket::get_user_id()
* Corrección: Eliminar la comilla doble adicional en la etiqueta de opción del filtro de prioridad
* Corrección: Añadir panel de gestión de tickets del administrador de red para super administradores
* Mejorado: Consolidar el CSS de administración en una única hoja de estilo externa
* Mejorado: Eliminar el submenú Settings del menú de administración del subsitio
* Mejorado: Cargar condicionalmente los recursos frontend solo en páginas de tickets de soporte
* Mejorado: Omitir el autoloader del plugin cuando el autoloader raíz de Bedrock ya haya cargado las dependencias

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Añadido: Funcionalidad completa de visualización de tickets para admin y frontend
* Añadido: Handler AJAX para envíos de respuestas a tickets
* Añadido: Soporte para la funcionalidad de respuesta a tickets con manejo adecuado del formulario
* Añadido: Visualización adecuada de avisos para envíos de tickets y respuestas en admin
* Añadido: Asociación automática de tickets con el usuario actual para autoenvíos de clientes
* Añadido: Mejora de seguridad para evitar que los clientes sobrescriban la propiedad del ticket
* Añadido: Funciones auxiliares faltantes (wu_format_date, wu_user_can_view_ticket, etc.)
* Añadido: Descarga y manejo adecuados de archivos adjuntos
* Añadido: Sistema de notificaciones por correo electrónico para respuestas a tickets y cambios de estado
* Corregido: El formulario de respuesta de ticket ahora incluye el ID de ticket necesario
* Corregido: Problemas de visibilidad de avisos en vistas de tickets de admin
* Corregido: Errores de sintaxis en funciones de tickets de soporte
* Mejorado: Estructura de base de datos con clases adecuadas de consulta y esquema para respuestas y adjuntos
* Mejorado: Migración a propiedades reales en lugar de atributos para modelos de ticket

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Actualizado: Prefijo renombrado a ultimate-multisite por coherencia
* Actualizado: Estandarización del dominio de texto
* Corregido: Correcciones de errores menores y mejoras

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Lanzamiento inicial
* Sistema completo de gestión de tickets
* Control de acceso multinivel
* Sistema de conversación en hilos
* Soporte para archivos adjuntos
* Sistema de notificaciones por correo electrónico
* Interfaces de admin y cliente
* Estadísticas e informes
