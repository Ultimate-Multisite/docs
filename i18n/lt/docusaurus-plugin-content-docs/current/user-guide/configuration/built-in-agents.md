---
title: Integruotieji agentai
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Integruoti Agentai

Gratis AI Agent v1.9.0 pateikiamas su penkiais integruotais agentais, kurių kiekvienas iš anksto sukonfigūruotas su tikslingu įrankių rinkiniu, pritaikytu sistemos raginimu ir pradiniais pasiūlymais, atitinkančiais įprastas tos srities užduotis. Perjungiant agentus keičiasi tai, ką asistentas gali daryti ir kaip jis atsako — be jokios konfigūracijos iš jūsų pusės. Superdav AI Agent v1.18.0 gali pridėti tvarkaraštį suvokiančius įrankius, priminimų įrašus, patvirtinimo vartus ir SMS pranešimus prie šių darbo eigų, kai susijusios integracijos yra sukonfigūruotos.

## Kas yra agentas? {#what-is-an-agent}

Kiekvienas agentas yra pavadintas konfigūracijos profilis, kuris sujungia:

- **Įrankiai** — gebėjimai, kuriuos agentui leidžiama iškviesti (pvz., turinio rašytojas turi prieigą prie įrašų kūrimo gebėjimų; dizaino studija turi prieigą prie CSS ir theme.json gebėjimų)
- **Sistemos raginimas** — instrukcijos, nustatančios agento toną, prioritetus ir apribojimus
- **Pasiūlymai** — iš anksto parašyti raginimai, rodomi pokalbio sąsajoje, kad padėtų greitai pradėti

## Prieiga prie agento pasirinkiklio {#accessing-the-agent-picker}

1. Atidarykite **Gratis AI Agent** skydelį WordPress administratoriaus šoninėje juostoje.
2. Spustelėkite **agento piktogramą** pokalbio antraštės viršutiniame kairiajame kampe (piktograma keičiasi, kad atspindėtų aktyvų agentą).
3. **Agentų pasirinkiklis** atsidaro kaip formos lentelės perdanga. Kiekvienas agentas pateikiamas su savo piktograma, pavadinimu ir vienos eilutės aprašymu.
4. Spustelėkite agento eilutę, kad jį aktyvuotumėte. Pokalbio antraštė atsinaujina iš karto.

Taip pat galite perjungti agentus pokalbio viduryje — naujojo agento sistemos raginimas įsigalioja nuo kitos žinutės.

## Penki integruoti agentai {#the-five-built-in-agents}

### Turinio rašytojas {#content-writer}

**Sritis:** Įrašų, puslapių ir kontaktinių formų kūrimas bei redagavimas.

**Prieinami įrankiai:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Įjungus Superdav AI Agent v1.18.0 integracijas, patvirtintoms darbo eigoms taip pat gali būti prieinami sukonfigūruotas kalendoriaus kontekstas, patvirtinimo vartai, priminimai ir SMS pranešimų įrankiai.

**Ką jis daro gerai:**
- Tinklaraščio įrašų rengimas ir publikavimas pagal trumpą aprašą ar planą
- Naujos svetainės nukreipimo puslapių paketų kūrimas
- Kontaktinių ir užklausų formų kūrimas
- Pagrindinių paveikslėlių nustatymas įrašuose iš URL arba paieškos
- Renginio tolesnių žinučių rengimas iš sukonfigūruoto Google Calendar konteksto, tada pristabdymas patvirtinimui prieš siunčiant pranešimus

**Pradiniai pasiūlymai:**
- *Parašyk 500 žodžių tinklaraščio įrašą apie WordPress multisite privalumus.*
- *Sukurk puslapius „Apie“, „Paslaugos“ ir „Kontaktai“ ir juos publikuok.*
- *Pridėk rezervacijos užklausos formą į Kontaktų puslapį.*
- *Parenk priminimą dalyviams apie rytojaus sukonfigūruotą kalendoriaus renginį ir palauk patvirtinimo prieš jį siųsdamas.*

---

### Svetainės kūrėjas {#site-builder}

**Sritis:** Svetainės kūrimas nuo pradžios iki pabaigos pagal vieną raginimą.

**Prieinami įrankiai:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Su Superdav AI Agent v1.18.0, sukonfigūruoti valdomų paslaugų, patvirtinimo, priminimų, kalendoriaus ir SMS įrankiai gali būti prieinami ten, kur administratoriai juos įjungia.

**Ką jis daro gerai:**
- Kelių etapų svetainės kūrimo plano generavimas aprašytam verslo tipui
- Kiekvieno etapo vykdymas autonomiškai — struktūra, turinys, navigacija, dizainas
- Atsigavimas po klaidų plano viduryje nereikalaujant rankinio įsikišimo
- Rekomenduojamų plugins diegimas kaip kūrimo dalis
- Kontaktinių formų kūrimas tiesiai iš pokalbio sąsajos (Superdav AI Agent v1.10.0+)
- Paleidimo priminimų arba dalyvių tolesnio susisiekimo koordinavimas be pasikartojančių pranešimų, kai įjungti patvirtinimo vartai ir priminimų įrašai

**Pradiniai pasiūlymai:**
- *Sukurk fotografijos portfolio svetainę su galerijos įrašo tipu, rezervacijos puslapiu ir kontaktine forma.*
- *Sukurk restorano svetainę su internetiniu meniu, darbo valandomis ir staliuko rezervacijos užklausos forma.*
- *Sukonfigūruok laisvai samdomo konsultanto svetainę su paslaugų puslapiais, portfolio skiltimi ir tinklaraščiu.*
- *Pridėk kontaktinę formą į Kontaktų puslapį naudodamas svetainės kūrėją.*
- *Kai svetainės paleidimo kontrolinis sąrašas bus patvirtintas, išsiųsk SMS priminimą sukonfigūruotam suinteresuotojo asmens kontaktui.*

---

### Dizaino studija {#design-studio}

**Sritis:** Vizualinis pritaikymas — spalvos, tipografija, CSS ir blokų šablonai.

**Prieinami įrankiai:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Ką jis daro gerai:**
- Pavadintų theme išankstinių nustatymų taikymas (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Globalios tipografijos ir spalvų palečių tikslinimas per theme.json
- Pasirinktinio CSS įterpimas konkretaus prekės ženklo pakeitimams
- Puslapio ekrano kopijos darymas ir jos peržiūra dėl dizaino problemų

**Pradiniai pasiūlymai:**
- *Pritaikyk warm-editorial išankstinį nustatymą, tada nustatyk pagrindinę spalvą į #2d6a4f.*
- *Padaryk pagrindinio puslapio ekrano kopiją ir pasakyk, ką patobulintum.*
- *Sukurk daugkartinio naudojimo hero bloko šabloną su viso pločio fono paveikslėliu ir centruota antrašte.*

### Plugin Manager {#plugin-manager}

**Sritis:** WordPress plugins atradimas, diegimas ir valdymas.

**Prieinami įrankiai:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Ką jis daro gerai:**
- Geriausio plugin rekomendavimas aprašytam naudojimo atvejui
- Gebėjimų paketų diegimas iš registro
- Prieinamo gebėjimų katalogo naršymas pagal kategoriją

**Pradiniai pasiūlymai:**
- *Koks geriausias plugin narystės katalogui?*
- *Įdiek WooCommerce gebėjimų paketą.*
- *Parodyk visus prieinamus e. prekybos gebėjimų paketus.*

---

### Pagalbos asistentas {#support-assistant}

**Sritis:** Atsakymai į klausimus apie svetainės turinį, nustatymus ir WordPress konfigūraciją.

**Prieinami įrankiai:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ką jis atlieka gerai:**
- Peržiūri dabartinius svetainės nustatymus ir parinktis
- Paaiškina, kokie įrašų tipai, taksonomijos ir meniu yra sukonfigūruoti svetainėje
- Atsako į klausimus „ką daro šis nustatymas?“ skaitydamas tiesiogines reikšmes
- Veikia kaip tik skaitymui skirtas diagnostikos sluoksnis prieš atliekant pakeitimus

**Pradiniai pasiūlymai:**
- *Kokie plugin ir nustatymai šiuo metu aktyvūs šioje svetainėje?*
- *Išvardyk visus pasirinktinius įrašų tipus, užregistruotus šioje svetainėje.*
- *Kokie navigacijos meniu yra ir kur jie priskirti?*

---

## Superdav automatizavimo integracijos {#superdav-automation-integrations}

Kai sukonfigūruotos Superdav AI Agent v1.18.0 integracijos, integruoti agentai gali dalyvauti saugesnėse, tvarkaraštį įvertinančiose automatizavimo darbo eigose:

- **Google Calendar skaitymo įrankiai** leidžia agentams peržiūrėti sukonfigūruotus kalendorius ir įvykius prieš rengiant tolesnius darbus.
- **Kontaktų ir dalyvių susiejimas** padeda susieti įvykio dalyvius su WordPress naudotojais arba žinomais kontaktais.
- **Žmogaus patvirtinimo vartai** sustabdo jautrius veiksmus, kol įgaliotas naudotojas juos peržiūri ir patvirtina.
- **Priminimų įrašai** neleidžia dubliuoti pranešimų, kai suplanuotos užduotys bandomos vykdyti iš naujo arba kartojamos.
- **TextBee SMS pranešimai** siunčia sukonfigūruotas tekstines žinutes tik tada, kai įjungti SMS prisijungimo duomenys ir darbo eigos leidimai.

Rekomenduojama darbo eiga: paprašykite agento parengti pranešimą arba veiksmą, peržiūrėkite patvirtinimo raginimą, tada leiskite patvirtintam veiksmui tęstis. Pasikartojantiems priminimams palikite įjungtą priminimų dubliavimo šalinimą, kad tas pats įvykis arba kontaktas nebūtų informuojamas pakartotinai.

---

## Agentų pritaikymas {#customising-agents}

Kiekvieną integruotą agentą galima išplėsti arba pakeisti naudojant `gratis_ai_agent_agents` filtrą.

### Pasirinktinio sistemos raginimo pridėjimas prie esamo agento {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Naujo agento registravimas {#registering-a-new-agent}

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

Naujasis agentas pasirodo agentų parinkiklyje iškart po to, kai paleidžiamas filtras.

### Integruoto agento pašalinimas {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
