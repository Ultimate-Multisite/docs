---
title: بناء تكامل مسجل مخصص
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# بناء تكامل مسجل النطاقات المخصص

يستخدم إضافة Domain Seller نمط **سجل التكامل (Integration Registry)**. كل مسجل (registrar) هو فئة PHP تطبق واجهة `Domain_Selling_Capability` وتسجل نفسها عبر خطاف الحدث (action hook) المسمى `wu_domain_seller_register_capabilities`.

يوضح هذا الدليل كيفية توصيل مسجل مخصص.

## الواجهة (The interface) {#the-interface}

يجب أن تطبق فئتك (class) واجهة `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` وتُورث (extend) من `WP_Ultimo\Integrations\Base_Capability_Module`.

الأساليب المطلوبة:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- أساليب الهوية المطلوبة (من Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // يجب أن تكون دائمًا 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Enable domain registration via My Registrar.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- الأساليب الأساسية المطلوبة (من Domain_Selling_Capability) ---

    /** جلب جميع امتدادات النطاقات (TLDs) وتكاليف الجملة. */
    public function sync_tlds(): array { ... }

    /** التحقق من توفر اسم النطاق $domain_name عبر امتدادات $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** الحصول على سعر الجملة لامتداد نطاق معين (TLD) لعدد سنوات محدد. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** تسجيل نطاق. يُرجع ['success' => true, 'expiry_date' => '...'] في حالة النجاح. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** تجديد نطاق لعدد سنوات محدد. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** الحصول على معلومات النطاق، وتاريخ الانتهاء، وأسماء الخوادم (nameservers). */
    public function get_domain_info(string $domain_name): array { ... }

    /** اختبار بيانات اعتماد API والاتصال. */
    public function test_connection(): array { ... }
}
```

### الأساليب الاختيارية (Optional methods) {#optional-methods}

قم بتطبيق هذه الأساليب لفتح ميزات إضافية. يكتشف الإضافة الدعم عبر `method_exists()`:

| الأسلوب (Method) | الميزة التي يفتحها (Unlocks) |
|---|---|
| `supports_whois_privacy(): bool` | خيار خصوصية WHOIS في إعدادات المنتج |
| `enable_whois_privacy(string $domain_name): array` | تفعيل الخصوصية تلقائيًا عند التسجيل |
| `get_dns_records(string $domain_name): array` | علامة تبويب عرض DNS للعميل |
| `add_dns_record(string $domain_name, array $record_data): array` | يمكن للعميل إضافة سجلات DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | يمكن للعميل تعديل سجلات DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | يمكن للعميل حذف سجلات DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | إدارة أسماء الخوادم (Nameserver management) |
| `get_epp_code(string $domain_name): array` | نقل النطاق (خارجياً) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | نقل النطاق (داخلياً) |

### اتفاقية قيمة الإرجاع (Return value convention) {#return-value-convention}

تُرجع جميع الأساليب مصفوفة (array) تحتوي على مفتاح `success` كحد أدنى:

```php
// النجاح
return ['success' => true, 'data' => [...]];

// الفشل
return ['success' => false, 'message' => 'خطأ يمكن قراءته بواسطة الإنسان'];
```

---

## تسجيل الإضافة (Registering your capability) {#registering-your-capability}

سجّل فئتك باستخدام خطاف الحدث `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

الوسيط الأول في `add_capability()` هو **معرّف المزوّد (provider ID)** — وهو اسم (slug) بأحرف صغيرة يُستخدم لتحديد مسجلك في الإعدادات، وتكوين المنتج، وقنوات السجلات. استخدم شيئًا فريدًا (مثل اسم شركتك).

---

## إضافة حقول بيانات الاعتماد إلى المعالج (Adding credential fields to the wizard) {#adding-credential-fields-to-the-wizard}

للسماح للمسؤولين بإدخال بيانات الاعتماد عبر معالج الإعداد، سجّل الإضافة الخاصة بك:

```php
add_action('wu_domain_seller_register_integrations', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_integration('my-registrar', [
        'name'   => __('My Registrar', 'my-plugin'),
        'fields' => [
            [
                'id'    => 'my_registrar_api_key',
                'label' => __('API Key', 'my-plugin'),
                'type'  => 'text',
            ],
            [
                'id'    => 'my_registrar_api_secret',
                'label' => __('API Secret', 'my-plugin'),
                'type'  => 'password',
            ],
        ],
    ]);
});
```

يتم تخزين بيانات الاعتماد كخيارات شبكة (network options) باستخدام معرّفات الحقول كمفاتيح. يمكنك استردادها في فئة الإضافة الخاصة بك باستخدام `wu_get_setting('my_registrar_api_key')`.

---

## خطافات الإجراءات بعد التسجيل (Hooks for post-registration actions) {#hooks-for-post-registration-actions}

استخدم خطافات الأحداث (actions) هذه لتشغيل الـ webhooks، أو توفير الخدمات (provisioning)، أو الإشعارات، أو تحديثات نظام إدارة علاقات العملاء (CRM):

```php
// بعد نجاح تسجيل النطاق
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: استجابة المسجل الخام
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// بعد فشل التسجيل
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("فشل تسجيل النطاق: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// بعد نجاح التجديد
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // تحديث نظام الفواتير الخاص بك، أو إرسال إيصال، إلخ.
}, 10, 3);

// بعد فشل التجديد
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // التنبيه، منطق إعادة المحاولة، إلخ.
}, 10, 3);

// بعد اكتمال نقل النطاق
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain هو كائن WP_Ultimo\Models\Domain
}, 10, 2);

// بعد التحقق من SES DKIM (إذا كان تكامل SES نشطًا)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain هو كائن WP_Ultimo\Models\Domain
});
```

---

## التسجيل في السجلات (Logging) {#logging}

اكتب في قناة السجلات الخاصة بمزود الخدمة باستخدام `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "تم تسجيل {$domain_name} بنجاح", 'info');
wu_log_add('domain-seller-my-registrar', "فشل التسجيل: {$error}", 'error');
```

تظهر السجلات تحت **إدارة الشبكة (Network Admin) › Ultimate Multisite › السجلات (Logs) › domain-seller-my-registrar**.
