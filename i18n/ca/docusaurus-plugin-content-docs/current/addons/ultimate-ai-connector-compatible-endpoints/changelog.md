---
title: Diari de canvis de Ultimate AI Connector per Endpoints Compatibles
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Diari de canvis d'Ultimate AI Connector per a Endpoints Compatibles

## Versió 2.0.0 — Publicada el 2026-04-24

* Nou: Suport multi-proveïdor — configura múltiples endpoints d'IA i dirigeix les sol·licituds amb un fallback automàtic entre proveïdors.
* Correcció: Integració multi-proveïdor de l'SDK amb IDs de proveïdor correctes, URL de registre i àmbit de filtre HTTP per a cada proveïdor.
* Correcció: La nova carta de proveïdor ara s'expandeix automàticament al afegir-la; eliminació de cache de script quan s'actualitza el plugin.
* Correcció: Namespace dinàmic de la classe de proveïdor per a eval() i comportament d'auto-expansió per a proveïdors novament afegits.
* Correcció: Utilitza components estabilitzats de Card/CardBody/CardHeader/CardDivider (ja no experimentals) per a la compatibilitat amb WordPress 6.9+.
* Correcció: S'ha substituït el DragHandle indefinit per un ícone de manillar Unicode per a reordenar proveïdors amb arrastre.
* Correcció: S'ha eliminat una sol·licitud HTTP bloquejant que es disparava a cada càrrega de pàgina.
* Millorat: Els fluxos de treball de GitHub Actions han sido actualitzats a Node.js 24.

## Versió 1.0.0 — Lliurament inicial
