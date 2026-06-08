---
title: 제3자 모드 마이그레이션
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Third-Party Mode 마이그레이션

Superdav AI Agent v1.12.0에서는 third-party abilities를 처리하는 방식이 변경되었습니다. **Third-party mode가 이제 기본값으로 auto로 설정**되어, 수동 설정 없이 WordPress 7.0+에서 네이티브 WordPress Abilities API 통합이 가능해졌습니다.

## 변경된 사항은 무엇인가요?

### v1.12.0 이전

third-party abilities를 사용하려면 수동 설정이 필요했습니다.

- "third-party mode"를 명시적으로 활성화해야 했습니다.
- abilities는 커스텀 레지스트리에서 로드되었습니다.
- WordPress Abilities API와의 통합은 선택 사항이었습니다.
- 기본 모드는 Legacy mode였습니다.

### v1.12.0 이후

third-party abilities가 자동으로 작동합니다.

- third-party mode가 "auto"로 기본 설정됩니다.
- abilities가 WordPress Abilities API와 네이티브하게 통합됩니다.
- WordPress 7.0+에서는 수동 설정이 필요 없습니다.
- 이전 버전의 WordPress를 위해 Legacy mode는 여전히 사용할 수 있습니다.

## 누가 영향을 받나요?

### 신규 설치 (WordPress 7.0+)

**조치할 사항이 없습니다.** third-party mode가 자동으로 "auto"로 설정되며, abilities가 별도의 설정 없이 바로 작동합니다.

### 기존 설치

**설정은 유지됩니다.** 다음을 사용하고 있었다면:

- **Legacy mode**: Legacy mode를 유지합니다 (변경 없음)
- **수동 third-party mode**: 수동 모드를 유지합니다 (변경 없음)
- **Auto mode**: Auto mode를 계속 사용합니다 (변경 없음)

### WordPress 7.0 이전 버전

**Legacy mode는 여전히 사용할 수 있습니다.** WordPress 6.x 이하 버전을 사용 중이라면:

- third-party mode가 "legacy"로 기본 설정됩니다.
- 원한다면 third-party mode를 수동으로 활성화할 수 있습니다.
- 네이티브 Abilities API를 사용하려면 WordPress 7.0+으로 업그레이드하세요.

## 모드 이해하기

### Auto Mode (새로운 기본값)

**Auto mode**는 네이티브 WordPress Abilities API 통합을 사용합니다:

- abilities는 WordPress hooks를 통해 등록됩니다.
- WordPress 7.0+ Abilities API와 완벽하게 호환됩니다.
- third-party abilities를 자동으로 감지합니다.
- 수동 설정이 필요 없습니다.

**사용 시점**: WordPress 7.0+에서 third-party abilities를 사용할 때

### Manual Mode

**Manual mode**는 명시적인 설정이 필요합니다:

- 어떤 third-party abilities를 로드할지 지정합니다.
- 테스트나 특정 abilities만 로드할 때 유용합니다.
- 설정 파일 편집이 필요합니다.
- 제어는 더 많이 되지만, 설정도 더 많이 필요합니다.

**사용 시점**: 테스트, 특정 abilities 로드, 또는 커스텀 설정이 필요할 때

### Legacy Mode

**Legacy mode**는 이전의 third-party ability 시스템을 사용합니다:

- 커스텀 ability registry (WordPress Abilities API가 아님)
- 이전 버전의 WordPress와 하위 호환됩니다.
- 네이티브 WordPress 통합이 없습니다.
- 사용 중단되었지만 여전히 지원됩니다.

**사용 시점**: WordPress 6.x 이하 버전, 또는 레거시 호환성이 필요할 때

## 현재 모드 확인하기

### Admin Panel을 통해

1. **WordPress Admin** → **Superdav AI Agent** → **Settings**로 이동합니다.
2. **Third-Party Mode** 설정을 찾습니다.
3. 현재 모드와 변경 옵션을 확인할 수 있습니다.

### 코드를 통해

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', 또는 'legacy'
```

## 모드 변경하기

### Auto Mode로 전환

WordPress 7.0+을 사용하며 auto mode를 사용하고 싶다면:

1. **Superdav AI Agent** → **Settings**로 이동합니다.
2. **Third-Party Mode**를 찾습니다.
3. **Auto (WordPress Abilities API)**를 선택합니다.
4. **Save**을 클릭합니다.

Superdav AI Agent가 third-party abilities를 자동으로 감지하고 등록합니다.

### Manual Mode로 전환

어떤 abilities가 로드될지 수동으로 제어하고 싶다면:

1. **Superdav AI Agent** → **Settings**로 이동합니다.
2. **Third-Party Mode**를 찾습니다.
3. **Manual**을 선택합니다.
4. **Save**를 클릭합니다.
5. 설정 파일을 편집하여 로드할 abilities를 지정합니다.

### Legacy Mode로 전환

레거시 호환성이 필요하다면:

1. **Superdav AI Agent** → **Settings**로 이동합니다.
2. **Third-Party Mode**를 찾습니다.
3. **Legacy**를 선택합니다.
4. **Save**를 클릭합니다.

## Auto Mode의 장점

### 자동 감지 (Automatic Discovery)

abilities는 다음 위치에서 자동으로 감지됩니다:

- 설치된 플러그인
- 활성 테마
- must-use 플러그인
- drop-in 플러그인

수동 등록이 필요 없습니다.

### 네이티브 통합 (Native Integration)

abilities는 WordPress Abilities API와 통합됩니다:

- WordPress 코어와 일관성이 있습니다.
- WordPress admin에서 작동합니다.
- Abilities API를 사용하는 다른 플러그인과 호환됩니다.
- WordPress가 발전함에 따라 미래 지향적입니다.

### 간소화된 관리 (Simplified Management)

- 수정할 설정 파일이 없습니다.
- 수동 abilities 등록이 필요 없습니다.
- Ability Visibility 컨트롤이 자동으로 작동합니다.
- Admin notices가 분류되지 않은 abilities에 대해 알려줍니다.

### 향상된 성능 (Better Performance)

- abilities가 캐시됩니다.
- 필요할 때 지연 로드(Lazy-loaded)됩니다.
- WordPress 7.0+에 최적화되어 있습니다.

## 마이그레이션 경로

### WordPress 6.x를 사용하는 경우

1. **WordPress 7.0+으로 업그레이드**합니다 (준비가 되었을 때).
2. **Superdav AI Agent를 v1.12.0+으로 업데이트**합니다.
3. **third-party mode를 Auto로 변경**합니다 (선택 사항; legacy mode는 여전히 작동합니다).
4. **ability visibility를 검토**하여 적절한 접근 제어가 이루어지는지 확인합니다.

### WordPress 7.0+을 사용하는 경우

1. **Superdav AI Agent를 v1.12.0+으로 업데이트**합니다.
2. **third-party mode가 Auto로 설정되었는지 확인**합니다 (기본값이어야 합니다).
3. **ability visibility를 검토**하여 적절한 접근 제어가 이루어지는지 확인합니다.
4. **third-party abilities를 테스트**하여 제대로 작동하는지 확인합니다.

## 문제 해결 (Troubleshooting)

### auto mode에서 abilities가 로드되지 않아요

- WordPress 7.0+을 사용 중인지 확인합니다.
- third-party mode가 "Auto"로 설정되어 있는지 확인합니다.
- abilities를 제공하는 플러그인이 활성화되어 있는지 확인합니다.
- 등록 오류가 있는지 WordPress error logs를 확인합니다.

### legacy mode를 유지하고 싶어요

- **Settings** → **Third-Party Mode**로 이동합니다.
- **Legacy**를 선택합니다.
- **Save**를 클릭합니다.
- Legacy mode는 계속 작동할 것입니다.

### 커스텀 abilities가 표시되지 않아요

- WordPress hooks를 통해 등록되었는지 확인합니다.
- Abilities API를 올바르게 구현했는지 확인합니다.
- WordPress error logs를 검토합니다.
- **Ability Visibility** admin 페이지를 사용하여 등록된 모든 abilities를 확인합니다.

### "unclassified ability" 알림이 표시돼요

- 이는 새로운 third-party abilities에 대해 정상적인 현상입니다.
- admin notice에서 검토하고 분류합니다.
- 분류에 대한 자세한 내용은 **Ability Visibility**를 확인하세요.

## 하위 호환성 (Backward Compatibility)

### 기존 설정

기존 third-party ability 설정이 있는 경우:

- **Legacy mode**: 기존 설정이 계속 작동합니다.
- **Manual mode**: 기존 설정이 계속 작동합니다.
- **Auto mode**: 기존 설정은 무시됩니다 (auto mode가 우선합니다).

커스텀 설정을 유지하려면 Manual 또는 Legacy mode에 머무르세요.

### 사용 중단 일정 (Deprecation Timeline)

- **v1.12.0**: Legacy 및 Manual mode 모두 완전히 지원됩니다.
- **v1.13.0+**: Legacy mode에서 사용 중단 경고가 표시될 수 있습니다.
- **v2.0.0**: Legacy mode가 제거될 수 있습니다 (미정).

## 모범 사례 (Best Practices)

### 신규 설치의 경우

- Auto mode를 사용하세요 (기본값입니다).
- Superdav AI Agent가 abilities를 자동으로 감지하도록 하세요.
- Ability Visibility를 사용하여 접근을 제어하세요.

### 기존 설치의 경우

- 가능하다면 WordPress 7.0+으로 업그레이드하세요.
- 관리를 간소화하기 위해 Auto mode로 전환하세요.
- Ability Visibility를 사용하여 abilities를 검토하고 분류하세요.

### 커스텀 abilities의 경우

- WordPress hooks (Abilities API)를 통해 abilities를 등록하세요.
- 커스텀 ability registry 사용을 피하세요.
- Auto mode에서 WordPress 7.0+으로 테스트하세요.

## 다음 단계

1. **WordPress 버전을 확인하세요**: Auto mode를 사용하려면 7.0+인지 확인합니다.
2. **third-party mode를 검토하세요**: Settings로 이동하여 현재 모드를 확인합니다.
3. **필요한 경우 업데이트하세요**: WordPress 7.0+을 사용 중이라면 Auto mode로 전환합니다.
4. **abilities를 분류하세요**: 분류되지 않은 abilities를 검토하고 분류합니다.
5. **테스트하세요**: third-party abilities가 올바르게 작동하는지 확인합니다.

## 관련 주제

- **Ability Visibility**: 어떤 abilities가 어디에 노출될지 제어합니다.
- **WordPress Abilities API**: 네이티브 WordPress ability 등록에 대해 알아봅니다.
- **Third-Party Ability Development**: Auto mode와 함께 작동하는 abilities를 만듭니다.
