---
title: Çoklu Kiracılık İzolasyonu
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Çoklu Kiracılık İzolasyonu

Ultimate Multisite: Çoklu Kiracılık 1.2.0, egemen kiracılar için her alt siteye özel veritabanı ve dosya sistemi izolasyonu desteği sunar. Bu özellik, kiracı verilerini birbirinden ayırırken ağ düzeyindeki sağlama (provisioning), faturalandırma ve yönetimi korur.

## İzolasyon stratejisi

Daha güçlü veri ayrımı, özel dosya sistemi depolama veya ayrı bir barındırma sınırı gerektiren müşteriler için egemen izolasyonu kullanın.

Her egemen kiracının şunlara sahip olması gerekir:

- Barındırıcı tarafından onaylanmış özel bir kiracı veritabanı veya veritabanı ön eki stratejisi.
- Özel bir kiracı dosya sistemi kök dizini.
- Siteyi veritabanına, kök yollarına, ana bilgisayar adına ve izolasyon modeline eşleyen bir kiracı kayıt girişi (registry entry).
- Kiracının canlı kabul edilmeden önce bir geçiş doğrulama sonucu.

## Veritabanı sunucu bağlama (Database host binding)

Sürüm 1.2.0, egemen kurulumlar için varsayılan aynı makineye bağlı olma davranışını değiştiriyor. `localhost` gibi aynı makine değerleri normalize ediliyor, böylece Bedrock, FrankenPHP ve konteynerleştirilmiş WordPress kurulumları, MySQL'in aslında gördüğü ana bilgisayar dizesine karşı izinleri verebilir ve doğrulayabilir.

Bir egemen kiracı yapılandırırken:

1. Veritabanı sunucusunu, kiracının çalışma zamanı (runtime) tarafından gereken değere ayarlayın.
2. Ana bilgisayar yerel bağlantılar bekliyorsa, yerel soket kurulumları için `localhost` kullanın.
3. Veritabanı sunucusu o ana makineye yetki verdiyse yalnızca `127.0.0.1` veya bir servis ana bilgisayarı adını kullanın.
4. Ana bilgisayar bağlamını değiştirdikten sonra geçiş doğrulamasını çalıştırın.

Doğrulama raporları izin hataları bildirirse, kiracı veritabanı kullanıcı yetkilerini yapılandırılmış ana bilgisayar bağlamıyla karşılaştırın. `user@localhost` için verilen bir kullanıcı, `user@127.0.0.1` veya `user@%` ile farklıdır.

## Dosya sistemi kök dizini

Kiraya kök dizini yeniden başlatmalarda ve dağıtımlarda sabit olmalıdır. Geçici bağlama yollarından kaçının. Bedrock tarzı kurulumlar için, tenant root'un sadece proje köküne değil, aynı zamanda kiracının bootstrap'u tarafından beklenen WordPress web köküne de işaret ettiğinden emin olun.

## Hazırlama sırası

Yeni egemen (sovereign) kiracılar için bu sırayı kullanın:

1. Kiracı kayıt girişi oluşturun.
2. Kiracı veritabanını ve veritabanı kullanıcısını oluşturun.
3. Kiracı şemasını başlatın (bootstrap edin).
4. Kiracı kullanıcılarını sağlayın.
5. Kiracı dosya sistemi yollarını yapılandırın.
6. Taşıma doğrulamasını çalıştırın.
7. Doğrulama geçtikten sonra yönlendirmeyi veya DNS'i değiştirin.

Bu sıra, veritabanı yazıcısı, kullanıcılar ve dosya sisteminin hazır olmasından önce kısmen izole edilmiş kiracıların trafiği almasını engeller.

## Egemen müşteri yönetim akışları

Ultimate Multisite v2.13.0, egemen mod etkinleştirildiğinde müşteri yönetim işlemlerini ana sitede tutar. Bir kiracı hala izole bir WordPress kurulumu olarak çalışabilir, ancak ağ faturalandırması, üyelik veya paylaşılan hesap verilerine bağlı olan müşteriyle ilgili eylemler, işlemi kiracı çalışma zamanının içinde tamamlamaya çalışmak yerine müşteriyi ana siteye geri göndermelidir.

Ana site akışı şunlara uygulanır:

- Ödeme ve plan değişiklikleri.
- Hesap genel bakışı ve müşteri profili işlemleri.
- Faturalandırma adresi güncellemeleri ve ödeme yönetimi ekranları.
- Fatura ve ödeme geçmişi görüntülemeleri.
- Site ekleme veya site silme gibi site yönetimi işlemleri.
- Şablon değiştirme.
- Alan adı eşleştirmesi ve birincil alan adı değişiklikleri.

Müşteri bir egemen (sovereign) kiracıdan bu eylemlerden birini başlattığında, Ultimate Multisite ilgili ana site URL'sini oluşturur ve güvenli olduğu durumlarda kaynak kiracıyı geri dönüş hedefi olarak saklar. Bu sayede müşteriler yönetilen işlemi ağ kayıtları üzerinde tamamlayabilir ve faturalandırma veya üyelik durumunu egemen veritabanında iki kez tekrarlamadan kiracı bağlamına geri dönebilirler.

Operatörler için pratik kural şudur: Egemen ağlar için faturalandırma, hesap, ödeme (checkout), fatura, şablon ve alan adı yönetimi sayfalarının ana sitede açık kalmasını sağlayın. Kiracı panelleri bu sayfalara bağlantı verebilir, ancak ana site işlemin kaynağı olarak kalır.
