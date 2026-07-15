---
title: Innbyggðir agentar
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Innbyggðir agents

Gratis AI Agent v1.9.0 kemur með fimm innbyggðum agents, hverjum forstilltum með afmörkuðu setti af verkfærum, sérsniðinni system prompt og byrjunartillögum sem passa við algeng verkefni á því sviði. Að skipta á milli agents breytir því hvað assistant getur gert og hvernig hann svarar — án nokkurrar stillingar af þinni hálfu. Superdav AI Agent v1.18.0 getur bætt tímasetningameðvituðum verkfærum, áminningarfærslum, samþykktarhliðum og SMS-tilkynningum við þessi verkferli þegar tengdar samþættingar eru stilltar.

## Hvað er agent? {#what-is-an-agent}

Hver agent er nafngreindur stillingaprófíll sem sameinar:

- **Verkfæri** — hæfileikana sem agent má kalla fram (t.d. Content Writer hefur aðgang að hæfileikum til að búa til færslur; Design Studio hefur aðgang að CSS- og theme.json-hæfileikum)
- **System prompt** — leiðbeiningar sem setja tón, forgangsröðun og takmarkanir agent
- **Tillögur** — fyrirfram skrifaðar prompts sem birtast í spjallviðmótinu til að hjálpa þér að byrja fljótt

## Að opna Agent Picker {#accessing-the-agent-picker}

1. Opnaðu **Gratis AI Agent**-spjaldið í WordPress-stjórnendahliðarstikunni.
2. Smelltu á **agent-táknið** efst til vinstri í spjallhausnum (táknið breytist til að endurspegla virkan agent).
3. **Agent Picker** opnast sem form-table-yfirlögn. Hver agent er skráður með tákni sínu, nafni og einnar línu lýsingu.
4. Smelltu á agent-röð til að virkja hann. Spjallhausinn uppfærist samstundis.

Þú getur líka skipt um agents í miðju samtali — system prompt nýja agent tekur gildi frá næstu skilaboðum.

## Innbyggðu agents fimm {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Áhersla:** Að búa til og breyta færslum, síðum og samskiptaformum.

**Tiltæk verkfæri:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Með Superdav AI Agent v1.18.0 samþættingar virkjaðar geta stillt dagatalssamhengi, samþykktarhlið, áminningar og SMS-tilkynningaverkfæri einnig verið tiltæk fyrir samþykkt verkferli.

**Það sem hann gerir vel:**
- Að semja og birta bloggfærslur út frá verkefnalýsingu eða útlínum
- Að búa til runur af lendingarsíðum fyrir nýja síðu
- Að byggja samskipta- og fyrirspurnarform
- Að stilla aðalmyndir á færslum úr URL eða leit
- Að semja eftirfylgniskilaboð fyrir viðburði úr stilltu Google Calendar samhengi og gera síðan hlé fyrir samþykki áður en tilkynningar eru sendar

**Byrjunartillögur:**
- *Skrifaðu 500 orða bloggfærslu um ávinning WordPress multisite.*
- *Búðu til Um okkur-, Þjónustu- og Hafa samband-síðu og birtu þær.*
- *Bættu bókunarfyrirspurnarformi við Hafa samband-síðuna.*
- *Semdu áminningu fyrir þátttakendur á stilltum dagatalsviðburði morgundagsins og bíddu eftir samþykki áður en þú sendir hana.*

---

### Site Builder {#site-builder}

**Áhersla:** Vefsíðugerð frá upphafi til enda út frá einni prompt.

**Tiltæk verkfæri:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Með Superdav AI Agent v1.18.0 geta stillt managed-service-, samþykktar-, áminningar-, dagatals- og SMS-verkfæri verið tiltæk þar sem stjórnendur virkja þau.

**Það sem hann gerir vel:**
- Að búa til margra áfanga uppbyggingaráætlun fyrir síðu út frá lýstri tegund fyrirtækis
- Að framkvæma hvern áfanga sjálfstætt — uppbyggingu, efni, leiðsögn, hönnun
- Að jafna sig á villum í miðri áætlun án þess að krefjast handvirkrar íhlutunar
- Að setja upp ráðlögð plugins sem hluta af uppbyggingunni
- Að búa til samskiptaform beint úr spjallviðmótinu (Superdav AI Agent v1.10.0+)
- Að samræma ræsingaráminningar eða eftirfylgni við þátttakendur án tvítekinna tilkynninga þegar samþykktarhlið og áminningarfærslur eru virkjaðar

**Byrjunartillögur:**
- *Byggðu ljósmyndaportfólíósíðu með gallery post type, bókunarsíðu og samskiptaformi.*
- *Búðu til veitingastaðavefsíðu með netmatseðli, opnunartímum og borðbókunarfyrirspurnarformi.*
- *Settu upp síðu fyrir sjálfstætt ráðgjafastarf með þjónustusíðum, portfólíókafla og bloggi.*
- *Bættu samskiptaformi við Hafa samband-síðuna með site builder.*
- *Eftir að gátlisti fyrir opnun síðunnar er samþykktur skaltu senda SMS-áminningu til stillts tengiliðar hagsmunaaðila.*

---

### Design Studio {#design-studio}

**Áhersla:** Sjónræn sérsníðing — litir, leturfræði, CSS og block patterns.

**Tiltæk verkfæri:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Það sem hann gerir vel:**
- Að beita nafngreindum theme-forsniðum (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Að fínstilla alþjóðlega leturfræði og litapallettur í gegnum theme.json
- Að sprauta inn sérsniðnu CSS fyrir vörumerkjasértækar yfirskriftir
- Að taka skjáskot af síðu og yfirfara hana með tilliti til hönnunarvandamála

**Byrjunartillögur:**
- *Beittu warm-editorial-forsniðinu og stilltu síðan aðallitinn á #2d6a4f.*
- *Taktu skjáskot af forsíðunni og segðu mér hverju þú myndir bæta.*
- *Búðu til endurnýtanlegt hero block pattern með bakgrunnsmynd í fullri breidd og miðjuðum fyrirsögn.*

### Plugin Manager {#plugin-manager}

**Áhersla:** Að finna, setja upp og stjórna WordPress plugins.

**Tiltæk verkfæri:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Það sem hann gerir vel:**
- Að mæla með besta plugin fyrir lýst notkunartilvik
- Að setja upp ability-pakka úr registry
- Að skoða tiltækan ability-vörulista eftir flokki

**Byrjunartillögur:**
- *Hvert er besta plugin fyrir membership-skrá?*
- *Settu upp WooCommerce abilities-pakkann.*
- *Sýndu mér alla tiltæka ecommerce ability-pakka.*

---

### Support Assistant {#support-assistant}

**Áhersla:** Að svara spurningum um efni síðu, stillingar og WordPress uppsetningu.

**Tiltæk verkfæri:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Það sem hann gerir vel:**
- Fletta upp núverandi stillingum og valkostum vefs
- Útskýra hvaða færslugerðir, flokkunarkerfi og valmyndir eru stillt á vefnum
- Svara spurningum á borð við „hvað gerir þessi stilling?“ með því að lesa lifandi gildi
- Þjóna sem skrifvarin greiningarlag áður en breytingar eru gerðar

**Tillögur til að byrja:**
- *Hvaða plugin og stillingar eru nú virkar á þessum vef?*
- *Skráðu allar sérsniðnar færslugerðir sem eru skráðar á þessum vef.*
- *Hvaða leiðsagnarvalmyndir eru til og hvar eru þær úthlutaðar?*

---

## Superdav Automation samþættingar {#superdav-automation-integrations}

Þegar Superdav AI Agent v1.18.0 samþættingar eru stilltar geta innbyggðir agentar tekið þátt í öruggari sjálfvirkum verkflæðum sem taka mið af tímaáætlunum:

- **Google Calendar lestól** gera agentum kleift að skoða stillt dagatöl og viðburði áður en eftirfylgnivinna er samin.
- **Vörpun tengiliða og þátttakenda** hjálpar til við að para þátttakendur viðburða við WordPress notendur eða þekkta tengiliði.
- **Samþykktargáttir manna** stöðva viðkvæmar aðgerðir þar til heimilaður notandi yfirfer og staðfestir þær.
- **Áminningarfærslur** koma í veg fyrir tvíteknar tilkynningar þegar áætluð verk reyna aftur eða endurtaka sig.
- **TextBee SMS-tilkynningar** senda stillt textaskilaboð aðeins þegar SMS-auðkenni og verkflæðisheimildir eru virkjaðar.

Mælt verkflæði: biddu agentinn að undirbúa skilaboðin eða aðgerðina, yfirfarðu samþykktarkvaðninguna og leyfðu síðan samþykktri aðgerð að halda áfram. Fyrir endurteknar áminningar skaltu hafa afritunarsíun áminninga virka svo sami viðburður eða tengiliður fái ekki ítrekaðar tilkynningar.

---

## Sérsníða agenta {#customising-agents}

Hægt er að útvíkka eða skipta út hverjum innbyggðum agenti með `gratis_ai_agent_agents` filter.

### Bæta sérsniðinni kerfiskvaðningu við núverandi agent {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Skrá nýjan agent {#registering-a-new-agent}

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

Nýi agentinn birtist í Agent Picker um leið og filterinn hefur keyrt.

### Fjarlægja innbyggðan agent {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
