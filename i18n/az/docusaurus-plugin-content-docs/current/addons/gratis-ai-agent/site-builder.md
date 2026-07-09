---
title: Site Builder Orchestration v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (Gratis AI Agent v1.4.0 ilə təqdim edildi) çoxaddımlı veb sayt yaratma prosesini idarə edən mühərrikdir. Agentdən "restoran veb saytı qur" və ya "bloglu portfel yarat" kimi bir tapşırıq verdiyiniz zaman, orkestrator bu yüksək səviyyəli məqsədi strukturlaşdırılmış bir **plan**-a ayırır, bunu yerinə yetirmək üçün lazım olan pluginləri tapır, hər addımı ardıcıl olaraq icra edir, prosesi izləyir və səhvlərdən avtonom şəkildə bərpası edir.

---

## Necə İşləyir {#how-it-works}

### 1. Planın Yaradılması {#1-plan-generation}

Agent veb sayt qurmaq barədə bir təlimat aldığında, JSON formatında bir **sayt planı** yaratmaq üçün `create_site_plan` funksionallığını çağırır. Plan aşağıdakıları təsvir edir:

- **Məqsəd** — bitmiş saytın nə etməli olduğu
- **Mərhələlər** — addımların ardıcıl qrupları (məsələn, _Setup_, _Content Types_, _Design_, _Content_)
- **Addımlar** — hər mərhələ içindəki fərdi funksionallıq çağırışları
- **Plugin tələbləri** — müəyyən addımların işləməsi üçün aktiv olması lazım olan pluginlər
- **Alternativ addımlar** — əsas bir addım uğursuz olarsa istifadə edilə biləcək alternativ addımlar

**Nümunə plan (qısaltılmış)**

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

### 2. Plugin Tapşırma (Discovery) {#2-plugin-discovery}

İcra etməyə başlamazdan əvvəl, orkestrator planın `plugin_requirements` hissəsini skan edir və hansı pluginlərin artıq aktiv olduğunu yoxlayır. Əgər plugin çatışmırsa, o:

1.  Ən yaxşı uyğunluğu tapmaq üçün `recommend_plugin` vasitəsilə qeydiyyatda axtarır.
2.  Agentdən tövsiyəni təsdiqləməsini xahiş edir.
3.  Təsdiqlənsə (və ya parametrlərdə avtomatik quraşdırma aktivdirsə) quraşdırmanı işə salır.

Plugin tapşırma uğursuzluğu kritik deyil — orkestrator təsirlənən addımları `skipped` (atlanmış) olaraq işarələyir və planın qalan hissəsi ilə davam edir.

### 3. Planın İcrası {#3-plan-execution}

Orkestrator plan ID-si ilə `execute_site_plan` funksionallığını çağırır. İcra mərhələ-mərhələ, addım-addım davam edir:

- **Addım istinadları** (`__ref:` prefiksi) — addımlar əvvəlki addımların nəticələrinə istinad edə bilər. Yuxarıdakı nümunədə, `__ref:create_menu.menu_id` dəyəri `create_menu` addımı tərəfindən qaytarılan `menu_id`-yə çevrilir.
- **Parallel addımlar** — eyni mərhələ içində, bir-birindən asılı olmayan addımlar `parallel` bayrağı təyin edildikdə eyni anda göndərilir.
- **Addım vaxtaşımı** — hər addımın özünəməxsus vaxtaşımı var (default: `Ability Timeout` parametridir). Vaxtaşımı olan addım `failed` (uğursuz) olaraq işarələnir və plan davam edir.

### 4. İrəliləməni İzləmə {#4-progress-tracking}

İcra vəziyyətini yoxlamaq üçün istənilən vaxt `get_plan_progress` çağırın:

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

WP-CLI istifadəçiləri aşağıdakı komanda ilə irəliləməni izləyə bilərlər:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Səhv Bərpası {#5-error-recovery}

Bir addım uğursuz olduqda, orkestrator planda təyin edilmiş bir **alternativ addım** (fallback) axtarır:

- **Alternativ addım mövcuddur** — alternativ addım dərhal cəhd edilir. Əgər uğurla başa çatarsa, icra davam edir. Əgər o da uğursuz olarsa, addım `failed` olaraq işarələnir və icra növbəti addımla davam edir.
- **Alternativ addım yoxdur** — addım `failed` olaraq işarələnir. Kritik olmayan addımlar atlanır; kritik addımlar ( `required: true` ilə işarələnmiş) cari mərhələni dayandırır və mərhələ səviyyəsində bərpası cəhdini işə salır.

Agent bütün uğursuzluqları son plan xülasəsində bildirir və bərpası mümkün olmayan səhvlər üçün əl ilə düzəliş addımları təklif edə bilər.

---

## Site Plan Funksionallıqları {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Təbii dil məqsəd təsvirindən strukturlaşdırılmış bir sayt planı yaradır.

**Parametrlər**

| Parametr | Tip | Tələb olunur | Təsvir |
|---|---|---|---|
| `goal` | string | Bəli | İstənilən veb saytın təsviri (təbii dildə) |
| `style` | string | Xeyr | Vizual üslub üstünlüyü: `minimal`, `bold`, `professional`, `playful`. Default: agent məqsədə əsasən seçir |
| `plugins` | array | Xeyr | Planın daxil ediləcək plugin slugları. Orkestrator lazım olan pluginləri avtomatik əlavə edir. |
| `dry_run` | boolean | Xeyr | Əgər `true` olarsa, planı yadda saxlama və ya icra etmədən JSON planını qaytarır. Default `false` |

**Nəticə verir** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Əvvəllər yaradılmış sayt planını icra etməyə başlayır.

**Parametrlər**

| Parametr | Tip | Tələb olunur | Təsvir |
|---|---|---|---|
| `plan_id` | string | Bəli | İcra ediləcək planın ID-si |
| `auto_install_plugins` | boolean | Xeyr | Əgər `true` olarsa, təsdiq olmadan lazım olan pluginləri avtomatik quraşdırır. Default `false` |
| `max_retries` | integer | Xeyr | Addım uğursuz olduqda davam etməzdən əvvəl neçə dəfə cəhd ediləcəyi sayı. Default `1` |

**Nəticə verir** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Sayt planının cari icra vəziyyətini qaytarır.

**Parametrlər**

| Parametr | Tip | Tələb olunur | Təsvir |
|---|---|---|---|
| `plan_id` | string | Bəli | Sorğu ediləcək Plan ID-si |

**Nəticə verir** Yuxarıdakı [Progress Tracking](#4-progress-tracking) hissəsində təsvir edilən irəliləmə obyektini.

---

### `handle_plan_error` {#handleplanerror}

Uğursuz olan bir addımı əl ilə həll edir və plan icrasını növbəti addımdan davam etdirir. Bu, avtomatik bərpası mümkün olmadıqda və müdaxilə etmək istədiyiniz zaman istifadə olunur.

**Parametrlər**

| Parametr | Tip | Tələb olunur | Təsvir |
|---|---|---|---|
| `plan_id` | string | Bəli | Plan ID-si |
| `step_id` | string | Bəli | Uğursuz olan addımın ID-si |
| `resolution` | string | Bəli | `skip` (atlayıb davam et), `retry` (addımı dərhal yenidən cəhd et) və ya `mark_done` (yenidən işlətmədən uğurlu say) |

**Nəticə verir** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## v1 və v2 Müqayisəsi {#comparing-v1-and-v2}

| Xüsusiyyət | v1 | v2 |
|---|---|---|
| Çoxmərhəlli planlar | Xeyr | Bəli |
| Addım nəticəsi istinadları (`__ref:`) | Xeyr | Bəli |
| Plugin tapşırma | Əl ilə | Avtomatik |
| İrəliləməni izləmə API-si | Xeyr | Bəli |
| Səhv bərpası | Uğursuz olub dayandır | Alternativ addım + davam et |
| Parallel addım icrası | Xeyr | Bəli (mərhələ başına seçimlidir) |
| WP-CLI plan komandaları | Xeyr | Bəli |
| Benchmark inteqrasiyası | Xeyr | Bəli (`q-restaurant-website`) |

---

## WP-CLI Plan Komandaları {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Məqsəd təsvirindən bir sayt planı yaradır.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Əvvəllər yaradılmış planı icra edir.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

İcra edilən və ya tamamlanmış plan üçün cari irəliləməni göstərir.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Bütün sayt planlarını (gözləyən, icra olunan və tamamlanmış) siyahılayır.

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Uğursuz olan planı `pending` vəziyyətinə qaytarır ki, başlanğıcdan yenidən icra olabilsin.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
