---
title: Qoraallo koodka
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets oo v2 {#code-snippets-for-v2}

Guud, code snippets-ka **WordPress** waxaa loo isticmaalaa in lagu sameeyo waxyaabo gaar ah oo laga yaabo inay u baahan yihiin plugin yar oo gaar ah. Code snippets-kan waxaa lagu dhejin karaa mid ka mid ah faylasha asalka (core) ee WordPress ama theme-kaaga (guud ahaan faylka functions.php ee theme-kaaga), ama waxaad isticmaali kartaa inay noqdaan MU plugin.

Maqaalkan, waxaan ku bandhigi doonaa saddex code snippets oo aad u isticmaali karto **Ultimate Multisite v2**:

  * [**Beddelidda meesha qaybta Account menu-ga**](#changing-the-position-of-the-account-menu-item)

  * [**Sida loo hubiyo in isticmaaluhu uu ku jiro qorshe la siiyay iyo/ama uu leeyahay subscription soconaya**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Xallinta dhibaatooyinka CORS ee Font-Icons-ka meelaha la qorsheeyay (mapped domains)**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Beddelidda meesha qaybta Account menu-ga {#changing-the-position-of-the-account-menu-item}

Si aad u beddesho meesha qaybta Account menu-ga ee Dashboard-ka macaamiishaada, kaliya ku dar code snippet-kan faylka functions.php ee theme-kaaga asalka ah. Waxaad sidoo kale dari kartaa in aad code-kaas ku dhejiso mid ka mid ah MU plugin-yadaada ama custom plugins-kaaga.

add_filter('wu_my_account_menu_position', function() { return 10; // Beddel qeexidda (value) kan si aad u dhigto menu-ga meesha aad rabto.

باشگاهە بۆ دۆزینەوە ئەوەی ئەبۆنێشنەکە چالاکە، دەتوانیت لەو فەرموونییە بەکاری بهێنیت:

`wu_is_active_subscriber($user_id)`

لخۆشە ئەم نموونەیە ببینیت کە دەدات بزانێت ئایا بەکارهێنەرەکەی ئێستا لە ژێر پلانی دیاریکراو (Plan ID 50) و ئەبۆنێشنەکەی چالاکە.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // بەکارهێنەر یەکەمە لە پلانەکە و ئەبۆنێشنەکەی چالاکە، کارێکی دیاری بکە } else { // بەکارهێنەر یەکەمە لە پلانەکە نییە -- یان -- ئەبۆنێشنەکەی چالاک نییە، کارێکی دیکە بکە } // کۆتایی`

تێبینی: `**wu_has_plan**` پێویستی بە "Plan ID" هەیە بۆ ئەوەی کار بکات.

ئەگەر دەتوانیت ID ی پلانێک ببینیت، دەتوانیت بگەیەنە **Ultimate Multisite > Products**. ID ی هەر بەرهەمێک لە ڕاستیدا لە لای ڕاستی خشتەکەدا دەبینرێت.

تێبینی: بەکارهێنەران تەنها دەتوانن بۆ **Plan** ئەبۆنێشن بکەن، نەک بۆ Package یان Service، چونکە ئەوان تەنها زیادکردنی پلاندان (add-ons) بۆ Planن.

![Products list showing plan IDs](/img/admin/products-list.png)

## چارەسەرکردنی کێشەکانی CORS لەگەڵ Font-Icons لە دۆمەینە مابووبراوەکاندا {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## چارەسەرکردنی کێشەکانی CORS لەگەڵ Font-Icons لە دۆمەینە مابووبراوەکاندا {#fixing-cors-issues-with-font-icons-in-mapped-domains}

پاش ئەوەی یەکێک لە دۆمەینەکان بۆ زیرەکی ناوخۆ (sub-site) مابووبراوە، دەتوانیت بزانیت کە ئەو سایتە کێشەیەک لە گۆڕینی فۆنتە تایبەتەکانی سەرەوە دەکات. ئەمە بەهۆی ڕێگریکاری کرۆس-ئۆریجین (cross-origin block) لە ڕێکخستنی خەریکی ئێوە دەبێت.

لەبەر ئەوەی فایلەکانی فۆنت بەهێزدا لە هەموو حاڵەتێک ڕاستەوخۆ لە CSS دێت، پلاتفۆرمی مابووبراوەکانی دۆمەینەکە ناتوانێت URLکان بگۆڕێت بۆ ئەوەی دۆمەینی مابووبراوەکانی بەکاربهێنێت لەبری یەکەمەکە، بۆیە بۆ چارەسەرکردنی ئەم کێشەیە دەبێت ڕێکخستنەکانی خەریکی (server configuration files) خۆت بگۆڕیت.

Waxaan ku siinayaa qoraalka loo turjumay luuqadda Soomaaliga, adigoo ilaalinaya qaabka iyo macnaha farsamada:

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Faylkaaga .htaccess-ka, ku dar waxa hoose:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

Faylkaaga server config-ka (meesha uu ka yaallo waxay ku kala duwan tahay server kasta), ku dar:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
