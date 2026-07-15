---
title: කේත කෑලි
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 සඳහා කේත උපුටන (Code Snippets)

ප්‍රධාන වශයෙන්, **WordPress** සඳහා වන කේත කොටස් යනු වෙනම කුඩා ප්ලගිනක් අවශ්‍ය විය හැකි ක්‍රියාවන් සිදු කිරීමට භාවිතා කරන දේවල් වේ. එවැනි කේත කොටස් WordPress හි ප්‍රධාන ගොනුවක (සාමාන්‍යයෙන් ඔබේ තේමාගේ functions.php ගොනුවේ) හෝ MU plugin එකක් ලෙස භාවිතා කළ හැකිය.

මෙම ලිපියෙන් ඔබට **Ultimate Multisite v2** සමඟ භාවිතා කළ හැකි කේත උදාහරණ තුනක් පෙන්වනු ලැබේ:

* [**Account මෙනු අයිතමේ ස්ථානය වෙනස් කිරීම**](#changing-the-position-of-the-account-menu-item)

* [**පරිශීලකයා යම් සැලැස්මක් යටතේ සිටීද සහ/හෝ ක්‍රියාකාරී දායකත්වයක් තිබේදැයි පරීක්ෂා කරන්නේ කෙසේද**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

* [**මාපෙන ડોમેන් වල Font-Icons සමඟ ඇති CORS ගැටළු විසඳීම**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## ගිණුම් මෙනු අයිතමයේ පිහිටීම වෙනස් කිරීම {#changing-the-position-of-the-account-menu-item}

ඔබේ සේවාදායකයාගේ Dashboard එකේ Account මෙනු අයිතමයේ පිහිටීම වෙනස් කිරීමට, පහත කේත කොටස ඔබේ ප්‍රධාන වෙබ් අඩවියේ ක්‍රියාකාරී තේමාවේ functions.php ගොනුවට එක් කරන්න. ඔබට මෙම කොටස ඔබ භාවිතා කරන mu-plugins හෝ custom plugins එකක් තුළ ද ඇතුළත් කළ හැකියි.

`add_filter('wu_my_account_menu_position', function() { return 10; // මේ වටිය (value) වෙනස් කරලා මෙනුව ඕන කරන තැනට තියන්න.

## පරිශීලකයා යම් සැලැස්මක් යටතේ සිටිනවාද සහ/හෝ ක්‍රියාකාරී දායකත්වයක් තිබේදැයි පරීක්ෂා කරන්නේ කෙසේද` {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

ජාල පරිපාලකයෙකු ලෙස, ඔබ අනුබද්ධකරුවන්ගේ (subscribers) සහ අවසාන පරිශීලකයන්ගේ තත්ත්වය සහ ඔවුන් යටතේ ඇති සැලැස්ම මත පදනම්ව මූලික ක්‍රියාවන් සිදු කිරීමට හෝ සේවාවක්/විශේෂාංගයක් තෝරාගත් කණ්ඩායමක් වෙත ලබා දීමට අභිරුචි (custom) functions නිර්මාණය කිරීමට අවශ්‍ය විය හැකිය.

මේ Ultimate Multisite වල තියෙන native functions මගින් ඔබට ඒ සඳහා උදව් කරන්න පුළුවන්.

පරිශීලකයාට දී ඇති සැලැස්මකට (plan) අයත්ද කියලා පරීක්ෂා කිරීමට, ඔබට පහත function එක භාවිතා කළ හැකිය:

`wu_has_plan($user_id, $plan_id)`

ස subcription එක ක්‍රියාත්මකද කියලා පරීක්ෂා කිරීමට, ඔබට පහත function එක භාවිතා කළ හැකිය:

`wu_is_active_subscriber($user_id)`

මෙන්න උදාහරණයක්: දැනට සිටින පරිශීලකයා යම් සැලැස්මක් (උදාහරණයක් ලෙස, _Plan ID 50_) යටතේ සිටීද සහ එම පරිශීලකයාගේ දායකත්වය ක්‍රියාත්මකද යන්න පරීක්ෂා කරන කේත කොටසක්.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // පරිශීලකයා සැලැස්මකට අයත් නම් සහ ඔහුගේ දායකත්වය ක්‍රියාත්මක නම්, මෙහි කරන්න ඕන දේ කරපුවා} else { // පරිශීලකයා සැලැස්මට අයත් නැතිනම් -- නැතහොත් ඔහුගේ දායකත්වය ක්‍රියාත්මක නොවේ නම්, වෙනත් දෙයක් කරන්න} // end if;

සටහන: _**wu_has_plan**_ ක්‍රියාත්මක වීමට "Plan ID" එකක් අවශ්‍ය වේ.

Plan ID එක ලබා ගැනීමට, ඔබට **Ultimate Multisite > Products** වෙත යා හැකිය. සෑම නිෂ්පාදනයකම ID එක වමේ ඇති මේසයේ දකුණු පසින් පෙන්වනු ලැබේ.

සමහර පරිශීලකයින්ට **Package** එකකට හෝ **Service** එකකට නොව, ඔවුන් යනු **Plan** එකක අතිරේක කොටස් (add-ons) පමණක් බැවින්, ඔවුන්ට දායක විය හැක්කේ **Plan** එකකට පමණි.

![Products list showing plan IDs](/img/admin/products-list.png)

## මූලික වෙබ් අඩවි වලදී Font-Icons සමඟ ඇතිවන CORS ගැටළු විසඳීම {#fixing-cors-issues-with-font-icons-in-mapped-domains}

## මූලික වෙබ් අඩවි වලදී Font-Icons සමඟ ඇතිවන CORS ගැටළු විසඳීම {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

ඔබේ ડોමේනයකට උප-සයිට් එකක් සම්බන්ධ කළ පසු, එම වෙබ් අඩවියට කස්ටම් ෆොන්ට් (custom fonts) පෙන්වීමට අපහසුතා ඇති විය හැකි බව ඔබට වැටහෙනවා. මෙය ඔබේ සර්வர் සැකසුම් වල ඇති ක්‍රොස්-ඕරිජන් බ්ලොක් එකක් නිසා සිදුවන දෙයකි.

අකුරු ගොනු (font files) සාමාන්‍යයෙන් CSS එකෙන් කෙලින්ම පටවනු ලබන නිසා, අපේ domain mapping plugin එකට URL වල මුල් වෙනුවට මූලික කරපු domain එක භාවිතා කරන්න URL නැවත ලිවීමට (rewrite කිරීමට) බැහැ. ඒ ප්‍රශ්නය විසඳීම සඳහා, ඔබට ඔබේ සර්வர் සැකසුම් ගොනු (server configuration files) වෙනස් කිරීමට සිදුවේ.

Apache සහ NGINX සඳහා ගැටලුව විසඳීම සඳහා පහත කේත කොටස් තිබේ. මෙම වෙනස්කම් සඳහා සේවාදායක වින්‍යාස ගොනු (.htaccess ගොනු සහ NGINX config ගොනු) පිළිබඳ උසස් දැනුමක් අවශ්‍ය වේ. ඔබට තනිවම එම වෙනස්කම් කිරීමට අපහසු නම්, සහාය අවශ්‍ය වන විට මෙම පිටුව ඔබේ හොස්ටින් සපයන්නාගේ සහාය නියෝජිතයන්ට යොමු කරන්න.

### Apache {#apache}

ඔබේ .htaccess ගොනුවේ පහත දේ එකතු කරන්න:

`<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”`

### NGINX {#nginx}

ඔබේ සර්වර් සැකසුම් ගොනුවේ (සර්වර් එක අනුව ස්ථානය වෙනස් වේ) පහත දේ එකතු කරන්න:

ස්ථානය: `location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”; }`
