---
title: WordPress 멀티사이트 설치 방법
sidebar_position: 2
_i18n_hash: ce5929a52ea69f8a4b769f6eab46445c
---
# How do I Install WordPress Multisite?

WordPress Multisite는 단일 설치에서 사이트 네트워크를 만들 수 있게 해줍니다. 이는 내장 기능이지만 기본적으로 활성화되어 있지 않습니다.

Since Ultimate Multisite는 네트워크 전용 플러그인이므로 이 튜토리얼에서는 WordPress Multisite를 설치하고 설정하는 방법을 배웁니다. 이 내용은 WPBeginner의 [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/)를 기반으로 합니다.

**Things to pay attention to before creating your multisite network:**

  * 좋은 WordPress 호스팅을 이용하세요! 네트워크에 있는 웹사이트는 동일한 서버 리소스를 공유합니다.

  * 트래픽이 적은 몇 개의 사이트만 있는 경우 공유 호스팅이 적합할 수 있습니다.

  * 대부분의 **Managed WordPress hosting providers**는 Multisite를 기본으로 제공합니다(WordPress를 Multisite가 이미 활성화되고 구성된 상태로 설치합니다). WP Engine, Closte, Cloudways 등에서 해당됩니다. 호스팅 제공업체가 해당되는지 확실하지 않다면 이 튜토리얼을 진행하기 전에 지원팀에 문의하세요.

  * FTP를 사용해 WordPress를 설치하고 파일을 편집하는 방법에 익숙해 두는 것도 좋습니다.

_**IMPORTANT**_ **:** 기존 WordPress 웹사이트에 멀티사이트 네트워크를 설정하는 경우 다음을 잊지 마세요:

  * WordPress 사이트를 완전히 백업하세요

  * 플러그인 페이지로 이동해 일괄 작업에서 _Deactivate_를 선택한 뒤 _Apply_를 클릭해 사이트의 모든 플러그인을 비활성화하세요

[![](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)](https://downloads.intercomcdn.com/i/o/141065015/09f448a371b8cab63280777c/Multisite+1.png)

To enable Multisite, first connect to your site using a FTP client or cPanel file manager, and open your wp-config.php file for editing.

Before the _*That’s all, stop editing! Happy blogging.*_ 라인 앞에 다음 코드 스니펫을 추가하세요:

define('WP_ALLOW_MULTISITE', true);

Save and upload your wp-config.php file back to the server.

With the multisite feature enabled on your site, now it’s time to setup your network.

Go to **Tools » Network Setup**

[![](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)](https://downloads.intercomcdn.com/i/o/141065542/5bb9b19a52ece96c52b659d8/Multisite+3.png)

Now you need to tell WordPress what kind of domain structure you will be using for sites in your network: subdomains or subdirectories.

If you choose subdomains, you must change your DNS settings for domain mapping and make sure setup _**wildcard subdomains**_ for your multisite network.

Back to the Network Setup, give a title for your network and be sure that the email address in the Network admin email is correct. Click _Install_ to continue.

[![](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)](https://downloads.intercomcdn.com/i/o/141066037/fd8a063b69988be1c372dac6/Multisite+4.png)

Add this code, provided by WordPress, to your _**wp-config.php**_ :

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

And this code, also provided by WordPress, to your _**.htaccess**_ file:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

Use an FTP client or a file manager (if you are using something like cPanel, for example) to copy and paste the code in these two files.

Finally, re-login to your WordPress site to access your multisite network.

**It is important to test and make sure that you are able to create a subsite on your WordPress Multisite installation before you install Ultimate Multisite.**

To create a subsite:

  1. 웹사이트의 wp-admin을 엽니다

  2. My Sites > Sites (/wp-admin/network/sites.php)로 이동합니다

  3. 상단의 Add New를 클릭합니다

  4. 모든 필드를 입력합니다:

  * 사이트 주소 — “www”를 사용하지 마세요

  * 서브도메인: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * 서브디렉터리: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * 사이트 제목 — 사이트의 제목, 나중에 변경 가능

  * 관리자 이메일 — 서브사이트의 초기 관리자 사용자로 설정

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hrA3XtntYQ.png)

필드를 모두 입력한 뒤 'Add site' 버튼을 클릭합니다. 새 서브사이트가 생성되면 접근해 서브사이트가 정상적으로 동작하는지 확인하세요.

## Common Problems:

### 1\. I can create new sites but they are not accessible.

서브도메인을 선택했다면 멀티사이트 네트워크에 와일드카드 서브도메인을 설정해야 합니다.

이를 위해서는 웹사이트 호스팅 계정의 제어판 대시보드(예: cPanel/Plesk/Direct Admin 등)를 엽니다.

“도메인” 또는 “서브도메인” 옵션을 찾습니다. 일부 제어판에서는 “도메인 관리”라고 표시됩니다.

서브도메인 필드에 별표(*)를 입력합니다. 그러면 서브도메인을 추가할 도메인 이름을 선택하라는 메시지가 표시됩니다.

선택한 도메인 이름의 문서 루트가 자동으로 감지됩니다. _Create_ 또는 _Save_ 버튼을 클릭해 와일드카드 서브도메인을 추가합니다. 항목은 “*.[mydomain.com](http://mydomain.com)”처럼 표시됩니다
