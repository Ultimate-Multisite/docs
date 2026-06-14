---
title: څنګه د ډومین مېپینګ تنظیم کړئ
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# ডোমেইন ম্যাপিং কিভাবে কনফিগার করবেন (v2)

_**গুরুত্বপূর্ণ নোট: এই নিবন্ধটি Ultimate Multisite ভার্সন ২.x এর জন্য প্রযোজ্য।**_

একটি প্রিমিয়াম নেটওয়ার্কের অন্যতম শক্তিশালী বৈশিষ্ট্য হলো আমাদের ক্লায়েন্টদের তাদের সাইটগুলিতে একটি টপ-লেভেল ডোমেইন যুক্ত করার সুযোগ দেওয়া। কারণ, কোনটি বেশি পেশাদার দেখায়: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) নাকি [_**joesbikeshop.com**_? এই কারণেই Ultimate Multisite এই ফিচারটি সরাসরি অন্তর্ভুক্ত করে দিয়েছে, তৃতীয় পক্ষের প্লাগইন ব্যবহার করার প্রয়োজন নেই।

## ডোমেইন ম্যাপিং কী?

নাম যেমন বোঝায়, ডোমেইন ম্যাপিং হলো Ultimate Multisite-এর সেই ক্ষমতা যা একটি কাস্টম ডোমেইনের অনুরোধ গ্রহণ করে এবং সেই অনুরোধটিকে নেটওয়ার্কের সংশ্লিষ্ট সাইটের সাথে সংযুক্ত করে নির্দিষ্ট ডোমেইনটি যুক্ত করে।

### আপনার Ultimate Multisite নেটওয়ার্কে ডোমেইন ম্যাপিং কিভাবে সেটআপ করবেন

ডোমেইন ম্যাপিং কাজ করার জন্য আপনার দিক থেকে কিছু সেটিংস করা প্রয়োজন। সৌভাগ্যবশত, Ultimate Multisite আপনার কঠিন কাজটি স্বয়ংক্রিয়ভাবে করে দেয় যাতে আপনি সহজেই প্রয়োজনীয় শর্তগুলো পূরণ করতে পারেন।

Ultimate Multisite ইনস্টল করার সময়, উইজার্ডটি স্বয়ংক্রিয়ভাবে **sunrise.php** ফাইলটিকে নির্দিষ্ট ফোল্ডারে কপি এবং ইনস্টল করবে। এই ধাপটি সম্পন্ন না করা পর্যন্ত উইজার্ড আপনাকে এগিয়ে যেতে দেবে না।

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

এর মানে হলো, একবার Ultimate Multisite ইনস্টলেশন উইজার্ড আপনার নেটওয়ার্ক সেটআপ শেষ করলে, আপনি সাথে সাথেই কাস্টম ডোমেইন ম্যাপিং শুরু করতে পারবেন।

মনে রাখবেন, Ultimate Multisite-এ ডোমেইন ম্যাপিং বাধ্যতামূলক নয়। আপনার কাছে ওয়ার্ডপ্রেস মাল্টিসাইট নেটিভ ডোমেইন ম্যাপিং ফাংশন বা অন্য যেকোনো ডোমেইন ম্যাপিং সমাধান ব্যবহার করার বিকল্প রয়েছে।

که تاسو باید Ultimate Multisite د دامین مېپینګ (domain mapping) غیر فعال کړئ ترڅو د نورو دامین مېپینګ حلونو ته ځای ورکړئ، تاسو کولی شئ دا کار په **Ultimate Multisite > Settings > Domain Mapping** کې وکړئ.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

د دې انتخاب لاندې، تاسو کولی شئ **Force Admin Redirect** (Admin Redirect Force) هم وګورئ. دا کار درته اجازه ورکوي چې کنټرول کړئ که آیا د کلاینټانو کارونکي کولی شي خپل ایڈمن ډش‌بورد په خپل ځانګړي دامین او سابډومین کې ورته رامنځته کړي او یوازې په یو یې هم؟

که تاسو **Force redirect to mapped domain** (د مېپ شوی دامین ته قوي ریدي렉شن) غوره کړئ، نو ستاسو کارونکي فقط په خپل ځانګړي دامینونو باندې خوندې کولی شي چې خپل ایڈمن ډش‌بورد ورته رامنځته کړي.

**Force redirect to network domain** (د شبکه دامین ته قوي ریدي렉شن) انتخاب شوی کار دقیقاً پاته کیږي - ستاسو کارونکي یوازې په خپل سابډومین باندې ډش‌بورد ورته رامنځته کړي، حتی که دوی په خپل ځانګړي دامینونو کې کوشش وکړي چې ورسره لاگ شي.

او **Allow access to the admin by both mapped domain domain and network domain** (د دواړو مېپ شوي دامین او شبکه دامین له لارې ایڈمن ته ورسره کیدو اجازه ورکړئ) کار دوی ته اجازه ورکوي چې خپل ایڈمن ډش‌بورد سابډومین او ځانګړي دامینونو کې ورته رامنځته کړي.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

د ځانګړي دامین مېپ کولو دوه لارې دي. یوه یې دا ده چې د خپل شبکه ایڈمن ډش‌بورد له रूपमा د دامین نوم مېپ کړئ او دوهم یې د حساب صفحې تحت سابډسایت ایڈمن ډش‌بورد له لارې وکړئ.

خو پداسې کې چې تاسو ځانګړي دامین ته په خپل شبکه کې یو سابډسایت کې مېپ کولو پیل کوئ، تاسو باید ډاغه ډاغه **DNS settings** (د DNS تنظیمات) د دامین نوم په مناسب ډول تنظیم شوي وي.

###

### د دامین DNS تنظیماتو مناسب تنظیم کیدو تضمین

تا د دې کار وکړي، باید ډاغه یوه ډومین چې تاسو یې پلان لرئ، към IP د خپل شبکه (Network) هم اشاره کړي. یاد ولहोस् چې تاسو باید د شبکه IP هم ترلاسه کړئ - هغه IP د هغه ډوماین چې Ultimate Multisite върху یې نصب دی، نه د هغه IP د ډوماین چې تاسو یې پلان لرئ که یې تغییر ورکړئ. د یو ځانګړي ډوماینको IP ته په سراسولو لپاره، موږ وړاندیز کوو چې [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) ته راشي، د مثال په توګه.

د ډومین به یې په سمه توګه اضافه کړئ، تاسو باید **A RECORD** په خپل **DNS** تنظیم کې اضافه کړئ چې هغه **IP address** ته اشاره کړي. DNS مدیریت د مختلف ډوماین ريجې (registrar) ترمنځ ډېر توپیر لري، خو آنلاین ډېر Tutorials شته چې دا کار پوره کوي که تاسو " _Creating A Record on XXXX_ " په څیر وڅیړئ، چیرې چې XXXX ستاسو ډومین ريجې ده (مثال: " _Creating A Record on_ _GoDaddy_ ").

که تاسو په دې کار کې مشکل لرئ، **د خپل ډومین ريجې سپورټ سره اړیکه ونیسئ** او دوی به دا کار په دې برخې کې مرسته وکړي.

که تاسو پلان لرئ چې ستاسو کلاینټانو ته اجازه ورکړئ چې د خپل ځانګړي ډوماینونه یې تغییر ورکول، نو دوی باید دا کار خو بیا ونه وکړي. که دوی نشي کولی A Record جوړ کړي، نو دوی ته د دوی ريجې سپورټ نظام ته اشاره وکړئ.

### د ځانګړي ډومین د سوپر ადمن په توګه تغییر ورکول (Mapping custom domain name as Super Admin)

کله چې تاسو ستاسو شبکه کې سوپر ადمن په توګه لاگ دی، تاسو کولی شئ د **Ultimate Multisite > Domains** अन्तर्गत د ځانګړو ډوماینونو اضافه او مدیریت وکړئ.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

په دې صفحې ته، تاسو کولی شئ د پورته **Add Domain** د ګډ按钮 باندې کلیک وکړئ او دا یو مودل پټه (modal window) راوستي چې تاسو کېدای شئ **custom domain name**، هغه **subsite** چې غواړئ په هغه پرwendung custom domain name applies کړئ، او پر决定 کېږئ که آیا ستاسو هدف یې د **primary domain** نام ګرځول یا نه (نو یاد کړئ چې تاسو کولی شئ **مؤلتو دومینहरू** یوې subsite ته هم map کړئ).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

د ټول معلومات ورسره راوړلو وروسته، تاسو کولی شئ په منځ کې د تله **Add Existing Domain** د بوم پټه (button) باندې کلیک وکړئ.

دا هغه پروسه پیلوي چې ستاسو custom domain د DNS معلومات کیتایید او ترلاسه کولو لپاره عمل کوي. تاسو به په صفحې له وتلو کې یو لوګ هم وګورئ ترڅو تاسو ته 도와دلای شي چې دا پروسه کوم مراحل لري ورسره پیل کړئ. دا پروسه几 منځنی نومونه وخت اخلي چې پوره شي.

Ultimate Multisite v2.13.0 په دې هم خودکار ډول داخلي domain record جوړوي کله چې یو نوی site هغه host باندې جوړی کیږي چې باید د هر site لپاره یوه per-site domain تر نظر وي. که host د شبکه اصلي domain وي، یا یو له هغه shared checkout-form base domains څخه دی چې په **Site URL** کې configure شوي دي، نو خودکار map شوی domain record منځ ته راوړل کیږي ترڅو share base domain هر هغه site لپاره هم لوړې وي چې یې کار کوي.

که Stage یا وضعیت د **Checking DNS** له بدلون **Ready** ته وایي که ټول شیوه په سمه توګه تنظیم شوي دي.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

که تاسو د domain name باندې کلیک وکړئ، تاسو کولی شئ په هغه کې یو څه alternativen وګورئ. بیا یې په چټکۍ سره وګورئ:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**مرحله (Stage):** دا مرحله ده هست که دامنه در اون قرار داره. وقتی شما برای اولین بار دامنه اضافه می‌کنید، احتمالاً روی مرحله **بررسی DNS (Checking DNS)** خواهد بود. این فرآیند بررسی می‌کنه که ورودی‌های DNS درست هستن و تأیید می‌کنه. بعد از اون، دامنه به مرحله **بررسی SSL (Checking SSL)** منتقل می‌شه. Ultimate Multisite چک می‌کنه که آیا دامنه SSL داره یا نه و دامنه شما رو به عنوان **آماده (Ready)** یا **آماده بدون SSL (Ready without SSL)** دسته‌بندی می‌کنه.

**سایت (Site):** زیردامنه که با این دامنه مرتبط هست. دامنه‌ای که نگاشت شده، محتوای این سایت خاص رو نمایش می‌ده.

**فعال (Active):** شما می‌توانید این گزینه را روشن یا خاموش کنید تا دامنه فعال یا غیرفعال بشه.

**آیا دامنه اصلی است؟ (Is Primary Domain?):** مشتریان می‌توانند برای هر سایت از بیش از یک دامنه نگاشت شده استفاده کنند. از این گزینه برای انتخاب اینکه آیا این دامنه برای آن سایت خاص، دامنه اصلی است یا خیر، استفاده کنید.

**امن است؟ (Is Secure?):** با اینکه Ultimate Multisite قبل از فعال کردن آن بررسی می‌کنه که آیا دامنه گواهی SSL دارد یا نه، شما می‌توانید به صورت دستی انتخاب کنید که دامنه را با وجود یا بدون گواهی SSL بارگذاری کنید. توجه داشته باشید که اگر وب‌سایت شما گواهی SSL نداشته باشد و سعی کنید آن را مجبور به بارگذاری با SSL کنید، ممکن است خطاهایی دریافت کنید.

### نگاشت نام دامنه سفارشی به عنوان کاربر زیرساخت سایت (Mapping custom domain name as Subsite user)

مدیران زیرساخت سایت هم می‌توانند نام‌های دامنه سفارشی را از داشبورد مدیریت زیرساخت سایت خود نگاشت کنند.

اول، باید مطمئن شوید که این گزینه را در تنظیمات **Domain mapping** فعال کرده‌اید. اسکرین‌شات زیر را ببینید.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

شما همچنین می‌توانید این گزینه را در سطح **Plan** یا گزینه‌های محصول در بخش **Ultimate Multisite > Products** تنظیم یا پیکربندی کنید.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

کله چې د کوم یوو دا خنډونه فعال شي او یوه ساب‌سایت کارمند اجازه ورکړل وي چې ځانګړي ډومین نومونه (custom domain names) جوړ کړي، نو هغه ساب‌سایت کارمند باید په **Account** صفحې زیر **Domains** یو metabox وګوري.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

کاربنۍ کولی شي د **Add Domain** د ګډ按钮 باندې کلیک کړي او دا یوه modal window راټولوي چې ځینې لارښوونې هم لري.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

بیا کاربنۍ کولی شي **Next Step** باندې کلیک کړي او د ځانګړي ډومین نوم اضافه کولو ته پرمختنه وکړي. دوی کولی شي هم غوره کړي چې دا اصلي ډومین وي یا نه وي.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

د **Add Domain** باندې کلیک کول د ځانګړي ډومین نوم کیتکارولو (verifying) او د DNS معلومات ترلاسه کولو پروسه پیلوي.

### د ډومین سینکینګ (Domain Syncing) په اړه

ډومین سینکینګ یو پروسه ده چې Ultimate Multisite هغه ځانګړی ډومین نوم د کارول لپاره د Ihr هوستینګ حساب په یوه اضافي ډومین като اضافه کوي.

د ډومین سینکینګ له خودی څخه به پیل شي که د Ihr هوستینګ فراہم کنند سره د Ultimate Multisite د ډومین مَپینګ (domain mapping) خوندونو سره همغږي وي. اوسني وخت کې، دا هوستینګ پلي کولو شامل دي _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ او _Cpanel._

کله چې یو هوستینګ فراہم کنند همغږي فعال وي، نو Ultimate Multisite کولی شي د تازه جوړ شوي سایتونو لپاره د فراہم کنند اړوند DNS یا ساب‌دومین (subdomain) جوړولو کار ته هم پیغام ورکړي. که کومه همغږي دا کار نه لروي، نو پس منظر کې موندل شوی کار (background job) وې او له دې څخه د "no-op queue entries" څخه د فرار لپاره هغه کار ورته نه کیږي. د مَپ شوي ډومینونو لپاره د DNS او SSL پریکړې په نورو ډومین مرحله کې هم دوام کوي.

تاسو باید د دې integration په Ultimate Multisite تنظیماتو تحت **Integration** ټب کې فعال کړئ.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_نوټ: که د Ihrې هاستینګ کاراندنی د دې په نوملیکونو کې نه وي، **تاسو باید manuall sync یا د دامین نوم به اضافه کړئ** ترڅو د خپل هاستینګ حساب ته ورسره شي._
