---
title: Site Exporter Changelog
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Oldalexportáló Módosítási Napló

Verzió: 1.0.6 - Kiadása: 2026-05-11
* Új: Az oldalexportok most tartalmaznak egy önindító index.php fájlt, így a ZIP fájlt külön plugin telepítése nélkül is telepíthetik egy friss hostingre
* Új: A hálózatexport lehetővé teszi az adminok számára, hogy az összes aloldalt egyetlen archivumból exportálják a Site Export admin oldalról

Verzió: 1.0.5 - Kiadása: 2026-05-05
* Javítás: Hozzáadták a `__callStatic`-ot a WP_CLI polyfill stub-hoz, hogy kezelje az el nem mockolt metódusokat, mint például a `get_config`, ezzel megakadályozva a teszt elindításának sikertelenítését

Verzió: 1.0.4 - Kiadása: 2025-11-25

* Javítás: Kompatibilitást biztosít az Ultimate Multisite 2.4-el.

Verzió: 1.0.2 - Kiadása: 2025-09-28

* Nevezés: A prefix-et ultimate-multisite-re nevezték át; frissítik a szöveg tartományt; verzió emelkedés.

### Verzió 1.0.1 - Kiadása: 2023-08-09

* Javított: Most biztosítja, hogy a megfelelő fájlútvonalat kapja az importáló fájl.
* Javítás: Kikapcsolták az objektum cache-t, hogy elkerüljék a hibákat az importálás során.
* Javítás: Javították az importáló plugin letöltési linkjének nem működésével kapcsolatos problémát.

### Verzió 1.0.0 - Kiadása: 2022-12-23

* Javítás: Az export űrlap pop-up nem töltődik be;
* Javítás: A JavaScript fájlok nem töltődnek be az export oldalon;
* Belső: Új build folyamat;

### Verzió 1.0.0-beta.4 - Kiadása: 2022-01-13

* Belső: Hozzáadták a hooks és filter generátort;
* Belső: Hozzáadták a WP Ultimo stub-okat a fejlesztői élmény javítására;
