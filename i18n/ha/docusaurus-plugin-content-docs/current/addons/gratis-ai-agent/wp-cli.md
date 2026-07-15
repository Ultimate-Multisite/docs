---
title: Bayanan WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Manazartar WP-CLI

Gratis AI Agent yana zuwa da dangin umarni na `wp gratis-ai-agent` don gwada aikin agent, sarrafa iyawa, da tambayar matsayin agent daga layin umarni. Duk umarni suna buƙatar WP-CLI 2.0 ko sama da haka.

## Shigarwa {#installation}

Ana rajistar umarnin WP-CLI ta atomatik lokacin da plugin yake aiki. Tabbatar da:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Yana gudanar da tarin gwajin ƙwarewar Agent — jerin tambayoyi masu rikitarwa, masu matakai da yawa waɗanda ke gwada dukkan faɗin iyawa. Yi amfani da wannan don kimanta aikin model, kwatanta masu samar da AI, ko tabbatar da fakitin iyawa kafin turawa zuwa samarwa.

### Taƙaitaccen Amfani {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Zaɓuɓɓuka {#options}

| Zaɓi | Bayani |
|---|---|
| `--question=<id>` | Gudanar da tambayar benchmark guda ɗaya ta ID maimakon cikakken tarin |
| `--provider=<provider>` | Sauya mai samar da AI da aka saita don wannan gudu (misali `anthropic`, `openai`) |
| `--model=<model>` | Sauya model da aka saita don wannan gudu (misali `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Tsarin fitarwa: `table` (tsoho), `json`, `csv` |
| `--save` | Ajiye sakamakon benchmark zuwa database don kwatancen tarihi |

### Misalai {#examples}

Gudanar da cikakken tarin benchmark da provider da model na yanzu:

```bash
wp gratis-ai-agent benchmark
```

Gudanar da tambaya guda ɗaya (`q-restaurant-website`) kuma a fitar da ita a matsayin JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Gudanar da shi kan takamaiman model kuma ajiye sakamako:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Fitarwa {#output}

Benchmark yana fitar da jere ɗaya ga kowace tambaya tare da ginshiƙai masu zuwa:

| Ginshiƙi | Bayani |
|---|---|
| `ID` | Mai gano tambaya |
| `Description` | Taƙaitaccen bayanin yanayin benchmark |
| `Score` | Nasara/kasa ko maki na lamba (0–100) |
| `Abilities Used` | Jerin iyawa da aka kira, an raba su da waƙafi |
| `Tokens` | Jimillar tokens da aka cinye |
| `Duration` | Lokacin agogon bango a cikin daƙiƙa |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Tambayoyin Benchmark {#benchmark-questions}

Tarin tsoho ya ƙunshi:

| ID | Yanayi |
|---|---|
| `q-portfolio-site` | Ƙirƙiri Portfolio CPT tare da taxonomy na Project Category kuma a rajistar block pattern |
| `q-restaurant-website` | Gina cikakken gidan yanar gizon gidan abinci tare da menu CPT, fom ɗin booking, da kewayawa |
| `q-dark-mode-theme` | Aiwatar da preset na ƙirar dark-mode kuma a saka launukan alama |
| `q-nav-builder` | Ƙirƙiri menu na kewayawa na farko mai abubuwa huɗu tare da dropdown mai gida |
| `q-options-roundtrip` | Karanta, gyara, kuma maido da saitin zaɓuɓɓukan WordPress |
| `q-ability-install` | Gano kuma shigar da fakitin iyawa mafi dacewa ga yanayin amfani da aka bayyana |

Ana iya rajistar ƙarin tambayoyi ta hanyar filter na `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Yana sarrafa iyawa da fakitin iyawa da aka shigar.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Yana jera duk iyawa da aka rajista, tushensu (core ko pack), da matsayin su na yanzu.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Zaɓuɓɓuka**

| Zaɓi | Bayani |
|---|---|
| `--format=<format>` | Tsarin fitarwa: `table` (tsoho), `json`, `csv` |

**Misalin fitarwa**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

Yana sauke kuma kunna fakitin iyawa daga registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Hujjoji**

| Hujja | Bayani |
|---|---|
| `<slug>` | Plugin slug na fakitin iyawa, misali `gratis-ai-agent-woocommerce` |

**Misali**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Yana kashe takamaiman iyawa ba tare da cire pack ba. Yana da amfani don takaita iyakar aikin agent a kan wani site.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Misali**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Yana sake kunna iyawa da aka kashe a baya.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Yana nuna saitin agent na yanzu da matsayin haɗi.

```bash
wp gratis-ai-agent status
```

**Misalin fitarwa**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

Yana nuna ayyukan agent na kwanan nan daga debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Zaɓuɓɓuka**

| Zaɓi | Bayani |
|---|---|
| `--last=<n>` | Nuna shigarwar log N na ƙarshe. Tsoho `50` |
| `--level=<level>` | Tace bisa mataki: `info`, `warning`, `error` |
| `--ability=<ability>` | Tace bisa sunan ability |

**Misali**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Yana sake saita yanayin agent: yana share CSS da aka saka, yana cire CPTs da taxonomies da agent ya yi rajista, yana sake saita salon duniya, kuma yana kwashe cache na zaɓuɓɓukan agent. Ba ya cire plugin ko saitunansa.

```bash
wp gratis-ai-agent reset [--yes]
```

Ƙara `--yes` don tsallake tambayar tabbatarwa.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Lambobin Fita {#exit-codes}

Dukkan umarni suna fita da `0` idan an yi nasara. Lambobin fita marasa sifili:

| Lamba | Ma’ana |
|---|---|
| `1` | Kuskure gaba ɗaya (duba saƙon kuskure) |
| `2` | Rashin haɗin provider |
| `3` | Ba a samo ability ba |
| `4` | Ba a samo tambayar benchmark ba |
