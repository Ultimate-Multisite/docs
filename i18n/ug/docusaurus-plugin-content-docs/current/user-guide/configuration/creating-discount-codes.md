---
title: Қаррамақ кодлар ясау
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Discount Code Oluşturma (v2)

_**ÖNEMLİ QAYDALI: Bu maqale Ultimate Multisite versiyası 2.x haqida ma'lumot beriladi.**_

Ultimate Multisite yordamida siz mijozlaringizga obunalar ularni chegirmali olishlari uchun chegirma kodlari yaratishingiz mumkin. Va ularni yaratish juda oson!

## Chegirma Kodlarini Yaratish va Tahrirlash

Chegirma kodini yaratish yoki tahrirlash uchun **Ultimate Multisite > Discount Codes** ga kiring.

![Chegirma kodlari ro'yxati — hech qanday kod bo'lmagan holat](/img/config/discount-codes-empty.png)

U yerda siz allaqachon yaratgan chegirma kodlaringiz ro'yxatini ko'rasiz.

Yangi kupon yaratish uchun **Add Discount Code** (Chegirma Kodu Qo'shish) ga bosishingiz mumkin, yoki mavjudlarini tahrirlash uchun ularning ustiga kursorni olib, **Edit** (Tahrirlash) tugmasini bosing.

![Hover harakatlari bilan chegirma kodlari ro'yxati — Edit va Delete linklari ko'rsatilgan](/img/config/discount-codes-list-hover.png)

![Sahifa sarlavhasi bo'yicha Chegirma Kodu Qo'shish tugmasi](/img/config/discount-codes-add-button.png)

Siz kupon kodini yaratishingiz yoki tahrirlashingiz kerak bo'lgan sahifaga yo'naltirilasiz. Bu misolda biz yangisini yaratamiz.

![Barcha bo'limlar ko'rsatilgan chegirma kodi tahrirlash sahifasi](/img/config/discount-code-edit.png)

Mana shu yerda mavjud sozlamalarni ko'rib chiqamiz:

**Enter Discount Code (Chegirma Kodini Kiriting):** Bu faqat sizning chegirma kodining nomi bo'ladi. Bu mijozlaringiz xarid qilish shaklida ishlatishi kerak bo'lgan kod emas.

**Description (Tavsif):** Bu yerda siz ushbu kupon nima uchun ekanligini qisqacha tasvirlashingiz mumkin.

![Tahrirlash sahifasining yuqori qismidagi chegirma kodi nomi va tavsif maydonchalari](/img/config/discount-code-description.png)

Shuningdek, siz chegirma kodini faol yoki faol emasligini ko'rishingiz mumkin:

![Chegirma kodining faollik holati](/img/config/discount-code-active.png)

**Coupon code (Kupon kodi):** Bu yerda mijozlar xarid qilish paytida kirita oladigan kodni belgilaysiz.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Burada, indirim kodunuz için ya bir **yüzde** ya da **belirli bir miktar** belirleyebilirsiniz.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Yenilemelerde uygula (Apply to renewals):** Bu seçeneği kapalı tutarsanız, bu indirim kodu sadece **ilk ödemeye** uygulanır. Diğer tüm ödemelerde herhangi bir indirim olmaz. Bu seçeneği açık tutarsanız, indirim kodu gelecekteki tüm ödemeler için geçerli olur.

**Kurulum ücreti indirimi (Setup fee discount):** Bu seçeneği kapalı tutarsanız, kupon kodu siparişin **kurulum ücretine hiçbir indirim sağlamaz**. Bu seçeneği açık tutarsanız, bu kupon kodunun planlarınızın kurulum ücretine uygulayacağı indirimi (yüzde veya sabit miktar) belirleyebilirsiniz.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Aktif (Active):** Bu kupon kodunu manuel olarak etkinleştirin veya devre dışı bırakın.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

**Gelişmiş Seçenekler (Advanced Options)** altında aşağıdaki ayarları bulabilirsiniz:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Kullanım Sınırı (Limit uses):**

  * **Kullanımlar (Uses):** Burada, indirim kodunun kaç kez kullanıldığını görebilirsiniz.

  * **Maksimum Kullanım Sayısı (Max uses):** Bu, kullanıcıların bu indirim kodunu ne kadar kullanabileceğini sınırlar. Örneğin, buraya 10 yazarsanız, kupon sadece 10 kez kullanılabilir. Bu sınıra ulaştıktan sonra kupon kodu artık kullanılamaz hale gelir.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**شروع و انقضا تاریخ‌ها:** اینجا شما کوپن کدınıza başlangıç tarihi ve/veya bitiş tarihi ekleme seçeneğine sahip olacaksınız.

![İndirim kodunu planlamak için Başlangıç ve Bitiş Tarihi alanları](/img/config/discount-code-dates.png)

**Ürün Sınırı:** **Select products**'ı açarsanız, tüm ürünleriniz size gösterilecektir. Bu kupon kodunun hangi ürüne uygulanabileceğini manuel olarak seçme (açıp kapama yaparak) seçeneğiniz olacaktır. Burada kapatılan ürünler, müşterilerinizin bu kupon kodunu onlara kullanmaya çalışması durumunda herhangi bir değişiklik göstermeyecektir.

![Ürün başına anahtarlar ile Ürün Sınırı bölümü](/img/config/discount-code-limit-products.png)

Tüm bu seçenekleri ayarladıktan sonra, kupon kodunuzu kaydetmek için **Save Discount Code**'a tıklayın ve işiniz bitmiş olur!

![Düzenleme sayfasının altındaki Kaydet Kupon Kodu butonu](/img/config/discount-code-save.png)

Kupon kodu artık listenizde olacak ve oradan onu **düzenlemek veya silmek** için tıklayabilirsiniz.

![Düzenle ve Silme üzerine fareyle gezinilen listedeki indirim kodu satırı](/img/config/discount-codes-list-hover.png)

###

### URL Parametrelerini Kullanma:

Fiyat tablolarınızı özelleştirmek veya web siteniz için güzel bir kupon kodu sayfası oluşturmak ve indirim kodunu ödeme formunuza otomatik olarak uygulamak isterseniz, bunu URL parametreleri aracılığıyla yapabilirsiniz.

Öncelikle, planınızın paylaşılabilir bağlantısını almanız gerekiyor. Bunu yapmak için **Ultimate Multisite > Products**'a gidin ve bir plan seçin.

**Click to Copy Shareable Link** butonuna tıklayın. Bu size bu belirli plana ait paylaşılabilir bağlantıyı verecektir. Bizim durumumuzda verilen paylaşılabilir bağlantı [_**mynetworkdomain.com/register/premium/**_ idi._

![Paylaşılabilir bağlantılı ürün sayfası](/img/config/products-list.png)

هذا تخفيض كودunu bu xususiy plan uchun tətbiq etmək istəsən, URL-e **?discount_code=XXX** parametrini əlavə etməyin kifayətdir. Burada **XXX** sizin kupon kodunuzdur.

Bizim nümunəmizdə isə, biz bu xüsusi məhsul üçün **50OFF** kupon kodunu tətbiq edəcəyik.

Bu xüsusi plan və 50OFF endirim kodu tətbiq edildikdə URL belə görünəcək: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
