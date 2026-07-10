---
title: Gníomhairí ionsuite
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Gníomhairí Ionsuite {#built-in-agents}

Tagann Gratis AI Agent v1.9.0 le cúig ghníomhaire ionsuite, gach ceann acu réamhchumraithe le tacar dírithe uirlisí, leid chórais saincheaptha, agus moltaí tosaigh atá meaitseáilte le tascanna coitianta sa réimse sin. Nuair a aistrítear idir gníomhairí, athraíonn sé an méid is féidir leis an gcúntóir a dhéanamh agus an chaoi a bhfreagraíonn sé — gan aon chumraíocht uaitse. Is féidir le Superdav AI Agent v1.18.0 uirlisí atá feasach ar sceideal, taifid mheabhrúcháin, geataí ceadaithe, agus fógraí SMS a chur leis na sreafaí oibre seo nuair atá na comhtháthuithe gaolmhara cumraithe.

## Cad Is Gníomhaire Ann? {#what-is-an-agent}

Is próifíl chumraíochta ainmnithe é gach gníomhaire a chomhcheanglaíonn:

- **Uirlisí** — na cumais atá cead ag an ngníomhaire a ghairm (m.sh. tá rochtain ag Scríbhneoir Ábhair ar chumais chruthaithe post; tá rochtain ag Stiúideo Dearaidh ar chumais CSS agus theme.json)
- **Leid chórais** — treoracha a shocraíonn ton, tosaíochtaí, agus srianta an ghníomhaire
- **Moltaí** — leideanna réamhscríofa a thaispeántar sa chomhéadan comhrá chun cabhrú leat tosú go tapa

## Rochtain ar Roghnóir na nGníomhairí {#accessing-the-agent-picker}

1. Oscail painéal **Gratis AI Agent** i dtaobhbharra riaracháin WordPress.
2. Cliceáil **deilbhín an ghníomhaire** ar bharr ar chlé de cheanntásc an chomhrá (athraíonn an deilbhín chun an gníomhaire gníomhach a léiriú).
3. Osclaítear **Roghnóir na nGníomhairí** mar fhorleagan tábla foirme. Liostaítear gach gníomhaire lena dheilbhín, ainm, agus cur síos aonlíne.
4. Cliceáil ró gníomhaire chun é a ghníomhachtú. Nuashonraítear ceanntásc an chomhrá láithreach.

Is féidir leat gníomhairí a athrú i lár comhrá freisin — tagann leid chórais an ghníomhaire nua i bhfeidhm ón gcéad teachtaireacht eile.

## Na Cúig Ghníomhaire Ionsuite {#the-five-built-in-agents}

### Scríbhneoir Ábhair {#content-writer}

**Fócas:** Poist, leathanaigh, agus foirmeacha teagmhála a chruthú agus a chur in eagar.

**Uirlisí atá ar fáil:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Le comhtháthuithe Superdav AI Agent v1.18.0 cumasaithe, d’fhéadfadh comhthéacs féilire cumraithe, geataí ceadaithe, meabhrúcháin, agus uirlisí fógraí SMS a bheith ar fáil freisin do shreafaí oibre ceadaithe.

**Rudaí a dhéanann sé go maith:**
- Dréachtú agus foilsiú post blagála ó achoimre nó imlíne
- Baisceanna de leathanaigh tuirlingthe a chruthú do shuíomh nua
- Foirmeacha teagmhála agus fiosrúcháin a thógáil
- Íomhánna aibhsithe a shocrú ar phoist ó URL nó cuardach
- Teachtaireachtaí leantacha imeachta a dhréachtú ó chomhthéacs cumraithe Google Calendar, ansin sos a ghlacadh le haghaidh ceadaithe sula seoltar fógraí

**Moltaí tosaigh:**
- *Scríobh post blagála 500 focal faoi bhuntáistí ilshuíomh WordPress.*
- *Cruthaigh leathanach Maidir Linn, Seirbhísí, agus Teagmháil agus foilsigh iad.*
- *Cuir foirm fhiosrúcháin áirithinte leis an leathanach Teagmhála.*
- *Dréachtaigh meabhrúchán do lucht freastail ar imeacht féilire cumraithe an lae amárach agus fan le ceadú sula seoltar é.*

---

### Tógálaí Suímh {#site-builder}

**Fócas:** Cruthú láithreáin gréasáin ó thús go deireadh ó leid amháin.

**Uirlisí atá ar fáil:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Le Superdav AI Agent v1.18.0, d’fhéadfadh uirlisí cumraithe seirbhíse bainistithe, ceadaithe, meabhrúcháin, féilire, agus SMS a bheith ar fáil san áit a gcumasaíonn riarthóirí iad.

**Rudaí a dhéanann sé go maith:**
- Plean tógála suímh ilchéime a ghiniúint do chineál gnó a gcuirtear síos air
- Gach céim a fhorghníomhú go huathrialach — struchtúr, ábhar, nascleanúint, dearadh
- Téarnamh ó earráidí i lár plean gan idirghabháil láimhe a éileamh
- Plugins mholta a shuiteáil mar chuid den tógáil
- Foirmeacha teagmhála a chruthú go díreach ón gcomhéadan comhrá (Superdav AI Agent v1.10.0+)
- Meabhrúcháin seolta nó leantach lucht freastail a chomhordú gan fógraí dúblacha nuair atá geataí ceadaithe agus taifid mheabhrúcháin cumasaithe

**Moltaí tosaigh:**
- *Tóg suíomh punainne grianghrafadóireachta le cineál poist gailearaí, leathanach áirithinte, agus foirm teagmhála.*
- *Cruthaigh suíomh gréasáin bialainne le roghchlár ar líne, uaireanta oscailte, agus foirm fhiosrúcháin áirithinte boird.*
- *Socraigh suíomh comhairliúcháin neamhspleách le leathanaigh seirbhíse, rannán punainne, agus blag.*
- *Cuir foirm teagmhála leis an leathanach Teagmhála ag úsáid tógálaí an tsuímh.*
- *Tar éis don seicliosta seolta suímh a bheith ceadaithe, seol meabhrúchán SMS chuig an teagmhálaí geallsealbhóra cumraithe.*

---

### Stiúideo Dearaidh {#design-studio}

**Fócas:** Saincheapadh amhairc — dathanna, clóghrafaíocht, CSS, agus patrúin bhloc.

**Uirlisí atá ar fáil:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Rudaí a dhéanann sé go maith:**
- Réamhshocruithe ainmnithe téama a chur i bhfeidhm (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Clóghrafaíocht dhomhanda agus pailéid dathanna a mhionchoigeartú trí theme.json
- CSS saincheaptha a instealladh le haghaidh forscríbhinní atá sonrach do bhranda
- Gabháil scáileáin de leathanach a thógáil agus é a athbhreithniú le haghaidh fadhbanna dearaidh

**Moltaí tosaigh:**
- *Cuir an réamhshocrú warm-editorial i bhfeidhm agus ansin socraigh an príomhdhath go #2d6a4f.*
- *Tóg gabháil scáileáin den leathanach baile agus inis dom cad a d’fheabhsófá.*
- *Cruthaigh patrún bloc laoch in-athúsáidte le híomhá chúlra lánleithead agus ceannteideal láraithe.*

### Bainisteoir Plugin {#plugin-manager}

**Fócas:** Plugins WordPress a aimsiú, a shuiteáil, agus a bhainistiú.

**Uirlisí atá ar fáil:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Rudaí a dhéanann sé go maith:**
- An plugin is fearr a mholadh do chás úsáide a gcuirtear síos air
- Pacáistí cumais a shuiteáil ón gclárlann
- Brabhsáil a dhéanamh ar an gcatalóg cumais atá ar fáil de réir catagóire

**Moltaí tosaigh:**
- *Cad é an plugin is fearr do chomhadlann ballraíochta?*
- *Suiteáil an pacáiste cumais WooCommerce.*
- *Taispeáin dom gach pacáiste cumais ríomhthráchtála atá ar fáil.*

---

### Cúntóir Tacaíochta {#support-assistant}

**Fócas:** Ceisteanna a fhreagairt faoi ábhar suímh, socruithe, agus cumraíocht WordPress.

**Uirlisí atá ar fáil:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Na rudaí a dhéanann sé go maith:**
- Socruithe agus roghanna reatha an tsuímh a chuardach
- Míniú a thabhairt ar na cineálacha postálacha, tacsanomaíochtaí, agus roghchláir atá cumraithe ar an suíomh
- Ceisteanna “cad a dhéanann an socrú seo?” a fhreagairt trí luachanna beo a léamh
- Feidhmiú mar shraith dhiagnóiseach inléite amháin sula ndéantar athruithe

**Moltaí tosaigh:**
- *Cad iad na plugins agus na socruithe atá gníomhach faoi láthair ar an suíomh seo?*
- *Liostaigh na cineálacha saincheaptha postálacha uile atá cláraithe ar an suíomh seo.*
- *Cad iad na roghchláir nascleanúna atá ann agus cá bhfuil siad sannta?*

---

## Comhtháthuithe Uathoibrithe Superdav {#superdav-automation-integrations}

Nuair atá comhtháthuithe Superdav AI Agent v1.18.0 cumraithe, is féidir le gníomhairí ionsuite páirt a ghlacadh i sreafaí oibre uathoibrithe níos sábháilte atá feasach ar sceidil:

- **Uirlisí léitheoireachta Google Calendar** a ligeann do ghníomhairí féilirí agus imeachtaí cumraithe a iniúchadh sula ndréachtaítear obair leantach.
- **Mapáil teagmhálaithe agus lucht freastail** a chuidíonn le rannpháirtithe imeachtaí a mheaitseáil le húsáideoirí WordPress nó teagmhálaithe aitheanta.
- **Geataí faofa daonna** a chuireann gníomhartha íogaire ar sos go dtí go ndéanann úsáideoir údaraithe iad a athbhreithniú agus a dheimhniú.
- **Taifid mheabhrúcháin** a chuireann cosc ar fhógraí dúblacha nuair a dhéanann poist sceidealaithe atriail nó athdhéanamh.
- **Fógraí SMS TextBee** a sheolann teachtaireachtaí téacs cumraithe amháin nuair atá dintiúir SMS agus ceadanna sreafa oibre cumasaithe.

Sreabhadh oibre molta: iarr ar an ngníomhaire an teachtaireacht nó an gníomh a ullmhú, déan athbhreithniú ar an leid faofa, ansin lig don ghníomh faofa atosú. Maidir le meabhrúcháin athfhillteacha, coinnigh dí-dhúbailt mheabhrúchán cumasaithe ionas nach gcuirtear an t-imeacht nó an teagmhálaí céanna ar an eolas arís agus arís eile.

---

## Gníomhairí a Shaincheapadh {#customising-agents}

Is féidir gach gníomhaire ionsuite a leathnú nó a athsholáthar tríd an scagaire `gratis_ai_agent_agents`.

### Leid chórais shaincheaptha a chur le gníomhaire atá ann cheana {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Gníomhaire nua a chlárú {#registering-a-new-agent}

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

Taispeántar an gníomhaire nua sa Roghnóir Gníomhairí láithreach tar éis don scagaire rith.

### Gníomhaire ionsuite a bhaint {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
