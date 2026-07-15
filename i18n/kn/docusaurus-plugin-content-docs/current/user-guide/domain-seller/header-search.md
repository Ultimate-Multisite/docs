---
title: ಶೀರ್ಷಿಕೆ ಡೊಮೇನ್ ಹುಡುಕಾಟ
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# ಹೆಡರ್ Domain ಹುಡುಕಾಟ

Ultimate Multisite checkout ಒಳಗೆ ಲಭ್ಯವಿರುವ Domain‌ಗಳಿಂದ ಗ್ರಾಹಕರು ಆಯ್ಕೆ ಮಾಡಲು, ಮೊದಲು Domain ಹುಡುಕಾಟ ಆರಂಭಿಸುವ ಸಣ್ಣ ಹೆಡರ್ ಫಾರ್ಮ್ ಬೇಕಿದ್ದಾಗ ಈ ಸೆಟಪ್ ಬಳಸಿ.

## ಅವಶ್ಯಕತೆಗಳು {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- ಕನಿಷ್ಠ ಒಂದು ಸಕ್ರಿಯ Domain ನೋಂದಣಿ ಉತ್ಪನ್ನ, ಇದರಲ್ಲಿ:
  - `domain_provider` ಅನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿದ provider ಗೆ ಹೊಂದಿಸಲಾಗಿದೆ.
  - ಬೆಂಬಲಿತ TLDಗಳು ಕಾನ್ಫಿಗರ್ ಆಗಿವೆ, ಉದಾಹರಣೆಗೆ `com`, `net`, ಮತ್ತು `org`.
- **Domain Selection** ಕ್ಷೇತ್ರವನ್ನು ಒಳಗೊಂಡ ಮಾನ್ಯ checkout ಫಾರ್ಮ್.

## Checkout ಫಾರ್ಮ್ {#checkout-form}

1. ನೋಂದಣಿ ಪುಟ ಬಳಸುವ checkout ಫಾರ್ಮ್ ರಚಿಸಿ ಅಥವಾ ಸಂಪಾದಿಸಿ.
2. **Username** ಸೇರಿ ಸಾಮಾನ್ಯವಾಗಿ ಅಗತ್ಯವಿರುವ checkout/account ಕ್ಷೇತ್ರಗಳನ್ನು ಸೇರಿಸಿ. Domain ಕ್ಷೇತ್ರ ಮಾತ್ರ ಇರುವ checkout ಫಾರ್ಮ್ ಅನ್ನು Ultimate Multisite ಮಾನ್ಯತೆ ತಿರಸ್ಕರಿಸುತ್ತದೆ.
3. **Domain Selection** ಕ್ಷೇತ್ರವನ್ನು ಸೇರಿಸಿ.
4. ಹರಿವು ಉಚಿತ subdomainಗಳು ಅಥವಾ ಈಗಿರುವ Domain‌ಗಳಿಗಿಂತ ನೋಂದಾಯಿತ Domain‌ಗಳ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸಬೇಕಾದರೆ, Domain Selection ಮೋಡ್ ಅನ್ನು **Register Only** ಗೆ ಹೊಂದಿಸಿ.
5. ಆ ಕ್ಷೇತ್ರಕ್ಕೆ Domain ನೋಂದಣಿ ಉತ್ಪನ್ನವನ್ನು ನಿಯೋಜಿಸಿ.

ನೋಂದಣಿ ಪುಟವು checkout ಫಾರ್ಮ್ ಅನ್ನು ತೋರಿಸಬೇಕು, ಉದಾಹರಣೆಗೆ:

```text
[wu_checkout slug="domain-form"]
```

## ಹೆಡರ್ ಫಾರ್ಮ್ {#header-form}

ನಮೂದಿಸಿದ ಹುಡುಕಾಟ ಪದವನ್ನು `domain_name` ಆಗಿ checkout ಪುಟಕ್ಕೆ ಕಳುಹಿಸುವ ಸಣ್ಣ `GET` ಫಾರ್ಮ್ ಅನ್ನು site ಹೆಡರ್‌ನಲ್ಲಿ ಸೇರಿಸಿ:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

ಕಸ್ಟಮ್ ಹೆಡರ್ JavaScript ನಲ್ಲಿ Domain ಅನ್ನು ಮುಂಚಿತವಾಗಿ ಆಯ್ಕೆ ಮಾಡಬೇಡಿ. ಹೆಡರ್ ಹುಡುಕಾಟ ಪದವನ್ನು ಮಾತ್ರ ಕಳುಹಿಸಬೇಕು. Domain Seller checkout ಸ್ಕ್ರಿಪ್ಟ್ `?domain_name=example` ಅನ್ನು ಓದಿ, checkout ಹುಡುಕಾಟ ಪೆಟ್ಟಿಗೆಯನ್ನು ತುಂಬಿಸಿ, ಲಭ್ಯತೆ ಹುಡುಕಾಟವನ್ನು ನಡೆಸುತ್ತದೆ. ಆಗ ಗ್ರಾಹಕರು ಮರಳಿದ Domain‌ಗಳಿಂದ ಆಯ್ಕೆ ಮಾಡಬಹುದು.

## ನಿರೀಕ್ಷಿತ ನಡೆ {#expected-behaviour}

ಹೆಡರ್‌ನಲ್ಲಿ `example` ಅನ್ನು ಹುಡುಕಿದರೆ ಇದು ತೆರೆಯಬೇಕು:

```text
/register/?domain_name=example
```

ನಂತರ checkout ಆಯ್ಕೆ ಮಾಡಬಹುದಾದ ಫಲಿತಾಂಶಗಳನ್ನು ತೋರಿಸಬೇಕು, ಉದಾಹರಣೆಗೆ:

- `example.com`
- `example.net`
- `example.org` ಲಭ್ಯವಿಲ್ಲ
- ಇತರೆ provider-ಬೆಂಬಲಿತ TLDಗಳು

ಲಭ್ಯವಿರುವ ಫಲಿತಾಂಶವನ್ನು ಆಯ್ಕೆ ಮಾಡಿದ ನಂತರ, ಆರ್ಡರ್ ಸಾರಾಂಶದಲ್ಲಿ Domain ನೋಂದಣಿ ಉತ್ಪನ್ನ ಮತ್ತು ಆಯ್ಕೆ ಮಾಡಿದ Domain ಹೆಸರು ಇರಬೇಕು.

## ಪರಿಶೀಲನೆ {#verification}

1. home page ತೆರೆಯಿರಿ.
2. ಸರಳ ಹೆಸರನ್ನು ಹುಡುಕಿ, ಉದಾಹರಣೆಗೆ `example`.
3. checkout URL ನಲ್ಲಿ `?domain_name=example` ಇದೆ ಎಂದು ಖಚಿತಪಡಿಸಿ.
4. checkout Domain ಕ್ಷೇತ್ರದಲ್ಲಿ `example` ಇದೆ ಎಂದು ಖಚಿತಪಡಿಸಿ.
5. Domain ಆಯ್ಕೆಗಳ ಪಟ್ಟಿ ಕಾಣುತ್ತದೆ ಎಂದು ಖಚಿತಪಡಿಸಿ.
6. ಲಭ್ಯವಿರುವ Domain ಗೆ **ಆಯ್ಕೆಮಾಡಿ** ಕ್ಲಿಕ್ ಮಾಡಿ.
7. ಆರ್ಡರ್ ಸಾರಾಂಶದಲ್ಲಿ `Domain Registration - example.com` ಅಥವಾ ಆಯ್ಕೆ ಮಾಡಿದ Domain ಇದೆ ಎಂದು ಖಚಿತಪಡಿಸಿ.

## ಸಮಸ್ಯೆ ಪರಿಹಾರ {#troubleshooting}

- ಪಟ್ಟಿ ಕಾಣದಿದ್ದರೆ, browser network tab ನಲ್ಲಿ `admin-ajax.php?action=wu_domain_search` ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಅದು ಖಾಲಿಯಲ್ಲದ `domains` ಅಥವಾ `results` ಮರಳಿಸುತ್ತದೆ ಎಂದು ಖಚಿತಪಡಿಸಿ.
- ಉಳಿಸುವಾಗ checkout ಫಾರ್ಮ್ ಮಾನ್ಯತೆ ವಿಫಲವಾದರೆ, **Username** ಮುಂತಾದ ಅಗತ್ಯ account ಕ್ಷೇತ್ರಗಳನ್ನು ಸೇರಿಸಿ.
- Domain ಆಯ್ಕೆ ಮಾಡಿದಾಗ cart ನವೀಕರಿಸದಿದ್ದರೆ, `window.wu_checkout_form` ಇದೆ ಮತ್ತು Domain Seller checkout assets checkout ಪುಟದಲ್ಲಿ ಲೋಡ್ ಆಗಿವೆ ಎಂದು ಖಚಿತಪಡಿಸಿ.
