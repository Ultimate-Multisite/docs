---
title: פיתוח שער מותאם אישית
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# פיתוח Gateway מותאם אישית {#custom-gateway-development}

אפשר ליצור שערי תשלום מותאמים אישית על ידי הרחבת המחלקה `Base_Gateway`.

## מחלקת Gateway {#gateway-class}

```php
class My_Custom_Gateway extends \WP_Ultimo\Gateways\Base_Gateway {

    public $id = 'my_gateway';

    public function __construct() {
        $this->title = 'My Payment Gateway';
        $this->description = 'Custom payment processing';
        $this->supports = ['one-time', 'recurring'];

        parent::__construct();
    }

    public function process_single_payment($payment, $cart, $order) {
        $result = $this->api_call('charge', [
            'amount' => $payment->get_total(),
            'currency' => $payment->get_currency(),
            'customer' => $payment->get_customer_id()
        ]);

        if ($result->success) {
            $payment->set_gateway_payment_id($result->transaction_id);
            $payment->set_status('completed');
            return true;
        }

        return new WP_Error('payment_failed', $result->error_message);
    }

    public function process_signup($membership, $customer, $cart, $order) {
        $subscription = $this->api_call('subscription/create', [
            'customer_id' => $customer->get_gateway_customer_id(),
            'plan_id' => $membership->get_plan()->get_gateway_plan_id(),
            'trial_days' => $membership->get_trial_days()
        ]);

        if ($subscription->success) {
            $membership->set_gateway_subscription_id($subscription->id);
            return true;
        }

        return new WP_Error('subscription_failed', $subscription->error);
    }
}
```

## רישום ה-Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## מתודות מרכזיות {#key-methods}

| מתודה | מטרה |
|--------|---------|
| `process_single_payment()` | טיפול בתשלומים חד-פעמיים |
| `process_signup()` | הגדרת מינויים חוזרים |
| `process_refund()` | טיפול בבקשות החזר |
| `get_payment_methods()` | החזרת שיטות תשלום שמורות עבור לקוח |

## אישורי חידוש עבור חברויות חוזרות {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 מאפשרת לאינטגרציות Gateway לדווח אם לחברות חוזרת יש אישור חידוש ניתן לשימוש חוזר לפני ש-`auto_renew` נשמר. חברו את `wu_membership_has_renewal_credential` והחזירו:

- `true` כאשר לחברות יש מינוי Gateway, הסכם חיוב, אסימון כספת, או שיטת תשלום מקבילה הניתנת לשימוש חוזר.
- `false` כאשר ה-Gateway יודע שהאישור החוזר חסר או אינו ניתן לשימוש.
- `null` כדי לוותר ולהשאיר את התנהגות ברירת המחדל ללא שינוי.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

כאשר Gateway מחזיר `false`, Ultimate Multisite שומרת את החברות כאשר חידוש אוטומטי מושבת ומאחסנת סימון של אישור חסר. השתמשו ב-`wu_membership_renewal_credential_missing` כדי להודיע למנהלים, להתחיל תהליך אישור מחדש, או להוסיף הערות תמיכה:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

נקו את סימון האישור החסר כחלק מתהליך האישור מחדש המוצלח של ה-Gateway שלכם לאחר שמאוחסן אישור חדש הניתן לשימוש חוזר.

## טיפים {#tips}

- החזירו תמיד `WP_Error` בעת כישלון כדי ש-Ultimate Multisite תוכל לטפל בהצגת השגיאה
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- השתמשו ב-`wu_log_add()` לרישום יומן ספציפי ל-Gateway

## יכולות ספק של מחבר AI {#ai-connector-provider-capabilities}

אינטגרציות מותאמות אישית שקוראות לפעולות המגובות במחבר AI צריכות להתיישר עם מערך ספקי OAuth הנתמך שהוצג עם AI Provider for Anthropic Max v1.3.0:

| ספק | הערות יכולת |
|---|---|
| **Anthropic Max** | תומך בתזרים העבודה הקיים של מאגר חשבונות OAuth. שמרו על מטעני שימוש-בכלים של Anthropic, כולל מערכי כלים ריקים וחתימות חשיבה הלוך-חזור, בעת תיווך בקשות מחבר. |
| **OpenAI ChatGPT/Codex** | תומך בתזרים העבודה של מאגר OAuth ובהתנהגות תמיכה מלאה בכלים עבור פעולות הנתמכות על ידי המחבר. העבירו הגדרות כלים ותוצאות קריאות לכלים ללא הסרת מטא-נתוני כלים ספציפיים ל-Codex. |
| **Google AI Pro** | תומך בתזרים העבודה של מאגר OAuth ובאינטגרציית ספק המגובה ב-SDK. רעננו חשבונות ספק לאחר השלמת OAuth לפני ניתוב בקשות. |

אינטגרציית Cursor Pro ונתיבי ההגדרה הוסרו. אל תרשמו את Cursor Pro כספק ניתן לבחירה ואל תציגו הוראות OAuth ספציפיות ל-Cursor בממשקי משתמש של מחברים מותאמים אישית.

עבור סביבות מבודדות או ללא ממשק גרפי, חשפו את נתיב הגיבוי הידני של OAuth כדי שמנהלים יוכלו להדביק את נתוני ההרשאה שהוחזרו ולהשלים את חיבור החשבון בלי להסתמך על הפניית דפדפן אוטומטית.
