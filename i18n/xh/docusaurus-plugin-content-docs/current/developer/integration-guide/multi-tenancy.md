---
title: Uhlanganiso lwe-Multi-Tenancy
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Udibaniso lwe-Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 itshintsha iindawo ezininzi zonxibelelwano lodibaniso kubemqeshi abazimeleyo, ukuqinisekiswa kokufuduswa, kunye nokuzenzekela komjikelo wobomi bomqeshi.

## Ukuhamba kokuqalisa komqeshi {#tenant-bootstrap-flow}

Udibaniso oludala okanye oluguqula abeqeshi kufuneka lulandele olu landelelwano:

1. Sombulula irekhodi lerejista yomqeshi kunye nemodeli yokwahlula.
2. Yenza okanye uqinisekise umbhali wesiseko sedatha somqeshi.
3. Qalisa isakhiwo somqeshi.
4. Lungiselela abasebenzisi bomqeshi.
5. Bhalisa iindlela zomqeshi kunye neendlela zefayile-sistim.
6. Qhuba ukuqinisekiswa kokufuduswa ngaphambi kokubonisa umqeshi.

Musa ukucinga ukuba umqeshi ozimeleyo angaphinda asebenzise unxibelelwano lwesiseko sedatha senethiwekhi. Sebenzisa irejista yomqeshi kunye neendlela zombhali ezibonelelwa sisongezo.

## SSO kunye ne-REST hooks {#sso-and-rest-hooks}

Ukungena ngokuzenzekelayo komqeshi okungenamemo kusebenzisa iitokeni zexesha elifutshane ezinebango lenjongo, ukhuseleko lokuphinda kusetyenziswe i-JTI, umda wokuphelelwa, kunye nokubophelela kwimvelaphi. Udibaniso olongeza amaqhosha okungena okanye amakhonkco olawulo olukude kufuneka luvelise utyelelo lomqeshi ngokuhamba kwe-SSO exhaswayo endaweni yokwakha ngqo ii-URL zokungena komqeshi.

Iziganeko zophicotho lwe-API kwicala lenethiwekhi kunye nezishwankathelo zemihla ngemihla ziyafumaneka kwiigeyithi zabaqeshi abazimeleyo. Sebenzisa ezo logi xa ulungisa iingxaki zeenkqubo zangaphandle ezibiza ii-endpoint zomjikelo wobomi bomqeshi.

## Ii-URL zezenzo zomthengi ozimeleyo {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 ihambisa izenzo zabathengi bomqeshi ozimeleyo ibuyele kwisayithi ephambili kwiindlela ze-Account, intlawulo yokuphuma, ukuhlawula, i-invoyisi, isayithi, ukutshintsha itemplate, kunye nokumataniswa kwedomeyini. Udibaniso olubonisa amakhonkco olawulo kwicala lomqeshi kufuneka lukhombise ezo zenzo kwiphaneli yomthengi yesayithi ephambili kwaye lubandakanye indawo yokubuyela eqinisekisiweyo xa umsebenzisi kufuneka akwazi ukubuyela kumqeshi emva kokugqiba isenzo.

Sebenzisa isongelo se-SSO esisiseko kumakhonkco olawulo phakathi kweedomeyini:

```php
$url = wu_with_sso($main_site_customer_url);
```

I-URL evelisiweyo ihlala inokuhluzwa nge-`wu_sso_url`, efumana i-URL ye-SSO, umsebenzisi wangoku, i-ID yesayithi ekujoliswe kuyo, kunye nomxholo wokubuyisela. Izongezo zingasebenzisa loo filter ukongeza umxholo okhethekileyo womnikezeli okanye ukutshintsha i-URL yomlamli ngelixa zigcina ukuqinisekiswa kwetokeni ye-Ultimate Multisite.

Musa ukuphinda imeko yobulungu, i-invoyisi, idilesi yokuhlawula, itemplate, okanye ulawulo lwedomeyini ngaphakathi komqeshi ozimeleyo. Phatha i-dashboard yomqeshi njengesiqalisi kwaye iphaneli yomthengi yesayithi ephambili njengenkqubo yerekhodi yezenzo ezilawulwayo.

## Ukuqinisekiswa kokufuduswa {#migration-verification}

Emva kokuba ukufuduswa okanye udibaniso lomjikelo wobomi lutshintshe idatha yomqeshi, qhuba amasango okuqinisekisa:

- `wp tenant verify-no-legacy --site=<site-id>` iqinisekisa ukuba umqeshi akasaxhomekekanga kwiindlela zelifa kwicala lenethiwekhi.
- `wp tenant verify-sovereign-push --site=<site-id>` iqinisekisa ukuba imisebenzi yokutyhala ezimeleyo inokusebenza kwaye ikhuphe uluhlu.

Udibaniso kufuneka luthathe ukuqinisekiswa okusileleyo njengomthinteli wokukhutshwa kwaye luphephe ukuphawula umqeshi njengosebenzayo de ukusilela kusonjululwe.

## Ukucinywa komqeshi {#tenant-deletion}

Ukuhamba kokucima kufuneka kubize indlela yokudiliza yesongezo ukuze iinkcukacha zokungena kwisiseko sedatha somqeshi zicocwe. Udibaniso lwangaphandle lunokususa izibonelelo zomnikezeli emva kokuba ukudiliza kuphumelele, kodwa akufanele lucime iziseko zedatha zomamkeli okanye iifolda ngelixa ukuqinisekiswa okanye imisebenzi yokutyhala ye-async isasebenza.

## Umkhombandlela wesiseko sedatha ophelelweyo {#deprecated-database-router}

I-`Database_Router` yelifa ithathelwe indawo yi-stub yokuyekiswa. Udibaniso olutsha kufuneka lusombulule abeqeshi ngee-API zomkhombandlela wesayithi yangoku kunye nerejista yomqeshi endaweni yokuxhomekeka kwiklasi yomkhombandlela endala.
