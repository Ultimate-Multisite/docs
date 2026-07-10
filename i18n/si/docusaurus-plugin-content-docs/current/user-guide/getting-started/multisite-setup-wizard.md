---
title: බහු වෙබ් අඩවි සැකසුම් මඟ පෙන්වන්නා
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# බහු වෙබ් අඩවි සැකසුම් මඟ පෙන්වන්නා (Multisite Setup Wizard) {#multisite-setup-wizard}

Ultimate Multisite එකේ ඇතුළත් මඟ පෙන්වන්නෙකු (wizard) තිබෙනවා. මේක හරියට සාමාන්‍ය WordPress ස්ථාපනයක් සම්පූර්ණයෙන්ම WordPress Multisite ජාලයක් බවට ස්වයංක්‍රීයව පරිවර්තනය කරනවා. ඒ නිසා `wp-config.php` එක අතින් සංස්කරණය කරන්න හෝ දත්ත සමුදා විධාන (database commands) ක්‍රියාත්මක කරන්න අවශ්‍ය වෙන්නේ නැහැ.

:::tip
ඔබේ WordPress ස්ථාපනය දැනටමත් Multisite ජාලයක් ලෙස ක්‍රියාත්මක වන්නේ නම්, ඔබට මෙම පියවර සම්පූර්ණයෙන්ම මඟ හැරිය හැකියි. Multisite සක්‍රීය කර නොමැති විට පමණක් මෙම මඟ පෙන්වන්නා දිස්වේ.
:::

## මඟ පෙන්වන්නා කවදා දිස්වේ? {#when-does-the-wizard-appear}

ඔබ සාමාන්‍ය (Multisite නොවන) WordPress ස්ථාපනයක Ultimate Multisite සක්‍රීය කළ විට, එම 플ලගින් Multisite ක්‍රියාත්මක වී නොමැති බව හඳුනාගෙන, සාමාන්‍ය සැකසුම් මඟ පෙන්වන්නා වෙනුවට Multisite Setup Wizard වෙත ඔබව ස්වයංක්‍රීයව යොමු කරයි.

ඔබට එය **WP Admin > Ultimate Multisite > Multisite Setup** හරහා කෙලින්ම ප්‍රවේශ විය හැකියි.

## පෙර කොන්දේසි (Prerequisites) {#prerequisites}

මඟ පෙන්වන්නා ක්‍රියාත්මක කිරීමට පෙර, පහත දේවල් තහවුරු කර ගන්න:

- ඔබේ WordPress ස්ථාපනය සඳහා **administrator access** තිබිය යුතුය
- ඔබේ සර්වරයේ `wp-config.php` ගොනුව වෙබ් සේවාදායකය විසින් **ලිවීමට (writable)** අවසර තිබිය යුතුය
- ඔබගේ ගොනු සහ දත්ත සමුදා පිටපතක් (backup) **මෑතක** තිබිය යුතුය

:::warning
මෙම මඟ පෙන්වන්නා ඔබේ `wp-config.php` ගොනුව වෙනස් කරන අතර නව දත්ත සමුදා වගු (database tables) නිර්මාණය කරයි. ඉදිරියට යාමට පෙර සෑම විටම පිටපතක් (backup) ගන්න.
:::

## පියවර 1: සාදරයෙන් පිළිගනිමු (Welcome) {#step-1-welcome}

පළමු තිරය WordPress Multisite යනු කුමක්ද සහ මඟ පෙන්වන්නා කරන්නේ කුමක්ද යන්න පැහැදිලි කරයි:

- ඔබේ WordPress සැකසුම් වල Multisite විශේෂාංගය සක්‍රීය කිරීම
- අවශ්‍ය ජාල දත්ත සමුදා වගු (network database tables) නිර්මාණය කිරීම
- `wp-config.php` තුළ අවශ්‍ය multisite constants එකතු කිරීම
- ජාලය පුරා Ultimate Multisite ને network-activate කිරීම

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

ඉදිරියට යාමට **Continue** ක්ලික් කරන්න.

## පියවර 2: ජාල සැකසුම් (Network Configuration) {#step-2-network-configuration}

මෙම පියවර මගින් ඔබගේ ජාල සැකසුම් වින්‍යාස කිරීමට ඔබට ඉල්ලා සිටී.

### වෙබ් අඩවි ව්‍යුහය (Site Structure) {#site-structure}

ඔබේ ජාල වෙබ් අඩවි සංවිධානය කරන්නේ කෙසේදැයි තෝරන්න:

- **Sub-domains** (නිර්දේශිත) — සෑම වෙබ් අඩවියකටම තමන්ගේම subdomain එකක් ලැබේ, උදාහරණයක් ලෙස `site1.yourdomain.com`
- **Sub-directories** — වෙබ් අඩවි මාර්ග (paths) ලෙස නිර්මාණය වේ, උදාහරණයක් ලෙස `yourdomain.com/site1`

:::note
ඔබ sub-domains තෝරා ගන්නේ නම්, ඔබේ domain සඳහා **wildcard DNS** සහ **wildcard SSL certificate** වින්‍යාස කිරීමට ඔබට අවශ්‍ය වනු ඇත. කළමනාකරණය කරන ලද WordPress hosts බොහොමයක් මෙය ස්වයංක්‍රීයව සිදු කරයි. විස්තරාත්මක සැසඳීම සඳහා [Ultimate Multisite 101](./ultimate-multisite-101) බලන්න.
:::

### ජාලයේ නම (Network Title) {#network-title}

ඔබේ ජාලයට නමක් ඇතුළත් කරන්න. මෙය පෙරනිමියෙන් ඔබේ වත්මන් වෙබ් අඩවි මාතෘකාවට "Network" එකක් එකතු කර ඇත. ඔබට පසුකාලීනව ජාල සැකසුම් වලින් මෙය වෙනස් කළ හැකිය.

### ජාල පරිපාලක විද්‍යුත් තැපෑල (Network Admin Email) {#network-admin-email}

ජාල පරිපාලන දැනුම්දීම් සඳහා භාවිතා කරන විද්‍යුත් තැපැල් ලිපිනය. මෙය පෙරනිමියෙන් වත්මන් පරිශීලකයාගේ විද්‍යුත් තැපැල් ලිපිනයයි.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

පොදු පිරවුම් සම්පූර්ණ කිරීමෙන් පසු ඉදිරියට යාමට **Continue** ක්ලික් කරන්න.

## පියවර 3: ස්ථාපනය (Step 3: Installation) {#step-3-installation}

ආරම්භ කිරීමට **Install** බොත්තම ක්ලික් කරන්න. මෙම wizard මගින් ස්වයංක්‍රීයව අනුපිළිවෙලින් පියවර පහක් සිදු කරන අතර, සෑම පියවරකම එහි ප්‍රගතිය තත්‍ය කාලීනව පෙන්වයි:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| පියවර | විස්තරය |
|------|-------------|
| **Multisite සක්‍රීය කිරීම** | `wp-config.php` ගොනුවට `WP_ALLOW_MULTISITE` නියතය (constant) එකතු කරන්න |
| **Network නිර්මාණය කිරීම** | බුලට් ලකුණු සහිත දත්ත සමුදා වගු (`wp_site`, `wp_sitemeta`, `wp_blogs` වැනි) සාදා, ඔබේ ජාල සැකසුම් සමඟ ඒවා පුරවන්න |
| **සංකේතය යාවත්කාලීන කිරීම** | අවසාන multisite නියතයන් (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` වැනි) `wp-config.php` ගොනුවට එකතු කරන්න |
| **Cookies නිවැරදි කිරීම** | සක්‍රීය කිරීමෙන් පසු අනුයුක්තකරණ ගැටළු ඇතිවීම වැළැක්වීම සඳහා ජාල 메ටා දත්ත වල වෙබ් අඩවි URL නිවැරදි බව තහවුරු කරන්න |
| **Network Activate Plugin** | මුළු ජාලය පුරා ක්‍රියාත්මක වීමට Ultimate Multisite නියතව (constant) සක්‍රීය කරන්න |

සෑම පියවරකම පහත තත්ත්වයන්ගෙන් එකක් ඔබට දැකගත හැකිය:

- **Pending** — සැකසීමට බලා සිටී
- **Installing...** — දැනට ක්‍රියාත්මක වෙමින් පවතී
- **Success!** — සාර්ථකව අවසන් විය
- **Error message** — දෝෂයක් සිදුවී ඇත (පණිවිඩයෙන් ගැටලුව විස්තර කෙරේ)

සියලු පියවර සාර්ථකව අවසන් වූ පසු, සෑම අයිතමයකටම කොළ පැහැති "Success!" තත්ත්වයක් ඔබට දැකගත හැකිය:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

ඉන්පසු මෘදුකාංගය ස්වයංක්‍රීයව අවසන් කිරීමේ තිරයට යනු ඇත.

## පියවර 4: සම්පූර්ණ කිරීම {#step-4-complete}

ස්ථාපනය අවසන් වූ පසු, WordPress Multisite සක්‍රීය කර ඇති බව තහවුරු කරන සාර්ථක පණිවිඩයක් ඔබට දැකගත හැකිය.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

ඔබට දැන් ඔබේ WaaS වේදිකාව (සමාගම් විස්තර, පෙරනිමිත අන්තර්ගතය, ගෙවීම් දොරටු වැනි) සැකසීමට Ultimate Multisite setup wizard සමඟ ඉදිරියට යා හැකිය.

:::note
මල්ටිසයිට් ස්ථාපනය අවසන් වූ පසු, ඔබේ බ්‍රවුසරය නව ජාල පරිපාලකයා හරහා යොමු වනු ඇත. මල්ටිසයිට් පරිසරය සඳහා අනුභවීකරණ කුකී (authentication cookies) යාවත්කාලීන කරන බැවින් ඔබට නැවත පිවිසීමට අවශ්‍ය විය හැකිය.
:::

## අතින් සැකසීමේ විකල්ප විසඳුම (Manual Setup Fallback) {#manual-setup-fallback}

වීසාර්ඩ් එකට ඔබේ `wp-config.php` ගොනුවට ලිවීමට නොහැකි නම් (ගොනු අවසරයන් හෝ සේවාදායක සීමාවන් නිසා), එය ඔබට අතින් එක් කළ යුතු නිවැරදි කේතය පෙන්වනු ඇත:

1. `/* That's all, stop editing! */` යන පේළියට ඉහළින් එකතු කළ යුතු **wp-config.php constants**
2. ඔබ තෝරාගත් වෙබ් අඩවි ව්‍යුහයට (subdomain හෝ subdirectory) ගැලපෙන **.htaccess rewrite rules**

අතින් වෙනස්කම් කිරීමෙන් පසු, පිටුව නැවත රフレෂ් (refresh) කරන්න, මල්ටිසයිට් දැන් ක්‍රියාත්මක බව වීසාර්ඩ් එක හඳුනා ගනු ඇත.

## ගැටළු නිරාකරණය (Troubleshooting) {#troubleshooting}

### වීසාර්ඩ් එක පවසන්නේ wp-config.php ලිවීමට නොහැකි බවයි {#the-wizard-says-wp-configphp-is-not-writable}

ඔබේ වෙබ් සේවාදායක ක්‍රියාවලියට `wp-config.php` ගොනුවට ලිවීමේ අවසරය තිබිය යුතුය. ඔබට පහත දේ කළ හැකිය:

- ගොනු අවසරයන් තාවකාලිකව `644` හෝ `666` ලෙස වෙනස් කරන්න
- වීසාර්ඩ් එක විසින් සපයන අතින් සැකසීමේ විකල්ප විසඳුම් (manual setup fallback instructions) භාවිතා කරන්න
- මෙම සැකසුම කරන්නේ කෙසේදැයි ඔබට නොදැන සිටින්නේ නම්, ඔබේ හොස්ටින් සපයන්නාගෙන් උපකාර ඉල්ලා ගන්න.

### ස්ථාපනය කිරීමෙන් පසු වෙබ් අඩවි වලට ප්‍රවේශ විය නොහැකි වීම (subdomains) {#sites-are-not-accessible-after-setup-subdomains}

ඔබ subdomain ව්‍යුහය තෝරා ගත්තේ නම්, ඔබේ ડોමේනය සඳහා **wildcard DNS** සකසනවා ඇත. පහත DNS වාර්තාව එකතු කරන්න:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

මෙය සකස් කරන්නේ කෙසේදැයි ඔබට නොදැන සිටින්නේ නම්, ඔබේ හොස්ටින් සපයන්නා සමඟ පරීක්ෂා කරන්න.

### ස්ථාපනය කිරීමෙන් පසු අනුභවීකරණ ගැටළු (Authentication issues after setup) {#authentication-issues-after-setup}

ඔබ ලොග් ඉවත් වී ඇත්නම් හෝ මල්ටිසයිට් සැකසුම් කිරීමෙන් පසු කුකී දෝෂ (cookie errors) අත්විඳින්නේ නම්:

1. එම වෙබ් අඩවිය සඳහා ඔබේ බ්‍රවුසරයේ කුකී (cookies) මකා දමන්න
2. `yourdomain.com/wp-login.php` වෙත නැවත ලොග් වන්න
3. ගැටලුව දිගටම පවතිනවා නම්, ඔබේ `wp-config.php` හි `COOKIE_DOMAIN` අගය `false` ලෙස සකසා නොමැති බව තහවුරු කරන්න — මෙය subdomain මල්ටිසයිට් ස්ථාපනය කිරීම් වලදී දැනට දන්නා ගැටලුවකි.

### ස්ථාපන අතරතුර පියවරක් අසාර්ථක වීම {#a-step-failed-during-installation}

සෑම ස්ථාපන පියවරක්ම දෝෂයක් පෙන්වන්නේ නම්:

1. පෙන්වන දෝෂ පණිවිඩය සටහන් කරන්න.
2. සැකසුම් පියවරට ආපසු ගොස් නැවත උත්සාහ කරන්න.
3. දෝෂය දිගටම පවතින්නේ නම්, වැඩි විස්තර සඳහා ඔබේ සර්වර් එකේ PHP error log එක පරීක්ෂා කරන්න.
4. දැනටමත් සම්පූර්ණ කර ඇති පියවර මඟින් පසුකාලීන ක්‍රියාත්මක කිරීම් වලදී මඟ හැරේ (installer එක idempotant වේ).
