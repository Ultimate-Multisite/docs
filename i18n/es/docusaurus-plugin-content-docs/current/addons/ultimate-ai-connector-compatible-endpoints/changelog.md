---
title: Ultimate AI Connector para Endpoints Compatibles Changelog
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Registro de cambios de Ultimate AI Connector para Endpoints Compatibles

## Versión 2.0.0 — Lanzado el 2026-04-24 {#version-200--released-on-2026-04-24}

* Nuevo: Soporte multi-proveedor: configura múltiples endpoints de IA y enruta solicitudes con recuperación automática entre proveedores.
* Corrección: Integración del SDK multi-proveedor con IDs de proveedor, URLs de registro y alcance del filtro HTTP correctos por proveedor.
* Corrección: La nueva tarjeta de proveedor ahora se expande automáticamente al añadirla; eliminación de caché de scripts al actualizar el plugin.
* Corrección: Espacio de nombres de clase de proveedor dinámico para eval() y comportamiento de auto-expansión para proveedores recién añadidos.
* Corrección: Utiliza componentes estables Card/CardBody/CardHeader/CardDivider (ya no experimentales) para la compatibilidad con WordPress 6.9+.
* Corrección: Se reemplazó el DragHandle indefinido por un icono de agarre Unicode para reordenar proveedores mediante arrastre.
* Corrección: Se eliminó la solicitud HTTP bloqueante que se ejecutaba en cada carga de página.
* Mejorado: Los flujos de trabajo de GitHub Actions se actualizaron a Node.js 24.

## Versión 1.0.0 — Lanzamiento inicial {#version-100--initial-release}
