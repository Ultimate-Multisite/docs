---
title: Svetainės eksportuotojo pakeitimų žurnalas
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter pakeitimų žurnalas {#site-exporter-changelog}

Versija: 1.0.6 - išleista 2026-05-11
* Nauja: svetainių eksportai dabar įtraukia savarankiškai paleidžiamą index.php, todėl ZIP galima įdiegti naujame serveryje be atskiro plugin įdiegimo
* Nauja: tinklo eksportas leidžia administratoriams eksportuoti visas subsites viename archyve iš Site Export administravimo puslapio

Versija: 1.0.5 - išleista 2026-05-05
* Pataisyta: pridėtas __callStatic prie WP_CLI polyfill stub, kad būtų apdorojami nesumodeliuoti metodai, pvz., get_config, ir išvengta testų bootstrap klaidų

Versija: 1.0.4 - išleista 2025-11-25

* Pataisytas suderinamumas su Ultimate Multisite 2.4.

Versija: 1.0.2 - išleista 2025-09-28

* Prefiksas pervadintas į ultimate-multisite; atnaujintas text domain; versijos padidinimas.

### Versija 1.0.1 - išleista 2023-08-09 {#version-101---released-on-2023-08-09}

* Patobulinta: dabar užtikrinama, kad būtų gautas teisingas importuotojo failo kelias.
* Pataisyta: išjungtas objektų cache, kad importavimo metu būtų išvengta klaidų.
* Pataisyta: išspręsta problema, kai importuotojo plugin atsisiuntimo nuoroda neveikė.

### Versija 1.0.0 - išleista 2022-12-23 {#version-100---released-on-2022-12-23}

* Pataisyta: eksporto formos iškylantysis langas neįkeliamas;
* Pataisyta: Javascript failai neįkeliami eksporto puslapyje;
* Vidinis: naujas build procesas;

### Versija 1.0.0-beta.4 - išleista 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Vidinis: pridėtas hooks ir filters generatorius;
* Vidinis: pridėti WP Ultimo stubs, skirti pagerinti kūrėjų darbo kokybę;
