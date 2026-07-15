---
title: 'Isomo rya 3: Gushyiraho Urusobe Rwawe'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Isomo rya 3: Gushyiraho Urusobe Rwawe

Igihe cyo kubaka kirageze. Muri iri somo uzashyiraho Ultimate Multisite maze ugene ishingiro ry’urusobe rwa FitSite. Buri cyemezo hano gifatwa hagendewe ku cyiciro cy’imyitozo ngororamubiri.

## Aho Twari Tugeze {#where-we-left-off}

Twahisemo amasitudiyo y’imyitozo ngororamubiri nk’icyiciro cyacu cyihariye kandi twemeza amahirwe ahari. Ubu tugiye guhindura icyo gitekerezo urubuga rukora.

## Guhitamo Serivisi Yakira Imbuga Zawe {#choosing-your-hosting}

Guhitamo serivisi yakira imbuga bifite akamaro kanini ku rubuga rw’icyiciro cyihariye kurusha ku rubuga rumwe gusa. Nturi kwakira urubuga rumwe -- uri kwakira urusobe ruzakura rukagera ku mbuga mirongo cyangwa amagana.

### Ibyo Wakagombye Kureba {#what-to-look-for}

- **Gushyigikira WordPress Multisite**: Si serivisi zose zakira imbuga zikoresha multisite neza
- **Wildcard SSL**: Ni ngombwa ku rusobe rushingiye kuri subdomain
- **Ibikoresho bishobora kwiyongera**: Ukeneye umwanya wo gukura utimutse
- **Kwihuza na Ultimate Multisite**: Guhuza domain ku buryo bwikora na SSL bigabanya cyane akazi ko kubicunga

### Uburyo Busabwa {#recommended-approach}

Hitamo serivisi yakira imbuga iri ku rutonde rwa [Abatanga Serivisi Bahujwe](/user-guide/host-integrations/closte). Aba barageragejwe na Ultimate Multisite kandi batanga ukwihuza ukeneye kugira ngo uhuze domain n’imikorere yikora ya SSL.

Kuri FitSite, tuzakoresha imiterere ya subdomain. Ibi bivuze ko imbuga z’abakiriya zizabanza kugaragara nka `studioname.fitsite.com` mbere y’uko bahitamo guhuza domain yabo bwite.

## Gushyiraho WordPress Multisite {#installing-wordpress-multisite}

Niba utarasanganywe ishyirwaho rya WordPress Multisite:

1. Shyiraho WordPress ku mutanga serivisi yakira imbuga zawe
2. Kurikiza umurongo ngenderwaho wa [Uko Washyiraho WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Hitamo imiterere ya **subdomain** igihe ubisabwe

:::tip Kuki Subdomains?
Subdomains ziha buri rubuga rw’umukiriya aderesi yarwo yihariye (`studio.fitsite.com`) aho kuba inzira (`fitsite.com/studio`). Ibi birushaho kugaragara nk’iby’umwuga ku bakiriya bawe kandi birinda amakimbirane ya permalink. Reba [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) kugira ngo ubone igereranya rirambuye.
:::

## Gushyiraho Ultimate Multisite {#installing-ultimate-multisite}

Kurikiza umurongo ngenderwaho wa [Gushyiraho Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) kugira ngo:

1. Wohereze kandi ukorese umugereka ku rusobe rwose
2. Ukore [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Mu gihe cya setup wizard, uzirikane icyiciro cyihariye cya FitSite:

- **Ifaranga**: Rishyire ku ifaranga abakiriya bawe bafite amasitudiyo y’imyitozo ngororamubiri bakoresha
- **Izina ry’isosiyete**: "FitSite" (cyangwa izina ry’ikirango wahisemo)
- **Ikirango cy’isosiyete**: Ohereza ikirango cyawe -- kigaragara kuri fagitire no muri emails

## Kugena Ibijyanye n’Icyiciro cy’Imyitozo Ngororamubiri {#configuring-for-the-fitness-niche}

Ultimate Multisite imaze gushyirwaho, fata ibi byemezo by’imiterere byihariye kuri iki cyiciro:

### Igenamiterere Rusange {#general-settings}

Jya kuri **Ultimate Multisite > Settings** maze ugene:

- **Izina ry’urubuga**: FitSite
- **Uruhare rusanzwe**: Administrator -- ba nyir’amasitudiyo y’imyitozo ngororamubiri bakeneye kugenzura byuzuye ibiri ku rubuga rwabo
- **Kwiyandikisha**: Fungura kwiyandikisha kw’abakoresha kugira ngo ba nyir’amasitudiyo bashobore kwiyandikisha ubwabo

### Kugena Email {#email-configuration}

Email zoherezwa na sisitemu yawe zikwiye kuvuga ururimi rw’icyiciro cyawe cyihariye. Jya kuri **Ultimate Multisite > Settings > Emails** maze uhindure:

- Simbuza imvugo rusange ya "urubuga rwawe rushya" ubutumwa bwihariye ku myitozo ngororamubiri
- Urugero rw’umutwe w’ikaze: "Urubuga rwa studio yawe y’imyitozo ngororamubiri rwiteguye"
- Urugero rw’umubiri w’ubutumwa bw’ikaze: Vuga studio yabo, amasomo, n’uko batangira gukoresha urubuga rwabo rw’imyitozo ngororamubiri

Tuzabitunganya neza kurushaho mu Isomo rya 8 (Kwakira Abakiriya Bashya), ariko gushyiraho iyi mvugo ubu bituma no kwiyandikisha kw’igerageza kwa mbere kumvikana nk’ukwihariye kuri iki cyiciro.

### Kugena Domain {#domain-configuration}

Niba ukoresha umutanga serivisi yakira imbuga uhujwe, gena domain mapping ubu:

1. Jya kuri **Ultimate Multisite > Settings > Domain Mapping**
2. Kurikiza umurongo ngenderwaho w’ukwihuza ugenewe serivisi yawe yakira imbuga yihariye
3. Gerageza urebe ko subsites nshya zibona SSL mu buryo bwikora

Ibi bituma igihe tuzatangira gukora templates n’imbuga z’igerageza mu isomo rikurikira, ibintu byose bikora kuva ku ntangiriro kugeza ku iherezo.

## Urusobe rwa FitSite Kugeza Ubu {#the-fitsite-network-so-far}

Ku mpera y’iri somo, dore ibyo ufite:

```
Urusobe rwa FitSite
├── WordPress Multisite (uburyo bwa subdomain)
├── Ultimate Multisite (yashyizweho kandi yagizwe)
├── Serivisi yakira imbuga ifite wildcard SSL
├── Domain mapping yagizwe
├── Templates za email zihariye ku cyiciro (iz’ibanze)
└── Byiteguye templates z’urubuga (isomo rikurikira)
```

## Ibyo Twubatse Muri Iri Somo {#what-we-built-this-lesson}

- **Ishyirwaho rya WordPress Multisite rikora** mu buryo bwa subdomain
- **Ultimate Multisite yashyizweho** kandi igengwa n’ikirango cya FitSite
- **Serivisi yakira imbuga na SSL** byashyizweho ku rusobe rugenda rukura
- **Domain mapping** yagizwe ku mutanga serivisi yakira imbuga zawe
- **Imvugo ya email yihariye ku cyiciro** yashyizweho kuva ku munsi wa mbere

---

**Ibikurikira:** [Isomo rya 4: Kubaka Templates Zihariye ku Cyiciro](lesson-4-templates) -- turema templates z’urubuga ba nyir’amasitudiyo y’imyitozo ngororamubiri bazifuza gukoresha koko.
