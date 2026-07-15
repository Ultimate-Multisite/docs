---
title: Dəyişikliklər siyahısı
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Dəyişikliklər siyahısı

## 1.9.0 — 2026-04-28 tarixində buraxıldı {#190--released-on-2026-04-28}

### Yeni {#new}

- **`create_contact_form` qabiliyyəti** — aktiv form plugin-indən (Contact Form 7, WPForms, Fluent Forms və ya Gravity Forms) istifadə edərək bir əlaqə forması yaradır və istənilən post və ya səhifəyə yerləşdirilə bilən bir shortcode qaytarır.
- **`set_featured_image` qabiliyyəti** — mövcud Media Library attachment ID-sindən və ya uzaq bir URL-dən bir post və ya səhifəyə xüsusi şəkil təyin edir; URL verildikdə şəkli avtomatik yükləyir.
- **`batch_create_posts` qabiliyyəti** — bir qabiliyyət çağırışı ilə bir neçə post yaradır. `create_post` ilə eyni parametrləri dəstəkləyir, hər post üçün uğur/uğursuzluq hesabatı verir və isteğe bağlı `stop_on_error` rejiminə malikdir.
- **`page_template` parametri** — `create_post` və `update_post` funksiyalarına əlavə edildi. Yaratma və ya yeniləmə zamanı bir PHP səhifə şablon faylı (məsələn, `page-full-width.php`) təyin edir. `update_post` üçün boş bir string göndərmək, mövzu (theme) defaultına qayıtmağa kömək edir.
- **Client-side screenshot qabiliyyətləri** — `capture_screenshot`, `compare_screenshots` və `review_page_design`. Server tərəfli headless brauzer vasitəsilə canlı səhifələrin tam və ya viewport screenshot-larını çəkir, iki screenshot-u müqayisə edir və yerləşmə, tipoqrafiya, rəng və əlçatanlıq (accessibility) əhatə edən AI-generasiyalı dizayn nəzəriyyəsi alır.
- **Beş daxili agent** — Məzmun Yazarı (Content Writer), Sayt Qurucusu (Site Builder), Dizayn Studiyası (Design Studio), Plugin Meneceri (Plugin Manager) və Dəstək Asistanı (Support Assistant). Hər agentin özünə məxsus bir vasitə dəsti, tənzimlənmiş sistem prompt-u və başlanğıc təklifləri var. Yeni **Agent Picker** vasitəsilə chat başlığında dəyişdirilə bilər. [Built-in Agents](../../user-guide/configuration/built-in-agents) hissəsinə baxın.
- **Feature flags** — giriş nəzarəti düymələri (administratorlara məhdudlaşdır, network administratorlara məhdudlaşdır, abunəçi girişi, üzv olmayanlar üçün deaktiv et) və brendləmə seçimləri (footer atrof etməni gizlət, fərdiləşdirilmiş agent adı, agent picker-i gizlət, chat avatarı kimi sayt ikonundan istifadə et) ilə yeni **Settings → Feature Flags** tabı. [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) hissəsinə baxın.
- **Son sessiyanı bərpa et** — Chat paneli indi səhifə yükləndikdə və widget açıldıqda ən son söhbəti avtomatik yükləyir, beləliklə kontekst səhifə naviqasiyaları arasında itmir.
- **Plugin action links** — Settings və Abilities Registry-yə qısa keçidlər indi WordPress **Plugins → Installed Plugins** ekranında plugin təsvirinin altında görünür.

### Yaxşılaşdırılan {#improved}

- **Şəkil mənbəsinin yenidən cəhd edilməsi** — agent indi yükləmə zamanı uğursuzluq yaşanarsa, konfiqurasiya edilmiş bütün pulsuz şəkil mənbələrini yenidən cəhd edir, sonra isə AI-generasiyalı şəkilə keçir.
- **Model info paneli** — chat başlığında həmişə görünür; artıq ilk mesajdan sonra gizlənmir.
- **Avtomatik scroll davranışı** — istifadəçi oxumaq üçün yuxarı scroll etdikdə avtomatik scroll dayandırılır; uçan bir **Scroll to bottom** düyməsi görünür və istifadəçi ən son mesajın yanına çatanda avtomatik olaraq yox olur.
- **Agent Picker UI** — hər agent üçün ikonlarla form-table overlay kimi yenidən dizayn edilmişdir, bu da agentləri bir baxışda müəyyən etməyi və dəyişməyi asanlaşdırır.
- **Lazy-loaded JS chunks** — chat widget-ının ilkin JavaScript bundle-ı indi lazy-loaded chunks-lara bölünmüşdür, bu da ilkin bundle ölçülərini 75–90% azaldır.
- **Chat widget redizaynı** — unifikasiya edilmiş AI ikonu əvvəlki fərdiləşdirilmiş avatarın yerini alır; bu da daxili agent sisteminə uyğundur.
- **URL linkification** — Sistem mesajlarında və error message bubble-larında görünən URL-lər indi kliklənə bilən linklər kimi göstərilir.

### Düzəlişlər {#fixed}

- **Ability tapılma qabiliyyəti** — Təsvirlər, sistem prompt istinadları və namespace hizalanması düzəldildi, beləliklə bütün qabiliyyətlər agentin vasitə siyahısında etibarlı şəkildə görünür.
- **Providers cache** — Providers indi multisite şəbəkələrində köhnəlmiş provider problemlərini aradan qaldırmaq üçün versiya sayğacı vasitəsilə sayt-yayına cache edilir.
- **`ability_invalid_output`** — 12 ability handler-də aradan qaldırıldı; hamısı düzgün strukturlaşdırılmış JSON cavabları qaytarır.
- **`pending_client_tool_calls` pipeline** — ucu-ucu qoşuldu, beləliklə client-side tool call-ları düzgün tamamlanır və nəticələri modelə qaytarır.
- **History drawer** — Bərpa edilə bilməyən dəyişikliklər bərpa siyahısından istisna edilir; **View full history** linki indi düzgün işləyir.
- **Changes/revert sistemi** — Beş ayrı bug düzəldildi və yeni admin interfeysində birləşdirildi.
- **Save Settings toast** — Snackbar bildirişi indi **Save Settings** düyməsinə klikləndikdən sonra etibarlı şəkildə görünür.
- **Trash context menu** — Tədbiq etmədən (hard-delete) elementlərin silinməsi üçün **Delete Permanently** seçimi əlavə edildi.
- **Edit & resend** — Redaktə ikonasına klikləmək indi yalnız kliklənən mesaj üçün redaktə rejimini aktivləşdirir, bütün thread-dəki mesajlar üçün yox.
- **Chat layout height** — Chat paneli, plugin-injekte edilmiş məzmun (admin bildirişləri, bannerlər) səhifənin yuxarısında görünəndə öz hündürlüyünə uyğunlaşır, beləliklə input sahəsi ekrandan aşağı itməyə bilər.

---

## 1.4.0 — 2026-04-09 tarixində buraxıldı {#140--released-on-2026-04-09}

### Yeni {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — CI pipeline-ları və model qiymətləndirmə iş axınları üçün komanda xəttindən Agent Capabilities v1 benchmark suite-ni işlədir. Hər sual üçün işlətmə, provider/model üstünlüyü və JSON/CSV çıxışı dəstəkləyir.
- **Agent Capabilities v1 benchmark suite** — Tam qabiliyyət səthini yoxlayan, qiymətləndirmə və token/müddət hesabatı verən, mürəkkəb, çoxaddımlı prompt-lardan ibarət strukturlaşdırılmış bir dəst.
- **Custom Post Type abilities** — `register_post_type`, `list_post_types`, `delete_post_type`. Qeydiyyatlar options cədvəli vasitəsilə yenidən başladılarda saxlanılır.
- **Custom Taxonomy abilities** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Seçmeli (hierarchical) və düz (flat) taxinomiyalara, isteğe bağlı rewrite slug-ları ilə dəstək verir.
- **Design System abilities** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Beş kürat edilmiş preset daxildir: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles abilities** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. WordPress Global Styles API vasitəsilə theme.json dəyərlərini oxuyur və yəzər.
- **Navigation Menu management ability** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. İç-içə keçidlər (nested menus) və mövzu yerləşdirməsi təyin etməyə dəstək verir.
- **Options Management ability** — `get_option`, `set_option`, `delete_option`, `list_options`. Kritik WordPress option-larını dəyişdirmədən qoruyan daxili bir təhlükəsizlik qadağası (blocklist) ehtiva edir.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. WordPress plugin-ları kimi yayılmış qabiliyyət paketlərini tapın və aktivləşdirin.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plugin tapılması, addım çıxışı istinadları, progress izləmə və avtonom səhv bərpası ilə çoxfazalı sayt qurma planları.
- **Restaurant website benchmark question** (`q-restaurant-website`) — CPT qeydiyyatı, dizayn sistemi, navigasiya və plugin tapılmasını əhatə edən ucu-ucu test.
- **AI provider connector plugins** daha sürətli yerli inkişaf qurulması üçün WordPress Playground blueprint-larına əlavə edildi.

### Yaxşılaşdırılan {#improved-1}

- README, AI provider connector sənədləşməsi və qurulma təlimatları ilə yeniləndi.

### Düzəlişlər {#fixed-1}

- `main` branch-də 25 PHPUnit test uğursuzluğu aradan qaldırıldı.
- `blueprint.json` faylında GitHub releases URL formatı düzəldildi.
- Köhnə ID-larla toqquşmalarını aradan qaldırmaq üçün Task ID yenidən nömrələndi.

---

## 1.3.x {#13x}

_Əvvəlki buraxılış qeydləri plugin repozitoriyasında saxlanılır._
