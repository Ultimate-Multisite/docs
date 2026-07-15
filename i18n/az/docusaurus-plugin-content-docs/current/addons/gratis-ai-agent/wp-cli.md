---
title: WP-CLI Referansı
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# WP-CLI Referansı

Gratis AI Agent, agent-i qiymətləndirmək, imkanları idarə etmək və agent statusunu komanda xəttindən sorğulamaq üçün `wp gratis-ai-agent` komanda ailəsini təqdim edir. Bütün komandalar WP-CLI 2.0 və ya yuxarı versiya tələb edir.

## Qurulması {#installation}

WP-CLI komandaları plugin aktiv olduqda avtomatik olaraq qeyd olunur. Aşağıdakı komanda ilə yoxlayın:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Agent İmkanları qiymətləndirmə dəstini işə salır — bu, bütün imkanlar sahəsini yoxlayan mürəkkəb, çoxaddımlı sorğulardan ibarətdir. Bunu model performansını qiymətləndirmək, AI provayderlərini müqayisə etmək və ya istehsal mühitinə yerləşdirməzdən əvvəl imkan paketlərini yoxlamaq üçün istifadə edin.

### Sinopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Seçimlər {#options}

| Option | Description |
|---|---|
| `--question=<id>` | Bütün dəst yerinə, ID ilə tək bir qiymətləndirmə sualını işə salır |
| `--provider=<provider>` | Bu işləmə üçün konfiqurasiya edilmiş AI provayderini dəyişir (məsələn, `anthropic`, `openai`) |
| `--model=<model>` | Bu işləmə üçün konfiqurasiya edilmiş modeli dəyişir (məsələn, `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Çıxış formatı: `table` (default), `json`, `csv` |
| `--save` | Tarixi müqayisə üçün qiymətləndirmə nəticələrini verilənlər bazasına yadda saxlayır |

### Nümunələr {#examples}

Cari provayder və model ilə bütün qiymətləndirmə dəstini işə salın:

```bash
wp gratis-ai-agent benchmark
```

Tək bir sualı (`q-restaurant-website`) işə salın və JSON formatında çıxış alın:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Müəyyən bir modelə qarşı işə salın və nəticələri yadda saxlayın:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Çıxış {#output}

Qiymətləndirmə hər sual üçün bir sətir, aşağıdakı sütunlarla birlikdə çıxış verir:

| Column | Description |
|---|---|
| `ID` | Sual identifikatoru |
| `Description` | Qiymətləndirmə ssenarisinin qısa xülasəsi |
| `Score` | Keçdi/başarılmadı və ya rəqəmsal bal (0–100) |
| `Abilities Used` | Çağırılan imkanların vergüllə ayrılmış siyahısı |
| `Tokens` | İstifadə olunan ümumi token sayı |
| `Duration` | Saniyələrlə görünən vaxt |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Qiymətləndirmə Sualları {#benchmark-questions}

Default dəst aşağıdakıları əhatə edir:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Bir Layihə Kateqoriyası taksonomiyası ilə Portfolyo CPT yaratmaq və bir blok pattern-i qeyd etmək |
| `q-restaurant-website` | Menyu CPT, rezervasiya forması və naviqasiya ilə tam restoran veb saytı yaratmaq |
| `q-dark-mode-theme` | Tünd rejim dizayn preset-i tətbiq etmək və brend rənglərini yerləşdirmək |
| `q-nav-builder` | Yuva (nested) dropdown ilə dörd ədəd əsas naviqasiya menyusu yaratmaq |
| `q-options-roundtrip` | Bir sıra WordPress options-ı oxumaq, dəyişdirmək və bərpa etmək |
| `q-ability-install` | Təsvir edilmiş istifadə vəziyyəti üçün ən uyğun imkan paketini tapmaq və quraşdırmaq |

Əlavə suallar `gratis_ai_agent_benchmark_questions` filtri vasitəsilə qeyd edilə bilər.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Qurulmuş imkanları və imkan paketlərini idarə edir.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Qeyd edilmiş bütün imkanları, onların mənbəyini (core yoxsa pack) və cari statusunu siyahıya alır.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Seçimlər**

| Option | Description |
|---|---|
| `--format=<format>` | Çıxış formatı: `table` (default), `json`, `csv` |

**Nümunə çıxışı**

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

Bir imkan paketini kataloqdan yükləyir və aktivləşdirir.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumentlər**

| Argument | Description |
|---|---|
| `<slug>` | İmkan paketinin plugin slug-ı, məsələn, `gratis-ai-agent-woocommerce` |

**Nümunə**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Bir imkan paketini silmədən müəyyən bir imkanı deaktiv edir. Bu, agentin verilən saytdakı əhatəsini məhdudlaşdırmaq üçün faydalıdır.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Nümunə**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Əvvəllər deaktiv edilmiş bir imkanı yenidən aktivləşdirir.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Cari agent konfiqurasiyasını və bağlantı statusunu göstərir.

```bash
wp gratis-ai-agent status
```

**Nümunə çıxışı**

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

Debug log-dan agentin son fəaliyyətini göstərir.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Seçimlər**

| Option | Description |
|---|---|
| `--last=<n>` | Son N log qeydini göstərir. Default `50` |
| `--level=<level>` | Filtirləmə səviyyəsinə görə: `info`, `warning`, `error` |
| `--ability=<ability>` | İmkan adına görə filtrləmə |

**Nümunə**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Agent vəziyyətini sıfırlayır: yerləşdirilmiş CSS-ni təmizləyir, agent tərəfindən qeyd edilmiş CPT və taksonomiyaları silir, global stilləri sıfırlayır və agentin options cache-ini boşaldır. Plugin və ya onun ayarlarını silmir.

```bash
wp gratis-ai-agent reset [--yes]
```

Təsdiq sorğusunu atlamaq üçün `--yes` əlavə edin.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Çıxış Kodları {#exit-codes}

Bütün komandalar uğurlu olduqda `0` ilə çıxır. Sıfırdan fərqli çıxış kodları:

| Code | Meaning |
|---|---|
| `1` | Ümumi xəta (xəta mesajına baxın) |
| `2` | Provayder bağlantı uğursuzluğu |
| `3` | İmkan tapılmadı |
| `4` | Qiymətləndirmə sualı tapılmadı |
