---
title: Istoric de modificări al Exportatorului de Site
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Jurnalul de modificări al Site Exporter

Versiune: 1.0.6 - Lansat pe 2026-05-11
* Nou: Exporturile de site includ acum un index.php auto-pornit, astfel încât fișierul ZIP poate fi instalat pe o gazdă nouă fără a necesita instalarea unui plugin separat
* Nou: Exportarea de rețea permite administratorilor să exporteze toate subsite-urile într-o singură arhivă, direct de pe pagina de administrare a Site Export

Versiune: 1.0.5 - Lansat pe 2026-05-05
* Corectat: S-a adăugat `__callStatic` în stub-ul de polyfill pentru WP_CLI pentru a gestiona metodele ne-mockate, cum ar fi `get_config`, prevenind eșecurile de inițializare a testelor

Versiune: 1.0.4 - Lansat pe 2025-11-25

* Corectat: Compatibilitatea cu Ultimate Multisite 2.4.

Versiune: 1.0.2 - Lansat pe 2025-09-28

* Prefixul a fost redenumit în ultimate-multisite; domeniul de text a fost actualizat; versiunea a primit un increment.

### Versiune 1.0.1 - Lansat pe 2023-08-09 {#version-101---released-on-2023-08-09}

* Îmbunătățit: Acum se asigură că se obține calea de fișier corectă pentru fișierul de import.
* Corectat: Cache-ul de obiecte a fost dezactivat pentru a preveni erorile în timpul importului.
* Corectat: Problema legată de link-ul de descărcare al pluginului de import care nu funcționa a fost remediată.

### Versiune 1.0.0 - Lansat pe 2022-12-23 {#version-100---released-on-2022-12-23}

* Corectat: Popup-ul formularului de export nu se încărca;
* Corectat: Fișierele Javascript nu se încărcau pe pagina de export;
* Intern: Nou proces de compilare;

### Versiune 1.0.0-beta.4 - Lansat pe 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Intern: Adăugat generator de hook-uri și filtre;
* Intern: Adăugat stub-uri WP Ultimo pentru îmbunătățirea calității vieții dezvoltatorilor;
