---
title: GitHub Snippetlar
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Ultimate Multisite Snippet'leri GitHub Deponuzda Nasıl Kullanılır

Ultimate Multisite kullanıcılarının sıkça istediği, Google Analytics script'ini kayıt sayfalarına eklemek veya admin paneli meta kutularını gizlemek gibi küçük işlevsellikler eklemek isteyen kullanıcılar için GitHub deposunda kod parçacıkları mevcut.

Bu makalede bu kodları nasıl kullanacağınızı veya daha spesifik olarak nereye yerleştireceğinizi göstereceğim.

Kod parçacıklarına aşağıdaki bağlantıdan ulaşabilirsiniz:

https://github.com/next-press/wp-ultimo-snippets/

Kodu eklemenin iki yolu var:

  1. Tema dosyanızın functions.php dosyasına.

  2. Must-Use Plugins (mu-plugins).

# Snippet'i tema functions.php dosyasına nasıl eklersiniz?

  1. WordPress Ağ yönetici paneline giriş yapın ve Themes > Theme Editor (aşağıdaki ekran görüntüsüne bakın) bölümüne gidin.

  2. "Edit Themes" sayfasında, ekranınızın sağ üst köşesindeki açılır menüden aktif temanızın seçili olduğundan emin olun (#3'teki ekran görüntüsüne bakın).

  3. Dosya yüklemek için "Theme Files" bölümünün altındaki functions.php dosyasına tıklayın. En alta kaydırın ve GitHub deposundan aldığınız Ultimate Multisite snippet'ini yapıştırın.

<!-- Ekran görüntüsü mevcut değil: WordPress Tema Düzenleyici functions.php dosyasını gösteriyor -->

# Must-Use Plugins (mu-plugins) nasıl oluşturulur?

WordPress'te "Must-Use Plugins" veya kısaca "mu-plugins" adında özel işlevsellik yüklemenize olan bir özellik var.

Bu özel mu-plugin'ler, diğer tüm normal eklentilerden önce yüklenir ve devre dışı bırakılamazlar. Multisite ağında, bu mu-plugin'lerdeki kodunuz kurulumunuzdaki tüm sitelerin üzerine yüklenecektir.

1. WordPress kurulumunuzun dosya sistemine FTP veya SSH ile erişin.

2\. WordPress kurulumunuzun `wp-content` dizini içine `mu-plugins` adında yeni bir klasör oluşturun.

<!-- Ekran görüntüsü mevcut değil: Dosya yöneticisinde wp-content dizini ve mu-plugins klasörü gösteriliyor -->

3\. Bilgisayarınızda Notepad veya herhangi bir kod düzenleyici kullanarak `wu-snippet.php` adında yeni bir PHP dosyası oluşturun.

4\. GitHub deposundan aldığınız Ultimate Multisite kod parçasını bu dosyaya yapıştırın ve kaydedin. Ayrıca, mu eklentinizi etiketlemek için bu kod parçasının en üstüne ekleyebilirsiniz.
