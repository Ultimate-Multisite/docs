---
title: Ukuhlelwa Kokwakhiwa Kwesayithi v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2

Site Builder Orchestration v2 (eyethulwe ku-Gratis AI Agent v1.4.0) iyinjini enika amandla ukwakhiwa kwamawebhusayithi okunezinyathelo eziningi. Lapho ucela agent ukuthi "yakha iwebhusayithi yokudlela" noma "dala iphothifoliyo ene-blog", orchestrator ihlukanisa lowo mgomo osezingeni eliphezulu ube **uhlelo** oluhlelekile, ithole ama-plugin adingekayo ukuwufeza, isebenzise isinyathelo ngasinye ngokulandelana, ilandelele inqubekela phambili, futhi ilulame emaphutheni ngokuzimela.

---

## Indlela Okusebenza Ngayo {#how-it-works}

### 1. Ukwakhiwa Kohlelo {#1-plan-generation}

Lapho agent ithola umyalelo wokwakha isayithi, ibiza ikhono le-`create_site_plan` ukuze ikhiqize **uhlelo lwesayithi** lwe-JSON. Uhlelo luchaza:

- **Umgomo** — lokho isayithi eliqediwe okufanele likwenze
- **Izigaba** — amaqembu ezinyathelo ahlelwe ngokulandelana (isb. _Ukusetha_, _Izinhlobo Zokuqukethwe_, _Idizayini_, _Okuqukethwe_)
- **Izinyathelo** — ukubizwa kwamakhono ngakunye ngaphakathi kwesigaba ngasinye
- **Izidingo zama-plugin** — ama-plugin okufanele asebenze ukuze izinyathelo ezithile ziqalise
- **Ezinye izindlela** — ezinye izinyathelo uma isinyathelo esiyinhloko sehluleka

**Isibonelo sohlelo (sifinyeziwe)**

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

### 2. Ukutholwa Kwama-plugin {#2-plugin-discovery}

Ngaphambi kokuthi ukuqaliswa kuqale, orchestrator iskena ama-`plugin_requirements` ohlelo futhi ihlole ukuthi yimaphi ama-plugin asevele esebenza. Kuma-plugin angekho, yona:

1. Isesha irejista nge-`recommend_plugin` ukuze ithole okufanelana kakhulu
2. Icela agent ukuthi iqinisekise isincomo
3. Iqalisa ukufakwa uma kugunyaziwe (noma uma ukufaka ngokuzenzakalelayo kuvuliwe kuzilungiselelo)

Ukwehluleka kokutholwa kwama-plugin akubulali — orchestrator imaka izinyathelo ezithintekile njenge-`skipped` bese iqhubeka nengxenye esele yohlelo.

### 3. Ukuqaliswa Kohlelo {#3-plan-execution}

Orchestrator ibiza `execute_site_plan` nge-ID yohlelo. Ukuqaliswa kuqhubeka isigaba ngesigaba, isinyathelo ngesinyathelo:

- **Izinkomba zezinyathelo** (isandiso esithi `__ref:`) — izinyathelo zingabhekisela kokuphumayo ezinyathelweni zangaphambilini. Esibonelweni esingenhla, `__ref:create_menu.menu_id` ixazululwa ibe yi-`menu_id` ebuyiswe isinyathelo se-`create_menu`.
- **Izinyathelo ezihambisana ngesikhathi esisodwa** — izinyathelo ngaphakathi kwesigaba esifanayo ezingenabo ubudlelwano bokuthembelana zithunyelwa ngesikhathi esisodwa lapho ifulegi le-`parallel` lisethiwe.
- **Ukuphelelwa isikhathi kwesinyathelo** — isinyathelo ngasinye sinesikhathi saso sokuphelelwa (okuzenzakalelayo: isilungiselelo se-`Ability Timeout`). Isinyathelo esiphelelwe isikhathi simakwa njenge-`failed` bese uhlelo luqhubeka.

### 4. Ukulandelela Inqubekela Phambili {#4-progress-tracking}

Biza `get_plan_progress` nganoma yisiphi isikhathi ukuze uhlole isimo sokuqaliswa:

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

Abasebenzisi be-WP-CLI bangalandelela inqubekela phambili nge:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Ukululama Emaphutheni {#5-error-recovery}

Lapho isinyathelo sehluleka, orchestrator ihlola **esinye isinyathelo** esichazwe ohlelweni:

- **Enye indlela iyatholakala** — esinye isinyathelo siyazanywa ngokushesha. Uma siphumelela, ukuqaliswa kuyaqhubeka. Uma naso sehluleka, isinyathelo simakwa njenge-`failed` bese ukuqaliswa kuqhubeka ngesinyathelo esilandelayo.
- **Ayikho enye indlela** — isinyathelo simakwa njenge-`failed`. Izinyathelo ezingabalulekile ziyeqiwa; izinyathelo ezibalulekile (ezimakwe `required: true`) zimisa isigaba samanje futhi ziqalise umzamo wokululama ezingeni lesigaba.

Agent ibika konke ukwehluleka esifingqweni sokugcina sohlelo futhi ingase iphakamise izinyathelo zokulungisa mathupha zamaphutha angalungiseki.

---

## Amakhono Ohlelo Lwesayithi {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Ikhiqiza uhlelo lwesayithi oluhlelekile kusuka encazelweni yomgomo yolimi lwemvelo.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `goal` | string | Yebo | Incazelo yolimi lwemvelo yewebhusayithi efiswayo |
| `style` | string | Cha | Okuncanyelwayo kwesitayela sokubukeka: `minimal`, `bold`, `professional`, `playful`. Okuzenzakalelayo: agent ikhetha ngokusekelwe emgomweni |
| `plugins` | array | Cha | Ama-slug ama-plugin azofakwa ohlelweni. Orchestrator yengeza ama-plugin adingekayo ngokuzenzakalelayo. |
| `dry_run` | boolean | Cha | Uma `true`, ibuyisa i-JSON yohlelo ngaphandle kokuyilondoloza noma ukuyiqalisa. Okuzenzakalelayo `false` |

**Kubuyisa** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Iqala ukuqaliswa kohlelo lwesayithi olwakhiwe ngaphambilini.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `plan_id` | string | Yebo | I-ID yohlelo oluzoqaliswa |
| `auto_install_plugins` | boolean | Cha | Uma `true`, ifaka ama-plugin adingekayo ngokuzenzakalelayo ngaphandle kokuqinisekisa. Okuzenzakalelayo `false` |
| `max_retries` | integer | Cha | Inani lezikhathi zokuzama futhi isinyathelo esihlulekile ngaphambi kokuqhubeka. Okuzenzakalelayo `1` |

**Kubuyisa** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Ibuyisa isimo samanje sokuqaliswa kohlelo lwesayithi.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `plan_id` | string | Yebo | I-ID yohlelo ezobuzwa |

**Kubuyisa** into yenqubekela phambili echazwe ku-[Ukulandelela Inqubekela Phambili](#4-progress-tracking) ngenhla.

---

### `handle_plan_error` {#handleplanerror}

Ixazulula mathupha isinyathelo esihlulekile bese iqhubeka nokuqaliswa kohlelo kusukela esinyathelweni esilandelayo. Sebenzisa lokhu lapho ukululama okuzenzakalelayo bekungenzeki futhi ufuna ukungenelela.

**Amapharamitha**

| Ipharamitha | Uhlobo | Kuyadingeka | Incazelo |
|---|---|---|---|
| `plan_id` | string | Yebo | I-ID yohlelo |
| `step_id` | string | Yebo | I-ID yesinyathelo esihlulekile |
| `resolution` | string | Yebo | Okukodwa kokuthi `skip` (yeqa bese uqhubeka), `retry` (zama isinyathelo futhi ngokushesha), noma `mark_done` (phatha njengokuphumelele ngaphandle kokuphinda usiqalise) |

**Kubuyisa** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Ukuqhathanisa i-v1 ne-v2 {#comparing-v1-and-v2}

| Isici | v1 | v2 |
|---|---|---|
| Izinhlelo ezinezigaba eziningi | Cha | Yebo |
| Izinkomba zokuphumayo kwesinyathelo (`__ref:`) | Cha | Yebo |
| Ukutholwa kwama-plugin | Okwenziwa mathupha | Okuzenzakalelayo |
| API yokulandelela inqubekela phambili | Cha | Yebo |
| Ukululama emaphutheni | Hluleka-bese-uma | Enye indlela + qhubeka |
| Ukuqaliswa kwezinyathelo ngesikhathi esisodwa | Cha | Yebo (kuyakhethwa ngesigaba ngasinye) |
| Imiyalo yohlelo lwe-WP-CLI | Cha | Yebo |
| Ukuhlanganiswa kwe-benchmark | Cha | Yebo (`q-restaurant-website`) |

---

## Imiyalo Yohlelo lwe-WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Ikhiqiza uhlelo lwesayithi kusuka encazelweni yomgomo.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Iqalisa uhlelo olwakhiwe ngaphambilini.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Ibonisa inqubekela phambili yamanje yohlelo oluqaliswayo noma oluqediwe.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Ibala zonke izinhlelo zamasayithi (ezisalindile, eziqhubekayo, neziqediwe).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Isetha kabusha uhlelo oluhlulekile lube `pending` ukuze luqaliswe futhi kusukela ekuqaleni.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
