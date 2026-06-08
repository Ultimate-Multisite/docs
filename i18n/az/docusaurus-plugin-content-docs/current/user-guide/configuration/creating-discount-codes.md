---
title: Endirim Kodları Yaratmaq
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Endirim Kodları Yaratmaq (v2)

_**MÜHİM QEYD: Bu məqalə Ultimate Multisite 2.x versiyasına aiddir.**_

Ultimate Multisite ilə müştərilərinizin abunəlikləri üzrə endirim vermək üçün endirim kodları yarada bilərsiniz. Və onları yaratmaq çox asandır!

## Endirim Kodları Yaratmaq və Redaktə Etmək

Endirim kodu yaratmaq və ya redaktə etmək üçün **Ultimate Multisite > Discount Codes** yolunu izləyin.

![Discount codes list — empty state before any codes exist](/img/config/discount-codes-empty.png)

Burada artıq yaratdığınız endirim kodlarının siyahısını görəcəksiniz.

Yeni bir kupon yaratmaq üçün **Add Discount Code** düyməsinə klikləyə bilərsiniz, yaxud mövcud olanları üzərinə gətirib **Edit** düyməsinə klikləyərək redaktə edə bilərsiniz.

![Discount codes list with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

Sizi kupon kodunuzu yaratmaq və ya redaktə etmək üçün səhifəyə yönləndirəcəyik. Bu nümunədə yeni bir kod yaradacağıq.

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

Burada mövcud olan parametrlərə nəzər salaq:

**Enter Discount Code:** Bu, sadəcə endirim kodunuzun adıdır. Bu, müştərilərin ödəniş formunda istifadə etməli olduğu kod deyil.

**Description:** Burada bu kuponun nə üçün olduğunu qısa şəkildə təsvir edə bilərsiniz.

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

Həmçinin endirim kodunun aktiv və ya deaktiv vəziyyətini görə bilərsiniz:

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** Burası müştərilərin ödəniş zamanı daxil etməli olduğu kodu təyin etdiyiniz yerdir.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Burada endirim kodunuz üçün ya bir **faiz** ya da **maddi bir məbləğ** təyin edə bilərsiniz.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Apply to renewals:** Əgər bu seçim söndürülmüşdürsə, bu endirim kodu yalnız **ilk ödənişə** tətbiq ediləcək. Digər bütün ödənişlərdə endirim olmayacaq. Əgər bu seçim yandırılmışdırsa, endirim kodu gələcək bütün ödənişlər üçün etibarlı olacaq.

**Setup fee discount:** Əgər bu seçim söndürülmüşdürsə, kupon kodu sifarişin **başlatma rüsumu (setup fee)** üçün heç bir endirim verməyəcək. Əgər bu seçim yandırılmışdırsa, bu kupon kodunun planlarınızın başlatma rüsumuna tətbiq ediləcək endirimi (faiz və ya maddi məbləğ) təyin edə bilərsiniz.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Active:** Bu kupon kodunu əl ilə aktiv və ya deaktiv edə bilərsiniz.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

**Advanced Options** altında aşağıdakı parametrlər mövcuddur:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Burada endirim kodunun neçə dəfə istifadə edildiyini görə bilərsiniz.

  * **Max uses:** Bu, istifadəçilərin bu endirim kodundan istifadə edə biləcəyi dəfəni məhdudlaşdırır. Məsələn, bura 10 yazsanız, kupon kodu yalnız 10 dəfə istifadə edilə bilər. Bu limitdən sonra kupon kodu artıq istifadə edilə bilməz.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** Burada kuponunuza başlama tarixi və/və ya bitmə tarixi əlavə etmək seçimi olacaq.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Limit products:** Əgər **Select products** düyməsini yandırarsanız, bütün məhsullarınız görünəcək. Hansı məhsulun bu kupon kodunu qəbul edə biləcəyini əl ilə seçmək (yandıraraq və ya söndürərək) seçimi sizə təqdim olunacaq. Burada söndürülmüş məhsullar, müştərilərin bu kupon kodunu istifadə etməyə çalışması halında heç bir dəyişiklik göstərməyəcək.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Bütün bu parametrləri təyin etdikdən sonra, kuponunuzu yadda saxlamaq üçün **Save Discount Code** düyməsinə klikləyin və hazırdır!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Kuponunuz indi siyahınızdadır və oradan ona **redaktə etmək və ya silmək** üçün klikləyə bilərsiniz.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### URL Parametrlərindən İstifadə:

Əgər qiymət cədvəllərinizi fərdiləşdirmək və ya saytınız üçün gözəl bir kupon kodu səhifəsi qurmaq istəyirsinizsə və endirim kodunu ödəniş formunuza avtomatik tətbiq etmək istəyirsinizsə, bunu URL parametrləri vasitəsilə edə bilərsiniz.

Əvvəlcə, planınız üçün paylaşılabilən linki əldə etməlisiniz. Bunun üçün **Ultimate Multisite > Products** yoluna gedin və bir plan seçin.

**Click to Copy Shareable Link** düyməsinə klikləyin. Bu, bu müəyyən plan üçün paylaşılabilən linki sizə verəcək. Bizim halımızda, verilən paylaşılabilən link [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Product page with shareable link button](/img/config/products-list.png)

Endirim kodunuzu bu müəyyən plana tətbiq etmək üçün, sadəcə olaraq URL-ə **?discount_code=XXX** parametrinə əlavə edin. Burada **XXX** kupon kodudur.

Bizim nümunəmizdə, bu müəyyən məhsula **50OFF** kupon kodunu tətbiq edəcəyik.

50OFF endirim kodu tətbiq edilmiş bu müəyyən plan üçün URL belə görünəcək: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
