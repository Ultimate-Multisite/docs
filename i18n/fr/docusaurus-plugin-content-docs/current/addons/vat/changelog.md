---
title: Journal des modifications de la TVA
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Journal des modifications TVA

Version 1.0.7 - Publié le 2026-02-03

* Correctif : les numéros de TVA allemands (DE) échouaient à la validation en raison d’erreurs MS_MAX_CONCURRENT_REQ du service VIES SOAP. Passage de l’ancienne SOAP API à l’API officielle EU VIES REST pour une validation plus fiable.
* Correctif : les numéros de TVA sont désormais acceptés lorsque le service VIES est temporairement indisponible, au lieu d’être rejetés à tort. Une entrée de journal est créée pour un examen ultérieur.
* Correctif : le champ de TVA/identifiant fiscal est désormais visible pour tous les pays, et pas seulement pour les membres de l’UE. Les identifiants fiscaux hors UE (par exemple les numéros suisses CHE) sont stockés pour l’affichage sur les factures sans validation VIES.
* Correctif : la recherche du préfixe de TVA pour la Grèce (GR), Monaco (MC) et l’île de Man (IM) était cassée en raison d’une logique de recherche de tableau incorrecte.
* Amélioration : suppression de la dépendance de développement wp-cli-bundle inutile, qui pouvait provoquer des erreurs fatales lorsqu’elle était utilisée avec l’addon Site Exporter.
* Amélioration : ajout d’une suite complète de tests unitaires (53 tests).

Version 1.0.6 - Publié le 2026-01-25

* Correctif : les transactions B2B nationales facturent désormais correctement la TVA. Selon les règles de TVA de l’UE, l’autoliquidation ne s’applique qu’aux transactions B2B transfrontalières, et non lorsque le pays du client correspond au pays de l’entreprise.

Version 1.0.5 - Publié le 2026-01-22

* Correctif : l’addon ne se chargeait pas ou ne fonctionnait pas correctement.
* Changement : source des données de taux de TVA remplacée, de euvatrates.com vers le dépôt ibericode/vat-rates, pour des données plus fiables et maintenues activement.
* Correctif : correction d’une faute de frappe dans la valeur de l’option super_reduced_rates.
* Amélioration : ajout de vérifications null pour la gestion des codes pays afin d’éviter les erreurs.
* Changement : suppression des fichiers de traduction inclus au profit des mises à jour automatiques via Traduttore.

Version : 1.0.3 - Publié le 2025-09-28

* Renommage du préfixe en ultimate-multisite ; mise à jour du domaine de texte ; incrément de version.

Version 1.0.0-beta.4 - 2021-09-24

* Ajout : filtre wp_ultimo_skip_network_active_check pour les configurations basées sur des mu-plugins ;

Version 1.0.0 - 05/08/2021 - Version initiale
