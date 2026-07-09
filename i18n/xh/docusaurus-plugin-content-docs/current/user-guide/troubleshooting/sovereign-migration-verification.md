---
title: Uqinisekiso lokuFuduswa okuZimeleyo
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Ukuqinisekiswa Kofuduso Oluzimeleyo

Ultimate Multisite: Multi-Tenancy 1.2.0 iquka imiyalelo yokuqinisekisa ye-WP-CLI yofuduso lwabaqeshi abazimeleyo. Yisebenzise xa ufuduso lomqeshi, utyelelo lwe-SSO, okanye ufakelo olwahluliweyo lungaziphathi njengoko kulindelekile.

## Imiyalelo emayiqhutywe

Qhuba ukuqinisekiswa kusuka kufakelo lwe-WordPress lwenethiwekhi:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Sebenzisa i-ID yesayithi yomqeshi omfudusayo. Umyalelo wokuqala ujonga ukuba umqeshi akasaxhomekekanga kwidatha endala esecaleni lenethiwekhi. Umyalelo wesibini uqinisekisa ukuba imisebenzi yokutyhala ezimeleyo ingaqhubekeka ize iphele.

## Iintsilelo eziqhelekileyo

### Iimvume zedatabase azihambelani nehost

Ukuba ukuqinisekiswa kubika iintsilelo zeemvume okanye zomsebenzisi obhalayo, jonga ihost yedatabase eqwalaselweyo. `localhost`, `127.0.0.1`, kunye negama lenkonzo yecontainer ziihost zeemvume zeMySQL ezahlukeneyo. Hlaziya ukubophelela kwehost yomqeshi okanye iimvume zedatabase, uze uphinde uqhube ukuqinisekiswa.

### Ufakelo lweBedrock okanye lwasekuhlaleni alukwazi ukudibanisa

Ufakelo lweBedrock kunye nolwesocket yasekuhlaleni lunokuxela idatabase njenge `localhost` ngelixa ixesha lokusebenza lidibanisa ngedilesi elungelelanisiweyo. Inguqulelo 1.2.0 ilungelelanisa imitya yeehost zomatshini omnye, kodwa ukugqitha kwehost okwenziwe ngokwesiko kusenokungqubana neemvume zedatabase.

### Umgca wokutyhala we-async awupheli

Ukuba `verify-sovereign-push` ayigqibi, jonga i-Action Scheduler okanye i-async runner eqwalaselweyo. Cima imisebenzi esileleyo kuphela emva kokuqinisekisa ukuba ikhuselekile ukuyizama kwakhona okanye ukuyilahla.

### Inani labasebenzisi bomqeshi alichanekanga

Ufuduso kufuneka lulungiselele abasebenzisi bomqeshi ozimeleyo. Ukuba umsebenzisi wofakelo olindelekileyo akakho, phinda uqhube inyathelo lokulungiselela abasebenzisi phambi kokuzama kwakhona i-SSO.

### Utyelelo lwe-SSO luyaliwa

I-autologin yomqeshi engenasimo ifuna ukuba idomain yomqeshi, i-origin pin, injongo yetoken, i-nonce, kunye nokuphelelwa lixesha zihambelane. Qinisekisa ukuba i-URL yomqeshi ichanekile kwaye ukungena kuzanywa kungekudala emva kokuvelisa utyelelo lwe-SSO.

## Nini ukuphinda uzame

Phinda uzame ukuqinisekiswa emva kotshintsho ngalunye lweziseko. Musa ukutshintsha itrafikhi yemveliso, ukucima idatha yomthombo, okanye ukususa iinkcukacha zokufudusa de zonke iitsheki zokuqinisekisa ziphumelele.
