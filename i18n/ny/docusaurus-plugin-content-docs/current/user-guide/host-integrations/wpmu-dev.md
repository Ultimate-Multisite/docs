---
title: Kukonse kwa WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Usumbu wa WPMU DEV Integration

## Umuwamba (Overview)
WPMU DEV ndi platforma ya WordPress yomwezi kwambiri yomwezi womwezi, imene imalimbikitsa hosting, plugins, ndipo services kwa ajili ya WordPress sites. I integration imalimbikitsa kupeza domain syncing kukhala kwa automatic na ulamulira SSL certificate monga monga pakati pa Ultimate Multisite ndi hosting la WPMU DEV.

## Mafunso (Features)
- Automatic domain syncing
- Ulamulira SSL certificate
- Zochitika zofotokozera za SSL certificate zosiyanasiyana

## Zomwe Zikufunika (Requirements)
I integration imalimbikitsa monga woyamba kuti mukubwera pa WPMU DEV ndipo imapereka API yomwezi. Samukufuna kufotokozera kwambiri ngati mukubwera pa WPMU DEV.

I integration imafotokozera kuti pali constant ya `WPMUDEV_HOSTING_SITE_ID`, yomwe imalimbikitsidwa monga woyamba pamene mukubwera pa WPMU DEV.

## Mafunso a Kufotokozera (Setup Instructions)

### 1. Yambira Hosting la WPMU DEV

Ngati mukubwera pa WPMU DEV, constants zomwe zofunika zimene zikuyenera kukhala zikufotokozera. Yambira kuti:

1. Constant ya `WPMUDEV_HOSTING_SITE_ID` ikhalidwe m'environment yanu
2. Kodi muli ndi membership ya WPMU DEV yomwezi ndi API access?

### 2. Kufuna Integration

1. M'admin ya WordPress yanu, ndi lankanso Ultimate Multisite > Settings
2. Lankanso ku tab ya "Domain Mapping" (Kupanga Domain)
3. Lankanso m'moyo wopanda kupita pansi kwa "Host Integrations" (Malingaliro ya Hosting)
4. Kufuna integration ya WPMU DEV
5. Lankanso "Save Changes" (Kugulitsa Zomwe Muli Kuperekera)

## Kodi Imalimbikitsidwa Bwera? (How It Works)

### Domain Syncing

Pamene domain imapangidwa m'Ultimate Multisite:

1. I integration imapereka WPMU DEV API kuti ipereke domain ku account yomwezi
2. Imapereka www version ya domain monga automatic
3. WPMU DEV imalimbikitsa configuration ya domain ndi kupereka SSL certificate

### Ulamulira SSL Certificate

Kutete kukhazikira kuti integration imapangidwa kuti ipambane ntchito za SSL certificate verification kwa WPMU DEV hosting, chifukwa kuti kulipeza nthawi yomwe zimapangidwa ndi kupanga ndikupanga. Kwa mtindo woyenera (default), idzama kupeza mpaka 10 mamanu pa SSL certificate verification, monga momwe ndi 5 mamanu omwe ndi standard.

## Zifukwa Zofunika

### Kuondokera kwa Domain
Mmodzi, WPMU DEV API sikupereka njira yomwe mungupereke kuti muondokere domains. Pamene domain mapping imapangidwa m'Ultimate Multisite, domain ipeza kuona m'WPMU DEV hosting account yawo. Mukufunika kuondokera kwawo m'dashboard ya WPMU DEV ngati kulipeza.

### API Authentication
Integration imapereka kuti itimikire ndi WPMU DEV API key yomwe ikupanga m'WordPress database monga option ya `wpmudev_apikey`. Iyi imapangidwa m'moyo pamene mukuwoneza site yanu ndi WPMU DEV.

## Kukhazikitsa Masulira (Troubleshooting)

### Masulira a API Connection
- Onani kuti site yanu ikupanga bwino ndi WPMU DEV
- Onani kuti option ya `wpmudev_apikey` imapangidwa m'WordPress database yanu
- Onani kuti membership ya WPMU DEV yanu ikulimbikira

### Masulira a SSL Certificate
- WPMU DEV imatha kupanga ssl certificates nthawi yomwe (kuti ndi mtindo woyenera 5-15 minutes)
- Integration imapangidwa kuti ipereke ntchito mpaka 10 mamanu pa SSL certificates
- Ngati ssl certificates siyapangidwa pansi pa mamanu ena, ndikufunika kuwoneka ndi WPMU DEV support

### Domain Siyapangidwa
- Onani logs ya Ultimate Multisite kuti muli ndi maulendo a chisoni (error messages)
- Onani kuti domain siyapangidwa pansi pa WPMU DEV
- Onani kuti hosting plan ya WPMU DEV yanu imapambana ndi anthu omwe mukuwoneza domains
