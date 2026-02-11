---
title: Closte 통합
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte 통합

## 개요
Closte는 Google Cloud 인프라를 기반으로 구축된 관리형 WordPress 호스팅 플랫폼입니다. 이 통합은 Ultimate Multisite와 Closte 간에 자동 도메인 동기화 및 SSL 인증서 관리를 가능하게 합니다.

## 기능
- 자동 도메인 동기화
- SSL 인증서 관리
- 와일드카드 도메인 지원
- Closte에서 실행 중인 경우 구성 필요 없음

## 요구 사항
다음 상수는 Closte를 사용하는 경우 `wp-config.php` 파일에 정의되어야 합니다:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

이 상수는 일반적으로 Closte에서 호스팅 중인 경우 이미 정의되어 있습니다.

## 설정 지침

### 1. Closte API 키 확인
Closte에서 호스팅 중인 경우 `CLOSTE_CLIENT_API_KEY` 상수는 이미 `wp-config.php` 파일에 정의되어 있어야 합니다. `wp-config.php` 파일을 확인하여 이를 검증할 수 있습니다.

### 2. 통합 활성화
1. WordPress 관리자에서 Ultimate Multisite > 설정으로 이동
2. "도메인 매핑" 탭으로 이동
3. "호스트 통합"으로 스크롤 다운
4. Closte 통합을 활성화
5. "변경 사항 저장" 클릭

## 작동 방식
Ultimate Multisite에서 도메인이 매핑되면:
1. 통합은 Closte API에 요청을 보내 도메인을 애플리케이션에 추가합니다.
2. Closte는 SSL 인증서 발급을 자동으로 처리합니다.
3. 도메인 매핑이 제거되면 통합은 Closte에서 도메인을 제거합니다.

통합은 또한 Ultimate Multisite의 DNS 검사 간격 설정과 함께 작동하여 시스템이 DNS 전파 및 SSL 인증서 발급을 얼마나 자주 확인할지 구성할 수 있도록 합니다.

## 도메인 레코드 생성
이 통합은 사이트가 생성되거나 복제될 때 도메인 레코드가 자동으로 생성되도록 보장합니다. 이는 Closte 통합에 특히 중요하며, 도메인 레코드 생성이 Closte API를 트리거하여 도메인과 SSL 인증서를 생성합니다.

## 문제 해결

### API 연결 문제
- Closte API 키가 올바른지 확인하십시오.
- Closte 계정에 필요한 권한이 있는지 확인하십시오.

### SSL 인증서 문제
- Closte가 SSL 인증서를 발급하는 데 다소 시간이 걸릴 수 있습니다(보통 5-10분).
- 도메인이 Closte 서버의 IP 주소를 올바르게 가리키는지 확인하십시오.
- 도메인의 DNS 레코드를 확인하여 올바르게 구성되었는지 확인하십시오.

### 도메인이 추가되지 않음
- Ultimate Multisite 로그에서 오류 메시지를 확인하십시오.
- 도메인이 이미 Closte에 추가되지 않았는지 확인하십시오.
- 도메인의 DNS 레코드가 올바르게 구성되었는지 확인하십시오.

### DNS 검사 간격
- SSL 인증서 발급이 너무 오래 걸리는 경우 도메인 매핑 설정에서 DNS 검사 간격을 조정할 수 있습니다.
- 기본 간격은 300초(5분)이며, 테스트 중 빠른 확인을 위해 10초까지 낮출 수 있습니다.
