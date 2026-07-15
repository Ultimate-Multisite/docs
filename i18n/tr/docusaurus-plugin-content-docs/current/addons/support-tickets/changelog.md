---
title: Destek Bileti Değişiklik Günlüğü
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Destek Bileti Değişiklik Günlüğü

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* İyileştirildi: vendor/ dizini Git takibinden çıkarıldı (zaten .gitignore tarafından kapsanıyor), bu da depo boyutunu küçülttü.
* İyileştirildi: WordPress 7.0'a kadar test edildi.

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Düzeltildi: Boş (null) değerleri, boş geçilebilir bilet modeli ayarlayıcılarda kabul etme.
* Düzeltildi: Doğru çoklu site desteği için tüm biletler global ağ çapında tablolarda saklanıyor.
* Düzeltildi: Personel alanları gizlendi ve müşteri yeni bilet formunda boş sayfa yönlendirmesi düzeltildi.
* Düzeltildi: Meta veri depolama için undefined add_meta() çağrıları, doğru update_meta() ile değiştirildi.
* Düzeltildi: Kayıtlı olmayan yetenek kontrolü, doğru wu_view_all_support_tickets ile değiştirildi.
* Düzeltildi: Bilet durumu, atama ve hızlı düzenleme eylemleri için eksik AJAX işleyicileri eklendi.
* Düzeltildi: Bilet görünümlerinde personel yanıt algılama yöntemi düzeltildi.
* Düzeltildi: Tekrarlanan yanıt işleyicileri birleştirildi ve nonce eylem adları hizalandı.
* Düzeltildi: [wu_submit_ticket] kısa kodu için eksik ön yüz görünümü eklendi.
* Düzeltildi: Eksik user_id sütunu eklendi ve Support_Ticket::get_user_id() metodu düzeltildi.
* Düzeltildi: Öncelik filtreleme seçenek etiketindeki fazladan çift tırnak kaldırıldı.
* Düzeltildi: Süper yöneticiler için ağ yöneticisi bilet yönetim paneli eklendi.
* İyileştirildi: Yönetici CSS'si tek bir harici stil sayfasına birleştirildi.
* İyileştirildi: Alt site yönetici menüsünden Ayarlar alt menüsü kaldırıldı.
* İyileştirildi: Ön yüz varlıkları, yalnızca destek bileti sayfalarında koşullu olarak yüklenecek şekilde ayarlandı.
* İyileştirildi: Bedrock kök otomatik yükleyicisi zaten bağımlılıkları yüklemişse, eklenti otomatik yükleyicisi atlandı.

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Eklendi: Yönetici ve ön yüz için tam bilet görüntüleme işlevi.
* Eklendi: Bilet yanıt gönderimleri için AJAX işleyicisi.
* Eklendi: Doğru form işleme ile bilet yanıt işlevi desteği.
* Eklendi: Yönetici panelinde bilet gönderimleri ve yanıtlar için uygun bildirim gösterimi.
* Eklendi: Müşteri tarafından yapılan kendi başvurularında otomatik bilet ilişkilendirmesi.
* Eklendi: Müşterilerin bilet sahipliğini geçersiz kılmasını önlemek için güvenlik geliştirmesi.
* Eklendi: Eksik yardımcı fonksiyonlar (wu_format_date, wu_user_can_view_ticket vb.).
* Eklendi: Uygun dosya ekleme indirme ve işleme.
* Eklendi: Bilet yanıtları ve durum değişiklikleri için e-posta bildirim sistemi.
* Düzeltildi: Bilet yanıt formu artık gerekli bilet kimliğini içeriyor.
* Düzeltildi: Yönetici bilet görünümlerindeki bildirim görünürlüğü sorunları.
* Düzeltildi: Destek bileti fonksiyonlarındaki sözdizimi hataları.
* İyileştirildi: Yanıtlar ve ekler için uygun sorgu ve şema sınıflarına sahip veritabanı yapısı.
* İyileştirildi: Bilet modelleri için nitelikler yerine gerçek özelliklere geçiş yapıldı.

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Güncellendi: Tutarlılık için öneki ultimate-multisite olarak yeniden adlandırıldı.
* Güncellendi: Metin alanı standartlaştırıldı.
* Düzeltildi: Küçük hata düzeltmeleri ve iyileştirmeler.

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* İlk sürüm
* Tam bilet yönetim sistemi
* Çok seviyeli erişim kontrolü
* Konu bazlı konuşma sistemi
* Dosya ekleme desteği
* E-posta bildirim sistemi
* Yönetici ve müşteri arayüzleri
* İstatistik ve raporlama
