---
title: 등록 양식 사용자 정의
sidebar_position: 17
_i18n_hash: f060f881656e229e05b8d6f83a85bd84
---
# 등록 양식 사용자 정의

WordPress 플랫폼에서 구축된 다른 모든 SaaS와 차별화된 네트워크를 만들기 위해, Ultimate Multisite는 **Checkout Forms** 기능을 사용하여 등록 및 로그인 페이지를 사용자 정의할 수 있도록 해줍니다.

새 고객을 유치하려 할 때 다양한 접근 방식을 실험할 수 있는 쉽고 유연한 방법이지만, 주로 개인화된 등록 양식을 만들 때 사용됩니다. 이 글은 이를 수행하는 방법을 보여주는 것을 목표로 합니다.

## 로그인 및 등록 페이지

Ultimate Multisite 설치 시, 기본적으로 메인 사이트에 맞춤 로그인 및 등록 페이지가 자동으로 생성됩니다. **Ultimate Multisite > Settings > Login & Registration** 페이지로 이동하여 언제든지 이 기본 페이지를 변경할 수 있습니다.

![Login and Registration settings page](/img/config/settings-general.png)

**Login & Registration** 페이지에서 사용자 정의할 수 있는 각 옵션을 살펴보겠습니다:

- **Enable registration:** 이 옵션은 네트워크에서 등록을 활성화하거나 비활성화합니다. 비활성화하면 고객은 등록하고 제품을 구독할 수 없습니다.
- **Enable email verification:** 이 옵션을 켜면 무료 플랜 또는 체험 기간이 있는 유료 플랜에 가입한 고객은 확인 이메일을 받고, 확인 링크를 클릭해야 웹사이트가 생성됩니다.
- **Default registration page:** 등록에 대한 기본 페이지입니다. 이 페이지는 웹사이트에 게시되어야 하며, 등록 양식(또는 체크아웃 양식)을 포함해야 합니다. 원하는 만큼 등록 페이지와 체크아웃 양식을 만들 수 있지만, 체크아웃 양식 쇼트코드를 등록 페이지에 넣어야 표시됩니다.
- **Use custom login page:** 이 옵션은 기본 wp-login.php 페이지 대신 사용자 정의 로그인 페이지를 사용할 수 있게 해줍니다. 이 옵션을 켜면 **Default login page** 옵션(아래쪽)에서 로그인에 사용할 페이지를 선택할 수 있습니다.
- **Obfuscate the original login url (wp-login.php):** 원래 로그인 URL을 숨기려면 이 옵션을 켭니다. 이는 무차별 대입 공격을 방지하는 데 유용합니다. 이 옵션이 활성화되면 Ultimate Multisite는 사용자가 원래 wp-login.php 링크에 접근하려 할 때 404 오류를 표시합니다.
- **Force synchronous site publication:** 고객이 네트워크에서 제품을 구독하면 새 보류 중인 사이트가 실제 네트워크 사이트로 변환되어야 합니다. 게시 프로세스는 Job Queue를 통해 비동기적으로 진행됩니다. 이 옵션을 활성화하면 가입과 같은 요청에서 게시가 강제됩니다.

이제 로그인 및 등록 프로세스와 여전히 관련된 다른 옵션을 살펴보겠습니다. 이 옵션들은 같은 Login & registration 페이지의 **Other options** 바로 아래에 있습니다:

- **Default role:** 가입 프로세스가 끝난 후 고객이 웹사이트에서 갖게 되는 역할입니다.
- **Add users to the main site as well:** 이 옵션을 활성화하면 가입 프로세스 후에 사용자가 네트워크의 메인 사이트에도 추가됩니다. 이 옵션을 활성화하면 해당 사용자의 **default role**을 설정하는 옵션이 바로 아래에 나타납니다.
- **Enable multiple accounts:** 사용자가 동일한 이메일 주소로 네트워크의 다른 사이트에 계정을 가질 수 있도록 허용합니다. 이 옵션이 꺼져 있으면 고객은 동일한 이메일 주소로 네트워크에서 실행되는 다른 웹사이트에 계정을 만들 수 없습니다.

이상으로 로그인 및 등록과 관련된 모든 옵션을 사용자 정의할 수 있습니다! 편집을 마친 후 설정을 저장하는 것을 잊지 마세요.

## 여러 등록 양식 사용

Ultimate Multisite 2.0은 원하는 만큼 다양한 필드와 제공되는 제품을 포함한 양식을 만들 수 있는 체크아웃 양식 편집기를 제공합니다.

로그인 및 등록 페이지는 각각 **[wu_login_form]** (로그인 페이지)와 **[wu_checkout]** (등록 페이지)라는 쇼트코드가 포함되어 있습니다. 체크아웃 양식을 만들거나 빌드하여 등록 페이지를 추가로 사용자 정의할 수 있습니다.

이 기능에 접근하려면 왼쪽 사이드바에서 **Checkout Forms** 메뉴로 이동합니다.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

이 페이지에서 보유한 모든 체크아웃 양식을 확인할 수 있습니다.

새 양식을 만들려면 페이지 상단의 **Add Checkout Form** 버튼을 클릭하세요.

시작점으로 세 가지 옵션 중 하나를 선택할 수 있습니다: single step, multi-step, blank. 그런 다음 **Go to the Editor**를 클릭하세요.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

또는 이미 보유한 양식을 이름 아래의 옵션을 클릭하여 편집하거나 복제할 수 있습니다. 그곳에서 양식 쇼트코드를 복사하거나 양식을 삭제하는 옵션도 찾을 수 있습니다.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

single step 또는 multi-step를 선택하면 체크아웃 양식이 이미 기본 단계로 사전 채워집니다. 필요하면 추가 단계를 더할 수 있습니다.

### 체크아웃 양식 편집

앞서 언급한 바와 같이, 다양한 목적을 위해 체크아웃 양식을 만들 수 있습니다. 이 예제에서는 등록 양식을 다룰 것입니다.

체크아웃 양식 편집기로 이동한 후, 양식에 이름(내부 참조용)과 슬러그(예: 쇼트코드 생성용)를 지정하세요.

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

양식은 단계와 필드로 구성됩니다. **Add New Checkout Step**을 클릭하여 새 단계를 추가할 수 있습니다.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

모달 창의 첫 번째 탭에서 양식 단계의 내용을 입력합니다. ID, 이름, 설명을 지정하세요. 이 항목들은 주로 내부에서 사용됩니다.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

다음으로 단계의 가시성을 설정합니다. **Always show**, **Only show for logged in users**, **Only show for guests** 중에서 선택할 수 있습니다.

![Checkout step visibility options](/img/config/checkout-form-step.png)

마지막으로 단계 스타일을 구성합니다. 이는 선택 사항입니다.

![Checkout step style configuration](/img/config/checkout-form-step.png)

이제 첫 번째 단계에 필드를 추가할 차례입니다. **Add New Field**를 클릭하고 원하는 섹션 유형을 선택하세요.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

각 필드는 채워야 할 다양한 매개변수를 가집니다. 이번 첫 번째 단계에서는 **Username** 필드를 선택합니다.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

필요한 만큼 단계와 필드를 추가할 수 있습니다. 고객이 제품을 선택할 수 있도록 표시하려면 Pricing Table 필드를 사용하세요. 클라이언트가 템플릿을 선택하도록 하려면 Template Selection 필드를 추가하세요. 등등.

_**참고:** 체크아웃 양식을 만든 후 제품을 생성하면, Pricing table 섹션에 제품을 추가해야 합니다. 추가하지 않으면 고객에게 등록 페이지에 제품이 표시되지 않습니다._

_**참고 2:** username, email, password, site title, site URL, order summary, payment, submit button은 체크아웃 양식을 만들 때 필수 필드입니다._

체크아웃 양식을 작업하는 동안 언제든지 미리보기 버튼을 사용하여 클라이언트가 양식을 어떻게 보는지 확인할 수 있습니다. 기존 사용자 또는 방문자로서 보기 모드를 전환할 수도 있습니다.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

마지막으로 **Advanced Options**에서 **Thank You** 페이지 메시지를 구성하고, 전환 추적용 스니펫을 추가하며, 체크아웃 양식에 사용자 정의 CSS를 추가하거나 특정 국가에 제한할 수 있습니다.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

오른쪽 열에서 이 옵션을 토글하여 체크아웃 양식을 수동으로 활성화하거나 비활성화하거나 영구적으로 삭제할 수 있습니다.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

체크아웃 양식을 저장하는 것을 잊지 마세요!

![Save Checkout Form button](/img/config/checkout-form-save.png)

양식 쇼트코드를 얻으려면 **Generate Shortcode**를 클릭하고 모달 창에 표시된 결과를 복사하세요.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**참고:** 이 쇼트코드를 등록 페이지에 추가해야 체크아웃 양식이 포함됩니다._

## URL 매개변수를 통한 제품 및 템플릿 미리 선택

제품에 대한 맞춤형 가격표를 만들고, 고객이 가격표 또는 템플릿 페이지에서 선택한 제품 또는 템플릿을 체크아웃 양식에서 미리 선택하려면 URL 매개변수를 사용할 수 있습니다.

### **For plans:**

**Ultimate Multisite > Products > Select a plan**으로 이동합니다. 페이지 상단에 **Click to copy Shareable Link** 버튼이 표시됩니다. 이 링크를 사용하여 체크아웃 양식에서 해당 플랜을 미리 선택할 수 있습니다.

![Product page with shareable link button](/img/config/products-list.png)

이 공유 링크는 **Plans**에만 유효합니다. 패키지나 서비스에는 공유 링크를 사용할 수 없습니다.

### For templates:

체크아웃 양식에서 사이트 템플릿을 미리 선택하려면 등록 페이지 URL에 **?template_id=X** 매개변수를 사용할 수 있습니다. 'X'는 **site template ID number**로 교체해야 합니다. 이 번호를 얻으려면 **Ultimate Multisite > Sites**로 이동하세요.

사용하려는 사이트 템플릿 바로 아래에 있는 **Manage**를 클릭합니다. SITE ID 번호가 표시됩니다. 이 번호를 사용하여 해당 사이트 템플릿을 체크아웃 양식에서 미리 선택합니다. 여기서는 URL 매개변수가 **?template_id=2**가 됩니다.

![Sites list showing site template ID](/img/config/site-templates-list.png)

우리 네트워크 웹사이트가 [**www.mynetwork.com**](http://www.mynetwork.com)이고, 등록 페이지와 체크아웃 양식이 **/register** 페이지에 있다고 가정해 보겠습니다. 이 사이트 템플릿이 미리 선택된 전체 URL은 [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**와 같습니다.

또한, 제품과 템플릿을 모두 미리 선택하려면, 플랜의 공유 링크를 복사하고 끝에 템플릿 매개변수를 붙여넣으면 됩니다. 예를 들어 [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**와 같이 표시됩니다.
