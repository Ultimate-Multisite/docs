---
title: Registro de cambios de IVA
sidebar_position: 99
_i18n_hash: 203587cca82c7a062fdbaf29c1b0024b
---
# Registro de cambios de IVA

Versión 1.0.6 - Lanzado el 2026-01-25

* Corrección: Las transacciones B2B domésticas ahora cobran correctamente el IVA. Según las reglas de IVA de la UE, el mecanismo de inversión de sujeto pasivo solo se aplica a transacciones B2B transfronterizas, no cuando el país del cliente coincide con el país de la empresa.

Versión 1.0.5 - Lanzado el 2026-01-22

* Corrección: El complemento no se carga o funciona correctamente.
* Cambio: Se cambió la fuente de datos de las tasas de IVA de euvatrates.com a la repositorio ibericode/vat-rates para obtener datos más fiables y mantenidos activamente.
* Corrección: Se corrigió el error tipográfico en el valor de la opción super_reduced_rates.
* Mejora: Se añadieron comprobaciones de nulos para el manejo del código de país y prevenir errores.
* Cambio: Se eliminaron los archivos de traducción incluidos en favor de actualizaciones automáticas a través de Traduttore.

Versión 1.0.3 - Lanzado el 2025-09-28

* Renombrar el prefijo a ultimate-multisite; actualizar el dominio de texto; incremento de versión.

Versión 1.0.0-beta.4 - 2021-09-24

* Añadido: filtro wp_ultimo_skip_network_active_check para configuraciones basadas en mu-plugins;

Versión 1.0.0 - 05/08/2021 - Lanzamiento inicial
