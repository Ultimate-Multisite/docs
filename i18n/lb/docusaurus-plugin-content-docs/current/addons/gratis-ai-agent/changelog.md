---
title: Changelog
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Ännerungsprotokoll {#changelog}

## 1.9.0 — Verëffentlecht den 2026-04-28 {#190--released-on-2026-04-28}

### Nei {#new}

- **`create_contact_form` ability** — erstellt e Kontaktformular mam aktive Formular-plugin (Contact Form 7, WPForms, Fluent Forms oder Gravity Forms) a gëtt e shortcode zréck, dee prett ass fir an all Bäitrag oder Säit agebett ze ginn.
- **`set_featured_image` ability** — weist engem Bäitrag oder enger Säit e Featured Image aus enger existéierender Media Library-Attachment-ID oder enger Remote-URL zou; importéiert d'Bild automatesch, wann eng URL uginn ass.
- **`batch_create_posts` ability** — erstellt méi Bäiträg an engem eenzegen ability-Opruff. Ënnerstëtzt déiselwecht Parameteren ewéi `create_post`, mellt Erfolleg/Feeler pro Bäitrag an huet en optionale `stop_on_error`-Modus.
- **`page_template` parameter** — bäigefüügt bei `create_post` an `update_post`. Weist beim Erstellen oder Aktualiséieren eng PHP-Säiteschabloun-Datei zou (z. B. `page-full-width.php`). Gëff eng eidel Zeechekette un `update_post` weider, fir op de theme-Standard zréckzesetzen.
- **Client-säiteg Screenshot-abilities** — `capture_screenshot`, `compare_screenshots` an `review_page_design`. Maacht vollstänneg oder Viewport-Screenshots vu Live-Säiten iwwer e server-säitegen headless Browser, vergläicht zwee Screenshots a kritt eng AI-generéiert Designbewäertung iwwer Layout, Typografie, Faarf an Accessibilitéit.
- **Fënnef agebauten Agenten** — Content Writer, Site Builder, Design Studio, Plugin Manager an Support Assistant. All Agent huet en dedizéierte Set un Tools, e personaliséierte System-Prompt an Ufangsvirschléi. Ëmschaltbar iwwer den neien **Agent Picker** am Chat-Header. Kuckt [Agebauten Agenten](../../user-guide/configuration/built-in-agents).
- **Feature flags** — neien **Settings → Feature Flags**-Tab mat Zougangskontroll-Umschalteren (op Administrateure beschränken, op Netzwierk-Administrateure beschränken, Abonnent-Zougang, fir Net-Memberen deaktivéieren) a Branding-Optiounen (Footer-Attributioun verstoppen, personaliséierten Agent-Numm, Agent Picker verstoppen, Site-Ikon als Chat-Avatar benotzen). Kuckt [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Lescht Sessioun restauréieren** — de Chat-Panel lued elo automatesch dat rezentst Gespréich beim Luede vun der Säit an beim Opmaache vum Widget nei, sou datt de Kontext bei Säitennavigatiounen ni verluer geet.
- **Plugin-Aktiounslinken** — Schnelllinken op Settings an den Abilities Registry erschéngen elo um WordPress **Plugins → Installed Plugins**-Bildschierm ënner der Plugin-Beschreiwung.

### Verbessert {#improved}

- **Bildquell-Widderhuelung** — den Agent probéiert elo all konfiguréiert gratis Bildquellen nach eng Kéier, ier en no engem Download-Feeler op en AI-generéiert Bild zeréckfält.
- **Modellinfo-Panel** — ëmmer siichtbar am Chat-Header; net méi no der éischter Noriicht verstoppt.
- **Auto-Scroll-Verhalen** — Auto-Scroll pauséiert, wann de Benotzer erop scrollt fir ze liesen; e schwebende **Scroll to bottom**-Knäppche erschéngt a verschwënnt automatesch, wann de Benotzer déi lescht Noriicht erreecht.
- **Agent Picker UI** — nei designt als Form-Table-Overlay mat Ikone pro Agent, wat et méi einfach mécht, Agenten op ee Bléck z'erkennen an ze wiesselen.
- **Lazy-loaded JS chunks** — den initiale JavaScript-Bundle vum Chat-Widget ass elo a lazy-loaded Chunks opgespléckt, wat déi initial Bundle-Gréissten ëm 75–90% reduzéiert.
- **Chat-Widget-Neidesign** — vereenegt AI-Ikon ersetzt de fréiere personaliséierten Avatar; konsequent mam agebauten Agent-System.
- **URL-Linkifikatioun** — URLen, déi a Systemnoriichten a Feeler-Noriichteblosen optrieden, ginn elo als uklickbar Linken duergestallt.

### Behuewen {#fixed}

- **Ability-Entdeckbarkeet** — Beschreiwungen, System-Prompt-Referenzen an Namespace-Ofstëmmung korrigéiert, sou datt all abilities zouverlässeg an der Tool-Lëscht vum Agent erschéngen.
- **Providers-Cache** — Providers ginn elo site-wäit iwwer e Versiounszieler gecacht, wat Problemer mat veraalte Providers op Multisite-Netzwierker verhënnert.
- **`ability_invalid_output`** — iwwer 12 ability-Handler geléist; all ginn uerdentlech strukturéiert JSON-Äntwerten zréck.
- **`pending_client_tool_calls` pipeline** — vun Enn bis Enn verbonnen, sou datt client-säiteg Tool-Opriff korrekt ofgeschloss ginn an Resultater un de Modell zeréckginn.
- **Verlaf-Drawer** — net zrécksetzbar Ännerunge ginn aus der Zrécksetz-Lëscht ausgeschloss; de **View full history**-Link funktionéiert elo richteg.
- **Ännerungen/Zrécksetz-System** — fënnef separat Feeler behuewen an ënner der neier Admin-Interface vereenegt.
- **Save Settings-Toast** — Snackbar-Notifikatioun erschéngt elo zouverlässeg nom Klicken op **Save Settings**.
- **Trash-Kontextmenü** — **Delete Permanently**-Optioun bäigefüügt, sou datt Elementer definitiv geläscht kënne ginn, ouni d'Trash-Usiicht ze verloossen.
- **Änneren & nei schécken** — beim Klicken op d'Änneren-Ikon gëtt elo nëmmen déi ugeklickt Noriicht an den Ännerungsmodus gesat, net all Noriichten am Thread.
- **Chat-Layout-Héicht** — de Chat-Panel passt seng Héicht un, wann duerch Plugin agefügten Inhalt (Admin-Hinweiser, Banneren) iwwer der Säit erschéngt, sou datt den Input-Beräich net vum Bildschierm gedréckt gëtt.

---

## 1.4.0 — Verëffentlecht den 2026-04-09 {#140--released-on-2026-04-09}

### Nei {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — féiert d'Agent Capabilities v1 Benchmark-Suite vun der Kommandozeil fir CI-Pipelines a Modell-Evaluatiouns-Workflows aus. Ënnerstëtzt Laf pro Fro, Provider-/Modell-Iwwerschreiwungen an JSON/CSV-Ausgab.
- **Agent Capabilities v1 Benchmark-Suite** — e strukturéierte Set vu komplexen, méistufege Prompten, déi déi ganz Fäegkeetsfläch ausüben, mat Scoring an Token-/Dauer-Berichterstattung.
- **Custom Post Type-Fäegkeeten** — `register_post_type`, `list_post_types`, `delete_post_type`. Registréierungen bleiwen iwwer Neustarten iwwer d'Optiounstabell bestoen.
- **Custom Taxonomy-Fäegkeeten** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Ënnerstëtzt hierarchesch a flaach Taxonomië mat optionalen Rewrite-Slugs.
- **Design System-Fäegkeeten** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Enthält fënnef kuratéiert Presets: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles-Fäegkeeten** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Liest a schreift theme.json-Wäerter iwwer d'WordPress Global Styles API.
- **Navigation Menu-Verwaltungsfäegkeet** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Ënnerstëtzt verschachtelt Menüen an Zouuerdnung vu Theme-Plazen.
- **Options Management-Fäegkeet** — `get_option`, `set_option`, `delete_option`, `list_options`. Enthält eng agebaute Sécherheets-Blocklëscht, déi kritesch WordPress-Optioune viru Verännerung schützt.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Entdeckt an aktivéiert Fäegkeetspäck, déi als WordPress-Plugins verdeelt ginn.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Méiphasëg Site-Baupläng mat Plugin-Entdeckung, Schrëtt-Ausgabreferenzen, Fortschrëttsverfollegung an autonomer Feeler-Erhuelung.
- **Restaurant-Website-Benchmark-Fro** (`q-restaurant-website`) — End-to-End-Test, deen CPT-Registréierung, Designsystem, Navigatioun a Plugin-Entdeckung ofdeckt.
- **AI-Provider-Connector-Plugins** bäigefüügt zu WordPress Playground Blueprints fir méi séier lokal Entwécklungsariichtung.

### Verbessert {#improved-1}

- README aktualiséiert mat AI-Provider-Connector-Dokumentatioun an Ariichtungsinstruktiounen.

### Fixéiert {#fixed-1}

- 25 PHPUnit-Testfeeler um `main`-Branch geléist.
- GitHub-Releases-URL-Format an `blueprint.json` korrigéiert.
- Task-ID-Neinummeréierung fir Kollisioune mat alen IDen ze vermeiden.

---

## 1.3.x {#13x}

_Vireg Release Notes ginn am Plugin-Repository erhale._
