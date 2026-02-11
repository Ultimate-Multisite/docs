---
title: 애드온 템플릿
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# 애드온 템플릿

{{ADDON_DESCRIPTION}}

## 요구 사항

- WordPress 5.3 이상
- PHP 7.4 이상
- Multisite Ultimate 플러그인 (활성화)

## 설치

1. addon 파일을 귀하의 `/wp-content/plugins/` 디렉터리에 업로드하세요
2. WordPress의 '플러그인' 메뉴를 통해 플러그인을 활성화하세요
3. 네트워크 관리에서 addon 설정을 구성하세요

## 개발

### 설정

```bash
# Install dependencies
composer install
npm install

# Run tests
npm run test

# Run code standards checks
vendor/bin/phpcs
vendor/bin/phpstan

# Fix code style issues
vendor/bin/phpcbf

# Build for production
npm run build
```

### 프로젝트 구조

```
ultimate-multisite-addon-template/
├── inc/                          # PHP classes and includes
│   ├── class-multisite-ultimate-updater.php  # Update handler
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Main functionality
├── tests/                        # Unit tests
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Base test class
│   └── class-*-test.php         # Test cases
├── views/                       # Template files
├── assets/                      # Static assets
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript files
│   └── images/                  # Images
├── lang/                        # Language files
├── composer.json                # PHP dependencies
├── package.json                 # Node.js dependencies
├── phpunit.xml.dist             # PHPUnit configuration
├── .phpcs.xml.dist              # Code standards configuration
└── rector.php                   # Code modernization rules
```

### 테스트

addon은 포괄적인 테스트 프레임워크를 포함합니다:

- **단위 테스트**: WordPress 테스트 스위트와 함께하는 PHPUnit 기반 테스트
- **기본 테스트 클래스**: 일반 테스트 시나리오를 위한 헬퍼 메서드를 제공합니다
- **테스트 커버리지**: 코드 커버리지를 추적하도록 구성되었습니다
- **멀티사이트 테스트**: 멀티사이트 환경에서 테스트가 실행됩니다

### 코드 표준

- **WordPress 코딩 표준**: PHPCS를 통해 적용됩니다
- **PHP 7.4+ 호환성**: 최신 PHP 기능을 지원합니다
- **정적 분석**: 타입 검사를 위한 PHPStan 통합
- **코드 현대화**: PHP 업그레이드를 위한 Rector 규칙

### 빌드 시스템

- **자산 처리**: CSS/JS 파일 최소화
- **번역**: POT 파일 생성
- **패키징**: 배포용 아카이브 생성
- **개발 모드**: 디버깅용 미최소화 자산

## 구성

addon은 네트워크 관리 인터페이스를 통해 접근 가능한 다양한 구성 옵션을 지원합니다.

## 훅 및 필터

### 액션

- `ultimate-multisite-addon-template_init` - addon 초기화 후 실행됩니다
- `ultimate-multisite-addon-template_loaded` - 모든 addon 파일이 로드된 후 실행됩니다

### 필터

- `ultimate-multisite-addon-template_settings` - addon 설정을 수정합니다
- `ultimate-multisite-addon-template_enabled` - addon 활성화/비활성화 상태를 재정의합니다

## 라이선스

이 addon은 GPL v3 또는 이후 버전으로 라이선스가 부여됩니다.

## 지원

지원 및 문서는 [MultisiteUltimate.com](https://multisiteultimate.com)을 방문하세요

## 변경 로그

- 버전 1.0.1 (2025-09-28): 접두사를 ultimate-multisite로 변경; 텍스트 도메인 업데이트; 버전 상승

- 버전 (2025-09-28): 접두사를 ultimate-multisite로 변경; 텍스트 도메인 업데이트; 버전 상승
