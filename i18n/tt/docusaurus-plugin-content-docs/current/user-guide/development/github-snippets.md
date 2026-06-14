---
title: GitHub фрагментләре
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Ultimate Multisite фрагментlerini GitHub deposunda nasıl kullanırsınız

Ultimate Multisite kullanıcıları sıkça talep eden ve Google Analytics betiği gibi küçük işlevsellikleri (örneğin kayıt sayfalarına eklemek veya admin paneli meta kutusunu gizlemek) eklemek isteyenler için GitHub deposunda hazır kod parçacıkları bulunmaktadır.

Bu makalede bu kodları nasıl kullanacağınızı veya daha spesifik olarak nereye yerleştireceğinizi göstereceğim.

Parçacıklara aşağıdaki bağlantıdan ulaşabilirsiniz:

https://github.com/next-press/wp-ultimo-snippets/

Kodu eklemek için iki yolunuz var:

  1. Temanızın functions.php dosyasına.

  2. Must-Use Plugins (mu-plugins).

# Snippet'ı temanızın functions.php dosyasına nasıl eklersiniz?

  1. WordPress Ağ yönetici paneline giriş yapın ve Themes > Theme Editor (aşağıdaki ekran görüntüsüne bakın) yolunu izleyin.

  2. "Edit Themes" sayfasında, ekranınızın sağ üst köşesindeki açılır menüden aktif temanızı seçtiğinizden emin olun (#3'e bakınız).

  3. Dosya yüklemek için "Theme Files" bölümünün altındaki functions.php dosyasına tıklayın. En alta kaydırın ve GitHub deposundan aldığınız Ultimate Multisite snippet'ini buraya yapıştırın.

<!-- Ekran görüntüsü mevcut değil: WordPress Tema Düzenleyici functions.php dosyasını gösteriyor -->

# Must-Use Plugins (mu-plugins) nasıl oluşturulur?

WordPress'te "Must-Use Plugins" veya kısaca "mu-plugins" olarak adlandırılan özel bir işlevsellik yüklemenize olanak tanıyan bir özellik vardır.

Bu özel mu-plugin'ler, diğer tüm normal eklentilerden önce yüklenir ve devre dışı bırakılamazlar. Multisite ağında bu mu-plugin'lerdeki kodunuz, kurulumunuzdaki tüm sitelerin üzerine yüklenecektir.

1. WordPress kurulumunuzun dosya sistemine FTP veya SSH ile erişin.

2. WordPress kurulumunuzun `wp-content` dizini içine `mu-plugins` adında yeni bir klasör oluşturun.

<!-- Ekran görüntüsü mevcut değil: Dosya yöneticisinde wp-content dizini ve mu-plugins klasörü gösteriliyor -->

3. Bilgisayarınızda Not Defteri veya herhangi bir kod düzenleyici kullanarak `wu-snippet.php` adında yeni bir PHP dosyası oluşturun.

4. GitHub deposundan aldığınız Ultimate Multisite kod parçasını bu dosyaya yapıştırın ve kaydedin. Ayrıca, mu eklentinizi etiketlemek için bu kod parçasının en üstüne ekleyebilirsiniz.
