---
title: Sisäänraamatud agentid
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Sisustusagentid

Gratis AI Agent v1.9.0 on lahendatud viitse sisustusagentidega, mis on enne valmis konfigurieritud erinevate tööriistega, kohandatud süsteemiproम्प्टidega ja algusettevõttega, mis vastavad levinud tegevustele selle alal. Agentide vahel liikumine muuttaa seda, mida assistent saab teha ja kuidas ta vastab – ilma igas juhul konfiguraatiilist seadistamiseta teie poolt.

## Mis on agent?

Iga agent on nimetatud konfiguratsiooniprofiil, mis ühendab:

- **Tööriistad (Tools)** — võimalused, mida agent saavad kasutada (nt. Sisustuskirjendaja saab kasutada sisu loomise ja muutmise võimalusi; Disainestudio saab kasutada CSS- ja theme.json võimalusi).
- **Süsteemiproम्प्ट (System prompt)** — juhised, mis määratavad agenti toonide, prioriteedid ja piiranguid.
- **Suositused (Suggestions)** — ettevaatult kirjutatud prompts, mida näidet jutukasti, et kiiresti alguses töötada.

## Agentipilve kasutamine

1. Avage **Gratis AI Agent** panel WordPressi administraatori sivubari kurssis.
2. Klõpsake jutukasti ülaosas oleva **agentikoonile** (ikon muutub aktiivse agenti järgi).
3. **Agentipilv (Agent Picker)** avab kui forma-taabeli ületus. Iga agent on nime, ikooniga ja ühe linja kirjeldusega listitud.
4. Klõpsake agenti rida aktiveerimiseks. Jutukasti uueneb kohe.

Võite ka vahetada agentide tegevuse ajal – uue agenti süsteemiproम्प्ट jõustub jõuduks järgmise sõnumiga.

## Viis sisustusagentit

### Sisustuskirjendaja (Content Writer)

**Fookus:** Postide, lehted ja kontaktformuleid loomine ja redigeerimine.

**Käivitavate tööriistade nimetused:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Mis on tehe hästi:**
- Blogipostide luomine ja julgustamine lühikese või skeemi põhjal
- Uue veebilehule jaoks lehtekujutuste (landing pages) pakkide loomine
- Kontakt- ja küsimuse vormide lahendamine
- Postidele esialikute pildide asendamine URL-st või otsinguga

**Algumise soovitused:**
- *Loo 500 sõnaid blogipostist WordPress multisite'i eelisteid kohta.*
- *Loo "Me hind", "Teenused" ja "Kontakt" lehed ja julgusta need.*
- *Lisa Kontaktlehele bronaamise küsimuse vorm.*

---

### Veebilehule lahendaja (Site Builder)

**Fookus:** Ühele käsku põhjal end-to-end veebilehule loomine.

**Käivitavate tööriistad:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Mis on selles hästi:**
- Kirjutab mitme faasi veebilehule loomise plaani kirjeldatud liiklusruumi tüüpi jaoks.
- Järgmine faasi autsamata: struktuur, sisu, navigatsioon, disain.
- Mitte käsitsi interweni ilma vältida voolu ajal vältida vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal vältida voolu ajal v

**Käivitettavad tööriistad:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Mis on selle hea:**
- Nimetatud teema presetide kasutamine (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Globalsete tipograafia ja värvpaletide finetüünimine theme.json abil
- Brändile spetsiifilse ületamisel kasutamiseks oma CSS-i sissejuhatamine
- Lehtiga skrini (screenshot) võtmine ja disainiprobleemide ülevaatamine

**Algumise soovitusid:**
- *Kasutage warm-editorial presetit ja seadistage siis peamine värv #2d6a4f.*
- *Tehase homepage'i skrini ja räägige mulle, mida saaksite parendada.*
- *Loo uuesti kasutatav hero block pattern täieliku laia tagasiselt ja keskmiselt paigutatud pealkirjaga.*

---

### Plugin Manager (Plugini haldamine)

**Fookus:** WordPress-plugini leida, installida ja hallitamine.

**Käivitettavad tööriistad:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Mis on selle hea:**
- Kirjeldatud kasutuse korral parima plugini soovitus
- Registri pealt olevate ability packide installimine
- Kasutavate ability kataloogi üleskurstamine kategooriates

**Algumise soovitusid:**
- *Mis on parim plugin membership directory jaoks?*
- *Installige WooCommerce ability pack.*
- *Näita mulle kõik saadaval olevad e-commerce ability packid.*

---

### Support Assistant (Toetuse assistent)

**Fookus:** Lehtisaisu, seadistuste ja WordPressi konfiguratsiooniga seotud küsimuste vastamine.

**Käivitettavad tööriistad:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Mis on õigesti toimib:**
- Praeguse sissejuhatise seadistuste ja võimaluste otsimine.
- Selgitamine, millised posttüübid, taksonomiat ja menüü on sissejuhatises konfiguratsiooniga.
- "Mida see seadistus teeb?" küsimuste vastamine elavaid väärtusi lugemise abil.
- Lugeva diagnoosilise kerra toimimine enne muutusi tegemist.

**Algumise ettepanekud:**
- *Millised pluginid ja seadistused on praegu selle sissejuhatises aktiivsed?*
- *Listige kõik selle sissejuhatises registreeritud kasutamata posttüübid.*
- *Millised navigatsioonimenu on olemas ja kus on need määratud?*

---

## Agentide kohandamine

Iga sissejuhatise agenti saab laiendada või asenda `gratis_ai_agent_agents` filtri abil.

### Olemasoleva agentile kasutamata system prompti lisamine

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Uue agenti registreimine

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optime postid ja lehted otsingumootorite jaoks.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Sa oled SEO spetsialist. Keskida sotsiaalsõnastuse optimeerimisel, meta-kirjeldustel ja struktureeritud andmetel.',
        'suggestions'   => [
            'Kontrollige etuhoiatit ja meta-kirjeldust.',
            'Soovita otsingutit parandusi viisest uusimast postist.'
        ],
    ];
    return $agents;
} );
```

Uus agent ilmub Agent Pickeri esile filteri käivitamise pärast.

### Sisustusagentide eemaldamine

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
