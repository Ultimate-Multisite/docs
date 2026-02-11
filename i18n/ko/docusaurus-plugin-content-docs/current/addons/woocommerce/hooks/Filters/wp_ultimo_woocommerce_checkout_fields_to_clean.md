---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: 필터 - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

개발자가 기본 WooCommerce 청구 주소 필드를 필터링할 수 있도록 허용합니다.

Ultimate Multisite는 청구 주소 필드를 가지고 있으므로, 결제 폼에서 WooCommerce가 표시하는 기본 필드를 제거하는 것이 의미가 있을 수 있습니다. 기본적으로 이 리스트에 값이 전달되지 않으므로, WooCommerce에서 표시하도록 구성된 모든 필드는 그대로 유지됩니다.

### Since

- 2.0.0
### Source

다음 파일에서 정의됨: [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) (라인 277)

## Returns

제거할 필드 목록입니다. 사용 가능한 값은 billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, 그리고 billing_phone 입니다.
