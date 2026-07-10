---
title: Ukuqinisekiswa Kokuthutha Okuzimele
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Ukuqinisekiswa Kokufuduswa Okuzimele {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 ihlanganisa imiyalo yokuqinisekisa ye-WP-CLI yokufuduswa kwabaqashi abazimele. Yisebenzise lapho ukufuduswa komqashi, ukuvakasha kwe-SSO, noma ukufakwa okuhlukanisiwe kungaziphathi njengoba kulindelekile.

## Imiyalo okufanele isetshenziswe {#commands-to-run}

Sebenzisa ukuqinisekisa kusukela ekufakweni kwe-WordPress kwenethiwekhi:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Sebenzisa i-ID yesayithi yomqashi omfudusayo. Umyalo wokuqala uhlola ukuthi umqashi akasancikile kudatha yakudala eseceleni kwenethiwekhi. Umyalo wesibili uqinisekisa ukuthi imisebenzi ye-push ezimele ingacubungula futhi iphele.

## Ukwehluleka okuvamile {#common-failures}

### Izimvume ze-database azihambisani nomsungathi {#database-grants-do-not-match-the-host}

Uma ukuqinisekisa kubika ukwehluleka kwezibonelelo noma kwe-writer-user, hlola umsungathi we-database olungiselelwe. `localhost`, `127.0.0.1`, kanye negama lesevisi ye-container bangabasingathi bezimvume ze-MySQL abahlukene. Buyekeza ukubophezela komsungathi womqashi noma izimvume ze-database, bese uphinda usebenzise ukuqinisekisa.

### Ukufakwa kwe-Bedrock noma kwasendaweni akukwazi ukuxhuma {#bedrock-or-local-installs-cannot-connect}

Ukufakwa kwe-Bedrock nokusebenzisa i-socket yasendaweni kungase kubike i-database njenge-`localhost` kuyilapho isikhathi sokusebenza sixhuma ngekheli elijwayelekile. Inguqulo 1.2.0 ijwayelanisa izintambo zomsungathi zomshini ofanayo, kodwa ukweqiswa komsungathi okwenziwe ngokwezifiso kusengaphikisana nezimvume ze-database.

### Umugqa we-async push awupheli {#async-push-queue-does-not-drain}

Uma `verify-sovereign-push` ingaqedi, hlola i-Action Scheduler noma i-async runner elungiselelwe. Sula imisebenzi ehlulekile kuphela ngemva kokuqinisekisa ukuthi iphephile ukuphindwa noma ukulahlwa.

### Inani labasebenzisi bomqashi alilungile {#tenant-user-count-is-wrong}

Ukufuduswa kufanele kulungiselele abasebenzisi bomqashi ozimele. Uma umsebenzisi wokufakwa olindelekile engekho, phinda usebenzise isinyathelo sokuhlinzeka abasebenzisi ngaphambi kokuzama futhi i-SSO.

### Ukuvakasha kwe-SSO kuyenqatshwa {#sso-visit-is-rejected}

Ukungena ngokuzenzakalela komqashi okungenasimo kudinga ukuthi isizinda somqashi, i-origin pin, injongo yethokheni, i-nonce, nokuphelelwa yisikhathi kuhambisane. Qinisekisa ukuthi i-URL yomqashi ilungile nokuthi ukungena kuzanywa maduzane ngemva kokukhiqiza ukuvakasha kwe-SSO.

## Nini ukuphinda uzame {#when-to-retry}

Phinda uzame ukuqinisekisa ngemva koshintsho ngalunye lwengqalasizinda. Ungashintshi ithrafikhi yokukhiqiza, ususe idatha yomthombo, noma ususe imininingwane yokufuduswa kuze kudlule zonke izivivinyo zokuqinisekisa.
