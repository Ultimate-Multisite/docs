---
title: Сайтин экспортлау
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Сайт Экспорт (Site Export) {#site-export}

Админ-страница **Site Export** позволяет сетевым администраторам упаковать один сайт или всю сеть в загружаемый архив для миграции, резервного копирования или передачи работ.

## Один сайт экспортировать {#exporting-one-site}

Перейдите в **Ultimate Multisite > Site Export** и выберите **Generate new Site Export** (Создать новый экспорт сайта). Выберите субсайт, который хотите экспортировать, а затем решите, нужно ли включать в архив загрузки (uploads), плагины (plugins) и темы (themes).

Когда экспорт завершится, скачайте ZIP-файл из списка **Existing Exports** (Существующие экспорты). Экспортные ZIP-файлы теперь включают самозапускаемый `index.php` и файл `readme.txt`, чтобы архив можно было загрузить на новый хостинг и запустить без предварительной установки отдельного плагина для импорта.

## Вся сеть экспортировать {#exporting-the-whole-network}

Используйте **Network Export** (Экспорт сети) на странице Site Export, когда вам нужен один архив, содержащий все субсайты в сети. Это полезно перед миграциями хостинга, учениями по восстановлению после сбоев или перестройками на тестовом сервере, где каждый субсайт должен перемещаться вместе.

Поскольку экспорт всей сети может быть намного больше, чем экспорт одного сайта, запускайте его в период низкой нагрузки и убедитесь, что целевое хранилище имеет достаточно свободного места для загрузок, плагинов, тем и сгенерированных ZIP-файлов.

### Пакеты импорта сети (Network Import Bundles) {#network-import-bundles}

Начиная с Ultimate Multisite 2.12.0, Site Exporter может генерировать **network import bundles** (пакеты импорта сети) — специальные архивы, разработанные для упрощенного восстановления сайта во всей сети. Пакет импорта сети содержит все необходимые файлы и метаданные для восстановления нескольких сайтов на новой сетевой установке.

#### Генерация пакета импорта сети {#generating-a-network-import-bundle}

1. **Ultimate Multisite > Site Export** menüsüne gidin
2. **Generate new Network Export** (Yeni Ağ Dışa Aktarımı Oluştur) seçeneğine tıklayın
3. Dışa aktarma türü olarak **Network Import Bundle** (Ağ İçe Aktarma Paketi) seçin
4. Yüklemeleri, eklentileri ve temaları dahil edip etmemeyi seçin
5. **Generate** (Oluştur) butonuna tıklayın
6. ZIP paketini **Existing Exports** (Mevcut Dışa Aktarımlar) listesinden indirin

#### Network Import Bundle'dan Geri Yükleme {#restoring-from-a-network-import-bundle}

Ağ içe aktarma paketlerinden siteleri geri yüklemek için:

1. Ultimate Multisite'ı hedef sunucunuza kurun
2. Çoklu site kurulum sihirbazını tamamlayın
3. Yeni ağda **Ultimate Multisite > Site Export** (Site Dışa Aktarımı) bölümüne gidin
4. **Import Network Bundle** (Ağ Paketini İçe Aktar) seçeneğine tıklayın
5. Ağ içe aktarma paketinin ZIP dosyasını yükleyin
6. Ekranda görünen içe aktarma talimatlarını takip edin
7. İçe aktarma işlemi tüm siteleri, içeriklerini ve yapılandırmalarını geri yükleyecektir

Ağ içe aktarma paketleri şunları korur:
- Site içeriği (gönderiler, sayfalar, özel gönderi türleri)
- Site ayarları ve seçenekleri
- Kullanıcı rolleri ve izinleri
- Eklentiler ve temalar (paket içinde dahil edilmişse)
- Medya yüklemeleri (paket içinde dahil edilmişse)
- Özel veritabanı tabloları ve verileri

## Kendi Kendine Başlayan Dışa Aktarma ZIP'ini Kurma {#installing-a-self-booting-export-zip}

Yeni bir sunucuda kendi kendine başlayan bir ZIP dosyasını geri yüklemek için:

1. Dışa aktarılan ZIP içeriğini hedef web kök dizinine (web root) yükleyin.
2. Yüklediğiniz `index.php` dosyasını bir tarayıcıda açın.
3. Paketle birlikte gelen dışa aktarma paketi içindeki ekranda görünen kurulum talimatlarını takip edin.
4. Geçici dosyaları kaldırmadan önce paket içindeki `readme.txt` dosyasındaki dışa aktarmaya özel notları kontrol edin.

Eklentiye özgü kurulum ve içe aktarma detayları için [Site Exporter addon documentation](/addons/site-exporter) dokümantasyonuna bakın.

Ultimate Multisite 2.9.0 ile eklenen tek site aracı için [Export & Import](/user-guide/administration/export-import) bölümüne bakın.
