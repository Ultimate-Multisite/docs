---
title: GitHub ಸ್ನಿಪೆಟ್‌ಗಳು
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# ನಮ್ಮ GitHub repository ನಲ್ಲಿರುವ Ultimate Multisite snippets ಅನ್ನು ಬಳಸುವುದು ಹೇಗೆ

Ultimate Multisite ಬಳಕೆದಾರರು ಆಗಾಗ್ಗೆ ಕೇಳುವ ಸಣ್ಣ ಕಾರ್ಯಗಳನ್ನು ಸೇರಿಸಲು code snippets GitHub repository ನಲ್ಲಿ ಲಭ್ಯವಿದೆ. ಉದಾಹರಣೆಗೆ, sign-up ಪುಟಗಳಲ್ಲಿ Google Analytics script ಸೇರಿಸುವುದು ಅಥವಾ admin dashboard ನಲ್ಲಿ meta box ಮರೆಮಾಡುವುದು ಮುಂತಾದವು.

ಈ ಲೇಖನವು ಈ codes ಅನ್ನು ಹೇಗೆ ಬಳಸುವುದು ಮತ್ತು ನಿರ್ದಿಷ್ಟವಾಗಿ ಎಲ್ಲಿ ಇಡುವುದು ಎಂಬುದನ್ನು ತೋರಿಸುತ್ತದೆ.

ಕೆಳಗಿನ ಲಿಂಕ್‌ನಲ್ಲಿ snippets ಕಾಣಬಹುದು.

https://github.com/next-press/wp-ultimo-snippets/

code ಸೇರಿಸಲು 2 ವಿಧಾನಗಳಿವೆ

  1. ನಿಮ್ಮ theme ನ functions.php ಫೈಲ್‌ನಲ್ಲಿ.

  2. Must-Use Plugins (mu-plugins)

# ನಿಮ್ಮ theme ನ functions.php ಫೈಲ್‌ನಲ್ಲಿ snippet ಸೇರಿಸುವುದು ಹೇಗೆ

  1. ನಿಮ್ಮ WordPress Network admin dashboard ಗೆ ಲಾಗಿನ್ ಆಗಿ Themes > Theme Editor ಗೆ ಹೋಗಿ (ಕೆಳಗಿನ screenshot ನೋಡಿ).

  2. "Edit Themes" ಪುಟದಲ್ಲಿ, ನಿಮ್ಮ ಸ್ಕ್ರೀನ್‌ನ ಮೇಲಿನ ಬಲಭಾಗದಲ್ಲಿರುವ dropdown field ನಲ್ಲಿ ನಿಮ್ಮ ಸಕ್ರಿಯ theme ಆಯ್ಕೆಯಾಗಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ (ಕೆಳಗಿನ screenshot ನಲ್ಲಿ #3).

  3. ಫೈಲ್ ಲೋಡ್ ಮಾಡಲು "Theme Files" ವಿಭಾಗದ ಅಡಿಯಲ್ಲಿ functions.php ಫೈಲ್ ಕ್ಲಿಕ್ ಮಾಡಿ. ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ ಮತ್ತು GitHub repository ಯಿಂದ ಪಡೆದ Ultimate Multisite snippet ಅನ್ನು ಅಂಟಿಸಿ.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) ರಚಿಸುವುದು ಹೇಗೆ

WordPress ನಲ್ಲಿ "Must-Use Plugins" ಅಥವಾ ಸಂಕ್ಷಿಪ್ತವಾಗಿ "mu-plugins" ಎಂದು ಕರೆಯಲಾಗುವ custom functionality ಲೋಡ್ ಮಾಡುವ ವೈಶಿಷ್ಟ್ಯವಿದೆ.

ಈ ವಿಶೇಷ mu-plugins ಎಲ್ಲಾ ಇತರ ಸಾಮಾನ್ಯ plugins ಗಿಂತ ಮೊದಲು ಲೋಡ್ ಆಗುತ್ತವೆ, ಮತ್ತು ಅವುಗಳನ್ನು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ. multisite network ನಲ್ಲಿ, ಈ mu-plugins ನಲ್ಲಿರುವ code ನಿಮ್ಮ installation ನಲ್ಲಿರುವ ಎಲ್ಲಾ ಸೈಟ್‌ಗಳಲ್ಲಿ ಲೋಡ್ ಆಗುತ್ತದೆ.

1\. ನಿಮ್ಮ WordPress install ನ filesystem ಪ್ರವೇಶಿಸಲು FTP ಅಥವಾ SSH ಬಳಸಿ.

2\. ನಿಮ್ಮ WordPress install ನ wp-content directory ಒಳಗೆ, mu-plugins ಎಂಬ ಹೊಸ directory ರಚಿಸಿ.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Notepad ಅಥವಾ ಯಾವುದೇ code editor ಬಳಸಿ ನಿಮ್ಮ ಕಂಪ್ಯೂಟರ್‌ನಲ್ಲಿ wu-snippet.php ಎಂಬ ಹೊಸ PHP ಫೈಲ್ ರಚಿಸಿ.

4\. GitHub repository ಯಿಂದ ಪಡೆದ Ultimate Multisite code snippet ಅನ್ನು ಫೈಲ್‌ನಲ್ಲಿ ಇಟ್ಟು save ಮಾಡಿ. ನಿಮ್ಮ mu plugin ಗೆ ಲೇಬಲ್ ಹಾಕಲು code snippet ನ ಮೇಲೆ ಈ code ಸೇರಿಸಬಹುದು.
