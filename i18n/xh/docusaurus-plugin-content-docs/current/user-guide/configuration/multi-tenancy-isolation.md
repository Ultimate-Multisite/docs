---
title: Ukwahlukaniswa kwabaqeshi abaninzi
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Ukwahlulwa kwe-Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 ixhasa ukwahlulwa kwedatabase kunye nefayile-system ngokwe-subsite nganye kubahlali abazimeleyo. Oku kugcina idatha yomhlali yahlukene ngelixa kugcinwa ulungiselelo, intlawulo, nolawulo kwinqanaba lenethiwekhi.

## Isicwangciso sokwahlula

Sebenzisa ukwahlulwa okuzimeleyo kubathengi abafuna ukwahlulwa kwedatha okunamandla ngakumbi, ugcino lwefayile-system olunikezelweyo, okanye umda owahlukileyo we-host.

Umhlali ngamnye ozimeleyo kufuneka abe:

- Nedatabase yomhlali ezinikezelweyo okanye isicwangciso se-prefix yedatabase esivunyiweyo yi-host.
- Nengcambu yefayile-system yomhlali ezinikezelweyo.
- Nengeniso kwirejista yomhlali edibanisa isayithi nedatabase yayo, indlela yengcambu, igama le-host, kunye nemodeli yokwahlulwa.
- Nesiphumo sokuqinisekisa ukufuduswa phambi kokuba umhlali athathwe njengosebenzayo.

## Ukubophelela kwe-host yedatabase

Inguqulelo 1.2.0 itshintsha indlela yokuziphatha emiselweyo yokubophelela i-host kumatshini omnye kufakelo oluzimeleyo. Amaxabiso omatshini omnye afana no-`localhost` alungelelaniswa ukuze i-Bedrock, FrankenPHP, kunye nofakelo lwe-WordPress olusezikhonteyina lukwazi ukunika nokungqina iimvume ngokuchasene nomtya we-host obonwa ngokwenene yi-MySQL.

Xa uqwalasela umhlali ozimeleyo:

1. Seta i-host yedatabase kwixabiso elifunwa yi-runtime yomhlali.
2. Sebenzisa `localhost` kufakelo lwe-socket yendawo xa i-host ilindele unxibelelwano lwendawo.
3. Sebenzisa `127.0.0.1` okanye igama le-host lenkonzo kuphela xa iseva yedatabase inika amalungelo kuloo host.
4. Qhuba ukuqinisekiswa kokufuduswa emva kokutshintsha ukubophelela kwe-host.

Ukuba ukuqinisekiswa kuchaza ukusilela kwamalungelo, thelekisa amalungelo omsebenzisi we-DB womhlali nokubophelela kwe-host okuqwalaselweyo. Umsebenzisi onikwe amalungelo ku-`user@localhost` wahlukile ku-`user@127.0.0.1` okanye `user@%`.

## Ingcambu yefayile-system

Ingcambu yomhlali kufuneka izinze kuzo zonke ii-restart kunye nokuthunyelwa. Kuphephe iindlela ze-mount zethutyana. Kufakelo olufana ne-Bedrock, qinisekisa ukuba ingcambu yomhlali yalatha kwingcambu yewebhu ye-WordPress elindelwe yi-bootstrap yomhlali, hayi kuphela kwingcambu yeprojekthi.

## Ulandelelwano lokulungiselela

Kubahlali abatsha abazimeleyo, sebenzisa olu landelelwano:

1. Yenza ingeniso kwirejista yomhlali.
2. Yenza idatabase yomhlali kunye nomsebenzisi wedatabase.
3. Qalisa i-schema yomhlali.
4. Lungiselela abasebenzisi bomhlali.
5. Qwalasela iindlela zefayile-system yomhlali.
6. Qhuba ukuqinisekiswa kokufuduswa.
7. Tshintshela i-routing okanye i-DNS emva kokuba ukuqinisekiswa kuphumelele.

Olu landelelwano luthintela abahlali abahlulwe ngokuyinxenye ekufumaneni itrafikhi ngaphambi kokuba umbhali wedatabase, abasebenzisi, kunye nefayile-system zilunge.

## Iinkqubo zolawulo lomthengi ozimeleyo

Ultimate Multisite v2.13.0 igcina izenzo zolawulo lomthengi kwisayithi ephambili xa imowudi ezimeleyo ivuliwe. Umhlali usenokusebenza njengofakelo lwe-WordPress olwahluliweyo, kodwa izenzo ezijoliswe kumthengi ezixhomekeke kwintlawulo yenethiwekhi, ubulungu, okanye idatha ye-account ekwabelwana ngayo kufuneka zibuyisele umthengi kwisayithi ephambili endaweni yokuzama ukugqiba isenzo ngaphakathi kwe-runtime yomhlali.

Inkqubo yesayithi ephambili isebenza ku:

- I-checkout kunye notshintsho lwezicwangciso.
- Isishwankathelo se-Account kunye nezenzo zeprofayile yomthengi.
- Uhlaziyo lwedilesi yentlawulo kunye nezikrini zolawulo lwentlawulo.
- Iimbono ze-invoice kunye nembali yentlawulo.
- Izenzo zolawulo lwesayithi ezifana nokongeza iisayithi okanye ukucima isayithi.
- Ukutshintsha i-template.
- I-domain mapping kunye notshintsho lwe-primary-domain.

Xa umthengi eqalisa esinye sezi zenzo kumhlali ozimeleyo, Ultimate Multisite yakha i-URL yesayithi ephambili ehambelanayo kwaye igcina umhlali ongumthombo njengendawo yokubuyela xa kukhuselekile ukwenza njalo. Oku kuvumela abathengi ukuba bagqibe isenzo esilawulwayo ngokuchasene neerekhodi zenethiwekhi, baze babuyele kumxholo womhlali ngaphandle kokuphinda-phinda imeko yentlawulo okanye yobulungu kwidatabase ezimeleyo.

Kubasebenzisi bolawulo, umthetho osebenzayo ngulo: gcina amaphepha entlawulo, account, checkout, invoice, template, kunye nolawulo lwe-domain efumaneka kwisayithi ephambili kwiinenethiwekhi ezizimeleyo. Ii-dashboard zabahlali zinganxibelela kula maphepha, kodwa isayithi ephambili ihlala ingumthombo wenyaniso wesenzo.
