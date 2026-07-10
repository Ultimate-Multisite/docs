---
title: 'Lezione 3: Configurare la tua rete'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lezione 3: Configurazione della Rete {#lesson-3-setting-up-your-network}

È ora di costruire. In questa lezione installerai Ultimate Multisite e configurerai le fondamenta della rete FitSite. Ogni decisione qui è presa pensando al settore del fitness.

## Dove ci eravamo lasciati {#where-we-left-off}

Abbiamo scelto gli studi fitness come nicchia e abbiamo validato l'opportunità. Ora trasformeremo questa idea in una piattaforma funzionante.

## Scelta dell'hosting {#choosing-your-hosting}

La scelta dell'hosting è molto più importante per una piattaforma di nicchia rispetto a un singolo sito web. Non stai ospitando un sito, ma una rete che crescerà fino a decine o centinaia di siti.

### Cosa cercare {#what-to-look-for}

- **Supporto WordPress Multisite**: Non tutti gli host gestiscono bene il multisite
- **Wildcard SSL**: Essenziale per le reti basate su sottodomini
- **Risorse scalabili**: Hai bisogno di spazio per crescere senza dover migrare
- **Integrazione Ultimate Multisite**: Il mappaggio automatico dei domini e l'SSL riducono notevolmente lo sforzo operativo

### Approccio consigliato {#recommended-approach}

Scegli un host dalla lista dei [Provider compatibili](/user-guide/host-integrations/closte). Questi sono stati testati con Ultimate Multisite e forniscono le integrazioni di cui hai bisogno per il mappaggio dei domini e l'automazione SSL.

Per FitSite, utilizzeremo una configurazione con sottodomini. Ciò significa che i siti dei clienti appariranno inizialmente come `studionome.fitsite.com` prima che mappino optionalmente il loro dominio personale.

## Installazione di WordPress Multisite {#installing-wordpress-multisite}

Se non hai ancora un'installazione di WordPress Multisite:

1. Installa WordPress sul tuo provider di hosting
2. Segui la guida [Come installare WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Scegli la configurazione **sottodominio** quando richiesto

:::tip Perché i sottodomini?
I sottodomini assegnano a ogni sito cliente un indirizzo distinto (`studio.fitsite.com`) anziché un percorso (`fitsite.com/studio`). Questo è più professionale per i tuoi clienti ed evita conflitti di permalink. Consulta [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) per un confronto dettagliato.
:::

## Installazione di Ultimate Multisite {#installing-ultimate-multisite}

Segui la guida [Installare Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) per:

1. Caricare e attivare il plugin a livello di rete
2. Eseguire lo [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Durante lo setup wizard, tieni a mente la nicchia FitSite:

- **Valuta**: Impostalo sulla valuta utilizzata dai clienti dei tuoi studi fitness
- **Nome azienda**: "FitSite" (o il nome del brand che hai scelto)
- **Logo aziendale**: Carica il logo del tuo brand -- questo apparirà nelle fatture e nelle email

## Configurazione per la nicchia Fitness {#configuring-for-the-fitness-niche}

Con Ultimate Multisite installato, effettua queste scelte di configurazione specifiche per la nicchia:

### Impostazioni generali {#general-settings}

Vai su **Ultimate Multisite > Settings** e configura:

- **Nome sito**: FitSite
- **Ruolo predefinito**: Administrator -- i proprietari di studi fitness hanno bisogno del pieno controllo dei contenuti del loro sito
- **Registrazione**: Abilita la registrazione utente in modo che i proprietari degli studi possano registrarsi da soli

### Configurazione email {#email-configuration}

Le email di sistema devono parlare la lingua della tua nicchia. Vai su **Ultimate Multisite > Settings > Emails** e personalizza:

- Sostituisci il linguaggio generico "il tuo nuovo sito" con messaggi specifici per il fitness
- Esempio oggetto di benvenuto: "Il tuo sito web per lo studio fitness è pronto"
- Esempio corpo di benvenuto: Fai riferimento al loro studio, alle loro classi e a come iniziare con il loro sito fitness

Perfezioneremo questi aspetti nella Lezione 8 (Onboarding del Cliente), ma impostare il tono ora assicura che anche i primi test di registrazione sembrino specifici per la nicchia.

### Configurazione del dominio {#domain-configuration}

Se utilizzi un provider di hosting compatibile, configura il mappaggio dei domini ora:

1. Vai su **Ultimate Multisite > Settings > Domain Mapping**
2. Segui la guida di integrazione per il tuo host specifico
3. Testa che i nuovi sottositi ottengano automaticamente l'SSL

Questo assicura che quando inizieremo a creare modelli e siti di prova nella prossima lezione, tutto funzioni dall'inizio alla fine.

## La rete FitSite finora {#the-fitsite-network-so-far}

Alla fine di questa lezione, ecco cosa hai:

```
FitSite Network
├── WordPress Multisite (modalità sottodominio)
├── Ultimate Multisite (installato e configurato)
├── Hosting con Wildcard SSL
├── Mappaggio dei domini configurato
├── Modelli email specifici per la nicchia (iniziali)
└── Pronto per i modelli di sito (prossima lezione)
```

## Cosa abbiamo costruito in questa lezione {#what-we-built-this-lesson}

- **Un'installazione funzionante di WordPress Multisite** in modalità sottodominio
- **Ultimate Multisite installato** e configurato con il branding FitSite
- **Hosting e SSL** pronti per una rete in crescita
- **Mappaggio dei domini** configurato per il tuo provider di hosting
- **Tono email specifico per la nicchia** stabilito fin dal primo giorno

---

**Prossimo:** [Lezione 4: Creazione di modelli di nicchia](lesson-4-templates) -- creeremo modelli di sito che i proprietari di studi fitness vorranno davvero usare.
