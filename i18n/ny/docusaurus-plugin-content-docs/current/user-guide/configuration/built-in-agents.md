---
title: Ma agent omangidwiramo
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents Omangidwira Mkati

Gratis AI Agent v1.9.0 imabwera ndi agents asanu omangidwira mkati, aliyense wokonzedweratu ndi gulu la zida lolunjika pa ntchito inayake, system prompt yosinthidwa, ndi malingaliro oyambira ogwirizana ndi ntchito zofala m’gawolo. Kusintha pakati pa agents kumasintha zomwe assistant angachite ndi mmene amayankhira — popanda kasinthidwe kalikonse kuchokera kwa inu. Superdav AI Agent v1.18.0 ikhoza kuwonjezera zida zoganizira ndandanda, zolemba za zikumbutso, zipata zovomereza, ndi zidziwitso za SMS ku mayendedwe a ntchito awa pamene ma integrations okhudzana nawo akonzedwa.

## Agent Ndi Chiyani? {#what-is-an-agent}

Agent aliyense ndi mbiri ya kasinthidwe yokhala ndi dzina yomwe imaphatikiza:

- **Zida** — kuthekera komwe agent amaloledwa kuyitanitsa (mwachitsanzo Content Writer ali ndi mwayi wogwiritsa ntchito kuthekera kopanga zolemba; Design Studio ili ndi mwayi wogwiritsa ntchito CSS ndi kuthekera kwa theme.json)
- **System prompt** — malangizo omwe amakhazikitsa kalankhulidwe ka agent, zofunika kwambiri, ndi malire
- **Malingaliro** — ma prompts olembedwa kale omwe amawonetsedwa mu chat interface kuti akuthandizeni kuyamba mwachangu

## Kupeza Agent Picker {#accessing-the-agent-picker}

1. Tsegulani panel ya **Gratis AI Agent** mu sidebar ya admin wa WordPress.
2. Dinani **chizindikiro cha agent** pamwamba kumanzere kwa header ya chat (chizindikirocho chimasintha kuti chiwonetse agent wogwira ntchito).
3. **Agent Picker** imatseguka ngati overlay ya form-table. Agent aliyense amalembedwa ndi chizindikiro chake, dzina, ndi kufotokozera kwa mzere umodzi.
4. Dinani mzere wa agent kuti muyiyambitse. Header ya chat imasinthidwa nthawi yomweyo.

Mungathenso kusintha agents pakati pa zokambirana — system prompt ya agent watsopano imayamba kugwira ntchito kuchokera pa uthenga wotsatira.

## Agents Asanu Omangidwira Mkati {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Cholinga:** Kupanga ndi kusintha zolemba, masamba, ndi mafomu olumikizirana.

**Zida zomwe zilipo:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Ndi ma integrations a Superdav AI Agent v1.18.0 atayatsidwa, calendar context yokonzedwa, zipata zovomereza, zikumbutso, ndi zida za zidziwitso za SMS zingakhalenso zilipo ku mayendedwe a ntchito ovomerezeka.

**Zomwe imachita bwino:**
- Kulemba zoyambira ndi kusindikiza zolemba za blog kuchokera ku brief kapena outline
- Kupanga magulu a landing pages pa site yatsopano
- Kumanga mafomu olumikizirana ndi ofunsa mafunso
- Kuyika zithunzi zosankhidwa pa zolemba kuchokera ku URL kapena kusaka
- Kulemba uthenga wotsatira wa chochitika kuchokera ku Google Calendar context yokonzedwa, kenako kuyima kuti ivomerezedwe musanatumize zidziwitso

**Malingaliro oyambira:**
- *Lemba cholemba cha blog cha mawu 500 chokhudza ubwino wa WordPress multisite.*
- *Panga tsamba la About, Services, ndi Contact ndipo usindikize.*
- *Onjezani fomu yofunsira booking patsamba la Contact.*
- *Lemba chikumbutso kwa opezeka pa chochitika cha calendar yokonzedwa cha mawa ndipo dikirani chivomerezo musanachitumize.*

---

### Site Builder {#site-builder}

**Cholinga:** Kupanga website yonse kuyambira pachilimbikitso chimodzi.

**Zida zomwe zilipo:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Ndi Superdav AI Agent v1.18.0, zida zokonzedwa za managed-service, chivomerezo, chikumbutso, calendar, ndi SMS zingakhale zilipo kumene oyang’anira amaziyatsa.

**Zomwe imachita bwino:**
- Kupanga plan yomanga site ya magawo angapo ya mtundu wa bizinesi wofotokozedwa
- Kuchita gawo lililonse payokha — kapangidwe, zomwe zili, navigation, design
- Kubwezeretsa kuchokera ku zolakwika pakati pa plan popanda kufuna kulowererapo pamanja
- Kuyika ma plugins ovomerezedwa ngati gawo la kumanga
- Kupanga mafomu olumikizirana mwachindunji kuchokera ku chat interface (Superdav AI Agent v1.10.0+)
- Kugwirizanitsa zikumbutso za kutsegulira kapena kutsatira opezeka popanda zidziwitso zobwerezedwa pamene zipata zovomereza ndi zolemba za zikumbutso zayatsidwa

**Malingaliro oyambira:**
- *Mangani site ya photography portfolio yokhala ndi gallery post type, tsamba la booking, ndi fomu yolumikizirana.*
- *Pangani website ya restaurant yokhala ndi menu ya pa intaneti, nthawi zotsegulira, ndi fomu yofunsira table-booking.*
- *Khazikitsani site ya freelance consulting yokhala ndi masamba a services, gawo la portfolio, ndi blog.*
- *Onjezani fomu yolumikizirana patsamba la Contact pogwiritsa ntchito site builder.*
- *Pambuyo povomereza site launch checklist, tumizani chikumbutso cha SMS ku stakeholder contact yokonzedwa.*

---

### Design Studio {#design-studio}

**Cholinga:** Kusintha maonekedwe — mitundu, typography, CSS, ndi block patterns.

**Zida zomwe zilipo:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Zomwe imachita bwino:**
- Kugwiritsa ntchito theme presets okhala ndi mayina (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Kukonza mwatsatanetsatane typography yapadziko lonse ndi ma colour palettes kudzera pa theme.json
- Kuyika CSS yapadera ya zosintha za brand inayake
- Kujambula screenshot ya tsamba ndi kuliona kuti mupeze zovuta za design

**Malingaliro oyambira:**
- *Gwiritsani ntchito preset ya warm-editorial kenako khazikitsani mtundu woyambirira kukhala #2d6a4f.*
- *Tengani screenshot ya homepage ndipo mundiuze zomwe mungasinthe.*
- *Pangani reusable hero block pattern yokhala ndi chithunzi cha background chodzaza m’lifupi lonse ndi heading yapakati.*

### Plugin Manager {#plugin-manager}

**Cholinga:** Kupeza, kuyika, ndi kuyang’anira ma plugins a WordPress.

**Zida zomwe zilipo:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Zomwe imachita bwino:**
- Kulangiza plugin yabwino kwambiri pa ntchito yomwe yafotokozedwa
- Kuyika ability packs kuchokera ku registry
- Kusakatula catalogue ya abilities yomwe ilipo pogwiritsa ntchito gulu

**Malingaliro oyambira:**
- *Kodi plugin yabwino kwambiri ya membership directory ndi iti?*
- *Ikani pack ya WooCommerce abilities.*
- *Ndiwonetseni mapaketi onse a ecommerce abilities omwe alipo.*

---

### Support Assistant {#support-assistant}

**Cholinga:** Kuyankha mafunso okhudza zomwe zili pa site, makonda, ndi kasinthidwe ka WordPress.

**Zida zomwe zilipo:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Zomwe imachita bwino:**
- Kufufuza makonda ndi zosankha zapano za tsambali
- Kufotokoza mitundu ya zolemba, ma taxonomy, ndi mindandanda yomwe yakonzedwa pa tsambali
- Kuyankha mafunso a "kodi makondawa amachita chiyani?" powerenga mtengo womwe ulipo
- Kukhala ngati gawo lowerenga kokha lopezera mavuto musanasinthe zinthu

**Malingaliro oyambira:**
- *Ndi ma plugin ndi makonda ati omwe akugwira ntchito pano pa tsambali?*
- *Lembani mitundu yonse ya zolemba zapadera zomwe zalembetsedwa pa tsambali.*
- *Ndi mindandanda yanji yoyendera yomwe ilipo ndipo yapatsidwa kuti?*

---

## Kuphatikiza kwa Superdav Automation {#superdav-automation-integrations}

Pamene kuphatikiza kwa Superdav AI Agent v1.18.0 kwakonzedwa, othandizira omangidwamo angathe kutenga nawo mbali mu njira za automation zotetezeka kwambiri zomwe zimadziwa ndandanda:

- **Zida zowerengera Google Calendar** zimalola othandizira kuyang'ana makalendala ndi zochitika zokonzedwa asanalembe ntchito yotsatira.
- **Kuyerekezera ma contact ndi opezeka pamsonkhano** kumathandiza kugwirizanitsa otenga nawo mbali pa chochitika ndi ogwiritsa ntchito WordPress kapena ma contact odziwika.
- **Zipata zovomerezedwa ndi munthu** zimayimitsa zochita zovuta mpaka wogwiritsa ntchito wovomerezeka awunikire ndi kuzitsimikizira.
- **Zolemba za zikumbutso** zimalepheretsa zidziwitso zobwerezabwereza pamene ntchito zokonzedwa ziyesedwanso kapena zibwerezedwa.
- **Zidziwitso za TextBee SMS** zimatumiza mauthenga alemba okonzedwa pokhapokha ngati ma credentials a SMS ndi zilolezo za workflow zayatsidwa.

Njira yolimbikitsidwa: pemphani wothandizira kukonzekera uthenga kapena chochita, onaninso pempho lovomereza, kenako lolani chochita chovomerezedwacho kupitiriza. Kwa zikumbutso zobwerezabwereza, sungani kuchotsa zobwereza kwa zikumbutso kuyatsidwa kuti chochitika kapena contact yemweyo asadziwitsidwe mobwerezabwereza.

---

## Kusintha Othandizira {#customising-agents}

Wothandizira aliyense womangidwamo angakulitsidwe kapena kusinthidwa kudzera mu filter ya `gratis_ai_agent_agents`.

### Kuwonjezera system prompt yapadera kwa wothandizira amene alipo {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Kulembetsa wothandizira watsopano {#registering-a-new-agent}

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

Wothandizira watsopanoyo amawoneka mu Agent Picker nthawi yomweyo filter ikangoyenda.

### Kuchotsa wothandizira womangidwamo {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
