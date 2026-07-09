---
title: Registre de canvis de l'Exportador de Sites
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Historial de versions de Site Exporter {#site-exporter-changelog}

Version: 1.0.6 - Released on 2026-05-11
* **Nou:** Les exportacions de site ara inclouen un `index.php` d'autoinici, de manera que el ZIP es pugui instal·lar en un allotjament nou sense necessitat d'instal·lar un plugin separat
* **Nou:** L'exportació de xarxa permet als administradors exportar tots els subsites en un únic arxiu d'àrquivol, des de la pàgina d'administració de Site Export

Version: 1.0.5 - Released on 2026-05-05
* **Correcció:** S'ha afegit `__callStatic` a la *stub* de polyfill de WP_CLI per gestionar mètodes no *mockeats* com `get_config`, prevenint fallades de *bootstrap* de les proves

Version: 1.0.4 - Released on 2025-11-25

* **Correcció:** Compatibilitat amb Ultimate Multisite 2.4.

Version: 1.0.2 - Released on 2025-09-28

* Canvi de prefix a `ultimate-multisite`; actualització del domini de text; increment de versió.

### Version 1.0.1 - Released on 2023-08-09 {#version-101---released-on-2023-08-09}

* **Millorat:** Ara s'assegura que es rep treure el camí de fitxer correcte del fitxer d'importació.
* **Corregit:** Deshabilitat la *object cache* per prevenir errors durant l'importació.
* **Corregit:** Corregit el problema amb l'enllaç de descàrrega del plugin d'importació que no funcionava.

### Version 1.0.0 - Released on 2022-12-23 {#version-100---released-on-2022-12-23}

* **Corregit:** El *popup* del formulari d'exportació no es carregava;
* **Corregit:** Els fitxers Javascript no es carregaven a la pàgina d'exportació;
* **Intern:** Nou procés de *build*;

### Version 1.0.0-beta.4 - Released on 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* **Intern:** Afegit generador de *hooks* i *filters*;
* **Intern:** Afegits *stubs* de WP Ultimo per millorar la vida dels desenvolupadors;
