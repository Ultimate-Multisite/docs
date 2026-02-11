---
id: wu_domain_became_primary
title: 작업 - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# 액션: wu_domain_became_primary

도메인이 사이트의 기본 도메인이 될 때 발생합니다.

이 액션은 도메인의 `primary_domain` 플래그가 `true`로 설정될 때 트리거됩니다. 이는 새 기본 도메인을 만들 때 또는 기존 도메인을 기본 도메인으로 업데이트할 때 발생합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $domain | `\WP_Ultimo\Models\Domain` | 주요 도메인이 된 도메인. |
| $blog_id | `int` | 영향을 받은 사이트의 블로그 ID. |
| $was_new | `bool` | 새로 생성된 도메인인지 여부. |

### 버전

- 2.0.0

### 소스

정의된 파일: [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) 라인 560에서
