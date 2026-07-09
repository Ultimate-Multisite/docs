---
title: Ukuthekelisa Isayithi
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Ukuthekelisa Isayithi {#site-export}

Ikhasi lomlawuli le-**Site Export** livumela abalawuli benethiwekhi ukuthi bapakishe isayithi elilodwa, noma yonke inethiwekhi, libe i-archive elandekayo yokuthutha, ukwenza isipele, noma umsebenzi wokudlulisela komunye.

## Ukuthekelisa isayithi elilodwa {#exporting-one-site}

Yiya ku-**Ultimate Multisite > Site Export** bese ukhetha **Generate new Site Export**. Khetha i-subsite ofuna ukuyithekelisa, bese ukhetha ukuthi i-archive kufanele ifake uploads, plugins, namathemes yini.

Lapho ukuthekelisa kuqeda, landa i-ZIP ohlwini lwe-**Existing Exports**. Ama-ZIP okuthekelisa manje afaka i-`index.php` eziqalisa yona kanye ne-`readme.txt`, ngakho i-archive ingalayishwa ku-host entsha futhi iqalwe ngaphandle kokufaka kuqala i-plugin ehlukile yokungenisa.

## Ukuthekelisa yonke inethiwekhi {#exporting-the-whole-network}

Sebenzisa **Network Export** ekhasini le-Site Export lapho udinga i-archive eyodwa equkethe wonke ama-subsite kunethiwekhi. Lokhu kuyasiza ngaphambi kokuthutha ama-host, izivivinyo zokululama enhlekeleleni, noma ukwakha kabusha indawo yokuhlola lapho i-subsite ngayinye idinga ukuhamba ndawonye.

Ngenxa yokuthi ukuthekelisa inethiwekhi kungaba kukhulu kakhulu kunokuthekelisa isayithi elilodwa, kusebenzise ngesikhathi esinethrafikhi ephansi futhi uqinisekise ukuthi isitoreji okuqondiswe kuso sinesikhala esanele samahhala se-uploads, plugins, themes, namafayela e-ZIP akhiqiziwe.

### Ama-Network Import Bundles {#network-import-bundles}

Kusukela ku-Ultimate Multisite 2.12.0, i-Site Exporter ingakhiqiza **network import bundles** — ama-archive akhethekile aklanyelwe ukubuyisela amasayithi kuyo yonke inethiwekhi ngendlela elula. I-network import bundle iqukethe wonke amafayela adingekayo nemethadatha yokubuyisela amasayithi amaningi ekufakweni okusha kwenethiwekhi.

#### Ukukhiqiza i-Network Import Bundle {#generating-a-network-import-bundle}

1. Yiya ku-**Ultimate Multisite > Site Export**
2. Chofoza **Generate new Network Export**
3. Khetha **Network Import Bundle** njengohlobo lokuthekelisa
4. Khetha ukuthi ufake uploads, plugins, namathemes yini
5. Chofoza **Generate**
6. Landa i-bundle ZIP ohlwini lwe-**Existing Exports**

#### Ukubuyisela kusuka ku-Network Import Bundle {#restoring-from-a-network-import-bundle}

Ukuze ubuyisele amasayithi kusuka ku-network import bundle:

1. Faka i-Ultimate Multisite ku-host oqondiswe kuyo
2. Qedela iwizadi yokusetha i-multisite
3. Yiya ku-**Ultimate Multisite > Site Export** kunethiwekhi entsha
4. Chofoza **Import Network Bundle**
5. Layisha ifayela le-network import bundle ZIP
6. Landela imiyalelo yokungenisa eboniswa esikrinini
7. Inqubo yokungenisa izobuyisela wonke amasayithi, okuqukethwe kwawo, nokucushwa kwawo

Ama-network import bundles agcina:
- Okuqukethwe kwesayithi (okuthunyelwe, amakhasi, izinhlobo zokuthunyelwe ezenziwe ngokwezifiso)
- Izilungiselelo nezinketho zesayithi
- Izindima zabasebenzisi nezimvume
- Ama-plugin namathemes (uma kufakiwe ku-bundle)
- Ukulayishwa kwemidiya (uma kufakiwe ku-bundle)
- Amathebula edathabheyisi enziwe ngokwezifiso nedatha

## Ukufaka i-ZIP yokuthekelisa eziqalisa yona {#installing-a-self-booting-export-zip}

Ukuze ubuyisele i-ZIP eziqalisa yona ku-host entsha:

1. Layisha okuqukethwe kwe-ZIP ethekelisiwe ku-web root oqondiswe kuyo.
2. Vula i-`index.php` elayishiwe kusiphequluli.
3. Landela imiyalelo yesifaki eboniswa esikrinini evela kuphakheji yokuthekelisa efakiwe.
4. Buyekeza i-`readme.txt` efakiwe ukuze uthole amanothi aqondene nokuthekelisa ngaphambi kokususa amafayela esikhashana.

Ngemininingwane yokufaka nokungenisa eqondene ne-addon, bheka [imibhalo ye-addon ye-Site Exporter](/addons/site-exporter).

Ngethuluzi lesayithi elilodwa elengezwe ku-Ultimate Multisite 2.9.0, bheka [Ukuthekelisa Nokungenisa](/user-guide/administration/export-import).
