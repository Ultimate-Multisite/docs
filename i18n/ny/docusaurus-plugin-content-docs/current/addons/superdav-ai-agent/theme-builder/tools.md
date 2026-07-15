---
title: Zida ndi Masinthidwe
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Zida ndi Kasinthidwe

Theme Builder imagwiritsa ntchito zida zingapo kusanthula, kupanga kapangidwe, ndi kumanga site yanu ya WordPress. Mu mtundu wa 1.16.0, **sd-ai-agent/site-scrape tsopano ndi chida cha Gawo 1**, zomwe zimachititsa kuti chipezeke mwachisawawa mu Theme Builder. Superdav AI Agent v1.18.0 imayambitsanso phukusi lapamwamba lothandizira lomwe limagawidwa padera la mayendedwe a ntchito a opanga odalirika; zida zimenezo si gawo la phukusi loyambira la WordPress.org ndipo ziyenera kukhazikitsidwa ndi kuvomerezedwa padera.

## Zida Zomwe Zilipo {#available-tools}

### Zida za Gawo 1 (Zimapezeka Nthawi Zonse) {#tier-1-tools-always-available}

Zida za Gawo 1 zimapezeka mwachisawawa mu Theme Builder popanda kasinthidwe kena kalikonse.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Cholinga:** Kusanthula mawebusayiti omwe alipo kuti mutenge kudzoza kwa kapangidwe, dongosolo la zomwe zili, ndi magwiridwe antchito.

**Zomwe Zimatha Kuchita:**

- **Kusanthula webusayiti** — scrape ndi kusanthula mawebusayiti a opikisana nawo kapena odzoza
- **Kutulutsa kapangidwe** — kuzindikira mitundu, zilembo, ndi mapatani a layout
- **Dongosolo la zomwe zili** — kumvetsa makonzedwe a masamba ndi hierarchy
- **Kuzindikira ma feature** — kuzindikira ma plugin ndi magwiridwe antchito
- **Kusanthula magwiridwe** — kuyang'ana liwiro la tsamba ndi kukonza bwino
- **Kusanthula SEO** — kuwunikanso meta tags ndi data yokonzedwa

**Kagwiritsidwe Ntchito:**

```
Santhulani kapangidwe ka example.com ndipo mugwiritse ntchito ngati kudzoza kwa site yanga.
```

**Zomwe Imatulutsa:**

- Palette ya mitundu ndi kagwiritsidwe ntchito ka mitundu
- Typography (zilembo ndi makulidwe)
- Dongosolo la layout ndi mipata
- Mapatani a navigation
- Makonzedwe a zomwe zili
- Kugwiritsa ntchito zithunzi ndi media
- Zinthu zolumikizana
- Kuyankha bwino pa mafoni

**Malire:**

- Sizingathe scrape ma site otetezedwa ndi password
- Imalemekeza robots.txt ndi ndondomeko za site
- Mwina sizingagwire zomwe zili zosintha mwachangu
- Ma site okhala ndi JavaScript yambiri angakhale ndi kusanthula kochepa
- Ma site akulu angatenge nthawi yaitali kusanthula

### Zida za Gawo 2 (Zosankha) {#tier-2-tools-optional}

Zida za Gawo 2 zimapezeka zikayatsidwa mwachindunji mu zoikamo za Theme Builder.

#### Analytics Yapamwamba {#advanced-analytics}

Imapereka miyeso yatsatanetsatane ya magwiridwe:

- Nthawi zotsegula tsamba
- Core Web Vitals
- Chiwerengero cha SEO
- Chiwerengero cha kupezeka kwa onse
- Chiwerengero cha machitidwe abwino kwambiri

#### Content Optimizer {#content-optimizer}

Imasanthula ndi kupereka malingaliro okonza pa:

- Kuwerengeka mosavuta
- Kukonza SEO
- Kugwiritsa ntchito mawu ofunikira
- Dongosolo la zomwe zili
- Kuyika kwa call-to-action

### Zida za Gawo 3 (Premium) {#tier-3-tools-premium}

Zida za Gawo 3 zimafuna kasinthidwe kena kapena ma feature a premium.

#### AI Content Generator {#ai-content-generator}

Imapanga zomwe zili za:

- Mafotokozedwe a product
- Masamba a service
- Zolemba za blog
- Mafotokozedwe a meta
- Zolemba za call-to-action

#### Zida Zapamwamba za Kapangidwe {#advanced-design-tools}

Imapereka luso lapamwamba la kapangidwe:

- Kupanga Custom CSS
- Kupanga animation
- Kapangidwe ka zinthu zolumikizana
- Theory yapamwamba ya mitundu
- Kukonza typography

### Zida Zothandizira Zapamwamba (Phukusi Lapadera) {#advanced-companion-tools-separate-package}

Phukusi lothandizira lapamwamba limagawidwa padera kuchokera ku kutulutsidwa koyambira kwa Superdav AI Agent. Lalinganizidwa kwa malo a opanga odalirika ndi eni-site komwe administrators amalola mwachindunji agent kugwiritsa ntchito zida zokhala ndi mphamvu zazikulu.

Luso la phukusi lothandizira lapamwamba lingaphatikizepo:

- **Zida za filesystem** — kuyang'ana ndi kusintha mafayilo ovomerezedwa m'malo odalirika
- **Zida za database** — kufunsa kapena kusintha data ya site zikavomerezedwa mwachindunji
- **Zida za WP-CLI** — kuyendetsa malamulo a kukonza ndi kuyang'ana WordPress
- **Zida za REST dispatcher** — kuitana ma endpoint a REST olembetsedwa kudzera m'mayendedwe olamulidwa a dispatch
- **Zida za plugin builder** — kupanga maziko ndi kubwerezabwereza pa code ya plugin
- **Zida za Git snapshot** — kupanga ma snapshot musanayambe ntchito zowopsa za opanga
- **Zida za user-management** — kuthandiza kuwunika kapena kusintha zolemba za ogwiritsa ntchito komwe kuloledwa
- **Zida za benchmark** — kuyendetsa ma benchmark a magwiridwe kapena luso kuti awunikidwe pa chitukuko

Musazilembere ngati zida za Theme Builder zomwe zimapezeka kwa aliyense pa kukhazikitsa kulikonse. Zimapezeka kokha pamene phukusi lothandizira lapamwamba layikidwa, layatsidwa, ndi kuchepetsedwa kwa administrators odalirika.

## Kasinthidwe ka Zida {#tool-configuration}

### Kuyatsa Zida {#enabling-tools}

Kuti muyatse zida zina mu Theme Builder:

1. Pitani ku **Gratis AI Agent → Settings**
2. Pitani ku **Theme Builder → Tools**
3. Yatsani kapena zimitsani zida ngati pakufunika
4. Sungani zoikamo

### Zilolezo za Zida {#tool-permissions}

Zida zina zimafuna zilolezo:

- **Site scraping** — imafuna intaneti
- **Analytics** — imafuna kulumikizana ndi Google Analytics
- **Kupanga zomwe zili** — kumafuna API keys
- **Ma feature apamwamba** — angafune premium subscription
- **Zida zothandizira zapamwamba** — zimafuna phukusi lapamwamba logawidwa padera ndi chidaliro chomveka cha administrator

### API Keys ndi Zizindikiro {#api-keys-and-credentials}

Konzani API keys za zida zomwe zimazifuna:

1. Pitani ku **Gratis AI Agent → Settings → API Keys**
2. Lowetsani zizindikiro za chida chilichonse
3. Yesani kulumikizana
4. Sungani motetezeka

### Kuyika Phukusi Lothandizira Lapamwamba {#installing-the-advanced-companion-package}

Phukusi lothandizira lapamwamba limatulutsidwa padera kuchokera ku ZIP yoyambira ya WordPress.org. Liyikeni kokha kuchokera ku njira yovomerezeka yogawa ya project pa kutulutsidwa kumeneko, kenako chepetsani mwayi wofikira kwa administrators odalirika. Unikaninso ma gate a kuvomereza kwa munthu ndi khalidwe la git snapshot musanayitse zida za filesystem, database, WP-CLI, REST dispatcher, plugin builder, user-management, kapena benchmark pa site ya production.

## Kugwiritsa Ntchito sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Kagwiritsidwe Ntchito Koyambira {#basic-usage}

Funsani Theme Builder kuti isanthule webusayiti:

```
Santhulani kapangidwe ka site ya mpikisano wanga pa competitor.com
ndipo perekani malingaliro okonza kapangidwe ka site yanga.
```

### Kusanthula Kwapadera {#specific-analysis}

Pemphani mitundu yapadera ya kusanthula:

```
Tulutsani palette ya mitundu kuchokera ku example.com ndipo mugwiritse ntchito ngati kudzoza.
```

```
Santhulani dongosolo la navigation la example.com ndipo gwiritsani ntchito makonzedwe ofanana
pa site yanga.
```

```
Yang'anani kuyankha bwino kwa example.com pa mafoni ndipo onetsetsani kuti site yanga
ikuyankhanso chimodzimodzi.
```

### Kusanthula Koyerekezera {#comparison-analysis}

Yerekezani ma site angapo:

```
Yerekezani mapangidwe a site1.com ndi site2.com ndipo pangani kapangidwe
komwe kamaphatikiza zinthu zabwino kwambiri za onse awiri.
```

## Malire a Zida ndi Zoyenera Kuganizira {#tool-limitations-and-considerations}

### Kuchepetsa Mlingo {#rate-limiting}

- Kukolola deta kuli ndi malire a kuchuluka kuti seva isadzaze kwambiri
- Zopempha zingapo ku tsamba lomwelo zingachedwetsedwe
- Masamba akuluakulu angatenge nthawi yaitali kuti awunikidwe

### Kulondola kwa Zomwe Zili Mkati {#content-accuracy}

- Zomwe zimasintha nthawi zonse sizingagwidwe zonse
- Zomwe zimapangidwa ndi JavaScript zingakhale zosakwanira
- Deta ya nthawi yeniyeni singasonyezedwe
- Zina mwa zomwe zili mkati zingakhale kumbuyo kwa paywalls

### Zoganizira za Malamulo ndi Makhalidwe Abwino {#legal-and-ethical-considerations}

- Lemekezani robots.txt ndi malamulo a tsamba
- Musakolole zomwe zili ndi ufulu wa eni ake kuti muzibwerezenso
- Gwiritsani ntchito kusanthula kuti mupeze chilimbikitso, osati kukopera
- Tsimikizirani kuti muli ndi ufulu wogwiritsa ntchito zomwe zatengedwa
- Tsatirani mfundo za ntchito za masamba omwe asanthulidwa

### Zotsatira pa Magwiridwe Antchito {#performance-impact}

- Kukolola deta ku masamba akuluakulu kungatenge nthawi
- Kukolola kangapo nthawi imodzi kungakhale kochedwa
- Kulumikizana kwa netiweki kumakhudza liwiro
- Magulu akuluakulu a deta angafune kukonza kochuluka

## Njira Zabwino {#best-practices}

### Kugwiritsa Ntchito Kusanthula Tsamba {#using-site-analysis}

1. **Sankhani masamba angapo** — sonkhanitsani chilimbikitso kuchokera ku magwero angapo
2. **Yang'anani pa kapangidwe** — phunzirani mawonekedwe ndi njira zokonzera zinthu
3. **Tulutsani mitundu** — gwiritsani ntchito mapaleti a mitundu ngati poyambira
4. **Phunzirani typography** — pezani kuphatikizana kwa mafonti komwe mumakonda
5. **Unikani kuyenda** — mvetsetsani momwe menyu amakonzedwera

### Kukolola Deta Mwachikhalidwe Chabwino {#ethical-scraping}

1. **Lemekezani robots.txt** — tsatirani malangizo a tsamba
2. **Musakopere zomwe zili mkati** — gwiritsani ntchito kusanthula kuti mupeze chilimbikitso chokha
3. **Tsimikizirani ufulu** — onetsetsani kuti mungagwiritse ntchito zomwe zatengedwa
4. **Tchulani magwero** — perekani ulemu kwa magwero a chilimbikitso
5. **Tsatirani mfundo** — tsatirani mfundo za ntchito za tsamba

### Kukulitsa Mphamvu ya Chida {#maximizing-tool-effectiveness}

1. **Khalani enieni** — pemphani mitundu yeniyeni ya kusanthula
2. **Perekani nkhani yake** — fotokozani cholinga cha tsamba lanu
3. **Khazikitsani ziyembekezo** — fotokozani zolinga zanu za kapangidwe
4. **Bwerezani ndi kukonza** — konzani potengera zotsatira
5. **Phatikizani zida** — gwiritsani ntchito zida zingapo kuti musanthule mozama

## Kuthetsa Mavuto {#troubleshooting}

### Tsamba Silingakololeke {#site-wont-scrape}

- Yang'anani ngati tsamba likupezeka kwa anthu onse
- Tsimikizirani kuti robots.txt imalola kukolola deta
- Yesani tsamba lina
- Yang'anani kulumikizana kwa intaneti
- Lumikizanani ndi thandizo ngati vuto likupitirirabe

### Kusanthula Kosakwanira {#incomplete-analysis}

- Tsamba lingakhale ndi zomwe zimasintha nthawi zonse
- JavaScript singakhale itawonetsedwa mokwanira
- Masamba akuluakulu angadutse nthawi yoikidwiratu
- Yesani kusanthula masamba enieni m'malo mwake
- Pemphani mitundu yeniyeni ya kusanthula

### Magwiridwe Antchito Ochedwa {#slow-performance}

- Masamba akuluakulu amatenga nthawi yaitali kuti awunikidwe
- Kukolola kangapo nthawi imodzi kumakhala kochedwa
- Kulumikizana kwa netiweki kumakhudza liwiro
- Yesani pa nthawi yomwe anthu sagwiritsa ntchito kwambiri
- Santhulani magawo ang'onoang'ono kaye

## Zolemba Zogwirizana {#related-documentation}

- [Mafunso Ozindikira](./discovery-interview.md) — sonkhanitsani zambiri za kapangidwe
- [Njira ya Kapangidwe](./design-direction.md) — konzani kapangidwe kanu
- [Menyu a Hospitality](./hospitality-menus.md) — pangani masamba a menyu
