---
title: Lihlobo la kodisi
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets ho v2

Mme, code snippets tsa **WordPress** kea go dira dikgwathwa tse di ka hloka plugin e le sehle. Le fa code snippets tse di ka dirwa mo file ya WordPress core kapa theme (go ntlha, file ya functions.php ya theme ya gago), kapa go ka fetogela ho ba le MU plugin.

Mo lapa la this article, re tla go bona code snippets tse resi thata tse ka fetogela ho fetogela le **Ultimate Multisite v2**:

  * [**Go fetoga sebopeo sa menu ya Account**](#changing-the-position-of-the-account-menu-item)

  * [**Kae go bona hore morao o na le plan e leng le/go na subscription e neng e teng**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Go abala CORS issues le Font-Icons mo mapped domains**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Go fetoga sebopeo sa menu ya Account {#changing-the-position-of-the-account-menu-item}

Ho fetoga sebopeo sa menu ya Account mo Dashboard ya client, kea fana ka code snippet e leng le fetogela mo functions.php ya theme ya gago e teng. E ka fetogela snippet e leng mo mu-plugin wa gago kapa plugin e neng e dirwa.

add_filter('wu_my_account_menu_position', function() { return 10; // Fetoga litlhokwa tse di fetoga ho dira menu e teng sebopeo sa go batlang.

Kuba go tlhola hore o tsebe kae hore ho ntswela (subscription) e le e tsamaea, o ka u sebelisa fōnumo ea:

`wu_is_active_subscriber($user_id)`

Kea sehlopha sehlopha sehlopha seo se hloka ho tseba hore user id e fapaneng.

Mme ke na le sebaka sehlopha sehlopha sehlopha seo sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehlopha sehl

Le tsela le fetang ho a tshepa bohlelo ba Apache le NGINX. Ho fana ka botshelo tse di fetang, ho nang le molao o lula oa ho tseba ka configuration files tsa server (.htaccess le NGINX config files). Ha u le teng le ho fetola liphetogo tse di fetang, u le tshepa page ena sa sefaloho ea support agents ba hosting ha u batla thuso.

### Apache {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Ha u le teng .htaccess file ea hau, u fana:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Ha u le teng server config file (le tsela e fetoga ka ho fetoga haholo), u fana:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
