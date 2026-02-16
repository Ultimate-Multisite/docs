---
title: הגדרת Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# הגדרת שער התשלומים של Stripe (גרסה 2)

_**הערה חשובה: מאמר זה מתייחס לגרסה 2.x של Ultimate Multisite.**_

ניתן להפעיל עד ארבע שיטות תשלום בדף הגדרות התשלומים שלנו: Stripe, Stripe Checkout, PayPal ותשלום ידני. במאמר זה נראה כיצד לבצע אינטגרציה עם **Stripe**.

## הפעלת Stripe

כדי להפעיל את Stripe כשער תשלומים זמין ברשת שלכם, עברו אל **Ultimate Multisite > Settings > Payments** וסמנו את המתג ליד **Stripe** או **Stripe Checkout** בקטע Active Payment Gateways.

![הפעלת Stripe בשערי התשלומים הפעילים](/img/config/settings-payment-gateways.png)

### Stripe לעומת Stripe Checkout:

**Stripe:** שיטה זו תציג שדה להזנת מספר כרטיס האשראי במהלך התשלום.

![שדה כרטיס אשראי משובץ של Stripe במהלך התשלום](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** שיטה זו תפנה את הלקוח לדף Stripe Checkout במהלך התשלום.

![דף הפניה של Stripe Checkout במהלך התשלום](/img/config/settings-payment-gateways.png)

קבלת מפתחות ה-API של Stripe

לאחר הפעלת Stripe כשער תשלומים, תצטרכו למלא את השדות **Stripe Publishable Key** ו-**Stripe Secret Key**. תוכלו לקבל אותם על ידי התחברות לחשבון ה-Stripe שלכם.

_**הערה:** ניתן להפעיל **מצב Sandbox** כדי לבדוק אם שיטת התשלום עובדת._

![שדות מפתח API של Stripe ומתג מצב sandbox](/img/config/settings-payment-gateways.png)

בלוח הבקרה של Stripe, לחצו על **Developers** בפינה הימנית העליונה, ולאחר מכן על **API Keys** בתפריט הצדדי.

![קטע Developers בלוח הבקרה של Stripe עם API Keys](/img/config/settings-payment-gateways.png)

תוכלו להשתמש ב-**Test Data** (כדי לבדוק אם האינטגרציה עובדת באתר הייצור שלכם) או לא. כדי לשנות זאת, החליפו את מצב המתג **Viewing test data**.

![מתג Viewing test data של Stripe](/img/config/settings-payment-gateways.png)

העתיקו את הערך מ-**Publishable key** ומ-**Secret key**, מעמודת ה-**Token** והדביקו אותו בשדות שער התשלומים של Stripe ב-Ultimate Multisite. לאחר מכן לחצו על **Save Changes**.

![ערכי Publishable key ו-Secret key של Stripe](/img/config/settings-payment-gateways.png)

![הדבקת מפתחות Stripe בהגדרות Ultimate Multisite](/img/config/settings-payment-gateways.png)

## הגדרת Webhook של Stripe

Stripe שולחת אירועי webhook שמודיעים ל-Ultimate Multisite בכל פעם שמתרחש אירוע **בחשבון ה-Stripe שלכם**.

לחצו על **Developers** ולאחר מכן בחרו בפריט **Webhooks** בתפריט הצדדי. לאחר מכן בצד ימין לחצו על **Add endpoint**.

![דף Webhooks של Stripe עם כפתור Add endpoint](/img/config/settings-payment-gateways.png)

תצטרכו **Endpoint URL**. Ultimate Multisite יוצרת אוטומטית את כתובת ה-endpoint שתוכלו למצוא ממש מתחת לשדה **Webhook Listener URL** בקטע **Ultimate Multisite Stripe Gateway**.

![שדה Webhook Listener URL בהגדרות שער Stripe](/img/config/settings-payment-gateways.png)

**העתיקו** את כתובת ה-endpoint ו**הדביקו** אותה בשדה **Endpoint URL** ב-Stripe.

![הדבקת כתובת endpoint בהגדרת webhook של Stripe](/img/config/settings-payment-gateways.png)

השלב הבא הוא לבחור **Event**. תחת אפשרות זו, פשוט סמנו את התיבה **Select all events** ולחצו על **Add events**. לאחר מכן לחצו על **Add Endpoint** כדי לשמור את השינויים.

![בחירת כל האירועים והוספת endpoint ב-Stripe](/img/config/settings-payment-gateways.png)

זהו, אינטגרציית התשלומים שלכם עם Stripe הושלמה!
