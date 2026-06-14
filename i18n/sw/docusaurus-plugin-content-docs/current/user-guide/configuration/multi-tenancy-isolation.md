---
title: Utengaji wa Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Kutengan kwa Wateja Wengi (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 inasaidia kutenga database na mfumo wa faili kwa kila subsiti ili wateja wakowe huru kabisa. Hii inahakikisha data ya mteja yamehifadhiwa tofauti huku ikihifadhi uwezo wa kuandaa mtandao, malipo, na usimamizi.

## Mkakati wa Kutenganisha (Isolation strategy)

Tumia kutenganisha kwa wateja wanaohitaji utenganishaji mkubwa zaidi wa data, kuhifadhi la mfumo tofauti wa faili, au mipaka ya seva tofauti.

Kila mteja huru (sovereign tenant) inapaswa kuwa na:

- Database maalum ya mteja au mkakati wa mbele wa database unaokubalwa na host.
- Mfumo wa faili mzizi (filesystem root) maalum wa mteja.
- Rekodi ya kumbukumbu ya mteja inayohusisha tovuti hiyo na database yake, njia kuu (root path), jina la seva (hostname), na mfumo wa kutenganisha.
- Matokeo ya uthibitishaji wa uhamisho (migration verification result) kabla ya mteja kuhesabiwa kuwa hai.

## Kuunganisha Mwenendo wa Database Host (Database host binding)

Toleo la 1.2.0 limebadilisha tabia ya awali ya kuunganisha kwenye seva moja kwa seva (same-machine host binding) kwa usakinishaji wa sovereign. Thamani kama `localhost` inafanywa sawa ili Bedrock, FrankenPHP, na usakinishaji wa WordPress unaotumia containeri wa PHP waweze kutoa na kuthibitisha ruhusa dhidi ya string ya host ambayo MySQL inayoona kweli.

Unapoweka mipangilio kwa mteja huru:

1. Weka database host kwenye thamani inayohitajika na mfumo wa mteja (tenant runtime).
2. Tumia `localhost` kwa usakinishaji wa soketi za ndani (local socket installs) wakati host inatarajia muunganisho wa ndani.
3. Tumia `127.0.0.1` au jina la huduma tu pale ambapo seva ya database inatoa haki kwa host hilo.
4. Endesha uthibitishaji wa uhamisho (migration verification) baada ya kubadilisha kuunganisha host.

Ikiwa ripoti za uthibitishaji zinaonyesha kushindwa la kutoa ruhusa, soma upya ruhusa za mtumiaji kwenye database ya mteja na uunganisho uliowekwa wa host. Mtumiaji aliyepokea ruhusa kwa `user@localhost` ni tofauti na `user@127.0.0.1` au `user@%`.

## Mfumo wa Faili Mzizi (Filesystem root)

Mroot ya mteja inapaswa kuwa imara baada ya kuwasha na kuweka upya (restarts) na kuweka (deployments). Epuka kutumia njia za kuweka muda mfupi (temporary mount paths). Kwa maelezo kama ya Bedrock, hakikisha mroot wa mteja unashikilia kwenye web root ya WordPress inayotarajiwa na tenant bootstrap, si tu mroot wa mradi.

## Mpangilio wa kuweka (Provisioning order)

Kwa wateja wapya wa kipaumbele (sovereign tenants), tumia mpangilio huu:

1. Tengeneza rekodi ya registry ya mteja.
2. Tengeneza database ya mteja na mtumiaji wa database.
3. Weka muundo (bootstrap) wa schema ya mteja.
4. Tengeneza watumiaji wa mteja.
5. Weka njia za mfumo (filesystem paths) za mteja.
6. Endesha uthibitishaji wa migration.
7. Badilisha uelekezaji (routing) au DNS baada ya kukamilika kwa uthibitishaji.

Mpangilio huu unazuia wateja ambao bado hawajatenganishwa kikamilifu kupokea trafiki kabla ya mwandishi wa database, watumiaji, na mfumo wa faili kuwa tayari.

## Milango ya usimamizi wa wateja wa kipaumbele (Sovereign customer management flows)

Ultimate Multisite v2.13.0 inahifadhi vitendo vya usimamizi wa mteja kwenye tovuti kuu wakati hali ya sovereign mode imewashwa. Mteja bado anaweza kufanya kama install ya WordPress iliyotenganishwa, lakini vitendo vinavyohusu wateja vinavyotegemea malipo ya mtandao (network billing), uanachama (membership), au data ya akaunti ya pamoja yanapaswa kupeleka mteja kwenye tovuti kuu badala ya kujaribu kukamilisha kitendo hicho ndani ya wakati wa utendaji (runtime) wa mteja.

Mzunguko wa tovuti kuu unatumika kwa:

- Mabadiliko ya checkout na mipango.
- Muonekano wa akaunti na vitendo vya wasifu wa mteja.
- Marekebisho ya anwani ya malipo na skrini za usimamizi wa malipo.
- Maoni (views) ya risiti na historia ya malipo.
- Vitendo vya usimamizi wa tovuti kama kuongeza au kufuta tovuti.
- Kubadilisha template.
- Ulinganifu wa domain (domain mapping) na mabadiliko ya domain kuu (primary-domain).

Inapokuwa mteja anaanza kufanya mojawapo ya vitendo hivi kutoka kwa 'sovereign tenant', Ultimate Multisite inajenga URL kuu ya eneo hilo na inahifadhi 'source tenant' kama sehemu ya kurudisha wakati ni salama kufanya hivyo. Hii inamruhusu mteja kukamilisha kitendo kilichosimilikiwa dhidi rekodi za mtandao, kisha akirudi kwenye muktadha wa eneo hilo bila kuongeza au kuweka upya hali ya malipo au usajili katika database ya eneo hilo.

Kwa watendaji (operators), sheria ya vitendo ni: weka kurasa za malipo (billing), akaunti, checkout, risiti (invoice), template, na usimamizi wa domain kwenye tovuti kuu kwa ajili ya mitandao ya eneo hilo (sovereign networks). Dashibodi za eneo hilo zinaweza kuunganisha kwenye kurasa hizo, lakini tovuti kuu ndiyo inakuwa chanzo cha ukweli (source of truth) kwa kitendo hicho.
