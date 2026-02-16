---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite ಒಂದು WordPress Multisite ಪ್ಲಗಿನ್ ಆಗಿದ್ದು, ಗ್ರಾಹಕರಿಗೆ WaaS ಅಥವಾ Websites as a Service ಅನ್ನು ನೀಡಲು ನಿಮಗೆ ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ. Ultimate Multisite ನಿಮ್ಮ ವ್ಯಾಪಾರ ಮತ್ತು ಗ್ರಾಹಕರಿಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು ಎಂಬುದನ್ನು ಕಲಿಯುವ ಮೊದಲು, ನಾವು ಕೆಲವು ಮೂಲಭೂತ ಜ್ಞಾನವನ್ನು ಪಡೆದುಕೊಳ್ಳಬೇಕು.

## WordPress Multisite

ನಮ್ಮಲ್ಲಿ ಹೆಚ್ಚಿನವರಿಗೆ ಸಾಮಾನ್ಯ WordPress ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಪರಿಚಿತವಾಗಿದೆ. ನಿಮ್ಮ ಹೋಸ್ಟಿಂಗ್ ಪ್ರೊವೈಡರ್‌ನ ಕಂಟ್ರೋಲ್ ಪ್ಯಾನೆಲ್ ಮೂಲಕ ಅದನ್ನು ರಚಿಸಬಹುದು ಅಥವಾ, ಧೈರ್ಯಶಾಲಿಗಳಿಗೆ, ಹೊಸ ವೆಬ್ ಸರ್ವರ್ ಮತ್ತು ಡೇಟಾಬೇಸ್ ಅನ್ನು ಸೆಟ್ ಅಪ್ ಮಾಡಿ, ಕೋರ್ ಫೈಲ್‌ಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪ್ರಾರಂಭಿಸಬಹುದು.

ಇದು ಜಗತ್ತಿನಾದ್ಯಂತ ಲಕ್ಷಾಂತರ WordPress ಸೈಟ್‌ಗಳಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಆದರೆ ಏಜೆನ್ಸಿ ಅಥವಾ ಹೋಸ್ಟಿಂಗ್ ಪ್ರೊವೈಡರ್‌ನ ದೃಷ್ಟಿಕೋನದಿಂದ ಪ್ರಮಾಣದ ಬಗ್ಗೆ ಸ್ವಲ್ಪ ಚರ್ಚಿಸೋಣ.

ಆಟೋಮೇಟೆಡ್ ಕಂಟ್ರೋಲ್ ಪ್ಯಾನೆಲ್ ಮೂಲಕ ಒಂದು WordPress ಸೈಟ್ ಅಥವಾ ನೂರು ಸೈಟ್‌ಗಳನ್ನು ರಚಿಸುವುದು ಸುಲಭವಾದರೂ, ಈ ಸೈಟ್‌ಗಳ ನಿರ್ವಹಣೆಗೆ ಬಂದಾಗ ಸಮಸ್ಯೆಗಳು ಕಾಣಿಸಿಕೊಳ್ಳಲು ಪ್ರಾರಂಭಿಸುತ್ತವೆ. ನಿರ್ವಹಣೆಯಿಲ್ಲದೆ ಬಿಟ್ಟರೆ ನೀವು ಮಾಲ್‌ವೇರ್‌ಗೆ ಸುಲಭ ಗುರಿಯಾಗುತ್ತೀರಿ. ನಿರ್ವಹಣೆ ಎಂದರೆ ಪ್ರಯತ್ನ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳ ಅಗತ್ಯ, ಮತ್ತು WordPress ಸೈಟ್‌ಗಳ ನಿರ್ವಹಣೆ ಮತ್ತು ಆಡಳಿತವನ್ನು ಸುಗಮಗೊಳಿಸಲು ಬಾಹ್ಯ ಟೂಲ್‌ಗಳು ಮತ್ತು ಪ್ಲಗಿನ್‌ಗಳು ಲಭ್ಯವಿದ್ದರೂ, ಗ್ರಾಹಕರು ಆಡ್ಮಿನಿಸ್ಟ್ರೇಟಿವ್ ಆಕ್ಸೆಸ್ ಹೊಂದಿರುವುದರಿಂದ ಈ ಎಲ್ಲಾ ಪ್ರಯತ್ನಗಳು ಸುಲಭವಾಗಿ ವಿಫಲವಾಗಬಹುದು.

WordPress ತನ್ನ ಕೋರ್‌ನಲ್ಲಿ 'Multisite' ಎಂಬ ಫೀಚರ್ ಅನ್ನು ಒದಗಿಸುತ್ತದೆ, ಇದು 2010 ರಲ್ಲಿ WordPress 3.0 ಬಿಡುಗಡೆಯೊಂದಿಗೆ ಪ್ರಾರಂಭವಾಯಿತು. ಅಂದಿನಿಂದ ಹೊಸ ಫೀಚರ್‌ಗಳನ್ನು ಪರಿಚಯಿಸಲು ಮತ್ತು ಸುರಕ್ಷತೆಯನ್ನು ಬಿಗಿಗೊಳಿಸಲು ಹಲವಾರು ಪರಿಷ್ಕರಣೆಗಳನ್ನು ಪಡೆದಿದೆ.

ಮೂಲಭೂತವಾಗಿ, WordPress multisite ಅನ್ನು ಈ ರೀತಿ ಯೋಚಿಸಬಹುದು: ಒಂದು ವಿಶ್ವವಿದ್ಯಾಲಯ WordPress ನ ಏಕೈಕ ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಅನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ ಆದರೆ ಪ್ರತಿ ವಿಭಾಗವು ತನ್ನದೇ ಆದ WordPress ಸೈಟ್ ಅನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ.

ಈ ಹೇಳಿಕೆಯನ್ನು ವಿಭಜಿಸಲು Ultimate Multisite ನ ಡಾಕ್ಯುಮೆಂಟೇಶನ್‌ನಲ್ಲಿ ಮಾತ್ರವಲ್ಲದೆ WordPress ಸಮುದಾಯದಾದ್ಯಂತ ಇರುವ ಕೆಲವು ಮೂಲ ಪರಿಭಾಷೆಗಳನ್ನು ನೋಡೋಣ.

### ನೆಟ್‌ವರ್ಕ್

WordPress ನ ಪರಿಭಾಷೆಯಲ್ಲಿ, multisite network ಎಂದರೆ ಒಂದೇ dashboard ನಿಂದ ಹಲವಾರು subsites ಅನ್ನು ನಿರ್ವಹಿಸಬಹುದಾದ ಸ್ಥಳ. Multisite network ರಚಿಸುವುದು ಹೋಸ್ಟಿಂಗ್ ಪ್ರೊವೈಡರ್‌ಗಳ ನಡುವೆ ಭಿನ್ನವಾಗಿದ್ದರೂ, ಅಂತಿಮ ಫಲಿತಾಂಶವು ಸಾಮಾನ್ಯವಾಗಿ wp-config.php ಫೈಲ್‌ನಲ್ಲಿ ಕೆಲವು ಹೆಚ್ಚುವರಿ ನಿರ್ದೇಶನಗಳಾಗಿರುತ್ತವೆ, WordPress ಈ ನಿರ್ದಿಷ್ಟ ಮೋಡ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ ಎಂದು ತಿಳಿಸಲು.

Multisite network ಮತ್ತು ಸ್ವತಂತ್ರ WordPress ಇನ್‌ಸ್ಟಾಲೇಶನ್ ನಡುವೆ ಹಲವಾರು ವ್ಯತ್ಯಾಸಗಳಿವೆ, ಅವುಗಳನ್ನು ಸಂಕ್ಷಿಪ್ತವಾಗಿ ಚರ್ಚಿಸೋಣ.

#### Subdomain vs. Subdirectory

ನೀವು ತಕ್ಷಣ ತೆಗೆದುಕೊಳ್ಳಬೇಕಾದ ನಿರ್ಧಾರಗಳಲ್ಲಿ ಒಂದು ಎಂದರೆ multisite ಇನ್‌ಸ್ಟಾಲೇಶನ್ _subdirectories_ ಅಥವಾ _subdomains_ ನೊಂದಿಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸಬೇಕೇ ಎಂಬುದು. Ultimate Multisite ಎರಡೂ ಆಯ್ಕೆಗಳೊಂದಿಗೆ ಸಮಾನವಾಗಿ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಆದರೆ ಎರಡು ಕಾನ್ಫಿಗರೇಶನ್‌ಗಳ ನಡುವೆ ಕೆಲವು ಆರ್ಕಿಟೆಕ್ಚರಲ್ ವ್ಯತ್ಯಾಸಗಳಿವೆ.

_Subdirectory_ ಕಾನ್ಫಿಗರೇಶನ್‌ನಲ್ಲಿ, network sites ಮುಖ್ಯ ಡೊಮೈನ್ ಹೆಸರಿನ ಆಧಾರದ ಮೇಲೆ ಪಾಥ್ ಅನ್ನು ಪಡೆಯುತ್ತವೆ. ಉದಾಹರಣೆಗೆ 'site1' ಎಂದು ಹೆಸರಿಸಲಾದ network site ತನ್ನ ಪೂರ್ಣ URL ಅನ್ನು https://domain.com/site1 ಎಂದು ಹೊಂದಿರುತ್ತದೆ. _Subdomain_ ಕಾನ್ಫಿಗರೇಶನ್‌ನಲ್ಲಿ, network site ಮುಖ್ಯ ಡೊಮೈನ್ ಹೆಸರಿನಿಂದ ಪಡೆದ ತನ್ನದೇ ಆದ _subdomain_ ಅನ್ನು ಹೊಂದಿರುತ್ತದೆ. ಹೀಗಾಗಿ 'site1' ಎಂದು ಹೆಸರಿಸಲಾದ ಸೈಟ್ ತನ್ನ ಪೂರ್ಣ URL ಅನ್ನು https://site1.domain.com/ ಎಂದು ಹೊಂದಿರುತ್ತದೆ.

ಎರಡೂ ಆಯ್ಕೆಗಳು ಸಂಪೂರ್ಣವಾಗಿ ಮಾನ್ಯ ಆಯ್ಕೆಗಳಾಗಿದ್ದರೂ, _subdomains_ ಬಳಕೆಯು ಹಲವಾರು ಪ್ರಯೋಜನಗಳನ್ನು ನೀಡುತ್ತದೆ ಆದರೆ ಅದರ ಆರ್ಕಿಟೆಕ್ಚರ್‌ನಲ್ಲಿ ಹೆಚ್ಚಿನ ಚಿಂತನೆ ಮತ್ತು ಯೋಜನೆ ಅಗತ್ಯವಿರುತ್ತದೆ.

DNS ವಿಷಯದಲ್ಲಿ _subdirectories_ ಬಳಕೆಯು ತುಲನಾತ್ಮಕವಾಗಿ ಸರಳ ಸವಾಲನ್ನು ಒಡ್ಡುತ್ತದೆ. Network sites ಪೇರೆಂಟ್ ಪಾಥ್‌ನ ಮಕ್ಕಳಾಗಿರುವುದರಿಂದ, ಮುಖ್ಯ ಡೊಮೈನ್ ಹೆಸರಿಗೆ ಕೇವಲ ಒಂದು ಡೊಮೈನ್ ನೇಮ್ ಎಂಟ್ರಿ ಅಸ್ತಿತ್ವದಲ್ಲಿರಬೇಕು. _Subdomains_ ಗೆ ಸವಾಲು ಸ್ವಲ್ಪ ಹೆಚ್ಚು ಸಂಕೀರ್ಣವಾಗಿದ್ದು, ಪ್ರತಿ network site ಗೆ ಪ್ರತ್ಯೇಕ CNAME ಎಂಟ್ರಿ ಅಥವಾ DNS ರೆಕಾರ್ಡ್‌ಗಳಲ್ಲಿ wildcard (*) ಎಂಟ್ರಿ ಅಗತ್ಯವಿರುತ್ತದೆ.

ಮತ್ತೊಂದು ಪರಿಗಣನೆಯ ಕ್ಷೇತ್ರವೆಂದರೆ SSL ಮತ್ತು SSL ಸರ್ಟಿಫಿಕೇಟ್‌ಗಳ ನೀಡಿಕೆ ಮತ್ತು ಬಳಕೆ. _Subdirectory_ ಕಾನ್ಫಿಗರೇಶನ್‌ನಲ್ಲಿ ಒಂದೇ ಡೊಮೈನ್ ಸರ್ಟಿಫಿಕೇಟ್ ಅನ್ನು ಬಳಸಬಹುದು ಏಕೆಂದರೆ network sites ಮುಖ್ಯ ಡೊಮೈನ್ ಹೆಸರಿನ ಪಾಥ್‌ಗಳಾಗಿವೆ. ಹೀಗಾಗಿ domain.com ಗೆ ಸರ್ಟಿಫಿಕೇಟ್ https://domain.com/site1, https://domain.com/site2 ಮತ್ತು ಮುಂತಾದವುಗಳಿಗೆ SSL ಅನ್ನು ಸಮರ್ಪಕವಾಗಿ ಒದಗಿಸುತ್ತದೆ.

_Subdomain_ ಕಾನ್ಫಿಗರೇಶನ್‌ನಲ್ಲಿ wildcard SSL ಸರ್ಟಿಫಿಕೇಟ್ ಬಳಕೆಯು ಅತ್ಯಂತ ಸಾಮಾನ್ಯ ಆಯ್ಕೆಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಈ ರೀತಿಯ SSL ಸರ್ಟಿಫಿಕೇಟ್ ಡೊಮೈನ್ ಮತ್ತು ಅದರ _subdomains_ ಗೆ ಎನ್‌ಕ್ರಿಪ್ಷನ್ ಒದಗಿಸುತ್ತದೆ. ಆದ್ದರಿಂದ wildcard SSL ಸರ್ಟಿಫಿಕೇಟ್ https://site1.domain.com, https://site2.domain.com ಮತ್ತು https://domain.com ಗೆ ಸ್ವತಃ ಎನ್‌ಕ್ರಿಪ್ಷನ್ ಒದಗಿಸುತ್ತದೆ.

ಇತರ ಆಯ್ಕೆಗಳು ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದರೂ, ಅವು ಸಾಮಾನ್ಯವಾಗಿ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಅನ್ವಯದಲ್ಲಿ ಸೀಮಿತವಾಗಿವೆ ಮತ್ತು ಸೂಕ್ತತೆಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಹೆಚ್ಚುವರಿ ಕಾನ್ಫಿಗರೇಶನ್ ಮತ್ತು ಪರಿಗಣನೆ ಅಗತ್ಯವಿರುತ್ತದೆ.

#### Plugins ಮತ್ತು Themes

WordPress ಕೊಟ್ಟಿದ್ದನ್ನು ಹಿಂತಿರುಗಿಸಿ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಕನಿಷ್ಠ ಗ್ರಾಹಕರ ದೃಷ್ಟಿಕೋನದಿಂದ. ಸ್ವತಂತ್ರ WordPress ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ನಲ್ಲಿ ಸೈಟ್ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಟರ್ ಕೆಟ್ಟ ಪ್ಲಗಿನ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿದರೆ ಅಥವಾ ತಮ್ಮ ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಅನ್ನು ಅಪ್‌ಡೇಟ್ ಆಗಿ ಇಡಲು ವಿಫಲವಾದರೆ ಈ ಕೃತ್ಯದ ಏಕೈಕ ಬಲಿಪಶು ಅವರೇ ಆಗಿರುತ್ತಾರೆ. ಆದಾಗ್ಯೂ, multisite ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ನಲ್ಲಿ ಸೈಟ್ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಟರ್ ಕೆಟ್ಟ ಪ್ಲಗಿನ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿದರೆ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಇನ್‌ಸ್ಟಾಲ್ ಆಗಿರುವ ಪ್ರತಿಯೊಂದು ಸೈಟ್ ಬಲಿಪಶುವಾಗುತ್ತದೆ.

ಈ ಕಾರಣಕ್ಕಾಗಿ multisite ಆಗಿ ಕಾನ್ಫಿಗರ್ ಮಾಡಿದಾಗ WordPress ಸೈಟ್ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಟರ್‌ಗಳಿಂದ plugins ಮತ್ತು themes ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವ ಸಾಮರ್ಥ್ಯವನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ ಮತ್ತು ಬದಲಿಗೆ ಈ ಸಾಮರ್ಥ್ಯವನ್ನು ಹೊಸದಾಗಿ ರಚಿಸಲಾದ network administrator ಅಥವಾ 'super admin' ರೋಲ್‌ಗೆ ವರ್ಗಾಯಿಸುತ್ತದೆ. ಈ ವಿಶೇಷ ಸವಲತ್ತುಳ್ಳ ರೋಲ್ ನಂತರ network sites ನ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಟರ್‌ಗಳಿಗೆ ತಮ್ಮ dashboard ನಲ್ಲಿ plugins ಮೆನು ನೋಡಲು ಅಥವಾ ಆಕ್ಸೆಸ್ ಮಾಡಲು ಅನುಮತಿಸಬೇಕೇ ಮತ್ತು ಹಾಗಿದ್ದರೆ, ಅಂತಹ ಅನುಮತಿಗಳು plugins ಅನ್ನು _activating_ ಅಥವಾ _deactivating_ ಮಾಡುವುದಕ್ಕೆ ವಿಸ್ತರಿಸುತ್ತವೆಯೇ ಎಂದು ನಿರ್ಧರಿಸಬಹುದು.

ಈ ಮಟ್ಟಿಗೆ network administrator ನೆಟ್‌ವರ್ಕ್‌ಗೆ plugins ಮತ್ತು themes ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವ ಜವಾಬ್ದಾರಿಯನ್ನು ಹೊಂದಿದ್ದು, ಈ plugins ಮತ್ತು themes ಅನ್ನು ಬಳಸಲು network sites ಗೆ ಅನುಮತಿಗಳನ್ನು ನಿಯೋಜಿಸುತ್ತಾರೆ. ಸೈಟ್ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಟರ್‌ಗಳು plugins ಮತ್ತು themes ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಲು ಅಥವಾ ತಮ್ಮ ಸೈಟ್‌ಗೆ ನಿಯೋಜಿಸದ plugins ಮತ್ತು themes ಅನ್ನು ಆಕ್ಸೆಸ್ ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ.

#### Users ಮತ್ತು Administrators

WordPress Multisite ನಲ್ಲಿ, ಎಲ್ಲಾ network sites ಒಂದೇ database ಅನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ ಮತ್ತು ಆದ್ದರಿಂದ ಅದೇ users, roles ಮತ್ತು capabilities ಅನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ. ಇದನ್ನು ಯೋಚಿಸಲು ಅತ್ಯಂತ ಸೂಕ್ತ ವಿಧಾನವೆಂದರೆ ಎಲ್ಲಾ users ನೆಟ್‌ವರ್ಕ್‌ನ ಸದಸ್ಯರು ಮತ್ತು ನಿರ್ದಿಷ್ಟ ಸೈಟ್‌ನ ಅಲ್ಲ.

ಈ ತಿಳುವಳಿಕೆಯನ್ನು ಗಮನಿಸಿದರೆ users ರಚಿಸಲು ಅನುಮತಿಸುವುದು ಅನಪೇಕ್ಷಿತವಾಗಿರಬಹುದು ಮತ್ತು ಈ ಕಾರಣಕ್ಕಾಗಿ WordPress Multisite ಈ ಸಾಮರ್ಥ್ಯವನ್ನು ಸೈಟ್ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಟರ್‌ಗಳಿಂದ ತೆಗೆದುಹಾಕಿ network administrator ಗೆ ವರ್ಗಾಯಿಸುತ್ತದೆ. ಬದಲಿಗೆ network administrator ಸೈಟ್ ಅಡ್ಮಿನಿಸ್ಟ್ರೇಟರ್‌ಗೆ ತಮ್ಮ ಸ್ವಂತ ಸೈಟ್‌ಗಾಗಿ user accounts ರಚಿಸಲು ಅಗತ್ಯ ಸವಲತ್ತುಗಳನ್ನು ನಿಯೋಜಿಸಬಹುದು.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

ಮೇಲಿನ ಹೇಳಿಕೆಯನ್ನು ಪುನರುಚ್ಚರಿಸುತ್ತಾ, user accounts ಸೈಟ್‌ಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಕಾಣಿಸಿದರೂ ಅವು ವಾಸ್ತವವಾಗಿ ನೆಟ್‌ವರ್ಕ್‌ಗೆ ಹಂಚಿಕೆಯಾಗಿವೆ ಮತ್ತು ಆದ್ದರಿಂದ ನೆಟ್‌ವರ್ಕ್‌ನಾದ್ಯಂತ ಅನನ್ಯವಾಗಿರಬೇಕು. ಈ ಕಾರಣದಿಂದ usernames ನೋಂದಾಯಿಸಲು ಲಭ್ಯವಿಲ್ಲದಿರುವ ಸಂದರ್ಭಗಳು ಇರಬಹುದು.

ಎಂಟರ್‌ಪ್ರೈಸ್ ಸಿಸ್ಟಮ್‌ಗಳಲ್ಲಿ ಇದು ಹೊಸ ಪರಿಕಲ್ಪನೆಯಲ್ಲದಿದ್ದರೂ, user registration ಮತ್ತು authentication ನ ಈ ಏಕ ಮೂಲವು ಸ್ವತಂತ್ರ WordPress ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ಗಳಿಗೆ ಪರಿಚಿತ ಜನರಿಗೆ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಕಷ್ಟಕರವಾದ ಪರಿಕಲ್ಪನೆಯಾಗಿದೆ, ಅಲ್ಲಿ user administration ಸ್ವಲ್ಪ ಸುಲಭವಾಗಿದೆ.

#### Media

WordPress Multisite ನಲ್ಲಿ network sites ಒಂದೇ database ಅನ್ನು ಹಂಚಿಕೊಂಡರೂ, ಅವು media files ಗಾಗಿ filesystem ನಲ್ಲಿ ಪ್ರತ್ಯೇಕ paths ಅನ್ನು ನಿರ್ವಹಿಸುತ್ತವೆ.

ಸ್ಟ್ಯಾಂಡರ್ಡ್ WordPress ಸ್ಥಳ (wp-content/uploads) ಉಳಿಯುತ್ತದೆ; ಆದಾಗ್ಯೂ, network site ನ ಅನನ್ಯ ID ಯನ್ನು ಪ್ರತಿಬಿಂಬಿಸಲು ಅದರ path ಅನ್ನು ಬದಲಾಯಿಸಲಾಗುತ್ತದೆ. ಆದ್ದರಿಂದ network site ಗಾಗಿ media files wp-contents/uploads/site/[id] ಆಗಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ.

#### Permalinks

_Subdirectory_ ಮೇಲೆ _subdomain_ ಕಾನ್ಫಿಗರೇಶನ್‌ನ ವಿಶಿಷ್ಟ ಪ್ರಯೋಜನಗಳಿವೆ ಎಂದು ನಾವು ಮೊದಲೇ ಹೇಳಿದ್ದೇವೆ ಮತ್ತು ಇಲ್ಲಿ ಅದಿದೆ: paths.

_Subdirectory_ ಕಾನ್ಫಿಗರೇಶನ್‌ನಲ್ಲಿ, ಮುಖ್ಯ ಸೈಟ್ (ನೆಟ್‌ವರ್ಕ್ ಸ್ಥಾಪಿಸಿದಾಗ ರಚಿಸಲಾದ ಮೊದಲ ಸೈಟ್) ಮತ್ತು network subsites ಡೊಮೈನ್ ಹೆಸರಿನಿಂದ ಮುಂದುವರಿಯುವ ಅದೇ path ಅನ್ನು ಹಂಚಿಕೊಳ್ಳಬೇಕು. ಇದು ಹೆಚ್ಚಿನ ಸಂಖ್ಯೆಯ conflicts ಗೆ ಸಾಧ್ಯತೆ ಹೊಂದಿದೆ.

Posts ಗಾಗಿ, network sites ನೊಂದಿಗೆ clashes ತಡೆಯಲು ಮುಖ್ಯ ಸೈಟ್‌ಗೆ ಕಡ್ಡಾಯ /blog/ path ಸೇರಿಸಲಾಗುತ್ತದೆ. ಇದರರ್ಥ 'Post name' ನಂತಹ pretty permalinks domain.name/blog/post-name/ ಆಗಿ ಪ್ರಸ್ತುತಪಡಿಸಲಾಗುತ್ತದೆ.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

_Subdomain_ ಕಾನ್ಫಿಗರೇಶನ್‌ನಲ್ಲಿ ಈ ಕ್ರಮ ಅಗತ್ಯವಿಲ್ಲ ಏಕೆಂದರೆ ಪ್ರತಿ network site ಸಂಪೂರ್ಣ domain separation ನಿಂದ ಲಾಭ ಪಡೆಯುತ್ತದೆ ಮತ್ತು ಹೀಗಾಗಿ ಒಂದೇ path ಮೇಲೆ ಅವಲಂಬಿಸಬೇಕಾಗಿಲ್ಲ. ಅವು ಬದಲಿಗೆ ತಮ್ಮ _subdomain_ ಆಧಾರದ ಮೇಲೆ ತಮ್ಮದೇ ಆದ ಪ್ರತ್ಯೇಕ paths ಅನ್ನು ನಿರ್ವಹಿಸುತ್ತವೆ.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages

_Subdirectory_ ಕಾನ್ಫಿಗರೇಶನ್‌ನಲ್ಲಿ ಮುಖ್ಯ ಸೈಟ್ ಮತ್ತು network sites ಒಂದೇ path ಹಂಚಿಕೊಳ್ಳುವುದರಿಂದ naming conflicts ಗೆ ಸಾಧ್ಯತೆ static pages ಗೆ ವಿಸ್ತರಿಸುತ್ತದೆ.

ಇದನ್ನು ತಡೆಯಲು, WordPress ಕೆಲವು site names ಅನ್ನು blacklist ಮಾಡಲು ಒಂದು ಮಾರ್ಗವನ್ನು ಒದಗಿಸುತ್ತದೆ ಇದರಿಂದ ಅವು ಮೊದಲ ಸೈಟ್‌ನ ಹೆಸರುಗಳೊಂದಿಗೆ conflict ಆಗುವುದಿಲ್ಲ. ಸಾಮಾನ್ಯವಾಗಿ network administrator ಮುಖ್ಯ ಸೈಟ್‌ನ pages ನ root paths ಅನ್ನು ನಮೂದಿಸುತ್ತಾರೆ.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

_Subdomain_ ಕಾನ್ಫಿಗರೇಶನ್‌ನಲ್ಲಿ naming conflicts ನ ಸಾಧ್ಯತೆಗಳು _subdomain_ ನಿಂದ ತಗ್ಗಿಸಲ್ಪಡುತ್ತವೆ ಏಕೆಂದರೆ ಅದು network site ಗೆ ಅನನ್ಯವಾಗಿದೆ ಮತ್ತು ಮುಖ್ಯ ಸೈಟ್‌ಗೆ ಯಾವುದೇ ರೀತಿಯಲ್ಲಿ ಸಂಬಂಧಿಸಿಲ್ಲ.

### Registration

WordPress Multisite ನ network settings ನಲ್ಲಿ ಹಲವಾರು ಹೊಸ user registration ಆಯ್ಕೆಗಳು ಲಭ್ಯವಿವೆ, ಹೊಸ ಮತ್ತು ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ users ಗೆ sites ರಚಿಸಲು ಅನುಮತಿಸುತ್ತವೆ.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

ಸ್ವತಂತ್ರ WordPress ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ಗಳಿಗೆ ವಿರುದ್ಧವಾಗಿ, network sites user registrations ಗೆ ಅನುಮತಿಸಲು ಅಥವಾ ಆ registrations ಅನ್ನು roles ಗೆ ನಿಯೋಜಿಸಲು ಪರಿಚಿತ ಆಯ್ಕೆಗಳನ್ನು ನಿರ್ವಹಿಸುವುದಿಲ್ಲ.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

User accounts ರಚಿಸಿದಾಗ ಆ accounts network ಮಟ್ಟದಲ್ಲಿ ಉತ್ಪತ್ತಿಯಾಗುತ್ತವೆ. ಹೀಗಾಗಿ ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಸೈಟ್‌ಗೆ ಸೇರುವ ಬದಲು ಅವು ನೆಟ್‌ವರ್ಕ್‌ಗೆ ಸೇರುತ್ತವೆ. ಇದು ಕೆಲವು ವಿಶಿಷ್ಟ ಪ್ರಯೋಜನಗಳು ಮತ್ತು ಅನಾನುಕೂಲತೆಗಳನ್ನು ಹೊಂದಿದೆ.

ಉದಾಹರಣೆಗೆ, ನಿಮ್ಮ WordPress Multisite ಸುದ್ದಿ ಮತ್ತು ಮಾಹಿತಿ ವ್ಯವಹಾರದಲ್ಲಿದೆ ಎಂದು ಊಹಿಸಿ. ನೀವು multisite ಅನ್ನು ಸ್ಥಾಪಿಸುತ್ತೀರಿ ಮತ್ತು ನಂತರ plugins ಮತ್ತು themes ಮೇಲೆ ಒಟ್ಟಾರೆ ನಿಯಂತ್ರಣವನ್ನು ನಿರ್ವಹಿಸುತ್ತಾ ಹಣಕಾಸು, ತಂತ್ರಜ್ಞಾನ, ಮನರಂಜನೆ ಮತ್ತು ಇತರ ಆಸಕ್ತಿಯ ಕ್ಷೇತ್ರಗಳಿಗಾಗಿ network sites ರಚಿಸುತ್ತೀರಿ. ಪ್ರತಿ network site custom post types ಅಥವಾ regular post categories ಗಿಂತ ತಮ್ಮ network site ನ ನೋಟ ಮತ್ತು ಅನುಭವ ಮತ್ತು user experience ಮೇಲೆ ಹೆಚ್ಚಿನ ಮಟ್ಟದ ನಿಯಂತ್ರಣವನ್ನು ಹೊಂದಿರುತ್ತದೆ.

ಈ ಮಟ್ಟಿಗೆ user ಲಾಗ್ ಇನ್ ಆದಾಗ ಅವರು ನೆಟ್‌ವರ್ಕ್‌ಗೆ ಲಾಗ್ ಇನ್ ಆಗುತ್ತಾರೆ ಮತ್ತು ಅಂತಿಮವಾಗಿ ಪ್ರತಿ network site ಗೂ ಲಾಗ್ ಇನ್ ಆಗಿ ಸುಗಮ ಅನುಭವವನ್ನು ಒದಗಿಸುತ್ತಾರೆ. ನಿಮ್ಮ ಹೊಸ ಸೈಟ್ subscription ಆಧಾರಿತವಾಗಿದ್ದರೆ ಇದು ಆದರ್ಶ ಪರಿಹಾರ ಮತ್ತು ಫಲಿತಾಂಶವಾಗಿರುತ್ತದೆ.

ಆದಾಗ್ಯೂ, multisite ನ ಉದ್ದೇಶಿತ ಸ್ವಭಾವ ಮತ್ತು ಉದ್ದೇಶವು ಪರಸ್ಪರ ಸಂಬಂಧವಿಲ್ಲದ ವಿಭಿನ್ನ network sites ಅನ್ನು ನೀಡುವುದಾಗಿದ್ದರೆ, user roles ಅನ್ನು ಬದಲಾಯಿಸಲು ಬಾಹ್ಯ ಅಥವಾ ಹೆಚ್ಚುವರಿ plugins ಅಗತ್ಯವಿರುವುದು ಬಹುತೇಕ ಯಾವಾಗಲೂ ಪ್ರಕರಣವಾಗಿದೆ.

### Domain ಮತ್ತು SSL

ನಮ್ಮ ಗಮನವನ್ನು ಬಹುತೇಕ ತಪ್ಪಿಸುವ WordPress Multisite ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಬಗ್ಗೆ ಮಾತನಾಡೋಣ - Wordpress.com. ಇದು WordPress multisite ನ ಅತ್ಯಂತ ವ್ಯಾಪಕ ಉದಾಹರಣೆಯಾಗಿದೆ ಮತ್ತು ಉದ್ದೇಶವನ್ನು ಪೂರೈಸಲು ಕಸ್ಟಮೈಜ್ ಮಾಡಲು ಮತ್ತು ರೂಪಿಸಲು ಅದರ ವ್ಯಾಪಕ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.

ಈ ದಿನಗಳಲ್ಲಿ ಆಧುನಿಕ ಇಂಟರ್ನೆಟ್‌ನಲ್ಲಿ SSL ಬಳಕೆಯು ಬಹುತೇಕ ಕಡ್ಡಾಯವಾಗಿದೆ ಮತ್ತು WordPress multisites ನ network administrators ಶೀಘ್ರದಲ್ಲೇ ಈ ಸವಾಲುಗಳನ್ನು ಎದುರಿಸುತ್ತಾರೆ.

_Subdomain_ ಕಾನ್ಫಿಗರೇಶನ್‌ನಲ್ಲಿ sites ಮೂಲ domain name ಆಧಾರದ ಮೇಲೆ ರಚಿಸಲ್ಪಡುತ್ತವೆ. ಹೀಗಾಗಿ 'site1' ಎಂದು ಹೆಸರಿಸಲಾದ ಸೈಟ್ 'site1.domain.com' ಆಗಿ ರಚಿಸಲ್ಪಡುತ್ತದೆ. Wildcard SSL certificate ಬಳಸಿ, network administrator ಈ ಸವಾಲನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪರಿಹರಿಸಬಹುದು ಮತ್ತು ನೆಟ್‌ವರ್ಕ್‌ಗೆ SSL encryption ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಒದಗಿಸಬಹುದು.

WordPress Multisite domain mapping ಕಾರ್ಯವನ್ನು ಹೊಂದಿದೆ, ಇದು network sites ಅನ್ನು custom domain names ಅಥವಾ ನೆಟ್‌ವರ್ಕ್‌ನ root domain ನಿಂದ ಭಿನ್ನವಾದ domain names ನೊಂದಿಗೆ ಸಂಯೋಜಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.

Network administrators ಗೆ ಇದು domain name configuration ಮತ್ತು SSL certificates ನ ನೀಡಿಕೆ ಮತ್ತು ನಿರ್ವಹಣೆ ಎರಡರಲ್ಲೂ ಹೆಚ್ಚುವರಿ ಸಂಕೀರ್ಣತೆಯ ಪದರವನ್ನು ಪ್ರಸ್ತುತಪಡಿಸುತ್ತದೆ.

ಈ ಮಟ್ಟಿಗೆ WordPress Multisite [www.anotherdomain.com](http://www.anotherdomain.com) ಅನ್ನು 'site1' ಗೆ map ಮಾಡಲು ಒಂದು ಮಾರ್ಗವನ್ನು ಒದಗಿಸಿದರೂ, network administrator DNS entries ಮತ್ತು SSL certificates ನ implementation ಅನ್ನು ಬಾಹ್ಯವಾಗಿ ನಿರ್ವಹಿಸುವ ಸವಾಲನ್ನು ಎದುರಿಸುತ್ತಾರೆ.

## Ultimate Multisite

ಸ್ವತಂತ್ರ WordPress ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಮತ್ತು Multisite ಇನ್‌ಸ್ಟಾಲೇಶನ್ ನಡುವಿನ ವ್ಯತ್ಯಾಸಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡ ನಂತರ, Websites as a Service ಒದಗಿಸಲು Ultimate Multisite ಹೇಗೆ ಅಂತಿಮ ಶಸ್ತ್ರಾಗಾರವಾಗಿದೆ ಎಂದು ನೋಡೋಣ.

### ಪರಿಚಯ

Website as a Service (WaaS) ರಚಿಸಲು Ultimate Multisite ನಿಮ್ಮ Swiss Army knife ಆಗಿದೆ. Wix.com, Squarespace, WordPress.com ಬಗ್ಗೆ ಯೋಚಿಸಿ ಮತ್ತು ನಂತರ ನಿಮ್ಮ ಸ್ವಂತ ಸೇವೆಯನ್ನು ಹೊಂದುವ ಬಗ್ಗೆ ಯೋಚಿಸಿ.

ಒಳಗಿನಿಂದ Ultimate Multisite WordPress Multisite ಅನ್ನು ಬಳಸುತ್ತದೆ ಆದರೆ ಅದು ಹಾಗೆ ಮಾಡುವ ರೀತಿಯು network administrators multisite installations ನೊಂದಿಗೆ ಎದುರಿಸುವ ಅಸಂಖ್ಯಾತ ಸವಾಲುಗಳನ್ನು ಪರಿಹರಿಸುವುದಷ್ಟೇ ಅಲ್ಲದೆ ವಿವಿಧ use cases ಅನ್ನು ಬೆಂಬಲಿಸಲು ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.

ಮುಂದಿನ ವಿಭಾಗಗಳಲ್ಲಿ ಕೆಲವು ಸಾಮಾನ್ಯ use cases ಮತ್ತು ಆ cases ಅನ್ನು ಬೆಂಬಲಿಸಲು ಅಗತ್ಯವಾದ ಪರಿಗಣನೆಗಳನ್ನು ನೋಡೋಣ.

### Use Cases

#### Case 1: ಒಂದು Agency

ಸಾಮಾನ್ಯವಾಗಿ agency ಯ ಮೂಲ ಕೌಶಲ್ಯಗಳು websites ನ ವಿನ್ಯಾಸದಲ್ಲಿವೆ, ಅವುಗಳ hosting ಅಥವಾ marketing ನಂತಹ ಅಂಶಗಳು ಹೆಚ್ಚುವರಿ ಸೇವೆಗಳಾಗಿ ಪಟ್ಟಿಮಾಡಲ್ಪಡುತ್ತವೆ.

Agencies ಗೆ Ultimate Multisite ಒಂದೇ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ನಲ್ಲಿ ಅನೇಕ websites ಅನ್ನು host ಮತ್ತು manage ಮಾಡುವ ಸಾಮರ್ಥ್ಯಗಳಲ್ಲಿ ಅದ್ಭುತ ಮೌಲ್ಯ ಪ್ರತಿಪಾದನೆಯನ್ನು ಪ್ರಸ್ತುತಪಡಿಸುತ್ತದೆ. GeneratePress, Astra, OceanWP ಅಥವಾ ಇತರ ನಿರ್ದಿಷ್ಟ themes ನಲ್ಲಿ ತಮ್ಮ ವಿನ್ಯಾಸಗಳನ್ನು ಪ್ರಮಾಣೀಕರಿಸುವ agencies ಗೆ ಇನ್ನೂ ಹೆಚ್ಚು, ಪ್ರತಿ ಹೊಸ ಸೈಟ್‌ಗೆ ಈ themes ಅನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ activate ಮಾಡಲು Ultimate Multisite ನ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಬಳಸಿಕೊಳ್ಳಬಹುದು.

ಅಂತೆಯೇ ಸಾಮಾನ್ಯ ಮತ್ತು ಜನಪ್ರಿಯ plugins ಗೆ agency pricing ಗಾಗಿ ಹಲವಾರು deals ಇರುವುದರಿಂದ, Ultimate Multisite ಬಳಕೆಯು agencies ಗೆ plugins ಇನ್‌ಸ್ಟಾಲ್, ನಿರ್ವಹಣೆ ಮತ್ತು ಬಳಸಬಹುದಾದ ಸಾಮಾನ್ಯ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಒದಗಿಸುವ ಮೂಲಕ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಹೂಡಿಕೆಗಳನ್ನು ಬಳಸಿಕೊಳ್ಳಲು ಅನುಮತಿಸುತ್ತದೆ.

ಹೆಚ್ಚಾಗಿ domain mapping ಮತ್ತು SSL certificates ಗಾಗಿ ಕಾನ್ಫಿಗರೇಶನ್ ಬಯಸಲಾಗುತ್ತದೆ ಮತ್ತು ಸೌಭಾಗ್ಯವಶಾತ್ Ultimate Multisite ಹಲವಾರು ಜನಪ್ರಿಯ hosting providers ಮತ್ತು Cloudflare ಮತ್ತು cPanel ನಂತಹ ಸೇವೆಗಳೊಂದಿಗೆ ಅದರ integrations ನೊಂದಿಗೆ ಇದನ್ನು ಸುಲಭಗೊಳಿಸಲು ಅದ್ಭುತವಾಗಿ ಸುಲಭವಾಗಿಸುತ್ತದೆ.

ಹೀಗಾಗಿ ಈ providers ಲ್ಲಿ ಒಂದನ್ನು ಬಳಸಿಕೊಳ್ಳುವ ಮೂಲಕ ಅಥವಾ Ultimate Multisite ಅನ್ನು Cloudflare ಹಿಂದೆ ಇರಿಸುವ ಮೂಲಕ domains ಮತ್ತು SSL certificates ನಿರ್ವಹಣೆಯಂತಹ ಅಂಶಗಳು ಸ್ವಲ್ಪ ಮಟ್ಟಿಗೆ ಸಾಮಾನ್ಯವಾಗುತ್ತವೆ.

Sites ರಚನೆಯ ಮೇಲೆ ಬಿಗಿ ನಿಯಂತ್ರಣವನ್ನು ಇಷ್ಟಪಡುವ agencies Ultimate Multisite ನ ಸುಗಮ interface ಮೂಲಕ sites ರಚಿಸುವ ಮತ್ತು customers ಮತ್ತು plans ನೊಂದಿಗೆ sites ಸಂಯೋಜಿಸುವ ಸುಲಭತೆಯನ್ನು ಮೆಚ್ಚುತ್ತಾರೆ.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Plugins ಮತ್ತು themes ಮೇಲೆ ಬಿಗಿ ನಿಯಂತ್ರಣ Ultimate Multisite ನ ಅರ್ಥಗರ್ಭಿತ interfaces ಮೂಲಕ per-product ಆಧಾರದ ಮೇಲೆ ನಿರ್ವಹಿಸಲಾಗುತ್ತದೆ, plugins ಮತ್ತು themes ಅನ್ನು ಲಭ್ಯವಾಗಿಸಲು ಅಥವಾ ಮರೆಮಾಡಲು ಮತ್ತು ಹೊಸ ಸೈಟ್‌ಗೆ instantiate ಆದಾಗ ಅವುಗಳ activation ಸ್ಥಿತಿಯನ್ನು ಅನುಮತಿಸುತ್ತದೆ.

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes ಅಂತಹ ಕಾರ್ಯಚಟುವಟಿಕೆಯನ್ನು ಒದಗಿಸುತ್ತವೆ, ಸೈಟ್ ರಚನೆಯಲ್ಲಿ ನಿರ್ದಿಷ್ಟ themes ಅನ್ನು activate ಅಥವಾ ಮರೆಮಾಡಲು ಅನುಮತಿಸುತ್ತವೆ.

![Product theme limitations interface](/img/config/product-themes.png)

Agencies Ultimate Multisite ನೊಂದಿಗೆ ಮನಸ್ಸಿನ ಶಾಂತಿಯನ್ನು ಕಂಡುಕೊಳ್ಳುತ್ತವೆ, ಅವರು ಉತ್ತಮವಾಗಿ ಮಾಡುವುದನ್ನು ಮಾಡಲು ಅನುಮತಿಸುತ್ತವೆ - ಅಸಾಧಾರಣ web sites ವಿನ್ಯಾಸ ಮಾಡುವುದು.

#### Case 2: Niche Provider

"ಒಂದು ವಿಷಯವನ್ನು ಮಾಡಿ ಮತ್ತು ಅದನ್ನು ಚೆನ್ನಾಗಿ ಮಾಡಿ" ಎಂಬ ಹಳೆಯ ಮಾತಿದೆ. ಅನೇಕ ತಜ್ಞರಿಗೆ ಇದರ ಅರ್ಥ ಒಂದೇ ಮೂಲ ಕಲ್ಪನೆಯ ಸುತ್ತ ಉತ್ಪನ್ನ ಅಥವಾ ಸೇವೆಯನ್ನು ರಚಿಸುವುದು.

ಬಹುಶಃ ನೀವು ಕ್ಲಬ್‌ಗಳಿಗೆ websites ಪ್ರಚಾರ ಮಾಡುವ ಉತ್ಸಾಹಿ ಗಾಲ್ಫ್ ಆಟಗಾರರಾಗಿರಬಹುದು ಅಥವಾ ನೀವು clans ಗೆ websites ಒದಗಿಸುವ ಉತ್ಸಾಹಿ esports gamer ಆಗಿರಬಹುದು. ರೆಸ್ಟೋರೆಂಟ್‌ಗಳಿಗೆ booking ಸೇವೆಯನ್ನು ಪ್ರಚಾರ ಮಾಡುವ ವ್ಯಕ್ತಿಯೇ?

ಅನೇಕ ಕಾರಣಗಳಿಗಾಗಿ ನೀವು ಸಾಮಾನ್ಯ framework ಮತ್ತು platform ಆಧಾರದ ಮೇಲೆ ಸೇವೆಗಳನ್ನು ಒದಗಿಸಲು ಬಯಸುತ್ತೀರಿ. ಅಗತ್ಯವಾದ ಕಾರ್ಯಚಟುವಟಿಕೆಯನ್ನು ಒದಗಿಸಲು ನೀವು ವಿಶೇಷ plugins ಅನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಿ ಅಥವಾ ಹೂಡಿಕೆ ಮಾಡಿರಬಹುದು ಅಥವಾ ಉದ್ಯಮದ ಅತ್ಯುತ್ತಮ ಅಭ್ಯಾಸಗಳು ವಿನ್ಯಾಸಕ್ಕೆ ಕೆಲವು ರೀತಿಯ ಪ್ರಮಾಣೀಕೃತ ವಿಧಾನದ ಅಗತ್ಯವಿರಬಹುದು.

Ultimate Multisite ನ ನವೀನ ಫೀಚರ್‌ಗಳಲ್ಲಿ ಒಂದು template sites ಬಳಕೆಯಾಗಿದೆ. Template site ಎಂದರೆ theme ಇನ್‌ಸ್ಟಾಲ್ ಮತ್ತು activate ಆಗಿರುವ, ಅಗತ್ಯ plugins ಇನ್‌ಸ್ಟಾಲ್ ಮತ್ತು activate ಆಗಿರುವ ಮತ್ತು sample posts ಅಥವಾ pages ರಚಿಸಲಾದ ಸೈಟ್. ಗ್ರಾಹಕರು template ಆಧಾರದ ಮೇಲೆ ಹೊಸ ಸೈಟ್ ರಚಿಸಿದಾಗ, template ನ ವಿಷಯಗಳು ಮತ್ತು settings ಹೊಸದಾಗಿ ರಚಿಸಲಾದ ಸೈಟ್‌ಗೆ ನಕಲು ಮಾಡಲಾಗುತ್ತದೆ.

Niche sites ಮತ್ತು ಸೇವೆಗಳ provider ಗೆ ಇದು custom plugins ಮತ್ತು ವಿನ್ಯಾಸದೊಂದಿಗೆ ಹೋಗಲು ಸಿದ್ಧವಾದ ಸೈಟ್ ಅನ್ನು ತಕ್ಷಣ ರಚಿಸುವ ಸಾಮರ್ಥ್ಯದಲ್ಲಿ ಅಸಮಾನ ಪ್ರಯೋಜನವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಗ್ರಾಹಕರು ಸೇವೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಕನಿಷ್ಠ ಇನ್‌ಪುಟ್ ಮಾತ್ರ ಒದಗಿಸಬೇಕಾಗುತ್ತದೆ.

ಅಗತ್ಯತೆಗಳನ್ನು ಅವಲಂಬಿಸಿ _subdirectory_ ಅಥವಾ _subdomain_ ಕಾನ್ಫಿಗರೇಶನ್‌ಗಳು ಸೂಕ್ತವಾಗಬಹುದು, ಅಂತಹ ಸಂದರ್ಭದಲ್ಲಿ architecture ಆಯ್ಕೆಗಳು _subdirectories_ ಗೆ ಸರಳ SSL certificate ಅಥವಾ _subdomains_ ಗೆ wildcard SSL certificate ನಡುವೆ ಇರುತ್ತವೆ.

#### Case 3: WordPress Web Hosting

WordPress sites ಅನ್ನು host ಮಾಡಲು ಅಸಂಖ್ಯಾತ ಮಾರ್ಗಗಳಿವೆ ಆದರೆ ಇದು ಮೊದಲೇ ಇನ್‌ಸ್ಟಾಲ್ ಆಗಿರುವ WordPress ಆವೃತ್ತಿಯೊಂದಿಗೆ ಗ್ರಾಹಕರಿಗೆ web space ಒದಗಿಸುವಷ್ಟು ಸರಳವಾಗಿರುವುದು ಅಪರೂಪ. ಏಕೆಂದರೆ ಅರ್ಥಪೂರ್ಣ ಸೇವೆಯನ್ನು ಒದಗಿಸಲು ಹಲವಾರು ನಿರ್ಧಾರಗಳು ಮತ್ತು ಪರಿಗಣನೆಗಳು ಒಟ್ಟಾಗಿ ಬರಬೇಕು.

WordPress sites ನ hosting ಗೆ ಸಮಗ್ರ turnkey ಪರಿಹಾರವನ್ನು ಒದಗಿಸುವ ಮೂಲಕ Ultimate Multisite ಈ ಕ್ಷೇತ್ರದಲ್ಲಿ ಮುಂಚೂಣಿಯಲ್ಲಿದೆ. ಪರಿಹಾರದಲ್ಲಿ subscription services, payment collection, checkout forms, discount vouchers ಮತ್ತು customer communications ಒದಗಿಸಲು ಮೂಲ ಕಾರ್ಯವಿಧಾನಗಳನ್ನು ಸೇರಿಸಲಾಗಿದೆ.

WordPress Multisite ಅನ್ನು ಸರಿಯಾಗಿ ಇನ್‌ಸ್ಟಾಲ್, ಕಾನ್ಫಿಗರ್ ಮತ್ತು ನಿರ್ವಹಿಸಲು ಅಗತ್ಯವಾದ ಹೆಚ್ಚಿನ ಅಗತ್ಯ ಕೆಲಸವನ್ನು Ultimate Multisite ಸುಗಮಗೊಳಿಸುತ್ತದೆ, ಇದರಿಂದ network administrators product tiers, pricing ಮತ್ತು service offers ನಂತಹ ತಮ್ಮ ಸೇವೆ ಅಥವಾ niche ಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಅಂಶಗಳನ್ನು ಮಾತ್ರ ಪರಿಗಣಿಸಬೇಕಾಗುತ್ತದೆ.

Ultimate Multisite ನೊಂದಿಗೆ integrate ಮಾಡಲು ಬಯಸುವ developers ಗೆ, ಪರಿಹಾರವು event notification ಗಾಗಿ ಸಮಗ್ರ RESTful API ಮತ್ತು Webhooks ಅನ್ನೂ ನೀಡುತ್ತದೆ.

ಅಸಂಖ್ಯಾತ ಬಾಹ್ಯ plugins ಮತ್ತು licenses ಮೇಲೆ ಅವಲಂಬಿಸದೆ, Ultimate Multisite Wix, Squarespace, WordPress.com ಮತ್ತು ಇತರರಿಗೆ ಹೋಲಿಸಬಹುದಾದ ಫೀಚರ್-ರಿಚ್ ಪರಿಹಾರವನ್ನು ಒದಗಿಸುತ್ತದೆ.

### Architecture ಪರಿಗಣನೆಗಳು

ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶಿಯಲ್ಲದಿದ್ದರೂ, ಕೆಳಗಿನ ಅಂಶಗಳು Ultimate Multisite ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಅನ್ನು ಬೆಂಬಲಿಸಲು ತಂತ್ರಜ್ಞಾನಗಳ ಸರಿಯಾದ ಆಯ್ಕೆಗೆ ಮಾರ್ಗದರ್ಶನವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಬೇಕು.

#### Shared vs. Dedicated Hosting

ದುರದೃಷ್ಟವಶಾತ್ ಎಲ್ಲಾ hosting providers ಸಮಾನವಾಗಿಲ್ಲ ಮತ್ತು ಕೆಲವರು ತೀವ್ರ server densities ಅನ್ನು ಅಭ್ಯಾಸ ಮಾಡುತ್ತಾರೆ. ಕಡಿಮೆ ವೆಚ್ಚದ providers ಸಾಮಾನ್ಯವಾಗಿ server density ಅನ್ನು ಗರಿಷ್ಠಗೊಳಿಸುವ ಮೂಲಕ ಆದಾಯವನ್ನು ಗಳಿಸುತ್ತಾರೆ. ಹಾಗಾಗಿ ನಿಮ್ಮ Ultimate Multisite ಇನ್‌ಸ್ಟಾಲೇಶನ್ ಅದೇ server ನಲ್ಲಿ ಹಲವಾರು ನೂರು sites ಲ್ಲಿ ಒಂದಾಗಿರಬಹುದು.

Provider ಯಿಂದ ಸೂಕ್ತ ರಕ್ಷಣೆಗಳು ಇಲ್ಲದಿದ್ದರೆ, shared server ನಲ್ಲಿರುವ sites 'noisy neighbour' ಸಮಸ್ಯೆಯನ್ನು ಅನುಭವಿಸುತ್ತವೆ. ಅಂದರೆ, ಅದೇ server ನಲ್ಲಿರುವ ಸೈಟ್ ಎಷ್ಟು ಸಂಪನ್ಮೂಲಗಳನ್ನು ಬಳಸುತ್ತದೆ ಎಂದರೆ ಇತರ sites ಉಳಿದ ಸಂಪನ್ಮೂಲಗಳಿಗಾಗಿ ಸ್ಪರ್ಧಿಸಬೇಕಾಗುತ್ತದೆ. ಇದು ಸಾಮಾನ್ಯವಾಗಿ ನಿಧಾನವಾಗಿರುವ ಅಥವಾ ಸಮಯೋಚಿತವಾಗಿ ಪ್ರತಿಕ್ರಿಯಿಸಲು ವಿಫಲವಾಗುವ sites ಆಗಿ ಪ್ರಸ್ತುತಪಡಿಸುತ್ತದೆ.

ನೀವೇ web hosting ನ provider ಆಗಿ ಹರಿವಿನ ಪರಿಣಾಮಗಳು ಎಂದರೆ ನಿಮ್ಮ ಗ್ರಾಹಕರು ಕಳಪೆ ವೇಗ, ಕಡಿಮೆ page rank ಮತ್ತು ಹೆಚ್ಚಿನ bounce rates ಅನ್ನು ಅನುಭವಿಸುತ್ತಾರೆ, ಇದು ಸಾಮಾನ್ಯವಾಗಿ ಅವರು ಬೇರೆಡೆ ಸೇವೆಗಳನ್ನು ಹುಡುಕುತ್ತಿರುವಾಗ customer churn ಗೆ ಕಾರಣವಾಗುತ್ತದೆ.

ಸಂಕ್ಷಿಪ್ತವಾಗಿ, ಅಗ್ಗ ಎಂದರೆ ಒಳ್ಳೆಯದು ಎಂದು ಅರ್ಥವಲ್ಲ.

Ultimate Multisite ಹಲವಾರು ಉತ್ತಮ hosting providers ನೊಂದಿಗೆ ಕೆಲಸ ಮಾಡಲು ತಿಳಿದಿದೆ ಮತ್ತು domain mapping ಮತ್ತು automatic SSL ನಂತಹ ಕಾರ್ಯಗಳನ್ನು ಒದಗಿಸಲು ಅವರ ಪರಿಸರದೊಂದಿಗೆ ಚೆನ್ನಾಗಿ integrates ಆಗುತ್ತದೆ. ಈ providers ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಮೌಲ್ಯೀಕರಿಸುತ್ತಾರೆ ಮತ್ತು shared hosting ಗಿಂತ ಹೆಚ್ಚಿನ ದರ್ಜೆಯ ಸೇವೆಯನ್ನು ಒದಗಿಸುತ್ತಾರೆ.

ಹೊಂದಾಣಿಕೆಯ providers ಪಟ್ಟಿ ಮತ್ತು ಪ್ರತಿಯೊಂದಕ್ಕೂ ಸಂಪೂರ್ಣ set-up ಸೂಚನೆಗಳಿಗಾಗಿ ದಯವಿಟ್ಟು Compatible Providers ನ documentation ಅನ್ನು ಪರಿಶೀಲಿಸಿ.

#### Performance ಪರಿಗಣನೆಗಳು

Ultimate Multisite ನಿಧಾನ application ಅಲ್ಲ, ಬದಲಿಗೆ, ಇದು ಗಮನಾರ್ಹವಾಗಿ ವೇಗವಾಗಿದೆ. ಆದಾಗ್ಯೂ, ಇದು ಆಧಾರವಾಗಿರುವ application ಮತ್ತು infrastructure ಯಷ್ಟೇ ಉತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಮತ್ತು ಅದಕ್ಕೆ ಪ್ರವೇಶವಿರುವುದನ್ನು ಮಾತ್ರ ಬಳಸಿಕೊಳ್ಳಬಹುದು.

ಇದನ್ನು ಪರಿಗಣಿಸಿ: ನೀವು 100 sites ನೊಂದಿಗೆ Ultimate Multisite ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ನ network administrator ಆಗಿದ್ದೀರಿ. ಆ sites ಲ್ಲಿ ಕೆಲವು ಚೆನ್ನಾಗಿ ಮಾಡುತ್ತಿವೆ ಮತ್ತು ಪ್ರತಿದಿನ ಹಲವಾರು website visitors ಅನ್ನು ಆಕರ್ಷಿಸುತ್ತವೆ.

ಈ ಸನ್ನಿವೇಶವು ಒಂದರಿಂದ ಐದು sites ನಂತಹ ಚಿಕ್ಕ ಪ್ರಮಾಣದಲ್ಲಿ ಭಿನ್ನವಾಗಿರುತ್ತದೆ ಆದರೆ ಶೀಘ್ರದಲ್ಲೇ ಪ್ರಮಾಣದ ಸಮಸ್ಯೆಗಳು ಸ್ಪಷ್ಟವಾಗುತ್ತವೆ.

ಗಮನಿಸದೆ ಬಿಟ್ಟರೆ, ಏಕೈಕ Ultimate Multisite ಸೈಟ್ ಎಲ್ಲಾ visitors ನ requests ಅನ್ನು sites ಗೆ ಪೂರೈಸುವ ಜವಾಬ್ದಾರಿಯನ್ನು ಹೊಂದಿರುತ್ತದೆ. ಈ requests dynamic PHP pages ಅಥವಾ stylesheets, javascript ಅಥವಾ media files ನಂತಹ static assets ಗಾಗಿರಬಹುದು. ಒಂದು ಅಥವಾ ನೂರು sites ಆಗಿರಲಿ, ಈ ಕಾರ್ಯಗಳು ಪುನರಾವರ್ತಿತ, ಏಕತಾನತೆಯ ಮತ್ತು ವ್ಯರ್ಥವಾಗುತ್ತವೆ. ಪ್ರತಿ request ಗೆ ಔಟ್‌ಪುಟ್ ಅದೇ static ಮಾಹಿತಿಯಾಗಿದ್ದಾಗ PHP ಫೈಲ್ ಅನ್ನು process ಮಾಡಲು CPU power ಮತ್ತು memory ಬಳಸುವುದು ಅನಗತ್ಯ.

ಅಂತೆಯೇ PHP ಅಥವಾ HTML page ಗಾಗಿ ಒಂದು request scripts, stylesheets ಮತ್ತು image files ಗಾಗಿ ಅನೇಕ ನಂತರದ requests ಅನ್ನು ಉತ್ಪಾದಿಸುತ್ತದೆ. ಆ requests ನೇರವಾಗಿ ನಿಮ್ಮ Ultimate Multisite server ಗೆ ಗುರಿಯಾಗಿವೆ.

Server ಅನ್ನು upgrade ಮಾಡುವ ಮೂಲಕ ಈ ಸಮಸ್ಯೆಯನ್ನು ಸುಲಭವಾಗಿ ಪರಿಹರಿಸಬಹುದು ಆದರೆ ಇದು ದ್ವಿತೀಯಕ ಸಮಸ್ಯೆಯನ್ನು ಪರಿಹರಿಸುವುದಿಲ್ಲ - geographic latencies. ಈ ಸಮಸ್ಯೆಯನ್ನು ಸರಿಯಾಗಿ ಪರಿಹರಿಸಲು ಅನೇಕ ಸ್ಥಳಗಳಲ್ಲಿ ಅನೇಕ servers ಮಾತ್ರ ಸಾಧ್ಯ.

ಈ ಕಾರಣಕ್ಕಾಗಿ ಹೆಚ್ಚಿನ network administrators static pages ಗಾಗಿ requests ಅನ್ನು ಪೂರೈಸಲು front-end caching solutions ಮತ್ತು content distribution networks (CDN) ಅನ್ನು ಬಳಸುತ್ತಾರೆ. ಈ requests ಅನ್ನು ಪೂರೈಸುವುದು ಮತ್ತು request server ಅನ್ನು ತಲುಪುವ ಮೊದಲು assets ಅನ್ನು serve ಮಾಡುವುದು processing resources ಅನ್ನು ಉಳಿಸುತ್ತದೆ, delays ಅನ್ನು ತೊಡೆದುಹಾಕುತ್ತದೆ, ಅನಗತ್ಯ upgrades ಅನ್ನು ತಪ್ಪಿಸುತ್ತದೆ ಮತ್ತು technology investments ಅನ್ನು ಗರಿಷ್ಠಗೊಳಿಸುತ್ತದೆ.

Ultimate Multisite ಅತ್ಯಾಧುನಿಕ Cloudflare add-on ಅನ್ನು ಒಳಗೊಂಡಿದೆ, network administrators ಗೆ ತಮ್ಮ installations ಅನ್ನು Cloudflare ಹಿಂದೆ ಇರಿಸಲು ಮತ್ತು ಅದರ caching capabilities ಮಾತ್ರವಲ್ಲದೆ DNS hosting, SSL certificates ಮತ್ತು security mechanisms ಅನ್ನೂ ಬಳಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.

#### Backups

Backups ಬಗ್ಗೆ ಸಲಹೆಗಾಗಿ 50 ಜನರನ್ನು ಕೇಳಿದರೆ backup strategies ಬಗ್ಗೆ 50 ವಿಭಿನ್ನ ಅಭಿಪ್ರಾಯಗಳನ್ನು ಪಡೆಯಬಹುದು. ಉತ್ತರವೆಂದರೆ, ಅದು ಅವಲಂಬಿಸಿರುತ್ತದೆ.

Backups ಅಗತ್ಯ ಎಂಬುದು ಮತ್ತು ಅವು provider ಯಿಂದ ನಿರ್ವಹಿಸಲ್ಪಡದಿರುವುದು ಬಹುತೇಕ ಊಹಿಸಲಾಗದ್ದು, ವಿಶೇಷವಾಗಿ managed service ಒದಗಿಸುವವರಿಗೆ. ಆದ್ದರಿಂದ ಗ್ರಾಹಕರು ಈ ಸೇವೆಯನ್ನು ಒದಗಿಸಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು network administrator ಅನ್ನು ನೋಡುತ್ತಾರೆ. Network administrator ಯಾರನ್ನು ನೋಡುತ್ತಾರೆ ಎಂಬುದು ಸಂಪೂರ್ಣವಾಗಿ ಬೇರೆ ಸಮಸ್ಯೆ.

ಈ ವಿಭಾಗದ ಉದ್ದೇಶಗಳಿಗಾಗಿ backup ಎಂದರೆ backup ಪ್ರಾರಂಭಿಸಿದ ಸಮಯದಲ್ಲಿ system state ನ point-in-time ನಕಲು ಎಂದು ಒಪ್ಪಿಕೊಳ್ಳೋಣ. ಸರಳವಾಗಿ ಹೇಳುವುದಾದರೆ, backup ಸಮಯದಲ್ಲಿ system ನ ಸ್ಥಿತಿ ಏನೇ ಇರಲಿ ಆ ಸ್ಥಿತಿಯನ್ನು ಸೆರೆಹಿಡಿದು backup ನಲ್ಲಿ ಲಾಕ್ ಮಾಡಲಾಗುತ್ತದೆ.

ಈ ತಿಳುವಳಿಕೆಯೊಂದಿಗೆ backups ಸಾಧಿಸುವುದು ಹೇಗೆ ಮತ್ತು ನಿಮ್ಮ ಪರಿಸರಕ್ಕೆ ಯಾವುದು ಉತ್ತಮ ಎಂಬ ಉತ್ತರವು ನಿಮ್ಮ ಅಗತ್ಯತೆಗಳು ಮತ್ತು ಆ ಅಗತ್ಯತೆಗಳನ್ನು ಪೂರೈಸುವ hosting provider ನ ಸಾಮರ್ಥ್ಯವನ್ನು ಹೆಚ್ಚಾಗಿ ಅವಲಂಬಿಸಿರುತ್ತದೆ. ಆದಾಗ್ಯೂ, ಅತ್ಯಂತ ಅಭಿಪ್ರಾಯವುಳ್ಳದ್ದರಿಂದ ಕನಿಷ್ಠ ಅಭಿಪ್ರಾಯವುಳ್ಳದ್ದರ ಕ್ರಮದಲ್ಲಿ, ಕೆಳಗಿನ ಆಯ್ಕೆಗಳು ಕೆಲವು ಮಾರ್ಗದರ್ಶನವನ್ನು ಒದಗಿಸಬೇಕು.

#### Snapshots

Snapshots backups ಗೆ silver bullets ಆಗಿವೆ ಏಕೆಂದರೆ ಅವು ಸುಲಭ, ಸಂಕೀರ್ಣವಲ್ಲ (ನೀವು restore ಮಾಡಲು ಬಯಸುವವರೆಗೆ) ಮತ್ತು 'just work'. ಆದಾಗ್ಯೂ ಇದಕ್ಕೆ ನಿಮ್ಮ provider ಯಿಂದ ಕೆಲವು ಸಹಾಯ ಅಗತ್ಯ ಮತ್ತು ನೀವು VPS (Virtual Private Server) ಅಥವಾ ಅಂತಹುದೇ ಹೊಂದಿದ್ದರೆ ಮಾತ್ರ ಹೆಚ್ಚಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ. ನಮ್ಮ 'Compatible Providers' documentation ನಲ್ಲಿ ಪಟ್ಟಿ ಮಾಡಲಾದ ಹಲವಾರು providers network administrator ಯಿಂದ ಹೆಚ್ಚಿನ ಹಸ್ತಕ್ಷೇಪ ಅಥವಾ ಪರಿಗಣನೆ ಅಗತ್ಯವಿಲ್ಲದ backups ಅನ್ನು ನೀಡುತ್ತಾರೆ.

ಸಾಂಪ್ರದಾಯಿಕ backups files ಮತ್ತು databases ಅನ್ನು ಗುರಿಯಾಗಿಸಿದರೆ, snapshot ಸಂಪೂರ್ಣ disk ಅನ್ನು ಗುರಿಯಾಗಿಸುತ್ತದೆ. ಇದರರ್ಥ ಸೈಟ್‌ನ data ಮಾತ್ರವಲ್ಲದೆ operating system ಮತ್ತು configuration ಕೂಡ snapshot ನಲ್ಲಿ ಸೆರೆಹಿಡಿಯಲಾಗುತ್ತದೆ. ಅನೇಕರಿಗೆ ಇದು ವಿಶಿಷ್ಟ ಪ್ರಯೋಜನವಾಗಿದೆ ಏಕೆಂದರೆ ಹೊಸ system ಅನ್ನು snapshot ನಿಂದ ಬಹುತೇಕ ತಕ್ಷಣವೇ spawn ಮಾಡಬಹುದು ಮತ್ತು ailing instance ಅನ್ನು ಬದಲಾಯಿಸಲು ಕಾರ್ಯಾಚರಣೆಗೆ ತರಬಹುದು. ಅಂತೆಯೇ, files ಅನ್ನು ಹಿಂಪಡೆಯಲು recovery ಪ್ರಕ್ರಿಯೆಗೆ snapshot image ಅನ್ನು ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ instance ಗೆ disk ಆಗಿ attach ಮಾಡುವುದು ಮಾತ್ರ ಅಗತ್ಯವಿರುತ್ತದೆ ಇದರಿಂದ files ಅನ್ನು access ಮಾಡಿ copy ಮಾಡಬಹುದು.

Snapshots hosting provider ನೊಂದಿಗೆ ಹೆಚ್ಚುವರಿ ವೆಚ್ಚವನ್ನು ಆಕರ್ಷಿಸಬಹುದು ಆದರೆ ಇದು ಅಪಘಾತಗಳ ವಿರುದ್ಧ ವಿಮಾ ಪಾಲಿಸಿಯಾಗಿದೆ.

#### External Scripts

WordPress ಮತ್ತು MySQL resources ಅನ್ನು backup ಮಾಡಲು ಬಾಹ್ಯ scripts ಮತ್ತು ಪರಿಹಾರಗಳ ಕೊರತೆ ಇಲ್ಲ ಎಂದು ತೋರುತ್ತದೆ ಮತ್ತು ಇವು Ultimate Multisite ಗೆ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ ಏಕೆಂದರೆ ಇದು WordPress filesystem ಮತ್ತು database ಬಳಸುವ WordPress plugin ಆಗಿದೆ. ಹೀಗಾಗಿ WordPress sites ಅನ್ನು backup ಮಾಡುವ ಪರಿಹಾರವು Ultimate Multisite ನ ಅಗತ್ಯತೆಗಳನ್ನು ಸಮರ್ಪಕವಾಗಿ ಒಳಗೊಳ್ಳುತ್ತದೆ.

ನಾವು ಒಂದು script ಅನ್ನು ಇನ್ನೊಂದರ ಮೇಲೆ ಶಿಫಾರಸು ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ ಆದರೆ ನಮ್ಮ ಸಾಮಾನ್ಯ ಸಲಹೆ ಎಂದರೆ ಫಲಿತಾಂಶಗಳು ಬಯಸಿದಂತೆ ಇವೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಹಲವಾರು backup ಮತ್ತು restore tests ಅನ್ನು ರನ್ ಮಾಡಿ ಮತ್ತು 'ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ' script ಮತ್ತು ಅದರ ಕಾರ್ಯಚಟುವಟಿಕೆಯನ್ನು ನಿರಂತರವಾಗಿ ಮೌಲ್ಯಮಾಪನ ಮಾಡುವ ಮೂಲಕ ವಿಶೇಷವಾಗಿ ಕೆಲವು ರೀತಿಯ differential backup strategy ಅನ್ವಯಿಸಿದಾಗ.

ಈ scripts, ರನ್ ಆಗುತ್ತಿರುವಾಗ, system load ಅನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ ಎಂಬುದನ್ನು ಗಮನಿಸಬೇಕು, ಇದನ್ನು ಪರಿಗಣನೆಗೆ ತೆಗೆದುಕೊಳ್ಳಬೇಕು.

#### Plugins

WordPress ನಲ್ಲಿ plugin ನೊಂದಿಗೆ ಪರಿಹರಿಸಲಾಗದ ಸಮಸ್ಯೆ ಬಹುತೇಕ ಇಲ್ಲ ಮತ್ತು ಬಾಹ್ಯ scripts ನಿರ್ವಹಿಸುವುದು ನಿಮ್ಮ ಆಯ್ಕೆಯಲ್ಲದಿದ್ದರೆ plugin ಮುಂದಿನ ಉತ್ತಮ ಆಯ್ಕೆಯಾಗಿರಬಹುದು.

Plugins ಆಯ್ಕೆಗಳು ಮತ್ತು ಫೀಚರ್‌ಗಳಲ್ಲಿ ಭಿನ್ನವಾಗಿದ್ದರೂ ಅವು ಹೆಚ್ಚಾಗಿ ಅದೇ ಕಾರ್ಯವನ್ನು ನಿರ್ವಹಿಸುತ್ತವೆ ಅದು WordPress files ಮತ್ತು database contents ನ ನಕಲು ಮಾಡುವುದು. ನಂತರ ಕಾರ್ಯಚಟುವಟಿಕೆಗಳು ಭಿನ್ನವಾಗಿರುತ್ತವೆ ಏಕೆಂದರೆ ಕೆಲವು plugins backups ಅನ್ನು Google Drive ಅಥವಾ Dropbox ನಂತಹ ಬಾಹ್ಯ ಸೇವೆಗಳಿಗೆ ಅಥವಾ S3, Wasabi ಅಥವಾ ಇತರ ಕೆಲವು ರೀತಿಯ ಹೊಂದಾಣಿಕೆಯ object storage service ಗೆ ಕಳುಹಿಸಬಹುದು. ಹೆಚ್ಚು ಸಮಗ್ರ plugins ಬಾಹ್ಯ storage costs ಉಳಿಸಲು ಬದಲಾದ data ಮಾತ್ರ backup ಮಾಡಲು differential backups ಅಥವಾ ಕೆಲವು ರೀತಿಯ strategy ಅನ್ನು ಒದಗಿಸುತ್ತವೆ.

ನಿಮ್ಮ plugin ಆಯ್ಕೆಮಾಡುವಾಗ, ಅದು multisite aware ಎಂದು ಪರಿಶೀಲಿಸಲು ಜಾಗರೂಕರಾಗಿರಿ. ಅದರ ಕಾರ್ಯಾಚರಣೆಯ ಸ್ವಭಾವದಿಂದಾಗಿ backup ರನ್ ಆಗುತ್ತಿರುವಾಗ ಪ್ರಕ್ರಿಯೆ ಪೂರ್ಣಗೊಳ್ಳುವವರೆಗೆ server ನಲ್ಲಿ ತಾತ್ಕಾಲಿಕ load ಅನ್ನು ನಿರೀಕ್ಷಿಸಬಹುದು.

#### Domain ಮತ್ತು SSL

Multisite _subdomain_ mode ನಲ್ಲಿ domain names ಕುರಿತು ಈಗಾಗಲೇ ಹೆಚ್ಚು ಚರ್ಚಿಸಲಾಗಿದೆ. Network administrators ಗೆ ಬಹುತೇಕ ಸಾರ್ವತ್ರಿಕ ಪರಿಹಾರವೆಂದರೆ wildcard DNS entries ಬಳಕೆ.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

ಈ ರೀತಿಯ DNS entry 'site1.domain.com' ಮತ್ತು 'site2.domain.com' ನಂತಹ _subdomains_ ಅನ್ನು 1.2.3.4 IP address ಗೆ ಯಶಸ್ವಿಯಾಗಿ resolve ಮಾಡುತ್ತದೆ, ಹೀಗಾಗಿ Ultimate Multisite ಮತ್ತು ದೊಡ್ಡ ಮಟ್ಟಿಗೆ _subdomain_ mode ಬಳಸುವ WordPress Multisite ಅನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.

HTTP ಗೆ ಇದು ಸಂಪೂರ್ಣವಾಗಿ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡಬಹುದು ಏಕೆಂದರೆ target host ಅನ್ನು HTTP headers ನಿಂದ ಓದಲಾಗುತ್ತದೆ ಆದರೆ ಸುರಕ್ಷಿತ HTTPS transactions ಬಹುತೇಕ ಕಡ್ಡಾಯವಾಗಿರುವ ಈ ದಿನಗಳಲ್ಲಿ web ಅಷ್ಟು ಸರಳವಾಗಿರುವುದು ಅಪರೂಪ.

ಸೌಭಾಗ್ಯವಶಾತ್ SSL certificates ಗೆ ಸುಲಭ ಆಯ್ಕೆಗಳಿವೆ. _Subdirectory_ mode ನಲ್ಲಿ ಸಾಮಾನ್ಯ domain certificate ಬಳಸಬಹುದು. ಇವು ಉಚಿತ LetsEncrypt ಸೇವೆ ಅಥವಾ ಇತರ ಮೂಲವನ್ನು ಬಳಸಬಹುದಾದ hosting providers ಯಿಂದ ಸುಲಭವಾಗಿ ಮತ್ತು ಉಚಿತವಾಗಿ ಲಭ್ಯವಿವೆ. ಇಲ್ಲದಿದ್ದರೆ ನೀವು certificate signing request ಉತ್ಪಾದಿಸಲು ಸಾಧ್ಯವಾದರೆ ಇವು authorities ಯಿಂದ ವಾಣಿಜ್ಯಿಕವಾಗಿ ಲಭ್ಯವಿವೆ.

_Subdomain_ mode ಗೆ wildcard SSL certificate ಬಳಕೆಯು wildcard domain ನೊಂದಿಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಜೋಡಿಯಾಗುತ್ತದೆ ಮತ್ತು ಹೆಚ್ಚುವರಿ configuration ಇಲ್ಲದೆ root domain ಮತ್ತು ಎಲ್ಲಾ _subdomains_ ಗೆ certificate ಅಧಿಕೃತವಾಗಲು ಅನುಮತಿಸುತ್ತದೆ.

ಆದಾಗ್ಯೂ, ನೀವು enterprise plan ನಲ್ಲಿ ಇಲ್ಲದಿದ್ದರೆ ಅಥವಾ entry ಅನ್ನು DNS only ಗೆ ಹೊಂದಿಸದಿದ್ದರೆ wildcard SSL certificates Cloudflare ನಂತಹ ಸೇವೆಗಳೊಂದಿಗೆ ಕೆಲಸ ಮಾಡದಿರಬಹುದು ಎಂಬುದನ್ನು ಗಮನಿಸಬೇಕು, ಅಂತಹ ಸಂದರ್ಭದಲ್ಲಿ ಎಲ್ಲಾ caching ಮತ್ತು optimization bypass ಆಗುತ್ತದೆ.

Out-of-the-box Ultimate Multisite ಈ ಸಮಸ್ಯೆಗೆ ಪರಿಹಾರವನ್ನು ಒದಗಿಸುತ್ತದೆ, WordPress multisites ನ ಅಗತ್ಯತೆಗಳೊಂದಿಗೆ ನಮ್ಮ ವ್ಯಾಪಕ ಅನುಭವವನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ. ಈ ಸರಳ add-on ಅನ್ನು activate ಮಾಡುವುದರಿಂದ Ultimate Multisite ನಿಮ್ಮ Cloudflare credentials ಬಳಸಿ Cloudflare ನಲ್ಲಿ network sites ಗಾಗಿ DNS entries ಅನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸೇರಿಸುತ್ತದೆ ಮತ್ತು ಅವುಗಳ mode ಅನ್ನು 'proxied' ಗೆ ಹೊಂದಿಸುತ್ತದೆ. ಈ ರೀತಿಯಲ್ಲಿ ಪ್ರತಿ network subsite, ರಚಿಸಿದಾಗ, SSL ಸೇರಿದಂತೆ Cloudflare ನ ಸಂಪೂರ್ಣ ರಕ್ಷಣೆ ಮತ್ತು ಪ್ರಯೋಜನಗಳನ್ನು ಹೊಂದಿರುತ್ತದೆ.

ನಿಮ್ಮ Ultimate Multisite ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ನ ಸ್ವಭಾವ ಮತ್ತು ಉದ್ದೇಶವನ್ನು ಅವಲಂಬಿಸಿ ಗ್ರಾಹಕರು ತಮ್ಮ ಸ್ವಂತ domains ಬಳಸಬೇಕಾದ ಅಗತ್ಯವಿರಬಹುದು. ಅಂತಹ ಸಂದರ್ಭದಲ್ಲಿ network administrator ಎರಡು ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸುವ ಜವಾಬ್ದಾರಿಯನ್ನು ಹೊಂದಿದ್ದಾರೆ. ಒಂದು, domain name ನ hosting ಮತ್ತು ಎರಡು, domain ಗಾಗಿ SSL certificates.

ಅನೇಕರಿಗೆ, Cloudflare ಬಳಕೆ ಸುಲಭ ಆಯ್ಕೆಯಾಗಿದೆ. ಗ್ರಾಹಕರು ತಮ್ಮ domain ಅನ್ನು Cloudflare ನಲ್ಲಿ ಇರಿಸಬೇಕು, CNAME ಅನ್ನು Ultimate Multisite ನ root domain ಗೆ ಪಾಯಿಂಟ್ ಮಾಡಬೇಕು ಮತ್ತು ತಮ್ಮ custom domain name ನ ಪ್ರಯೋಜನ ಪಡೆಯಲು ಪ್ರಾರಂಭಿಸಲು Ultimate Multisite ನಲ್ಲಿ ತಮ್ಮ domain ಅನ್ನು map ಮಾಡಬೇಕು.

ಇದರ ಹೊರಗೆ, ಪರ್ಯಾಯ ಪರಿಹಾರಗಳನ್ನು ಹುಡುಕಬೇಕು ಅದಕ್ಕಾಗಿಯೇ Ultimate Multisite Compatible Providers ಪಟ್ಟಿಯನ್ನು ಶಿಫಾರಸು ಮಾಡುತ್ತದೆ. ಏಕೆಂದರೆ DNS ಮತ್ತು SSL ಸೆಟ್ ಅಪ್ ಮಾಡುವ ಪ್ರಕ್ರಿಯೆಯು ಸಾಮಾನ್ಯವಲ್ಲದ ಪ್ರಕ್ರಿಯೆಯಾಗಿರಬಹುದು. ಆದಾಗ್ಯೂ, ಈ providers ನೊಂದಿಗೆ Ultimate Multisite ನ integration ನೊಂದಿಗೆ ಸಂಕೀರ್ಣತೆಯು ಹೆಚ್ಚು ತೆಗೆದುಹಾಕಲ್ಪಟ್ಟಿದೆ ಮತ್ತು ಕಾರ್ಯವಿಧಾನವು automated ಆಗಿದೆ.

#### Plugins

ನಿಮ್ಮ ಗ್ರಾಹಕರಿಗೆ ಅಥವಾ network sites ಗೆ ಕಾರ್ಯಚಟುವಟಿಕೆಯನ್ನು ಒದಗಿಸಲು ನಿಮಗೆ ಹೆಚ್ಚುವರಿ plugins ಅಗತ್ಯವಿರುವ ಸಾಧ್ಯತೆ ಹೆಚ್ಚು. ಎಲ್ಲಾ plugins WordPress Multisite ಮತ್ತು Ultimate Multisite ನೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತವೆಯೇ? ಸರಿ, ಅದು ಅವಲಂಬಿಸಿರುತ್ತದೆ.

ಹೆಚ್ಚಿನ plugins WordPress Multisite ನಲ್ಲಿ installable ಆಗಿದ್ದರೂ ಅವುಗಳ activation ಮತ್ತು licensing author ನಿಂದ author ಗೆ ಬದಲಾಗುತ್ತದೆ.

Per-domain ಆಧಾರದ ಮೇಲೆ licensing ಅಗತ್ಯವಿರುವ ಕೆಲವು plugins ನೊಂದಿಗೆ licensing ಹೇಗೆ ಅನ್ವಯಿಸಲಾಗುತ್ತದೆ ಎಂಬುದರಲ್ಲಿ ಸವಾಲು ಇರುತ್ತದೆ. ಇದರರ್ಥ ಕೆಲವು plugins ಗಾಗಿ network administrator ಪ್ರತಿ ಹೊಸ ಸೈಟ್‌ನಲ್ಲಿ ಪ್ರತಿ plugin ಗೆ license ಅನ್ನು ಹಸ್ತಚಾಲಿತವಾಗಿ activate ಮಾಡಬೇಕಾಗುತ್ತದೆ.

ಆದ್ದರಿಂದ ಅವರ plugin WordPress Multisite ನೊಂದಿಗೆ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ ಮತ್ತು ಅದನ್ನು license ಮಾಡಲು ಅಗತ್ಯವಿರುವ ವಿಶೇಷ ಅಗತ್ಯತೆಗಳು ಅಥವಾ ಕಾರ್ಯವಿಧಾನಗಳ ಬಗ್ಗೆ plugin author ನೊಂದಿಗೆ ಪರಿಶೀಲಿಸುವುದು ಉತ್ತಮ.
