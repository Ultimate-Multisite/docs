---
title: தலைப்பு டொமைன் தேடல்
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search

Ultimate Multisite checkout-இல் கிடைக்கும் domain-களில் இருந்து வாடிக்கையாளர் தேர்வு செய்யும் வகையில், domain தேடலைத் தொடங்கும் சிறிய header படிவம் வேண்டும்போது இந்த அமைப்பைப் பயன்படுத்தவும்.

## தேவைகள்

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- குறைந்தது ஒரு செயலில் உள்ள domain பதிவு தயாரிப்பு, இதனுடன்:
  - `domain_provider` அமைக்கப்பட்ட provider-ஆக அமைக்கப்பட்டிருக்க வேண்டும்.
  - ஆதரிக்கப்படும் TLD-கள் அமைக்கப்பட்டிருக்க வேண்டும், உதாரணமாக `com`, `net`, மற்றும் `org`.
- **Domain Selection** புலம் கொண்ட செல்லுபடியாகும் checkout படிவம்.

## Checkout படிவம்

1. பதிவு பக்கத்தில் பயன்படுத்தப்படும் checkout படிவத்தை உருவாக்கவும் அல்லது திருத்தவும்.
2. **Username** உட்பட வழக்கமான தேவையான checkout/Account புலங்களைச் சேர்க்கவும். domain புலம் மட்டும் கொண்ட checkout படிவம் Ultimate Multisite சரிபார்ப்பால் நிராகரிக்கப்படும்.
3. **Domain Selection** புலத்தைச் சேர்க்கவும்.
4. ஓட்டம் இலவச subdomain-கள் அல்லது ஏற்கனவே உள்ள domain-களை விட பதிவு செய்யப்பட்ட domain-களில் கவனம் செலுத்த வேண்டுமெனில், Domain Selection முறையை **Register Only** ஆக அமைக்கவும்.
5. domain பதிவு தயாரிப்பை அந்த புலத்திற்கு ஒதுக்கவும்.

பதிவு பக்கம் checkout படிவத்தை காட்ட வேண்டும், உதாரணமாக:

```text
[wu_checkout slug="domain-form"]
```

## Header படிவம்

உள்ளிடப்பட்ட தேடல் சொல்லை checkout பக்கத்திற்கு `domain_name` ஆக அனுப்பும் சிறிய `GET` படிவத்தை site header-இல் சேர்க்கவும்:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

தனிப்பயன் header JavaScript-இல் domain-ஐ முன்தேர்வு செய்ய வேண்டாம். header தேடல் சொல்லை மட்டும் அனுப்ப வேண்டும். Domain Seller checkout script `?domain_name=example`-ஐ வாசித்து, checkout தேடல் பெட்டியை நிரப்பி, availability தேடலை இயக்கும்; அதன் மூலம் வாடிக்கையாளர் திரும்ப வரும் domain-களில் இருந்து தேர்வு செய்யலாம்.

## எதிர்பார்க்கப்படும் நடத்தை

header-இல் `example` தேடினால் இது திறக்க வேண்டும்:

```text
/register/?domain_name=example
```

பின்னர் checkout தேர்வு செய்யக்கூடிய முடிவுகளை காட்ட வேண்டும், உதாரணமாக:

- `example.com`
- `example.net`
- `example.org` கிடைக்கவில்லை
- provider ஆதரிக்கும் பிற TLD-கள்

கிடைக்கும் முடிவைத் தேர்ந்தெடுத்த பிறகு, order summary-இல் domain பதிவு தயாரிப்பும் தேர்ந்தெடுத்த domain பெயரும் சேர்க்கப்பட்டிருக்க வேண்டும்.

## சரிபார்ப்பு

1. home page-ஐ திறக்கவும்.
2. வெறும் பெயரைத் தேடவும், உதாரணமாக `example`.
3. checkout URL-இல் `?domain_name=example` இருப்பதை உறுதிப்படுத்தவும்.
4. checkout domain புலத்தில் `example` இருப்பதை உறுதிப்படுத்தவும்.
5. domain தேர்வுகளின் பட்டியல் தோன்றுவதை உறுதிப்படுத்தவும்.
6. கிடைக்கும் domain-க்கு **Select** என்பதைக் கிளிக் செய்யவும்.
7. order summary-இல் `Domain Registration - example.com` அல்லது தேர்ந்தெடுத்த domain இருப்பதை உறுதிப்படுத்தவும்.

## சிக்கல் தீர்வு

- பட்டியல் எதுவும் தோன்றவில்லை என்றால், browser network tab-இல் `admin-ajax.php?action=wu_domain_search` என்பதைச் சரிபார்த்து, அது காலியாகாத `domains` அல்லது `results` திருப்பித் தருகிறதா என்பதை உறுதிப்படுத்தவும்.
- checkout படிவத்தைச் சேமிக்கும் போது சரிபார்ப்பு தோல்வியடைந்தால், **Username** போன்ற தேவையான Account புலங்களைச் சேர்க்கவும்.
- domain-ஐத் தேர்ந்தெடுத்தும் cart புதுப்பிக்கப்படவில்லை என்றால், `window.wu_checkout_form` இருக்கிறதா என்றும் Domain Seller checkout assets checkout பக்கத்தில் ஏற்றப்பட்டுள்ளனவா என்றும் உறுதிப்படுத்தவும்.
