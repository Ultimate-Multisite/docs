---
title: KDV Değişiklik Günlüğü
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# KDV Değişiklik Günlüğü {#vat-changelog}

Version 1.0.7 - Yayınlanma Tarihi 2026-02-03

* Düzeltme: VIES SOAP hizmetindeki MS_MAX_CONCURRENT_REQ hataları nedeniyle Alman (DE) KDV numaraları doğrulama sırasında başarısız oluyordu. Daha güvenilir doğrulama için eski SOAP API'sinden resmi AB VIES REST API'sine geçildi.
* Düzeltme: Artık VIES hizmeti geçici olarak kullanılamadığında KDV numaraları yanlışlıkla reddedilmek yerine kabul ediliyor. Daha sonra incelenmesi için bir günlük kaydı oluşturuluyor.
* Düzeltme: KDV/Vergi Kimlik Numarası alanı artık sadece AB üyeleri için değil, tüm ülkeler için görünür. AB dışı vergi kimlik numaraları (örneğin İsviçre CHE numaraları) VIES doğrulaması yapılmadan fatura gösterimi için depolanıyor.
* Düzeltme: Yunanistan (GR), Monako (MC) ve Man Adası (IM) için KDV öneki arama mantığı, yanlış dizi arama mantığı nedeniyle bozulmuştu.
* İyileştirme: Site Exporter eklentisi ile birlikte kullanıldığında kritik hatalara neden olabilecek gereksiz wp-cli-bundle geliştirme bağımlılığı kaldırıldı.
* İyileştirme: Kapsamlı bir birim test paketi (53 test) eklendi.

Version 1.0.6 - Yayınlanma Tarihi 2026-01-25

* Düzeltme: Yerel B2B işlemleri artık KDV'yi doğru bir şekilde tahsil ediyor. AB KDV kurallarına göre, ters vergilendirme yalnızca sınır ötesi B2B işlemleri için geçerlidir, müşterinin ülkesi ile şirketin ülkesi eşleştiğinde değil.

Version 1.0.5 - Yayınlanma Tarihi 2026-01-22

* Düzeltme: Eklenti yüklenmiyor veya düzgün çalışmıyordu.
* Değişiklik: Daha güvenilir ve aktif olarak güncellenen veriler için KDV oranı veri kaynağı euvatrates.com'dan ibericode/vat-rates deposuna geçirildi.
* Düzeltme: super_reduced_rates seçeneğindeki yazım hatası düzeltildi.
* İyileştirme: Hataları önlemek için ülke kodu işleme alanına null kontrolleri eklendi.
* Değişiklik: Traduttore üzerinden otomatik güncellemeler lehine paketlenmiş çeviri dosyaları kaldırıldı.

Version: 1.0.3 - Yayınlanma Tarihi 2025-09-28

* Ön eki ultimate-multisite olarak yeniden adlandırıldı; metin alanı güncellendi; sürüm numarası artırıldı.

Version 1.0.0-beta.4 - 2021-09-24

* Eklendi: mu-plugins tabanlı kurulumlar için wp_ultimo_skip_network_active_check filtresi;

Version 1.0.0 - 05/08/2021 - İlk Yayın
