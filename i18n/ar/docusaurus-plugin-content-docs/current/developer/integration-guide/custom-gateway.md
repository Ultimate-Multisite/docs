---
title: تطوير بوابة مخصصة
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# تطوير بوابة مخصصة {#custom-gateway-development}

يمكنك إنشاء بوابات دفع مخصصة عبر توسيع الفئة `Base_Gateway`.

## فئة البوابة {#gateway-class}

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

## تسجيل البوابة {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## الطرق الرئيسية {#key-methods}

| الطريقة | الغرض |
|--------|---------|
| `process_single_payment()` | معالجة المدفوعات لمرة واحدة |
| `process_signup()` | إعداد الاشتراكات المتكررة |
| `process_refund()` | معالجة طلبات الاسترداد |
| `get_payment_methods()` | إرجاع طرق الدفع المحفوظة للعميل |

## بيانات اعتماد التجديد للعضويات المتكررة {#renewal-credentials-for-recurring-memberships}

يتيح Ultimate Multisite v2.13.0 لتكاملات البوابات الإبلاغ عمّا إذا كانت العضوية المتكررة لديها بيانات اعتماد تجديد قابلة لإعادة الاستخدام قبل استمرار `auto_renew`. اربط `wu_membership_has_renewal_credential` وأرجع:

- `true` عندما تحتوي العضوية على اشتراك بوابة، أو اتفاقية فوترة، أو رمز خزنة، أو طريقة دفع مكافئة قابلة لإعادة الاستخدام.
- `false` عندما تعرف البوابة أن بيانات الاعتماد المتكررة مفقودة أو غير قابلة للاستخدام.
- `null` لإلغاء المشاركة وترك السلوك الافتراضي دون تغيير.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

عندما تُرجع بوابة `false`، يحفظ Ultimate Multisite العضوية مع تعطيل التجديد التلقائي ويخزن علامة بيانات اعتماد مفقودة. استخدم `wu_membership_renewal_credential_missing` لإخطار المسؤولين، أو بدء مسار إعادة تفويض، أو إضافة ملاحظات دعم:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

امسح علامة بيانات الاعتماد المفقودة كجزء من مسار إعادة التفويض الناجح الخاص ببوابتك بعد تخزين بيانات اعتماد جديدة قابلة لإعادة الاستخدام.

## نصائح {#tips}

- أرجع دائمًا `WP_Error` عند الفشل حتى يتمكن Ultimate Multisite من التعامل مع عرض الخطأ
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- استخدم `wu_log_add()` للتسجيل الخاص بالبوابة

## إمكانات موفّر موصل AI {#ai-connector-provider-capabilities}

ينبغي أن تتوافق التكاملات المخصصة التي تستدعي عمليات مدعومة بموصل AI مع مجموعة موفري OAuth المدعومة التي قُدمت مع AI Provider for Anthropic Max v1.3.0:

| الموفّر | ملاحظات الإمكانية |
|---|---|
| **Anthropic Max** | يدعم سير عمل مجموعة حسابات OAuth الحالي. حافظ على حمولات استخدام أدوات Anthropic، بما في ذلك مصفوفات الأدوات الفارغة وتوقيعات التفكير ذهابًا وإيابًا، عند تمرير طلبات الموصل عبر وكيل. |
| **OpenAI ChatGPT/Codex** | يدعم سير عمل مجموعة OAuth وسلوك دعم الأدوات الكامل للعمليات المدعومة بالموصل. مرّر تعريفات الأدوات ونتائج استدعاء الأدوات دون إزالة بيانات تعريف الأدوات الخاصة بـ Codex. |
| **Google AI Pro** | يدعم سير عمل مجموعة OAuth وتكامل الموفّر المدعوم بـ SDK. حدّث حسابات الموفّر بعد اكتمال OAuth قبل توجيه الطلبات. |

تمت إزالة تكامل Cursor Pro ومسارات الإعداد. لا تسجّل Cursor Pro كموفّر قابل للاختيار ولا تعرض تعليمات OAuth الخاصة بـ Cursor في واجهات موصل مخصصة.

بالنسبة إلى البيئات المعزولة أو عديمة الواجهة، اعرض مسار OAuth الاحتياطي اليدوي حتى يتمكن المسؤولون من لصق بيانات التفويض المُعادة وإكمال اتصال الحساب دون الاعتماد على إعادة توجيه تلقائية في المتصفح.
