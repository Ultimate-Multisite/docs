---
title: د سایت جوړولو اړیکې فرمونه
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# رابط جوړو صفحه تماس (Site Builder Contact Forms) {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 ته اجازه ورکوي چې د Site Builder agent له لارې مستقیل پیغامونه (chat interface) څخه تماسونو formu جوړ کړئ. دا تاسو ته په چات کې نرسېدلی بدون هیڅ ځای ونه، هر صفحه ته پوره کارکړې تماسونو formu اضافه کولو اجازه ورکوي.

## پرمختګ (Overview) {#overview}

Site Builder د تماسونو formu جوړولو وړتیا (`create_contact_form`) خودکارانه ستاسو نصب شوي formu پلاگین (form plugin) را پیژني او له هغه پلاگین اصلي قابلیتونو په کارولو سره یو تماسونو formu جوړوي. پام وړ formu پلاگینونه شامل دي:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

د助手 خودکارانه ستاسو د سایتमा غوره موجود formu پلاگین انتخابوي او هغه له هغې مطابق یو تماسونو formu جوړوي.

## تماسونو formu جوړول (Creating a Contact Form) {#creating-a-contact-form}

ستاسو Site Builder څخه تماسونو formu جوړولको लागि:

۱. په WordPress admin کې **Gratis AI Agent** چات پینل खोल्नुहोस्.
۲. چات هېدرۍ (chat header) کې د agent icon باندې کلیک गरेर **Site Builder** ته بدل کړئ.
۳. هغه تماسونو formu چې تاسو یې جوړول غواړئ، په اړه وضاحت ورکړئ. 써 مثالونه:

   > "په Contact page کې د نوم، ایمیل، پیغام او تلیفون شمیر لپاره فیلدا اضافه کړئ."

   یا په ساده ډول:

   > "Contact page لپاره یو تماسونو formu جوړ کړئ."

۴. Site Builder هغه تماسونو formu جوړوي او एستاسو د埋دو embed کولو لپاره یوه shortcode (کوډه) را اخاري.

## جوړ شوې Shortcode څخه کارول (Using the Generated Shortcode) {#using-the-generated-shortcode}

د Site Builder له تماسونو formu جوړولو وروسته، دا یو shortcode (مفهومیت: for example, `[contact-form-7 id="123"]`) را اخاري. تاسو کولی شئ:

۱. **په یوه صفحه یا post کې یې embed کړئ** — shortcode kopī کړئ او block editor یا classic editor په کارولو سره په هر صفحه یا post کې یې paste کړئ.
۲. **د Site Builder له لارې اضافه کړئ** — Site Builder ته غواړئ چې formu خودکارانه یو ځانګړي صفحه ته اضافه کړي:

   > "Contact page ته تماسونو formu اضافه کړئ."

۳. **دې ته قالب کې ব্যৱহাৰ কৰক** — যদি আপুনি PHP লৈ আৰাম থাকে، আপুনি এই shortcode টা থিম টেম্পলেট ফাইলত যোগ কৰিব পাৰে।

## যোগাযোগ फारমটো সলনি কৰা (Customizing the Contact Form) {#customizing-the-contact-form}

Site Builder লেapar যোগাযোগ फारমটো তৈয়াৰ কৰাৰ পিছত, আপুনি ইয়াক আৰু অধিক সলনি কৰিব পাৰে:

### চ্যাট ইন্টারফেসৰ জৰিয়তে {#via-the-chat-interface}

আপুনি Site Builder-ক फारমটো সলনি কৰিবলৈ ক'ব পাৰে:

> "যোগাযোগ फारমটো আপডেট কৰক যাতে এটা বিষয় (subject) ফিল্ড যোগ হয় আৰু মেছেজ ফিল্ডটো বাধ্যতামূলক (required) কৰি ৰখা হয়।"

Site Builder আপোনাৰ বাবে फारমটো আপডেট কৰিব আৰু আপডেট কৰা shortcode টা ঘূৰাই দিব।

### फारম প্লাগইনৰ অ্যাডমিন ইন্টারফেসৰ জৰিয়তে {#via-the-form-plugins-admin-interface}

আপুনি আপোনাৰ form plugin-ৰ সেটিংছতো এই फारমটো ডাইজেক্টে সলনি কৰিব পাৰে:

১. WordPress admin ত **Contact Form 7** (বা আপুনি থকা form plugin) লৈ যাওক।
২. Site Builder-এ তৈয়াৰ কৰা फारমটো বিচাৰক।
৩. প্ৰয়োজন অনুসৰি ফিল্ডবোৰ, ভ্যালিডেশ্বন নিয়ম আৰু ইমেইল notificaton গুলো এডিট কৰক।

## फारম প্লাগইন আৰু সামঞ্জস্যতা (Form Plugins and Compatibility) {#form-plugins-and-compatibility}

Site Builder আপোনাৰ সাইটত কোন form pluginInstalled আছে সেয়া স্বয়ংক্রিয়ভাৱে চিনাক্ত কৰে আৰু যোগাযোগ फारমটো তৈয়াৰ কৰিবলৈ তাক ব্যৱহাৰ কৰে। যদি একাধিক form plugin থাকে, Site Builder এই অনুৰাজ কৰে:

১. Contact Form 7
২. WPForms
৩. Fluent Forms
৪. Gravity Forms

যদি এইবোৰ প্লাগইনবোৰৰ ভিতৰত কোনোটাওInstalled নহয়, Site Builder যোগাযোগ फारমটো তৈয়াৰ কৰাৰ আগতে এটা Install কৰিবলৈ পৰামৰ্শ দিব।

## ইমেইল notificaton (Email Notifications) {#email-notifications}

Site Builder-এ তৈয়াৰ কৰা যোগাযোগ फारমবোৰ ডিফল্টভাৱে সাইট অ্যাডমিনিষ্ট্ৰে ইমেইল notificaton পঠিয়াবলৈ কনফিgur কৰা থাকে। আপুনি প্রাপক ইমেইল এড्रेस আৰু notificaton মেছেজটো সলনি কৰিব পাৰে:

১. আপোনাৰ form plugin-ৰ admin interface ত যাওক।
২. Site Builder-এ তৈয়াৰ কৰা फारমটো বিচাৰক।
৩. ইমেইল notificaton সেটিংছবোৰ এডিট কৰক।

বিস্তারিত নিৰ্দেশনাৰ বাবে, আপোনাৰ form plugin-ৰ documentation লওক:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## مثالونه استعمالات (Example Use Cases) {#example-use-cases}

### ساده رابطي फारम (Simple Contact Form) {#simple-contact-form}

> "اسم، ایمیل و پیغام کے لیے ایک سادہ رابطہ فارم بنائیں۔"

### کثیر مرحلہ فارم (Multi-Step Form) {#multi-step-form}

> "ایک ایسا رابطہ فارم بنائیں جس میں معلومات کے لیے پہلا قدم اور پیغام اور ترجیحی رابطے کے طریقے کے لیے دوسرا قدم ہو۔"

### شرائط پر مبنی فارم (Form with Conditional Logic) {#form-with-conditional-logic}

> "ایسا رابطہ فارم بنائیں جو ڈراپ ڈاؤن میں صارف کی انتخاب کی بنیاد پر مختلف فیلڈز دکھائے۔"

### فائل اپ لوڈ والا فارم (Form with File Upload) {#form-with-file-upload}

> "ایسا رابطہ فارم بنائیں جس سے صارفین فائل یا منسلکہ اپ لوڈ کر سکیں۔"

:::note
Contact form بنانے کا اختیار Superdav AI Agent v1.10.0 اور اس کے بعد دستیاب ہے۔ اس صلاحیت کو استعمال کرنے کے لیے سائٹ بلڈر ایجنٹ فعال ہونا ضروری ہے۔
:::
