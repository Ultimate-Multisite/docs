---
title: Registro de cambios de tickets de soporte
sidebar_position: 99
_i18n_hash: 91c4823bf40d597f272f50b6de5d3c98
---
# Registro de cambios de tickets de soporte

### 1.0.2 - 2025-12-11
* Añadido: Funcionalidad completa de visualización de tickets para administrador y frontend
* Añadido: Manejador AJAX para envíos de respuestas a tickets
* Añadido: Soporte para la funcionalidad de respuesta a tickets con manejo adecuado de formularios
* Añadido: Visualización adecuada de avisos para envíos de tickets y respuestas en el administrador
* Añadido: Asociación automática de ticket con el usuario actual para envíos propios de clientes
* Añadido: Mejora de seguridad para evitar que los clientes anulen la propiedad del ticket
* Añadido: Funciones auxiliares faltantes (wu_format_date, wu_user_can_view_ticket, etc.)
* Añadido: Descarga y manejo adecuados de archivos adjuntos
* Añadido: Sistema de notificaciones por correo electrónico para respuestas a tickets y cambios de estado
* Corregido: El formulario de respuesta a tickets ahora incluye el ID necesario del ticket
* Corregido: Problemas de visibilidad de avisos en las vistas de tickets del administrador
* Corregido: Errores de sintaxis en las funciones de tickets de soporte
* Mejorado: Estructura de la base de datos con clases de consulta y esquema adecuadas para respuestas y adjuntos
* Mejorado: Migración a propiedades reales en lugar de atributos para los modelos de tickets

### 1.0.1 - 2025-09-28
* Actualizado: Se cambió el prefijo a ultimate-multisite para consistencia
* Actualizado: Estandarización del dominio de texto
* Corregido: Correcciones menores de errores y mejoras

### 1.0.0 - 2025-09-01
* Lanzamiento inicial
* Sistema completo de gestión de tickets
* Control de acceso multinivel
* Sistema de conversación en hilos
* Soporte de archivos adjuntos
* Sistema de notificaciones por correo electrónico
* Interfaces de administrador y cliente
* Estadísticas e informes
