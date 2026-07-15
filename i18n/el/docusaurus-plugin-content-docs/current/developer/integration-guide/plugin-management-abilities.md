---
title: Ικανότητες Διαχείρισης Plugins
sidebar_position: 4
_i18n_hash: ef90f5181e76f8b1a3209101eded0653
---
# Ικανότητες Διαχείρισης Plugins

Το Gratis AI Agent v1.5.0 διαθέτει **7 ικανότητες διαχείρισης plugins** που το AI assistant μπορεί να καλέσει κατά τη διάρκεια μιας συνομιλίας. Αυτές οι ικανότητες παρέχουν προγραμματιστικό έλεγχο των plugins WordPress που έχουν εγκατασταθεί μέσω του [Plugin Builder & Sandbox System](../../user-guide/administration/plugin-builder-and-sandbox).

## Γενική Επισκόπηση Ικανοτήτων {#abilities-overview}

| Ικανότητα | Slug | Περιγραφή |
|---|---|---|
| List Plugins | `list_plugins` | Επιστρέφει μια λίστα με τα plugins που βρίσκονται στο sandbox store, μαζί με την κατάστασή τους. |
| Get Plugin | `get_plugin` | Ανάβλεπε τα metadata και το κώδικα πηγής για ένα συγκεκριμένο plugin βάσει slug. |
| Create Plugin | `create_plugin` | Δημιουργεί ένα νέο plugin από μια περιγραφή και το αποθηκεύει στο sandbox. |
| Update Plugin | `update_plugin` | Αντικαθιστά τον κώδικα πηγής ενός plugin με μια νέα έκδοση. |
| Delete Plugin | `delete_plugin` | Αφαιρεί ένα plugin από το sandbox store. Απενεργοποιεί πρώτα. |
| Install Plugin | `install_plugin` | Εγκαθιστά ένα plugin που βρίσκεται στο sandbox στο live directory των plugins του WordPress. |
| Activate Plugin | `activate_plugin` | Ενεργοποιεί ένα plugin που βρίσκεται στο sandbox στο περιβάλλον sandbox του wp-env. |

## API Εγκατάστασης Plugins {#plugin-installer-api}

Ο μηχανισμός εγκατάστασης plugins διαχειρίζεται τις λειτουργίες του file system όταν εγκαθιστά ή αφαιρεί plugins. Οι βασικές λειτουργίες είναι:

- **Επικύρωση Διαδρομής (Path validation)**: Όλες οι διαδρομές των plugins επικυρώνονται έναντι του επιτρεπούς καταλόγου plugins πριν από οποιαδήποτε καταγραφή αρχείου. Απορρίπτονται οι προσπάθειες περιήγησης καταλόγων (Directory traversal).
- **Εγκατάσταση Πολλαπλών Αρχείων (Multi-file install)**: Ένα plugin μπορεί να αποτελείται από πολλά αρχεία. Ο εγκαταστάτης δημιουργεί τον κατάλογο του plugin και γράφει όλα τα αρχεία ταυτόχρονα (atomically).
- **Ενημέρωση (Update)**: Αντικαθιστά τα υπάρχοντα αρχεία του plugin. Απενεργοποιεί το plugin πριν από τη συγγραφή για να αποφευχθούν τα σφάλματα με μερικό state.
- **Διαγραφή βάσει slug**: Εντοπίζει τον κατάλογο του plugin βάσει slug, το απενεργοποιεί σε όλα τα sites, και στη συνέχεια αφαιρεί τον κατάλογο.

### Καταγραφή Χειριστή Προσαρμοσμένης Εγκατάστασης {#registering-a-custom-install-handler}

Μπορείτε να συνδέσετε (hook) στον κύκλο ζωής της εγκατάστασης χρησιμοποιώντας τις ενέργειες `gratis_ai_plugin_installer_before_install` και `gratis_ai_plugin_installer_after_install`:

```php
add_action('gratis_ai_plugin_installer_before_install', function(string $slug, array $files): void {
    // $slug: το όνομα καταλόγου του plugin
    // $files: συνδεδεμένο array με relative path => περιεχόμενο αρχείου
    error_log("Installing plugin: {$slug} with " . count($files) . " files.");
}, 10, 2);

add_action('gratis_ai_plugin_installer_after_install', function(string $slug, bool $success): void {
    if ($success) {
        error_log("Plugin {$slug} installed successfully.");
    }
}, 10, 2);
```

## Κατάλογος Οικοσυστήματος (Ecosystem Registry) {#ecosystem-registry}

Οι ικανότητες καταγράφονται μέσω του **καταλόγου οικοσυστήματος plugins**. Ο κατάλογος αντιστοιχίζει τα slugs των ικανοτήτων στις κλάσεις των χειριστών τους και τα εκθέτει στον διαχειριστή εργαλείων (tool dispatcher) του AI agent.

Για να καταγράψετε μια προσαρμοσμένη ικανότητα διαχείρισης plugins:

```php
add_filter('gratis_ai_plugin_abilities', function(array $abilities): array {
    $abilities['my_custom_ability'] = [
        'class'       => My_Custom_Plugin_Ability::class,
        'label'       => 'My Custom Ability',
        'description' => 'Does something useful with plugins.',
    ];
    return $abilities;
});
```

Η κλάση ικανότητας σας πρέπει να υλοποιεί το `Gratis_AI_Ability_Interface`:

```php
class My_Custom_Plugin_Ability implements Gratis_AI_Ability_Interface {

    public function get_slug(): string {
        return 'my_custom_ability';
    }

    public function get_schema(): array {
        return [
            'name'        => 'my_custom_ability',
            'description' => 'Does something useful with plugins.',
            'parameters'  => [
                'type'       => 'object',
                'properties' => [
                    'slug' => [
                        'type'        => 'string',
                        'description' => 'The plugin slug to operate on.',
                    ],
                ],
                'required' => ['slug'],
            ],
        ];
    }

    public function execute(array $params): array {
        $slug = sanitize_key($params['slug'] ?? '');
        // ... your implementation ...
        return ['success' => true, 'slug' => $slug];
    }
}
```

## Ενσωμάτωση HookScanner {#hookscanner-integration}

Οι ικανότητες `create_plugin` και `update_plugin` εκτελούν αυτόματα το **HookScanner** έναντι του νέου κώδικα. Το HookScanner επιστρέφει μια λίστα με τα action και filter hooks του WordPress που έχουν καταγραφεί από το plugin.

Για να ανακτήσετε τα αποτελέσματα του HookScanner προγραμματικά:

```php
$scanner = new Gratis_AI_Hook_Scanner();
$hooks   = $scanner->scan_plugin_slug('my-generated-plugin');

foreach ($hooks['actions'] as $hook) {
    echo "Action: {$hook['hook']} — callback: {$hook['callback']}\n";
}

foreach ($hooks['filters'] as $hook) {
    echo "Filter: {$hook['hook']} — callback: {$hook['callback']}\n";
}
```

Το HookScanner παρακάμπτει αυτόματα τους καταλόγους `vendor/` και `node_modules/`.

## Αρχιτεκτονική Ασύγχρονων Εργασιών (Async Job Architecture) {#async-job-architecture}

Οι μακροχρόνιες λειτουργίες των plugins (δημιουργία, εγκατάσταση) αποστέλλονται ως **async jobs** με παρακολούθηση της πρόοδου σε πραγματικό χρόνο. Η διεπαφή chat του AI κάνει polling για την πρόοδο και μεταδίδει ενημερώσεις κατάστασης στον χρήστη:

1. **Dispatch** — η ικανότητα δημιουργεί ένα async job και επιστρέφει ένα job ID.
2. **Poll** — το agent κάνει polling στο `gratis_ai_job_status($job_id)` κάθε 2 δευτερόλεπτα.
3. **Stream** — τα ενδιάμεσα μηνύματα πρόοδου στέλνονται στη ροή του chat.
4. **Complete** — το τελικό αποτέλεσμα (επιτυχία ή σφάλμα) επιστρέφεται και εμφανίζεται.

Για να συνδεθείτε σε γεγονότα κύκλου ζωής των jobs:

```php
add_action('gratis_ai_job_started', function(string $job_id, string $ability_slug): void {
    error_log("Job {$job_id} started for ability: {$ability_slug}");
}, 10, 2);

add_action('gratis_ai_job_completed', function(string $job_id, array $result): void {
    error_log("Job {$job_id} completed. Success: " . ($result['success'] ? 'yes' : 'no'));
}, 10, 2);
```
