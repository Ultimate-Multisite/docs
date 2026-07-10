---
title: હેડર ડોમેન શોધ
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search {#header-domain-search}

આ setup નો ઉપયોગ કરો જ્યારે તમે એક નાનું header form ઇચ્છો છો જે domain search શરૂ કરે, પછી customer ને Ultimate Multisite checkout ની અંદર ઉપલબ્ધ domains માંથી પસંદ કરવા દે.

## આવશ્યકતાઓ {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- ઓછામાં ઓછું એક સક્રિય domain registration product જેમાં:
  - `domain_provider` configured provider પર set કરેલું હોય.
  - Supported TLDs configured હોય, ઉદાહરણ તરીકે `com`, `net`, અને `org`.
- **Domain Selection** field ધરાવતું માન્ય checkout form.

## Checkout form {#checkout-form}

1. registration page દ્વારા ઉપયોગમાં લેવાતું checkout form બનાવો અથવા edit કરો.
2. **Username** સહિત સામાન્ય જરૂરી checkout/account fields ઉમેરો. ફક્ત domain field ધરાવતું checkout form Ultimate Multisite validation દ્વારા નકારવામાં આવે છે.
3. **Domain Selection** field ઉમેરો.
4. જ્યારે flow નો focus free subdomains અથવા existing domains કરતાં registered domains પર હોવો જોઈએ ત્યારે Domain Selection mode ને **Register Only** પર set કરો.
5. તે field ને domain registration product assign કરો.

registration page એ checkout form render કરવું જોઈએ, ઉદાહરણ તરીકે:

```text
[wu_checkout slug="domain-form"]
```

## Header form {#header-form}

site header માં નાનું `GET` form ઉમેરો જે દાખલ કરાયેલ search term ને checkout page પર `domain_name` તરીકે મોકલે:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

custom header JavaScript માં domain preselect ન કરો. header એ ફક્ત search term pass કરવો જોઈએ. Domain Seller checkout script `?domain_name=example` વાંચે છે, checkout search box ભરે છે, અને availability search ચલાવે છે જેથી customer returned domains માંથી પસંદ કરી શકે.

## અપેક્ષિત વર્તન {#expected-behaviour}

header માં `example` search કરવાથી ખુલવું જોઈએ:

```text
/register/?domain_name=example
```

ત્યારબાદ checkout એ પસંદ કરી શકાય એવા results બતાવવા જોઈએ જેમ કે:

- `example.com`
- `example.net`
- `example.org` unavailable
- અન્ય provider-supported TLDs

ઉપલબ્ધ result પસંદ કર્યા પછી, order summary માં domain registration product અને પસંદ કરાયેલ domain name સામેલ હોવા જોઈએ.

## ચકાસણી {#verification}

1. home page ખોલો.
2. bare name માટે search કરો, ઉદાહરણ તરીકે `example`.
3. ખાતરી કરો કે checkout URL માં `?domain_name=example` સામેલ છે.
4. ખાતરી કરો કે checkout domain field માં `example` છે.
5. ખાતરી કરો કે domain choices ની list દેખાય છે.
6. ઉપલબ્ધ domain માટે **Select** પર click કરો.
7. ખાતરી કરો કે order summary માં `Domain Registration - example.com` અથવા પસંદ કરાયેલ domain છે.

## મુશ્કેલીનિવારણ {#troubleshooting}

- જો list ન દેખાય, તો `admin-ajax.php?action=wu_domain_search` માટે browser network tab તપાસો અને ખાતરી કરો કે તે non-empty `domains` અથવા `results` return કરે છે.
- જો checkout form save કરતી વખતે validation માં fail થાય, તો **Username** જેવા જરૂરી account fields ઉમેરો.
- જો domain select કરવાથી cart update થતું નથી, તો ખાતરી કરો કે `window.wu_checkout_form` exists છે અને Domain Seller checkout assets checkout page પર loaded છે.
