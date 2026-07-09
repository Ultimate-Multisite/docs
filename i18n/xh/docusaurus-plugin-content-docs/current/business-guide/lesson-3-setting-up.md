---
title: 'Isifundo 3: Ukuseta Inethiwekhi Yakho'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Isifundo 3: Ukuseta Umnatha Wakho

Lixesha lokwakha. Kwesi sifundo uza kufaka Ultimate Multisite uze uqwalasele isiseko somnatha weFitSite. Zonke izigqibo apha zenziwa kucingelwa icandelo lezitudiyo zokuzilolonga.

## Apho Sasiyeke Khona

Sikhethe izitudiyo zokuzilolonga njengecandelo lethu elikhethekileyo saza saqinisekisa ithuba. Ngoku sijika loo ngcinga ibe liqonga elisebenzayo.

## Ukukhetha Ukusingathwa Kwakho

Ukhetho lwakho lokusingathwa lubaluleke ngakumbi kwiqonga lecandelo elikhethekileyo kunesiza esinye. Awusingathi isiza esinye -- usingatha umnatha oza kukhula ube ziziza ezininzi okanye amakhulu eziza.

### Into Omawuyijonge

- **Inkxaso yeWordPress Multisite**: Asingabo bonke abasingathi abaphatha i-multisite kakuhle
- **Wildcard SSL**: Ibalulekile kumanatha asekelwe kwii-subdomain
- **Izixhobo ezinokwandiswa**: Ufuna indawo yokukhula ngaphandle kokufuduka
- **Ukudityaniswa kweUltimate Multisite**: Ukudibanisa i-domain ngokuzenzekelayo kunye ne-SSL konga umzamo omkhulu wokusebenza

### Indlela Ecetyiswayo

Khetha umsingathi kuluhlu [lwabaBoneleli abaHambelanayo](/user-guide/host-integrations/closte). Aba bavavanyiwe ngeUltimate Multisite kwaye babonelela ngodityaniso oludingayo lokudibanisa i-domain kunye nokuzenzekela kwe-SSL.

KwiFitSite, siza kusebenzisa uqwalaselo lwe-subdomain. Oku kuthetha ukuba iziza zabathengi ekuqaleni ziza kubonakala njenge `studioname.fitsite.com` ngaphambi kokuba, ukuba bayafuna, badibanise i-domain yabo.

## Ukufaka WordPress Multisite

Ukuba awukabi nalo ufakelo lweWordPress Multisite:

1. Faka WordPress kumboneleli wakho wokusingathwa
2. Landela isikhokelo [Indlela Yokufaka WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Khetha uqwalaselo lwe-**subdomain** xa ucelwa

:::tip Kutheni ii-Subdomain?
Ii-subdomain zinika isiza somthengi ngamnye idilesi yaso eyahlukileyo (`studio.fitsite.com`) endaweni yendlela (`fitsite.com/studio`). Oku kubonakala ngobungcali ngakumbi kubathengi bakho kwaye kuthintela iingxabano ze-permalink. Jonga [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) ukuze ufumane uthelekiso oluneenkcukacha.
:::

## Ukufaka Ultimate Multisite

Landela isikhokelo [Ukufaka Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) ukuze:

1. Ulayishe uze uvule i-plugin kumnatha wonke
2. Uqhube [iWizadi Yokuseta](/user-guide/getting-started/multisite-setup-wizard)

Ngexesha lewizadi yokuseta, gcina icandelo leFitSite engqondweni:

- **Imali**: Yisete kwimali esetyenziswa ngabathengi bakho bezitudiyo zokuzilolonga
- **Igama lenkampani**: "FitSite" (okanye igama lebrand olikhethileyo)
- **Ilogo yenkampani**: Layisha ilogo yebrand yakho -- le ibonakala kwii-invoice nakwii-imeyile

## Ukuqwalasela Icandelo Lezitudiyo Zokuzilolonga

Nje ukuba Ultimate Multisite ifakiwe, yenza olu khetho loqwalaselo olukhethekileyo kweli candelo:

### Iisetingi Jikelele

Yiya ku **Ultimate Multisite > Iisetingi** uze uqwalasele:

- **Igama lesiza**: FitSite
- **Indima emiselweyo**: Administrator -- abanini bezitudiyo zokuzilolonga bafuna ulawulo olupheleleyo lomxholo wesiza sabo
- **Ubhaliso**: Vumela ubhaliso lwabasebenzisi ukuze abanini bezitudiyo bazibhalise ngokwabo

### Uqwalaselo Lwee-imeyile

Ii-imeyile zenkqubo yakho kufuneka zithethe ulwimi lwecandelo lakho. Yiya ku **Ultimate Multisite > Iisetingi > Ii-imeyile** uze ulungise:

- Buyisela ulwimi oluqhelekileyo oluthi "isiza sakho esitsha" ngemiyalezo ekhethekileyo yokuzilolonga
- Umzekelo wesihloko sokwamkela: "Iwebhusayithi yesitudiyo sakho sokuzilolonga ilungile"
- Umzekelo womzimba womyalezo wokwamkela: Khankanya isitudiyo sabo, iiklasi, kunye nokuqalisa ngesiza sabo sokuzilolonga

Siza kuziphucula ngakumbi ezi zinto kwiSifundo 8 (Ukwamkelwa Kwabathengi), kodwa ukuseta ithoni ngoku kuqinisekisa ukuba nokubhalisa kovavanyo kwangoko kuziva kukhethekile kweli candelo.

### Uqwalaselo Lwe-domain

Ukuba usebenzisa umboneleli wokusingathwa ohambelanayo, qwalasela ukudibanisa i-domain ngoku:

1. Yiya ku **Ultimate Multisite > Iisetingi > Ukudibanisa i-Domain**
2. Landela isikhokelo sodityaniso somsingathi wakho okhethekileyo
3. Vavanya ukuba ii-subsite ezintsha zifumana i-SSL ngokuzenzekelayo

Oku kuqinisekisa ukuba xa siqalisa ukudala iitemplate neziza zovavanyo kwisifundo esilandelayo, yonke into isebenza ukusuka ekuqaleni ukuya ekupheleni.

## Umnatha weFitSite Ukuza Kuthi Ga Ngoku

Ekupheleni kwesi sifundo, nantsi into onayo:

```
Umnatha weFitSite
├── WordPress Multisite (imo ye-subdomain)
├── Ultimate Multisite (ifakiwe kwaye iqwalaselwe)
├── Ukusingathwa nge-wildcard SSL
├── Ukudibanisa i-domain kuqwalaselwe
├── Iitemplate zee-imeyile ezikhethekileyo kweli candelo (ezokuqala)
└── Ilungele iitemplate zeziza (isifundo esilandelayo)
```

## Into Esiyakhileyo Kwesi Sifundo

- Ufakelo **olusebenzayo lweWordPress Multisite** kwimowudi ye-subdomain
- **Ultimate Multisite ifakiwe** kwaye iqwalaselwe ngebrand yeFitSite
- **Ukusingathwa kunye ne-SSL** kusetelwe umnatha okhulayo
- **Ukudibanisa i-domain** kuqwalaselwe kumboneleli wakho wokusingathwa
- **Ithoni ye-imeyile ekhethekileyo kweli candelo** isekwe ukusukela kusuku lokuqala

---

**Okulandelayo:** [Isifundo 4: Ukwakha Iitemplate Zecandelo Elikhethekileyo](lesson-4-templates) -- sidala iitemplate zeziza abanini bezitudiyo zokuzilolonga abaya kufuna ukuzisebenzisa ngokwenene.
