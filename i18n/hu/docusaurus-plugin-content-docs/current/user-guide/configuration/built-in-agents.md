---
title: Beépített ügynökök
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Beépített agentek {#built-in-agents}

A Gratis AI Agent v1.9.0 öt beépített agenttel érkezik, mindegyik előre konfigurálva egy célzott eszközkészlettel, testreszabott system prompttal és az adott terület gyakori feladataihoz illeszkedő kezdő javaslatokkal. Az agentek közötti váltás megváltoztatja, mire képes az asszisztens és hogyan válaszol — anélkül, hogy részedről bármilyen konfigurációra lenne szükség. A Superdav AI Agent v1.18.0 ütemezést figyelembe vevő eszközöket, emlékeztetőrekordokat, jóváhagyási kapukat és SMS-értesítéseket adhat ezekhez a munkafolyamatokhoz, ha a kapcsolódó integrációk konfigurálva vannak.

## Mi az az agent? {#what-is-an-agent}

Minden agent egy elnevezett konfigurációs profil, amely a következőket kombinálja:

- **Eszközök** — azok a képességek, amelyeket az agent meghívhat (pl. egy Content Writer hozzáfér a bejegyzés-létrehozási képességekhez; egy Design Studio hozzáfér a CSS- és theme.json-képességekhez)
- **System prompt** — utasítások, amelyek meghatározzák az agent hangnemét, prioritásait és korlátait
- **Javaslatok** — a csevegőfelületen megjelenő előre megírt promptok, amelyek segítenek gyorsan elindulni

## Az Agent Picker elérése {#accessing-the-agent-picker}

1. Nyisd meg a **Gratis AI Agent** panelt a WordPress admin oldalsávjában.
2. Kattints a **agent ikonra** a csevegés fejlécének bal felső sarkában (az ikon az aktív agentet tükrözve változik).
3. Megnyílik az **Agent Picker** űrlaptáblázat-fedvényként. Minden agent az ikonjával, nevével és egysoros leírásával szerepel.
4. Kattints egy agent sorára az aktiválásához. A csevegés fejléce azonnal frissül.

Beszélgetés közben is válthatsz agentet — az új agent system promptja a következő üzenettől lép érvénybe.

## Az öt beépített agent {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Fókusz:** Bejegyzések, oldalak és kapcsolatfelvételi űrlapok létrehozása és szerkesztése.

**Elérhető eszközök:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Ha a Superdav AI Agent v1.18.0 integrációk engedélyezve vannak, a konfigurált naptárkörnyezet, jóváhagyási kapuk, emlékeztetők és SMS-értesítési eszközök is elérhetők lehetnek a jóváhagyott munkafolyamatok számára.

**Amiben jó:**
- Blogbejegyzések vázlatolása és közzététele brief vagy vázlat alapján
- Landing oldalak kötegeinek létrehozása egy új webhelyhez
- Kapcsolatfelvételi és érdeklődési űrlapok építése
- Kiemelt képek beállítása bejegyzésekhez URL-ből vagy keresésből
- Esemény utáni követő üzenetek megfogalmazása konfigurált Google Calendar-környezet alapján, majd szüneteltetés jóváhagyásra az értesítések elküldése előtt

**Kezdő javaslatok:**
- *Írj egy 500 szavas blogbejegyzést a WordPress multisite előnyeiről.*
- *Hozz létre egy Rólunk, Szolgáltatások és Kapcsolat oldalt, és tedd közzé őket.*
- *Adj hozzá egy foglalási érdeklődési űrlapot a Kapcsolat oldalhoz.*
- *Készíts emlékeztetővázlatot a holnapi konfigurált naptáresemény résztvevőinek, és várj jóváhagyásra, mielőtt elküldenéd.*

---

### Site Builder {#site-builder}

**Fókusz:** Teljes körű webhelylétrehozás egyetlen promptból.

**Elérhető eszközök:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. A Superdav AI Agent v1.18.0-val konfigurált menedzselt szolgáltatási, jóváhagyási, emlékeztető-, naptár- és SMS-eszközök is elérhetők lehetnek ott, ahol az adminisztrátorok engedélyezik őket.

**Amiben jó:**
- Többfázisú webhelyépítési terv generálása egy leírt vállalkozástípushoz
- Az egyes fázisok önálló végrehajtása — struktúra, tartalom, navigáció, dizájn
- Hibák helyreállítása a terv közepén kézi beavatkozás igénye nélkül
- Ajánlott pluginek telepítése az építés részeként
- Kapcsolatfelvételi űrlapok létrehozása közvetlenül a csevegőfelületről (Superdav AI Agent v1.10.0+)
- Indítási emlékeztetők vagy résztvevői utánkövetés koordinálása duplikált értesítések nélkül, ha a jóváhagyási kapuk és emlékeztetőrekordok engedélyezve vannak

**Kezdő javaslatok:**
- *Építs egy fotós portfólió webhelyet galéria bejegyzéstípussal, foglalási oldallal és kapcsolatfelvételi űrlappal.*
- *Hozz létre egy éttermi webhelyet online étlappal, nyitvatartással és asztalfoglalási érdeklődési űrlappal.*
- *Állíts be egy szabadúszó tanácsadói webhelyet szolgáltatási oldalakkal, portfóliószekcióval és bloggal.*
- *Adj hozzá kapcsolatfelvételi űrlapot a Kapcsolat oldalhoz a site builder használatával.*
- *Miután a webhelyindítási ellenőrzőlista jóváhagyást kapott, küldj SMS-emlékeztetőt a konfigurált érintetti kapcsolattartónak.*

---

### Design Studio {#design-studio}

**Fókusz:** Vizuális testreszabás — színek, tipográfia, CSS és blokkminták.

**Elérhető eszközök:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Amiben jó:**
- Elnevezett theme presetek alkalmazása (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Globális tipográfia és színpaletták finomhangolása theme.json-on keresztül
- Egyedi CSS beillesztése márkaspecifikus felülírásokhoz
- Képernyőkép készítése egy oldalról és annak áttekintése dizájnproblémák szempontjából

**Kezdő javaslatok:**
- *Alkalmazd a warm-editorial presetet, majd állítsd az elsődleges színt #2d6a4f értékre.*
- *Készíts képernyőképet a kezdőlapról, és mondd el, min javítanál.*
- *Hozz létre egy újrafelhasználható hero blokkmintát teljes szélességű háttérképpel és középre igazított címsorral.*

### Plugin Manager {#plugin-manager}

**Fókusz:** WordPress pluginek felfedezése, telepítése és kezelése.

**Elérhető eszközök:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Amiben jó:**
- A legjobb plugin ajánlása egy leírt felhasználási esetre
- Képességcsomagok telepítése a registryből
- Az elérhető képességkatalógus böngészése kategória szerint

**Kezdő javaslatok:**
- *Melyik a legjobb plugin egy tagsági címtárhoz?*
- *Telepítsd a WooCommerce abilities csomagot.*
- *Mutasd meg az összes elérhető ecommerce ability csomagot.*

---

### Support Assistant {#support-assistant}

**Fókusz:** Kérdések megválaszolása a webhely tartalmáról, beállításairól és WordPress konfigurációjáról.

**Elérhető eszközök:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Amiben jó:**
- Az aktuális webhelybeállítások és opciók lekérdezése
- Annak elmagyarázása, hogy milyen bejegyzéstípusok, taxonómiák és menük vannak konfigurálva a webhelyen
- „Mit csinál ez a beállítás?” jellegű kérdések megválaszolása élő értékek beolvasásával
- Csak olvasható diagnosztikai rétegként szolgál a módosítások elvégzése előtt

**Kezdő javaslatok:**
- *Milyen pluginok és beállítások aktívak jelenleg ezen a webhelyen?*
- *Sorold fel az ezen a webhelyen regisztrált összes egyéni bejegyzéstípust.*
- *Milyen navigációs menük léteznek, és hová vannak hozzárendelve?*

---

## Superdav automatizálási integrációk {#superdav-automation-integrations}

Amikor a Superdav AI Agent v1.18.0 integrációi konfigurálva vannak, a beépített ügynökök biztonságosabb, ütemezést figyelembe vevő automatizálási munkafolyamatokban vehetnek részt:

- **Google Calendar olvasási eszközök** lehetővé teszik az ügynökök számára, hogy megvizsgálják a konfigurált naptárakat és eseményeket, mielőtt utómunkát vázolnának fel.
- **Kapcsolat- és résztvevő-leképezés** segít az esemény résztvevőit WordPress felhasználókhoz vagy ismert kapcsolatokhoz párosítani.
- **Emberi jóváhagyási kapuk** szüneteltetik az érzékeny műveleteket, amíg egy jogosult felhasználó át nem tekinti és meg nem erősíti őket.
- **Emlékeztetőrekordok** megakadályozzák az ismétlődő értesítéseket, amikor az ütemezett feladatok újrapróbálkoznak vagy ismétlődnek.
- **TextBee SMS értesítések** csak akkor küldenek konfigurált szöveges üzeneteket, ha az SMS hitelesítő adatok és a munkafolyamat-engedélyek engedélyezve vannak.

Ajánlott munkafolyamat: kérd meg az ügynököt, hogy készítse elő az üzenetet vagy műveletet, tekintsd át a jóváhagyási promptot, majd engedélyezd a jóváhagyott művelet folytatását. Ismétlődő emlékeztetők esetén tartsd engedélyezve az emlékeztetők duplikációszűrését, hogy ugyanaz az esemény vagy kapcsolat ne kapjon ismételten értesítést.

---

## Ügynökök testreszabása {#customising-agents}

Minden beépített ügynök kibővíthető vagy lecserélhető a `gratis_ai_agent_agents` filteren keresztül.

### Egyéni rendszerprompt hozzáadása egy meglévő ügynökhöz {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Új ügynök regisztrálása {#registering-a-new-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Az új ügynök azonnal megjelenik az ügynökválasztóban, miután a filter lefut.

### Beépített ügynök eltávolítása {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
