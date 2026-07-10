---
title: Isdhexgalka Kiraystayaal Badan
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Isdhexgalka Multi-Tenancy {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 waxay beddeshaa dhowr meelood oo isdhexgal ah oo loogu talagalay kiraystayaasha madax-bannaan, xaqiijinta guurista, iyo otomaatigga wareegga-nolosha kiraystaha.

## Socodka bilowga kiraystaha {#tenant-bootstrap-flow}

Isdhexgallada abuura ama wax ka beddela kiraystayaasha waa inay raacaan kala horreyntan:

1. Xalli diiwaanka kaydka kiraystaha iyo qaabka go'doominta.
2. Abuur ama xaqiiji qoraaga database-ka kiraystaha.
3. Bilow qaab-dhismeedka kiraystaha.
4. Diyaari isticmaalayaasha kiraystaha.
5. Diiwaangeli marinnada kiraystaha iyo waddooyinka filesystem-ka.
6. Orod xaqiijinta guurista ka hor inta aan kiraystaha la soo bandhigin.

Ha u qaadan in kirayste madax-bannaan uu dib u isticmaali karo isku-xirka database-ka shabakadda. Adeegso kaydka kiraystaha iyo abstraction-yada qoraaga ee uu bixiyo addon-ka.

## SSO iyo REST hooks {#sso-and-rest-hooks}

Autologin-ka kiraystaha ee aan xaalad hayn wuxuu adeegsadaa tokens cimri-gaaban leh sheegasho ujeeddo, ilaalinta ku-celinta JTI, xad dhicitaan, iyo ku-xiridda origin-ka. Isdhexgallada ku dara badhamada gelitaanka ama xiriirrada maaraynta fog waa inay soo saaraan booqashooyinka kiraystaha iyagoo adeegsanaya socodka SSO ee la taageero halkii ay si toos ah u dhisi lahaayeen URLs gelitaanka kiraystaha.

Dhacdooyinka hubinta API ee dhinaca shabakadda iyo soo-koobidda maalinlaha ah ayaa diyaar u ah gateways-ka kiraystayaasha madax-bannaan. Adeegso logs-kaas marka aad hagaajinayso nidaamyada dibadda ee waca endpoints-ka wareegga-nolosha kiraystaha.

## URLs ficilka macmiilka madax-bannaan {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 waxay ficillada macmiilka kiraystaha madax-bannaan dib ugu marisaa site-ka ugu weyn ee socodka account-ka, checkout-ka, billing-ka, invoice-ka, site-ka, beddelidda template-ka, iyo domain-mapping-ka. Isdhexgallada muujiya xiriirrada maaraynta ee dhinaca kiraystaha waa inay ficilladaas u tilmaamaan guddiga macmiilka ee site-ka ugu weyn oo ay ku daraan bartilmaameed soo-noqosho oo la xaqiijiyay marka isticmaaluhu awood u yeelanayo inuu dib ugu laabto kiraystaha kadib marka uu dhammeeyo ficilka.

Adeegso duubka SSO ee core-ka loogu talagalay xiriirrada maaraynta ee ka gudba domains-ka:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL-ka la soo saaray weli waa lagu shaandheyn karaa `wu_sso_url`, kaas oo hela URL-ka SSO, isticmaalaha hadda, aqoonsiga site-ka bartilmaameedka ah, iyo macnaha redirect-ka. Add-ons waxay filter-kaas u isticmaali karaan inay ku daraan macne u gaar ah provider-ka ama inay beddelaan URL-ka broker-ka iyagoo ilaalinaya xaqiijinta token-ka ee Ultimate Multisite.

Ha ku celcelin xaaladda membership-ka, invoice-ka, cinwaanka billing-ka, template-ka, ama maaraynta domain-ka gudaha kiraystaha madax-bannaan. U arag dashboard-ka kiraystaha inuu yahay bilaabe, guddiga macmiilka ee site-ka ugu weynna inuu yahay nidaamka diiwaanka ficillada la maareeyo.

## Xaqiijinta guurista {#migration-verification}

Kadib marka guuris ama isdhexgal wareeg-nololeed uu beddelo xogta kiraystaha, orod albaabbada xaqiijinta:

- `wp tenant verify-no-legacy --site=<site-id>` waxay xaqiijisaa in kiraystuhu uusan mar dambe ku tiirsanayn waddooyinkii hore ee dhinaca shabakadda.
- `wp tenant verify-sovereign-push --site=<site-id>` waxay xaqiijisaa in shaqooyinka sovereign push ay farsamayn karaan oo ay ka dhammaan karaan.

Isdhexgalladu waa inay u arkaan xaqiijin fashilantay inay tahay xannibaha deployment-ka oo ay ka fogaadaan inay kirayste calaamadiyaan live ilaa fashilka la xalliyo.

## Tirtirka kiraystaha {#tenant-deletion}

Socodyada tirtirku waa inay wacaan waddada teardown-ka addon-ka si aqoonsiyada database-ka kiraystaha loo nadiifiyo. Isdhexgallada dibadda waxay ka saari karaan kheyraadka provider-ka kadib marka teardown-ku guuleysto, laakiin waa inaysan tirtirin database-yada ama galalka host-ka inta xaqiijinta ama shaqooyinka async push ay weli socdaan.

## Router-kii database-ka ee la joojiyay {#deprecated-database-router}

`Database_Router`-kii hore waxaa lagu beddelay stub deprecation ah. Isdhexgallada cusub waa inay kiraystayaasha ku xalliyaan router-ka site-ka hadda jira iyo APIs-ka kaydka kiraystaha halkii ay ku tiirsanaan lahaayeen class-kii router-ka hore.
