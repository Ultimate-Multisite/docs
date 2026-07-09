---
title: Site Exporterin muutosloki
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter -muutosloki {#site-exporter-changelog}

Versio: 1.0.6 - Julkaistu 2026-05-11
* Uutta: Sivuston viennit sisältävät nyt itse käynnistyvän index.php-tiedoston, joten ZIP voidaan asentaa tuoreelle palvelimelle ilman erillistä plugin-asennusta
* Uutta: Verkoston vienti antaa ylläpitäjien viedä kaikki alisivustot yhteen arkistoon Site Export -hallintasivulta

Versio: 1.0.5 - Julkaistu 2026-05-05
* Korjaus: Lisätty __callStatic WP_CLI-polyfill-tynkään käsittelemään mockaamattomia metodeja, kuten get_config, mikä estää testien bootstrap-virheet

Versio: 1.0.4 - Julkaistu 2025-11-25

* Korjaa yhteensopivuus Ultimate Multisite 2.4:n kanssa.

Versio: 1.0.2 - Julkaistu 2025-09-28

* Nimeä etuliite uudelleen muotoon ultimate-multisite; päivitä tekstidomain; versiopäivitys.

### Versio 1.0.1 - Julkaistu 2023-08-09 {#version-101---released-on-2023-08-09}

* Parannettu: Varmistaa nyt, että tuontitiedoston oikea tiedostopolku saadaan.
* Korjattu: Objektivälimuisti poistettu käytöstä virheiden estämiseksi tuonnin aikana.
* Korjattu: Korjattu ongelma, jossa tuonti-pluginin latauslinkki ei toiminut.

### Versio 1.0.0 - Julkaistu 2022-12-23 {#version-100---released-on-2022-12-23}

* Korjattu: Vientilomakkeen ponnahdusikkuna ei latautunut;
* Korjattu: Javascript-tiedostot eivät latautuneet vientisivulla;
* Sisäinen: Uusi koontiprosessi;

### Versio 1.0.0-beta.4 - Julkaistu 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Sisäinen: Lisätty hookien ja suodattimien generaattori;
* Sisäinen: Lisätty WP Ultimo -tyngät kehittäjien työn helpottamiseksi;
