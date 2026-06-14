---
title: Çykyş Notları
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Çykyş Notları

## Versiya 2.13.0 — 2026-06-05-de Çykaryldy

- Täze: Müşteri hesabı, checkout, fatura, sayt, şablon değiştirme we domen eşleştirme akymlary üçin sovrann tenant (sovereign-tenant) durnamasy goşuldy. Bu bilen tenant taraplar müşterileri yönetilen hereketler üçin esas sayta geri yöneltebilirler.
- Täze: Tekrarlanan üyelikler üçin yenileme kredensialar çekuşlary goşuldy, böylece gateway-ler sazlanyp saklanýan fatura kesişleri, subskripsiýa ýa-da vault tokeni tapylmasa awtomatik yenilenmegi sazlanyp sazlanyp bilmezler.
- Täze: Sayt döredilip duran üçin HMAC-verified loopback publishing goşuldy, bu bolsa arka plan işleri geç bol bolýan hostlarda checkout-to-site proviziýa prosesini has yzygider edýär.
- Täze: SSO URL-leri, checkout-form esas domenleri we awtomatik domen-record döretmek üçin developer extension pointleri goşuldy.
- Düzeltme: SSO sazlanyp saklanýan domenler aralygynda has yzygiderdir, anonim broker wizytleri, logout we pluginler arası çakmalaryndan tapylma problemalaryny aňladyp biler.
- Düzeltme: Sayt döredilip duran üçin sazlanyp saklanýan publish flaglaryndan has gowy hasaplaýar we müşterileri sayt döretmek ekranında ýatdyrmagyňdan gaçyp bilýär.
- Düzeltme: Paytaç checkout-form esas domenleri üçin domen recordlar artdyrylmadyr, we integrasiýa işlemezlikde sazlanyp saklanmagan host-provider arka plan işleri geçilip geçilmez.
- Düzeltme: Checkout, fatura adresi, şifre hasaplamak, email tassyklamak, şablon değiştirme, tourlar we müşteri dashboardynda bolan başga meseleler normal müşderi akymlaryny bloklamaz.
- Düzeltme: Paytaç emailleri indi aljymaýjylary gizli tutýar, eýsem aljyma ýaly ýa-da mail transportlary tapylmasa SMTP/plugin fatal hatalaryndan gaçyp bilýär.
- Düzeltme: Üyelik yenilenmeleri, gysga wagtyň aýlanmagy we tölemek üçin meseleler indi has çalt aýlanmalary, çöküntileri ýa-da zerur tölegleri tapylmadyklyklary gaçyp bilýär.
- Gelişdirildi: WordPress 7.0-a çenli jogapkärçiligi test edildi, öňki Vue assetleri npm mannalarından ýen döredilip alnyp, Cypress end-to-end görkezmeleri indi has köp checkout, guramak, SSO we gateway akymlaryny synaglyp biler.

## Versi 2.12.0 — 2026-05-15-de çykaryldy

- Täze: Hostinger (hPanel) host provaydaryny domain eşleşdirme integrasiýasy bilen birlikte desteklenen host provaydar hökmünde goşuldy
- Täze: Site Exporter indi ulgamyň ähli taraplar üçin siteyi gurluşy arkaly ağ import paketlerini işleýär, bu bolsa ulgamda siteyi has ýönekeý etmek üçin amatlydyr.
- Düzedildi: BCC habarlaryny göndermegi üçin indi kabul ediji ady açyk däl header bilen ulanylýar, bu bolsa kabul edijileri aşkar etmegiň öňüni alýar.
- Düzedildi: Gelji üyeliği sanyny ýazyp saklamakda mesele bolan wagtyň hasaplamasy artık bozulmadykdyr.
- Düzedildi: Stripe üyeliği güncellenmelerinde indi eski API-ni (deleteDiscount) çağırmak arkaly indirimleri dogry aradan aýyrmagyň öňüni alýar.
- Düzedildi: Domain eşleşdirilen site üçin SSO ýerlendirmeleri synagdan soň sınırlanmadyk döngüleriň öňüni almak üçin artdyryldy.
- Düzedildi: Kuramak arkaly resminji görkezijini (image picker) saýlamakda ulgamyň esasy maglumat modelini dogry güncelleýar.
- Düzedildi: Site Exporter CLI indi dogry standart ağ siteini saýlap saklaýar.
- Gelişdirildi: Plugin paketindäki wp-cli toparlanmagyny aýyrmagyň netijesinde plugin ululygyny azaldyrmak üçin toparlanma (bundling) ýok edildi.

## Versi 2.11.0 — 2026-05-11-de çykaryldy

- Täze: Site eksportlary indi özüni başlatýan `index.php` faylyny toparlaýar, bu bolsa ZIP arkyny täze hostda egerlik paketini ayrı plugin goşmak arkaly ýüklemek üçin amatlydyr.
- Täze: Ağ eksporty administrasiýaçylara Site Export admin sahhasından ähli taraplar üçin siteji bir arkada eksport etmegi mümkinçilik berýär.
- Täze: Site Template planyny özleşdirmek düwmesi indi ýokary derejeli dogrylygy (fallback chain) arkaly işlemek arkaly zorunlu, bu bolsa plan çäklerini görkezmek üçin template bar bolmagyny dogry cheklendirýär.
- Täze: Checkout form edytijisinde resminji ulanyjy sazlaryň ýerleşdirilip biljekligi belirmekden soň, zerurlaşdyrylan ulanyjylar ýok edilmese hem habar berýär.
- Täze: Import/Export saplanyşyklary tabyny indi öz işini has anyk düşündirýär we Site Export gurşawyna dogry arkaly baglanýar.

## Versi 2.10.0 — 2026-05-05-de çykaryldy

- Täze: Manuel kimlik doğrulama girişi için PayPal rehberli kurulum sihirbazı, sorunsuz ağ geçidi yapılandırması için OAuth bayrak kapısı ile yeni eklendi.
- Täze: Şablon değiştirme müşteri paneli, mevcut şablon kartı, kalıcı ızgara ve **Mevcut şablonu sıfırla** butonu ile yeniden tasarlandı.
- Düzeltme: Şablon değiştirme artık AJAX hatasında arayüzü takılı kalmıyor.
- Düzeltme: Şablon değiştirme izin durumları yetkisiz erişime karşı güvence altına alındı.
- Düzeltme: Site geçersiz kılma girdileri kaydetmeden önce doğrulanıyor.
- Düzeltme: Adres boş olduğunda fatura adresi istemi artık gösteriliyor.
- Düzeltme: PHP 8.1 null'dan string'e geçiş uyarısı düzeltildi.
- Düzeltme: Zamanlama sorunlarını önlemek için mevcut lazy-loaded (tembel yüklenen) öğeler init hook'undan önce yapılıyor.
- Düzeltme: Filtrelenmiş SSO yolu tüm giriş akışlarında korunuyor.
- Düzeltme: Kaydedilirken boş site kimliği seçenekleri korundu.

## Sürüm 2.9.0 — 30 Nisan 2026'da Yayınlandı

- Täze: **Araçlar > Dışa/İçe Aktar** altında tek site dışa aktarma ve içe aktarma eklendi.
- Düzeltme: Dışa aktarma ZIP dosyaları artık kimlik doğrulamalı indirme uç noktası üzerinden sunuluyor.
- Düzeltme: Bekleyen dışa/içe aktarma sorgularındaki SQL enjeksiyonu riski ve sorgu sorunları düzeltildi.
- Düzeltme: Yönetici müşteri e-postasını manuel olarak doğruladığında bekleyen site yayınlanmıyor.
- Düzeltme: Üyelik eksik olduğunda yetim `pending_site` kayıtları temizlendi.
- Düzeltme: Ayarlar gezinme dolgusu ve arama çubuğu bağlantı navigasyonu düzeltildi.
- Düzeltme: Bekleyen siteler artık Tüm Siteler görünümünde ilk sırada gösteriliyor.
- Düzeltme: Ekran görüntüsü sağlayıcısı (mShots) 403 hatalarını önlemek için User-Agent başlığı eklendi.
- Düzeltme: İçe aktarma cron programı dairesel bağımlılığı çözüldü.
- Düzeltme: Kullanıcı ayarları anahtarlarında Tour ID'ler alt çizgiye dönüştürüldü.
- Geliştirildi: Daha iyi uyumluluk için ZipArchive artık Alchemy/Zippy yerine kullanılıyor.

## Sürüm 2.8.0 — 29 Nisan 2026'da Yayınlandı

- Täze: Biri (Jumper) düğmesini "Other Options" ayarlary UI-sına eklenip işe tutuldy.
- Täze: Checkout formlary list tablosuna Status sütunu goşdirildi.
- Täze: Custom MU-plugin sunrise genişletmeleri üçin Addon sunrise file loader goşdirildi.
- Gelişdirildi: Ayarlary sayfasından error-reporting (xatolary bildirme) seçimi ýerinden aýyrdyk.
- Düzertme: Thank-you sayfası site kartasy — surat şu wagt çäkli edildi we linkler dogry stil edilip goşdirildi.
- Düzertme: Screenshot provider thum.io-dan WordPress.com mShotsa geçirilip işe tutuldy.
- Düzertme: Registration (Ýazylmak) we Default Role (Aýratyn Rol) şu wagt täze kurmakda dogry defaultlar goşdirildi.
- Düzertme: `get_site_url()` indi domany port hasap etse hem boş ýerden döndürmez.
- Düzertme: `copy_media` setting boşdykda media fayllary dogry nusgalanmagy üçin düzeltildi.
- Düzertme: Network-activate sitemeta ýazyp geçenden soň Object cache dogry geçirilip işe tutuldy.
- Düzertme: 3 bölekli domany DNS barlagyndan geçiren wagtda Custom domain awtomatiki primary (başlyk) bolsa goşdirilýar.
- Düzertme: Sazyn öwülen töleg ýerine ýetirilen bolsa, Pending membership (Sazyn üyeliği) ýapylyp gidýar.
- Düzertme: Inline login (dogry girisi) soragy ýapylyp gitenden soň Password strength checker (Şifre güýjüçiligini barlamak) dogry işe tutuldy.
- Düzertme: Site hali döredilip bolsa, thank-you sayfasında sonsuz bolan sayt ýüklenmesi togtatylmadyk.
- Düzertme: Plugin aktivir edilende we ayarlary saklananda WP core registration opsiyasy senkronizirlenip işe tutuldy.
- Düzertme: PHP 8.4 bilen sazlaşmak üçin `calculate_expiration` içinde Null expiration guard goşdirildi.
- Düzertme: Iňlisde (customer) aktiv üyeliği bar bolsa, duplicate signups (duplikat ýazylmaklar) bloklanýar.
- Düzertme: Checkoutda `date_expiration` üçin Null check goşdirildi.
- Düzertme: Site provizionaly güýçlendirilip geçildi — çäklemeler, membership inference (üyeliği tapmak), domain promosiýasy.
- Düzertme: Barlag ýok bolsa, Pre-install (Kurmazdan öň) barlagy status etiketini "NOT Activated" diýip dogry goşdirildi.
- Düzertme: Email barlagлары üçin checkoutda ulanylýan site domany düzeltildi.
- Düzertme: Password field ýok bolsa, checkoutdan soň awtomatiki login işe tutuldy.
- Düzertme: Bestsiz üyeliikler (Free memberships) indi ýapylyp gitmez — ol ömür boyu kabul edilýär.

- Görmek: E-posta tassyklama (verification gate) site ni użytkownik e-postanynı doğrulayana kadar yayınlamaz.
- Görmek: SES v2 API endpoint baz yolu ve kimlik rotası düzeltildi.
- Görmek: `wu_inline_login_error` hook'u ön gönderim yakalama bloğunda yayımlanıyor.
