---
title: Migrazione in Modalità Terze Parti
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrazione in Modalità di Terze Parti

Superdav AI Agent v1.12.0 modifica il modo in cui vengono gestite le capacità (abilities) di terze parti. **La modalità di terze parti è ora impostata di default su "auto"**, consentendo l'integrazione nativa con l'API Abilities di WordPress su WordPress 7.0+ senza configurazione manuale.

## Cosa è cambiato?

### Prima di v1.12.0

Le capacità di terze parti richiedevano una configurazione manuale:

- Era necessario abilitare esplicitamente la "modalità di terze parti"
- Le capacità venivano caricate da un registro personalizzato
- L'integrazione con l'API Abilities di WordPress era opzionale
- La modalità legacy era quella predefinita

### Dopo v1.12.0

Le capacità di terze parti funzionano automaticamente:

- La modalità di terze parti è impostata di default su "auto"
- Le capacità si integrano nativamente con l'API Abilities di WordPress
- Non è necessaria alcuna configurazione manuale su WordPress 7.0+
- La modalità legacy è comunque disponibile per versioni più vecchie di WordPress

## Chi è interessato?

### Nuove installazioni (WordPress 7.0+)

**Nessuna azione richiesta.** La modalità di terze parti è impostata automaticamente su "auto" e le capacità funzionano subito.

### Installazioni esistenti

**Le tue impostazioni vengono mantenute.** Se stavi utilizzando:

- **Modalità legacy**: Rimani in modalità legacy (nessun cambiamento)
- **Modalità di terze parti manuale**: Rimani in modalità manuale (nessun cambiamento)
- **Modalità auto**: Continui con la modalità auto (nessun cambiamento)

### Versioni di WordPress precedenti al 7.0

**La modalità legacy è ancora disponibile.** Se sei su WordPress 6.x o precedente:

- La modalità di terze parti è impostata di default su "legacy"
- Puoi abilitare manualmente la modalità di terze parti se lo desideri
- Aggiorna a WordPress 7.0+ per utilizzare l'API Abilities nativa

## Comprendere le modalità

### Modalità Auto (Nuovo Default)

**La modalità auto** utilizza l'integrazione nativa con l'API Abilities di WordPress:

- Le capacità sono registrate tramite i hook di WordPress
- Piena compatibilità con l'API Abilities di WordPress 7.0+
- Scoperta automatica delle capacità di terze parti
- Nessuna configurazione manuale necessaria

**Quando usarla**: WordPress 7.0+ con capacità di terze parti

### Modalità Manuale

**La modalità manuale** richiede una configurazione esplicita:

- Specifichi quali capacità di terze parti caricare
- Utile per test o per caricare capacità selettivamente
- Richiede la modifica dei file di configurazione
- Più controllo, ma più configurazione

**Quando usarla**: Test, caricamento selettivo delle capacità o configurazioni personalizzate

### Modalità Legacy

**La modalità legacy** utilizza il vecchio sistema di capacità di terze parti:

- Registro di capacità personalizzato (non l'API Abilities di WordPress)
- Compatibile con versioni più vecchie di WordPress
- Nessuna integrazione nativa con WordPress
- Deprecata ma ancora supportata

**Quando usarla**: WordPress 6.x o precedente, o quando hai bisogno di compatibilità legacy

## Controllare la tua modalità attuale

### Tramite il pannello di amministrazione

1. Vai su **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Cerca l'impostazione **Third-Party Mode**
3. Vedrai la tua modalità attuale e le opzioni per modificarla

### Tramite codice

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', o 'legacy'
```

## Cambiare la tua modalità

### Passare alla Modalità Auto

Se sei su WordPress 7.0+ e vuoi utilizzare la modalità auto:

1. Vai su **Superdav AI Agent** → **Settings**
2. Trova **Third-Party Mode**
3. Seleziona **Auto (WordPress Abilities API)**
4. Clicca **Save**

Superdav AI Agent scoprirà e registrerà automaticamente le capacità di terze parti.

### Passare alla Modalità Manuale

Se vuoi controllare manualmente quali capacità vengono caricate:

1. Vai su **Superdav AI Agent** → **Settings**
2. Trova **Third-Party Mode**
3. Seleziona **Manual**
4. Clicca **Save**
5. Modifica il tuo file di configurazione per specificare quali capacità caricare

### Passare alla Modalità Legacy

Se hai bisogno di compatibilità legacy:

1. Vai su **Superdav AI Agent** → **Settings**
2. Trova **Third-Party Mode**
3. Seleziona **Legacy**
4. Clicca **Save**

## Vantaggi della Modalità Auto

### Scoperta Automatica

Le capacità vengono scoperte automaticamente da:

- Plugin installati
- Tema attivo
- Plugin must-use
- Plugin drop-in

Non è necessaria alcuna registrazione manuale.

### Integrazione Nativa

Le capacità si integrano con l'API Abilities di WordPress:

- Coerente con il core di WordPress
- Funziona con l'admin di WordPress
- Compatibile con altri plugin che utilizzano l'API Abilities
- A prova di futuro man mano che WordPress evolve

### Gestione Semplificata

- Nessun file di configurazione da modificare
- Nessuna registrazione manuale delle capacità
- I controlli di visibilità delle capacità funzionano automaticamente
- Gli avvisi dell'admin ti segnalano le capacità non classificate

### Migliore Prestazione

- Le capacità vengono memorizzate in cache
- Caricate in modo pigro (lazy-loaded) quando necessario
- Ottimizzate per WordPress 7.0+

## Percorso di migrazione

### Se sei su WordPress 6.x

1. **Aggiorna a WordPress 7.0+** (quando sei pronto)
2. **Aggiorna Superdav AI Agent** a v1.12.0+
3. **Cambia la modalità di terze parti in Auto** (opzionale; la modalità legacy funziona ancora)
4. **Rivedi la visibilità delle capacità** per garantire controlli di accesso appropriati

### Se sei su WordPress 7.0+

1. **Aggiorna Superdav AI Agent** a v1.12.0+
2. **Verifica che la modalità di terze parti sia impostata su Auto** (dovrebbe esserlo di default)
3. **Rivedi la visibilità delle capacità** per garantire controlli di accesso appropriati
4. **Testa le capacità di terze parti** per confermare che funzionino

## Risoluzione dei problemi

### Le capacità non vengono caricate in modalità auto

- Verifica di essere su WordPress 7.0+
- Controlla che la modalità di terze parti sia impostata su "Auto"
- Verifica che il plugin che fornisce la capacità sia attivo
- Controlla i log degli errori di WordPress per errori di registrazione

### Voglio mantenere la modalità legacy

- Vai su **Settings** → **Third-Party Mode**
- Seleziona **Legacy**
- Clicca **Save**
- La modalità legacy continuerà a funzionare

### Le mie capacità personalizzate non vengono mostrate

- Verifica che siano registrate tramite i hook di WordPress
- Controlla che implementino correttamente l'API Abilities
- Rivedi i log degli errori di WordPress
- Usa la pagina admin **Ability Visibility** per vedere tutte le capacità registrate

### Ricevo avvisi di "capacità non classificate"

- Questo è normale per le nuove capacità di terze parti
- Rivedile e classificali nell'avviso admin
- Vedi **Ability Visibility** per dettagli sulla classificazione

## Compatibilità retroattiva

### Configurazioni esistenti

Se hai configurazioni di capacità di terze parti esistenti:

- **Modalità legacy**: La tua configurazione continua a funzionare
- **Modalità manuale**: La tua configurazione continua a funzionare
- **Modalità auto**: La tua configurazione viene ignorata (la modalità auto prende il sopravvento)

Per mantenere la tua configurazione personalizzata, resta in modalità Manuale o Legacy.

### Cronologia di deprecazione

- **v1.12.0**: Modalità Legacy e Manuale sono ancora pienamente supportate
- **v1.13.0+**: La modalità Legacy potrebbe mostrare avvisi di deprecazione
- **v2.0.0**: La modalità Legacy potrebbe essere rimossa (da definire)

## Migliori pratiche

### Per nuove installazioni

- Usa la modalità Auto (è il default)
- Lascia che Superdav AI Agent scopra le capacità automaticamente
- Usa Ability Visibility per controllare l'accesso

### Per installazioni esistenti

- Aggiorna a WordPress 7.0+ quando possibile
- Passa alla modalità Auto per una gestione semplificata
- Rivedi e classifica le capacità usando Ability Visibility

### Per capacità personalizzate

- Registra le capacità tramite i hook di WordPress (Abilities API)
- Evita i registri di capacità personalizzati
- Testa su WordPress 7.0+ con la modalità Auto

## Prossimi passi

1. **Controlla la versione di WordPress**: Verifica di essere su 7.0+ per la modalità Auto
2. **Rivedi la modalità di terze parti**: Vai su Settings e controlla la tua modalità attuale
3. **Aggiorna se necessario**: Passa alla modalità Auto se sei su WordPress 7.0+
4. **Classifica le capacità**: Rivedi e classifica eventuali capacità non classificate
5. **Testa**: Verifica che le tue capacità di terze parti funzionino correttamente

## Argomenti correlati

- **Ability Visibility**: Controlla quali capacità sono esposte dove
- **WordPress Abilities API**: Impara sulla registrazione nativa delle capacità di WordPress
- **Sviluppo di capacità di terze parti**: Crea capacità che funzionano con la modalità Auto
