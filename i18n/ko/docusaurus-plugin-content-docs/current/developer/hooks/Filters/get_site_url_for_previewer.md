---
id: get_site_url_for_previewer
title: 필터 - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# 필터: get_site_url_for_previewer

플러그인 개발자가 미리보기에서 사용되는 URL을 필터링할 수 있도록 허용합니다

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | 현재 사용 중인 기본 도메인, 조작에 유용합니다 |
| $domain_options | `array` | Ultimate Multisite 설정 → 네트워크 설정 → 도메인 옵션에 입력된 모든 도메인 옵션 목록 |

### Since

- 1.7.2

### Source

`inc/checkout/class-legacy-checkout.php` 파일의 812번째 줄에 정의됨

## Returns
사용될 새 도메인
