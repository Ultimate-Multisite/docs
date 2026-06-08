---
title: Usage-based Plans Changelog
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Ölçümlü Planlar Değişiklik Günlüğü

Version 1.1.0 - Yayınlandı: 2026-05-05
- Yeni: Çoklu site alt siteleri için Yapay Zeka (AI) jeton faturalaması — Yapılandırılabilir jeton başına oranlarla müşteri siteleri genelindeki AI jeton kullanımını izleyin ve faturalandırın.
- Yeni: Bağlayıcı (Connector) zorlaması, dinamik limit keşfi ve write-through ile yeniden yapıldı; bu sayede tüm bağlayıcılarda gerçek zamanlı doğruluk sağlanıyor.
- Düzeltme: Veritabanı tablosu yükseltmeleri artık BerlinDB şema tanımlarıyla doğru bir şekilde hizalandı, bu da yeni kurulumlarda yükseltme hatalarını önlüyor.
- Düzeltme: Veritabanı yükseltme geri çağrıları (callbacks) doğru formata dönüştürüldü, bu da sessiz yükseltme hatalarını çözdü.
- Düzeltme: AI Kullanım Fazla Kullanım Ek Ücreti (Overage Markup) giriş alanında kesirli değerler artık kabul ediliyor.
- Düzeltme: Eklenti yüklenmesi sırasında yaşanan ölümcül hatalar ve çift başlatma sorunları çözüldü.
- Geliştirildi: Geliştirici ortamlarının ilk çalıştırmada kendini yapılandırmasını sağlayan check-env npm script'i eklendi.

### 1.0.3
* Plugin Update Checker v5'e güncellendi.
* Modern WordPress eklenti başlıkları eklendi.
* En son WordPress sürümleriyle uyumluluk geliştirildi.
* Kullanım takibi performansı artırıldı.

### 1.0.2
* Hata düzeltmeleri ve performans iyileştirmeleri.
* Kullanım raporlaması geliştirildi.

### 1.0.0
* İlk sürüm.
* Temel ölçümlü faturalama işlevi.
* Kullanım takibi ve fazla kullanım hesaplaması.
* Otomatik fatura oluşturma.
