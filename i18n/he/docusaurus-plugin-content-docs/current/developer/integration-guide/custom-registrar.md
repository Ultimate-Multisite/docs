---
title: בניית אינטגרציה של רשם מותאם אישית
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# בניית אינטגרציה של רשם דומיינים מותאם אישית

התוסף Domain Seller משתמש בדפוס **Integration Registry** (מנגנון רישום אינטגרציות). כל רשם (registrar) הוא מחלקת PHP שמיישמת את הממשק `Domain_Selling_Capability` ורושמת את עצמה דרך ה-action hook `wu_domain_seller_register_capabilities`.

מדריך זה מראה כיצד לחבר רשם דומיינים מותאם אישית.

## הממשק (The interface)

המחלקה שלך חייבת ליישם את `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` ולרכוב על `WP_Ultimo\Integrations\Base_Capability_Module`.

שיטות נדרשות:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- שיטות מזהות נדרשות (מ-Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // תמיד 'domain-selling'
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

    // --- שיטות ליבה נדרשות (מ-Domain_Selling_Capability) ---

    /** מביא את כל TLDs הזמינים ותמחור סיטונאי. */
    public function sync_tlds(): array { ... }

    /** בודק זמינות של $domain_name על פני $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** מקבל מחיר סיטונאי ל-TLD למשך N שנים. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** רושם דומיין. מחזיר ['success' => true, 'expiry_date' => '...'] בהצלחה. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** מחַדֵש דומיין למשך N שנים. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** מקבל סטטוס רישום, תאריך תפוגה, Nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** בודק פרטי אימות API וקישוריות. */
    public function test_connection(): array { ... }
}
```

### שיטות אופציונליות

יישום שיטות אלו משחרר תכונות נוספות. התוסף מזהה תמיכה באמצעות `method_exists()`:

| שיטה | משחרר |
|---|---|
| `supports_whois_privacy(): bool` | אפשרות פרטיות WHOIS בהגדרות המוצר |
| `enable_whois_privacy(string $domain_name): array` | הפעלה אוטומטית של פרטיות ברישום |
| `get_dns_records(string $domain_name): array` | לשונית תצוגת DNS ללקוח |
| `add_dns_record(string $domain_name, array $record_data): array` | הלקוח יכול להוסיף רשומות DNS |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | הלקוח יכול לערוך רשומות DNS |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | הלקוח יכול למחוק רשומות DNS |
| `update_nameservers(string $domain_name, array $nameservers): array` | ניהול Nameservers |
| `get_epp_code(string $domain_name): array` | העברת דומיין (יציאה) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | העברת דומיין (כניסה) |

### קונבנציית ערך ההחזרה

כל השיטות מחזירות מערך (array) עם לפחות מפתח `success`:

```php
// הצלחה
return ['success' => true, 'data' => [...]];

// כישלון
return ['success' => false, 'message' => 'שגיאה קריאה לבני אדם'];
```

---

## רישום היכולת שלך

רשום את המחלקה שלך באמצעות ה-action `wu_domain_seller_register_capabilities`:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

הארגומנט הראשון ל-`add_capability()` הוא **מזהה הספק** (provider ID) — סלאג קטן באותיות נמוכות המשמש לזיהוי הרשם שלך בהגדרות, בהגדרת המוצר ובערוצי הלוגים. השתמש במשהו ייחודי (למשל, סלאג של החברה שלך).

---

## הוספת שדות אימות למעגל ההגדרה (Wizard)

כדי לאפשר למנהלים להזין פרטי אימות דרך מעגל ההגדרה, רשום את האינטגרציה שלך:

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

פרטי האימות נשמרים כאפשרויות רשת (network options) באמצעות מזהי השדות כמפתחות. שחזר אותם במחלקת היכולת שלך באמצעות `wu_get_setting('my_registrar_api_key')`.

---

## Hooks עבור פעולות לאחר רישום

השתמש ב-actions אלו כדי להפעיל Webhooks, Provisioning, התראות או עדכוני CRM:

```php
// לאחר רישום דומיין מוצלח
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: תגובת רשם גולמית
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// לאחר כישלון רישום
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// לאחר חידוש מוצלח
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // עדכן את מערכת החיוב שלך, שלח קבלה וכו'.
}, 10, 3);

// לאחר כישלון חידוש
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // התראה, לוגיקת ניסיון מחדש וכו'.
}, 10, 3);

// לאחר השלמת העברת דומיין
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain הוא אובייקט WP_Ultimo\Models\Domain
}, 10, 2);

// לאחר אימות SES DKIM (אם אינטגרציית SES פעילה)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain הוא אובייקט WP_Ultimo\Models\Domain
});
```

---

## רישום לוגים (Logging)

כתוב לצינור הלוגים הספציפי לספק שלך באמצעות `wu_log_add()`:

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

הלוגים מופיעים תחת **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**.
