---
title: Ko'rinish imkoniyati
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Imkoniyat Ko'rinishi (Ability Visibility)

Superdav AI Agent v1.12.0 **Imkoniyat Ko'rinishi** nazoratlarini joriy etadi, ular har qaysi imkoniyatning qaysi yuzalarda ko'rsatilishini boshqaradi. Bu administratorlarga REST API, MCP serverlari, WooCommerce integratsiyalari va boshqa interfeyslar orqali qaysi agent imkoniyatlari mavjudligini sozlash imkonini beradi.

## Imkoniyat Ko'rinishi nima?

Imkoniyat Ko'rinishi bu ruxsat tizimi bo‘lib, quyidagilarni boshqaradi:

- Agentlarga **qaysi imkoniyatlar** mavjud
- Ular **qayerda ko'rsatilganligi** (REST API, MCP, WooCommerce va h.k.)
- Ularga **kim kirishi mumkin** (hamkor ro'yxatlari orqali)
- Ularning **qanday tasniflanishi** (tanib olinadigan yoki tanlanmagan)

Har bir imkoniyat turli yuzalarda mavjudligini belgilaydigan ko'rinish darajasiga ega.

## Ko'rinish Darajasi (Visibility Levels)

### Ommaviy (Public)

**Ommaviy imkoniyatlar** hamma joyda mavjud:

- REST API endpointlari
- MCP serverlari
- WooCommerce integratsiyalari
- Chat interfeyslari
- Barcha foydalanuvchi rollari (tepkili ruxsatnomalar bilan)

Misol: `scaffold-block-theme`, `activate-theme`, `send-email`

### Ichki (Internal)

**Ichki imkoniyatlar** faqat sizning WordPress o'rnatishingiz ichida mavjud:

- Chat interfeyslari
- Admin panellari
- Faol foydalanuvchilar uchun faqat
- REST API yoki tashqi integratsiyalar orqali ko'rsatilmaydi

Misol: `manage-settings`, `view-analytics`, `export-data`

### Hamkor (Partner)

**Hamkor imkoniyatlar** faqat ro'yxatdan o‘tgan hamkorlarga mavjud:

- Hamkor ro'yxatidan aniq kiritish talab etiladi
- Hamkor autentifikatsiyasi bilan REST API orqali mavjud
- Hamkor autentifikatsiyasi bilan MCP orqali mavjud
- Oddiy foydalanuvchilar uchun mavjud emas

Misol: `bulk-import-users`, `modify-billing`, `access-analytics`

### O'chirilgan (Disabled)

**O'chirilgan imkoniyatlar** hech qayerda mavjud emas:

- Hech qanday yuzada ko'rsatilmaydi
- Chatda mavjud emas
- Admin panellarida mavjud emas
- Eskirgan yoki tajribaviy imkoniyatlar uchun foydali

## Imkoniyat Ko'rinishini Boshqarish

### Imkoniyat Ko'rinishi Sozlamalariga Kirish

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** ga o'ting
2. **Abilities** (Imkoniyatlar) yorlig'iga bosing
3. O'rnatilgan barcha imkoniyatlar va ularning ko'rinish darajalarini ro'yxatini ko'rasiz

### Imkoniyat Detallarini Ko'rish

Har qanday imkoniyatga bosib quyidagi ma'lumotlarni ko'rishingiz mumkin:

- **Name** (Nom): Imkoniyatning identifikatori
- **Description** (Tavsif): Imkoniyat nima qilishi haqida
- **Current visibility** (Hozirgi ko'rinish): Ommaviy (Public), Ichki (Internal), Hamkor (Partner) yoki O'chirilgan (Disabled)
- **Partner allow-list** (Hamkorlar ro'yxati): Qaysi hamkorlarning kirishi mumkinligi (Agar Partner ko'rinishi tanlangan bo'lsa)
- **Last updated** (Eng oxirgi yangilangan vaqt): Ko'rinish oxirida qachon o'zgarganligi
- **Status** (Holat): Tanib olingan (Recognized) yoki Klassifikatsiz (Unclassified)

### Ko'rinish Darajalarini O'zgartirish

Imkoniyatning ko'rinishini o'zgartirish uchun:

1. Ro'yxatdagi imkoniyatga bosing
2. Dropdown menyusidan yangi ko'rinish darajasini tanlang
3. Agar "Partner"ni tanlasangiz, hamkorlar ro'yxatiga (allow-list) hamkor identifikatorlarini qo'shing
4. **Save** (Saqlash) tugmasiga bosing

Misol:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Massiv Operatsiyalar

Bir nechta imkoniyatning ko'rinishini o'zgartirish uchun:

1. Imkoniyatlar yonidagi qutchilarni belgilang (check)
2. Massiv harakatlar dropdown menyusidan yangi ko'rinish darajasini tanlang
3. **Apply** (Jarayonni qo'llash) tugmasiga bosing

## Hamkorlar Ro'yxati (Partner Allow-List)

**Hamkorlar ro'yxati** tashqi hamkorlarning Partner darajasidagi imkoniyatlarga kirishini boshqaradi.

### Hamkorlarni Qo'shish

1. **Superdav AI Agent** → **Settings** → **Partners** ga o'ting
2. **Add Partner** (Hamkor qo'shish) tugmasiga bosing
3. hamkor identifikatorini kiriting (odatda API kaliti yoki tashkilot ID)
4. Tanlash bo'yicha hamkor nomi va tavsifni qo'shishingiz mumkin
5. **Save** (Saqlash) tugmasiga bosing

### Imkoniyatlarni Hamkorlarga Taqliflash

Hamkor qo'shilgandan so'ng:

1. **Abilitatlar** yorlig'iga o'ting
2. Hamkor ko'rinishi (Partner visibility) bo'lgan abilita (ability) toping
3. Tahrirlash uchun bosing
4. "Hamkorlar ro'yxati" (Partner allow-list) qismida, kirishga ega bo'lishi kerak bo'lgan hamkorlar uchun qutchilarni belgilang
5. **Saqlash** tugmasini bosing

### Hamkor Kirishini Cheklash

Hamkorning kirishini olib tashlash uchun:

1. Abilitani tahrirlang
2. Ro'yxatdagi hamkorning qutchisidan belgilashni bekor qiling
3. **Saqlash** tugmasini bosing

Hamkor ushbu abilita (ability) ga darhol kirish imkonini yo'qotadi.

## Klassifikatsiz Abilitatlar

Agar siz Superdav AI Agent tomonidan tan olinmagan uchinchi tomon abilita (third-party ability) o'rnatgan bo'lsangiz, u **Klassifikatsiz** deb belgilangan.

### Klassifikatsiz Abilitatlar uchun Admin Eslatmasi

Siz admin eslatmasini ko'rasiz:

```
⚠️ Klassifikatsiz Abilitatlar aniqlendi

Quyidagi abilitalar o'rnatilgan, ammo tan olinmagan:
- custom-import-tool
- external-api-wrapper

Bu abilitalar xavfsizlik yoki mos kelishmovchilik (compatibility) xavfini tug'dirishi mumkin.
Iltimos, ularni ko'rib chiqing va klassifikatsiya qiling.

[Abilitatlarni Ko'rib Chiqish] [Boshlashni Boshlash]
```

### Klassifikatsiz Abilitatlarni Ko'rib Chiqish

1. Eslatma ichidagi **Abilitatlarni Ko'rib Chiqish** (Review Abilities) tugmasini bosing
2. Har bir klassifikatsiz abilita uchun quyidagilarni ko'rasiz:
   - Abilita nomi va tavsifi
   - Manba (qaysi plugin/addon uni o'rnatgan)
   - Taklif etilgan ko'rinish darajasi (Suggested visibility level)
   - Xavfsizlik bahosi

3. Ko'rinish darajasini tanlang:
   - **Ommaviy (Public)**: Abilitaga ishonch bering; uni hamma joyda oching
   - **Ichki (Internal)**: Faqat ichki foydalanish uchun cheklang
   - **Hamkor (Partner)**: Muayyan hamkorlarga cheklang
   - **O'chirilgan (Disabled)**: Bu abilita ishlatilmasligi kerak

4. Qaroringizni saqlash uchun **Klassifikatsiya Qilish** (Classify) tugmasini bosing

### Nega Klassifikatsiz Abilitatlarni Klassifikatsiya Qilish Kerak?

Abilitatlarni klassifikatsiya qilish:

- **Xavfsizlikni oshiradi**: Nima ochilishi haqida siz aniq tasdiqlaysiz
- **Fojialarni oldini oladi**: Klassifikatsiz abilitalar ko'p hollarda avtomatik ravishda o'chirilgan bo'ladi
- **Funksiyalarni faollashtiradi**: Klassifikatsiya qilingandan so'ng, abilita ishlatilishi mumkin bo'ladi
- **Qararlarni hujjatlashtiradi**: Sizning tanlovingiz audit maqsadlarida qayd etiladi

## Turliqlik Turli Sirtlarda Ko'rinish

### REST API

**Ommaviy imkoniyatlar** REST endpointlari orqali mavjud:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Ichki va hamkor imkoniyatlar** REST API orqali mavjud emas.

### MCP Serverlari

**Ommaviy imkoniyatlar** MCP orqali mavjud:

```
MCP Server: Superdav AI Agent
Mavjud imkoniyatlar:
- scaffold-block-theme
- activate-theme
- send-email
```

**Ichki imkoniyatlar** MCP orqali ochilmaydi.

**Hamkor imkoniyatlari** faqat hamkorlik ma'lumotlari bilan mavjud.

### WooCommerce Integratsiyasi

WooCommerce bilan bog'liq **ommaviy imkoniyatlar** mavjud:

- Mahsulotlarni boshqarish
- Buyurtmalarni qayta ishlash
- Mijozlar bilan muloqot

**Ichki imkoniyatlar** WooCommerce ga ochilmaydi.

### Chat Interfeysi

Barcha **imkoniyatlar** (Ommaviy, Ichki, Hamkor) foydalanuvchi ruxsatnomalariga qarab chatda mavjud:

- Administratorlar barcha imkoniyatlarni ko'rishadi
- Oddiy foydalanuvchilar faqat Ommaviy imkoniyatlarni ko'rishadi
- Hamkorlar (ro'yxatdan o'tgan bo'lsa) Ommaviy + Hamkor imkoniyatlarini ko'rishadi

## Xavfsizlik Eng Amaliyotlari

### Eng Kam Huquq Prinsipi

- Imkoniyatlarni ularning ishlatilishi mumkin bo'lgan eng cheklovli ko'rinishda belgilang
- Nozik operatsiyalar uchun Hamkor imkoniyatlaridan foydalaning
- Foydalanmayotgan imkoniyatlarni o'chiring

### Muntazam Auditlar

- Imkoniyatlar ko'rinishini har oy tekshiring
- Klassifikatsiz bo'lgan imkoniyatlarni tekshiring
- Foydalanilmayotgan hamkorlarga kirishni olib tashlang

### Yordamchi Uchinchi Tomon Imkoniyatlari

- Faollash qilishdan oldin uchinchi tomon imkoniyatlarini ko'rib chiqing
- Ularni aniq klassifikatsiya qiling
- Ichki yoki Hamkor ko'rinishi bilan boshlang
- Tekshiruvdan o'tganidan so'ng faqat Ommaviyga ko'tarishni amalga oshiring

## Muammalarni Qayta Olishish (Troubleshooting)

**Qobili ro'yxatda ko'rinmayapti**
- Qobili o'rnatilgan va faol ekanligini tekshiring.
- Plugin/addon ning yoqilganligini tekshiring.
- Sahifani qayta yuklang.

**Qobili ko'rinishini o'zgartira olmayapman**
- Administrator huquqlaringiz borligini tasdiqlang.
- Qobili plugin tomonidan bloklanmaganligini tekshiring.
- Konflixta bo'lishi mumkin bo'lgan pluginlarni o'chirishni sinab ko'ring.

**Hamkor qobiliyaga kirishim mumkin emas**
- Hamkor ro'yxatdagi (allow-list) ekanligini tasdiqlang.
- Qobillik ko'rinishi "Partner" ga sozlanmaganligini tekshiring.
- Hamkorning ma'lumotlarining to'g'ri ekanligini tasdiqlang.
- Autentifikatsiya xatolarini tekshirish uchun API loglarini ko'ring.

**Tasniflanmagan qobiliyalar doim paydo bo'ladi**
- Ularni admin eslatmasida ko'rib chiqing va tasniflang.
- Tasniflashning saqlanganligini tekshiring.
- Qobiliyatni taqdim etuvchi pluginning yangi versiyada ekanligini tekshiring.

## Eski Rejimdan O'tkazish (Migration from Legacy Mode)

Agar siz Superdav AI Agent ning eski versiyasidan yangilayotgan bo'lsangiz:

- Barcha mavjud qobiliyalar avtomatik ravishda "Public" (Ommaviy) deb tasniflanadi.
- Kerakli joylarda ko'rinishni ko'rib chiqing va sozlang.
- Kirish imkoniyatini cheklashni istamasangiz hech qanday harakat talab qilinmaydi.

Native Abilities API integratsiyasiga o'tish haqida batafsil ma'lumotlar uchun **Third-Party Mode Migration** (Uchinchi tomon rejimi migratsiyasi) bo'limini ko'ring.

## Keyingi Qadamlar (Next Steps)

Qobiliya ko'rinishini sozlaganingizdan so'ng:

1. **Qobiliyalaringizni ko'rib chiqing**: O'rnatilgan barcha qobiliyalarni tekshiring
2. **Tasniflanmagan qobiliyalarni tasniflang**: admin eslatmalariga javob bering
3. **Hamkorlarni sozlang**: Partner ko'rinishidan foydalansangiz, hamkorlarni qo'shing
4. **Foydalanishni kuzating**: Qaysi qobiliyalar eng ko'p ishlatilayotganini kuzating
5. **Xulosalarni hujjatlashtiring**: Har bir ko'rinish darajasini nima uchun tanlaganingiz haqida eslatmalar yozing
