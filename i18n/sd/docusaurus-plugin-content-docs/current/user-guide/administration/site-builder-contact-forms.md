---
title: سائٽ بلڊر رابطي فارمز
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# साइट بلڊر رابطي فارمز

Superdav AI Agent v1.10.0 ۾ چٽ چٽ ڪري سگهجي ٿو ته توهان Site Builder agent جو استعمال ڪندي، چیٽ انٽر فيس کي ئي کان رابطي فارم (contact form) ٺاهڻ جي صلاحيت حاصل ڪري سگهو ٿا. هي توهان کي چیٽ کان خارج ٿيندي ناهي هر صفحتي تي پورو ڪم ڪندڙ رابطي فارمز شامل ڪرڻ جي اجازت ڏئي ٿو.

## خلاصو (Overview) {#overview}

Site Builder جو رابطي فارم بنائڻ جو صلاحيت (`create_contact_form`) خود بخود توهان جي انسٹال هيٺ ڪري ٿو ته توهان ڪهڙا form plugin استعمال ڪيو آهي ۽ ان plugin جي بنيادي صلاحيتن جو استعمال ڪندي هڪ رابطي فارم ٺاهي ٿو. سمجهيل هيٺ ڏنل form plugins شامل آهن:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Assistant خود توهان جي سائيٽ تي موجود بهترين available form plugin کي چونڊي ڪندو ۽ ان plugin لاءِ مخصوص رابطي فارم ٺاهي ٿو.

## رابطي فارم ٺاهڻ (Creating a Contact Form) {#creating-a-contact-form}

Site Builder جو استعمال ڪندي هڪ رابطي فارم ٺاهڻ لاءِ:

1. WordPress admin ۾ **Gratis AI Agent** چیٽ پینل کي کُھل ڪريو.
2. چیٽ هيدر ۾ agent icon تي ڪلڪ ڪري **Site Builder** agent تي تبديل ٿيو.
3. رابطي فارم جو بيان ڪريو جيڪو توهان ٺاهڻ چاهيو ٿا. مثال طور:

   > "Contact page تي نالو، ايमेल، ميساج ۽ فون نمبر لاءِ فیلڊز (fields) شامل ڪريو."

   يا سڌي طرح:

   > "Contact page لاءِ هڪ رابطي فارم ٺاهيو."

4. Site Builder توهان لاءِ رابطي فارم ٺاهي ٿو ۽ هڪ shortcode واپس ڪندو جيڪو embed ڪرڻ لاءِ تيار هوندو آهي.

## جنريٽ ٿيل Shortcode جو استعمال (Using the Generated Shortcode) {#using-the-generated-shortcode}

Site Builder طرفان رابطي فارم ٺهڻ کان پوءِ، اهو هڪ shortcode واپس ڪري ٿو (مثال طور: `[contact-form-7 id="123"]`). توهان هيٺيون ڪارروائيون ڪري سگهو ٿا:

1. **صفحه يا پوسٽ ۾ embed ڪريو** — shortcode کي کاپی ڪريو ۽ block editor يا classic editor استعمال ڪندي ڪنهن به صفحو يا پوسٽ ۾ پیسٽ ڪريو.
2. **Site Builder جي ذريعي شامل ڪريو** — Site Builder کان پڇو ته اهو فارم خود هڪ خاص صفحتي تي شامل ڪري:

   > "Contact page تي رابطي فارم شامل ڪريو."

٣. **اس کي ٹیمپليٹ ۾ استعمال ڪريو** — جيڪڏهن توهان PHP سان آرام گذار ٿا، ته توهان سڌي اسڪرچ (shortcode) کي هڪ ٿيم ٹیمپليٽ فائل ۾ شامل ڪري سگهو ٿا.

## ڪنٽاڪٽ فارم کي ترقي ڏيڻ (Customizing the Contact Form) {#customizing-the-contact-form}

جڏهن Site Builder ڪنٽاڪٽ فارم ٺاهندي آهي، ته توهان ان کي اڳتي ترقي ڏئي سگهو ٿا:

### چیٽ انٽرफेस جي ذريعي {#via-the-chat-interface}

Site Builder کان پڇو ته فارم ۾ تبديلي ڪريو:

> "کونٽاڪٽ فارم کي موضوع (subject) جو فیلڊ شامل ڪرڻ ۽ ميساج جو فیلڊ لازمي (required) بڻائڻ لاءِ اپڊيٽ ڪريو."

Site Builder فارم کي اپڊيٽ ڪندو ۽ اپڊيٽ ٿيل اسڪرچ واپس ڪندو.

### فارم پليجن جي ڊيزين کي استعمال ڪندي (Via the Form Plugin's Admin Interface) {#via-the-form-plugins-admin-interface}

توهان فارم پليجن جي توهان جي سڌي setings ۾ به فارم کي ترقي ڏئي سگهو ٿا:

١. WordPress admin ۾ **Contact Form 7** (يا توهان جو نصب هجايو ڪيل فارم پليجن) تي وڃو.
٢. Site Builder طرفان ٺاهيل فارم کي منهن ڏيو.
٣. ضرورت بجي مطابق فارم جي فیلڊز، واليدايشن رولز ۽ ايميل نوٽيفڪيشن کي ترقي ڏيو.

## فارم پليجن ۽ مطابقت (Form Plugins and Compatibility) {#form-plugins-and-compatibility}

Site Builder خود هيءَ جو يقيني ڪري ٿو ته توهان جي سائيٽ تي ڪهڙو فارم پليجن نصب آهي ۽ ان کي ڪنٽاڪٽ فارم ٺاهڻ لاءِ استعمال ڪري ٿو. جيڪڏهن ڪيترائي فارم پليجن نصب آهن، ته Site Builder ان ترتيب ۾ انهن کي ترجيح ڏيندو آهي:

١. Contact Form 7
٢. WPForms
٣. Fluent Forms
٤. Gravity Forms

جيڪڏهن هيٺيون ڪا پليجن نصب نه آهن، ته Site Builder ڪنٽاڪٽ فارم ٺاهڻ کان اڳ ان کي نصب ڪرڻ جي سفارش ڪندو.

## ايميل نوٽيفڪيشن (Email Notifications) {#email-notifications}

Site Builder طرفان ٺاهيل ڪنٽاڪٽ فارمن ۾، ايميل نوٽيفڪيشن عام طور تي سائيٽءَ جو ادمنٽر کي پيهرا ڪرڻ لاءِ configure ٿيل هوندا آهن. توهان وصول ڪرڻ واري ايميل جي address ۽ نوٽيفڪيشن جو ميساج ترقي ڪري سگهو ٿا:

١. توهان جي فارم پليجن جي admin interface تي وڃو.
٢. Site Builder طرفان ٺاهيل فارم کي منهن ڏيو.
٣. ايميل نوٽيفڪيشن جي setings ۾ تبديلي ڪريو.

تفصيل تعليمات لاءِ، توهان جي فارم پليجن جي documentation ڏسڻ گهرجي:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## مثال استعمالৰ ক্ষেত্ৰ (Example Use Cases) {#example-use-cases}

### সৰল কন্টাক্ট ফৰ্ম (Simple Contact Form) {#simple-contact-form}

> "নাম, ইমেইল আৰু মেছেজ ফিল্ড থকা এটা সৰল কন্টাক্ট ফৰ্ম সৃষ্টি কৰক।"

### বহু-ধাপৰ ফৰ্ম (Multi-Step Form) {#multi-step-form}

> "যোগাযোগৰ তথ্যৰ বাবে এটা প্ৰথম ধাপ আৰু মেছেজ তথা পছন্দ কৰা যোগাযোগ পদ্ধতিৰ বাবে দ্বিতীয় ধাপ থকা এটা কন্টাক্ট ফৰ্ম সৃষ্টি কৰক।"

### অৱৰ্তী লজিক থকা ফৰ্ম (Form with Conditional Logic) {#form-with-conditional-logic}

> "এটা এনেকুৱা কন্টাক্ট ফৰ্ম সৃষ্টি কৰক যিয়ে ড্ৰপডাউনত ব্যৱহাৰকাৰৰ পছন্দৰ ওপৰত ভিত্তি কৰি বিভিন্ন ফিল্ড দেখুৱায়।"

### ফাইল আপলোড থকা ফৰ্ম (Form with File Upload) {#form-with-file-upload}

> "এটা এনেকুৱা কন্টাক্ট ফৰ্ম সৃষ্টি কৰক যিয়ে ব্যৱহাৰকাৰক এটা ফাইল বা সংযুক্তি আপলোড কৰিবলৈ অনুমতি দিয়ে।"

:::note
Superdav AI Agent v1.10.0 আৰু তাৰ পিছৰ সংস্কৰণত কন্টাক্ট ফৰ্ম নিৰ্মাণ কৰিব পাৰি। এই ক্ষমতাটো ব্যৱহাৰ কৰিবলৈ Site Builder agent টি সক্ৰিয় থকা হ'ব লাগিব।
:::
