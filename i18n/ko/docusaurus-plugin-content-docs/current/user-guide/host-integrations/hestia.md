---
title: Hestia 컨트롤 패널 통합
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia 컨트롤 패널 통합

이 가이드는 Ultimate Multisite Hestia 통합을 구성하여 네트워크에서 매핑된 도메인이 Hestia에서 Web Domain Aliases로 자동으로 추가(및 제거)되는 방법을 설명합니다.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Official REST API doc: https://hestiacp.com/docs/server-administration/rest-api.html

## 작동 방식

- Ultimate Multisite에서 도메인이 매핑되면, 통합은 Hestia API를 호출하여 실행합니다:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- 도메인 매핑이 제거되면, 다음을 실행합니다:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- `www.` 별칭을 선택적으로 추가/제거합니다. 이는 Domain Mapping 설정의 “Auto-create www subdomain” 설정에 따라 달라집니다.

## 사전 요구 사항

- 이미 WordPress 설치를 가리키는 기존 Hestia Web Domain이 있습니다. 통합은 이 기본 도메인에 별칭을 연결합니다.
- Hestia API 접근이 활성화되어 있습니다. 비밀번호 또는 API 해시/토큰 중 하나를 사용하여 인증할 수 있습니다.
- Hestia의 REST API 문서를 참조하여 API 접근 및 인증 세부 정보를 확인하세요:
  https://hestiacp.com/docs/server-administration/rest-api.html

## 구성 (Wizard → Integrations → Hestia)

다음 값을 제공하세요:

- `WU_HESTIA_API_URL` (필수) - 기본 API 엔드포인트, 일반적으로 `https://your-hestia-host:8083/api/`
- `WU_HESTIA_API_USER` (필수) - API 명령에 사용되는 Hestia 사용자(보통 `admin`)
- `WU_HESTIA_API_PASSWORD` 또는 `WU_HESTIA_API_HASH` (최소 하나) - 비밀번호 또는 API 해시/토큰 중 하나를 선택하세요
- `WU_HESTIA_ACCOUNT` (필수) - Hestia에서 Web Domain의 계정(소유자); 이는 CLI의 첫 번째 인수입니다
- `WU_HESTIA_WEB_DOMAIN` (필수) - WordPress를 제공하는 기존 Hestia Web Domain(별칭이 이곳에 연결됩니다)
- `WU_HESTIA_RESTART` (선택 사항; 기본값 `yes`) - 별칭 변경 후 서비스 재시작/리로드 여부

Wizard가 이 상수를 `wp-config.php`에 삽입하도록 하거나 수동으로 정의할 수 있습니다.

## 설정 확인

- Wizard의 “Testing” 단계에서 플러그인은 API를 통해 `v-list-web-domains <WU_HESTIA_ACCOUNT> json`을 호출합니다. 성공 응답은 연결 및 인증을 확인합니다.
- 도메인을 매핑한 후 Hestia에서 Web > 기본 도메인 > Aliases를 확인하세요. 새 별칭이 추가된 것을 볼 수 있습니다.

## 참고 사항 및 팁

- `WU_HESTIA_WEB_DOMAIN`이 이미 존재하고 `WU_HESTIA_ACCOUNT`이 소유하고 있는지 확인하세요
- SSL이 필요한 경우 Hestia에서 인증서를 관리하세요. 이 통합은 현재 별칭만 처리합니다
- 플러그인은 Domain Mapping “www subdomain” 설정에 따라 `www.<domain>`을 추가/제거할 수도 있습니다

## 예시 API 호출 (cURL)

아래는 개념적 예시(환경에 맞게 조정)입니다. 정확한 매개변수는 공식 문서를 참조하세요.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

삭제하려면 `cmd=v-delete-web-domain-alias`를 사용하고 동일한 인수를 전달하세요

## 문제 해결

- API에서 HTTP 오류가 발생하면 `WU_HESTIA_API_URL`이 접근 가능하고 `/api`를 포함하는지 확인하세요
- 인증 오류가 발생하면 `WU_HESTIA_API_USER`와 `WU_HESTIA_API_PASSWORD` 또는 `WU_HESTIA_API_HASH`를 확인하세요
- 로그에 “Missing account/base domain”이 표시되면 `WU_HESTIA_ACCOUNT`과 `WU_HESTIA_WEB_DOMAIN`이 설정되어 있고 Hestia에서 유효한지 확인하세요

## 참고 문헌

- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
