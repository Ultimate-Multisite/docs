---
id: wu_should_create_domain_record_for_site
title: 필터 - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Ultimate Multisite가 새로 생성된 사이트에 대한 도메인 레코드를 생성해야 하는지 필터링합니다.

공유 체크아웃 양식 기본 도메인, 내부 호스트 또는 다른 통합이 별도로 관리할 도메인을 사용하는 사이트에 대해 자동 도메인 레코드 생성을 억제하거나 지연하려면 이 filter를 사용하세요.

## 매개변수 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | 도메인 레코드를 생성해야 하는지 여부입니다. |
| $site | `WP_Site` | 새로 생성된 사이트 객체입니다. |

### 이후 버전 {#since}

- 2.13.0

### 소스 {#source}

`inc/functions/domain.php`에 정의되어 있습니다.


## 반환값 {#returns}

도메인 레코드를 생성할지 여부를 나타내는 Boolean입니다.
