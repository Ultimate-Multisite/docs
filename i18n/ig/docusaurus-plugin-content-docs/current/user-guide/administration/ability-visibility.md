---
title: Nche Ihe Ọ dị Mma
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Visibility Ability

Superdav AI Agent v1.12.0 nwere introduce **Ability Visibility** controls wey go govern which surfaces expose each ability. Eme this allow administrators fine-tune which agent capabilities dey available through REST APIs, MCP servers, WooCommerce integrations, and other interfaces.

## What is Ability Visibility?

Ability Visibility na permission system wey control:

- **Which abilities** dey available to agents
- **Where they're exposed** (REST API, MCP, WooCommerce, etc.)
- **Who fit access them** (via partner allow-lists)
- **How dem classify** (recognized vs. unclassified)

Each ability carry a visibility level wey determine its availability across different surfaces.

## Visibility Levels

### Public

**Public abilities** dey available everywhere:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- All user roles (with appropriate permissions)

Example: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal

**Internal abilities** dey available only within your WordPress installation:

- Chat interfaces
- Admin panels
- Logged-in users only
- Not exposed via REST API or external integrations

Example: `manage-settings`, `view-analytics`, `export-data`

### Partner

**Partner abilities** dey available only to whitelisted partners:

- Requires explicit partner allow-list entry
- Available via REST API with partner credentials
- Available via MCP with partner authentication
- Not available to regular users

Example: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled

**Disabled abilities** no dey available anywhere:

- Not exposed via any surface
- No available in chat
- No available in admin panels
- Useful for deprecated or experimental abilities

## Quản lý Khả năng Hiển thị

### Truy cập Cài đặt Khả năng Hiển thị

1. Vào **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Nhấn vào tab **Abilities** (Khả năng)
3. Bạn sẽ thấy danh sách tất cả các khả năng đã cài đặt cùng với mức độ hiển thị của chúng.

### Xem Chi tiết Khả năng

Nhấn vào bất kỳ khả năng nào để xem:

- **Name**: Mã định danh của khả năng đó
- **Description**: Khả năng đó làm gì
- **Current visibility**: Công khai (Public), Nội bộ (Internal), Đối tác (Partner) hoặc Đã tắt (Disabled)
- **Partner allow-list**: Những đối tác nào có thể truy cập (nếu là hiển thị Đối tác)
- **Last updated**: Lần cuối mức độ hiển thị được thay đổi khi nào
- **Status**: Đã nhận diện (Recognized) hay Chưa phân loại (Unclassified)

### Thay đổi Mức độ Hiển thị

Để thay đổi mức độ hiển thị của một khả năng:

1. Nhấn vào khả năng đó trong danh sách
2. Chọn một mức độ hiển thị mới từ menu thả xuống
3. Nếu chọn "Partner" (Đối tác), hãy thêm mã định danh đối tác vào danh sách cho phép (allow-list)
4. Nhấn **Save** (Lưu)

Ví dụ:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Các thao tác Hàng loạt

Để thay đổi hiển thị cho nhiều khả năng cùng lúc:

1. Tích vào các ô bên cạnh các khả năng bạn muốn thay đổi
2. Chọn một mức độ hiển thị mới từ menu thả xuống hành động hàng loạt (bulk action)
3. Nhấn **Apply** (Áp dụng)

## Danh sách Cho phép Đối tác (Partner Allow-List)

**partner allow-list** kiểm soát những đối tác bên ngoài nào có thể truy cập các khả năng ở cấp độ Đối tác (Partner-level abilities).

### Thêm Đối tác

1. Vào **Superdav AI Agent** → **Settings** → **Partners**
2. Nhấn **Add Partner** (Thêm Đối tác)
3. Nhập mã định danh đối tác (thường là API key hoặc ID tổ chức)
4. Tùy chọn thêm tên và mô tả của đối tác
5. Nhấn **Save** (Lưu)

### Gán Khả năng cho Đối tác

Sau khi đã thêm một đối tác:

1. Ia gọọf tab **Abilities** (Nkwado)
2. Jikọ abụọ na ị nwere Partner visibility (nkwado nke ndụọ)
3. Jikọ ka ị chọrọ ịgbagba
4. Na dị n'ụm nwere "Partner allow-list" (dị n'ụm nwere oruọ), jikọ oruọ ndị na ọ bụ ndị partner ndị ọrụ ga-anọchịrị
5. Jikọ **Save**

### Ọkụ Partner Access

Ọ bụrụ na ị chọrọ ịgbagba access nke partner:

1. Gbagba ability (nkwado)
2. Abanye oruọ partner ahụ n'allow-list
3. Jikọ **Save**

Partner ahụ ga-anọchịrị access nke ability ahụ a n'ụlọ.

## Abilities Ndị Ekwupụrụ (Unclassified Abilities)

Ọ dị n'ụdị ọ bụrụ na ị chọrọ ability nke third-party (nkwado ọzọ) nke Superdav AI Agent ahụ ezụrụ, ọ ga-anọchịrị dị ka **Unclassified** (Ndị Ekwupụrụ).

### Onye Ndu Admin Maka Abilities Ndị Ekwupụrụ

Ị ga ị chọta oge admin:

```
⚠️ Unclassified Abilities Detected

Abụọ ndị a na-agbanwe bụrụ na ọ dịghị mazi:
- custom-import-tool
- external-api-wrapper

Abụọ ndị a nwere ike ịbụ mmụta mmụta (security) ma ọ bụ mmụta compatibility.
Biko, jikọ site na ị chọrọ ya.

[Review Abilities] [Dismiss]
```

### Jikọ Abilities Ndị Ekwupụrụ

1. Jikọ **Review Abilities** n'oge oge admin ahụ
2. Na-akọwa abụọ ndị ekwupụrụ, ị ga ị chọta:
   - Nama ability na mgbado ya
   - Ọ dị n'ụ (plugin/addon) nke ji gbanwe ya
   - Oge visibility a ọ chọrọ
   - Mgbado mmụta mmụta

3. Chụọ oge visibility:
   - **Public**: Tinye na ability ahụ; kwuru ya everywhere
   - **Internal**: Gbagba ya n'ịrụ anụkọ (internal use) karịrị
   - **Partner**: Gbagba ya n' ndị partner dị nwere
   - **Disabled**: Kpọta abụọ a

4. Jikọ **Classify** ka ị chọrọ ịsa mmeghị ya

### Ọ bụrụ na ị Classify Abilities Ndị Ekwupụrụ?

Jikọ abilities:

- **Na-agbanwe mmụta mmụta**: Ịgba ọsọ ihe ị chọrọ ịkwuru
- **Nchebe mmụta**: Abilities ndị ekwupụrụ bụrụ na a gbagba n'ịrụ anụkọ (disabled) n'ụlọ
- **Nkempe features**: Oge ịclassify ya, ability ahụ ga-anọchịrị
- **Nchebe ihe ndị dị n'ụ**: Ịchọta ọ bụ ihe ị chọrọ na-e logọdụ maka audit

## Visibility in Different Surfaces

### REST API

**Khasi (Public) abilities** available qua REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Abilities Internal na Partner** ka o nwere qua REST API.

### MCP Servers

**Khasi (Public) abilities** available qua MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Abilities Internal** na nwere via MCP.

**Abilities Partner** ka nwere karị partner credentials (credentials) banyere.

### WooCommerce Integration

**Khasi (Public) abilities** related to WooCommerce available:

- Product management (Ude ọrụ nke siri ebe a)
- Order processing (Nche gị ihe ịzụ)
- Customer communication (Nkwupụta n'ụlọ nkuzi)

**Abilities Internal** na nwere karị WooCommerce.

### Chat Interface

**All abilities** (Public, Internal, Partner) available in chat, ọ bụ na eziokwu aka user permissions:

- Administrators na-agba mazi ka all abilities
- Regular users na-agba mazi Public abilities karị
- Partners na-agba mazi Public + Partner abilities (ọchụrụ n'ime whitelisted)

## Security Best Practices

### Principle of Least Privilege

- Set abilities ruo visibility ọ bụ eziokwu aka a dị kẹta koko nke na-agbanwe site ịrụ ihe ndị a.
- Use Partner visibility karị operations dị mma (sensitive operations).
- Disable abilities ndị ị na-agbanwe n'ime ịrụ ihe.

### Regular Audits

- Review ability visibility ọ bụ eziokwu aka ọ bụchi ọgụrụ ọjụ (monthly)
- Check for unclassified abilities
- Remove access karị partners dị mma (unused partners).

### Logging and Monitoring

- Monitor which abilities na-agbanwe n'ime ihe ndị a koko
- Track partner access patterns
- Alert on unusual ability usage.

### Third-Party Abilities

- Review third-party abilities karị enabling
- Classify them explicitly
- Start with Internal or Partner visibility
- Promote to Public karị ọ bụrụ na ị gbanwe mazi (vetting).

## Troubleshooting

**O nkwu (ability) na mazi na list**
- Check if o nkwu na-emechi (installed and active)
- Check if plugin/addon na-onweghị (enabled)
- Refresh page

**M na makafe change visibility na o nkwu**
- Check if ị na-emechi administrator permissions
- Check if plugin na-anọkọ (locked by a plugin) o nkwu
- Try disable conflicting plugins

**O partner na maka access o nkwu**
- Check if partner na-emechi in allow-list
- Check if visibility o nkwu na-set to Partner
- Confirm credentials partner na-emechi ọma (correct)
- Check API logs na-anọkọ authentication errors

**O nkwu na mazi na-emechi na-emechi**
- Review and classify they in admin notice
- Check if classification ị na-save
- Verify plugin na-emechi o nkwu na-up to date

## Migration from Legacy Mode

Ka ị na-upgrade na Superdav AI Agent version ọkọ dị ike:

- All existing abilities na-classify automatically as Public
- Review and adjust visibility karị na-adị mma
- No action required unless ị chọrọ restrict access

See **Third-Party Mode Migration** for more details on the transition to native Abilities API integration.

## Next Steps

Akpọdị na visibility o nkwu:

1. **Review your abilities**: Audit all installed abilities
2. **Classify unclassified abilities**: Respond to admin notices
3. **Set up partners**: Add partners if using Partner visibility
4. **Monitor usage**: Track which abilities are used most
5. **Document decisions**: Keep notes on why you chose each visibility level
