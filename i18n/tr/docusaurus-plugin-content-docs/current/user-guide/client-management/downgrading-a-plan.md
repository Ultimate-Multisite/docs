---
title: Bir Planı Düşürme
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Bir planı düşürme (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x için geçerlidir.**_

Bir planı veya aboneliği düşürmek, müşterilerinizin sınırlı bir bütçeleri varsa ya da alt sitelerini çalıştırmak için çok fazla kaynağa ihtiyaç duymayacaklarına karar verdilerse yapabilecekleri yaygın bir işlemdir.

## Bir plan nasıl düşürülür

Müşterileriniz, alt site yönetici Dashboard’larına giriş yapıp Account sayfalarının altındaki **Değiştir** seçeneğine tıklayarak planlarını istedikleri zaman düşürebilirler.

![Üyeliğiniz kartı ve Değiştir düğmesi bulunan müşteri Account sayfası](/img/account-page/membership-change-button.png)

**Değiştir** düğmesine tıklandığında, kullanıcı/müşteri aboneliğini değiştirmek istediği planı seçebileceği ödeme sayfasına yönlendirilir.

![Müşteri tarafında plan düşürme seçenekleri sayfası](/img/account-page/downgrade-picker.png)

Bu örnekte planı **Premium**’dan **Free**’ye düşürüyoruz.

Devam etmek için kullanıcının sadece **Ödemeyi Tamamla** düğmesine tıklaması gerekir. Ardından, üyelik için bekleyen değişiklik hakkında bir mesaj gösteren Account sayfasına geri götürülür. Değişiklikler müşterinin **bir sonraki faturalandırma döngüsünde** yürürlüğe girer.

![Bekleyen üyelik değişikliği banner’ını gösteren Account sayfası](/img/account-page/pending-change.png)

### Bir kullanıcı planını düşürdüğünde ne olur

Planı düşürmenin kullanıcının alt sitesindeki mevcut yapılandırmayı değiştirmediğini belirtmek önemlidir.

Site şablonunu otomatik olarak değiştirmez; çünkü site şablonunu değiştirmek alt siteyi tamamen siler ve sıfırlar. Bu, gereksiz veri kaybını önlemek içindir. Bu nedenle disk alanı, temalar, plugin’ler vb. yazılar hariç olduğu gibi kalır.

Asıl endişenizin her plan altında belirlediğiniz sınırlar ve kotalar olacağını anlıyoruz; ancak herhangi bir yapılandırmasını silmemiz veya değiştirmemiz durumunda bunun kullanıcının alt sitesine vereceği zararı dikkate almalıyız.

Planda belirlenen sınırı aşan yazılar için 3 farklı seçeneğiniz vardır: **Yazıları olduğu gibi tut** *,* **Yazıları çöpe taşı** *,* veya **Yazıları taslağa taşı** *.* Bunu Ultimate Multisite ayarları altında yapılandırabilirsiniz.

![Yazı sınırı aşıldığında davranış seçeneklerini gösteren Network Admin Ayarlar Siteler sayfası](/img/account-page/settings-sites-post-limit.png)

### Ödemeye ne olur

Sürüm 2.0’da, ödeme açısından artık herhangi bir oransal ayarlama gerektirmez.

Bunun nedeni, sistemin yeni plan/üyelik yürürlüğe girmeden önce mevcut üyeliğin **faturalandırma döngüsünü tamamlamasını** beklemesidir. Yeni üyelik için yeni faturalandırma tutarı otomatik olarak uygulanır ve bir sonraki faturalandırma döngüsünde tahsil edilir.
