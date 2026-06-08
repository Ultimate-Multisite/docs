---
title: Planı aşağı salmaq
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Planı aşağı salmaq (v2)

_**MÜHİM QEYD: Bu məqalə Ultimate Multisite versiya 2.x-ə aiddir.**_

Planı və ya abunəlik xidmətini aşağı salmaq, müştərilərin məhdud büdcası olduğu və ya subsite-larını işlətmək üçün çox resurslara ehtiyacı olmayacağına qərar verdiyi hallarda rast gəlinə bilən bir vəziyyətdir.

## Planı necə aşağı salmaq olar

Müştərilər istənilən vaxt subsite admin dashboard-una daxil olaraq və hesab səhifələrindəki **Change** düyməsinə klikləyərək planlarını aşağı sala bilərlər.

![Customer account page with Your Membership card and Change button](/img/account-page/membership-change-button.png)

**Change** düyməsinə kliklədikdən sonra, istifadəçi/müştəri, abunəliyini dəyişmək istədiyi planı seçə biləcəyi checkout səhifəsinə yönləndiriləcək.

![Downgrade plan options page on the customer side](/img/account-page/downgrade-picker.png)

Bu nümunədə, planı **Premium**-dan **Free**-yə aşağı sala biləcəyimizi göstəririk.

İstifadəçinin davam etmək üçün sadəcə **Complete Checkout** düyməsinə klikləməsi kifayətdir. Bu, sonra onu abunəlik üçün gözlənilən dəyişiklik haqqında mesaj göstərən hesab səhifəsinə qaytaracaq. Dəyişikliklər müştərinin **növbəti hesab dövründə** qüvvəyə minəcək.

![Account page showing pending membership change banner](/img/account-page/pending-change.png)

### İstifadəçi planını aşağı saldıqda nə baş verir

Planı aşağı salmaq, istifadəçinin subsite-ındakı mövcud konfiqurasiyanı dəyişmədiyini qeyd etmək vacibdir.

Bu, site template-ini də avtomatik dəyişməyəcək, çünki site template-ini dəyişmək subsite-ı tamamilə silib sıfırlayacaq. Bu, lazım olmayan məlumat itkisini aradan qaldırmaq üçündür. Beləliklə, disk sahəsi, temalar, pluginlər və s. bütövlükdə qalacaq, yalnız postlar istisna olmaqla.

Əsas narahatlığınız plan altında təyin etdiyiniz limitlər və kvotalar olacağını başa düşürük, lakin istifadəçinin subsite-ının konfiqurasiyalarının hər hansı birini silməsi və ya dəyişməsi nə edə biləcəyi zərəri nəzərə almalıyıq.

Planda təyin edilmiş limitdən artıq olan postlar üçün 3 fərqli seçiminiz var: **Postları olduğu kimi saxlamaq** *,* **Postları çöp qutusuna köçürmək** *,* və ya **Postları layihə (draft) olaraq saxlamaq** *.* Bunu Ultimate Multisite ayarları altında konfiqurasiya edə bilərsiniz.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Ödənişə nə olur

2.0 versiyasında, ödənişlə bağlı xüsusi bir tənzimləməyə ehtiyac qalmır.

Bunun səbəbi odur ki, sistem yeni plan/abunəlik qüvvəyə minməzdən əvvəl mövcud abunəliyinin **hesab dövrünü tamamlamağını** gözləyəcək. Yeni abunəlik üçün yeni hesab məbləği avtomatik olaraq tətbiq ediləcək və növbəti hesab dövründə ödəniləcək.
