---
title: Istoric de modificări
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog {#changelog}

## 1.9.0 — Lansat pe 2026-04-28 {#190--released-on-2026-04-28}

### Nou {#new}

- **Funcționalitatea `create_contact_form`** — creează un formular de contact folosind plugin-ul de formulare activ (Contact Form 7, WPForms, Fluent Forms sau Gravity Forms) și returnează un shortcode gata de încorporat în orice postare sau pagină.
- **Funcționalitatea `set_featured_image`** — atribuie o imagine în evidență unui post sau unei pagini, fie dintr-un ID de atașament existent din Media Library, fie dintr-un URL de la distanță; importă automat imaginea atunci când este furnizat un URL.
- **Funcționalitatea `batch_create_posts`** — creează multiple postări într-o singură apelare a funcționalității. Suportă aceleași parametri ca `create_post`, raportează succesul/eșecul pentru fiecare postare și are un mod opțional `stop_on_error`.
- **Parametrul `page_template`** — adăugat la `create_post` și `update_post`. Atribuie un fișier de șablon de pagină PHP (de ex., `page-full-width.php`) la momentul creării sau actualizării. Pentru a reveni la setările implicite ale temei, trimiteți o șir de caractere goală la `update_post`.
- **Funcționalități de captură de ecran din partea clientului** — `capture_screenshot`, `compare_screenshots` și `review_page_design`. Capturează ecran-uri întregi sau viewport-uri ale paginilor live printr-un browser headless de partea serverului, compară două ecran-uri și oferă o revizuire de design generată de AI, acoperind layout-ul, tipografia, culoarea și accesibilitatea.
- **Cinci agenți încorporați** — Content Writer, Site Builder, Design Studio, Plugin Manager și Support Assistant. Fiecare agent are un set dedicat de instrumente, un prompt de sistem personalizat și sugestii de pornire. Se pot comuta folosind noul **Agent Picker** din antetul chat-ului. Vezi [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags (Baniere de funcționalități)** — noua tabă **Settings → Feature Flags** cu comutatoare de control al accesului (restrictat administratorilor, restrictat administratorilor de rețea, acces pentru abonat) și opțiuni de branding (ascunde atribuirea footer-ului, nume de agent personalizat, ascunde agent picker, folosește iconița site-ului ca avatar de chat). Vezi [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Restaurarea ultimei sesiuni** — panoul de chat reîncarcă acum automat conversația cea mai recentă la încărcarea paginii și la deschiderea widget-ului, astfel încât contextul nu este pierdut niciodată în timpul navigării paginilor.
- **Link-uri de acțiune pentru plugin-uri** — link-uri rapide către Settings și către Abilities Registry apar acum pe ecranul WordPress **Plugins → Installed Plugins**, sub descrierea plugin-ului.

### Îmbunătățit {#improved}

- **Reprierea sursei imaginii** — agentul încearcă acum toate sursele de imagini gratuite configurate înainte de a recurge la o imagine generată de AI în cazul eșecului descărcării.
- **Panoul cu informații despre model** — vizibil în permanență în antetul chat-ului; nu mai este ascuns după primul mesaj.
- **Comportamentul auto-scroll** — auto-scroll-ul se oprește când utilizatorul derulează în sus pentru a citi; apare un buton plutitor **Scroll to bottom** și dispare automat când utilizatorul ajunge la ultimul mesaj.
- **UI Agent Picker** — reproiectat ca o suprapunere tip form-table cu iconițe pentru fiecare agent, făcându-l mai ușor de identificat și comutat de o privire.
- **Chunk-uri JS lazy-loaded** — bundle-ul JavaScript inițial al widget-ului de chat este acum împărțit în chunk-uri lazy-loaded, reducând dimensiunea inițială a bundle-ului cu 75–90%.
- **Reproiectarea widget-ului de chat** — iconița AI unificată înlocuiește avatarul personalizat anterior; este în armonie cu sistemul de agenți încorporați.
- **Linkificarea URL-urilor** — URL-urile care apar în mesajele sistemului și în bulele de mesaje de eroare sunt acum afișate ca link-uri clicabile.

### Corectat {#fixed}

- **Descoperirea funcționalităților (Abilities)** — descrierile, referințele la prompt-ul sistemului și alinierea namespace-urilor au fost corectate, astfel încât toate funcționalitățile să apară în lista de instrumente a agentului în mod fiabil.
- **Cache-ul furnizorilor (Providers)** — furnizorii sunt acum cache-uizați la nivel de site printr-un contor de versiune, prevenind problemele de furnizori învețiți pe rețelele multisite.
- **`ability_invalid_output`** — rezolvat în 12 handler-e de funcționalități; toate returnează răspunsuri JSON structurate corect.
- **Pipelinul `pending_client_tool_calls`** — conectat de la cap la cap, astfel încât apelurile de instrument din partea clientului să se completeze corect și să returneze rezultatele către model.
- **Drawer-ul istoricului** — modificările care nu pot fi revertate sunt excluse din lista de revertare; link-ul **View full history** funcționează acum corect.
- **Sistemul de modificări/revertare** — cinci bug-uri separate fixate și unificate sub noua interfață de administrare.
- **Toast pentru salvarea setărilor** — notificarea snackbar apare acum în mod fiabil după apăsarea pe **Save Settings**.
- **Meniul context pentru coș (Trash)** — adăugată opțiunea **Delete Permanently** pentru ca elementele să poată fi șterse definitiv fără a părăsi vizualizarea coșului.
- **Editare și retrimitere** — apăsarea pe iconița de editare intră acum în modul de editare doar pentru mesajul respectiv, nu pentru toate mesajele din thread.
- **Înălțimea layout-ului chat-ului** — panoul de chat își ajustează înălțimea când conținutul injectat de plugin (notificări admin, bannere) apare deasupra paginii, prevenind ca zona de introducere să fie împinsă în afara ecranului.

---

## 1.4.0 — Lansat pe 2026-04-09 {#140--released-on-2026-04-09}

### Nou {#new-1}

- **Comanda de benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — rulează suite-ul de benchmark Agent Capabilities v1 de pe linia de comandă pentru pipeline-uri CI și fluxuri de lucru de evaluare a modelelor. Suportă rulări per întrebare, suprascrieri de furnizori/modele și ieșiri JSON/CSV.
- **Suite-ul de benchmark Agent Capabilities v1** — un set structurat de prompt-uri complexe, multi-pas, care exersă suprafața completă a funcționalităților, cu scorare și raportare de token/durată.
- **Funcționalități pentru Tipuri de Postări Personalizate (Custom Post Type)** — `register_post_type`, `list_post_types`, `delete_post_type`. Înregistrările persistă în puncte de opțiuni (options table) între reporniri.
- **Funcționalități pentru Taxonomii Personalizate (Custom Taxonomy)** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Suportă taxonomii ierarhice și plate cu slugs de rewrite opționali.
- **Funcționalități pentru Sistemul de Design (Design System)** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Include cinci presetări curate: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Funcționalități pentru Stiluri Globale (Global Styles)** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Citește și scrie valorile theme.json prin API-ul Global Styles al WordPress.
- **Funcționalitatea de gestionare a meniului de navigare** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Suportă meniuri încorporate și atribuirea locațiilor tematice.
- **Funcționalitatea de gestionare a opțiunilor (Options Management)** — `get_option`, `set_option`, `delete_option`, `list_options`. Include o listă neagră de siguranță încorporată care protejează opțiunile critice ale WordPress de modificări.
- **Registrul Funcționalităților Instalabile (Installable Abilities Registry)** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Descoperă și activează pachete de funcționalități distribuite ca plugin-uri WordPress.
- **Orchestrarea Site Builder v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Planuri de construire a site-ului multi-fază cu descoperirea plugin-urilor, referințe de ieșiri de pași, urmărirea progresului și recuperarea autonomă a erorilor.
- **Întrebarea de benchmark pentru site-uri de restaurante** (`q-restaurant-website`) — test end-to-end care acoperă înregistrarea CPT, sistemul de design, navigarea și descoperirea plugin-urilor.
- **Plugin-uri de conector AI provider** adăugate în blueprint-urile WordPress Playground pentru o configurare locală mai rapidă.

### Îmbunătățit {#improved-1}

- README actualizat cu documentația și instrucțiunile de configurare pentru conectorii AI provider.

### Corectat {#fixed-1}

- 25 eșecuri de test PHPUnit pe branch-ul `main` rezolvate.
- Formatul URL-ului de lansare GitHub în `blueprint.json` corectat.
- Renumerarea ID-urilor de sarcină pentru a evita coliziunile cu ID-urile vechi.

---

## 1.3.x {#13x}

_Notele de lansare anterioare sunt menținute în repository-ul plugin-ului._
