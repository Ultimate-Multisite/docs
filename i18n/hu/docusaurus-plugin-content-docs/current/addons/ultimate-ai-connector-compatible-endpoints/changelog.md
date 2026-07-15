---
title: Ultimate AI Connector for Compatible Endpoints Changelog
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ultimate AI Connector kompatibilis endpoint-ekhez Módosítási napló

## Verzió 2.0.0 — Közzétéve 2026-04-24 {#version-200--released-on-2026-04-24}

* Új: Multi-provider támogatás – több AI endpoint-et konfigurálíráz és automatikus fallback-ot biztosító kérések továbbítását biztosít több szolgáltató között.
* Javítás: Multi-provider SDK integráció javítása a megfelelő szolgáltató ID-kkel, regisztrációs URL-ekkel és HTTP szűrő scope-olással minden szolgáltató számára.
* Javítás: Az új szolgáltató kártyája most automatikusan kibontakozik hozzáadáskor; script cache busting a plugin frissítéskor.
* Javítás: Dinamikus szolgáltató osztály namespace-e az eval() számára, és automatikus kibontakozás új hozzáadott szolgáltatók számára.
* Javítás: Stabil Card/CardBody/CardHeader/CardDivider komponensek használata (nem többé eksperimentális) a WordPress 6.9+ kompatibilitás érdekében.
* Javítás: Az undefined DragHandle helyett Unicode fogantyú ikon használata a szolgáltatók húzással történő újrarendezésekor.
* Javítás: Eltöri a blokkoló HTTP kérést, amely minden oldal betöltésekor futott.
* Jobbított: A GitHub Actions munkafolyamatok frissítése Node.js 24-re.

## Verzió 1.0.0 — Első kiadás {#version-100--initial-release}
