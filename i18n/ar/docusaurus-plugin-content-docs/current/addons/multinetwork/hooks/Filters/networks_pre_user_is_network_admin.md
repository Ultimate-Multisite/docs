---
id: networks_pre_user_is_network_admin
title: تصفية - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# مرشح: networks_pre_user_is_network_admin

يُرشِّح الشبكات التي يكون المستخدم مسؤولاً عنها، لتقصير العملية.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $ | `array\|bool\|null` | قائمة بمعرفات الشبكات أو false. أي شيء غير null سيقصر العملية. |
| $ | `int` | معرف المستخدم الذي يجب أن تُرجع الشبكات له. |

### منذ

- 2.0.0

### المصدر

تم تعريفه في [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) في السطر 688
