---
title: Khả năng quản lý plugin
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Khả năng Quản lý Plugin {#plugin-management-abilities}

Gratis AI Agent v1.5.0 đi kèm với **7 khả năng quản lý plugin** mà trợ lý AI có thể gọi trong quá trình trò chuyện. Các khả năng này cung cấp khả năng kiểm soát lập trình đối với các plugin WordPress được cài đặt thông qua [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Tổng quan về Khả năng {#abilities-overview}

| Khả năng | Slug | Mô tả |
|---|---|---|
| List Plugins | `list_plugins` | Trả về danh sách các plugin trong kho sandbox cùng với trạng thái của chúng. |
| Get Plugin | `get_plugin` | Truy xuất siêu dữ liệu và mã nguồn cho một plugin cụ thể theo slug. |
| Create Plugin | `create_plugin` | Tạo một plugin mới từ mô tả và lưu nó vào sandbox. |
| Update Plugin | `update_plugin` | Thay thế mã nguồn của plugin bằng một phiên bản mới. |
| Delete Plugin | `delete_plugin` | Xóa một plugin khỏi kho sandbox. Trước tiên sẽ hủy kích hoạt nó. |
| Install Plugin | `install_plugin` | Triển khai một plugin trong sandbox vào thư mục plugin WordPress thực tế. |
| Activate Plugin | `activate_plugin` | Kích hoạt một plugin trong sandbox trong môi trường sandbox wp-env. |

## API Cài đặt Plugin {#plugin-installer-api}

Bộ cài đặt plugin xử lý các thao tác hệ thống tệp khi triển khai hoặc xóa plugin. Các hành vi chính bao gồm:

- **Xác thực đường dẫn (Path validation)**: Tất cả các đường dẫn plugin đều được xác thực với thư mục plugin được phép trước khi bất kỳ thao tác ghi tệp nào diễn ra. Các nỗ lực duyệt thư mục (Directory traversal) sẽ bị từ chối.
- **Cài đặt đa tệp (Multi-file install)**: Một plugin có thể bao gồm nhiều tệp. Bộ cài đặt sẽ tạo thư mục plugin và ghi tất cả các tệp một cách nguyên tử (atomically).
- **Cập nhật (Update)**: Thay thế các tệp plugin hiện có. Nó sẽ hủy kích hoạt plugin trước khi ghi để tránh lỗi trạng thái một phần.
- **Xóa theo slug (Delete by slug)**: Định vị thư mục plugin bằng slug, hủy kích hoạt trên tất cả các trang web, sau đó xóa thư mục.

### Đăng ký Bộ xử lý Cài đặt Tùy chỉnh {#registering-a-custom-install-handler}

Bạn có thể móc nối vào vòng đời cài đặt bằng cách sử dụng các action `gratis_ai_plugin_installer_before_install` và `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: tên thư mục của plugin
    // $files: mảng liên kết (associative array) của đường dẫn tương đối => nội dung tệp
    error_log("Đang cài đặt plugin: {$slug} với " . count($files) . " tệp.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} đã được cài đặt thành công.");
    }
}, 10, 2);
```

## Registry Hệ sinh thái (Ecosystem Registry) {#ecosystem-registry}

Các khả năng được đăng ký thông qua **registry hệ sinh thái plugin**. Registry này ánh xạ các slug khả năng tới các lớp xử lý (handler classes) của chúng và cung cấp chúng cho bộ điều phối công cụ (tool dispatcher) của agent AI.

Để đăng ký một khả năng quản lý plugin tùy chỉnh:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'Khả năng Tùy chỉnh của tôi',
        'description' => 'Thực hiện một việc hữu ích với các plugin.',
    ];
    return $abilities;
});
```

Lớp khả năng của bạn phải triển khai `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Thực hiện một việc hữu ích với các plugin.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'Slug của plugin cần thao tác.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... triển khai của bạn ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Tích hợp HookScanner {#hookscanner-integration}

Các khả năng `create_plugin` và `update_plugin` tự động chạy **HookScanner** trên mã được tạo mới. HookScanner sẽ trả về danh sách các hook action và filter của WordPress được đăng ký bởi plugin.

Để truy xuất kết quả HookScanner bằng lập trình:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Action: {$hook['hook']} — callback: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filter: {$hook['hook']} — callback: {$hook['callback']}\n";
}
```

HookScanner tự động bỏ qua các thư mục `vendor/` và `node_modules/`.

## Kiến trúc Công việc Bất đồng bộ (Async Job Architecture) {#async-job-architecture}

Các thao tác plugin chạy lâu (tạo, cài đặt) được gửi đi dưới dạng **công việc bất đồng bộ (async jobs)** với khả năng theo dõi tiến độ trực tiếp. Giao diện chat AI sẽ thăm dò (poll) tiến độ và truyền luồng (stream) các cập nhật trạng thái đến người dùng:

1. **Dispatch (Gửi đi)** — khả năng này tạo một công việc bất đồng bộ và trả về một ID công việc.
2. **Poll (Thăm dò)** — agent thăm dò `gratis_ai_job_status($job_id)` sau mỗi 2 giây.
3. **Stream (Truyền luồng)** — các thông báo tiến độ trung gian được đẩy vào luồng chat.
4. **Complete (Hoàn thành)** — kết quả cuối cùng (thành công hoặc lỗi) được trả về và hiển thị.

Để móc nối vào các sự kiện vòng đời công việc:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Công việc {$job_id} đã bắt đầu cho khả năng: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Công việc {$job_id} đã hoàn thành. Thành công: " . ($result['success'] ? 'có' : 'không'));
}, 10, 2);
```
