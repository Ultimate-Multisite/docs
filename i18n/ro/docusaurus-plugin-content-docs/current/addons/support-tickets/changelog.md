---
title: Istoric de modificări al biletelor de suport
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Jurnal de modificări pentru Ticket-uri de Suport

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Îmbunătățit: S-a eliminat directorul `vendor/` din urmărirea Git (acesta este deja acoperit de `.gitignore`), reducând dimensiunea repozitoriului.
* Îmbunătățit: Testat până la WordPress 7.0.

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Corectat: Acceptarea valorilor null în seterii modelului de ticket permis să fie null.
* Corectat: Toate ticket-urile sunt acum stocate în tabele globale la nivel de rețea pentru o suportare corectă a multisite-ului.
* Corectat: Ascunderea câmpurilor de personal și corectarea redirecționării paginii goale pe formularul de nou ticket al clientului.
* Corectat: Înlocuirea apelurilor `add_meta()` nedefinite cu `update_meta()` corect pentru stocarea metadatelor.
* Corectat: Înlocuirea verificării de capacitate (capability check) neregistrată cu `wu_view_all_support_tickets` corect.
* Corectat: Adăugarea handler-elor AJAX lipsă pentru acțiunile de status al ticket-ului, atribuire și editare rapidă.
* Corectat: Numele metodei pentru detectarea răspunsului de către personal în vizualizările de ticket.
* Corectat: Consolidarea handler-elor duplicate de răspuns și alinierea numelor acțiunilor nonce.
* Corectat: Adăugarea vizualizării frontend lipsă pentru shortcode-ul `[wu_submit_ticket]`.
* Corectat: Adăugarea coloanei `user_id` lipsă și corectarea metodei `Support_Ticket::get_user_id()`.
* Corectat: Eliminarea ghilimelei duble în tag-ul opțiunii de filtrare a priorității.
* Corectat: Adăugarea panoului de gestionare a ticket-urilor pentru administratorul de rețea pentru super-administratori.
* Îmbunătățit: Consolidarea CSS-ului de admin într-o singură foaie de stil externă.
* Îmbunătățit: Eliminarea sub-meniul Settings din meniul de admin al sub-site-ului.
* Îmbunătățit: Încărcarea condițională a asset-urilor frontend doar pe paginile de ticket de suport.
* Îmbunătățit: Sărit autoloader-ul pluginului atunci când autoloader-ul rădăcinii Bedrock a încărcat deja dependențele.

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Adăugat: Funcționalitatea completă de vizualizare a ticket-urilor pentru admin și frontend.
* Adăugat: Handler AJAX pentru trimiterea răspunsurilor la ticket.
* Adăugat: Suport pentru funcționalitatea de răspuns la ticket cu gestionarea corectă a formularului.
* Adăugat: Afișarea notificărilor corectă pentru trimiterile și răspunsurile la ticket în admin.
* Adăugat: Asocierea automată a ticket-ului cu utilizatorul curent pentru auto-trimiterile de către clienți.
* Adăugat: Îmbunătățirea securității pentru a preveni ca clienții să își suprascrie proprietatea asupra ticket-ului.
* Adăugat: Funcții auxiliare lipsă (wu_format_date, wu_user_can_view_ticket, etc.).
* Adăugat: Descărcarea și gestionarea fișierelor atașate corecte.
* Adăugat: Sistem de notificare prin e-mail pentru răspunsuri și schimbări de status ale ticket-urilor.
* Corectat: Formularul de răspuns la ticket include acum ID-ul necesar al ticket-ului.
* Corectat: Probleme de vizibilitate ale notificărilor în vizualizările de ticket în admin.
* Corectat: Erori de sintaxă în funcțiile de ticket de suport.
* Îmbunătățit: Structura bazei de date cu clase adecvate de interogare (query) și schemă pentru răspunsuri și atașamente.
* Îmbunătățit: Migrarea către proprietăți reale în loc de atribute pentru modelele de ticket.

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Actualizat: Prefixul a fost redenumit în `ultimate-multisite` pentru consistență.
* Actualizat: Standardizarea domeniului de text.
* Corectat: Corectări minore ale bug-urilor și îmbunătățiri.

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Lansare inițială
* Sistem complet de gestionare a ticket-urilor
* Control de acces la mai multe niveluri
* Sistem de conversație în fir (threaded)
* Suport pentru atașamente de fișiere
* Sistem de notificare prin e-mail
* Interfețe pentru admin și clienți
* Statistici și rapoarte
