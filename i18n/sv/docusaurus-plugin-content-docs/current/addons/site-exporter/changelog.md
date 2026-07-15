---
title: Webbplats Exporter Ändringslogg
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter Ändringslogg

Version: 1.0.6 - Släppt den 2026-05-11
* Nytt: Webbplats-exporten paketerar nu en självstartande index.php, så att ZIP-filen kan installeras på en ny värd utan separat plugin-installation.
* Nytt: Nätverks-export låter administratörer exportera alla underplatser i ett enda arkiv från Site Export-adminpanelen.

Version: 1.0.5 - Släppt den 2026-05-05
* Fixat: Lagt till `__callStatic` i WP_CLI polyfill stub för att hantera omockade metoder som `get_config`, vilket förhindrar att test-bootstrappen misslyckas.

Version: 1.0.4 - Släppt den 2025-11-25

* Fixat: Kompatibilitet med Ultimate Multisite 2.4.

Version: 1.0.2 - Släppt den 2025-09-28

* Bytt namn på prefix till ultimate-multisite; uppdaterat textdomän; versionsökning.

### Version 1.0.1 - Släppt den 2023-08-09 {#version-101---released-on-2023-08-09}

* Förbättrat: Säkerställer nu att rätt sökväg till importfilen hämtas.
* Fixat: Objektcache har stängts av för att förhindra fel under importen.
* Fixat: Åtgärdade problemet med att länken till plugin-nedladdningen inte fungerade.

### Version 1.0.0 - Släppt den 2022-12-23 {#version-100---released-on-2022-12-23}

* Fixat: Popup-formuläret för export laddade inte;
* Fixat: Javascript-filer laddade inte på export-sidan;
* Internt: Ny byggprocess;

### Version 1.0.0-beta.4 - Släppt den 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Internt: Lägger till generator för hooks och filters;
* Internt: Lägger till WP Ultimo stubs för utvecklarlivskvalitet;
