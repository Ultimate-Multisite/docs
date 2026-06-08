---
title: 'Somo la 3: Kuandaa Mtandao Wako'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Somo la 3: Kuweka Mtandao Wako

Ni wakati wa kujenga. Katika somo hili, utafunga Ultimate Multisite na kuweka msingi wa mtandao wa FitSite. Kila uamuzi hapa unafanywa akilini mwa sekta ya mazoezi (fitness).

## Tulipoacha

Tulichagua studio za mazoezi kama eneo letu la biashara (niche) na kuthibitisha fursa hiyo. Sasa tunabadilisha wazo hilo kuwa jukwaa linalofanya kazi.

## Kuchagua Hosting Yako

Uchaguo wako wa hosting unamaanisha zaidi kwa jukwaa la niche kuliko kwa tovuti moja tu. Hatufungi tovuti moja—tunafunga mtandao ambao utakua hadi tovuti kadhaa au mamia.

### Nini cha Kutafuta

- **Usaidizi wa WordPress Multisite**: Si kila host inashughulikia multisite vizuri
- **Wildcard SSL**: Ni muhimu kwa mitandao inayotegemea subdomains
- **Rasilimali Zinazoweza Kukua (Scalable resources)**: Unahitaji nafasi ya kukua bila kuhitaji kuhamisha (migrate)
- **Uunganishaji wa Ultimate Multisite**: Kuweka jina la domain na SSL kiotomatiki kunahifadhi juhudi kubwa za uendeshaji

### Mbinu Inayopendekezwa

Chagua host kutoka orodha ya [Compatible Providers](/user-guide/host-integrations/closte). Hizi zimejaribiwa na Ultimate Multisite na zinatoa uunganishaji unauhitaji kwa ajili ya kuweka jina la domain na kiotomatiki cha SSL.

Kwa FitSite, tutatumia muundo wa subdomain. Hii inamaanisha kwamba tovuti za wateja kwa awali zitajitokeza kama `studioname.fitsite.com` kabla ya kuwezeshwa kuunganisha jina lao la domain.

## Kusakinisha WordPress Multisite

Ikiwa bado huna usakinishaji wa WordPress Multisite:

1. Sakinisha WordPress kwenye provider yako ya hosting
2. Fuata mwongozo wa [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Chagua muundo wa **subdomain** unapoulizwa

:::tip Kwa nini Subdomains?
Subdomains huipa kila tovuti ya mteja anwani yake tofauti (`studio.fitsite.com`) badala ya njia (`fitsite.com/studio`). Hii ni ya kitaalamu zaidi kwa wateja wako na inazuia migogoro ya permalink. Tazama [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) kwa kulinganisha kwa kina.
:::

## Kusakinisha Ultimate Multisite

Fuata mwongozo wa [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) ili:

1. Kupakia na kuwezesha plugin kwa mtandao mzima
2. Kukimbia [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Wakati wa setup wizard, kumbuka niche ya FitSite:

- **Currency**: Iwe imewekwa kwenye sarafu inayotumia wateja wako wa studio za mazoezi
- **Company name**: "FitSite" (au jina lako la biashara linalochaguliwa)
- **Company logo**: Pakia logo yako ya biashara -- hii inaonekana kwenye bili na barua pepe

## Kuweka Imegeuzwa kwa Niche ya Mazoezi

Kwa Ultimate Multisite iliyosakinishwa, fanya chaguo hizi za usanidi zinazohusu niche:

### Mipangilio Mikuu (General Settings)

Nenda kwenye **Ultimate Multisite > Settings** na weka usanidi wa:

- **Site name**: FitSite
- **Default role**: Administrator -- wamiliki wa studio za mazoezi wanahitaji udhibiti kamili wa maudhui ya tovuti yao
- **Registration**: Washa usajili wa watumiaji ili wamiliki wa studio waweze kujisajili wenyewe

### Usanidi wa Barua Pepe (Email Configuration)

Barua pepe za mfumo wako zinapaswa kuongea lugha ya niche yako. Nenda kwenye **Ultimate Multisite > Settings > Emails** na kubadilisha:

- Badilisha lugha ya jumla ya "tovuti yako mpya" na ujumbe maalum wa mazoezi
- Mfano wa kichwa cha utangulizi: "Tovuti yako ya studio ya mazoezi imetayarishwa"
- Mfano wa mwili wa utangulizi: Rejelea studio yao, masaa, na kuanza na tovuti yao ya mazoezi

Tutaboresha haya zaidi katika Somo la 8 (Usajili wa Wateja), lakini kuweka sauti sasa kunahakikisha hata usajili wa majaribio mapema unahisi kuwa ni wa niche.

### Usanidi wa Domain (Domain Configuration)

Ikiwa unatumia provider ya hosting inayolingana, weka usanidi wa domain mapping sasa:

1. Nenda kwenye **Ultimate Multisite > Settings > Domain Mapping**
2. Fuata mwongozo wa uunganishaji kwa host yako maalum
3. Jaribu kwamba subsites mpya zinapata SSL kiotomatiki

Hii inahakikisha kwamba tunapoanza kuunda templates na tovuti za majaribio katika somo linalofuata, kila kitu kinafanya kazi kutoka mwisho hadi mwanzoni.

## Mtandao wa FitSite Hadi Sasa

Mwisho wa somo hili, hivi ndivyo unavyo nazo:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (imefungwa na kuwekwa usanidi)
├── Hosting na wildcard SSL
├── Domain mapping imewekwa
├── Templates za barua pepe za niche (za awali)
└── Tayari kwa templates za tovuti (somo linalofuata)
```

## Tulichojenga Somo Hili

- **Usakinishaji linalofanya kazi wa WordPress Multisite** katika hali ya subdomain
- **Ultimate Multisite iliyosakinishwa** na kuwekwa usanidi na branding ya FitSite
- **Hosting na SSL** zimepangwa kwa ajili ya mtandao unaokua
- **Domain mapping** imewekwa kwa provider yako ya hosting
- **Sauti ya barua pepe ya niche** imewekwa tangu siku ya kwanza

---

**Inayofuata:** [Somo la 4: Kuunda Templates za Niche](lesson-4-templates) -- tutaunda templates za tovuti ambazo wamiliki wa studio za mazoezi watahitaji kutumia.
