---
title: Girişli Agentler
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Dahili Agentler

Gratis AI Agent v1.9.0 beş dahili agent ile gelyir, her biri o sahnedeki yaygın görevlere uyğun bir araç seti, özel bir sistem promptu ve başlangıç önerileriyle önceden konfigüre edilmiştir. Agentler arasında geçiş yapmak asistanın ne yapabileceğini ve nasıl yanıt vereceğini değiştirir — bu sizin tarafınızdan herhangi bir yapılandırma gerektirmez.

## Agent Nedir?

Her agent, şunları birlik halinde getiren adlandırılmış bir yapı profili (configuration profile)dir:

- **Araçlar (Tools)** — agent'in çağırmasına izin verilen yetenekler (örneğin, Bir İçerik Yazarı gönderi oluşturma yeteneğine erişebilir; bir Tasarım Stüdyosu CSS ve theme.json yeteneklerine erişebilir).
- **Sistem promptu** — agent'in tonunu, önceliklerini ve kısıtlamalarını belirleyen talimatlar.
- **Öneriler (Suggestions)** — hızlıca başlamanı sağlamak için sohbet arayüzünde gösterilen önceden yazılmış promptlar.

## Agent Seçicisini Kullanma

1. WordPress yönetim panelinin yan çubuğundaki **Gratis AI Agent** panelini açın.
2. Sohbet başlığının sol üstündeki **agent simgesine** tıklayın (simge, aktif agent'i yansıtacak şekilde değişir).
3. **Agent Seçicisi (Agent Picker)** bir form-tablo üst katmanı olarak açılır. Her agent, simgesi, adı ve tek satırlık açıklamasıyla listelenir.
4. Aktif etmek için bir agent satırına tıklayın. Sohbet başlığı anında güncellenir.

Ayrıca konuşma sırasında bile agent değiştirebilirsiniz — yeni agent'in sistem promptu bir sonraki mesajdan itibaren geçerli olur.

## Beş Dahili Agent

### İçerik Yazarı (Content Writer)

**Odak:** Gönderi, sayfa ve iletişim formları oluşturmak ve düzenlemek.

**Mevcut araçlar:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Nereňi gowy edýär:**
- Kämilmeje ýa-da skizmadan blog postlary taýýarlap we ýazmak
- Täze sahypa üçin landing page-leri toparlaýjy (batch) döretmek
- Kontakt we sorag formalary gurmak
- URL ýa-da gözleg arkaly postlar üçin görkeziji suratları goýmak

**Başlangyç maslahatlary:**
- *WordPress multisite-ynda üstünlikleri barada 500 sözlük blog posty ýazyp görüň.*
- *Hakykat, Hyzmatlar we Kontakt sahypasy döredip işlenip görüň.*
- *Kontakt sahypasyna kitaphanany sorag formasy goýuň.*

---

### Site Builder (Saýlaýjy)

**Odaklanma:** Bir sora bilen dolandyryp web sahypa döretmek.

**Görnüşi belli ediji gurulary:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Nereňi gowy edýär:**
- Barada düşündirilen iş gurşawy üçin birnäçe aşaky döredilip web sahypa döretmek maslahatyny bermek
- Her bir aşamany awtomatiki ýerine ýetirmek — gurluş, mazmun, navigasiýa, dizayn
- Plan dowamynda ýumşakda bolan hasaplamalary (error) oňat çözmek we manual täsir talap etmeden çykyş almak
- Döretme işi hasapyny döredip sahypa gurluş bilen goşmak
- Gurluş boýunça maslahat berilen pluginleri goşmak

**Başlangyç maslahatlary:**
- *Galeri post turjasy, kitaphanany we kontakt formasy bilen surat görkeziji (photography portfolio) sahypa döredip görüň.*
- *Onlaçma menýu, açylmaga çykaryş sagatları we stol goşmak sorag formasy bilen restoran sahypasy döredip görüň.*
- *Hyzmat sahypalary, görkeziji bölümi we blog barada serişdeleri bilen freelance konsultasiýa sahypasy gurluň.*
- *Site builder arkaly Kontakt sahypasyna kontakt formasy goşuň.*

---

### Design Studio (Dizayn Studisi)

**Odaklanma:** Görsel özelleşdirmek — reňkler, tipografiýa, CSS we blok ulgamlary.

**Mövcär ulgamlar:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Neleri gowy ededir:**
- Adyryma tema presetlerini (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) ulama.
- theme.json arkalykda global tipografik we reňk paletelerini sozlamak üçin.
- Brand-a özülik üçin custom CSS ulama.
- Bir sahany skrinshot almagy we dizayn meselelerini barlamak üçin ulama.

**Başlangyjy maslahatlary:**
- *warm-editorial presetini ulap, soňra birincil reňki #2d6a4f bilen sozlayn.*
- *Homepage skrinshot almagy we neleri gowuldyrmagy aýtdyň.*
- *Toýa (hero) blokny, doly giňişli fon suratyny we merkezlenip duran başlygy bilen ulanylyp biljek modeldir.*

---

### Plugin Manager

**Odak:** WordPress pluginlerini tapmak, ulaplamak we dolandyrady.

**Mövcär ulgamlar:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Neleri gowy ededir:**
- Artdyrylan ulgam üçin iň gowy pluginini maslahat bermek.
- Registryden ability paketlerini ulaplamak.
- Ulga bölünip tapylýan ability katalogyny kategoriýalara görä gözden geçirmek.

**Başlangyjy maslahatlary:**
- *Üje (membership) direktori üçin iň gowy plugin näme?*
- *WooCommerce ability paketini ulapla.*
- *Mövcär ähli e-kommersiya ability paketlerini görke.*

---

### Support Assistant

**Odak:** Sahany we sozlamalar barada soraglary jogaplamak, we WordPress konfigurasiýasy bilen baglanyşykda kömek etmek.

**Mövcär ulgamlar:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Nereňi gowy işledik:**
- Aktual sayt sozlamalaryny we opsiyalaryny barlamak.
- Saytdaky post türleri, taksonomiyalar we menyleri nerek görkezilýändigini düşündirmek.
- Käbir sozlama näme etýär diýen soraglary ýaşaýan aralyk (live values) okap jogaplamak.
- Üýtgeşmeler bermezden öwrenmek üçin okywardy diagnostika katlygy bolmak.

**Başlangyç maslahatlary:**
- *Bu saytda şu wagt aktiw olan pluginler we sozlamalar nämelerdir?*
- *Bu saytdaky ähli custom post türlerini listläp görkeziň.*
- *Nereji navigasiýa menyleri bar, olar nirede ýerleşdirilipdir?*

---

## Agentleri özelleşdirmek (Customising Agents)

Her bir goşmaýjy agenti `gratis_ai_agent_agents` filteri arkaly giňeltilip bilýär we ýa-da üýtgedilip bilýär.

### Bar bolan agente custom system prompt goşmak

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Täze agenti goşmak

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Post we səhifalaryny gözlegji ulgamlara optimallaşdyrmak.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Sen SEO specialisti. Aýratynlykda agzalary optimallaşdyrmaga, meta deskripsiyalar we gurluşlu maglumatlary (structured data) üstünlik bermägi gerek.',
        'suggestions'   => [
            'Homepage sanyny we meta deskripsiyasyny gözden geçiriň.',
            'Soňky beş post üçin tytul tagini gowusdyrmak barada maslahat berişi.'
        ],
    ];
    return $agents;
} );
```

Yeni agent filter işlenir işlenmeden Agent Picker'da görünýär.

### Dahili agenti almak

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
