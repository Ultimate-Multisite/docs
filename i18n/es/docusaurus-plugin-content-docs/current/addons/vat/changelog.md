---
title: Registro de cambios del IVA
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Registro de cambios de VAT

Versión 1.0.7 - Publicada el 2026-02-03

* Corrección: Los números VAT de Alemania (DE) fallaban la validación debido a errores MS_MAX_CONCURRENT_REQ del servicio VIES SOAP. Se cambió de la SOAP API heredada a la EU VIES REST API oficial para una validación más fiable.
* Corrección: Ahora se aceptan los números VAT cuando el servicio VIES no está disponible temporalmente, en lugar de rechazarse incorrectamente. Se crea una entrada de registro para revisarla más tarde.
* Corrección: El campo VAT/Tax ID ahora es visible para todos los países, no solo para los miembros de la UE. Los identificadores fiscales de fuera de la UE (por ejemplo, números CHE suizos) se almacenan para mostrarse en la factura sin validación VIES.
* Corrección: La búsqueda de prefijo VAT para Grecia (GR), Mónaco (MC) e Isla de Man (IM) estaba rota debido a una lógica incorrecta de búsqueda en array.
* Mejora: Se eliminó la dependencia de desarrollo innecesaria wp-cli-bundle que podía causar errores fatales al usarse junto con el complemento Site Exporter.
* Mejora: Se añadió una suite completa de pruebas unitarias (53 pruebas).

Versión 1.0.6 - Publicada el 2026-01-25

* Corrección: Las transacciones nacionales B2B ahora cobran VAT correctamente. Según las reglas de VAT de la UE, la inversión del sujeto pasivo solo se aplica a transacciones B2B transfronterizas, no cuando el país del cliente coincide con el país de la empresa.

Versión 1.0.5 - Publicada el 2026-01-22

* Corrección: El complemento no se cargaba o no funcionaba correctamente.
* Cambio: Se cambió la fuente de datos de tasas VAT de euvatrates.com al repositorio ibericode/vat-rates para obtener datos más fiables y mantenidos activamente.
* Corrección: Se corrigió un error tipográfico en el valor de la opción super_reduced_rates.
* Mejora: Se añadieron comprobaciones de null para el manejo del código de país con el fin de evitar errores.
* Cambio: Se eliminaron los archivos de traducción incluidos en favor de actualizaciones automáticas mediante Traduttore.

Versión: 1.0.3 - Publicada el 2025-09-28

* Renombrar el prefijo a ultimate-multisite; actualizar el dominio de texto; incremento de versión.

Versión 1.0.0-beta.4 - 2021-09-24

* Añadido: filtro wp_ultimo_skip_network_active_check para configuraciones basadas en mu-plugins;

Versión 1.0.0 - 05/08/2021 - Lanzamiento inicial
