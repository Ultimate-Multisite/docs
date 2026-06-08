---
title: Ενημερωτικό αρχείο
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog

## 1.9.0 — Αναβλήθηκε στις 2026-04-28

### Νέα

- **Ικανότητα `create_contact_form`** — δημιουργεί ένα φόρμα επικοινωνίας χρησιμοποιώντας το ενεργό plugin φόρμα (Contact Form 7, WPForms, Fluent Forms ή Gravity Forms) και επιστρέφει ένα shortcode έτοιμο να ενσωματωθεί σε οποιοδήποτε post ή σελίδα.
- **Ικανότητα `set_featured_image`** — εκχωρεί μια κύρια εικόνα σε ένα post ή σελίδα χρησιμοποιώντας έναν υπάρχοντα Media Library attachment ID ή μια απομακρυσμένη URL· εισάγει αυτόματα την εικόνα όταν παρέχεται μια URL.
- **Ικανότητα `batch_create_posts`** — δημιουργεί πολλαπλά posts με μία μόνο κλήση ικανότητας. Υποστηρίζει τα ίδια παραμέτρων με το `create_post`, αναφέρει την επιτυχία/αποτυχία ανά post και έχει μια προαιρετική λειτουργία `stop_on_error`.
- **Παράμετρος `page_template`** — προστέθηκε στο `create_post` και στο `update_post`. Εκχωρεί ένα αρχείο page template σε PHP (π.χ. `page-full-width.php`) κατά τη δημιουργία ή την ενημέρωση. Παραδώστε μια κενή συμβολοσειρά στο `update_post` για να επιστρέψετε στο default του theme.
- **Ικανότητες στιγμιότυπων οθόνης από την πλευρά του πελάτη** — `capture_screenshot`, `compare_screenshots` και `review_page_design`. Λαμβάνουν στιγμιότυπα οθόνης πλήρους ή viewport από ζωντανές σελίδες μέσω ενός server-side headless browser, συγκρίνουν δύο στιγμιότυπα οθόνης και λαμβάνουν μια αναθεώρηση σχεδιασμού που παράγεται από AI, καλύπτοντας διάταξη, γραμματοσειρές, χρώμα και προσβασιμότητα.
- **Πέντε ενσωματωμένοι agents** — Content Writer, Site Builder, Design Studio, Plugin Manager και Support Assistant. Κάθε agent έχει ένα αποκλειστικό σύνολο εργαλείων, ένα προσαρμοσμένο system prompt και προτεινόμενες εκκινήσεις. Εναλλάσσονται μέσω του νέου **Agent Picker** στην κεφαλίδα του chat. Δείτε τους [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Feature flags** — μια νέα καρτέλα **Settings → Feature Flags** με διακόπτες ελέγχου πρόσβασης (περιορισμός σε διαχειριστές, περιορισμός σε διαχειριστές δικτύου, πρόσβαση συνδρομητών, απενεργοποίηση για μη μέλη) και επιλογές branding (κρύψει την αναγνώριση στο footer, προσαρμοσμένο όνομα agent, κρύψει τον agent picker, χρησιμοποιεί το site icon ως avatar chat). Δείτε τις [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Επαναφορά τελευταίας συνεδρίας** — το πάνελ chat φορτώνει πλέον αυτόματα τη πιο πρόσφατη συνομιλία κατά το φόρτωση της σελίδας και κατά την άνοιγμα του widget, ώστε το πλαίσιο (context) να μην χαθεί ποτέ κατά την πλοήγιση μεταξύ σελίδων.
- **Σύνδεσμοι δράσης plugins** — οι γρήγοροι σύνδεσμοι στις Settings και στο Abilities Registry εμφανίζονται πλέον στη σελίδα **Plugins → Installed Plugins** κάτω από την περιγραφή του plugin.

### Βελτιωμένο

- **Επαναπροσδιορισμός πηγής εικόνας** — ο agent προσπαθεί ξανά όλες τις ρυθμισμένες δωρεάν πηγές εικόνων πριν επιστρέψει σε μια εικόνα που παράγεται από AI σε περίπτωση αποτυχίας λήψης.
- **Πάνελ πληροφοριών μοντέλου** — εμφανίζεται πάντα στην κεφαλίδα του chat· δεν κρύβεται πλέον μετά το πρώτο μήνυμα.
- **Συμπεριφορά αυτόματου scroll** — το αυτόματο scroll σταματά όταν ο χρήστης κάνει scroll προς τα πάνω για να διαβάσει· εμφανίζεται και απομακρύνεται αυτόματα ένα αιωρούμενο κουμπί **Scroll to bottom** όταν ο χρήστης φτάσει στο τελευταίο μήνυμα.
- **UI του Agent Picker** — ανακατασκευάστηκε ως overlay τύπου form-table με εικονίδια ανά agent, καθιστώντας ευκολότερη την ταυτοποίηση και την εναλλαγή των agents με μια ματιά.
- **Lazy-loaded JS chunks** — το αρχικό JavaScript bundle του chat widget χωρίζεται πλέον σε lazy-loaded chunks, μειώνοντας τα αρχικά μεγέθη των bundles κατά 75–90%.
- **Redesign του chat widget** — το ενιαίο εικονίδιο AI αντικαθιστά το προηγούμενο προσαρμοσμένο avatar· είναι συνεπές με το σύστημα ενσωματωμένων agents.
- **Linkification των URL** — οι URL που εμφανίζονται στα μηνύματα του συστήματος και στα φυσαλίδες μηνυμάτων σφάλματος εμφανίζονται πλέον ως κάνσιμα clickable links.

### Διορθωμένο

- **Ανακαλυπτικότητα abilities** — διορθώθηκαν οι περιγραφές, οι αναφορές system prompt και η ευθυγράμμιση namespace ώστε όλες οι ικανότητες να εμφανίζονται αξιόπιστα στη λίστα εργαλείων του agent.
- **Cache providers** — οι providers πλέον αποθηκεύονται σε cache σε όλο το site μέσω ενός version counter, αποτρέποντας τα προβλήματα παλαιών providers σε multisite networks.
- **`ability_invalid_output`** — επιλύθηκε σε 12 handlers abilities· όλα επιστρέφουν σωστά δομημένες απαντήσεις JSON.
- **Pipeline `pending_client_tool_calls`** — συνδέθηκε end-to-end ώστε οι κλήσεις εργαλείων από την πλευρά του πελάτη να ολοκληρώνονται σωστά και να επιστρέφουν τα αποτελέσματα στο μοντέλο.
- **History drawer** — οι μη αναστρέψιμες αλλαγές εξαιρούνται από τη λίστα αναστροφής· ο σύνδεσμος **View full history** λειτουργεί πλέον σωστά.
- **Σύστημα αλλαγών/αναστροφής** — διορθώθηκαν πέντε ξεχωριστά bugs και ενσωματώθηκαν κάτω από τη νέα διεπαφή διαχείρισης.
- **Toast Save Settings** — η ειδοποίηση snackbar εμφανίζεται πλέον αξιόπιστα μετά το πάτημα **Save Settings**.
- **Context menu Trash** — προστέθηκε η επιλογή **Delete Permanently** ώστε τα στοιχεία να μπορούν να διαγραφούν πλήρως χωρίς να αφήνουν τη προβολή του trash.
- **Edit & resend** — το πάτημα του εικονιδίου edit εισέρχεται πλέον σε λειτουργία επεξεργασίας μόνο για το πατημένο μήνυμα, και όχι για όλα τα μηνύματα στη συνομιλία.
- **Ύψος διάταξης chat** — το πάνελ chat προσαρμόζει το ύψος του όταν εμφανίζονται περιεχόμενα που εισάγονται από plugins (admin notices, banners) πάνω από τη σελίδα, αποτρέποντας την περιοχή εισαγωγής να σπρώχτεί εκτός οθόνης.

---

## 1.4.0 — Αναβλήθηκε στις 2026-04-09

### Νέα

- **Εντολή benchmark του WP-CLI** (`wp gratis-ai-agent benchmark`) — εκτελεί το benchmark suite v1 του Agent Capabilities από την γραμμή εντολών για pipelines CI και ροές εργασίας αξιολόγησης μοντέλων. Υποστηρίζει εκτελέσεις ανά ερώτηση, παρακάμψεις provider/model και έξοδο JSON/CSV.
- **Benchmark suite v1 του Agent Capabilities** — ένα δομημένο σύνολο σύνθετων, πολλαπλών βημάτων prompts που ασκούν ολόκληρη την επιφάνεια ικανοτήτων, με βαθμολογία και αναφορά tokens/διάρκειας.
- **Ικανότητες για Τύπους Προστατικών (Custom Post Type)** — `register_post_type`, `list_post_types`, `delete_post_type`. Οι καταregistρώσεις διατηρούνται μετά από επανεκκίνηση μέσω του options table.
- **Ικανότητες για Ταξινομίες (Custom Taxonomy)** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Υποστηρίζει και τα سلسلهμεριακά και τα επίπεδα ταξινομίες με προαιρετικά rewrite slugs.
- **Ικανότητες Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Περιλαμβάνει πέντε επιλεγμένα presets: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Ικανότητες Γενικών Στυλ (Global Styles)** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Διαβάζει και γράφει τιμές theme.json μέσω του WordPress Global Styles API.
- **Ικανότητα Διαχείρισης Μενού Πλοήγησης** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Υποστηρίζει μενού με κλάδους και εκχώρηση θέσης theme.
- **Ικανότητα Διαχείρισης Επιλογών (Options Management)** — `get_option`, `set_option`, `delete_option`, `list_options`. Περιλαμβάνει μια ενσωματωμένη λίστα ασφαλείας (blocklist) που προστατεύει κρίσιμες επιλογές WordPress από τροποποίηση.
- **Καταχωρημένο Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Ανακαλύπτουν και ενεργοποιούν πακέτα ικανοτήτων που διανέμονται ως plugins του WordPress.
- **Orchestration του Site Builder v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Πολλαπλές φάσεις σχεδιασμού site build με ανακάλυψη plugins, αναφορές εξόδου βημάτων, παρακολούθηση προόδου και αυτόμακη ανάκαμψη σφαλμάτων.
- **Ερώτηση benchmark για ιστοσελίδα εστιατορίου** (`q-restaurant-website`) — end-to-end test που καλύπτει την καταχώριση CPT, το design system, το menu και την ανακάλυψη plugins.
- **Plugins συνδέσμου AI provider** προστέθηκαν στα blueprints του WordPress Playground για ταχύτερη ρύθμιση τοπικής ανάπτυξης.

### Βελτιωμένο

- Το README ενημερώθηκε με τεκμηρίωση και οδηγίες ρύθμισης για τα AI provider connector.

### Διορθωμένο

- Διορθώθηκαν 25 αποτυχίες δοκιμών PHPUnit στην κύρια (main) κλάδο.
- Το format URL των εκδόσεων GitHub στο `blueprint.json` διορθώθηκε.
- Αριθμητοδότηση Task ID για την αποφυγή συγκρούσεων με παλιά IDs.

---

## 1.3.x

_Οι σημειώσεις των προηγούμενων εκδόσεων διατηρούνται στο repository του plugin._
