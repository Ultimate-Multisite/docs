---
title: WooCommerce ಏಕೀಕರಣ ಬದಲಾವಣೆಗಳ ದಾಖಲೆ
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce Integration ಬದಲಾವಣೆಗಳ ದಾಖಲೆ

Version 2.2.0 - 2026-07-01 ರಂದು ಬಿಡುಗಡೆ
* ಹೊಸದು: Ultimate Multisite ತೆರಿಗೆ ಮೊತ್ತಗಳು ಈಗ checkout ನಲ್ಲಿ ಪ್ರತ್ಯೇಕ WooCommerce ಶುಲ್ಕ ಸಾಲುಗಳಾಗಿ ಕಾಣಿಸುತ್ತವೆ. ಇದರಿಂದ ಪಾವತಿಗೆ ಮೊದಲು ತೆರಿಗೆ ಒಟ್ಟುಗಳು ಹೆಚ್ಚು ಸ್ಪಷ್ಟವಾಗುತ್ತವೆ.
* ಹೊಸದು: WooCommerce Subscriptions ಮರುಪ್ರಯತ್ನ ಅವಧಿಯಲ್ಲಿ ವಿಫಲ-ನವೀಕರಣ ಅಮಾನತು ಬಯಸುವ ಸೈಟ್‌ಗಳಿಗಾಗಿ ಆಯ್ಕೆಯ "ವಿಫಲ ನವೀಕರಣಗಳಲ್ಲಿ Memberships ಅನ್ನು ತಕ್ಷಣ ಅಮಾನತು ಮಾಡಿ" ಸೆಟ್ಟಿಂಗ್ ಮತ್ತು `wu_woo_suspend_on_payment_failure` filter ಸೇರಿಸಲಾಗಿದೆ.
* ಸರಿಪಡಿಸಲಾಗಿದೆ: ವಿಫಲವಾದ ಅಥವಾ ಮರುಪಡೆಯಲಾದ ನವೀಕರಣಗಳ ನಂತರ Ultimate Multisite memberships ಜೊತೆ ಸಮನ್ವಯ ತಪ್ಪಿರಬಹುದಾದ WooCommerce Subscription ಸ್ಥಿತಿಗಳನ್ನು ಹೊಂದಿಸಲಾಗಿದೆ.
* ಸರಿಪಡಿಸಲಾಗಿದೆ: Ultimate Multisite ಕರೆನ್ಸಿ ಪಟ್ಟಿಯಲ್ಲಿ WooCommerce ಅಂಗಡಿ ಕರೆನ್ಸಿ ಇಲ್ಲದಿದ್ದಾಗ ಅದನ್ನು ಸೇರಿಸಲಾಗಿದೆ.
* ಸರಿಪಡಿಸಲಾಗಿದೆ: subscribers ಅನ್ನು WooCommerce checkout ಗೆ ಮರುನಿರ್ದೇಶಿಸುವಾಗ ಗ್ರಾಹಕರ ಬಿಲ್ಲಿಂಗ್ ವಿವರಗಳನ್ನು ಉಳಿಸಲಾಗಿದೆ.
* ಸುಧಾರಿಸಲಾಗಿದೆ: Jetpack Autoloader 5 ಜೊತೆ ಹೊಂದಾಣಿಕೆ ಸೇರಿಸಲಾಗಿದೆ.
* ಸುಧಾರಿಸಲಾಗಿದೆ: ಬಿಡುಗಡೆ ಪ್ಯಾಕೇಜ್ ರಚನೆಯನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಲಾಗಿದೆ. ಇದರಿಂದ GitHub ಮತ್ತು marketplace zip‌ಗಳು ಒಳಹೊಕ್ಕ staging directories ಮತ್ತು ಅಭಿವೃದ್ಧಿ ಕಡತಗಳನ್ನು ತಪ್ಪಿಸುತ್ತವೆ.

Version 2.0.6 - 2026-01-16 ರಂದು ಬಿಡುಗಡೆ
* ಸುಧಾರಣೆ: addon ನಲ್ಲಿ core subscriptions ಸೇರಿಸಿ. ಇನ್ನು Woocommerce Subscriptinos extension ಅಗತ್ಯವಿಲ್ಲ.

Version 2.0.5 - 2026-01-09 ರಂದು ಬಿಡುಗಡೆ
* ಸುಧಾರಣೆ: glotpress API ಇಂದ ಅನುವಾದಗಳನ್ನು ಲೋಡ್ ಮಾಡಿ.
* ಸರಿಪಡಿಸಲಾಗಿದೆ: ಕೆಲವು page builders ನಲ್ಲಿ fatal error.
* ಸರಿಪಡಿಸಲಾಗಿದೆ: ಗ್ರಾಹಕನು ಮುಖ್ಯ site‌ನ ಸದಸ್ಯನಾಗಿದ್ದಾಗ ಅನಂತ ಮರುನಿರ್ದೇಶನ.

Version 2.0.4 - 2025-11-14 ರಂದು ಬಿಡುಗಡೆ
* ಸೇರಿಸಲಾಗಿದೆ: ಇನ್ನೂ ಅನೇಕ ಭಾಷೆಗಳಿಗೆ ಅನುವಾದಗಳು.
* ಬದಲಿಸಲಾಗಿದೆ: Ultimate Multisite: Woocommerce Integration ಎಂದು ಮರುಹೆಸರಿಸಲಾಗಿದೆ.
* ಸೇರಿಸಲಾಗಿದೆ: Woocommerce 10.2.1 ಜೊತೆ ಹೊಂದಾಣಿಕೆ.
* ಸೇರಿಸಲಾಗಿದೆ: Woocommerce Subscriptions 7.7.0 ಜೊತೆ ಹೊಂದಾಣಿಕೆ.
* ಸರಿಪಡಿಸಲಾಗಿದೆ: PHP 8.4 ಜೊತೆ ಹೊಂದಾಣಿಕೆ
* ಸರಿಪಡಿಸಲಾಗಿದೆ: WC account page ಇಲ್ಲದಿದ್ದಾಗ ಮರುನಿರ್ದೇಶನ ದೋಷ.

Version 2.0.3 - 2025-08-13 ರಂದು ಬಿಡುಗಡೆ
* ಬದಲಿಸಲಾಗಿದೆ: ಹೊಸ marketplace ಜೊತೆ ಸ್ವಯಂಚಾಲಿತ ನವೀಕರಣಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ.

Version 2.0.2 - 2025-07-05 ರಂದು ಬಿಡುಗಡೆ
* ಬದಲಿಸಲಾಗಿದೆ: Multisite Ultimate: Woocommerce Integration ಎಂದು ಮರುಹೆಸರಿಸಲಾಗಿದೆ.
* ಸೇರಿಸಲಾಗಿದೆ: Woocommerce 9.8.1 ಜೊತೆ ಹೊಂದಾಣಿಕೆ.
* ಸೇರಿಸಲಾಗಿದೆ: Woocommerce Subscriptions 7.3.0 ಜೊತೆ ಹೊಂದಾಣಿಕೆ.
* ಸರಿಪಡಿಸಲಾಗಿದೆ: ಗ್ರಾಹಕರಿಂದ subscription ರದ್ದುಮಾಡುವುದು.
* ಸರಿಪಡಿಸಲಾಗಿದೆ: checkout block ಬಳಸುವಾಗ fatal error.
* ಸುಧಾರಣೆ: ಈಗ Woocommerce high performance custom order tables ಜೊತೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ.
* ಸರಿಪಡಿಸಲಾಗಿದೆ: WooCommerce checkout ನಲ್ಲಿ ರದ್ದುಮಾಡಿದರೂ membership upgrade ಆಗಬಹುದಿತ್ತು.

Version 2.0.1 - 2023-08-09 ರಂದು ಬಿಡುಗಡೆ

* ಸೇರಿಸಲಾಗಿದೆ: Woocommerce 7.9.0 ಜೊತೆ ಹೊಂದಾಣಿಕೆ.
* ಸೇರಿಸಲಾಗಿದೆ: Woocommerce Subscriptions 5.3.0 ಜೊತೆ ಹೊಂದಾಣಿಕೆ.
* ಸೇರಿಸಲಾಗಿದೆ: membership updates ಗೆ ಬೆಂಬಲ.
* ಸೇರಿಸಲಾಗಿದೆ: Woocommerce ನಲ್ಲಿ trials ಮತ್ತು setup fees ಕುರಿತು ಸೂಚನೆಗಳು.
* ಸೇರಿಸಲಾಗಿದೆ: meta value ಮೂಲಕ Ultimate Multisite Woocommerce products ಗುರುತಿಸುವಿಕೆ.
* ಸೇರಿಸಲಾಗಿದೆ: Ultimate Multisite ಸಂಬಂಧಿತ ಎಲ್ಲಾ Woocommerce products ಗುರುತಿಸಲು ಒಮ್ಮೆ ಮಾತ್ರ ನಡೆಯುವ fix ಸೇರಿಸಲಾಗಿದೆ.
* ಸೇರಿಸಲಾಗಿದೆ: Ultimate Multisite ರಚಿಸಿದ products ಅನ್ನು Woocommerce ಪಟ್ಟಿಯಿಂದ ತೆಗೆದುಹಾಕಲಾಗಿದೆ.
* ಸುಧಾರಣೆ: cart ಗೆ ಅನ್ವಯಿಸಲು non-recurring Woocommerce discount ರಚಿಸಲಾಗಿದೆ.
* ಸುಧಾರಣೆ: recurring discount ಅನ್ನು Woocommerce product ಗೆ ಮರುಸ್ಥಾಪಿಸಲಾಗಿದೆ.
* ಸುಧಾರಣೆ: Woocommerce product ಗೆ recurring discount label ಸೇರಿಸಲಾಗಿದೆ.
* ಸುಧಾರಣೆ: checkout ನಲ್ಲಿ product type ಖಚಿತಪಡಿಸಲಾಗಿದೆ.
* ಸರಿಪಡಿಸಲಾಗಿದೆ: downgrade ಪ್ರಕ್ರಿಯೆಯ ಸಮಯದಲ್ಲಿ membership status ಉಳಿಸಲಾಗಿದೆ.
* ಸರಿಪಡಿಸಲಾಗಿದೆ: cancellation ಪ್ರಕ್ರಿಯೆಯ ಸಮಯದಲ್ಲಿ ದೋಷಗಳನ್ನು ತಪ್ಪಿಸಲು subscription ಇದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಲಾಗಿದೆ.
* ಸರಿಪಡಿಸಲಾಗಿದೆ: Woocommerce subscriptions ನಲ್ಲಿ ಬಳಸಲು start subscription date ಸೇರಿಸಲಾಗಿದೆ.
* ಆಂತರಿಕ: ಹೊಸ PHP 8.1 build ಪ್ರಕ್ರಿಯೆ ಜಾರಿಗೊಳಿಸಲಾಗಿದೆ.

Version 2.0.0 - ಸಂಪೂರ್ಣ ಮರುಬರಹ.

* ಸೇರಿಸಲಾಗಿದೆ: gateway ಬದಲಿಸುವಾಗ ಅಥವಾ membership ರದ್ದುಮಾಡುವಾಗ woo subscription ತೆಗೆದುಹಾಕಲು cancellation ವಿಧಾನ ಪ್ರಕ್ರಿಯೆ;
* ಸೇರಿಸಲಾಗಿದೆ: memberships ಅನ್ನು downgrade ಮತ್ತು upgrade ಮಾಡಲು handler;
* ಸುಧಾರಣೆ: account update ಅನುಮತಿಸಲು subsites ನಲ್ಲಿ customer update form ಮೇಲೆ woocommerce dependencies ಲೋಡ್ ಮಾಡಿ;
* ಸುಧಾರಣೆ: ಇಲ್ಲದಿದ್ದರೆ Woocommerce cart ಸರಿಯಾಗಿ ಲೋಡ್ ಮಾಡಿ;
* ಸುಧಾರಣೆ: checkout ಪ್ರಕ್ರಿಯೆ ಮಾಡುವಾಗ ನಾವು main site tables ಮೇಲೆ ಇರುವುದನ್ನು ಖಚಿತಪಡಿಸಿ;
* ಸುಧಾರಣೆ: Ultimo renewal order ಅನ್ನು Woocommerce subscription order value ಆಧಾರವಾಗಿ ಮಾಡಿ, last payment ಆಧಾರವಾಗಿ ಅಲ್ಲ;
* ಸರಿಪಡಿಸಲಾಗಿದೆ: WU Membership button link;
* ಸರಿಪಡಿಸಲಾಗಿದೆ: Woocommerce subscriptions renewal ಪಾವತಿಯಾದಾಗ Ultimo order ಅನ್ನು paid ಎಂದು ಹೊಂದಿಸಿ;
* Build: builder ಆಗಿ MPB ಸೇರಿಸಿ;

Version 2.0.0-beta-5 - 2022-01-21 ರಂದು ಬಿಡುಗಡೆ

* ಆಂತರಿಕ: hooks ಮತ್ತು filters generator ಸೇರಿಸಲಾಗಿದೆ;
* ಆಂತರಿಕ: developer quality of life ಗಾಗಿ Ultimate Multisite stubs ಸೇರಿಸಲಾಗಿದೆ;
* ಸರಿಪಡಿಸಲಾಗಿದೆ: ಅಗತ್ಯವಿಲ್ಲದಾಗ ಹಲವು products ರಚನೆಯಾಗುವುದನ್ನು ತಡೆಯಲಾಗಿದೆ;

Version 2.0.0-beta.4 - 2021-09-23

* ಸರಿಪಡಿಸಲಾಗಿದೆ: WooCommerce ಮುಖ್ಯ site ಮಾತ್ರವಲ್ಲ, network active ಆಗಿರಬೇಕು ಎಂಬ ಅಗತ್ಯ;
* ಸುಧಾರಣೆ: add-on ಅನ್ನು mu-plugin ಆಗಿ ಬಳಸಲು ಅನುಮತಿಸುವ filter ಸೇರಿಸಲಾಗಿದೆ;

Version 2.0.0-beta.3 - 2021-05-28

* ಸರಿಪಡಿಸಲಾಗಿದೆ: dashboard access control ಅತಿಯಾಗಿ ಕಠಿಣವಾಗಿತ್ತು;
* ಸುಧಾರಣೆ: Ultimate Multisite top-menu ಗೆ WooCommerce help links ಸೇರಿಸಲಾಗಿದೆ;

Version 2.0.0-beta.2 - 2021-05-04

* ಸುಧಾರಣೆ: WCS renewal order ರಚನೆಯಾಗುವಾಗ Ultimo ನಲ್ಲಿ pending payments ರಚಿಸುತ್ತದೆ;
* ಸುಧಾರಣೆ: Ultimate Multisite customer data ಬಳಸಿ billing fields ಅನ್ನು ಮುಂಚಿತವಾಗಿ ತುಂಬುತ್ತದೆ;
* ಸುಧಾರಣೆ: gateways ಗಾಗಿ billing fields ಅನ್ನು ಮತ್ತೆ ಸೇರಿಸುತ್ತದೆ;

Version 2.0.0-beta.1 - 2021-05-04

* ಆರಂಭಿಕ beta ಬಿಡುಗಡೆ

-- ಹಳೆಯ ಆವೃತ್ತಿಗಳು --

Version 1.2.6 - 26/03/2020

* ಸರಿಪಡಿಸಲಾಗಿದೆ: WooCommerce Subscriptions ನ ಹೊಸ ಆವೃತ್ತಿಗಳೊಂದಿಗೆ ಸಣ್ಣ ಅಹೊಂದಾಣಿಕೆ;

Version 1.2.5 - 26/08/2019

* ಸರಿಪಡಿಸಲಾಗಿದೆ: ಹಿಂದಿನ ಬಿಡುಗಡೆಯಲ್ಲಿ ದೋಷ;

Version 1.2.4 - 22/08/2019

* ಸುಧಾರಿಸಲಾಗಿದೆ: integration ನಂತರ ತಕ್ಷಣ WooCommerce checkout screen ಗೆ ಮರುನಿರ್ದೇಶಿಸಲು ಆಯ್ಕೆ ಸೇರಿಸಲಾಗಿದೆ;

Version 1.2.3 - 26/05/2019

* ಸರಿಪಡಿಸಲಾಗಿದೆ: ಕೆಲವು edge cases ನಲ್ಲಿ WooCommerce ಗಾಗಿ payment email ಕಾಣೆಯಾಗಿತ್ತು;

Version 1.2.2 - 27/02/2019

* ಸೇರಿಸಲಾಗಿದೆ: WooCommerce Subscription integration ನಲ್ಲಿ setup fees ಗೆ ಬೆಂಬಲ;

Version 1.2.1 - 17/11/2018

* ಸರಿಪಡಿಸಲಾಗಿದೆ: Ultimate Multisite version 1.9.0 ಜೊತೆ ಹೊಂದಾಣಿಕೆ ಸಮಸ್ಯೆಗಳು;

Version 1.2.0 - 10/09/2018

* ಸುಧಾರಿಸಲಾಗಿದೆ: add-ons ಗಾಗಿ ಹೊಸ updates URL;
* ಸೇರಿಸಲಾಗಿದೆ: WooCommerce Subscription ಗೆ beta ಬೆಂಬಲ;

Version 1.1.2 - 11/02/2018

* ಸರಿಪಡಿಸಲಾಗಿದೆ: WooCommerce endpoints ಬದಲಾವಣೆಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಲು Pay ಗೆ link ಅನ್ನು dynamic ಆಗಿ ರಚಿಸಲಾಗುತ್ತಿದೆ;
* ಸುಧಾರಿಸಲಾಗಿದೆ: payment_completed ಕರೆ ಮಾಡಿದಾಗ ನಮ್ಮ renewal hooks ಸರಿಯಾದ ಸಮಯದಲ್ಲಿ run ಆಗುವುದನ್ನು ಖಚಿತಪಡಿಸಲು ಈಗ ನಮ್ಮ orders ಗೆ completed status ಅನ್ನು ನಾವು ಬಲವಂತಪಡಿಸುತ್ತೇವೆ;

Version 1.1.1 - 24/01/2018

* ಸರಿಪಡಿಸಲಾಗಿದೆ: ಈಗ ಮುಖ್ಯ ಸೈಟ್‌ನಲ್ಲಿ WooCommerce ಈಗಷ್ಟೇ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆಯೇ ಎಂಬುದನ್ನೂ ಪರಿಶೀಲಿಸುತ್ತದೆ;
* ಸರಿಪಡಿಸಲಾಗಿದೆ: ತೆರಿಗೆಗಳನ್ನು ಸೇರಿಸಿ order ರಚನೆಗೆ ಅವಕಾಶ ನೀಡಲು over-loadings ಸೇರಿಸಲಾಗಿದೆ;

Version 1.1.0 - 04/11/2017

* ಸರಿಪಡಿಸಲಾಗಿದೆ: ಈಗ integration buttonನ label ನಿಜವಾಗಿಯೂ settings ಅನ್ನು ಪ್ರತಿಬಿಂಬಿಸಲು ಬದಲಾಗುತ್ತದೆ. Ultimate Multisite 1.5.0 ಅಗತ್ಯವಿದೆ;
* ಸರಿಪಡಿಸಲಾಗಿದೆ: WooCommerce network active ಆಗಿರದಿದ್ದರೂ ಮತ್ತು ಮುಖ್ಯ ಸೈಟ್‌ನಲ್ಲಿ ಮಾತ್ರ ಸಕ್ರಿಯಗೊಳಿಸಿದ್ದರೂ WooCommerce Integration ಈಗ ಕೆಲಸ ಮಾಡುತ್ತದೆ;

1.0.0 - ಆರಂಭಿಕ ಬಿಡುಗಡೆ
