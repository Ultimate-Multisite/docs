---
title: 'Lezzjoni 3: It-Twaqqif tan-Netwerk Tiegħek'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lezzjoni 3: It-Twaqqif tan-Network Tiegħek {#lesson-3-setting-up-your-network}

Wasal iż-żmien li tibni. F'din il-lezzjoni se tinstalla Ultimate Multisite u tikkonfigura l-pedament tan-network FitSite. Kull deċiżjoni hawnhekk tittieħed b'moħħ in-niċċa tal-fitness.

## Fejn Ħallejna {#where-we-left-off}

Għażilna studios tal-fitness bħala n-niċċa tagħna u vvalidajna l-opportunità. Issa ndawru dik l-idea fi pjattaforma li taħdem.

## L-Għażla tal-Hosting Tiegħek {#choosing-your-hosting}

L-għażla tal-hosting tiegħek hija iktar importanti għal pjattaforma ta' niċċa milli għal sit web wieħed. M'intix qed tospita sit wieħed -- qed tospita network li se jikber għal għexieren jew mijiet ta' siti.

### X'Għandek Tfittex {#what-to-look-for}

- **Appoġġ għal WordPress Multisite**: Mhux il-hosts kollha jimmaniġġjaw multisite tajjeb
- **Wildcard SSL**: Essenzjali għal networks ibbażati fuq subdomains
- **Riżorsi skalabbli**: Għandek bżonn spazju biex tikber mingħajr ma timmigra
- **Integrazzjoni ma' Ultimate Multisite**: Domain mapping awtomatizzat u SSL jiffrankaw ħafna sforz operattiv

### Approċċ Rakkomandat {#recommended-approach}

Agħżel host mil-lista tal-[Fornituri Kompatibbli](/user-guide/host-integrations/closte). Dawn ġew ittestjati ma' Ultimate Multisite u jipprovdu l-integrazzjonijiet li għandek bżonn għal domain mapping u awtomazzjoni tal-SSL.

Għal FitSite, se nużaw konfigurazzjoni ta' subdomain. Dan ifisser li s-siti tal-klijenti inizjalment jidhru bħala `studioname.fitsite.com` qabel ma, b'mod fakultattiv, jimmappjaw id-domain tagħhom stess.

## L-Installazzjoni ta' WordPress Multisite {#installing-wordpress-multisite}

Jekk għad m'għandekx installazzjoni ta' WordPress Multisite:

1. Installa WordPress fuq il-fornitur tal-hosting tiegħek
2. Segwi l-gwida [Kif Tinstalla WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Agħżel konfigurazzjoni ta' **subdomain** meta tintalab

:::tip Għaliex Subdomains?
Subdomains jagħtu lil kull sit tal-klijent l-indirizz distint tiegħu stess (`studio.fitsite.com`) minflok path (`fitsite.com/studio`). Dan huwa iktar professjonali għall-klijenti tiegħek u jevita kunflitti tal-permalinks. Ara [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) għal paragun dettaljat.
:::

## L-Installazzjoni ta' Ultimate Multisite {#installing-ultimate-multisite}

Segwi l-gwida [L-Installazzjoni ta' Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) biex:

1. Tella' u attiva l-estensjoni fuq in-network kollu
2. Mexxi l-[Wizard tat-Twaqqif](/user-guide/getting-started/multisite-setup-wizard)

Matul il-wizard tat-twaqqif, żomm f'moħħok in-niċċa FitSite:

- **Munita**: Issettja għall-munita li jużaw il-klijenti tiegħek tal-istudios tal-fitness
- **Isem il-kumpanija**: "FitSite" (jew l-isem tal-marka li għażilt)
- **Logo tal-kumpanija**: Tella' l-logo tal-marka tiegħek -- dan jidher fuq il-fatturi u l-emails

## Konfigurazzjoni għan-Niċċa tal-Fitness {#configuring-for-the-fitness-niche}

Meta Ultimate Multisite jkun installat, agħmel dawn l-għażliet ta' konfigurazzjoni speċifiċi għan-niċċa:

### Settings Ġenerali {#general-settings}

Mur f'**Ultimate Multisite > Settings** u kkonfigura:

- **Isem is-sit**: FitSite
- **Rwol default**: Amministratur -- is-sidien tal-istudios tal-fitness għandhom bżonn kontroll sħiħ tal-kontenut tas-sit tagħhom
- **Reġistrazzjoni**: Ippermetti r-reġistrazzjoni tal-utenti sabiex is-sidien tal-istudios ikunu jistgħu jirreġistraw huma stess

### Konfigurazzjoni tal-Email {#email-configuration}

L-emails tas-sistema tiegħek għandhom jitkellmu bil-lingwa tan-niċċa tiegħek. Mur f'**Ultimate Multisite > Settings > Emails** u ppersonalizza:

- Ibdel lingwaġġ ġeneriku bħal "is-sit il-ġdid tiegħek" b'messaġġi speċifiċi għall-fitness
- Eżempju ta' suġġett ta' merħba: "Is-sit web tal-istudio tal-fitness tiegħek lest"
- Eżempju ta' test ta' merħba: Irreferi għall-istudio tagħhom, il-klassijiet, u kif jibdew bis-sit tal-fitness tagħhom

Se nirfinaw dawn iktar fil-Lezzjoni 8 (Onboarding tal-Klijenti), iżda t-twaqqif tat-ton issa jiżgura li anke r-reġistrazzjonijiet tat-test bikrin iħossuhom speċifiċi għan-niċċa.

### Konfigurazzjoni tad-Domain {#domain-configuration}

Jekk qed tuża fornitur tal-hosting kompatibbli, ikkonfigura domain mapping issa:

1. Mur f'**Ultimate Multisite > Settings > Domain Mapping**
2. Segwi l-gwida tal-integrazzjoni għall-host speċifiku tiegħek
3. Ittestja li siti sekondarji ġodda jiksbu SSL awtomatikament

Dan jiżgura li meta nibdew noħolqu mudelli u siti tat-test fil-lezzjoni li jmiss, kollox jaħdem mill-bidu sat-tmiem.

## In-Network FitSite S'issa {#the-fitsite-network-so-far}

Fl-aħħar ta' din il-lezzjoni, hawn x'għandek:

```
Network FitSite
├── WordPress Multisite (modalità subdomain)
├── Ultimate Multisite (installat u kkonfigurat)
├── Hosting b'wildcard SSL
├── Domain mapping ikkonfigurat
├── Mudelli tal-email speċifiċi għan-niċċa (inizjali)
└── Lest għal mudelli tas-siti (lezzjoni li jmiss)
```

## Dak li Bnejna f'Din il-Lezzjoni {#what-we-built-this-lesson}

- Installazzjoni ta' **WordPress Multisite li taħdem** fil-modalità subdomain
- **Ultimate Multisite installat** u kkonfigurat bil-branding ta' FitSite
- **Hosting u SSL** imwaqqfa għal network li qed jikber
- **Domain mapping** ikkonfigurat għall-fornitur tal-hosting tiegħek
- **Ton tal-email speċifiku għan-niċċa** stabbilit mill-ewwel jum

---

**Li jmiss:** [Lezzjoni 4: Il-Bini ta' Mudelli tan-Niċċa](lesson-4-templates) -- noħolqu mudelli ta' siti li s-sidien tal-istudios tal-fitness verament ikunu jridu jużaw.
