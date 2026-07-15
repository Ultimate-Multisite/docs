---
title: 'Lezione 6: L''esperienza di registrazione'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lezione 6: L'Esperienza di Registrazione

Il flusso di checkout è il punto in cui l'interesse si trasforma in entrate. Un processo di registrazione confuso o generico fa perdere i clienti. Un flusso specifico per nicchia che parli la loro lingua e che risulta naturale li converte.

## Dove ci eravamo lasciati {#where-we-left-off}

FitSite ha template e piani configurati. Ora costruiamo l'esperienza di registrazione e checkout che trasforma i proprietari di studi fitness in clienti paganti.

## Comprendere il Flusso di Registrazione {#understanding-the-registration-flow}

I moduli di checkout di Ultimate Multisite sono moduli multi-step completamente personalizzabili. Per FitSite, vogliamo un flusso che:

1. Sembra costruito apposta per le attività fitness
2. Raccoglie solo ciò che è necessario
3. Porta il cliente a un sito funzionante nel modo più rapido possibile

Consulta [The Registration Flow](/user-guide/configuration/the-registration-flow) per il riferimento tecnico completo.

## Progettare il Checkout di FitSite {#designing-the-fitsite-checkout}

Vai su **Ultimate Multisite > Checkout Forms** e crea un nuovo modulo.

### Passo 1: Selezione del Piano {#step-1-plan-selection}

La prima cosa che un proprietario di studio fitness dovrebbe vedere sono i piani, presentati in termini che capisce.

- Aggiungi un campo **Pricing Table**
- Configuralo per mostrare tutti e tre i piani FitSite
- Le descrizioni dei piani che hai scritto nella Lezione 5 appaiono qui: assicurati che si rivolgano alle esigenze aziendali fitness, non alle caratteristiche tecniche

:::tip La Lingua di Nicchia è Fondamentale
"1 GB di archiviazione" non significa nulla per un proprietario di palestra. "Tutto ciò di cui hai bisogno per un sito web professionale per studio" significa tutto. Scrivi le descrizioni dei piani nella lingua del tuo cliente.
:::

### Passo 2: Selezione del Template {#step-2-template-selection}

Dopo aver scelto un piano, il cliente seleziona il template di partenza.

- Aggiungi un campo **Template Selection**
- I template disponibili sono filtrati dal piano selezionato (configurato nella Lezione 5)
- Ogni template dovrebbe avere un'immagine di anteprima che mostra un design specifico per il settore fitness

### Passo 3: Creazione dell'Account {#step-3-account-creation}

Mantienilo minimale. Raccogli solo:

- Indirizzo email
- Password
- Nome dello studio/attività (questo diventerà il nome del loro sito)

Non chiedere informazioni che non ti servono al momento della registrazione. Ogni campo extra riduce le conversioni.

### Passo 4: Configurazione del Sito {#step-4-site-setup}

- **Site title**: Precompila con il nome dello studio inserito al Passo 3
- **Site URL**: Genera automaticamente dal nome dello studio (es. `ironworks.fitsite.com`)

### Passo 5: Pagamento {#step-5-payment}

- Aggiungi il campo **Payment**
- Configura il tuo gateway di pagamento ([Stripe](/user-guide/payment-gateways/stripe) è consigliato per la fatturazione in abbonamento)
- Se hai creato *order bumps* nella Lezione 5, aggiungi un campo **Order Bump** prima del passaggio di pagamento

### Passo 6: Conferma {#step-6-confirmation}

- Personalizza il messaggio di conferma con un linguaggio specifico per il settore fitness
- Esempio: "Il tuo sito web per studio fitness è in fase di creazione. Verrai reindirizzato al tuo nuovo sito tra pochi secondi."

## Aggiungere un Toggle di Selezione Periodo {#adding-a-period-selection-toggle}

Se hai impostato variazioni di prezzo nei tuoi piani (mensile vs. annuale), aggiungi un campo **Period Selection** al modulo di checkout in modo che i clienti possano passare da un periodo di fatturazione all'altro. Consulta [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) per le istruzioni.

## Configurare il Pagamento {#configuring-payment}

Se non hai ancora configurato un gateway di pagamento:

1. Vai su **Ultimate Multisite > Settings > Payment Gateways**
2. Segui la [guida di configurazione di Stripe](/user-guide/payment-gateways/stripe) o il gateway di tua preferenza
3. Testa l'intero flusso di checkout con un pagamento di prova

Consulta [Getting Paid](/user-guide/payment-gateways/getting-paid) per i dettagli su come i pagamenti arrivano sul tuo account.

## Testare il Flusso {#testing-the-flow}

Prima di passare oltre, completa un test di registrazione completo:

1. Apri il modulo di checkout in una finestra di browser in incognito/privata
2. Seleziona un piano
3. Scegli un template
4. Crea un account
5. Completa il pagamento (usa la modalità test)
6. Verifica che il sito sia stato creato con il template corretto

Controlla che:

- [ ] Le descrizioni dei piani siano chiare e specifiche per nicchia
- [ ] Le anteprime dei template mostrino design appropriati per il settore fitness
- [ ] L'URL del sito venga generato correttamente dal nome dello studio
- [ ] Il pagamento venga elaborato con successo
- [ ] Il cliente atterri su un sito funzionante con il template selezionato
- [ ] Le email di conferma utilizzino un linguaggio specifico per il settore fitness

## La Rete FitSite Finora {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configurato)
├── Hosting con wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## Cosa abbiamo costruito in questa lezione {#what-we-built-this-lesson}

- **Un modulo di checkout multi-step** personalizzato per i proprietari di studi fitness
- **Linguaggio specifico per nicchia** lungo tutto il flusso di registrazione
- **Attrito minimo** – solo campi essenziali, percorso rapido verso un sito funzionante
- **Integrazione di pagamento** con verifica di test
- **Un flusso end-to-end testato** dalla selezione del piano al sito funzionante

---

**Prossimo:** [Lezione 7: Rendilo Tuo](lesson-7-branding) -- faremo il white-label della piattaforma e stabiliremo FitSite come brand.
