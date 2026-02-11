---
id: wu_make_primary_domain_redirect_url
title: 필터 - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# 필터: wu_make_primary_domain_redirect_url

도메인을 기본으로 설정한 후 리다이렉트 URL을 필터링합니다.

개발자는 도메인을 기본으로 설정한 후 사용자가 리다이렉트되는 위치를 사용자 정의할 수 있습니다. 기본적으로는 메인 사이트의 현재 URL 또는 수정 중인 사이트의 관리자 URL로 리다이렉트됩니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $redirect_url | `string` | 기본 리다이렉트 URL입니다. 메인 사이트인 경우 현재 URL, 그렇지 않으면 현재 사이트의 관리자 URL입니다. |
| $current_site | `int` | 도메인이 기본으로 설정되는 사이트의 ID입니다. |
| $domain | `\Domain` | 기본으로 설정된 도메인 객체입니다. |
| $old_primary_domains | `array` | 이전에 기본으로 설정된 도메인의 ID 배열입니다. |

### 버전

- 2.0.0

### 출처

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639

## 반환값

필터링된 리다이렉트 URL입니다.
