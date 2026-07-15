---
title: Ultimate AI Connector for Compatible Endpoints Changelog
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ultimate AI Connector for Compatible Endpoints Changelog

## Versione 2.0.0 — Rilasciata il 2026-04-24 {#version-200--released-on-2026-04-24}

* Nuovo: Supporto multi-fornitore — configura più endpoint AI e instaura il routing delle richieste con fallback automatico tra i fornitori.
* Fix: Integrazione SDK multi-fornitore con ID fornitore, URL di registrazione e ambito del filtro HTTP corretti per ogni fornitore.
* Fix: La nuova scheda fornitore si espande automaticamente all'aggiunta; eliminazione della cache dello script con l'aggiornamento del plugin.
* Fix: Namespace della classe fornitore dinamico per `eval()` e comportamento di auto-espansione per i fornitori appena aggiunti.
* Fix: Utilizza componenti Card/CardBody/CardHeader/CardDivider stabili (non più sperimentali) per la compatibilità con WordPress 6.9+.
* Fix: Sostituito il DragHandle non definito con un'icona di presa Unicode per il riordino dei fornitori tramite trascinamento.
* Fix: Eliminata la richiesta HTTP bloccante che veniva eseguita ad ogni caricamento della pagina.
* Migliorato: I flussi di lavoro di GitHub Actions sono stati aggiornati a Node.js 24.

## Versione 1.0.0 — Rilascio iniziale {#version-100--initial-release}
