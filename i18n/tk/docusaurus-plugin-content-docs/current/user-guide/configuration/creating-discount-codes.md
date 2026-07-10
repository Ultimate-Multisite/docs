---
title: Kesiliş kodlaryny döretmek
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Kesdi Çünür Kodlar Dörmek (v2) {#creating-discount-codes-v2}

_**ÖNEMLİ QAYDAMA: Bu məqalə Ultimate Multisite versiya 2.x-i nəzərdə tutur.**_

Ultimate Multisite ilə müştərilərinizə abunəlikləri üzərində endirim vermək üçün çünür kodlar yarada bilərsiniz. Və onları yaratmaq asandır!

## Çünür Kodları Yaratmaq və Redaktə Etmək {#creating-and-editing-discount-codes}

Çünür kodu yaratmaq və ya redaktə etmək üçün **Ultimate Multisite > Discount Codes**-a gedin.

![Çünür kodları siyahısı — heç bir koddan əvvəl boş vəziyyət](/img/config/discount-codes-empty.png)

Orada artıq yaratdığınız çünür kodların siyahısını görəcəksiniz.

Yeni bir kupon yaratmaq üçün **Add Discount Code**-a klikləyə bilərsiniz və ya onları redaktə etmək üçün üzərində gəlib **Edit**-ə klikləyə bilərsiniz.

![Hover əməliyyatları ilə çünür kodları siyahısı — Edit və Delete linklərini göstərən](/img/config/discount-codes-list-hover.png)

![Səhifə başlığındakı Çünür Kodu Əlavə et düyməsi](/img/config/discount-codes-add-button.png)

Kupon kodunuzu yaratacağınız və ya redaktə edəcəyiniz səhifəyə yönləndiriləcəksiniz. Bu nümunədə biz yeni bir kod yaradacağıq.

![Bütün bölmələri görünən çünür kodu redaktə etmək səhifəsi](/img/config/discount-code-edit.png)

Burada mövcud olan parametrləri nəzərdən keçirək:

**Discount Code daxil edin:** Bu sadəcə çünür kodunuzun adıdır. Bu, müştərilərin ödəniş formunda istifadə etməli olduğu kod deyil.

**Description (Təsvir):** Burada bu kuponun nə üçün olduğunu qısa şəkildə təsvir edə bilərsiniz.

![Redaktə səhifənin yuxarısındakı çünür kodu adı və təsvir sahələri](/img/config/discount-code-description.png)

Çünür kodu aktiv və ya inaktiv olaraq da görə bilərsiniz:

![Çünür kodun aktiv statusu](/img/config/discount-code-active.png)

**Coupon code (Kupon kodu):** Burada müştərilərin ödəniş zamanı daxil etməli olduğu kodu təyin edirsiniz.

![Müşteriler ödeme zamanında kodu daxylaryp girýan kupon kody ulanylyp biljek ýerini görkezýän resminiz](/img/config/discount-code-coupon-field.png)

**Indirim:** Bu ýerde indirim kodyňyz üçin hem **paýla** (percentage) hem deýilip biljek **belentlik meýilnamany** (fixed amount) goýup bilersiňiz.

![Paýla ýa-da belentlik meýilnamany bilen indirim meýilnamasyny goýmak](/img/config/discount-code-amount.png)

**Gereşmelerde ulanyp biljek:** Bu opsiyany öçüpli (toggle off) bolsa, bu kupon kody diňe **birinji tölemek üçin** ulanylýar. Diogter tölemelerden hiç bir indirim almaz. Bu opsiyi ýa-da öçüpli (toggle on) bolsa, indirim kody gelejekki ähli tölemeler üçin dälilidir.

**Gurluşyk meýilnamasyndaky indirim:** Bu opsiyany öçüpli bolsa, kupon kody siparişiniň **gurluşyk meýilnamasy üçin hiç bir indirim bermez**. Bu opsiyi ýa-da öçüpli (toggle on) bolsa, bu kupon kodyňyz planlaryň gurluşyk meýilnamasy üçin ulanylyp biljek indirmini (paýla ýa-da belentlik meýilnamany) goýup bilersiňiz.

![Gereşmelerde ulanyp biljek we gurluşyk meýilnamasyndaky indirim opsionalaryny öçüpli/aýla dyzmak](/img/config/discount-code-renewals.png)

**Aktiw:** Bu kupon kody bilen maneden (manual) işiňyzy başlatmaga ýa-da durdurmaga mümkinçilik berýärsiňiz.

![Indirim kodyny maneden işleýän ýa-da durdurýan opsiyasy](/img/config/discount-code-active.png)

**Advanced Options (Gysgaça: Gowy Opsionalary)** boýunça, biz şu gözegçilikleri bar:

![Indirim kodyň gowy opsionalaryny görkezmek](/img/config/discount-code-advanced.png)

**Ulanylyşyzy çäklemek:**

  * **Uses (Ulanylanlar):** Bu ýerde indirim kodyny näçe gezek ulanyp biljekdigini göräýärsiňiz.

  * **Max uses (Maks ulanylyş):** Bu, ulanyjylary bu indirim kody bilen näçe gezek ulanyp biljekdigini çäkler. Mysal üçin, eger siz burda 10 goýaýan bolsaňyz, kupon diňe 10 gezek ulanylip biler. Bu çäklendirmeden soň, kupon kody hiç bir gezek has ulanyla bilmez.

![Ulanylanlar we maks ulanylyş meýilnamasyny görkezmek bilen chäklemek](/img/config/discount-code-limit-uses.png)

**Başlangıç we sona erme taricleri:** Bu ýerde kupona başlap we/ýerine ýetmek üçin başlangyç we/ýerine ýetmek tariklendirmesini goşmak üçin mümkinçilik barmy.

![Kesintisi kodlaryny tertip etmek üçin Başlangıç we sona erme taripleri boýuklygy](/img/config/discount-code-dates.png)

**Ürünleri çäklemek:** **Select products** (Ürünleri saýlamak) düğmesini öndüriň, ähli ürünler size görkezilip biler. Bu kupon kodyny kabul edip biljek ürüğü maneden ýeke goýmak üçin (öndüripli we öndüripli dälini üýtgetmek arkaly) mümkinçilik bar. Bu ýerde öndüripli däldik ürünler, iňsiz size bu kupon kodyny ulanyp biljekdigi bilen hiç bir üýtgeşme bermez.

![Ürünleri çäklemek bölümü her bir ürük üçin öndüripli düwremlerle](/img/config/discount-code-limit-products.png)

Bu ähli opsionalary goýdugyndan soň, kupony saklamak üçin **Save Discount Code** (Kupon kody sakla) düwmenine basyň we barmy!

![Düzendirme səhpa boýuklygyndaky Kupon kody saklama düwmesi](/img/config/discount-code-save.png)

Kupon indi siziň listäňizde we, oradan onu **edit etmek ýa-da silmek** üçin basyp bilersiňiz.

![Listedeki kupon kody saryşynda Edit we Delete üsti işjeňlikleri](/img/config/discount-codes-list-hover.png)

###

### URL parametrelerini ulamak: {#using-url-parameters}

Eger siz bahalaýjy tablisaňyzy özüňize laýyklaşdyrmak isleseňiz ýa-da web sahypanyňyz üçin gowy kupon kody sabyşy we checkout formanıza awtomatiki kesinti kodyny ulap bilmek isleýjiniz, bu zat URL parametreleri arkaly mümkin.

Ilki bilen, planlaryňyz üçin paylaýjy linki almak zerategi. Bu üçin **Ultimate Multisite > Products** (Ultimate Multisite > Ürünler) bölümini geçiň we bir plan saýlaň.

**Click to Copy Shareable Link** (Paylaýjy linki köçürmek üçin basyň) düwmenine basyň. Bu size bu belli bir plan üçin paylaýjy linki berer. Bizim ýagdaýymyzyňda, berilip biljek link [_**mynetworkdomain.com/register/premium/**_ bolanydy.

![Paylaýjy link düwmenli Ürün sahypasy](/img/config/products-list.png)

Bu spesifik plan üçündiğiniz indirim kodunu tətbiq etmək üçün URL-ə **?discount_code=XXX** parametrinə əlavə edin. Burada **XXX** sizin kupon kodunuzdur.

Bizim nümunəmizdə, bu konkret məhsuna **50OFF** kupon kodunu tətbiq edəcəyik.

Bu spesifik plan üçün və 50OFF indirim kodu tətbiq edildikdə URL belə görünəcək: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
