---
title: Note di rilascio
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Note di rilascio

## Versione 2.12.0 — Rilasciata il 2026-05-15

- Nuovo: Aggiunto Hostinger (hPanel) come provider di hosting supportato con integrazione di mappatura del dominio
- Nuovo: Site Exporter ora gestisce i bundle di importazione di rete per un ripristino del sito su rete più snello
- Correzione: Le email broadcast BCC ora utilizzano un header `undisclosed-recipients` per evitare di esporre gli indirizzi dei destinatari
- Correzione: La data di scadenza dell'abbonamento non viene più corrotta quando si salva con un valore non datato
- Correzione: Gli aggiornamenti degli abbonamenti Stripe cancellano correttamente gli sconti senza chiamare l'API obsoleta `deleteDiscount`
- Correzione: I reindirizzamenti SSO sui siti con mappatura di dominio sono ora limitati per prevenire cicli di reindirizzamento infiniti
- Correzione: La selezione dell'immagine nel wizard di configurazione aggiorna correttamente il modello dati sottostante
- Correzione: L'interfaccia CLI di Site Exporter ora conserva la corretta selezione predefinita del sito di rete
- Migliorato: Rimosso wp-cli incluso dal pacchetto plugin, riducendo le dimensioni del plugin

## Versione 2.11.0 — Rilasciata il 2026-05-11

- Nuovo: Gli esportazioni dei siti ora includono un `index.php` auto-booting in modo che il file ZIP possa essere installato su un host nuovo senza un'installazione plugin separata.
- Nuovo: L'esportazione di rete consente agli amministratori di esportare tutti i sottositi in un unico archivio dalla pagina di amministrazione di Site Export.
- Nuovo: L'interruttore "Allow Site Templates" è ora applicato tramite una catena di fallback, limitando correttamente la disponibilità dei template in base ai limiti del piano.
- Nuovo: L'editor del modulo di checkout avvisa quando viene aggiunto un prodotto senza un campo obbligatorio configurato.
- Nuovo: La scheda Impostazioni di Importazione/Esportazione descrive ora chiaramente il suo ambito e fornisce un link diretto allo strumento Site Export.

## Versione 2.10.0 — Rilasciata il 2026-05-05

- Nuovo: Wizard di configurazione guidato di PayPal per l'inserimento manuale delle credenziali con un flag OAuth per una configurazione del gateway senza interruzioni.
- Nuovo: Il pannello clienti per il cambio template è stato ridisegnato con la scheda del template corrente, una griglia persistente e il pulsante **Reset current template**.
- Correzione: Il cambio template non blocca più l'interfaccia utente in caso di fallimento AJAX.
- Correzione: Gli stati di permessi per il cambio template sono protetti contro l'accesso non autorizzato.
- Correzione: Gli input di override del sito vengono validati prima di salvare.
- Correzione: Il prompt per l'indirizzo di fatturazione viene ora mostrato quando l'indirizzo è vuoto.
- Correzione: Risolti i messaggi di deprecazione null-to-string di PHP 8.1.
- Correzione: Currents viene caricato in modo lazy prima dell'hook `init` per prevenire problemi di tempistica.
- Correzione: Il percorso SSO filtrato è rispettato in tutti i flussi di accesso.
- Correzione: Le opzioni di identità del sito vuoto vengono salvate.

## Versione 2.9.0 — Rilasciata il 2026-04-30

- Nuovo: Esportazione e importazione di singolo sito aggiunte sotto **Strumenti > Esporta e importa**.
- Correzione: I file ZIP di esportazione vengono ora serviti tramite un endpoint di download autenticato.
- Correzione: Corretti i rischi di SQL injection e i problemi di query nelle query di esportazione/importazione in sospeso.
- Correzione: Il sito in sospeso non viene pubblicato quando l'amministratore verifica manualmente l'email del cliente.
- Correzione: I record `pending_site` orfani vengono puliti quando manca l'abbonamento.
- Correzione: Corretti il padding della navigazione delle impostazioni e la navigazione per ancoraggio di ricerca.
- Correzione: I siti in sospeso vengono ora mostrati per primi nella vista Tutti i siti.
- Correzione: Aggiunto l'header User-Agent del provider di screenshot (mShots) per prevenire errori 403.
- Correzione: Risolta la dipendenza circolare del cron di importazione.
- Correzione: Gli ID dei tour vengono normalizzati con underscore nelle chiavi delle impostazioni utente.
- Migliorato: Ora viene utilizzato ZipArchive invece di Alchemy/Zippy per una migliore compatibilità.

## Versione 2.8.0 — Rilasciata il 2026-04-29

- Nuovo: Aggiuto l'interruttore "Enable Jumper" all'interfaccia utente delle Impostazioni Altre Opzioni.
- Nuovo: Aggiunta la colonna Stato alla tabella di elenco dei moduli di checkout.
- Nuovo: Caricatore di file Addon sunrise per estensioni personalizzate MU-plugin sunrise.
- Migliorato: Rimosso l'opzione di opt-in per la segnalazione degli errori dalla pagina delle impostazioni.
- Correzione: Scheda del sito sulla pagina di ringraziamento: l'immagine è ora vincolata e i link sono stilizzati correttamente.
- Correzione: Il provider di screenshot è stato spostato da thum.io a WordPress.com mShots.
- Correzione: "Enable Registration" e "Default Role" ora impostano i valori predefiniti corretti su una nuova installazione.
- Correzione: `get_site_url()` non restituisce più valori vuoti quando il dominio include una porta.
- Correzione: I file multimediali clonati vengono ora copiati correttamente quando l'impostazione `copy_media` era vuota.
- Correzione: La cache degli oggetti viene invalidata correttamente dopo la scrittura di sitemeta network-activate.
- Correzione: Il dominio personalizzato viene automaticamente promosso a primario dopo la verifica DNS per i domini a 3 parti.
- Correzione: L'abbonamento in sospeso viene annullato quando viene pulito un pagamento scaduto.
- Correzione: Il controllore di forza della password viene riattivato dopo che il prompt di accesso inline è stato chiuso.
- Correzione: Arrestato il ricaricamento infinito della pagina sulla pagina di ringraziamento quando il sito è già stato creato.
- Correzione: L'opzione di registrazione WP core viene sincronizzata all'attivazione del plugin e al salvataggio delle impostazioni.
- Correzione: Aggiunto un guard per la scadenza nulla in `calculate_expiration` per la compatibilità con PHP 8.4.
- Correzione: I nuovi registrazioni duplicate vengono bloccate quando il cliente ha già un abbonamento attivo.
- Correzione: Aggiunto un controllo null per `date_expiration` nel checkout.
- Correzione: Rafforzato l'approvvigionamento del sito: limitazioni, inferenza dell'abbonamento, promozione del dominio.
- Correzione: Etichetta dello stato del controllo pre-installazione corretta in NON Attivato quando il controllo fallisce.
- Correzione: Dominio di checkout utilizzato per gli URL di verifica email.
- Correzione: Accesso automatico dopo il checkout quando non è presente un campo password.
- Correzione: Gli abbonamenti gratuiti non scadono più — vengono trattati come a vita.
- Correzione: Il blocco di verifica email mantiene la pubblicazione del sito fino a quando il cliente non verifica l'email.
- Correzione: Corretto il percorso base dell'endpoint API SES v2 e il percorso di identità.
- Correzione: L'hook `wu_inline_login_error` viene emesso nel blocco catch pre-submit.
