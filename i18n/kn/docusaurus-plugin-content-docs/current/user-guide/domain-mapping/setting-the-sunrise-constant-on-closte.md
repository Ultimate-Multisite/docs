---
title: Closte ನಲ್ಲಿ Sunrise Constant ಅನ್ನು ಹೊಂದಿಸುವುದು
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte ಮೇಲೆ Sunrise constant ಅನ್ನು true ಎಂದು ಹೊಂದಿಸುವುದು

ಕೆಲವು ಹೋಸ್ಟ್ ಪ್ರೊವೈಡರ್‌ಗಳು ಭದ್ರತೆಯ ಕಾರಣಗಳಿಗಾಗಿ wp-config.php ಫೈಲ್ ಅನ್ನು ಲಾಕ್ ಮಾಡುತ್ತಾರೆ. ಇದರಿಂದಾಗಿ Ultimate Multisite ಗೆ domain mapping ಮತ್ತು ಇತರ ವೈಶಿಷ್ಟ್ಯಗಳು ಕೆಲಸ ಮಾಡಲು ಅಗತ್ಯವಾದ constants ಅನ್ನು ಸೇರಿಸಲು ಫೈಲ್ ಅನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಎಡಿಟ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗುವುದಿಲ್ಲ. Closte ಅಂತಹ ಒಂದು ಹೋಸ್ಟ್ ಆಗಿದೆ.

ಆದರೆ, Closte ಸುರಕ್ಷಿತ ರೀತಿಯಲ್ಲಿ wp-config.php ಗೆ constants ಸೇರಿಸುವ ಒಂದು ಮಾರ್ಗವನ್ನು ಒದಗಿಸುತ್ತದೆ. ನೀವು ಕೆಳಗಿನ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಬೇಕು:

## Closte dashboard ಮೇಲೆ

ಮೊದಲು, [ನಿಮ್ಮ Closte ಖಾತೆಗೆ ಲಾಗಿನ್ ಆಗಿ](https://app.closte.com/), Sites ಮೆನು ಐಟಂ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ, ನಂತರ ನೀವು ಪ್ರಸ್ತುತ ಕೆಲಸ ಮಾಡುತ್ತಿರುವ ಸೈಟ್‌ನ Dashboard ಲಿಂಕ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

ಪರದೆಯ ಎಡಭಾಗದಲ್ಲಿ ಹೊಸ ಮೆನು ಐಟಂಗಳು ಕಾಣಿಸುತ್ತವೆ. ಆ ಮೆನು ಬಳಸಿ **Settings** ಪುಟಕ್ಕೆ ಹೋಗಿ:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

ನಂತರ, **Settings** ಪುಟದಲ್ಲಿ, WP-Config ಟ್ಯಾಬ್ ಅನ್ನು ಹುಡುಕಿ, ಮತ್ತು ಆ ಟ್ಯಾಬ್‌ನಲ್ಲಿ "Additional wp-config.php content" ಫೀಲ್ಡ್ ಅನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite ಅನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವ ಸಂದರ್ಭದಲ್ಲಿ, ನೀವು ಆ ಫೀಲ್ಡ್‌ಗೆ sunrise constant ಅನ್ನು ಸೇರಿಸಬೇಕು. ಹೊಸ ಸಾಲನ್ನು ಸೇರಿಸಿ ಮತ್ತು ಕೆಳಗಿನ ಸಾಲನ್ನು ಪೇಸ್ಟ್ ಮಾಡಿ. ಅದರ ನಂತರ, **Save All** ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ.

define('SUNRISE', true);

ಅಷ್ಟೇ, ನೀವು ಸಿದ್ಧರಾಗಿದ್ದೀರಿ. Ultimate Multisite ಇನ್‌ಸ್ಟಾಲ್ ವಿಝಾರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ ಮತ್ತು ಪ್ರಕ್ರಿಯೆಯನ್ನು ಮುಂದುವರಿಸಲು ಪುಟವನ್ನು ರಿಫ್ರೆಶ್ ಮಾಡಿ.
