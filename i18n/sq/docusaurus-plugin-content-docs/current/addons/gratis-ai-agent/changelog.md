---
title: Regjistri i ndryshimeve
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Ditari i ndryshimeve

## 1.9.0 — Publikuar më 2026-04-28

### E re

- **Aftësia `create_contact_form`** — krijon një formular kontakti duke përdorur plugin-in aktiv të formularëve (Contact Form 7, WPForms, Fluent Forms, ose Gravity Forms) dhe kthen një shortcode gati për t’u përfshirë në çdo postim ose faqe.
- **Aftësia `set_featured_image`** — cakton një imazh të veçuar për një postim ose faqe nga një ID ekzistuese bashkëngjitjeje në Media Library ose nga një URL e largët; e importon automatikisht imazhin kur jepet një URL.
- **Aftësia `batch_create_posts`** — krijon shumë postime në një thirrje të vetme aftësie. Mbështet të njëjtët parametra si `create_post`, raporton suksesin/dështimin për çdo postim dhe ka një mënyrë opsionale `stop_on_error`.
- **Parametri `page_template`** — u shtua te `create_post` dhe `update_post`. Cakton një skedar PHP shablloni faqeje (p.sh. `page-full-width.php`) gjatë krijimit ose përditësimit. Kaloni një varg bosh te `update_post` për t’u kthyer te parazgjedhja e theme.
- **Aftësi screenshot-i nga ana e klientit** — `capture_screenshot`, `compare_screenshots`, dhe `review_page_design`. Kapni screenshot-e të plota ose të viewport-it të faqeve live përmes një shfletuesi headless nga ana e serverit, krahasoni dy screenshot-e dhe merrni një rishikim dizajni të gjeneruar nga AI që mbulon paraqitjen, tipografinë, ngjyrën dhe aksesueshmërinë.
- **Pesë agjentë të integruar** — Shkrues Përmbajtjeje, Ndërtues Site-i, Studio Dizajni, Menaxher Plugin-esh dhe Asistent Mbështetjeje. Çdo agjent ka një grup të dedikuar mjetesh, një system prompt të përshtatur dhe sugjerime fillestare. Mund të ndërrohen përmes **Zgjedhësit të Agjentit** të ri në krye të chat-it. Shihni [Agjentët e integruar](../../user-guide/configuration/built-in-agents).
- **Flamuj funksionaliteti** — skedë e re **Settings → Feature Flags** me çelësa kontrolli aksesi (kufizo për administratorë, kufizo për administratorë rrjeti, akses për abonentë, çaktivizo për jo-anëtarë) dhe opsione markimi (fshih atributimin në footer, emër i personalizuar agjenti, fshih zgjedhësin e agjentit, përdor ikonën e site-it si avatar chat-i). Shihni [Cilësimet e Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Rikthe sesionin e fundit** — paneli i chat-it tani ringarkon automatikisht bisedën më të fundit gjatë ngarkimit të faqes dhe kur hapet widget-i, kështu që konteksti nuk humbet kurrë gjatë navigimit mes faqeve.
- **Lidhje veprimesh të plugin-it** — lidhje të shpejta për Settings dhe Regjistrin e Aftësive tani shfaqen në ekranin WordPress **Plugins → Installed Plugins** poshtë përshkrimit të plugin-it.

### Përmirësuar

- **Riprovim i burimit të imazhit** — agjenti tani riprovon të gjitha burimet falas të konfiguruara të imazheve përpara se të kalojë te një imazh i gjeneruar nga AI në rast dështimi shkarkimi.
- **Paneli i informacionit të modelit** — gjithmonë i dukshëm në krye të chat-it; nuk fshihet më pas mesazhit të parë.
- **Sjellja e auto-scroll** — auto-scroll ndalet kur përdoruesi lëviz lart për të lexuar; shfaqet një buton lundrues **Lëviz në fund** dhe mbyllet automatikisht kur përdoruesi arrin te mesazhi më i fundit.
- **UI i Zgjedhësit të Agjentit** — ridizajnuar si një overlay me form-table dhe ikona për çdo agjent, duke e bërë më të lehtë identifikimin dhe ndërrimin e agjentëve me një shikim.
- **Pjesë JS të ngarkuara me vonesë** — bundle-i fillestar JavaScript i widget-it të chat-it tani ndahet në pjesë të ngarkuara me vonesë, duke ulur madhësitë fillestare të bundle-it me 75–90%.
- **Ridizajn i widget-it të chat-it** — ikona e unifikuar AI zëvendëson avatarin e mëparshëm të personalizuar; në përputhje me sistemin e agjentëve të integruar.
- **Kthimi i URL-ve në lidhje** — URL-të që shfaqen në mesazhe sistemi dhe flluska mesazhesh gabimi tani paraqiten si lidhje të klikueshme.

### Rregulluar

- **Zbulueshmëria e aftësive** — u korrigjuan përshkrimet, referencat e system prompt dhe përputhja e namespace-ve në mënyrë që të gjitha aftësitë të shfaqen në mënyrë të besueshme në listën e mjeteve të agjentit.
- **Cache i ofruesve** — ofruesit tani ruhen në cache në nivel site-i përmes një numëruesi versioni, duke parandaluar probleme me ofrues të vjetruar në rrjete multisite.
- **`ability_invalid_output`** — u zgjidh në 12 handler-a aftësish; të gjithë kthejnë përgjigje JSON të strukturuara siç duhet.
- **Pipeline `pending_client_tool_calls`** — u lidh nga fillimi në fund në mënyrë që thirrjet e mjeteve nga ana e klientit të përfundojnë saktë dhe t’i kthejnë rezultate modelit.
- **Sirtari i historikut** — ndryshimet që nuk mund të kthehen pas përjashtohen nga lista e rikthimit; lidhja **Shiko historikun e plotë** tani funksionon saktë.
- **Sistemi i ndryshimeve/rikthimit** — pesë gabime të veçanta u rregulluan dhe u unifikuan nën ndërfaqen e re të administrimit.
- **Njoftimi toast i Save Settings** — njoftimi snackbar tani shfaqet në mënyrë të besueshme pas klikimit të **Save Settings**.
- **Menyja kontekstuale e koshit** — u shtua opsioni **Fshi Përgjithmonë** që artikujt të mund të fshihen plotësisht pa lënë pamjen e koshit.
- **Redakto dhe ridërgo** — klikimi i ikonës së redaktimit tani hyn në mënyrën e redaktimit vetëm për mesazhin e klikuar, jo për të gjitha mesazhet në thread.
- **Lartësia e paraqitjes së chat-it** — paneli i chat-it përshtat lartësinë e tij kur përmbajtje e injektuar nga plugin-i (njoftime administratori, banner-a) shfaqet mbi faqen, duke parandaluar shtyrjen e zonës së hyrjes jashtë ekranit.

---

## 1.4.0 — Publikuar më 2026-04-09

### E re

- **Komandë benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — ekzekuton paketën benchmark Agent Capabilities v1 nga command line për CI pipelines dhe rrjedhat e punës së vlerësimit të modeleve. Mbështet ekzekutime për pyetje, mbishkrime provider/model dhe dalje JSON/CSV.
- **Paketë benchmark Agent Capabilities v1** — një grup i strukturuar prompts kompleksë, me shumë hapa, që ushtrojnë të gjithë sipërfaqen e aftësive, me vlerësim dhe raportim token/kohëzgjatje.
- **Aftësi Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Regjistrimet ruhen gjatë rinisjeve përmes tabelës së opsioneve.
- **Aftësi Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Mbështet taksonomi hierarkike dhe të sheshta me rewrite slugs opsionale.
- **Aftësi Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Përfshin pesë presets të kuruara: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Aftësi Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Lexon dhe shkruan vlera theme.json përmes WordPress Global Styles API.
- **Aftësi menaxhimi Navigation Menu** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Mbështet menu të ndërfutura dhe caktim të vendndodhjes së theme.
- **Aftësi Options Management** — `get_option`, `set_option`, `delete_option`, `list_options`. Përfshin një listë bllokimi sigurie të integruar që mbron opsionet kritike të WordPress nga modifikimi.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Zbuloni dhe aktivizoni paketa aftësish të shpërndara si WordPress plugins.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plane ndërtimi site me shumë faza, me zbulim plugin, referenca daljeje hapash, gjurmim progresi dhe rikuperim autonom gabimesh.
- **Pyetje benchmark për faqe interneti restoranti** (`q-restaurant-website`) — test nga fillimi në fund që mbulon regjistrimin CPT, design system, navigimin dhe zbulimin plugin.
- **Plugins lidhës për AI provider** të shtuar në WordPress Playground blueprints për konfigurim më të shpejtë të zhvillimit lokal.

### Përmirësuar

- README u përditësua me dokumentacionin për lidhësin AI provider dhe udhëzimet e konfigurimit.

### Rregulluar

- 25 dështime testesh PHPUnit në degën `main` u zgjidhën.
- Formati i URL-së së GitHub releases në `blueprint.json` u korrigjua.
- Rinumërim i Task ID për të shmangur përplasjet me ID-të e vjetra.

---

## 1.3.x

_Shënimet e mëparshme të publikimit mirëmbahen në repository-n e plugin._
