---
title: Içindäki agentler
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Içinde bar bolan agentler

Gratis AI Agent v1.9.0 bäş sany içinde bar bolan agent bilen gelýär; olaryň hersi belli bir gurallar toplumy, ýöriteleşdirilen system prompt we şol ugurdaky umumy wezipelere laýyk başlangyç teklipler bilen öňünden sazlanan. Agentleriň arasynda geçmek kömekçiniň näme edip bilýändigini we nähili jogap berýändigini üýtgedýär — siziň tarapyňyzdan hiç hili sazlama gerek bolmazdan. Superdav AI Agent v1.18.0 degişli integrasiýalar sazlananda bu iş akymlaryna meýilnama bilen baglanyşykly gurallary, ýatlatma ýazgylaryny, tassyklama derwezelerini we SMS habarnamalaryny goşup biler.

## Agent näme? {#what-is-an-agent}

Her agent şu zatlary birleşdirýän atlandyrylan sazlama profilidir:

- **Gurallar** — agentiň çagyrmaga rugsat berlen ukyplary (meselem, Content Writer ýazgy döretmek ukyplaryna elýeterlidir; Design Studio CSS we theme.json ukyplaryna elýeterlidir)
- **System prompt** — agentiň äheňini, ileri tutulýanlaryny we çäklendirmelerini kesgitleýän görkezmeler
- **Teklipler** — çalt başlamaga kömek etmek üçin söhbet interfeýsinde görkezilýän öňünden ýazylan promptlar

## Agent saýlaýja girmek {#accessing-the-agent-picker}

1. WordPress admin gapdal panelinde **Gratis AI Agent** panelini açyň.
2. Söhbet sözbaşysynyň ýokarky çepindäki **agent nyşanyna** basyň (nyşan işjeň agente görä üýtgeýär).
3. **Agent saýlaýjy** forma-jedwel örtügi hökmünde açylýar. Her agent öz nyşany, ady we bir setirlik düşündirişi bilen sanalýar.
4. Ony işjeňleşdirmek üçin agent setirine basyň. Söhbet sözbaşysy dessine täzelenýär.

Şeýle hem gepleşigiň ortasynda agentleri çalşyp bilersiňiz — täze agentiň system prompt-y indiki habardan başlap güýje girýär.

## Bäş sany içinde bar bolan agent {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Üns merkezi:** Ýazgylary, sahypalary we aragatnaşyk formalaryny döretmek we redaktirlemek.

**Elýeterli gurallar:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 integrasiýalary işledilen bolsa, sazlanan senenama konteksti, tassyklama derwezeleri, ýatlatmalar we SMS habarnama gurallary hem tassyklanan iş akymlary üçin elýeterli bolup biler.

**Gowy ýerine ýetirýänleri:**
- Gysgaça maglumatdan ýa-da meýilnamadan blog ýazgylaryny taslama etmek we çap etmek
- Täze saýt üçin landing sahypalarynyň toplumlaryny döretmek
- Aragatnaşyk we ýüz tutma formalaryny gurmak
- URL ýa-da gözleg arkaly ýazgylara esasy suratlary bellemek
- Sazlanan Google Calendar kontekstinden çäre boýunça dowamyndaky habarlary taslama etmek, soňra habarnamalary ibermezden öň tassyklama üçin saklanmak

**Başlangyç teklipler:**
- *WordPress multisite peýdalary barada 500 sözli blog ýazgysyny ýaz.*
- *About, Services we Contact sahypalaryny döret we olary çap et.*
- *Contact sahypasyna bronlama ýüz tutma formasyny goş.*
- *Ertirki sazlanan senenama çäresindäki gatnaşyjylar üçin ýatlatmany taslama et we ony ibermezden öň tassyklama garaş.*

---

### Site Builder {#site-builder}

**Üns merkezi:** Bir prompt-dan başlap doly websaýt döretmek.

**Elýeterli gurallar:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 bilen, administratorlar olary işleden ýerlerinde sazlanan dolandyrylýan-hyzmat, tassyklama, ýatlatma, senenama we SMS gurallary elýeterli bolup biler.

**Gowy ýerine ýetirýänleri:**
- Beýan edilen iş görnüşi üçin köp tapgyrly saýt gurmak meýilnamasyny döretmek
- Her tapgyry özbaşdak ýerine ýetirmek — gurluş, mazmun, nawigasiýa, dizaýn
- El bilen goşulyşmagy talap etmezden meýilnamanyň ortasynda ýüze çykan ýalňyşlyklardan dikeldilmek
- Gurluşyň bir bölegi hökmünde maslahat berlen pluginleri gurnamak
- Aragatnaşyk formalaryny göni söhbet interfeýsinden döretmek (Superdav AI Agent v1.10.0+)
- Tassyklama derwezeleri we ýatlatma ýazgylary işledilende, gaýtalanýan habarnamalar bolmazdan, işe goýberiş ýatlatmalaryny ýa-da gatnaşyjylara dowamyndaky habarlary utgaşdyrmak

**Başlangyç teklipler:**
- *Galereýa ýazgy görnüşi, bronlama sahypasy we aragatnaşyk formasy bolan fotografiýa portfolio saýtyny gur.*
- *Onlaýn menýu, açylyş sagatlary we stol bronlama ýüz tutma formasy bolan restoran websaýtyny döret.*
- *Hyzmat sahypalary, portfolio bölümi we blog bilen freelance maslahatçylyk saýtyny sazla.*
- *Site builder ulanyp Contact sahypasyna aragatnaşyk formasyny goş.*
- *Saýt işe goýberiş barlag sanawy tassyklanylandan soň, sazlanan gyzyklanýan tarap aragatnaşygyna SMS ýatlatma iber.*

---

### Design Studio {#design-studio}

**Üns merkezi:** Wizual şahsylaşdyrma — reňkler, tipografiýa, CSS we blok nagyşlary.

**Elýeterli gurallar:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Gowy ýerine ýetirýänleri:**
- Atlandyrylan theme deslapky sazlamalaryny ulanmak (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json arkaly global tipografiýany we reňk palitralaryny inçe sazlamak
- Brende mahsus üýtgetmeler üçin ýörite CSS goşmak
- Sahypanyň skrinşotyny almak we dizaýn meseleleri boýunça ony gözden geçirmek

**Başlangyç teklipler:**
- *warm-editorial deslapky sazlamasyny ulan, soňra esasy reňki #2d6a4f edip belle.*
- *Baş sahypanyň skrinşotyny al we nämeleri gowulandyrjakdygyňy aýt.*
- *Doly giňlikdäki fon suraty we merkezleşdirilen sözbaşy bilen gaýtadan ulanyp bolýan hero blok nagyşyny döret.*

### Plugin Manager {#plugin-manager}

**Üns merkezi:** WordPress pluginlerini tapmak, gurnamak we dolandyrmak.

**Elýeterli gurallar:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Gowy ýerine ýetirýänleri:**
- Beýan edilen ulanyş ýagdaýy üçin iň gowy plugini maslahat bermek
- Reýestrden ability pack-lary gurnamak
- Elýeterli ability katalogyny kategoriýa boýunça gözden geçirmek

**Başlangyç teklipler:**
- *Membership katalogy üçin iň gowy plugin haýsy?*
- *WooCommerce abilities pack-y gurna.*
- *Ähli elýeterli ecommerce ability pack-laryny görkez.*

---

### Support Assistant {#support-assistant}

**Üns merkezi:** Saýt mazmuny, sazlamalar we WordPress konfigurasiýasy baradaky soraglara jogap bermek.

**Elýeterli gurallar:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Onuň gowy ýerine ýetirýänleri:**
- Häzirki saýt sazlamalaryny we opsiýalaryny gözlemek
- Saýtda haýsy ýazgy görnüşleriniň, taksonomiýalaryň we menýularyň sazlanandygyny düşündirmek
- Janly bahalary okamak arkaly "bu sazlama näme edýär?" soraglaryna jogap bermek
- Üýtgeşmeler girizmezden öň diňe okalýan diagnostika gatlagy bolup hyzmat etmek

**Başlangyç teklipler:**
- *Bu saýtda häzirki wagtda haýsy pluginler we sazlamalar işjeň?*
- *Bu saýtda hasaba alnan ähli ýörite ýazgy görnüşlerini sanap ber.*
- *Haýsy nawigasiýa menýulary bar we olar nirede bellenen?*

---

## Superdav awtomatlaşdyryş integrasiýalary {#superdav-automation-integrations}

Superdav AI Agent v1.18.0 integrasiýalary sazlananda, içindäki agentler has howpsuz, tertipnama habarly awtomatlaşdyryş iş akymlaryna gatnaşyp biler:

- **Google Calendar okamak gurallary** agentlere dowamyndaky işi taýýarlamazdan öň sazlanan kalendarlary we wakalary barlamaga mümkinçilik berýär.
- **Kontakt we gatnaşyjy kartalaşdyrmasy** waka gatnaşyjylaryny WordPress ulanyjylary ýa-da belli kontaktlar bilen gabat getirmäge kömek edýär.
- **Adam tassyklama derwezeleri** ygtyýarly ulanyjy olary gözden geçirip tassyklaýança duýgur hereketleri saklaýar.
- **Ýatlatma ýazgylary** meýilleşdirilen işler gaýtadan synanyşanda ýa-da gaýtalananda dublikat bildirişleriň öňüni alýar.
- **TextBee SMS bildirişleri** SMS maglumatlary we iş akymy rugsatlary işledilende diňe sazlanan tekst habarlaryny iberýär.

Maslahat berilýän iş akymy: agentden habary ýa-da hereketi taýýarlamagy soraň, tassyklama haýyşyny gözden geçiriň, soňra tassyklanan hereketiň dowam etmegine rugsat beriň. Gaýtalanýan ýatlatmalar üçin ýatlatma deduplikasiýasyny işjeň saklaň, şonda şol bir waka ýa-da kontakt gaýta-gaýta habarly edilmez.

---

## Agentleri özleşdirmek {#customising-agents}

Her bir içindäki agent `gratis_ai_agent_agents` filter arkaly giňeldilip ýa-da çalşyrylyp bilner.

### Bar bolan agente ýörite ulgam görkezmesini goşmak {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Täze agenti hasaba almak {#registering-a-new-agent}

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

Täze agent filter işledilenden soň derrew Agent saýlaýjyda peýda bolýar.

### Içindäki agenti aýyrmak {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
