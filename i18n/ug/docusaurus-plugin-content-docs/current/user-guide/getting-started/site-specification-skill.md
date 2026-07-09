---
title: Sayt spesifikasyasi ko'nikma
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# سايت 仕様 مهارتي (Site Specification Skill) {#site-specification-skill}

**سايت 仕様 مهارتي** هي سايتڭىزنىڭ maqsadlarınıڭىز، 청киىڭىزدىكى كيسلرڭىزنى ۋە бренд تيماتىڭىزنى يازい-تەقيب قىلىش ئورنىلىлган تېخىمۇ بَيّانلىق يۇقىرىدۇر. بۇ маъلوقاتڭىز **site_brief** خياطىرىدا саклениپ قىلىد، بۇ خياطرنىڭ агентلەر سىزنىڭ контекстى تۇتۇپ بولغان ياردەمل어لىنىشلارنى بېقيسا تېخىمۇ تۇتۇپ بولغان شەكلىدى بېرىدۇ.

## سايت 仕様 نېمە؟ (What is Site Specification?) {#what-is-site-specification}

سايت 仕様، تاللوق قىلىش ئۆزىڭىزنىڭ:

- **سايت maqsadى**: سايتڭىز نېمە ئىشىلەكلەكن ۋە نېمە ئۈچۈن بورلىدۇ
- ** maqsadلىقى كيسلەر**: سايتڭىزغا كيسلر قىلىپ كۆرىدۇ ۋە ئۇلارنىڭ نېمە تەدريس قىلىدىن
- **бреند تيماتى**: سىزنىڭ رەنگىڭىز، ئاساس تۇنىقىڭىز ۋە بصري تېلىڭىز
- **تجارىي maqsadlar**: سايتڭىزنىڭ مۇۋەفقىت قىلىش نېمە دەلەكچىسى بولدىكن
- **مەۋەھومەت تېزىتى**: سايتڭىزنىڭ ئۆرسىنى قۇيىق قىلىش

бу 仕様 سىزنىڭ **site_brief** خياطىرىغا айланаدۇ، بۇ агентلەر سىزنىڭ سايتڭىزنىڭ كونتكستى تېخىمۇ باشقا تۇتۇپ بولغانلىنى باشلاح ئۈچۈن ئىسىل ياردەمل어لىدىغان دائمي خياطر بولۇپ قىلىد.

## سايت 仕様 نېمەدا ئىشەنچە ئىشەنچە ئىشەنچە؟ (Why Use Site Specification?) {#why-use-site-specification}

### سىزنىڭ تاللوق قىلىش ئۆرسىنى تەكلىش (Consistency Across Sessions) {#consistency-across-sessions}

site_brief يۈز بولماسا، هەر يېڭى جلسە باشلاق قىلىنغاندا سايتڭىزنىڭ maqsadى بىر نېمە بولدىغانلىنى تېخىمۇ تكرارلايپ باشلاح قىلىش كېرەك. بۇ خياطرنىڭ ئۆرسىنى ئىچىدى، агентلەر دۇقىت سىزنىڭ سايتڭىزنىڭ maqsadلارنى ۋە كيسلرڭىزنى، бреند رەنگىڭىزنى ۋە تېلىڭىزنى، مەۋەھومەت تېزىتىڭىزنى ۋە تجارىي ئاماللاشلارڭىزنى دۇقىت سىزى باشلاح قىلىد.

### Тېخىمۇ باشقا تەڭلىقلار (Better Recommendations) {#better-recommendations}

Agentلەر سىزنىڭ site_brief خياطرنى ئىشەنچە:

- سايتڭىزنىڭ maqsadىگە ئارلىق تېخىمۇ باشقا خئراملارنى تەڭلىق قىلىد
- سىزنىڭ maqsadلارىڭىزغا ئارلىق مەۋەھومەت تېزىتلەرنى تەڭلىق قىلىد
- سىزنىڭ бреندىڭىزگە ئارلىق تېخىمۇ باشقا ديزاينلارنى تەڭلىق قىلىد
- ئارلىق بولماق تېخىمۇ باشقا خئراملارنى تەڭلىق قىلىدى

### Тېز تېخىمۇ باشقا ئىشەنچە (Faster Onboarding) {#faster-onboarding}

يېڭى агентلەر (يېڭى جلسەlerdeki agentlər) سىزنىڭ سايتڭىزنىڭ site_brief خياطرنى قراپ قىلىدى، بۇلار ئۆرسى تېخىمۇ باشقا سۆرلۇق سўรอلىшлардан يېڭى باشلاق قىلىد.

## سايت 仕様 نېمەدا باشلاح قىلىش (Initiating Site Specification) {#initiating-site-specification}

### Theme Builder ئۆرسىنىڭ ئىچىدى (During Theme Builder Onboarding) {#during-theme-builder-onboarding}

**Theme Builder onboarding flow** دا **Site Specification skill** ئۆتمەتري تەكلىنىپ باشلاح قىلىد. Setup Assistant agent سىزگە سۆرلۇق سўรอلىقلار بېرىدۇ ۋە سىزنىڭ site_brief خياطرنى قۇرۇپ يۈزلايدۇ.

### مانىالى ئۆرسى (Manual Initiation) {#manual-initiation}

Siteni belgilashni her kunda boshlashingiz mumkin:

```
"Mening sayt ko'rsatmalarni belgilaylik"
```

yoki

```
"Sayt uchun ma'lumotnomani yaratishga yordam ber"
```

## Sayt Ko'rsatmalar Jarayoni {#the-site-specification-process}

### 1-Qadam: Sayt Maqsadi {#step-1-site-purpose}

Agent sizdan quyidagini so'raydi:

```
Sizning saytingiz asosiy maqsadi nima?
- E-commerce do'koni
- Blog yoki kontent sayti
- Portfolio yoki ko'rsatish joyi
- SaaS ilovasi
- Jamoatchilik yoki forum
- Boshqa: [tavsiflang]
```

Siz bir kategoriya tanlashingiz mumkin yoki o'zingizning maqsadingizni tasvirlashingiz mumkin.

### 2-Qadam: Maqsadli Auditoriya {#step-2-target-audience}

```
Asosiy auditoriyangiz kim?
- Foydalanuvchilar / umumiy jamoat
- Biznes mutaxassislari
- Dasturchilar / texnik foydalanuvchilar
- Talabalar / ta'lim beruvchilar
- Boshqa: [tavsiflang]

Ularning asosiy ehtiyojlari nimalar?
```

### 3-Qadam: Brend Identifikatsiyasi {#step-3-brand-identity}

```
Brend ranglaringiz qaysi?
- Asosiy rang: [rang tanlovchi yoki hex kodi]
- Ikkinchi rang: [rang tanlovchi yoki hex kodi]
- Aksent rangi: [ixtiyoriy]

Brend toningizni qanday tasvirlaysiz?
- Professional / korporativ
- Ijodiy / san'atkor
- O'yin-damli / kasallik
- Minimal / zamonaviy
- Issiq / do'stona
```

### 4-Qadam: Biznes Maqsadlari {#step-4-business-goals}

```
Saytingiz uchun muvaffaqiyat qanday ko'rinishda?
- Potensial mijozlarni jalb qilish (leads)
- Mahsulot sotish
- Jamoatchilikni qurish
- Bilimni ulashish
- Vakillik o'rnatish
- Boshqa: [tavsiflang]

Asosiy ko'rsatkich nima?
- Daromad
- Foydalanuvchi jalboti (User engagement)
- Kontent yetib borishi
- Konversiyalar
- Boshqa
```

### 5-Qadam: Kontent Tuzilishi {#step-5-content-structure}

```
Kontentingiz qanday tashkil etilgan?
- Tekis (barcha kontent bir darajadagi)
- Piramidal (kategoriyalar va subkategoriyalar)
- Xronologik (blog uslubida)
- Mahsulotga asoslangan (katalog)
- Boshqa: [tavsiflang]

Qanday kontent turlari ishlatasiz?
- Blog postlari
- Mahsulot sahifalari
- Tadqiqotlar (Case studies)
- Hujjatlar (Documentation)
- Videolar
- Boshqa
```

## Sizning site_brief Xotirangiz {#your-sitebrief-memory}

Sayt ko'rsatmalarini to'ldirgandan so'ng, sizning ma'lumotlaringiz agent xotirasida **site_brief** sifatida saqlanadi. Bu quyidagilarni o'z ichiga olgan tuzilgan yozuvdir:

## Sitenizi Görme ve Güncelleme {#viewing-and-updating-your-sitebrief}

### Sitenizin Özeti (site_brief)ni Görüntüleme {#view-your-sitebrief}

Aşağıdaki komutlardan birini kullanın:

```
"Show me my site brief"
```

veya

```
"What do you know about my site?"
```

Agent, kaydettiğiniz bilgileri size gösterecektir.

### Sitenizin Özeti (site_brief)ni Güncelleme {#update-your-sitebrief}

Siteniz gelişirse, onu güncelleyebilirsiniz:

```
"Update my site brief: we're now targeting B2B customers"
```

veya

```
"Refresh my site specification"
```

Bu işlem, mevcut bilgilerinizle Site Specification becerisini yeniden çalıştırır.

## Agent'lar Sitenizin Özeti (site_brief)ni Nasıl Kullanır? {#how-agents-use-sitebrief}

### Tasarım Önerileri {#design-recommendations}

Tasarım değişiklikleri istediğinizde, agent'lar sitenizin özetine bakar:

```
Siz: "Redesign my homepage"
Agent: "Site özetinize göre, 25-45 yaş arası kadınlara sıcak ve el yapımı bir tonla odaklanıyorsunuz. El yapımı takılarınızı ve sürdürülebilirlik değerlerinizi vurgulayan bir tasarım oluşturacağım."
```

### Özellik Önerileri {#feature-suggestions}

Agent'lar hedeflerinize uygun özellikler önerir:

```
Siz: "What features should I add?"
Agent: "Müşteri sadakatine odaklanmış bir e-ticaret mağazası için, size şunları öneririm: sadakat programı, müşteri yorumları, e-posta bülteni ve ürün önerileri."
```

### İçerik Yapısı {#content-structure}

Agent'lar yapınıza dayanarak içerik düzenlemesi önerir:

## بهترین روش‌ها (Best Practices) {#best-practices}

### مشخص باشید (Be Specific) {#be-specific}

"همه مخاطبان" گفتن yerine، خودِ مخاطب‌تون رو دقیق توصیف کنید:

- ✓ "زنان ۲۵ تا ۴۵ ساله که به مد پایدار علاقه‌مند هستند"
- ✗ "همه مردم"

### مرتب به‌روزرسانی کنید (Update Regularly) {#update-regularly}

وقتی سایت شما تغییر می‌کنه، `site_brief` خودتون رو به‌روز نگه دارید:

- وقتی مخاطب جدیدی پیدا می‌کنید
- وقتی خطوط تولید محصول جدید اضافه می‌کنید
- وقتی هویت برندتون عوض oluyor
- وقتی اهداف کسب‌وکار شما تغییر می‌کنه

### اصطلاحات یکسان استفاده کنید (Use Consistent Terminology) {#use-consistent-terminology}

هر جلسه aynı terimleri kullanın:

- ✓ Her zaman "sustainable jewelry" deyin (yani "eco-friendly jewelry" ve "green products" demeyin)
- ✓ Her zaman aynı şekilde hedef kitlenize atıf yapın

### Bağlam Ekleyin (Include Context) {#include-context}

Ajanların kararlarınızı anlamasına yardımcı olacak arka plan bilgisi verin:

- "Biz kaliteyi fiyattan daha çok önemseyen profesyonelleri hedefliyoruz"
- "Müşterilerimiz teknolojiye hakim ve modern tasarımlar bekliyorlar"
- "Biz bir başlangıç aşamasındaki startup'uz, bu yüzden maliyet etkin çözümlere ihtiyacımız var"

## Theme Builder Onboarding ile İlişkisi {#relationship-to-theme-builder-onboarding}

Site Specification becerisi **Theme Builder onboarding flow** içine entegre edilmiştir. Onboarding'i tamamladığınızda, sağladığınız bilgilerle `site_brief` otomatik olarak oluşturulur.

Eğer şunları yapmak isterseniz Site Specification'ı bağımsız olarak da çalıştırabilirsiniz:

- İlk kurulumdan sonra spesifikasyonunuzu iyileştırmak
- Siteniz gelişirken site brief'inizi güncellemek
- Theme Builder'a başlamadan önce ayrıntılı bir spesifikasyon oluşturmak

## Sorun Giderme (Troubleshooting) {#troubleshooting}

**site_brief'im kullanılmıyor**
- Ajanın belleğe erişimi olup olmadığını kontrol edin.
- Ajanı "my site brief'i hatırlamasını" isteyin.
- Ayarlarınızda belleğin etkinleştirilip edilmediğini kontrol edin

**من ي新しい site\_brief ile yeniden başlamak istiyorum**
- Ajan'a sorun: "Site brief'imi temizle ve sıfırdan başla"
- Sonra Site Specification'ı tekrar çalıştırın

**Ajan benim site brief'imle uyuşmayan öneriler yapıyor**
- Ajan'dan şunu isteyin: "Site brief'imi gözden geçir"
- Eğer site brief'iniz güncel değilse onu güncelleyin
- İsteklerinizde ek bağlam (context) sağlayın

## Sonraki Adımlar {#next-steps}

Site specification'ınızı tanımladıktan sonra:

1. **Theme Builder kullanın**: Site brief'inize dayalı özel bir tema oluşturun
2. **Tasarımı iyileştirin**: Detaylı tasarım işleri için Design System Aesthetics becerisini kullanın
3. **İçeriği planlayın**: İçerik yapısı önerileri için ajanlardan isteyin
4. **Özellikleri oluşturun**: İş hedeflerinize uygun özellikler talep edin
