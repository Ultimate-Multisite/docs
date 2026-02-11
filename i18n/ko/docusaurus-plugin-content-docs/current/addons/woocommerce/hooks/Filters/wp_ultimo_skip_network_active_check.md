---
id: wp_ultimo_skip_network_active_check
title: 필터 - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# 필터: wp_ultimo_skip_network_active_check

개발자가 네트워크 활성화 검사를 건너뛸 수 있도록 허용합니다.

예를 들어 Bedrock과 같은 composer 기반 및 기타 사용자 정의 설정에서 mu-plugins으로 플러그인을 사용하는 것이 일반적일 때 유용합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $skip_network_activation_check | `bool` | 검사를 건너뛸지 여부를 지정하며, 기본값은 false입니다. |

### 버전

- 2.0.0

### 출처

Defined in [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) 라인 272에서

## 반환값

검사를 건너뛰려면 true, 그렇지 않으면 false를 반환합니다.
