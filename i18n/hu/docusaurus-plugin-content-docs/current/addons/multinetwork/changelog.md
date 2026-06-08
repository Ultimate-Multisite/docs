---
title: Multi-hálózatos változtathatatoló lista
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Multi-Network Kiadásló Napló

### 1.3.0
* Új: Hálózat sablon előnézője — vásárlás előtt böngészhet és előnézheti a hálózat sablonokat egy élő panelen.
* Új: Hálózat sablon választó a fizetési folyamatban — az ügyfelek a regisztrációs fizetési folyamat során kiválaszthatnak egy hálózat sablont.
* Új: Hálózat-közötti mágikus link SSO — az ügyfelek zökkenőmentesen férhetnek hozzá a külső hálózatokhoz a mágikus link hitelesítéssel.
* Új: Hálózat média klónozása — a weboldal média tartalmai helyesen duplikálódnak, amikor egy sablonból klónozunk hálózatokat.
* Javítás: A hálózat klónozása most már működik a multi-tenancy addon nélkül; a super admin jogosultságokat klónozás után újra biztosítja.
* Javítás: A hálózat létrehozása most kompatibilis a WooCommerce-kal és minden fizetési kapucsal.
* Javítás: A port számát most magában foglalja a fallback domain generálás.
* Javítás: A sablon választó CSS-ét egy enqueued stylesheet-be helyezték, hogy minden témában helyesen jelenjen meg.
* Javítás: Megvédi a site query scope-ban az undefined `network_id` kulcsát.
* Javítás: A hálózat jogosultsági ellenőrzés a kontextusváltás előtt megakadályozza a `wpdb` táblakülönbségi hibaüzeneteket.

### 1.0.4
* Javítás: Új hálózat létrehozása.
* Javítás: Menüek megjelenítése.

### 1.0.3
* Frissítve a Plugin Update Checker v5-re
* Hozzáadva modern WordPress plugin fejléceket
* Javítottuk a kompatibilitást az utolsó WordPress verziókkal

### 1.0.2
* Hibajavítások és teljesítményjavítások
* Javítottuk a hálózat izolációt

### 1.0.0
* Első kiadás
* Core multi-network funkciók
* Integráció a Multisite Ultimate-lel
