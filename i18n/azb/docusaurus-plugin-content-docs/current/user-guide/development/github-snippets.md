---
title: GitHub k'a'l'a
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# GitHub deposundaki Ultimate Multisite kod parçacıklarını nasıl kullanırsınız {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Ultimate Multisite kullanıcıları arasında, Google Analytics script eklemek veya admin dashboard'dan bir meta box gizlemek gibi küçük işlevsellikler eklemek isteyenler için GitHub deposunda kod parçacıkları bulunuyor.

Bu makale, bu kodları nasıl kullanacağınızı veya daha spesifik olarak nereye yerleştireceğinizi gösterecek.

Kod parçacıklarını aşağıdaki bağlantıda bulabilirsiniz.

https://github.com/next-press/wp-ultimo-snippets/

Kodu eklemeniz için 2 farklı yol var:

  1. Tema'nızın functions.php dosyası üzerinden.

  2. Must-Use Plugins (mu-plugins) olarak.

# Tema'nızın functions.php dosyasına kod parçacığı nasıl eklenir. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. WordPress Network admin dashboard'unuza giriş yapın ve Temalar > Tema Düzenleyici'ye gidin (Aşağıdaki ekran görüntüsüne bakın).

  2. "Temaları Düzenle" sayfasında, ekranınızın sağ üst köşesinde bulunan açılır menüden aktif temanızın seçili olduğundan emin olun (#3 aşağıdaki ekran görüntüsünde).

  3. Dosyayı yüklemek için "Tema Dosyaları" bölümündeki functions.php dosyasına tıklayın. En alta kaydırın ve GitHub deposundan aldığınız Ultimate Multisite kod parçacığını yapıştırın.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) nasıl oluşturulur {#how-to-create-must-use-plugins-mu-plugins}

WordPress, "Must-Use Plugins" veya kısaca "mu-plugins" adı verilen, özel işlevsellik yüklemenize olanak tanıyan bir özelliğe sahiptir.

Bu özel mu-plugins, diğer tüm normal eklentilerden önce yüklenir ve devre dışı bırakılamaz. Bir multisite ağında, bu mu-plugins'taki kod, kurulumunuzdaki tüm sitelerde yüklenecektir.

1. WordPress kurulumunuzun dosya sistemine erişmek için FTP veya SSH kullanın.

2. WordPress kurulumunuzdaki wp-content dizininin içine, mu-plugins adında yeni bir dizin oluşturun.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Bilgisayarınızda Notepad veya herhangi bir kod düzenleyici kullanarak wu-snippet.php adında yeni bir PHP dosyası oluşturun.

4. GitHub deposundan aldığınız Ultimate Multisite kod parçacığını bu dosyanın içine yapıştırın ve kaydedin. Ayrıca, mu eklentinizi etiketlemek için bu kodun üzerine ek bir kod ekleyebilirsiniz.
