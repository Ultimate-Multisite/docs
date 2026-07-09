---
title: ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಅನ್ನು ಹೇಗೆ ಸಂರಚಿಸುವುದು
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಅನ್ನು ಹೇಗೆ ಸಂರಚಿಸುವುದು (v2)

_**ಪ್ರಮುಖ ಸೂಚನೆ: ಈ ಲೇಖನವು Ultimate Multisite ಆವೃತ್ತಿ 2.x ಅನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತದೆ.**_

ಪ್ರೀಮಿಯಂ ಜಾಲದ ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿ ವೈಶಿಷ್ಟ್ಯಗಳಲ್ಲಿ ಒಂದು ಎಂದರೆ, ನಮ್ಮ ಗ್ರಾಹಕರು ತಮ್ಮ ತಾಣಗಳಿಗೆ ಮೇಲ್ಮಟ್ಟದ ಡೊಮೇನ್ ಅನ್ನು ಜೋಡಿಸಿಕೊಳ್ಳುವ ಅವಕಾಶ ನೀಡುವುದು. ಕೊನೆಯಲ್ಲಿ, ಯಾವುದು ಹೆಚ್ಚು ವೃತ್ತಿಪರವಾಗಿ ಕಾಣುತ್ತದೆ: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ಅಥವಾ [_**joesbikeshop.com**_](http://joesbikeshop.com)? ಅದಕ್ಕಾಗಿಯೇ Ultimate Multisite ಮೂರನೇ ಪಕ್ಷದ plugin‌ಗಳನ್ನು ಬಳಸುವ ಅಗತ್ಯವಿಲ್ಲದೆ, ಆ ವೈಶಿಷ್ಟ್ಯವನ್ನು ಒಳಗೇ ಒದಗಿಸುತ್ತದೆ.

## ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಎಂದರೇನು?

ಹೆಸರೇ ಸೂಚಿಸುವಂತೆ, ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಎಂದರೆ ಕಸ್ಟಮ್ ಡೊಮೇನ್‌ಗಾಗಿ ಬಂದ ವಿನಂತಿಯನ್ನು ಸ್ವೀಕರಿಸಿ, ಆ ನಿರ್ದಿಷ್ಟ ಡೊಮೇನ್ ಜೋಡಿಸಲಾದ ಜಾಲದಲ್ಲಿನ ಸಂಬಂಧಿತ ತಾಣಕ್ಕೆ ಆ ವಿನಂತಿಯನ್ನು ಮ್ಯಾಪ್ ಮಾಡುವ Ultimate Multisite ನೀಡುವ ಸಾಮರ್ಥ್ಯ.

### ನಿಮ್ಮ Ultimate Multisite ಜಾಲದಲ್ಲಿ ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಅನ್ನು ಹೇಗೆ ಸೆಟಪ್ ಮಾಡುವುದು

ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಕೆಲಸ ಮಾಡಲು ನಿಮ್ಮಿಂದ ಕೆಲವು ಸೆಟಪ್ ಅಗತ್ಯವಿದೆ. ಧನ್ಯವಾದಗಳು, Ultimate Multisite ಕಷ್ಟದ ಕೆಲಸವನ್ನು ನಿಮ್ಮಗಾಗಿ ಸ್ವಯಂಚಾಲಿತಗೊಳಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ನೀವು ಅವಶ್ಯಕತೆಗಳನ್ನು ಸುಲಭವಾಗಿ ಪೂರೈಸಬಹುದು.

Ultimate Multisite ಸ್ಥಾಪನೆಯ ಸಮಯದಲ್ಲಿ, wizard **sunrise.php** ಅನ್ನು ನಿಗದಿತ ಫೋಲ್ಡರ್‌ಗೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಕಲಿಸಿ ಸ್ಥಾಪಿಸುತ್ತದೆ. **ಈ ಹಂತ ಪೂರ್ಣಗೊಳ್ಳುವವರೆಗೆ wizard ನಿಮಗೆ ಮುಂದುವರೆಯಲು ಅನುಮತಿಸುವುದಿಲ್ಲ**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

ಇದರರ್ಥ Ultimate Multisite ಸ್ಥಾಪನಾ wizard ನಿಮ್ಮ ಜಾಲವನ್ನು ಸೆಟಪ್ ಮಾಡುವುದು ಪೂರ್ಣಗೊಳಿಸಿದ ತಕ್ಷಣ, ನೀವು ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಅನ್ನು ಮ್ಯಾಪ್ ಮಾಡಲು ಆರಂಭಿಸಬಹುದು.

Ultimate Multisiteನಲ್ಲಿ ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಕಡ್ಡಾಯವಲ್ಲ ಎಂಬುದನ್ನು ಗಮನಿಸಿ. WordPress Multisiteನ ಮೂಲ ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಕಾರ್ಯವನ್ನು ಅಥವಾ ಬೇರೆ ಯಾವುದೇ ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಪರಿಹಾರವನ್ನು ಬಳಸುವ ಆಯ್ಕೆ ನಿಮಗಿದೆ.

ಇತರೆ ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಪರಿಹಾರಗಳಿಗೆ ಅವಕಾಶ ನೀಡಲು Ultimate Multisite ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಅನ್ನು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಬೇಕಾದರೆ, ನೀವು ಈ ವೈಶಿಷ್ಟ್ಯವನ್ನು **Ultimate Multisite > ಸೆಟ್ಟಿಂಗ್‌ಗಳು > ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್** ಅಡಿಯಲ್ಲಿ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಬಹುದು.

![ನಿರ್ವಾಹಕ ಮರುನಿರ್ದೇಶನ, ಮ್ಯಾಪಿಂಗ್ ಸಂದೇಶ ಮತ್ತು DNS ಆಯ್ಕೆಗಳನ್ನು ತೋರಿಸುವ ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳ ಪುಟ](/img/config/domain-mapping-settings.png)

ಈ ಆಯ್ಕೆಯ ಕೆಳಗಡೆ, **ನಿರ್ವಾಹಕ ಮರುನಿರ್ದೇಶನವನ್ನು ಬಲವಂತಗೊಳಿಸಿ** ಎಂಬ ಆಯ್ಕೆಯನ್ನೂ ನೀವು ನೋಡಬಹುದು. ನಿಮ್ಮ ಗ್ರಾಹಕರು ತಮ್ಮ ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಮತ್ತು ಉಪಡೊಮೇನ್ ಎರಡರಲ್ಲಿಯೂ ಅಥವಾ ಅವುಗಳಲ್ಲಿ ಒಂದರಲ್ಲಿಯೇ ಮಾತ್ರ ತಮ್ಮ ನಿರ್ವಾಹಕ Dashboard ಅನ್ನು ಪ್ರವೇಶಿಸಬಹುದೇ ಎಂಬುದನ್ನು ನಿಯಂತ್ರಿಸಲು ಈ ಆಯ್ಕೆ ನಿಮಗೆ ಅವಕಾಶ ನೀಡುತ್ತದೆ.

ನೀವು **ಮ್ಯಾಪ್ ಮಾಡಿದ ಡೊಮೇನ್‌ಗೆ ಮರುನಿರ್ದೇಶನವನ್ನು ಬಲವಂತಗೊಳಿಸಿ** ಅನ್ನು ಆಯ್ಕೆ ಮಾಡಿದರೆ, ನಿಮ್ಮ ಗ್ರಾಹಕರು ತಮ್ಮ ಕಸ್ಟಮ್ ಡೊಮೇನ್‌ಗಳಲ್ಲಿ ಮಾತ್ರ ತಮ್ಮ ನಿರ್ವಾಹಕ Dashboard ಅನ್ನು ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.

**ಜಾಲ ಡೊಮೇನ್‌ಗೆ ಮರುನಿರ್ದೇಶನವನ್ನು ಬಲವಂತಗೊಳಿಸಿ** ಎಂಬ ಆಯ್ಕೆ ಇದಕ್ಕೆ ಸಂಪೂರ್ಣ ವಿರುದ್ಧವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ - ನಿಮ್ಮ ಗ್ರಾಹಕರು ತಮ್ಮ ಕಸ್ಟಮ್ ಡೊಮೇನ್‌ಗಳಲ್ಲಿ ಸೈನ್ ಇನ್ ಮಾಡಲು ಪ್ರಯತ್ನಿಸಿದರೂ ಸಹ, ತಮ್ಮ ಉಪಡೊಮೇನ್‌ನಲ್ಲಿ ಮಾತ್ರ ತಮ್ಮ Dashboard‌ಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ಅನುಮತಿಸಲಾಗುತ್ತದೆ.

ಮತ್ತು **ಮ್ಯಾಪ್ ಮಾಡಿದ ಡೊಮೇನ್ ಮತ್ತು ಜಾಲ ಡೊಮೇನ್ ಎರಡರ ಮೂಲಕವೂ ನಿರ್ವಾಹಕ ಪ್ರವೇಶಕ್ಕೆ ಅನುಮತಿಸಿ** ಎಂಬ ಆಯ್ಕೆ, ಉಪಡೊಮೇನ್ ಮತ್ತು ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಎರಡರಲ್ಲಿಯೂ ಅವರ ನಿರ್ವಾಹಕ Dashboard‌ಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ಅವರಿಗೆ ಅವಕಾಶ ನೀಡುತ್ತದೆ.

![ಮೂರು ಮರುನಿರ್ದೇಶನ ಆಯ್ಕೆಗಳನ್ನು ತೋರಿಸುವಂತೆ ವಿಸ್ತರಿಸಿದ ನಿರ್ವಾಹಕ ಮರುನಿರ್ದೇಶನ dropdown](/img/config/domain-mapping-redirect-options.png)

ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಅನ್ನು ಮ್ಯಾಪ್ ಮಾಡಲು ಎರಡು ಮಾರ್ಗಗಳಿವೆ. ಮೊದಲನೆಯದು, super admin ಆಗಿ ನಿಮ್ಮ ಜಾಲ ನಿರ್ವಾಹಕ Dashboardನಿಂದ ಡೊಮೇನ್ ಹೆಸರನ್ನು ಮ್ಯಾಪ್ ಮಾಡುವುದು, ಮತ್ತು ಎರಡನೆಯದು Account ಪುಟದ ಅಡಿಯಲ್ಲಿ ಉಪತಾಣ ನಿರ್ವಾಹಕ Dashboard ಮೂಲಕ.

ಆದರೆ ನಿಮ್ಮ ಜಾಲದಲ್ಲಿನ ಉಪತಾಣಗಳಲ್ಲಿ ಒಂದಕ್ಕೆ ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಅನ್ನು ಮ್ಯಾಪ್ ಮಾಡಲು ಆರಂಭಿಸುವ ಮೊದಲು, ಆ ಡೊಮೇನ್ ಹೆಸರಿನ **DNS ಸೆಟ್ಟಿಂಗ್‌ಗಳು** ಸರಿಯಾಗಿ ಸಂರಚಿಸಲ್ಪಟ್ಟಿವೆ ಎಂಬುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಬೇಕು.

###

### ಡೊಮೇನ್ DNS ಸೆಟ್ಟಿಂಗ್‌ಗಳು ಸರಿಯಾಗಿ ಸಂರಚಿಸಲ್ಪಟ್ಟಿವೆ ಎಂಬುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳುವುದು

ಮ್ಯಾಪಿಂಗ್ ಕೆಲಸ ಮಾಡಲು, ನೀವು ಮ್ಯಾಪ್ ಮಾಡಲು ಯೋಜಿಸಿರುವ ಡೊಮೇನ್ ನಿಮ್ಮ ಜಾಲದ IP ವಿಳಾಸವನ್ನು ಸೂಚಿಸುತ್ತಿದೆ ಎಂಬುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಬೇಕು. ನಿಮಗೆ ಜಾಲದ IP ವಿಳಾಸ ಬೇಕು ಎಂಬುದನ್ನು ಗಮನಿಸಿ - Ultimate Multisite ಸ್ಥಾಪಿಸಲಾದ ಡೊಮೇನ್‌ನ IP ವಿಳಾಸ - ನೀವು ಮ್ಯಾಪ್ ಮಾಡಲು ಬಯಸುವ ಕಸ್ಟಮ್ ಡೊಮೇನ್‌ನ IP ವಿಳಾಸವಲ್ಲ. ನಿರ್ದಿಷ್ಟ ಡೊಮೇನ್‌ನ IP ವಿಳಾಸವನ್ನು ಹುಡುಕಲು, ಉದಾಹರಣೆಗೆ [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) ಗೆ ಹೋಗಲು ನಾವು ಸಲಹೆ ನೀಡುತ್ತೇವೆ.

ಡೊಮೇನ್ ಅನ್ನು ಸರಿಯಾಗಿ ಮ್ಯಾಪ್ ಮಾಡಲು, ಆ **IP ವಿಳಾಸ**ವನ್ನು ಸೂಚಿಸುವ **A RECORD** ಅನ್ನು ನಿಮ್ಮ **DNS** ಸಂರಚನೆಯಲ್ಲಿ ಸೇರಿಸಬೇಕು. ವಿಭಿನ್ನ ಡೊಮೇನ್ ನೋಂದಣಿದಾರರ ನಡುವೆ DNS ನಿರ್ವಹಣೆ ಬಹಳ ವ್ಯತ್ಯಾಸವಾಗುತ್ತದೆ, ಆದರೆ XXXX ನಿಮ್ಮ ಡೊಮೇನ್ ನೋಂದಣಿದಾರನಾಗಿರುವಲ್ಲಿ " _XXXXನಲ್ಲಿ A Record ರಚಿಸುವುದು_ " ಎಂದು ಹುಡುಕಿದರೆ, ಅದನ್ನು ವಿವರಿಸುವ ಸಾಕಷ್ಟು ಟ್ಯುಟೋರಿಯಲ್‌ಗಳು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಲಭ್ಯವಿವೆ (ಉದಾ.: " _GoDaddyನಲ್ಲಿ A Record ರಚಿಸುವುದು_ ").

ಇದನ್ನು ಕೆಲಸ ಮಾಡಿಸಲು ನಿಮಗೆ ತೊಂದರೆಯಾಗುತ್ತಿದ್ದರೆ, **ನಿಮ್ಮ ಡೊಮೇನ್ ನೋಂದಣಿದಾರರ ಬೆಂಬಲವನ್ನು ಸಂಪರ್ಕಿಸಿ** ಮತ್ತು ಅವರು ಈ ಭಾಗದಲ್ಲಿ ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತಾರೆ.

ನಿಮ್ಮ ಗ್ರಾಹಕರು ತಮ್ಮದೇ ಡೊಮೇನ್‌ಗಳನ್ನು ಮ್ಯಾಪ್ ಮಾಡಲು ಅನುಮತಿಸಲು ನೀವು ಯೋಜಿಸಿದ್ದರೆ, ಈ ಭಾಗದ ಕೆಲಸವನ್ನು ಅವರು ತಾವೇ ಮಾಡಬೇಕಾಗುತ್ತದೆ. ಅವರಿಗೆ A Record ರಚಿಸಲು ಸಾಧ್ಯವಾಗದಿದ್ದರೆ, ಅವರನ್ನು ಅವರ ನೋಂದಣಿದಾರರ ಬೆಂಬಲ ವ್ಯವಸ್ಥೆಯತ್ತ ದಾರಿ ತೋರಿಸಿ.

### Super Admin ಆಗಿ ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಹೆಸರನ್ನು ಮ್ಯಾಪ್ ಮಾಡುವುದು

ನಿಮ್ಮ ಜಾಲದಲ್ಲಿ super admin ಆಗಿ ಲಾಗ್ ಇನ್ ಆಗಿರುವಾಗ, **Ultimate Multisite > ಡೊಮೇನ್‌ಗಳು** ಅಡಿಯಲ್ಲಿ ಹೋಗುವ ಮೂಲಕ ನೀವು ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಹೆಸರುಗಳನ್ನು ಸುಲಭವಾಗಿ ಸೇರಿಸಬಹುದು ಮತ್ತು ನಿರ್ವಹಿಸಬಹುದು.

![Ultimate Multisiteನಲ್ಲಿನ ಡೊಮೇನ್‌ಗಳ ಪಟ್ಟಿ ಪುಟ](/img/admin/domains-list.png)

ಈ ಪುಟದ ಅಡಿಯಲ್ಲಿ, ಮೇಲ್ಭಾಗದಲ್ಲಿರುವ **ಡೊಮೇನ್ ಸೇರಿಸಿ** ಬಟನ್ ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಬಹುದು. ಇದರಿಂದ ಒಂದು modal ವಿಂಡೋ ತೆರೆಯುತ್ತದೆ; ಅಲ್ಲಿ ನೀವು **ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಹೆಸರು** , ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಹೆಸರನ್ನು ಅನ್ವಯಿಸಲು ಬಯಸುವ **ಉಪತಾಣ**ವನ್ನು ಸೆಟ್ ಮಾಡಿ ತುಂಬಬಹುದು, ಮತ್ತು ಅದನ್ನು **ಪ್ರಾಥಮಿಕ ಡೊಮೇನ್** ಹೆಸರಾಗಿ ಸೆಟ್ ಮಾಡಬೇಕೇ ಬೇಡವೇ ಎಂದು ನಿರ್ಧರಿಸಬಹುದು (ಒಂದು ಉಪತಾಣಕ್ಕೆ **ಅನೇಕ ಡೊಮೇನ್ ಹೆಸರುಗಳನ್ನು ಮ್ಯಾಪ್** ಮಾಡಬಹುದು ಎಂಬುದನ್ನು ಗಮನಿಸಿ).

![ಡೊಮೇನ್ ಹೆಸರು, ತಾಣ ಆಯ್ಕೆಗಾರ ಮತ್ತು ಪ್ರಾಥಮಿಕ ಡೊಮೇನ್ toggle ಹೊಂದಿರುವ ಡೊಮೇನ್ ಸೇರಿಸಿ modal](/img/admin/domain-add-modal.png)

ಎಲ್ಲಾ ಮಾಹಿತಿಯನ್ನು ನಮೂದಿಸಿದ ನಂತರ, ಕೆಳಭಾಗದಲ್ಲಿರುವ **ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಡೊಮೇನ್ ಸೇರಿಸಿ** ಬಟನ್ ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಬಹುದು.

ಇದು ಕಸ್ಟಮ್ ಡೊಮೇನ್‌ನ DNS ಮಾಹಿತಿಯನ್ನು ಪರಿಶೀಲಿಸುವ ಮತ್ತು ಪಡೆಯುವ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಆರಂಭಿಸುತ್ತದೆ. ಪ್ರಕ್ರಿಯೆ ಹೇಗೆ ಸಾಗುತ್ತಿದೆ ಎಂಬುದನ್ನು ಅನುಸರಿಸಲು, ಪುಟದ ಕೆಳಭಾಗದಲ್ಲಿ ನೀವು log ಅನ್ನು ಕೂಡ ನೋಡುತ್ತೀರಿ. ಈ ಪ್ರಕ್ರಿಯೆ ಪೂರ್ಣಗೊಳ್ಳಲು ಕೆಲವು ನಿಮಿಷಗಳು ಬೇಕಾಗಬಹುದು.

Ultimate Multisite v2.13.0 ಹೊಸ site ಅನ್ನು ಪ್ರತಿ-site domain ಎಂದು ಪರಿಗಣಿಸಬೇಕಾದ host ನಲ್ಲಿ ರಚಿಸಿದಾಗ internal domain record ಅನ್ನು ಕೂಡ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ರಚಿಸುತ್ತದೆ. host network‌ನ primary domain ಆಗಿದ್ದರೆ, ಅಥವಾ **Site URL** field ನಲ್ಲಿ configure ಮಾಡಿದ shared checkout-form base domains ಗಳಲ್ಲಿ ಒಂದಾಗಿದ್ದರೆ, automatic mapped-domain record ಅನ್ನು ಬಿಟ್ಟುಬಿಡಲಾಗುತ್ತದೆ. ಹೀಗಾಗಿ ಆ shared base domain ಅದನ್ನು ಬಳಸುವ ಪ್ರತಿಯೊಂದು site ಗೂ ಲಭ್ಯವಾಗಿರುತ್ತದೆ.

ಗ್ರಾಹಕರು Domain Seller v1.3.0 ಅಥವಾ ಹೊಸ ಆವೃತ್ತಿಯ ಮೂಲಕ ಹೊಸ domain ನೋಂದಾಯಿಸಿದಾಗ, Ultimate Multisite ನೋಂದಾಯಿಸಿದ domain ಅನ್ನು default ಆಗಿ ಗ್ರಾಹಕರ network site ಗೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ map ಮಾಡುತ್ತದೆ. ಯಶಸ್ವಿ ನೋಂದಣಿಯ ನಂತರ primary-domain flag, activation state, ಅಥವಾ SSL handling ಮುಂತಾದ options ಸರಿಹೊಂದಿಸಲು ಬಯಸದಿದ್ದರೆ, administrators ಪ್ರತ್ಯೇಕ mapped-domain record ಸೇರಿಸುವ ಅಗತ್ಯವಿಲ್ಲ.

ಎಲ್ಲವೂ ಸರಿಯಾಗಿ set up ಆಗಿದ್ದರೆ **Stage** ಅಥವಾ status **Checking DNS** ನಿಂದ **Ready** ಗೆ ಬದಲಾಗಬೇಕು.

<!-- ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಲಭ್ಯವಿಲ್ಲ: domains list ನಲ್ಲಿ Checking DNS stage ತೋರಿಸುವ Domain row -->

<!-- ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಲಭ್ಯವಿಲ್ಲ: ಹಸಿರು status indicator ಜೊತೆಗೆ Ready stage ತೋರಿಸುವ Domain row -->

ನೀವು domain name ಮೇಲೆ click ಮಾಡಿದರೆ, ಅದರೊಳಗೆ ಕೆಲವು options ನೋಡಬಹುದು. ಅವುಗಳನ್ನು ಶೀಘ್ರವಾಗಿ ನೋಡೋಣ:

![stage, site, active, primary ಮತ್ತು SSL toggles ಇರುವ Domain detail page](/img/admin/domain-edit.png)

**Stage:** ಇದು domain ಇರುವ ಹಂತ. ನೀವು domain ಅನ್ನು ಮೊದಲ ಬಾರಿ ಸೇರಿಸಿದಾಗ, ಅದು ಬಹುಶಃ **Checking DNS** stage ನಲ್ಲಿ ಇರುತ್ತದೆ. ಪ್ರಕ್ರಿಯೆ DNS entries ಅನ್ನು ಪರಿಶೀಲಿಸಿ, ಅವು ಸರಿಯಾಗಿವೆ ಎಂದು ದೃಢಪಡಿಸುತ್ತದೆ. ನಂತರ domain ಅನ್ನು **Checking SSL** stage ಗೆ ಇಡಲಾಗುತ್ತದೆ. Ultimate Multisite domain ಗೆ SSL ಇದೆಯೇ ಇಲ್ಲವೇ ಎಂದು ಪರಿಶೀಲಿಸಿ, ನಿಮ್ಮ domain ಅನ್ನು **Ready** ಅಥವಾ **Ready (without SSL)** ಎಂದು ವರ್ಗೀಕರಿಸುತ್ತದೆ.

**Site:** ಈ domain ಗೆ ಸಂಬಂಧಿಸಿದ subdomain. mapped domain ಈ ನಿರ್ದಿಷ್ಟ site ನ content ತೋರಿಸುತ್ತದೆ.

**Active:** domain ಅನ್ನು activate ಅಥವಾ deactivate ಮಾಡಲು ನೀವು ಈ option ಅನ್ನು on ಅಥವಾ off ಮಾಡಬಹುದು.

**Is Primary Domain?:** ನಿಮ್ಮ ಗ್ರಾಹಕರು ಪ್ರತಿ site ಗೂ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು mapped domain ಹೊಂದಿರಬಹುದು. ನಿರ್ದಿಷ್ಟ site ಗೆ ಇದು primary domain ಆಗಿದೆಯೇ ಎಂದು ಆಯ್ಕೆ ಮಾಡಲು ಈ option ಬಳಸಿ.

**Is Secure?:** Ultimate Multisite domain ಗೆ SSL certificate ಇದೆಯೇ ಇಲ್ಲವೇ ಎಂದು enable ಮಾಡುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿದರೂ, ನೀವು SSL certificate ಜೊತೆಗೆ ಅಥವಾ ಇಲ್ಲದೆ domain load ಆಗುವಂತೆ ಕೈಯಾರೆ ಆಯ್ಕೆ ಮಾಡಬಹುದು. website ಗೆ SSL certificate ಇಲ್ಲದಿದ್ದರೆ ಮತ್ತು ನೀವು ಅದನ್ನು SSL ಜೊತೆ force load ಮಾಡಲು ಪ್ರಯತ್ನಿಸಿದರೆ, errors ಬರಬಹುದು ಎಂಬುದನ್ನು ಗಮನಿಸಿ.

### Subsite user ಆಗಿ custom domain name mapping ಮಾಡುವುದು

Subsite administrators ತಮ್ಮ subsite admin dashboard ನಿಂದಲೂ custom domain names map ಮಾಡಬಹುದು.

ಮೊದಲು, **Domain mapping** settings ಅಡಿಯಲ್ಲಿ ಈ option enable ಮಾಡಿದ್ದೀರಾ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಬೇಕು. ಕೆಳಗಿನ screenshot ನೋಡಿ.

<!-- ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಲಭ್ಯವಿಲ್ಲ: Customer DNS Management toggle ಮೂಲಕ subsite users ಗೆ domains map ಮಾಡಲು ಅವಕಾಶ ನೀಡುವ Domain mapping settings -->

ನೀವು ಈ option ಅನ್ನು **Plan** level ನಲ್ಲಿ ಅಥವಾ **Ultimate Multisite > Products** ನಲ್ಲಿ product options ಅಡಿಯಲ್ಲಿ ಕೂಡ set ಅಥವಾ configure ಮಾಡಬಹುದು.

![product edit page ನಲ್ಲಿ Custom Domains section](/img/config/product-custom-domains.png)

ಆ options ಗಳಲ್ಲಿ ಯಾವುದಾದರೂ enable ಆಗಿದ್ದರೆ ಮತ್ತು subsite user ಗೆ custom domain names map ಮಾಡಲು ಅನುಮತಿ ಇದ್ದರೆ, subsite user **Account** page ಅಡಿಯಲ್ಲಿ **Domains** ಎಂಬ metabox ನೋಡಬೇಕು.

<!-- ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಲಭ್ಯವಿಲ್ಲ: Add Domain button ಇರುವ subsite Account page ನ Domains metabox -->

User **Add Domain** button ಅನ್ನು click ಮಾಡಿದರೆ, ಕೆಲವು ಸೂಚನೆಗಳಿರುವ modal window ತೆರೆಯುತ್ತದೆ.

<!-- ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಲಭ್ಯವಿಲ್ಲ: subsite users ಗಾಗಿ DNS A-record ಸೂಚನೆಗಳನ್ನು ತೋರಿಸುವ Add Domain modal -->

ನಂತರ user **Next Step** click ಮಾಡಿ custom domain name ಸೇರಿಸಲು ಮುಂದುವರಿಯಬಹುದು. ಇದು primary domain ಆಗಬೇಕೇ ಬೇಡವೇ ಎಂಬುದನ್ನೂ ಆಯ್ಕೆ ಮಾಡಬಹುದು.

<!-- ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಲಭ್ಯವಿಲ್ಲ: custom domain name field ಮತ್ತು primary domain toggle ಇರುವ Add Domain form -->

<!-- ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಲಭ್ಯವಿಲ್ಲ: DNS verification ಆರಂಭಿಸುವ Add Domain confirmation step -->

**Add Domain** click ಮಾಡಿದರೆ custom domain ನ DNS information ಪರಿಶೀಲಿಸುವ ಮತ್ತು fetch ಮಾಡುವ ಪ್ರಕ್ರಿಯೆ ಆರಂಭವಾಗುತ್ತದೆ.

### Domain Syncing ಬಗ್ಗೆ

Domain Syncing ಎಂದರೆ Ultimate Multisite ನಿಮ್ಮ hosting account ಗೆ custom domain name ಅನ್ನು add-on domain ಆಗಿ ಸೇರಿಸುವ ಪ್ರಕ್ರಿಯೆ, **domain mapping ಕೆಲಸ ಮಾಡಲು** ಇದು ಬೇಕಾಗುತ್ತದೆ.

ನಿಮ್ಮ hosting provider ಗೆ Ultimate Multisite domain mapping feature ಜೊತೆ integration ಇದ್ದರೆ domain syncing ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಡೆಯುತ್ತದೆ. ಪ್ರಸ್ತುತ, ಈ hosting providers _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ ಮತ್ತು _Cpanel._

host-provider integration active ಆಗಿದ್ದರೆ, ಹೊಸದಾಗಿ ರಚಿಸಿದ sites ಗಾಗಿ provider-side DNS ಅಥವಾ subdomain creation task ಅನ್ನು Ultimate Multisite enqueue ಕೂಡ ಮಾಡಬಹುದು. ಆ task ಗೆ ಯಾವ integration ಕೂಡ listening ಮಾಡದಿದ್ದರೆ, no-op queue entries ತಪ್ಪಿಸಲು background job ಅನ್ನು skip ಮಾಡಲಾಗುತ್ತದೆ. mapped domains ಗಾಗಿ DNS ಮತ್ತು SSL checks ಸಾಮಾನ್ಯ domain-stage process ಮೂಲಕ ಮುಂದುವರಿಯುತ್ತವೆ.

ನೀವು Ultimate Multisite settings ನಲ್ಲಿ **Integration** tab ಅಡಿಯಲ್ಲಿ ಈ integration ಅನ್ನು activate ಮಾಡಬೇಕು.

![hosting providers ತೋರಿಸುವ Ultimate Multisite settings ನ Integrations tab](/img/config/integrations-tab.png)

<!-- ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಲಭ್ಯವಿಲ್ಲ: Integrations settings tab ನಲ್ಲಿ Hosting provider Configuration links -->

_ಮೇಲೆ ಉಲ್ಲೇಖಿಸಿದ providers ಗಳಲ್ಲಿ ನಿಮ್ಮ hosting provider ಇಲ್ಲದಿದ್ದರೆ, **ನೀವು domain name ಅನ್ನು ನಿಮ್ಮ hosting account ಗೆ ಕೈಯಾರೆ sync ಮಾಡಬೇಕು ಅಥವಾ ಸೇರಿಸಬೇಕು** ಎಂಬುದನ್ನು ಗಮನಿಸಿ._
