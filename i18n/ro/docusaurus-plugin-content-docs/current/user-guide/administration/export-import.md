---
title: Export și Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export și Import

Ultimate Multisite 2.9.0 adaugă un instrument de **Export & Import** pentru un singur site, accesibil sub **Tools > Export & Import**. Folosiți acest instrument atunci când trebuie să pachetați un site WordPress într-un fișier ZIP, să restaurați acel ZIP sau să mutați un site între instalări compatibile Ultimate Multisite și WordPress pentru un singur site.

## Permisiuni necesare {#required-permissions}

Trebuie să vă autentificați ca administrator care are acces la meniul **Tools** WordPress de pe site-ul care urmează a fi exportat sau importat. Pe o rețea multisite, folosiți un cont de administrator de rețea atunci când exportați sau importați subsite folosind instrumentele Ultimate Multisite la nivel de rețea.

Descărcările ZIP de export sunt servite printr-un endpoint de descărcare autentificat, așa că mențineți sesiunea de administrator activă până când descărcarea este finalizată și nu vă distribuiți niciodată URL-urile de descărcare generate public.

## Exportarea unui site în ZIP {#exporting-a-site-to-a-zip}

1. În panoul de administrare WordPress al site-ului pe care doriți să îl copiați, mergeți la **Tools > Export & Import**.
2. Deschideți zona de export și alegeți site-ul pe care doriți să îl pachetați.
3. Selectați conținutul opțional de inclus, cum ar fi încărcările, plugin-urile și temele, atunci când aceste opțiuni sunt disponibile.
4. Începeți exportarea și așteptați ca procesul să se finalizeze. Site-urile mari pot avea nevoie să finalizeze procesul în fundal înainte ca ZIP-ul să fie gata.
5. Descărcați ZIP-ul finalizat din lista de exporturi.

Păstrați ZIP-ul într-un loc sigur. Acesta poate conține conținutul site-ului, setările, fișierele media și resursele de cod selectate.

## Ce include exportul {#what-the-export-includes}

Un ZIP de export poate include:

- Conținutul bazei de date și configurarea site-ului selectat.
- Fișierele media încărcate, dacă sunt incluse încărcările.
- Plugin-urile și temele, dacă aceste opțiuni sunt selectate.
- Metadatele de import utilizate de instrumentul Export & Import pentru a reconstrui site-ul pe instalarea țintă.

Dimensiunea exactă a ZIP-ului depinde de cantitatea de media, de plugin-urile și temele selectate și de dimensiunea tabelelor bazei de date ale site-ului.

## Importarea unui site dintr-un ZIP {#importing-a-site-from-a-zip}

1. Mergeți la **Tools > Export & Import** pe site-ul WordPress destinație.
2. Deschideți zona de import și încărcați ZIP-ul creat de instrumentul Export & Import.
3. Introduceți un URL de înlocuire dacă site-ul ar trebui să folosească o adresă nouă, sau lăsați câmpul gol pentru a păstra URL-ul original.
4. Alegeți dacă doriți să ștergeți ZIP-ul încărcat după finalizarea importului.
5. Faceți clic pe **Begin Import**.
6. Monitorizați importul în așteptare până când se finalizează. Folosiți **Cancel Import** doar dacă trebuie să opriți procesul înainte de finalizare.
7. Revizuiți site-ul importat înainte de a permite traficul normal sau accesul clienților.

Pe o instalare WordPress pentru un singur site, importarea unui ZIP înlocuiește site-ul curent cu site-ul importat. Creați o copie de rezervă completă a site-ului țintă înainte de a începe și evitați inițierea mai multor importuri pentru același site în același timp.

## Limitările și notițe de compatibilitate {#limitations-and-compatibility-notes}

- Directorii de încărcări sau bibliotecile media foarte mari pot genera fișiere ZIP voluminoase. Confirmați limitele de încărcare PHP, limitele de execuție, spațiul de pe disc, memoria și setările de timeout ale serverului înainte de a exporta sau importa site-uri mari.
- Bibliotecile media foarte mari ar putea necesita mutarea în timpul unei ferestre de mentenanță cu trafic redus.
- Instalarea WordPress țintă ar trebui să ruleze versiuni compatibile de WordPress, PHP, Ultimate Multisite, plugin și teme.
- O importare pentru un singur site înlocuiește site-ul țintă. Nu este un instrument de fuziune.
- Mutările de la multisite la un singur site și de la un singur site la multisite sunt suportate doar atunci când mediul țintă poate rula plugin-urile, temele, URL-urile și componentele Ultimate Multisite necesare ale site-ului exportat.
- Păstrați ZIP-ul privat. Acesta poate conține conținut de bază de date, fișiere încărcate și detalii de configurare ale site-ului exportat.

Pentru fluxurile de lucru mai vechi de export la nivel de rețea, consultați [Site Export](/user-guide/administration/site-export).
