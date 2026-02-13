---
title: 사이트 템플릿에서 자동 검색 및 교체
sidebar_position: 8
_i18n_hash: 81adce2fb2df1a5296590bffea6f2d14
---
# 사이트 템플릿에서 자동 검색 및 교체 (v2)

_**이 튜토리얼은 WP UItimo 버전 2.x가 필요합니다.**_

Ultimate Multisite의 가장 강력한 기능 중 하나는 등록 양식에 임의의 텍스트, 색상 및 선택 필드를 추가할 수 있다는 것입니다. 해당 데이터를 캡처하면 선택한 사이트 템플릿의 특정 부분에 콘텐츠를 미리 채울 수 있습니다. 그런 다음 새 사이트가 게시되면 Ultimate Multisite는 등록 중에 입력된 실제 정보를 사용하여 자리 표시자를 교체합니다.

예를 들어, 자리 표시자를 사용하여 템플릿 사이트를 만들 수 있습니다. 자리 표시자는 중괄호 두 개로 둘러싸여야 합니다 - {{placeholder_name}}.

그런 다음 해당 데이터를 캡처하기 위해 일치하는 등록 필드를 추가하면 됩니다.

고객은 등록 중에 해당 필드를 채울 수 있습니다.

Ultimate Multisite는 고객이 제공한 데이터로 자리 표시자를 자동으로 교체합니다.

## **자리 표시자가 가득한 템플릿 문제 해결**

이 모든 것이 훌륭하지만, 우리는 보기 흉한 문제에 직면합니다: 이제 고객이 방문할 수 있는 우리 사이트 템플릿은 많은 보기 흉한 자리 표시자로 가득 차 있어 많은 정보를 제공하지 못합니다.

이를 해결하기 위해 우리는 자리 표시자에 가짜 값을 설정하는 옵션을 제공하며, 고객이 방문 중일 때 해당 값을 사용하여 템플릿 사이트의 내용을 검색 및 교체합니다.

**Ultimate Multisite > Settings > Sites**로 이동한 다음 사이드바에서 Edit Placeholders 링크를 클릭하면 템플릿 자리 표시자 편집기에 접근할 수 있습니다.

![Edit Placeholders link in the Sites settings sidebar](/img/config/settings-sites.png)

이렇게 하면 자리 표시자 콘텐츠 편집기로 이동하며, 여기에서 자리 표시자와 해당 콘텐츠를 추가할 수 있습니다.

![Placeholders content editor with placeholder names and values](/img/config/settings-sites.png)
