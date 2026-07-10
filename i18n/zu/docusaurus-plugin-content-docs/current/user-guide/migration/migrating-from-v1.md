---
title: Ukuthuthela kusuka ku-V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Ukuthutha usuka ku-V1 {#migrating-from-v1}

## Ultimate Multisite isishintshile isuka emndenini wayo wokuqala wokukhishwa kwe-1.x yaya emndenini wokukhishwa kwe-2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Inguqulo ye-Ultimate Multisite 2.0 nangaphezulu iwukubhalwa kabusha okuphelele kwe-codebase, okusho ukuthi kuncane kakhulu okwabiwe phakathi kwenguqulo endala nentsha. Ngaleso sizathu, lapho uthuthukisa usuka ku-1.x uya ku-2.x, idatha yakho kuzodingeka ithuthelwe kufomethi izinguqulo ezintsha ezingayiqonda.

Ngenhlanhla, i-Ultimate Multisite 2.0+ **iza nomthuthi** owakhelwe ku-core okwazi ukuthola idatha evela enguqulweni endala futhi ayiguqulele kufomethi entsha. Lokhu kuthutha kwenzeka ngesikhathi se-**Wizadi Yokusetha** yenguqulo 2.0+.

Lesi sifundo sichaza ukuthi umthuthi usebenza kanjani, okufanele ukwenze uma kwehluleka, nokuthi ungazixazulula kanjani izinkinga ezingase zivele phakathi nale nqubo.

_**OKUBALULEKILE: Ngaphambi kokuthi uqale ukuthuthukisa usuka enguqulweni 1.x uye enguqulweni 2.0 sicela uqinisekise ukuthi wenza ikhophi eyisipele ye-database yesayithi lakho**_

## Izinyathelo zokuqala {#first-steps}

Isinyathelo sokuqala ukulanda ifayela le-plugin elingu-.zip bese ufaka inguqulo 2.0 ku-Dashboard yomlawuli wenethiwekhi yakho.

Ngemva kokuthi [ufake futhi wenze inguqulo 2.0 isebenze](../getting-started/installing-ultimate-multisite.md), isistimu izothola ngokuzenzakalelayo ukuthi i-Multisite yakho isebenza enguqulweni endala futhi uzobona lo mlayezo phezulu ekhasini le-plugin.

_**QAPHELA:** Uma une-Ultimate Multisite 1.x efakiwe ku-Multisite yakho, uzoba nenketho yokushintsha i-plugin ngenguqulo osanda kuyilanda. Sicela, uqhubeke uchofoze ku-**Shintsha ekhona ngokulayishiwe**._

<!-- Isithombe-skrini asitholakali: Ikhasi le-plugin elibonisa inketho yokushintsha i-v1 ngenguqulo ye-v2 elayishiwe -->

Ikhasi elilandelayo lizokwazisa ukuthi yiziphi izengezo ezindala ozifakile kanye nenguqulo 1.x. Lizoba nemiyalelo yokuthi inguqulo oyisebenzisayo iyahambisana yini nenguqulo 2.0 noma uma kudingeka ufake inguqulo ethuthukisiwe yesengezo ngemva kokuthutha.

<!-- Isithombe-skrini asitholakali: Umlayezo phezulu ekhasini lama-plugin mayelana nokubuyekeza uye ku-v2.0, nohlu lwezengezo ezidinga ukubuyekezwa -->

Uma usukulungele ukuqhubeka, ungachofoza inkinobho ethi **Vakashela Isifaki ukuze uqedele ukuthuthukisa**.

<!-- Isithombe-skrini asitholakali: Inkinobho ethi Vakashela Isifaki ukuze uqedele ukuthuthukisa -->

Izobe isikuyisa ekhasini lewizadi yokufaka elinemiyalezo ethile yokwamukela. Udinga nje ukuchofoza **Qalisa** ukuze uye ekhasini elilandelayo.

<!-- Isithombe-skrini asitholakali: Ikhasi lokwamukela le-Wizadi Yokusetha elinenkinobho ethi Qalisa -->

Ngemva kokuchofoza **Qalisa** , izokuqondisa kabusha ku-Pre-install Checks_._ Lokhu kuzokubonisa Ulwazi Lwesistimu yakho nokufakwa kwe-WordPress futhi kukutshele ukuthi kuyahlangabezana yini **nezimfuneko ze-Ultimate Multisite**.

<!-- Isithombe-skrini asitholakali: Ikhasi le-Pre-install Checks elibonisa ukuqinisekiswa kwezidingo zesistimu -->

Isinyathelo esilandelayo ukufaka ukhiye welayisensi yakho ye-Ultimate Multisite bese wenza i-plugin isebenze. Lokhu kuzoqinisekisa ukuthi zonke izici, okuhlanganisa izengezo, zizotholakala kusayithi lakho.

<!-- Isithombe-skrini asitholakali: Ikhasi lokwenza ilayisensi isebenze elinokufakwa kokhiye welayisensi nenkinobho ethi Vuma futhi Wenze Kusebenze -->

Ngemva kokufaka ukhiye wakho, chofoza **Vuma futhi Wenze Kusebenze**.

Ngemva kokwenza ilayisensi isebenze, ungaqala ukufakwa kwangempela ngokuchofoza **Faka** ekhasini elilandelayo. Lokhu kuzodala ngokuzenzakalelayo amafayela adingekayo ne-database edingekayo ukuze inguqulo 2.0 isebenze.

<!-- Isithombe-skrini asitholakali: Ikhasi lokufaka elibonisa okuzobuyekezwa ngenkinobho ethi Faka -->

## Manje, ukuthutha {#now-the-migration}

Umthuthi unesici sokuphepha esakhelwe ngaphakathi lapho uzohlola yonke i-multisite yakho ukuze aqinisekise ukuthi yonke idatha yakho ye-Ultimate Multisite ingathuthwa ngaphandle kwezinkinga. Chofoza inkinobho ethi **Sebenzisa Ukuhlola** ukuze uqale inqubo.

<!-- Isithombe-skrini asitholakali: Ikhasi lokuthutha elinenkinobho ethi Sebenzisa Ukuhlola ukuze kuqinisekiswe ukuthi idatha ingaguqulwa -->

Ngemva kokusebenzisa ukuhlola, unezinto ezimbili ezingase zenzeke: umphumela ungaba **nephutha** noma **ngaphandle kwephutha**.

### Nephutha {#with-error}

Uma uthola umlayezo wephutha, kuzodingeka uxhumane nethimba lethu lokweseka ukuze bakusize ukulungisa iphutha. Qiniseka ukuthi **unikeza i-log yephutha** lapho udala ithikithi. Ungalanda i-log noma ungachofoza isixhumanisi esithi xhumana nethimba lethu lokweseka. Sizovula iwijethi yosizo ohlangothini lwesokudla lwekhasi lakho nezinkambu esezigcwaliselwe wena ezihlanganisa ama-log amaphutha ngaphansi kwencazelo.

_**Njengoba isistimu ithole iphutha, ngeke ukwazi ukuqhubeka nokuthuthela enguqulweni 2.0. Ungabe usubuyela enguqulweni 1.x ukuze uqhubeke nokusebenzisa inethiwekhi yakho kuze kulungiswe iphutha.**_

### Ngaphandle Kwephutha {#without-error}

Uma isistimu ingatholi noma yiliphi iphutha, uzobona umlayezo wempumelelo nenkinobho ethi **Thutha** ezansi ezokuvumela ukuthi uqhubeke nokuthutha. Kuleli khasi, uzokhunjuzwa ukuthi udale ikhophi eyisipele ye-database yakho ngaphambi kokuqhubekela phambili, esikuncoma kakhulu. Chofoza **Thutha** uma usunayo ikhophi eyisipele.

<!-- Isithombe-skrini asitholakali: Ikhasi lokuthutha elibonisa umlayezo wempumelelo nesincomo sekhophi eyisipele -->

<!-- Isithombe-skrini asitholakali: Inkinobho ethi Thutha ekhoneni elingezansi kwesokudla -->

Futhi yilokho kuphela okudingekayo!

Ungaqhubeka nokusebenzisa ukusetha kwe-Wizard ukuze ubuyekeze ilogo yakho nezinye izinto kunethiwekhi yakho noma uqale ukuzulazula kumenyu yenguqulo yakho ye-Ultimate Multisite 2.0 nesixhumi esibonakalayo sayo esisha. Qhubeka uzijabulise.
