---
title: Sayt ko'rsatmalari ko'nikmasi
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Sayt Spesifikatsiyasi Ko'nikmasi {#site-specification-skill}

**Sayt Spesifikatsiyasi ko'nikmasi** — bu saytingizning maqsadlarini, auditoriyasini va brend identifikatsiyasini aniqlash uchun tuzilgan yondashuvdir. Bu ma'lumotlar sizning **site_brief** xotirangizda saqlanadi; agentlar har bir sessiyada doimiy, kontekstli yordam berish uchun shu yerga murojaat qiladilar.

## Sayt Spesifikatsiyasi nima? {#what-is-site-specification}

Sayt Spesifikatsiyasi quyidagilarni hujjatlashtirish jarayonidir:

- **Sayt maqsadi**: Saytingiz nima qilishi va nima uchun mavjudligi
- **Maqsadli auditoriya**: Kim saytingizga keladi va ular nimaga muhtoj
- **Brend identifikatsiyasi**: Sizning ranglaringiz, ohatingiz va vizual uslubingiz
- **Biznes maqsadlari**: Saytingiz uchun muvaffaqiyat nima ko'rinishda bo'lishi kerakligi
- **Kontent tuzilishi**: Saytingiz qanday tashkil etilgan

Bu spesifikatsiya sizning **site_brief** (sayt xotirangiz)ga aylanadi, bu esa agentlar saytingiz kontekstini tushunish uchun ishlatadigan doimiy xotira hisoblanadi.

## Nega Sayt Spesifikatsiyasidan Foydalanish Kerak? {#why-use-site-specification}

### Sessiyalar Oralig'ida Doimiy Bo'lish {#consistency-across-sessions}

site_brief bo'lmasa, har bir yangi sessiya boshlaganingizda saytingiz maqsadi haqida qayta tushuntirish kerak bo'ladi. U bilan esa agentlar darhol quyidagilarni tushunishadi:

- Saytingizning maqsadlari va auditoriyasi
- Sizning brend ranglaringiz va ohatingiz
- Sayt kontent tuzilishingiz
- Biznes maqsadlaringiz

### Yaxshil Tavsiyalar {#better-recommendations}

Agentlar site_briefdan foydalanib:

- Saytingiz maqsadi bilan mos keladigan xususiyatlarni taklif qilish
- Maqsadlaringizga mos keladigan kontent tuzilmalarini tavsiya etish
- Brendingizga mos keladigan dizaynlarni taklif qilish
- Mos kelmaydigan xususiyatlarni taklif qilishdan saqlanish

### Tezroq Kirish (Onboarding) {#faster-onboarding}

Yangi agentlar (yoki yangi sessiyalardagi agentlar) aniqlash savollari berish o'rniga site_briefni o'qib, tezda ishga tushishi mumkin.

## Sayt Spesifikatsiyasini Boshlash {#initiating-site-specification}

### Theme Builder Kirishida {#during-theme-builder-onboarding}

Site Specification ko'nikmasi **Theme Builder kirish jarayoni** davomida avtomatik boshlanadi. Setup Assistant agent savollar beradi va sizning site_briefingizni qurib boradi.

### Qo'lda Boshlash {#manual-initiation}

Siz istalgan vaqtda Sayt ko'rsatmasini (Site Specification) boshlashingiz mumkin:

```
"Mening sayt ko'rsatmasini belgilaylik"
```

yoki

```
"Sayt uchun ma'lumotnomani yaratishga yordam bering"
```

## Sayt Ko'rsatmasi Jarayoni {#the-site-specification-process}

### 1-Qadam: Sayt Maqsadi (Site Purpose) {#step-1-site-purpose}

Agent quyidagicha so'raydi:

```
Sizning saytingizning asosiy maqsadi nima?
- E-commerce do'koni
- Blog yoki kontent sayti
- Portfolio yoki ko'rsatish maydoni
- SaaS ilovasi
- Jamoatchilik yoki forum
- Boshqa: [tavsiflang]
```

Siz kategoriya tanlashingiz mumkin yoki o'zingizning maqsadingizni tasvirlashingiz mumkin.

### 2-Qadam: Maqsadli Auditoriya (Target Audience) {#step-2-target-audience}

```
Asosiy auditoriyangiz kim?
- Foydalanuvchilar / umumiy jamoat
- Biznes mutaxassislari
- Ishlab chiquvchilar / texnik foydalanuvchilar
- Talabalar / ta'lim beruvchilar
- Boshqa: [tavsiflang]

Ularning asosiy ehtiyojlari nimalar?
```

### 3-Qadam: Brend Identiteti (Brand Identity) {#step-3-brand-identity}

```
Sizning brend ranglaringiz qaysi?
- Asosiy rang: [rang tanlovchi yoki hex kodi]
- Ikkinchi rang: [rang tanlovchi yoki hex kodi]
- Aksent rangi: [ixtiyoriy]

Brend toningizni qanday tasvirlaysiz?
- Professional / korporativ
- Ijodiy / san'atkor
- O'yin-damli / kasallik (casual)
- Minimal / zamonaviy
- Issiq / do'stona
```

### 4-Qadam: Biznes Maqsadlari (Business Goals) {#step-4-business-goals}

```
Saytingiz uchun muvaffaqiyat qanday ko'rinishda?
- Potensial mijozlarni jalb qilish (leads generate)
- Mahsulot sotish
- Jamoatchilikni qurish
- Bilimni ulashish
- Autoritet o'rnatish
- Boshqa: [tavsiflang]

Asosiy metrikingiz nima?
- Daromad (Revenue)
- Foydalanuvchi jalboti (User engagement)
- Kontent yetib borishi (Content reach)
- Konversiyalar (Conversions)
- Boshqa
```

### 5-Qadam: Kontent Tuzilishi (Content Structure) {#step-5-content-structure}

```
Kontentingiz qanday tashkil etilgan?
- Yassi (barcha kontent bir darajadagi)
- Piramidal (kategoriyalar va souskategoriyalar)
- Xronologik (blog uslubidagi)
- Mahsulotga asoslangan (katalog)
- Boshqa: [tavsiflang]

Qaysi kontent turlarini ishlatasiz?
- Blog postlari
- Mahsulot sahifalari
- Tadqiqotlar (Case studies)
- Hujjatlar (Documentation)
- Videolar
- Boshqa
```

## Sizning site_brief Xotirangiz {#your-sitebrief-memory}

Sayt ko'rsatmasini yakunlaganingizdan so'ng, sizning ma'lumotlaringiz agent xotirasida **site_brief** sifatida saqlanadi. Bu quyidagilarni o'z ichiga olgan tuzilgan yozuvdir:

## Site özeti (site_brief) görüntüleme ve güncelleme {#viewing-and-updating-your-sitebrief}

### Site özetinizi görüntüleyin {#view-your-sitebrief}

Aşağıdaki komutlardan birini agent'a sorabilirsiniz:

```
"Show me my site brief"
```

veya

```
"What do you know about my site?"
```

Agent, kayıtlı spesifikasyonunuzu gösterecektir.

### Site özetinizi güncelleyin {#update-your-sitebrief}

Siteniz gelişirse, onu güncelleyebilirsiniz:

```
"Update my site brief: we're now targeting B2B customers"
```

veya

```
"Refresh my site specification"
```

Bu işlem, mevcut bilgilerinizle Site Specification skill'ini yeniden çalıştıracaktır.

## Agent'lar site_brief'i nasıl kullanır? {#how-agents-use-sitebrief}

### Tasarım önerileri {#design-recommendations}

Tasarım değişiklikleri istediğinizde, agent'lar site özetinizi referans alır:

```
Siz: "Redesign my homepage"
Agent: "Site özetinize dayanarak, 25-45 yaş arası kadınlara sıcak ve el yapımı bir tonla odaklanıyorsunuz. El yapımı takılarınızı ve sürdürülebilirlik değerlerinizi vurgulayan bir tasarım oluşturacağım."
```

### Özellik önerileri {#feature-suggestions}

Agent'lar hedeflerinize uygun özellikleri önerir:

```
Siz: "What features should I add?"
Agent: "Müşteri sadakatine odaklanmış bir e-ticaret mağazası için şunları öneririm: sadakat programı, müşteri yorumları, e-posta bülteni ve ürün önerileri."
```

### İçerik yapısı {#content-structure}

Agent'lar yapınıza dayanarak içerik düzenlemesi önerir:

Siz blogingni qanday tartiblashim kerak?
Agent: Siz mahsulot katalogidan foydalanayotganingiz uchun postlarni mahsulot kategoriyalariga ko'ra tartiblash va bir nechta mahsulotni birgalikda ko'rsatadigan "stil qo'llanmalari" yaratishni tavsiya qilaman.

## Eng yaxshi amaliyotlar {#best-practices}

### Aniqlik bilan bog'laning {#be-specific}

"Umumiy auditoriya" deyish o'rniga, haqiqiy auditoriyangizni tasvirlang:

- ✓ "25-45 yoshdagi ayollar, barqaror modaga qiziqadiganlar"
- ✗ "Hamma narsa"

### Muntazam yangilang {#update-regularly}

Saytingiz rivojlanishi bilan `site_brief` (sayt xulosasi)ni yangilang:

- Yangi auditoriyaga o'tib ketganingizda
- Yangi mahsulot liniyalari qo'shganingizda
- Brend identifikatingiz o'zgarganda
- Biznes maqsadlaringiz o'zgarganda

### Bir xil terminologiyadan foydalaning {#use-consistent-terminology}

Sessiyalarda bir xil atamalardan foydalaning:

- ✓ Har doim "barqaror juvelar" (buning o'rniga "ekologik juvelar" yoki "yashil mahsulotlar" deb aytmang)
- ✓ Auditoriyangizni doim bir xil tarzda murojaat qiling

### Kontekstni kiritish {#include-context}

Agentlarga qarorlaringizni tushunishga yordam beradigan fon ma'lumotlarini bering:

- "Biz sifatni narxdan ustun qo'yadigan mutaxassislarni maqsad qilmoqdamiz"
- "Auditoriyamiz texnologiyalarga oid va zamonaviy dizaynni kutadi"
- "Biz bootstrapped startapman, shuning uchun bizga samarali yechimlar kerak"

## Theme Builder bilan bog'liqlik {#relationship-to-theme-builder-onboarding}

Site Specification skilli **Theme Builder onboarding flow** (Tema Quruvchi boshlash jarayoni) ichiga integratsiyalashgan. Onboardingni yakunlaganingizda, siz kiritgan ma'lumotlar bilan `site_brief` avtomatik yaratiladi.

Agar quyidagilarni istasangiz, Site Specificationni mustaqil ravishda ishga tushirishingiz mumkin:

- Dastlabki sozlashdan keyin ko'rsatmalaringizni takomillashtirish uchun
- Saytingiz rivojlanishi bilan `site_brief`ni yangilash uchun
- Theme Builder boshlashdan oldin batafsil tavsif yaratish uchun

## Muammolarni hal qilish {#troubleshooting}

**Mening site_brief ishlatilmayapti**
- Agentning xotiraga kirish imkoniyati borligini tasdiqlang
- Agentga "mening site briefimni eslay ko'ring" deb so'rang
- Xotira sozlamalaringizda yoqilganligini tekshiring

**Menim yang yangi boshlanishim kerak, yangi site_brief bilan**
- Agentga savol bering: "Mening site briefimni tozalang va yangidan boshlang"
- Keyin Site Specificationni yana ishga tushiring

**Agent mening site_briefimga mos kelmaydigan tavsiyalar beryapti**
- Agentdan "mening site briefimni ko'rib chiqing" deb so'rang
- Agar u eskirgan bo'lsa, o'zingizning site_briefingizni yangilang
- So'rovlaringizga qo'shimcha kontekst bering

## Keyingi qadamlar {#next-steps}

Siz site spesifikatsiyangizni belgilagandan so'ng:

1. **Theme Builder dan foydalaning**: O'zingizning site_briefingizga asoslangan maxsus temani yarating
2. **Dizaynni takomillashtiring**: Batafsil dizayn ishlari uchun Design System Aesthetics ko'nikmasidan foydalaning
3. **Kontentni rejalashtiring**: Kontent tuzilishi bo'yicha tavsiyalar olish uchun agentlardan so'rang
4. **Xususiyatlarni qurish**: Biznes maqsadlaringizga mos keladigan xususiyatlar talab qiling
