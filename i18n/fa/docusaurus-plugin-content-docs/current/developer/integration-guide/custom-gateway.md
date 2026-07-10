---
title: توسعه درگاه سفارشی
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# توسعه درگاه سفارشی {#custom-gateway-development}

می‌توانید با گسترش کلاس `Base_Gateway` درگاه‌های پرداخت سفارشی ایجاد کنید.

## کلاس درگاه {#gateway-class}

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

## ثبت درگاه {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## روش‌های کلیدی {#key-methods}

| روش | هدف |
|--------|---------|
| `process_single_payment()` | مدیریت پرداخت‌های یک‌باره |
| `process_signup()` | راه‌اندازی اشتراک‌های دوره‌ای |
| `process_refund()` | مدیریت درخواست‌های بازپرداخت |
| `get_payment_methods()` | بازگرداندن روش‌های پرداخت ذخیره‌شده برای یک مشتری |

## اعتبارنامه‌های تمدید برای عضویت‌های دوره‌ای {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 به یکپارچه‌سازی‌های درگاه اجازه می‌دهد پیش از ذخیره شدن `auto_renew` گزارش دهند که آیا یک عضویت دوره‌ای اعتبارنامه تمدید قابل‌استفادهٔ مجدد دارد یا نه. `wu_membership_has_renewal_credential` را hook کنید و برگردانید:

- `true` وقتی عضویت یک اشتراک درگاه، توافق‌نامه صورت‌حساب، توکن vault، یا روش پرداخت قابل‌استفادهٔ مجدد معادل دارد.
- `false` وقتی درگاه می‌داند اعتبارنامه دوره‌ای وجود ندارد یا قابل‌استفاده نیست.
- `null` برای انصراف و بدون تغییر نگه داشتن رفتار پیش‌فرض.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

وقتی یک درگاه `false` برمی‌گرداند، Ultimate Multisite عضویت را با تمدید خودکار غیرفعال ذخیره می‌کند و یک نشانگر اعتبارنامهٔ مفقود ذخیره می‌کند. از `wu_membership_renewal_credential_missing` برای آگاه‌سازی مدیران، شروع یک جریان مجوزدهی دوباره، یا افزودن یادداشت‌های پشتیبانی استفاده کنید:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

نشانگر اعتبارنامهٔ مفقود را پس از ذخیره شدن یک اعتبارنامهٔ قابل‌استفادهٔ مجدد جدید، به‌عنوان بخشی از جریان مجوزدهی دوبارهٔ موفق درگاه خود پاک کنید.

## نکته‌ها {#tips}

- همیشه در صورت شکست `WP_Error` برگردانید تا Ultimate Multisite بتواند نمایش خطا را مدیریت کند
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- از `wu_log_add()` برای ثبت گزارش‌های اختصاصی درگاه استفاده کنید

## قابلیت‌های ارائه‌دهنده کانکتور AI {#ai-connector-provider-capabilities}

یکپارچه‌سازی‌های سفارشی که عملیات پشتیبانی‌شده با کانکتور AI را فراخوانی می‌کنند باید با مجموعه ارائه‌دهندگان OAuth پشتیبانی‌شده که با AI Provider for Anthropic Max v1.3.0 معرفی شده است همسو باشند:

| ارائه‌دهنده | یادداشت‌های قابلیت |
|---|---|
| **Anthropic Max** | از گردش‌کار مجموعه Accountهای OAuth موجود پشتیبانی می‌کند. هنگام پروکسی کردن درخواست‌های کانکتور، payloadهای استفاده از ابزار Anthropic را، از جمله آرایه‌های ابزار خالی و امضاهای تفکر رفت‌وبرگشتی، حفظ کنید. |
| **OpenAI ChatGPT/Codex** | از گردش‌کار مجموعه OAuth و رفتار کامل پشتیبانی از ابزار برای عملیات پشتیبانی‌شده توسط کانکتور پشتیبانی می‌کند. تعریف‌های ابزار و نتایج فراخوانی ابزار را بدون حذف metadata اختصاصی Codex عبور دهید. |
| **Google AI Pro** | از گردش‌کار مجموعه OAuth و یکپارچه‌سازی ارائه‌دهندهٔ پشتیبانی‌شده با SDK پشتیبانی می‌کند. پس از تکمیل OAuth، پیش از مسیریابی درخواست‌ها، Accountهای ارائه‌دهنده را تازه‌سازی کنید. |

یکپارچه‌سازی Cursor Pro و مسیرهای راه‌اندازی حذف شده‌اند. Cursor Pro را به‌عنوان یک ارائه‌دهنده قابل‌انتخاب ثبت نکنید و دستورالعمل‌های OAuth اختصاصی Cursor را در UIهای کانکتور سفارشی نمایش ندهید.

برای محیط‌های sandboxed یا headless، مسیر جایگزین دستی OAuth را ارائه کنید تا مدیران بتوانند داده‌های مجوزدهی بازگردانده‌شده را جای‌گذاری کنند و اتصال Account را بدون تکیه بر تغییرمسیر خودکار مرورگر کامل کنند.
