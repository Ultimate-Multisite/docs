---
title: カスタムゲートウェイ開発
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# カスタムゲートウェイ開発

`Base_Gateway` クラスを拡張して、カスタム決済ゲートウェイを作成できます。

## ゲートウェイクラス {#gateway-class}

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

## ゲートウェイを登録する {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## 主要メソッド {#key-methods}

| メソッド | 目的 |
|--------|---------|
| `process_single_payment()` | 1回限りの支払いを処理する |
| `process_signup()` | 継続サブスクリプションを設定する |
| `process_refund()` | 返金リクエストを処理する |
| `get_payment_methods()` | 顧客の保存済み決済方法を返す |

## 継続メンバーシップの更新認証情報 {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 では、`auto_renew` が保存される前に、ゲートウェイ連携が継続メンバーシップに再利用可能な更新認証情報があるかどうかを報告できます。`wu_membership_has_renewal_credential` をフックし、次を返します。

- メンバーシップにゲートウェイサブスクリプション、請求契約、保管トークン、または同等の再利用可能な決済方法がある場合は `true`。
- ゲートウェイが、継続認証情報がない、または使用できないことを把握している場合は `false`。
- オプトアウトして既定の動作を変更しない場合は `null`。

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

ゲートウェイが `false` を返すと、Ultimate Multisite は自動更新を無効にしてメンバーシップを保存し、認証情報不足のマーカーを保存します。管理者への通知、再認証フローの開始、またはサポートメモの追加には `wu_membership_renewal_credential_missing` を使用します。

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

新しい再利用可能な認証情報が保存された後、ゲートウェイの再認証フローが成功した一部として、認証情報不足のマーカーを消去してください。

## ヒント {#tips}

- 失敗時は必ず `WP_Error` を返し、Ultimate Multisite がエラー表示を処理できるようにします
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- ゲートウェイ固有のログ記録には `wu_log_add()` を使用します

## AI コネクタープロバイダーの機能 {#ai-connector-provider-capabilities}

AI コネクターに基づく操作を呼び出すカスタム連携は、AI Provider for Anthropic Max v1.3.0 で導入された対応済み OAuth プロバイダーセットに合わせる必要があります。

| プロバイダー | 機能に関するメモ |
|---|---|
| **Anthropic Max** | 既存の OAuth Account プールのワークフローに対応しています。コネクターリクエストをプロキシする際は、空のツール配列や往復の思考シグネチャを含む Anthropic のツール使用ペイロードを保持してください。 |
| **OpenAI ChatGPT/Codex** | OAuth プールのワークフローと、コネクター対応操作の完全なツール対応動作に対応しています。Codex 固有のツールメタデータを削除せず、ツール定義とツール呼び出し結果をそのまま渡してください。 |
| **Google AI Pro** | OAuth プールのワークフローと、SDK に基づくプロバイダー連携に対応しています。リクエストをルーティングする前に、OAuth 完了後のプロバイダー Account を更新してください。 |

Cursor Pro 連携と設定経路は削除されました。Cursor Pro を選択可能なプロバイダーとして登録したり、カスタムコネクター UI で Cursor 固有の OAuth 手順を表示したりしないでください。

サンドボックス化された環境やヘッドレス環境では、手動 OAuth フォールバック経路を公開し、管理者が返された認可データを貼り付けて、自動ブラウザーリダイレクトに依存せずに Account 接続を完了できるようにしてください。
