---
title: 코드 스니펫
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2용 Code Snippets

기본적으로 **WordPress**용 code snippets는 별도의 작은 plugin이 필요할 수 있는 특정 작업을 수행하는 데 사용됩니다. 이러한 code snippets는 WordPress core 또는 theme 파일 중 하나(일반적으로 theme의 functions.php 파일)에 배치되거나 MU plugin으로 사용할 수 있습니다.

이 글에서는 **Ultimate Multisite v2**와 함께 사용할 수 있는 세 가지 code snippets를 보여드립니다:

  * [**Account 메뉴 항목의 위치 변경하기**](#changing-the-position-of-the-account-menu-item)

  * [**사용자가 특정 plan에 속해 있는지 및/또는 활성 subscription이 있는지 확인하는 방법**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**매핑된 도메인에서 Font-Icons의 CORS 문제 해결하기**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account 메뉴 항목의 위치 변경하기

클라이언트의 Dashboard에서 Account 메뉴 항목의 위치를 변경하려면 다음 code snippet을 메인 사이트의 활성 theme의 functions.php에 추가하기만 하면 됩니다. snippet을 mu-plugins 또는 사용자 지정 plugins 중 하나에 넣을 수도 있습니다.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## 사용자가 특정 plan에 속해 있는지 및/또는 활성 subscription이 있는지 확인하는 방법

네트워크 관리자로서 subscription 상태와 가입한 plan을 기준으로 선택된 구독자 또는 최종 사용자 그룹에게 기본 작업을 수행하거나 서비스/기능을 제공하는 사용자 지정 함수를 만들어야 할 수 있습니다.

이러한 Ultimate Multisite 기본 함수가 이를 도와줍니다.

사용자가 특정 plan의 구성원인지 확인하려면 다음 함수를 사용할 수 있습니다:

wu_has_plan($user_id, $plan_id)

subscription이 활성 상태인지 확인하려면 다음 함수를 사용할 수 있습니다:

wu_is_active_subscriber($user_id)

아래는 현재 사용자가 특정 plan(_Plan ID 50_)에 속해 있는지와 사용자 subscription이 활성 상태인지 확인하는 예시 snippet입니다.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

_**wu_has_plan**_이 작동하려면 "Plan ID"가 필요하다는 점에 유의하세요.

plan의 ID를 얻으려면 **Ultimate Multisite > Products**로 이동하면 됩니다. 각 product의 ID는 표의 오른쪽에 표시됩니다.

사용자는 **Plan**에만 가입할 수 있으며, Package나 Service에는 가입할 수 없습니다. 이들은 **Plan**의 add-ons일 뿐이기 때문입니다.

![plan ID를 보여주는 Products 목록](/img/admin/products-list.png)

## 매핑된 도메인에서 Font-Icons의 CORS 문제 해결하기
## 매핑된 도메인에서 Font-Icons의 CORS 문제 해결하기

도메인을 하위 사이트에 매핑한 후 site에서 사용자 지정 글꼴을 로드하는 데 문제가 있음을 발견할 수 있습니다. 이는 서버 설정의 교차 출처 차단 때문에 발생합니다.

글꼴 파일은 거의 항상 CSS에서 직접 로드되므로, 저희 도메인 매핑 plugin은 원래 도메인 대신 매핑된 도메인을 사용하도록 URL을 다시 작성할 수 없습니다. 따라서 문제를 해결하려면 서버 구성 파일을 수정해야 합니다.

아래는 Apache 및 NGINX에서 문제를 해결하기 위한 code snippets입니다. 이러한 변경에는 서버 구성 파일(.htaccess 파일 및 NGINX 구성 파일)에 대한 고급 지식이 필요합니다. 이러한 변경을 직접 수행하는 것이 불편하다면, 도움이 필요할 때 이 페이지를 호스팅 제공업체의 지원 담당자에게 보내세요.

### Apache

.htaccess 파일에 다음을 추가하세요:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

서버 구성 파일(위치는 서버마다 다름)에 다음을 추가하세요:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
