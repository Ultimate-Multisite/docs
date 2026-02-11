---
title: 시스템 이메일 관리
sidebar_position: 13
_i18n_hash: b1bc640a1a5d9b508b8c46ab59bb1221
---
# 시스템 이메일 관리

Ultimate Multisite는 가입 확인, 결제 영수증, 멤버십 변경 등 이벤트에 대한 다양한 시스템 이메일을 전송합니다. 이 이메일 템플릿을 브랜드에 맞게 사용자 정의할 수 있습니다.

## 시스템 이메일 보기

**Ultimate Multisite → Settings** 로 이동한 뒤 **Emails** 탭을 클릭하여 이메일 관련 설정을 확인합니다.

![Settings - Emails tab](/img/admin/settings-emails.png)

그곳에서 **System Emails** 페이지에 접근하여 모든 이메일 템플릿을 확인할 수 있습니다.

![System Emails list](/img/admin/system-emails-list.png)

## 새 이메일 템플릿 가져오기

새로운 Ultimate Multisite 버전 및 애드온은 새로운 이메일 템플릿을 등록할 수 있습니다. 충돌을 방지하기 위해 새 템플릿은 자동으로 추가되지 않으며, 수동으로 가져와야 합니다.

새 이메일 템플릿을 가져오려면:

1. **System Emails** 페이지로 이동합니다.
2. 페이지 상단에 있는 **Reset & Import** 버튼을 클릭합니다.
3. **Import Emails** 옵션을 토글하여 사용 가능한 템플릿을 확인합니다.
4. 가져올 템플릿을 선택하고 확인합니다.

## 이메일 템플릿 재설정

이메일 템플릿을 사용자 정의하고 기본 내용으로 되돌리고 싶다면 두 가지 옵션이 있습니다:

1. **Delete and re-import** — 시스템 이메일을 삭제하고 다시 가져옵니다 (이때 전송 메트릭이 삭제됩니다).
2. **Reset via the tool** — **Reset & Import** 도구를 사용하고 **Reset** 옵션을 토글한 뒤, 재설정할 이메일을 선택합니다.

Reset 옵션이 전송 메트릭 및 기타 메타데이터를 보존하면서 기본 내용을 복원하므로 선호됩니다.
