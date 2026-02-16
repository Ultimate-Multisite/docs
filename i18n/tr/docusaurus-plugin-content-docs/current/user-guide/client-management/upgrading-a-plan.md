---
title: Planı Yükseltme
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# Plan Yükseltme (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite 2.x sürümünü kapsamaktadır.**_

Müşterileriniz planlarını istedikleri zaman yükseltebilirler. Başka bir plana geçebilir veya ağınızda sunduğunuz ek hizmetleri ya da paketleri satın alabilirler.

Bu rehberde, müşterilerinizin planlarını nasıl yükseltebileceğini ve yükseltme işleminden sonra neler olacağını ele alacağız.

Planlarını yükseltmek için müşterilerinizin kontrol panellerine giriş yapıp **Hesap** sayfasına gitmeleri gerekmektedir.

![Hesap sayfası bağlantısı bulunan müşteri kontrol paneli](/img/admin/memberships-list.png)

Hesap sayfasında, mevcut üyelikleri ve buna bağlı plan gösterilecektir. Başka bir plana yükseltmek için **Üyeliğiniz** bölümünün sağ üst köşesindeki **Değiştir** düğmesine tıklamaları gerekmektedir.

![Değiştir düğmesi bulunan Üyeliğiniz bölümü](/img/admin/memberships-list.png)

Mevcut tüm planların görüntülendiği bir ödeme formuna yönlendirileceklerdir.

Ayrıca, planı yükseltmek yerine sadece belirli bir hizmet veya paket satın almak isterlerse (örneğimizde sınırsız ziyaret veya disk alanı gibi), **mevcut planları için sunulan hizmetleri ve paketleri** görebileceklerdir.

![Mevcut planları ve paketleri gösteren ödeme formu](/img/admin/memberships-list.png)

Satın almak istedikleri ürünü seçtikten sonra, mevcut kredi hariç şu anda ne kadar ödeyeceklerini ve bir sonraki fatura tarihinde ne kadar ücretlendirileceğini göreceklerdir.

Genellikle, ürün başka bir plan ise ve ödeme bir üyelik ücreti arasında yapılacaksa, ilk planda ödenen tutar kadar kredi alacaklardır.

![Kredi ve sonraki fatura tutarını gösteren yükseltme ödeme özeti](/img/admin/memberships-list.png)

Mevcut abonelikte herhangi bir değişiklik yapmayacak bir plan veya paket seçerlerse, bunu açıklayan bir mesaj göreceklerdir.

![Seçilen plan aboneliği değiştirmediğinde gösterilen mesaj](/img/admin/memberships-list.png)

Ödeme tamamlandıktan sonra, yeni ürün(ler) müşterilerinizin hesabına eklenecek ve yeni ürün(ler)in tüm limitleri veya özellikleri anında hesaba yansıyacaktır: ziyaretler, disk alanı, gönderiler vb.

## 

## 

## Yükseltme ve Düşürme Yolları

Her ürününüzde bir **Yükseltme ve Düşürme** sekmesi bulunmaktadır. Bu sekmedeki ilk seçenek **Plan Grubu** adlı bir alandır.

**Plan grupları**, Ultimate Multisite'a belirli planların aynı "aileye" ait olduğunu bildirmenizi ve böylece yükseltme/düşürme seçeneklerinin oluşturulmasını sağlayan özelliktir.

![Plan Grubu alanı bulunan Yükseltme ve Düşürme sekmesi](/img/config/product-upgrades.png)

Örneğin, **Ücretsiz Plan**, **Temel Plan** ve **Premium Plan** sunuyorsunuz. **Ücretsiz Plan** abonelerinin yalnızca **Premium Plan**'a yükseltme yapabilmesini istiyorsunuz ve "Temel Plan"ı yükseltme seçeneği olarak görmelerini istemiyorsunuz. Tek yapmanız gereken, aşağıdaki ekran görüntülerinde gösterildiği gibi hem Ücretsiz hem de Premium planlara aynı plan grubu adını atamaktır.

![High End plan grubu atanmış Ücretsiz Plan](/img/config/product-upgrades.png)

![High End plan grubu atanmış Premium Plan](/img/config/product-upgrades.png)

Bu ayar, Ultimate Multisite'a ağda **High End** adında bir plan "ailesi" olduğunu bildirecektir. Yükseltme veya düşürme seçenekleri sunulurken, kullanıcıya yalnızca aynı aileye ait planlar seçenek olarak gösterilecektir.
