---
title: Erróir File Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Éirí an t-Aghram na File Sunrise {#error-installing-the-sunrise-file}

Tá an file sunrise.php ag curteoir spéiciálach a bhfaidh WordPress a bheith ag iarraidh go dtí sé a chroí (bootstraps). Chunntas faoi cheann WordPress a bheith ag é a chroí, caithfidh sé a bheith ag curteáil sa **folder wp-content**.

Nuair a chuireann tú Ultimate Multisite agus a bhíonn tú ag iarraidh an seomra set-up (setup wizard) mar atá ar an screenshot, caithfear Ultimate Multisite a dhíol an file sunrise.php go dtí folder wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Mar chuid dearmad, is féidir linn an file a chopiú go bunúsach agus níl aon rud ag déanamh ar fáil. Mar sin féin, má níl é seo ceart a setáil (déanán folder, dá fhéidir), leat é a bheith ag iarraidh an Ultimate Multisite a bheith in áit a chopiú an file.

Má lorg tú an meán mhíne ar an t-aighne, beidh tú ag iarraidh an rud atá ag déanamh: **Sunrise copy failed** (Chontaí coinnte a failte).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Leat é seo a díriú, leat é a chopiú an file sunrise.php sa folder plugin wp-ultimo agus pasteáil é i do folder wp-content. Tar éifeachtach, reilidh an seomra wizard agus beidh na churaí ag teacht ar fáil.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Mar aon fhocal, is féidir leat a bheith ag iarraidh féachaint ar churaí folder (folder permissions) chun próiseanna a bhaint as an chéad a chur eile a bhaint amach (níl chomh maidir le Ultimate Multisite ach leis na plugins agus themes eile freisin).

Tá an **Health Check tool** atá sa WordPress (leat é a fháil ar an panel admin láithreach de do site **admin panel > Tools > Health Check**) ag ceart chun a bheith ag teacht ar fáil go bhfuil churaí folder setfhéile a bhaint as a bheith ag déanamh próiseanna le WordPress.

<!-- Screenshot n-a mhaoireacht: Tool de Chláir WordPress ag tairiscint an stádas breiseanna folder -->
