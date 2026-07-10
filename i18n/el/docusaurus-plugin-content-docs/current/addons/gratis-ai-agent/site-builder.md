---
title: Orchestration v2 του Site Builder
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Το Site Builder Orchestration v2 (ενλήφθη στο Gratis AI Agent v1.4.0) είναι ο μηχανισμός που τροφοδοτεί τη δημιουργία ιστοσελίδων με πολλαπλά βήματα. Όταν ζητάτε από το agent να «χτίσει μια ιστοσελίδα για εστιατόριο» ή να «δημιουργήσει ένα portfolio με blog», ο orchestrator αναλύει αυτόν τον υψηλού επιπέδου στόχο σε ένα δομημένο **plan**, ανακαλύπτει τα plugins που χρειάζονται για να το επιτύχει, εκτελεί κάθε βήμα με τη σειρά, παρακολουθεί την πρόοδο και ανακτά αυτόνομα από λάθη.

---

## Πώς Λειτουργεί {#how-it-works}

### 1. Δημιουργία Plan (Plan Generation) {#1-plan-generation}

Όταν το agent λαμβάνει μια εντολή για τη δημιουργία ενός site, καλεί την ability `create_site_plan` για να παράγει ένα JSON **site plan**. Το plan περιγράφει:

- **Goal** — τι πρέπει να κάνει η τελική ιστοσελίδα
- **Phases** — τα βήματα που είναι ομαδοποιημένα και έχουν σειρά (π.χ. _Setup_, _Content Types_, _Design_, _Content_)
- **Steps** — οι μεμονωμένες κλήσεις ability μέσα σε κάθε phase
- **Plugin requirements** — τα plugins που πρέπει να είναι ενεργά για να εκτελεστούν ορισμένα βήματα
- **Fallbacks** — εναλλακτικά βήματα εάν αποτύχει ένα κύριο βήμα

**Παράδειγμα plan (αποτμημένο)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### 2. Plugin Discovery {#2-plugin-discovery}

Πριν ξεκινήσει η εκτέλεση, ο orchestrator σαρώνει τα `plugin_requirements` του plan και ελέγχει ποια plugins είναι ήδη ενεργά. Για τα λείποντα plugins, κάνει τα εξής:

1. Αναζητά το καταχωρητή μέσω του `recommend_plugin` για την καλύτερη επιλογή
2. Ζητά από το agent να επιβεβαιώσει την πρόταση
3. Ενεργοποιεί την εγκατάσταση εάν έχει εγκριθεί (ή αν η αυτόματη εγκατάσταση είναι ενεργή στις ρυθμίσεις)

Οι αποτυχίες αναγνώρισης plugins δεν είναι καταστροφικές — ο orchestrator σημειώνει τα επηρεασμένα βήματα ως `skipped` και συνεχίζει με τα υπόλοιπα βήματα του plan.

### 3. Plan Execution {#3-plan-execution}

Ο orchestrator καλεί το `execute_site_plan` με το plan ID. Η εκτέλεση προχωρά phase-by-phase, step-by-step:

- **Step references** (`__ref:` prefix) — τα βήματα μπορούν να αναφέρονται στις εξόδους προηγούμενων βημάτων. Στο παραπάνω παράδειγμα, το `__ref:create_menu.menu_id` αντικαθίσταται με το `menu_id` που επιστράφηκε από το βήμα `create_menu`.
- **Parallel steps** — τα βήματα εντός της ίδιας phase που δεν έχουν εξαρτήσεις μεταξύ τους εκτελούνται ταυτόχρονα όταν ο flag `parallel` είναι ενεργός.
- **Step timeout** — κάθε βήμα έχει ένα μεμονωμένο timeout (default: η ρύθμιση `Ability Timeout`). Ένα βήμα που έχει λήξει το χρόνο σημειώνεται ως `failed` και το plan συνεχίζει.

### 4. Progress Tracking {#4-progress-tracking}

Κλήστε το `get_plan_progress` οποιαδήποτε στιγμή για να ελέγξετε την κατάσταση εκτέλεσης:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

Οι χρήστες WP-CLI μπορούν να παρακολουθήσουν την πρόοδο με:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Error Recovery {#5-error-recovery}

Όταν αποτύχει ένα βήμα, ο orchestrator ελέγχει για ένα **fallback** βήμα που ορίστηκε στο plan:

- **Fallback available** — προσπαθείται αμέσως το fallback βήμα. Εάν πετύχει, η εκτέλεση συνεχίζεται. Εάν αποτύχει και αυτό, το βήμα σημειώνεται ως `failed` και η εκτέλεση συνεχίζεται με το επόμενο βήμα.
- **No fallback** — το βήμα σημειώνεται ως `failed`. Τα μη κρίσιμα βήματα παραλείπονται (skipped); τα κρίσιμα βήματα (marked `required: true`) σταματούν τη τρέχουσα phase και ενεργοποιούν μια προσπάθεια ανάκτησης σε επίπεδο phase.

Το agent αναφέρει όλες τις αποτυχίες στην τελική περίληψη του plan και μπορεί να προτείνει βήματα χειροκίνητης διόρθωσης για μη ανακτήσιμα λάθη.

---

## Site Plan Abilities {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Δημιουργεί ένα δομημένο site plan από μια περιγραφή στόχου σε φυσική γλώσσα.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Φυσική περιγραφή του επιθυμητού website |
| `style` | string | No | Προτίμηση οπτικού style: `minimal`, `bold`, `professional`, `playful`. Default: το agent επιλέγει βάσει του goal |
| `plugins` | array | No | Plugin slugs που πρέπει να περιλαμβάνονται στο plan. Ο orchestrator προσθέτει αυτόματα τα απαιτούμενα plugins. |
| `dry_run` | boolean | No | Εάν είναι `true`, επιστρέφει το JSON plan χωρίς να το αποθηκεύει ή να το εκτελεί. Default `false` |

**Returns** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Ξεκινά την εκτέλεση ενός προηγουμένως δημιουργημένου site plan.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Το ID του plan που πρέπει να εκτελεστεί |
| `auto_install_plugins` | boolean | No | Εάν είναι `true`, εγκαθιστά αυτόματα τα απαιτούμενα plugins χωρίς επιβεβαίωση. Default `false` |
| `max_retries` | integer | No | Ο αριθμός των φορών που πρέπει να επαναληφθεί ένα αποτυχημένο βήμα πριν προχωρήσει. Default `1` |

**Returns** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Επιστρέφει την τρέχουσα κατάσταση εκτέλεσης ενός site plan.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Το Plan ID που θέλετε να ελέγξετε |

**Returns** το object της πρόοδου που περιγράφεται στο [Progress Tracking](#4-progress-tracking) παραπάνω.

---

### `handle_plan_error` {#handleplanerror}

Διευθετεί χειροκίνητα ένα αποτυχημένο βήμα και συνεχίζει την εκτέλεση του plan από το επόμενο βήμα. Χρησιμοποιήστε αυτό όταν η αυτόματη ανάκτηση δεν ήταν δυνατή και θέλετε να παρέμβετε.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Το Plan ID |
| `step_id` | string | Yes | Το ID του αποτυχημένου βήματος |
| `resolution` | string | Yes | Ένα από τα `skip` (παραλείπει και συνεχίζει), `retry` (επανεκτελεί αμέσως το βήμα), ή `mark_done` (το αντιμετωπίζει ως επιτυχές χωρίς επανεκτέλεση) |

**Returns** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Σύγκριση v1 και v2 {#comparing-v1-and-v2}

| Feature | v1 | v2 |
|---|---|---|
| Multi-phase plans | No | Yes |
| Step output references (`__ref:`) | No | Yes |
| Plugin discovery | Manual | Automatic |
| Progress tracking API | No | Yes |
| Error recovery | Fail-and-stop | Fallback + continue |
| Parallel step execution | No | Yes (opt-in per phase) |
| WP-CLI plan commands | No | Yes |
| Benchmark integration | No | Yes (`q-restaurant-website`) |

---

## WP-CLI Plan Commands {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Δημιουργεί ένα site plan από μια περιγραφή στόχου.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Εκτελεί ένα προηγουμένως δημιουργημένο plan.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Εμφανίζει την τρέχουσα πρόοδο για ένα εκτελούμενο ή ολοκληρωμένο plan.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Λίσταρε όλα τα site plans (pending, in-progress, και completed).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Επαναφέρει ένα αποτυχημένο plan σε `pending` ώστε να μπορεί να εκτελεστεί ξανά από την αρχή.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
