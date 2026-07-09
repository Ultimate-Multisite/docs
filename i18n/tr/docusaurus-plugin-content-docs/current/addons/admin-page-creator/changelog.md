---
title: Admin Page Creator Değişiklik Günlüğü
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin Page Creator Değişiklik Günlüğü {#admin-page-creator-changelog}

### Version 1.9.0 - 2026-01-18 tarihinde yayınlandı {#version-190---released-on-2026-01-18}

* Düzeltildi: Etkinleştirilirken kritik hatalar.
* Yeniden yapılandırıldı: İçerik kaynağı sınıfları, doğru ebeveyn yapıcı başlatılmasıyla Singleton özelliğini kullanacak şekilde güncellendi.
* Düzeltildi: İçerik türü seçicisinin yüklenmesini engelleyen Vue.js şablon derleme hataları.
* Düzeltildi: Eksik Vue veri özellikleri (template_id, external_link_url_embedable, external_link_url_checking).
* Düzeltildi: TinyMCE editörünün sayfa yüklenirken düzgün başlatılmaması.
* Düzeltildi: Divi destek dosyasının Composer aracılığıyla otomatik yüklenmemesi.
* Düzeltildi: Divi destek sınıfındaki bozuk PHP sözdizimi.
* İyileştirildi: JavaScript varlık (asset) düzenlemesi ve küçültülmesi (minification).
* İyileştirildi: En son WordPress ve sayfa oluşturucu (page builder) sürümleriyle uyumluluk.

= Sürüm: 1.8.8 - 2025-09-28 tarihinde yayınlandı

* Ön eki ultimate-multisite olarak yeniden adlandırıldı; metin alanı güncellendi; sürüm numarası artırıldı.

### Version 1.8.7 - 04/10/2023 {#version-187---04102023}

* Düzeltildi: Yeni bir yönetici sayfası eklenmeye çalışılırken kritik hata.
* Düzeltildi: Oxygen stil sayfası ön ekiyle çakışma.

### Version 1.8.6 - 09/08/2023 {#version-186---09082023}

* Eklendi: Ana site veya mevcut alt site verilerini görüntüleme seçeneği eklendi.
* Eklendi: WordPress Block Editor (Gutenberg) desteği eklendi.
* Düzeltildi: Brizy sayfa varlıklarının yüklenmemesi sorunu giderildi.

### Version 1.8.5 - 09/12/2020 {#version-185---09122020}

* Düzeltildi: Menüyü gizlemek için Ekran Seçenekleri'ndeki (Screen Options) sorunun kalmaması.

### Version 1.8.4 - 11/11/2020 {#version-184---11112020}

* Düzeltildi: Multisite Ultimate v2 desteği.

### Version 1.8.3 - 01/10/2020 {#version-183---01102020}

* Düzeltildi: Önceki derlemeden kalan Beaver Builder uyumsuzlukları.
* Düzeltildi: WP 5.5 ile kenar boşluğu (margin) tutarsızlıkları.

### Version 1.8.2 - 21/09/2020 {#version-182---21092020}

* Düzeltildi: WP 5.5 ile küçük uyumsuzluklar.

### Version 1.8.1 - 05/08/2020 {#version-181---05082020}

* Düzeltildi: Brizy 2.0 ile uyumsuzluk.
* Düzeltildi: Menü listesi oluşturulurken küçük performans sorunları.

### Version 1.8.0 - 27/04/2020 {#version-180---27042020}

* Düzeltildi: Margin modu seçilmediğinde üst çubukta gizlenen bildirimler.
* Eklendi: Özel sayfalar artık birden fazla WordPress yönetici üst düzey ve alt sayfasının yerine geçebilir.
* Eklendi: Yöneticiler artık WP Admin Pages PRO kullanılarak yönetici sayfalarını gizleyebilir.

### Version 1.7.9 - 01/04/2020 {#version-179---01042020}

* Düzeltildi: Brizy 1.10.118 ve üzeri sürümlerin yönetici sayfalarındaki SVG desteğini bozması.

### Version 1.7.8 - 26/03/2020 {#version-178---26032020}

* Düzeltildi: Fransızca kullanılırken Editör sayfasını bozan kaçış (escaping) hatası.

### Version 1.7.7 - 04/03/2020 {#version-177---04032020}

* Düzeltildi: Brizy Builder ile küçük uyumsuzluk.
* İyileştirildi: Freemius SDK 2.3.2'ye güncellendi.

### Version 1.7.6 - 10/02/2020 {#version-176---10022020}

* Düzeltildi: Yönetici Sayfası düzenleme düğmesinin Dashboard Widget'larında sağ alt köşede çalışmaması.
* Düzeltildi: Astra ile küçük uyumsuzluk.
* Düzeltildi: Brizy'nin yeni sürümünün uyumluluğu bozması.

### Version 1.7.5 - 14/12/2019 {#version-175---14122019}

* Düzeltildi: Menü öğlerini "Yerine Koyma Sayfası" (Replace Page) seçeneğinde doldurmak için yeni bir uç durum (edge-case) işleyicisi eklendi.
* Düzeltildi: Elementor yazı tiplerinin çalışmaması.
* İyileştirildi: Hesap sayfasındaki hassas bilgileri gizlemeyi desteklemek için Freemius SDK güncellendi.

### Version 1.7.4 - 29/11/2019 {#version-174---29112019}

* Düzeltildi: WooCommerce Memberships ile uyumsuzluk.
* Düzeltildi: Oxygen Builder sekme bileşeninin çalışmaması.
* Düzeltildi: Beaver Themer'ın çalışmaması.

### Version 1.7.3 - 12/07/2019 {#version-173---12072019}

* Düzeltildi: Bir sayfanın ebeveyni başka bir yönetici sayfa türüne dönüştürüldüğünde sayfaların kaybolması.
* İyileştirildi: Yönetici Sayfası türleri arasında daha iyi liste tablo ayırıcıları.
* İyileştirildi: Eklentinin tüm kod tabanının Güvenlik İncelemesi yapıldı.
* İyileştirildi: Bir özellik belirli bir menü/içerik kaynağı türü için mevcut olmadığında Ayırıcı (Separator) sekmesindeki uyarı notu.

### Version 1.7.2 - 01/07/2019 {#version-172---01072019}

* Düzeltildi: Freemius SDK sürümü 2.3.0'ye güncellendi.
* Düzeltildi: Flywheel ile uyumsuzluk sorunu.

### Version 1.7.1 - 27/06/2019 {#version-171---27062019}

* Düzeltildi: Hoş Geldiniz Widget'ı (Welcome Widget) artık tüm roller için görüntüleniyor.
* Düzeltildi: Yönetici Sayfaları menüsünü gizlemek, https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/ adresinde belgelenen filtre yoluyla gizleniyorsa Ekran Seçeneği'nin eklenmemesi.
* İyileştirildi: Yönetici Sayfaları menülerini gizlemek, artık Beaver Builder kaydedilmiş şablon listesinden oluşturulan şablonları da gizliyor.
* Eklendi: Yönetici sayfalarını toplu olarak etkinleştirme ve devre dışı bırakma seçenekleri.
* Eklendi: Sayfaları ana sitede de görüntüleme seçeneği.
* Eklendi: Yerine Koyma modunda üst ve alt düzey menü etiketlerini yeniden adlandırma seçeneği.

### Version 1.7.0 - 04/06/2019 {#version-170---04062019}

* Düzeltildi: Oxygen şablonlarının görünmemesi sorunları.
* Eklendi: Widget Oluşturma desteği!

### Version 1.6.1 - 22/05/2019 {#version-161---22052019}

* Düzeltildi: Yazım hataları.
* Düzeltildi: Alt menü sayfalarının aynı sıralama değeriyle önceki alt menü öğlerini geçersiz kılması.
* Düzeltildi: Çoğaltma artık çoğaltılan sayfanın slug'ını sıfırlıyor.
* İyileştirildi: pt_BR ve es_ES po dosyaları güncellendi.
* İyileştirildi: Liste tablosu artık özel sayfaları da ebeveyn sayfalar olarak listeliyor.

### Version 1.6.0 - 21/05/2019 {#version-160---21052019}

* Eklendi: Harici Bağlantılar artık iframe yüklemesini de destekliyor.

### Version 1.5.5 - 17/05/2019 {#version-155---17052019}

* Düzeltildi: Bir sayfa silindiğinde veya çoğaltıldığında uyarı mesajı verilmesi.
* Düzeltildi: İzin ayarlarının Yöneticilere uygulanmaması.

### Version 1.5.4 - 08/05/2019 {#version-154---08052019}

* Düzeltildi: Sliced Invoices ile uyumsuzluklar.
* Düzeltildi: Oxygen ile küçük bir sorun.
* Düzeltildi: Yeni yönetici sayfası başlık alanındaki yer tutucunun (placeholder) key-up sırasında kaybolmaması.

### Version 1.5.3 - 03/05/2019 {#version-153---03052019}

* Düzeltildi: Advanced Custom Field seçenek sayfaları ile uyumsuzluk.
* Eklendi: Özel yönetici sayfalarının hedefi olarak belirli kullanıcılar ekleme seçeneği.

### Version 1.5.2 - 30/04/2019 {#version-152---30042019}

* Düzeltildi: Brizy'nin daha yeni sürümleriyle uyumsuzluklar.
* Eklendi: İspanyolca çeviri eklendi - John Rozzo'ya teşekkürler. Teşekkürler, John!
* Eklendi: Oxygen Builder için Beta desteği.

### Version 1.5.1 - 15/04/2019 {#version-151---15042019}

* Düzeltildi: Normal ve HTML editörlerindeki yer tutucularla ilgili sorun.
* Düzeltildi: Yönetici Sayfaları'nın Araçlar -> Dışa Aktarma'da görünmemesi.
* Düzeltildi: Betikleri ve stilleri yalnızca kendi sayfalarımızda yükleme.
* Eklendi: Süper Yöneticiler artık Yönetici Sayfalarını çoğaltabilir.

### Version 1.5.0 - 29/03/2019 {#version-150---29032019}

* Düzeltildi: Sentry tarafından yakalanan küçük hatalar.
* Düzeltildi: Düzenlenen Yönetici Sayfası ekranında silme düğmesinin çalışmaması.
* İyileştirildi: BeaverBuilder düğmesi, Standart BB lisansının da desteklendiğini açıkça belirtmek için değiştirildi.
* Eklendi: Yöneticiler artık alt menülerin sırasını da ayarlayabilir.
* Eklendi: Yerine Koyma modu artık mevcut tüm menü öğelerini destekliyor.

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Eklendi: https://wpadminpagespro.com adresinde Bağımsız eklenti (Stand-alone plugin) olarak yayınlandı.
* Eklendi: Sayfa oluşturma işlemi tamamlandıktan sonra Yönetici Sayfaları menü öğesini kaldırma seçeneği.
* Eklendi: Yönetici sayfasındaki bildirimleri kaldırma seçeneği.
* Eklendi: İçerik işleme, böylece {{user:first_name}} gibi yer tutucular koyabilir ve bunlar otomatik olarak kullanıcı first_name meta alanı ile değiştirilebilir.
* Eklendi: Satır İçi Editör (Inline Editor).
* Eklendi: Gelecekte yeni Sayfa Oluşturucular/İçerik Kaynakları eklemeyi kolaylaştırmak için birleştirilmiş içerik kaynağı ebeveyn sınıfı.
* Eklendi: Harici URL desteği.

### Version 1.3.0 - 15/01/2019 {#version-130---15012019}

* Düzeltildi: Multisite ortamlarında Yönetici Sayfaları ana sitede görünmüyordu.
* İyileştirildi: Alt sitelerin dışa aktarma ekranından Multisite Ultimate özel gönderi türleri kaldırıldı.
* Eklendi: Oluşturma sayfalarında ağ yöneticileri için hızlı eylemler içeren üst çubuk.
* Eklendi: BÜYÜK! Elementor Desteği!
* Eklendi: BÜYÜK! Brizy Desteği!

### Version 1.2.1 - 17/11/2018 {#version-121---17112018}

* Düzeltildi: Eklentiyi Multisite Ultimate 1.9.0 ile uyumlu hale getirme.

### Version 1.2.0 - 10/09/2018 {#version-120---10092018}

* Eklendi: wp-config.php dosyasında WU_APC_ALLOW_PHP_PROCESSING true olarak ayarlanırsa PHP desteği eklendi. Bu, PHP'nin eval'ını kullanmaz, ancak yine de güvenlik açıklarına yol açabilir. Dikkatli kullanın;
* İyileştirildi: Eklenti eklentisi güncelleyicisi.
* İyileştirildi: Güncelleme sunucusu için yeni URL.

### Version 1.1.2 - 16/08/2018 {#version-112---16082018}

* Düzeltildi: WP Engine ile küçük bir sorun.

### Version 1.1.1 - 16/08/2018 {#version-111---16082018}

* Düzeltildi: Yerine koyma sayfalarına izinlerin doğru uygulanmaması.

### Version 1.1.0 - 15/08/2018 {#version-110---15082018}

* Eklendi: Beaver Builder şablonları artık destekleniyor! Özel yönetici sayfaları oluşturmak için favori sayfa oluşturucunuzu kullanabilirsiniz;
* Eklendi: Artık WordPress varsayılan yönetici sayfalarının içeriğini de değiştirme mümkün.
* Eklendi: Artık oluşturulan içeriği varsayılan WordPress yönetici sayfalarının üstüne veya altına ekleme mümkün.

### 0.0.1 {#001}
- İlk Yayın
