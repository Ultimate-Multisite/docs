---
title: Plan-i-yara
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Plan Yükseltme (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x'i kapsamaktadır.**_

Müşterileriniz istedikleri zaman planlarını yükseltebilirler. Ya başka bir plana geçebilirler ya da ağınızda sunduğunuz ek hizmetleri veya paketleri satın alabilirler.

Bu eğitimde, planlarını nasıl yükseltebileceklerini ve yükseltme sürecinden sonra ne olacağını anlatacağız.

Planlarını yükseltmek için müşterilerinizin dashboard'larına erişmeleri ve **Hesap** sayfasına gitmeleri gerekir.

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

Hesap sayfasında, mevcut üyeliği ve bu üyeliğe bağlı planı göreceklerdir. Başka bir plana yükseltmek için, **Üyeliğiniz** bölümünün sağ üst köşesindeki **Değiştir** butonuna tıklamaları gerekir.

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

Tüm mevcut planların gösterileceği bir ödeme (checkout) formuna yönlendirileceklerdir.

Ayrıca, sadece plan yükseltmek istemiyorlarsa (örneğimizdeki gibi sınırsız ziyaret veya disk alanı gibi) **mevcut planları için kullanılabilecek hizmetleri ve paketleri** de görebileceklerdir.

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

Satın almak istedikleri ürünü seçtikten sonra, mevcut bir kredi düşülerek şu anda ne kadar ödeme yapmaları gerektiğini ve bir sonraki fatura tarihinde ne kadar ücretlendirileceklerini göreceklerdir.

Genellikle, ürün başka bir plan olduğunda ve ödeme bir üyelik ücreti arasına yapılıyorsa, ilk planda ödenen tutar kadar bir kredi alacaklardır.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Eğer mevcut abonelikten hiçbir şeyi değiştirmeyecek bir plan veya paket seçerlerse, bunu açıklayan bir mesaj göreceklerdir.

![Notice when the selected plan does not change the subscription](/img/account-page/upgrade-no-change.png)

Ödeme tamamlandıktan sonra, yeni ürün(ler) müşterilerinizin hesabına eklenecek ve yeni ürün(ler)in tüm limitleri veya özellikleri anında eklenecektir: ziyaret sayısı, disk alanı, gönderiler vb...

##

##

## Yükseltme ve Düşürme Yolları

Ürünlerinizin her birinde bir **Yükseltme ve Düşürme** sekmesi bulacaksınız. Bu sekmedeki ilk seçenek **Plan Grubu** adında bir alandır.

**Plan grupları**, Ultimate Multisite'a belirli planların aynı "aileye" ait olduğunu ve bu nedenle yükseltme/düşürme yolu seçeneklerini oluşturmak için kullanılması gerektiğini bildirmeyi sağlar.

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

Örneğin, elinizde bir **Ücretsiz Plan**, bir **Temel Plan** ve bir **Premium Plan** mevcut. **Ücretsiz Plan** altında abone olan kullanıcıların yalnızca **Premium Plan**'a yükseltebilmesini istiyorsunuz ve "Temel Plan"ı bir yükseltme seçeneği olarak görmelerini istemiyorsunuz. Yapmanız gereken tek şey, aşağıdaki ekran görüntülerinde gösterildiği gibi hem Ücretsiz hem de Premium planlar için aynı plan grubu adını atamaktır.

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

Bunun yapması gereken şey, Ultimate Multisite'a ağda **Yüksek Seviye** adında bir plan "ailesi" olduğunu söylemektir. Yükseltme veya düşürme sunulurken, yalnızca aynı aileden planlar kullanıcıya seçenek olarak sunulacaktır.
