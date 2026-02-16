---
title: Temel Kavramlar
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Temel Kavramlar

WordPress Multisite'a yeni başlayan ve Ultimate Multisite kullanmaya henüz başlamış biri için, ilk başta öğrenilmesi gereken birçok yeni kelime ve ifade olabilir. Bunları öğrenmek önemli bir adımdır çünkü platformu ve nasıl çalıştığını bir bütün olarak anlamanız gerekecek.

Bu makalede, WordPress'teki bazı temel kavramları tanımlamaya ve açıklamaya çalışacağız. Bunların bazıları kullanıcılar için, bazıları geliştiriciler için, bazıları ise her ikisi için de geçerlidir.

## WordPress Multisite

WordPress **Multisite**, tek bir WordPress kontrol panelinden birden fazla web sitesinden oluşan bir ağ oluşturmanıza ve yönetmenize olanak tanıyan bir WordPress kurulum türüdür. Site sayısı, özellikler, temalar ve kullanıcı rolleri dahil her şeyi yönetebilirsiniz. Yüzlerce ve binlerce siteyi yönetmek mümkündür.

## Ağ (Network)

WordPress açısından, bir multisite ağı, birden fazla **alt sitenin** tek bir kontrol panelinden yönetilebildiği yapıdır. Multisite ağı oluşturma süreci hosting sağlayıcılarına göre farklılık gösterse de, sonuç genellikle **wp-config.php** dosyasına WordPress'in bu özel modda çalıştığını bildiren birkaç ek yönerge eklemektir.

Bir multisite ağı ile bağımsız bir WordPress kurulumu arasında kısaca ele alacağımız birkaç belirgin fark vardır.

## Veritabanı

Veritabanı, yapılandırılmış ve düzenlenmiş bir veri kümesidir. Bilgisayar terminolojisinde, veritabanı, verileri depolamak ve düzenlemek için kullanılan yazılımı ifade eder. Bunu, verileri tablolar adı verilen farklı bölümlerde sakladığınız bir dosya dolabı gibi düşünebilirsiniz.

WordPress Multisite tek bir veritabanı kullanır ve her alt site, önekinde blog id'si bulunan kendi tablolarını alır. Dolayısıyla, bir ağ kurulumu yaptığınızda veritabanınız oluşur ve bir alt site oluşturduğunuzda şu tablolara sahip olursunuz:

_wp_1_options_ \- birinci alt site için seçenekler tablosu

_wp_2_options_ \- ikinci alt site için seçenekler tablosu

## Hosting sağlayıcısı

Hosting sağlayıcısı, işletmelerin ve bireylerin web sitelerini World Wide Web üzerinden erişilebilir kılmasını sağlayan bir şirkettir. Web hosting sağlayıcılarının sunduğu hizmetler değişiklik gösterir ancak genellikle web sitesi tasarımı, sunucuda depolama alanı ve internet bağlantısı içerir.

## Alan adı (Domain)

Alan adı, insanların sitenizi ziyaret etmek için kullandıkları adrestir. Web tarayıcısına sitenizi nerede arayacağını söyler. Tıpkı bir sokak adresi gibi, alan adı insanların web sitenizi çevrimiçi olarak nasıl ziyaret edeceğini belirler. Ve dükkanınızın önünde bir tabela olması gibidir. Web sitemizi ziyaret etmek isterseniz, tarayıcınızın adres çubuğuna [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) web adresimizi yazmanız gerekir; burada [**ultimatemultisite.com**](http://ultimatemultisite.com) alan adıdır.

## Alt alan adı (Subdomain)

Alt alan adı, ana alan adının altında bir tür web sitesi hiyerarşisidir, ancak içeriği web sitesinde klasörlerle düzenlemek yerine, bir anlamda kendi başına bir web sitesi alır. [**https://site1.domain.com/**](https://site1.domain.com/) şeklinde gösterilir; burada _site1_ alt alan adı ve [_domain.com_](http://domain.com) ana alan adıdır.

## Alt dizin (Subdirectory)

Alt dizin, içeriği bir web sitesinde klasörler kullanarak düzenleyen, kök alan adı altındaki bir tür web sitesi hiyerarşisidir. Alt dizin, alt klasörle aynı anlama gelir ve bu isimler birbirinin yerine kullanılabilir. [**https://domain.com/site1**](https://domain.com/site1) şeklinde gösterilir; burada _site1_ alt dizin adı ve [_domain.com_](http://domain.com) ana alan adıdır.

## Alt site (Subsite)

Alt site, Multisite ağında oluşturduğunuz bir çocuk sitedir. WordPress Multisite kurulumunuzun nasıl yapılandırıldığına bağlı olarak **alt alan adı** veya **alt dizin** olabilir.

## Süper Yönetici (Super Admin)

WordPress Süper Yönetici, Multisite ağındaki tüm alt siteleri yönetme yetkisine sahip bir kullanıcı rolüdür. Multisite kullanıcıları için, WordPress kurulumunuza sağlayabileceğiniz **en yüksek erişim düzeyidir**.

## Eklenti (Plugin)

Genel olarak, eklenti, WordPress sitenize ekstra işlevsellik ekleyen bir kod kümesidir. Bu, giriş logosunu değiştirmek kadar basit veya e-ticaret işlevselliği eklemek kadar karmaşık olabilir. _WooCommerce ve Contact Form_, eklenti örnekleridir.

WordPress Multisite'ta eklentiler yalnızca Süper Yönetici tarafından ağ yönetici panelinden yüklenebilir. Alt site yöneticileri yalnızca kendi alt sitelerinde eklentileri etkinleştirebilir ve devre dışı bırakabilir.

## Temalar

WordPress teması, sitenin genel görünümünü belirleyen bir dosya grubudur (_grafikler, stil sayfaları ve kod_). Yazı tipi stilleri, sayfa düzeni, renkler vb. gibi tüm ön yüz stillerini sağlar.

Eklentilerde olduğu gibi, WordPress Multisite'taki temalar yalnızca Süper Yönetici tarafından yüklenebilir ve alt site düzeyinde alt site yöneticileri tarafından etkinleştirilebilir.

## Site Şablonu

**Site Şablonu**, ağınızda yeni siteler oluştururken temel olarak kullanılabilecek bir kalıp sitedir.

Bu, bir temel site oluşturabileceğiniz, farklı eklentileri etkinleştirebileceğiniz, aktif bir tema belirleyebileceğiniz ve istediğiniz şekilde özelleştirebileceğiniz anlamına gelir. Ardından, müşteriniz yeni bir hesap oluşturduğunda, içinde anlamlı bir içerik olmayan varsayılan bir WordPress sitesi almak yerine, tüm özelleştirmeler ve içerikler hazır olarak temel sitenizin bir kopyasını alır.

## Alan Adı Eşleme (Domain Mapping)

WordPress ile **alan adı eşleme**, kullanıcıları bir web sitesinin adresi üzerinden doğru sunucuya yönlendirmenin bir yoludur. WordPress Multisite'ta alt siteler, alt dizin veya alt alan adı kullanılarak oluşturulur. Alan adı eşlemenin yaptığı şey, alt site kullanıcılarının site adreslerinin daha profesyonel görünmesi için [**joesbikeshop.com**](http://joesbikeshop.com) gibi üst düzey bir alan adı kullanmalarına izin vermektir.

## SSL

SSL, **Secure Sockets Layer** (Güvenli Yuva Katmanı) anlamına gelir. Bir web sitesinin kimliğini doğrulayan ve şifreli bir bağlantı sağlayan dijital bir sertifikadır. Günümüzde internet bağlantısını güvenli tutmak ve iki sistem arasında gönderilen hassas verileri korumak için standart teknoloji olarak kullanılır; suçluların olası kişisel bilgiler dahil aktarılan herhangi bir bilgiyi okumasını ve değiştirmesini önler. Modern tarayıcılar SSL gerektirir, bu da web sitesi oluştururken ve çalıştırırken onu zorunlu kılar.

## Medya

Medya, bir web sitesini oluşturan resimler, ses dosyaları, videolar ve diğer dosyalardır.

WordPress Multisite'ta ağ siteleri tek bir veritabanını paylaşır, ancak medya dosyaları için dosya sisteminde ayrı yollar kullanırlar.

Standart WordPress konumu (wp-content/uploads) aynı kalır; ancak yolu, ağ sitesinin benzersiz kimliğini yansıtacak şekilde değiştirilir. Sonuç olarak, bir ağ sitesi için medya dosyaları wp-contents/uploads/site/[id] olarak görünür.

## Kalıcı Bağlantılar (Permalinks)

Kalıcı bağlantılar, sitenizdeki bireysel blog gönderilerinizin veya sayfalarınızın kalıcı URL'leridir. Kalıcı bağlantılar aynı zamanda **güzel bağlantılar** olarak da adlandırılır. Varsayılan olarak, WordPress URL'leri şuna benzeyen sorgu dizesi formatını kullanır:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite, WordPress Multisite kurulumları için yapılmış bir WordPress eklentisidir. WordPress kurulumunuzu, müşterilerin aylık, üç aylık veya yıllık ücretlerle site oluşturabildiği [WordPress.com](https://WordPress.com) gibi premium bir site ağına dönüştürür (ayrıca Ücretsiz planlar da oluşturabilirsiniz).

## Ödeme Formu (Checkout Form)

Ödeme Formu, Ultimate Multisite kaydı aracılığıyla alt site, üyelik ve kullanıcı hesaplarının oluşturulmasını içeren tek veya çok adımlı bir sipariş formudur. Kullanıcının kayıt işlemi sırasında göndermesi gereken farklı alanlar ve ödeme formlarından oluşur.

## Webhook

Webhook (web geri çağrısı veya HTTP push API olarak da adlandırılır), bir uygulamanın diğer uygulamalara gerçek zamanlı bilgi sağlamasının bir yoludur. Webhook, verileri diğer uygulamalara olduğu anda iletir, yani verileri anında alırsınız.

**Ultimate Multisite webhook'ları** sonsuz olasılıklar sunar ve ağ yöneticilerinin özellikle _Zapier ve IFTTT_ gibi hizmetlerle birlikte kullanıldığında her türlü çılgın ama kullanışlı entegrasyonu yapmasına olanak tanır.

## Olaylar (Events)

Olay, fare tıklaması gibi kullanıcının veya başka bir kaynağın eylemi sonucunda gerçekleşen bir eylemdir. Ultimate Multisite, tüm ağınızda gerçekleşen tüm olayların ve günlüklerin kaydını tutar. Plan değişiklikleri gibi multisite'ınızda gerçekleşen farklı aktiviteleri izler.
