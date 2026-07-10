---
title: హెడర్ డొమైన్ శోధన
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search {#header-domain-search}

Ultimate Multisite checkout లో అందుబాటులో ఉన్న డొమైన్‌లలోంచి కస్టమర్ ఎంచుకునేలా, ముందుగా డొమైన్ వెతుకులాటను ప్రారంభించే చిన్న header ఫారమ్ కావాలనుకుంటే ఈ setup వాడండి.

## అవసరాలు {#requirements}

- Ultimate Multisite network-active అయి ఉండాలి.
- Multisite Ultimate Domain Seller network-active అయి ఉండాలి.
- కనీసం ఒక సక్రియ డొమైన్ నమోదు product ఉండాలి, దానిలో:
  - `domain_provider` కాన్ఫిగర్ చేసిన provider కు సెట్ అయి ఉండాలి.
  - మద్దతు ఉన్న TLDలు కాన్ఫిగర్ అయి ఉండాలి, ఉదాహరణకు `com`, `net`, మరియు `org`.
- **Domain Selection** field ఉన్న చెల్లుబాటు అయ్యే checkout form ఉండాలి.

## Checkout form {#checkout-form}

1. registration page ఉపయోగించే checkout form ను సృష్టించండి లేదా సవరించండి.
2. **Username** సహా సాధారణంగా అవసరమైన checkout/account fieldలను జోడించండి. కేవలం domain field మాత్రమే ఉన్న checkout form ను Ultimate Multisite validation తిరస్కరిస్తుంది.
3. **Domain Selection** field ను జోడించండి.
4. ప్రవాహం ఉచిత subdomainలు లేదా ఉన్న domainల కంటే registered domainలపై దృష్టి పెట్టాల్సినప్పుడు Domain Selection mode ను **Register Only** గా సెట్ చేయండి.
5. ఆ field కు domain registration product ను కేటాయించండి.

registration page checkout form ను రెండర్ చేయాలి, ఉదాహరణకు:

```text
[wu_checkout slug="domain-form"]
```

## Header form {#header-form}

నమోదు చేసిన search term ను checkout page కు `domain_name` గా పంపే చిన్న `GET` form ను site header లో జోడించండి:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

కస్టమ్ header JavaScript లో domain ను ముందుగా ఎంచుకోవద్దు. header కేవలం search term ను మాత్రమే పంపాలి. Domain Seller checkout script `?domain_name=example` ను చదివి, checkout search box ను నింపి, availability search ను నడుపుతుంది. అప్పుడు కస్టమర్ తిరిగి వచ్చిన domainలలోంచి ఎంచుకోవచ్చు.

## ఆశించిన ప్రవర్తన {#expected-behaviour}

header లో `example` వెతికితే ఇది తెరుచుకోవాలి:

```text
/register/?domain_name=example
```

ఆ తర్వాత checkout ఎంచుకోగల ఫలితాలను చూపాలి, ఉదాహరణకు:

- `example.com`
- `example.net`
- `example.org` అందుబాటులో లేదు
- provider మద్దతు ఉన్న ఇతర TLDలు

అందుబాటులో ఉన్న ఫలితాన్ని ఎంచుకున్న తర్వాత, order summary లో domain registration product మరియు ఎంచుకున్న domain name ఉండాలి.

## ధృవీకరణ {#verification}

1. home page ను తెరవండి.
2. ఖాళీ పేరును వెతకండి, ఉదాహరణకు `example`.
3. checkout URL లో `?domain_name=example` ఉందని నిర్ధారించండి.
4. checkout domain field లో `example` ఉందని నిర్ధారించండి.
5. domain ఎంపికల జాబితా కనిపిస్తుందని నిర్ధారించండి.
6. అందుబాటులో ఉన్న domain కోసం **Select** క్లిక్ చేయండి.
7. order summary లో `Domain Registration - example.com` లేదా ఎంచుకున్న domain ఉందని నిర్ధారించండి.

## సమస్యల పరిష్కారం {#troubleshooting}

- జాబితా కనిపించకపోతే, browser network tab లో `admin-ajax.php?action=wu_domain_search` చూడండి మరియు అది ఖాళీ కాని `domains` లేదా `results` తిరిగి ఇస్తుందో నిర్ధారించండి.
- సేవ్ చేసేటప్పుడు checkout form validation విఫలమైతే, **Username** వంటి అవసరమైన account fieldలను జోడించండి.
- domain ఎంచుకున్నప్పుడు cart update కాకపోతే, `window.wu_checkout_form` ఉందని మరియు Domain Seller checkout assets checkout page లో లోడ్ అయ్యాయని నిర్ధారించండి.
