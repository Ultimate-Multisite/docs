---
title: Rexistro de cambios de sincronización de contido
sidebar_position: 99
_i18n_hash: 3b44da06636d21415abe77d8cef605f3
---
# Rexistro de cambios de Content Sync {#content-sync-changelog}

### Versión 1.1.0 - Publicada o 2025-12-31 {#version-110---released-on-2025-12-31}
* Novo: Compatibilidade para sincronizar todos os tipos de publicación (publicacións, páxinas, tipos de publicación personalizados)
* Novo: Filtrado por tipo de publicación no paso de selección de contido
* Novo: Paso de selección do sitio de orixe: sincroniza desde calquera sitio, non só desde o sitio principal
* Novo: Preselección de sitios fillos para sitios de modelo
* Novo: Extracción de medios desde post_content para todos os tipos de publicación
* Novo: Sincronización de taxonomías (categorías, etiquetas, taxonomías personalizadas)
* Cambiado: Renomeado de "Elementor Template Sync" a "Content Sync"
* Cambiado: O paso "Seleccionar modelos" renomeouse a "Seleccionar datos"
* Mellorado: O código específico de Elementor agora só se executa para o tipo de publicación elementor_library

### Versión 1.0.0 - Publicada o 2025-12-19 {#version-100---released-on-2025-12-19}
* Lanzamento inicial
* Asistente de varios pasos para a selección de modelos e sitios
* Procesamento por lotes con información de progreso en tempo real
* Sincronización completa de medios con reasignación automática de ID
* Integración de configuración con Ultimate Multisite
* Compatibilidade coa exclusión de sitios mediante a configuración de rede
* Limpeza da caché de Elementor despois da sincronización
* Conservación da taxonomía dos modelos
