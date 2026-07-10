---
title: Zoznam zmien tiketov podpory
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Zoznam zmien Support Tickets {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Vylepšené: Odstránený adresár vendor/ zo sledovania v Git (už pokrytý .gitignore), čím sa zmenšila veľkosť repozitára
* Vylepšené: Testované až po WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Oprava: Prijímanie hodnôt null v setteroch nullable modelu tiketu
* Oprava: Ukladanie všetkých tiketov do globálnych tabuliek v rámci celej siete pre správnu podporu multisite
* Oprava: Skrytie polí personálu a oprava presmerovania na prázdnu stránku vo formulári nového tiketu zákazníka
* Oprava: Nahradenie nedefinovaných volaní add_meta() správnym update_meta() na ukladanie metadát
* Oprava: Nahradenie neregistrovanej kontroly oprávnenia správnym wu_view_all_support_tickets
* Oprava: Pridanie chýbajúcich AJAX handlerov pre stav tiketu, priradenie a akcie rýchlej úpravy
* Oprava: Oprava názvu metódy na detekciu odpovede personálu v zobrazeniach tiketu
* Oprava: Zlúčenie duplicitných handlerov odpovedí a zladenie názvov akcií nonce
* Oprava: Pridanie chýbajúceho frontendového zobrazenia pre shortcode [wu_submit_ticket]
* Oprava: Pridanie chýbajúceho stĺpca user_id a oprava metódy Support_Ticket::get_user_id()
* Oprava: Odstránenie nadbytočnej dvojitej úvodzovky v značke možnosti filtra priority
* Oprava: Pridanie panela správy tiketov v správe siete pre super adminov
* Vylepšené: Zlúčenie admin CSS do jedného externého štýlového súboru
* Vylepšené: Odstránenie podmenu Settings z admin menu subsajtu
* Vylepšené: Podmienené načítanie frontendových assetov iba na stránkach podpory tiketov
* Vylepšené: Preskočenie autoloadera pluginu, keď koreňový autoloader Bedrock už načítal závislosti

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Pridané: Plná funkčnosť zobrazovania tiketov pre admin a frontend
* Pridané: AJAX handler pre odosielanie odpovedí na tikety
* Pridané: Podpora funkčnosti odpovedí na tikety so správnym spracovaním formulára
* Pridané: Správne zobrazenie upozornení pre odoslania tiketov a odpovede v administrácii
* Pridané: Automatické priradenie tiketu k aktuálnemu používateľovi pri zákazníckych samoobslužných odoslaniach
* Pridané: Bezpečnostné vylepšenie na zabránenie zákazníkom prepísať vlastníctvo tiketu
* Pridané: Chýbajúce pomocné funkcie (wu_format_date, wu_user_can_view_ticket atď.)
* Pridané: Správne sťahovanie a spracovanie príloh súborov
* Pridané: Systém e-mailových upozornení pre odpovede na tikety a zmeny stavu
* Opravené: Formulár odpovede na tiket teraz obsahuje potrebné ID tiketu
* Opravené: Problémy s viditeľnosťou upozornení v admin zobrazeniach tiketov
* Opravené: Syntaktické chyby vo funkciách support ticketov
* Vylepšené: Štruktúra databázy so správnymi triedami dopytov a schém pre odpovede a prílohy
* Vylepšené: Migrácia na skutočné vlastnosti namiesto atribútov pre modely tiketov

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Aktualizované: Premenovaný prefix na ultimate-multisite pre konzistentnosť
* Aktualizované: Štandardizácia text domain
* Opravené: Menšie opravy chýb a vylepšenia

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Úvodné vydanie
* Kompletný systém správy tiketov
* Viacúrovňové riadenie prístupu
* Systém vláknových konverzácií
* Podpora príloh súborov
* Systém e-mailových upozornení
* Rozhrania pre admina a zákazníka
* Štatistiky a reportovanie
