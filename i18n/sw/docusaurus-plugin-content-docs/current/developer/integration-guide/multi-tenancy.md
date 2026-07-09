---
title: Ujumuishaji wa Wapangaji Wengi
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Ujumuishaji wa Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 hubadilisha sehemu kadhaa za mguso wa ujumuishaji kwa wapangaji huru, uthibitishaji wa uhamishaji, na otomatiki ya mzunguko wa maisha wa mpangaji.

## Mtiririko wa kuanzisha mpangaji

Ujumuishaji unaounda au kubadilisha wapangaji unapaswa kufuata mpangilio huu:

1. Tambua rekodi ya sajili ya mpangaji na modeli ya utengaji.
2. Unda au thibitisha mwandishi wa database ya mpangaji.
3. Anzisha schema ya mpangaji.
4. Wape watumiaji wa mpangaji huduma.
5. Sajili uelekezaji wa mpangaji na njia za mfumo wa faili.
6. Endesha uthibitishaji wa uhamishaji kabla ya kumfanya mpangaji aonekane.

Usidhani kwamba mpangaji huru anaweza kutumia tena muunganisho wa database ya mtandao. Tumia sajili ya mpangaji na miundo ya mwandishi iliyotolewa na nyongeza.

## Hooks za SSO na REST

Autologin ya mpangaji isiyo na hali hutumia tokeni za muda mfupi zenye dai la madhumuni, ulinzi wa JTI dhidi ya kurudiwa, kikomo cha kuisha muda, na kubandika asili. Ujumuishaji unaoongeza vitufe vya kuingia au viungo vya usimamizi wa mbali unapaswa kuzalisha ziara za mpangaji kupitia mtiririko wa SSO unaoungwa mkono badala ya kujenga URL za kuingia za mpangaji moja kwa moja.

Matukio ya ukaguzi wa API upande wa mtandao na muhtasari wa kila siku yanapatikana kwa malango ya wapangaji huru. Tumia kumbukumbu hizo unapotatua hitilafu za mifumo ya nje inayopiga endpoints za mzunguko wa maisha wa mpangaji.

## URL za vitendo vya mteja huru

Ultimate Multisite v2.13.0 huelekeza vitendo vya mteja wa mpangaji huru kurudi kwenye tovuti kuu kwa mitiririko ya account, checkout, billing, invoice, tovuti, kubadilisha template, na domain-mapping. Ujumuishaji unaoonyesha viungo vya usimamizi upande wa mpangaji unapaswa kuelekeza vitendo hivyo kwenye paneli ya mteja ya tovuti kuu na kujumuisha lengo la kurudi lililothibitishwa wakati mtumiaji anapaswa kuweza kurudi kwa mpangaji baada ya kukamilisha kitendo.

Tumia kifungashio cha msingi cha SSO kwa viungo vya usimamizi vya cross-domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL iliyozalishwa bado inaweza kuchujwa kupitia `wu_sso_url`, ambayo hupokea URL ya SSO, mtumiaji wa sasa, kitambulisho cha tovuti lengwa, na muktadha wa kuelekeza upya. Nyongeza zinaweza kutumia kichujio hicho kuongeza muktadha mahususi wa mtoa huduma au kubadilisha URL ya broker huku zikihifadhi uthibitishaji wa tokeni wa Ultimate Multisite.

Usirudufishe hali ya membership, invoice, billing-address, template, au usimamizi wa domain ndani ya mpangaji huru. Chukulia dashboard ya mpangaji kama kizindua na paneli ya mteja ya tovuti kuu kama mfumo wa rekodi kwa vitendo vinavyosimamiwa.

## Uthibitishaji wa uhamishaji

Baada ya uhamishaji au ujumuishaji wa mzunguko wa maisha kubadilisha data ya mpangaji, endesha milango ya uthibitishaji:

- `wp tenant verify-no-legacy --site=<site-id>` huthibitisha kuwa mpangaji hategemei tena njia za zamani za upande wa mtandao.
- `wp tenant verify-sovereign-push --site=<site-id>` huthibitisha kuwa kazi za kusukuma za mpangaji huru zinaweza kuchakata na kumaliza foleni.

Ujumuishaji unapaswa kuchukulia uthibitishaji ulioshindwa kama kizuizi cha deployment na kuepuka kumtia alama mpangaji kuwa hai hadi kushindwa huko kutatuliwe.

## Kufuta mpangaji

Mitiririko ya kufuta inapaswa kuita njia ya teardown ya nyongeza ili vitambulisho vya database ya mpangaji visafishwe. Ujumuishaji wa nje unaweza kuondoa rasilimali za mtoa huduma baada ya teardown kufanikiwa, lakini haupaswi kufuta database za host au folda wakati uthibitishaji au kazi za kusukuma za async bado zinaendelea.

## Router ya database iliyopitwa na wakati

`Database_Router` ya zamani imebadilishwa na stub ya kuashiria kupitwa na wakati. Ujumuishaji mpya unapaswa kutambua wapangaji kupitia APIs za sasa za router ya tovuti na sajili ya mpangaji badala ya kutegemea class ya zamani ya router.
