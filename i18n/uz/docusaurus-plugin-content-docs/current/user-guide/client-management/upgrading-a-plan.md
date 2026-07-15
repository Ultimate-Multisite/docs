---
title: Reja yangilash
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Plani yangni yangilash (v2)

_**MUHIM MA'LUMOT: Ushbu maqola Ultimate Multisite 2.x versiyasiga oid.**_

Mijozlaringiz istalgan vaqtda o'z planalarni yangilash imkoniyatiga ega. Ular boshqa planga ko'tarilishi yoki tarmog'ingizda taklif etilgan qo'shimcha xizmatlar yoki paketlarni sotib olishlari mumkin.

Bu tutorialda ular qanday plangasini yangilashi va yangilash jarayoni tugagandan keyin nima sodir bo'lishini ko'rib chiqamiz.

Plani yangilash uchun mijozlaringiz dashboardiga kirishi va **Account** sahifasiga o'tishi kerak.

![Account menyusi linki bilan mijoz subsite dashbordi](/img/account-page/account-menu.png)

Account sahifasida ular hozirgi a'zoliklarini va unga tegishli planni ko'rishadi. Boshqa planga yangilash uchun ularning **Your Membership** (Sizning A'zoligingiz) bo'limining o'ng yuqori burchagidagi **Change** (O'zgartirish) tugmasiga bosishi kerak.

![Account sahifasi Sizning A'zoligingiz kartasi Change tugmasi bilan](/img/account-page/membership-change-button.png)

Ular barcha mavjud planalarni ko'rsatadigan to'lov shakliga yo'naltiriladi.

Shuningdek, ular hozirgi plani uchun **mavjud xizmatlar va paketlarni** ham ko'rishi mumkin, agar ular faqat ma'lum bir xizmat yoki paketni (masalan, misolimizdagi cheksiz tashriflar yoki disk maydoni) sotib olishni istashlari bo'lsa, planni yangilash shart emas.

![Upgrade picker mijoz tomonidagi mavjud planalarni va paketlarni ko'rsatadi](/img/account-page/upgrade-picker.png)

U sotib olishni xohlagan mahsulotni tanlagandan so'ng, hozir qancha to'lash kerakligini (mavjud kreditlardan tashqari) va keyingi hisob-kitob sanasida qancha to'lanishi kerakligini ko'rishadi.

Odatda, agar mahsulot boshqa plang bo'lsa va to'lov a'zolik to'lovidan keyin amalga oshiriladigan bo'lsa, ular birinchi planda to'langan miqdor uchun kredit oladilar.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Agar ular ho yoki paketni tanlasangiz va u joriy obuna bo'yicha hech narsa o'zgartirmasa, siz shuni tushuntiruvchi xabarni ko'rasiz.

![Tanlangan plan obunani o'zgartirmasa haqida eslatma](/img/account-page/upgrade-no-change.png)

To'lov jarayoni yakunlangandan so'ng, yangi mahsulot(lar) mijozlarning hisobiga qo'shiladi va yangi mahsulot(lar)ning barcha cheklovlari yoki xususiyatlari darhol qo'shiladi: tashriflar, disk maydoni, postlar va h.k...

##

## Upgrade va Downgrade Yo'llari {#upgrade-and-downgrade-paths}

Har bir mahsulotingizda sizga **Up & Downgrades** (Yuqori va Past) yorlig'i bo'ladi. Bu yorliqning birinchi variantida **Plan Group** (Plan Guruh) deb nomlangan maydon mavjud.

**Plan gruplari** — bu Ultimate Multisite ga ma'lumki, ba'zi planlar bir xil "oilaga" tegishli ekanligini va shuning uchun ular yuqori/past yo'llar variantlarini yaratish uchun ishlatilishi kerakligini aytib beradi.

![Plan Group maydoni bilan mahsulot tahrirlash Up va Downgrades yorlig'i](/img/config/product-upgrades-plan-group.png)

Masalan, sizda **Bebpul plan**, **Asosiy plan** va **Premium plan** mavjud. Siz foydalanuvchilar faqat **Bebpul Plan** ostida bo'lganlarni faqat **Premium plana** ko'tarishimga ruxsat berishni xohlaysiz va ularga "Asosiy Plan"ni yangilash variant sifatida ko'rsatmoqchi emassiz. Siz buni qilish uchun sizdan talab qilinadigan narsa shundaki, Bebpul va Premium planlar uchun bir xil plan guruhi nomini yuqoridagi skrinshotlarda ko'rsatilganidek belgilashingiz kerak.

![Yuqori darajali (High End) plan guruhi bilan taqsimlangan Bebpul Plan mahsuloti sahifasi](/img/config/product-upgrades-free.png)

![Yuqori darajali (High End) plan guruhi bilan taqsimlangan Premium Plan mahsuloti sahifasi](/img/config/product-upgrades-premium.png)

Bu, Ultimate Multisite'ga ağda mavjud bo'lgan **Yuqori Darajali (High End)** nomli "oilin" mavjudligini aytish kerak. Agar siz o'zgartirishlar yoki pastroq variantlarni taklif qilsangiz, faqat shu oiladagi rejalarning o'ziga tegishli variant sifatida foydalanuvchiga ko'rsatilishi kerak.
