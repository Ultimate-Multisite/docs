---
title: קאַסטאַם Gateway אַנטוויקלונג
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# אַנטוויקלונג פֿון אַ מנהג־Gateway

איר קענט שאַפֿן מנהג־צאָלונג־gateways דורך אויסברייטערן די `Base_Gateway` קלאַס.

## Gateway קלאַס

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

## רעגיסטרירן דעם Gateway

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## שליסל־מעטאָדן

| מעטאָד | ציל |
|--------|---------|
| `process_single_payment()` | באַהאַנדלען איין־מאָליקע צאָלונגען |
| `process_signup()` | אויפֿשטעלן ריקערנדיקע אַבאָנעמענטן |
| `process_refund()` | באַהאַנדלען צוריקצאָל־בקשות |
| `get_payment_methods()` | צוריקגעבן געראַטעוועטע צאָלונג־מעטאָדן פֿאַר אַ קונה |

## באַנײַונג־קרעדענציאַלן פֿאַר ריקערנדיקע מיטגלידערשאַפֿטן

Ultimate Multisite v2.13.0 לאָזט gateway־אינטעגראַציעס מעלדן צי אַ ריקערנדיקע מיטגלידערשאַפֿט האָט אַ ווידערניצבאַרן באַנײַונג־קרעדענציאַל איידער `auto_renew` ווערט אָפּגעהיט. האַקט `wu_membership_has_renewal_credential` און גיט צוריק:

- `true` ווען די מיטגלידערשאַפֿט האָט אַ gateway־אַבאָנעמענט, בילינג־אָפּמאַך, vault token, אָדער אַן עקוויוואַלענטן ווידערניצבאַרן צאָלונג־מעטאָד.
- `false` ווען דער gateway ווייסט אַז דער ריקערנדיקער קרעדענציאַל פֿעלט אָדער איז ניט ניצלעך.
- `null` כּדי זיך אַרויסצונעמען און לאָזן די סטאַנדאַרט־באַנעם אומגעביטן.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

ווען אַ gateway גיט צוריק `false`, היט Ultimate Multisite די מיטגלידערשאַפֿט מיט אויסגעלאָשענער אויטאָ־באַנײַונג און לייגט אַ פֿעלנדיק־קרעדענציאַל־צייכן אַוועק. ניצט `wu_membership_renewal_credential_missing` כּדי צו מעלדן אַדמיניסטראַטאָרן, אָנהייבן אַ ווידער־אויטאָריזאַציע־פֿלוס, אָדער צולייגן שטיצע־נאָטיצן:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

מעקט אויס דעם פֿעלנדיק־קרעדענציאַל־צייכן ווי אַ טייל פֿון אײַער gatewayס מצליחדיקן ווידער־אויטאָריזאַציע־פֿלוס נאָך דעם ווי אַ נײַער ווידערניצבאַרער קרעדענציאַל ווערט אָפּגעהיט.

## עצות

- גיט שטענדיק צוריק `WP_Error` בײַ דורכפֿאַל, כּדי Ultimate Multisite זאָל קענען באַהאַנדלען טעות־ווײַזונג
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- ניצט `wu_log_add()` פֿאַר gateway־ספּעציפֿישע לאָגנונג

## AI פֿאַרבינדער־פֿאַרזאָרגער מעגלעכקייטן

מנהג־אינטעגראַציעס וואָס רופֿן אָפּ AI פֿאַרבינדער־געשטיצטע אָפּעראַציעס זאָלן זיך צופּאַסן צום געשטיצטן OAuth פֿאַרזאָרגער־זאַמלונג, אַרײַנגעפֿירט מיט AI Provider for Anthropic Max v1.3.0:

| פֿאַרזאָרגער | מעגלעכקייט־נאָטיצן |
|---|---|
| **Anthropic Max** | שטיצט דעם עקזיסטירנדיקן OAuth Account־pool אַרבעטס־פֿלוס. היט אָפּ Anthropic tool-use payloads, אַרײַנגערעכנט ליידיקע tool arrays און round-trip thinking signatures, ווען מען פּראָקסיט פֿאַרבינדער־בקשות. |
| **OpenAI ChatGPT/Codex** | שטיצט דעם OAuth pool אַרבעטס־פֿלוס און פולע tool-support פֿירונג פֿאַר פֿאַרבינדער־געשטיצטע אָפּעראַציעס. גיט ווײַטער tool definitions און tool-call results אָן אַראָפּנעמען Codex־ספּעציפֿישע tool metadata. |
| **Google AI Pro** | שטיצט דעם OAuth pool אַרבעטס־פֿלוס און SDK־געשטיצטע פֿאַרזאָרגער־אינטעגראַציע. דערפֿרישט פֿאַרזאָרגער־Accounts נאָך OAuth־פֿאַרענדיקונג איידער מען רוטעט בקשות. |

Cursor Pro אינטעגראַציע און אויפֿשטעל־וועגן זענען אַוועקגענומען געוואָרן. רעגיסטרירט נישט Cursor Pro ווי אַן אויסקלײַבבאַרן פֿאַרזאָרגער און ווײַזט נישט פֿאָר Cursor־ספּעציפֿישע OAuth אינסטרוקציעס אין מנהג־פֿאַרבינדער UIs.

פֿאַר sandboxed אָדער headless סביבות, שטעלט אַרויס דעם מאַנועלן OAuth fallback־וועג, כּדי אַדמיניסטראַטאָרן זאָלן קענען אַרײַנקלעפּן די צוריקגעגעבענע אויטאָריזאַציע־דאַטן און פֿאַרענדיקן Account־פֿאַרבינדונג אָן זיך פֿאַרלאָזן אויף אַן אויטאָמאַטישן בלעטערער־redirect.
