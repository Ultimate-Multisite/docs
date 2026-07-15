---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite — bu sizga mijozlarga WaaS (Web-as-a-Service) yoki veb-saytlar sifatida xizmat ko'rsatish imkonini beradigan WordPress Multisite pluginidir. Keling, Ultimate Multisite biznesingiz va mijozlaringizga qanday yordam berishi haqida chuqurroq o'rganishdan oldin biz bilishimiz kerak bo'lgan asosiy bilimlar mavjud.

## WordPress Multisite {#the-wordpress-multisite}

Bizning ko'pchiligimiz standart WordPress o'rnatmasidan tanishmiz. Siz uni hosting provayderining boshqaruv paneli orqali yaratasiz yoki, jasur bo'lsangiz, yangi veb-server va ma'lumotlar bazasini sozlab, asosiy fayllarni yuklab olib o'rnatish jarayoniga kirishingiz mumkin.

Bu dunyodagi millionlab WordPress saytlari uchun ishlaydi, ammo agentlik yoki hosting provayderining nuqtai nazaridan hajmlar haqida bir oz gaplashsak bo'ladi.

Bitta WordPress saytni yoki hatto yuzta saytni avtomatlashtirilgan boshqaruv paneli orqali yaratish uchun synx (sinxron) bo'lsa ham, bu saytlarni boshqarishga kelganda muammolar tezda paydo bo'ladi. Boshqarilmagan holatda siz zararli dasturlar uchun asosiy maqsad bo'lasiz. Boshqarish — bu sahnani tartibga solish va resurslar talab qilishdir, va WordPress saytlarini boshqarishni soddalashtirish va ma'muriyatini osonlashtirishga yordam beradigan tashqi vositalar va pluginlar mavjud bo'lsa-da, mijozlarning ma'muriy kirishiga ega bo'lishi tufayli bu sahnani tartibga solish harakatlari osonlik bilan bekor qilinishi mumkin.

Uning asosida WordPress "Multisite" deb nomlangan funksiyaga ega, u 2010-yilda WordPress 3.0 ishga tushganda boshlanganidan kelib chiqadi. Shundan beri yangi xususiyatlarni joriy etish va xavfsizlikni mustahkamlashga qaratilgan bir nechta reviziyalarni ko'rgan.

Asosan, WordPress multisite quyidagicha tasvirlanishi mumkin: Universitet bitta WordPress o'rnatmasini saqlab turadi, ammo har bir fakultet o'zining alohida WordPress saytiga ega bo'ladi.

### Tarmoq (The Network) {#the-network}

WordPress terminologiyasida multisite network (tarmoq) — bu bir nechta subsaitlarni bitta dashboard orqali boshqarish imkonini beradigan joydir. Multisite networkni yaratish hosting provayderlar orasida farq qilishi mumkin, ammo yakuniy natija odatda WordPressga bu maxsus rejimda ishlayotganini aytish uchun `wp-config.php` faylida bir nechta qo'shimcha yo'riqlar bo'lishidir.

Multisite network va mustaqil (stand-alone) WordPress o'rnatmasi o'rtasidagi bir nechta aniq farqlar mavjud, ularni qisqacha ko'rib chiqamiz.

#### Subdomain vs. Subdirectory {#subdomain-vs-subdirectory}

Siz qilishingiz kerak bo'ladigan eng darhol qarorlardan biri multisite o'rnatmasi _subdirectories_ (subdirmalar) yoki _subdomains_ (subdomenlar) bilan ishlashi mumkinmi, degan savoldir. Ultimate Multisite ikkala tanlovda ham yaxshi ishlaydi, ammo bu ikki konfiguratsiya o'rtasida ba'zi arxitektura farqlari mavjud.

_Subdirectory_ konfiguratsiyasida tarmoq saytlari asosiy domen nomidan kelib chiqqan yo'l (path) bilan meros oladi. Masalan, 'site1' deb belgilangan tarmoq sayti to'liq URL-i `https://domain.com/site1` bo'ladi. _Subdomain_ konfiguratsiyasida esa tarmoq saytining asosiy domen nomidan kelib chiqqan o'ziga xos _subdomain_ bo'ladi. Shunday qilib, 'site1' deb belgilangan saytning to'liq URL-i `https://site1.domain.com/` bo'ladi.

Ikkala variant ham to'g'ri tanlovlar bo'lsa-da, _subdomain_lardan foydalanish bir qator afzalliklarni taqdim etadi, ammo bu arxitektura uchun ko'proq o'ylash va rejalashtirishni talab qiladi.

DNS nuqtai nazaridan, `_subdirectories_` dan nomlaridan foydalanish nisbatan oddiy muammo tug'diradi. Tarmoq saytlari asosan asosiy yo'lning farzandlari bo'lgani uchun, asosiy domen nomi uchun faqat bitta domen nomi kiriting mavjud bo'lishi kerak. `_subdomains_` esa biroz murakkabroq muammo tug'diradi va bu uchun har bir tarmoq sayti uchun alohida CNAME kiriting yoki DNS yozuvlarida wildcard (\*) kiriting talab qilinadi.

Boshqa e'tiborga loyiq soha SSL va SSL sertifikatlarini chiqarish va ulardan foydalanishdir. `subdirectory` konfiguratsiyasida bitta domen sertifikati ishlatilishi mumkin, chunki tarmoq saytlari asosan asosiy domen nomining yo'llaridir. Shunday qilib, domain.com uchun sertifikat https://domain.com/site1, https://domain.com/site2 va hokazo uchun SSLni mos ravishda ta'minlaydi.

`subdomain` konfiguratsiyasida wildcard SSL sertifikatidan foydalanish eng keng tarqalgan variantlardan biridir. Bu turdagi SSL sertifikati domen va uning `subdomains` uchun shifrlashni ta'minlaydi. Shuning uchun, wildcard SSL sertifikati https://site1.domain.com, https://site2.domain.com va hatto domain.com o'zi uchun ham shifrlashni ta'minlaydi.

Boshqa variantlar mavjud bo'lsa-da, ular ko'pincha doirasi va qo'llanilishi bilan cheklangan bo'ladi va moslik nuqtai nazaridan qo'shimcha konfiguratsiya va e'tibor talab qiladi.

#### Pluginlar va Temalar {#plugins-and-themes}

WordPress ham foydalanuvchi (mijoz) nuqtai nazaridan, ba'zi narsalarni olib ketadi. Agar mustaqil WordPress o'rnatmasida sayt administrator yomon plugin o'rnatsa yoki o'rnatmasini yangilab turmasa, bu harakatning faqat qurboni va yo'qotuvchisi o'zidir. Biroq, tarmoqli (multisite) o'rnatmasda yomon plugin o'rnatgan sayt administrator tarmog'dagi har bir saytning qurbonini yaratadi.

Shu buyon uchun WordPress multisite sifatida sozlanganda, sayt administratorlaridan pluginlar va temalar o'rnatish imkoniyatini olib tashlanadi va bu imkoniyat yangi yaratilgan tarmoq administrator yoki 'super admin' roliga ko'chiriladi. Bu ixtisoslashgan rol keyingi qadar tarmoqdagi sayt administratorlari uchun pluginlar menyusiga o'z dashboardida kirish yoki ularga kirish berilishi kerakmi, va agar shunday bo'lsa, bu ruxsatlar pluginlarni _faollashtirish_ yoki _o'chirish_ bilan bog'liqmi, buni belgilash imkoniyatini beradi.

Bu darajada tarmoq administrator tarmoqda pluginlar va temalarni o'rnatishdan mas'ul bo'ladi va bu pluginlar va temalardan foydalanish uchun ruxsatlarni tarmoqdagi saytlarga berish uchun ruxsatlarni topshiradi. Sayt administratorlari o'z saytlari uchun belgilangan bo'lmagan pluginlar va temalarni o'rnatish yoki ularga kirish imkoniyatiga ega emas.

#### Foydalanuvchilar va Administratorlar {#users-and-administrators}

WordPress Multisite'da barcha tarmoq saytlari bir xil ma'lumotlar bazasini qo'llaydi va shu sababdan bir xil foydalanuvchilarni, rollarni va imkoniyatlarni baham ko'rishadi. Buni tushunishning eng mos yo'li shundaki, barcha foydalanuvchilar ma'lum bir saytning a'zosi emas, balki tarmoqning a'zosi hisoblanadi.

Bu tushunchani hisobga olgan holda, foydalanuvchilarni yaratish va shu sababli WordPress Multisite ushbu imkoniyatni sayt administratorlaridan olib tashlashini va bu imkoniyatni tarmoq administratoriga ko'chirishini tavsiya etmaslik mumkin. O'z navbatida, tarmoq administrator o'z sayti uchun foydalanuvchi hisoblarini yaratishga ruxsat berish uchun kerakli huquqlarni sayt administratoriga topshirishi mumkin.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Yuqoridagi bayonotni takrorlab aytish kerakki, garchi foydalanuvchi hisoblari ular joylashgan sayt bilan bog'liq bo'lsa-da, ular aslida tarmoqga taalluq qiladi va shu sababdan butun tarmoqda o'ziga xos bo'lishi kerak. Bu sababli isimlendirishlar (usernames) ro'yxatdan o'tish uchun mavjud bo'lmagan holatlari yuzaga kelishi mumkin.

### Media {#media}

WordPress Multisite'larda ağ siteleri tek bir veritabanını paylaşsa da, medya dosyaları için dosya sisteminde ayrı yollar tutarlar.

Standart WordPress konumu (wp-content/uploads) aynı kalır; ancak yolu, ağ sitesinin benzersiz kimliğini yansıtacak şekilde değiştirilir. Sonuç olarak, bir ağ sitesine ait medya dosyaları wp-contents/uploads/site/[id] şeklinde görünür.

### Permalinks {#permalinks}

Daha önce bahsettiğimiz gibi, _alt alan adı_ (subdomain) yapılandırmasının _alt dizin_ (subdirectory) yapılandırmasına göre belirgin avantajları vardı ve işte bu yollar:

Bir _alt dizin_ yapısında, ana site (ağ kurulduğunda oluşturulan ilk site) ve ağ alt siteleri, alan adından gelen aynı yolu paylaşmak zorundadır. Bu durum çok sayıda çakışmaya neden olma potansiyeline sahiptir.

Gönderiler için, ağ siteleriyle çakışmayı önlemek amacıyla ana siteye zorunlu bir /blog/ yolu eklenir. Bu, 'Gönderi adı' gibi güzel permalinklerin domain.name/blog/post-name/ şeklinde sunulacağı anlamına gelir.

<!-- Ekran görüntüsü mevcut değil: Alt dizin yapılandırmasında /blog/ yolunu gösteren WordPress permalink ayarları -->

Bir _alt alan adı_ yapısında bu işlem gerekli değildir çünkü her ağ sitesi tam alan adı ayrımından faydalanır ve bu nedenle tek bir yola güvenmek zorunda kalmaz. Bunun yerine, kendi _alt alan adına_ dayanarak kendine özgü yollarını korurlar.

<!-- Ekran görüntüsü mevcut değil: Alt alan adı yapılandırması için WordPress permalink ayarları -->

### Statik Sayfalar {#static-pages}

_subdirectory_ konfiguratsiyasida nomlar bilan to'qnashishning ehtimoli asosiy sayt va tarmoq saytlari bir xil yo'lga ega bo'lganligi sababli statik sahifalar uchun ham kengayadi.

Buni oldini olish uchun WordPress ma'lum bir sayt nomlarini qora ro'yxatdan o'tkazish (blacklist) imkoniyatini beradi, shunda ular birinchi saytning nomlari bilan to'qnashmaydi. Odatda tarmoq administrator asosiy sayt sahifalarining ildiz yo'llarini kiritadi.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

_subdomain_ konfiguratsiyasida esa nomlar bilan to'qnashish imkoniyati _subdomain_ tufayli kamayadi, chunki u tarmoq sayti uchun noyob bo'lib asosiy sayt bilan hech qanday bog'liq emas.

### Ro'yxatdan o'tish (Registration) {#registration}

WordPress Multisite tarmoq sozlamalarida yangi va mavjud foydalanuvchilarga saytlar yaratish imkonini beradigan bir nechta yangi ro'yxatdan o'tish variantlari mavjud.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Mustaqil WordPress o'rnatmalariga qaraganda, tarmoq saytlari foydalanuvchi ro'yxatdan o'tish imkoniyatlarini yoki ularni rollarga yuklash imkoniyatlarini saqlamaydi.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Foydalanuvchi hisoblari yaratilganda, bu hisoblar tarmoq darajasida generatsiya qilinadi. Shunday qilib, ular biron bir saytga tegishli bo'lish o'rniga butun tarmoqqa tegishli bo'ladi. Bu ba'zi o'ziga xos afzallik va kamchiliklarni anglatadi.

Masalaning holda deb WordPress Multisite-ingiz yang bergerak dalam bidang berita dan maklumat. Anda akan menubuhkan multisite tersebut dan kemudian mencipta laman rangkaian untuk kewangan, teknologi, hiburan dan bidang minat lain sambil mengekalkan kawalan keseluruhan ke atas plugin dan tema. Setiap laman rangkaian pula akan mempunyai tahap kawalan yang jauh lebih tinggi terhadap rupa dan pengalaman pengguna laman rangkaian mereka berbanding jenis post kustom atau kategori post biasa.

Sehingga tahap ini apabila pengguna log masuk, mereka log masuk ke dalam rangkaian dan akhirnya log masuk ke setiap laman rangkaian juga untuk memberikan pengalaman yang lancar. Jika laman baru anda berasaskan langganan, ini adalah penyelesaian dan hasil yang ideal.

Walau bagaimanapun, jika sifat dan tujuan multisite yang dimaksudkan adalah untuk menawarkan laman rangkaian yang berbeza yang tidak mempunyai sebarang hubungan antara satu sama lain, hampir selalu diperlukan plugin luaran atau tambahan untuk mengurus peranan pengguna.

### Domain dan SSL {#domain-and-ssl}

Mari kita bincangkan pemasangan WordPress Multisite yang hampir terlepas daripada perhatian kita - Wordpress.com. Ini adalah contoh paling luas bagi WordPress multisite dan menunjukkan keupayaannya yang meluas untuk disesuaikan dan dibentuk untuk memenuhi tujuan tertentu.

Pada hari ini di internet moden, penggunaan SSL hampir wajib dan pentadbir rangkaian WordPress multisite akan segera berhadapan dengan cabaran ini.

Dalam konfigurasi _subdomain_, laman-laman dicipta berdasarkan nama domain utama. Oleh itu, laman yang dilabel 'site1' akan dicipta sebagai 'site1.domain.com'. Dengan menggunakan sijil SSL wildcard, pentadbir rangkaian boleh menangani cabaran ini dan menyediakan keupayaan penyulitan SSL untuk rangkaian tersebut.

WordPress Multisite'da, ağ sitelerini özel alan adlarıyla veya ağın ana alan adından farklı alan adlarıyla ilişkilendirmeyi sağlayan bir alan adı eşleştirme işlevi bulunur.

Ağ yöneticileri için bu durum hem alan adı yapılandırması hem de SSL sertifikalarının düzenlenmesi ve bakımı açısından ek bir karmaşıklık yaratır.

Bu kapsamda, WordPress Multisite'ın [www.anotherdomain.com](http://www.anotherdomain.com) gibi bir adresi 'site1'e eşleştirmeye olanak tanıyan bir yol sunmasına rağmen, ağ yöneticisi harici DNS kayıtlarını yönetme ve SSL sertifikalarını uygulama zorluğuyla karşı karşıyadır.

## Ultimate Multisite {#ultimate-multisite}

Bağımsız bir WordPress kurulumu ile Multisite kurulumu arasındaki farkları anladığımızda, Ultimate Multisite'ın Web Sitesini Hizmet Olarak (WaaS) sunmak için nihai silah olduğunu görelim.

### Giriş {#introduction}

Ultimate Multisite, Wix.com, Squarespace ve WordPress.com gibi platformları düşünün; kendi hizmetinizi sahip olmayı düşünün. Bu konuda bir çok işi yapabilen bir çakma bıçağı gibidir.

Arka planda Ultimate Multisite WordPress Multisite'ı kullanır ancak bunu, ağ yöneticilerinin multisite kurulumlarıyla karşılaştığı sayısız zorluğu çözmenin yanı sıra, geniş bir kullanım durumunu destekleyecek yetenekleri artıran bir şekilde yapar.

Aşağıdaki bölümlerde bu durumları desteklemek için gereken bazı yaygın kullanım durumlarını ve dikkate alınması gereken noktaları inceleyeceğiz.

### Kullanım Durumları {#use-cases}

#### Durum 1: Bir Ajans {#case-1-an-agency}

Genellikle bir ajansın temel becerileri, web sitelerini tasarlamakta yatar; bu tasarımda barındırma veya pazarlama gibi unsurlar ek hizmetler olarak listelenebilir.

Aгентликлар uchun Ultimate Multisite bir platformada ko'plab veb-saytlarni joylashtirish va boshqarish imkoniyati bilan ajoyib qiymat taklifini taqdim etadi. Ayniqsa, agar sizning agentliklaringiz GeneratePress, Astra, OceanWP kabi ma'lum temalarga asoslangan dizaynni standartlashtirgan bo'lsangiz, Ultimate Multisite ning imkoniyatlaridan foydalanib har bir yangi sayt uchun bu temalarni avtomatik faollashtirishingiz mumkin.

Ayniqsa, agentlik narxlari uchun ko'p va mashhur pluginlar bo'yicha takliflar mavjud bo'lganidek, Ultimate Multisite dan foydalanish agentliklarga mavjud investitsiyalaridan foydalanish imkonini beradi; chunki bu platforma orqali pluginlarni o'rnatish, texnik jihatdan saqlash va ulardan foydalanish mumkin.

Ko'pincha konfiguratsiyadan foydalanish istalanishi kerak bo'ladi va baxtli narsa shundaki, Ultimate Multisite domain xaritasi (domain mapping) va SSL sertifikatlarini Cloudflare va cPanel kabi mashhur hosting provayderlari hamda xizmatlar bilan integratsiyalari orqali osonlashtiradi.

Shunday qilib, bu provayderlardan biridan foydalanish yoki Ultimate Multisite ni Cloudflare ortida joylashtirish orqali domainlarni boshqarish va SSL sertifikatlarini sozlash kabi jihatlar biroz oddiy bo'ladi.

Saytlar yaratish ustidagi qattiq nazoratni saqlab qolishni afzal ko'raydigan agentliklar Ultimate Multisite ning soddalashtirilgan interfeysi orqali saytlarni oson yaratishi va saytlarni mijozlar hamda rejalarga bog'lashi bilan qondiruvchi bo'ladi.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Pluginlar va temalar ustidagi qattiq nazorat Ultimate Multisite ning intuitiv interfeyslari orqali har bir mahsulot uchun saqlanib qoladi; bu esa pluginlar va temalarni yangi sayt uchun instansiyatsiya qilganda ularning mavjudligini yoki yashirin bo'lishini, shuningdek, faollashtirish holatini belgilash imkonini beradi.

![Product plugin limitations interface](/img/config/product-plugins.png)

Temalar o'xshash funksionallikni taqdim etadi, bu esa sayt yaratish paytida ma'lum bir temalarni faollashtirish yoki yashirish imkonini beradi.

![Product theme limitations interface](/img/config/product-themes.png)

Agentliklar Ultimate Multisite orqali xotirjamlik topadilar, chunki bu ularga eng yaxshi qiladigan ishni qilishga — ajoyib veb-saytlar loyihalashga — imkon beradi.

#### 2-holat: Niche provayderi (Mutaxassis) {#case-2-niche-provider}

"Bir narsani yaxshi qilish" degan eski maqol mavjud. Ko'p mutaxassislarga bu, bitta asosiy g'oya atrofida mahsulot yoki xizmat yaratishni anglatadi.

Balki siz klublarga veb-saytlarni targ'ib qiladigan ishtiyoqli golfer bo'lishingiz mumkin yoki clanlarga veb-saytlar taqdim etadigan ishtiyoqli esports o'yinchi bo'lishingiz mumkin. Balki restoranlarga booking xizmatini targ'ib qiladigan shaxs?

Ko'p sabablarga siz umumiy doiralar va platforma asosida xizmat ko'rsatmoqchisiz. Bu sizga kerakli funksionallikni taqdim etish uchun maxsus pluginlarni loyihalash yoki ularga sarmoya kiritishingiz mumkin bo'lishi mumkin, yoki sanoatning eng yaxshi amaliyotlari dizayn uchun qandaydir standart yondashuv talab qilishi mumkin.

Ultimate Multisite’ning innovatsion xususiyatlaridan biri shablon saytlardan foydalanishdir. Shablon sayt — bu temani o'rnatgan va faollashtirgan, kerakli pluginlarni o'rnatgan va faollashtirgan, shuningdek namuna postlar yoki sahifalarni yaratilgan joydir. Mijoz shablon asosida yangi sayt yaratsa, shablonning mazmuni va sozlamalari yangi yaratilgan saytga nusxalanadi.

Niche saytlar va xizmatlar provayderi uchun bu sizga maxsus pluginlar va dizayn bilan tayyor bo'lgan saytni darhol yaratish imkoniyati bo'yicha tengsiz ustunlik beradi. Mijoz faqat xizmatni yakunlash uchun eng minimal ma'lumotlarni taqdim etishi kerak.

Talablar talablarga qarab, ham _subdirectory_ yoki _subdomain_ konfiguratsiyalari mos kelishi mumkin, bu holda arxitektura tanlovlari _subdirectories_ uchun oddiy SSL sertifikati yoki _subdomains_ uchun wildcard SSL sertifikati o'rtasida bo'ladi.

#### 3-holat: WordPress veb-hosting {#case-3-wordpress-web-hosting}

WordPress saytlarini joylashtirishning ko'plab yo'llari bor, ammo ularni mijozga WordPress versiyasi bilan oldindan o'rnatilgan veb maydonini taqdim etish kabi oddiy emas. Buning sababi, ma'noli xizmat ko'rsatish uchun bir nechta qarorlar va hisob-kitoblarni birlashtirish kerak bo'ladi.

Ultimate Multisite bu sohada WordPress saytlarini joylashtirish uchun to'liq tayyor (turnkey) yechimni taqdim etishi bilan ajralib turadi. Yechimga obuna xizmatlari, to'lovlarni yig'ish, checkout formlari, chegirma kuponlari va mijozlar bilan muloqot qilish uchun asosiy mexanizmlar kiritilgan.

WordPress Multisite ni to'g'ri o'rnatish, sozlash va saqlash uchun zarur bo'lgan ko'p ish Ultimate Multisite tomonidan osonlashtiriladi; bu esa tarmoq administratorlar faqatgina xizmat yoki nishonlari bilan bog'liq jihatlarni, masalan, mahsulot darajalari, narxlarni va xizmat takliflarini ko'rib chiqishga muhtoj bo'lishini anglatadi.

Ultimate Multisite bilan integratsiya qilishni istaydigan dasturchilar uchun yechim ham keng qamrovli RESTful API va voqea bildirishnomalari (Webhooks) orqali xabarlarni ko'rsatish imkoniyatini taklif qiladi.

Ko'p tashqi pluginlar va litsansiyalarga tayanmasdan, Ultimate Multisite Wix, Squarespace, WordPress.com va boshqalarning xususiyatli va qiyoslanadigan yechimini taqdim etadi.

### Arxitektura ko'rib chiqilishi {#architecture-considerations}

Bu to'liq qo'llanma emas, ammo Ultimate Multisiteni o'rnatish uchun texnologiyalarni to'g'ri tanlashga yo'l ko'rsatuvchi quyidagi jihatlar bo'lishi kerak.

#### Umumiy (Shared) va Maxsus (Dedicated) hosting {#shared-vs-dedicated-hosting}

Afvers har bir hosting provayderi teng emas va ba'zilari juda yuqori server zichligidan foydalanadi. Arzon narxlardagi provayderlar odatda server zichligini maksimal darajada oshirish orqali daromad oladilar. Shunga qarab, sizning Ultimate Multisite o'rnatishingiz faqat shu serverda bir nechta yuzlab saytlardan biri bo'lishi mumkin.

Provayderdan mos himoyalar mavjud bo'lmasa, umumiy serverdagi saytlar "shovqinli qo'shni" muammosidan ko'riladi. Bu shundaki, o'sha serverdagi bir sayt juda ko'p resurslarni iste'mol qilsa, boshqa saytlarning qolgan resurslar uchun raqobatlashishi kerak bo'ladi. Ko'pincha bu saytlarning sekin ishlashi yoki vaqtida javob qaytarmasligi bilan namoyon bo'ladi.

Veb-hosting provayderi sifatida o'zingiz ham, ta'sir qilish jarayoni shuni anglatadiki, sizning mijozlaringiz yomon tezlik, past sahifa reytinglari va yuqori qaytish darajasi bilan duch kelishadi, bu esa ular boshqa joylarda xizmat izlashganda mijozlar o'zidan voz kechishi (churn) natijasida sodir bo'ladi.

Qisqacha aytganda, arzon degani yaxshi degani emas.

Ultimate Multisite yaxshi hosting provayderlari bilan ishlashi va domen xaritasi kabi funksiyalarni taqdim etish uchun ularning muhitiga yaxshi integratsiya qilish orqali ma'lum bo'lgan. Bu provayderlar samaradorlikka qadriyat beradi va umumiy hostingga qaraganda yuqori darajadagi xizmatni taklif qiladi.

Mos keladigan provayderlar ro'yxati va har biriga to'liq sozlash ko'rsatmalari uchun iltimos, Compatible Providers hujjatlarini tekshiring.

#### Samaradorlik Eslatlari {#performance-considerations}

Ultimate Multisite sekin ishlaydigan ilova emas, balki juda tez ishlaydi. Biroq, u faqat asosiy ilovaning va infratuzilmaning imkoniyatiga qadar yaxshi ishlashi mumkin va o'zga kirishlari mavjud bo'lgan narsalardan foydalanishi mumkin.

Buni quyidagicha ko'ring: Sizda 100 ta saytli Ultimate Multisite o'rnatmasining tarmoq administratorisiz. Ularidan ba'zilari yaxshi ishlayapti va har kuni bir nechta veb-sayt tashrif buyuruvchilarini jalb qiladi.

Bu senaryo daha küçük ölçekli, mesela bir ila beş site için farklı olur, ancak büyümenin getireceği sorunlar yakında belli olacaktır.

Gözetimsiz bırakıldığında, tek bir Ultimate Multisite sitesi tüm ziyaretçilerin isteklerini yerine getirmekten sorumlu olur. Bu istekler dinamik PHP sayfaları veya stil dosyaları, JavaScript veya medya dosyaları gibi statik varlıklar için olabilir. Bir site olsun ya yüz site, bu görevler tekrarlayıcı, monoton ve israf edicidir. Çıktı her istek için aynı statik bilgi olduğu bir PHP dosyasını işlemek için CPU gücü ve belleği kullanmak gereksizdir.

Benzer şekilde, bir PHP veya HTML sayfası için yapılan tek bir istek, ardından betikler, stil dosyaları ve resim dosyaları için birden fazla ardışık isteği doğurur. Bu istekler doğrudan Ultimate Multisite sunucunuza yöneliktir.

Bu sorunu sunucuyu yükselterek kolayca çözebilirsiniz ancak ikincil bir problemi - coğrafi gecikmeleri (geographic latencies) - düzeltmezsiniz. Bu problemi doğru bir şekilde ele alabilmek için birden fazla konumda birden fazla sunucuya ihtiyacınız vardır.

Bu nedenle çoğu ağ yöneticisi statik sayfalar için istekleri yerine getirmek amacıyla ön uç önbellekleme çözümlerinden (front-end caching solutions) ve içerik dağıtım ağlarından (CDN) yararlanır. Bu istekleri yerine getirmek ve varlıkları sunucuya ulaşmadan önce sağlamak işlem kaynaklarını korur, gecikmeleri ortadan kaldırır, gereksiz yükseltmeleri önler ve teknoloji yatırımlarını en üst düzeye çıkarır.

Ultimate Multisite, ağ yöneticilerinin kurulumlarını Cloudflare arkasına koymalarına ve sadece önbellekleme yeteneklerini değil, aynı zamanda DNS barındırmayı, SSL sertifikalarını ve güvenlik mekanizmalarını da kullanmalarını sağlayan gelişmiş bir Cloudflare eklentisi içerir.

#### Yedeklemeler (Backups) {#backups}

Yedeklemeler hakkında 50 kişiden tavsiye isteyebilirsiniz ve yedekleme stratejileri hakkında 50 farklı görüş alabilirsiniz. Cevap, bu duruma bağlıdır.

Muvofiy bo'lmagan narsa shundaki, backup kerak va bu xizmatni boshqaradigan provayderdan, ayniqsa boshqariladigan xizmat taklif qiladiganidan foydalanish deyarli imkonsizdir. Natijada, mijozlar ushbu xizmatni taqdim etish va boshqarish uchun tarmoq administratoriga murojaat qilishadi. Tarmoq administratoriga kimga murojaat qilish kerakligi esa butunlay boshqa muammo hisoblanadi.

Bu bo'lim uchun biz backupning, backup ishga tushirilgan vaqtda tizim holati nusxasi ekanligini tasdiqlashimiz mumkin. Oddiy qilib aytganda, backup paytida tizimning holati nima bo'lsa, o'sha holat yakalangan holda saqlanadi.

Bu tushunchani hisobga olgan holda, backupni qanday amalga oshirish va sizning muhitingiz uchun nima eng yaxshi ekanligi asosan sizning talablaringizga va hosting provayderining bu talablarni qondira olish qobiliyatiga bog'liq bo'ladi. Biroq, eng fikrli (eng ko'p cheklovlar qo'yadigan)dan eng kam fikrli (eng kam cheklovlar qo'yadigan)ga qarab, quyidagi variantlar ba'zi yo'l ko'rsatishi mumkin.

#### Snapshots (Kadrlar) {#snapshots}

Snapshots backup uchun oltin qulog'i hisoblanadi, chunki ular oson, murakkab emas (tiklanishni istasangiz) va "o'zidan ishlaydi". Biroq, bu sizning provayderingizdan ba'zi yordam talab qiladi va asosan VPS (Virtual Private Server) yoki shunga o'xshash narsangiz bo'lsa faqat qo'llaniladi. Bizning "Compatible Providers" hujjatimizda sanab o'tilgan bir nechta provayderlar tarmoq administratorining qo'shimcha aralashuvi yoki e'tibor talab qilmasdan backupni taqdim etishini taklif qiladi.

An'anaviy ko'rinishda, an'anaviy backuplar fayllar va ma'lumotlar bazalariga yo'naltirilgan bo'lsa, snapshot butun diskka ham ta'sir qiladi. Bu shuni anglatadiki, faqat saytdagi ma'lumotlar emas, balki operatsion tizim va konfiguratsiya ham yaknalib oliniydi. Ko'pchilik uchun bu aniq afzallikdir, chunki snapshotdan deyarli darhol yangi tizim yaratish va ulanib kelgan holatni almashtirish uchun ishga tushirish mumkin. O'xshash tarzda, fayllarni olish uchun tiklash jarayoni mavjud instancega disk sifatida snapshot imijini ulash orqali amalga oshirilishi mumkin, shunda fayllarga kirish va nusxalash mumkin bo'ladi.

Snapshotlar hosting provayderidan qo'shimcha xarajat keltirishi mumkin, ammo bu baxtsiz hodisalarga qarshi sug'urtma polisi hisoblanadi.

#### Tashqi skriptlar (External Scripts) {#external-scripts}

WordPress va MySQL resurslarini backup qilish uchun tashqi skriptlar va yechimlar yetishmasligi ko'rinmaydi va ular Ultimate Multisite uchun yaxshi ishlaydi, chunki bu WordPress fayl tizimi va ma'lumotlar bazasidan foydalanadigan WordPress pluginidir. Shunday qilib, WordPress saytlarini backup qilishga xizmat qiladigan yechim Ultimate Multisite ehtiyojlarini to'liq qamrab olishi mumkin.

Biz bittasini boshqasiga tavsiya etishimiz mumkin emas, ammo umumiy maslahatim shuki, natijalarning istalgan bo'lishini ta'minlash uchun bir nechta backup va tiklash testlarini o'tkazish va ayniqsa differensial backup strategiyasi qo'llaniladigan joylarda skriptni doimiy ravishda baholash orqali "aniq ekanligiga ishonch hosil qilish".

Eslatma, bu skriptlar ishlayotganda tizim yukini oshirishi mumkinligi hisobga olinishi kerak.

#### Pluginlar (Plugins) {#plugins}

WordPressda plugin bilan hal qilinmaydigan deyarli hech qanday muammo yo'q va agar tashqi skriptlarni boshqarish sizning kuchingiz bo'lmasa, balki plugin keyingi eng yaxshi variant bo'lishi mumkin.

Pluginlar seçenekler ve özellikler açısından farklılık gösterse de, çoğu aynı işlevi yerine getirir: WordPress dosyalarının ve veritabanı içeriğinin bir kopyasını oluşturmak. Bundan sonra işlevsellik değişir; bazı eklentiler yedeklemeleri Google Drive veya Dropbox gibi harici hizmetlere veya S3, Wasabi gibi uyumlu nesne depolama servislerine gönderip göndermeyeceklerini belirten çeşitli yöntemler sunar. Daha kapsamlı eklentiler ise harici depolama maliyetlerini düşürmek için yalnızca değişmiş verileri yedekleme stratejisi veya farklı bir yaklaşım sunan diferansiyel yedeklemeler sağlar.

Eklenti seçerken, bunun multisite uyumlu olup olmadığını kontrol etmeye özen gösterin. İşleyiş doğası gereği, yedekleme çalışırken sunucuda geçici bir yük bekleyebilirsiniz; bu işlem tamamlanana kadar geçerlidir.

#### Alan Adı ve SSL {#domain-and-ssl-1}

Multisite _subdomain_ modunda alan adları hakkında çok şey tartışıldı. Ağ yöneticileri için neredeyse evrensel bir çözüm, joker karakter DNS kayıtlarından yararlanmaktır.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Bu tür bir DNS kaydı, ‘site1.domain.com’ ve ‘site2.domain.com’ gibi _subdomain_ları 1.2.3.4 IP adresine başarıyla yönlendirir ve bu da Ultimate Multisite'ı ve daha geniş ölçüde WordPress Multisite'ı _subdomain_ modu kullanarak destekler.

Bu, HTTP için mükemmel çalışabilir çünkü hedef sunucu HTTP başlıklarından okunur; ancak günümüzde güvenli HTTPS işlemlerinin neredeyse zorunlu olduğu kadar basit web siteleri nadirdir.

Khushbabar, SSL sertifikatlar uchun oson variantlar mavjud. _subdirectory_ rejimida oddiy domen sertifikati ishlatilishi mumkin. Bular hosting provayderlaridan bepul LetsEncrypt xizmatidan yoki boshqa manbalardan tez va erkin topish mumkin. Aks holda, agar siz sertifikat imzol so'rovini (certificate signing request) yaratishingiz mumkin bo'lsangiz, ular otoritetlardan savdo bilan mavjud bo'ladi.

_subdomain_ rejimida wildcard SSL sertifikatidan foydalanish wildcard domen bilan mukammal mos keladi va sertifikati asosiy domen uchun hamda barcha _subdomainlar_ uchun qo'lda konfiguratsiya qilmasdan avtoritet sifatida ishlatish imkonini beradi.

Biroq, eslatib olingki, wildcard SSL sertifikatlari Cloudflare kabi xizmatlar bilan ishlashi mumkin bo'lmasligi mumkin, agar siz korporativ reja (enterprise plan)da bo'lmaysiz yoki kirishni faqat DNS-ga belgilasangiz, bu holda barcha caching va optimallashtirish o'chiriladi.

Out-of-the-box Ultimate Multisite ushbu muammoning yechimini taqdim etadi va WordPress multisite ehtiyojlari bilan tajribamizni ko'rsatib beradi. Bu oddiy addonni faollashtirish orqali Ultimate Multisite sizning Cloudflare ma'lumotlaringizdan foydalanib, tarmoq saytlari uchun DNS yozuvlarini avtomatik ravishda Cloudflarega qo'shadi va ularning rejimini 'proxied' (proksi) deb belgilaydi. Bu tarzda har bir tarmoq sousiti yaratilganda SSLni o'z ichiga olgan Cloudflarening to'liq himoyasidan va afzalliklaridan foydalanish imkoniyati bo'ladi.

Ultimate Multisite o'rnatishingizning tabiati va maqsadi qanday ekanligiga qarab, mijozlarning o'z domenlaridan foydalanishga ehtiyoj tug'ilishi mumkin. Bu holda tarmoq administrator ikki muammoni hal qilish uchun javobgar bo'ladi: birinchisi, domen nomini joylashtirish va ikkinchisi esa domain uchun SSL sertifikatlarini olish.

Ko'p odam uchun Cloudflare dan foydalanish oson variantdir. Mijozlar faqat domenini Cloudflarega joylashtirishi, Ultimate Multisitening asosiy domeni (root domain) bilan CNAME'ni bog'lash va ularning domenini Ultimate Multisite ichida sozlash orqali o'ziga xos domen nomidan foydalanishni boshlashi kerak.

Buning tashqarisida, muqobil yechimlarni topish kerak bo'ladi, shuning uchun Ultimate Multisite mos keladigan provayderlar ro'yxatini tavsiya qiladi. Buning sababi shundaki, DNS va SSL sozlash jarayoni murakkab bo'lishi mumkin. Biroq, Ultimate Multisitening bu provayderlar bilan integratsiyasi tufayli murakkablik sezilarli darajada kamayadi va jarayon avtomatlashtirilgan bo'ladi.

#### Pluginlar {#plugins-1}

Mijozlaringiz yoki tarmoq saytlaringiz uchun funksionallik taqdim etish uchun qo'shimcha pluginlarga ehtiyoj sezishingiz juda mumkin. Barcha pluginlar WordPress Multisite va Ultimate Multisite bilan ishlaydimi? Bu unga bog'liq.

Ko'pchilik pluginlar WordPress Multisitega o'rnatilishi mumkin, ammo ularning faollashuvi va litsenziyalanishi har bir muallif uchun farq qiladi.

Qiyinchilik shundaki, ba'zi pluginlar domeniga ko'paytirilgan asosda litsenziya talab qiladigan holatlarda litsenziyalash qanday qo'llanilishi bilan bog'liq. Bu esa ba'zi pluginlar uchun tarmoq administratorining har bir yangi sayt uchun har bir plugin uchun litsenziyani qo'lda faollashtirishi kerakligini anglatadi.

Shuning uchun, plugin muallifiga ularning plugin WordPress Multisite bilan qanday ishlashini va uni litsenziyalash uchun talab etiladigan maxsus talablari yoki tartib-qoidalarni tekshirish eng yaxshi yo'l bo'lishi mumkin.
