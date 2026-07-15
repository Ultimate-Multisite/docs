---
title: Rexistro de cambios dos plans con medición
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Rexistro de cambios de plans medidos

Versión 1.1.0 - Publicada o 2026-05-05
- Novo: facturación de tokens de AI para subsitios multisite — rastrexa e factura o uso de tokens de AI en todos os sitios de clientes con tarifas por token configurables
- Novo: a aplicación do conector reconstruíuse con descubrimento dinámico de límites e escritura directa, garantindo precisión en tempo real en todos os conectores
- Corrección: as actualizacións das táboas da base de datos agora están aliñadas correctamente coas definicións do esquema BerlinDB, evitando fallos de actualización en instalacións novas
- Corrección: as devolucións de chamada de actualización da base de datos convertéronse ao formato correcto, resolvendo fallos de actualización silenciosos
- Corrección: agora acéptanse valores fraccionarios no campo de entrada AI Usage Overage Markup
- Corrección: resolvéronse erros fatais e problemas de dobre inicialización ao cargar o plugin
- Mellora: engadiuse o script npm check-env para que os contornos de desenvolvemento se autoconfiguren na primeira execución

### 1.0.3 {#103}
* Actualizado a Plugin Update Checker v5
* Engadidas cabeceiras modernas de plugin de WordPress
* Mellorada a compatibilidade coas versións máis recentes de WordPress
* Mellorado o rendemento do seguimento do uso

### 1.0.2 {#102}
* Correccións de erros e melloras de rendemento
* Mellorada a elaboración de informes de uso

### 1.0.0 {#100}
* Lanzamento inicial
* Funcionalidade principal de facturación medida
* Seguimento do uso e cálculo de excedentes
* Xeración automática de facturas
