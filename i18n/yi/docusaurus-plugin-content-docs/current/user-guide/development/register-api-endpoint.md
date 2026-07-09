---
title: API ענדפּוינט רעגיסטרירן
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---

# דער Ultimate Multisite Register API ענדפּוינט {#the-ultimate-multisite-register-api-endpoint}

אין דעם טוטאָריאַל וועט איר זיך אויסלערנען ווי צו ניצן דעם Ultimate Multisite /register API ענדפּוינט צו שאַפֿן דעם גאַנצן אָנבאָרדינג־פּראָצעס פֿאַר אַ נײַעם קונה אין אייער נעץ, און ווי אַזוי דאָס צו טאָן מיט Zapier.

דער ענדפּוינט ניצט דעם POST מעטאָד און ווערט גערופן דורך דעם URL _**https://yoursite.com/wp-json/wu/v2/register**_. אין דעם רוף וועלן 4 פּראָצעסן ווערן אויסגעפירט אין אייער נעץ:

  * אַ נײַער WordPress באַניצער, אָדער זײַן דערקענונג דורך user ID, וועט ווערן געשאַפֿן.

  * אַ נײַער Customer אין Ultimate Multisite, אָדער זײַן דערקענונג דורך customer ID, וועט ווערן געשאַפֿן.

  * אַ נײַע סייט אויף דער WordPress נעץ וועט ווערן געשאַפֿן.

  * צום סוף וועט אַ נײַע Membership אין Ultimate Multisite ווערן געשאַפֿן.

פֿאַר דעם פּראָצעס וועט איר דאַרפֿן אייערע API credentials. כּדי זיי צו באַקומען, גייט צו אייער network admin panel, נאַוויגירט צו **Ultimate Multisite > Settings** > **API & Webhooks,** און זוכט דעם API Settings אָפּטייל.

![API Settings אָפּטייל אין Ultimate Multisite](/img/config/settings-api.png)

דאָ איז אַ פולער בליק אויף דער API settings בלאַט:

![פולער API settings בלאַט](/img/config/settings-api-full.png)

קלייבט אויס **Enable API** און באַקומען אייערע API credentials.

איצט לאָמיר אויספֿאָרשן דעם ענדפּוינט און דערנאָך שאַפֿן אַ רעגיסטראַציע־אַקציע אין Zapier.

## פּאַראַמעטערס פֿאַר דעם גוף פֿונעם ענדפּוינט {#endpoint-body-parameters}

לאָמיר איבערקוקן די מינימאַלע אינפֿאָרמאַציע וואָס מען דאַרף שיקן צום ענדפּוינט. צום סוף פֿון דעם אַרטיקל וועט איר געפֿינען דעם גאַנצן רוף.

### Customer {#customer}

דאָס איז די אינפֿאָרמאַציע וואָס איז נייטיק פֿאַרן פּראָצעס פֿון שאַפֿן דעם User און דעם Ultimate Multisite Customer:

"customer_id" : integer

מען קען שיקן דעם customer ID וואָס איז געשאַפֿן געוואָרן אין אייער נעץ. אויב מען שיקט עס נישט, וועט די אינפֿאָרמאַציע אונטן ווערן געניצט צו שאַפֿן אַ נײַעם קונה און אַ נײַעם WordPress באַניצער. דער user ID קען אויך ווערן געשיקט אויף דער זעלבער אופֿן ווי דער customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

די איינציקע אינפֿאָרמאַציע וואָס מיר דאַרפֿן אין דעם אָביעקט איז Membership Status.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products** {#products}

Products ווערן געגעבן ווי אַ מענגע מיט איינעם אָדער מער product ID פֿון אייער נעץ. זײַט אָפּגעהיט: דער ענדפּוינט שאַפֿט נישט products. קוקט אין Ultimate Multisite'ס דאַקיומענטאַציע כּדי בעסער צו פֿאַרשטיין דעם product creation endpoint.

**"products" : [1,2],**

### Payment {#payment}

ווי בײַ Membership, דאַרפֿן מיר נאָר דעם status.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

און צו פֿאַרענדיקן דעם body דאַרפֿן מיר דעם URL און Title פֿון דער סייט, ביידע אין דעם Site אָביעקט.

**"site" : { "site_url" : "string", "site_title" : "string" }**

דער צוריקקער פֿונעם register ענדפּוינט וועט זײַן אַ מענגע מיט דער נײַ געשאַפֿענער membership אינפֿאָרמאַציע.

## שאַפֿן אַן אַקציע אין Zapier {#creating-an-action-in-zapier}

מיט דער אַרײַנפֿיר פֿון דעם נײַעם און שטאַרקערן account creation endpoint וועט איר אויך באַקומען צוטריט צו אַ נײַער אַקציע אין Zapier.

ווייסט איר ווי צו ניצן און הנאה האָבן פֿון אַלץ וואָס די נײַע ווערסיע פֿון Zapier אָפפערט? לערנט מער דאָ. (link?)

### שאַפֿן אַן אַקציע {#creating-an-action}

כּדי בעסער צו ווײַזן ווי צו ניצן דעם registration endpoint מיט Zapier, לאָמיר שאַפֿן אַן אינטעגראַציע מיט Google Forms. יעדעס מאָל ווען דער פֿאָרעם ווערט אויסגעפֿילט און די אינפֿאָרמאַציע ווערט געראַטעוועט אין דער ענטפֿער־שיט פֿונעם פֿאָרעם, וועט אַ נײַע membership ווערן געשאַפֿן אין דער Ultimate Multisite נעץ.

אין Google Forms, מאַכט אַ פֿאָרעם מיט די מינימאַלע פעלדער וואָס מען דאַרף כּדי צו שאַפֿן אַ נײַע membership אין דער נעץ.

<!-- סקרינשוט נישט בנימצא: Google Forms פֿאָרעם מיט פעלדער פֿאַר שאַפֿן אַ נײַע membership -->

איצט אין Zapier, מאַכט אַ נײַעם Zap און פֿאַרבינדט דעם געשאַפֿענעם פֿאָרעם אין Google דורך דער spreadsheet וווּ די דאַטן ווערן געראַטעוועט.

<!-- סקרינשוט נישט בנימצא: Zapier trigger קאָנפֿיגוראַציע וואָס פֿאַרבינדט זיך מיט Google Forms spreadsheet -->

גרייט! דער Google Forms פֿאָרעם איז פֿאַרבונדן מיט Zapier און גרייט צו ווערן אינטעגרירט מיט דער נעץ. איצט לאָמיר גיין צום Action וואָס וועט זײַן דער רעזולטאַט פֿונעם Trigger וואָס Google Forms לאָזט אויס יעדעס מאָל ווען עס ווערט אויסגעפֿילט.

געפֿינט די נײַע Ultimate Multisite אַפּ און קלייבט זי אויס. פֿאַר אַזאַ סאָרט Zap קלייבט די Register אָפּציע.

<!-- סקרינשוט נישט בנימצא: Zapier action אויסקלייב וואָס ווײַזט Ultimate Multisite אַפּ מיט Register אָפּציע -->

נאָך דעם ערשטן שריט, קלייבט דעם account וואָס וועט ווערן פֿאַרבונדן מיט דעם Zap.<!-- סקרינשוט נישט בנימצא: Zapier account connection שריט פֿאַר Ultimate Multisite -->

דאָס איז דער מערסט סענסיטיווער טייל פֿון דעם גאַנצן פּראָצעס. מיר דאַרפֿן צופּאַסן די פעלדער וואָס קומען פֿון Google Forms צו די מינימאַלע פעלדער וואָס דער register endpoint דאַרף, ווי געוויזן אין דעם פֿריִערדיקן אָפּטייל פֿון דעם אַרטיקל.

אין דעם בײַשפּיל דאַרפֿן מיר נאָר קאָנפֿיגורירן username, email, password, name און דעם URL פֿון דער וועבזײַט. דאָס איבעריקע בלײַבט פֿאָרויס־באַשטימט, אַזוי אַז אַלע memberships וואָס ווערן געשאַפֿן פֿון דעם Google Forms זאָלן נאָכפֿאָלגן דעם זעלבן product און status מוסטער.

<!-- סקרינשוט נישט בנימצא: Zapier field mapping צווישן Google Forms און Ultimate Multisite register endpoint -->

ווען די אינפֿאָרמאַציע איז באַשטימט, גייט ווײַטער צום לעצטן טעסט. אויף דעם לעצטן עקראַן קענט איר זען אַלע פעלדער וואָס וועלן געשיקט ווערן צום ענדפּוינט, זייערע פּאַסיקע אינפֿאָרמאַציע, און די פעלדער וואָס וועלן געשיקט ווערן ליידיק.<!-- סקרינשוט נישט בנימצא: Zapier test עקראַן וואָס ווײַזט אַלע פעלדער וואָס ווערן געשיקט צום register endpoint -->

טעסט אייער נײַעם Zap און עס זאָל זיך מצליח פֿאַרענדיקן. אויב עס פּאַסירט אַ טעות, קאָנטראָלירט אַלע פעלדער און צי זיי ווערן ריכטיק געשיקט. ווײַל עס איז דאָ אַ סך אינפֿאָרמאַציע, קענען עטלעכע זאַכן בלײַבן אומבאַמערקט.

### גאַנצע ענדפּוינט פּאַראַמעטערס {#complete-endpoint-parameters}

דאָ איז דער גאַנצער רוף און אַלע מעגלעכקייטן פֿון פעלדער וואָס קענען ווערן געשיקט.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
