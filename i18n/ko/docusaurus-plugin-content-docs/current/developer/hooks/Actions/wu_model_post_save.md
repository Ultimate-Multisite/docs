---
id: wu_model_post_save
title: 액션 - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

객체가 데이터베이스에 저장된 후에 발생합니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | 모델 슬러그입니다. |
| $data | `array` | 저장될 객체 데이터(직렬화된 상태)입니다. |
| $data_unserialized | `array` | 저장될 객체 데이터입니다. |
| $this | `\Base_Model` | 객체 인스턴스입니다. |

### 버전

- 2.0.0

### 출처

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) at line 613
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) at line 1743
