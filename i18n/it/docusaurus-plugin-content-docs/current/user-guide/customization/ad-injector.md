---
title: Annunci
sidebar_position: 10
_i18n_hash: 65a913ef62723840c638644b2838d819
---

# Aggiungere annunci ai siti dei clienti

Ultimate Multisite: Ads, in precedenza chiamato Ad Injector, permette di mostrare annunci sui piani selezionati. Puoi usare HTML personalizzato o shortcode, Google AdSense oppure Google Ad Manager. Ogni piano può usare le impostazioni predefinite della rete o un codice specifico.

L'add-on consente anche di offrire una scelta a pagamento: il cliente può sottoscrivere un piano con annunci e aggiungere un prodotto ricorrente che li rimuove. Non serve creare un secondo piano.

## Installare e attivare l'add-on {#install-and-activate-the-addon}

Installa **Ultimate Multisite: Ads** da **Ultimate Multisite > Componenti aggiuntivi**, oppure carica il file ZIP da **Plugin > Aggiungi plugin**. Al termine, attivalo per l'intero network.

## Configurare il fornitore di annunci della rete {#configure-the-network-ad-provider}

Vai su **Ultimate Multisite > Impostazioni > Annunci** e scegli un fornitore:

- **HTML personalizzato / shortcode** accetta HTML o JavaScript attendibile oppure uno shortcode di WordPress.
- **Google AdSense** usa i dati del publisher e degli slot pubblicitari.
- **Google Ad Manager** usa i dati del network e delle unità pubblicitarie.

Con **Annunci predefiniti per pagina** puoi limitare il numero di annunci inseriti in ogni richiesta. Il valore `0` elimina il limite.

![Impostazioni Ads del network](/img/addons/ads-network-settings-it.png)

## Attivare gli annunci su un piano {#enable-ads-on-a-plan}

Modifica il piano e apri **Opzioni del prodotto > Annunci**. Attiva **Inietta annunci in questo piano**, quindi scegli il fornitore e le posizioni. Puoi mostrare gli annunci prima o dopo il contenuto pubblico e nell'area di amministrazione WordPress del sito del cliente.

Lascia **Inietta annunci in questo piano** disattivato se il piano deve essere sempre senza annunci.

![Opzioni Ads di un piano con annunci](/img/addons/ads-plan-settings-it.png)

## Offrire l'opzione a pagamento "Senza banner" {#offer-a-paid-remove-ads-choice}

Usa un solo pacchetto o servizio ricorrente per l'opzione senza annunci. In genere, l'intervallo di fatturazione deve coincidere con quello del piano.

1. Vai su **Ultimate Multisite > Prodotti > Aggiungi prodotto**.
2. Assegna al prodotto un nome chiaro, per esempio **Senza banner**.
3. Imposta **Tipo di prodotto** su **Pacchetto** o **Servizio**.
4. Configura il prezzo ricorrente e l'intervallo di fatturazione.
5. Apri **Opzioni del prodotto > Annunci** e attiva **Questo pacchetto rimuove gli annunci**.
6. Salva il prodotto.

Quando il prodotto fa parte di un'iscrizione, l'add-on non mostra alcun annuncio sui siti associati.

![Pacchetto ricorrente configurato per rimuovere gli annunci](/img/addons/ads-remove-ads-product-it.png)

Modifica quindi il piano con annunci. Apri **Opzioni del prodotto > Up & Downgrades** e aggiungi il prodotto nel campo **Offerta add-ons**.

![Prodotto Senza banner selezionato nel campo Offerta add-ons](/img/addons/ads-offer-add-on-it.png)

## Aggiungere l'opzione al checkout {#add-the-choice-to-checkout}

Modifica il modulo di checkout usato dal piano e aggiungi un campo **Order Bump** prima del pagamento. Seleziona il prodotto **Senza banner** e usa un'etichetta chiara per il cliente, per esempio "Rimuovi gli annunci dal sito".

Il modulo deve contenere una sola tabella dei prezzi per il piano base e un campo Order Bump per il prodotto opzionale. In questo modo il listino rimane semplice e il cliente sceglie durante il checkout.

![Campo Order Bump nel modulo di checkout](/img/addons/ads-checkout-order-bump-it.png)

## Verificare entrambe le opzioni {#test-both-outcomes}

Prima di pubblicare il modulo, completa due checkout di prova:

1. Acquista il piano base senza l'add-on e verifica che gli annunci compaiano nelle posizioni abilitate.
2. Acquista lo stesso piano selezionando **Senza banner** e verifica che non compaiano annunci né sul sito pubblico né nell'area di amministrazione del sito.

Controlla anche che il riepilogo dell'ordine mostri il prezzo e l'intervallo ricorrente dell'add-on. Se l'opzione non compare, verifica che il pacchetto sia attivo, presente nel campo **Offerta add-ons** del piano e selezionato nel campo **Order Bump** del modulo di checkout.
