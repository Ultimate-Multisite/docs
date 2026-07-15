---
title: WP-CLI Αναφορά
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Αναφορά WP-CLI

Το Gratis AI Agent παρέχει μια οικογένεια εντολών `wp gratis-ai-agent` για benchmarking του agent, διαχείριση ικανοτήτων (abilities) και ανάκτηση της κατάστασης του agent από τη γραμμή εντολών. Όλες οι εντολές απαιτούν WP-CLI 2.0 ή νεότερη έκδοση.

## Εγκατάσταση {#installation}

Οι εντολές WP-CLI καταγράφονται αυτόματα όταν το plugin είναι ενεργό. Επιβεβαιώστε με:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Εκτελεί το benchmark suite των Ικανοτήτων του Agent — ένα σύνολο σύνθετων, πολυεπίπεδων prompts που δοκιμάζουν ολόκληρο το πεδίο των ικανοτήτων. Χρησιμοποιήστε αυτό για την αξιολόγηση της απόδοσης του μοντέλου, τη σύγκριση παρόχων AI ή τη επικύρωση πακέτων ικανοτήτων πριν την ανάπτυξη σε παραγωγή.

### Σύνοψη {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Επιλογές {#options}

| Option | Description |
|---|---|
| `--question=<id>` | Εκτελεί μια μεμονωμένη ερώτηση benchmark βάσει ID αντί για το πλήρες suite |
| `--provider=<provider>` | Υπεγράφει τον ρυθμισμένο πάροχο AI για αυτή τη δοκιμή (π.χ. `anthropic`, `openai`) |
| `--model=<model>` | Υπεγράφει το ρυθμισμένο μοντέλο για αυτή τη δοκιμή (π.χ. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Μορφή εξόδου: `table` (προεπιλεγμένο), `json`, `csv` |
| `--save` | Αποθηκεύει τα αποτελέσματα benchmark στη βάση δεδομένων για ιστορική σύγκριση |

### Παραδείγματα {#examples}

Εκτελέστε το πλήρες benchmark suite με τον τρέχοντα πάροχο και το μοντέλο:

```bash
wp gratis-ai-agent benchmark
```

Εκτελέστε μια μεμονωμένη ερώτηση (`q-restaurant-website`) και εξάγετε ως JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Εκτελέστε έναντι ενός συγκεκριμένου μοντέλου και αποθηκεύστε τα αποτελέσματα:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Έξοδος {#output}

Το benchmark εμφανίζει μία γραμμή ανά ερώτηση με τις ακόλουθες στήλες:

| Column | Description |
|---|---|
| `ID` | Αναγνωριστικό ερώτησης |
| `Description` | Σύντομη περίληψη του σενάριου benchmark |
| `Score` | Επιτυχία/αποτυχία ή αριθμητικό σκορ (0–100) |
| `Abilities Used` | Λίστα με διαχωριστικό κόμμα των ικανοτήτων που ενεργοποιήθηκαν |
| `Tokens` | Συνολικά tokens που καταναλώθηκαν |
| `Duration` | Χρόνος πέρασμας (wall-clock time) σε δευτερόλεπτα |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Ερωτήσεις Benchmark {#benchmark-questions}

Το προεπιλεγμένο suite περιλαμβάνει:

| ID | Scenario |
|---|---|
| `q-portfolio-site` | Δημιουργία ενός Portfolio CPT με ταξινομική οντότητα Project Category και καταχώριση ενός block pattern |
| `q-restaurant-website` | Δημιουργία ενός πλήρους ιστοτόπου εστιατορίου με CPT για μενού, φόρμα κρατήσεων και πλοήγηση |
| `q-dark-mode-theme` | Εφαρμογή ενός προεπιλεγμένου dark-mode design και ενσωμάτωση brand colors |
| `q-nav-builder` | Δημιουργία ενός κύριου μενού πλοήγησης με τέσσερα στοιχεία και αναπτυσσόμενο μενού (dropdown) |
| `q-options-roundtrip` | Ανάγνωση, τροποποίηση και αποκατάσταση ενός συνόλου επιλογών WordPress |
| `q-ability-install` | Ανακάλυψη και εγκατάσταση του πιο κατάλληλου ability pack για ένα περιγραφόμενο use case |

Επιπλέον ερωτήσεις μπορούν να καταχωρηθούν μέσω του filter `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Διαχειρίζεται τις εγκατεστημένες ικανότητες (abilities) και τα ability packs.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Λίσταρε όλες τις καταγεγραμμένες ικανότητες, την πηγή τους (core ή pack) και την τρέχουσα κατάστασή τους.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Επιλογές**

| Option | Description |
|---|---|
| `--format=<format>` | Μορφή εξόδου: `table` (προεπιλεγμένο), `json`, `csv` |

**Παράδειγμα εξόδου**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

Κατεβάζει και ενεργοποιεί ένα ability pack από το registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Arguments**

| Argument | Description |
|---|---|
| `<slug>` | Plugin slug του ability pack, π.χ. `gratis-ai-agent-woocommerce` |

**Παράδειγμα**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Απενεργοποιεί μια συγκεκριμένη ικανότητα χωρίς να αφαιρεί το pack. Χρήσιμο για τον περιορισμό του πεδίου δράσης του agent σε ένα συγκεκριμένο site.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Παράδειγμα**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Ενεργοποιεί ξανά μια προηγουμένως απενεργοποιημένη ικανότητα.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Εμφανίζει την τρέχουσα διαμόρφωση του agent και την κατάσταση σύνδεσης.

```bash
wp gratis-ai-agent status
```

**Παράδειγμα εξόδου**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

Εμφανίζει τις πρόσφατες δραστηριότητες του agent από το debug log.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Επιλογές**

| Option | Description |
|---|---|
| `--last=<n>` | Εμφανίζει τις τελευταίες N καταγραφές log. Προεπιλεγμένο `50` |
| `--level=<level>` | Φιλτράρισμα βάσει επιπέδου: `info`, `warning`, `error` |
| `--ability=<ability>` | Φιλτράρισμα βάσει ονόματος ικανότητας |

**Παράδειγμα**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Επαναφέρει την κατάσταση του agent: καθαρίζει τα ενσωματωμένα CSS, αφαιρεί τα CPTs και τα taxonomies που καταγράφηκαν από τον agent, επαναφέρει τα global styles και αδειάζει το cache των επιλογών του agent. Δεν αφαιρεί το plugin ή τις ρυθμίσεις του.

```bash
wp gratis-ai-agent reset [--yes]
```

Προσθέστε `--yes` για να παρακάμψετε το μήνυμα επιβεβαίωσης.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Exit Codes {#exit-codes}

Όλες οι εντολές εξέρχονται με κωδικό `0` σε επιτυχία. Οι κωδικοί εξόδου μη μηδενικού αριθμού:

| Code | Meaning |
|---|---|
| `1` | Γενικό σφάλμα (βλ. μήνυμα σφάλματος) |
| `2` | Αποτυχία σύνδεσης του Provider |
| `3` | Η ικανότητα δεν βρέθηκε |
| `4` | Η ερώτηση benchmark δεν βρέθηκε |
