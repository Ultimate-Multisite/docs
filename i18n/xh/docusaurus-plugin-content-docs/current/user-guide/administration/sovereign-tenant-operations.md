---
title: Imisebenzi yoMqeshi Ozimeleyo
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Imisebenzi Yomqeshi Ozimeleyo

Ultimate Multisite: Multi-Tenancy 1.2.0 yongeza izixhobo zokusebenza kubaqeshi abazimeleyo: iisayithi ezingaphantsi ezisebenza ngedatabase yazo, ingcambu yefayile-system yazo, kunye nomxholo wokuhambisa, ngoxa zisabonakala kumlawuli wenethiwekhi.

Sebenzisa eli phepha xa ulawula iisayithi zabathengi ezahluliweyo, ukunikezelwa kweesayithi ezikude, okanye iimigrations ezihambisa isayithi engaphantsi eqhelekileyo iye kwisiseko esizimeleyo.

## Yintoni etshintshayo kubalawuli

- **Ukungena ngokuzenzekelayo komqeshi okungenasimo** — Abalawuli benethiwekhi banokutyelela umqeshi ozimeleyo ngaphandle kokuxhomekeka kwisimo seseshoni ekwabelwana ngaso ixesha elide. I-token ye-SSO inomda wenjongo, ibotshelelwe kwimvelaphi, ikhuselekile ekuphindweni, kwaye inqunyelwe kwifestile emfutshane yokuphelelwa lixesha.
- **Ukuhambisa okuqonda ukuzimela** — Iinethiwekhi ezahluliweyo zakudala kunye nabaqeshi abazimeleyo zisombululwa ngendlela enye yerouter yesayithi, kuncitshiswa umahluko wokuqalisa phakathi kofakelo olwahluliweyo oludala nolutsha.
- **Isimo semigration esiqinisekisiweyo** — Uqinisekiso lwemigration lujonga ukubonelelwa komsebenzisi, iimvume zombhali wedatabase, isimo sokukhupha umgca wemisebenzi, kunye nokungabikho kweetheyibhile zakudala ngaphambi kokuba umqeshi athathwe njengogqityiweyo.
- **Ukudiliza okukhuselekileyo** — Ukudiliza okuzimeleyo ngoku kususa iziqinisekiso zomqeshi ngokucocekileyo ukuze abaqeshi abacinyiweyo bangashiyi ukufikelela kwidatabase okudala ngasemva.

## Ukutyelela umqeshi ozimeleyo

1. Vula **Network Admin > Ultimate Multisite > Iisayithi**.
2. Khetha umqeshi ozimeleyo.
3. Sebenzisa **Tyelela (SSO)** xa ikhona endaweni yokukopa amagama okugqitha okanye ukudala ii-Account zolawulo zexeshana.

Inkqubo yokutyelela idala i-token yokungena ephila ixesha elifutshane yaloo mqeshi kwaye irekhoda isiganeko se-SSO kumkhondo wophicotho womqeshi. Ukuba iqhosha liyasilela, jonga ukuba idomain yomqeshi isombululeka kufakelo olulindelekileyo kwaye umqeshi unokufikelela kwi-endpoint ye-SSO esecaleni kwenethiwekhi.

## Uluhlu lokujonga imisebenzi yeesayithi ezikude

Ngaphambi kokutshintsha umqeshi ozimeleyo okanye okude, qinisekisa:

- Idomain yomqeshi yalatha kumamkeli ongumnini weefayile-system zomqeshi.
- Umamkeli wedatabase yomqeshi uhambelana nokubotshelelwa komamkeli okuqwalaselweyo koloo fakelo.
- Imiyalelo yokuqinisekisa imigration iyaphumelela kumqeshi.
- Imigca yemisebenzi yemigration ye-async ikhutshiwe ngaphambi kokwenza utshintsho lwe-DNS okanye lobunini.
- Umsebenzisi wolawulo womqeshi wabonelelwa ngexesha lemigration kwaye unokungena nge-SSO.

## Ukucima abaqeshi abazimeleyo

Ukucima umqeshi ozimeleyo kuyonakalisa. Qinisekisa imeko ye-backup kunye ne-export kuqala, emva koko cima kwisikrini solawulo lwesayithi. Inkqubo yokudiliza ye-1.2.0 isusa iziqinisekiso zedatabase yomqeshi njengenxalenye yokucoca, kodwa abalawuli basafanele baqinisekise ukuba abasebenzisi bedatabase abakwinqanaba lomamkeli kunye neefolda basusiwe xa besebenzisa iipaneli zokusingatha zangaphandle.

:::warning
Musa ukucima umqeshi ozimeleyo ngoxa uqinisekiso lwemigration lusasebenza okanye ngoxa imisebenzi ye-async push isemgceni. Linda uqinisekiso lugqitywe ukuze ukudiliza kungasusi iziqinisekiso ezifunwa yimisebenzi esalindileyo.
:::
