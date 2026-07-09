---
title: Uququzelelo loMakhi weSayithi v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Ulungelelwaniso Lomakhi Wesayithi v2

Ulungelelwaniso Lomakhi Wesayithi v2 (olwaziswa kwi Gratis AI Agent v1.4.0) yinjini enika amandla ukwenziwa kweewebhusayithi ngamanyathelo amaninzi. Xa ucela i-agent ukuba "yakha iwebhusayithi yerestyu" okanye "dala ipotifoliyo enebhlog", umlungelelanisi wahlula loo njongo ikwinqanaba eliphezulu ibe **sisicwangciso** esakhiweyo, afumanise ii-plugin ezifunekayo ukuyizalisekisa, enze inyathelo ngalinye ngokulandelelana, alandele inkqubela, kwaye aphinde achache kwiimpazamo ngokuzenzekelayo.

---

## Isebenza Njani

### 1. Ukuveliswa Kwesicwangciso

Xa i-agent ifumana umyalelo wokwakha isayithi, ibiza ubuchule be-`create_site_plan` ukuvelisa **isicwangciso sesayithi** se-JSON. Isicwangciso sichaza:

- **Injongo** — into ekufuneka yenziwe sisayithi egqityiweyo
- **Izigaba** — amaqela amanyathelo alandelelanisiweyo (umz. _Ukuseta_, _Iintlobo Zomxholo_, _Uyilo_, _Umxholo_)
- **Amanyathelo** — iminxeba yobuchule nganye ngaphakathi kwesigaba ngasinye
- **Iimfuno zee-plugin** — ii-plugin ekufuneka zisebenze ukuze amanyathelo athile aqhube
- **Iindlela zokubuyela emva** — amanyathelo angamanye ukuba inyathelo eliphambili liyasilela

**Umzekelo wesicwangciso (oshunqulelweyo)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### 2. Ukufunyanwa Kwee-plugin

Phambi kokuba kuqale ukwenziwa, umlungelelanisi uhlola `plugin_requirements` zesicwangciso aze ajonge ukuba zeziphi ii-plugin esele zisebenza. Kwi-plugin ezingekhoyo, wenza oku:

1. Ukhangela kwirejistri nge-`recommend_plugin` ukufumana eyona ifanelekileyo
2. Ucela i-agent ukuba iqinisekise isincomo
3. Uqalisa ukufakela ukuba kuvunyiwe (okanye ukuba ukufakela ngokuzenzekelayo kuvuliwe kwiisetingi)

Ukusilela kokufunyanwa kwee-plugin akubulali inkqubo — umlungelelanisi uphawula amanyathelo achaphazelekayo njenge-`skipped` aze aqhubeke nesicwangciso esiseleyo.

### 3. Ukwenziwa Kwesicwangciso

Umlungelelanisi ubiza `execute_site_plan` nge-ID yesicwangciso. Ukwenziwa kuqhubeka isigaba ngesigaba, inyathelo ngenyathelo:

- **Iireferensi zamanyathelo** (isimaphambili se-`__ref:`) — amanyathelo angareferensa iziphumo zamanyathelo angaphambili. Kumzekelo ongentla, `__ref:create_menu.menu_id` isonjululwa iye kwi-`menu_id` ebuyiswe linyathelo le-`create_menu`.
- **Amanyathelo ahambelanayo** — amanyathelo ngaphakathi kwesigaba esinye angenazo izixhomekeko phakathi kwawo athunyelwa ngaxeshanye xa iflegi ye-`parallel` isetiwe.
- **Ixesha lokuphelelwa linyathelo** — inyathelo ngalinye linexesha lalo lokuphelelwa (okungagqibekanga: isetingi ye-`Ability Timeout`). Inyathelo eliphelelwe lixesha liphawulwa njenge-`failed` kwaye isicwangciso siyaqhubeka.

### 4. Ukulandela Inkqubela

Biza `get_plan_progress` nangaliphi na ixesha ukujonga imeko yokwenziwa:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

Abasebenzisi be-WP-CLI banokulandela inkqubela nge:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Ukuchacha Kwiimpazamo

Xa inyathelo lisilela, umlungelelanisi ujonga inyathelo **lokubuyela emva** elichaziweyo kwisicwangciso:

- **Indlela yokubuyela emva iyafumaneka** — inyathelo lokubuyela emva lizanywa ngoko nangoko. Ukuba liyaphumelela, ukwenziwa kuyaqhubeka. Ukuba nalo liyasilela, inyathelo liphawulwa njenge-`failed` kwaye ukwenziwa kuyaqhubeka ngenyathelo elilandelayo.
- **Akukho ndlela yokubuyela emva** — inyathelo liphawulwa njenge-`failed`. Amanyathelo angabalulekanga ayatsitywa; amanyathelo abalulekileyo (aphawulwe `required: true`) amisa isigaba sangoku aze aqalise umzamo wokuchacha kwinqanaba lesigaba.

I-agent inika ingxelo yazo zonke iintsilelo kwisishwankathelo sokugqibela sesicwangciso kwaye ingacebisa amanyathelo okulungisa ngesandla kwiimpazamo ezingachachekiyo.

---

## Ubuchule Besicwangciso Sesayithi

### `create_site_plan`

Ivelisa isicwangciso sesayithi esakhiweyo ukusuka kwinkcazo yenjongo ngolwimi lwendalo.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `goal` | string | Ewe | Inkcazo ngolwimi lwendalo yewebhusayithi efunekayo |
| `style` | string | Hayi | Ukhetho lwesimbo sokubonakala: `minimal`, `bold`, `professional`, `playful`. Okungagqibekanga: i-agent ikhetha ngokusekelwe kwinjongo |
| `plugins` | array | Hayi | Ii-slug zee-plugin zokuzibandakanya kwisicwangciso. Umlungelelanisi wongeza ii-plugin ezifunekayo ngokuzenzekelayo. |
| `dry_run` | boolean | Hayi | Ukuba `true`, ibuyisa i-JSON yesicwangciso ngaphandle kokuyigcina okanye ukuyenza. Okungagqibekanga ngu-`false` |

**Ibuyisa** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Iqalisa ukwenza isicwangciso sesayithi esiveliswe ngaphambili.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `plan_id` | string | Ewe | I-ID yesicwangciso esiza kwenziwa |
| `auto_install_plugins` | boolean | Hayi | Ukuba `true`, ifakela ngokuzenzekelayo ii-plugin ezifunekayo ngaphandle kokuqinisekisa. Okungagqibekanga ngu-`false` |
| `max_retries` | integer | Hayi | Inani lamaxesha okuzama kwakhona inyathelo elisileleyo phambi kokuqhubeka. Okungagqibekanga ngu-`1` |

**Ibuyisa** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Ibuyisa imeko yangoku yokwenziwa kwesicwangciso sesayithi.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `plan_id` | string | Ewe | I-ID yesicwangciso ekufuneka kubuzwe ngayo |

**Ibuyisa** into yenkqubela echazwe ku-[Ukulandela Inkqubela](#4-progress-tracking) ngentla.

---

### `handle_plan_error`

Isombulula ngesandla inyathelo elisileleyo kwaye iqhubekise ukwenziwa kwesicwangciso ukusuka kwinyathelo elilandelayo. Sebenzisa oku xa ukuchacha ngokuzenzekelayo bekungenakwenzeka kwaye ufuna ukungenelela.

**Iiparamitha**

| Iparamitha | Uhlobo | Iyafuneka | Inkcazo |
|---|---|---|---|
| `plan_id` | string | Ewe | I-ID yesicwangciso |
| `step_id` | string | Ewe | I-ID yenyathelo elisileleyo |
| `resolution` | string | Ewe | Enye ye-`skip` (tsiba kwaye uqhubeke), `retry` (zama inyathelo kwakhona ngoko nangoko), okanye `mark_done` (lithathe njengeliphumeleleyo ngaphandle kokuliphinda) |

**Ibuyisa** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Ukuthelekisa i-v1 ne-v2

| Uphawu | v1 | v2 |
|---|---|---|
| Izicwangciso zezigaba ezininzi | Hayi | Ewe |
| Iireferensi zeziphumo zamanyathelo (`__ref:`) | Hayi | Ewe |
| Ukufunyanwa kwee-plugin | Ngesandla | Ngokuzenzekelayo |
| I-API yokulandela inkqubela | Hayi | Ewe |
| Ukuchacha kwiimpazamo | Silela-uze-uyeke | Ukubuyela emva + qhubeka |
| Ukwenziwa kwamanyathelo ngokuhambelana | Hayi | Ewe (ukuvulwa ngokhetho kwisigaba ngasinye) |
| Imiyalelo yesicwangciso se-WP-CLI | Hayi | Ewe |
| Udibaniso lwebenchmark | Hayi | Ewe (`q-restaurant-website`) |

---

## Imiyalelo Yesicwangciso se-WP-CLI

### `wp gratis-ai-agent plan create`

Ivelisa isicwangciso sesayithi ukusuka kwinkcazo yenjongo.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Yenza isicwangciso esiveliswe ngaphambili.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Ibonisa inkqubela yangoku yesicwangciso esenziwayo okanye esigqityiweyo.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Idwelisa zonke izicwangciso zesayithi (ezisalindileyo, eziqhubekayo, nezegqityiweyo).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Iseta kwakhona isicwangciso esisileleyo sibe `pending` ukuze siphinde senziwe ukusuka ekuqaleni.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
