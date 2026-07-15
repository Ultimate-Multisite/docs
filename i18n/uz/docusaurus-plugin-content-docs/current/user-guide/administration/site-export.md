---
title: Saytni eksport qilish
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Saytni Eksport

**Site Export** admin sahifasi tarmoq administratorlari bir saytni, yoki butun tarmoqni migratsiya, muvofiqlashtirish (backup) yoki topshirish ishlari uchun yuklab olish mumkin bo'lgan arxivga o'rab olish imkonini beradi.

## Bitta saytni eksport qilish {#exporting-one-site}

**Ultimate Multisite > Site Export** ga o'ting va **Generate new Site Export** ni tanlang. Eksport qilmoqchi bo'lgan subsaytni tanlang, so'ngra arxivga yuklamalar (uploads), pluginlar va temalarni kiritish kerakmi yoki yo'qligini tanlang.

Eksport yakunlangandan so'ng, **Existing Exports** ro'yxatidan ZIP faylni yuklab oling. Hozirgi eksport ZIPlari ichida o'zini ishga tushiradigan `index.php` va `readme.txt` mavjud bo'ladi, shuning uchun arxivni alohida import pluginini o'rnatmasdan yangi hostga yuklab, darhol ishga tushirish mumkin.

## Butun tarmoqni eksport qilish {#exporting-the-whole-network}

Tarmoqdagi barcha subsaytlarni bir xil arxivda saqlash kerak bo'lgan holatlarda Site Export sahifasida **Network Export** dan foydalaning. Bu host migratsiyalari, oflash (disaster-recovery) mashqlari yoki har bir subsayt birgalikda saylanishi kerak bo'lgan bosqichiy qayta qurishlar uchun juda foydalidir.

Tarmoq eksporti bitta sayt eksportidan ancha katta bo'lishi mumkinligi sababli, uni trafik kam bo'lgan vaqtda ishga tushiring va maqsadli saqlash joyida yuklamalar, pluginlar, temalar va yaratilgan ZIP fayllar uchun yetarli bo'sh joy mavjudligini tasdiqlang.

### Tarmoq import paketlari (Network Import Bundles) {#network-import-bundles}

Ultimate Multisite 2.12.0 dan boshlab, Site Exporter **network import bundles** ni yaratishi mumkin — tarmoq bo'ylab saytlarni tezkor tiklash uchun mo'ljallangan maxsus arxivlar. Tarmoq import paketi bir nechta saytni yangi tarmoq o'rnatmasiga qaytarish uchun kerakli barcha fayllar va metadata bilan jihozlangan bo'ladi.

#### Tarmoq import paketini yaratish {#generating-a-network-import-bundle}

1. **Ultimate Multisite > Site Export** ga o'ting.
2. **Generate new Network Export** ni bosing.
3. Eksport turi sifatida **Network Import Bundle**ni tanlang.
4. Yuklab olingan fayllar, pluginlar va temalarni kiritish kerakmi yoki yo'qmi degan savolga javob bering.
5. **Generate** tugmasini bosing.
6. **Existing Exports** ro'yxatidan bundle ZIP faylini yuklab oling.

#### Network Import Bundle orqali tiklash {#restoring-from-a-network-import-bundle}

Network import bundle'lar yordamida saytlarni tiklash uchun:

1. Ultimate Multisite ni maqsadli hostga o'rnating.
2. multisite sozlamalar wizardini yakunlang.
3. Yangi networkda **Ultimate Multisite > Site Export** ga kiring.
4. **Import Network Bundle**ni bosing.
5. network import bundle ZIP faylini yuklang.
6. Ekran bo'yicha import ko'rsatmalari bilan ishlating.
7. Import jarayoni barcha saytlarni, ularning kontentini va sozlamalarini tiklaydi.

Network import bundle'lar quyidagilarni saqlab qoladi:
- Sayt kontenti (postlar, sahifalar, maxsus post turlari)
- Sayt sozlamalari va variantlari
- Foydalanuvchi rollari va ruxsatnomalari
- Pluginlar va temalar (agar bundle ichida bo'lsa)
- Media yuklamalari (agar bundle ichida bo'lsa)
- Maxsus ma'lumotlar bazasi jadvallari va ma'lumotlari

## O'zini ishga tushadigan export ZIP faylini o'rnatish {#installing-a-self-booting-export-zip}

Yangilangan hostda o'zini ishga tushiruvchi ZIP faylni tiklash uchun:

1. Eksport qilingan ZIP ichidagi kontentlarni maqsadli veb ildiz (web root) papkasiga yuklang.
2. Yuklangan `index.php` faylini brauzerda oching.
3. Bundle eksport paketidan o'z-o'zini o'rnatish ko'rsatmalari bilan ishlating.
4. Vaqtinchalik fayllarni o'chirishdan oldin bundle ichidagi `readme.txt` faylini tekshirib oling, u eksportga xos eslatmalar beradi.

Addonlar uchun maxsus o'rnatish va import tafsilotlari haqida ma'lumot olish uchun [Site Exporter addon documentation](/addons/site-exporter) manbasiga qarang.

Ultimate Multisite 2.9.0 da qo'shilgan single-site vositasi haqida [Export & Import](/user-guide/administration/export-import) bo'limidan ko'ring.
