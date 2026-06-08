---
title: 建置自訂的註冊商整合
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# 建立自訂註冊商整合

Domain Seller 外掛使用了 **整合註冊表 (Integration Registry)** 模式。每個註冊商都是一個實作了 `Domain_Selling_Capability` 介面，並透過 `wu_domain_seller_register_capabilities` action hook 進行註冊的 PHP 類別。

本指南將展示如何接入一個自訂的註冊商。

## 介面 (The interface)

您的類別必須實作 `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability`，並繼承 `WP_Ultimo\Integrations\Base_Capability_Module`。

所需方法：

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Required identity methods (from Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // always 'domain-selling'
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

    // --- Core required methods (from Domain_Selling_Capability) ---

    /** Pull all available TLDs and wholesale pricing. */
    public function sync_tlds(): array { ... }

    /** Check availability of $domain_name across $tlds. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Get wholesale price for a TLD for N years. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Register a domain. Returns ['success' => true, 'expiry_date' => '...'] on success. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Renew a domain for N years. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Get registration status, expiry date, nameservers. */
    public function get_domain_info(string $domain_name): array { ... }

    /** Test API credentials and connectivity. */
    public function test_connection(): array { ... }
}
```

### 可選方法 (Optional methods)

實作這些方法可以解鎖額外的功能。外掛會透過 `method_exists()` 來偵測支援性：

| Method | 解鎖功能 |
|---|---|
| `supports_whois_privacy(): bool` | 產品設定中的 WHOIS 隱私選項 |
| `enable_whois_privacy(string $domain_name): array` | 註冊時自動啟用隱私 |
| `get_dns_records(string $domain_name): array` | 客戶 DNS 檢視分頁 |
| `add_dns_record(string $domain_name, array $record_data): array` | 客戶可以新增 DNS 記錄 |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | 客戶可以編輯 DNS 記錄 |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | 客戶可以刪除 DNS 記錄 |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver 管理 |
| `get_epp_code(string $domain_name): array` | 域名轉移（出站） |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | 域名轉移（入站） |

### 回傳值慣例 (Return value convention)

所有方法都必須回傳一個包含至少 `success` 鍵的陣列：

```php
// 成功
return ['success' => true, 'data' => [...]];

// 失敗
return ['success' => false, 'message' => 'Human-readable error'];
```

---

## 註冊您的功能 (Registering your capability)

請使用 `wu_domain_seller_register_capabilities` action 來註冊您的類別：

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` 的第一個參數是 **提供者 ID (provider ID)** — 這是一個小寫的 slug，用於在設定、產品配置和日誌頻道中識別您的註冊商。請使用一個獨特的名稱（例如：您的公司 slug）。

---

## 為嚮導新增憑證欄位 (Adding credential fields to the wizard)

若要讓管理員透過設定嚮導輸入憑證，請註冊您的整合：

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

憑證會以欄位 ID 作為鍵儲存為網路選項 (network options)。您可以使用 `wu_get_setting('my_registrar_api_key')` 在您的功能類別中檢索它們。

---

## 註冊後動作的 Hooks (Hooks for post-registration actions)

使用這些 action 來觸發 webhooks、配置、通知或 CRM 更新：

```php
// 成功註冊域名後
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: raw registrar response
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// 註冊失敗後
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain registration failed: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// 成功續訂後
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // 更新您的帳單系統、發送收據等。
}, 10, 3);

// 續訂失敗後
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // 警報、重試邏輯等。
}, 10, 3);

// 域名轉移完成後
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain 是一個 WP_Ultimo\Models\Domain 物件
}, 10, 2);

// SES DKIM 驗證完成後（如果啟用了 SES 整合）
add_action('wu_domain_ses_verified', function($domain) {
    // $domain 是一個 WP_Ultimo\Models\Domain 物件
});
```

---

## 日誌記錄 (Logging)

使用 `wu_log_add()` 寫入您提供者專屬的日誌頻道：

```php
wu_log_add('domain-seller-my-registrar', "Registered {$domain_name} successfully", 'info');
wu_log_add('domain-seller-my-registrar', "Registration failed: {$error}", 'error');
```

日誌將出現在 **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar**。
