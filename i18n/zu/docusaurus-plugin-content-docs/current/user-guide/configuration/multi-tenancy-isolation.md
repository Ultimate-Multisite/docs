---
title: Ukuhlukaniswa kokuqashisa kwabaningi
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Ukuhlukaniswa kwe-Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 isekela ukuhlukaniswa kwe-database ne-filesystem nge-subsite ngayinye kumatenanti azimele. Lokhu kugcina idatha yethenanti ihlukene kuyilapho kugcinwa ukuhlinzekwa, ukukhokhisa, nokuphatha ezingeni lenethiwekhi.

## Isu lokuhlukanisa

Sebenzisa ukuhlukaniswa okuzimele kumakhasimende adinga ukuhlukaniswa kwedatha okuqinile, isitoreji se-filesystem esizinikele, noma umngcele ohlukile we-host.

Ithenanti ngayinye ezimele kufanele ibe nalokhu:

- I-database yethenanti ezinikele noma isu le-prefix ye-database eligunyazwe i-host.
- I-root ye-filesystem yethenanti ezinikele.
- Okufakiwe kurejista yethenanti okuxhumanisa isayithi ne-database yayo, indlela ye-root, igama le-hostname, nemodeli yokuhlukanisa.
- Umphumela wokuqinisekisa ukufuduka ngaphambi kokuba ithenanti ibhekwe njengebukhoma.

## Ukubophezela kwe-host ye-database

Inguqulo 1.2.0 ishintsha ukuziphatha okuzenzakalelayo kokubophezela kwe-host yomshini ofanayo kuma-install azimele. Amanani omshini ofanayo afana ne-`localhost` ayenziwa ajwayeleke ukuze ama-install e-Bedrock, FrankenPHP, nawe-WordPress afakwe kuma-container akwazi ukunikeza nokuqinisekisa izimvume ngokumelene ne-string ye-host ebonwa yi-MySQL empeleni.

Lapho ulungiselela ithenanti ezimele:

1. Setha i-host ye-database ibe yinani elidingwa i-runtime yethenanti.
2. Sebenzisa `localhost` kuma-install e-socket yasendaweni lapho i-host ilindele ukuxhumana kwasendaweni.
3. Sebenzisa `127.0.0.1` noma i-hostname yesevisi kuphela lapho iseva ye-database inikeza amalungelo kuleyo host.
4. Qalisa ukuqinisekiswa kokufuduka ngemva kokushintsha ukubophezela kwe-host.

Uma ukuqinisekiswa kubika ukwehluleka kwama-grant, qhathanisa ama-grant omsebenzisi we-DB yethenanti nokubophezela kwe-host okulungisiwe. Umsebenzisi onikezwe i-`user@localhost` uhlukile ku-`user@127.0.0.1` noma `user@%`.

## I-root ye-filesystem

I-root yethenanti kufanele izinze phakathi kokuqalisa kabusha nokuthunyelwa. Gwema izindlela ze-mount zesikhashana. Kuma-install esitayela se-Bedrock, qinisekisa ukuthi i-root yethenanti ikhomba ku-web root ye-WordPress elindelwe yi-bootstrap yethenanti, hhayi kuphela ku-root yephrojekthi.

## Uhlelo lokuhlinzeka

Kumatenanti amasha azimele, sebenzisa lolu hlelo:

1. Dala okufakiwe kurejista yethenanti.
2. Dala i-database yethenanti nomsebenzisi we-database.
3. Qalisa i-schema yethenanti.
4. Hlinzeka abasebenzisi bethenanti.
5. Lungiselela izindlela ze-filesystem yethenanti.
6. Qalisa ukuqinisekiswa kokufuduka.
7. Shintsha i-routing noma i-DNS ngemva kokuthi ukuqinisekiswa kuphasile.

Lolu hlelo luvimbela amatenanti ahlukaniswe ngokungaphelele ekutholeni ithrafikhi ngaphambi kokuba umbhali we-database, abasebenzisi, ne-filesystem kube sekulungile.

## Ukugeleza kokuphathwa kwamakhasimende azimele

Ultimate Multisite v2.13.0 igcina izenzo zokuphathwa kwamakhasimende kusayithi eliyinhloko lapho imodi ezimele ivuliwe. Ithenanti isengase isebenze njenge-install ye-WordPress ehlukanisiwe, kodwa izenzo ezibhekiswe kumakhasimende ezincike ekukhokhiseni kwenethiwekhi, ubulungu, noma idatha ye-account eyabiwe kufanele zibuyisele ikhasimende kusayithi eliyinhloko esikhundleni sokuzama ukuqedela isenzo ngaphakathi kwe-runtime yethenanti.

Ukugeleza kwesayithi eliyinhloko kusebenza ku:

- Checkout nezinguquko ze-plan.
- Isifinyezo se-Account nezenzo zephrofayela yekhasimende.
- Izibuyekezo zekheli lokukhokhisa nezikrini zokuphatha izinkokhelo.
- Ukubukwa kwe-invoice nomlando wezinkokhelo.
- Izenzo zokuphatha isayithi ezifana nokwengeza amasayithi noma ukususa isayithi.
- Ukushintsha i-template.
- Ukumataniswa kwe-domain nezinguquko ze-primary-domain.

Lapho ikhasimende liqala esinye salezi zenzo kusuka kuthenanti ezimele, Ultimate Multisite yakha i-URL yesayithi eliyinhloko ehambisanayo futhi igcina ithenanti yomthombo njengendawo yokubuyela lapho kuphephile ukwenza kanjalo. Lokhu kuvumela amakhasimende ukuthi aqedele isenzo esiphethwe ngokumelene namarekhodi enethiwekhi, bese ebuyela kumongo wethenanti ngaphandle kokuphindaphinda isimo sokukhokhisa noma sobulungu ku-database ezimele.

Kubasebenzisi abaphethe, umthetho osebenzayo uthi: gcina amakhasi okukhokhisa, Account, Checkout, invoice, template, nokuphathwa kwe-domain etholakala kusayithi eliyinhloko kumanethiwekhi azimele. Ama-dashboard ethenanti angaxhuma kulawo makhasi, kodwa isayithi eliyinhloko lihlala lingumthombo weqiniso waleso senzo.
