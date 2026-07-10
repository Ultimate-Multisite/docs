---
title: Mintaanyag
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Újraírókönyv {#changelog}

## 1.9.0 — Kiadás dátuma: 2026-04-28 {#190--released-on-2026-04-28}

### Új {#new}

- **`create_contact_form` képesség** — létrehoz egy kapcsolatfelvételi űrlapot az aktív form plugin segítségével (Contact Form 7, WPForms, Fluent Forms vagy Gravity Forms), és visszaad egy shortcode-ot, amit bármilyen bejegyzésbe vagy oldalba beágyazhat.
- **`set_featured_image` képesség** — küldívásképes képet rendel egy bejegyzéshez vagy oldalhoz egy meglévő Média könyvtár melléklet ID-jéből vagy egy távoli URL-ről; ha URL-t adunk meg, automatikusan letölti a képet.
- **`batch_create_posts` képesség** — több bejegyzést is hoz létre egyetlen képesség hívásával. Támogatja ugyanazokat a paramétereket, mint a `create_post`, minden bejegyzésről külön sikert/sikertelenül csatkolást jelent, és opcionális `stop_on_error` (leállás hibánál) módja is van.
- **`page_template` paraméter** — hozzáadva a `create_post` és `update_post` funkciókhoz. Meghatároz egy PHP oldaltemat (pl. `page-full-width.php`) a létrehozás vagy frissítés idején. Ha az `update_post` funkcióhoz üres stringet küld, a téma alapértelmezett értékére tér vissza.
- **Kliensoldali képernyőfotó képességek** — `capture_screenshot`, `compare_screenshots` és `review_page_design`. A élő oldalak teljes vagy nézetablak képernyőfotóját egy szerveroldali headless böngésző segítségével készíti el, két képernyőfotót összehasonlít, és egy AI által generált design áttekintést ad, amely a felépítéstől, tipográfiától, színeitől és elérhetőségétől szól.
- **Öt beépített agent** — Tartalomíró, Oldalépítő, Design Stúdió, Plugin Kezelő és Támogatási Asszisztens. Minden agentnek saját eszközcsomagja, egy testre szabott rendszerpromptja és induló javaslatai vannak. Váltható az új **Agent Picker** (Agent kiválasztó) segítségével a chat fejezetében. Látogasson el a [Built-in Agents](../../user-guide/configuration/built-in-agents) oldalra.
- **Feature flags (Funkciók kapcsolói)** — új **Beállítások → Feature Flags** fül, ahol hozzáférés-kontroll kapcsolói (korlátozva adminok számára, korlátozva hálózatadminok számára, előfizetői hozzáférés, kikapcsolva nem-tagok számára) és márkanévre szabható opciók (elrejtett lábléc attribútáció, testre szabott agent neve, elrejtett agent picker, oldal ikon használata chat avatarként). Látogasson el a [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) oldalra.
- **Utolsó munkamenet visszaállítása** — a chat panel most automatikusan tölti be az utolsó conversations-t a lap betöltésekor és a widget megnyitásakor, így a kontextus soha nem veszíthető el az oldalak navigációja során.
- **Plugin akció linkek** — gyors linkek a Beállításokhoz és az Abilities Registry-hez most láthatók a WordPress **Plugins → Installed Plugins** képernyőjén, a plugin leírása alatt.

### Javított {#improved}

- **Képtelenség forrás újrapróbálása** — az agent most újrapróbálja az összes konfigurált ingyenes képforrást, mielőtt a letöltés sikertelenítésekor egy AI által generált képre térne vissza.
- **Model info panel (Model információ panel)** — mindig látható a chat fejezetében; nem rejtődik el az első üzenet után.
- **Auto-scroll viselkedés** — az auto-scroll felfüggesztődik, amikor a felhasználó felfelé scrollol olvasás közben; egy lebegő **Scroll to bottom** (Leleplezésig scroll) gomb jelenik meg, és automatikusan eltűnik, amikor a felhasználó az utolsó üzenethez ér.
- **Agent Picker UI (Agent kiválasztó felhasználói felülete)** — újra lett tervezve egy form-table overlay-ként, agent-specifikus ikonokkal, így könnyebb az agentek az első pillantásra azonosítása és váltása.
- **Lazy-loaded JS chunks (Lazit betöltött JS részek)** — a chat widget kezdeti JavaScript csomagja most lazit betöltött részekre bontva, csökkentve a kezdeti csomag méretét 75–90%-kal.
- **Chat widget újraarruházítása** — egységes AI ikon helyettesíti az előző testre szabott avatarot; konzisztens az beépített agent rendszerrel.
- **URL linkification (URL linkelés)** — az üzenetekben és hibaüzenetek buborékain megjelenő URL-ek most kattintható linkekként jelennek meg.

### Javított {#fixed}

- **Képesség felfedezhetősége** — javítottuk a leírásokat, a rendszerprompt hivatkozásokat és a namespace igazítását, így minden képesség megbízhatóan megjelenik az agent eszközlistájában.
- **Provider cache (Szolgáltató cache)** — a szolgáltatókat most a teljes oldal szinten egy verzió számláló segítségével cache-lik, megakadályozva a régi szolgáltató problémákat a multisite hálózatokon.
- **`ability_invalid_output`** — megoldva 12 képesség kezelőben; mindegyik megfelelően strukturált JSON válaszokat ad vissza.
- **`pending_client_tool_calls` pipeline (pipeline)** — end-to-end módon összekötve, így a kliensoldali eszközhívások megfelelően teljesülnek és eredményeket adnak vissza a modelnek.
- **History drawer (Történeti sáv)** — a visszaállíthatatlan változásokat kizárják a visszaállítási listából; a **View full history** (Teljes történet megtekintése) link most megfelelően működik.
- **Changes/revert system (Változások/visszaállítási rendszer)** — öt különálló hibát javítottunk, és az új admin felület alatt egységesítettük.
- **Save Settings toast (Beállítások mentése értesítő)** — a snackbar értesítés most megbízhatóan megjelenik a **Save Settings** (Beállítások mentése) gombra kattintás után.
- **Trash context menu (Kosár kontextus menüje)** — hozzáadtunk **Delete Permanently** (Örök törlés) opciót, így a tételeket hard-delete-elhetjük anélkül, hogy a kosár nézetét elhagyták volna.
- **Edit & resend (Szerkesztés és újra küldés)** — az edit ikonra kattintás most csak a kattintott üzenetre helyezi a szerkesztési módba, nem az egész trédingre.
- **Chat layout height (Chat felépítés magasság)** — a chat panel alkalmazkodik a magasságához, amikor a plugin által beágyazott tartalom (admin értesítések, bannerok) jelenik meg az oldal tetején, megakadályozva, hogy az input terület elkerüljön a képernyőről.

---

## 1.4.0 — Kiadás dátuma: 2026-04-09 {#140--released-on-2026-04-09}

### Új {#new-1}

- **WP-CLI benchmark command (`wp gratis-ai-agent benchmark`)** — futtatja az Agent Capabilities v1 benchmark suite-et a command line-on CI pipeline-ekhez és modellevaluáció munkafolyamatokhoz. Támogatja a kérdésenkénti futtatást, szolgáltató/modell átírását, és JSON/CSV kimenetét.
- **Agent Capabilities v1 benchmark suite (Agent képességek v1 benchmark suite)** — egy strukturált, komplex, több lépéses promptok összeállítása, amely teszteli az összes képességi felületet, pontszámítás és token/tartam jelentéssel.
- **Custom Post Type abilities (Testre szabott bejegyzéstípus képességek)** — `register_post_type`, `list_post_types`, `delete_post_type`. A regisztrációk megőrződnek a újraindítások során az options táblában.
- **Custom Taxonomy abilities (Testre szabott taksonómia képességek)** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Támogatja a hierarchikus és lapos taksonómiákat opcionális rewrite slug-okkal.
- **Design System abilities (Design rendszer képességek)** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Tartalmaz öt kurátált előállítást: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles abilities (Globális stílusok képességek)** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Olvassa és írja vissza a theme.json értékeket a WordPress Global Styles API-n keresztül.
- **Navigation Menu management ability (Navigációs menü kezelő képesség)** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Támogatja a nehézmenüket és a téma helyszín hozzárendelését.
- **Options Management ability (Opciók kezelő képesség)** — `get_option`, `set_option`, `delete_option`, `list_options`. Tartalmaz egy beépített biztonsági blokklistát, amely védi a kritikus WordPress opciókat a módosítástól.
- **Installable Abilities Registry (Telepíthető képességek regisztrátor)** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Fedezze fel és aktiválja az ablik képességi csomagokat, amelyek WordPress pluginként kerülnek elosztásra.
- **Site Builder Orchestration v2 (Oldalépítő orkisztráció v2)** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Több fázisú oldalépítési terveket plugin felfedezéssel, lépés kiadási hivatkozásokkal, haladás nyomon követésével és autonóm hiba-elhárítással.
- **Restaurant website benchmark question (`q-restaurant-website`)** — end-to-end teszt, amely magában foglalja a CPT regisztrációt, a design rendszert, a navigációt és a plugin felfedezését.
- **AI provider connector plugins** hozzáadva a WordPress Playground blueprints-ekhez, gyorsabb helyi fejlesztési beállítás érdekében.

### Javított {#improved-1}

- Frissítve az README fájl az AI provider connector dokumentációjával és beállítási utasításokkal.

### Javított {#fixed-1}

- 25 PHPUnit tesztelési hiba javítva a `main` branch-en.
- A GitHub releases URL formátuma javítva a `blueprint.json`-ban.
- Feladat ID újra számozása, hogy elkerülje az régi ID-kollíziókat.

---

## 1.3.x {#13x}

_Az előző kiadási jegyzetek a plugin repozitóriumban érhetők el._
