---
title: Асосий таخشилар
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Асосий Тушунлар {#basic-concepts}

WordPress bilen işlemek üçin birnäçe asosiy tushuntirishlar beraman. Bu narlar siz WordPress bilen qanday ishlatingi düşunmaniz üçin kömek eder.

**WordPress چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی چی

WordPress Multisite-ta yangi foydalanuvchi va Ultimate Multisite-ta boshlagan biri uchun dastlab ko'p yangi so'zlarni o'rganish kerak bo'ladi. Ularni o'rganish juda muhim, chunki siz platformani va u butunlay qanday ishlayotganini tushunishingiz kerak bo'ladi.

WordPress Multisite

Bu makalede WordPress'teki bir nevi asosiy tushunchalarni belgilab va tushuntirishga harakat qilamiz. Ba'zilari foydalanuvchilar uchun, ba'zilari dasturchilar uchun, ba'zilari ham ikkalasi uchun muhim bo'ladi.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite**, bu bir WordPress kurma tipidir. Bu sayede tek bir WordPress paneli (dashboard) üzerinden birden fazla web sitesi oluşturabilir ve yönetebilirsiniz. Sitenin sayısını, özelliklerini, temalarını ve kullanıcı rollerini dahil olmak üzere her şeyi yönetebilirsiniz. Yüzlerce hatta binlerce siteyi yönetmek mümkün olur.

# Şebeke (Network) {#network}

WordPress'te "Şebeke" (Network) dediğimiz şey, genellikle sitenizin farklı kısımları arasındaki bağlantıyı veya birden fazla web sitesini tek bir yönetim altında tutma fikrini ifade eder. Bu konu biraz teknik gelebilir ama hiç merak etmeyin, size basitçe anlatacağım.

**Ne Anlama Gelir?**

Basitçe söylemek gerekirse, şebeke demek, sitenizin farklı bölümlerinin (örneğin ana sayfa, blog sayfaları, ürün sayfaları) birbirleriyle konuşabilmesi ve verileri paylaşabilmesi demektir. Eğer bir e-ticaret sitesi düşünürsek, bu şebeke sayesinde sipariş bilgisi, stok durumu gibi kritik veriler anında güncellenir.

**Neden Önemli?**

1. **Kolay Yönetim:** Tüm sitenizi tek bir yerden yönetebilirsiniz. Bir ayar yaptığınızda, o değişiklik tüm siteye yansır.
2. **Performans:** Veri akışı optimize edildiği için siteniz daha hızlı çalışır.
3. **Esneklik:** Farklı bölümleri veya farklı alt alan adlarını (subdomains) kolayca ekleyip yönetebilirsiniz.

**WordPress'te Şebeke Nasıl Kurulur?**

WordPress'te "Network" terimi bazen özel eklentilerle veya belirli yapılandırmalarla ilgilidir. En yaygın senaryolar şunlardır:

* **Multi-site (Çoklu Site) Yapısı:** Eğer birden fazla bağımsız web sitesi kurmak istiyorsanız (örneğin, bir şirket için farklı departmanlar), bu yapıyı kullanırsınız. Bu durumda her site kendi verisine sahip olur ama WordPress ana kurulumu üzerinden yönetilir.
* **Site Bağlantıları ve Redirect'ler:** Sitenizdeki sayfalar arasında otomatik yönlendirmeler yapmak veya farklı alan adlarını birbirine bağlamak için kullanılan yapılandırmalardır.

**Örnek Senaryo: WooCommerce ile Şebeke**

Eğer bir WooCommerce mağazanız varsa ve bu mağazanın birden fazla bölgesi (örneğin, farklı ülkeler için ayrı ürün listeleri) varsa, bu bölgeleri yönetmek için özel eklentiler kullanabilirsiniz. Bu eklentiler, sitenizin temel yapısını korurken size o "şebeke" hissini verir.

**Teknik Detaylar (Basitçe):**

Bu konuyu derinlemesine anlamak için genellikle WordPress'in kendi ayarlarını veya kullandığınız spesifik bir Network/Multi-site eklentisinin dokümantasyonunu incelemeniz gerekir. Ama temel mantık şudur: Veri, doğru yere yönlendirilir ve herkes o veriyi görebilir (izin verilen ölçüde).

**Özetle:** WordPress'te "Network", sitenizin parçalarının birbirine bağlı, uyumlu ve tek bir sistem tarafından yönetilen bir yapıya sahip olması demektir. Bu sayede hem daha düzenli çalışırsınız hem de sitenizi büyütmek istediğinizde esnek olursunuz.

WordPress haqida gapirganda, multisite tarifi, bir nechta **subsite**ni bitta dashboard orqali boshqarish imkonini beradi. Multisite tarmog'ini yaratish hosting provayderlar orasida farq qilishi mumkin, lekin yakuniy natija odatda WordPressga bu maxsus rejimda ishlayotganini aytadigan **wp-config.php** faylida bir nechta qo'shimcha yo'riqlar berilishi bilan belgilanadi.

دیتابیس (Database)

قاعدة بيانات (database) منظّم, yapılandırılmış ma'lumotlar to'plimidir. Kompyuter terminologiyasida, ma'lumotlarni saqlash va tartiblash uchun ishlatiladigan dastur quyidagicha ataladi. Uni ma'lumotlarni turli bo'limlar (jadvallar) ichiga joylashtirgan shkaflar deb tasavvur qiling.

WordPress Multisite bir maktub (database) ishlatadi va har bir alt sayt o'ziga xos jadvallarga ega bo'ladi, bu jadvallarning oldida blog ID ko'rinishida prefix (old nomi) bo'ladi. Shuning uchun siz tarmoqni (network) o'rnatganingizdan so'ng, ma'lumotlar bazangizda va alt sayt yaratgach, quyidagi jadvallarga ega bo'lishingiz kerak:

_wp_1_options_ - birinci alt sayt өчен опциялар таблицасы

_wp_2_options_ - иkinji alt sayt өчен опциялар таблицасы

## Хостинг провайдери {#database}

Web hosting sağlayıcısı, işletmelerin ve bireylerin kendi web sitelerini Dünya Veb-i geniş ağı (World Wide Web) üzerinden erişilebilir hale getirmelerine olanak tanıyan bir şirkettir. Web barındırma sağlayıcılarının sunduğu hizmetler değişse de genellikle web sitesi tasarımı, sunucuda depolama alanı ve İnternet bağlantısı gibi şeyler içerir.

# โดเมน (Domain) {#hosting-provider}

โดเมน म्हणजे तुमच्या वेबसाइटचे नाव असते. हे असे समजा की तुम्ही इंटरनेटवर एक घर शोधत आहात, तर डोमेन हे त्या घराचा पत्ता आहे. जेव्हा लोक तुमच्या वेबसाइटला भेट देण्यासाठी ब्राउझरमध्ये टाइप करतात, तेव्हा ते नेमके कोणत्या ठिकाणी जावे हे डोमेन ठरवते.

**डोमेन म्हणजे काय?**

सोप्या भाषेत सांगायचे तर, डोमेन हे इंटरनेटवर तुमच्या वेबसाइटसाठी एक युनिक ओळख (Unique Identity) असते. उदाहरणार्थ, जर तुम्ही `www.myawesomeblog.com` असे डोमेन घेतले असेल, तर हा तुमचा विशिष्ट पत्ता आहे. याशिवाय, इतर लोक तुमच्या ब्लॉगला भेट देण्यासाठी फक्त `myawesomeblog.com` टाईप करू शकतात.

**डोमेनचे महत्त्व:**

1. **ओळख (Identity):** हे तुमच्या वेबसाइटची खरी ओळख असते.
2. **मेमरी (Memory):** लोकांना आठवण करून देणे सोपे करते की त्यांना कोणत्या साइटवर जायचे आहे.
3. **प्रसारण (Reach):** तुम्ही किती लोकांपर्यंत पोहोचता, हे डोमेनवरून ठरते.

**डोमेन खरेदी करणे:**

तुम्ही तुमच्या आवडीनुसार एक डोमेन नाव खरेदी करू शकता. ही प्रक्रिया खूप सोपी असते आणि अनेक कंपन्या तुम्हाला ते मिळवण्यासाठी मदत करतात.

*   **नाव निवडणे:** तुमचे डोमेन नाव लक्षात ठेवायला सोपे, आकर्षक आणि तुमच्या व्यवसायाशी संबंधित असावे.
*   **नोंदणी (Registration):** तुम्ही डोमेन नोंदणीसाठी काही कंपन्यांकडून पैसे देता. या कंपन्या तुम्हाला त्या नावाचा अधिकार एका विशिष्ट कालावधीसाठी मिळवून देतात.

तुम्ही WordPress वापरत असाल, तर वेबसाइट तयार करण्यासाठी होस्टिंग आणि डोमेन दोन्हीची गरज असते. डोमेन हे तुमच्या वेबसाइटचे पहिले नाव आहे!

دومين نام (domain name) ئەوەی کە خەڵک سایتەکەت بۆ بینین بەکاردەهێنن، ئادرسێکی وایە. ئەو وێبۆڕەرە دەڵێت سایتەکەت لە کوێ لێ بگەڕێتەوە. وەک پیت گەڕە، دومین نام ئەوەیە کە خەڵک چۆن لەسڵی تۆی وێب‌سایەک بە ئۆنلاین ببینن. وەک ئەوەی نیشانەیەک لەبەردەستت هەبێت بۆ دوکانت. ئەگەر دەتەوێت سایتەکەت ببینیت، دەبێت شێوەی پیت (web address) ی تایبەتی بنەڕەتی بەکاربهێنیت لەسڵاری وێبۆڕەرەکەتدا کە ئەوەیە [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com)، کە [**ultimatemultisite.com**](http://ultimatemultisite.com) دومین نامە.

## Alt Domain (Subdomain) {#domain}

WordPress'te alt domain (alt domain) dediğimiz şey, ana sitenizin bir parçası gibi görünen ama aslında ayrı bir web sitesi gibi çalışan küçük bir alandır. Bunu genellikle "subdomain" olarak da adlandırırız. Yani ana alan adınızın önüne eklediğiniz bir kısım olur ve bu sayede farklı projeler veya bölümler için ayrı adresler oluşturabilirsiniz.

**Neden Subdomain Kullanmalıyız?**

Subdomain kullanmanın birkaç önemli sebebi var:

1. **Farklı Projeleri Ayırmak:** Eğer ana siteniz hem blog hem de e-ticaret sitesi gibi iki farklı iş yapıyorsa, her birini ayrı alt alanda tutmak çok mantıklıdır. Örneğin, `blog.siteniz.com` ve `shop.siteniz.com` şeklinde ayırabilirsiniz.
2. **Test Etmek:** Yeni bir tema veya eklenti kurmadan önce, bu yeni özelliği ana sitenizi etkilemeden test etmek için alt domain kullanmak harika bir yoldur.
3. **Marka Yönetimi:** Bazen belirli bir ürün serisi veya kampanya için ayrı bir alan oluşturmak istersiniz. Bu da marka yönetimi açısından faydalıdır.

**Subdomain Nasıl Oluşturulur? (Teknik Açıklama)**

WordPress'te subdomain oluşturmanın birkaç yolu vardır:

1. **Hosting Kontrol Paneli Üzerinden:** Çoğu hosting firması (barındırma şirketi) size kontrol panelinde kolayca bir alt alan adı ekleme seçeneği sunar. Bu en basit yoldur.
2. **DNS Ayarları ile:** Eğer kendi alan adınızı yönetiyorsanız, DNS ayarlarınız üzerinden istediğiniz subdomain'i oluşturup ana alan adınıza yönlendirebilirsiniz. Bu biraz daha teknik bilgi gerektirir.

**WordPress İçinde Subdomain Kullanımı (Eklentilerle)**

WordPress'in kendisi doğrudan bir alt domain yönetim aracı sunmaz; bu yüzden genellikle bunu yapabilmek için özel eklentilere ihtiyacınız olur. En popüler yöntem şunlardır:

* **Subdomain Eklentileri:** Piyasada, WordPress sitenize kolayca subdomain oluşturmanızı sağlayan birçok eklenti bulunur. Bu eklentiler size arayüz üzerinden istediğiniz alt domaini (örneğin `test.siteniz.com`) hızlıca kurma imkanı verir.
* **WooCommerce ile Entegrasyon:** Eğer WooCommerce kullanıyorsanız, bazı gelişmiş eklentiler, ürünlerin veya mağazaların farklı bölümlerini ayrı subdomain'lerde göstermenize yardımcı olabilir.

**Örnek Kullanım Senaryosu:**

Diyelim ki ana siteniz `www.ornek.com` olsun.

* **Blog için:** Siz `blog.ornek.com` adresini kullanabilirsiniz.
* **Mağaza için:** Siz `shop.ornek.com` adresini kullanabilirsiniz.

Bu sayede hem blogunuzun trafiğini hem de alışveriş sitenizin performansını ayrı ayrı izleyebilir ve yönetebilirsiniz.

Subdomain, ana domen (main domain) aşamasında bir web sitesi turu (hierarchy) türüdür. Ama bu, web saytlarındaki içeriği klasörler halinde düzenlemek yerine, kendi başına ayrı bir web sitesi gibi davranır. Bu, [**https://site1.domain.com/**](https://site1.domain.com/) şeklinde gösterilir; burada _site1_ alt alan adının adı ve [_domain.com_] ana domenidir.

## Alt Dirs (Alt Directory) / Alt Folder {#subdomain}

Alt dizini (subdirectory), ana alan adının (root domain) altında, web sitesindeki içeriği klasörler (folders) kullanarak düzenleyen bir web sitesi hiyerarşisi türüdür. Alt dizin, aynı zamanda bir alt klasördür ve isimleri birbirinin yerine kullanılabilir. Bu, `[https://domain.com/site1]` şeklinde gösterilir; burada `site1` alt dizinin adıdır ve `_domain.com_` ana alan adıdır.

## Alt Site (Subsite) {#subdirectory}

Alt Site, Multisite ağı içinde oluşturduğing bir alt sitedir. WordPress Multisite kurulumunuz nasıl yapılandırıldığına bağlı olarak ya bir **alt alan adı (subdomain)** ya da bir **alt dizin (subdirectory)** olabilir.

## Süper Yönetici (Super Admin) {#subsite}

WordPress Süper Yönetimi (Super Admin), bir Multisite ağındaki tüm alt sitelerini yönetebilme yeteneğine sahip olan bir kullanıcı rolüdür. Multisite kullanıcıları için, bu, WordPress kurulumunuza sağlayabileceğiniz **en yüksek erişim seviyesidir**.

## Plugin {#super-admin}

Umumiy holatda, plugin bu sizning WordPress saytingize qo'shimcha funksionallik kiritadigan kodlar to'plamidir. Bu login logotipini o'zgartirish kabi oddiy bo'lishidan tortib, e-commerce (elektron savdo) funksionalligi qo'shish kabi murakkab bo'lishi mumkin. _Woocommerce_ va _Contact Form_ pluginlari misollar hisoblanadi.

WordPress Multisite'ta pluginler faqat Super Admin (Süper Yönetici) orqidan tarmoq administrator panelidan o'rnatilishi mumkin. Subsite Administratorlari esa faqat o'zlar subsite ichida pluginlarni faollashtirib yoki o'chirish imkoniyatiga ega.

## Themes {#plugin}

WordPress тема (theme), وایتی görünüşünü belgiləyən faylların bir toplusudur (_grafikalar, stil faylları və kodlar_). O, yazı tipi stilizasiyası, səhifə yerləşməsi, rənglər kimi bütün ön-uç (front-end) stil elementlərini təmin edir.

WordPress Multisite'ta pluginler va theme'ler faqat Super Admin (Süper Administrator) tomonidan yüklenip o'rnatilishi mumkin, va ularni subsite administratorlari tomonidan o'zlarining subsite darajasida faollashtirish mumkin.

## Site Template {#themes}

**Site Template** — Бул сизнинг şəbəkenizde yangi saytlar yaratish uchun asos bo'ladigan shablon (boilerplate) saytdir.

Bu deməkdir ki siz bir asosiy (base) sayt yarata bilersiniz, müxtəlif pluginləri aktivləşdirə bilərsiniz, aktiv tema seçə bilərsiniz və onu istədiyiniz şəkildə özünüz uyğunlaşdıra bilərsiniz. Sonra, müştəriniz yeni hesab yaratdıqda, o, mənasız məzmunu olmayan standart bir WordPress saytı əvəzinə, bütün uyğunlaşdırmalarınız və məzmunlarınız artıq yerləşdirilmiş asosiy saytın bir nüsxəsini alır.

# โดเมนแนปปิ้ง (Domain Mapping) {#site-template}

โดเมนแนปปิ้งとは、ウェブサイトの特定のドメイン（例: `www.example.com`）を、別の場所やシステムに紐づける作業のことです。簡単に言うと、「この住所（ドメイン）は、あの部屋（新しい場所）につながっているよ」と設定するイメージです。

## Domain Mappingとは কী? (What is Domain Mapping?) {#domain-mapping}

โดเมนแนปปิ้ง म्हणजे तुमच्या सध्याच्या वेबसाइटला दुसऱ्या डोमेनशी जोडणे किंवा विशिष्ट URL ला वेगळ्या ठिकाणी निर्देशित करणे होय. हे प्रामुख्याने खालील गोष्टींसाठी वापरले जाते:

*   **Redirects:** एका जुन्या लिंकवरून नवीन लिंकवर आपोआप नेण्यासाठी (उदा. `old-site.com` वर क्लिक केल्यावर `new-site.com` वर जाणे).
*   **SEO Management:** सर्च इंजिनला सांगण्यासाठी की तुमच्या वेबसाइटचा कोणता भाग कोणत्या डोमेनशी संबंधित आहे.
*   **Migration:** एका होस्टिंगवरून दुसऱ्या होस्टिंगवर वेबसाइटची माहिती सुरक्षितपणे हलवण्यासाठी.

## Domain Mapping कसे सेट करायचे? (How to Set Up Domain Mapping?) {#ssl}

WordPress मध्ये डोमेन मॅपिंग सेट करण्यासाठी अनेक पद्धती आहेत, पण सर्वात सोपी आणि सामान्य पद्धत खालीलप्रमाणे आहे:

### १. WordPress Settings वापरून (Using WordPress Settings) {#media}

जर तुम्हाला फक्त एक डोमेनवरून दुसऱ्या डोमेनवर रीडायरेक्ट करायचा असेल, तर तुम्ही प्लगइन किंवा `.htaccess` फाईल वापरू शकता.

**पद्धत:**
1.  तुमच्या वर्डप्रेस डॅशबोर्डमध्ये जा.
2.  'Settings' (सेटिंग्ज) वर क्लिक करा.
3.  'Permalinks' (परमलिंक्स) मध्ये जा आणि काही बदल करून 'Save' करा.

*(टीप: ही पद्धत फक्त मूलभूत रीडायरेक्टसाठी उपयुक्त आहे.)*

### २. प्लगइन वापरून (Using a Plugin) {#permalinks}

जर तुम्हाला अधिक प्रगत मॅपिंग करायचे असेल, तर तुम्ही विशिष्ट डोमेन मॅपिंग प्लगइन्सचा वापर करू शकता. उदाहरणार्थ, काही प्लगइन्स तुम्हाला एका सबडोमेनला दुसऱ्या मुख्य डोमेनशी जोडण्याची सोय देतात.

**उदाहरण:**
तुम्ही तुमच्या वर्डप्रेस इंस्टॉलेशनमध्ये `Redirection` सारखा प्लगइन इन्स्टॉल करून सेट करू शकता की: "जर कोणी `blog.example.com` वर गेला, तर त्याला आपोआप `www.example.com/blog` वर पाठवा."

### ३. .htaccess फाईल वापरून (Using the .htaccess File) {#ultimate-multisite}

हे थोडे तांत्रिक आहे, पण हे सर्वात शक्तिशाली साधन आहे. तुमच्या वेबसाइटच्या रूट फोल्डरमध्ये `.htaccess` नावाची एक फाईल असते. या फाईलमध्ये तुम्ही नियम लिहू शकता की विशिष्ट डोमेनला कसा मॅप करायचा.

**उदाहरण कोड:**
```apache
# Example of a simple redirect rule in .htaccess
Redirect 301 /old-domain.com http://new-domain.com/
```

## महत्त्वाच्या गोष्टी (Important Things) {#checkout-form}

*   **SSL सर्टिफिकेट:** डोमेन मॅपिंग करताना नेहमी SSL सर्टिफिकेट (HTTPS) वापरणे खूप महत्त्वाचे आहे, जेणेकरून तुमचा डेटा सुरक्षित राहील.
*   **Caching:** जर तुम्ही अनेक रीडायरेक्ट्स सेट करत असाल, तर तुमच्या वेबसाइटची caching सेटिंग्ज तपासा, अन्यथा सर्व बदल दिसण्यासाठी वेळ लागू शकतो.

---
*(Note: The original English content did not contain any specific code blocks or complex structures requiring direct translation of technical syntax beyond the prose structure.)*

WordPress'te **Domain mapping** (دومين مَپینگ) kullanmak, kullanıcıları bir web sitesinin adresini kullanarak doğru ana sunucuya yönlendirmenin bir yoludur. WordPress Multisite'ta alt siteleri ya bir alt klasör (subdirectory) ya da bir alt alan adı (subdomain) kullanarak oluşturulur. Domain mapping ise alt site kullanıcılarının kendi sitesi adresini daha profesyonel göstermek için [**joesbikeshop.com**](http://joesbikeshop.com) gibi üst düzey bir alan adını kullanmalarına izin verir.

## SSL {#webhook}

SSL (Secure Sockets Layer) деген нима? Bu veb saytingizdagi ma'lumotlarni shifrlash va xavfsiz qilish uchun ishlatiladigan texnologiyadir. Oddiy qilib tushuntirsam, bu sizning veb-saytingiz bilan foydalanuvchining kompyuteri orasidagi aloqani maxfiy qiladi.

**Nima uchun SSL kerak?**

1. **Xavfsizlik (Security):** SSL mavjud bo'lsa, siz va sayt ko'rsatuvchi ma'lumotlar (masalan, parol, kartochka raqamlari) internet orqali boshqa kishilar tomonidan o'qilishi yoki o'g'irlanishining oldini oladi. Bu juda muhim!
2. **Ishonch (Trust):** Brauzerlarda (Chrome, Firefox va boshqalar) SSL sertifikati bo'lmagan saytlarni "Xavfsiz emas" deb belgilaydi. Foydalanuvchilarga sizning saytingiz ishonchli ekanligini ko'rsatadi.
3. **SEO uchun muhim:** Google kabi qidiruv tizimlari SSL mavjud bo'lgan saytlarni yuqori baholaydi va ularni yaxshiroq indekslaydi (topishini osonlashtiradi).

**SSL nima qiladi?**

SSL sertifikati sizning veb-saytingizga maxsus kalitlar beradi. Bu kalitlar orqali sayt bilan foydalanuvchi orasidagi ma'lumotlar shifrlanadi (shifrlangan holatda yashirilgan matn). Agar kimdir bu ma'lumotlarni o'qisa, u faqat noto'g'ri kodni ko'rishi mumkin.

**SSL sertifikati qanday ishlaydi?**

Bu jarayon shunga o'xshaydi: siz biror maxsus "kalit" (sertifikat) oladi va uni veb-saytingizga o'rnatasiz. Har bir foydalanuvchi saytingizga kirishga urinayotganda, brauzer sertifikati tekshiradi. Agar sertifikat to'g'ri bo'lsa, u ma'lumotlarni shifrlab yuboradi va sizning serveringiz esa uni o'qiy oladi.

**WordPress va SSL:**

Agar siz WordPress ishlatayotgan bo'lsangiz, ko'pincha hosting kompaniyalaringiz (masalan, SiteGround, Bluehost yoki boshqalar) bepul SSL sertifikati taqdim etishadi. Bu juda oson jarayon; ko'pincha faqat bitta tugmani bosishingiz kerak bo'ladi. Agar sizda o'zingizning domen nomingiz uchun (masalan, `sizningnomingiz.uz`) SSL sertifikati kerak bo'lsa, uni sotib olish yoki hosting orqali aktiv qilish mumkin.

**Qisqacha xulosa:**

SSL — bu veb-saytingizdagi ma'lumotlarni maxfiy va xavfsiz saqlash uchun zarur vositadir. Barcha jiddiy veb-saytlar uchun SSL mavjud bo'lishi shart!

SSL, **Secure Sockets Layer** (Güvenli Soket Katmanı) demektir. Bu, bir web sitesinin kimliğini doğrulayan ve şifreli bağlantıları mümkün kılan dijital bir sertifikadır. Günümüzde internet bağlantısını güvenli tutmak ve iki sistem arasında gönderilen herhangi bir hassas veriyi korumak için standart teknoloji olarak kullanılıyor. Bu sayede suçluların transfer edilen bilgileri, kişisel detaylar dahil olabilecek potansiyel bilgiler dahil her türlü bilgiyi okumasını veya değiştirmesini engelleriz. Modern tarayıcılar SSL'e ihtiyaç duyar ve bu yüzden bir web sitesi oluşturmak ve çalıştırmak için çok önemlidir.

## Media {#events}

Media, veb-saytlar üçin suratlar, sesler, videolar we başqa fayllar.

WordPress Multisite sisteminde taraplı (network) saytlar bir tek ma'lumotlar bazasini ulashadi, ular media fayllari uchun fayl tizimida alohida yo'llarni saqlaydilar.

Стандарт WordPress жойи (wp-content/uploads) ўзгармайди; бирок унинг йўли ташқи сайтнинг ўзига хос IDсини акс эттириш учун ўзгартирилади. Натижада, тармоқ сайти учун медиа файллар wp-contents/uploads/site/[id] кўринишида пайдо бўлади.

## Permalinks (Унликлар)

Permalink'ler сизнинг сайтингдаги ҳар бир блог пост ёки саҳифанинг доимий URL-ларидир. Permalink'ларга **chiroyli linklar** деб ҳам аталсади. Воутрпрессида (WordPress) да одатда URL-лар сўроқ 문자си форматини (query string format) ишлатади, у қуйидагича кўринади:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite (Ultimate Çoklu Saytlar)

Ultimate Multisite، ووردبريس өчен ясалган плагиндир. Бу сизнең вордопрес инсталлясын воны премиум сайтлар сеткасына өзгөртә алат – мисалы [WordPress.com](https://WordPress.com) -дәге. Бу клиентларга сайтлар төзеп алу өчен айлык, кварталлык ва жылдык алым белән (һәм Сиз безнең белән Бес планлар да яса аласыз).

## Сапоқ Формасы (Checkout Form)

Checkout Form (سوقۇش نماذجى) - بۇ سىزنىڭ Ultimate Multisite ئورناвыدىن ئۆزىڭىزنى، مېمبەرlikنى ۋە foydalanuvchi ھسابларын ئۆزىڭىز ئورناۋات كۆرسىتىدۇ. ئۇ سىزنىڭ ئۆزىڭىزنى ئورناۋات قىلىغى تۈرلىرىدىن، ئۆزگە وئىدە (subsite) ئورناۋات، مېمبەرlik ۋە foydalanuvchi ھسابларын ئورناۋات كۆرسىتىدۇ. ئۇ سىزنىڭ ئۆزىڭىزنى ئورناۋات قىلىغى تۈرلىرىدىن، ئۆزگە وئىدە (subsite) ئورناۋات، مېمبەرlik ۋە foydalanuvchi ھسابларын ئورناۋات كۆرسىتىدۇ. ئۇ سىزنىڭ ئۆزىڭىزنى ئورناۋات قىلىغى تۈرلىرىدىن، ئۆزگە وئىدە (subsite) ئورناۋات، مېمبەرlik ۋە foydalanuvchi ھسابларын ئورناۋات كۆرسىتىدۇ. ئۇ سىزنىڭ ئۆزىڭىزنى ئورناۋات قىلىغى تۈرلىرىدىن، ئۆزگە وئىدە (subsite) ئورناۋات، مېمبەرlik ۋە foydalanuvchi ھسابларын ئورناۋات كۆرسىتىدۇ. ئۇ سىزنىڭ ئۆزىڭىزنى ئورناۋات قىلىغى تۈرلىرىدىن، ئۆزگە وئىدە (subsite) ئورناۋات، مېمبەرlik ۋە foydalanuvchi ھسابларын ئورناۋات كۆرسىتىدۇ. ئۇ سىزنىڭ ئۆزىڭىزنى ئورناۋات قىلىغى تۈرلىرىدىن، ئۆزگە وئىدە (subsite) ئورناۋات، مېمبەرlik ۋە foydalanuvchi ھسابларын ئورناۋات كۆرسىتىدۇ. ئۇ سىزنىڭ ئۆزىڭىزنى ئورناۋات قىلىغى تۈرلىرىدىن، ئۆزگە وئىدە (subsite) ئورناۋات، مېمبەرlik ۋە foydalanuvchi ھسابларын ئورناۋات كۆرسىتىدۇ. ئۇ سىزنىڭ ئۆزىڭىزنى ئورناۋات قىلىغى تۈرلىرىدىن، ئۆزگە وئىدە (subsite) ئورناۋات، مېمبەرlik ۋە foydalanuvchi ھسابларын ئورناۋات كۆرسىتىدۇ.

## Webhook

Webhook (buni web-hook diyeshan, web callback yapi yoki HTTP push API diyeshan) bir ilovaning boshqa ilovalarga haqiqiy vaqtda ma'lumot berish usulidir. Webhook ma'lumotlarni ular paydo bo'lgan joyda boshqa ilovalar uchun yetkazib beradi, bu esa sizga ma'lumotlar darhol kelishi degani.

**Ultimate Multisite webhooks** sınırsız мүмiyatlar açar, bu da ağ yöneticilerinin Zapier ve IFTTT gibi servislerle birlikte kullanıldığında her türlü çılgın ama faydalı entegrasyonu yapmasına olanak tanır.

## Olaylar (Events)

Event (وظيفه): Bu, foydalanıcı ёки бошқа манба амалидан фолият мисли мышани чабурувчи кликдан фолият натижасида юзага келадиган ҳаракатдир. Ultimate Multisite сизнинг бутун тармоқинг ичида юзга келувчи барча воқеалар ва логларни қайд этиб туради. У сизнинг мультысайтдаги турли фаолиятларни, масалан режа ўзгартиришларни кузатади.
