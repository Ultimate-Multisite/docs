---
title: Chek kodlari yaratish
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Cheg'imlar (Discount Codes) Yaratish (v2)

_**MUHIM ESLATMA: Bu maqola Ultimate Multisite 2.x versiyasiga oid.**_

Ultimate Multisite yordamida siz mijozlaringizga obunalar ustidan chegirmalar beradigan chegirma kodlari yaratishingiz mumkin. Va ularni yaratish juda oson!

## Chegirma Kodlarini Yaratish va Tahrirlash {#creating-and-editing-discount-codes}

Chegirma kodini yaratish yoki tahrirlash uchun **Ultimate Multisite > Discount Codes** ga kiring.

![Chegirma kodlari ro'yxati — hech qanday kod mavjud bo'lmagan holat](/img/config/discount-codes-empty.png)

U yerda siz allaqachon yaratgan chegirma kodlar ro'yxatini ko'rasiz.

Yangi kupon yaratish uchun **Add Discount Code** (Chegirma kodi qo'shish) tugmasiga bosishingiz mumkin, yoki mavjudlarini tahrirlash uchun ularning ustiga kursorni olib, **Edit** (Tahrirlash) ga bosishingiz mumkin.

![Hover harakatlari bilan chegirma kodlari ro'yxati — Edit va Delete linklari ko'rsatilgan](/img/config/discount-codes-list-hover.png)

![Sahifa sarlavhasi bo'yicha Chegirma kodi qo'shish tugmasi](/img/config/discount-codes-add-button.png)

Siz kupon kodini yaratishingiz yoki tahrirlashingiz kerak bo'lgan sahifaga yo'naltirilasiz. Bu misolda biz yangisini yaratamiz.

![Barcha bo'limlar ko'rsatilgan chegirma kodi tahrirlash sahifasi](/img/config/discount-code-edit.png)

Mana shu yerda mavjud sozlamalarni ko'rib chiqamiz:

**Discount Code kiriting (Enter Discount Code):** Bu faqat sizning chegirma kodining nomi bo'ladi. Bu mijozlaringiz xarid qilish shaklida ishlatishi kerak bo'lgan kod emas.

**Tavsif (Description):** Bu yerda bu kupon nima uchun ekanligini qisqacha tasvirlashingiz mumkin.

![Tahrirlash sahifasining yuqori qismidagi chegirma kodi nomi va tavsif maydonchalari](/img/config/discount-code-description.png)

Shuningdek, siz chegirma kodini faol yoki faol emasligini ko'rishingiz mumkin:

![Chegirma kodining faollik holati](/img/config/discount-code-active.png)

**Kupon kodi (Coupon code):** Bu yerda mijozlar xarid qilish paytida kiritishi kerak bo'lgan kodni belgilaysiz.

![Coupon code alanı, müşterilerin ödeme sırasında kodu gireceği yer](/img/config/discount-code-coupon-field.png)

**İndirim:** Burada indirim kodunuz için ya bir **yüzdeyi** ya da **sabit bir tutarı** belirleyebilirsiniz.

![Yüzde veya sabit miktar açılır menüsü ile indirim miktarı ayarı](/img/config/discount-code-amount.png)

**Yenilemelere uygulama:** Bu seçenek kapalıysa, bu indirim kodu yalnızca **ilk ödemeye** uygulanacaktır. Diğer tüm ödemelerde herhangi bir indirim olmayacaktır. Bu seçenek açık olursa, indirim kodu gelecekteki tüm ödemeler için geçerli olacaktır.

**Kurulum ücreti indirimi:** Bu seçenek kapalıysa, kupon kodu siparişin **kurulum ücretine herhangi bir indirim sağlamaz**. Bu seçenek açık olursa, bu kupon kodunun planlarınızın kurulum ücretine uygulayacağı indirimi (yüzde veya sabit miktar) belirleyebilirsiniz.

![Yenilemelere uygulama ve kurulum ücreti indirimi değiştirme seçenekleri](/img/config/discount-code-renewals.png)

**Aktif:** Bu kupon kodunu manuel olarak etkinleştirin veya devre dışı bırakın.

![İndirim kodunu manuel olarak etkinleştirmek veya devre dışı bırakmak için aktif anahtarı](/img/config/discount-code-active.png)

**Gelişmiş Seçenekler** altında aşağıdaki ayarları bulabilirsiniz:

![İndirim kodu gelişmiş seçenekleri](/img/config/discount-code-advanced.png)

**Kullanımı Sınırı:**

  * **Kullanımlar (Uses):** Burada indirim kodunun kaç kez kullanıldığını görebilirsiniz.

  * **Maksimum Kullanım Sayısı (Max uses):** Bu, kullanıcıların bu indirim kodunu kullanabileceği miktarı sınırlar. Örneğin, buraya 10 yazarsanız, kupon yalnızca 10 kez kullanılabilir. Bu sınıra ulaştıktan sonra kupon kodu artık kullanılamaz hale gelir.

![Mevcut kullanım sayısı ve maksimum kullanım sayısı alanı ile kullanım sınırını ayarlama](/img/config/discount-code-limit-uses.png)

**Boshlash va tugash sanalari:** Bu yerda siz kuponingizga boshlanish sanasi va/yoki tugash sanasini qo'shish imkoniyatiga ega bo'lasiz.

![Taqdimot kodini belgilash uchun boshlanish va tugash sanalari maydonlari](/img/config/discount-code-dates.png)

**Mahsulotlarni cheklash:** Agar **Select products** (Mahsulotlarni tanlash) ni yoqsangiz, barcha mahsulotingiz sizga ko'rsatiladi. Bu kupon kodidan qaysi mahsulot bu kupon kodi bilan foydalanishi mumkinligini qo'lda tanlash imkoniyatiga ega bo'lasiz (yoqish yoki o'chirish orqali). Bu yerda o'chirilgan mahsulotlar, agar mijozlaringiz ushbu kupon kodidan foydalansa hech qanday o'zgarish ko'rsatmaydi.

![Mahsulotlarni cheklash bo'limi, har bir mahsulot uchun belgilarni yoqish/o'chirish tugmalari bilan](/img/config/discount-code-limit-products.png)

Barcha bu opsiyalarni sozlaganingizdan so'ng, kuponingizni saqlash uchun **Save Discount Code** (Kupon kodini saqlash) ga bosing va vazifani tugating!

![Tahrirlash sahifasining pastki qismidagi Kupon kodini saqlash tugmasi](/img/config/discount-code-save.png)

Endi kuponingiz ro'yxatda turadi va undan tahrirlash yoki o'chirish uchun bosing.

![Ro'yxatdagi kupon kodi qatorida Tahrirlash va O'chirish hover harakatlari bilan](/img/config/discount-codes-list-hover.png)

###

### URL parametrlari dan foydalanish: {#using-url-parameters}

Agar siz narx jadvalaringizni moslashtirmoqchi bo'lsangiz yoki veb-saytingiz uchun chiroyli kupon kodi sahifasini yaratmoqchi bo'lsangiz va chegirma kodini to'lov shaklingizga avtomatik qo'llashni xohlasangiz, bunga URL parametrlari orqali amal qilishingiz mumkin.

Avvalo, rejaingiz uchun baham ko'rish mumkin bo'lgan linkni olishingiz kerak. Buni qilish uchun **Ultimate Multisite > Products** (Ultimate Multisite > Mahsulotlar) ga o'ting va rejaningizni tanlang.

**Click to Copy Shareable Link** (Baham ko'rish mumkin bo'lgan linkni nusxalash uchun bosing) tugmasiga bosing. Bu sizga ushbu aniq reja uchun baham ko'rish mumkin bo'lgan link beradi. Bizning holatimizda, berilgan baham ko'rish mumkin bo'lgan link quyidagicha edi: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Baham ko'rish mumkin bo'lgan link tugmasi bilan mahsulot sahifasi](/img/config/products-list.png)

Bu chegirma kodini ushbu aniq reja uchun qo'llash uchun URL ga **?discount_code=XXX** parametrini qo'shing. Bu yerda **XXX** degani kupon kodi bo'ladi.

Bizning misolimizda, biz bu aniq mahsulotga **50OFF** kupon kodini qo'llaymiz.

Bu aniq reja uchun va 50OFF chegirma kodi qo'llanilgan holda URL quyidagicha ko'rinadi: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
