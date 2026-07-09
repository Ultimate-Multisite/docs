---
title: Haɗin Masu Haya da Yawa
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Haɗin Multi-Tenancy {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 yana canza wuraren haɗin da dama don tenants masu iko da kansu, tabbatar da ƙaura, da sarrafa zagayowar rayuwar tenant ta atomatik.

## Gudanar bootstrap na tenant {#tenant-bootstrap-flow}

Haɗe-haɗen da ke ƙirƙira ko gyara tenants su bi wannan tsari:

1. Warware rikodin rajistar tenant da samfurin keɓewa.
2. Ƙirƙiri ko tabbatar da mai rubuta database na tenant.
3. Yi bootstrap na schema na tenant.
4. Samar da masu amfani na tenant.
5. Rijista hanyoyin routing na tenant da paths na filesystem.
6. Gudanar da tabbatar da ƙaura kafin a bayyana tenant.

Kada ku ɗauka cewa tenant mai iko da kansa zai iya sake amfani da haɗin database na network. Yi amfani da rajistar tenant da abstractions na writer da addon ke bayarwa.

## SSO da hooks na REST {#sso-and-rest-hooks}

Autologin na tenant mara state yana amfani da tokens masu ɗan gajeren rai tare da purpose claim, kariyar maimaita JTI, iyakar ƙarewa, da ɗaure origin. Haɗe-haɗen da ke ƙara maɓallan shiga ko links na gudanarwa daga nesa su samar da ziyarar tenant ta hanyar tsarin SSO da aka goyi baya maimakon gina URLs na shiga tenant kai tsaye.

Abubuwan audit na API daga ɓangaren network da taƙaitattun bayanai na yau da kullum suna samuwa don gateways na tenant mai iko da kansa. Yi amfani da waɗannan logs lokacin gyara matsalolin tsarin waje da ke kiran endpoints na zagayowar rayuwar tenant.

## URLs na ayyukan abokin ciniki mai iko da kansa {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 yana routing ayyukan abokin ciniki na sovereign-tenant zuwa babban shafi don account, checkout, billing, invoice, shafi, sauya template, da ayyukan domain-mapping. Haɗe-haɗen da ke nuna links na gudanarwa a ɓangaren tenant su nufa waɗannan ayyuka zuwa customer panel na babban shafi kuma su haɗa da return target da aka tabbatar idan ya kamata mai amfani ya iya komawa tenant bayan kammala aikin.

Yi amfani da core SSO wrapper don links na gudanarwa tsakanin domains:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL ɗin da aka samar yana ci gaba da kasancewa mai yiwuwa a tace ta hanyar `wu_sso_url`, wanda ke karɓar SSO URL, mai amfani na yanzu, ID na target site, da mahallin redirect. Add-ons na iya amfani da wannan filter don ƙara mahallin musamman na provider ko maye gurbin broker URL yayin kiyaye tabbatar da token na Ultimate Multisite.

Kada ku maimaita state na membership, invoice, billing-address, template, ko domain-management a cikin tenant mai iko da kansa. Ɗauki dashboard na tenant a matsayin launcher kuma customer panel na babban shafi a matsayin tsarin rikodi don ayyukan da ake sarrafawa.

## Tabbatar da ƙaura {#migration-verification}

Bayan ƙaura ko haɗin zagayowar rayuwa ya canza bayanan tenant, gudanar da ƙofofin tabbatarwa:

- `wp tenant verify-no-legacy --site=<site-id>` yana tabbatar da cewa tenant ba ya ƙara dogaro da tsoffin paths na ɓangaren network.
- `wp tenant verify-sovereign-push --site=<site-id>` yana tabbatar da cewa jobs na sovereign push na iya sarrafawa kuma su kammala.

Haɗe-haɗe su ɗauki gazawar tabbatarwa a matsayin mai toshe deployment kuma su guji alamar cewa tenant yana live har sai an warware gazawar.

## Goge tenant {#tenant-deletion}

Gudanarwar gogewa ya kamata su kira hanyar teardown ta addon domin a tsabtace credentials na database na tenant. Haɗe-haɗen waje na iya cire resources na provider bayan teardown ya yi nasara, amma kada su goge host databases ko folders yayin da tabbatarwa ko jobs na async push har yanzu ke gudana.

## Database router da aka daina amfani da shi {#deprecated-database-router}

Tsohon `Database_Router` an maye gurbinsa da stub na deprecation. Sabbin haɗe-haɗe su warware tenants ta hanyar site router na yanzu da APIs na rajistar tenant maimakon dogaro da tsohon class na router.
