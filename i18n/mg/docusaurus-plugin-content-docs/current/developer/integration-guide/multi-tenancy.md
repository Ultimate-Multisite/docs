---
title: Fampidirana rafitra mpanofa maro
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Fampidirana Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 dia manova teboka fifandraisana maromaro ho an’ny tenant mahaleo tena, fanamarinana fifindra-monina, ary automatique amin’ny tsingerim-piainan’ny tenant.

## Fizotry ny fanombohana tenant {#tenant-bootstrap-flow}

Ny fampidirana izay mamorona na manova tenant dia tokony hanaraka izao filaharana izao:

1. Fantaro ny rakitra ao amin’ny rejisitry ny tenant sy ny maodely fitokanana.
2. Mamoròna na hamarino ny mpanoratra tahiry angon-drakitra an’ny tenant.
3. Atombohy ny schema an’ny tenant.
4. Omano ny mpampiasa tenant.
5. Soraty anarana ny lalan’ny tenant sy ny lalana filesystem.
6. Alefaso ny fanamarinana fifindra-monina alohan’ny hampisehoana ny tenant.

Aza mihevitra fa afaka mampiasa indray ny fifandraisana amin’ny tahiry angon-drakitra an’ny tambajotra ny tenant mahaleo tena. Ampiasao ny rejisitry ny tenant sy ny abstraction mpanoratra omen’ilay addon.

## SSO sy hook REST {#sso-and-rest-hooks}

Ny fidirana ho azy amin’ny tenant tsy mitahiry toe-javatra dia mampiasa token fohy fiainana miaraka amin’ny filazana tanjona, fiarovana amin’ny famerenana JTI, fetra lany andro, ary famatorana origin. Ny fampidirana izay manampy bokotra fidirana na rohy fitantanana lavitra dia tokony hamorona fitsidihana tenant amin’ny alalan’ny fizotry ny SSO tohanana fa tsy hanamboatra URL fidirana tenant mivantana.

Misy hetsika fanaraha-maso API amin’ny lafiny tambajotra sy famintinana isan’andro ho an’ny vavahadin’ny tenant mahaleo tena. Ampiasao ireo log ireo rehefa manitsy olana amin’ny rafitra ivelany izay miantso endpoint tsingerim-piainan’ny tenant.

## URL hetsika mpanjifa mahaleo tena {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 dia mandefa ny hetsika mpanjifa tenant mahaleo tena hiverina any amin’ny tranonkala fototra ho an’ny fizotran’ny kaonty, checkout, faktiora, invoice, tranonkala, fanovana template, ary domain-mapping. Ny fampidirana izay mampiseho rohy fitantanana amin’ny lafiny tenant dia tokony hanondro ireo hetsika ireo any amin’ny takelaka mpanjifa amin’ny tranonkala fototra ary hampiditra tanjona fiverenana voamarina rehefa tokony ho afaka hiverina any amin’ny tenant ny mpampiasa rehefa vita ilay hetsika.

Ampiasao ny wrapper SSO fototra ho an’ny rohy fitantanana cross-domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

Ny URL voaforona dia mbola azo sivanina amin’ny alalan’ny `wu_sso_url`, izay mandray ny URL SSO, ny mpampiasa ankehitriny, ny ID tranonkala kendrena, ary ny context redirect. Afaka mampiasa io sivana io ny add-on mba hanampiana context manokana ho an’ny provider na hanoloana ny URL broker sady mitazona ny fanamarinana token an’ny Ultimate Multisite.

Aza adika ao anatin’ny tenant mahaleo tena ny toe-javatra membership, invoice, adiresy faktiora, template, na fitantanana domain. Raiso ny Dashboard an’ny tenant ho toy ny mpandefa, ary ny takelaka mpanjifa amin’ny tranonkala fototra ho rafitra firaketana ho an’ny hetsika tantanana.

## Fanamarinana fifindra-monina {#migration-verification}

Rehefa manova angon-drakitra tenant ny fifindra-monina na fampidirana tsingerim-piainana, alefaso ny vavahady fanamarinana:

- `wp tenant verify-no-legacy --site=<site-id>` dia manamarina fa tsy miankina intsony amin’ny lalana taloha amin’ny lafiny tambajotra ny tenant.
- `wp tenant verify-sovereign-push --site=<site-id>` dia manamarina fa afaka manodina sy mandany ny asa push mahaleo tena.

Ny fampidirana dia tokony hihevitra ny fanamarinana tsy nahomby ho sakana amin’ny famoahana ary hisoroka ny fanamarihana tenant ho live mandra-pamaha ilay tsy fahombiazana.

## Famafana tenant {#tenant-deletion}

Ny fizotry ny famafana dia tokony hiantso ny lalan’ny fandravana an’ilay addon mba hanadiovana ny fahazoan-dàlana amin’ny tahiry angon-drakitra an’ny tenant. Afaka manala loharanon’ny provider ny fampidirana ivelany rehefa mahomby ny fandravana, saingy tsy tokony hamafa tahiry angon-drakitra na lahatahiry amin’ny host raha mbola mandeha ny fanamarinana na ny asa push async.

## Database router lany andro {#deprecated-database-router}

Ny `Database_Router` taloha dia nosoloina stub deprecation. Ny fampidirana vaovao dia tokony hamantatra tenant amin’ny alalan’ny API site router sy rejisitry ny tenant ankehitriny fa tsy miankina amin’ilay kilasy router taloha.
