---
title: הגדרת PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# הגדרת שער התשלומים של PayPal (גרסה 2)

_**הערה חשובה: מאמר זה מתייחס לגרסה 2.x של Ultimate Multisite.**_

ניתן להפעיל עד ארבע שיטות תשלום בדף הגדרות התשלומים שלנו: Stripe, Stripe Checkout, PayPal וידני. במאמר זה נראה כיצד לבצע אינטגרציה עם **PayPal**.

בדומה ל-Stripe, גם PayPal נמצא בשימוש נרחב לתשלומים מקוונים, במיוחד באתרי WordPress. מאמר זה ידריך אתכם כיצד להשתמש ב-PayPal כאמצעי תשלום זמין ברשת שלכם.

שימו לב שאתם צריכים **חשבון PayPal עסקי** כדי לקבל את פרטי ה-API הנדרשים לאינטגרציה זו.

## הפעלת PayPal ברשת שלכם

כדי להפעיל את PayPal כאמצעי תשלום זמין ברשת שלכם, עברו אל **Ultimate Multisite > Settings > Payments** וסמנו את התיבה ליד PayPal.

![הפעלת PayPal בשערי התשלומים הפעילים](/img/config/settings-payment-gateways.png)

## קבלת פרטי ה-API של PayPal

לאחר שהפעלתם את PayPal כשער תשלומים, תצטרכו למלא את השדות עבור **Username** של PayPal API, **Password** של PayPal API ו-**Signature** של PayPal API.

תוכלו לקבל פרטים אלה על ידי התחברות לחשבון PayPal שלכם ב-[Live](https://www.paypal.com/home) או ב-[Sandbox](https://www.sandbox.paypal.com/home).

(זכרו שניתן להשתמש ב-**sandbox mode** כדי לבדוק תשלומים ולוודא שהשער מוגדר כראוי. פשוט הפעילו את הסעיף המתאים.)

![שדות פרטי API של PayPal ומתג sandbox mode](/img/config/settings-payment-gateways.png)

כדי לבקש פרטי API Signature או Certificate עבור חשבון PayPal שלכם:

  1. עברו אל [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. בסעיף **API access**, לחצו על **Update**.  
![הגדרות חשבון PayPal עם סעיף API access](/img/config/settings-payment-gateways.png)

  3. תחת **NVP/SOAP API integration (Classic)**, לחצו על **Manage API credentials**.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * אם כבר יצרתם API Signature או Certificate, תועברו לדף שבו תוכלו למצוא את הפרטים שלכם.

     * _**הערה:** אם תתבקשו לאמת את חשבון PayPal שלכם, עקבו אחר ההוראות על המסך._

  4. בחרו _אחת_ מהאפשרויות הבאות, ולאחר מכן לחצו על **Agree and Submit**.

     * **Request API Signature** – בחרו לאימות באמצעות API Signature.

     * **Request API Certificate** – בחרו לאימות באמצעות API Certificate.

  5. PayPal מייצר את פרטי ה-API שלכם כדלקמן:  
![פרטי API שנוצרו על ידי PayPal](/img/config/settings-payment-gateways.png)

     * **פרטי API Signature** כוללים API Username, API Password ו-Signature, שאינם פגים. ערכים אלה מוסתרים כברירת מחדל לאבטחה נוספת. לחצו על **Show/Hide** כדי להציג או להסתיר אותם. בסיום, לחצו על **Done**.

     * **פרטי API Certificate** כוללים API Username, API Password ו-Certificate, שפג תוקפו אוטומטית לאחר שלוש שנים. לחצו על **Download Certificate** כדי לשמור את ה-API Certificate לשולחן העבודה שלכם.

זהו, אינטגרציית התשלומים שלכם עם PayPal הושלמה!

אם יש לכם שאלות בנוגע להגדרות PayPal, תוכלו לעיין ב-[מרכז העזרה](https://www.paypal.com/br/smarthelp/home) של PayPal.
