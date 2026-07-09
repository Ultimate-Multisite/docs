---
title: פקיעת חברות וחסימת אתר
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# תפוגת חברות וחסימת אתר {#membership-expiration-and-site-blocking}

מדריך זה מסביר כיצד Ultimate Multisite מטפל בתפוגת חברות, סיום תקופות ניסיון וחסימת אתר בחזית (frontend). הוא מכסה את מחזור החיים של חברות – ממצב פעיל למצב פג תוקף – את ההגדרות השולטות בשאלה האם האתר נחסם, ומה לבדוק כאשר האתר נשאר נגיש לאחר תפוגת החברות.

## מחזור חיי סטטוס החברות {#membership-status-lifecycle}

לכל חברות ב-Ultimate Multisite יש אחד מהסטטוסים הבאים:

:::note חברות חינם הן לכל החיים
חברות חינם אינן פוקעות אוטומטית. Ultimate Multisite מתייחס אליהן כאל גישה לכל החיים, ולכן הן אינן נכללות בבדיקות תפוגה אלא אם מנהל משנה את הסטטוס שלהן או מעביר את הלקוח למוצר אחר.
:::

| סטטוס | משמעות |
|---|---|
| **Pending** | ממתין לתשלום ראשון או לאימות אימייל |
| **Trialing** | תקופת ניסיון פעילה, טרם נאסף תשלום |
| **Active** | שולם ועדכני |
| **On Hold** | תשלום חידוש ממתין (נוצר חשבונית, ממתין לתשלום) |
| **Expired** | עבר תאריך התפוגה ותקופת החסד ללא חידוש |
| **Cancelled** | בוטל במפורש על ידי הלקוח או המנהל |

### כיצד חברות עוברות למצב Expired {#how-memberships-transition-to-expired}

Ultimate Multisite מריץ בדיקה רקע **בכל שעה** שמחפשת חברות שעומדות להיחשב כפגות תוקף. בדיקה זו משתמשת ב-[Action Scheduler](https://actionscheduler.org/) (ולא ב-WP-Cron ישירות) ומבוצעת כפעולה מתוזמנת בשם `wu_membership_check`.

לבדיקת התפוגה יש **תקופת חסד מובנית של 3 ימים** כברירת מחדל. חברות לא יסומנו כ-`expired` עד שחלפו 3 ימים מתאריך ה-`date_expiration`. זה נותן ללקוחות זמן להשלים תשלום מאוחר לפני שהסטטוס שלהם משתנה.

:::info
תקופת החסד של 3 הימים לתפוגה נפרדת מהגדרת תקופת החסד לחסימת החזית (Frontend Block Grace Period) שתוארה בהמשך. תקופת החסד לתפוגה שולטת מתי ה**סטטוס משתנה** מ-active/on-hold ל-expired. תקופת החסד לחסימת החזית שולטת מתי ה**אתר נחסם** לאחר שהסטטוס כבר השתנה.
:::

#### חברות מתחדשות אוטומטית מול חברות שאינן מתחדשות אוטומטית {#auto-renewing-vs-non-auto-renewing-memberships}

ההבחנה הזו קריטית להבנת התנהגות התפוגה:

- **חברות שאינן מתחדשות אוטומטית** (`auto_renew = false`): משימת הקרונ השעתית מטפלת במחזור החיים המלא – היא יוצרת תשלומים לחידוש, מעבירה את החברות למצב on-hold, ולבסוף מסמנת אותה כ-expired אם לא התקבל תשלום.

- **חברות המתחדשות אוטומטית** (`auto_renew = true`): בדיקת הקרונ לתפוגה **מדלגת על אלו לחלוטין**. מצופה שמערכת ה-payment gateway (Stripe, PayPal וכו') תודיע ל-Ultimate Multisite באמצעות ווּבְהוּק (webhook) כאשר מנוי נכשל או מבוטל. אם לא מתקבל הווּבְהוּק – עקב נקודת קצה (endpoint) שאינה מוגדרת כראוי, הפסקת שירות של ה-gateway, או ביטול מנוי מחוץ למערכת – החברות עלולה להישאר `active` ללא הגבלים גם לאחר שחלף תאריך התפוגה.

### כיצד מסתיימים הניסיונות (Trials) {#how-trials-end}

כאשר תקופת הניסיון של חברות מסתיימת, המערכת:

1. יוצרת תשלום חידוש ממתין בסכום המלא של המנוי.
2. מעבירה את סטטוס החברות מ-`trialing` ל-`on-hold`.
3. שולחת אימייל התראה על תשלום חידוש ללקוח.

תהליך זה רץ באותו לוח זמנים שעתי כמו בדיקת התפוגה הרגילה, אך **רק עבור חברות שאינן מתחדשות אוטומטית**. עבור ניסיונות המתחדשים אוטומטית, מערכת ה-payment gateway מטפלת במעבר מניסיון למנוי בתשלום.

## חסימת הגישה לחזית (Frontend) {#block-frontend-access}

ברירת מחדל, כאשר חברות פגה או עוברת למצב on hold, **רק דשבורד ה-wp-admin מוגבל**. החזית הציבורית של האתר נשארת נגישה למבקרים. כדי לחסום גם גישה ציבורית, עליך להפעיל את ההגדרה **Block Frontend Access**.

### הגדרת ההגדרה {#configuring-the-setting}

נווט אל **Ultimate Multisite > Settings > Memberships** והפעל את **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

להלן תצוגה מלאה של דף הגדרות החברות:

![Membership settings full page](/img/config/settings-membership-full.png)

שלוש הגדרות קשורות שולטות בהתנהגות זו:

| הגדרה | תיאור | ברירת מחדל |
|---|---|---|
| **Block Frontend Access** | מתג ראשי. כאשר הוא מופעל, הוא חוסם את החזית הציבורית של אתרי הרשת כאשר החברות שלהם אינה פעילה יותר. | כבוי |
| **Frontend Block Grace Period** | מספר הימים שיש להמתין לאחר שהחברות הופכת ללא פעילה לפני החסימה. הגדר ל-`0` כדי לחסום מיד. | 0 |
| **Frontend Block Page** | דף באתר הראשי אליו ינותב המבקרים כאשר האתר נחסם. אם לא הוגדר, המבקרים יראו הודעה כללית "Site not available". | None |

### מה המבקרים רואים כאשר האתר נחסם {#what-visitors-see-when-a-site-is-blocked}

כאשר הגישה לחזית נחסמת, המבקרים באתר יראו אחת מהאפשרויות הבאות:

1. **הם ינותבו** לדף שהגדרת ב**Frontend Block Page** (אם הוגדר), או
2. **יראו הודעה ברירת מחדל**: "This site is not available at the moment." עם קישור לדף ההתחברות של מנהל האתר.

מנהלי אתרים עדיין יכולים להתחבר – דף ההתחברות לעולם אינו נחסם.

### מה נחסם ומתי {#what-gets-blocked-and-when}

ההתנהגות של החסימה תלויה בסטטוס החברות:

| סטטוס חברות | חסימת חזית? | תקופת חסד מיושמת? |
|---|---|---|
| Active | לא | -- |
| Trialing | **לא** (ראה הערה למטה) | -- |
| On Hold | נחשב פעיל -- לא נחסם | -- |
| Expired | **כן**, אם Block Frontend Access מופעל | כן |
| Cancelled | **כן**, תמיד (ללא קשר להגדרה) | **לא** -- נחסם מיד |
| Pending | לא נחסם באמצעות בדיקת החברות | -- |

:::warning חברות בתקופת ניסיון אינן נחסמות
גם אם תקופת הניסיון הסתיימה, חברות עם סטטוס `trialing` **לא** תחסום בחזית. הניסיון חייב לעבור קודם לסטטוס אחר (בדרך כלל `on-hold` באמצעות משימת הקרונ, ואז `expired` אם לא שולם). אם אתה רואה חברות בתקופת ניסיון שלא עברו מעבר, בדוק את קטע פתרון הבעיות למטה.
:::

:::note חברות שבוטלו עוקפות את תקופת החסד
חברות שבוטלו נחסמות תמיד לאחר שחלף תאריך התפוגה, ללא קשר לשאלה אם Block Frontend Access מופעל. תקופת החסד לחזית (Frontend Block Grace Period) **אינה** חלה על חברות שבוטלו.
:::

## פתרון בעיות: אתרים שנותרים נגישים לאחר תפוגה {#troubleshooting-sites-remaining-accessible-after-expiration}

אם אתרים נשארים נגישים לציבור לאחר תפוגת חברות, עקוב אחר הבדיקות הללו לפי סדר:

### 1. ודא שהגדרת Block Frontend Access מופעלת {#1-verify-the-block-frontend-access-setting-is-enabled}

עבור אל **Ultimate Multisite > Settings > Memberships** וודא שמיתוג **Block Frontend Access** מופעל. הגדרה זו **כבוי כברירת מחדל**, כלומר רק ה-wp-admin מוגבל כאשר חברות הופכת ללא פעילה.

### 2. בדוק את Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

באותו דף הגדרות, בדוק את ערך **Frontend Block Grace Period**. אם זה מוגדר ל-7 ימים, לדוגמה, החזית לא תיחסם עד 7 ימים לאחר תאריך תפוגת החברות – גם אם סטטוס החברות כבר `expired`.

הגדר זאת ל-`0` אם אתה רוצה חסימה מיידית לאחר שהחברות הופכת ללא פעילה.

### 3. אשר שהסטטוס של החברות השתנה בפועל {#3-confirm-the-membership-status-has-actually-changed}

עבור אל **Ultimate Multisite > Memberships** ובדוק את הסטטוס של החברות המושפעת. אם היא עדיין מציגה `active` למרות שחלף תאריך התפוגה, מעבר הסטטוס לא התרחש. סיבות נפוצות:

- **החברות מתחדשת אוטומטית**: בדוק את השדה `auto_renew` בדף עריכת החברות. אם החידוש האוטומטי מופעל, הקרונ של התפוגה מדלג על חברות זו -- הוא מסתמך על מערכת ה-payment gateway לדווח על הכשל. בדוק את דשבורד ה-gateway שלך (Stripe, PayPal) כדי לאשר שהסטטוס של המנוי תואם למה ש-Ultimate Multisite מציג.

- **משימת הקרונ לא רצה**: ראה את השלב הבא.

### 4. ודא ש-Action Scheduler רץ {#4-verify-action-scheduler-is-running}

Ultimate Multisite משתמש ב-Action Scheduler עבור משימות הקרונ שלו. עבור אל **Tools > Scheduled Actions** במנהל הרשת וחפש:

- **`wu_membership_check`** -- זה אמור להופיע כאקשן חוזר שרץ כל שעה. אם הוא חסר, בדיקות החברות אינן מתזמנות.
- **`wu_async_mark_membership_as_expired`** -- אלו משימות בודדות המסמנות חברות כפגות תוקף. אם אתה רואה פעולות שנכשלו כאן, ייתכן שהן מכילות הודעות שגיאה המסבירות מדוע.

אם אתה רואה פעולות תקועות או שנכשלו, ייתכן שיש לך בעיית Action Scheduler. סיבות נפוצות:

- **`DISABLE_WP_CRON` מוגדר ל-`true`** ב-`wp-config.php` ללא תחליף קרונ ברמת המערכת
- **תעבורה נמוכה באתר** -- WP-Cron רץ רק כאשר מישהו מבקר באתר

כדי להבטיח הרצת קרונ אמינה, הגדר משימת קרונ ברמת המערכת:

```bash
# Run every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Or via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. בדיקת בעיות ווּבְהוּק של ה-Gateway (חברות מתחדשות אוטומטית) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

אם החברות מתחדשת אוטומטית ומנוי ה-gateway בוטל או נכשל, אך Ultimate Multisite עדיין מציג אותה כ-`active`:

- **Stripe**: עבור לדשבורד של Stripe > Customers ובדוק את סטטוס המנוי. לאחר מכן ודא שנקודת הקצה של הווּבְהוּק פעילה תחת Developers > Webhooks. נקודת הקצה צריכה להצביע לאתר שלך ולהציג מסירות מוצלחות.
- **PayPal**: בדוק את סטטוס המנוי בחשבון העסק של PayPal שלך וודא את מסירת IPN/webhook.

אם ה-gateway מציג את המנוי כבוטל אך Ultimate Multisite לא, סביר להניח שההודעה של הווּבְהוּק אבדה. תוכל לשנות ידנית את סטטוס החברות ב-**Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. בדיקת תקופת החסד של התפוגה (רמת הקרונ) {#6-check-the-expiration-grace-period-cron-level}

לבדיקת הקרונ יש תקופת חסד משלה (ברירת מחדל: 3 ימים) לפני סימון חברות כפגות תוקף. זה נפרד מתקופת החסד לחסימת החזית. הזמן הכולל עד לחסימת האתר יכול להיות:

**תקופת החסד לתפוגה (3 ימים)** + **תקופת החסד לחסימת החזית (ההגדרה שלך)** = השהייה כוללת

לדוגמה, בהגדרות ברירת מחדל ותקופת חסד לחזית של 7 ימים, זה יכול לקחת עד 10 ימים לאחר ה-`date_expiration` עד שהאתר נחסם בפועל.

### 7. תפוגה ידנית של חברות {#7-manually-expire-a-membership}

אם אתה צריך לחסום אתר באופן מיידי מבלי להמתין למחזור הקרונ, אתה יכול לשנות ידנית את סטטוס החברות:

1. עבור אל **Ultimate Multisite > Memberships**
2. לחץ על החברות המושפעת
3. שנה את הסטטוס ל-**Expired** או **Cancelled**
4. לחץ **Save**

החסימה בחזית תיכנס לתוקף בעמוד הטעינה הבא (בהתאם לתקופת החסד לחזית עבור חברות פגות תוקף, או באופן מיידי עבור חברות שבוטלו).

## סיכום {#summary}

ציר הזמן המלא מתאריך התפוגה ועד חסימת האתר:

```text
date_expiration passes
       |
       v
  [3-day cron grace period]     <-- membership still shows as active/on-hold
       |
       v
  Cron marks membership as "expired"
       |
       v
  [Frontend Block Grace Period]  <-- configured in Settings > Memberships
       |
       v
  Site frontend is blocked
```

עבור חברות שבוטלו, המסלול קצר יותר:

```text
  Membership cancelled
       |
       v
  date_expiration passes (no grace period)
       |
       v
  Site frontend is blocked immediately
```

## הפניה למפתחים {#developer-reference}

ה-hooks וה-filters הבאים מאפשרים לך להתאים אישית את התנהגות התפוגה והחסימה:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Filter the number of grace period days before marking a membership as expired (default: 3) |
| `wu_schedule_membership_check_interval` | Filter the interval between membership checks (default: 1 hour) |
| `wu_membership_renewal_days_before_expiring` | Filter how many days before expiration to create a renewal payment (default: 3) |
| `wu_blocked_site_reactivation_url` | Filter to provide a custom reactivation URL when a site is blocked |
| `wu_membership_is_active` | Filter whether a membership is considered active |
| `wu_membership_expired_check_query_params` | Filter the query parameters used to find expired memberships |
| `wu_membership_trial_check_query_params` | Filter the query parameters used to find expired trials |
