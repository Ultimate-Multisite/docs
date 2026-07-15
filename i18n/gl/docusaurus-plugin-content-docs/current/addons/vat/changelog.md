---
title: Rexistro de cambios do IVE
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Rexistro de cambios do IVE

Versión 1.0.7 - Publicada o 2026-02-03

* Corrección: os números de IVE alemáns (DE) fallaban na validación debido a erros MS_MAX_CONCURRENT_REQ do servizo VIES SOAP. Cambiouse da API SOAP herdada á API REST oficial de VIES da UE para unha validación máis fiable.
* Corrección: agora acéptanse os números de IVE cando o servizo VIES non está dispoñible temporalmente, en lugar de seren rexeitados incorrectamente. Créase unha entrada de rexistro para revisión posterior.
* Corrección: o campo de IVE/ID fiscal agora é visible para todos os países, non só para os membros da UE. Os IDs fiscais non pertencentes á UE (por exemplo, números CHE suízos) almacénanse para a visualización na factura sen validación VIES.
* Corrección: a busca do prefixo de IVE para Grecia (GR), Mónaco (MC) e a Illa de Man (IM) estaba rota debido a unha lóxica incorrecta de busca no array.
* Mellora: eliminouse a dependencia de desenvolvemento wp-cli-bundle innecesaria que podía causar erros fatais cando se usaba xunto co complemento Site Exporter.
* Mellora: engadiuse unha suite completa de probas unitarias (53 probas).

Versión 1.0.6 - Publicada o 2026-01-25

* Corrección: as transaccións B2B domésticas agora cobran correctamente o IVE. Segundo as normas de IVE da UE, a inversión do suxeito pasivo só se aplica ás transaccións B2B transfronteirizas, non cando o país do cliente coincide co país da empresa.

Versión 1.0.5 - Publicada o 2026-01-22

* Corrección: o complemento non cargaba nin funcionaba correctamente.
* Cambio: cambiouse a fonte de datos das taxas de IVE de euvatrates.com ao repositorio ibericode/vat-rates para obter datos máis fiables e mantidos activamente.
* Corrección: corrixiuse unha errata no valor da opción super_reduced_rates.
* Mellora: engadíronse comprobacións de null para a xestión do código de país co fin de evitar erros.
* Cambio: elimináronse os ficheiros de tradución incluídos en favor das actualizacións automáticas mediante Traduttore.

Versión: 1.0.3 - Publicada o 2025-09-28

* Renomear o prefixo a ultimate-multisite; actualizar o dominio de texto; incremento de versión.

Versión 1.0.0-beta.4 - 2021-09-24

* Engadido: filtro wp_ultimo_skip_network_active_check para configuracións baseadas en mu-plugins;

Versión 1.0.0 - 05/08/2021 - Lanzamento inicial
