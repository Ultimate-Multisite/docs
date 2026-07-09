---
title: 'Isifundo 3: Ukusetha Inethiwekhi Yakho'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Isifundo 3: Ukusetha Inethiwekhi Yakho

Sekuyisikhathi sokwakha. Kulesi sifundo uzofaka i-Ultimate Multisite futhi ulungise isisekelo senethiwekhi ye-FitSite. Zonke izinqumo lapha zenziwa kucatshangelwa umkhakha wokuzivocavoca.

## Lapho Esigcine Khona

Sikhethe izitudiyo zokuzivocavoca njengomkhakha wethu oqondile futhi saqinisekisa ithuba. Manje siguqula lowo mbono ube yiplatifomu esebenzayo.

## Ukukhetha Ukusingathwa Kwakho

Ukukhetha kwakho ukusingathwa kubaluleke kakhulu kuplatifomu yomkhakha oqondile kunakuwebhusayithi eyodwa. Awusingathi isayithi elilodwa -- usingatha inethiwekhi ezokhula ibe amashumi noma amakhulu amasayithi.

### Okufanele Ukubheke

- **Ukusekelwa kwe-WordPress Multisite**: Akubona bonke abasingathi abaphatha i-multisite kahle
- **SSL ye-wildcard**: Ibalulekile kumanethiwekhi asekelwe kuma-subdomain
- **Izinsiza ezikhulayo**: Udinga indawo yokukhula ngaphandle kokuthutha
- **Ukuhlanganiswa kwe-Ultimate Multisite**: Ukuhlelwa okuzenzakalelayo kwama-domain kanye ne-SSL konga umzamo omkhulu wokusebenza

### Indlela Enconywayo

Khetha umsingathi ohlwini lwaba[Hlinzeki Abahambisanayo](/user-guide/host-integrations/closte). Laba bahloliwe nge-Ultimate Multisite futhi banikeza ukuhlanganiswa okudingayo ukuze uhlele ama-domain nokwenza i-SSL ngokuzenzakalelayo.

Ku-FitSite, sizosebenzisa ukucushwa kwe-subdomain. Lokhu kusho ukuthi amasayithi amakhasimende azoqala ukuvela njenge-`studioname.fitsite.com` ngaphambi kokuthi ngokuzithandela ahlele i-domain yawo.

## Ukufaka i-WordPress Multisite

Uma ungakabi nokufakwa kwe-WordPress Multisite:

1. Faka i-WordPress kumhlinzeki wakho wokusingathwa
2. Landela umhlahlandlela othi [Indlela Yokufaka i-WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Khetha ukucushwa kwe-**subdomain** lapho ucelwa

:::tip Kungani Ama-subdomain?
Ama-subdomain anikeza isayithi lekhasimende ngalinye ikheli lalo elihlukile (`studio.fitsite.com`) kunendlela (`fitsite.com/studio`). Lokhu kubukeka ngobungcweti kakhulu kumakhasimende akho futhi kugwema ukungqubuzana kwama-permalink. Bona [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) ukuze uthole ukuqhathanisa okunemininingwane.
:::

## Ukufaka i-Ultimate Multisite

Landela umhlahlandlela othi [Ukufaka i-Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) ukuze:

1. Layisha futhi wenze i-plugin isebenze kuyo yonke inethiwekhi
2. Qalisa i-[Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Ngesikhathi se-setup wizard, gcina umkhakha we-FitSite engqondweni:

- **Imali**: Setha imali esetshenziswa amakhasimende akho ezitudiyo zokuzivocavoca
- **Igama lenkampani**: "FitSite" (noma igama lomkhiqizo olikhethile)
- **Ilogo yenkampani**: Layisha ilogo yomkhiqizo wakho -- lokhu kuvela kuma-invoice nakuma-imeyili

## Ukucushwa Komkhakha Wokuzivocavoca

Njengoba i-Ultimate Multisite isifakiwe, yenza lezi zinqumo zokucushwa eziqondene nomkhakha:

### Izilungiselelo Ezivamile

Iya ku-**Ultimate Multisite > Settings** bese ulungisa:

- **Igama lesayithi**: FitSite
- **Indima ezenzakalelayo**: Administrator -- abanikazi bezitudiyo zokuzivocavoca badinga ukulawula ngokugcwele okuqukethwe kwesayithi labo
- **Ukubhalisa**: Nika amandla ukubhaliswa kwabasebenzisi ukuze abanikazi bezitudiyo bakwazi ukuzibhalisela bona

### Ukucushwa Kwe-imeyili

Ama-imeyili esistimu yakho kufanele akhulume ulimi lomkhakha wakho. Iya ku-**Ultimate Multisite > Settings > Emails** bese wenza ngokwezifiso:

- Faka esikhundleni solimi olujwayelekile oluthi "isayithi lakho elisha" imiyalezo eqondene nokuzivocavoca
- Isibonelo sesihloko sokwamukela: "Iwebhusayithi yesitudiyo sakho sokuzivocavoca isilungile"
- Isibonelo somzimba wokwamukela: Bhekisa kusitudiyo sabo, amakilasi, nokuqalisa ngesayithi labo lokuzivocavoca

Sizokucwenga lokhu kabanzi eSifundweni 8 (Ukwamukelwa Kwekhasimende), kodwa ukusetha ithoni manje kuqinisekisa ukuthi ngisho nokubhalisa kokuhlola kwasekuqaleni kuzwakala kuqondene nomkhakha.

### Ukucushwa Kwe-domain

Uma usebenzisa umhlinzeki wokusingathwa ohambisanayo, lungisa ukuhlelwa kwe-domain manje:

1. Iya ku-**Ultimate Multisite > Settings > Domain Mapping**
2. Landela umhlahlandlela wokuhlanganisa womusingathi wakho othile
3. Hlola ukuthi ama-subsite amasha athola i-SSL ngokuzenzakalelayo

Lokhu kuqinisekisa ukuthi lapho siqala ukudala izifanekiso namasayithi okuhlola esifundweni esilandelayo, konke kusebenza kusukela ekuqaleni kuze kube sekugcineni.

## Inethiwekhi ye-FitSite Kuze Kube Manje

Ekupheleni kwalesi sifundo, nakhu onakho:

```
Inethiwekhi ye-FitSite
├── WordPress Multisite (imodi ye-subdomain)
├── Ultimate Multisite (ifakiwe futhi ilungisiwe)
├── Ukusingathwa nge-SSL ye-wildcard
├── Ukuhlelwa kwe-domain kulungisiwe
├── Izifanekiso ze-imeyili eziqondene nomkhakha (zokuqala)
└── Ilungele izifanekiso zamasayithi (isifundo esilandelayo)
```

## Esikwakhile Kulesi Sifundo

- Ukufakwa kwe-**WordPress Multisite esebenzayo** kumodi ye-subdomain
- **I-Ultimate Multisite ifakiwe** futhi ilungisiwe ngophawu lwe-FitSite
- **Ukusingathwa ne-SSL** kusethelwe inethiwekhi ekhulayo
- **Ukuhlelwa kwe-domain** kulungiselelwe umhlinzeki wakho wokusingathwa
- **Ithoni ye-imeyili eqondene nomkhakha** isungulwe kusukela ngosuku lokuqala

---

**Okulandelayo:** [Isifundo 4: Ukwakha Izifanekiso Zomkhakha Oqondile](lesson-4-templates) -- sidala izifanekiso zamasayithi abanikazi bezitudiyo zokuzivocavoca abazofuna ngempela ukuzisebenzisa.
