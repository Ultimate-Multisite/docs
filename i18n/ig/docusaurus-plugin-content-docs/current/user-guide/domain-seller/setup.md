---
title: Nkwado na Ịgụrụ ihe
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Setup and Provider Configuration {#domain-seller-setup-and-provider-configuration}

Addon Domain Seller kemi na-setup da configuration provider. Addon Domain Seller kemi na-ship na guided setup wizard nke gozie gị ya gbasa ọ bụrụ ọ bụla ihe ị chọrọ. Akụrie a na-akwụ na flow wizard ahụ ma ọ bụ gị ka ị chọrọ configure lebebe ma ọ bụ reconfigure providers n'ụlọ.

## Requirements {#requirements}

- **Multisite Ultimate** v2.4.12 or higher, network-activated
- **PHP** 7.4+
- API credentials maka ọkụkọ ọ bụla supported registrar

## First-run setup wizard {#first-run-setup-wizard}

Setup wizard ahụ na-launch automatically mgbe ị chọrọ activate plugin nke ọzọ. Ọ dị n'ime anyị mgbe ọ bụla metụtara **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Step 1 — Choose a provider {#step-1--choose-a-provider}

Chọta registrar ị chọrọ ịgba ọkụ. Options ndị supported:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| HostAfrica | Yes | Yes (ID protection) |
| Openprovider | Yes | Yes |
| Hostinger | Via core Hostinger domain mapping for hosted domains | Yes |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### Step 2 — Enter credentials {#step-2--enter-credentials}

Chii provider dị n'ime fields credential ndị ọzọ:

**OpenSRS** — Username na private key (dị n'ụlọ OpenSRS Reseller Control Panel)

**Namecheap** — Username na API key (dị n'ụlọ Account › Tools › API Access)

**HostAfrica** — Domains Reseller API endpoint na credentials dị n'ime HostAfrica reseller module. Ọ dịghị endpoint sandbox ọzọ dị n'ime documentation; jiji ya metụtara checks safe read-only mgbe ị chọrọ iji registration live.

**Openprovider** — Username na password nke mere API access onine. Sandbox mode optional na-ere Openprovider sandbox API, ma default customer handle optional na-ere ịrụ ọrụ maka registrations.

**Hostinger** — Token hPanel shared Hostinger core integration-nke. Token dey power mapping domain core and operations registration Domain Seller.

**GoDaddy** — API key na secret (from developer.godaddy.com)

**ResellerClub** — Reseller ID na API key (from ResellerClub control panel)

**NameSilo** — API key (from namesilo.com › Account › API Manager)

**Enom** — Account ID na API token

Check **Sandbox mode** where available to test against provider's test environment before going live.

### Step 3 — Test the connection {#step-3--test-the-connection}

Click **Test Connection**. Wizard go send light API call to verify credentials and connectivity. Fix any credential issues before continuing.

### Step 4 — Import TLDs {#step-4--import-tlds}

Click **Import TLDs** to pull all available TLDs na wholesale pricing from connected provider. This go fill up list TLDs we use for domain products. Import e fit take 30–60 seconds for providers wey neme catalog TLDs large.

TLDs dey re-sync automatically once per day via scheduled cron job.

### Step 5 — Create a domain product {#step-5--create-a-domain-product}

Wizard go create default catch-all domain product with 10% markup. You fit edit this product immediately or skip and create products manually under **Ultimate Multisite › Products**.

See [Domain Products and Pricing](./domain-products) for full product configuration guide.

---

## Reconfiguring a provider {#reconfiguring-a-provider}

Go to **Network Admin › Ultimate Multisite › Settings › Domain Seller** (or click **Settings** in plugin list).

The settings page go contain:

- **Enable domain selling** — on/off toggle choo feature này hoàn toàn
- **Default provider** — cái nhà cung cấp được dùng để tìm kiếm tên miền và các sản phẩm mới
- **Max TLDs per search** — bao nhiêu loại TLD (Top-Level Domain) cần kiểm tra khi khách hàng tìm kiếm; giá trị cao hơn sẽ cho thấy nhiều lựa chọn hơn nhưng chậm hơn
- **Availability cache duration** — thời gian để lưu trữ kết quả tình trạng và giá cả; giá trị thấp hơn thì chính xác hơn nhưng tăng số lần gọi API

- **Manage domain products** — liên kết nhanh đến danh sách Sản phẩm (Products)
- **Configure providers** — mở trình hướng dẫn Tích hợp (Integration Wizard) để thêm hoặc cấu hình lại các nhà cung cấp

### Thêm một nhà cung cấp thứ hai {#adding-a-second-provider}

Nhấn vào **Configure providers** và chạy lại trình hướng dẫn cho nhà đăng ký mới. Bạn có thể cấu hình nhiều nhà cung cấp cùng một lúc. Gán từng sản phẩm tên miền cho một nhà cung cấp cụ thể, hoặc để nó ở mặc định.

### Đồng bộ TLD thủ công {#syncing-tlds-manually}

Trong trang cài đặt, nhấn vào **Sync TLDs** bên cạnh bất kỳ nhà cung cấp nào đã được cấu hình để kéo giá mới nhất. Điều này hữu ích sau khi một nhà cung cấp cập nhật giá bán buôn hoặc thêm các TLD mới.

---

## Logs (Nhật ký) {#logs}

Mỗi nhà cung cấp sẽ ghi vào kênh log riêng của nó. Bạn có thể xem log dưới mục **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Semua cố gắng đăng ký (thành công và thất bại) |
| `domain-seller-renewal` | Kết quả công việc gia hạn |
| `domain-seller-opensrs` | Hoạt động API OpenSRS thô |
| `domain-seller-namecheap` | Hoạt động API Namecheap thô |
| `domain-seller-hostafrica` | Hoạt động API HostAfrica thô |
| `domain-seller-openprovider` | Hoạt động API Openprovider thô |
| `domain-seller-hostinger` | Hoạt động API Hostinger thô |
| `domain-seller-godaddy` | Hoạt động API GoDaddy thô |
| `domain-seller-resellerclub` | Hoạt động API ResellerClub thô |
| `domain-seller-namesilo` | Hoạt động API NameSilo thô |
| `domain-seller-enom` | Hoạt động API Enom thô |

---

## Ghi chú về khả năng của nhà cung cấp (Provider capability notes) {#provider-capability-notes}

Không phải tất cả các API của nhà đăng ký đều cho phép cùng một loại thao tác. Addon sẽ hiển thị những thao tác không được hỗ trợ bằng các lỗi rõ ràng hướng đến quản trị viên thay vì thất bại một cách im lặng.

- **HostAfrica** hỗ trợ quy trình bán lại trực tiếp (reseller workflow) rộng nhất, bao gồm tra cứu, đồng bộ TLD/giá cả, đăng ký, gia hạn, chuyển đổi, cập nhật tên máy chủ (nameserver updates), bản ghi DNS, mã EPP, khóa nhà đăng ký (registrar lock), và bảo vệ ID.
- **Openprovider** hỗ trợ đồng bộ TLD giá bán lại (reseller-priced TLD sync), đăng ký, gia hạn, chuyển đổi, cập nhật tên máy chủ, các vùng DNS (DNS zones), mã EPP, khóa nhà đăng ký, và quyền riêng tư WHOIS. Nó xác thực bằng một token bearer có thời gian ngắn mà addon tự động làm mới.
- **Hostinger** hỗ trợ tìm kiếm tình trạng sẵn có (availability search), đăng ký, tra cứu danh mục đầu tư (portfolio lookup), cập nhật tên máy chủ, khóa nhà đăng ký và quyền riêng tư WHOIS thông qua token API hPanel dùng chung. API Domains công khai của Hostinger không hiển thị giá bán lại/bán sỉ, chuyển đổi vào (inbound transfer), gia hạn rõ ràng, hoặc lấy mã EPP; việc gia hạn chỉ tự động gia hạn thôi.
