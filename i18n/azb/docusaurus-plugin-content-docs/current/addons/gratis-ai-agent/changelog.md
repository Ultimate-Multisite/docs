---
title: Tarixiy dəyişikliklər
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog

## 1.9.0 — Yayınlandı: 2026-04-28 {#190--released-on-2026-04-28}

### Yeni {#new}

- **`create_contact_form` yeteneği** — Aktif form plugin'ini (Contact Form 7, WPForms, Fluent Forms veya Gravity Forms) kullanarak bir iletişim formu oluşturur ve herhangi bir gönderiye veya sayfaya gömülmeye hazır bir shortcode döndürür.
- **`set_featured_image` yeteneği** — Mevcut bir Medya Kütüphanesi ek dosya kimliğinden veya uzaktan bir URL'den bir gönderiye veya sayfaya öne çıkan görsel atar; bir URL sağlandığında görseli otomatik olarak içe aktarır.
- **`batch_create_posts` yeteneği** — Tek bir yetenek çağrısıyla birden fazla gönderi oluşturur. `create_post` ile aynı parametreleri destekler, gönderi başına başarı/başarısızlık raporu verir ve isteğe bağlı bir `stop_on_error` moduna sahiptir.
- **`page_template` parametresi** — `create_post` ve `update_post`'a eklendi. Oluşturma veya güncelleme sırasında bir PHP sayfa şablon dosyası (örneğin, `page-full-width.php`) atar. `update_post` için boş bir dize göndermek, temanın varsayılan ayarına geri dönülmesini sağlar.
- **İstemci Tarafı Ekran Görüntüsü Yetenekleri** — `capture_screenshot`, `compare_screenshots` ve `review_page_design`. Sunucu tarafı headless tarayıcı aracılığıyla canlı sayfaların tam veya görünüm (viewport) ekran görüntülerini yakalar, iki ekran görüntüsünü karşılaştırır ve düzen, tipografi, renk ve erişilebilirlik konularını kapsayan yapay zeka tarafından oluşturulmuş bir tasarım incelemesi alır.
- **Beş yerleşik ajan** — İçerik Yazarı, Site Oluşturucu, Tasarım Stüdyosu, Plugin Yöneticisi ve Destek Asistanı. Her ajanın özel bir araç seti, özelleştirilmiş bir sistem komutu ve başlangıç önerileri vardır. Sohbet başlığındaki yeni **Agent Picker** üzerinden değiştirilebilir. [Built-in Agents](../../user-guide/configuration/built-in-agents) bölümüne bakın.
- **Özellik bayrakları** — Erişim kontrol anahtarlıkları (yöneticilerle sınırla, ağ yöneticileriyle sınırla, abone erişimi, üye olmayanlar için devre dışı bırak) ve markalama seçenekleri (alt bilgi atfını gizle, özel ajan adı, ajan seçicisini gizle, sohbet avatarı olarak site simgesini kullan) içeren yeni **Ayarlar → Özellik Bayrakları** sekmesi. [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings) bölümüne bakın.
- **Son oturumu geri yükle** — Sohbet paneli artık sayfa yüklendiğinde ve widget açıldığında en son konuşmayı otomatik olarak yeniden yükler, böylece bağlam sayfa navigasyonları arasında asla kaybolmaz.
- **Plugin eylem bağlantıları** — Ayarlar ve Yetenekler Kayıt Defteri'ne hızlı bağlantılar artık WordPress **Plugins → Installed Plugins** ekranında, plugin açıklamasının altında görünür.

### Geliştirildi {#improved}

- **Görsel kaynağı yeniden deneme** — Ajan, indirme başarısız olduğunda bir yapay zeka tarafından oluşturulan görsel kullanmadan önce yapılandırılmış tüm ücretsiz görsel kaynaklarını yeniden dener.
- **Model bilgisi paneli** — Sohbet başlığında her zaman görünür; artık ilk mesajdan sonra gizlenmiyor.
- **Otomatik kaydırma davranışı** — Otomatik kaydırma, kullanıcı okumak için yukarı kaydırdığında durur; yüzen bir **Scroll to bottom** (En alta kaydır) düğmesi belirir ve kullanıcı en son mesaja ulaştığında otomatik olarak kaybolur.
- **Agent Picker UI** — Her ajana özel simgeler içeren bir form-tablo katmanı olarak yeniden tasarlandı, bu da ajanları tek bakışta tanımlamayı ve değiştirmeyi kolaylaştırıyor.
- **Tembel yüklenen JS parçaları** — Sohbet widget'ının başlangıç JavaScript paketi artık tembel yüklenen parçalara ayrıldı, bu da başlangıç paket boyutlarını %75–90 oranında azalttı.
- **Chat widget yeniden tasarımı** — Birleşik yapay zeka simgesi, önceki özel avatarı yerini aldı; bu da yerleşik ajan sistemiyle tutarlıdır.
- **URL linkleştirme** — Sistem mesajlarında ve hata mesajı balonlarında görünen URL'ler artık tıklanabilir bağlantılar olarak gösteriliyor.

### Düzeltildi {#fixed}

- **Yetenek keşfedilebilirliği** — Tüm yeteneklerin ajanın araç listesinde güvenilir bir şekilde görünmesi için açıklamalar, sistem komutu referansları ve ad alanı hizalamaları düzeltildi.
- **Sağlayıcılar önbelleği** — Sağlayıcılar artık çok siteli ağlarda bayat sağlayıcı sorunlarını önlemek için bir sürüm sayacı aracılığıyla site genelinde önbelleğe alınıyor.
- **`ability_invalid_output`** — 12 yetenek işleyicisinde çözüldü; tümü düzgün yapılandırılmış JSON yanıtları döndürüyor.
- **`pending_client_tool_calls` hattı** — İstemci tarafı araç çağrılarının doğru tamamlanmasını ve sonuçların modele geri dönmesini sağlamak için uçtan uca bağlandı.
- **Geçmiş çekmecesi** — Geri alınamayan değişiklikler geri alma listesinden hariç tutuldu; **View full history** (Tüm geçmişi görüntüle) bağlantısı artık doğru çalışıyor.
- **Değişiklikler/geri alma sistemi** — Beş ayrı hata düzeltildi ve yeni yönetici arayüzü altında birleştirildi.
- **Ayarları kaydet bildirim çubuğu** — **Save Settings** (Ayarları Kaydet) düğmesine tıklandıktan sonra bildirim çubuğu artık güvenilir bir şekilde görünür.
- **Çöp kutusu bağlam menüsü** — Öğelerin çöp kutusu görünümünü terk etmeden sert silinebilmesi için **Delete Permanently** (Kalıcı Olarak Sil) seçeneği eklendi.
- **Düzenle ve yeniden gönder** — Düzenleme simgesine tıklamak, artık tüm mesajları değil, yalnızca tıklandığı mesaj için düzenleme moduna girer.
- **Chat düzen yüksekliği** — Sohbet paneli, sayfanın üstünde plugin tarafından enjekte edilen içerik (yönetici bildirimleri, bannerlar) göründüğünde yüksekliğini ayarlayarak giriş alanının ekran dışına itilmesini engelliyor.

---

## 1.4.0 — Yayınlandı: 2026-04-09 {#140--released-on-2026-04-09}

### Yeni {#new-1}

- **WP-CLI benchmark komutu** (`wp gratis-ai-agent benchmark`) — CI pipeline'ları ve model değerlendirme iş akışları için komut satırından Ajan Yetenekleri v1 benchmark paketini çalıştırır. Soru bazlı çalıştırmaları, sağlayıcı/model geçersiz kılmalarını ve JSON/CSV çıktısını destekler.
- **Ajan Yetenekleri v1 benchmark paketi** — Tam yetenek yüzeyini test eden, puanlama ve token/süre raporlaması içeren yapılandırılmış, çok adımlı komutlar kümesi.
- **Özel Gönderi Türü yetenekleri** — `register_post_type`, `list_post_types`, `delete_post_type`. Kayıtlar, seçenekler tablosu aracılığıyla yeniden başlatmalarda kalıcıdır.
- **Özel Taksonomi yetenekleri** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. İsteğe bağlı yeniden yazma slug'ları ile hiyerarşik ve düz taksonomileri destekler.
- **Tasarım Sistemi yetenekleri** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Beş küratörlü ön ayar içerir: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Stil yetenekleri** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. WordPress Global Styles API'si aracılığıyla theme.json değerlerini okur ve yazar.
- **Navigasyon Menüsü yönetimi yeteneği** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. İç içe menüleri ve tema konumu atamasını destekler.
- **Seçenekler Yönetimi yeteneği** — `get_option`, `set_option`, `delete_option`, `list_options`. Kritik WordPress seçeneklerini değişiklikten koruyan yerleşik bir güvenlik kara listesi içerir.
- **Yüklenebilir Yetenekler Kayıt Defteri** — `list_available_abilities`, `install_ability`, `recommend_plugin`. WordPress plugin'leri olarak dağıtılan yetenek paketlerini keşfedin ve etkinleştirin.
- **Site Oluşturucu Orkestrasyon v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Plugin keşfi, adım çıktısı referansları, ilerleme takibi ve otonom hata kurtarma içeren çok aşamalı site oluşturma planları.
- **Restoran web sitesi benchmark sorusu** (`q-restaurant-website`) — CPT kaydı, tasarım sistemi, navigasyon ve plugin keşfini kapsayan uçtan uca test.
- **AI sağlayıcı bağlayıcı pluginleri**, daha hızlı yerel geliştirme kurulumu için WordPress Playground blueprint'lerine eklendi.

### Geliştirildi {#improved-1}

- README, AI sağlayıcı bağlayıcı dokümantasyonu ve kurulum talimatları ile güncellendi.

### Düzeltildi {#fixed-1}

- `main` dalındaki 25 PHPUnit test hatası çözüldü.
- `blueprint.json` dosyasındaki GitHub yayın URL formatı düzeltildi.
- Eski kimliklerle çakışmayı önlemek için Görev Kimliği yeniden numaralandırıldı.

---

## 1.3.x {#13x}

_Önceki sürüm notları plugin deposunda tutulmaktadır._
