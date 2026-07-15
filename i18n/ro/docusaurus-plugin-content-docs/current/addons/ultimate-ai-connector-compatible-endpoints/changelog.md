---
title: Ultimate AI Connector pentru Endpoint-uri Compatibile Changelog
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Jurnal de modificări pentru Ultimate AI Connector pentru puncte de acces compatibile

## Versiunea 2.0.0 — Lansat pe 2026-04-24 {#version-200--released-on-2026-04-24}

* Nou: Suport multi-furnizori — configurați mai multe puncte de acces AI și rutează cererile cu redirecționare automată (fallback) între furnizori.
* Corecție: Integrarea SDK multi-furnizori cu ID-uri corecte ale furnizorilor, URL-uri de înregistrare și domeniul de aplicare (scoping) al filtrului HTTP pentru fiecare furnizor.
* Corecție: Noua placă de furnizor se extinde automat la adăugare; eliminare a cache-ului scripturilor la actualizarea plugin-ului.
* Corecție: Namespace dinamic pentru clasa furnizorului pentru `eval()` și comportamentul de auto-extindere pentru furnizorii adăugați în mod nou.
* Corecție: Utilizează componentele Card/CardBody/CardHeader/CardDivider stabile (nu mai experimentale) pentru compatibilitatea cu WordPress 6.9+.
* Corecție: Înlocuit Mânerul de tras (DragHandle) nedefinit cu o pictogramă de prindere unicode pentru reordonarea furnizorilor prin tras.
* Corecție: Eliminat apelul HTTP blocant care se declanșa la fiecare încărcare a paginii.
* Îmbunătățit: Fluxurile de lucru GitHub Actions actualizate la Node.js 24.

## Versiunea 1.0.0 — Lansare inițială {#version-100--initial-release}
