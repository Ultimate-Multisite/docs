---
title: ಬಿಡುಗಡೆ ಟಿಪ್ಪಣಿಗಳು
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# ಬಿಡುಗಡೆ ಟಿಪ್ಪಣಿಗಳು

## ಆವೃತ್ತಿ 2.13.0 — 2026-06-05 ರಂದು ಬಿಡುಗಡೆ {#version-2130--released-on-2026-06-05}

- ಹೊಸದು: ಗ್ರಾಹಕರ Account, checkout, billing, ಸೈಟ್, invoice, template ಬದಲಾವಣೆ, ಮತ್ತು domain mapping ಹರಿವುಗಳಿಗೆ sovereign-tenant ಬೆಂಬಲ ಸೇರಿಸಲಾಗಿದೆ. ಇದರಿಂದ tenant networks ನಿರ್ವಹಿತ ಕ್ರಿಯೆಗಳಿಗೆ ಗ್ರಾಹಕರನ್ನು ಮುಖ್ಯ ಸೈಟ್‌ಗೆ ಮರಳಿ ಕಳುಹಿಸಬಹುದು.
- ಹೊಸದು: recurring memberships ಗಾಗಿ renewal-credential ಪರಿಶೀಲನೆಗಳನ್ನು ಸೇರಿಸಲಾಗಿದೆ. ಉಳಿಸಿದ billing agreement, subscription, ಅಥವಾ vault token ಇಲ್ಲದಿದ್ದಾಗ gateways auto-renewal ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಬಹುದು.
- ಹೊಸದು: background jobs ವಿಳಂಬವಾಗುವ hosts ನಲ್ಲಿ checkout-to-site provisioning ಹೆಚ್ಚು ವಿಶ್ವಾಸಾರ್ಹವಾಗಲು pending site creation ಗಾಗಿ HMAC-verified loopback publishing ಸೇರಿಸಲಾಗಿದೆ.
- ಹೊಸದು: SSO URLs, checkout-form base domains, ಮತ್ತು automatic domain-record creation ಗಾಗಿ developer extension points ಸೇರಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: mapped domains, anonymous broker visits, logout, ಮತ್ತು cross-plugin dependency conflicts ನಲ್ಲಿ SSO ಈಗ ಹೆಚ್ಚು ವಿಶ್ವಾಸಾರ್ಹವಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Pending site creation ಈಗ stale publish flags ನಿಂದ ಚೇತರಿಸಿಕೊಂಡು ಗ್ರಾಹಕರು site-creation screen ನಲ್ಲಿ ಸಿಲುಕಿಕೊಳ್ಳದಂತೆ ಮಾಡುತ್ತದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: shared checkout-form base domains ಗಾಗಿ domain records ಇನ್ನು ರಚಿಸಲಾಗುವುದಿಲ್ಲ, ಮತ್ತು ಯಾವುದೇ integration ಸಕ್ರಿಯವಾಗಿಲ್ಲದಿದ್ದಾಗ ಬಳಸದೇ ಇರುವ host-provider background jobs ಬಿಟ್ಟುಹೋಗುತ್ತವೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Checkout, billing address, password reset, email verification, template switching, tours, ಮತ್ತು customer Dashboard edge cases ಈಗ ಸಾಮಾನ್ಯ ಗ್ರಾಹಕ ಹರಿವುಗಳನ್ನು ತಡೆಯುವುದಿಲ್ಲ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: recipient lists ಅಥವಾ mail transports ವಿಫಲವಾದಾಗ SMTP/plugin fatal errors ತಪ್ಪಿಸುವುದರ ಜೊತೆಗೆ broadcast emails ಈಗ ಸ್ವೀಕರಿಸುವವರನ್ನು ಖಾಸಗಿಯಾಗಿಡುತ್ತವೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Membership renewals, expiration display, ಮತ್ತು payment collection edge cases ಈಗ ತಕ್ಷಣದ expirations, crashes, ಅಥವಾ ಅಗತ್ಯ ಪಾವತಿಗಳು ತಪ್ಪಿಹೋಗುವುದನ್ನು ತಡೆಯುತ್ತವೆ.
- ಸುಧಾರಿಸಲಾಗಿದೆ: WordPress ಹೊಂದಾಣಿಕೆಯನ್ನು 7.0 ವರೆಗೆ ಪರೀಕ್ಷಿಸಲಾಗಿದೆ, production Vue assets ಅನ್ನು npm sources ನಿಂದ ಮರುನಿರ್ಮಿಸಲಾಗಿದೆ, ಮತ್ತು Cypress end-to-end coverage ಈಗ ಹೆಚ್ಚು checkout, setup, SSO, ಮತ್ತು gateway ಹರಿವುಗಳನ್ನು ಪರೀಕ್ಷಿಸುತ್ತದೆ.

## ಆವೃತ್ತಿ 2.12.0 — 2026-05-15 ರಂದು ಬಿಡುಗಡೆ {#version-2120--released-on-2026-05-15}

- ಹೊಸದು: domain mapping integration ಜೊತೆಗೆ ಬೆಂಬಲಿತ host provider ಆಗಿ Hostinger (hPanel) ಸೇರಿಸಲಾಗಿದೆ
- ಹೊಸದು: Site Exporter ಈಗ ಸುಗಮ network-wide site restoration ಗಾಗಿ network import bundles ಅನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಸ್ವೀಕರಿಸುವವರ ವಿಳಾಸಗಳು ಬಹಿರಂಗವಾಗದಂತೆ BCC broadcast emails ಈಗ undisclosed-recipients header ಬಳಸುತ್ತವೆ
- ಸರಿಪಡಿಸಲಾಗಿದೆ: date ಅಲ್ಲದ ಮೌಲ್ಯದಿಂದ ಉಳಿಸುವಾಗ membership expiration date ಇನ್ನು ಹಾಳಾಗುವುದಿಲ್ಲ
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Stripe membership updates ಈಗ deprecated deleteDiscount API ಅನ್ನು ಕರೆಯದೆ discounts ಅನ್ನು ಸರಿಯಾಗಿ clear ಮಾಡುತ್ತವೆ
- ಸರಿಪಡಿಸಲಾಗಿದೆ: domain-mapped sites ನಲ್ಲಿ SSO redirects ಈಗ infinite redirect loops ತಡೆಯಲು ಮಿತಿಗೊಳಿಸಲಾಗಿದೆ
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Setup wizard image picker ಆಯ್ಕೆ ಈಗ underlying data model ಅನ್ನು ಸರಿಯಾಗಿ ನವೀಕರಿಸುತ್ತದೆ
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Site Exporter CLI ಈಗ ಸರಿಯಾದ default network site selection ಅನ್ನು ಉಳಿಸುತ್ತದೆ
- ಸುಧಾರಿಸಲಾಗಿದೆ: plugin package ನಿಂದ bundled wp-cli ತೆಗೆದುಹಾಕಲಾಗಿದೆ, ಇದರಿಂದ plugin ಗಾತ್ರ ಕಡಿಮೆಯಾಗಿದೆ

## ಆವೃತ್ತಿ 2.11.0 — 2026-05-11 ರಂದು ಬಿಡುಗಡೆ {#version-2110--released-on-2026-05-11}

- ಹೊಸದು: Site exports ಈಗ self-booting `index.php` ಅನ್ನು bundle ಮಾಡುತ್ತವೆ, ಆದ್ದರಿಂದ ZIP ಅನ್ನು ಪ್ರತ್ಯೇಕ plugin install ಇಲ್ಲದೆ fresh host ನಲ್ಲಿ ಸ್ಥಾಪಿಸಬಹುದು.
- ಹೊಸದು: Network export administrators ಗೆ Site Export admin page ನಿಂದ ಎಲ್ಲಾ subsites ಅನ್ನು ಒಂದೇ archive ನಲ್ಲಿ export ಮಾಡಲು ಅವಕಾಶ ನೀಡುತ್ತದೆ.
- ಹೊಸದು: Allow Site Templates plan toggle ಈಗ fallback chain ಮೂಲಕ ಜಾರಿಗೆ ಬರುತ್ತದೆ, plan limits ಗಾಗಿ template ಲಭ್ಯತೆಯನ್ನು ಸರಿಯಾಗಿ ನಿರ್ಬಂಧಿಸುತ್ತದೆ.
- ಹೊಸದು: ಅಗತ್ಯ field configure ಮಾಡದೆ product ಸೇರಿಸಿದಾಗ Checkout form editor ಎಚ್ಚರಿಸುತ್ತದೆ.
- ಹೊಸದು: Import/Export settings tab ಈಗ ತನ್ನ scope ಅನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ವಿವರಿಸಿ Site Export tool ಗೆ ನೇರವಾಗಿ link ಮಾಡುತ್ತದೆ.

## ಆವೃತ್ತಿ 2.10.0 — 2026-05-05 ರಂದು ಬಿಡುಗಡೆ {#version-2100--released-on-2026-05-05}

- ಹೊಸದು: seamless gateway configuration ಗಾಗಿ OAuth flag gate ಜೊತೆಗೆ manual credential entry ಗಾಗಿ PayPal guided setup wizard.
- ಹೊಸದು: Template switch customer panel ಅನ್ನು current-template card, persistent grid, ಮತ್ತು **ಪ್ರಸ್ತುತ template reset ಮಾಡಿ** button ಜೊತೆಗೆ ಮರುವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: AJAX failure ಆಗಿದಾಗ Template switching ಇನ್ನು UI ಅನ್ನು hang ಮಾಡುವುದಿಲ್ಲ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Template switching permission states ಅನ್ನು unauthorized access ವಿರುದ್ಧ ಸುರಕ್ಷಿತಗೊಳಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Site override inputs ಅನ್ನು ಉಳಿಸುವ ಮೊದಲು validate ಮಾಡಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: address ಖಾಲಿಯಾಗಿರುವಾಗ Billing address prompt ಈಗ ತೋರಿಸಲಾಗುತ್ತದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: PHP 8.1 null-to-string deprecation notices ಪರಿಹರಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: timing issues ತಡೆಯಲು init hook ಕ್ಕಿಂತ ಮೊದಲು Currents lazy-loaded ಮಾಡಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಎಲ್ಲಾ login flows ನಲ್ಲಿ filtered SSO path ಗೌರವಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Blank site identity options ಉಳಿಸುವಾಗ ಸಂರಕ್ಷಿಸಲಾಗಿದೆ.

## ಆವೃತ್ತಿ 2.9.0 — 2026-04-30 ರಂದು ಬಿಡುಗಡೆ {#version-290--released-on-2026-04-30}

- ಹೊಸದು: Single-site export ಮತ್ತು import ಅನ್ನು **Tools > Export & Import** ಅಡಿಯಲ್ಲಿ ಸೇರಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Export ZIP files ಈಗ authenticated download endpoint ಮೂಲಕ ನೀಡಲಾಗುತ್ತವೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: pending export/import queries ನಲ್ಲಿ SQL injection ಅಪಾಯ ಮತ್ತು query ಸಮಸ್ಯೆಗಳನ್ನು ಸರಿಪಡಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: admin ಗ್ರಾಹಕರ email ಅನ್ನು manually verify ಮಾಡಿದಾಗ Pending site published ಆಗುವುದಿಲ್ಲ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: membership ಇಲ್ಲದಾಗ orphaned pending_site records ಸ್ವಚ್ಛಗೊಳಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Settings nav padding ಮತ್ತು search anchor navigation ಸರಿಪಡಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Pending sites ಈಗ All Sites view ನಲ್ಲಿ ಮೊದಲು ತೋರಿಸಲಾಗುತ್ತವೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: 403 errors ತಡೆಯಲು Screenshot provider (mShots) User-Agent header ಸೇರಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Import cron schedule circular dependency ಪರಿಹರಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: user settings keys ನಲ್ಲಿ Tour IDs ಅನ್ನು underscores ಗೆ normalise ಮಾಡಲಾಗಿದೆ.
- ಸುಧಾರಿಸಲಾಗಿದೆ: ಉತ್ತಮ ಹೊಂದಾಣಿಕೆಗಾಗಿ Alchemy/Zippy ಬದಲು ZipArchive ಈಗ ಬಳಸಲಾಗುತ್ತದೆ.

## ಆವೃತ್ತಿ 2.8.0 — 2026-04-29 {#version-280--released-on-2026-04-29}

- ಹೊಸದು: Other Options ಸೆಟ್ಟಿಂಗ್‌ಗಳ UIಗೆ Enable Jumper toggle ಸೇರಿಸಲಾಗಿದೆ.
- ಹೊಸದು: ಚೆಕ್‌ಔಟ್ ಫಾರ್ಮ್‌ಗಳ ಪಟ್ಟಿ ಟೇಬಲ್‌ಗೆ ಸ್ಥಿತಿ ಕಾಲಮ್ ಸೇರಿಸಲಾಗಿದೆ.
- ಹೊಸದು: ಕಸ್ಟಮ್ MU-plugin sunrise ವಿಸ್ತರಣೆಗಳಿಗೆ Addon sunrise file loader.
- ಸುಧಾರಿಸಲಾಗಿದೆ: ಸೆಟ್ಟಿಂಗ್‌ಗಳ ಪುಟದಿಂದ ದೋಷ-ವರದಿ opt-in ಸೆಟ್ಟಿಂಗ್ ತೆಗೆದುಹಾಕಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಧನ್ಯವಾದ ಪುಟದ ಸೈಟ್ ಕಾರ್ಡ್ — ಚಿತ್ರವನ್ನು ಈಗ ಮಿತಿಗೊಳಿಸಲಾಗಿದೆ ಮತ್ತು ಲಿಂಕ್‌ಗಳಿಗೆ ಸರಿಯಾದ ಶೈಲಿ ನೀಡಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಒದಗಿಸುವಿಕೆಯನ್ನು thum.io ಯಿಂದ WordPress.com mShots ಗೆ ಬದಲಾಯಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: Enable Registration ಮತ್ತು Default Role ಈಗ ಹೊಸ ಇನ್‌ಸ್ಟಾಲ್‌ನಲ್ಲಿ ಸರಿಯಾದ ಡೀಫಾಲ್ಟ್‌ಗಳನ್ನು ಹೊಂದಿಸುತ್ತವೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಡೊಮೇನ್‌ನಲ್ಲಿ ಪೋರ್ಟ್ ಇದ್ದಾಗ `get_site_url()` ಇನ್ನು ಖಾಲಿ ಮೌಲ್ಯ ಹಿಂತಿರುಗಿಸುವುದಿಲ್ಲ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: `copy_media` ಸೆಟ್ಟಿಂಗ್ ಖಾಲಿಯಾಗಿದ್ದಾಗಲೂ ಕ್ಲೋನ್ ಮೀಡಿಯಾ ಫೈಲ್‌ಗಳನ್ನು ಈಗ ಸರಿಯಾಗಿ ನಕಲಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: network-activate sitemeta ಬರವಣಿಗೆಯ ನಂತರ object cache ಅನ್ನು ಸರಿಯಾಗಿ ಅಮಾನ್ಯಗೊಳಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: 3-ಭಾಗದ ಡೊಮೇನ್‌ಗಳಿಗೆ DNS ಪರಿಶೀಲನೆಯಾಗುವಾಗ ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಅನ್ನು ಸ್ವಯಂ ಮುಖ್ಯವಾಗಿ ಮಾಡಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಅವಧಿ ಮೀರಿದ ಪಾವತಿಯನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿದಾಗ ಬಾಕಿಯಿದ್ದ ಸದಸ್ಯತ್ವವನ್ನು ರದ್ದುಗೊಳಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: inline login prompt ಮುಚ್ಚಿದ ನಂತರ ಪಾಸ್‌ವರ್ಡ್ ಶಕ್ತಿ ಪರಿಶೀಲಕವನ್ನು ಮತ್ತೆ ಬಂಧಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಸೈಟ್ ಈಗಾಗಲೇ ರಚನೆಯಾಗಿದ್ದಾಗ ಧನ್ಯವಾದ ಪುಟದಲ್ಲಿ ಅನಂತ ಪುಟ ಮರುಲೋಡ್ ನಿಲ್ಲಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: plugin ಸಕ್ರಿಯಗೊಳಿಸುವಿಕೆ ಮತ್ತು ಸೆಟ್ಟಿಂಗ್‌ಗಳ ಉಳಿಸುವಿಕೆಯಲ್ಲಿ WP core ನೋಂದಣಿ ಆಯ್ಕೆಯನ್ನು ಸಿಂಕ್ ಮಾಡಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: PHP 8.4 ಹೊಂದಾಣಿಕೆಗೆ `calculate_expiration` ನಲ್ಲಿ Null expiration guard ಸೇರಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಗ್ರಾಹಕರಿಗೆ ಈಗಾಗಲೇ ಸಕ್ರಿಯ ಸದಸ್ಯತ್ವ ಇದ್ದಾಗ ಡುಪ್ಲಿಕೇಟ್ ಸೈನ್‌ಅಪ್‌ಗಳನ್ನು ತಡೆಯಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಚೆಕ್‌ಔಟ್‌ನಲ್ಲಿ `date_expiration` ಗಾಗಿ Null check ಸೇರಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಸೈಟ್ provision ಗಟ್ಟಿಗೊಳಿಸಲಾಗಿದೆ — ಮಿತಿಗಳು, ಸದಸ್ಯತ್ವ ನಿರ್ಣಯ, ಡೊಮೇನ್ promotion.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಪರಿಶೀಲನೆ ವಿಫಲವಾದಾಗ Pre-install check status label ಅನ್ನು NOT Activated ಎಂದು ಸರಿಪಡಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಇಮೇಲ್ ಪರಿಶೀಲನಾ URL‌ಗಳಿಗೆ ಚೆಕ್‌ಔಟ್ ಡೊಮೇನ್ ಬಳಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಪಾಸ್‌ವರ್ಡ್ field ಇಲ್ಲದಿದ್ದಾಗ ಚೆಕ್‌ಔಟ್ ನಂತರ ಸ್ವಯಂ-login.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಉಚಿತ ಸದಸ್ಯತ್ವಗಳು ಇನ್ನು ಅವಧಿ ಮೀರುವುದಿಲ್ಲ — lifetime ಎಂದು ಪರಿಗಣಿಸಲಾಗುತ್ತದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: ಗ್ರಾಹಕರು ಇಮೇಲ್ ಪರಿಶೀಲಿಸುವವರೆಗೆ Email verification gate ಸೈಟ್ publish ಅನ್ನು ತಡೆಹಿಡಿಯುತ್ತದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: SES v2 API endpoint base path ಮತ್ತು identity route ಸರಿಪಡಿಸಲಾಗಿದೆ.
- ಸರಿಪಡಿಸಲಾಗಿದೆ: pre-submit catch block ನಲ್ಲಿ `wu_inline_login_error` hook emitted ಮಾಡಲಾಗಿದೆ.
