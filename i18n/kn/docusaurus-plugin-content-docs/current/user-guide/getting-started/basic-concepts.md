---
title: ಮೂಲಭೂತ ಪರಿಕಲ್ಪನೆಗಳು
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# ಮೂಲ ಪರಿಕಲ್ಪನೆಗಳು

WordPress Multisite ಗೆ ಹೊಸಬರಾಗಿರುವವರು ಮತ್ತು Ultimate Multisite ಬಳಸಲು ಆರಂಭಿಸಿದವರಿಗೆ, ಮೊದಲಿಗೆ ಹಲವು ಹೊಸ ಪದಗಳು ಮತ್ತು ಪದಗುಚ್ಛಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬೇಕಾಗುತ್ತದೆ. ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಮತ್ತು ಅದು ಒಟ್ಟಾರೆಯಾಗಿ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಇವುಗಳನ್ನು ಕಲಿಯುವುದು ಒಂದು ಮುಖ್ಯ ಕೆಲಸವಾಗಿದೆ.

ಈ ಲೇಖನದಲ್ಲಿ, WordPress ನಲ್ಲಿನ ಕೆಲವು ಪ್ರಮುಖ ಪರಿಕಲ್ಪನೆಗಳನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಿ ವಿವರಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತೇವೆ. ಇವುಗಳಲ್ಲಿ ಕೆಲವು ಬಳಕೆದಾರರಿಗೆ ಹೆಚ್ಚು ಸಂಬಂಧಿಸಿದವು, ಇತರವು ಡೆವಲಪರ್‌ಗಳಿಗೆ, ಮತ್ತು ಕೆಲವು ಇಬ್ಬರಿಗೂ ಅನ್ವಯಿಸುತ್ತವೆ.

## WordPress Multisite

WordPress **Multisite** ಎಂಬುದು ಒಂದು ವಿಧದ WordPress ಸ್ಥಾಪನೆಯಾಗಿದ್ದು, ಒಂದೇ WordPress dashboard ನಿಂದ ಬಹು ವೆಬ್‌ಸೈಟ್‌ಗಳ ನೆಟ್‌ವರ್ಕ್ ಅನ್ನು ರಚಿಸಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ನಿಮಗೆ ಅನುಮತಿಸುತ್ತದೆ. ಸೈಟ್‌ಗಳ ಸಂಖ್ಯೆ, ವೈಶಿಷ್ಟ್ಯಗಳು, themes, ಮತ್ತು ಬಳಕೆದಾರ ಪಾತ್ರಗಳು ಸೇರಿದಂತೆ ಎಲ್ಲವನ್ನೂ ನೀವು ನಿರ್ವಹಿಸಬಹುದು. ನೂರಾರು ಮತ್ತು ಸಾವಿರಾರು ಸೈಟ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು ಸಾಧ್ಯ.

## Network

WordPress ನ ಪರಿಭಾಷೆಯಲ್ಲಿ, multisite network ಎಂದರೆ ಒಂದೇ dashboard ನಿಂದ ಹಲವಾರು **subsites** ಅನ್ನು ನಿರ್ವಹಿಸಬಹುದಾದ ಒಂದು ವ್ಯವಸ್ಥೆ. Multisite network ರಚಿಸುವ ವಿಧಾನವು hosting providers ನಡುವೆ ಭಿನ್ನವಾಗಿದ್ದರೂ, ಅಂತಿಮ ಫಲಿತಾಂಶವು ಸಾಮಾನ್ಯವಾಗಿ **wp-config.php** ಫೈಲ್‌ನಲ್ಲಿ ಕೆಲವು ಹೆಚ್ಚುವರಿ ನಿರ್ದೇಶನಗಳನ್ನು ಸೇರಿಸುವುದಾಗಿರುತ್ತದೆ, ಇದು WordPress ಈ ನಿರ್ದಿಷ್ಟ ಮೋಡ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆ ಎಂದು ತಿಳಿಸುತ್ತದೆ.

Multisite network ಮತ್ತು ಸ್ವತಂತ್ರ WordPress ಸ್ಥಾಪನೆಯ ನಡುವೆ ಹಲವಾರು ಸ್ಪಷ್ಟ ವ್ಯತ್ಯಾಸಗಳಿವೆ, ಅವುಗಳನ್ನು ನಾವು ಸಂಕ್ಷಿಪ್ತವಾಗಿ ಚರ್ಚಿಸುತ್ತೇವೆ.

## Database

Database ಎಂಬುದು ರಚನಾತ್ಮಕವಾಗಿ, ಸಂಘಟಿತವಾಗಿ ಜೋಡಿಸಲಾದ ಡೇಟಾದ ಸಂಗ್ರಹ. ಕಂಪ್ಯೂಟಿಂಗ್ ಪರಿಭಾಷೆಯಲ್ಲಿ, database ಎಂದರೆ ಡೇಟಾವನ್ನು ಸಂಗ್ರಹಿಸಲು ಮತ್ತು ಸಂಘಟಿಸಲು ಬಳಸುವ ಸಾಫ್ಟ್‌ವೇರ್. ಇದನ್ನು ಒಂದು ಫೈಲ್ ಕ್ಯಾಬಿನೆಟ್ ಎಂದು ಯೋಚಿಸಿ, ಅಲ್ಲಿ ನೀವು tables ಎಂಬ ವಿಭಿನ್ನ ವಿಭಾಗಗಳಲ್ಲಿ ಡೇಟಾವನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೀರಿ.

WordPress Multisite ಒಂದು database ಬಳಸುತ್ತದೆ ಮತ್ತು ಪ್ರತಿ subsite ಗೆ prefix ನಲ್ಲಿ blog id ಜೊತೆಗೆ ತನ್ನದೇ ಆದ tables ಸಿಗುತ್ತವೆ, ಆದ್ದರಿಂದ ಒಮ್ಮೆ ನೀವು network installation ಸ್ಥಾಪಿಸಿ subsite ರಚಿಸಿದರೆ, ಈ tables ಇರಬೇಕು:

_wp_1_options_ \- ಮೊದಲ subsite ಗೆ options table

_wp_2_options_ \- ಎರಡನೇ subsite ಗೆ options table

## Hosting provider

Hosting provider ಎಂಬುದು ವ್ಯಾಪಾರಗಳು ಮತ್ತು ವ್ಯಕ್ತಿಗಳು ತಮ್ಮ ವೆಬ್‌ಸೈಟ್‌ಗಳನ್ನು World Wide Web ಮೂಲಕ ಲಭ್ಯವಾಗುವಂತೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುವ ಕಂಪನಿ. Web hosting providers ನೀಡುವ ಸೇವೆಗಳು ಬೇರೆಬೇರೆಯಾಗಿರುತ್ತವೆ ಆದರೆ ಸಾಮಾನ್ಯವಾಗಿ ವೆಬ್‌ಸೈಟ್ ವಿನ್ಯಾಸ, host ನಲ್ಲಿ ಸಂಗ್ರಹಣಾ ಸ್ಥಳ, ಮತ್ತು ಇಂಟರ್ನೆಟ್‌ಗೆ ಸಂಪರ್ಕವನ್ನು ಒಳಗೊಂಡಿರುತ್ತವೆ.

## Domain

Domain name ಎಂಬುದು ಜನರು ನಿಮ್ಮ ಸೈಟ್ ಭೇಟಿ ಮಾಡಲು ಬಳಸುವ ವಿಳಾಸ. ಇದು ನಿಮ್ಮ ಸೈಟ್ ಎಲ್ಲಿ ಹುಡುಕಬೇಕು ಎಂದು web browser ಗೆ ತಿಳಿಸುತ್ತದೆ. ಬೀದಿ ವಿಳಾಸದಂತೆಯೇ, domain ಎಂಬುದು ಜನರು ನಿಮ್ಮ ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಭೇಟಿ ಮಾಡುವ ವಿಧಾನ. ನಿಮ್ಮ ಅಂಗಡಿಯ ಮುಂದೆ ಸೈನ್‌ಬೋರ್ಡ್ ಇರುವಂತೆಯೇ. ನೀವು ನಮ್ಮ ವೆಬ್‌ಸೈಟ್ ಭೇಟಿ ಮಾಡಲು ಬಯಸಿದರೆ, ನಿಮ್ಮ browser ನ address bar ನಲ್ಲಿ ನಮ್ಮ ವೆಬ್ ವಿಳಾಸವನ್ನು ಟೈಪ್ ಮಾಡಬೇಕು, ಅದು [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ ಇಲ್ಲಿ [**ultimatemultisite.com**](http://ultimatemultisite.com) ಎಂಬುದು domain name.

## Subdomain

Subdomain ಎಂಬುದು ಮುಖ್ಯ domain ಅಡಿಯಲ್ಲಿರುವ ಒಂದು ವಿಧದ ವೆಬ್‌ಸೈಟ್ ಶ್ರೇಣಿವ್ಯವಸ್ಥೆ, ಆದರೆ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ವಿಷಯವನ್ನು ಸಂಘಟಿಸಲು folders ಬಳಸುವ ಬದಲು, ಇದು ತನ್ನದೇ ಆದ ವೆಬ್‌ಸೈಟ್ ಪಡೆಯುತ್ತದೆ ಎಂದು ಹೇಳಬಹುದು. ಇದನ್ನು [**https://site1.domain.com/**](https://site1.domain.com/) ಎಂದು ಪ್ರಸ್ತುತಪಡಿಸಲಾಗುತ್ತದೆ, ಇಲ್ಲಿ _site1_ ಎಂಬುದು subdomain name ಮತ್ತು [_domain.com_](http://domain.com) ಎಂಬುದು ಮುಖ್ಯ domain.

## Subdirectory

Subdirectory ಎಂಬುದು root domain ಅಡಿಯಲ್ಲಿ ಒಂದು ವಿಧದ ವೆಬ್‌ಸೈಟ್ ಶ್ರೇಣಿವ್ಯವಸ್ಥೆಯಾಗಿದ್ದು, ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ವಿಷಯವನ್ನು ಸಂಘಟಿಸಲು folders ಬಳಸುತ್ತದೆ. Subdirectory ಎಂಬುದು subfolder ನಂತೆಯೇ, ಮತ್ತು ಈ ಹೆಸರುಗಳನ್ನು ಪರಸ್ಪರ ಬದಲಾಯಿಸಿ ಬಳಸಬಹುದು. ಇದನ್ನು [**https://domain.com/site1**](https://domain.com/site1) ಎಂದು ಪ್ರಸ್ತುತಪಡಿಸಲಾಗುತ್ತದೆ, ಇಲ್ಲಿ _site1_ ಎಂಬುದು subdirectory name ಮತ್ತು [_domain.com_](http://domain.com) ಎಂಬುದು ಮುಖ್ಯ domain.

## Subsite

Subsite ಎಂಬುದು ನೀವು Multisite network ನಲ್ಲಿ ರಚಿಸುವ ಒಂದು ಚೈಲ್ಡ್ ಸೈಟ್. ನಿಮ್ಮ WordPress Multisite ಸ್ಥಾಪನೆಯನ್ನು ಹೇಗೆ ಕಾನ್ಫಿಗರ್ ಮಾಡಲಾಗಿದೆ ಎಂಬುದರ ಆಧಾರದ ಮೇಲೆ ಇದು **subdomain** ಅಥವಾ **subdirectory** ಆಗಿರಬಹುದು.

## Super Admin

WordPress Super Admin ಎಂಬುದು Multisite network ನಲ್ಲಿ ಎಲ್ಲಾ subsites ಅನ್ನು ನಿರ್ವಹಿಸಲು ಸಂಪೂರ್ಣ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಹೊಂದಿರುವ ಬಳಕೆದಾರ ಪಾತ್ರ. Multisite ಬಳಕೆದಾರರಿಗೆ, ಇದು ನಿಮ್ಮ WordPress ಸ್ಥಾಪನೆಗೆ ನೀವು ಒದಗಿಸಬಹುದಾದ **ಅತ್ಯುನ್ನತ ಮಟ್ಟದ ಪ್ರವೇಶ**.

## Plugin

ಸಾಮಾನ್ಯವಾಗಿ, plugin ಎಂಬುದು ನಿಮ್ಮ WordPress ಸೈಟ್‌ಗೆ ಹೆಚ್ಚುವರಿ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಸೇರಿಸುವ ಕೋಡ್ ಸಮೂಹ. ಇದು login logo ಬದಲಾಯಿಸುವಷ್ಟು ಸರಳವಾಗಿರಬಹುದು ಅಥವಾ e-commerce ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಸೇರಿಸುವಷ್ಟು ಸಂಕೀರ್ಣವಾಗಿರಬಹುದು. _Woocommerce ಮತ್ತು Contact Form_ ಇವು plugin ಗಳ ಉದಾಹರಣೆಗಳು.

WordPress Multisite ನಲ್ಲಿ, plugins ಅನ್ನು Super Admin ಮಾತ್ರ network admin dashboard ನಿಂದ ಸ್ಥಾಪಿಸಬಹುದು. Subsite Admins ತಮ್ಮ subsite ಒಳಗೆ plugins ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಬಹುದು ಮತ್ತು ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಬಹುದು ಮಾತ್ರ.

## Themes

WordPress theme ಎಂಬುದು ಸೈಟ್‌ನ ಒಟ್ಟಾರೆ ನೋಟವನ್ನು ನಿರ್ಧರಿಸುವ ಫೈಲ್‌ಗಳ ಗುಂಪು (_graphics, style sheets, ಮತ್ತು code_). ಇದು font styling, page layout, ಬಣ್ಣಗಳು, ಇತ್ಯಾದಿ ಎಲ್ಲಾ front-end stylings ಒದಗಿಸುತ್ತದೆ.

Plugins ನಂತೆಯೇ, WordPress Multisite ನಲ್ಲಿ themes ಅನ್ನು Super Admin ಮಾತ್ರ ಸ್ಥಾಪಿಸಬಹುದು ಮತ್ತು subsite admins ಅದನ್ನು subsite ಮಟ್ಟದಲ್ಲಿ ಸಕ್ರಿಯಗೊಳಿಸಬಹುದು.

## Site Template

**Site Template** ಎಂಬುದು ನಿಮ್ಮ network ನಲ್ಲಿ ಹೊಸ ಸೈಟ್‌ಗಳನ್ನು ರಚಿಸುವಾಗ ಆಧಾರವಾಗಿ ಬಳಸಬಹುದಾದ ಮೂಲ ಸೈಟ್.

ಇದರರ್ಥ ನೀವು ಒಂದು ಆಧಾರ ಸೈಟ್ ರಚಿಸಬಹುದು, ವಿಭಿನ್ನ plugins ಸಕ್ರಿಯಗೊಳಿಸಬಹುದು, ಒಂದು active theme ಹೊಂದಿಸಬಹುದು, ಮತ್ತು ನಿಮಗೆ ಬೇಕಾದ ರೀತಿಯಲ್ಲಿ ಕಸ್ಟಮೈಜ್ ಮಾಡಬಹುದು. ನಂತರ, ನಿಮ್ಮ ಗ್ರಾಹಕರು ಹೊಸ ಖಾತೆ ರಚಿಸಿದಾಗ, ಯಾವುದೇ ಅರ್ಥಪೂರ್ಣ ವಿಷಯವಿಲ್ಲದ default WordPress ಸೈಟ್ ಪಡೆಯುವ ಬದಲು, ಎಲ್ಲಾ ಕಸ್ಟಮೈಸೇಶನ್‌ಗಳು ಮತ್ತು ವಿಷಯಗಳು ಈಗಾಗಲೇ ಇರುವ ನಿಮ್ಮ ಆಧಾರ ಸೈಟ್‌ನ ಪ್ರತಿಯನ್ನು ಅವರು ಪಡೆಯುತ್ತಾರೆ.

## Domain Mapping

WordPress ನೊಂದಿಗೆ **Domain mapping** ಎಂಬುದು ವೆಬ್‌ಸೈಟ್‌ನ ವಿಳಾಸದ ಮೂಲಕ ಬಳಕೆದಾರರನ್ನು ಸರಿಯಾದ host ಗೆ ಮರುನಿರ್ದೇಶಿಸುವ ವಿಧಾನ. WordPress Multisite ನಲ್ಲಿ, subsites ಅನ್ನು subdirectory ಅಥವಾ subdomain ಬಳಸಿ ರಚಿಸಲಾಗುತ್ತದೆ. Domain mapping ಏನು ಮಾಡುತ್ತದೆ ಎಂದರೆ, ಇದು subsite ಬಳಕೆದಾರರಿಗೆ [**joesbikeshop.com**](http://joesbikeshop.com) ನಂತಹ top-level domain ಬಳಸಲು ಅನುಮತಿಸುತ್ತದೆ, ಇದರಿಂದ ಅವರ ಸೈಟ್ ವಿಳಾಸವು ಹೆಚ್ಚು ವೃತ್ತಿಪರವಾಗಿ ಕಾಣುತ್ತದೆ.

## SSL

SSL ಎಂದರೆ **Secure Sockets Layer**. ಇದು ವೆಬ್ ಸೈಟ್‌ನ ಗುರುತನ್ನು ದೃಢೀಕರಿಸುವ ಮತ್ತು ಎನ್‌ಕ್ರಿಪ್ಟೆಡ್ ಸಂಪರ್ಕವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವ ಡಿಜಿಟಲ್ ಪ್ರಮಾಣಪತ್ರ. ಇಂದು ಇದು ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವನ್ನು ಸುರಕ್ಷಿತವಾಗಿಡಲು ಮತ್ತು ಎರಡು ವ್ಯವಸ್ಥೆಗಳ ನಡುವೆ ಕಳುಹಿಸಲಾಗುವ ಯಾವುದೇ ಸೂಕ್ಷ್ಮ ಡೇಟಾವನ್ನು ರಕ್ಷಿಸಲು ಪ್ರಮಾಣಿತ ತಂತ್ರಜ್ಞಾನವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ, ಸಂಭಾವ್ಯ ವೈಯಕ್ತಿಕ ವಿವರಗಳು ಸೇರಿದಂತೆ ವರ್ಗಾವಣೆಯಾಗುವ ಯಾವುದೇ ಮಾಹಿತಿಯನ್ನು ಅಪರಾಧಿಗಳು ಓದುವುದು ಮತ್ತು ಮಾರ್ಪಡಿಸುವುದನ್ನು ತಡೆಯುತ್ತದೆ. ಆಧುನಿಕ browsers ಗಳಿಗೆ SSL ಅಗತ್ಯವಿದೆ, ಇದು ವೆಬ್‌ಸೈಟ್ ರಚಿಸುವಾಗ ಮತ್ತು ನಡೆಸುವಾಗ ಅತ್ಯಗತ್ಯವಾಗಿಸುತ್ತದೆ.

## Media

Media ಎಂದರೆ ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ರಚಿಸುವ ಚಿತ್ರಗಳು, ಆಡಿಯೋ, ವೀಡಿಯೋ, ಮತ್ತು ಇತರ ಫೈಲ್‌ಗಳು.

WordPress Multisite ನಲ್ಲಿ Network sites ಒಂದೇ database ಹಂಚಿಕೊಳ್ಳುತ್ತವೆ, ಆದರೆ media files ಗಾಗಿ filesystem ನಲ್ಲಿ ಪ್ರತ್ಯೇಕ paths ನಿರ್ವಹಿಸುತ್ತವೆ.

ಪ್ರಮಾಣಿತ WordPress ಸ್ಥಳ (wp-content/uploads) ಉಳಿಯುತ್ತದೆ; ಆದಾಗ್ಯೂ, ಅದರ path ಅನ್ನು network site ನ ಅನನ್ಯ ID ಪ್ರತಿಬಿಂಬಿಸಲು ಬದಲಾಯಿಸಲಾಗುತ್ತದೆ. ಆದ್ದರಿಂದ network site ಗೆ media files wp-contents/uploads/site/[id] ಎಂದು ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ.

## Permalinks

Permalinks ಎಂಬುದು ನಿಮ್ಮ ಸೈಟ್‌ನಲ್ಲಿನ ವೈಯಕ್ತಿಕ blog post ಅಥವಾ page ನ ಶಾಶ್ವತ URLs. Permalinks ಅನ್ನು **pretty links** ಎಂದೂ ಕರೆಯಲಾಗುತ್ತದೆ. Default ಆಗಿ, WordPress URLs query string format ಬಳಸುತ್ತವೆ, ಅದು ಈ ರೀತಿ ಕಾಣುತ್ತದೆ:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite ಎಂಬುದು WordPress plugin ಆಗಿದ್ದು, WordPress Multisite installs ಗಾಗಿ ರಚಿಸಲಾಗಿದೆ, ಇದು ನಿಮ್ಮ WordPress install ಅನ್ನು [WordPress.com](https://WordPress.com) ನಂತಹ ಪ್ರೀಮಿಯಂ ಸೈಟ್‌ಗಳ ನೆಟ್‌ವರ್ಕ್ ಆಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ – ಗ್ರಾಹಕರು ಮಾಸಿಕ, ತ್ರೈಮಾಸಿಕ, ಅಥವಾ ವಾರ್ಷಿಕ ಶುಲ್ಕಗಳ ಮೂಲಕ ಸೈಟ್‌ಗಳನ್ನು ರಚಿಸಲು ಅನುಮತಿಸುತ್ತದೆ (ನೀವು ಉಚಿತ ಯೋಜನೆಗಳನ್ನೂ ರಚಿಸಬಹುದು).

## Checkout Form

Checkout Form ಎಂಬುದು Ultimate Multisite registration ಮೂಲಕ subsite, membership, ಮತ್ತು ಬಳಕೆದಾರ ಖಾತೆಗಳ ರಚನೆಯನ್ನು ಒಳಗೊಂಡಿರುವ ಒಂದು ಅಥವಾ ಬಹು-ಹಂತದ ಆರ್ಡರ್ ಫಾರ್ಮ್. ಇದು ಸೈನ್-ಅಪ್ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ಬಳಕೆದಾರರು ಸಲ್ಲಿಸಬೇಕಾದ ವಿಭಿನ್ನ fields ಮತ್ತು payment forms ಅನ್ನು ಒಳಗೊಂಡಿದೆ.

## Webhook

Webhook (web callback ಅಥವಾ HTTP push API ಎಂದೂ ಕರೆಯಲಾಗುತ್ತದೆ) ಎಂಬುದು ಒಂದು app ಇತರ ಅಪ್ಲಿಕೇಶನ್‌ಗಳಿಗೆ ನೈಜ-ಸಮಯದ ಮಾಹಿತಿಯನ್ನು ಒದಗಿಸುವ ವಿಧಾನ. Webhook ಡೇಟಾವನ್ನು ಸಂಭವಿಸಿದಂತೆಯೇ ಇತರ ಅಪ್ಲಿಕೇಶನ್‌ಗಳಿಗೆ ತಲುಪಿಸುತ್ತದೆ, ಅಂದರೆ ನೀವು ಡೇಟಾವನ್ನು ತಕ್ಷಣವೇ ಪಡೆಯುತ್ತೀರಿ.

**Ultimate Multisite webhooks** ಅಪರಿಮಿತ ಸಾಧ್ಯತೆಗಳನ್ನು ತೆರೆಯುತ್ತವೆ, ನೆಟ್‌ವರ್ಕ್ admins ಎಲ್ಲಾ ರೀತಿಯ ವಿಚಿತ್ರ-ಆದರೆ-ಉಪಯುಕ್ತ integrations ಮಾಡಲು ಅನುಮತಿಸುತ್ತವೆ, ವಿಶೇಷವಾಗಿ _Zapier ಮತ್ತು IFTTT_ ನಂತಹ ಸೇವೆಗಳೊಂದಿಗೆ ಬಳಸಿದಾಗ.

## Events

Event ಎಂಬುದು ಬಳಕೆದಾರ ಅಥವಾ ಇನ್ನೊಂದು ಮೂಲ ಕ್ರಿಯೆಯ ಫಲವಾಗಿ ಸಂಭವಿಸುವ ಕ್ರಿಯೆ, ಉದಾಹರಣೆಗೆ mouse click. Ultimate Multisite ನಿಮ್ಮ ಇಡೀ network ನಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಎಲ್ಲಾ events ಮತ್ತು logs ಅನ್ನು ದಾಖಲಿಸುತ್ತದೆ. ಇದು ನಿಮ್ಮ multisite ನಲ್ಲಿ ನಡೆಯುವ ವಿಭಿನ್ನ ಚಟುವಟಿಕೆಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತದೆ, ಉದಾಹರಣೆಗೆ plan ಬದಲಾವಣೆಗಳು.
