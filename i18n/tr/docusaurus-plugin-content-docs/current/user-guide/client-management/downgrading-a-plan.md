---
title: Bir Planı Düşürme
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# Planı düşürme (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x için geçerlidir.**_

Plan veya abonelik düşürme, müşterilerinizin sınırlı bir bütçeye sahip olduğunda ya da alt sitelerini çalıştırmak için fazla kaynağa ihtiyaç duymayacaklarına karar verdiklerinde sıkça gerçekleştirdiği bir işlemdir.

## Plan nasıl düşürülür

Müşterileriniz istedikleri zaman alt site yönetici paneline giriş yaparak ve hesap sayfasındaki **Değiştir** düğmesine tıklayarak planlarını düşürebilirler.

![Üyelik altında Değiştir düğmesi bulunan hesap sayfası](/img/admin/memberships-list.png)

**Değiştir** düğmesine tıklandığında, kullanıcı/müşteri aboneliğini değiştirmek istediği planı seçebileceği ödeme sayfasına yönlendirilir.

![Plan düşürme seçeneklerini gösteren ödeme sayfası](/img/admin/memberships-list.png)

Bu örnekte, planı **Premium**'dan **Ücretsiz**'e düşürüyoruz.

Devam etmek için kullanıcının **Ödemeyi Tamamla** düğmesine tıklaması yeterlidir. Bu işlem, kullanıcıyı üyelik değişikliğinin beklemede olduğunu bildiren bir mesajla birlikte hesap sayfasına geri götürür. Değişiklikler müşterinin **bir sonraki fatura döneminde** geçerli olacaktır.

![Bekleyen üyelik değişikliği mesajını gösteren hesap sayfası](/img/admin/memberships-list.png)

### Kullanıcı planını düşürdüğünde ne olur

Plan düşürmenin, kullanıcının alt sitesindeki mevcut yapılandırmayı değiştirmediğini bilmek önemlidir.

Site şablonunu otomatik olarak değiştirmez çünkü şablon değişikliği alt siteyi tamamen silip sıfırlar. Bu, gereksiz veri kaybını önlemek içindir. Yani disk alanı, temalar, eklentiler vb. yazılar hariç olduğu gibi kalır.

Her plan için belirlediğiniz limitler ve kotaların sizin için asıl endişe kaynağı olacağının farkındayız, ancak kullanıcının alt sitesindeki yapılandırmaları silmemiz veya değiştirmemiz durumunda oluşacak zararı da göz önünde bulundurmamız gerekiyor.

Planda belirlenen limiti aşan yazılar için 3 farklı seçeneğiniz var: **Yazıları olduğu gibi bırak***,* **Yazıları çöp kutusuna taşı***,* veya **Yazıları taslağa taşı***.* Bunu Ultimate Multisite ayarlarından yapılandırabilirsiniz.

![Ultimate Multisite ayarlarında yazı limiti aşıldığında seçenekler](/img/config/settings-sites.png)

### Ödemeye ne olur

Sürüm 2.0'da, ödeme için orantılı hesaplama açısından herhangi bir ayarlama yapılması artık gerekmiyor.

Bunun nedeni, sistemin yeni plan/üyelik geçerli olmadan önce mevcut üyeliğin **fatura döngüsünü tamamlamasını beklemesidir**. Yeni üyelik için yeni fatura tutarı otomatik olarak uygulanacak ve bir sonraki fatura döngüsünde tahsil edilecektir.
