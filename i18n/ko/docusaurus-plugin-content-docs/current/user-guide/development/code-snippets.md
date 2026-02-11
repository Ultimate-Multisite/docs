---
title: 코드 스니펫
sidebar_position: 1
_i18n_hash: 5a7a9a95be84476f87a2c1ca0a4a2be5
---
# v2용 코드 스니펫

기본적으로 **WordPress**용 코드 스니펫은 별도의 작은 플러그인이 필요할 수 있는 특정 작업을 수행하는 데 사용됩니다. 이러한 코드 스니펫은 WordPress 코어 또는 테마 파일 중 하나(일반적으로 테마의 functions.php 파일)에 배치되거나 MU 플러그인으로 사용할 수 있습니다.

이 기사에서는 **Ultimate Multisite v2**에서 사용할 수 있는 세 가지 코드 스니펫을 보여드립니다:

* [**계정 메뉴 항목의 위치 변경**](#changing-the-position-of-the-account-menu-item)

* [**사용자가 특정 플랜에 속해 있는지 및/또는 활성 구독이 있는지 확인하는 방법**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

* [**매핑된 도메인에서 Font-Icons의 CORS 문제 해결**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## 계정 메뉴 항목의 위치 변경

클라이언트의 대시보드에서 계정 메뉴 항목의 위치를 변경하려면, 메인 사이트의 활성 테마 functions.php에 다음 코드 스니펫을 추가하기만 하면 됩니다. 또한 이 스니펫을 mu-plugins 또는 커스텀 플러그인 중 하나에 넣을 수도 있습니다.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.
```

## 사용자가 특정 플랜에 속해 있는지 및/또는 활성 구독이 있는지 확인하는 방법

네트워크 관리자로서 구독 상태와 구독 중인 플랜에 따라 특정 구독자 또는 최종 사용자 그룹에 기본 작업을 수행하거나 서비스/기능을 제공하는 커스텀 함수를 만들어야 할 수 있습니다.

이 Ultimate Multisite 기본 함수들이 그 작업을 도와줄 것입니다.

사용자가 특정 플랜의 멤버인지 확인하려면 다음 함수를 사용할 수 있습니다:

```php
wu_has_plan($user_id, $plan_id)
```

구독이 활성인지 확인하려면 다음 함수를 사용할 수 있습니다:

```php
wu_is_active_subscriber($user_id)
```

아래 예제 스니펫은 현재 사용자가 특정 플랜(_Plan ID 50_)에 속해 있는지와 구독이 활성인지 확인합니다.

```php
$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;
```

주의: _**wu_has_plan**_은 기능을 수행하려면 "Plan ID"가 필요합니다.

플랜 ID를 가져오려면 **Ultimate Multisite > Products**로 이동하면 됩니다. 각 제품의 ID는 표 오른쪽에 표시됩니다.

주의: 사용자는 **Plan**에만 구독할 수 있으며, 패키지나 서비스에는 구독할 수 없습니다. 이는 패키지와 서비스가 **Plan**의 추가 기능이기 때문입니다.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LAYTqHqw5w.png)

## 매핑된 도메인에서 Font-Icons의 CORS 문제 해결

도메인을 서브사이트에 매핑한 후 사이트가 커스텀 폰트 로딩에 문제가 발생할 수 있습니다. 이는 서버 설정에서 발생하는 교차 출처 차단 때문입니다.

폰트 파일은 거의 항상 CSS에서 직접 로드되기 때문에, 도메인 매핑 플러그인은 원본 URL 대신 매핑된 도메인을 사용하도록 URL을 재작성할 수 없습니다. 따라서 문제를 해결하려면 서버 구성 파일을 수정해야 합니다.

아래는 Apache와 NGINX에서 문제를 해결하기 위한 코드 스니펫입니다. 이 변경 사항은 서버 구성 파일(.htaccess 파일 및 NGINX 설정 파일)에 대한 고급 지식이 필요합니다. 이러한 변경을 직접 수행하는 것이 불편하다면, 이 페이지를 호스팅 제공업체 지원 담당자에게 전달해 도움을 요청하세요.

### Apache

.htaccess 파일에 다음을 추가하세요:

```html
<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”
```

### NGINX

서버 설정 파일(서버마다 위치가 다름)에 다음을 추가하세요:

```nginx
location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
```
