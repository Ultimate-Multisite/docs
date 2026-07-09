---
title: 'Lezzjoni 7: Agħmlu Tiegħek'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lezzjoni 7: Nagħmluha Tiegħek

Il-klijenti tiegħek qatt m'għandhom iħossu li qed jużaw "xi plugin ta' WordPress." Għandhom iħossu li qed jużaw FitSite -- pjattaforma mibnija għall-industrija tagħhom. Din il-lezzjoni tkopri l-immarkar tad-ditta, il-white-labeling, u kif tagħmel il-pjattaforma tħossha bħal prodott.

## Fejn Ħallejna

FitSite għandu fluss ta' checkout li jaħdem u li jieħu lis-sidien ta' studios tal-fitness mill-għażla tal-pjan għal sit live. Issa nagħmlu l-esperjenza kollha tħossha bħal prodott koerenti u b'ditta ċara.

## Id-Dominju tal-Pjattaforma Tiegħek

Il-pedament tad-ditta tiegħek huwa d-dominju tiegħek. Għal FitSite:

- **Dominju ewlieni**: `fitsite.com` (is-sit tal-marketing tiegħek u l-għerq tan-network)
- **Siti tal-klijenti**: `studioname.fitsite.com` (subdomains)
- **Dominji personalizzati**: Klijenti fuq pjanijiet Growth u Pro jistgħu jimmappjaw id-dominju tagħhom stess

### Kif Tissettja d-Dominju Tiegħek

1. Irreġistra d-dominju tal-pjattaforma tiegħek
2. Ippuntah lejn il-fornitur tal-hosting tiegħek
3. Ikkonfigura wildcard DNS (`*.fitsite.com`) għas-subdomains tal-klijenti
4. Kun żgur li wildcard SSL huwa attiv

Ara [Kif Tikkonfigura l-Immappjar tad-Dominji](/user-guide/domain-mapping/how-to-configure-domain-mapping) għal struzzjonijiet dettaljati.

## White-Labeling tal-Esperjenza tal-Admin

Meta sid ta' studio tal-fitness jidħol fid-Dashboard tas-sit tiegħu, għandu jara d-ditta tiegħek, mhux il-marka ta' WordPress jew Ultimate Multisite.

### Paġna tal-Login Personalizzata

Ippersonalizza l-paġna tal-login ta' WordPress biex turi:

- Il-logo FitSite tiegħek
- Immaġni fl-isfond addattata għall-fitness
- Il-kuluri tad-ditta tiegħek

### Immarkar tad-Ditta fid-Dashboard

Uża l-addon [Admin Page Creator](/addons/admin-page-creator) jew CSS personalizzat biex:

- Tissostitwixxi l-logo ta' WordPress bil-logo FitSite tiegħek
- Tippersonalizza l-iskema tal-kuluri tal-admin biex taqbel mad-ditta tiegħek
- Iżżid widget personalizzat fid-Dashboard b'links ta' malajr u riżorsi ta' għajnuna speċifiċi għall-fitness

### Paġni tal-Admin Personalizzati

Ikkunsidra li toħloq paġni tal-admin personalizzati li juru l-azzjonijiet l-aktar rilevanti għas-sidien ta' studios tal-fitness:

- "Editja l-Iskeda tal-Klassijiet Tiegħek"
- "Aġġorna l-Profili tat-Trainers"
- "Ara s-Sit Tiegħek"

Dan inaqqas il-kurva tat-tagħlim billi jqiegħed azzjonijiet rilevanti għan-niċċa fuq quddiem u fiċ-ċentru minflok jaħbihom fil-menu standard ta' WordPress.

## Immarkar tad-Ditta fil-Komunikazzjonijiet Tiegħek

Kull email, fattura, u notifika għandha ssaħħaħ id-ditta tiegħek.

### Emails tas-Sistema

Mur għal **Ultimate Multisite > Settings > Emails** u ppersjonalizza l-emails tas-sistema kollha:

- **Isem ta' min jibgħat**: FitSite
- **Email ta' min jibgħat**: hello@fitsite.com
- **Mudelli tal-email**: Uża l-kuluri u l-logo tad-ditta tiegħek
- **Lingwa**: Speċifika għall-fitness tul kollu

Emails ewlenin li għandek tippersonalizza:

| Email | Verżjoni Ġenerika | Verżjoni FitSite |
|-------|----------------|-----------------|
| Merħba | "Is-sit il-ġdid tiegħek lest" | "Il-websajt tal-istudio tal-fitness tiegħek hija live" |
| Irċevuta tal-ħlas | "Ħlas riċevut" | "Ħlas tas-subscription ta' FitSite kkonfermat" |
| Tmiem tal-prova | "Il-prova tiegħek se tintemm dalwaqt" | "Il-prova FitSite tiegħek tintemm fi 3 ijiem -- żomm il-websajt tal-istudio tiegħek live" |

### Fatturi

Ippersonalizza l-mudelli tal-fatturi bi:

- Il-logo FitSite tiegħek u l-kuluri tad-ditta
- Id-dettalji tan-negozju tiegħek
- Ismijiet ta' prodotti speċifiċi għall-fitness (mhux IDs ġeneriċi tal-pjanijiet)

## Is-Sit li Jaraw il-Klijenti

Id-dominju ewlieni tiegħek (`fitsite.com`) jeħtieġ sit tal-marketing li jbigħ il-pjattaforma. Dan huwa separat mill-admin tan-network ta' Ultimate Multisite -- huwa l-wiċċ pubbliku tan-negozju tiegħek.

Paġni ewlenin:

- **Homepage**: Proposta ta' valur ċara għal negozji tal-fitness
- **Karatteristiċi**: X'jagħmel FitSite, f'termini ta' fitness
- **Prezzijiet**: It-tliet pjanijiet tiegħek b'paraguni ta' karatteristiċi speċifiċi għan-niċċa
- **Eżempji**: Uri siti mibnija fuq il-pjattaforma
- **Irreġistra**: Links għall-formola tal-checkout tiegħek

:::tip Is-Sit tal-Marketing Tiegħek Jista' Jkun Sit tan-Network
Oħloq is-sit tal-marketing tiegħek bħala sit fi ħdan in-network tiegħek stess. Dan iħallik timmaniġġjah mill-istess Dashboard u juri l-kapaċitajiet tal-pjattaforma tiegħek stess.
:::

## Dominju Personalizzat għall-Klijenti

Għal klijenti fuq pjanijiet li jinkludu dominji personalizzati, iddokumenta l-proċess b'mod ċar:

1. Il-klijent jirreġistra jew jittrasferixxi d-dominju tiegħu għand registrar
2. Il-klijent jaġġorna d-DNS biex jippunta lejn il-pjattaforma tiegħek (ipprovdi records eżatti)
3. Ultimate Multisite jimmaniġġja l-immappjar tad-dominju u l-SSL

Oħloq artiklu ta' għajnuna jew entrata fil-bażi tal-għarfien speċifikament għal dan il-proċess, miktuba għal sidien ta' studios tal-fitness mhux tekniċi.

## In-Network FitSite S'issa

```
Network FitSite
├── WordPress Multisite (modalità subdomain)
├── Ultimate Multisite (ikkonfigurat + b'ditta)
├── Dominju tal-Pjattaforma (fitsite.com + wildcard SSL)
├── Mudelli tas-Sit (Studio Essential, Gym Pro, Fitness Chain)
├── Prodotti (Starter, Growth, Pro + Order Bumps)
├── Fluss tal-Checkout (speċifiku għan-niċċa, ittestjat)
├── Immarkar tad-Ditta
│   ├── Paġna tal-login personalizzata
│   ├── Dashboard tal-admin b'ditta
│   ├── Emails tas-sistema speċifiċi għan-niċċa
│   ├── Fatturi b'ditta
│   └── Sit tal-marketing fuq fitsite.com
└── Lest għall-fluss ta' onboarding (il-lezzjoni li jmiss)
```

## X'Bnejna f'Din il-Lezzjoni

- **Dominju tal-pjattaforma u DNS** ikkonfigurati għal esperjenza b'ditta
- **Admin bil-white-label** bil-marka FitSite tul kollu
- **Komunikazzjonijiet personalizzati** -- emails, fatturi, u notifiki kollha konformi mad-ditta
- **Sit tal-marketing** li jbigħ FitSite lis-sidien ta' studios tal-fitness
- **Dokumentazzjoni tad-dominju personalizzat** għal klijenti li jridu d-dominju tagħhom stess

---

**Li jmiss:** [Lezzjoni 8: Onboarding tal-Klijenti](lesson-8-onboarding) -- niddisinjaw l-esperjenza li tbiddel reġistrazzjoni ġdida f'klijent attiv u kuntent.
