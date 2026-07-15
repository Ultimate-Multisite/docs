---
title: 'Dars 5: Rejalaringizni loyihalash'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# 5-dars: Rejalaringizni loyihalash

Reja darajalaringiz shunchaki narx pog'onalari emas -- ular tor yo'nalishdagi mijozlaringiz aslida qanday ishlashining aksidir. Bu darsda siz turli bosqichlardagi fitness bizneslarining haqiqiy ehtiyojlariga mos mahsulot darajalarini loyihalaysiz.

## Qayerda to'xtagan edik {#where-we-left-off}

FitSite’da uchta shablon tayyor (Studio Essential, Gym Pro, Fitness Chain). Endi mijozlar nimaga kirish olishini va qancha to'lashini belgilaydigan rejalarni yaratamiz.

## Mijoz segmentlari haqida o'ylash {#thinking-in-customer-segments}

Ko'pchilik qiladigan xato -- rejalarni texnik xususiyatlar (saqlash joyi, o'tkazish kengligi, sahifalar soni) atrofida loyihalash. Tor yo'nalishdagi mijozlaringiz bunday tushunchalar bilan o'ylamaydi. Sportzal egasi biznesini yuritish uchun nimaga muhtojligini o'ylaydi.

Fitness studiyalari uchun uchta tabiiy segment mavjud:

| Segment | Ular kim | Ularga nima kerak |
|---------|-------------|----------------|
| **Yakka trenerlar / kichik studiyalar** | 1-3 xodim, bitta joylashuv, endi boshlayotgan | Professional sayt, mashg'ulotlar ma'lumoti, aloqa formasi |
| **Shakllangan sportzallar** | 5-20 xodim, bitta joylashuv, o'sib borayotgan | Yuqoridagilarning barchasi hamda band qilish, blog, galereya, maxsus domen |
| **Fitness tarmoqlari** | Bir nechta joylashuv, shakllangan brend | Yuqoridagilarning barchasi hamda ko'p saytli tuzilma, joylashuv sahifalari, xodimlar katalogi |

Rejalaringiz ixtiyoriy xususiyatlar to'plamlariga emas, shu segmentlarga mos kelishi kerak.

## FitSite rejalarini yaratish {#creating-the-fitsite-plans}

Har bir reja uchun **Ultimate Multisite > Mahsulotlar > Mahsulot qo'shish** bo'limiga o'ting.

### 1-reja: FitSite Starter -- $49/oy {#plan-1-fitsite-starter----49month}

**Maqsadli auditoriya**: Yakka trenerlar va kichik studiyalar

**Tavsif yorlig'i**:
- Nomi: FitSite Starter
- Tavsif: "Shaxsiy trener yoki kichik studiyaga internetda professional ko'rinish uchun kerak bo'ladigan hamma narsa."

**Umumiy yorliq**:
- Mahsulot turi: Reja
- Mijoz roli: Administrator

**Sayt shablonlari yorlig'i**:
- Sayt shablonlariga ruxsat berish: Yoqilgan
- Mavjud shablonlar: faqat Studio Essential

**Cheklovlar**:
- Saytlar: 1
- Disk joyi: 1 GB
- Maxsus domen: O'chirilgan (`studioname.fitsite.com` ishlatiladi)

**Pluginlar yorlig'i**:
- Aloqa formasi plugin: Majburiy faollashtirish
- SEO plugin: Majburiy faollashtirish
- Band qilish plugin: Mavjud emas (yuqori rejaga o'tish rag'bati)

**Theme’lar yorlig'i**:
- Siz tanlagan theme: Majburiy faollashtirish
- Boshqa barcha theme’lar: Yashirilgan

### 2-reja: FitSite Growth -- $99/oy {#plan-2-fitsite-growth----99month}

**Maqsadli auditoriya**: Bitta joylashuvga ega shakllangan sportzallar

**Tavsif yorlig'i**:
- Nomi: FitSite Growth
- Tavsif: "Internetdagi ishtirokini kengaytirishga va yangi a'zolarni jalb qilishga tayyor shakllangan sportzallar uchun."

**Sayt shablonlari yorlig'i**:
- Mavjud shablonlar: Studio Essential va Gym Pro

**Cheklovlar**:
- Saytlar: 1
- Disk joyi: 5 GB
- Maxsus domen: Yoqilgan

**Pluginlar yorlig'i**:
- Starter’dagi hamma narsa, qo'shimcha ravishda:
- Band qilish plugin: Majburiy faollashtirish
- Galereya plugin: Majburiy faollashtirish
- Blog funksionalligi: Mavjud

**Yuqori va pastki rejaga o'tish yorlig'i**:
- Reja guruhi: FitSite Plans
- Mahsulot tartibi: 2

### 3-reja: FitSite Pro -- $199/oy {#plan-3-fitsite-pro----199month}

**Maqsadli auditoriya**: Bir nechta joylashuvga ega fitness tarmoqlari

**Tavsif yorlig'i**:
- Nomi: FitSite Pro
- Tavsif: "Bir nechta joylashuvga ega fitness brendlari uchun to'liq platforma."

**Sayt shablonlari yorlig'i**:
- Mavjud shablonlar: Uchala shablonning barchasi

**Cheklovlar**:
- Saytlar: 5 (har bir joylashuv uchun bittadan)
- Disk joyi: 20 GB
- Maxsus domen: Yoqilgan

**Pluginlar yorlig'i**:
- Growth’dagi hamma narsa, qo'shimcha ravishda:
- Barcha premium pluginlar: Majburiy faollashtirish

**Yuqori va pastki rejaga o'tish yorlig'i**:
- Reja guruhi: FitSite Plans
- Mahsulot tartibi: 3

## Reja guruhini sozlash {#setting-up-the-plan-group}

Reja guruhi mijozlar faqat FitSite rejalari oilasi ichida yuqori yoki pastki rejaga o'ta olishini ta'minlaydi. Har bir rejaning **Yuqori va pastki rejaga o'tish** yorlig'ida:

1. Uchala reja uchun **Reja guruhi**ni "FitSite Plans" qilib belgilang
2. **Mahsulot tartibi**ni 1 (Starter), 2 (Growth), 3 (Pro) qilib belgilang

Bu aniq yangilanish yo'lini yaratadi: Starter → Growth → Pro.

## Buyurtma qo'shimchalarini qo'shish {#adding-order-bumps}

Buyurtma qo'shimchalari -- to'lovni rasmiylashtirish vaqtida taklif qilinadigan qo'shimcha mahsulotlar. FitSite uchun quyidagilarni ko'rib chiqing:

- **Qo'shimcha saqlash paketi** ($19/oy) -- qo'shimcha 5 GB disk joyi
- **Ustuvor qo'llab-quvvatlash** ($29/oy) -- tezroq javob vaqtlari
- **Qo'shimcha sayt** ($39/oy) -- rejasi ruxsat berganidan ko'proq saytga muhtoj mijozlar uchun

Bularni Ultimate Multisite’da **Paket** turidagi mahsulotlar sifatida yarating va tegishli rejalar bilan bog'lang.

## Nega bu tuzilma ishlaydi {#why-this-structure-works}

- **Starter** kirish to'siqlarini olib tashlaydi -- past narx, sodda taklif, trenerlarni tezda internetga olib chiqadi
- **Growth** sportzallar haqiqatan so'raydigan xususiyatlarni qo'shadi -- band qilish, galereyalar, maxsus domenlar
- **Pro** ko'p joylashuvli qo'llab-quvvatlashga muhtoj yuqori qiymatli segmentga xizmat qiladi
- **Buyurtma qo'shimchalari** mijozlarga asosiy rejalarni murakkablashtirmasdan moslashtirish imkonini beradi
- **Aniq yangilanish yo'li** mijozlar ketib qolish o'rniga siz bilan birga o'sishini anglatadi

## Hozirgacha FitSite tarmog'i {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Bu darsda nimalarni qurdik {#what-we-built-this-lesson}

- Haqiqiy fitness biznes segmentlariga moslangan **uchta reja darajasi**
- Ultimate Multisite’ning plugin va shablon boshqaruvlari yordamida **xususiyatlarga kirishni cheklash**
- Aniq yangilanish yo'liga ega **reja guruhi**
- Qo'shimcha daromad uchun **buyurtma qo'shimchasi mahsulotlari**
- Texnik xususiyatlarga emas, mijoz qiymatiga asoslangan **narxlash tuzilmasi**

---

**Keyingi:** [6-dars: Ro'yxatdan o'tish tajribasi](lesson-6-checkout) -- fitness studiyasi egalarini to'lov qiluvchi mijozlarga aylantiradigan to'lovni rasmiylashtirish oqimini quramiz.
