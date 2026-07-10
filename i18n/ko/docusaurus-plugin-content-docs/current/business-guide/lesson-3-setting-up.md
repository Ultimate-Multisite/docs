---
title: '제3강: 네트워크 설정하기'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lesson 3: 네트워크 설정하기 {#lesson-3-setting-up-your-network}

이제 구축할 시간입니다. 이번 레슨에서는 Ultimate Multisite를 설치하고 FitSite 네트워크의 기반을 설정할 것입니다. 여기서 내리는 모든 결정은 피트니스 분야에 초점을 맞추었습니다.

## 어디까지 진행했나요 {#where-we-left-off}

우리는 피트니스 스튜디오를 틈새 시장(niche)으로 선정하고 기회를 검증했습니다. 이제 이 아이디어를 실제로 작동하는 플랫폼으로 만들어 봅시다.

## 호스팅 선택하기 {#choosing-your-hosting}

호스팅 선택은 단일 웹사이트를 운영할 때보다 틈새 시장 플랫폼을 운영할 때 훨씬 중요합니다. 여러분은 하나의 사이트를 호스팅하는 것이 아니라, 수십 개에서 수백 개의 사이트로 성장할 네트워크 전체를 호스팅하는 것입니다.

### 무엇을 확인해야 할까요 {#what-to-look-for}

- **WordPress Multisite 지원**: 모든 호스팅 업체가 멀티사이트를 잘 처리하는 것은 아닙니다.
- **와일드카드 SSL (Wildcard SSL)**: 서브도메인 기반 네트워크에는 필수적입니다.
- **확장 가능한 리소스**: 마이그레이션 없이 성장할 공간이 필요합니다.
- **Ultimate Multisite 통합**: 자동 도메인 매핑 및 SSL 설정은 운영 노력을 크게 절약해 줍니다.

### 권장 접근 방식 {#recommended-approach}

[호환 가능한 제공업체](/user-guide/host-integrations/closte) 목록에서 호스팅 업체를 선택하세요. 이 업체들은 Ultimate Multisite와 테스트를 거쳤으며, 도메인 매핑 및 SSL 자동화를 위해 필요한 통합 기능을 제공합니다.

FitSite의 경우, 서브도메인 구성을 사용할 것입니다. 이는 고객 사이트가 처음에는 `studioname.fitsite.com`과 같이 나타나고, 나중에 선택적으로 자체 도메인을 매핑할 수 있다는 의미입니다.

## WordPress Multisite 설치하기 {#installing-wordpress-multisite}

아직 WordPress Multisite가 설치되어 있지 않다면 다음 단계를 따르세요.

1. 호스팅 제공업체에 WordPress를 설치합니다.
2. [WordPress Multisite 설치 방법](/user-guide/getting-started/how-to-install-wordpress-multisite) 가이드를 따릅니다.
3. 안내에 따라 **서브도메인(subdomain)** 구성을 선택합니다.

:::tip 왜 서브도메인인가요?
서브도메인은 각 고객 사이트에 고유한 주소(`studio.fitsite.com`)를 부여하며, 경로(`fitsite.com/studio`)를 사용하지 않습니다. 이는 고객에게 더 전문적으로 보이며, 퍼머링크 충돌을 방지할 수 있습니다. 자세한 비교는 [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101)을 참고하세요.
:::

## Ultimate Multisite 설치하기 {#installing-ultimate-multisite}

[Ultimate Multisite 설치](/user-guide/getting-started/installing-ultimate-multisite) 가이드를 따라 다음 작업을 수행하세요.

1. 플러그인을 네트워크 전체에 업로드하고 활성화합니다.
2. [설정 마법사](/user-guide/getting-started/multisite-setup-wizard)를 실행합니다.

설정 마법사를 진행하는 동안 FitSite 틈새 시장을 염두에 두세요.

- **통화(Currency)**: 피트니스 스튜디오 고객이 사용하는 통화로 설정합니다.
- **회사 이름(Company name)**: "FitSite"(또는 선택한 브랜드 이름)로 설정합니다.
- **회사 로고(Company logo)**: 브랜드 로고를 업로드합니다. (이 로고는 청구서와 이메일에 표시됩니다.)

## 피트니스 틈새 시장에 맞게 설정하기 {#configuring-for-the-fitness-niche}

Ultimate Multisite가 설치되었다면, 다음 틈새 시장별 설정들을 진행하세요.

### 일반 설정 (General Settings) {#general-settings}

**Ultimate Multisite > Settings**로 이동하여 다음을 설정합니다.

- **사이트 이름(Site name)**: FitSite
- **기본 역할(Default role)**: Administrator — 피트니스 스튜디오 소유자는 자신의 사이트 콘텐츠에 대한 완전한 제어 권한이 필요합니다.
- **등록(Registration)**: 스튜디오 소유자가 직접 가입할 수 있도록 사용자 등록을 활성화합니다.

### 이메일 설정 (Email Configuration) {#email-configuration}

시스템에서 발송되는 이메일은 여러분의 틈새 시장 언어를 사용해야 합니다. **Ultimate Multisite > Settings > Emails**로 이동하여 다음을 맞춤 설정합니다.

- 일반적인 "새 사이트" 문구를 피트니스 관련 메시지로 대체합니다.
- 예시 환영 제목: "귀하의 피트니스 스튜디오 웹사이트가 준비되었습니다"
- 예시 환영 본문: 스튜디오, 수업, 그리고 피트니스 사이트 시작에 대한 내용을 언급합니다.

이 부분은 레슨 8(고객 온보딩)에서 더 다듬겠지만, 지금부터 톤을 설정해 두면 초기 테스트 가입자들도 틈새 시장에 특화된 느낌을 받을 수 있습니다.

### 도메인 설정 (Domain Configuration) {#domain-configuration}

호환 가능한 호스팅 제공업체를 사용하는 경우, 지금 도메인 매핑을 설정하세요.

1. **Ultimate Multisite > Settings > Domain Mapping**으로 이동합니다.
2. 사용 중인 호스트에 대한 통합 가이드를 따릅니다.
3. 새로운 서브사이트가 자동으로 SSL을 받는지 테스트합니다.

이렇게 해야 다음 레슨에서 템플릿과 테스트 사이트를 만들기 시작할 때 모든 것이 끝까지 작동하는지 확인할 수 있습니다.

## 현재 FitSite 네트워크 현황 {#the-fitsite-network-so-far}

이번 레슨을 마치면 다음과 같은 것을 갖게 됩니다.

```
FitSite Network
├── WordPress Multisite (서브도메인 모드)
├── Ultimate Multisite (설치 및 설정 완료)
├── 와일드카드 SSL이 적용된 호스팅
├── 도메인 매핑 설정 완료
├── 틈새 시장별 이메일 템플릿 (초기)
└── 사이트 템플릿 준비 완료 (다음 레슨)
```

## 이번 레슨에서 구축한 것 {#what-we-built-this-lesson}

- 서브도메인 모드의 작동하는 WordPress Multisite 설치
- FitSite 브랜딩으로 설정된 Ultimate Multisite 설치
- 성장하는 네트워크를 위한 호스팅 및 SSL 설정
- 호스팅 제공업체에 맞게 설정된 도메인 매핑
- 첫날부터 확립된 틈새 시장별 이메일 톤

---

**다음:** [Lesson 4: 틈새 시장 템플릿 구축하기](lesson-4-templates) — 피트니스 스튜디오 소유자들이 실제로 사용하고 싶어 할 사이트 템플릿을 만듭니다.
