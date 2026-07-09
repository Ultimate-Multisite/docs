---
title: Qo‘llab-quvvatlash chiptalari o‘zgarishlar jurnali
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Qo‘llab-quvvatlash tiketlari o‘zgarishlar jurnali {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Yaxshilandi: vendor/ katalogi Git kuzatuvidan olib tashlandi (.gitignore tomonidan allaqachon qamrab olingan), repository hajmi kamaytirildi
* Yaxshilandi: WordPress 7.0 gacha sinovdan o‘tkazildi

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Tuzatish: Nullable ticket model setterlarida null qiymatlarni qabul qilish
* Tuzatish: To‘g‘ri multisite qo‘llab-quvvatlashi uchun barcha ticketlar global tarmoq bo‘ylab jadvallarda saqlanadi
* Tuzatish: Customer new-ticket formasida staff maydonlarini yashirish va blank-page redirectni tuzatish
* Tuzatish: Metadata saqlash uchun undefined add_meta() chaqiruvlarini to‘g‘ri update_meta() bilan almashtirish
* Tuzatish: Ro‘yxatdan o‘tkazilmagan capability tekshiruvini to‘g‘ri wu_view_all_support_tickets bilan almashtirish
* Tuzatish: Ticket statusi, tayinlash va quick-edit amallari uchun yetishmayotgan AJAX handlerlarni qo‘shish
* Tuzatish: Ticket ko‘rinishlarida staff javobini aniqlash uchun metod nomini to‘g‘rilash
* Tuzatish: Takroriy reply handlerlarni birlashtirish va nonce action nomlarini moslashtirish
* Tuzatish: [wu_submit_ticket] shortcode uchun yetishmayotgan frontend ko‘rinishini qo‘shish
* Tuzatish: Yetishmayotgan user_id ustunini qo‘shish va Support_Ticket::get_user_id() metodini tuzatish
* Tuzatish: Priority filter option tegidagi ortiqcha qo‘shtirnoqni olib tashlash
* Tuzatish: Super adminlar uchun network admin ticket boshqaruv panelini qo‘shish
* Yaxshilandi: Admin CSS yagona tashqi stylesheetga birlashtirildi
* Yaxshilandi: Subsite admin menyusidan Settings submenyusi olib tashlandi
* Yaxshilandi: Frontend assetlari faqat support ticket sahifalarida shartli yuklanadi
* Yaxshilandi: Bedrock root autoloader dependencylarni allaqachon yuklaganida plugin autoloaderni o‘tkazib yuborish

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Qo‘shildi: Admin va frontend uchun to‘liq ticket ko‘rish funksionalligi
* Qo‘shildi: Ticket javoblarini yuborish uchun AJAX handler
* Qo‘shildi: To‘g‘ri forma ishlovi bilan ticket javob funksionalligini qo‘llab-quvvatlash
* Qo‘shildi: Admindagi ticket yuborishlari va javoblari uchun to‘g‘ri notice ko‘rsatish
* Qo‘shildi: Customer self-submissionlar uchun joriy foydalanuvchi bilan avtomatik ticket bog‘lanishi
* Qo‘shildi: Customerlarning ticket egaligini o‘zgartirib yuborishining oldini olish uchun xavfsizlik yaxshilanishi
* Qo‘shildi: Yetishmayotgan yordamchi funksiyalar (wu_format_date, wu_user_can_view_ticket, va hokazo)
* Qo‘shildi: Fayl biriktirmalarini to‘g‘ri yuklab olish va ishlov berish
* Qo‘shildi: Ticket javoblari va status o‘zgarishlari uchun email xabarnoma tizimi
* Tuzatildi: Ticket javob formasi endi zarur ticket IDni o‘z ichiga oladi
* Tuzatildi: Admin ticket ko‘rinishlarida notice ko‘rinish muammolari
* Tuzatildi: Support ticket funksiyalaridagi sintaksis xatolari
* Yaxshilandi: Javoblar va biriktirmalar uchun to‘g‘ri query va schema classlari bilan ma’lumotlar bazasi tuzilmasi
* Yaxshilandi: Ticket modellari uchun attributes o‘rniga haqiqiy propertylarga migratsiya

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Yangilandi: Izchillik uchun prefix ultimate-multisite deb qayta nomlandi
* Yangilandi: Text domain standartlashtirildi
* Tuzatildi: Kichik bug tuzatishlari va yaxshilanishlar

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Dastlabki reliz
* To‘liq ticket boshqaruv tizimi
* Ko‘p darajali kirish nazorati
* Threaded conversation tizimi
* Fayl biriktirmalarini qo‘llab-quvvatlash
* Email xabarnoma tizimi
* Admin va customer interfeyslari
* Statistika va hisobotlar
