---
title: >-
  Rexistro de cambios do conector de IA definitivo para puntos finais
  compatibles
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Rexistro de cambios de Ultimate AI Connector for Compatible Endpoints

## Versión 2.0.0 — Publicada o 2026-04-24 {#version-200--released-on-2026-04-24}

* Novo: compatibilidade con múltiples provedores — configura múltiples endpoints de IA e encamiña as solicitudes con reserva automática entre provedores.
* Corrección: integración do SDK multiprovedor con IDs de provedor correctos, URLs de rexistro e delimitación de filtros HTTP por provedor.
* Corrección: a nova tarxeta de provedor agora expándese automaticamente ao engadila; invalidación da caché de scripts ao actualizar o plugin.
* Corrección: namespace dinámico da clase de provedor para eval() e comportamento de autoexpansión para provedores recentemente engadidos.
* Corrección: usa compoñentes estables Card/CardBody/CardHeader/CardDivider (xa non experimentais) para compatibilidade con WordPress 6.9+.
* Corrección: substituíuse DragHandle non definido por unha icona de agarre unicode para arrastrar e reordenar provedores.
* Corrección: eliminouse a solicitude HTTP bloqueante que se executaba en cada carga de páxina.
* Mellorado: fluxos de traballo de GitHub Actions actualizados a Node.js 24.

## Versión 1.0.0 — Lanzamento inicial {#version-100--initial-release}
