---
title: WPMU DEV 통합
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV 통합

## 개요
WPMU DEV는 WordPress 사이트를 위한 호스팅, 플러그인 및 서비스를 제공하는 종합 WordPress 플랫폼입니다. 이 통합은 Ultimate Multisite와 WPMU DEV 호스팅 간에 자동 도메인 동기화 및 SSL 인증서 관리를 가능하게 합니다.

## 기능
- 자동 도메인 동기화
- SSL 인증서 관리
- 확장된 SSL 인증서 검증 시도

## 요구 사항
이 통합은 WPMU DEV에서 호스팅 중인지 자동으로 감지하고 내장 API를 사용합니다. WPMU DEV에서 호스팅 중인 경우 추가 구성이 필요 없습니다.

이 통합은 WPMU DEV에서 호스팅 중일 때 자동으로 정의되는 `WPMUDEV_HOSTING_SITE_ID` 상수가 존재하는지 확인합니다.

## 설정 지침

### 1. WPMU DEV 호스팅 확인
WPMU DEV에서 호스팅 중이라면 필요한 상수들이 이미 정의되어 있어야 합니다. 다음을 확인하세요:
1. 환경에 `WPMUDEV_HOSTING_SITE_ID` 상수가 정의되어 있는지
2. API 접근이 가능한 활성 WPMU DEV 멤버십을 보유하고 있는지

### 2. 통합 활성화
1. WordPress 관리자에서 Ultimate Multisite > 설정으로 이동
2. '도메인 매핑' 탭으로 이동
3. '호스트 통합'으로 스크롤 다운
4. WPMU DEV 통합을 활성화
5. '변경 사항 저장'을 클릭

## 작동 방식

### 도메인 동기화
Ultimate Multisite에서 도메인이 매핑될 때:
1. 통합은 WPMU DEV API를 사용하여 도메인을 호스팅 계정에 추가합니다
2. 또한 www 버전의 도메인도 자동으로 추가합니다
3. WPMU DEV가 도메인 구성 및 SSL 인증서 발급을 처리합니다

### SSL 인증서 관리
통합은 SSL 인증서가 발급 및 설치되는 데 시간이 걸릴 수 있으므로 WPMU DEV 호스팅에 대한 SSL 인증서 검증 시도를 늘리도록 구성됩니다. 기본적으로 표준 5회 시도 대신 최대 10회까지 시도합니다.

## 중요 사항

### 도메인 제거
현재 WPMU DEV API는 도메인을 제거하는 방법을 제공하지 않습니다. Ultimate Multisite에서 도메인 매핑이 제거되면 도메인은 WPMU DEV 호스팅 계정에 남아 있습니다. 필요하다면 WPMU DEV 호스팅 대시보드에서 수동으로 제거해야 합니다.

### API 인증
통합은 WordPress 데이터베이스에 `wpmudev_apikey` 옵션으로 저장된 WPMU DEV API 키를 사용합니다. 이는 사이트를 WPMU DEV에 연결할 때 자동으로 설정됩니다.

## 문제 해결

### API 연결 문제
- 사이트가 WPMU DEV에 제대로 연결되어 있는지 확인
- `wpmudev_apikey` 옵션이 WordPress 데이터베이스에 설정되어 있는지 확인
- WPMU DEV 멤버십이 활성화되어 있는지 확인

### SSL 인증서 문제
- WPMU DEV가 SSL 인증서를 발급하는 데 시간이 걸릴 수 있습니다(보통 5-15분)
- 통합은 SSL 인증서를 최대 10회까지 확인하도록 구성됩니다
- 여러 번 시도 후에도 SSL 인증서가 발급되지 않으면 WPMU DEV 지원팀에 문의하십시오

### 도메인이 추가되지 않음
- Ultimate Multisite 로그에서 오류 메시지를 확인하십시오
- 도메인이 이미 WPMU DEV에 추가되지 않았는지 확인하십시오
- WPMU DEV 호스팅 플랜이 추가하려는 도메인 수를 지원하는지 확인하십시오
