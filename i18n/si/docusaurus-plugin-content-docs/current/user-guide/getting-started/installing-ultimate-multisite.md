---
title: Ultimate Multisite ස්ථාපනය කිරීම
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite ස්ථාපනය කිරීම

:::note
මෙම මාර්ගෝපදේශය ඔබ දැනටමත් WordPress Multisite ස්ථාපනය කර සකසා ඇති බව උපකල්පනය කරයි. එය ඉගෙන ගැනීමට, WP Beginner විසින් [මෙම මාර්ගෝපදේශය](https://www.wpbeginner.com/glossary/multisite/) බලන්න.
:::

## ප්ලගින (Plugin) ස්ථාපනය කිරීම

Ultimate Multisite නොමිලේ [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) වෙතින් ලබා ගත හැකියි.

ඔබේ **Network Admin Dashboard** එකට ගොස්, **Plugins → Add New Plugin** වෙත යන්න.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** (නිවැරදිව ගැලපෙන ප්‍රතිඵලයක් සඳහා උපුටා දැක්වීම සමඟ) සොයන්න, එය පළමු ප්‍රතිඵලයක් ලෙස දිස් වනු ඇත. **Install Now** ක්ලික් කරන්න.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

එය ස්ථාපනය වූ පසු, ඔබේ මුළු ජාලයටම ප්ලගින් ක්‍රියාත්මක කිරීමට **Network Activate** ක්ලික් කරන්න.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

ක්‍රියාත්මක කිරීමෙන් පසු, ඔබ ස්වයංක්‍රීයව Setup Wizard එකට යොමු වනු ඇත.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard (සැකසීමේ මඟ පෙන්වීම)

Setup Wizard එක හරහා Ultimate Multisite සකස් කිරීම සඳහා විනාඩි 10ක් පමණ ඔබට මඟ පෙන්වනු ඇත.

### Welcome (පිළිගැනීම)

ආරම්භ කිරීමට **Get Started** ක්ලික් කරන්න.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks (ස්ථාපනය කිරීමට පෙර පරීක්ෂා කිරීම්)

මෙම පියවර මඟින් Ultimate Multisite හි අවශ්‍යතා සපුරා ඇත්දැයි ඔබේ පද්ධති තොරතුරු සහ WordPress ස්ථාපනය පරීක්ෂා කරයි. සියල්ල හොඳින් පෙනේ නම්, **Go to the Next Step** ක්ලික් කරන්න.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate බොත්තම (v2.6.1+)
Ultimate Multisite ස්ථාපනය කර තිබුණත් එය **අවශ්‍ය පරිදි ජාලයට සක්‍රිය කර නොමැති** නම් — උදාහරණයක් ලෙස, ජාල ප්ලගින් මෙනුවෙන් **Network Activate** වෙනුවට **Activate** (single-site) ක්ලික් කළහොත් — Pre-install Checks පියවර මෙය හඳුනාගෙන **Network Activate** බොත්තමක් පෙන්වනු ඇත.

**Network Activate** ක්ලික් කිරීමෙන් ඔබේ මුළු multisite ජාලය පුරාම ප්ලගින් එක ස්වයංක්‍රීයව සක්‍රිය වේ. සක්‍රිය වූ පසු, මයික්‍රෝසොෆ්ට් (wizard) සාමාන්‍ය පරිදි ස්ථාපන පියවරට ඉදිරියට යනු ඇත. සක්‍රිය කිරීමේ තත්ත්වය නිවැරදි කිරීමට ඔබ මයික්‍රෝසොෆ්ට් එකෙන් පිටවීමට අවශ්‍ය නොවේ.
:::

### ස්ථාපනය (Installation)

ස්ථාපන වැඩසටහන (installer) අවශ්‍ය දත්ත සමුදා වගු (database tables) නිර්මාණය කර Ultimate Multisite ක්‍රියාත්මක වීමට අවශ්‍ය `sunrise.php` ගොනුව ස්ථාපනය කරයි. ඉදිරියට යාමට **Install** ක්ලික් කරන්න.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### ඔබේ සමාගම (Your Company)

ඔබේ සමාගම් තොරතුරු පුරවා ඔබේ පෙරනිමි මුදල් ඒකකය (default currency) සකසන්න. මෙම තොරතුරු ඔබගේ WaaS වේදිකාව පුරා භාවිතා කරනු ඇත. අවසන් වූ පසු **Continue** ක්ලික් කරන්න.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### පෙරනිමි අන්තර්ගතය (Default Content)

මෙම පියවර මගින් ඔබට කලින් නිර්වචනය කරන ලද template, නිෂ්පාදන සහ වෙනත් ආරම්භක අන්තර්ගතයන් ස්ථාපනය කළ හැකිය. Ultimate Multisite හි විශේෂාංග පිළිබඳව හුරුපුරුදු වීමට මෙය හොඳ ක්‍රමයකි. පෙරනිමි අන්තර්ගතය එක් කිරීමට **Install** ක්ලික් කරන්න, නැතිනම් මුල සිට ආරම්භ කිරීමට කැමති නම් මෙම පියවර මඟහරින්න.

![Default content installation step](/img/installation/wizard-default-content.png)

### නිර්දේශිත ප්ලගින් (Recommended Plugins)

අවශ්‍ය පරිදි නිර්දේශිත සහායක ප්ලගින් ස්ථාපනය කරන්න. ඒවා එක් කිරීමට **Install** ක්ලික් කරන්න, නැතිනම් ඉදිරියට යාමට මඟහරින්න.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### සූදානම්! (Ready!)

ඒක තමයි! ඔබේ Ultimate Multisite ස්ථාපනය අවසන් වී ඇත. දැන් ඔබට **Network Admin Dashboard** එකෙන් ඔබේ Website as a Service වේදිකාව ගොඩනැගීමට පටන් ගත හැකියි.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

දැන් විනෝද වෙන්න!
