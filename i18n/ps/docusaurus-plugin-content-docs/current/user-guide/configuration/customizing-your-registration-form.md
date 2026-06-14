---
title: د خپل رეგისტრاسیون فرم تنظیمول
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# داسې ثبتي نامې във فرمت جوړول

تا چې ستاسو شبکه ورسندونکو نورو WordPress platform باندې بنا شوی SaaS ها کنګینونو له फरक ښکاره کړي، Ultimate Multisite تاسو ته خپل ثبتي نامې او لاگيني صفحات **Checkout Forms** خپله جوړولو اجازه ورکوي.

که څه هم دوی نوی کارندونکو ته مختلف لارې آزمawana لپاره آسان او انعطاف وړ तरیا е, основно د شخصي ثبتي نامو فرمټونه جوړولको लागि प्रयोग کیږي. دا مقاله تاسو ته ښیي چې څنګه یې کولی شئ.

## لاگيني او ثبتي نامې صفحات:

د Ultimate Multisite نصب کولو وروسته، دا په ستاسو اصلي سایتमा خودکار لاگيني او ثبتي نامې صفحات جوړوي. تاسو هر کله د **Ultimate Multisite > Settings > Login & Registration** صفحه ته ورته ځه کولی شئ ترڅو د دې پیشټې بدل کړئ.

![Login and Registration settings page](/img/config/settings-general.png)

دا لاگيني او ثبتي نامې تنظیمات صفحې د پوره توضیحات دی:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

د **Login & Registration** صفحه کې تاسو کولی شه هر یو انتخاب ته وګورئ چې تاسو یې بدلولی شئ:

  * **Enable registration (ثبتي نامې فعال کول):** دا انتخاب ستاسو شبکهमा ثبتي نامو فعالیت ورکول یا غیر فعال کولو لپاره کار کوي. که دا وایله بند شي، ستاسو کارندونکي نشته کولی چې د ستاسو محصولاتو लागि ثبتي نامې وکړي او اشتراک وکړي.

  * **Enable email verification (ای میل کیتکاریکړې فعال کول):** که دا وایله فعال وي، نو هغه کارندونکي چې وړیا پلان یا آزمویني دوره لري لخوا اشتراک کوي، دوی ته یو کیتکاریکړې ایمیل ترلاسه کیږي او ستاسو ویبسایټونه جوړولको लागि باید د کیتکاریکړې لینک باندې کلیک وکړي.

* **صفحې د راټولولو پرمختیا (Default registration page):** دا هغه صفحې ده چې د راټولولو لپاره معمول دی. دا صفحه باید په خپل ویبسایت کې نشته وي او یو راټولولو فرم (که تاسو یې چا د محصولاتو سبسکرایب کولو لپاره کار فرم هم ویلئ) لري. تاسو کولی شئ هر څومره راټولولو صفحات او چک اوټ فورم جوړ کړئ، خو یاد کړئ چې باید چک اوټ فورمको shortcode په راټولولو صفحه کېใส่ کړئ، نه ورそうで دا ښکられない.

* **د ځانګړي لوګین صفحې کارول (Use custom login page):** دا خيار تاسو ته اجازه ورکوي چې د معمول `wp-login.php` داسې بدل شوي لوګین صفحه کارولی. که دا خيار فعال کړئ، تاسو کولی شئ غوره کړئ چې د **Default login page** خيار (د دې فورمه په دوه) کې کومه صفحه د لوګین لپاره کارولای.

* **اصلي لوګین URL مخکې کول (Obfuscate the original login url (wp-login.php))**: که تاسو اصلي لوګین URL مخکې کول غواړئ، تاسو کولی شئ دا خيار فعال کړئ. دا د brute-force attack مخنیوي لپاره ګټور دی. که دا خيار فعال وي، Ultimate Multisite کله چې کاربری هڅه وکړي چې اصلي `wp-login.php` لینک ته ورسره شي، 404 error ښایي.

* **مختصر وخت د سایت په راټولولو کېدو (Force synchronous site publication)**: کله چې یو مشتری په یوه شبکه کې محصول سبسکرایب کړي، نو نوي پېنډه سایت باید بلې واقعي شبکه سایت ته بدونه شي. دا راټولولو پروسه له Job Queue له لارې، غیر همزمان (asynchronously) پیل کیږي. که تاسو دا خيار فعال کړئ، نو مجبور خواهید کړ چې راټولولو د ثبت کولو په عین ذات وخت کې ورته درخواست کې پیل شي.

خاور اوس، بیا ورته لوګین او راټولولو پروسې ته اړتیا ولغو شوي ترڅو نورو خيارو ته وګورئ. دوی په همینو **Other options** کې دي چې له یوې لوګین او راټولولو صفحه کې دي:

* **معمولی نقش (Default role):** دا هغه نقش دی چې د ثبت کولو فرآیند وروسته ستاسو کارونکي په خپل ویبسایت کې به وي.

* **Jumper فعال کړئ:** دا آپ ایڈمن ایریا کې Jumper شارټکٽ کي فعالويکوي. Jumper د مدیرانو ته اجازه ورکوي چې په هر ډول منو وېش پرته، بله هم Ultimate Multisite سکرینونه، شبکه اوټليټونه، او نورو پام وړ ځایونو ته په چټکۍ سره ځي. که تاسو غواړئ دا چټک نیوولۍ وسیله له مدیرانو رابطې څخه پټ کړئ، نو یې غیر فعال کړئ.

* **کارونکي هم اصلي سایتमा اضافه کړئ:** د دې آپشن فعال کول کارونکي د ثبت کولو فرآیند وروسته په ستاسو شبکه اصلي سایت کې هم اضافه کوي. که تاسو دا آپشن فعال کړئ، نو د ستاسو ویب پاڼې پر دې کارونکو لپاره **default role** ټاکلو یو آپشن هم په دوه یې ښکاره کیږي.

* **چند اکاونه فعال کړئ:** اجازه ورکړئ چې کارونکي ستاسو شبکه کې مختلف سایتونو ته هم سره ای میل اړیکه لري. که دا آپشن غیر فعال وي، نو ستاسو کليان د ستاسو شبکه پر نورو ویب پاڼو باندې په عیني ای میل اړیک سره اکاونه جوړول نشته کولی.

او دا ټول هغه آپشنونه دي چې تاسو یې له لاگین او ثبتولو لپاره تنظیمولی شئ! یاد ورکړئ چې وروسته له ترمیم کولو وروسته خپل تنظیمات محفوظ کړئ.

## د ډیری ثبتولو فرمونو کارول:

Ultimate Multisite 2.0 یو checkout form editor وړاندې کوي چې تاسو ته اجازه ورکوي چې هر ډول فرمونه جوړ کړئ، چې مختلف felډونه، وړاندې شوي محصولات او نور څه لري.

د لاگین او ثبتولو صفحات په شورتکډونو سره هم پټ دي: د لاگین صفحه کې **[wu_login_form]** او د ثبتولو صفحه لپاره **[wu_checkout]**. تاسو کولی شئ د ثبتولو صفحه له لارې بɚ جوړ کړئ یا جوړ کړئ.

د دې کارول لپاره، ته باید په چپ اړخ کې **Checkout Forms** منو ته去ږئ.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

په دې صفحه کې، تاسو کولی شئ ټول هغه checkout forms وګورئ چې ستاسو دي.

که تاسو یو نوی جوړ کړئ، نو ستا صفحه اوپته **Add Checkout Form** باندې کلیک وکړئ.

تاسو کولی شئ د دې درته سهره یوه trinکه، مرکزي trinke، یا خالی ترټولو خړپ انتخاب کړئ. بیا کلیک وکړئ ترڅو **د ایډیټر ته لاړ شئ**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

په بل ډول، تاسو کولی شئ هغه فارم چې ورته لرئ یې په د نومونو زیرولو یا複製 کولو لپاره تر او نشته والی انتخاب وکړئ. তাত، تاسو به هم امکانات وموندئ چې فارمको shortcode کپی کړئ یا فارم پاک کړئ.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

که تاسو single step یا multi-step انتخاب کړئ، د چاکഔټ فارم له بنسټیز trinko سره پرې پُر کیږي ترڅو کار وکړي. بیا، که غواړئ، تاسو کولی شئ ورته اضافي trinکو اضافه کړئ.

### د چاکഔټ فارم ترمیمول:

لکه څنګه چې موږ پدیش خبره کړې و، تاسو کولی شئ د مختلف کارونو لپاره چاکഔټ فارم جوړ کړئ. په دې مثال کې موږ به د ثبتولو فارم باندې کار وکړو.

د چاکഔټ فارم ایډیټر ته لاړېدای، خپل فارم یو نوم ورکړئ (چې یوازې داخلي کورنۍ مرجع لپاره کار کیږي) او یو slug (که د shortcodes جوړول لپاره کار دی).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

فارمو له trinko او فیلدو څخه جوړ شوي دي. تاسو کولی شئ د **Add New Checkout Step** باندې کلیک کولو وسیله ورکړئ ترڅو یو نوی trinke اضافه کړئ.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

په مودل ونډ کې په пърو ټاب کې، خپل فارمको trinko محتوا پُر کړئ. ورته ID، نوم او توضیحات ورکړئ. دا شیان ډېر داخلي کارونه لپاره کار کیږي.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

بیا، trinko د ښودلو (visibility) تنظیم کړئ. تاسو کولی شئ تر **Always show**، **Only show for logged in users** یا **Only show for guests** ترمنځ انتخاب وکړئ.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

دربار، داسه چې ستپको stil تنظیم کړئ. دا اختیاری خانې دي.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

اوس، وخت راغلی چې ورته په пърو کې ستپونه خانې اضافه کړو. ستا انتخاب गर्नुहोस् **Add New Field** او هغه ډول انتخاب کړئ چې تاسو یې غواړئ.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

مخکې هر خانې مختلف پارامټرو لري چې باید پوره شي. د دې په لومړۍ ننوتلو لپاره، موږ به **Username** خانې غوره کوو.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

ستاسو کولی شئ هر هغه ستپونه او خانې اضافه کړئ چې تاسو یې غواړئ. د خپلو کلاینټانو لپاره محصولات ښودل، له **Pricing Table** خانې کار وکړئ که تاسو غواړئ چې دوی یو غوره کړي. که تاسو غواړئ چې ستاسو کلاینټان قالب (template) غوره کړي، نو **Template Selection** خانې اضافه کړئ او ورته.

_**نوت:** که تاسو د خپل چیک آؤټ فورم جوړښت وروسته محصول جوړ کړئ، نو تاسو باید محصول په Pricing table سټشن کې اضافه کړئ. که تاسو دا نه اضافه کړئ، نو ستاسو کلاینټانو ته ثبت کولو صفحه کې محصول ښودل نشي._

_**نوت ۲:** Username، email، password، site title، site URL، order summary، payment، او submit button د چیک آؤټ فورم جوړولو لپاره لازم خانې دي._

د خپل چیک آؤټ فورم باندې کار کولو په جریان کې، تاسو کولی شئ هم **Preview** بټ استعمال کړئ ترڅو وګورئ چې ستاسو کلاینټان فورم څنګه ویني. تاسو کولی شئ د موجود کارونکي (existing user) اوเยี่ยมونکي (visitor) په توګه alternatve هم وکړئ.

![Checkout form preview button on the checkout form editor](/img/config/checkout-form-preview-button.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-preview-modal.png)

د بیا، په **Advanced Options** کې تاسو کولی شئ پیغام د **Thank You** صفحې لپاره تنظیم کړئ، د konversions (تغییرات) رቕن لپاره snippetونه اضافه کړئ، خپل checkout form ته custom CSS اضافه کړئ یا یې ځینې برخو ته محدود کړئ.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

ستاسو checkout form تاسو کولی شئ د دې کارول لپاره په د ښي اړخ کې دا option فعال یا غیر فعال کړئ، یا یې permanent (داسې نه وي) حذف کړئ.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

خپل checkout form ته هم save کولایئ!

![Save Checkout Form button](/img/config/checkout-form-save.png)

ستاسو form د shortcode ترلاسه کولو لپاره، **Generate Shortcode** باندې کلیک وکړئ او هغه نتیجه چې په modal window کې ښودل کیږي کپی کړئ.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Note:** تاسو باید دا shortcode خپل registration page ته اضافه کړئ ترڅو دا checkout form یې তাত اضافه شي._

## د URL parameters له لارې محصولات او templates را انتخابول:

که تاسو غواړئ چې د خپل محصول لپاره customized pricing tables جوړ کړئ او په checkout form کې هغه محصول یا template precedence (پہلی انتخاب) کړئ چې ستاسو کلاینټ د ستاسو د قیمت کولو جدول یا templates صفحه څخه غوره کوي، نو تاسو کولی شئ د دې لپاره URL parameters کارولی شئ.

### **د plans لپاره:**

رته **Ultimate Multisite > Products > Select a plan** ته لاړ شئ. تاسو باید په صفحې اوپته **Click to copy Shareable Link** د بټ وګورئ. دا هغه لینک دی چې تاسو یې کارولو لپاره کاروئ ترڅو ستاسو checkout form کې دا ځانګړی plan precedence کړئ.

![Product page with shareable link button](/img/config/products-list.png)

یاد رکجو، دا اشتراک কৰা লিংকটো কেৱল **Plans** বা আঁচনিৰ বাবেহে বৈধ। আপুনি পেকেজ বা সেৱাৰ বাবে এইاشتৰাংক ব্যৱহাৰ কৰিব নোৱাৰিব।

### টেমপ্লেটৰ বাবে:

যদি আপোনাৰ checkout form-ত আগতীয়াভাৱে সাইট টেমপ্লেটবোৰ পছন্দ কৰিব বিচাৰে, তেন্তে আপুনি registration page URL-ত **?template_id=X** এই parameterটো ব্যৱহাৰ কৰিব পাৰে। "X" টাৰ ঠাইত **site template ID number**টো ৰ বদল কৰিব লাগিব। এই নম্বৰটো পাবলৈ, **Ultimate Multisite > Sites** ত যোৱা।

আপুনি যি site templateটো ব্যৱহাৰ কৰিব বিচাৰে তাৰ তলত থকা **Manage**-এ ক্লিক কৰক। আপুনি SITE ID নম্বৰটো দেখিব। এই নির্দিষ্ট site templateটো checkout form-ত আগতীয়াভাৱে পছন্দ কৰিবলৈ কেৱল এই নম্বৰটো ব্যৱহাৰ কৰক। আমাৰ ক্ষেত্ৰত, URL parameterটো হ'ব **?template_id=2**।

![Sites list showing site template ID](/img/config/site-templates-list.png)

ধৰোঁ suppose আপোনাৰ নেটৱৰ্কৰ websiteটো [**www.mynetwork.com**](http://www.mynetwork.com) আৰু আপোনাৰ checkout form থকা registration pageটো **/register** পেজত আছে। এই site template আগতীয়াভাৱে পছন্দ কৰা সম্পূৰ্ণ URL টো যেন লাগিব [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**]।

আৰু যদি আপুনি পেকেজ আৰু টেমপ্লেট দুয়োতো checkout form-ত আগতীয়াভাৱে পছন্দ কৰিব বিচাৰে, তেন্তে আপুনি কেৱল planটোৰ shareable link কপি কৰি শেষত template parameterটো পেষ্ট কৰিব লাগিব। ই যেন লাগিব [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**]।
