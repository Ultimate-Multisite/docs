---
title: Jounal chanjman tikè sipò
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Jounal chanjman Tikè Sipò {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Amelyore: Retire anyè vendor/ nan swivi Git (deja kouvri pa .gitignore), sa ki diminye gwosè depo a
* Amelyore: Teste jiska WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Koreksyon: Aksepte valè null nan setters modèl tikè ki nullable
* Koreksyon: Estoke tout tikè yo nan tablo global atravè tout rezo a pou bon sipò multisite
* Koreksyon: Kache chan anplwaye yo epi korije redireksyon paj vid sou fòm nouvo tikè kliyan an
* Koreksyon: Ranplase apèl add_meta() ki pa defini yo ak update_meta() ki kòrèk pou estokaj metadata
* Koreksyon: Ranplase verifikasyon kapasite ki pa anrejistre a ak wu_view_all_support_tickets ki kòrèk
* Koreksyon: Ajoute handlers AJAX ki manke pou estati tikè, asiyasyon, ak aksyon quick-edit
* Koreksyon: Korije non metòd la pou deteksyon repons anplwaye nan afichaj tikè yo
* Koreksyon: Konsolide handlers repons doub yo epi aliyen non aksyon nonce yo
* Koreksyon: Ajoute afichaj frontend ki manke pou shortcode [wu_submit_ticket]
* Koreksyon: Ajoute kolòn user_id ki manke a epi korije metòd Support_Ticket::get_user_id()
* Koreksyon: Retire doub-giyemè anplis nan tag opsyon filtè priyorite a
* Koreksyon: Ajoute panèl jesyon tikè admin rezo pou super admins
* Amelyore: Konsolide CSS admin nan yon sèl fèy estil ekstèn
* Amelyore: Retire soumeni Settings nan meni admin subsite la
* Amelyore: Chaje assets frontend sèlman sou paj tikè sipò yo, selon kondisyon
* Amelyore: Sote autoloader plugin lan lè autoloader rasin Bedrock la deja chaje depandans yo

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Ajoute: Fonksyonalite konplè pou wè tikè pou admin ak frontend
* Ajoute: Handler AJAX pou soumèt repons tikè
* Ajoute: Sipò pou fonksyonalite repons tikè ak bon jesyon fòm
* Ajoute: Bon afichaj avi pou soumisyon tikè ak repons nan admin
* Ajoute: Asosyasyon otomatik tikè ak itilizatè aktyèl la pou kliyan k ap soumèt pou tèt yo
* Ajoute: Amelyorasyon sekirite pou anpeche kliyan ranplase pwopriyetè tikè a
* Ajoute: Fonksyon èd ki manke yo (wu_format_date, wu_user_can_view_ticket, elatriye)
* Ajoute: Bon telechajman ak jesyon fichye atache
* Ajoute: Sistèm notifikasyon imèl pou repons tikè ak chanjman estati
* Korije: Fòm repons tikè a kounye a gen ladan ID tikè ki nesesè a
* Korije: Pwoblèm vizibilite avi nan afichaj tikè admin yo
* Korije: Erè sentaks nan fonksyon tikè sipò yo
* Amelyore: Estrikti bazdone ak klas query ak schema ki apwopriye pou repons ak atachman
* Amelyore: Migrasyon pou ale sou pwopriyete reyèl olye de atribi pou modèl tikè yo

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Mizajou: Chanje non prefiks la pou vin ultimate-multisite pou konsistans
* Mizajou: Estandadizasyon text domain
* Korije: Ti koreksyon ensèk ak amelyorasyon

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Premye lansman
* Sistèm jesyon tikè konplè
* Kontwòl aksè plizyè nivo
* Sistèm konvèsasyon an fil
* Sipò pou fichye atache
* Sistèm notifikasyon imèl
* Entèfas admin ak kliyan
* Estatistik ak rapò
