---
title: 시스템 이메일 관리
sidebar_position: 13
_i18n_hash: 6dc6899342f363987fd7307df698a5bb
---
# 시스템 이메일 관리

Ultimate Multisite는 가입 확인, 결제 영수증, 멤버십 변경과 같은 이벤트에 대해 다양한 시스템 이메일을 보냅니다. 이러한 이메일 템플릿을 브랜드에 맞게 사용자 지정할 수 있습니다.

## 시스템 이메일 보기

**Ultimate Multisite → Settings**로 이동한 다음 **Emails** 탭을 클릭하여 이메일 관련 설정을 확인하세요.

![Settings - Emails 탭](/img/admin/settings-emails.png)

여기에서 **System Emails** 페이지에 접근하여 모든 이메일 템플릿을 확인할 수 있습니다.

![System Emails 목록](/img/admin/system-emails-list.png)

시스템 이메일 편집기를 사용하여 개별 이메일 템플릿을 편집할 수도 있습니다.

![시스템 이메일 편집기](/img/admin/system-email-editor.png)

## 새 이메일 템플릿 가져오기

새 Ultimate Multisite 버전 및 add-on은 새 이메일 템플릿을 등록할 수 있습니다. 충돌을 방지하기 위해 새 템플릿은 자동으로 추가되지 않으며, 수동으로 가져와야 합니다.

새 이메일 템플릿을 가져오려면:

1. **System Emails** 페이지로 이동합니다
2. 페이지 상단의 **Reset & Import** 버튼을 클릭합니다
3. 사용 가능한 템플릿을 보려면 **Import Emails** 옵션을 전환합니다
4. 가져오려는 템플릿을 선택하고 확인합니다

## 이메일 템플릿 재설정

이메일 템플릿을 사용자 지정했으며 기본 콘텐츠로 되돌리고 싶다면 두 가지 옵션이 있습니다.

1. **삭제 후 다시 가져오기** — 시스템 이메일을 삭제하고 다시 가져옵니다(이 작업은 발송 지표를 지웁니다)
2. **도구를 통해 재설정** — **Reset & Import** 도구를 사용하고, **Reset** 옵션을 전환한 다음 재설정하려는 이메일을 선택합니다

Reset 옵션은 기본 콘텐츠를 복원하면서도 발송 지표 및 기타 메타데이터를 보존하므로 더 권장됩니다.
