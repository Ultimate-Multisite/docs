---
title: Бүтэц дахь агент
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Бодит агент (Built-in Agents)

Gratis AI Agent v1.9.0 нь таны ашиглахад бэлэн байдаг таван үндсэн агентыг багтаасан байна. Эдгээр агентууд тус бүр тодорхой хэрэгслүүд, зохицуулсан system prompt (систем заавар), мөн тухайн салбарын ердийн ажлуудад тохирох эхлэл дахь саналтай хамт бэлэн байдаг. Агентуудын хоорондох шилжилт нь туслах систем ямар үйлдэл хийж, яаж хариулна гэдгийг өөрчилнө — таны хувьд ямар ч тохируулга шаарддаггүй.

## Агент гэж юу вэ? (What Is an Agent?)

Агент бүр нь дараах зүйлсийг хослуулсан нэрлэсэн тохиргоо профиль юм:

- **Tools** — агент ямар үйлдлүүдийг хийх боломжтойг заасан (жишээлбэл, Content Writer нь пост үүсгэх чадвартай; Design Studio нь CSS болон theme.json-ийн чадварт хандана).
- **System prompt** — агентын өнгө аялга, тэргүүлэх урсгал ба хязгаарлалтыг тодорхойлогч заавар.
- **Suggestions** — чат интерфейст эхлээд хэрэглэхэд туслах бэлэн бичигдсэн prompt-ууд.

## Агент сонгогчийг ашиглах (Accessing the Agent Picker)

1. WordPress-ийн admin sidebar дээр **Gratis AI Agent** тавцанг нээгээд.
2. чат хэдийн дээрх хамгийн зүүн дээд буланд байгаа **agent icon**-ыг дарна (ажлын агент өөрчлөгдсөн байдлыг илэрхийлэхээр икон өөрчлөгднө).
3. **Agent Picker** нь form-table overlay хэлбэрээр нээгдэнэ. Агентууд бүр өөрийн икон, нэр болон нэг мөрөнд тодорхойлолттайгаар жагсаагддаг.
4. Агентын мөр дээр дарж түүнийг идэвхжүүлнэ. Чат хэдийн шууд шинэчлэгдэнэ.

Та яриа дундуур ч агентыг солих боломжтой — шинэ агент нь дараагийн мессежийн үед өөрийн system prompt-оор ажиллана.

## Таван үндсэн агент (The Five Built-in Agents)

### Content Writer

**Анхацлалт:** Пост, хуудас болон холбоо барих маягт бичих, засварлах.

**Боломжит хэрэгслүүд:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Яаж чам сайн ажилладаг вэ:**
- Богино эсвэл төлөвлөгөөс нь блог пост бичих ба хэвлэх
- Шинэ сайтэд олон хуудсыг (landing pages) нэг дор үүсгэх
- Холбоо барих болон асуулт тавих (enquiry) маягийн загварыг үүсгэх
- URL эсвэл хайлт хийсэн пост дээр онцлох зураг оруулах

**Эхлэлийн санал:**
- *WordPress multisite-ийн ашиг тусыг тайлбарласан 500 үгтэй блог пост бич.*
- *Бидний тухай (About), Үйлчилгээ (Services) болон Холбоо барих (Contact) хуудсыг үүсгэж, хэвлэх.*
- *Холбоо барих хуудасны Contact page дээр захиалгын асуулт тавих маягийн загварыг нэмэх.*

---

### Site Builder (Сайт бүтээгч)

**Анхацдаг зүйл:** Нэг өгөгдсөн зааврт бүхэлд нь сайт үүсгэх.

**Холбогдох хэрэгслүүд:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Яаж сайн ажилладаг вэ:**
- Тодорхой бизнесийн төрөлд олон үе шаттай сайт бүтээх төлөвлөгөөг үүсгэх.
- Үе бүрийг өөрөө гүйцэтгэх — бүтэц, контент, навигаци, дизайн.
- Төлөвлөгөөний дунд алдаа гарвал гараар оролцох шаардлагагүйгээр асуудалтай зогсоход сэргээх.
- Бүтээх үед зөвлөсөн plugin-уудыг автоматаар суулгах.
- чат интерфейсээс шууд холбоо барих маягийн загварыг үүсгэх (Superdav AI Agent v1.10.0+).

**Эхлэлийн санал:**
- *Галерей пост төрөл, захиалгын хуудас болон холбоо барих маягийн загвартай зурагчдын портфолио сайт үүсгэх.*
- *Онлайн цэс, нээлттэй цагийн хуваарь, ширээ захиалгын асуулт тавих маягийн загвартай ресторанны сайт үүсгэх.*
- *Үйлчилгээний хуудас, портфолио хэсэг болон блогтой фрилансер зөвлөх сайтын төлөвлөгөөг тохируулах.*
- *Site builder ашиглан Contact page дээр холбоо барих маягийн загварыг нэмэх.*

---

### Design Studio (Дизайн Студи)

**Анхацдаг зүйл:** Визуал өөрчлөлт — өнгө, типографик, CSS болон блокуудын загвар.

**Боломжит хэрэгслүүд:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Яагаад сайн вэ:**
- Нэрлэсэн theme presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)-ийг ашиглах.
- theme.json-ээр глобал типографик болон өнгөний төлөвийг тохируулах.
- Бренд тусгай хэрэгцээнд зориулсан custom CSS оруулах.
- Хуудасны скриншоты аваад дизайн асуудлыг шалгах.

**Эхлэлийн санал:**
- *warm-editorial preset-ийг ашиглан, үндсэн өнгийг #2d6a4f гэж тохируулна уу.*
- *Homepage-ийн скриншоты аваад, юуг сайжруулахыг хэлээч.*
- *Бүхэл өргөнөөр (full-width) фоныст зураг болон дунд нь байрласан гарчигтай reusable hero block pattern үүсгэе.*

---

### Plugin Manager (Плагины менежер)

**Анхацдаг зүйл:** WordPress plugin-уудыг олж, суулгаж, удирдах.

**Боломжит хэрэгслүүд:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Яагаад сайн вэ:**
- Тодорхой ашиглалтын тохиолдлын хамгийн тохиромжтой plugin-ийг зөвлөх.
- registry-ээс ability packs суулгах.
- category-гаар боломжит ability catalogue-ыг үзэх.

**Эхлэлийн санал:**
- *Удирдлагын хавсралт (membership directory)-д хамгийн тохиромжтой plugin юу вэ?*
- *WooCommerce abilities pack-ийг суулгана.*
- *Боломжит бүх ecommerce ability packs-ыг үзүүлээрэй.*

---

### Support Assistant (Дэмжих туслах)

**Анхацдаг зүйл:** Вэбсайтын контент, тохиргоо болон WordPress configuration-той холбоотой асуултуудад хариулах.

**Боломжит хэрэгслүүд:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Яага ямар ашигтай байна:**
- Одоогийн сайтын тохиргоо болон сонголтуудыг шалгах.
- Сайтад хэрхэн пост төрөл (post types), талбарууд (taxonomies) болон менюс хэр зохион байгуулагдсаныг тайлбарлах.
- Бодит утгыг уншиж, "Энэ тохиргоо юу хийдэг вэ?" гэсэн асуултад хариулдаг.
- Өөрчлөлт оруулахаас өмнө унших зөвхөн диагностик давхаргыг үүрэг гүйцэтгэх.

**Эхний санал:**
- *Одоо энэ сайтад ямар plugin болон тохиргоо ажиллаж байна вэ?*
- *Энэ сайт дээр бүртгэгдсэн бүх custom post types-ийг жагсаа.*
- *Ямар навигацийн менюс байгаа бөгөөд тэдгээрийг хаана тохируулсан байна вэ?*

---

## Агентүүдийг тохируулах (Customising Agents)

Бүх суурь агентүүдийг `gratis_ai_agent_agents` filter-ээр өргөтгөх эсвэл солих боломжтой.

### Одоо байгаа агент руу өөрийн system prompt нэмэх

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Шинэ агент бүртгэх

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Search engines-д пост болон хуудсыг оновчтой болгох.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Та SEO specialist юм. Түлхүүр үг оновчлол, мета тайлбар болон бүтэцтэй өгөгдлийг (structured data) дээр анхаарлаа хандуул.',
        'suggestions'   => [
            'Үндсэн хуудсыг (homepage) хавсаргалт ба мета тайлбарыг шалгана.',
            'Сүүлийн таван постны гарчиг (title tag)-ийн сайжруулалтыг санал болгоно.',
        ],
    ];
    return $agents;
} );
```

Шинэ агент нь шүүлт байдлал дууссаны дараа шууд Agent Picker дээр гарч ирнэ.

### Бодит агентыг устгах

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
