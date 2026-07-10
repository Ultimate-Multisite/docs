---
id: wu_sso_url
title: 필터 - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# 필터: wu_sso_url {#filter-wussourl}

도메인 간 고객 작업을 위해 반환되기 전에 생성된 SSO URL을 필터링합니다.

통합에서 Ultimate Multisite의 토큰 검증을 유지하면서 sovereign-tenant SSO 링크에 신뢰할 수 있는 컨텍스트를 추가하거나 브로커 URL을 대체해야 할 때 이 필터를 사용하세요.

## 매개변수 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | 생성된 SSO URL. |
| $user | `WP_User` | SSO 방문으로 인증될 사용자. |
| $site_id | `int` | 방문 대상 사이트 ID. |
| $redirect_to | `string` | 성공적인 SSO 검증 후의 대상 URL. |

### 이후 버전 {#since}

- 2.13.0

### 소스 {#source}

`inc/sso/class-sso.php`에 정의되어 있습니다.


## 반환값 {#returns}

필터링된 SSO URL.
