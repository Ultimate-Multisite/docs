---
title: કોડ સ્નિપેટ્સ
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 માટે કોડ સ્નિપેટ્સ

મૂળભૂત રીતે, **WordPress** માટે કોડ સ્નિપેટ્સનો ઉપયોગ એવા કામો કરવા માટે થાય છે જેના માટે અન્યથા નાના સમર્પિત plugin ની જરૂર પડી શકે. આવા કોડ સ્નિપેટ્સ WordPress કોર અથવા થીમ ફાઇલોમાંથી એકમાં મૂકવામાં આવે છે (સામાન્ય રીતે તમારી થીમની functions.php ફાઇલમાં) અથવા તેનો ઉપયોગ MU plugin તરીકે કરી શકાય છે.

આ લેખમાં અમે તમને ત્રણ કોડ સ્નિપેટ્સ બતાવીશું જે **Ultimate Multisite v2** સાથે વાપરી શકાય છે:

  * [**Account મેનૂ આઇટમની સ્થિતિ બદલવી**](#changing-the-position-of-the-account-menu-item)

  * [**યુઝર આપેલ પ્લાન હેઠળ છે કે નહીં અને/અથવા સક્રિય subscription છે કે નહીં તે કેવી રીતે ચકાસવું**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**મેપ કરેલા domains માં Font-Icons સાથે CORS સમસ્યાઓ ઠીક કરવી**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account મેનૂ આઇટમની સ્થિતિ બદલવી

તમારા ક્લાયન્ટના Dashboard પર Account મેનૂ આઇટમની સ્થિતિ બદલવા માટે, તમારી મુખ્ય સાઇટની સક્રિય થીમની functions.php માં નીચેનો કોડ સ્નિપેટ ઉમેરો. તમે આ સ્નિપેટ તમારા mu-plugins અથવા custom plugins માંથી એકમાં પણ મૂકી શકો છો.

add_filter('wu_my_account_menu_position', function() { return 10; // મેનૂને ઇચ્છિત સ્થાને મૂકવા માટે આ મૂલ્ય બદલો.

## યુઝર આપેલ પ્લાન હેઠળ છે કે નહીં અને/અથવા સક્રિય subscription છે કે નહીં તે કેવી રીતે ચકાસવું

નેટવર્ક admin તરીકે, તમારે કસ્ટમ functions બનાવવાની જરૂર પડી શકે છે જે મૂળભૂત ક્રિયાઓ કરશે અથવા subscribers અથવા end-users ના પસંદ કરેલા જૂથને તેમના subscription ની સ્થિતિ અને તેઓ જે plan હેઠળ subscribe છે તેના આધારે સેવા/સુવિધા ઉપલબ્ધ કરાવશે.

આ Ultimate Multisite ની native functions તમને આમાં મદદ કરશે.

યુઝર આપેલ plan ના સભ્ય છે કે નહીં તે ચકાસવા માટે, તમે આ function વાપરી શકો છો:

wu_has_plan($user_id, $plan_id)

subscription સક્રિય છે કે નહીં તે ચકાસવા માટે, તમે આ function વાપરી શકો છો:

wu_is_active_subscriber($user_id)

નીચે એક ઉદાહરણ સ્નિપેટ છે જે ચકાસે છે કે વર્તમાન યુઝર ચોક્કસ plan (_Plan ID 50_) હેઠળ છે કે નહીં અને યુઝરનું subscription સક્રિય છે કે નહીં.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // યુઝર PLAN નો સભ્ય છે અને તેનું SUBSCRIPTION સક્રિય છે, કામ કરો} else { // યુઝર PLAN નો સભ્ય નથી -- અથવા -- તેનું SUBSCRIPTION સક્રિય નથી, બીજું કામ કરો} // end if;

નોંધ કરો કે _**wu_has_plan**_ ને કામ કરવા માટે "Plan ID" ની જરૂર છે.

Plan નું ID મેળવવા માટે, તમે **Ultimate Multisite > Products** પર જઈ શકો છો. દરેક product નું ID ટેબલની જમણી બાજુએ બતાવવામાં આવશે.

નોંધ કરો કે યુઝર્સ ફક્ત **Plan** માટે જ subscribe કરી શકે છે, Package અથવા Service માટે નહીં, કારણ કે તે ફક્ત **Plan** માટે add-ons છે.

![Products યાદી plan IDs બતાવે છે](/img/admin/products-list.png)

## મેપ કરેલા domains માં Font-Icons સાથે CORS સમસ્યાઓ ઠીક કરવી
## મેપ કરેલા domains માં Font-Icons સાથે CORS સમસ્યાઓ ઠીક કરવી

sub-site પર domain મેપ કર્યા પછી તમને જણાઈ શકે છે કે સાઇટને custom fonts લોડ કરવામાં મુશ્કેલી આવી રહી છે. આ તમારી server settings માં cross-origin block ને કારણે થાય છે.

કારણ કે font files લગભગ હંમેશા સીધી CSS માંથી લોડ થાય છે, અમારું domain mapping plugin URLs ને મૂળના બદલે મેપ કરેલ domain વાપરવા માટે ફરીથી લખી શકતું નથી, તેથી સમસ્યા ઠીક કરવા માટે, તમારે તમારી server configuration files માં ફેરફાર કરવાની જરૂર પડશે.

નીચે Apache અને NGINX માટે સમસ્યા ઠીક કરવા માટેના કોડ સ્નિપેટ્સ છે. આ ફેરફારો માટે server configuration files (.htaccess files અને NGINX config files) ની અદ્યતન જાણકારી જરૂરી છે. જો તમે આ ફેરફારો જાતે કરવામાં આરામદાયક નથી, તો મદદ માંગતી વખતે આ પેજ તમારા hosting provider support agents ને મોકલો.

### Apache

તમારી .htaccess file માં, ઉમેરો:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

તમારી server config file માં (સ્થાન server થી server અલગ હોય છે), ઉમેરો:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
