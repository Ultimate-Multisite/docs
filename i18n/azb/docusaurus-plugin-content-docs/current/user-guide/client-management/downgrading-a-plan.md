---
title: Plan'ı Düşürme
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Planı Düşürmek (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x'i kapsamaktadır.**_

Plan veya abonelik düşürmek, müşterilerinizin bütçeleri kısıtlıysa veya alt siteleri çalıştırmak için çok fazla kaynağa ihtiyaç duymayacaklarına karar verdilerse yapabilecekleri yaygın bir işlemdir.

## Planı nasıl düşürürsünüz {#how-to-downgrade-a-plan}

Müşterileriniz, alt site admin dashboard'larına giriş yaparak ve hesap sayfasındaki **Change** (Değiştir) butonuna tıklayarak planlarını istediği zaman düşürebilirler.

![Customer account page with Your Membership card and Change button](/img/account-page/membership-change-button.png)

**Change** butonuna tıkladıktan sonra, kullanıcı/müşteri, aboneliğini değiştirmek istediği planı seçebileceği ödeme sayfasına yönlendirilecektir.

![Downgrade plan options page on the customer side](/img/account-page/downgrade-picker.png)

Bu örnekte, planı **Premium**'dan **Free**'ye düşürüyoruz.

Devam etmek için kullanıcının yapması gereken tek şey **Complete Checkout** (Ödemeyi Tamamla) butonuna tıklamaktır. Bu işlem, üyeliğe ilişkin bekleyen bir değişiklik mesajı gösteren hesap sayfasına geri dönecektir. Değişiklikler, müşterinin **bir sonraki faturalandırma döngüsünde** geçerli olacaktır.

![Account page showing pending membership change banner](/img/account-page/pending-change.png)

### Kullanıcı planını düşürdüğünde ne olur {#what-happens-when-a-user-downgrades-their-plan}

Planı düşürmenin, kullanıcının alt sitesindeki mevcut yapılandırmayı değiştirmediğini belirtmek önemlidir.

Site şablonunu değiştirmek, alt siteyi tamamen silip sıfırlayacağı için, bu işlem otomatik olarak site şablonunu değiştirmez. Bu, gereksiz veri kaybını önlemek içindir. Bu nedenle disk alanı, temalar, eklentiler vb. yerinde kalır; yalnızca gönderiler hariç.

Asıl endişenizin plan altında belirlediğiniz limitler ve kotalar olacağını biliyoruz, ancak herhangi bir yapılandırmayı siler veya değiştirirsek kullanıcı alt sitesine vereceği zararı da düşünmek zorundayız.

Planın belirlediği limiti aşan gönderiler için 3 farklı seçeneğiniz var: **Gönderileri olduğu gibi tut** *,* **Gönderileri çöp kutusuna taşı** *,* veya **Gönderileri taslak olarak kaydet** *.* Bunu Ultimate Multisite ayarlarından yapılandırabilirsiniz.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Ödemeye ne olur {#what-happens-to-the-payment}

Sürüm 2.0'da, ödeme açısından artık bir oranlama (proration) ayarlamasına gerek yoktur.

Bunun nedeni, sistemin mevcut üyeliğin **faturalandırma döngüsünü tamamlamasını beklemesi** ve yeni plan/üyeliğin bu döngüden sonra geçerli olmasıdır. Yeni üyelik için yeni fatura tutarı otomatik olarak hesaplanacak ve bir sonraki faturalandırma döngüsünde tahsil edilecektir.
