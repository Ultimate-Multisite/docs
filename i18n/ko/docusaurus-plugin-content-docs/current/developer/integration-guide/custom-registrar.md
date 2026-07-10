---
title: 커스텀 레지스트라 통합 구축하기
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# 사용자 지정 레지스트라 통합 구축하기 {#building-a-custom-registrar-integration}

Domain Seller 애드온은 **통합 레지스트리(Integration Registry)** 패턴을 사용합니다. 각 레지스트라는 `Domain_Selling_Capability`를 구현하는 PHP 클래스이며, `wu_domain_seller_register_capabilities` 액션 훅을 통해 자신을 등록합니다.

이 가이드는 사용자 지정 레지스트라를 연결하는 방법을 보여줍니다.

## 인터페이스 {#the-interface}

사용자의 클래스는 `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability`를 구현하고 `WP_Ultimo\Integrations\Base_Capability_Module`을 상속받아야 합니다.

필수 메서드:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- 필수 식별 메서드 (Base_Capability_Module에서 상속) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // 항상 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('My 레지스트라를 통해 도메인 등록 기능을 활성화합니다.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- 핵심 필수 메서드 (Domain_Selling_Capability에서 상속) ---

    /** 사용 가능한 모든 TLD와 도매 가격을 가져옵니다. */
    public function sync_tlds(): array { ... }

    /** $tlds 전반에 걸쳐 $domain_name의 사용 가능 여부를 확인합니다. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** TLD에 대한 N년 도매 가격을 가져옵니다. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** 도메인을 등록합니다. 성공 시 ['success' => true, 'expiry_date' => '...']를 반환합니다. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** 도메인을 N년 동안 갱신합니다. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** 도메인 정보, 만료일, 네임서버를 가져옵니다. */
    public function get_domain_info(string $domain_name): array { ... }

    /** API 자격 증명과 연결 상태를 테스트합니다. */
    public function test_connection(): array { ... }
}
```

### 선택적 메서드 {#optional-methods}

이 메서드들을 구현하면 추가 기능을 활성화할 수 있습니다. 애드온은 `method_exists()`를 통해 지원 여부를 감지합니다.

| 메서드 | 활성화 기능 |
|---|---|
| `supports_whois_privacy(): bool` | 제품 설정에서 WHOIS 개인 정보 보호 옵션 제공 |
| `enable_whois_privacy(string $domain_name): array` | 등록 시 개인 정보 보호 자동 활성화 |
| `get_dns_records(string $domain_name): array` | 고객 DNS 보기 탭 제공 |
| `add_dns_record(string $domain_name, array $record_data): array` | 고객이 DNS 레코드 추가 가능 |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | 고객이 DNS 레코드 편집 가능 |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | 고객이 DNS 레코드 삭제 가능 |
| `update_nameservers(string $domain_name, array $nameservers): array` | 네임서버 관리 기능 |
| `get_epp_code(string $domain_name): array` | 도메인 이전 (나가는 경우) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | 도메인 이전 (들어오는 경우) |

### 반환 값 규칙 {#return-value-convention}

모든 메서드는 최소한 `success` 키를 포함하는 배열을 반환해야 합니다.

```php
// 성공 시
return ['success' => true, 'data' => [...]];

// 실패 시
return ['success' => false, 'message' => '사람이 읽을 수 있는 오류 메시지'];
```

---

## 기능 등록하기 {#registering-your-capability}

`wu_domain_seller_register_capabilities` 액션을 사용하여 클래스를 등록합니다.

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()`의 첫 번째 인수는 **제공자 ID(provider ID)**입니다. 이는 설정, 제품 구성 및 로그 채널에서 레지스트라를 식별하는 데 사용되는 소문자 슬러그입니다. 고유한 값(예: 회사 슬러그)을 사용하세요.

---

## 위자드에 자격 증명 필드 추가하기 {#adding-credential-fields-to-the-wizard}

관리자가 설정 위자드를 통해 자격 증명을 입력할 수 있도록 하려면, 통합을 등록해야 합니다.

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

자격 증명은 필드 ID를 키로 사용하여 네트워크 옵션으로 저장됩니다. 이 값들은 `wu_get_setting('my_registrar_api_key')`를 사용하여 기능 클래스 내에서 가져올 수 있습니다.

---

## 등록 후 액션용 훅(Hooks) {#hooks-for-post-registration-actions}

이 액션들을 사용하여 웹훅(webhook), 프로비저닝(provisioning), 알림 또는 CRM 업데이트를 트리거할 수 있습니다.

```php
// 도메인 등록 성공 후
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: 원본 레지스트라 응답
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// 등록 실패 후
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("도메인 등록 실패: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// 갱신 성공 후
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // 결제 시스템 업데이트, 영수증 전송 등
}, 10, 3);

// 갱신 실패 후
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // 알림, 재시도 로직 등
}, 10, 3);

// 도메인 이전 완료 후
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain은 WP_Ultimo\Models\Domain 객체입니다.
}, 10, 2);

// SES DKIM 검증 완료 후 (SES 통합이 활성화된 경우)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain은 WP_Ultimo\Models\Domain 객체입니다.
});
```

---

## 로깅(Logging) {#logging}

`wu_log_add()`를 사용하여 제공자별 로그 채널에 기록합니다.

```php
wu_log_add('domain-seller-my-registrar', "{$domain_name} 등록 성공", 'info');
wu_log_add('domain-seller-my-registrar', "등록 실패: {$error}", 'error');
```

로그는 **사이트 관리 › Ultimate Multisite › 로그 › domain-seller-my-registrar**에서 확인할 수 있습니다.
