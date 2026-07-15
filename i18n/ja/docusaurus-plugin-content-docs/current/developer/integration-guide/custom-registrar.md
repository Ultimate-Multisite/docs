---
title: カスタムレジストラ統合の構築
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# カスタムレジストラ連携の構築

Domain Seller アドオンは、**Integration Registry** パターンを使用しています。各レジストラは、`Domain_Selling_Capability` を実装し、`wu_domain_seller_register_capabilities` アクションフックを通じて自身を登録する PHP クラスです。

このガイドでは、カスタムレジストラを組み込む方法を説明します。

## インターフェース {#the-interface}

クラスは、`WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` を実装し、`WP_Ultimo\Integrations\Base_Capability_Module` を継承する必要があります。

必須メソッド：

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- 必須の識別メソッド (Base_Capability_Module から) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // 常に 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('My Registrar を介したドメイン登録を有効にします。', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- コア必須メソッド (Domain_Selling_Capability から) ---

    /** 利用可能なすべての TLD と卸売価格を同期します。 */
    public function sync_tlds(): array { ... }

    /** $domain_name が $tlds の中で利用可能かチェックします。 */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** TLD の N 年間の卸売価格を取得します。 */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** ドメインを登録します。成功した場合は ['success' => true, 'expiry_date' => '...'] を返します。 */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** ドメインを N 年間更新します。 */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** ドメインの登録ステータス、有効期限、ネームサーバーを取得します。 */
    public function get_domain_info(string $domain_name): array { ... }

    /** API の認証情報と接続性をテストします。 */
    public function test_connection(): array { ... }
}
```

### オプションメソッド {#optional-methods}

これらを実装することで、追加の機能が利用可能になります。アドオンは `method_exists()` を使ってサポート状況を検出します。

| メソッド | 実現できる機能 |
|---|---|
| `supports_whois_privacy(): bool` | 製品設定での WHOIS プライバシーオプション |
| `enable_whois_privacy(string $domain_name): array` | 登録時の自動プライバシー有効化 |
| `get_dns_records(string $domain_name): array` | 顧客向け DNS ビュータブ |
| `add_dns_record(string $domain_name, array $record_data): array` | 顧客による DNS レコードの追加 |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | 顧客による DNS レコードの編集 |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | 顧客による DNS レコードの削除 |
| `update_nameservers(string $domain_name, array $nameservers): array` | ネームサーバー管理 |
| `get_epp_code(string $domain_name): array` | ドメイン移管（送信側） |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | ドメイン移管（受信側） |

### 戻り値の規約 {#return-value-convention}

すべてのメソッドは、最低限 `success` キーを持つ配列を返します。

```php
// 成功時
return ['success' => true, 'data' => [...]];

// 失敗時
return ['success' => false, 'message' => '人間が読めるエラーメッセージ'];
```

---

## 機能の登録 {#registering-your-capability}

`wu_domain_seller_register_capabilities` アクションを使用して、クラスを登録します。

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` の最初の引数は**プロバイダーID**です。これは、設定、製品構成、ログチャネルでレジストラを識別するために使用される小文字のスラッグです。固有のものを使用してください（例：自社のスラッグ）。

---

## ウィザードに認証情報フィールドを追加する {#adding-credential-fields-to-the-wizard}

管理者がセットアップウィザードを通じて認証情報を入力できるようにするには、連携を登録します。

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

認証情報は、フィールドIDをキーとしてネットワークオプションに保存されます。これらは、`wu_get_setting('my_registrar_api_key')` を使って、Capability クラス内で取得できます。

---

## 登録後のアクションのためのフック {#hooks-for-post-registration-actions}

これらのアクションを使用すると、Webhook のトリガー、プロビジョニング、通知、または CRM の更新を行うことができます。

```php
// ドメイン登録成功後
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: 生のレジストラからのレスポンス
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// 登録失敗後
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("ドメイン登録に失敗しました: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// 更新成功後
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // 請求システムを更新したり、領収書を送信したりします。
}, 10, 3);

// 更新失敗後
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // アラート、リトライロジックなどを実行します。
}, 10, 3);

// ドメイン移管完了後
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain は WP_Ultimo\Models\Domain オブジェクトです
}, 10, 2);

// SES DKIM 検証完了後（SES 連携が有効な場合）
add_action('wu_domain_ses_verified', function($domain) {
    // $domain は WP_Ultimo\Models\Domain オブジェクトです
});
```

---

## ロギング {#logging}

`wu_log_add()` を使用して、プロバイダー固有のログチャネルに書き込みます。

```php
wu_log_add('domain-seller-my-registrar', "{$domain_name} の登録に成功しました", 'info');
wu_log_add('domain-seller-my-registrar', "登録に失敗しました: {$error}", 'error');
```

ログは **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** の下に表示されます。
