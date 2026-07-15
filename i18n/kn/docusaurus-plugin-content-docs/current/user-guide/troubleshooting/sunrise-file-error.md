---
title: Sunrise ಫೈಲ್ ದೋಷ
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise ಫೈಲ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವಾಗ ಎರರ್

sunrise.php ಫೈಲ್ ಒಂದು ವಿಶೇಷ ಫೈಲ್ ಆಗಿದ್ದು, WordPress ತನ್ನನ್ನು ತಾನು ಪ್ರಾರಂಭಿಸುವಾಗ ಇದನ್ನು ಹುಡುಕುತ್ತದೆ. WordPress ಈ sunrise.php ಫೈಲ್ ಅನ್ನು ಗುರುತಿಸಬೇಕಾದರೆ, ಅದು **wp-content ಫೋಲ್ಡರ್** ಒಳಗೆ ಇರಬೇಕು.

ನೀವು Ultimate Multisite ಅನ್ನು ಆಕ್ಟಿವೇಟ್ ಮಾಡಿ, ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ನಲ್ಲಿ ತೋರಿಸಿರುವಂತೆ ಸೆಟಪ್ ವಿಝಾರ್ಡ್ ಮೂಲಕ ಹೋದಾಗ, Ultimate Multisite ನಮ್ಮ sunrise.php ಫೈಲ್ ಅನ್ನು wp-content ಫೋಲ್ಡರ್‌ಗೆ ಕಾಪಿ ಮಾಡಲು ಪ್ರಯತ್ನಿಸುತ್ತದೆ.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

ಹೆಚ್ಚಿನ ಸಮಯ, ನಾವು ಫೈಲ್ ಅನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಕಾಪಿ ಮಾಡಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ ಮತ್ತು ಎಲ್ಲವೂ ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಆದರೆ, ಏನಾದರೂ ಸರಿಯಾಗಿ ಸೆಟ್ ಆಗಿಲ್ಲದಿದ್ದರೆ (ಉದಾಹರಣೆಗೆ, ಫೋಲ್ಡರ್ ಪರ್ಮಿಷನ್‌ಗಳು), Ultimate Multisite ಫೈಲ್ ಅನ್ನು ಕಾಪಿ ಮಾಡಲು ಸಾಧ್ಯವಾಗದ ಪರಿಸ್ಥಿತಿ ಎದುರಾಗಬಹುದು.

Ultimo ನೀಡುವ ಎರರ್ ಮೆಸೇಜ್ ಓದಿದರೆ, ಇಲ್ಲಿ ಏನಾಯಿತು ಎಂದು ನಿಮಗೆ ತಿಳಿಯುತ್ತದೆ: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

ಇದನ್ನು ಸರಿಪಡಿಸಲು, wp-ultimo plugin ಫೋಲ್ಡರ್ ಒಳಗಿರುವ sunrise.php ಫೈಲ್ ಅನ್ನು ನೀವು ಸರಳವಾಗಿ ಕಾಪಿ ಮಾಡಿ ನಿಮ್ಮ wp-content ಫೋಲ್ಡರ್‌ನಲ್ಲಿ ಪೇಸ್ಟ್ ಮಾಡಬಹುದು. ಅದನ್ನು ಮಾಡಿದ ನಂತರ, ವಿಝಾರ್ಡ್ ಪೇಜ್ ಅನ್ನು ರಿಲೋಡ್ ಮಾಡಿ ಮತ್ತು ಚೆಕ್‌ಗಳು ಪಾಸ್ ಆಗಬೇಕು.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> ಏನೇ ಇರಲಿ, ಭವಿಷ್ಯದಲ್ಲಿ ಸಮಸ್ಯೆಗಳನ್ನು ತಪ್ಪಿಸಲು ನಿಮ್ಮ ಫೋಲ್ಡರ್ ಪರ್ಮಿಷನ್‌ಗಳ ಸಾಮಾನ್ಯ ಪರಿಶೀಲನೆ ಮಾಡುವುದು ಒಳ್ಳೆಯದು (Ultimate Multisite ಮಾತ್ರವಲ್ಲದೆ ಇತರ plugins ಮತ್ತು themes ಜೊತೆಗೂ).

WordPress ನ ಭಾಗವಾಗಿರುವ **Health Check tool** (ನಿಮ್ಮ ಮುಖ್ಯ ಸೈಟ್ **admin panel > Tools > Health Check** ಮೂಲಕ ಇದನ್ನು ಆಕ್ಸೆಸ್ ಮಾಡಬಹುದು) WordPress ನೊಂದಿಗೆ ಸಮಸ್ಯೆಗಳನ್ನು ಉಂಟುಮಾಡಬಹುದಾದ ಮೌಲ್ಯಗಳಿಗೆ ಫೋಲ್ಡರ್ ಪರ್ಮಿಷನ್‌ಗಳು ಸೆಟ್ ಆಗಿವೆಯೇ ಎಂದು ತಿಳಿಸುವ ಸಾಮರ್ಥ್ಯ ಹೊಂದಿದೆ.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
