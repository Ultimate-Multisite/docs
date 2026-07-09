---
title: Erro r-fil Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Erro Installazzjoni tal-Sunrise File {#error-installing-the-sunrise-file}

Il-file `sunrise.php` huwa file speċjali li WordPress jipprovvdi għalih meta jidabbir (bootstraps). Biex WordPress jkun qabel li jiskopri l-file `sunrise.php`, hu għandu jkun posizjonat fid-dent bl-folder **wp-content**.

Meta tivvalida Ultimate Multisite u tmur per id-setup wizard bħal il-li għandek fuq iskrin, Ultimate Multisite jipprova jkopja l-file `sunrise.php` tagħna għal folder wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

F'pjanċa tal-aħħar, nistgħu nkunu b'suċċess ikopja l-file u bl-kura kien tutto jaffur. Għalfe, jekk xi ħaġa mhix impostata b'mod proprju (permissions tal-folder, għall-umhum), tista' tmur f xi xena li Ultimate Multisite ma jistax ikopja l-file.

Jekk tiqra l-messaġġ ta l-errore Ultimo jgħidlek, tista' tara li kien hemm l-istess ħaġa li sseħqu: **Sunrise copy failed** (Kopja Sunrise ma qalet).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Biex tiġi sorrabbjata dik, tista' sempliċi tkopja l-file `sunrise.php` f'dent tal-folder plugin wp-ultimo u tistempla fl-folder wp-content tagħdak. Wara li tfarmi dan, riċikla l-wizard page u l-checks dovrebbero jkun qabel.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> F'kull każet, dan tista' jiddeq b'kontrolla generale tal-permissions tal-folder tagħdak biex tevitaw problemi fl-futur (m'għandekx problemi għal Ultimate Multisite biss, iżda wkoll ma' plugin u themes oħra).

Il-**Health Check tool** li huwa parte ta WordPress (tista' tipprovvdi għalih minn l-admin panel tal-site tagħdak **admin panel > Tools > Health Check**) huwa qabel jgħinak jkun qabel sexx tiegħek biex tiġi informat jekk il-permissions tal-folder impostati b'valuri li tista' jikkawża problemi mal-WordPress.

<!-- Screenshot mhux disponibbli: Strument WordPress Health Check juri l-status tal permessjonijiet tal-folder -->
