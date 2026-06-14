---
title: Exportare et Importare
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exportare & Importare

Ultimate Multisite 2.9.0 adduce un singolo strumento di **Exportare & Importare** sotto **Strumenti > Exportare & Importare**. Usat it quando hai bisogno di impacchettare un sito WordPress come file ZIP, ripristinare quel ZIP, o spostare un sito tra installazioni Ultimate Multisite e single-site di WordPress compatibili.

## Permessi necessari

Devi accedere come amministratore che ha accesso al menu **Strumenti** di WordPress sul sito da esportare o importare. In una rete multisite, usa un account di amministratore della rete quando esporti o importi sottositi utilizzando gli strumenti Ultimate Multisite a livello di rete.

I download ZIP dell'esportazione vengono serviti tramite un endpoint di download autenticato, quindi tieni attiva la sessione admin finché il download non è terminato e non condividere pubblicamente le URL di download generate.

## Esportare un sito in un ZIP

1. Nell'admin di WordPress del sito che vuoi copiare, vai su **Strumenti > Exportare & Importare**.
2. Apri l'area di esportazione e scegli il sito che vuoi impacchettare.
3. Se disponibili, seleziona i contenuti opzionali da includere, come caricamenti (uploads), plugin e temi.
4. Avvia l'esportazione e aspetta che il processo finisca. I siti grandi potrebbero aver bisogno di terminare in background prima che il ZIP sia pronto.
5. Scarica il ZIP finito dall'elenco delle esportazioni.

Tieni il ZIP in una posizione sicura. Può contenere contenuti del sito, impostazioni, file multimediali e asset di codice selezionati.

## Cosa include l'esportazione

Un ZIP di esportazione può includere:

- Il contenuto del database e la configurazione del sito selezionato.
- I file multimediali caricati quando sono inclusi i caricamenti (uploads).
- Plugin e temi quando queste opzioni sono selezionate.
- I metadati di importazione utilizzati dallo strumento Exportare & Import per ricostruire il sito sull'installazione di destinazione.

Sized exactum ZIP dépendent de la quantité medii, des plugins et thèmes sélectionnés, ainsi que de la taille des tables de base de données du site.

## Importare un site da un ZIP

1. Mergi în **Tools > Export & Import** pe site-ul WordPress destinație.
2. Deschideți zona de import și încărcați ZIP-ul creat de instrumentul Export & Import.
3. Introduceți o URL de înlocuire dacă site-ul trebuie să folosească o adresă nouă, sau lăsați câmpul gol pentru a păstra URL-ul original.
4. Alegeți dacă doriți să ștergeți ZIP-ul încărcat după ce importul s-a terminat.
5. Faceți clic pe **Begin Import**.
6. Monitorizați importul în așteptare până când se încheie. Folosiți **Cancel Import** doar dacă aveți nevoie de a opri procesul înainte de finalizare.
7. Revizuiți site-ul importat înainte de a permite traficul normal sau accesul clienților.

Pe o instalare WordPress single-site, importarea unui ZIP înlocuiește site-ul curent cu site-ul importat. Creați un backup complet al site-ului țintă înainte de a începe și evitați să inițiați mai multe importuri pentru același site în același timp.

## Limitații și note de compatibilitate

Ie directories de upload multor largi vel biblioteci media pot genera fișiere ZIP mult largi. Confirmă limitele de upload ale PHP, limitele de execuție, spațiul pe disc, memoria și setările de timp (timeout) ale serverului înainte de a exporta sau importa site-uri mari.
Bibliotecile media foarte mari ar putea necesita a fi mutate în timpul unei ferestre de mentenanță cu trafic scăzut.
Instanța WordPress țintă trebuie să ruleze versiuni compatibile de WordPress, PHP, Ultimate Multisite, plugin și teme.
O importare single-site înlocuiește site-ul țintă. Nu este un instrument de fuziune (merge).
Mutările de la multisite la single-site și de la single-site la multisite sunt suportate doar atunci când mediul țintă poate rula plugin-urile, temele, URL-urile și componentele Ultimate Multisite necesare ale site-ului exportat.
Țineți ZIP-ul privat. Acesta poate conține conținut de bază de date, fișiere uploadate și detalii de configurare din site-ul exportat.

Pentru fluxuri de export mai vechi la nivel de rețea, vizualizați [Site Export](/user-guide/administration/site-export).
