---
title: GitHub አነስተኛ ክፍሎች
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# በGitHub repository ላይ Ultimate Multisite snippetsን ስለመጠቀም

በGitHub repository ውስጥ፣ Ultimate Multisite ተጠቃሚዎች በሰነድ ማስመጫ ገጾች ላይ የGoogle Analytics ስክሪፕት መጨመር ወይም ከአድሚን ዳሽቦርድ ውስጥ አንድ meta box መደበቅ የመሳሰሉ ትናንሽ ተግባራትን ለመጨመር በየጊዜው የሚጠይቋቸው የኮድ ቁርጥራጮች (snippets) አሉ።

ይህ ጽሑፍ እነዚህን ኮዶች እንዴት መጠቀም እንደሚችሉ ወይም በተለይም የት ማስቀመጥ እንዳለባቸው ያሳየዎታል።

ቁርጥራጮቹን በየሚከተለው ሊንክ ላይ ማግኘት ይችላሉ።

https://github.com/next-press/wp-ultimo-snippets/

ኮዱን ለመጨመር ሁለት መንገዶች አሉ።

  1. በየራስዎ theme's functions.php ፋይል ላይ።

  2. Must-Use Plugins (mu-plugins)

# በtheme's functions.php ፋይል ላይ snippetን ስለማከል

  1. ወደ WordPress Network admin dashboard ይግቡና ወደ Themes > Theme Editor ይሂዱ (ስዕል ከታች ይመልከቱ)።

  2. በ"Edit Themes" ገጽ ላይ፣ በስክሪኑ በላይኛው ቀኝ ጥግ ላይ ባለው የdropdown field ውስጥ የእርስዎ ንቁ theme (active theme) መመረጡን ያረጋግጡ (#3 በስዕሉ ላይ)።

  3. ፋይሉን ለመጫን በ"Theme Files" ክፍል ስር ባለው functions.php ፋይል ላይ ይጫኑ። ከታች ወርደው ከGitHub repository ያገኙት Ultimate Multisite snippetን ይለጥፉ።

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) ስለመፍጠር

WordPress "Must-Use Plugins" ወይም በአጭሩ "mu-plugins" ተብሎ የሚጠራ፣ ብጁ ተግባር (custom functionality) እንዲጫኑ የሚያስችል ባህሪ አለው።

እነዚህ ልዩ mu-plugins ከሁሉም መደበኛ ፕለግኢኖች በፊት ይጫናሉ፣ እና ሊሰናከሉ (deactivate) አይችሉም። በmultisite network ውስጥ፣ በእነዚህ mu-plugins ውስጥ ያለው ኮድ በሁሉም በinstalationዎ ላይ ባሉ ድረ-ገጾች ይጫናል።

1\. ወደ WordPress installationዎ የፋይል ስርዓት (filesystem) ለመድረስ FTP ወይም SSH ይጠቀሙ።

2\. በWordPress installationዎ ውስጥ ባለው wp-content ዳይሬክቶሪ ውስጥ፣ ስም የሰጠው አዲስ ዳይሬክቶሪ ይፍጠሩ፦ mu-plugins።

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. በኮምፒውተርዎ ላይ በNotepad ወይም በማንኛውም የኮድ አርታኢ (code editor) ስም wu-snippet.php አዲስ PHP ፋይል ይፍጠሩ።

4\. ከGitHub repository ያገኙት Ultimate Multisite የኮድ ቁርጥራጮች (code snippet) ወደ ፋይሉ ውስጥ ይለጥፉና ያስቀምጡት። የmu pluginዎን ስም ለመሰጠት ይህንን ኮድ ከኮድ ቁርጥራጮቹ በላይ መጨመር ይችላሉ።
