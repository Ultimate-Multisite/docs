---
title: 애드온 개발 시작하기
sidebar_position: 1
_i18n_hash: 6f95a97374e61e57de3f8924d307b1bc
---
# Addon Development

## 애드온 구조

```
my-addon/
├── my-addon.php                 # Main plugin file
├── inc/
│   ├── class-my-addon.php       # Main addon class
│   ├── admin-pages/             # Admin interface
│   ├── models/                  # Custom data models
│   └── integrations/            # Third-party integrations
├── assets/
│   ├── js/
│   └── css/
└── templates/                   # Template files
```

## 메인 애드온 파일 템플릿

```php
<?php
/**
 * 플러그인 이름: My Ultimate Multisite Addon
 * 설명: Ultimate Multisite용 커스텀 애드온
 * 버전: 1.0.0
 * 작성자: Your Name
 * PHP 필요: 7.4
 * Ultimate Multisite: 2.0.0
 */

namespace My_Addon;

// 직접 접근 시 종료
defined('ABSPATH') || exit;

// 상수 정의
define('MY_ADDON_VERSION', '1.0.0');
define('MY_ADDON_PLUGIN_FILE', __FILE__);
define('MY_ADDON_PATH', plugin_dir_path(__FILE__));
define('MY_ADDON_URL', plugin_dir_url(__FILE__));

// Ultimate Multisite가 활성화되어 있는지 확인
add_action('plugins_loaded', function() {
    if (!class_exists('WP_Ultimo\WP_Ultimo')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-error"><p>';
            echo 'My Addon은 Ultimate Multisite가 설치 및 활성화되어 있어야 합니다.';
            echo '</p></div>';
        });
        return;
    }

    // 애드온 초기화
    My_Addon::get_instance();
});

/**
 * 메인 애드온 클래스
 */
class My_Addon {

    use \WP_Ultimo\Traits\Singleton;

    /**
     * 애드온 초기화
     */
    public function init() {
        // 의존성 로드
        $this->load_dependencies();

        // 워드프레스 훅 설정
        $this->setup_hooks();

        // 애드온 컴포넌트 초기화
        $this->init_components();
    }

    /**
     * 필수 파일 로드
     */
    private function load_dependencies() {
        require_once MY_ADDON_PATH . 'inc/class-my-addon.php';
    }

    /**
     * 워드프레스 훅 설정
     */
    private function setup_hooks() {
        // 활성화/비활성화
        register_activation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(MY_ADDON_PLUGIN_FILE, [$this, 'deactivate']);

        // Ultimate Multisite 훅
        add_action('wu_checkout_completed', [$this, 'on_checkout_completed'], 10, 3);
        add_filter('wu_checkout_form_fields', [$this, 'add_custom_fields'], 10, 2);
    }

    /**
     * 애드온 컴포넌트 초기화
     */
    private function init_components() {
        // 관리자 페이지, 모델 등 초기화
    }

    /**
     * 플러그인 활성화
     */
    public function activate() {
        // 커스텀 테이블 생성, 옵션 설정 등
        $this->create_custom_table();
        update_option('my_addon_version', MY_ADDON_VERSION);
    }

    /**
     * 플러그인 비활성화
     */
    public function deactivate() {
        // 필요 시 정리
    }

    /**
     * 체크아웃 완료 처리
     */
    public function on_checkout_completed($payment, $customer, $membership) {
        // 체크아웃 완료 시 커스텀 로직
        $this->send_welcome_email($customer);
        $this->setup_customer_account($customer, $membership);
    }

    /**
     * 커스텀 체크아웃 필드 추가
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

## 커스텀 모델 예시

```php
<?php

namespace My_Addon\Models;

/**
 * 커스텀 리드 모델
 */
class Lead extends \WP_Ultimo\Models\Base_Model {

    /**
     * 모델 이름
     */
    protected $model = 'lead';

    /**
     * 데이터베이스 테이블 설정
     */
    protected function set_table() {
        global $wpdb;
        $this->table_name = "{$wpdb->prefix}my_addon_leads";
    }

    /**
     * 회사 이름 가져오기
     */
    public function get_company() {
        return $this->get_meta('company');
    }

    /**
     * 회사 이름 설정
     */
    public function set_company($company) {
        return $this->add_meta('company', $company);
    }

    /**
     * 리드를 고객으로 변환
     */
    public function convert_to_customer($user_data = []) {
        // 워드프레스 사용자 생성
        $user_id = wp_create_user(
            $user_data['username'] ?? $this->get_email(),
            $user_data['password'] ?? wp_generate_password(),
            $this->get_email()
        );

        if (is_wp_error($user_id)) {
            return $user_id;
        }

        // Ultimate Multisite 고객 생성
        $customer = wu_create_customer([
            'user_id' => $user_id,
            'email_verification' => 'verified',
            'type' => 'customer'
        ]);

        if (is_wp_error($customer)) {
            return $customer;
        }

        // 리드 데이터를 고객에 복사
        $customer->add_meta('company', $this->get_company());
        $customer->add_meta('lead_source', $this->get_source());

        // 리드를 변환된 것으로 표시
        $this->set_status('converted');
        $this->add_meta('converted_customer_id', $customer->get_id());
        $this->save();

        return $customer;
    }
}
```

## 관리자 페이지 통합

```php
<?php

namespace My_Addon\Admin_Pages;

/**
 * 커스텀 관리자 페이지
 */
class Leads_Admin_Page extends \WP_Ultimo\Admin_Pages\Base_Admin_Page {

    /**
     * 페이지 ID
     */
    protected $id = 'my-addon-leads';

    /**
     * 메뉴 위치
     */
    protected $position = 30;

    /**
     * 페이지 초기화
     */
    public function init() {
        // Ultimate Multisite에 등록
        add_action('wu_register_admin_pages', [$this, 'register']);
    }

    /**
     * 관리자 페이지 등록
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
     * 페이지 렌더링
     */
    public function render() {
        // 리드 데이터 가져오기
        $leads = My_Addon\Models\Lead::query([
            'number' => 20,
            'paged' => absint($_GET['paged'] ?? 1)
        ]);

        // 템플릿 렌더링
        wu_get_template('admin/leads-list', [
            'leads' => $leads,
            'page_title' => __('Manage Leads', 'my-addon')
        ]);
    }
}
```

## 애드온 테스트

```php
<?php

class Test_My_Integration extends WP_UnitTestCase {

    public function setUp() {
        parent::setUp();

        // 테스트 고객 생성
        $this->customer = wu_create_customer([
            'user_id' => $this->factory->user->create(),
            'type' => 'customer'
        ]);

        // 테스트 멤버십 생성
        $this->membership = wu_create_membership([
            'customer_id' => $this->customer->get_id(),
            'plan_id' => $this->create_test_plan()
        ]);
    }

    public function test_custom_field_saves_correctly() {
        $checkout = new WP_Ultimo\Checkout\Checkout();

        // 폼 제출 시뮬레이션
        $_POST['company_size'] = 'medium';

        $result = $checkout->process_step_data([
            'company_size' => 'medium'
        ]);

        $this->assertTrue($result);

        // 데이터가 저장되었는지 확인
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

## 다음 단계

- 사용 가능한 액션 및 필터를 확인하려면 [Hooks Reference](/developer/hooks)를 검토하세요
- API 통합을 위해 [REST API Overview](/developer/rest-api/overview)를 확인하세요
- 시작 스캐폴드로 [Addon Template](/addons/addon-template)를 사용하세요
