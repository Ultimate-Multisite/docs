---
title: GitHub Keselleri
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Ultimate Multisite snipetlerini GitHub depomuzda nasıl kullanmalı {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Ultimate Multisite kullananlar, kayıt sayfalarına Google Analytics scripti eklemek veya admin paneli meta box'larını gizlemek gibi küçük işlevsellikler eklemek isteyen kullanıcılar tarafından sıkça talep edilen kod parçacıkları (code snippets) GitHub deposunda mevcuttur.

Bu makalede bu kodları nasıl kullanacağınızı veya daha spesifik olarak nereye yerleştireceğinizi göstereceğim.

Snipetlere aşağıdaki bağlantıdan ulaşabilirsiniz:

https://github.com/next-press/wp-ultimo-snippets/

Kodu eklemek için iki yolunuz var:

  1. Tema dosyanızın functions.php dosyasına.

  2. Must-Use Plugins (mu-plugins).

# Snipeti tema functions.php dosyasına nasıl eklenir. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. WordPress Network admin panelinize giriş yapın ve Themes > Theme Editor (aşağıdaki ekran görüntüsüne bakın) bölümüne gidin.

2. "Theme'leri Düzenleme" sayfasında, ekranınızın sağ üstündeki açılır menüde (skrinshotteki #3) aktif temani seçdiğinizden hem emin olun.

3. "Tema Dosyaları" bölümünün altındaki functions.php dosyasına tıklayarak dosyayı yükleyin. Aşağı kaydırın ve GitHub deposundan aldığınız Ultimate Multisite snippet'ini oraya yapıştırın.

<!-- Skrinshot mövjud däl: WordPress Tema Redaktori functions.php dosyasını düzenleýär -->

# Must-Use Pluginleri (mu-plugins) Näme Döredik {#how-to-create-must-use-plugins-mu-plugins}

WordPressde "Must-Use Plugins" diýlip, ýa-da qısaklary bilen "mu-plugins" diýlip, özüniň custom funksionalyklaryny yüklemek üçin bir funksiýa bar.

Bu özel mu-plugins (mu-pluginleri) başga normal pluginlerden önce yüklenir we onları deaktivasiap bilmezsiniz. Multisite ağında, bu mu-plugins kodları kurulumunuzdaki tüm sitelerde yüklenecektir.

1\. WordPress kurulumunuzun dosya sistemine FTP ýa SSH bilen girip bilerisizdir.

2\. WordPress kurulumuňyzda wp-content direktori içinde "mu-plugins" diýlip täze bir katalog döredin.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Kompýuterinizde Notepad ýa her hili kod redaktoryndan wu-snippet.php diýip täze PHP fayly döredip onu saklaň.

4\. GitHub resursundan almagyňyzda size berilen Ultimate Multisite kod bölegini bu faylanyň içine goýuň we saklaň. Şonuň üçin, mu plugininizi bellemek üçin bu kod bölegini başga kod böleginiň üstüne hem goýap bilersiňiz.
