---
title: 'Lezione 12: Gestire l''azienda'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lezione 12: Gestire l'attività

Una piattaforma non è un progetto che si finisce, ma un'attività che si gestisce. Questa lezione copre le operazioni quotidiane per gestire FitSite: supporto, fatturazione, manutenzione e come mantenere felici i clienti.

## Dove ci eravamo lasciati

FitSite è attivo e i clienti si stanno iscrivendo. Ora devi gestire l'attività in modo sostenibile.

## Operazioni Quotidiane

### Monitoraggio

Controlla queste cose ogni giorno (o imposta degli alert):

- **Uptime**: La piattaforma è accessibile? Usa un servizio di monitoraggio dell'uptime.
- **Nuove iscrizioni**: Quanti nuovi clienti si sono iscritti oggi?
- **Pagamenti falliti**: Ci sono pagamenti falliti che richiedono attenzione?
- **Richieste di supporto**: Ci sono domande dei clienti senza risposta?

### Supporto Clienti

Il tuo focus di nicchia è un vantaggio qui. Poiché tutti i tuoi clienti sono studi fitness, vedrai le stesse domande ripetutamente:

**Domande comuni che riceverai:**

- "Come posso aggiornare il mio programma di lezioni?"
- "Posso cambiare i colori del mio sito?"
- "Come posso aggiungere un nuovo istruttore al mio sito?"
- "Il mio dominio non funziona"
- "Come posso annullare/aggiornare il mio piano?"

Costruisci la tua knowledge base (iniziata nella Lezione 8) attorno a queste domande ricorrenti. Ogni ticket di supporto che potrebbe essere un articolo della knowledge base è un segnale per scrivere quell'articolo.

### Livelli di Supporto

Man mano che cresci, struttura il supporto in base al piano:

| Piano | Livello di Supporto | Tempo di Risposta |
|------|--------------|---------------|
| Starter | Knowledge base + email | 48 ore |
| Growth | Supporto via email | 24 ore |
| Pro | Email prioritaria + chiamata di onboarding | 4 ore |

L'addon [Support Tickets](/addons/support-tickets) può aiutare a gestire le richieste di supporto all'interno della piattaforma.

## Operazioni di Fatturazione

### Pagamenti Ricorrenti

Ultimate Multisite gestisce automaticamente la fatturazione ricorrente tramite il tuo payment gateway. Il tuo compito è monitorare:

- **Pagamenti falliti**: Segui rapidamente. La maggior parte dei fallimenti sono carte scadute, non cancellazioni intenzionali.
- **Dunning**: Imposta una logica di riprova automatica tramite il tuo payment gateway (Stripe gestisce bene questo aspetto)
- **Richieste di cancellazione**: Capisci perché i clienti se ne vanno. Ogni cancellazione è un feedback.

### Gestione Abbonamenti (Memberships)

Vai su **Ultimate Multisite > Memberships** per:

- Visualizzare tutti gli abbonamenti attivi
- Gestire richieste di upgrade e downgrade
- Elaborare rimborsi quando necessario
- Gestire le scadenze delle prove gratuite

Consulta [Managing Memberships](/user-guide/administration/managing-memberships) per il riferimento completo.

### Fatturazione (Invoicing)

Assicurati che le fatture vengano generate correttamente per ogni pagamento. I clienti potrebbero aver bisogno delle fatture per la rendicontazione delle spese aziendali. Consulta [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Manutenzione della Piattaforma

### Aggiornamenti di WordPress e Plugin

In quanto amministratore di rete, sei responsabile di:

- **Aggiornamenti del core di WordPress**: Testare su un sito di staging prima di applicare in produzione
- **Aggiornamenti dei plugin**: Stesso principio: testare prima, poi applicare a livello di rete
- **Aggiornamenti del tema**: Verificare che i template appaiano ancora corretti dopo gli aggiornamenti del tema
- **Aggiornamenti di Ultimate Multisite**: Seguire il changelog e testare prima di aggiornare

:::warning Non aggiornare mai in produzione senza testarlo
Un aggiornamento fallito influisce su ogni sito cliente della tua rete. Testa sempre gli aggiornamenti prima su una copia di staging della tua rete.
:::

### Sicurezza

- Mantenere tutti i software aggiornati
- Usare password forti e l'autenticazione a due fattori per gli account admin
- Monitorare attività sospette
- Avere un piano per gli incidenti di sicurezza

### Prestazioni

Man mano che la tua rete cresce, monitora:

- **Tempi di caricamento delle pagine**: I siti dei clienti sono veloci?
- **Utilizzo delle risorse del server**: CPU, memoria, spazio su disco
- **Prestazioni del database**: Le reti grandi richiedono ottimizzazione del database nel tempo

Considera di implementare la cache (page cache, object cache) e un CDN se non lo hai già fatto. L'[Cloudflare integration](/user-guide/host-integrations/cloudflare) gestisce gran parte di questo.

## Gestione del Ciclo di Vita del Cliente

### Ridurre il Churn (Tasso di abbandono)

Il churn è la percentuale di clienti che annullano ogni mese. Per un'attività basata su abbonamenti, ridurre il churn è importante quanto acquisire nuovi clienti.

**Motivi comuni per cui i clienti di studi fitness abbandonano:**

- Non sono riusciti a capire come usare la piattaforma → migliorare l'onboarding
- Il sito non sembrava abbastanza bello → migliorare i template
- Non hanno visto valore → migliorare le funzionalità o la comunicazione
- Hanno trovato un'alternativa più economica → rafforzare il valore della tua nicchia
- La loro attività è chiusa → inevitabile, ma tracciare questo separatamente

### Incoraggiare gli Upgrade

I clienti su Starter che stanno avendo successo dovrebbero essere incoraggiati ad aggiornare:

- Quando raggiungono i limiti del piano (siti, storage), mostrare prompt di upgrade
- Inviare email mirate che evidenziano le funzionalità del piano Growth di cui trarrebbero beneficio
- Mostrare ciò che i clienti Growth/Pro hanno costruito

### Campagne di Win-Back (Re-acquisizione)

Quando un cliente annulla:

1. Chiedere il motivo (tramite sondaggio di uscita o email)
2. Risolvere la loro preoccupazione, se possibile
3. Offrire uno sconto per il ritorno (30-60 giorni dopo la cancellazione)

## Routine Settimanali e Mensili

### Settimanale

- Rivedere nuove iscrizioni e cancellazioni
- Rispondere a tutti i ticket di supporto aperti
- Controllare le prestazioni e l'uptime della piattaforma
- Rivedere eventuali pagamenti falliti

### Mensile

- Analizzare le metriche chiave (MRR, churn, nuovi clienti, upgrade)
- Applicare aggiornamenti di WordPress e plugin (dopo il test su staging)
- Rivedere e aggiornare la knowledge base in base ai modelli di supporto
- Inviare una newsletter o un aggiornamento ai clienti (nuove funzionalità, consigli, notizie del settore fitness)

### Trimestrale

- Rivedere i prezzi rispetto ai concorrenti e al feedback dei clienti
- Valutare i design dei template: hanno bisogno di essere rinnovati?
- Valutare la capacità di hosting: è necessario scalare?
- Rivedere e migliorare l'onboarding basandosi sui dati di attivazione

## Cosa abbiamo costruito in questa lezione

- **Routine di monitoraggio quotidiano** per uptime, iscrizioni, pagamenti e supporto
- **Una struttura di supporto a livelli** abbinata ai piani
- **Operazioni di fatturazione** che includono dunning e gestione delle cancellazioni
- **Procedure di manutenzione** per aggiornamenti, sicurezza e prestazioni
- **Strategie di riduzione del churn** specifiche per la nicchia fitness
- **Routine operative settimanali, mensili e trimestrali**

---

**Prossimo:** [Lesson 13: Scaling Up](lesson-13-growth) -- far crescere FitSite da una piccola attività a un'impresa vera e propria.
