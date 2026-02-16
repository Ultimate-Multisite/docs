---
title: கோட் ஸ்னிப்பெட்ஸ்
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2-க்கான Code Snippets

அடிப்படையில், **WordPress**-க்கான code snippets என்பது சிறிய தனி plugin தேவைப்படும் சில செயல்களைச் செய்ய பயன்படுகின்றன. இத்தகைய code snippets WordPress core அல்லது theme files-ல் (பொதுவாக உங்கள் theme-ன் functions.php file-ல்) வைக்கப்படுகின்றன அல்லது MU plugin-ஆகப் பயன்படுத்தலாம்.

இந்தக் கட்டுரையில் **Ultimate Multisite v2**-உடன் பயன்படுத்தக்கூடிய மூன்று code snippets-ஐக் காண்பிப்போம்:

  * [**Account menu item-ன் நிலையை மாற்றுதல்**](#changing-the-position-of-the-account-menu-item)

  * [**பயனர் குறிப்பிட்ட plan-ல் உள்ளாரா மற்றும்/அல்லது active subscription வைத்திருக்கிறாரா என்று சரிபார்ப்பது எப்படி**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**mapped domains-ல் Font-Icons-க்கான CORS சிக்கல்களைச் சரிசெய்தல்**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account menu item-ன் நிலையை மாற்றுதல்

உங்கள் வாடிக்கையாளரின் Dashboard-ல் Account menu item-ன் நிலையை மாற்ற, பின்வரும் code snippet-ஐ உங்கள் main site-ன் active theme-ன் functions.php-ல் சேர்க்கவும். இந்த snippet-ஐ உங்கள் mu-plugins அல்லது custom plugins-ல் ஒன்றிலும் வைக்கலாம்.

add_filter('wu_my_account_menu_position', function() { return 10; // menu-ஐ விரும்பிய இடத்தில் வைக்க இந்த மதிப்பை மாற்றவும்.

## பயனர் குறிப்பிட்ட plan-ல் உள்ளாரா மற்றும்/அல்லது active subscription வைத்திருக்கிறாரா என்று சரிபார்ப்பது எப்படி

network admin-ஆக, நீங்கள் அடிப்படை செயல்களைச் செய்யும் அல்லது தேர்ந்தெடுக்கப்பட்ட subscribers அல்லது end-users குழுவிற்கு ஒரு சேவை/அம்சத்தை அவர்களின் subscription நிலை மற்றும் அவர்கள் subscribe செய்துள்ள plan அடிப்படையில் கிடைக்கச் செய்யும் custom functions உருவாக்க வேண்டியிருக்கலாம்.

இந்த Ultimate Multisite native functions அதில் உங்களுக்கு உதவும்.

பயனர் குறிப்பிட்ட plan-ல் உறுப்பினரா என்று சரிபார்க்க, இந்த function-ஐப் பயன்படுத்தலாம்:

wu_has_plan($user_id, $plan_id)

subscription active-ஆக உள்ளதா என்று சரிபார்க்க, இந்த function-ஐப் பயன்படுத்தலாம்:

wu_is_active_subscriber($user_id)

தற்போதைய பயனர் குறிப்பிட்ட plan-ல் (_Plan ID 50_) உள்ளாரா மற்றும் பயனரின் subscription active-ஆக உள்ளதா என்று சரிபார்க்கும் ஒரு உதாரண snippet கீழே உள்ளது.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // பயனர் PLAN-ன் உறுப்பினர் மற்றும் அவரது SUBSCRIPTION ACTIVE-ஆக உள்ளது, செயல்களைச் செய்யவும்} else { // பயனர் PLAN-ன் உறுப்பினர் இல்லை -- அல்லது -- அவரது SUBSCRIPTION ACTIVE-ஆக இல்லை, வேறு செயல்களைச் செய்யவும்} // end if;

_**wu_has_plan**_ செயல்பட "Plan ID" தேவை என்பதை நினைவில் கொள்ளுங்கள்.

ஒரு plan-ன் ID-ஐப் பெற, **Ultimate Multisite > Products**-க்குச் செல்லலாம். ஒவ்வொரு product-ன் ID-யும் table-ன் வலது பக்கத்தில் காட்டப்படும்.

பயனர்கள் **Plan**-க்கு மட்டுமே subscribe செய்ய முடியும், Package அல்லது Service-க்கு அல்ல, ஏனெனில் அவை **Plan**-க்கான add-ons மட்டுமே என்பதை நினைவில் கொள்ளுங்கள்.

![Plan IDs-ஐக் காட்டும் Products பட்டியல்](/img/admin/products-list.png)

## mapped domains-ல் Font-Icons-க்கான CORS சிக்கல்களைச் சரிசெய்தல்
## mapped domains-ல் Font-Icons-க்கான CORS சிக்கல்களைச் சரிசெய்தல்

ஒரு sub-site-க்கு domain mapping செய்த பிறகு, site custom fonts-ஐ load செய்வதில் சிக்கல் இருப்பதைக் காணலாம். இது உங்கள் server settings-ல் உள்ள cross-origin block காரணமாக ஏற்படுகிறது.

font files கிட்டத்தட்ட எப்போதும் CSS-லிருந்து நேரடியாக load செய்யப்படுவதால், எங்கள் domain mapping plugin-ஆல் URLs-ஐ original-க்குப் பதிலாக mapped domain பயன்படுத்த rewrite செய்ய இயலாது, எனவே இந்த சிக்கலைச் சரிசெய்ய, உங்கள் server configuration files-ஐ திருத்த வேண்டும்.

Apache மற்றும் NGINX-க்கான சிக்கலைச் சரிசெய்யும் code snippets கீழே உள்ளன. இந்த மாற்றங்களுக்கு server configuration files (.htaccess files மற்றும் NGINX config files) பற்றிய மேம்பட்ட அறிவு தேவை. இந்த மாற்றங்களை நீங்களே செய்வதில் சங்கடமாக இருந்தால், உதவி கோரும்போது இந்தப் பக்கத்தை உங்கள் hosting provider support agents-க்கு அனுப்புங்கள்.

### Apache

உங்கள் .htaccess file-ல், இதைச் சேர்க்கவும்:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

உங்கள் server config file-ல் (இடம் server-க்கு server மாறுபடும்), இதைச் சேர்க்கவும்:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
