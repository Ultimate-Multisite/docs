---
title: اؤزل درگاه گلیشدیرمه‌سی
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# اؤزل اؤده‌نیش گئچیدی گلیشدیرمه‌سی

`Base_Gateway` کلاسینی گئنیشله‌دیره‌رک اؤزل اؤده‌نیش گئچیدلری یارادا بیله‌رسینیز.

## گئچید کلاسی

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

## گئچیدی قئید ائدین

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## اساس متودلار

| متود | مقصد |
|--------|---------|
| `process_single_payment()` | بیر دفه‌لیک اؤده‌نیشلری ایداره ائدیر |
| `process_signup()` | تکرارلانان آبونه‌لیک‌لری قورور |
| `process_refund()` | گئری اؤده‌مه ایسته‌کلرینی ایداره ائدیر |
| `get_payment_methods()` | موشتری اوچون ساخلی اؤده‌نیش متودلارینی قایتاریر |

## تکرارلانان عضویت‌لر اوچون یئنیله‌مه اعتبارلاری

Ultimate Multisite v2.13.0 گئچید اینتگراسیالارینا ایمکان وئریر کی `auto_renew` ساخلامادان اؤنجه تکرارلانان عضویتین یئنی‌دن ایشله‌نه بیلن یئنیله‌مه اعتباری اولوب-اولمادیغینی بیلدیرسین. `wu_membership_has_renewal_credential` هوکونا قوشولون و بونو قایتارین:

- عضویتده گئچید آبونه‌لیگی، فاکتورلاشما رازلاشماسی، vault token، یا اونا تای یئنی‌دن ایشله‌نه بیلن اؤده‌نیش متودو وارسا، `true`.
- گئچید تکرارلانان اعتبارین یوخ یا ایشله‌مز اولدوغونو بیلیرسه، `false`.
- قوشولماماق و استاندارد داورانیشی ده‌ییشمه‌دن ساخلاماق اوچون `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

بیر گئچید `false` قایتارسا، Ultimate Multisite عضویتی خودکار یئنیله‌مه سؤندورولموش دورومدا ساخلییر و چاتیشمایان اعتبار نیشانی ساخلییر. مودیرلره خبر وئرمک، یئنی‌دن ایجازه آخیشینی باشلاتماق، یا ده‌ستک قئیدلری آرتیرماق اوچون `wu_membership_renewal_credential_missing` ایشلدین:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

یئنی یئنی‌دن ایشله‌نه بیلن اعتبار ساخلامادان سونرا، گئچیدینیزین اوغورلو یئنی‌دن ایجازه آخیشینین بیر حیصه‌سی کیمی چاتیشمایان اعتبار نیشانینی سیلین.

## ایپ‌اوجلاری

- اوغورسوزلوق‌دا همیشه `WP_Error` قایتارین کی Ultimate Multisite خطا گؤسترمه‌سینی ایداره ائده بیلسین
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- گئچیده مخصوص قئیدلر اوچون `wu_log_add()` ایشلدین

## AI connector provider قابلیّت‌لری

AI connector-ا دایانان عملیّاتلاری چاغیران اؤزل اینتگراسیالار، AI Provider for Anthropic Max v1.3.0 ایله تانیتدیریلَن ده‌ستکلنه‌ن OAuth provider مجموعه‌سی ایله اویغون اولمالیدیر:

| Provider | قابلیّت قئیدلری |
|---|---|
| **Anthropic Max** | موجود OAuth حساب حوضه‌سی ایش آخیشینی ده‌ستکله‌ییر. connector ایسته‌کلرینی پروکسی ائده‌رکن، بوش آلَت آرایه‌لری و گئدیب-قاییتمالی دوشونمه ایمضالاری دا داخیل اولماقلا، Anthropic آلَت ایشلتمه payload-لارینی قورویون. |
| **OpenAI ChatGPT/Codex** | OAuth حوضه ایش آخیشینی و connector-ین ده‌ستکله‌دیگی عملیّاتلار اوچون تام آلَت ده‌سته‌یینی ده‌ستکله‌ییر. آلَت تعریف‌لرینی و آلَت چاغیریش نتیجه‌لرینی Codex-ه مخصوص آلَت metadata-سینی سیلمدن اؤتورون. |
| **Google AI Pro** | OAuth حوضه ایش آخیشینی و SDK-یا دایانان provider اینتگراسیاسینی ده‌ستکله‌ییر. ایسته‌کلری یؤنلندیرمزدن اؤنجه OAuth بیتندن سونرا provider حسابلارینی یئنیله‌یین. |

Cursor Pro اینتگراسیاسی و قورولوش یوللاری سیلینیبدیر. Cursor Pro-نو سئچیله بیلن provider کیمی قئید ائتمه‌یین و اؤزل connector UI-لارینین ایچینده Cursor-ه مخصوص OAuth گؤستریشلری گؤسترمه‌یین.

sandbox یا headless محیط‌لر اوچون، ال ایله OAuth ائحطیات یولونو آچین کی مودیرلر قایتاریلان ایجازه بیلگیلرینی یاپیشدیریب، خودکار براوزر یؤنلندیرمه‌سینه باغلی اولمادان حساب باغلانتیسینی بیتیره بیلسینلر.
