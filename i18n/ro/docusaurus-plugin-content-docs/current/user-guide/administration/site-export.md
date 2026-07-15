---
title: Exportare Site
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportarea Site-ului

Pagina de administrare **Site Export** vă permite administratorilor de rețea să încapsuleze un singur site sau întreaga rețea într-un arhivă descărcabilă, pentru migrare, backup sau predare către un alt utilizator.

## Exportarea unui singur site {#exporting-one-site}

Mergeți la **Ultimate Multisite > Site Export** și selectați **Generate new Site Export**. Alegeți subsite-ul pe care doriți să îl exportați, apoi decideți dacă arhiva trebuie să includă încărcările (uploads), plugin-urile și temele.

După ce exportarea este finalizată, descărcați fișierul ZIP din lista **Existing Exports**. Fișierele ZIP de export acum includ un `index.php` auto-pornit și un `readme.txt`, astfel încât arhiva poate fi încărcată pe un host nou și pornită fără a instala mai întâi un plugin de importator separat.

## Exportarea întregii rețele {#exporting-the-whole-network}

Folosiți **Network Export** de pe pagina Site Export atunci când aveți nevoie de o singură arhivă care să conțină toate subsite-urile din rețea. Acest lucru este util înainte de migrații de host, exerciții de recuperare după dezastre sau reconstrucții de staging, în care fiecare subsite trebuie să călătorească împreună.

Deoarece o exportare de rețea poate fi mult mai mare decât o exportare de singur site, rulați procesul în timpul unei perioade cu trafic redus și confirmați că spațiul de stocare țintă are suficient spațiu liber pentru încărcări, plugin-uri, teme și fișierele ZIP generate.

### Bundele de import pentru rețea {#network-import-bundles}

Începând cu Ultimate Multisite 2.12.0, Site Exporter poate genera **network import bundles** — arhive specializate concepute pentru restaurarea site-urilor la nivel de rețea, în mod optimizat. Un network import bundle conține toate fișierele și metadatele necesare pentru a restaura multiple site-uri pe o nouă instalare de rețea.

#### Generarea unui Network Import Bundle {#generating-a-network-import-bundle}

1. Mergeți la **Ultimate Multisite > Site Export**
2. Faceți clic pe **Generate new Network Export**
3. Selectați **Network Import Bundle** ca tip de export
4. Alegeți dacă să includeți încărcările, plugin-urile și temele
5. Faceți clic pe **Generate**
6. Descărcați bundle-ul ZIP din lista **Existing Exports**

#### Restaurarea dintr-un Network Import Bundle {#restoring-from-a-network-import-bundle}

Pentru a restaura site-uri dintr-un network import bundle:

1. Instalați Ultimate Multisite pe host-ul țintă
2. Finalizați wizard-ul de configurare multisite
3. Mergeți la **Ultimate Multisite > Site Export** pe noua rețea
4. Faceți clic pe **Import Network Bundle**
5. Încărcați fișierul ZIP al network import bundle
6. Urmați instrucțiunile de import afișate pe ecran
7. Procesul de import va restaura toate site-urile, conținutul și configurațiile acestora

Network import bundles păstrează:
- Conținutul site-ului (postări, pagini, tipuri de conținut personalizate)
- Setările și opțiunile site-ului
- Rolurile și permisiunile utilizatorilor
- Plugin-urile și temele (dacă sunt incluse în bundle)
- Încărcările media (dacă sunt incluse în bundle)
- Tabelele și datele personalizate din baza de date

## Instalarea unui ZIP de export auto-pornit {#installing-a-self-booting-export-zip}

Pentru a restaura un ZIP auto-pornit pe un host nou:

1. Încărcați conținutul ZIP exportat în directorul rădăcină web țintă.
2. Deschideți `index.php` încărcat într-un browser.
3. Urmați instrucțiunile de instalare afișate pe ecran din pachetul de export bundle.
4. Revizuiți `readme.txt` bundle-ul pentru notițe specifice exportului înainte de a elimina fișierele temporare.

Pentru detalii privind instalarea și importul specific unui addon, consultați [Site Exporter addon documentation](/addons/site-exporter).

Pentru instrumentul pentru singur site adăugat în Ultimate Multisite 2.9.0, consultați [Export & Import](/user-guide/administration/export-import).
