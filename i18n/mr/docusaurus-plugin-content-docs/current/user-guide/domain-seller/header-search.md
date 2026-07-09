---
title: शीर्षलेख डोमेन शोध
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search

ही मांडणी तेव्हा वापरा जेव्हा तुम्हाला लहान header फॉर्म हवा असेल जो domain शोध सुरू करतो, आणि नंतर ग्राहकाला Ultimate Multisite checkout मध्ये उपलब्ध domain मधून निवड करू देतो.

## आवश्यकता

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- किमान एक सक्रिय domain नोंदणी product ज्यामध्ये:
  - `domain_provider` कॉन्फिगर केलेल्या provider वर सेट केलेले आहे.
  - समर्थित TLDs कॉन्फिगर केलेले आहेत, उदाहरणार्थ `com`, `net`, आणि `org`.
- **Domain Selection** field असलेला वैध checkout form.

## Checkout form

1. registration page द्वारे वापरला जाणारा checkout form तयार करा किंवा संपादित करा.
2. **Username** सह सामान्य आवश्यक checkout/account fields जोडा. फक्त domain field असलेला checkout form Ultimate Multisite validation द्वारे नाकारला जातो.
3. **Domain Selection** field जोडा.
4. flow ने free subdomains किंवा existing domains ऐवजी registered domains वर लक्ष केंद्रित करावे तेव्हा Domain Selection mode **Register Only** वर सेट करा.
5. त्या field ला domain registration product नियुक्त करा.

registration page ने checkout form दाखवावा, उदाहरणार्थ:

```text
[wu_checkout slug="domain-form"]
```

## Header form

site header मध्ये एक लहान `GET` form जोडा जो भरलेला search term checkout page कडे `domain_name` म्हणून पाठवतो:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

custom header JavaScript मध्ये domain पूर्वनिवड करू नका. header ने फक्त search term पास करावा. Domain Seller checkout script `?domain_name=example` वाचते, checkout search box भरते, आणि availability search चालवते जेणेकरून ग्राहक परत आलेल्या domains मधून निवड करू शकेल.

## अपेक्षित वर्तन

header मध्ये `example` शोधल्यास हे उघडले पाहिजे:

```text
/register/?domain_name=example
```

checkout नंतर निवडता येणारे results दाखवावे, जसे:

- `example.com`
- `example.net`
- `example.org` unavailable
- इतर provider-supported TLDs

उपलब्ध result निवडल्यानंतर, order summary मध्ये domain registration product आणि निवडलेले domain name समाविष्ट असावे.

## पडताळणी

1. home page उघडा.
2. bare name साठी शोधा, उदाहरणार्थ `example`.
3. checkout URL मध्ये `?domain_name=example` आहे याची खात्री करा.
4. checkout domain field मध्ये `example` आहे याची खात्री करा.
5. domain choices ची यादी दिसते याची खात्री करा.
6. उपलब्ध domain साठी **Select** क्लिक करा.
7. order summary मध्ये `Domain Registration - example.com` किंवा निवडलेला domain आहे याची खात्री करा.

## समस्या निवारण

- यादी दिसत नसल्यास, `admin-ajax.php?action=wu_domain_search` साठी browser network tab तपासा आणि ते रिकामे नसलेले `domains` किंवा `results` परत करते याची खात्री करा.
- checkout form save करताना validation अयशस्वी झाल्यास, **Username** सारखी आवश्यक account fields जोडा.
- domain निवडल्यानंतर cart update होत नसल्यास, `window.wu_checkout_form` अस्तित्वात आहे आणि Domain Seller checkout assets checkout page वर loaded आहेत याची खात्री करा.
