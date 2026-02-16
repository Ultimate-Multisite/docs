---
title: ಪಾವತಿ ಪಡೆಯುವುದು
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# ಪಾವತಿ ಪಡೆಯುವುದು (v2)

_**ಮುಖ್ಯ ಸೂಚನೆ: ಈ ಲೇಖನವು Ultimate Multisite ಆವೃತ್ತಿ 2.x ಗೆ ಸಂಬಂಧಿಸಿದೆ.**_

Ultimate Multisite ನಲ್ಲಿ ಅಂತರ್ನಿರ್ಮಿತ ಸದಸ್ಯತ್ವ ಮತ್ತು ಬಿಲ್ಲಿಂಗ್ ವ್ಯವಸ್ಥೆ ಇದೆ. ನಮ್ಮ ಬಿಲ್ಲಿಂಗ್ ವ್ಯವಸ್ಥೆ ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡಲು, ಇ-ಕಾಮರ್ಸ್‌ನಲ್ಲಿ ಹೆಚ್ಚಾಗಿ ಬಳಸುವ ಪಾವತಿ ಗೇಟ್‌ವೇಗಳನ್ನು ಸಂಯೋಜಿಸಿದ್ದೇವೆ. Ultimate Multisite ನಲ್ಲಿ ಡೀಫಾಲ್ಟ್ ಆಗಿ _Stripe_, _PayPal_, ಮತ್ತು Manual Payment ಪಾವತಿ ಗೇಟ್‌ವೇಗಳು ಲಭ್ಯವಿದೆ. ಅವುಗಳ ಸಂಬಂಧಿತ add-on ಗಳನ್ನು ಸ್ಥಾಪಿಸುವ ಮೂಲಕ ನೀವು _WooCommerce_, _GoCardless_ ಮತ್ತು _Payfast_ ಬಳಸಿಯೂ ಪಾವತಿಗಳನ್ನು ಸ್ವೀಕರಿಸಬಹುದು.

## ಮೂಲ ಸೆಟ್ಟಿಂಗ್‌ಗಳು

ಈ ಯಾವುದೇ ಪಾವತಿ ಗೇಟ್‌ವೇಗಳನ್ನು Ultimate Multisite ಪಾವತಿ ಸೆಟ್ಟಿಂಗ್‌ಗಳ ಅಡಿಯಲ್ಲಿ ಕಾನ್ಫಿಗರ್ ಮಾಡಬಹುದು. **Ultimate Multisite ಮೆನು > Settings > Payments** ಗೆ ಹೋಗಿ ಅದನ್ನು ಕಂಡುಹಿಡಿಯಬಹುದು.

![Ultimate Multisite ನಲ್ಲಿ ಪಾವತಿ ಸೆಟ್ಟಿಂಗ್‌ಗಳ ಪುಟ](/img/config/settings-payment-gateways.png)

ನಿಮ್ಮ ಪಾವತಿ ಗೇಟ್‌ವೇ ಸೆಟಪ್ ಮಾಡುವ ಮೊದಲು, ನೀವು ಕಾನ್ಫಿಗರ್ ಮಾಡಬಹುದಾದ ಮೂಲ ಪಾವತಿ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ನೋಡಿ:

**Force auto-renew:** ಬಳಕೆದಾರರು ಆಯ್ಕೆ ಮಾಡಿದ ಬಿಲ್ಲಿಂಗ್ ಆವರ್ತನೆಗೆ ಅನುಗುಣವಾಗಿ ಪ್ರತಿ ಬಿಲ್ಲಿಂಗ್ ಸೈಕಲ್ ಕೊನೆಯಲ್ಲಿ ಪಾವತಿ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪುನರಾವರ್ತನೆಯಾಗುತ್ತದೆ ಎಂದು ಇದು ಖಚಿತಪಡಿಸುತ್ತದೆ.

![Force auto-renew ಟಾಗಲ್ ಸೆಟ್ಟಿಂಗ್](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** ಈ ಆಯ್ಕೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿದರೆ ನಿಮ್ಮ ಗ್ರಾಹಕರು ನೋಂದಣಿ ಪ್ರಕ್ರಿಯೆಯ ಸಮಯದಲ್ಲಿ ಯಾವುದೇ ಹಣಕಾಸು ಮಾಹಿತಿಯನ್ನು ಸೇರಿಸಬೇಕಾಗಿಲ್ಲ. ಟ್ರಯಲ್ ಅವಧಿ ಮುಗಿದ ನಂತರ ಮಾತ್ರ ಇದು ಅಗತ್ಯವಾಗುತ್ತದೆ.

![Allow trials without payment method ಟಾಗಲ್](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** ಪಾವತಿಯ ನಂತರ ಇನ್‌ವಾಯ್ಸ್ ಕಳುಹಿಸಬೇಕೇ ಬೇಡವೇ ಎಂಬ ಆಯ್ಕೆಯನ್ನು ಇದು ನೀಡುತ್ತದೆ. ಬಳಕೆದಾರರು ತಮ್ಮ ಸಬ್‌ಸೈಟ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅಡಿಯಲ್ಲಿ ತಮ್ಮ ಪಾವತಿ ಇತಿಹಾಸವನ್ನು ನೋಡಬಹುದು ಎಂಬುದನ್ನು ಗಮನಿಸಿ. ಈ ಆಯ್ಕೆಯು Manual Gateway ಗೆ ಅನ್ವಯಿಸುವುದಿಲ್ಲ.

![Send invoice on payment confirmation ಟಾಗಲ್](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** ಇಲ್ಲಿ, ನೀವು ಪಾವತಿ ರೆಫರೆನ್ಸ್ ಕೋಡ್ ಅಥವಾ ಅನುಕ್ರಮ ಸಂಖ್ಯೆ ಯೋಜನೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಬಹುದು. ನಿಮ್ಮ ಇನ್‌ವಾಯ್ಸ್‌ಗಳಿಗೆ ಪಾವತಿ ರೆಫರೆನ್ಸ್ ಕೋಡ್ ಬಳಸಲು ಆಯ್ಕೆ ಮಾಡಿದರೆ, ನೀವು ಯಾವುದನ್ನೂ ಕಾನ್ಫಿಗರ್ ಮಾಡಬೇಕಾಗಿಲ್ಲ. ಅನುಕ್ರಮ ಸಂಖ್ಯೆ ಯೋಜನೆಯನ್ನು ಬಳಸಲು ಆಯ್ಕೆ ಮಾಡಿದರೆ, ನೀವು **next invoice number** (ಈ ಸಂಖ್ಯೆಯು ಸಿಸ್ಟಮ್‌ನಲ್ಲಿ ಉತ್ಪತ್ತಿಯಾಗುವ ಮುಂದಿನ ಇನ್‌ವಾಯ್ಸ್‌ಗೆ ಇನ್‌ವಾಯ್ಸ್ ಸಂಖ್ಯೆಯಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ. ಪ್ರತಿ ಹೊಸ ಇನ್‌ವಾಯ್ಸ್ ರಚಿಸಿದಾಗ ಇದು ಒಂದರಿಂದ ಹೆಚ್ಚಾಗುತ್ತದೆ. ಇನ್‌ವಾಯ್ಸ್ ಅನುಕ್ರಮ ಸಂಖ್ಯೆಯನ್ನು ನಿರ್ದಿಷ್ಟ ಮೌಲ್ಯಕ್ಕೆ ಮರುಹೊಂದಿಸಲು ನೀವು ಅದನ್ನು ಬದಲಾಯಿಸಿ ಉಳಿಸಬಹುದು) ಮತ್ತು **invoice number prefix** ಕಾನ್ಫಿಗರ್ ಮಾಡಬೇಕಾಗುತ್ತದೆ.

![Invoice numbering scheme ಆಯ್ಕೆ](/img/config/settings-payment-gateways.png)

![Sequential invoice number ಮತ್ತು prefix ಸೆಟ್ಟಿಂಗ್‌ಗಳು](/img/config/settings-payment-gateways.png)

## ಗೇಟ್‌ವೇಗಳನ್ನು ಎಲ್ಲಿ ಕಂಡುಹಿಡಿಯುವುದು:

ಅದೇ ಪುಟದಲ್ಲಿ (**Ultimate Multisite > Settings > Payments**) ಪಾವತಿ ಗೇಟ್‌ವೇಗಳನ್ನು ಸೆಟಪ್ ಮಾಡಬಹುದು. **active payment gateways** ಕೆಳಗೆ, ನೀವು ಇವುಗಳನ್ನು ನೋಡಬಹುದು: _Stripe_, _Stripe Checkout_, _PayPal_ ಮತ್ತು _Manual_.

![ಸಕ್ರಿಯ ಪಾವತಿ ಗೇಟ್‌ವೇಗಳ ಪಟ್ಟಿ](/img/config/settings-payment-gateways.png)

ಪ್ರತಿ ಪಾವತಿ ಗೇಟ್‌ವೇಗೆ ಪ್ರತ್ಯೇಕ ಲೇಖನವಿದೆ, ಅದು ಸೆಟಪ್ ಮಾಡುವ ಹಂತಗಳ ಮೂಲಕ ನಿಮಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ. ಕೆಳಗಿನ ಲಿಂಕ್‌ಗಳಲ್ಲಿ ಅವುಗಳನ್ನು ಕಂಡುಹಿಡಿಯಬಹುದು.

**Stripe ಗೇಟ್‌ವೇ ಸೆಟಪ್ ಮಾಡುವುದು**

**PayPal ಗೇಟ್‌ವೇ ಸೆಟಪ್ ಮಾಡುವುದು**

**Manual payments ಸೆಟಪ್ ಮಾಡುವುದು**

ಈಗ, ನೀವು _WooCommerce_, _GoCardless_ ಅಥವಾ _Payfast_ ಅನ್ನು ನಿಮ್ಮ ಪಾವತಿ ಗೇಟ್‌ವೇ ಆಗಿ ಬಳಸಲು ಬಯಸಿದರೆ, ನೀವು **ಅವುಗಳ add-on ಗಳನ್ನು ಸ್ಥಾಪಿಸಿ ಕಾನ್ಫಿಗರ್ ಮಾಡಬೇಕು**.

### WooCommerce add-on ಅನ್ನು ಹೇಗೆ ಸ್ಥಾಪಿಸುವುದು:

_Stripe_ ಮತ್ತು _PayPal_ ಕೆಲವು ದೇಶಗಳಲ್ಲಿ ಲಭ್ಯವಿಲ್ಲ ಎಂಬುದು ನಮಗೆ ತಿಳಿದಿದೆ, ಇದು Ultimate Multisite ಬಳಕೆದಾರರು ನಮ್ಮ plugin ಅನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಬಳಸುವುದನ್ನು ಕಷ್ಟಕರವಾಗಿಸುತ್ತದೆ. ಆದ್ದರಿಂದ ನಾವು _WooCommerce_ ಸಂಯೋಜಿಸಲು add-on ರಚಿಸಿದ್ದೇವೆ, ಇದು ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಇ-ಕಾಮರ್ಸ್ plugin ಆಗಿದೆ. ಜಗತ್ತಿನಾದ್ಯಂತ ಡೆವಲಪರ್‌ಗಳು ವಿವಿಧ ಪಾವತಿ ಗೇಟ್‌ವೇಗಳನ್ನು ಅದರೊಂದಿಗೆ ಸಂಯೋಜಿಸಲು add-on ಗಳನ್ನು ರಚಿಸಿದ್ದಾರೆ. Ultimate Multisite ಬಿಲ್ಲಿಂಗ್ ಸಿಸ್ಟಮ್‌ನೊಂದಿಗೆ ನೀವು ಬಳಸಬಹುದಾದ ಪಾವತಿ ಗೇಟ್‌ವೇಗಳನ್ನು ವಿಸ್ತರಿಸಲು ನಾವು ಇದರ ಪ್ರಯೋಜನವನ್ನು ಪಡೆದುಕೊಂಡಿದ್ದೇವೆ.

_**ಮುಖ್ಯ:** Ultimate Multisite: WooCommerce Integration ಗೆ ನಿಮ್ಮ ಮುಖ್ಯ ಸೈಟ್‌ನಲ್ಲಿ ಕನಿಷ್ಠ WooCommerce ಸಕ್ರಿಯಗೊಳಿಸಬೇಕು._

ಮೊದಲು, ದಯವಿಟ್ಟು add-ons ಪುಟಕ್ಕೆ ಹೋಗಿ. **Ultimate Multisite > Settings** ಗೆ ಹೋಗಿ ಅದನ್ನು ಕಂಡುಹಿಡಿಯಬಹುದು. ನೀವು **Add-ons** ಟೇಬಲ್ ನೋಡಬೇಕು. **Check our Add-ons** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.

![Add-ons ವಿಭಾಗವಿರುವ Settings ಪುಟ](/img/config/settings-general.png)

**Check our Add-ons** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿದ ನಂತರ, ನೀವು add-ons ಪುಟಕ್ಕೆ ಮರುನಿರ್ದೇಶಿಸಲ್ಪಡುತ್ತೀರಿ. ಇಲ್ಲಿ ನೀವು ಎಲ್ಲಾ Ultimate Multisite add-ons ಅನ್ನು ಕಂಡುಹಿಡಿಯಬಹುದು. **Ultimate Multisite: WooCommerce Integration** add-on ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.

![ಲಭ್ಯವಿರುವ add-ons ಪಟ್ಟಿಯ Add-ons ಪುಟ](/img/config/settings-general.png)

add-on ವಿವರಗಳೊಂದಿಗೆ ವಿಂಡೋ ಪಾಪ್ ಅಪ್ ಆಗುತ್ತದೆ. **Install Now** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.

![WooCommerce add-on ಸ್ಥಾಪನೆ ಡೈಲಾಗ್](/img/config/settings-general.png)

ಸ್ಥಾಪನೆ ಪೂರ್ಣಗೊಂಡ ನಂತರ, ನೀವು plugins ಪುಟಕ್ಕೆ ಮರುನಿರ್ದೇಶಿಸಲ್ಪಡುತ್ತೀರಿ. ಇಲ್ಲಿ, **Network Activate** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು WooCommerce add-on ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಸಕ್ರಿಯಗೊಳ್ಳುತ್ತದೆ.

![WooCommerce add-on ಅನ್ನು Network Activate ಮಾಡಿ](/img/config/settings-general.png)

ಸಕ್ರಿಯಗೊಳಿಸಿದ ನಂತರ, ನಿಮ್ಮ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ WooCommerce plugin ಇನ್ನೂ ಸ್ಥಾಪಿಸಿ ಸಕ್ರಿಯಗೊಳಿಸಿಲ್ಲದಿದ್ದರೆ, ನೀವು ರಿಮೈಂಡರ್ ಪಡೆಯುತ್ತೀರಿ.

![WooCommerce ಸಕ್ರಿಯಗೊಳಿಸುವ ರಿಮೈಂಡರ್ ನೋಟೀಸ್](/img/config/settings-general.png)

WooCommerce Integration add-on ಕುರಿತು ಹೆಚ್ಚು ಓದಲು, **ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ**.

### GoCardless add-on ಅನ್ನು ಹೇಗೆ ಸ್ಥಾಪಿಸುವುದು:

_GoCardless_ add-on ಸ್ಥಾಪಿಸುವ ಹಂತಗಳು _WooCommerce_ add-on ನಂತೆಯೇ ಇವೆ. ದಯವಿಟ್ಟು add-ons ಪುಟಕ್ಕೆ ಹೋಗಿ ಮತ್ತು **Ultimate Multisite: GoCardless Gateway** add-on ಆಯ್ಕೆ ಮಾಡಿ.

![ಲಭ್ಯವಿರುವ add-ons ಪಟ್ಟಿಯ Add-ons ಪುಟ](/img/config/settings-general.png)

add-on ವಿಂಡೋ ಪಾಪ್ ಅಪ್ ಆಗುತ್ತದೆ. **Install Now** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.

![GoCardless add-on ಸ್ಥಾಪನೆ ಡೈಲಾಗ್](/img/config/settings-general.png)

ಸ್ಥಾಪನೆ ಪೂರ್ಣಗೊಂಡ ನಂತರ, ನೀವು plugins ಪುಟಕ್ಕೆ ಮರುನಿರ್ದೇಶಿಸಲ್ಪಡುತ್ತೀರಿ. ಇಲ್ಲಿ, **Network Activate** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು _GoCardless_ add-on ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಸಕ್ರಿಯಗೊಳ್ಳುತ್ತದೆ.

![GoCardless add-on ಅನ್ನು Network Activate ಮಾಡಿ](/img/config/settings-general.png)

_GoCardless_ ಗೇಟ್‌ವೇಯೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸುವುದು ಹೇಗೆ ಎಂದು ತಿಳಿಯಲು, **ಈ ಲೇಖನವನ್ನು ಓದಿ**.

### Payfast add-on ಅನ್ನು ಹೇಗೆ ಸ್ಥಾಪಿಸುವುದು:

add-ons ಪುಟಕ್ಕೆ ಹೋಗಿ ಮತ್ತು **Ultimate Multisite: Payfast Gateway** add-on ಆಯ್ಕೆ ಮಾಡಿ.

![ಲಭ್ಯವಿರುವ add-ons ಪಟ್ಟಿಯ Add-ons ಪುಟ](/img/config/settings-general.png)

add-on ವಿಂಡೋ ಪಾಪ್ ಅಪ್ ಆಗುತ್ತದೆ. **Install Now** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.

![Payfast add-on ಸ್ಥಾಪನೆ ಡೈಲಾಗ್](/img/config/settings-general.png)

ಸ್ಥಾಪನೆ ಪೂರ್ಣಗೊಂಡ ನಂತರ, ನೀವು plugins ಪುಟಕ್ಕೆ ಮರುನಿರ್ದೇಶಿಸಲ್ಪಡುತ್ತೀರಿ. ಇಲ್ಲಿ, **Network Activate** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು _Payfast_ add-on ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಸಕ್ರಿಯಗೊಳ್ಳುತ್ತದೆ.

![Payfast add-on ಅನ್ನು Network Activate ಮಾಡಿ](/img/config/settings-general.png)
