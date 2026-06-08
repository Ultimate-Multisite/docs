---
title: Registre de canvis de l'IVA
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Historial de versions de l'IVA

Version 1.0.7 - Publicat el 2026-02-03

* Correcció: Els númerys d'IVA de l'Alemanya (DE) estaven fallant la validació a causa d'errors MS_MAX_CONCURRENT_REQ del servei SOAP VIES. S'ha passat de l'API SOAP antiga a l'API REST oficial de VIES de la UE per a una validació més fiable.
* Correcció: Els númerys d'IVA ara són acceptats quan el servei VIES no està disponible temporalment, en lloc d'être rebutjats incorrectament. Es crea una entrada de registre per a una revisió posterior.
* Correcció: El camp de númerys d'IVA/impost ara és visible per a tots els països, no només per als membres de la UE. Els númerys d'impost no de la UE (per exemple, els números CHE suïssos) es guarden per a l'exhibició de factures sense validació VIES.
* Correcció: La consulta de prefix d'IVA per a Grècia (GR), Mònaco (MC) i l'Aillanti (IM) estava tancada a causa d'una lògica incorrecta de consulta d'arrel.
* Millora: S'ha eliminat la dependència de desenvolupament innecesària wp-cli-bundle que podria causar errors fatals quan es fa servir amb l'addon Site Exporter.
* Millora: S'ha afegit una suite completa de tests unitaris (53 tests).

Version 1.0.6 - Publicat el 2026-01-25

* Correcció: Les transaccions B2B domèstiques ara cobreixen correctament l'IVA. Segons les regles de l'IVA de la UE, la càrrega inversa només s'aplica a transaccions B2B transfrontereres, no quan el país del client coincideix amb el país de l'empresa.

Version 1.0.5 - Publicat el 2026-01-22

* Correcció: L'addon no es carrega o no funciona correctament.
* Canvi: S'ha canviat la font de dades de l'IVA de euvatrates.com a el repòsitori ibericode/vat-rates per a dades més fiables i mantenides de manera activa.
* Correcció: S'ha corregit l'error tipogràfi de l'opció super_reduced_rates.
* Millora: S'han afegit verificacions de nulls per a la gestió dels codis de país per prevenir errors.
* Canvi: S'han eliminat els fitxers de traducció empaquetats a favor de les actualitzacions automàtiques mitjançant Traduttore.

Version: 1.0.3 - Publicat el 2025-09-28

* Nom de prefix canviat a ultimate-multisite; actualitzat el domini de text; increment de versió.

Version 1.0.0-beta.4 - 2021-09-24

* Afegit: filter wp_ultimo_skip_network_active_check per a configuracions basades en mu-plugins;

Version 1.0.0 - 05/08/2021 - Lliurament inicial
