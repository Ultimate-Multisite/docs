---
title: Změnový deník pro více sítí
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Změnový deník Multi-Network

### 1.3.0 {#130}
* Nové: Předzíchovník šablon sítě — procházejte a předzobrazte šablony sítě na živém panelu před nákupem.
* Nové: Výběr šablon sítě v pokladně — zákazníci mohou vybrat šablonu sítě během procesu pokladny při registraci.
* Nové: Přihlášení napříč sítěmi pomocí kouzelného odkazu (magic link SSO) — zákazníci mohou přistupovat k pod-sítím bezproblémově pomocí autentizace kouzelným odkazem.
* Nové: Klonování médií sítě — média stránky jsou správně duplikována při klonování sítí ze šablony.
* Oprava: Klonování sítě nyní funguje i bez addonu pro více nájemníků (multi-tenancy addon); práva super administrátora jsou po klonování znovu přidělena.
* Oprava: Vytváření sítě je nyní kompatibilní s WooCommerce a všemi platebními bránami.
* Oprava: Číslo portu je nyní zahrnuto do generování domény v případě selhání (fallback).
* Oprava: CSS pro výběr šablony byl přesunut do dořazeného listu stylů (enqueued stylesheet) pro správné vykreslení na všech tématech.
* Oprava: Ochrana před nedefinovaným klíčem `network_id` v rozsahu dotazu stránky.
* Oprava: Kontrola oprávnění sítě před přepínáním kontextu zabraňuje chybám vlastností tabulek `wpdb`.

### 1.0.4 {#104}
* Oprava: Vytváření nové sítě.
* Oprava: Vykreslování menu.

### 1.0.3 {#103}
* Aktualizováno na Plugin Update Checker v5
* Přidány moderní hlavičky pluginu WordPress
* Vylepšena kompatibilita s nejnovějšími verzemi WordPress

### 1.0.2 {#102}
* Opravy chyb a vylepšení výkonu
* Vylepšená izolace sítě

### 1.0.0 {#100}
* První vydání
* Základní funkce multi-network
* Integrace s Multisite Ultimate
