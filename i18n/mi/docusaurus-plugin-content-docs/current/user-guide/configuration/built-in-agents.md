---
title: Ngā Āpiha Kua Hangaia ki Roto
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Ngā Agent kua hangaia-ki-roto {#built-in-agents}

Ka tukuna mai e Gratis AI Agent v1.9.0 ngā agent hangaia-ki-roto e rima, kua whirihoratia kē ia me tētahi huinga taputapu arotahi, tētahi system prompt kua whakahāngaitia, me ngā whakaaro tīmata e hāngai ana ki ngā mahi noa i taua wāhanga. Mā te whakawhiti i waenga i ngā agent ka panoni i ngā mea ka taea e te kaitautoko me te āhua o āna whakautu — kāore he whirihoranga māu. Ka taea e Superdav AI Agent v1.18.0 te tāpiri taputapu mōhio-hōtaka, pūkete whakamaumahara, kūaha whakaaetanga, me ngā whakamōhiotanga SMS ki ēnei rerengamahi ina whirihoratia ngā tūhononga e hāngai ana.

## He aha te Agent? {#what-is-an-agent}

He kōtaha whirihoranga whai ingoa ia agent e whakakotahi ana i:

- **Ngā taputapu** — ngā āheinga ka whakaaetia te agent kia karanga (hei tauira, ka whai wāhi tētahi Kaituhi Ihirangi ki ngā āheinga waihanga pou; ka whai wāhi tētahi Taiwhanga Hoahoa ki ngā āheinga CSS me theme.json)
- **System prompt** — ngā tohutohu e whakatakoto ana i te reo, ngā kaupapa matua, me ngā here a te agent
- **Ngā whakaaro** — ngā prompt kua tuhia kē e whakaaturia ana ki te atanga kōrerorero hei āwhina i a koe kia tīmata wawe

## Te uru ki te Kaitīpako Agent {#accessing-the-agent-picker}

1. Whakatuwheratia te paewhiri **Gratis AI Agent** i te paetaha kaiwhakahaere WordPress.
2. Pāwhiritia te **ata agent** i te kokonga mauī-runga o te pane kōrerorero (ka panoni te ata hei whakaatu i te agent hohe).
3. Ka tuwhera te **Kaitīpako Agent** hei taupoki ripanga-puka. Ka whakarārangitia ia agent me tōna ata, ingoa, me tētahi whakaahuatanga kotahi-rārangi.
4. Pāwhiritia tētahi rārangi agent hei whakahohe. Ka whakahōu tonu te pane kōrerorero.

Ka taea hoki e koe te whakawhiti agent i waenganui kōrerorero — ka whai mana te system prompt o te agent hou mai i te karere whai muri.

## Ngā Agent Hangaia-ki-roto e Rima {#the-five-built-in-agents}

### Kaituhi Ihirangi {#content-writer}

**Arotahi:** Te waihanga me te whakatika pou, whārangi, me ngā puka whakapā.

**Ngā taputapu e wātea ana:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Ki te whakahohea ngā tūhononga Superdav AI Agent v1.18.0, tērā pea ka wātea hoki te horopaki maramataka kua whirihoratia, ngā kūaha whakaaetanga, ngā whakamaumahara, me ngā taputapu whakamōhiotanga SMS ki ngā rerengamahi kua whakaaetia.

**Ngā mea e pai ana tana mahi:**
- Te tuhi hukihuki me te whakaputa pou rangitaki mai i tētahi whakarāpopototanga, mahere rānei
- Te waihanga i ngā kāhui whārangi ūnga mō tētahi paetukutuku hou
- Te hanga puka whakapā me ngā puka uiui
- Te tautuhi whakaahua āhuatanga ki runga pou mai i tētahi URL, rapunga rānei
- Te tuhi hukihuki karere whai-ake kaupapa mai i te horopaki Google Calendar kua whirihoratia, kātahi ka whakatā mō te whakaaetanga i mua i te tuku whakamōhiotanga

**Ngā whakaaro tīmata:**
- *Tuhia tētahi pou rangitaki 500-kupu mō ngā painga o WordPress multisite.*
- *Waihangatia he whārangi Mō Mātou, Ratonga, me Whakapā, ā, whakaputaina.*
- *Tāpirihia tētahi puka uiui tāpui ki te whārangi Whakapā.*
- *Tuhia tētahi whakamaumahara mō ngā kaitae ki te kaupapa maramataka kua whirihoratia mō āpōpō, ā, tatari mō te whakaaetanga i mua i te tuku.*

---

### Kaihanga Paetukutuku {#site-builder}

**Arotahi:** Te waihanga paetukutuku mai i te tīmatanga ki te mutunga i runga i te prompt kotahi.

**Ngā taputapu e wātea ana:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Mā Superdav AI Agent v1.18.0, tērā pea ka wātea ngā taputapu ratonga-whakahaere kua whirihoratia, whakaaetanga, whakamaumahara, maramataka, me SMS i ngā wāhi ka whakahohea e ngā kaiwhakahaere.

**Ngā mea e pai ana tana mahi:**
- Te whakaputa mahere hanga paetukutuku wāhanga-maha mō tētahi momo pakihi kua whakaahuatia
- Te whakahaere motuhake i ia wāhanga — hanganga, ihirangi, whakatere, hoahoa
- Te whakaora mai i ngā hapa i waenganui i te mahere, kāore e hiahiatia he wawaotanga ā-ringa
- Te tāuta plugin kua tūtohutia hei wāhanga o te hanga
- Te waihanga puka whakapā tika mai i te atanga kōrerorero (Superdav AI Agent v1.10.0+)
- Te ruruku whakamaumahara whakarewa, whai-ake kaitae rānei me te kore whakamōhiotanga tāruarua ina whakahohea ngā kūaha whakaaetanga me ngā pūkete whakamaumahara

**Ngā whakaaro tīmata:**
- *Hangaia tētahi paetukutuku kōpaki whakaahua me tētahi momo pou taiwhanga, tētahi whārangi tāpui, me tētahi puka whakapā.*
- *Waihangatia tētahi paetukutuku wharekai me tētahi rārangi kai ā-ipurangi, ngā hāora whakatuwhera, me tētahi puka uiui tāpui tēpu.*
- *Whakaritea tētahi paetukutuku kaitohutohu motuhake me ngā whārangi ratonga, tētahi wāhanga kōpaki mahi, me tētahi rangitaki.*
- *Tāpirihia tētahi puka whakapā ki te whārangi Whakapā mā te kaihanga paetukutuku.*
- *I muri i te whakaaetanga o te rārangi arowhai whakarewa paetukutuku, tukuna he whakamaumahara SMS ki te hoapā kaipānga kua whirihoratia.*

---

### Taiwhanga Hoahoa {#design-studio}

**Arotahi:** Whakaritenga ā-ataata — ngā tae, momotuhi, CSS, me ngā tauira poraka.

**Ngā taputapu e wātea ana:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Ngā mea e pai ana tana mahi:**
- Te whakamahi i ngā tatūkē theme whai ingoa (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Te whakatikatika āta i te momotuhi whānui me ngā papatae tae mā theme.json
- Te whakauru CSS ritenga mō ngā whakakapi motuhake-ki-te-waitohu
- Te tango whakaahua-mata o tētahi whārangi me te arotake mō ngā take hoahoa

**Ngā whakaaro tīmata:**
- *Whakamahia te tatūkē warm-editorial, kātahi ka tautuhi i te tae matua ki #2d6a4f.*
- *Tangohia he whakaahua-mata o te whārangi kāinga, ā, kōrerotia mai ngā mea ka whakapai ake koe.*
- *Waihangatia tētahi tauira poraka hero ka taea te whakamahi anō, me tētahi whakaahua papamuri whānui-katoa me tētahi pane kua whakawaengatia.*

### Kaiwhakahaere Plugin {#plugin-manager}

**Arotahi:** Te kite, te tāuta, me te whakahaere WordPress plugins.

**Ngā taputapu e wātea ana:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Ngā mea e pai ana tana mahi:**
- Te tūtohu i te plugin pai rawa mō tētahi take whakamahi kua whakaahuatia
- Te tāuta mōkihi āheinga mai i te rēhita
- Te tirotiro i te putumōhio āheinga e wātea ana mā te kāwai

**Ngā whakaaro tīmata:**
- *He aha te plugin pai rawa mō tētahi whaiaronga membership?*
- *Tāutahia te mōkihi āheinga WooCommerce.*
- *Whakaaturia mai ngā mōkihi āheinga ecommerce katoa e wātea ana.*

---

### Kaitautoko Tautoko {#support-assistant}

**Arotahi:** Te whakautu pātai mō te ihirangi paetukutuku, ngā tautuhinga, me te whirihoranga WordPress.

**Ngā taputapu e wātea ana:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ngā mea e pai ana tana mahi:**
- Te kimi i ngā tautuhinga me ngā kōwhiringa o nāianei o te pae
- Te whakamārama he aha ngā momo whakairinga, ngā whakarōpūtanga, me ngā tahua kua whirihorahia ki te pae
- Te whakautu i ngā pātai "he aha te mahi a tēnei tautuhinga?" mā te pānui i ngā uara ora
- Te mahi hei paparanga tātari pānui-anake i mua i te whakarerekē

**Ngā whakaaro tīmata:**
- *He aha ngā plugin me ngā tautuhinga e hohe ana i tēnei wā ki tēnei pae?*
- *Whakarārangitia ngā momo whakairinga ritenga katoa kua rēhitatia ki tēnei pae.*
- *He aha ngā tahua whakatere e noho ana, ā, kua tautapatia ki hea?*

---

## Ngā Tuituinga Aunoatanga Superdav {#superdav-automation-integrations}

Ina whirihorahia ngā tuituinga Superdav AI Agent v1.18.0, ka taea e ngā agent kua hangaia mai te whai wāhi ki ngā reremahi aunoatanga haumaru ake, mōhio hoki ki te hōtaka:

- **Ngā taputapu pānui Google Calendar** ka tuku i ngā agent kia tirotiro i ngā maramataka me ngā takunetanga kua whirihorahia i mua i te tuhi tauira mahi whai-ake.
- **Te mahere hoapā me ngā kaiuru** ka āwhina ki te whakahāngai i ngā kaiuru takunetanga ki ngā kaiwhakamahi WordPress, ki ngā hoapā mōhiotia rānei.
- **Ngā kūaha whakaaetanga tangata** ka whakatārewa i ngā mahi tairongo kia arotake, kia whakaū hoki tētahi kaiwhakamahi whai mana.
- **Ngā pūkete whakamaumahara** ka aukati i ngā whakamōhiotanga tāruarua ina whakamātau anō, ina tukurua rānei ngā mahi kua hōtakatia.
- **Ngā whakamōhiotanga TextBee SMS** ka tuku i ngā karere kuputuhi kua whirihorahia anake ina whakahohea ngā tohu tuakiri SMS me ngā whakaaetanga reremahi.

Reremahi e taunakitia ana: tonoa te agent kia whakarite i te karere, i te mahi rānei, arotakengia te aki whakaaetanga, kātahi ka tukua te mahi kua whakaaetia kia tīmata anō. Mō ngā whakamaumahara auau, puritia kia whakahohea te tango tārua whakamaumahara kia kaua taua takunetanga, taua hoapā rānei e whakamōhiotia toutia.

---

## Te Whakarite Ritenga i ngā Agent {#customising-agents}

Ka taea ia agent kua hangaia mai te whakawhānui, te whakakapi rānei mā te tātari `gratis_ai_agent_agents`.

### Te tāpiri i tētahi aki pūnaha ritenga ki tētahi agent o nāianei {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Te rēhita i tētahi agent hou {#registering-a-new-agent}

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

Ka puta te agent hou ki te Kaitīpako Agent i muri tonu i te rere o te tātari.

### Te tango i tētahi agent kua hangaia mai {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
