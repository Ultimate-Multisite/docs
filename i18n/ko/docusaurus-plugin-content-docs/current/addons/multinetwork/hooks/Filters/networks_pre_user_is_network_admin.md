---
id: networks_pre_user_is_network_admin
title: 필터 - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# 필터: networks_pre_user_is_network_admin

사용자가 관리자인 네트워크를 필터링하여 프로세스를 단축합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $ | `array\|bool\|null` | 네트워크 ID 목록 또는 false. null이 아닌 경우 프로세스를 단축합니다. |
| $ | `int` | 반환할 네트워크의 사용자 ID. |

### 버전

- 2.0.0
### 소스

다음에서 정의됨: [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) 688번째 줄에서
