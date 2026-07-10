---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0 ile tanıtıldı) çok adımlı web sitesi oluşturma sürecini yöneten ana motordur. Agent'a "bir restoran web sitesi oluştur" veya "bir blog'lu portfolyo yap" dediğinizde, orkestratör bu genel hedefi yapılandırılmış bir **plan** haline getirir, bunu gerçekleştirmek için gereken plugin'leri bulur, her adımı sırayla çalıştırır, ilerlemeyi takip eder ve hatalardan bağımsız olarak kurtulur.

---

## Nasıl Çalışır {#how-it-works}

### 1. Plan Oluşturma {#1-plan-generation}

Agent, bir site oluşturma talimatı aldığında, bir JSON **site planı** üretmek için `create_site_plan` yeteneğini çağırır. Plan şunları tanımlar:

- **Goal (Amaç)** — bitmiş sitenin ne yapması gerektiği
- **Phases (Aşamalar)** — sıralı adım grupları (Örn: _Kurulum_, _İçerik Tipleri_, _Tasarım_, _İçerik_)
- **Steps (Adımlar)** — her aşama içindeki bireysel yetenek çağrıları
- **Plugin requirements (Plugin gereksinimleri)** — belirli adımların çalışması için aktif olması gereken plugin'ler
- **Fallbacks (Geri Dönüşler)** — birincil bir adım başarısız olursa alternatif adımlar

**Örnek plan (kısaltılmış)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Online menü, rezervasyon formu ve iletişim sayfası içeren bir restoran web sitesi oluştur",
  "phases": [
    {
      "id": "setup",
      "label": "Kurulum",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menü Öğesi", "plural_label": "Menü Öğeleri" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menü Bölümü", "plural_label": "Menü Bölümleri", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Tasarım",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigasyon",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Ana Navigasyon", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menü", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Masa Ayırt", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Rezervasyon ve iletişim formları için gerekli" }
  ]
}
```

### 2. Plugin Keşfi {#2-plugin-discovery}

Yürütme başlamadan önce, orkestratör planın `plugin_requirements` kısmını tarar ve hangi plugin'lerin zaten aktif olduğunu kontrol eder. Eksik plugin'ler için şunları yapar:

1. En iyi eşleşmeyi bulmak için `recommend_plugin` aracılığıyla kayıtları tarar
2. Agent'tan öneriyi onaylaması için talepte bulunur
3. Onaylanırsa (veya ayarlarda otomatik kurulum etkinse) kurulumu tetikler

Plugin keşfi başarısız olursa bu kritik bir hata değildir — orkestratör etkilenen adımları `skipped` (atlandı) olarak işaretler ve planın geri kalanıyla devam eder.

### 3. Plan Yürütme {#3-plan-execution}

Orkestratör, plan ID'si ile `execute_site_plan` çağrısını yapar. Yürütme aşama aşama, adım adım ilerler:

- **Step references (Adım referansları)** (`__ref:` ön eki) — adımlar önceki adımların çıktılarına referans verebilir. Yukarıdaki örnekte, `__ref:create_menu.menu_id`, `create_menu` adımından dönen `menu_id` değerine çözümlenir.
- **Parallel steps (Paralel adımlar)** — aynı aşama içindeki ve birbirine bağımlılığı olmayan adımlar, `parallel` bayrağı ayarlandığında eş zamanlı olarak gönderilir.
- **Step timeout (Adım zaman aşımı)** — her adımın ayrı bir zaman aşımı süresi vardır (varsayılan: `Ability Timeout` ayarı). Zaman aşımına uğrayan bir adım `failed` (başarısız) olarak işaretlenir ve plan devam eder.

### 4. İlerleme Takibi {#4-progress-tracking}

Yürütme durumunu kontrol etmek için istediğiniz zaman `get_plan_progress` çağrısını yapın:

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

WP-CLI kullanıcıları ilerlemeyi şu komutla izleyebilir:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Hata Kurtarma {#5-error-recovery}

Bir adım başarısız olduğunda, orkestratör planda tanımlanmış bir **fallback** (geri dönüş) adımı arar:

- **Fallback mevcut** — geri dönüş adımı hemen denenir. Başarılı olursa, yürütme devam eder. Eğer bu da başarısız olursa, adım `failed` olarak işaretlenir ve yürütme bir sonraki adımla devam eder.
- **Fallback yok** — Adım `failed` olarak işaretlenir. Kritik olmayan adımlar atlanır; kritik adımlar ( `required: true` olarak işaretlenmiş) mevcut aşamayı durdurur ve aşama düzeyinde bir kurtarma denemesi başlatır.

Agent, tüm başarısızlıkları son plan özetinde raporlar ve kurtarılamayan hatalar için manuel düzeltme adımları önerebilir.

---

## Site Plan Yetenekleri {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Doğal dil hedef açıklamasından yapılandırılmış bir site planı oluşturur.

**Parametreler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | İstenen web sitesinin doğal dil açıklaması |
| `style` | string | No | Görsel stil tercihi: `minimal`, `bold`, `professional`, `playful`. Varsayılan: agent, hedefe göre seçer |
| `plugins` | array | No | Plana dahil edilecek plugin slug'ları. Orkestratör gerekli plugin'leri otomatik ekler. |
| `dry_run` | boolean | No | `true` ise, planı kaydetmeden veya çalıştırmadan JSON olarak döndürür. Varsayılan `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Daha önce oluşturulmuş bir site planını çalıştırmaya başlar.

**Parametreler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Çalıştırılacak planın ID'si |
| `auto_install_plugins` | boolean | No | `true` ise, onay istemeden gerekli plugin'leri otomatik kurar. Varsayılan `false` |
| `max_retries` | integer | No | Devam etmeden önce başarısız bir adımı deneme sayısı. Varsayılan `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Bir site planının mevcut yürütme durumunu döndürür.

**Parametreler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Sorgulanacak Plan ID'si |

**Returns** Yukarıdaki [İlerleme Takibi](#4-progress-tracking) bölümünde açıklanan ilerleme nesnesi.

---

### `handle_plan_error` {#handleplanerror}

Başarısız bir adımı manuel olarak çözer ve plan yürütmesini bir sonraki adımdan devam ettirir. Otomatik kurtarma mümkün olmadığında ve müdahale etmek istediğinizde kullanılır.

**Parametreler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID'si |
| `step_id` | string | Yes | Başarısız olan adımın ID'si |
| `resolution` | string | Yes | `skip` (atla ve devam et), `retry` (adı hemen tekrar dene) veya `mark_done` (yeniden çalıştırmadan başarılı say) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 ve v2 Karşılaştırması {#comparing-v1-and-v2}

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | No | Yes |
| Step output references (`__ref:`) | No | Yes |
| Plugin discovery | Manual | Automatic |
| Progress tracking API | No | Yes |
| Error recovery | Fail-and-stop | Fallback + continue |
| Parallel step execution | No | Yes (opt-in per phase) |
| WP-CLI plan commands | No | Yes |
| Benchmark integration | No | Yes (`q-restaurant-website`) |

---

## WP-CLI Plan Komutları {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Bir hedef açıklamasından site planı oluşturur.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Daha önce oluşturulmuş bir planı çalıştırır.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Çalışan veya tamamlanmış bir planın mevcut ilerlemesini gösterir.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Tüm site planlarını (beklemede, devam ediyor ve tamamlanmış) listeler.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Başarısız olan bir planı `pending` (beklemede) durumuna sıfırlar, böylece baştan çalıştırılabilir.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
