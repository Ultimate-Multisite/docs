---
title: Zoznam zmien meraných plánov
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Zoznam zmien Metered Plans

Verzia 1.1.0 – vydané 2026-05-05
- Nové: Účtovanie AI tokenov pre multisite podstránky — sledujte a účtujte používanie AI tokenov naprieč zákazníckymi stránkami s konfigurovateľnými sadzbami za token
- Nové: Vynucovanie konektorov prebudované s dynamickým zisťovaním limitov a priebežným zápisom, čo zabezpečuje presnosť v reálnom čase naprieč všetkými konektormi
- Oprava: Aktualizácie databázových tabuliek sú teraz správne zosúladené s definíciami schémy BerlinDB, čím sa predchádza zlyhaniam aktualizácie pri nových inštaláciách
- Oprava: Callbacky aktualizácie databázy prevedené do správneho formátu, čím sa riešia tiché zlyhania aktualizácie
- Oprava: Zlomkové hodnoty sú teraz prijímané vo vstupnom poli AI Usage Overage Markup
- Oprava: Vyriešené fatálne chyby a problémy s dvojitou inicializáciou pri načítaní pluginu
- Vylepšené: Pridaný npm skript check-env, aby sa vývojárske prostredia samy nakonfigurovali pri prvom spustení

### 1.0.3
* Aktualizované na Plugin Update Checker v5
* Pridané moderné hlavičky WordPress pluginu
* Vylepšená kompatibilita s najnovšími verziami WordPress
* Zvýšený výkon sledovania používania

### 1.0.2
* Opravy chýb a vylepšenia výkonu
* Vylepšené vykazovanie používania

### 1.0.0
* Prvé vydanie
* Základná funkcionalita meraného účtovania
* Sledovanie používania a výpočet prekročenia
* Automatické generovanie faktúr
