---
title: V1 ನಿಂದ ವಲಸೆ
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 ನಿಂದ ಮೈಗ್ರೇಟ್ ಮಾಡುವುದು

## Ultimate Multisite ತನ್ನ ಮೂಲ 1.x ಆವೃತ್ತಿಗಳ ಸರಣಿಯಿಂದ 2.x ಆವೃತ್ತಿಗಳ ಸರಣಿಗೆ ಬದಲಾಗಿದೆ.

Ultimate Multisite ಆವೃತ್ತಿ 2.0 ಮತ್ತು ಮೇಲ್ಪಟ್ಟವು ಕೋಡ್‌ಬೇಸ್‌ನ ಸಂಪೂರ್ಣ ಪುನರ್ಲೇಖನವಾಗಿದೆ, ಅಂದರೆ ಹಳೆಯ ಆವೃತ್ತಿ ಮತ್ತು ಹೊಸದರ ನಡುವೆ ಬಹಳ ಕಡಿಮೆ ಸಾಮ್ಯತೆ ಇದೆ. ಈ ಕಾರಣಕ್ಕಾಗಿ, 1.x ನಿಂದ 2.x ಗೆ ಅಪ್‌ಗ್ರೇಡ್ ಮಾಡುವಾಗ, ಹೊಸ ಆವೃತ್ತಿಗಳು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬಹುದಾದ ಸ್ವರೂಪಕ್ಕೆ ನಿಮ್ಮ ಡೇಟಾವನ್ನು ಮೈಗ್ರೇಟ್ ಮಾಡಬೇಕಾಗುತ್ತದೆ.

ಅದೃಷ್ಟವಶಾತ್, Ultimate Multisite 2.0+ **ಮೈಗ್ರೇಟರ್‌ನೊಂದಿಗೆ ಬರುತ್ತದೆ**, ಇದು ಹಳೆಯ ಆವೃತ್ತಿಯ ಡೇಟಾವನ್ನು ಪತ್ತೆಹಚ್ಚಿ ಹೊಸ ಸ್ವರೂಪಕ್ಕೆ ಪರಿವರ್ತಿಸುವ ಸಾಮರ್ಥ್ಯ ಹೊಂದಿರುವ ಕೋರ್‌ನಲ್ಲಿ ಅಂತರ್ನಿರ್ಮಿತವಾಗಿದೆ. ಈ ಮೈಗ್ರೇಶನ್ ಆವೃತ್ತಿ 2.0+ ನ **ಸೆಟಪ್ ವಿಝಾರ್ಡ್** ಸಮಯದಲ್ಲಿ ನಡೆಯುತ್ತದೆ.

ಈ ಪಾಠವು ಮೈಗ್ರೇಟರ್ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ, ವಿಫಲತೆಯ ಸಂದರ್ಭಗಳಲ್ಲಿ ಏನು ಮಾಡಬೇಕು, ಮತ್ತು ಈ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಉಂಟಾಗಬಹುದಾದ ಸಮಸ್ಯೆಗಳನ್ನು ಹೇಗೆ ಟ್ರಬಲ್‌ಶೂಟ್ ಮಾಡುವುದು ಎಂಬುದನ್ನು ವಿವರಿಸುತ್ತದೆ.

_**ಮುಖ್ಯ: ಆವೃತ್ತಿ 1.x ನಿಂದ ಆವೃತ್ತಿ 2.0 ಗೆ ಅಪ್‌ಗ್ರೇಡ್ ಮಾಡಲು ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು ನಿಮ್ಮ ಸೈಟ್ ಡೇಟಾಬೇಸ್‌ನ ಬ್ಯಾಕಪ್ ರಚಿಸಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ**_

## ಮೊದಲ ಹಂತಗಳು

ಮೊದಲ ಹಂತವೆಂದರೆ plugin .zip ಫೈಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ನಿಮ್ಮ network admin dashboard ನಲ್ಲಿ ಆವೃತ್ತಿ 2.0 ಅನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದು.

ನೀವು [ಆವೃತ್ತಿ 2.0 ಅನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ ಆಕ್ಟಿವೇಟ್ ಮಾಡಿದ ನಂತರ](../getting-started/installing-ultimate-multisite.md), ನಿಮ್ಮ Multisite ಹಳೆಯ ಆವೃತ್ತಿಯಲ್ಲಿ ಚಾಲನೆಯಲ್ಲಿದೆ ಎಂದು ಸಿಸ್ಟಮ್ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪತ್ತೆಹಚ್ಚುತ್ತದೆ ಮತ್ತು plugin ಪುಟದ ಮೇಲ್ಭಾಗದಲ್ಲಿ ಈ ಸಂದೇಶವನ್ನು ನೀವು ನೋಡುತ್ತೀರಿ.

_**ಸೂಚನೆ:** ನಿಮ್ಮ Multisite ನಲ್ಲಿ Ultimate Multisite 1.x ಇನ್‌ಸ್ಟಾಲ್ ಆಗಿದ್ದರೆ, ನೀವು ಈಗ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿದ ಆವೃತ್ತಿಯೊಂದಿಗೆ plugin ಅನ್ನು ಬದಲಾಯಿಸುವ ಆಯ್ಕೆ ನಿಮಗೆ ಇರುತ್ತದೆ. ದಯವಿಟ್ಟು ಮುಂದುವರಿಯಿರಿ ಮತ್ತು **Replace current with uploaded** ಕ್ಲಿಕ್ ಮಾಡಿ._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

ಮುಂದಿನ ಪುಟವು ಆವೃತ್ತಿ 1.x ಜೊತೆಗೆ ನೀವು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿರುವ ಹಳೆಯ add-on ಗಳ ಬಗ್ಗೆ ತಿಳಿಸುತ್ತದೆ. ನೀವು ಬಳಸುತ್ತಿರುವ ಆವೃತ್ತಿಯು ಆವೃತ್ತಿ 2.0 ನೊಂದಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆಯೇ ಅಥವಾ ಮೈಗ್ರೇಶನ್ ನಂತರ add-on ನ ಅಪ್‌ಗ್ರೇಡ್ ಆವೃತ್ತಿಯನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಕೇ ಎಂಬ ಸೂಚನೆಗಳು ಇರುತ್ತವೆ.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

ಮುಂದುವರಿಯಲು ಸಿದ್ಧರಾದಾಗ, **Visit the Installer to finish the upgrade** ಎಂದು ಹೇಳುವ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಬಹುದು.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

ಅದು ನಿಮ್ಮನ್ನು ಕೆಲವು ಸ್ವಾಗತ ಸಂದೇಶಗಳೊಂದಿಗೆ installation wizard ಪುಟಕ್ಕೆ ಕರೆದೊಯ್ಯುತ್ತದೆ. ಮುಂದಿನ ಪುಟಕ್ಕೆ ಹೋಗಲು **Get Started** ಕ್ಲಿಕ್ ಮಾಡಿ.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** ಕ್ಲಿಕ್ ಮಾಡಿದ ನಂತರ, ಇದು ನಿಮ್ಮನ್ನು Pre-install Checks ಗೆ ರೀಡೈರೆಕ್ಟ್ ಮಾಡುತ್ತದೆ. ಇದು ನಿಮ್ಮ System Information ಮತ್ತು WordPress installation ತೋರಿಸುತ್ತದೆ ಮತ್ತು **Ultimate Multisite ನ ಅವಶ್ಯಕತೆಗಳನ್ನು** ಅದು ಪೂರೈಸುತ್ತದೆಯೇ ಎಂದು ತಿಳಿಸುತ್ತದೆ.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

ಮುಂದಿನ ಹಂತವೆಂದರೆ ನಿಮ್ಮ Ultimate Multisite license key ನಮೂದಿಸಿ plugin ಅನ್ನು ಆಕ್ಟಿವೇಟ್ ಮಾಡುವುದು. ಇದು add-on ಗಳು ಸೇರಿದಂತೆ ಎಲ್ಲಾ ವೈಶಿಷ್ಟ್ಯಗಳು ನಿಮ್ಮ ಸೈಟ್‌ನಲ್ಲಿ ಲಭ್ಯವಾಗುವುದನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

ನಿಮ್ಮ key ನಮೂದಿಸಿದ ನಂತರ, **Agree & Activate** ಕ್ಲಿಕ್ ಮಾಡಿ.

License activation ನಂತರ, ಮುಂದಿನ ಪುಟದಲ್ಲಿ **Install** ಕ್ಲಿಕ್ ಮಾಡುವ ಮೂಲಕ ನಿಜವಾದ installation ಪ್ರಾರಂಭಿಸಬಹುದು. ಇದು ಆವೃತ್ತಿ 2.0 ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಅಗತ್ಯವಾದ ಫೈಲ್‌ಗಳು ಮತ್ತು database ಅನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ರಚಿಸುತ್ತದೆ.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## ಈಗ, ಮೈಗ್ರೇಶನ್

ಮೈಗ್ರೇಟರ್ ಅಂತರ್ನಿರ್ಮಿತ ಸುರಕ್ಷತಾ ವೈಶಿಷ್ಟ್ಯವನ್ನು ಹೊಂದಿದೆ, ಅದು ನಿಮ್ಮ ಸಂಪೂರ್ಣ multisite ಅನ್ನು ಪರಿಶೀಲಿಸಿ ನಿಮ್ಮ ಎಲ್ಲಾ Ultimate Multisite ಡೇಟಾವನ್ನು ಯಾವುದೇ ಸಮಸ್ಯೆಯಿಲ್ಲದೆ ಮೈಗ್ರೇಟ್ ಮಾಡಬಹುದೆಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ. ಪ್ರಕ್ರಿಯೆ ಪ್ರಾರಂಭಿಸಲು **Run Check** ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

ಪರಿಶೀಲನೆ ನಡೆಸಿದ ನಂತರ, ನಿಮಗೆ ಎರಡು ಸಾಧ್ಯತೆಗಳಿವೆ: ಫಲಿತಾಂಶವು ದೋಷ **ಇರಬಹುದು** ಅಥವಾ **ದೋಷವಿಲ್ಲದೆ** ಇರಬಹುದು.

### ದೋಷದೊಂದಿಗೆ

ನಿಮಗೆ ದೋಷ ಸಂದೇಶ ಬಂದರೆ, ದೋಷವನ್ನು ಸರಿಪಡಿಸಲು ಸಹಾಯ ಮಾಡಲು ನಮ್ಮ support ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಬೇಕಾಗುತ್ತದೆ. ಟಿಕೆಟ್ ರಚಿಸುವಾಗ **error log ಒದಗಿಸುವುದನ್ನು** ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ. ನೀವು log ಅನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದು ಅಥವಾ contact our support team ಎಂದು ಹೇಳುವ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಬಹುದು. ಇದು ನಿಮ್ಮ ಪುಟದ ಬಲಭಾಗದಲ್ಲಿ help widget ತೆರೆಯುತ್ತದೆ, ವಿವರಣೆಯಡಿಯಲ್ಲಿ error logs ಸೇರಿದಂತೆ ಫೀಲ್ಡ್‌ಗಳು ಮೊದಲೇ ತುಂಬಲ್ಪಟ್ಟಿರುತ್ತವೆ.

_**ಸಿಸ್ಟಮ್ ದೋಷ ಕಂಡುಹಿಡಿದ ಕಾರಣ, ನೀವು ಆವೃತ್ತಿ 2.0 ಗೆ ಮೈಗ್ರೇಟ್ ಮಾಡಲು ಮುಂದುವರಿಯಲು ಸಾಧ್ಯವಾಗುವುದಿಲ್ಲ. ದೋಷ ಸರಿಪಡಿಸುವವರೆಗೆ ನಿಮ್ಮ network ಚಾಲನೆಯಲ್ಲಿ ಮುಂದುವರಿಸಲು ಆವೃತ್ತಿ 1.x ಗೆ roll back ಮಾಡಬಹುದು.**_

### ದೋಷವಿಲ್ಲದೆ

ಸಿಸ್ಟಮ್ ಯಾವುದೇ ದೋಷ ಕಂಡುಹಿಡಿಯದಿದ್ದರೆ, ನೀವು ಯಶಸ್ಸಿನ ಸಂದೇಶ ಮತ್ತು ಮೈಗ್ರೇಶನ್‌ನೊಂದಿಗೆ ಮುಂದುವರಿಯಲು ಕೆಳಭಾಗದಲ್ಲಿ **Migrate** ಬಟನ್ ನೋಡುತ್ತೀರಿ. ಈ ಪುಟದಲ್ಲಿ, ಮುಂದುವರಿಯುವ ಮೊದಲು ನಿಮ್ಮ database ನ ಬ್ಯಾಕಪ್ ರಚಿಸಲು ನೆನಪಿಸಲಾಗುತ್ತದೆ, ಇದನ್ನು ನಾವು ಬಲವಾಗಿ ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ. ನಿಮ್ಮ ಬಳಿ ಈಗಾಗಲೇ ಬ್ಯಾಕಪ್ ಇದ್ದರೆ **Migrate** ಒತ್ತಿ.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

ಇಷ್ಟೇ ಬೇಕಾಗಿರುವುದು!

ನಿಮ್ಮ network ನಲ್ಲಿ ನಿಮ್ಮ logo ಮತ್ತು ಇತರ ವಿಷಯಗಳನ್ನು ಅಪ್‌ಡೇಟ್ ಮಾಡಲು Wizard setup ಮುಂದುವರಿಸಬಹುದು ಅಥವಾ ನಿಮ್ಮ Ultimate Multisite ಆವೃತ್ತಿ 2.0 menu ಮತ್ತು ಅದರ ಹೊಸ interface ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲು ಪ್ರಾರಂಭಿಸಬಹುದು. ಮುಂದುವರಿಯಿರಿ ಮತ್ತು ಆನಂದಿಸಿ.
