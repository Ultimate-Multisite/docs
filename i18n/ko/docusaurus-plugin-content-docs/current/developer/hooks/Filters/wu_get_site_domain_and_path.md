---
id: wu_get_site_domain_and_path
title: 필터 - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# 필터: wu_get_site_domain_and_path

개발자가 도메인/경로 쌍을 조작할 수 있도록 허용합니다.

이는 스테이징 솔루션 구현, 다른 서버 등 여러 가지 상황에서 유용할 수 있습니다.

## Parameters

| Name | Type | 설명 |
|------|------|-------------|
| $d | `object` | 현재 도메인 및 경로 키를 포함하는 객체입니다. |
| $path_or_subdomain | `string` | 함수에 전달된 원래 경로/서브도메인입니다. |

### 버전

- 2.0.0

### 출처

정의된 위치: [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) 라인 235

## 반환값

도메인 및 경로 키를 포함하는 객체입니다.
