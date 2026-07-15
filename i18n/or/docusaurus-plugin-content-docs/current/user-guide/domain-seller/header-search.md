---
title: ହେଡର ଡୋମେନ ସନ୍ଧାନ
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search

ଯେତେବେଳେ ଆପଣ ଏକ ଛୋଟ header form ଚାହୁଁଛନ୍ତି, ଯାହା domain search ଆରମ୍ଭ କରେ, ତାପରେ Ultimate Multisite checkout ଭିତରେ customer କୁ ଉପଲବ୍ଧ domain ଗୁଡ଼ିକୁ ବାଛିବାକୁ ଦିଏ, ସେତେବେଳେ ଏହି setup ବ୍ୟବହାର କରନ୍ତୁ।

## ଆବଶ୍ୟକତା {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- କମ୍ ସେ କମ୍ ଗୋଟିଏ ସକ୍ରିୟ domain registration product, ଯାହାରେ:
  - `domain_provider` ଏକ configured provider କୁ set ହୋଇଛି।
  - ସମର୍ଥିତ TLD ଗୁଡ଼ିକ configured ଅଛି, ଉଦାହରଣ ସ୍ୱରୂପ `com`, `net`, ଏବଂ `org`।
- **Domain Selection** field ଥିବା ଏକ ବୈଧ checkout form।

## Checkout form {#checkout-form}

1. registration page ଦ୍ୱାରା ବ୍ୟବହୃତ checkout form ସୃଷ୍ଟି କିମ୍ବା ସମ୍ପାଦନ କରନ୍ତୁ।
2. **Username** ସମେତ ସାଧାରଣ ଆବଶ୍ୟକ checkout/account field ଗୁଡ଼ିକ ଯୋଡନ୍ତୁ। କେବଳ domain field ଥିବା checkout form କୁ Ultimate Multisite validation ପ୍ରତ୍ୟାଖ୍ୟାନ କରେ।
3. ଗୋଟିଏ **Domain Selection** field ଯୋଡନ୍ତୁ।
4. flow ଟି free subdomain କିମ୍ବା existing domain ପରିବର୍ତ୍ତେ registered domain ଉପରେ କେନ୍ଦ୍ରିତ ହେବା ଉଚିତ ହେଲେ, Domain Selection mode କୁ **Register Only** କରନ୍ତୁ।
5. ସେହି field କୁ domain registration product assign କରନ୍ତୁ।

registration page ରେ checkout form render ହେବା ଉଚିତ, ଉଦାହରଣ ସ୍ୱରୂପ:

```text
[wu_checkout slug="domain-form"]
```

## Header form {#header-form}

site header ରେ ଏକ ଛୋଟ `GET` form ଯୋଡନ୍ତୁ, ଯାହା ପ୍ରବେଶ କରାଯାଇଥିବା search term କୁ checkout page କୁ `domain_name` ଭାବରେ ପଠାଏ:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

custom header JavaScript ରେ domain preselect କରନ୍ତୁ ନାହିଁ। header କେବଳ search term ପାସ୍ କରିବା ଉଚିତ। Domain Seller checkout script `?domain_name=example` ପଢ଼େ, checkout search box ଭରେ, ଏବଂ availability search ଚଲାଏ, ଯାହାଦ୍ୱାରା customer ଫେରିଥିବା domain ମଧ୍ୟରୁ ବାଛିପାରେ।

## ଆଶାକରାଯାଇଥିବା ଆଚରଣ {#expected-behaviour}

header ରେ `example` search କଲେ ଏହା ଖୋଲିବା ଉଚିତ:

```text
/register/?domain_name=example
```

ତାପରେ checkout ରେ ବାଛିପାରିବା results ଦେଖାଯିବା ଉଚିତ, ଯେପରିକି:

- `example.com`
- `example.net`
- `example.org` ଉପଲବ୍ଧ ନୁହେଁ
- ଅନ୍ୟ provider-supported TLD ଗୁଡ଼ିକ

ଉପଲବ୍ଧ result ବାଛିବା ପରେ, order summary ରେ domain registration product ଏବଂ ବାଛାଯାଇଥିବା domain name ଥିବା ଉଚିତ।

## ଯାଞ୍ଚ {#verification}

1. home page ଖୋଲନ୍ତୁ।
2. ଗୋଟିଏ bare name search କରନ୍ତୁ, ଉଦାହରଣ ସ୍ୱରୂପ `example`।
3. checkout URL ରେ `?domain_name=example` ଥିବାକୁ ନିଶ୍ଚିତ କରନ୍ତୁ।
4. checkout domain field ରେ `example` ଥିବାକୁ ନିଶ୍ଚିତ କରନ୍ତୁ।
5. domain choices ର ଏକ list ଦେଖାଯାଉଥିବାକୁ ନିଶ୍ଚିତ କରନ୍ତୁ।
6. ଉପଲବ୍ଧ domain ପାଇଁ **Select** click କରନ୍ତୁ।
7. order summary ରେ `Domain Registration - example.com` କିମ୍ବା ବାଛାଯାଇଥିବା domain ଥିବାକୁ ନିଶ୍ଚିତ କରନ୍ତୁ।

## ସମସ୍ୟାନିବାରଣ {#troubleshooting}

- list ଦେଖାଯାଉନାହିଁ ହେଲେ, browser network tab ରେ `admin-ajax.php?action=wu_domain_search` ଯାଞ୍ଚ କରନ୍ତୁ ଏବଂ ଏହା non-empty `domains` କିମ୍ବା `results` ଫେରାଉଛି ବୋଲି ନିଶ୍ଚିତ କରନ୍ତୁ।
- checkout form save କରିବାବେଳେ validation ବିଫଳ ହେଲେ, **Username** ପରି ଆବଶ୍ୟକ account fields ଯୋଡନ୍ତୁ।
- domain ବାଛିଲେ cart update ହେଉନାହିଁ ହେଲେ, `window.wu_checkout_form` ଅଛି ଏବଂ Domain Seller checkout assets checkout page ରେ loaded ଅଛି ବୋଲି ନିଶ୍ଚିତ କରନ୍ତୁ।
