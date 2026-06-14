---
title: V1-den geçmek
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1-den 2-e Geçmek

## Ultimate Multisite orijinal 1.x sürüm serisinden 2.x sürüm serisine geçdi.

Ultimate Multisite 2.0 ve sonrası kod tabanının tam yeniden yazılması demektir, bu da eski sürüm ile yeni sürüm arasında çok az ortak nokta olduğu anlamına gelir. Bu nedenle, 1.x'ten 2.x'e yükseltme yaparken verilerinizi yeni sürümlerin anlayabileceği bir formata taşımanız gerekecek.

Neyse ki, Ultimate Multisite 2.0+ **temelinde yerleşik bir migrator (verileri dönüştüren araç) ile birlikte gelir**; bu araç eski sürümden gelen verileri tespit edip onları yeni formata çevirebilir. Bu geçiş işlemi 2.0+'ın **Kurulum Sihirbazı** sırasında gerçekleşir.

Bu ders, migratorun nasıl çalıştığını, başarısızlık durumlarında ne yapmanız gerektiğini ve bu süreçte ortaya çıkabilecek sorunları nasıl gidereceğinizi anlatır.

_**ÖNEMLİ: 1.x sürümünden 2.0 sürüme yükseltmeye başlamadan önce lütfen sitenizin veritabanının yedeğini aldığınızdan emin olun**_

## İlk Adımlar

İlk adım, eklenti .zip dosyasını indirmek ve ağ yöneticisi panonuzda 2.0 sürümünü kurmaktır.

[install and activate version 2.0](../getting-started/installing-ultimate-multisite.md) yaptıktan sonra, sistem Multisite'ınızın eski sürümde çalıştığını otomatik olarak algılayacak ve bu mesajı eklenti sayfasının en üstünde göreceksiniz.

_**NOT:** Eğer Multisite'ınızda Ultimate Multisite 1.x kuruluysa, eklentiyi az önce indirdiğiniz sürümle değiştirmek için bir seçeneğiniz olacak. Lütfen **Mevcut olanı yüklenen ile değiştir** butonuna tıklayın._

<!-- Ekran görüntüsü mevcut değil: v1'i yüklenen v2 sürümüyle değiştirme seçeneğini gösteren eklenti sayfası -->

Iki sayyça size ne tür eski add-onlaryňyz bar olduğunu we olaryň 1.x versiyasy bilen näme baglanydygyny görkezýän kitabyň soňraki sagi gelipdir. Siz şu wagt ulanyp bilýän versian anyk-de 2.0-e laýykmydyr ýa-da migratsiadan soň add-onun täsirli bir versiyasyny kurmagy zerurmy diýen düşündirişleri özünde saklaýar.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Eger dowam etmäge taýyn bolsaňyz, **Upgrade etmek üçin Installer-e git** diýen düwme bilen işleýärsiňiz.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Soňra sizi hoşgurlamak üçin birnäçe mesaglar bilen bilelikdir kurulum wizard-yny görkezýär. Soňky sabyşyrmak üçin diňe **Get Started** diýen düwme bilen soňky sahypa geçip bilersiňiz.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** diýen düwmä basandan soň, sizi Pre-install Checks\_e yöneltýär. Bu sizde Sistem Maglumatlaryny we WordPress kurulumuny görkezýär we ol **Ultimate Multisite'yň talaplaryna** laýykmydyr diýip aýtdyrmak üçin size maglumat berýär.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Soňky ädimi Ultimate Multisite litsensiya açaranyny girip, plugin-i aktivleşdirmekdir. Bu sizde add-onlary da şol bar bolmaly diýen ähli funksiýalary üpjün edendir.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Açarany girip soň, **Agree & Activate** diýen düwmä basyň.

Litsensiya aktivleşdirildikten soň, soňky sahypada **Install** diýen düwme bilen haky kurmagy başlansa bilersiňiz. Bu 2.0 versiyasyny işlemek üçin zerur bolan zarur fayllary we database-i awtomatiki döredip biler.

## Indi, migratsiya

Migratorda bir daxiletilgan xavfsizlik funksiyasi bar, olarilmagan Ultimate Multisite ma'lumotlaringizning barchasini muammosiz ko'chirish mumkinligini tekshiradi. Jarayonni boshlash uchun **Run Check** tugmasini bosing.

Jarayonni tekshirgandan so'ng, siz ikki xil holat bilan qolishingiz mumkin: natija xato bilan yoki xato bo'lmagan holda bo'ladi.

### Xato bo'lganida

Agar sizda xato xabari chiqsa, uni tuzishda yordam berishi uchun bizning qo'llab-quvvatlash jamoasiga murojaat qilishingiz kerak bo'ladi. Tiket ochayotganda **xato logini taqdim etishdan** so'rashingizni unutmang. Logni yuklab olishingiz mumkin yoki "contact our support team" deb yozilgan linkga bosishingiz mumkin. Bu sizning sahifangizning o'ng tomonida yordam paneli ochiladi va unda tavsif ostida xato loglari avtomatik to'ldirilgan maydonlar bo'ladi.

_**Tizim xatoni topganligi sababli, 2.0 versiyasiga ko'chib o'tishingiz mumkin bo'lmaydi. Shundan so'ng, xato tuzilmaguncha tarmoqni ishlatishni davom ettirish uchun 1.x versiyasiga qaytishingiz mumkin.**_

### Xato bo'lmaganida

Agar tizim hech qanday xatoni topmasa, siz muvaffaqiyat xabarini va migratsiyani davom ettirishingiz mumkin bo'lgan pastki qismdagi **Migrate** tugmasini ko'rasiz. Bu sahifada oldindan ma'lum qilamizki, keyingi qadamga o'tishdan oldin ma'lumotlar bazangizning zaxirasini yaratishingiz kerak, bu biz kuchli tavsiya qilamiz. Agar sizda allaqachon zaxira bo'lsa, **Migrate** tugmasini bosing.

Va bu yetarli!

Siz awtarky, şeýle bir wizaýer (Wizard) sozlamasyny dowam etdirip, ulgamlaryňyz we başga zatlaryny öz ulgamlaryňyzda täzelenip bilersiňiz ýa-da Ultimate Multisite versiýa 2.0 menüsini we onuň täze interfeýsini keşap bilersiňiz. Başlaň we gyzykly wakaýatlar üçin birnäçe wagty geçiriň.
