---
title: Ενσωματωμένοι Πράκτορες
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Ενσωματωμένοι Agents

Το Gratis AI Agent v1.9.0 περιλαμβάνει πέντε ενσωματωμένους agents, καθένας από τους οποίους είναι προσαρμοσμένος με ένα συγκεκριμένο σύνολο εργαλείων, ένα προσαρμοσμένο system prompt και προτεινόμενες εκκινήσεις που ταιριάζουν σε συνηθισμένες εργασίες αυτού του τομέα. Το εναλλαγή μεταξύ των agents αλλάζει αυτό που μπορεί να κάνει το assistant και πώς απαντά — χωρίς να χρειάζεται να κάνετε οποιαδήποτε ρύθμιση.

## Τι είναι ένας Agent;

Κάθε agent είναι ένα προφίλ διαμόρφωσης με όνομα που συνδυάζει:

- **Tools** — τις ικανότητες που επιτρέπεται να καλέσει ο agent (π.χ. ένας Content Writer έχει πρόσβαση σε ικανότητες δημιουργίας περιεχομένου· ένα Design Studio έχει πρόσβαση σε ικανότητες CSS και theme.json)
- **System prompt** — οδηγίες που καθορίζουν το ύφος, τις προτεραιότητες και τα όρια του agent
- **Suggestions** — προ-γεγραμμένα prompts που εμφανίζονται στην διεπαφή chat για να σας βοηθήσουν να ξεκινήσετε γρήγορα

## Πρόσβαση στον Agent Picker

1. Ανοίξτε το πάνελ **Gratis AI Agent** στην πλαϊνή γραμμή του WordPress admin.
2. Κάντε κλικ στο **agent icon** στην πάνω αριστερή γωνία του κεφαλίδας chat (το εικονίδιο αλλάζει για να αντικατοπτρίζει τον ενεργό agent).
3. Το **Agent Picker** ανοίγει ως ένα overlay τύπου φόρμα-πίνακας. Κάθε agent αναγράφεται με το εικονίδιο, το όνομά του και μια περιγραφή σε μία γραμμή.
4. Κάντε κλικ σε μια γραμμή agent για να τον ενεργοποιήσετε. Η κεφαλίδα chat ενημερώνεται αμέσως.

Μπορείτε επίσης να αλλάξετε agents ενδιάμεσα στη συνομιλία — το system prompt του νέου agent τίθεται σε λειτουργία από το επόμενο μήνυμα.

## Οι Πέντε Ενσωματωμένοι Agents

### Content Writer

**Εστίαση:** Δημιουργία και επεξεργασία posts, pages και contact forms.

**Διαθέσιμα tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Τι κάνει καλά:**
- Σύνταξη και δημοσίευση blog posts από μια περίληψη ή περίγραμμα
- Δημιουργία παρτίδων landing pages για ένα νέο site
- Δημιουργία contact και enquiry forms
- Ρύθμιση featured images σε posts από URL ή αναζήτηση

**Προτεινόμενες εκκινήσεις:**
- *Γράψε ένα blog post 500 λέξεων για τα οφέλη του WordPress multisite.*
- *Δημιούργησε μια σελίδα «Σχετικά», μια σελίδα «Υπηρεσίες» και μια σελίδα «Επικοινωνία» και δημοσίευσέ τα.*
- *Πρόσθεσε ένα form για αιτήματα κρατήσεων στη σελίδα «Επικοινωνία».*

---

### Site Builder

**Εστίαση:** Δημιουργία ιστοσελίδων από την αρχή μέχρι το τέλος από ένα μόνο prompt.

**Διαθέσιμα tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Τι κάνει καλά:**
- Δημιουργία ενός σχεδίου site build πολλαπλών φάσεων για έναν περιγραφόμενο τύπο επιχείρησης
- Εκτέλεση κάθε φάσης αυτόνομα — δομή, περιεχόμενο, πλοήγηση, σχεδιασμός
- Ανάκτηση από λάθη ενδιάμεσα στο σχέδιο χωρίς να απαιτείται χειροκίνηczna παρέμβαση
- Εγκατάσταση προτεινόμενων plugins ως μέρος του build
- Δημιουργία contact forms απευθείας από τη διεπαφή chat (Superdav AI Agent v1.10.0+)

**Προτεινόμενες εκκινήσεις:**
- *Δημιούργησε ένα site portfolio για φωτογράφους με post type gallery, σελίδα κρατήσεων και contact form.*
- *Δημιούργησε ένα site για εστιατόριο με online μενού, ώρες λειτουργίας και form για κράτηση τραπεζίου.*
- *Ρύθμισε ένα site για ελεύθερους επαγγελματίες που κάνουν consulting με σελίδες υπηρεσιών, section portfolio και blog.*
- *Πρόσθεσε ένα contact form στη σελίδα «Επικοινωνία» χρησιμοποιώντας το site builder.*

---

### Design Studio

**Εστίαση:** Οπτική προσαρμογή — χρώματα, γραμματοσειρές, CSS και block patterns.

**Διαθέσιμα tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Τι κάνει καλά:**
- Εφαρμογή ονοματοδοτημένων theme presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Βελτιστοποίηση των global typography και των παλετών χρωμάτων μέσω theme.json
- Ενσωμάτωση custom CSS για προσαρμογές ειδικές για το brand
- Λήψη screenshot μιας σελίδας και αναθεώρησή της για σχεδιαστικά προβλήματα

**Προτεινόμενες εκκκινήσεις:**
- *Εφάρμοσε το preset warm-editorial και μετά ρύθμισε το κύριο χρώμα στο #2d6a4f.*
- *Λήψε ένα screenshot της αρχικής σελίδας και πες μου τι θα βελτίωσες.*
- *Δημιούργησε ένα επαναχρησιμοποιήσιμο hero block pattern με φόντο εικόνα ολόκληρου του πλάτους και κεντραρισμένο τίτλο.*

---

### Plugin Manager

**Εστίαση:** Ανακάλυψη, εγκατάσταση και διαχείριση WordPress plugins.

**Διαθέσιμα tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Τι κάνει καλά:**
- Προτάσεις του καλύτερου plugin για μια περιγραφόμενη περίπτωση χρήσης
- Εγκατάσταση ability packs από το registry
- Περιήγηση του διαθέσιμου καταλόγου abilities ανά κατηγορία

**Προτεινόμενες εκκινήσεις:**
- *Ποιο είναι το καλύτερο plugin για έναν κατάλογο μελών;*
- *Εγκατάστησε το ability pack του WooCommerce.*
- *Δείξε μου όλα τα διαθέσιμα ability packs για e-commerce.*

---

### Support Assistant

**Εστίαση:** Απάντηση σε ερωτήσεις σχετικά με το περιεχόμενο του site, τις ρυθμίσεις και τη διαμόρφωση του WordPress.

**Διαθέσιμα tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Τι κάνει καλά:**
- Αναζήτηση των τρεχουσών ρυθμίσεων και επιλογών του site
- Επεξήγηση τι είναι τα post types, taxonomies και menus που είναι ρυθμισμένα στο site
- Απάντηση σε ερωτήσεις τύπου «τι κάνει αυτή η ρύθμιση;» διαβάζοντας ζωντατικές τιμές
- Λειτουργία ως read-only diagnostic layer πριν από οποιεσδήποτε αλλαγές

**Προτεινόμενες εκκινήσεις:**
- *Ποια plugins και ρυθμίσεις είναι ενεργά αυτή τη στιγμή σε αυτό το site;*
- *Λίσταρε όλα τα custom post types που είναι ρυθμισμένα σε αυτό το site.*
- *Ποια navigation menus υπάρχουν και πού είναι назнаρισμένα;*

---

## Προσαρμογή των Agents

Κάθε ενσωματωμένος agent μπορεί να επεκταθεί ή να αντικατασταθεί μέσω του filter `gratis_ai_agent_agents`.

### Προσθήκη ενός custom system prompt σε έναν υπάρχοντα agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Καταχώριση ενός νέου agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Ο νέος agent εμφανίζεται στον Agent Picker αμέσως μετά την εκτέλεση του filter.

### Αφαίρεση ενός ενσωματωμένου agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
