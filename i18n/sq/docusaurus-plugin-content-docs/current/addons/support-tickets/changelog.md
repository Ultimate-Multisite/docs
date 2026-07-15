---
title: Regjistri i ndryshimeve të biletave të mbështetjes
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Changelog i biletave të mbështetjes

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Përmirësuar: U hoq drejtoria vendor/ nga gjurmimi i Git (tashmë e mbuluar nga .gitignore), duke zvogëluar madhësinë e repos
* Përmirësuar: Testuar deri në WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Rregullim: Prano vlera null në setter-at nullable të modelit të biletës
* Rregullim: Ruaj të gjitha biletat në tabela globale në të gjithë rrjetin për mbështetje të duhur multisite
* Rregullim: Fshih fushat e stafit dhe rregullo ridrejtimin në faqe bosh në formularin e ri të biletës për klientin
* Rregullim: Zëvendëso thirrjet e papërcaktuara add_meta() me update_meta() të saktë për ruajtjen e metadatave
* Rregullim: Zëvendëso kontrollin e paregjistruar të capability me wu_view_all_support_tickets të saktë
* Rregullim: Shto handler-at AJAX që mungojnë për statusin, caktimin dhe veprimet quick-edit të biletës
* Rregullim: Korrigjo emrin e metodës për zbulimin e përgjigjes së stafit në pamjet e biletave
* Rregullim: Konsolido handler-at e dubluar të përgjigjeve dhe përputh emrat e veprimeve nonce
* Rregullim: Shto pamjen frontend që mungon për shortcode-in [wu_submit_ticket]
* Rregullim: Shto kolonën user_id që mungon dhe rregullo metodën Support_Ticket::get_user_id()
* Rregullim: Hiq thonjëzën e dyfishtë shtesë në etiketën e opsionit të filtrit të prioritetit
* Rregullim: Shto panelin e menaxhimit të biletave në administrimin e rrjetit për super administratorët
* Përmirësuar: Konsolido CSS-në e administrimit në një stylesheet të jashtëm të vetëm
* Përmirësuar: Hiq nënmenynë Settings nga menyja e administrimit të nënsajtit
* Përmirësuar: Ngarko asetet frontend me kusht vetëm në faqet e biletave të mbështetjes
* Përmirësuar: Anashkalo autoloader-in e plugin-it kur autoloader-i rrënjë i Bedrock ka ngarkuar tashmë varësitë

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Shtuar: Funksionalitet i plotë i shikimit të biletave për administrimin dhe frontend-in
* Shtuar: Handler AJAX për dorëzimet e përgjigjeve të biletave
* Shtuar: Mbështetje për funksionalitetin e përgjigjeve të biletave me trajtim të duhur të formularit
* Shtuar: Shfaqje e duhur e njoftimeve për dorëzimet e biletave dhe përgjigjet në administrim
* Shtuar: Lidhje automatike e biletës me përdoruesin aktual për vetë-dorëzimet e klientit
* Shtuar: Përmirësim sigurie për të parandaluar klientët të mbishkruajnë pronësinë e biletës
* Shtuar: Funksionet ndihmëse që mungojnë (wu_format_date, wu_user_can_view_ticket, etj.)
* Shtuar: Shkarkim dhe trajtim i duhur i bashkëngjitjeve të skedarëve
* Shtuar: Sistem njoftimesh me email për përgjigjet e biletave dhe ndryshimet e statusit
* Rregulluar: Formulari i përgjigjes së biletës tani përfshin ID-në e nevojshme të biletës
* Rregulluar: Probleme me dukshmërinë e njoftimeve në pamjet e biletave në administrim
* Rregulluar: Gabime sintakse në funksionet e biletave të mbështetjes
* Përmirësuar: Strukturë baze të dhënash me klasa të duhura query dhe skeme për përgjigjet dhe bashkëngjitjet
* Përmirësuar: Migrim te pronat reale në vend të atributeve për modelet e biletave

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Përditësuar: Prefiksi u riemërtua në ultimate-multisite për konsistencë
* Përditësuar: Standardizim i domenit të tekstit
* Rregulluar: Rregullime të vogla defektesh dhe përmirësime

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Publikimi fillestar
* Sistem i plotë i menaxhimit të biletave
* Kontroll aksesi me shumë nivele
* Sistem bisedash me rrjedhë
* Mbështetje për bashkëngjitje skedarësh
* Sistem njoftimesh me email
* Ndërfaqe administrimi dhe klienti
* Statistika dhe raportim
