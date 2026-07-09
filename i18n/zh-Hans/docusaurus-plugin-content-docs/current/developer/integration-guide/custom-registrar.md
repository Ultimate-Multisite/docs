---
title: 构建自定义注册商集成
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# 构建自定义注册商集成 {#building-a-custom-registrar-integration}

Domain Seller 附加组件使用了 **集成注册表** (Integration Registry) 模式。每个注册商都是一个实现了 `Domain_Selling_Capability` 接口的 PHP 类，并通过 `wu_domain_seller_register_capabilities` action hook 进行注册。

本指南将展示如何接入自定义的注册商。

## 接口要求 {#the-interface}

您的类必须实现 `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` 接口，并继承 `WP_Ultimo\Integrations\Base_Capability_Module` 类。

必需的方法：

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- 必需的身份识别方法 (来自 Base_Capability_Module) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // 始终为 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('通过 My Registrar 启用域名注册。', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- 核心必需方法 (来自 Domain_Selling_Capability) ---

    /** 拉取所有可用的 TLD 和批发定价。 */
    public function sync_tlds(): array { ... }

    /** 检查 $domain_name 在 $tlds 中的可用性。 */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** 获取 TLD N 年的批发价格。 */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** 注册域名。成功时返回 ['success' => true, 'expiry_date' => '...']。 */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** 续费域名 N 年。 */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** 获取域名信息，包括注册状态、到期日期、域名服务器。 */
    public function get_domain_info(string $domain_name): array { ... }

    /** 测试 API 凭证和连接性。 */
    public function test_connection(): array { ... }
}
```

### 可选方法 {#optional-methods}

实现这些方法可以解锁额外的功能。附加组件通过 `method_exists()` 来检测支持情况：

| 方法 | 解锁的功能 |
|---|---|
| `supports_whois_privacy(): bool` | 产品设置中的 WHOIS 隐私选项 |
| `enable_whois_privacy(string $domain_name): array` | 注册时自动启用隐私保护 |
| `get_dns_records(string $domain_name): array` | 客户 DNS 视图标签页 |
| `add_dns_record(string $domain_name, array $record_data): array` | 客户可以添加 DNS 记录 |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | 客户可以编辑 DNS 记录 |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | 客户可以删除 DNS 记录 |
| `update_nameservers(string $domain_name, array $nameservers): array` | 域名服务器管理 |
| `get_epp_code(string $domain_name): array` | 域名转出（Outgoing） |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | 域名转入（Incoming） |

### 返回值约定 {#return-value-convention}

所有方法都返回一个数组，至少包含一个 `success` 键：

```php
// 成功
return ['success' => true, 'data' => [...]];

// 失败
return ['success' => false, 'message' => '人类可读的错误信息'];
```

---

## 注册您的能力 {#registering-your-capability}

使用 `wu_domain_seller_register_capabilities` action 注册您的类：

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` 的第一个参数是 **提供商 ID** (provider ID) — 这是一个小写别名，用于在设置、产品配置和日志通道中识别您的注册商。请使用一个唯一的名称（例如，您的公司别名）。

---

## 为向导添加凭证字段 {#adding-credential-fields-to-the-wizard}

要让管理员通过设置向导输入凭证，请注册您的集成：

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

凭证作为网络选项 (network options) 存储，使用字段 ID 作为键。您可以使用 `wu_get_setting('my_registrar_api_key')` 在您的能力类中检索它们。

---

## 后注册操作的 Hooks {#hooks-for-post-registration-actions}

使用这些 action 来触发 Webhook、资源配置 (provisioning)、通知或 CRM 更新：

```php
// 域名注册成功后
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: 原始注册商响应
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// 注册失败后
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("域名注册失败: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// 续费成功后
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // 更新您的计费系统、发送收据等。
}, 10, 3);

// 续费失败后
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // 发出警报、重试逻辑等。
}, 10, 3);

// 域名转出完成后
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain 是一个 WP_Ultimo\Models\Domain 对象
}, 10, 2);

// SES DKIM 验证完成后（如果启用了 SES 集成）
add_action('wu_domain_ses_verified', function($domain) {
    // $domain 是一个 WP_Ultimo\Models\Domain 对象
});
```

---

## 日志记录 {#logging}

使用 `wu_log_add()` 写入您提供商特定的日志通道：

```php
wu_log_add('domain-seller-my-registrar', "成功注册 {$domain_name}", 'info');
wu_log_add('domain-seller-my-registrar', "注册失败: {$error}", 'error');
```

日志可以在 **网络管理 › Ultimate Multisite › 日志 › domain-seller-my-registrar** 下找到。
