---
title: البدء في تطوير الإضافات
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# تطوير الإضافة

## هيكل الإضافة

```
my-addon/
├── my-addon.php                 # الملف الرئيسي للإضافة
├── inc/
│   ├── class-my-addon.php       # الفئة الرئيسية للإضافة
│   ├── admin-pages/             # واجهة الإدارة
│   ├── models/                  # نماذج البيانات المخصصة
│   └── integrations/            # التكاملات مع الطرف الثالث
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # ملفات القوالب
```

## قالب الملف الرئيسي للإضافة

```php
<?php
/**
 * اسم الإضافة: My Ultimate Multisite Addon
 * الوصف: إضافة مخصصة لـ Ultimate Multisite
 * الإصدار: 1.0.0
 * المؤلف: Your Name
 * يتطلب PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// الخروج إذا تم الوصول إليه مباشرة
defined('ABSPATH') || exit;

// تعريف الثوابت
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// التحقق مما إذا كان Ultimate Multisite نشطًا
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon requires Ultimate Multisite to be installed and activated.';
            echo '</p></div>';
        });
        return;
    }

    // تهيئة الإضافة
    My_Addon::get_instance();
});

/**
 * الفئة الرئيسية للإضافة
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * تهيئة الإضافة
     */
    public function init() {
        // تحميل الاعتمادات
        $this->load_dependencies();

        // إعداد الارتباطات
        $this->setup_hooks();

        // تهيئة المكونات
        $this->init_components();
    }

    /**
     * تحميل الملفات المطلوبة
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * إعداد الارتباطات
     */
    private function setup_hooks() {
        // التفعيل/الإلغاء
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // الارتباطات مع Ultimate Multisite
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * تهيئة المكونات
     */
    private function init_components() {
        // تهيئة صفحات الإدارة، النماذج، إلخ.
    }

    /**
     * تفعيل الإضافة
     */
    public function activate() {
        // إنشاء جداول مخصصة، تعيين الخيارات، إلخ
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * إلغاء تفعيل الإضافة
     */
    public function deactivate() {
        // تنظيف إذا لزم الأمر
    }

    /**
     * معالجة إكمال الدفع
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // منطق مخصص عند إكمال الدفع
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * إضافة حقول الدفع المخصصة
     */
    public function add_custom_fields($fields, $form) {
        $fields['company_size'] = [
            'type' => 'select',
            'title' => 'Company Size',
            'options' => [
                'small' => '1-10 employees',
                'medium' => '11-100 employees',
                'large' => '100+ employees'
            ],
            'required' => false
        ];

        return $fields;
    }
}
```

## مثال على نموذج مخصص

```php
<?php

namespace My_Addon\Models;

/**
 * نموذج العميل المخصص
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * اسم النموذج
     */
    protected $model = 'lead';

    /**
     * تعيين جدول قاعدة البيانات
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * الحصول على اسم الشركة
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * تعيين اسم الشركة
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * تحويل العميل إلى عميل
     */
    public function convert_to_customer($user_data = []) {
        // إنشاء مستخدم WordPress
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // إنشاء عميل Ultimate Multisite
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // نسخ بيانات العميل إلى العميل
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // تحديد العميل كمحول
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## تكامل صفحة الإدارة

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * صفحة الإدارة المخصصة
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * معرف الصفحة
     */
    protected $id = 'my-addon-leads';

    /**
     * موضع القائمة
     */
    protected $position = 30;

    /**
     * تهيئة الصفحة
     */
    public function init() {
        // تسجيل مع Ultimate Multisite
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * تسجيل صفحة الإدارة
     */
    public function register() {
        wu_register_admin_page($this->id, [
            'title' => __('Leads', 'my-addon'),
            'menu_title' => __('Leads', 'my-addon'),
            'capability' => 'wu_read_leads',
            'position' => $this->position,
            'parent' => 'ultimate-multisite',
            'callback' => [$this, 'render']
        ]);
    }

    /**
     * عرض الصفحة
     */
    public function render() {
        // الحصول على بيانات العملاء
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // عرض القالب
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## اختبار إضافةك

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // إنشاء عميل اختبار
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // إنشاء عضوية اختبار
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // محاكاة إرسال النموذج
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // التحقق من حفظ البيانات
        $saved_value = $this->customer->get_meta('company_size');
        $this->assertEquals('medium', $saved_value);
    }

    private function create_test_plan() {
        return wu_create_product([
            'name' => 'Test Plan',
            'type' => 'plan',
            'price' => 50,
            'duration' => 1,
            'duration_unit' => 'month'
        ])->get_id();
    }
}
```

## الخطوات التالية

- راجع [مرجع الارتباطات](/developer/hooks) للأفعال والمرشحات المتاحة
- تحقق من [نظرة عامة على واجهة برمجة التطبيقات](/developer/rest-api/overview) للتكامل مع API
- استخدم [قالب الإضافة](/addons/addon-template) كنقطة انطلاق
