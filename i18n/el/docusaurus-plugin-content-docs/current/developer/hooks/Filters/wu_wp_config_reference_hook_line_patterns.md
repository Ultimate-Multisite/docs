---
id: wu_wp_config_reference_hook_line_patterns
title: Φίλτρο - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Έλεγχουμε τρία μοτίβα για να καταλάβουμε πού μπορούμε να ενσωματώσουμε τις σταθερές μας:

1. Αναζητούμε τον ορισμό του μεταβλητού `$table_prefix`; 2. Αναζητούμε πιο σύνθετους ορισμούς του `$table_prefix` — αυτοί που χρησιμοποιούν μεταβλητές περιβάλλοντος (env variables), για παράδειγμα; 3. Αν αυτό δεν είναι διαθέσιμο, ψάχνουμε για το σχόλιο 'Happy Publishing'; 4. Αν και αυτό δεν είναι διαθέσιμο, ψάχνουμε για την αρχή του αρχείου. Το key αντιπροσωπεύει το μοτίβο και το value τον αριθμό των γραμμών που πρέπει να προστεθούν. Μπορεί να περαστεί αρνητικός αριθμός γραμμών για να γράψει πριν από τη γραμμή που βρέθηκε, αντί να γράψει μετά από αυτήν.

### Πηγή

Ορίζεται στο [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) στην γραμμή 143
