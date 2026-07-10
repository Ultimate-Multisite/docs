---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

ช่วยให้นักพัฒนาสามารถเปลี่ยน URL ปลายทางที่ระบบจะส่งกลับ (return URL) หลังจากที่กระบวนการชำระเงินเสร็จสมบูรณ์

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | URL ที่จะเปลี่ยนเส้นทางไปยังหน้าอื่นหลังจากดำเนินการเสร็จสิ้น |
| $gateway | `self` | อินสแตนซ์ของเกตเวย์ (gateway instance) ที่กำลังใช้งาน |
| $payment | `\WP_Ultimo\Models\Payment` | อินสแตนซ์การชำระเงินของ Ultimate Multisite |
| $cart | `\WP_Ultimo\Checkout\Cart` | คำสั่งซื้อตะกร้าสินค้า (cart order) ปัจจุบันของ Ultimate Multisite |

### Since {#since}

- 2.0.20
### Source {#source}

กำหนดไว้ใน [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) บรรทัดที่ 683


## Returns {#returns}
