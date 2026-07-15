---
title: Мансаптарданフィдбек ва муаммо билдириш
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Möjizat Müşteri Fikrleri va Muammalarini Bildirish

Gratis AI Agent v1.5.0, oxlar (chat) interfeysinden qolgan javoblarni belgilash va muammalari bildirish imkanı beradigan ichki fikr va muammo bildirish tizimini taqdim etadi. Bu tizimda rıza boshqaruvi, avtomatlashtirilgan hisobot buyrug'i va backendda AI yordamida muammolarni saralash (triage) xizmatlari mavjud.

## Boshqa Qismga Yoqlash Tugmasi (Thumbs-Down Button) {#thumbs-down-button}

AI yordamchisi tomonidan yuborilgan har bir xabarda **boshqa qismga yoqlash** (👎) tugmasi ko'rsatiladi. Foydalanuvchi uni bosganida, u javobni foydasiz yoki noto'g'ri deb belgilashi mumkin.

- Tugma har bir yordamchining xabari yonidagi kursorni olib o'tkazganida paydo bo'ladi.
- Uni bosish **Fikr Berish Riza Modali** (Feedback Consent Modal)ni ochadi.
- Fikr suhbat sarfi va aniq xabarga bog'lanadi.

## Fikr Berish Riza Modali (Feedback Consent Modal) {#feedback-consent-modal}

Foydalanuvchi boshqa qismga yoqlash tugmasini bosganida, hech qanday ma'lumot yuborilmasdan rıza modali paydo bo'ladi. Bu modal:

- Qaysi ma'lumotlar yig'ilishi tushuntiriladi (suhbat parchasi, brauzer konteksti).
- Foydalanuvchidan bu ma'lumotlarni baham ko'rishga rozilik berishini tasdiqlashni so'raydi.
- Foydalanuvchiga nima noto'g'ri bo'lganini tushuntirish uchun ochiq matn maydoni taqdim etadi.
- Yubormasdan rad etish uchun **Bekor qilish** (Cancel) variantini taklif qiladi.

Foydalanuvchi aniq tasdiqlaguncha hech qanday fikr qayd etilmaydi.

## Avtomatik Prompt Fikr Berish Bannersi (Auto-Prompt Feedback Banner) {#auto-prompt-feedback-banner}

Suhbat oxirida, yordamchi **avtomatik prompt fikr berish bannersini** ko'rsatishi mumkin — bu sessiya foydali bo'lganmi degan savol beradigan shubhasiz xabar.

Bu banner suhbatning uzunligiga va natijasiga asoslanib avtomatik paydo bo'ladi. U boshqa qismga yoqlash tugmasi bilan bir xil fikr berish jarayoniga bog'langan. Foydalanuvchilar fikr bermasdan ham bu bannerni yopishi mumkin.

## /report-issue Slash Buyrug'i (Slash Command) {#report-issue-slash-command}

Foydalanuvchilar suhbat kiritish maydoniga `/report-issue` deb yozib bevosita fikr berish jarayonini boshlashlari mumkin. Bu buyruq:

Feedback Consent Modal-ı hemen açar.
Açıklama alanını mevcut konuşma hakkında bağlam bilgileriyle önceden doldurur.
Kullanıcılara göndermeden önce ek detaylar eklemelerine olanak tanır.

`/report-issue` komutu tüm sohbet modlarında (inline, floating widget, full-screen) mevcuttur.

## AI-Assisted Triage (Yapay Zeka Destekli Ön Eleme) {#ai-assisted-triage}

Gönderilen geri bildirimler bir yapay zeka ön eleme katmanına yönlendirilir ki bu katman:

- Raporu sınıflandırır (olgusal hata, yardımcı olmayan cevap, uygunsuz içerik vb.).
- İlgili konuşma meta verilerini ekler.
- Ön eleme özetini yapılandırılmış **Feedback Endpoint**'e iletir (bkz. [Settings > Advanced](#settings-advanced)).

Bu, en kritik sorunları ilk olarak ortaya çıkararak manuel inceleme süresini azaltır.

## Settings > Advanced {#settings-advanced} (Ayarlar > Gelişmiş) {#settings--advanced}

Geri bildirim arka ucunu etkinleştirmek için **Gratis AI Agent → Settings → Advanced** altında aşağıdaki alanları yapılandırın:

| Alan | Açıklama |
|---|---|
| **Feedback Endpoint URL** | Geri bildirim yükleri (JSON) ile POST isteklerini alan URL. |
| **Feedback API Key** | Geri bildirim gönderimlerini doğrulamak için `Authorization` başlığında gönderilen Bearer token. |

Geri bildirim toplamasını devre dışı bırakmak için her iki alanı da boş bırakın. Bireysel geri bildirim butonları kullanıcılara görünmeye devam eder, ancak gönderiler iletilmez.

:::tip
Geri bildirim uç noktasının en az `message_id`, `conversation_id`, `feedback_text` ve `triage_category` alanlarını içeren bir JSON gövdesi kabul etmesi gerekir. Beklenen şema için lütfen uç nokta sağlayıcınızın dokümantasyonuna bakın.
:::
