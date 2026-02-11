---
title: 사이트 관리
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# 사이트 관리

사이트(또는 서브사이트)는 귀하의 WaaS 비즈니스의 핵심입니다. Ultimate Multisite에는 3가지 유형의 사이트가 있습니다:

- **고객 소유** — 특정 고객이 소유한 사이트
- **사이트 템플릿** — 고객이 시작점으로 선택할 수 있는 사전 정의된 사이트
- **메인 사이트** — 귀하의 주요 네트워크 사이트

## 사이트 보기

**Ultimate Multisite → Sites**로 이동하여 네트워크의 모든 서브사이트를 확인하세요. 각 사이트는 유형별로 라벨이 붙어 있으며 All Sites, Customer-Owned, Templates, Pending 중에서 필터링할 수 있습니다.

![Sites list page](/img/admin/sites-list.png)

## 새 사이트 추가

**Add Site** 버튼을 클릭하여 새 사이트를 만드세요. 다음 정보를 제공해야 합니다:

- **Site Title** — 새 사이트의 이름
- **Site URL** — 사이트의 도메인/경로
- **Site Type** — 고객 사이트, 템플릿, 일반 사이트 중 어느 것인지

**Copy Site** 옵션을 사용하면 기존 사이트 템플릿을 기반으로 새 사이트를 만들 수 있습니다. 활성화 시 시작점으로 사용할 템플릿을 선택할 수 있습니다. **Copy Media on Duplication**이 활성화되어 있어야 미디어 파일이 포함됩니다.

## 기존 사이트 관리

사이트 중 **Manage**를 클릭하면 **Edit Site** 페이지가 열립니다. 여기에서 다음을 확인할 수 있습니다:

### 기본 정보

사이트 이름, 유형, 사이트 ID 및 설명이 표시됩니다. 또한 매핑된 도메인, 연결된 멤버십, 사이트를 소유한 고객 계정도 확인할 수 있습니다.

### 사이트 옵션

사이트의 기능 및 한계를 구성합니다:

- **Visit limits** — 최대 방문 수
- **User account limits** — 사용자 역할별 한계
- **Disk space** — 사이트 저장 용량 한도
- **Custom domain** — 이 사이트에 도메인 매핑을 활성화
- **Plugin and theme visibility** — 플러그인 및 테마의 가시성(보이기, 숨기기, 사전 활성화)을 제어

기본적으로 사이트는 멤버십 수준에서 설정된 한계를 따릅니다. 사이트 수준에서 한계를 설정하면 멤버십 설정이 무시됩니다.

### 연관

사이트 옵션 아래에 다음과 같은 정보가 표시됩니다:

- **Mapped domains** — 사이트와 연결된 매핑 도메인
- **Membership** — 사이트가 속한 멤버십
- **Customer account** — 사이트와 연결된 고객 계정

### 오른쪽 사이드바

오른쪽 사이드바에서 다음을 수행할 수 있습니다:

- **Enable/disable the site** — 토글 버튼으로 사이트를 활성화/비활성화
- **Change the site type** 또는 소유권을 재할당
- **Set a site image/thumbnail** (사이트 템플릿의 프런트엔드에 표시)
- **Delete the site** — 영구적으로 삭제

:::warning
사이트를 삭제하면 되돌릴 수 없습니다. 사이트와 모든 콘텐츠가 영구적으로 삭제됩니다.
:::
