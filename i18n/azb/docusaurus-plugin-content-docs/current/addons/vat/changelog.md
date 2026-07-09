---
title: VAT Changelog
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# KDV Değişiklik Günlüğü {#vat-changelog}

Version 1.0.7 - Yayınlanma tarihi 2026-02-03

* Düzeltme: Almanya (DE) KDV numaralarının VIES SOAP hizmetinde yaşanan MS_MAX_CONCURRENT_REQ hataları nedeniyle doğrulanamaması sorunu düzeltildi. Daha güvenilir doğrulama için eski SOAP API yerine resmi EU VIES REST API kullanıldı.
* Düzeltme: VIES hizmeti geçici olarak kullanılamadığında, KDV numaraları artık yanlışlıkla reddedilmek yerine kabul ediliyor. Daha sonra incelenmesi için bir log kaydı oluşturuluyor.
* Düzeltme: KDV/Vergi Kimlik Numarası alanı artık sadece AB üyeleri için değil, tüm ülkeler için görünür. AB dışı vergi kimlik numaraları (örneğin İsviçre CHE numaraları) VIES doğrulaması yapılmadan fatura gösterimi için kaydediliyor.
* Düzeltme: Yunanistan (GR), Monako (MC) ve Man Adası (IM) için KDV öneki arama mantığı, hatalı dizi arama mantığı nedeniyle bozulmuştu.
* İyileştirme: Site Exporter eklentisi ile birlikte kullanıldığında kritik hatalara neden olabilecek gereksiz wp-cli-bundle geliştirme bağımlılığı kaldırıldı.
* İyileştirme: Kapsamlı bir birim test paketi (53 test) eklendi.

Version 1.0.6 - Yayınlanma tarihi 2026-01-25

* Düzeltme: Yerel B2B işlemleri artık KDV'yi doğru bir şekilde yansıtıyor. AB KDV kurallarına göre, ters vergilendirme (reverse charge) yalnızca sınır ötesi B2B işlemleri için geçerlidir, şirketin ülkesi ile müşterinin ülkesi aynı olduğunda değil.

Version 1.0.5 - Yayınlanma tarihi 2026-01-22

* Düzeltme: Eklenti yüklenmiyor veya düzgün çalışmıyordu.
* Değişiklik: Daha güvenilir ve aktif olarak güncellenen veriler için KDV oranı veri kaynağı euvatrates.com'dan ibericode/vat-rates deposuna geçirildi.
* Düzeltme: super_reduced_rates seçeneğindeki yazım hatası düzeltildi.
* İyileştirme: Hata oluşmasını engellemek için ülke kodu işleme alanlarına null kontrolleri eklendi.
* Değişiklik: Traduttore üzerinden otomatik güncellemeleri tercih ederek paketlenmiş çeviri dosyaları kaldırıldı.

Version: 1.0.3 - Yayınlanma tarihi 2025-09-28

* Ön ek ultimate-multisite olarak yeniden adlandırıldı; metin alanı güncellendi; sürüm numarası artırıldı.

Version 1.0.0-beta.4 - 2021-09-24

* Eklendi: mu-plugins tabanlı kurulumlar için wp_ultimo_skip_network_active_check filtresi.

Version 1.0.0 - 05/08/2021 - İlk Yayın
