---
title: WP-CLI лавлагаа
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI лавлагаа

Gratis AI Agent нь агентийг жишиг сорилтоор шалгах, чадваруудыг удирдах, мөн тушаалын мөрөөс агентын төлөвийг асуухад зориулсан `wp gratis-ai-agent` тушаалын бүлэгтэй ирдэг. Бүх тушаалд WP-CLI 2.0 эсвэл түүнээс дээш хувилбар шаардлагатай.

## Суулгалт

Plugin идэвхтэй үед WP-CLI тушаалууд автоматаар бүртгэгдэнэ. Дараахаар шалгана уу:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark`

Agent Capabilities жишиг сорилтын багцыг ажиллуулна — энэ нь чадварын бүх хүрээг ажиллуулж шалгах цогц, олон алхамт prompt-уудын багц юм. Үүнийг загварын гүйцэтгэлийг үнэлэх, AI provider-уудыг харьцуулах, эсвэл production-д байрлуулахаас өмнө чадварын багцуудыг баталгаажуулахад ашиглана.

### Товч бүтэц

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Сонголтууд

| Сонголт | Тайлбар |
|---|---|
| `--question=<id>` | Бүрэн багцын оронд ID-аар нь нэг жишиг сорилтын асуултыг ажиллуулна |
| `--provider=<provider>` | Энэ ажиллуулалтад тохируулсан AI provider-ыг дарж өөрчилнө (жишээ нь `anthropic`, `openai`) |
| `--model=<model>` | Энэ ажиллуулалтад тохируулсан загварыг дарж өөрчилнө (жишээ нь `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Гаралтын формат: `table` (анхдагч), `json`, `csv` |
| `--save` | Түүхэн харьцуулалтад зориулж жишиг сорилтын үр дүнг өгөгдлийн санд хадгална |

### Жишээнүүд

Одоогийн provider болон загвараар бүрэн жишиг сорилтын багцыг ажиллуулах:

```bash
wp gratis-ai-agent benchmark
```

Нэг асуултыг (`q-restaurant-website`) ажиллуулж JSON хэлбэрээр гаргах:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Тодорхой загвар дээр ажиллуулж үр дүнг хадгалах:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Гаралт

Жишиг сорилт нь асуулт бүрт дараах багануудтай нэг мөр гаргана:

| Багана | Тайлбар |
|---|---|
| `ID` | Асуултын танигч |
| `Description` | Жишиг сорилтын нөхцөл байдлын богино хураангуй |
| `Score` | Тэнцсэн/унасан эсвэл тоон оноо (0–100) |
| `Abilities Used` | Дуудагдсан чадваруудын таслалаар тусгаарласан жагсаалт |
| `Tokens` | Нийт хэрэглэсэн token |
| `Duration` | Секундээр хэмжсэн бодит өнгөрсөн хугацаа |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Жишиг сорилтын асуултууд

Анхдагч багцад дараах зүйлс багтана:

| ID | Нөхцөл байдал |
|---|---|
| `q-portfolio-site` | Project Category taxonomy бүхий Portfolio CPT үүсгэж, block pattern бүртгэх |
| `q-restaurant-website` | Цэсний CPT, захиалгын маягт, navigation бүхий бүрэн рестораны вебсайт бүтээх |
| `q-dark-mode-theme` | Харанхуй горимын дизайны preset хэрэгжүүлж, брэндийн өнгөнүүдийг оруулах |
| `q-nav-builder` | Дотор нь nested dropdown бүхий дөрвөн зүйлтэй үндсэн navigation цэс үүсгэх |
| `q-options-roundtrip` | WordPress options-ийн багцыг уншиж, өөрчилж, сэргээх |
| `q-ability-install` | Тайлбарласан хэрэглээний тохиолдолд хамгийн тохиромжтой чадварын багцыг илрүүлж суулгах |

Нэмэлт асуултуудыг `gratis_ai_agent_benchmark_questions` filter-ээр бүртгэж болно.

---

## `wp gratis-ai-agent abilities`

Суулгасан чадварууд болон чадварын багцуудыг удирдана.

### `wp gratis-ai-agent abilities list`

Бүртгэгдсэн бүх чадвар, тэдгээрийн эх сурвалж (үндсэн эсвэл багц), мөн одоогийн төлөвийг жагсаана.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Сонголтууд**

| Сонголт | Тайлбар |
|---|---|
| `--format=<format>` | Гаралтын формат: `table` (анхдагч), `json`, `csv` |

**Жишээ гаралт**

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

### `wp gratis-ai-agent abilities install`

Registry-ээс чадварын багцыг татаж авч идэвхжүүлнэ.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Аргументууд**

| Аргумент | Тайлбар |
|---|---|
| `<slug>` | Чадварын багцын plugin slug, жишээ нь `gratis-ai-agent-woocommerce` |

**Жишээ**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable`

Багцыг устгахгүйгээр тодорхой чадварыг идэвхгүй болгоно. Тухайн site дээр агентын хамрах хүрээг хязгаарлахад хэрэгтэй.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Жишээ**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable`

Өмнө нь идэвхгүй болгосон чадварыг дахин идэвхжүүлнэ.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status`

Одоогийн агентын тохиргоо болон холболтын төлөвийг харуулна.

```bash
wp gratis-ai-agent status
```

**Жишээ гаралт**

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

## `wp gratis-ai-agent logs`

Debug log-оос сүүлийн үеийн агентын үйл ажиллагааг харуулна.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Сонголтууд**

| Сонголт | Тайлбар |
|---|---|
| `--last=<n>` | Сүүлийн N лог бичлэгийг харуулна. Анхдагч нь `50` |
| `--level=<level>` | Түвшнээр шүүнэ: `info`, `warning`, `error` |
| `--ability=<ability>` | Чадварын нэрээр шүүнэ |

**Жишээ**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset`

Агентын төлөвийг дахин тохируулна: оруулсан CSS-ийг цэвэрлэж, агентаар бүртгэгдсэн CPT болон таксономиудыг устгаж, глобал хэв маягуудыг дахин тохируулж, агентын сонголтуудын кэшийг хоосолно. Өргөтгөл эсвэл түүний тохиргоог устгахгүй.

```bash
wp gratis-ai-agent reset [--yes]
```

Баталгаажуулах асуулгыг алгасахын тулд `--yes` нэмнэ үү.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Гаралтын кодууд

Бүх команд амжилттай үед `0` кодоор гарна. Тэгээс ялгаатай гаралтын кодууд:

| Код | Утга |
|---|---|
| `1` | Ерөнхий алдаа (алдааны мессежийг үзнэ үү) |
| `2` | Үйлчилгээ үзүүлэгчтэй холболтын алдаа |
| `3` | Чадвар олдсонгүй |
| `4` | Benchmark асуулт олдсонгүй |
