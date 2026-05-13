---
title: "Site Exporter Changelog"
sidebar_position: 99
---

# Site Exporter Changelog

Version: 1.0.6 - Released on 2026-05-11
* New: Site exports now bundle a self-booting index.php so the ZIP can be installed on a fresh host without a separate plugin install
* New: Network export lets administrators export all subsites in a single archive from the Site Export admin page

Version: 1.0.5 - Released on 2026-05-05
* Fix: Added __callStatic to WP_CLI polyfill stub to handle unmocked methods like get_config, preventing test bootstrap failures

Version: 1.0.4 - Released on 2025-11-25

* Fix compatibility with Ultimate Multisite 2.4.

Version: 1.0.2 - Released on 2025-09-28

* Rename prefix to ultimate-multisite; update text domain; version bump.

### Version 1.0.1 - Released on 2023-08-09

* Improved: Now ensures that the correct file path of the importer file is obtained.
* Fixed: Disabled object cache to prevent errors during import.
* Fixed: Fixed the issue with the importer plugin download link not working.

### Version 1.0.0 - Released on 2022-12-23

* Fixed: Export form popup not loading;
* Fixed: Javascript files not loading on the export page;
* Internal: New build process;

### Version 1.0.0-beta.4 - Released on 2022-01-13

* Internal: Added hooks and filters generator;
* Internal: Added WP Ultimo stubs for developer quality of life;
