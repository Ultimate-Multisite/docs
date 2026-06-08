---
title: Ultimate AI Connector for Compatible Endpoints Changelog
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ultimate AI Connector pro kompatibilní koncové body (Endpoints) Seznam změn

## Verze 2.0.0 — Vydáno 2026-04-24

* Novinka: Podpora více poskytovatelů — nakonfigurujte více AI koncových bodů a směrování požadavků s automatickým přepínáním (fallback) mezi poskytovateli.
* Oprava: Integrace SDK pro více poskytovatelů s správnými ID poskytovatelů, URL pro registraci a omezením (scoping) HTTP filtru pro každého poskytovatele.
* Oprava: Nová karta poskytovatele se nyní automaticky rozbalí při přidání; skript cache busting při aktualizaci pluginu.
* Oprava: Dynamický prostor jmen (namespace) třídy poskytovatele pro `eval()` a automatické rozbalení pro nově přidané poskytovatele.
* Oprava: Používá stabilní komponenty Card/CardBody/CardHeader/CardDivider (už nejsou experimentální) pro kompatibilitu s WordPress 6.9+.
* Oprava: Nahrazen undefined DragHandle unicode uchopným ikonou pro přehazování poskytovatelů.
* Oprava: Odstraněn blokující HTTP požadavek, který se spouštěl při každém načtení stránky.
* Vylepšeno: Workflows GitHub Actions vylepšeny na Node.js 24.

## Verze 1.0.0 — První vydání
