---
title: Baemeli ba hahelletsoeng ka hare
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agents tse Ahiloeng ka Hare

Gratis AI Agent v1.9.0 e tla le agents tse hlano tse ahiloeng ka hare, e nngwe le e nngwe e se e hlophisitswe esale pele ka sete e shebaneng ya disebediswa, system prompt e ikgethileng, le ditlhahiso tsa qalo tse tsamaellanang le mesebetsi e tlwaelehileng sebakeng seo. Ho fetola agents ho fetola seo mothusi a ka se etsang le kamoo a arabelang kateng — ntle le tlhophiso efe kapa efe ka lehlakoreng la hao. Superdav AI Agent v1.18.0 e ka eketsa disebediswa tse elang hloko kemiso, direkoto tsa dikgopotso, dikgoro tsa tumello, le ditsebiso tsa SMS ho mekgatlo ena ya mosebetsi ha dikopanyo tse amanang le tsona di hlophisitswe.

## Agent ke Eng?

Agent ka nngwe ke profaele ya tlhophiso e nang le lebitso e kopanyang:

- **Disebediswa** — bokgoni boo agent e dumelletsweng ho bo bitsa (mohl. Content Writer e na le phihlello ho bokgoni ba ho bopa diposo; Design Studio e na le phihlello ho bokgoni ba CSS le theme.json)
- **System prompt** — ditaelo tse behang modumo, dintho tse tlang pele, le meedi ya agent
- **Ditlhahiso** — diprompt tse ngotsweng esale pele tse bontshwang sebopehong sa puisano ho o thusa ho qala kapele

## Ho Fihlella Agent Picker

1. Bula phanele ya **Gratis AI Agent** ka sidebar ya taolo ya WordPress.
2. Tobetsa **letshwao la agent** hodimo ka ho le letshehadi la hlooho ya puisano (letshwao le a fetoha ho bontsha agent e sebetsang).
3. **Agent Picker** e bula e le seaparo sa form-table. Agent ka nngwe e thathamisitswe ka letshwao la yona, lebitso, le tlhaloso ya mola o le mong.
4. Tobetsa mola wa agent ho e kenya tshebetsong. Hlooho ya puisano e ntjhafala hanghang.

Hape o ka fetola agents bohareng ba moqoqo — system prompt ya agent e ntjha e qala ho sebetsa molaetseng o latelang.

## Agents tse Hlano tse Ahiloeng ka Hare

### Mongodi wa Dikahare

**Tsepamiso:** Ho bopa le ho hlophisa diposo, maqephe, le diforomo tsa kgokahano.

**Disebediswa tse fumanehang:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Ha dikopanyo tsa Superdav AI Agent v1.18.0 di buletswe, maemo a khalendara a hlophisitsweng, dikgoro tsa tumello, dikgopotso, le disebediswa tsa tsebiso ya SMS le tsona di ka fumaneha bakeng sa mekgatlo ya mosebetsi e amohetsweng.

**Seo e se etsang hantle:**
- Ho ngola le ho phatlalatsa diposo tsa blog ho tswa ho brief kapa outline
- Ho bopa dihlopha tsa maqephe a ho fihla bakeng sa site e ntjha
- Ho aha diforomo tsa kgokahano le dipotso
- Ho beha ditshwantsho tse hlahellang diposong ho tswa ho URL kapa patlo
- Ho ngola melaetsa ya ho sala morao ketsahalo ho tswa maemong a Google Calendar a hlophisitsweng, ebe ho emisa bakeng sa tumello pele ho romelwa ditsebiso

**Ditlhahiso tsa qalo:**
- *Ngola poso ya blog ya mantswe a 500 ka melemo ya WordPress multisite.*
- *Bopa leqephe la About, Services, le Contact mme o a phatlalatse.*
- *Kenya foromo ya potso ya peheletso leqepheng la Contact.*
- *Ngola kgopotso bakeng sa ba tlileng ketsahalong ya khalendara e hlophisitsweng ya hosane mme o emele tumello pele o e romela.*

---

### Moahi wa Site

**Tsepamiso:** Ho bopa webosaete ho tloha qalong ho isa qetellong ho tswa ho prompt e le nngwe.

**Disebediswa tse fumanehang:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Ka Superdav AI Agent v1.18.0, disebediswa tsa tshebeletso e laolwang, tumello, kgopotso, khalendara, le SMS tse hlophisitsweng di ka fumaneha moo batsamaisi ba di bulelang teng.

**Seo e se etsang hantle:**
- Ho hlahisa moralo wa ho aha site wa mekgahlelo e mengata bakeng sa mofuta wa kgwebo o hlalositsweng
- Ho phetha mohato ka mong ka boikemelo — sebopeho, dikahare, tsamaiso ya maeto, moralo
- Ho hlaphohelwa diphosong bohareng ba moralo ntle le ho hloka ho kenella ka letsoho
- Ho kenya plugins tse kgothaletswang e le karolo ya kaho
- Ho bopa diforomo tsa kgokahano ka kotloloho ho tswa sebopehong sa puisano (Superdav AI Agent v1.10.0+)
- Ho hokahanya dikgopotso tsa phatlalatso kapa ho sala morao ba tlileng ntle le ditsebiso tse phetilweng ha dikgoro tsa tumello le direkoto tsa dikgopotso di buletswe

**Ditlhahiso tsa qalo:**
- *Aha site ya portfolio ya ho nka dinepe e nang le mofuta wa poso wa gallery, leqephe la peheletso, le foromo ya kgokahano.*
- *Bopa webosaete ya resturante e nang le menu ya inthaneteng, dihora tsa ho bula, le foromo ya potso ya ho behela tafole.*
- *Hlophisa site ya boeletsi ba freelancer e nang le maqephe a ditshebeletso, karolo ya portfolio, le blog.*
- *Kenya foromo ya kgokahano leqepheng la Contact o sebedisa site builder.*
- *Kamora hore lenane la tlhahlobo la phatlalatso ya site le amohelwe, romela kgopotso ya SMS ho kgokahano ya stakeholder e hlophisitsweng.*

---

### Studio ya Moralo

**Tsepamiso:** Tlwaelanyo ya pono — mebala, typography, CSS, le dipaterone tsa diboloko.

**Disebediswa tse fumanehang:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Seo e se etsang hantle:**
- Ho kenya tshebetsong dipreset tsa theme tse nang le mabitso (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ho ntlafatsa typography ya lefatshe lohle le diphalete tsa mebala ka theme.json
- Ho kenya CSS e ikgethileng bakeng sa diphetoho tse itseng tsa brand
- Ho nka screenshot ya leqephe le ho e lekola bakeng sa mathata a moralo

**Ditlhahiso tsa qalo:**
- *Kenya tshebetsong preset ya warm-editorial mme ebe o beha mmala wa mantlha ho #2d6a4f.*
- *Nka screenshot ya homepage mme o mpolelle seo o ka se ntlafatsang.*
- *Bopa paterone ya block ya hero e ka sebediswang hape e nang le setshwantsho sa bokamorao se pharalletseng ka bophara bohle le sehlooho se bohareng.*

### Motsamaisi wa Plugin

**Tsepamiso:** Ho sibolla, ho kenya, le ho laola plugins tsa WordPress.

**Disebediswa tse fumanehang:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Seo e se etsang hantle:**
- Ho kgothaletsa plugin e ntle ka ho fetisisa bakeng sa tshebediso e hlalositsweng
- Ho kenya dipakete tsa bokgoni ho tswa registry
- Ho sheba khathalogo ya bokgoni e fumanehang ka sehlopha

**Ditlhahiso tsa qalo:**
- *Plugin e ntle ka ho fetisisa bakeng sa bukana ya membership ke efe?*
- *Kenya pakete ya bokgoni ba WooCommerce.*
- *Mpontshe dipakete tsohle tsa bokgoni ba ecommerce tse fumanehang.*

---

### Mothusi wa Tshehetso

**Tsepamiso:** Ho araba dipotso ka dikahare tsa site, di-setting, le tlhophiso ya WordPress.

**Disebediswa tse fumanehang:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Seo e se etsang hantle:**
- Ho sheba litlhophiso le dikgetho tsa sebaka tsa hajoale
- Ho hlalosa hore na mefuta ya diposo, ditlhophiso tsa taxonomy, le dimenu di hlophisitswe jwang sebakeng
- Ho araba dipotso tsa "tlhophiso ena e etsang?" ka ho bala boleng bo phelang
- Ho sebetsa jwalo ka lera la tlhahlobo le balang feela pele ho etswa diphetoho

**Ditlhahiso tsa qalo:**
- *Ke di-plugin le ditlhophiso dife tse sebetsang hajoale sebakeng see?*
- *Ngola mefuta yohle ya diposo tse ikgethileng tse ngodisitsweng sebakeng see.*
- *Ke dimenu dife tsa tsamaiso tse teng mme di abetswe hokae?*

---

## Dikopanyo tsa Boiketsiso ba Superdav

Ha dikopanyo tsa Superdav AI Agent v1.18.0 di hlophisitswe, baemedi ba ahilweng kahare ba ka nka karolo ditsamaisong tsa mosebetsi tsa boiketsiso tse bolokehileng tse elang kemiso hloko:

- **Disebediswa tsa ho bala tsa Google Calendar** di dumella baemedi ho lekola dikhalendara le diketsahalo tse hlophisitsweng pele ba ngola mosebetsi wa ho latela.
- **Ho bapisa mabitso le ba bang teng** ho thusa ho nyalanya bankakarolo ba ketsahalo le basebedisi ba WordPress kapa mabitso a tsejwang.
- **Dikeiti tsa tumello ya motho** di emisa diketso tse hlokolosi ho fihlela mosebedisi ya dumelletsweng a di hlahloba le ho di netefatsa.
- **Direkoto tsa dikgopotso** di thibela ditsebiso tse iphetang ha mesebetsi e rerilweng e leka hape kapa e pheta.
- **Ditsebiso tsa SMS tsa TextBee** di romela melaetsa ya mongolo e hlophisitsweng feela ha mangolo a boitsebiso a SMS le ditumello tsa tsamaiso ya mosebetsi di dumelletswe.

Tsamaiso ya mosebetsi e kgothaletswang: kopa moemedi ho lokisa molaetsa kapa ketso, hlahloba kopo ya tumello, ebe o dumella ketso e amohetsweng ho tswela pele. Bakeng sa dikgopotso tse iphetang, boloka ho tlosa dipheta-pheto tsa dikgopotso ho dumelletswe hore ketsahalo kapa lebitso le tshwanang le se ke la tsebiswa kgafetsa.

---

## Ho Ikgethela Baemedi

Moemedi e mong le e mong ya ahilweng kahare a ka atoloswa kapa a nkelwa sebaka ka filter ya `gratis_ai_agent_agents`.

### Ho kenya taelo ya tsamaiso e ikgethileng ho moemedi ya seng a le teng

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Ho ngodisa moemedi e motjha

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

Moemedi e motjha o hlaha ho Se-kgethi sa Moemedi hanghang ka mora hore filter e sebetse.

### Ho tlosa moemedi ya ahilweng kahare

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
