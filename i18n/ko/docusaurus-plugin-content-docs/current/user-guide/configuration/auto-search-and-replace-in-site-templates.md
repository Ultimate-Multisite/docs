---
title: 사이트 템플릿에서 자동 검색 및 바꾸기
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# 사이트 템플릿에서 자동 검색 및 바꾸기 (v2) {#auto-search-and-replace-in-site-templates-v2}

_**이 튜토리얼에는 WP UItimo 버전 2.x가 필요합니다.**_

Ultimate Multisite의 가장 강력한 기능 중 하나는 등록 양식에 임의의 텍스트, 색상 및 선택 필드를 추가할 수 있는 기능입니다. 해당 데이터를 캡처한 후에는 선택한 사이트 템플릿의 특정 부분에 있는 콘텐츠를 미리 채우는 데 사용할 수 있습니다. 그런 다음 새 사이트가 게시되면 Ultimate Multisite가 자리 표시자를 등록 중 입력된 실제 정보로 바꿉니다.

예를 들어, 자리 표시자를 사용해 템플릿 사이트를 만들 수 있습니다. 자리 표시자는 이중 중괄호로 둘러싸서 추가해야 합니다 - {{placeholder_name}}.

그런 다음 해당 데이터를 캡처할 일치하는 등록 필드를 간단히 추가할 수 있습니다

그러면 고객이 등록 중 해당 필드를 채울 수 있습니다.

그런 다음 Ultimate Multisite가 고객이 제공한 데이터로 자리 표시자를 자동으로 바꿉니다.

## **"자리 표시자로 가득 찬 템플릿" 문제 해결하기** {#solving-the-template-full-of-placeholders-problem}

이 모든 것은 훌륭하지만, 보기 좋지 않은 문제가 생깁니다. 이제 고객이 방문할 수 있는 사이트 템플릿이 별다른 정보를 제공하지 않는 보기 좋지 않은 자리 표시자로 가득 차게 됩니다.

이를 해결하기 위해 자리 표시자에 가짜 값을 설정하는 옵션을 제공하며, 고객이 방문하는 동안 템플릿 사이트에서 해당 값을 사용해 콘텐츠를 검색하고 바꿉니다.

**Ultimate Multisite > Settings > Sites**로 이동해 Site Template Options 영역까지 스크롤한 다음 **Edit Placeholders** 링크를 클릭하면 템플릿 자리 표시자 편집기에 접근할 수 있습니다.

![Sites 설정 페이지의 Site Template Options 영역](/img/config/settings-sites-templates-section.png)

그러면 자리 표시자의 콘텐츠 편집기로 이동하며, 여기에서 자리 표시자와 해당 콘텐츠를 추가할 수 있습니다.

![템플릿 자리 표시자 편집기 진입점](/img/config/settings-sites-templates-section.png)
