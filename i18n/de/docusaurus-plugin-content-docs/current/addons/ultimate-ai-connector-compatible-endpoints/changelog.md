---
title: Ultimate AI Connector für kompatible Endpunkte Changelog
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ultimate AI Connector für kompatible Endpunkte Versionshinweise

## Version 2.0.0 — Veröffentlicht am 24.04.2026 {#version-200--released-on-2026-04-24}

* Neu: Unterstützung für mehrere Anbieter (Multi-Provider-Support) – Konfigurieren Sie mehrere AI-Endpunkte und leiten Sie Anfragen mit automatischem Fallback über verschiedene Anbieter weiter.
* Fix: Multi-Provider SDK-Integration mit korrekten Provider-IDs, Registrierungs-URLs und HTTP-Filter-Umfang (Scoping) pro Anbieter.
* Fix: Die neue Provider-Karte erweitert sich jetzt automatisch beim Hinzufügen; Cache-Busting für das Plugin bei Updates.
* Fix: Dynamischer Provider-Klassen-Namespace für `eval()` und automatisches Erweiterungsverhalten für neu hinzugefügte Anbieter.
* Fix: Verwendet stabile Card/CardBody/CardHeader/CardDivider Komponenten (nicht mehr experimentell) für die Kompatibilität mit WordPress 6.9+.
* Fix: Ersetzt das undefinierte DragHandle durch ein Unicode-Griff-Icon für das Verschieben von Anbietern per Drag-and-Drop.
* Fix: Eliminiert einen blockierenden HTTP-Request, der bei jedem Seitenaufruf ausgeführt wurde.
* Verbessert: GitHub Actions Workflows auf Node.js 24 aktualisiert.

## Version 1.0.0 — Erstveröffentlichung {#version-100--initial-release}
