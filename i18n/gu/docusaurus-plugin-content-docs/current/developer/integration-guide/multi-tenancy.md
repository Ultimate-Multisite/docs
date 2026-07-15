---
title: મલ્ટી-ટેનન્સી ઈન્ટિગ્રેશન
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy ઇન્ટિગ્રેશન

Ultimate Multisite: Multi-Tenancy 1.2.0 સ્વતંત્ર ભાડૂતાઓ, માઇગ્રેશન ચકાસણી, અને ભાડૂત જીવનચક્ર ઓટોમેશન માટે અનેક ઇન્ટિગ્રેશન ટચપોઈન્ટ્સમાં ફેરફાર કરે છે.

## ભાડૂત bootstrap પ્રવાહ {#tenant-bootstrap-flow}

ભાડૂતાઓ બનાવતી અથવા ફેરફાર કરતી ઇન્ટિગ્રેશન્સે આ ક્રમ અનુસરવો જોઈએ:

1. ભાડૂત રજિસ્ટ્રી રેકોર્ડ અને આઇસોલેશન મોડલ ઉકેલો.
2. ભાડૂત ડેટાબેસ writer બનાવો અથવા ચકાસો.
3. ભાડૂત schema bootstrap કરો.
4. ભાડૂત વપરાશકર્તાઓ provision કરો.
5. ભાડૂત routing અને filesystem પાથ્સ નોંધાવો.
6. ભાડૂતને પ્રદર્શિત કરતાં પહેલાં માઇગ્રેશન ચકાસણી ચલાવો.

એવું ન માનો કે સ્વતંત્ર ભાડૂત નેટવર્ક ડેટાબેસ કનેક્શન ફરી વાપરી શકે છે. addon દ્વારા પૂરા પાડવામાં આવેલા ભાડૂત રજિસ્ટ્રી અને writer abstractions નો ઉપયોગ કરો.

## SSO અને REST hooks {#sso-and-rest-hooks}

Stateless ભાડૂત autologin purpose claim, JTI replay protection, expiry cap, અને origin pinning સાથે ટૂંકા ગાળાના tokens નો ઉપયોગ કરે છે. login buttons અથવા remote management links ઉમેરતી ઇન્ટિગ્રેશન્સે ભાડૂત login URLs સીધા બનાવવાને બદલે supported SSO flow મારફતે ભાડૂત મુલાકાતો generate કરવી જોઈએ.

સ્વતંત્ર ભાડૂત gateways માટે Network-side API audit events અને daily summaries ઉપલબ્ધ છે. ભાડૂત lifecycle endpoints કૉલ કરતી external systems ને debug કરતી વખતે તે logs નો ઉપયોગ કરો.

## સ્વતંત્ર customer action URLs {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 account, checkout, billing, invoice, site, template-switching, અને domain-mapping flows માટે sovereign-tenant customer actions ને main site પર પાછા route કરે છે. ભાડૂત-બાજુ management links render કરતી ઇન્ટિગ્રેશન્સે તે actions ને main-site customer panel તરફ point કરવી જોઈએ અને action પૂર્ણ કર્યા પછી વપરાશકર્તા ભાડૂત પર પાછા navigate કરી શકે તે માટે validated return target સામેલ કરવું જોઈએ.

cross-domain management links માટે core SSO wrapper નો ઉપયોગ કરો:

```php
$url = wu_with_sso($main_site_customer_url);
```

generated URL `wu_sso_url` મારફતે filterable રહે છે, જે SSO URL, વર્તમાન વપરાશકર્તા, target site ID, અને redirect context મેળવે છે. Add-ons તે filter નો ઉપયોગ provider-specific context append કરવા અથવા Ultimate Multisite ની token validation જાળવી રાખીને broker URL replace કરવા માટે કરી શકે છે.

સ્વતંત્ર ભાડૂતની અંદર membership, invoice, billing-address, template, અથવા domain-management state duplicate ન કરો. ભાડૂત dashboard ને launcher તરીકે અને main-site customer panel ને managed actions માટે system of record તરીકે માનો.

## માઇગ્રેશન ચકાસણી {#migration-verification}

માઇગ્રેશન અથવા lifecycle ઇન્ટિગ્રેશન ભાડૂત data બદલ્યા પછી, verification gates ચલાવો:

- `wp tenant verify-no-legacy --site=<site-id>` પુષ્ટિ કરે છે કે ભાડૂત હવે legacy network-side paths પર નિર્ભર નથી.
- `wp tenant verify-sovereign-push --site=<site-id>` પુષ્ટિ કરે છે કે sovereign push jobs process અને drain કરી શકે છે.

ઇન્ટિગ્રેશન્સે નિષ્ફળ verification ને deployment blocker તરીકે માનવું જોઈએ અને failure ઉકેલાય ત્યાં સુધી ભાડૂતને live તરીકે mark કરવાનું ટાળવું જોઈએ.

## ભાડૂત deletion {#tenant-deletion}

Deletion flows એ addon teardown path કૉલ કરવો જોઈએ જેથી ભાડૂત ડેટાબેસ credentials સાફ થાય. External ઇન્ટિગ્રેશન્સ teardown સફળ થયા પછી provider resources દૂર કરી શકે છે, પરંતુ verification અથવા async push jobs હજુ ચાલી રહ્યાં હોય ત્યારે host databases અથવા folders delete ન કરવા જોઈએ.

## Deprecated ડેટાબેસ router {#deprecated-database-router}

legacy `Database_Router` ને deprecation stub દ્વારા બદલવામાં આવ્યું છે. નવી ઇન્ટિગ્રેશન્સે જૂના router class પર આધાર રાખવાને બદલે current site router અને ભાડૂત registry APIs મારફતે ભાડૂતાઓ resolve કરવા જોઈએ.
