---
title: アドオン開発入門
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# アドオン開発

## アドオン構造

```
my-addon/
├── my-addon.php                 # メインプラグインファイル
├── inc/
│   ├── class-my-addon.php       # メインアドオンクラス
│   ├── admin-pages/             # 管理インターフェース
│   ├── models/                  # カスタムデータモデル
│   └── integrations/            # サードパーティ統合
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # テンプレートファイル
```

## メインアドオンファイルテンプレート

```php
<?php
/**
 * Plugin Name: My Ultimate Multisite Addon
 * Description: Ultimate Multisite用のカスタムアドオン
 * Version: 1.0.0
 * Author: Your Name
 * Requires PHP: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// Exit if accessed directly
defined('ABSPATH') || exit;

// Define constants
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Ultimate Multisiteが有効か確認
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon requires Ultimate Multisite to be installed and activated.';
            echo '</p></div>';
        });
        return;
    }

    // アドオンを初期化
    My_Addon::get_instance();
});

/**
 * メインアドオンクラス
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * アドオンを初期化
     */
    public function init() {
        // 依存関係を読み込む
        $this->load_dependencies();

        // フックを設定
        $this->setup_hooks();

        // コンポーネントを初期化
        $this->init_components();
    }

    /**
     * 必要なファイルを読み込む
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * WordPressフックを設定
     */
    private function setup_hooks() {
        // 有効化/無効化
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisiteフック
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * アドオンコンポーネントを初期化
     */
    private function init_components() {
        // 管理ページ、モデルなどを初期化
    }

    /**
     * プラグイン有効化
     */
    public function activate() {
        // カスタムテーブルを作成し、オプションを設定するなど
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * プラグイン無効化
     */
    public function deactivate() {
        // 必要に応じてクリーンアップ
    }

    /**
     * チェックアウト完了時の処理
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // チェックアウト完了時のカスタムロジック
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * カスタムチェックアウトフィールドを追加
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

## カスタムモデル例

```php
<?php

namespace My_Addon\Models;

/**
 * カスタムリードモデル
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * モデル名
     */
    protected $model = 'lead';

    /**
     * データベーステーブルを設定
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * 会社名を取得
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * 会社名を設定
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * リードを顧客に変換
     */
    public function convert_to_customer($user_data = []) {
        // WordPressユーザーを作成
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Ultimate Multisite顧客を作成
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // リードデータを顧客にコピー
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // リードを変換済みとしてマーク
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## 管理ページ統合

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * カスタム管理ページ
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * ページID
     */
    protected $id = 'my-addon-leads';

    /**
     * メニュー位置
     */
    protected $position = 30;

    /**
     * ページを初期化
     */
    public function init() {
        // Ultimate Multisiteに登録
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * 管理ページを登録
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
     * ページをレンダリング
     */
    public function render() {
        // リードデータを取得
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // テンプレートをレンダリング
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## アドオンのテスト

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // テスト顧客を作成
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // テストメンバーシップを作成
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // フォーム送信をシミュレート
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // データが保存されたことを確認
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

## 次のステップ

- 利用可能なアクションとフィルタについては、[Hooks Reference](/developer/hooks) を確認してください
- API統合については、[REST API Overview](/developer/rest-api/overview) を確認してください
- 開始スキャフォールドとして [Addon Template](/addons/addon-template) を使用してください
