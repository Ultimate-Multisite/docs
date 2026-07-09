---
title: Note di rilascio
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Note di rilascio

## Versione 2.13.0 — Rilasciata il 2026-06-05

- Nuovo: aggiunto il supporto per tenant sovrani per i flussi di Account cliente, checkout, fatturazione, sito, fattura, cambio di template e mappatura dei domini, così le reti di tenant possono indirizzare i clienti di nuovo al sito principale per le azioni gestite.
- Nuovo: aggiunti controlli delle credenziali di rinnovo per le membership ricorrenti, così i gateway possono disabilitare il rinnovo automatico quando manca un accordo di fatturazione salvato, una sottoscrizione o un token del vault.
- Nuovo: aggiunta la pubblicazione in loopback verificata con HMAC per la creazione di siti in sospeso, per rendere il provisioning da checkout a sito più affidabile su host in cui i job in background sono in ritardo.
- Nuovo: aggiunti punti di estensione per sviluppatori per URL SSO, domini di base dei moduli di checkout e creazione automatica dei record di dominio.
- Correzione: SSO è più affidabile tra domini mappati, visite anonime al broker, logout e conflitti di dipendenze tra plugin.
- Correzione: la creazione di siti in sospeso ora recupera dai flag di pubblicazione obsoleti ed evita di lasciare i clienti bloccati nella schermata di creazione del sito.
- Correzione: i record di dominio non vengono più creati per domini di base condivisi dei moduli di checkout, e i job in background dei provider host inutilizzati vengono saltati quando non è attiva alcuna integrazione.
- Correzione: casi limite di checkout, indirizzo di fatturazione, reimpostazione password, verifica email, cambio di template, tour e Dashboard cliente non bloccano più i normali flussi dei clienti.
- Correzione: le email broadcast ora mantengono privati i destinatari evitando errori fatali SMTP/plugin quando gli elenchi dei destinatari o i trasporti email falliscono.
- Correzione: i casi limite relativi a rinnovi delle membership, visualizzazione della scadenza e riscossione dei pagamenti ora evitano scadenze immediate, crash o pagamenti obbligatori mancati.
- Migliorato: la compatibilità con WordPress è testata fino alla 7.0, gli asset Vue di produzione sono ricompilati dalle sorgenti npm e la copertura end-to-end Cypress ora esercita più flussi di checkout, configurazione, SSO e gateway.

## Versione 2.12.0 — Rilasciata il 2026-05-15

- Nuovo: aggiunto Hostinger (hPanel) come provider host supportato con integrazione di mappatura domini
- Nuovo: l’Esportatore di siti ora gestisce bundle di importazione di rete per un ripristino semplificato dei siti a livello di rete
- Correzione: le email broadcast BCC ora usano un header undisclosed-recipients per evitare di esporre gli indirizzi dei destinatari
- Correzione: la data di scadenza della membership non viene più corrotta quando si salva con un valore non di tipo data
- Correzione: gli aggiornamenti delle membership Stripe ora cancellano correttamente gli sconti senza chiamare l’API deprecata deleteDiscount
- Correzione: i reindirizzamenti SSO sui siti con domini mappati ora sono limitati per prevenire loop di reindirizzamento infiniti
- Correzione: la selezione nel selettore immagini della procedura guidata di configurazione ora aggiorna correttamente il modello di dati sottostante
- Correzione: la CLI dell’Esportatore di siti ora preserva la corretta selezione predefinita del sito di rete
- Migliorato: rimosso wp-cli incluso dal pacchetto del plugin, riducendo la dimensione del plugin

## Versione 2.11.0 — Rilasciata il 2026-05-11

- Nuovo: le esportazioni dei siti ora includono un `index.php` autoavviante, così il ZIP può essere installato su un host nuovo senza un’installazione separata del plugin.
- Nuovo: l’esportazione di rete consente agli amministratori di esportare tutti i sottositi in un unico archivio dalla pagina di amministrazione Esportazione sito.
- Nuovo: l’interruttore del piano Consenti template di sito ora viene applicato tramite una catena di fallback, limitando correttamente la disponibilità dei template in base ai limiti del piano.
- Nuovo: l’editor del modulo di checkout avvisa quando viene aggiunto un prodotto senza aver configurato un campo obbligatorio.
- Nuovo: la scheda impostazioni Importazione/Esportazione ora descrive chiaramente il proprio ambito e collega direttamente allo strumento Esportazione sito.

## Versione 2.10.0 — Rilasciata il 2026-05-05

- Nuovo: procedura guidata di configurazione PayPal per l’inserimento manuale delle credenziali con flag gate OAuth per una configurazione del gateway senza interruzioni.
- Nuovo: pannello cliente per il cambio di template riprogettato con scheda del template corrente, griglia persistente e pulsante **Reimposta template corrente**.
- Correzione: il cambio di template non blocca più l’UI in caso di errore AJAX.
- Correzione: gli stati dei permessi per il cambio di template sono stati messi in sicurezza contro accessi non autorizzati.
- Correzione: input di override del sito validati prima del salvataggio.
- Correzione: il prompt dell’indirizzo di fatturazione ora viene mostrato quando l’indirizzo è vuoto.
- Correzione: risolti gli avvisi di deprecazione da null a stringa in PHP 8.1.
- Correzione: Currents caricati in lazy load prima dell’hook init per prevenire problemi di timing.
- Correzione: percorso SSO filtrato rispettato in tutti i flussi di accesso.
- Correzione: opzioni vuote dell’identità del sito preservate al salvataggio.

## Versione 2.9.0 — Rilasciata il 2026-04-30

- Nuovo: esportazione e importazione di singoli siti aggiunte sotto **Strumenti > Esportazione e importazione**.
- Correzione: i file ZIP di esportazione ora vengono serviti tramite un endpoint di download autenticato.
- Correzione: corretti rischio di SQL injection e problemi di query nelle query di esportazione/importazione in sospeso.
- Correzione: sito in sospeso non pubblicato quando l’amministratore verifica manualmente l’email del cliente.
- Correzione: record pending_site orfani eliminati quando manca la membership.
- Correzione: corretti il padding della navigazione impostazioni e la navigazione degli anchor di ricerca.
- Correzione: i siti in sospeso ora vengono mostrati per primi nella vista Tutti i siti.
- Correzione: aggiunto header User-Agent del provider di screenshot (mShots) per prevenire errori 403.
- Correzione: risolta dipendenza circolare nella pianificazione cron dell’importazione.
- Correzione: ID dei tour normalizzati con trattini bassi nelle chiavi delle impostazioni utente.
- Migliorato: ora viene usato ZipArchive invece di Alchemy/Zippy per una migliore compatibilità.

## Versione 2.8.0 — Rilasciata il 2026-04-29

- Nuovo: toggle Enable Jumper aggiunto all'interfaccia utente delle impostazioni Other Options.
- Nuovo: colonna dello stato aggiunta alla tabella dell'elenco dei moduli di checkout.
- Nuovo: loader del file sunrise dell'addon per estensioni sunrise MU-plugin personalizzate.
- Migliorato: rimossa l'impostazione di adesione alla segnalazione degli errori dalla pagina delle impostazioni.
- Correzione: scheda del sito nella pagina di ringraziamento — immagine ora vincolata e link stilizzati correttamente.
- Correzione: provider degli screenshot cambiato da thum.io a WordPress.com mShots.
- Correzione: Enable Registration e Default Role ora impostano i valori predefiniti corretti su una nuova installazione.
- Correzione: `get_site_url()` non restituisce più vuoto quando il dominio include una porta.
- Correzione: i file multimediali clonati ora vengono copiati correttamente quando l'impostazione `copy_media` era vuota.
- Correzione: cache degli oggetti invalidata correttamente dopo la scrittura di sitemeta con attivazione a livello di rete.
- Correzione: dominio personalizzato promosso automaticamente a primario alla verifica DNS per domini a 3 parti.
- Correzione: membership in sospeso annullata quando il pagamento scaduto viene ripulito.
- Correzione: controllo della robustezza della password ricollegato dopo la chiusura del prompt di accesso inline.
- Correzione: ricaricamento infinito della pagina interrotto nella pagina di ringraziamento quando il sito è già stato creato.
- Correzione: opzione di registrazione del core WP sincronizzata all'attivazione del plugin e al salvataggio delle impostazioni.
- Correzione: protezione contro scadenza nulla aggiunta in `calculate_expiration` per compatibilità con PHP 8.4.
- Correzione: iscrizioni duplicate bloccate quando il cliente ha già una membership attiva.
- Correzione: controllo null aggiunto per `date_expiration` nel checkout.
- Correzione: provisioning del sito rafforzato — limitazioni, deduzione della membership, promozione del dominio.
- Correzione: etichetta di stato del controllo pre-installazione corretta in NON attivato quando il controllo fallisce.
- Correzione: dominio di checkout usato per gli URL di verifica email.
- Correzione: accesso automatico dopo il checkout quando non è presente alcun campo password.
- Correzione: le membership gratuite non scadono più — trattate come a vita.
- Correzione: gate di verifica email trattiene la pubblicazione del sito finché il cliente non verifica l'email.
- Correzione: percorso di base dell'endpoint SES v2 API e rotta dell'identità corretti.
- Correzione: hook `wu_inline_login_error` emesso nel blocco catch pre-invio.
