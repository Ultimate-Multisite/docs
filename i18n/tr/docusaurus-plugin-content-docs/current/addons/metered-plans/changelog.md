---
title: Ölçümlü Planlar Değişiklik Günlüğü
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Ölçümlü Planlar Değişiklik Günlüğü {#metered-plans-changelog}

Version 1.1.0 - Yayınlanma Tarihi: 2026-05-05
- Yeni: Çok siteli (multisite) alt siteler için yapay zeka (AI) jeton faturalandırması — Yapılandırılabilir jeton başına oranlarla müşteri siteleri genelinde AI jeton kullanımını izleme ve faturalandırma.
- Yeni: Bağlayıcı (Connector) uygulama mekanizması, dinamik limit keşfi ve yazma yoluyla (write-through) yeniden inşa edildi; bu sayede tüm bağlayıcılarda gerçek zamanlı doğruluk sağlanıyor.
- Düzeltme: Veritabanı tablo yükseltmeleri artık BerlinDB şema tanımlarıyla doğru bir şekilde uyumlu, bu da yeni kurulumlarda yükseltme hatalarını önlüyor.
- Düzeltme: Veritabanı yükseltme geri çağrıları (callbacks) doğru formata dönüştürüldü, bu da sessiz yükseltme hatalarını çözdü.
- Düzeltme: AI Kullanım Fazlası Markup giriş alanında artık kesirli değerler kabul ediliyor.
- Düzeltme: Eklenti yüklenirken karşılaşılan kritik hatalar ve çift başlatma sorunları çözüldü.
- İyileştirildi: Geliştirici ortamlarının ilk çalıştırmada kendiliğinden yapılandırılmasını sağlayan check-env npm betiği eklendi.

### 1.0.3 {#103}
* Plugin Update Checker v5'e güncellendi.
* Modern WordPress eklenti başlıkları eklendi.
* En son WordPress sürümleriyle uyumluluk iyileştirildi.
* Kullanım takibi performansı artırıldı.

### 1.0.2 {#102}
* Hata düzeltmeleri ve performans iyileştirmeleri.
* Kullanım raporlama özellikleri geliştirildi.

### 1.0.0 {#100}
* İlk sürüm.
* Temel ölçümlü faturalandırma işlevi.
* Kullanım takibi ve fazla hesaplama.
* Otomatik fatura oluşturma.
