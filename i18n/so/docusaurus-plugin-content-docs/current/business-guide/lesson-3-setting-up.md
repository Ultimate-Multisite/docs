---
title: 'Casharka 3: Dejinta Shabakaddaada'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Casharka 3: Dejinta Shabakaddaada

Waa waqtigii la dhisi lahaa. Casharkan waxaad ku rakibi doontaa Ultimate Multisite oo waxaad habayn doontaa aasaaska shabakadda FitSite. Go'aan kasta halkan waxaa lagu sameeyay iyadoo maskaxda lagu hayo niche-ka jirdhiska.

## Halkii Aan Ku Joognay

Waxaan doorannay istuudiyeyaasha jirdhiska inay noqdaan niche-keena, waxaana xaqiijinnay fursadda. Hadda fikraddaas waxaan u beddelaynaa platform shaqaynaya.

## Doorashada Hosting-kaaga

Doorashadaada hosting-ka waxay uga muhiimsan tahay platform niche ah marka loo eego website keliya. Ma martigelinaysid hal site -- waxaad martigelinaysaa shabakad kori doonta oo gaari doonta tobannaan ama boqollaal sites.

### Waxa La Raadinayo

- **Taageerada WordPress Multisite**: Dhammaan hosts-ku si fiican uma maareeyaan multisite
- **Wildcard SSL**: Waa lama huraan shabakadaha ku salaysan subdomain
- **Khayraad la ballaarin karo**: Waxaad u baahan tahay meel aad ku korto adigoon guurin
- **Isdhexgalka Ultimate Multisite**: Domain mapping otomaatig ah iyo SSL waxay badbaadiyaan dadaal hawlgal oo weyn

### Habka Lagu Taliyay

Ka dooro host liiska [Bixiyeyaasha La Jaanqaadi Kara](/user-guide/host-integrations/closte). Kuwan waxaa lagu tijaabiyay Ultimate Multisite waxayna bixiyaan isdhexgalka aad u baahan tahay domain mapping iyo otomaatigga SSL.

FitSite, waxaan u adeegsan doonaa habayn subdomain ah. Tani waxay ka dhigan tahay in sites-ka macaamiishu marka hore u muuqan doonaan `studioname.fitsite.com` ka hor inta aysan si ikhtiyaari ah ugu xirin domain-kooda.

## Rakibidda WordPress Multisite

Haddii aadan hore u haysan rakibid WordPress Multisite ah:

1. Ku rakib WordPress hosting provider-kaaga
2. Raac hagaha [Sida Loo Rakibo WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Dooro habaynta **subdomain** marka lagu weydiiyo

:::tip Maxaa Subdomains?
Subdomains waxay site kasta oo macmiil ah siiyaan cinwaan u gaar ah (`studio.fitsite.com`) halkii uu ka ahaan lahaa path (`fitsite.com/studio`). Tani waa mid xirfad badan macaamiishaada waxayna ka hortagtaa isku dhacyada permalink. Eeg [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) si aad u hesho isbarbardhig faahfaahsan.
:::

## Rakibidda Ultimate Multisite

Raac hagaha [Rakibidda Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) si aad u:

1. U upload-gareyso oo u activate-gareyso plugin-ka network-wide
2. U socodsiiso [Saaxirka Dejinta](/user-guide/getting-started/multisite-setup-wizard)

Inta lagu jiro saaxirka dejinta, maskaxda ku hay niche-ka FitSite:

- **Lacagta**: U deji lacagta ay isticmaalaan macaamiishaada istuudiyeyaasha jirdhiska
- **Magaca shirkadda**: "FitSite" (ama magaca brand-ka aad dooratay)
- **Astaanta shirkadda**: Upload-garee astaanta brand-kaaga -- tani waxay ka muuqataa qaansheegadyada iyo emails-ka

## Habaynta Niche-ka Jirdhiska

Marka Ultimate Multisite la rakibo, samee doorashooyinkan habayn ee u gaarka ah niche-ka:

### Dejinta Guud

U gudub **Ultimate Multisite > Settings** oo habee:

- **Magaca site-ka**: FitSite
- **Doorka caadiga ah**: Administrator -- milkiilayaasha istuudiyeyaasha jirdhiska waxay u baahan yihiin xakameyn buuxda oo ku saabsan nuxurka site-kooda
- **Diiwaangelinta**: Daar diiwaangelinta isticmaalaha si milkiilayaasha istuudiyeyaashu iyagu isu diiwaangeliyaan

### Habaynta Email-ka

Emails-ka nidaamkaagu waa inay ku hadlaan luqadda niche-kaaga. U gudub **Ultimate Multisite > Settings > Emails** oo habee:

- Ku beddel luqadda guud ee "your new site" farriin u gaar ah jirdhiska
- Tusaale cinwaan soo-dhaweyn: "Website-ka istuudiyahaaga jirdhiska waa diyaar"
- Tusaale jirka soo-dhaweynta: Tixraac istuudiyahooda, fasalladooda, iyo sida loogu bilaabo site-kooda jirdhiska

Waxaan ku sii sifayn doonaa kuwaan Casharka 8 (Soo-dhaweynta Macaamiisha), laakiin dejinta dhawaaqa hadda waxay xaqiijisaa in xitaa isdiiwaangelinnada tijaabada ee hore ay dareemaan kuwo u gaar ah niche-ka.

### Habaynta Domain-ka

Haddii aad isticmaalayso hosting provider la jaanqaadi kara, hadda habee domain mapping:

1. U gudub **Ultimate Multisite > Settings > Domain Mapping**
2. Raac hagaha isdhexgalka ee host-kaaga gaarka ah
3. Tijaabi in subsites cusub ay SSL si otomaatig ah u helaan

Tani waxay xaqiijinaysaa in marka aan bilaabno abuurista templates iyo sites tijaabo ah casharka xiga, wax walba ay si dhammeystiran u shaqeeyaan.

## Shabakadda FitSite Ilaa Hadda

Dhammaadka casharkan, waa kuwan waxa aad haysato:

```
Shabakadda FitSite
├── WordPress Multisite (habka subdomain)
├── Ultimate Multisite (la rakibay lana habeeyay)
├── Hosting leh wildcard SSL
├── Domain mapping la habeeyay
├── Templates email oo u gaar ah niche-ka (bilow)
└── Diyaar u ah templates site (casharka xiga)
```

## Waxa Aan Ku Dhisnay Casharkan

- **Rakibid WordPress Multisite shaqaynaysa** oo ku jirta habka subdomain
- **Ultimate Multisite la rakibay** lana habeeyay iyadoo leh branding FitSite
- **Hosting iyo SSL** oo loo dejiyay shabakad koraysa
- **Domain mapping** oo loo habeeyay hosting provider-kaaga
- **Dhawaaq email oo u gaar ah niche-ka** oo la dejiyay laga bilaabo maalinta koowaad

---

**Xiga:** [Casharka 4: Dhisidda Templates Niche](lesson-4-templates) -- waxaan abuureynaa templates site oo milkiilayaasha istuudiyeyaasha jirdhiska ay dhab ahaantii rabaan inay isticmaalaan.
