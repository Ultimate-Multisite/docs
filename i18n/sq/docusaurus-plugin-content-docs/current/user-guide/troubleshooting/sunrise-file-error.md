---
title: Gabim i skurtjes Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Gabimi Instalimin e File Sunrise {#error-installing-the-sunrise-file}

Fili `sunrise.php` është një file i veçantë që WordPress kërkon kur fillon të funksionoj (bootstraps). Për që WordPress të mund ta gjejë filin `sunrise.php`, ai duhet të jetë i vendosur brenda folderit **wp-content**.

Kur aktivizoni Ultimate Multisite dhe shkruani përmes udhëzuesit (wizard) siç është ajo që keni në ekranin e скrinshimit, Ultimate Multisite provon të kopjojë filin ton `sunrise.php` në folderin wp-content.

<!-- Ekran i skrinshimit i pərëndur: faqja e udhëzuesit që tregon hapin e instalimit të sunrise.php -->

Në shumic të raste, ne arrijmë të kopjojmë filin me sukses dhe gjithçka funksionon. Megjithatë, nëse diçka nuk është e vendosur si duhet (për shembull, lejet e folderit), mund të hasesh në një situatë ku Ultimate Multisite nuk arrin të kopojë filin.

Nëse lexoni mesazhin e gabimit që ju jep Ultimo, do të shihni se kjo është pikërisht ajo që ndodhi këtu: **Sunrise copy failed** (Kopjimi i Sunrise dështoi).

<!-- Ekran i skrinshimit i pərëndur: Mesazh i gabimit që tregon se kopjimi i Sunrise dështoi -->

Për të zgjidhur këtë, thjesht kopjoni filin `sunrise.php` brenda folderit wp-ultimo plugin dhe ngjiteni atë në folderin tuaj wp-content. Pas kësaj, rilexoni faqen e udhëzuesit dhe kontrollet duhet të kalojnë.

<!-- Ekran i skrinshimit i pərëndur: Menaxhimi i fileve që tregon sunrise.php brenda folderit wp-ultimo plugin --> Në çdo rast, kjo mund të kërkojë një kontroll të përgjithshëm të lejeve të folderit për të shmangur probleme në të ardhmen (nuk vetëm me Ultimate Multisite, por edhe me pluginet dhe temat e tjera).

**Health Check tool** (Mjeti i Kontrollit të Shëndetit) që është pjesë e WordPress-it (mund ta aksesoni përmes **admin panel > Tools > Health Check** në faqen tuaj kryesore të saj), është i aftë t'ju thotë nëse keni leje folderi vendosur në vlerat që mund të shkaktojnë probleme me WordPress.

<!-- Skrimaut i vërtet nuk është i disponues: Vërtesore e kontrollit të shëndetit të WordPress-it tregon statusin e lejeve të fshillave -->
