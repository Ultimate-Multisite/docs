---
title: 인터넷 검색
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# 인터넷 검색

Gratis AI Agent v1.5.0에는 **인터넷 검색** 기능이 추가되어 AI 어시스턴트가 대화 중에 웹에서 최신 정보를 검색할 수 있게 되었습니다. 이 기능은 [Brave Search API](https://brave.com/search/api/) 또는 [Tavily API](https://tavily.com/)를 통해 작동합니다.

## 작동 방식 {#how-it-works}

인터넷 검색이 활성화되면, 어시스턴트는 질문이 최신 정보나 외부 정보를 필요로 한다고 판단할 때(예: 최근 뉴스, 실시간 가격, 모델 학습 시점 이후 변경되었을 수 있는 문서 등) 설정된 검색 제공업체에 자동으로 질의합니다.

검색 결과는 실시간으로 가져와서 어시스턴트가 응답을 생성하기 전에 컨텍스트에 주입됩니다. 어시스턴트는 검색 결과를 사용하여 질문에 답변했음을 사용자에게 알려줍니다.

## 인터넷 검색 활성화 {#enabling-internet-search}

인터넷 검색을 사용하려면 선택한 검색 제공업체의 API 키가 필요합니다. 설정 방법은 다음과 같습니다.

1. **Gratis AI Agent → Settings → Advanced**로 이동합니다.
2. **Internet Search Provider** 드롭다운 메뉴에서 **Brave Search** 또는 **Tavily** 중 하나를 선택합니다.
3. 해당 필드에 API 키를 입력합니다. 각 필드 옆에 가입 링크가 표시됩니다.
4. **Save Settings**를 클릭합니다.

키를 저장하면 인터넷 검색 기능이 어시스턴트에게 자동으로 제공됩니다.

## Brave Search {#brave-search}

### Brave Search API 키 얻기 {#obtaining-a-brave-search-api-key}

1. [Brave Search API 페이지](https://brave.com/search/api/)를 방문합니다.
2. 플랜에 가입합니다. 월별 요청 제한이 있는 무료 티어가 제공됩니다.
3. Brave Search developer 대시보드에서 API 키를 복사합니다.
4. Gratis AI Agent 설정의 **Brave Search API Key** 필드에 붙여넣습니다.

### 사용 제한 {#usage-limits}

사용량은 Brave Search에서 요청 횟수를 기준으로 청구됩니다. 검색을 유발하는 AI 응답 한 번이 쿼리 한 건으로 계산됩니다. 예상치 못한 요금을 방지하려면 [Brave Search developer dashboard](https://brave.com/search/api/)에서 사용량을 모니터링하세요.

## Tavily {#tavily}

Superdav AI Agent v1.10.0에는 더 풍부한 검색 결과와 고급 리서치 기능을 제공하는 대체 인터넷 검색 제공업체인 **Tavily**가 추가되었습니다.

### Tavily API 키 얻기 {#obtaining-a-tavily-api-key}

1. [Tavily API 페이지](https://tavily.com/)를 방문합니다.
2. 계정에 가입합니다. 월별 요청 제한이 있는 무료 티어가 제공됩니다.
3. Tavily 대시보드에서 API 키를 복사합니다.
4. Gratis AI Agent 설정의 **Tavily API Key** 필드에 붙여넣습니다.

### 사용 제한 {#usage-limits-1}

사용량은 Tavily에서 API 호출 횟수를 기준으로 청구됩니다. 검색을 유발하는 AI 응답 한 번이 호출 한 건으로 계산됩니다. 예상치 못한 요금을 방지하려면 [Tavily dashboard](https://tavily.com/)에서 사용량을 모니터링하세요.

## 인터넷 검색 비활성화 {#disabling-internet-search}

활성화된 검색 제공업체 필드에서 API 키를 제거하고 저장합니다. 인터넷 검색 기능은 더 이상 어시스턴트에게 제공되지 않습니다.

:::note
인터넷 검색은 어시스턴트가 답변을 생성하기 전에 검색 결과를 기다려야 하므로 응답 지연 시간(latency)을 추가합니다. 시간이 중요한 사용 사례의 경우, 실시간 검색이 필요한지 아니면 어시스턴트의 내장 지식만으로 충분한지 고려해 보세요.
:::
