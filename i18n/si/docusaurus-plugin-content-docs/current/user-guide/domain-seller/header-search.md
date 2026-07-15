---
title: ශීර්ෂක වසම් සෙවීම
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search

Ultimate Multisite checkout තුළ ඇති ලබාගත හැකි domains අතරින් පාරිභෝගිකයාට තෝරාගැනීමට ඉඩ දෙමින්, domain සෙවීමක් ආරම්භ කරන කුඩා header form එකක් අවශ්‍ය විට මෙම සැකසුම භාවිත කරන්න.

## අවශ්‍යතා {#requirements}

- Ultimate Multisite network-active විය යුතුය.
- Multisite Ultimate Domain Seller network-active විය යුතුය.
- අවම වශයෙන් එක් සක්‍රීය domain ලියාපදිංචි කිරීමේ product එකක්, මෙවැනි දේ සමඟ තිබිය යුතුය:
  - `domain_provider` වින්‍යාස කළ provider එකකට සකසා තිබිය යුතුය.
  - සහය දක්වන TLDs වින්‍යාස කර තිබිය යුතුය, උදාහරණ ලෙස `com`, `net`, සහ `org`.
- **Domain Selection** field එක අඩංගු වලංගු checkout form එකක්.

## Checkout form {#checkout-form}

1. ලියාපදිංචි කිරීමේ පිටුව භාවිත කරන checkout form එක සාදන්න හෝ සංස්කරණය කරන්න.
2. **Username** ඇතුළුව සාමාන්‍යයෙන් අවශ්‍ය checkout/account fields එක් කරන්න. domain field එක පමණක් අඩංගු checkout form එකක් Ultimate Multisite validation මඟින් ප්‍රතික්ෂේප කරයි.
3. **Domain Selection** field එකක් එක් කරන්න.
4. ප්‍රවාහය free subdomains හෝ පවතින domains වෙනුවට ලියාපදිංචි domains මත කේන්ද්‍රගත විය යුතු විට Domain Selection mode එක **Register Only** ලෙස සකසන්න.
5. domain ලියාපදිංචි කිරීමේ product එක එම field එකට පවරන්න.

ලියාපදිංචි කිරීමේ පිටුව checkout form එක පෙන්විය යුතුය, උදාහරණයක් ලෙස:

```text
[wu_checkout slug="domain-form"]
```

## Header form {#header-form}

ඇතුළත් කළ සෙවුම් පදය `domain_name` ලෙස checkout පිටුවට යවන කුඩා `GET` form එකක් site header තුළ එක් කරන්න:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Custom header JavaScript තුළ domain එකක් පෙර තෝරා නොගන්න. header එක සෙවුම් පදය පමණක් යැවිය යුතුය. Domain Seller checkout script එක `?domain_name=example` කියවයි, checkout search box එක පුරවයි, සහ ලබාදුන් domains අතරින් පාරිභෝගිකයාට තෝරාගැනීමට availability search එක ධාවනය කරයි.

## අපේක්ෂිත හැසිරීම {#expected-behaviour}

header තුළ `example` සෙවීමෙන් මෙය විවෘත විය යුතුය:

```text
/register/?domain_name=example
```

ඉන්පසු checkout එක මෙවැනි තෝරාගත හැකි ප්‍රතිඵල පෙන්විය යුතුය:

- `example.com`
- `example.net`
- `example.org` ලබාගත නොහැක
- provider සහාය දක්වන අනෙකුත් TLDs

ලබාගත හැකි ප්‍රතිඵලයක් තෝරාගත් පසු, ඇණවුම් සාරාංශය තුළ domain ලියාපදිංචි කිරීමේ product එක සහ තෝරාගත් domain නාමය ඇතුළත් විය යුතුය.

## සත්‍යාපනය {#verification}

1. මුල් පිටුව විවෘත කරන්න.
2. bare නමක් සොයන්න, උදාහරණ ලෙස `example`.
3. checkout URL එකට `?domain_name=example` ඇතුළත් බව තහවුරු කරන්න.
4. checkout domain field එකේ `example` අඩංගු බව තහවුරු කරන්න.
5. domain තේරීම් ලැයිස්තුවක් පෙනෙන බව තහවුරු කරන්න.
6. ලබාගත හැකි domain එකක් සඳහා **Select** ක්ලික් කරන්න.
7. ඇණවුම් සාරාංශයේ `Domain Registration - example.com` හෝ තෝරාගත් domain එක අඩංගු බව තහවුරු කරන්න.

## දෝෂ නිරාකරණය {#troubleshooting}

- ලැයිස්තුවක් නොපෙනේ නම්, browser network tab එකේ `admin-ajax.php?action=wu_domain_search` පරීක්ෂා කර එය හිස් නොවන `domains` හෝ `results` ආපසු ලබාදෙන බව තහවුරු කරන්න.
- checkout form එක save කරන විට validation අසමත් නම්, **Username** වැනි අවශ්‍ය account fields එක් කරන්න.
- domain එකක් තෝරාගැනීම cart එක යාවත්කාලීන නොකරන්නේ නම්, `window.wu_checkout_form` පවතින බවත් Domain Seller checkout assets checkout පිටුවේ load වී ඇති බවත් තහවුරු කරන්න.
