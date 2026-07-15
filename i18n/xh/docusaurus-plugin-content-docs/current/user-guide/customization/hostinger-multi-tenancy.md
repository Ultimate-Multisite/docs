---
title: Hostinger Ubuninzi-baqeshi
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 yongeza amandla e-Hostinger multi-tenancy ukuze ii-domain ezisingathiweyo zithathe inxaxheba kulungiselelo lwabaqeshi abazimeleyo kunye nodibaniso olukhoyo lwe-Hostinger domain-mapping.

Sebenzisa la mandla xa ii-domain zabaqeshi kunye neziseko ezingundoqo zabaqeshi ezahluliweyo zilawulwa nge-Hostinger hPanel.

## Amanqaku okuseta {#setup-notes}

1. Lungisa udibaniso olusisiseko lwe-Hostinger phantsi kwe **Ultimate Multisite > Settings > Host Integrations**.
2. Qinisekisa ukuba i-Hostinger API token inokulawula i-domain okanye i-subdomain ekujoliswe kuyo.
3. Vumela i-addon ye-Multi-Tenancy.
4. Lungisa isicwangciso sokwahlulwa komqeshi ngaphambi kokupapasha umqeshi.
5. Qhuba inkqubo yokuqinisekisa ukufuduka ngaphambi kokuthumela itrafikhi yemveliso kumqeshi.

Amandla e-Hostinger asebenzisa uqhagamshelwano olwabelwanayo lwe-Hostinger kwimisebenzi esecaleni lomamkeli. I-DNS kusafuneka yalathe kwi-Account echanekileyo ye-Hostinger, kwaye imida ye-akhawunti ye-hPanel isasebenza.

## Utshintsho olukhethekileyo kula mandla {#capability-specific-changes}

- Abaqeshi abazimeleyo banokwenziwa ngemisebenzi ye-domain eqaphela umamkeli.
- Imitya yomamkeli wesiseko sedatha ekumatshini ofanayo iyalungiswa phambi kokuqinisekiswa kwemvume.
- Abaqeshi abalawulwa yi-Hostinger kufuneka basebenzise ixabiso lomamkeli wesiseko sedatha eliboniswe kwi-hPanel ngaphandle kokuba ixesha lokusebenza le-WordPress lifuna ukugqithisa kwasekhaya.
- Utyelelo lwe-SSO luxhomekeke ekubeni i-domain yomqeshi isombululeke kumqeshi osingathwe yi-Hostinger.

## Ukusombulula iingxaki zabaqeshi be-Hostinger {#troubleshooting-hostinger-tenants}

- Ukuba ukufakwa komqeshi kuyasilela, qinisekisa ukuba i-domain sele iqhotyoshelwe kwi-Account ye-Hostinger.
- Ukuba ukuqinisekiswa kwesiseko sedatha kuyasilela, thelekisa igama lomsebenzisi le-DB yomqeshi, igama lesiseko sedatha, kunye nokubophelela komamkeli kunye ne-hPanel.
- Ukuba **Visit (SSO)** kuyasilela, qinisekisa ukuba i-DNS kunye ne-SSL ziyasebenza kwi-domain yomqeshi.
- Ukuba ukususwa kushiya izixhobo zomamkeli ngasemva, susa naziphi na iziseko zedatha, abasebenzisi, okanye iifolda eziseleyo kwi-hPanel emva kokuqinisekisa ii-backup.
