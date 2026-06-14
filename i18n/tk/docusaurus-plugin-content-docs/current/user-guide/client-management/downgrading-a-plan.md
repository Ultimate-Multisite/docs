---
title: Ulanıň düşürmek
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Planı aşağı alma (v2)

_**ÖNEMLİ QAYDAMA: Bu məqalə Ultimate Multisite versiya 2.x-i nəzərdə tutur.**_

Planı və ya abunəçiliyə aşağı almaq, müştərilərin öz sitelerini işlətmək üçün çox az resursa ehtiyacı olmadığını düşünməsi və ya məhdud büdcələri olduqda etdikləri bir addımdır.

## Planı necə aşağı salmaq olar

Müştərilər hər zaman subsite admin paneli üzərində daxil olaraq hesab səhifəsində **Change** (Dəyiş) düyməsini klikləyərək planlarını aşağı sala bilərlər.

![Sizin Üzvlük kartınız və Change düyməsi olan müştəri hesabı səhifəsi](/img/account-page/membership-change-button.png)

**Change** (Dəyiş) düyməsini kliklədikdən sonra, istifadəçi/müştəri abunəçiliyini dəyişmək istədikləri planı seçə biləcəyi ödəniş səhifəsinə yönləndirilir.

![Müştəri tərəfində plan aşağı salma seçim səhifəsi](/img/account-page/downgrade-picker.png)

Bu nümunədə, biz planı **Premium**dan **Free**yə aşağı salırıq.

İrəliləmək üçün istifadəçinin sadəcə **Complete Checkout** (Ödənişi Tamamla) düyməsini klikləməsi kifayətdir. Bu, onları müştərinin abunəçiliyi ilə bağlı gözlənilən dəyişiklik haqqında mesaj göstərən hesab səhifəsinə geri qaytaracaq. Dəyişikliklər müştərinin **növbəti ödəniş dövründə** təsir edəcək.

![Gözlənilən abunəçilik dəyişikliyi bannerı olan hesab səhifəsi](/img/account-page/pending-change.png)

### İstifadəçi planını aşağı saldıqda nə baş verir?

Planı aşağı salmanın istifadəçinin subsiteində mövcud konfiqurasiyasını dəyişmədiyini qeyd etmək vacibdir.

Səhifə şablonunu dəyişmədiyi üçün sayt şablonu avtomatik olaraq dəyişmir, çünki sayt şablonunu dəyişmək subsite-i tamamilə silir və sıfırlayır. Bu, lazım olmayan məlumat itkilisini aradan qaldırmaq üçündür. Beləlikdir ki, postlar istisna olmaqla disk yeri, theme-lər, pluginlər və s. bütün halda qalacaq.

Her bir paket altında belirlediğiniz limitler ve kotalarla ilgili ana endişenizi anlıyoruz, ancak herhangi bir yapılandırmayı silerseniz veya değiştirirseniz bu durum kullanıcının alt sitesine verebileceği zararı da göz önünde bulundurmamız gerekiyor.

Paket üzerinde belirlenen limite aşan gönderiler için size 3 farklı seçenek sunuyoruz: **Gönderileri olduğu gibi tutmak** *,* **Gönderileri çöp kutusuna taşımak** *,* veya **Gönderileri taslak haline getirmek** *. Bunu Ultimate Multisite ayarlarından yapılandırabilirsiniz.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Ödeme ne olur?

2.0 sürümünde, prorsiyonlama (proration) açısından ödemede artık herhangi bir ayarlama yapmanıza gerek kalmıyor.

Bunun nedeni, sistemin mevcut üyeliğin fatura döngüsünü **tamamlamasını bekleyip** yeni planın/üyeliğin etkili olmasını sağlamasıdır. Yeni üyelik için yeni fatura miktarı otomatik olarak uygulanacak ve bir sonraki fatura döngüsünde ücretlendirilecektir.
