---
title: Өөрчлөлтийн бүртгэл
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Өөрчлөлтийн бүртгэл

## 1.9.0 — 2026-04-28-нд гарсан

### Шинэ

- **`create_contact_form` чадвар** — идэвхтэй form plugin (Contact Form 7, WPForms, Fluent Forms, эсвэл Gravity Forms) ашиглан холбоо барих маягт үүсгэж, аливаа нийтлэл эсвэл хуудсанд оруулахад бэлэн shortcode буцаана.
- **`set_featured_image` чадвар** — нийтлэл эсвэл хуудсанд одоо байгаа Media Library хавсралтын ID эсвэл алсын URL-аас онцлох зураг онооно; URL өгөгдсөн үед зургийг автоматаар импортолно.
- **`batch_create_posts` чадвар** — нэг чадварын дуудлагаар олон нийтлэл үүсгэнэ. `create_post`-той ижил параметрүүдийг дэмжиж, нийтлэл бүрийн амжилт/алдааг тайлагнадаг бөгөөд нэмэлт `stop_on_error` горимтой.
- **`page_template` параметр** — `create_post` болон `update_post`-д нэмэгдсэн. Үүсгэх эсвэл шинэчлэх үед PHP хуудасны загвар файл (жишээ нь `page-full-width.php`) онооно. Theme-ийн өгөгдмөл рүү буцаахын тулд `update_post`-д хоосон мөр дамжуулна.
- **Клиент талын дэлгэцийн зураг авах чадварууд** — `capture_screenshot`, `compare_screenshots`, болон `review_page_design`. Сервер талын headless browser-оор дамжуулан live хуудсуудын бүтэн эсвэл viewport дэлгэцийн зургийг авч, хоёр дэлгэцийн зургийн ялгааг харьцуулж, зохион байгуулалт, typography, өнгө, хүртээмжийг хамарсан AI-ээр үүсгэсэн дизайны үнэлгээ авна.
- **Таван суурилуулсан агент** — Content Writer, Site Builder, Design Studio, Plugin Manager, болон Support Assistant. Агент бүр зориулалтын хэрэгслийн багц, тохируулсан системийн prompt, эхлэх саналтай. Чатын толгойн шинэ **Agent Picker**-ээр солих боломжтой. [Суурилуулсан агентууд](../../user-guide/configuration/built-in-agents)-ыг үзнэ үү.
- **Онцлогийн тугууд** — хандалтын хяналтын toggle-ууд (зөвхөн администраторуудад хязгаарлах, network admin-уудад хязгаарлах, subscriber хандалт, гишүүн бусдад идэвхгүй болгох) болон брэндийн сонголтуудтай шинэ **Settings → Feature Flags** таб (footer attribution нуух, custom agent name, agent picker нуух, site icon-ыг chat avatar болгон ашиглах). [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings)-ийг үзнэ үү.
- **Сүүлийн session сэргээх** — chat panel нь одоо хуудас ачаалахад болон widget нээгдэхэд хамгийн сүүлийн яриаг автоматаар дахин ачаалдаг тул хуудас хооронд шилжихэд context хэзээ ч алдагдахгүй.
- **Plugin action links** — Settings болон Abilities Registry рүү хурдан очих холбоосууд одоо WordPress **Plugins → Installed Plugins** дэлгэц дээр plugin-ийн тайлбарын доор гарч ирнэ.

### Сайжруулсан

- **Зургийн эх сурвалжийг дахин оролдох** — agent нь татаж авахад алдаа гарвал AI-ээр үүсгэсэн зураг руу fallback хийхээс өмнө тохируулсан бүх үнэгүй зургийн эх сурвалжийг дахин оролддог болсон.
- **Model info panel** — chat header-т үргэлж харагдана; эхний мессежийн дараа нуухаа больсон.
- **Auto-scroll зан төлөв** — хэрэглэгч уншихын тулд дээш гүйлгэх үед auto-scroll түр зогсоно; хөвөгч **Доош гүйлгэх** товч гарч ирээд хэрэглэгч хамгийн сүүлийн мессежид хүрэхэд автоматаар алга болно.
- **Agent Picker UI** — агент бүрийн icon-той form-table overlay болгон дахин зохион бүтээсэн тул агентуудыг нэг харцаар таньж, солиход хялбар болсон.
- **Lazy-loaded JS chunks** — chat widget-ийн анхны JavaScript bundle одоо lazy-loaded chunks болгон хуваагдаж, анхны bundle-ийн хэмжээг 75–90%-иар багасгасан.
- **Chat widget-ийн шинэ дизайн** — өмнөх custom avatar-ыг нэгдсэн AI icon орлосон; суурилуулсан agent system-тэй нийцтэй.
- **URL-уудыг холбоос болгох** — system messages болон error message bubbles-д гарч ирсэн URL-ууд одоо дарж болох холбоосоор дүрслэгдэнэ.

### Зассан

- **Чадвар илрүүлэх боломж** — бүх чадвар agent-ийн tool list-д найдвартай харагдахын тулд тайлбарууд, system prompt references, болон namespace alignment-ийг зассан.
- **Providers cache** — providers одоо version counter-оор site-wide cache хийгддэг болж, multisite networks дээр stale-provider асуудлаас сэргийлнэ.
- **`ability_invalid_output`** — 12 чадварын handler даяар шийдвэрлэсэн; бүгд зөв бүтэцтэй JSON responses буцаана.
- **`pending_client_tool_calls` pipeline** — client-side tool calls зөв дуусаж, үр дүнгээ model-д буцаахын тулд эхнээс нь дуустал холбосон.
- **History drawer** — буцаах боломжгүй өөрчлөлтүүд revert list-ээс хасагдсан; **Бүтэн түүхийг харах** холбоос одоо зөв ажиллана.
- **Өөрчлөлт/буцаах систем** — таван тусдаа алдааг засаж, шинэ admin interface-ийн дор нэгтгэсэн.
- **Save Settings toast** — **Save Settings** дээр дарсны дараа snackbar мэдэгдэл одоо найдвартай гарч ирнэ.
- **Trash context menu** — trash view-ийг орхихгүйгээр зүйлсийг бүрмөсөн устгах боломжтой **Бүрмөсөн устгах** сонголт нэмсэн.
- **Засах ба дахин илгээх** — edit icon дээр дарахад thread доторх бүх мессеж биш, зөвхөн дарсан мессеж edit mode-д ордог болсон.
- **Chat layout height** — plugin-ээр оруулсан content (admin notices, banners) хуудасны дээр гарч ирэх үед chat panel өндрөө тохируулж, input area дэлгэцээс шахагдахаас сэргийлнэ.

---

## 1.4.0 — 2026-04-09-нд гарсан

### Шинэ

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI дамжуулах шугам болон загварын үнэлгээний ажлын урсгалд зориулан Agent Capabilities v1 benchmark suite-ийг тушаалын мөрөөс ажиллуулна. Асуулт тус бүрээр ажиллуулах, provider/model өөрчлөх, JSON/CSV гаралтыг дэмжинэ.
- **Agent Capabilities v1 benchmark suite** — оноолт болон token/үргэлжлэх хугацааны тайлагналтай, бүрэн чадварын хүрээг шалгадаг төвөгтэй, олон алхамт prompt-уудын бүтэцтэй багц.
- **Custom Post Type чадварууд** — `register_post_type`, `list_post_types`, `delete_post_type`. Бүртгэлүүд options table-ээр дамжин дахин эхлүүлсний дараа ч хадгалагдана.
- **Custom Taxonomy чадварууд** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Сонголтот rewrite slug-уудтай шаталсан болон хавтгай taxonomy-уудыг дэмжинэ.
- **Design System чадварууд** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog` гэсэн таван сонгомол preset-ийг агуулна.
- **Global Styles чадварууд** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. WordPress Global Styles API-гаар дамжуулан theme.json утгуудыг уншиж, бичнэ.
- **Navigation Menu удирдлагын чадвар** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Давхарласан цэс болон theme location оноолтыг дэмжинэ.
- **Options Management чадвар** — `get_option`, `set_option`, `delete_option`, `list_options`. Чухал WordPress options-ыг өөрчлөхөөс хамгаалах суурилуулсан аюулгүй байдлын blocklist-ийг агуулна.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. WordPress plugin хэлбэрээр түгээгддэг чадварын багцуудыг илрүүлж, идэвхжүүлнэ.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plugin илрүүлэлт, алхмын гаралтын лавлагаа, явцын хяналт, алдааг бие даан сэргээх боломжтой олон үе шаттай сайт бүтээх төлөвлөгөөнүүд.
- **Рестораны вэбсайтын benchmark асуулт** (`q-restaurant-website`) — CPT бүртгэл, design system, navigation, plugin илрүүлэлтийг хамарсан эхнээс төгсгөл хүртэлх тест.
- **AI provider connector plugin-ууд** илүү хурдан локал хөгжүүлэлтийн тохиргоонд зориулж WordPress Playground blueprint-үүдэд нэмэгдсэн.

### Сайжруулсан

- README-г AI provider connector баримтжуулалт болон тохируулах заавраар шинэчилсэн.

### Зассан

- `main` салбар дээрх 25 PHPUnit тестийн алдааг шийдвэрлэсэн.
- `blueprint.json` дахь GitHub releases URL формат засагдсан.
- Хуучин ID-уудтай давхцахаас сэргийлж task ID-г дахин дугаарласан.

---

## 1.3.x

_Өмнөх хувилбарын тэмдэглэлүүдийг plugin repository-д хадгалдаг._
