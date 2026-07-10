---
title: কোড স্নিপেটসমূহ
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 ପାଇଁ କୋଡ ସ୍ନିପେଟ୍ସ {#code-snippets-for-v2}

ମୁଖ୍ୟତଃ, **WordPress** ପାଇଁ କୋଡ ସ୍ନିପେଟ୍ସ ବ୍ୟବହାର କରାଯାଏ କିଛି ନିର୍ଦ୍ଦିଷ୍ଟ କାର୍ଯ୍ୟ କରିବା ପାଇଁ ଯାହାକୁ ଅଲଗା ଛୋଟ ፕလଗିନ୍ ଆବଶ୍ୟକ ହୋଇପାରେ। ଏହି କୋଡ ସ୍ନିପେଟ୍ସଗୁଡ଼ିକ WordPress ର ମୂଳ (core) ବା ธีମ୍ (theme) ଫାଇଲରେ (ଯେମିତିକି ଆପଣଙ୍କ ธีମର functions.php ଫାଇଲ) ରଖାଯାଇପାରନ୍ତି କିମ୍ବା ଏହାକୁ ଏକ MU ፕလଗିନ୍ ଭାବରେ ବ୍ୟବହାର କରାଯାଇପାରେ।

ଏହି ଆଇକ୍ରିଲେ ଆମେ **Ultimate Multisite v2** ସହିତ ବ୍ୟବହାର କରିପାରିବାର ତିନୋଟି କୋଡ ସ୍ନିପେଟ୍ସ ଦେଖାଇବା:

  * [**Account ମେନୁ ଆଇଟମର ସ୍ଥିତି ବଦଳାଇବା**](#changing-the-position-of-the-account-menu-item)

  * [**ବ୍ୟବହାରକାରୀ କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟ ପ୍ଲାନରେ ଅଛନ୍ତି କିମ୍ବା ସକ୍ରିୟ ସ subscripsion ଅଛି କି ତାହା ଯାଞ୍ଚ କରିବା ପାଇଁ**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**ମାପିତ ଡୋମେନ୍‌ରେ Font-Icons ସହିତ CORS ସମସ୍ୟା ଠିକ୍ କରିବା**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account ମେନୁ ଆଇଟମର ସ୍ଥିତି ବଦଳାଇବା {#changing-the-position-of-the-account-menu-item}

ଆପଣଙ୍କ କ୍ଲାଇଣ୍ଟର Dashboard ରେ Account ମେନୁ ଆଇଟମର ସ୍ଥିତି ବଦଳାଇବା ପାଇଁ, ଆପଣ କେବଳ ନିମ୍ନଲିଖିତ କୋଡ ସ୍ନିପେଟ୍ସଟିକୁ ଆପଣଙ୍କ ମୁଖ୍ୟ ସାଇটের ଠିକ୍ ธีମର functions.php ରେ ଯୋଡ଼ନ୍ତୁ। ଆପଣ ଏହି ସ୍ନିପେଟ୍ସଗୁଡ଼ିକୁ ଆପଣଙ୍କର କୌଣସି MU-ፕလଗିନ୍ ବା কଷ୍ଟମ୍ ፕလଗିନ୍ ଭିତରେ ମଧ୍ୟ ରଖିପାରିବେ।

add_filter('wu_my_account_menu_position', function() { return 10; // ଆପଣ ଚାହିଁଥିବା ସ୍ଥିତିରେ ମେନୁକୁ ରଖିବା ପାଇଁ ଏହି ମୂଲ୍ୟ (value) ବଦଳାନ୍ତୁ।

## ବ୍ୟବହାରକାରୀ କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟ ପ୍ଲାନରେ ଅଛନ୍ତି କିମ୍ବା ସକ୍ରିୟ subscripsion ଅଛି କିତାହା ଯାଞ୍ଚ କରିବା ପାଇଁ {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

ଏକ ନେଟୱର୍କ ॲଡମିନ୍ ଭାବରେ, ଆପଣଙ୍କୁ କୌଣସି ମୂଳ କାର୍ଯ୍ୟ କରିବା ପାଇଁ କଷ୍ଟମ୍ functions ତିଆରି କରିବାକୁ ପଡ଼ିପାରେ ଯାହା ସେମାନଙ୍କ subscripsionର ଅବସ୍ଥା ଏବଂ ସେ ଯେଉଁ ପ୍ଲାନରେ subscibe ହୋଇଛନ୍ତି, ତାହା ଆଧାରରେ ଚୟନ କରାଯାଇଥିବା ଗ୍ରୁପ ବା ଉପଭୋକ୍ତାମାନଙ୍କ ପାଇଁ କୌଣସି ସେବା/ଫିଚର୍ ମାଗଣା କରିବ।

ଏହି Ultimate Multisite ନେତିକ (native) functionsଗୁଡ଼ିକ ଆପଣଙ୍କୁ ଏଥିରେ ସାହାଯ୍ୟ କରିବ।

ଆପଣ ଜଣେ ବ୍ୟବହାରକାରୀ କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟ ପ୍ଲାନର ସଦସ୍ୟ ଅଛନ୍ତି କି ଯାହାକୁ ଜାଣିବା ପାଇଁ, ଆପଣ ଏହି functionଟି ବ୍ୟବହାର କରିପାରିବେ:

wu_has_plan($user_id, $plan_id)

ସବ୍スクリପସନ୍ ակଟିଭ୍ ଅଛି କି ନାହିଁ ଯାଞ୍ଚ କରିବା ପାଇଁ, ଆପଣ ଏହି function ବ୍ୟବହାର କରିପାରିବେ:

`wu_is_active_subscriber($user_id)`

ତଳେ ଏକ ଉଦାହରଣ snippet ଦିଆଗଲା ଯାହା ଯାଞ୍ଚ କରେ ଯେ ବର୍ତ୍ତମାନର user ନିର୍ଦ୍ଧାରିତ ପ୍ଲାନ (_Plan ID 50_) ଅନ୍ତର୍ଭୁକ୍ତ ଅଛି କି ଏବଂ user ର ସବ୍स्क्रिप्सନ୍ ակଟିଭ୍ ଅଛି କି ନାହିଁ।

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // ইউଜର୍ ପ୍ଲାନର ସଦସ୍ୟ ଏବଂ ତାଙ୍କର ସବ୍स्क्रिप्सନ୍ ակଟିଭ୍ ଅଛି, କିଛି କାମ କରନ୍ତୁ } else { // ইউଜର୍ ପ୍ଲାନର ସଦସ୍ୟ ନୁହଁନ୍ତି -- କିମ୍ବା -- ତାଙ୍କର ସବ୍स्क्रिप्सନ୍ ակଟିଭ୍ ନୁହେଁ, ଅନ୍ୟ କିଛି କାମ କରନ୍ତୁ } // end if;`

ଦେଖନ୍ତୁ ଯେ `_**wu_has_plan**_` function ବ୍ୟବହାର କରିବା ପାଇଁ ଏଥିରେ ଏକ "Plan ID" ଥିବା ଆବଶ୍ୟକ।

ଏକ ପ୍ଲାନର ID ନେବା ପାଇଁ, ଆପଣ **Ultimate Multisite > Products** ରେ ଯାଇପାରିବେ। ପ୍ରତ୍ୟେକ product ର ID ତା'ର ଡାହାଣ ପଟରେ ଦର୍ଶାଯିବ।

ଦେଖନ୍ତୁ, users କେବଳ ଏକ **Plan** ಗೆ ସବ୍स्क्रাইব କରିପାରନ୍ତି, Package ବା Service ନୁହଁନ୍ତି, କାରଣ ସେମାନେ ଏକ **Plan** ର ଅତିରିକ୍ତ (add-on) ଭାବରେ ଥିଲେ।

![Products list showing plan IDs](/img/admin/products-list.png)

## ମ୍ୟାପ୍ କରାଯାଇଥିବା ଡୋମେନ୍‌ରେ Font-Icons ସହିତ CORS ସମସ୍ୟା ଠିକ୍ କରିବା {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## ମ୍ୟାପ୍ କରାଯାଇଥିବା ଡୋମେନ୍‌ରେ Font-Icons ସହିତ CORS ସମସ୍ୟା ଠିକ୍ କରିବା {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

ଏକ sub-site ಗೆ ଏକ domain ମ୍ୟାପ୍ କରିବା ପରେ, ଆପଣ ଜାଣିପାରନ୍ତି ଯେ ସାଇଟ୍ଟି କଷ୍ଟମ୍ font ଲୋଡ କରିବାରେ ଅସୁବିଧା ଲାଗୁଛି। ଏହା ଆପଣଙ୍କ server setting-ର cross-origin blocking ଯୋଗୁଁ ହୋଇଥାଏ।

କାରଣ font files ପ୍ରାୟ ସର୍ବଦା CSS ରୁ ସିଧାସଳଖ ଲୋଡ୍ ହୁଅନ୍ତି, ଆମର domain mapping plugin କୌଣସି original URL ବଦଳାଇ ମ୍ୟାପ୍ କରାଯାଇଥିବା domainରେ ବ୍ୟବହାର କରିବା ପାଇଁ ସେ URLs ରି-राइट କରିପାରେ ନାହିଁ। ତେଣୁ, ଏହି ସମସ୍ୟା ଠିକ୍ କରିବା ପାଇଁ ଆପଣଙ୍କ server configuration files ରେ ପରିବର୍ତ୍ତନ କରିବାକୁ ପଡ଼ିବ।

Apache

ଆପଣଙ୍କର .htaccess ଫାଇଲରେ ଏହା ଯୋଗାନ୍ତୁ:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

ଆପଣଙ୍କ ସର୍ଭର କନଫିଗରେ (ସର୍ଭର ଅନୁଯାୟୀ ଏହାର ସ୍ଥାନ ବଦଳିପାରେ) ଏହା ଯୋଗାନ୍ତୁ:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
