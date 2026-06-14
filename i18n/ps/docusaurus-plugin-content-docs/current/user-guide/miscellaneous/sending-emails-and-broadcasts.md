---
title: پېژندل او BROADCASTونه پېژندل
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# ایمیلونه او پخش wiadomości (v2)

_**مهم نکته: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد.**_

Ultimate Multisite یه قابلیت داره که می‌تونی با فرستادن ایمیل به کاربر خاص یا گروهی از کاربران، و همچنین ارسال اطلاعیه‌ها روی داشبورد ادمین اون‌ها، با مشتریانت ارتباط برقرار کنی تا اطلاعیه‌های مهم رو پخش کنی.

## اضافه کردن اطلاعیه‌های ادمین به داشبورد مشتریان با Broadcasts

با استفاده از قابلیت broadcast در Ultimate Multisite، می‌تونی **اطلاعیه‌های ادمین** رو به داشبورد ادمین زیرسایت کاربر خود اضافه کنی.

این کار خیلی مفید است اگه نیاز داری یه اطلاعیه‌ای مثل نگهداری سیستم یا معرفی محصولات و خدمات جدید به کاربران فعلی‌ات بدی. اینطوری اطلاعیه ادمین روی داشبورد کاربر نمایش داده می‌شه.

<!-- Screenshot unavailable: نمایش broadcast اطلاعیه ادمین در داشبورد زیرسایت مشتری -->

برای شروع یک اطلاعیه ادمین، برو به داشبورد ادمین شبکه خود و زیر منوی **Ultimate Multisite**، گزینه **Broadcasts** رو پیدا خواهی کرد.

![صفحه لیست Broadcasts در Ultimate Multisite admin](/img/admin/broadcasts-list.png)

تو می‌تونی broadcast‌های موجود رو ویرایش کنی:

![رابط ویرایش broadcast](/img/admin/broadcast-edit.png)

از این صفحه، روی دکمه **Add Broadcast** در بالا کلیک کن.

این کار پنجره مودال Add broadcast رو باز می‌کنه که می‌تونی انتخاب کنی چه نوع broadcasti رو می‌خوای بفرستی.

ادامه بده و **Message** رو انتخاب کن بعد روی دکمه **Next Step** کلیک کن.

![پنجره مودال add broadcast با گزینه Message انتخاب شده](/img/admin/broadcast-add-message.png)

پنجره بعدی ازت می‌پرسه که یا **Target customer** (مشتری هدف) رو انتخاب کنی یا **Target product** (محصول هدف). توجه کن که می‌تونی بیش از یک کاربر یا بیش از یک محصول را انتخاب کنی.

د کارولو یا محصولको खोजी गर्न तपाईंले फिल्ड भित्र कीवर्ड टाइप गर्न सुरु गर्नुपर्छ।

**Message type** फिल्ड अन्तर्गत, तपाईंले सूचनाको रङ छान्नु सक्नुहुन्छ। यसले तपाईंको सन्देशको जरुरीतालाई जोड दिन्छ।

त्यसपछि तपाईं **Next Step** मा क्लिक गर्न सक्नुहुन्छ।

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

अर्को विन्डोमा तपाईंले विषय (subject) र प्रयोगकर्ताहरूलाई प्रसारण गर्न चाहनुभएको सामग्री/सन्देश प्रविष्ट गरेर आफ्नो सन्देश लेख्न सुरु गर्न सक्नुहुन्छ।

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

आफ्नो सन्देश बनाएपछि, तपाईं **Send** बटन थिच्न सक्नुहुन्छ।

यति नै हो। एडमिन सूचना तुरुन्तै तपाईंको प्रयोगकर्ताको ड्यासबोर्डमा देखिनुपर्छ।

## आफ्ना ग्राहकहरूलाई इमेल पठाउने

Ultimate Multisite प्रसारण सुविधा प्रयोग गरेर, तपाईं आफ्नो प्रयोगकर्ताहरूलाई इमेल पठाउन सक्नुहुन्छ। तपाईंसँग त्यो इमेल केवल विशिष्ट प्रयोगकर्ताहरूलाई पठाउने वा उनीहरूले कुन उत्पादन वा प्लान अन्तर्गत सदस्यता लिएका छन् त्यसको आधारमा कुनै विशिष्ट प्रयोगकर्ता समूहलाई लक्षित गर्ने विकल्प छ।

इमेल प्रसारण सुरु गर्न, आफ्नो नेटवर्क एडमिन ड्यासबोर्डमा जानुहोस् र Ultimate Multisite मेनु अन्तर्गत, तपाईंले Broadcast विकल्प फेला पार्नुहुनेछ।

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

यस पृष्ठबाट, माथि **Add broadcast** बटनमा क्लिक गर्नुहोस्।

यसले Add broadcast मोडल विन्डो खोल्छ जहाँ तपाईं कुन प्रकारको प्रसारण पठाउन चाहनुहुन्छ त्यो छान्नु सक्नुहुन्छ। अगाडि बढ्नुहोस् र **Email** चयन गरेर **Next Step** बटन थिच्नुहोस्।

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

अर्को विन्डोले तपाईंलाई **Target customer** वा **Target product** मध्ये कुनै एक सोध्नेछ। ध्यान दिनुहोस् कि तपाईं एउटैभन्दा बढी प्रयोगकर्ता वा एउटैभन्दा बढी उत्पादन चयन गर्न सक्नुहुन्छ।

کاربر یا محصول دۆزیت بۆ گەڕان، پێویستە لەناو فیلدەکەدا دەستپێبکەیت بە تایبەتکردنی ئەو وشەیەی کە دەگەڕێیتەوە.

کاتێک ناوبەندییەک یان بەرهەم دیاری کرد، دەتوانیت **Next Step** بکەیت.

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

پەڕەی دووەم ئەو شوێنە کە لەوێ دەتوانیت دەستپێبکەیت بە نووسینی ئیمێلکەت بە پڕکردنەوەی بابەت و ناوەڕۆکی یان پەیامێک کە دەتەوێت بۆ بەکارهێنەران بڵێیت.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

پاش دروستکردنی پەیامەکەت، دەتوانیت **Send** بکەیت.

وە ئەمە چەند ئاسانە بۆ دانانی ئیمێل بۆ بەکارهێنەرانی کۆتایی بە بەکارهێنانی تایبەتمەندی broadcast.

## ئیمێلەکانی سیستەم (System emails)

ئیمێلەکانی سیستەم لە Ultimate Multisite، ئەو **ئامۆژگارییە ئۆتۆماتیکی**ن کە سیستەم دوای کارکردنی نێوان چەند کارێک وەک تۆمارکردن، پارەدان، مۆدالکردنی ناوچەکان و هتد، دەبینیت. ئەم ئیمێلانە دەتوانیت لە ڕێگەی تنظیماتەکانی Ultimate Multisite دەستکاری یان بگۆڕیەوە. هەروەها تایبەتمەندییەکی هەیە کە دەبێت بڵێیت کە تنظیماتە ئێستا لە جێدانێکی Ultimate Multisite دیکەدا دەستپێبکەیت و دابنێیت.

### ڕێکخستنی وนำواردنەوە (Resetting & Importing)

وەرگرتنی ئەو وەرگرتنە نوێیە Ultimate Multisite، هەروەها ئەپڵیکاتەکان، لە کاتییەک دەتوانن ئیمێلەکانی نوێ دابنێیت.

بۆ ڕێگرتن لە تێکچوون و کێشەی دیکەکان، **ئێمێل شێوازە نوێیە بەهێزترین ئامێرەکانمان بە ئۆتۆماتیک وەک ئیمێلەکانی سیستەم لەسەر جێدانەکەت زیاد ناکەین**، ئەگەر بۆ کارکردنی دروست یان گونجاو بواری دیاریکراو بن.

بەڵام، سوپەر ئادمینەکان و ئەژمارەکان دەتوانن ئەم ئیمێلە نوێیە بە ڕێگەی ئامێرەนำواردنەوەکەนำواردنەوە بکەن. ئەو کارە ئیمێلێکی سیستەمێکی نوێ لەگەڵ ناوەڕۆک و پێکهاتەی شێواز ئیمێلەکە دروست دەکات، کە دەبێت سوپەر ئادمین بتوانێت هەر گۆڕانێک بکات یان بەم شێوەیە بپارێزێت.

#### چۆنیەتیนำواردنەوەی ئیمێلەکانی سیستەم

تاسو به د Ultimate Multisite Settings صفحه لاړ شئ او تر هغه ځایه ته ورسئ چې **Emails** ټاب ته راشي.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

بیا، په سایدبار کې، د **Customize System Emails** بټ باندې کلیک وکړئ.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

په System Emails صفحه کې، تاسو به د پورته څخه **Reset & Import** عمل بټ وګورئ. د دې بټ باندې کلیک کارول باید د import او reset modal window ورکړي.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

بیا، تاسو کولی شئ **Import Emails** opcoes را toggل کړئ ترڅو وګورئ چې کوم system emails قابل import دي.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### System Emails Reset کول

کله کیک، تاسو به متوجه شئ چې هغه تغیراتی چې تاسو یې په یوه email template کې کړې دي، له هغې لپاره کار نه کوي او غواړئ چې دا د دوی **default state** ته ورسوي.

په دې حالت کې، تاسو دوه alternativen لرئ: تاسو بب simply system email را منځته کړئ او بیا import کړئ (د پورته لارښوونو په کارولو سره) - کوم چې send metrics او نور څه پاکولیږي، چې دا به کم تر preference والی পদ্ধতি وي.

او تاسو کولی شئ **Reset & Import tool** څخه کار واخلئ ترڅو هغه email template reset کړئ.

د email template د reset کولو لپاره، تاسو کولی شئ پورته لارښوونو په کارولو سره تل ورسئ چې Reset & Import tool ته ورسئ، او بیا **Reset** option را toggل کړئ او هغه emails غوره کړئ چې غواړئ دوی به خپل default محتوا ته بیرته وګرځي.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
