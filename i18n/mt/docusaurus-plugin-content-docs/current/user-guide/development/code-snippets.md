---
title: Kodi Snippetti
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Snippets Code għal v2 {#code-snippets-for-v2}

Basse, snippets code għall **WordPress** jintużaw biex isiru xi azzjonijiet li tistaqsu bħal li jittħallmu b'plugin xogħol dedikabbli. Il-snippets code huma postati f'xi file ta WordPress core jew tema (b'mod ġeneral, il-file functions.php tal-tema tiegħek) jew jistaqxu jintużaw bħala MU plugin.

F'dan l-artikolu nistawliw biex nftaħlek tliet snippets code li tistaqxu jintużaw ma' **Ultimate Multisite v2**:

  * [**Bmodifi l-postazzjoni tal-item menu Account**](#changing-the-position-of-the-account-menu-item)

  * [**Come tikkontrolli jekk l-user qed taħt plan معين u/jew għandu subscription aktiva**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Tajjeb il-CORS issues ma' Font-Icons f'domeni mappati**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Bmodifi l-postazzjoni tal-item menu Account {#changing-the-position-of-the-account-menu-item}

Biex tbażi l-postazzjoni tal-item menu Account fuq Dashboard ta klijenitk, isir add il-snippet code dan f'functions.php tal-tema aktiva tal-site tiegħek. Tistaqsi jippożi l-snippet f'xi mu-plugins jew custom plugins tiegħek.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak dan is-valur biex tiġi postat il-menu fl-postazzjoni desiderata.

## Come tikkontrolli jekk l-user qed taħt plan معين u/jew għandu subscription aktiva {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Bħala admin tal-network, tistaqsi għandek biex tgħmli funzioni kustomi li jikunu japplikaw azzjonijiet bħal biex jikkunu disponibbli xi servizzi jew feature għal gruppa selejta ta is-subscriber jew end-users, b'bid maħsul tal-subscription u l-plan li qed taħt.

Dan il-functions nativi ta Ultimate Multisite jgħinu lek f'dan.

Biex tikkontrolli jekk l-user member ta plan معين, tistaqsi tistaqsi l-funzjoni:

wu_has_plan($user_id, $plan_id)

כדי לבדוק אם המנוי פעיל, תוכל להשתמש בפונקציה:

`wu_is_active_subscriber($user_id)`

להלן קטע דוגמה שבודק אם המשתמש הנוכחי נמצא תחת תוכנית ספציפית (_Plan ID 50_) ואם המנוי של המשתמש פעיל.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // המשתמש חבר בתוכנית והמנוי שלו פעיל, עשה משהו } else { // המשתמש אינו חבר בתוכנית -- או -- המנוי שלו אינו פעיל, עשה משהו אחר } // סוף if;`

שימו לב שפונקציית `wu_has_plan` דורשת "Plan ID" כדי שתעבוד.

כדי לקבל את ה-ID של תוכנית, תוכל להיכנס ל**Ultimate Multisite > Products**. ה-ID של כל מוצר יופיע מימין לטבלה.

שימו לב שמשתמשים יכולים להירשם רק ל**תוכנית (Plan)**, ולא לחבילה או לשירות, מכיוון שהם רק תוספים ל**תוכנית**.

![Products list showing plan IDs](/img/admin/products-list.png)

## תיקון בעיות CORS עם Font-Icons בדומיינים ממפים {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## תיקון בעיות CORS עם Font-Icons בדומיינים ממפים {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

לאחר שאתה ממפה דומיין לאתר משנה, ייתכן שתגלה שהאתר מתקשה לטעון גופנים מותאמים אישית (custom fonts). זה נגרם על ידי חסימת קרוס-אורिजון בהגדרות השרת שלך.

מכיוון שקבצי גופן נטענים כמעט תמיד ישירות מתוך CSS, התוסף של מיפוי הדומיינים שלנו אינו יכול לערוך מחדש את ה-URLs כדי להשתמש בדומיין הממופה במקום באותיגורי המקוריים. לכן, כדי לתקן את הבעיה, תצטרך לשנות את קבצי הגדרות השרת שלך.

L-kodijiet dwar il-problema għall-Apache u NGINX. Il-modifikazzjonijiet jmexxu għarfien avanzati fil-file tal-konfigurazzjoni tal-server (.htaccess u file tal-konfigurazzjoni ta' NGINX). Jekk ma tiġiex komforzat biex tagħmel dan il-modifikazzjonijiet dwar l-server, trassilja dan it-tessard għall-agentijiet ta' support tal-hosting meta għandek bżonn assistenza.

### Apache {#apache}

F'il-file .htaccess tiegħek, aċċetta:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

F'il-file tal-konfigurazzjoni tal-server tiegħek (il-lokazzjoni hija differenti min server għal server), aċċetta:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
