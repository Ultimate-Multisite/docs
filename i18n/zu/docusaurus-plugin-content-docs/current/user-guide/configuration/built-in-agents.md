---
title: Ama-ejenti Akhelwe ngaphakathi
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Ama-Agent Akhelwe Ngaphakathi

Gratis AI Agent v1.9.0 iza nama-agent amahlanu akhelwe ngaphakathi, ngalinye lilungiselelwe kusengaphambili ngesethi egxilile yamathuluzi, i-system prompt eyenziwe ngokwezidingo, neziphakamiso zokuqala ezifaniswe nemisebenzi evamile kuleyo ndawo. Ukushintsha phakathi kwama-agent kushintsha lokho umsizi angakwenza nokuthi uphendula kanjani — ngaphandle kwanoma yikuphi ukulungiselela ohlangothini lwakho. Superdav AI Agent v1.18.0 ingangeza amathuluzi aqaphela ishejuli, amarekhodi ezikhumbuzi, amasango okuvunywa, nezaziso ze-SMS kulezi zinqubo zomsebenzi lapho ama-integration ahlobene elungiselelwe.

## Yini i-Agent?

I-agent ngayinye iyiphrofayela yokulungiselela enegama ehlanganisa:

- **Amathuluzi** — amakhono i-agent evunyelwe ukuwabiza (isb. i-Content Writer inokufinyelela emakhonweni okudala ama-post; i-Design Studio inokufinyelela emakhonweni e-CSS ne-theme.json)
- **System prompt** — imiyalelo ebeka ithoni, okubalulekile, nemikhawulo ye-agent
- **Iziphakamiso** — ama-prompt abhalwe kusengaphambili aboniswa kusixhumi sengxoxo ukuze akusize uqale ngokushesha

## Ukufinyelela ku-Agent Picker

1. Vula iphaneli ye-**Gratis AI Agent** kubha eseceleni yokuphatha ye-WordPress.
2. Chofoza **isithonjana se-agent** phezulu kwesokunxele kwekhanda lengxoxo (isithonjana siyashintsha ukuze sibonise i-agent esebenzayo).
3. I-**Agent Picker** ivuleka njenge-overley yethebula lefomu. I-agent ngayinye ifakwe ohlwini nesithonjana sayo, igama, nencazelo yomugqa owodwa.
4. Chofoza umugqa we-agent ukuze uyisebenzise. Ikhanda lengxoxo libuyekezwa ngokushesha.

Ungashintsha futhi ama-agent phakathi nengxoxo — i-system prompt ye-agent entsha iqala ukusebenza kusukela kumlayezo olandelayo.

## Ama-Agent Amahlanu Akhelwe Ngaphakathi

### Content Writer

**Ukugxila:** Ukudala nokuhlela ama-post, amakhasi, namafomu okuxhumana.

**Amathuluzi atholakalayo:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Uma ama-integration e-Superdav AI Agent v1.18.0 enikwe amandla, umongo wekhalenda olungiselelwe, amasango okuvunywa, izikhumbuzi, namathuluzi ezaziso ze-SMS nawo angatholakala ezinqubweni zomsebenzi ezivunyiwe.

**Lokho ekwenza kahle:**
- Ukubhala nokushicilela ama-post ebhulogi kusuka ku-brief noma uhlaka
- Ukudala amaqoqo amakhasi okufika e-site entsha
- Ukwakha amafomu okuxhumana nawokubuza
- Ukusetha izithombe ezigqanyisiwe kuma-post kusuka ku-URL noma usesho
- Ukubhala imilayezo yokulandelela umcimbi kusuka kumongo we-Google Calendar olungiselelwe, bese imisa ukuze kuvunywe ngaphambi kokuthumela izaziso

**Iziphakamiso zokuqala:**
- *Bhala i-post yebhulogi yamagama angu-500 mayelana nezinzuzo ze-WordPress multisite.*
- *Dala ikhasi elithi About, Services, ne-Contact bese uwashicilela.*
- *Engeza ifomu lokubuza ngokubhukha ekhasini le-Contact.*
- *Bhala isikhumbuzi sababekhona kumcimbi wekhalenda olungiselelwe wakusasa bese ulinda ukuvunywa ngaphambi kokusithumela.*

---

### Site Builder

**Ukugxila:** Ukudala iwebhusayithi kusukela ekuqaleni kuya ekugcineni kusuka ku-prompt eyodwa.

**Amathuluzi atholakalayo:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Nge-Superdav AI Agent v1.18.0, amathuluzi enkonzo ephethwe, okuvunywa, isikhumbuzi, ikhalenda, ne-SMS alungiselelwe angatholakala lapho abaphathi bewavumela khona.

**Lokho ekwenza kahle:**
- Ukukhiqiza uhlelo lokwakha i-site lwezigaba eziningi lohlobo lwebhizinisi oluchaziwe
- Ukwenza isigaba ngasinye ngokuzimela — isakhiwo, okuqukethwe, ukuzulazula, umklamo
- Ukululama emaphutheni phakathi nohlelo ngaphandle kokudinga ukungenelela ngesandla
- Ukufaka ama-plugin anconyiwe njengengxenye yokwakha
- Ukudala amafomu okuxhumana ngqo kusixhumi sengxoxo (Superdav AI Agent v1.10.0+)
- Ukuxhumanisa izikhumbuzi zokwethula noma ukulandelela ababekhona ngaphandle kwezaziso eziphindaphindiwe lapho amasango okuvunywa namarekhodi ezikhumbuzi enikwe amandla

**Iziphakamiso zokuqala:**
- *Yakha i-site yephothifoliyo yezithombe enohlobo lwe-post yegalari, ikhasi lokubhukha, nefomu lokuxhumana.*
- *Dala iwebhusayithi yerestshurenti enemenyu eku-inthanethi, amahora okuvula, nefomu lokubuza ngokubhukha itafula.*
- *Setha i-site yokubonisana ngokuzimela enamakhasi ezinsizakalo, isigaba sephothifoliyo, nebhulogi.*
- *Engeza ifomu lokuxhumana ekhasini le-Contact usebenzisa i-site builder.*
- *Ngemva kokuthi uhlu lokuhlola ukwethulwa kwe-site luvunyiwe, thumela isikhumbuzi se-SMS koxhumana naye obambe iqhaza olungiselelwe.*

---

### Design Studio

**Ukugxila:** Ukwenza ngendlela oyifisayo okubonakalayo — imibala, i-typography, i-CSS, namaphethini wamabhulokhi.

**Amathuluzi atholakalayo:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Lokho ekwenza kahle:**
- Ukusebenzisa ama-preset etimu anegama (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ukucwenga i-typography yomhlaba wonke namaphalethi emibala nge-theme.json
- Ukufaka i-CSS yangokwezifiso ukuze kudlule izilungiselelo eziqondene nomkhiqizo
- Ukuthatha isithombe-skrini sekhasi nokusibuyekeza ngezinkinga zomklamo

**Iziphakamiso zokuqala:**
- *Sebenzisa i-preset ye-warm-editorial bese usetha umbala oyinhloko ube #2d6a4f.*
- *Thatha isithombe-skrini sekhasi lasekhaya bese ungitshela ukuthi yini ongayithuthukisa.*
- *Dala iphethini yebhulokhi ye-hero engasetshenziswa kabusha enesithombe sangemuva sobubanzi obugcwele nesihloko esiphakathi nendawo.*

### Plugin Manager

**Ukugxila:** Ukuthola, ukufaka, nokuphatha ama-plugin e-WordPress.

**Amathuluzi atholakalayo:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Lokho ekwenza kahle:**
- Ukuncoma i-plugin engcono kakhulu yecala lokusetshenziswa elichaziwe
- Ukufaka ama-ability pack kusuka ku-registry
- Ukuphequlula ikhathalogi yamakhono atholakalayo ngesigaba

**Iziphakamiso zokuqala:**
- *Iyiphi i-plugin engcono kakhulu ye-directory yobulungu?*
- *Faka i-WooCommerce abilities pack.*
- *Ngibonise wonke ama-ecommerce ability pack atholakalayo.*

---

### Support Assistant

**Ukugxila:** Ukuphendula imibuzo mayelana nokuqukethwe kwe-site, izilungiselelo, nokulungiselelwa kwe-WordPress.

**Amathuluzi atholakalayo:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Lokho ekwenza kahle:**
- Ukubheka izilungiselelo nezinketho zamanje zesayithi
- Ukuchaza ukuthi yiziphi izinhlobo zamaposi, ama-taxonomy, namamenyu alungiselelwe esayithini
- Ukuphendula imibuzo ethi "lesi silungiselelo senzani?" ngokufunda amanani abukhoma
- Ukusebenza njengongqimba lokuxilonga lokufunda kuphela ngaphambi kokwenza izinguquko

**Iziphakamiso zokuqala:**
- *Yimaphi ama-plugin nezilungiselelo ezisebenzayo njengamanje kule sayithi?*
- *Bhala uhlu lwazo zonke izinhlobo zamaposi ezenziwe ngokwezifiso ezibhaliswe kule sayithi.*
- *Yimaphi amamenyu okuzulazula akhona futhi abelwe kuphi?*

---

## Ukuhlanganiswa Kwe-automation kwe-Superdav

Lapho ukuhlanganiswa kwe-Superdav AI Agent v1.18.0 kulungiselelwe, ama-ejenti akhelwe ngaphakathi angabamba iqhaza ezinhlelweni zokusebenza ze-automation eziphephe kakhudlwana futhi eziqaphela ishejuli:

- **Amathuluzi okufunda e-Google Calendar** avumela ama-ejenti ukuthi ahlole amakhalenda nemicimbi elungiselelwe ngaphambi kokubhala umsebenzi wokulandelela.
- **Ukuqondanisa oxhumana nabo nabahambele umcimbi** kusiza ukufanisa ababambiqhaza bomcimbi nabasebenzisi be-WordPress noma oxhumana nabo abaziwayo.
- **Amasango okugunyaza abantu** amisa izenzo ezibucayi kuze kube yilapho umsebenzisi ogunyaziwe ezibuyekeza futhi eziqinisekisa.
- **Amarekhodi ezikhumbuzo** avimbela izaziso eziphindaphindiwe lapho imisebenzi ehleliwe izama futhi noma iphinda.
- **Izaziso ze-TextBee SMS** zithumela imiyalezo yombhalo elungiselelwe kuphela lapho iziqinisekiso ze-SMS nezimvume zenqubo yokusebenza zivuliwe.

Inqubo yokusebenza enconyiwe: cela i-ejenti ukuthi ilungiselele umlayezo noma isenzo, ubuyekeze isicelo sokugunyaza, bese uvumela isenzo esigunyaziwe ukuthi siqhubeke. Ezikhumbuzweni eziphindaphindwayo, gcina ukuvimbela ukuphindaphindwa kwezikhumbuzo kuvuliwe ukuze umcimbi ofanayo noma oxhumana naye angaziswa kaningi.

---

## Ukwenza Ama-ejenti Ngokwezifiso

I-ejenti ngayinye eyakhelwe ngaphakathi inganwetshwa noma ishintshwe ngesihlungi se-`gratis_ai_agent_agents`.

### Ukwengeza isikhuthazo sesistimu esenziwe ngokwezifiso ku-ejenti ekhona

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Ukubhalisa i-ejenti entsha

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

I-ejenti entsha ivela kuSikhethi Se-ejenti ngokushesha ngemva kokuthi isihlungi sisebenze.

### Ukususa i-ejenti eyakhelwe ngaphakathi

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
