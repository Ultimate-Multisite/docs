---
title: יומן שינויי Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# יומן שינויים של Captcha {#captcha-changelog}

גרסה: 1.5.0 - שוחררה ב-2026-05-22
* חדש: מגביל קצב בעצירה מוחלטת (Hard-stop rate limiter) — סופר כל GET ו-POST בממשקים המוגנים על ידי קפטצ'ה (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ומגיב עם HTTP 429, כותרת `Retry-After`, והשהיית טרפיט (tarpit sleep) אקראית (1–5 שניות, עם תקרה מקסימלית של 15 שניות).
* חדש: הגדרות `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` לכוונון חלון הטרפיט.
* חדש: הפילטר `wu_cap_rate_limit_whitelist_ip` כדי למעיל קבוצות כתובות IP מהימנות.
* חדש: הפעולה `wu_cap_rate_limit_will_block` שמופעלת מיד לפני שליחת תגובת העצירה המוחלטת.
* חדש: זיהוי כתובת IP של הלקוח עמיד בפני זיוף (Spoof-resistant). כעת, `Captcha_Core::get_client_ip()` (המקור לאמת למפתחות סל הקצב, ל-`remoteip` של captcha siteverify, ולצילומי IP הסטטיסטיקה) אוכף מודל אמון מחמיר: `REMOTE_ADDR` הוא הבסיס, ו-`CF-Connecting-IP` יכובד רק כאשר ה-peer המיידי נמצא בטווח IP פעיל של Cloudflare, ו-`X-Forwarded-For` יכובד רק כאשר ה-peer המיידי נמצא ברשימת הפרוקסי המאומתים שהוגדרו על ידי המנהל, תוך מעבר מימין לשמאל שמקפיץ קפיצות מאומתות/של Cloudflare לפני שהוא מגיע לכתובת ה-IP של המבקר.
* חדש: הגדרת `cap_trust_cloudflare_headers` (ברירת מחדל: כבוי) — מאפשרים להאמין ב-`CF-Connecting-IP` כאשר מאחורי Cloudflare. ה-plugin כולל צילום CIDR של Cloudflare ומעדכן אותו מדי שבוע באמצעות wp-cron, עם גיבוי מובנה למקרה של כשל בחידוש.
* חדש: הגדרת `cap_trusted_proxies` — אזור טקסט (textarea) של CIDRs או כתובות IP גולמיות (אחת כל שורה, מותרות הערות `#`) המפרטות את הפרוקסיים / מ баланס המטעינים הקדמיים שלכם. ללא הגדרה זו, `X-Forwarded-For` מתעלם גם כאשר מגביל הקצב מופעל.
* חדש: זיהוי אוטומטי ראשוני של מצב Cloudflare / פרוקסי סביר, עם הודעת מנהל "החל הגדרות מזוהות" בלחיצת כפתור אחת. ה-plugin אף פעם לא דורס את הערכים השמורים שלכם; אם תעבור תנועה מאוחר יותר שמצביעה שהתצורה שלכם כבר לא תואמת למציאות (למשל, אם Cloudflare שינה טווחי CIDR וה-CIDR של הפרוקסי שלכם מיושן), תופיע הודעת אי-התאמה שאינה ניתנת להסרה המציגה את עדכון המומלץ.
* תוקן: במצב בלתי נראה (Invisible mode) כבר לא מוריד את `cap_security_level` בשקט ל-FAST — המנהל מקבל את הרמה שהוגדרה. הפילטר החדש `wu_cap_server_security_level` זמין לאתרים שרוצים לוגיקה מותאמת אישית.
* תוקן: המונה `rate_limits_triggered` בסטטיסטיקה עכשיו גדל על כל חסימה, ולא רק בנתיב המגן הנדיר לאחר הצלחה.
* תוקן: `Captcha_Core::get_client_ip()` הוא כעת המקור האחיד לאמת ייחוס ה-IP של המבקר על פני מגביל הקצב, ספקי קפטצ'ה (reCAPTCHA + hCaptcha `siteverify`), והסטטיסטיקה — סוגר וקטור זיוף שבו בקשות ישירות מהמקור-שרת הנושאות כותרת `CF-Connecting-IP` מזויפת היו ממוספרות על ידי ה-IP המזויף במקום ה-peer האמיתי.
* תוקן: שער מגביל הקצב של תהליך התשלום הקלאסי של WooCommerce מופעל כעת ב-`template_redirect` (תעדיפות 1) במקום ב-`woocommerce_before_checkout_form`. ה-hook ברמת הטופס אף פעם לא מופעל כאשר העגלה ריקה, ולכן תעבורת ה-flood שלא מוסיפה מוצר מעולם עקפה את המגביל לחלוטין.
* תוקן: שער מגביל הקצב של תשלום WooCommerce (pay-for-order) מופעל כעת ב-`template_redirect` במקום ב-`woocommerce_before_pay_action`. האחרון מופעל רק לאחר שה-`wp_verify_nonce('woocommerce-pay')` מצליח, מה שאומר שמפרים לא מאומתים (מודל האיום האמיתי) מעולם לא הפעילו את המגביל.
* תוקן: שער מגביל הקצב של תהליך התשלום של WooCommerce Store API (blocks) מופעל כעת ב-`rest_pre_dispatch` במקום ב-`woocommerce_store_api_checkout_update_order_from_request`. האחרון מופעל רק לאחר ש-Store API מאמת את שדות העגלה והחיוב, כך שמבוטים לא מאומתים קיבלו 400 מהמאמת ולעולם לא הפעילו את המגביל.
* תוקן: שער מגביל הקצב של כניסה מקוצר (inline-login) של Ultimate Multisite מופעל כעת ב-`wu_ajax_nopriv_wu_inline_login` תעדיפות 1 (והמראה המקביל למשתמש מחובר) במקום ב-`wu_before_inline_login`. האחרון מופעל רק לאחר שה-`check_ajax_referer('wu_checkout')` מצליח, כך שמבוטים לא מאומתים ללא נונס תקין של wu_checkout קיבלו 403 ולעולם לא הפעילו את המגביל.
* תוקן: `Rate_Limiter::enforce()` מפעיל כעת מגן פעם אחת לכל בקשה (once-per-request) הממופה לפי `surface|ip`, כך ש-hooks עליונים שמופעלים פעמיים לכל רינדור (במיוחד `wu_setup_checkout` ב-Ultimate Multisite) כבר לא מחציתים את סף מגביל הקצב האפקטיבי.
* תוקן: שערים של מגביל קצב כבר לא מתייעצים עם `Captcha_Core::is_whitelisted()` (פילטר `wu_captcha_whitelisted`). פילטר זה מסמן "הקפטצ'ה כבר טופלה על ידי משטח אחר" והוא אורתוגונלי להגנת ה-flood — שילוב WooCommerce חיבר אותו כדי לדלג על קפטצ'ת כניסת ה-WordPress כאשר נונס של Woo היה נוכח, מה שדלף לספירת הקצב ואפשר ל-POSTs של Woo לעקוף את המגביל. הפילטר הספציפי למגביל הקצב, `wu_cap_rate_limit_whitelist_ip`, הוא ה-bypass היחיד שמופעל כעת.

גרסה: 1.3.2 - שוחררה ב-2026-01-27
* תוקן: ווידג'ט Captcha לא נרנדר על טפסי תשלום המשתמשים ב-Elementor או ב-Page Builders אחרים.
* תוקן: אלמנט קסטום של ווידג'ט cap-widget נמחק על ידי סינון `wp_kses()`.
* שופר: שימוש בתוכן הניתן לקריאה (callable content) עבור שדה קפטצ'ה בתהליך התשלום כדי לעקוף סינון HTML.
* שופר: פישוט ה-JavaScript עם גיבוי למקרים קצה.

גרסה: 1.3.1 - שוחררה ב-2026-01-26
* תוקן: מצב Captcha הבלתי נראה (Invisible mode) לא פותר אוטומטית על תהליכי תשלום דינמיים של Ultimate Multisite.
* שופר: סקריפט התשלום של Captcha משתמש כעת ב-MutationObserver כדי לזהות ווידג'טים שנטענים באופן דינמי.
* שופר: הוספת חסימת כפתור התשלום כדי להמתין ל-token לפני ההגשה.

גרסה: 1.3.0 - שוחררה ב-2026-01-27
* חדש: שילוב WooCommerce Blocks עם חסימת שליפת Store API.
* חדש: תמיכה בקפטצ'ה בלתי נראית לתהליך התשלום של WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3).
* חדש: דף הגדרות עצמאי לשימוש ללא Ultimate Multisite.
* חדש: Jetpack Autoloader למניעת קונפליקטים של תלויות.
* תוקן: hCaptcha לא נרנדר על תהליך תשלום דינמי של Ultimate Multisite (תוכן שנטען באמצעות AJAX).
* תוקן: Captcha לא מתעדכן/מאופס כאשר מתרחשים שגיאות אימות טופס.
* תוקן: hCaptcha לא מוצג בדף תשלום של WooCommerce.
* תוקן: שגיאת "reCAPTCHA class not found" (נוספה ספריית PHP google/recaptcha).
* שופר: זיהוי שגיאות באמצעות hooks של WordPress, MutationObserver, ו-AJAX interception.
* שופר: תיאורי הגדרות כוללים כעת כתובות URL של ה-dashboard עבור מפתחות API.

גרסה: 1.2.2 - שוחררה ב-2026-01-24
* תוקן: Captcha לא מוצג על אלמנט טופס של Ultimate Multisite Login Form (אי-התאמת שם הפילטר).
* תוקן: HTML של ווידג'ט cap widget נמחק על ידי סינון `wp_kses()`.
* תוקן: בוררי JavaScript לא מוצאים טפסים עם מקפים (slashes) במזהי האלמנטים.
* נוסף: hook פילטר `wu_kses_allowed_html` עבור classaddons להרחבת תגיות ה-HTML המותרות.
* הוסר: קבצי JavaScript מתים הוחלפו בסקריפטים ספציפיים לספק.

גרסה: 1.2.1 - שוחררה ב-2026-01-23

* תוקן: אימות טוקן Captcha נכשל בסביבות MultiSite (משתמש כעת ב-transients ברמת הרשת).
* תוקן: Captcha מופיע עכשיו באופן עקבי עבור כל המשתמשים ללא קשר למצב ההתחברות.
* תוקן: אי-התאמה בין רינדור Captcha לאימות שגרמה לכשלים בתהליך התשלום.

גרסה: 1.2.0 - שוחררה ב-2026-01-21

* חדש: Cap Captcha - קפטצ'ה מבוססת הוכחת עבודה (proof-of-work) מארחת עצמית, מופעלת כברירת מחדל בהפעלה.
* חדש: הגנת Zero-configuration - הפעילו את ה-addon ואתכם מוגנים מיד.
* חדש: ארכיטקטורת ספק קפטצ'ה פולימורפית להרחבה קלה.
* חדש: הגנת תהליך תשלום WooCommerce Store API מפני התקפות בדיקת כרטיסים (card testing).
* חדש: לוח מחוונים למעקב סטטיסטיקה המציג אתגרים, אימותים והתקפות חסומות.
* חדש: הגדרות מראש לרמת אבטחה (Fast, Medium, Max) לקושי של Cap Captcha.
* חדש: מחלקות בסיס מופשטות (Abstract base classes) עבור ספקי reCAPTCHA ו-hCaptcha.
* שופר: ארגון מחדש של קוד הבסיס למחלקות ספקים מודולריות.
* שופר: הפרדה טובה יותר של תחומי אחריות עם מחלקת מנהל ייעודית.
* תוקן: שיפורי אבטחה לסינון משתנה $_SERVER.
* תוקן: תצורת בדיקות PHPUnit עבור קונבנציות שמות של WordPress.

גרסה: 1.0.1 - שוחררה ב-2025-09-28

* שינוי קידומת ל-ultimate-multisite; עדכון תחום הטקסט; העלאת גרסה.
