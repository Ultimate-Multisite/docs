---
title: Hostinger Ko'p-tenantlik
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 Hostinger multi-tenancy imkoniyatini qo'shadi, bu orqali joylashtirilgan domenlar mavjud Hostinger domen xaritasi integratsiyasi bilan birga suveren ta'minot (sovereign tenant provisioning) jarayonida ishtirok etishi mumkin.

Tenant domenlari va ajratilgan tenant infratuzilmasi Hostinger hPanel orqali boshqarilsa, bu imkoniyatdan foydalaning.

## Sozlash haqida eslatmalar {#setup-notes}

1. Asosiy Hostinger integratsiyasini **Ultimate Multisite > Settings > Host Integrations** ichida sozlang.
2. Hostinger API tokeni maqsadli domen yoki subdomainni boshqara olishini tasdiqlang.
3. Multi-Tenancy addonini faollashtiring.
4. Tenantni e'lon qilishdan oldin tenant ajratish strategiyasini sozlang.
5. Prod trafikni tenantga yuborishdan oldin migratsiya tekshiruv jarayonini bajaring.

Hostinger imkoniyati host tomonidagi operatsiyalar uchun umumiy Hostinger ulanishidan foydalanadi. DNS hali ham to'g'ri Hostinger hisobiga ishora qilishi kerak, va hPanel hisob cheklovlari hali ham amal qiladi.

## Imkoniyatga xos o'zgarishlar {#capability-specific-changes}

- Suveren tenantlar host-ani hisoblaydigan domen operatsiyalari bilan yaratilishi mumkin.
- Maqsadli tasdiqlashdan oldin ma'lumotlar bazasi host qatorlari normalizatsiya qilinadi.
- Hostinger tomonidan boshqariladigan tenantlar WordPress runtime mahalliy o'zgartirish talab qilmasa, hPanelda ko'rsatilgan ma'lumotlar bazasi host qiymatini ishlatishi kerak.
- SSO tashriflari tenant domenining Hostinger joylashtirilgan tenantga yo'naltirilishiga bog'liq.

## Hostinger tenantlarini muammolarni hal qilish {#troubleshooting-hostinger-tenants}

- Agar tenant o'rnatilishi muvaffaqiyatsiz bo'lsa, domen Hostinger hisobiga allaqachon biriktirilganligini tekshiring.
- Agar ma'lumotlar bazasi tasdiqlash muvaffaqiyatsiz bo'lsa, tenant DB foydalanuvchisi, ma'lumotlar bazasi nomi va host bog'lanishini hPanel bilan solishtiring.
- Agar **Visit (SSO)** muvaffaqiyatsiz bo'lsa, tenant domeni uchun DNS va SSL faol ekanligini tasdiqlang.
- Agar yechimdan keyin host resurslari qolib qolsa, zaxira nusxalarni tasdiqlaganingizdan so'ng hPaneldan qolgan barcha ma'lumotlar bazalarini, foydalanuvchilarni yoki papkalarni o'chiring.
