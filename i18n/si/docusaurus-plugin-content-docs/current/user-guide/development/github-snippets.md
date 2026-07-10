---
title: GitHub කොටස්
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# අපගේ GitHub repository එකේ Ultimate Multisite snippets භාවිතා කරන්නේ කෙසේද {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Ultimate Multisite භාවිතා කරන අය නිතරම ඉල්ලන code snippets (කුඩා ක්‍රියාකාරකම් වැනි Google Analytics script එක sign-up පිටු වලට එකතු කිරීම හෝ admin dashboard එකෙන් meta box එකක් සැඟවීම වැනි) GitHub repository එකේ තිබෙනවා.

මේ ලිපියෙන් අපි මේ code တွေ භාවිතා කරන ආකාරය, නැතිනම් නිශ්චිතවම ඒවා කොතැනද තැබිය යුතුද කියලා ඔබට පෙන්වන්නම්.

snippets ඔබට පහත link එකේ සොයාගත හැකියි.

https://github.com/next-press/wp-ultimo-snippets/

code එක එක් කිරීමට ඔබට ක්‍රම දෙකක් තිබෙනවා:

  1. ඔබේ theme එකේ functions.php file එකේ.

  2. Must-Use Plugins (mu-plugins)

# ඔබේ theme එකේ functions.php file එකේ snippet එක එකතු කරන්නේ කෙසේද {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. ඔබේ WordPress Network admin dashboard එකට ලොග් වී Themes > Theme Editor වෙත යන්න (පහත screenshot බලන්න).

  2. "Edit Themes" පිටුවේ, ඔබගේ active theme එක තෝරාගෙන තිබෙන බව තහවුරු කරන්න. එය තිරයේ දකුණු පැත්තේ ඉහළ ඇති dropdown field එකේ (screenshot එකේ #3) සොයාගත හැකියි.

  3. "Theme Files" කොටස යට ඇති functions.php file එක ක්ලික් කර file එක load කරන්න. පහළට સ્ક્રોલ කර GitHub repository එකෙන් ඔබට ලැබුණු Ultimate Multisite snippet එක එහි අලවන්න.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) නිර්මාණය කරන්නේ කෙසේද {#how-to-create-must-use-plugins-mu-plugins}

WordPress වල "Must-Use Plugins" හෝ කෙටියෙන් "mu-plugins" ලෙස හඳුන්වන custom functionality එකක් load කිරීමට ඉඩ සලසන විශේෂාංගයක් තිබෙනවා.

මේ විශේෂිත mu-plugins අනෙක් සියලුම සාමාන්‍ය plugins වලට වඩා කලින් load වෙන අතර ඒවා අක්‍රිය කළ නොහැක. multisite network එකකදී, මේ mu-plugins වල code එක ඔබේ ස්ථාපනය කර ඇති සියලුම sites වල load වේ.

1. FTP හෝ SSH භාවිතයෙන් ඔබේ WordPress installation එකේ filesystem එකට ප්‍රවේශ වන්න.

WordPress ස්ථාපනයෙහි wp-content ಡೈರೆಕ್ಟರಿ (directory) ಒಳಗೆ, 'mu-plugins' ಎಂಬ ಹೊಸ ಡೈರೆಕ್ಟರಿ (directory) ಅನ್ನು ರಚಿಸಿ.

<!-- ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಲಭ್ಯವಿಲ್ಲ: ಫೈಲ್ ಮ್ಯಾನೇಜರ್‌ನಲ್ಲಿ wp-content ಡೈರೆಕ್ಟರಿಯು mu-plugins ಫೋಲ್ಡರ್‌ನೊಂದಿಗೆ ತೋರಿಸುತ್ತದೆ -->

3. ನಿಮ್ಮ ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ Notepad ಅಥವಾ ಯಾವುದೇ ಕೋಡ್ ಎಡಿಟರ್ ಬಳಸಿ 'wu-snippet.php' ಎಂಬ ಹೊಸ PHP ಫೈಲ್ ಅನ್ನು ರಚಿಸಿ.

4. ನೀವು GitHub ರೆಪೊಸಿಟರಿ (repository) ಯಿಂದ ಪಡೆದ Ultimate Multisite ಕೋಡ್ ಸ್ನಿಪ್ಪೆಟ್ ಅನ್ನು ಆ ಫೈಲ್‌ನಲ್ಲಿ ಅಳವಡಿಸಿ ಮತ್ತು ಉಳಿಸಿ. ನಿಮ್ಮ mu plugin ಗುರುತಿಸಲು ಈ ಕೋಡ್ ಸ್ನಿಪ್ಪೆಟ್‌ಗೆ ಮೇಲಕ್ಕೆ ಈ ಕೆಳಗಿನ ಕೋಡ್ ಅನ್ನು ಸೇರಿಸಬಹುದು.
