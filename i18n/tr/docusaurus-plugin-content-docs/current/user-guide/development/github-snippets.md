---
title: GitHub Kod Parçacıkları
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# GitHub depomuzda bulunan Ultimate Multisite kod parçacıklarını nasıl kullanabilirsiniz

GitHub depomuzda, Ultimate Multisite kullanıcılarının sıkça talep ettiği kod parçacıkları bulunmaktadır. Bu parçacıklar; kayıt sayfalarına Google Analytics scripti ekleme veya yönetim panelindeki bir meta kutusunu gizleme gibi küçük işlevler eklemenize olanak tanır.

Bu makalede, bu kodları nasıl kullanacağınızı ve daha spesifik olarak nereye yerleştireceğinizi göstereceğiz.

Kod parçacıklarına aşağıdaki bağlantıdan ulaşabilirsiniz.

https://github.com/next-press/wp-ultimo-snippets/

Kodu eklemek için 2 farklı yöntem kullanabilirsiniz:

  1. Temanızın functions.php dosyasına ekleyerek.

  2. Must-Use Plugins (mu-plugins) kullanarak.

# Kod parçacığını temanızın functions.php dosyasına nasıl eklersiniz

  1. WordPress Ağ yönetici paneline giriş yapın ve Temalar > Tema Düzenleyici bölümüne gidin (Aşağıdaki ekran görüntüsüne bakın).

  2. "Temaları Düzenle" sayfasında, ekranınızın sağ üst köşesindeki açılır menüden aktif temanızın seçili olduğundan emin olun (Aşağıdaki ekran görüntüsünde #3 numaralı alan).

  3. "Tema Dosyaları" bölümünün altındaki functions.php dosyasına tıklayarak dosyayı yükleyin. Sayfanın en altına gidin ve GitHub deposundan aldığınız Ultimate Multisite kod parçacığını yapıştırın.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) nasıl oluşturulur

WordPress, "Must-Use Plugins" veya kısaca "mu-plugins" adı verilen özel işlevler yüklemenize olanak tanıyan bir özelliğe sahiptir.

Bu özel mu-plugins dosyaları, diğer tüm normal eklentilerden önce yüklenir ve devre dışı bırakılamazlar. Bir multisite ağında, bu mu-plugins içindeki kod, kurulumunuzdaki tüm sitelerde çalıştırılır.

1\. WordPress kurulumunuzun dosya sistemine erişmek için FTP veya SSH kullanın.

2\. WordPress kurulumunuzun wp-content dizini içinde, mu-plugins adında yeni bir klasör oluşturun.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Bilgisayarınızda Notepad veya herhangi bir kod editörü kullanarak wu-snippet.php adında yeni bir PHP dosyası oluşturun.

4\. GitHub deposundan aldığınız Ultimate Multisite kod parçacığını bu dosyaya yapıştırın ve kaydedin. Ayrıca mu plugin'inizi etiketlemek için kod parçacığının üstüne şu kodu ekleyebilirsiniz.
