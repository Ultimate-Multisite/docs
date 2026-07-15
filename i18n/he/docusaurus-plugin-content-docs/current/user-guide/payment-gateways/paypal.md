---
title: הגדרת PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# הגדרת שער PayPal (v2)

_**הערה חשובה: מאמר זה מתייחס לגרסה 2.x של Ultimate Multisite.**_

ניתן להפעיל עד ארבע שיטות תשלום בעמוד הגדרות התשלום שלנו: Stripe, Stripe Checkout, PayPal וידני. במאמר זה נראה כיצד לבצע אינטגרציה עם **PayPal**.

בדומה ל-Stripe, ‏PayPal נמצא בשימוש נרחב לתשלומים מקוונים, במיוחד באתרי WordPress. מאמר זה ינחה אותך כיצד להשתמש ב-PayPal כשיטת תשלום זמינה ברשת שלך.

שים לב שעליך להיות בעל **PayPal Business account** כדי לקבל את פרטי ה-API הנדרשים לאינטגרציה זו.

## הפעלת PayPal ברשת שלך {#enabling-paypal-on-your-network}

כדי להפעיל את PayPal כשיטת תשלום זמינה ברשת שלך, עבור ללשונית **Ultimate Multisite > Settings > Payments** וסמן את התיבה שליד PayPal.

![הפעלת PayPal בשערי תשלום פעילים](/img/config/settings-payment-gateways.png)

## שימוש באשף ההגדרה המונחה {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 מוסיף אשף הגדרת PayPal מונחה להגדרות שער התשלום. לאחר הפעלת PayPal, השתמש באשף ב-**Ultimate Multisite > Settings > Payments** כדי לבחור כיצד ברצונך לחבר את השער ולאשר אילו פרטי גישה עדיין נדרשים לפני השמירה.

האשף תומך בשני מסלולי הגדרה:

* **הזנה ידנית של פרטי גישה**: השתמש במסלול זה כאשר כבר יש לך פרטי API של PayPal, כאשר הגדרת OAuth אינה זמינה עבור החשבון שלך, או כאשר אתה מעדיף להעתיק את פרטי הגישה מ-PayPal בעצמך. הזן את שם המשתמש של ה-API, סיסמת ה-API וחתימת ה-API בשדות PayPal, ולאחר מכן שמור את הגדרות התשלום.
* **שער חיבור OAuth**: השתמש במסלול זה רק כאשר אפשרות OAuth זמינה ומופעלת עבור ההתקנה שלך. האשף מציג את תהליך OAuth מאחורי דגל תכונה, כך שרשתות ללא הדגל ממשיכות להשתמש בשדות ההזנה הידנית של פרטי הגישה.

אם אינך רואה את אפשרות OAuth באשף, השלם את תהליך ההזנה הידנית של פרטי הגישה שלהלן. השער עובד עם אותם פרטי API של PayPal Business כמו במהדורות קודמות של Ultimate Multisite 2.x.

## קבלת פרטי ה-API של PayPal {#getting-the-paypal-api-credentials}

לאחר ש-PayPal מופעל כשער תשלום, תצטרך למלא את השדות עבור PayPal API **Username** , ‏PayPal API **Password** ו-PayPal API **Signature**.

אפשר לקבל זאת באמצעות התחברות לחשבון PayPal [Live](https://www.paypal.com/home) או [Sandbox](https://www.sandbox.paypal.com/home) שלך.

(זכור שניתן להשתמש ב-**מצב sandbox** כדי לבדוק תשלומים ולראות אם השער מוגדר כראוי. פשוט הפעל את המתג בחלק המתאים.)

![שדות פרטי API של PayPal ומתג מצב sandbox](/img/config/settings-payment-gateways.png)

כדי לבקש פרטי API Signature או Certificate עבור חשבון PayPal שלך:

  1. עבור אל [הגדרות Account](https://www.paypal.com/businessmanage/account/accountAccess).

  2. בסעיף **גישת API**, לחץ על **עדכן**.
![הגדרות Account של PayPal עם סעיף גישת API](/img/config/settings-payment-gateways.png)

  3. תחת **אינטגרציית NVP/SOAP API (Classic)** , לחץ על **נהל פרטי API**.
![אינטגרציית NVP/SOAP API של PayPal ניהול פרטי API](/img/config/settings-payment-gateways.png)

     * אם כבר יצרת API Signature או Certificate, תופנה לעמוד שבו ניתן למצוא את פרטי הגישה שלך.

     * _**הערה:** אם תתבקש לאמת את חשבון PayPal שלך, עקוב אחר ההוראות שעל המסך._

  4. בחר _אחת_ מהאפשרויות הבאות, ולאחר מכן לחץ על **הסכם ושלח**.

     * **בקש API Signature** – בחר עבור אימות באמצעות API Signature.

     * **בקש API Certificate** – בחר עבור אימות באמצעות API Certificate.

  5. PayPal מייצרת את פרטי ה-API שלך כך:
![פרטי API שנוצרו על ידי PayPal](/img/config/settings-payment-gateways.png)

     * **פרטי API Signature** כוללים API Username,‏ API Password ו-Signature, שאינם פגים. ערכים אלה מוסתרים כברירת מחדל לצורך אבטחה מוגברת. לחץ על **הצג/הסתר** כדי להפעיל ולכבות את התצוגה שלהם. בסיום, לחץ על **סיום**.

     * **פרטי API Certificate** כוללים API Username,‏ API Password ו-Certificate, שפג תוקפו אוטומטית לאחר שלוש שנים. לחץ על **הורד Certificate** כדי לשמור את ה-API Certificate לשולחן העבודה שלך.

זהו, אינטגרציית התשלום שלך עם PayPal הושלמה!

אם יש לך שאלות כלשהן לגבי הגדרות PayPal, ניתן לעיין ב-[מרכז העזרה](https://www.paypal.com/br/smarthelp/home) של PayPal.
