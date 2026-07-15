---
title: איינריכטן PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# אויפֿשטעלן דעם PayPal Gateway (v2)

_**וויכטיקע באַמערקונג: דער אַרטיקל באַציט זיך צו Ultimate Multisite ווערסיע 2.x.**_

איר קענט אַקטיווירן ביז פֿיר צאָלונג־מעטאָדן אויף אונדזער צאָלונג־אײַנשטעלונגען־בלאַט: Stripe, Stripe Checkout, PayPal און מאַנועל. אין דעם אַרטיקל וועלן מיר זען ווי צו אינטעגרירן מיט **PayPal**.

פּונקט ווי Stripe, ווערט PayPal ברייט געניצט פֿאַר אָנליין־צאָלונגען, באַזונדערס אויף WordPress וועבזײַטן. דער אַרטיקל וועט אײַך פֿירן ווי צו נוצן PayPal ווי אַ צאָלונג־מעטאָד וואָס איז פֿאַראַן אויף אײַער נעץ.

באַמערקט אַז איר דאַרפֿט האָבן אַ **PayPal Business account** כּדי צו באַקומען די API קרעדענציע וואָס מען דאַרף פֿאַר דער אינטעגראַציע.

## אַקטיווירן PayPal אויף אײַער נעץ {#enabling-paypal-on-your-network}

כּדי צו אַקטיווירן PayPal ווי אַ פֿאַראַנענעם צאָלונג־מעטאָד אויף אײַער נעץ, גייט צו דעם **Ultimate Multisite > Settings > Payments** קוויטל און צייכנט אָן דעם קעסטל לעבן PayPal.

![אַקטיווירן PayPal אין אַקטיווע צאָלונג־גייטווייען](/img/config/settings-payment-gateways.png)

## ניצן דעם געפֿירטן אויפֿשטעלונג־וויזאַרד {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 לייגט צו אַ געפֿירטן PayPal אויפֿשטעלונג־וויזאַרד צו די צאָלונג־גייטוויי־אײַנשטעלונגען. נאָך דעם ווי איר אַקטיווירט PayPal, ניצט דעם וויזאַרד אויף **Ultimate Multisite > Settings > Payments** צו אויסקלײַבן ווי איר ווילט פֿאַרבינדן דעם גייטוויי און באַשטעטיקן וועלכע קרעדענציע־דאַטן מען דאַרף נאָך איידער מען היט אָפּ.

דער וויזאַרד שטיצט צוויי אויפֿשטעלונג־וועגן:

* **מאַנועלע אַרײַנפֿירונג פֿון קרעדענציע־דאַטן**: ניצט דעם וועג ווען איר האָט שוין PayPal API קרעדענציע־דאַטן, ווען OAuth אויפֿשטעלונג איז נישט פֿאַראַן פֿאַר אײַער Account, אָדער ווען איר בעסער ווילט אַליין קאָפּירן קרעדענציע־דאַטן פֿון PayPal. גיט אַרײַן דעם API Username, API Password, און API Signature אין די PayPal פֿעלדער, דערנאָך היט אָפּ די צאָלונג־אײַנשטעלונגען.
* **OAuth פֿאַרבינדונג־טויער**: ניצט דעם וועג נאָר ווען די OAuth אָפּציע איז פֿאַראַן און אַקטיווירט פֿאַר אײַער אינסטאַלאַציע. דער וויזאַרד ווײַזט דעם OAuth פּראָצעס הינטער אַ פֿעיִקייט־פֿאָן, אַזוי אַז נעצן אָן דעם פֿאָן פאָרזעצן צו נוצן די מאַנועלע קרעדענציע־אַרײַנפֿירונג־פֿעלדער.

אויב איר זעט נישט די OAuth אָפּציע אין דעם וויזאַרד, פֿאַרענדיקט דעם מאַנועלן קרעדענציע־אַרײַנפֿירונג־פּראָצעס אונטן. דער גייטוויי אַרבעט מיט די זעלבע PayPal Business API קרעדענציע־דאַטן ווי פֿריִערדיקע Ultimate Multisite 2.x אַרויסגאַבעס.

## באַקומען די PayPal API קרעדענציע־דאַטן {#getting-the-paypal-api-credentials}

ווען PayPal איז אַקטיווירט ווי אַ צאָלונג־גייטוויי, וועט איר דאַרפֿן אָנפֿילן די פֿעלדער פֿאַר PayPal API **Username** , PayPal API **Password** און PayPal API **Signature**.

איר קענט דאָס באַקומען דורך זיך אַרײַנלאָגירן אין אײַער PayPal [Live](https://www.paypal.com/home) אָדער [Sandbox](https://www.sandbox.paypal.com/home) Account.

(געדענקט אַז איר קענט נוצן דעם **sandbox mode** צו פּרובירן צאָלונגען און זען צי דער גייטוויי איז ריכטיק אויפֿגעשטעלט. נאָר שלט אָן דעם צוגעפּאַסטן אָפּטייל.)

![PayPal API קרעדענציע־פֿעלדער און sandbox mode איבערשלטער](/img/config/settings-payment-gateways.png)

כּדי צו בעטן API Signature אָדער Certificate קרעדענציע־דאַטן פֿאַר אײַער PayPal Account:

  1. גייט צו אײַערע [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. אין דעם **API access** אָפּטייל, גיט אַ קליק אויף **Update**.
![PayPal Account Settings מיט API access אָפּטייל](/img/config/settings-payment-gateways.png)

  3. אונטער **NVP/SOAP API integration (Classic)** , גיט אַ קליק אויף **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * אויב איר האָט שוין דזשענערירט אַן API Signature אָדער Certificate, וועט מען אײַך ווײַטערפֿירן צו אַ בלאַט וווּ איר קענט געפֿינען אײַערע קרעדענציע־דאַטן.

     * _**באַמערקונג:** אויב מען בעט אײַך צו באַשטעטיקן אײַער PayPal Account, דאַן פֿאָלגט די אינסטרוקציעס אויפֿן עקראַן._

  4. קלײַבט אויס _איינע_ פֿון די ווײַטערדיקע אָפּציעס, דערנאָך גיט אַ קליק אויף **Agree and Submit**.

     * **Request API Signature** – קלײַבט אויס פֿאַר API Signature אויטענטיפֿיקאַציע.

     * **Request API Certificate** – קלײַבט אויס פֿאַר API Certificate אויטענטיפֿיקאַציע.

  5. PayPal דזשענערירט אײַערע API קרעדענציע־דאַטן אַזוי:
![PayPal דזשענערירטע API קרעדענציע־דאַטן](/img/config/settings-payment-gateways.png)

     * **API Signature קרעדענציע־דאַטן** נעמען אַרײַן אַן API Username, API Password, און Signature, וואָס לויפֿט נישט אויס. די ווערטן זײַנען באַהאַלטן לויטן סטאַנדאַרט פֿאַר צוגעלייגטער זיכערהייט. גיט אַ קליק אויף **Show/Hide** צו זיי אָן־ און אויסצושalten. ווען איר ענדיקט, גיט אַ קליק אויף **Done**.

     * **API Certificate קרעדענציע־דאַטן** נעמען אַרײַן אַן API Username, API Password, און Certificate, וואָס לויפֿט אויס אויטאָמאַטיש נאָך דרײַ יאָר. גיט אַ קליק אויף **Download Certificate** צו אָפּהיטן דעם API Certificate אויף אײַער דעסקטאָפּ.

דאָס איז עס, אײַער PayPal צאָלונג־אינטעגראַציע איז פֿאַרענדיקט!

אויב איר האָט פֿראַגעס וועגן PayPal אײַנשטעלונגען, קענט איר זיך ווענדן צו PayPal'ס [הילף־צענטער](https://www.paypal.com/br/smarthelp/home).
