---
title: 플러그인 관리 기능
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# 플러그인 관리 기능

Gratis AI Agent v1.5.0에는 AI 어시스턴트가 대화 중에 호출할 수 있는 **7가지 플러그인 관리 기능**이 포함되어 있습니다. 이 기능들은 [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox)을 통해 설치된 WordPress 플러그인에 대한 프로그래밍 방식의 제어 기능을 제공합니다.

## 기능 개요 {#abilities-overview}

| 기능 | Slug | 설명 |
|---|---|---|
| 플러그인 목록 보기 | `list_plugins` | 샌드박스 스토어에 있는 플러그인 목록과 그 상태를 반환합니다. |
| 플러그인 가져오기 | `get_plugin` | 슬러그를 사용하여 특정 플러그인의 메타데이터와 소스 코드를 검색합니다. |
| 플러그인 생성 | `create_plugin` | 설명으로부터 새로운 플러그인을 생성하고 샌드박스에 저장합니다. |
| 플러그인 업데이트 | `update_plugin` | 플러그인의 소스 코드를 새 버전으로 교체합니다. |
| 플러그인 삭제 | `delete_plugin` | 샌드박스 스토어에서 플러그인을 제거합니다. 먼저 비활성화합니다. |
| 플러그인 설치 | `install_plugin` | 샌드박스화된 플러그인을 실제 WordPress 플러그인 디렉토리에 배포합니다. |
| 플러그인 활성화 | `activate_plugin` | 샌드박스화된 플러그인을 wp-env 샌드박스 환경에서 활성화합니다. |

## 플러그인 설치 API {#plugin-installer-api}

플러그인 설치기는 플러그인을 배포하거나 제거할 때 파일 시스템 작업을 처리합니다. 주요 동작 방식은 다음과 같습니다.

- **경로 유효성 검사**: 모든 플러그인 경로는 파일 쓰기 작업이 발생하기 전에 허용된 플러그인 디렉토리와 비교하여 유효성이 검사됩니다. 디렉토리 순회 시도는 거부됩니다.
- **다중 파일 설치**: 플러그인은 여러 파일로 구성될 수 있습니다. 설치기는 플러그인 디렉토리를 생성하고 모든 파일을 원자적으로(atomically) 작성합니다.
- **업데이트**: 기존 플러그인 파일을 교체합니다. 부분적인 상태 오류를 방지하기 위해 쓰기 전에 플러그인을 비활성화합니다.
- **슬러그로 삭제**: 슬러그를 통해 플러그인 디렉토리를 찾고, 모든 사이트에서 비활성화한 다음, 디렉토리를 제거합니다.

### 사용자 지정 설치 핸들러 등록 {#registering-a-custom-install-handler}

`gratis_ai_plugin_installer_before_install` 및 `gratis_ai_plugin_installer_after_install` 액션을 사용하여 설치 라이프사이클에 후킹할 수 있습니다.

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: 플러그인의 디렉토리 이름
    // $files: 상대 경로 => 파일 내용의 연관 배열
    error_log("플러그인 설치 중: {$slug} (파일 수: " . count($files) . ")");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("플러그인 {$slug} 설치 성공.");
    }
}, 10, 2);
```

## 에코시스템 레지스트리 {#ecosystem-registry}

기능들은 **플러그인 에코시스템 레지스트리**를 통해 등록됩니다. 이 레지스트리는 기능 슬러그를 해당 핸들러 클래스에 매핑하고 AI 에이전트의 툴 디스패처에 노출합니다.

사용자 지정 플러그인 관리 기능을 등록하려면:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => '나의 사용자 지정 기능',
        'description' => '플러그인을 사용하여 유용한 작업을 수행합니다.',
    ];
    return $abilities;
});
```

사용자 지정 기능 클래스는 `Gratis_AI_Ability_Interface`를 구현해야 합니다.

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => '플러그인을 사용하여 유용한 작업을 수행합니다.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => '작업할 플러그인 슬러그.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... 구현 로직 ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## HookScanner 통합 {#hookscanner-integration}

`create_plugin` 및 `update_plugin` 기능은 새로 생성된 코드에 대해 자동으로 **HookScanner**를 실행합니다. HookScanner는 플러그인이 등록한 WordPress 액션 및 필터 훅 목록을 반환합니다.

HookScanner 결과를 프로그래밍 방식으로 가져오려면:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Action: {$hook['hook']} — 콜백: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filter: {$hook['hook']} — 콜백: {$hook['callback']}\n";
}
```

HookScanner는 `vendor/` 및 `node_modules/` 디렉토리는 자동으로 건너뜁니다.

## 비동기 작업 아키텍처 {#async-job-architecture}

오래 실행되는 플러그인 작업(생성, 설치)은 실시간 진행 상황 추적과 함께 **비동기 작업(async jobs)**으로 전송됩니다. AI 채팅 인터페이스는 진행 상황을 폴링(polling)하고 사용자에게 상태 업데이트를 스트리밍합니다.

1. **전송(Dispatch)** — 기능이 비동기 작업을 생성하고 작업 ID를 반환합니다.
2. **폴링(Poll)** — 에이전트는 2초마다 `gratis_ai_job_status($job_id)`를 폴링합니다.
3. **스트리밍(Stream)** — 중간 진행 메시지가 채팅 스레드로 푸시됩니다.
4. **완료(Complete)** — 최종 결과(성공 또는 오류)가 반환되어 표시됩니다.

작업 라이프사이클 이벤트에 후킹하려면:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("작업 {$job_id} 시작됨. 기능: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("작업 {$job_id} 완료. 성공 여부: " . ($result['success'] ? '예' : '아니오'));
}, 10, 2);
```
