---
id: wp_ultimo_skip_network_active_check
title: مرشح - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# عامل التصفية: wp_ultimo_skip_network_active_check

يتيح للمطورين تجاوز فحص تفعيل الشبكة.

هذا مفيد عند استخدام إعدادات مبنية على Composer وغيرها من الإعدادات المخصصة، مثل Bedrock، على سبيل المثال، حيث يُعد استخدام الإضافات كـ mu-plugins هو المعيار.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $skip_network_activation_check | `bool` | إذا كان يجب تخطي الفحص أم لا، والافتراضي هو false. |

### منذ

- 2.0.0

### المصدر

Defined in [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) at line 272

## يرجع

true إذا كنت ترغب في تخطي الفحص، false خلاف ذلك.
