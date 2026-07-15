---
title: Αναφορά Ικαν οτήτων
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Αναφορά Ικανουσιών

Οι ικανότητες είναι οι ατομικές ενέργειες που μπορεί να ενεργοποιήσει το Gratis AI Agent στην εγκατάστασή σας WordPress. Κάλλη ικανότητα είναι μια καταχωρημένη PHP κλάση που αποκαλύπτει ένα JSON schema — ο agent διαβάζει αυτό το schema κατά τη runtime για να καταλάβει ποιες παραμέτρους απαιτούνται και τι επιστρέφει η ικανότητα.

Σε αυτή τη σελίδα περιγράφονται όλες οι ικανότητες που συνοδεύουν το Gratis AI Agent v1.9.0.

---

## Custom Post Types (Ειδικοί Τύποι Σελίδων) {#custom-post-types}

Αυτές οι ικανότητες διαχειρίζονται τους ειδικούς τύπους σελίδων (CPTs) που καταχωρούνται μέσω του agent. Οι καταχωρήσεις αποθηκεύονται στην αντλία επιλογών (options table) του WordPress, οπότε παραμένουν ακόμα και μετά την απενεργοποίηση και επαναενεργοποίηση του plugin.

### `register_post_type` {#registerposttype}

Καταχωρεί έναν νέο ειδικό τύπο σελίδας.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `slug` | string | Ναι | Η κλειδί τύπου ανάρτησης (max 20 χαρακτήρες, χωρίς κεφαλαία, χωρίς κενά) |
| `singular_label` | string | Ναι | Ανθρώπινη ονομασία του πληθυντικού, π.χ. `Portfolio Item` |
| `plural_label` | string | Ναι | Ανθρώπινη ονομασία του πληθυντικού, π.χ. `Portfolio Items` |
| `public` | boolean | Όχι | Εάν ο τύπος ανάρτησης είναι προσβάσιμο στο δημόσιο. Προεπιλογή `true` |
| `supports` | array | Όχι | Χαρακτηριστικά που υποστηρίζονται: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Προεπιλογή `["title","editor"]` |
| `has_archive` | boolean | Όχι | Εάν είναι ενεργή η σελίδα αρχείου του τύπου ανάρτησης. Προεπιλογή `false` |
| `menu_icon` | string | Όχι | Κλάση Dashicons ή URL για το εικονίδιο του συνόλου διαχειριστή. Προεπιλογή `"dashicons-admin-post"` |
| `rewrite_slug` | string | Όχι | Η URL slug για τον τύπο ανάρτησης. Προεπιλογή είναι η `slug` |

**Παράδειγμα**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**Επιστρέφεται** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Επιστρέφει όλους τους τύπους ανάρτησης που έχουν καταχωρηθεί από τον agent.

**Παράμετροι** — κανένας

**Επιστρέφεται**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

### `delete_post_type` {#deleteposttype}

Αποрегистрирует ένα προσαρμοσμένο post type που καταχωρήθηκε από τον agent. Τα υπάρχοντα bàiς αυτού παραμένουν στη βάση δεδομένων αλλά δεν είναι πλέον προσβάσιμο μέσω του post type.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `slug` | string | Ναι | Η κλειδί του post type που θέλεις να αφαιρέσεις |

**Επιστροφή** `{ "success": true, "slug": "portfolio" }`

---

## Custom Taxonomies (Προσαρμοσμένες Ταξινόμημα) {#custom-taxonomies}

Αυτές οι δυνατότητες διαχειρίζονται τα προσαρμοσμένα ταξινόμημα. Όπως και τα CPTs, οι καταχωρήσεις των ταξινόμησης διατηρούνται.

### `register_taxonomy` (Εντοπισμός Ταξινόμησης) {#registertaxonomy}

Καταχωρεί ένα νέο προσαρμοσμένο taxonomy.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `slug` | string | Ναι | Η κλειδί του taxonomy (έως 32 χαρακτήρες) |
| `singular_label` | string | Ναι | Ο ανθρώπινος ονομαστικός τίτλος, π.χ. `Κατηγορία Έργου` |
| `plural_label` | string | Ναι | Ο ανθρώπινος πολλαπλασιαστικός τίτλος, π.χ. `Κατηγορίες Έργων` |
| `post_types` | array | Ναι | Οι slugs των post types στα οποία πρέπει να συνδεθεί αυτό το taxonomy |
| `hierarchical` | boolean | Όχι | `true` για στυλ κατηγορίας, `false` για στυλ tags. Προεπιλογή `true` |
| `public` | boolean | Όχι | Εάν οι όροι είναι δημόσιοι προσβάσιμοι. Προεπιλογή `true` |
| `rewrite_slug` | string | Όχι | Η URL slug του taxonomy. Προεπιλογή είναι το `slug` |

**Παράδειγμα**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Επιστροφή** `{ "success": true, "slug": "project-category" }`

### `list_taxonomies` {#listtaxonomies}

Επιστρέφει όλες τις προσαρμοσμένες ταξινόμησης (custom taxonomies) που έχουν καταχωρηθεί από τον agent.

**Παράμετροι** — καμία

**Επιστροφή**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy` {#deletetaxonomy}

Ανατοχίζει μια προσαρμοσμένη ταξινόμηση που καταχωρήθηκε από τον agent.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `slug` | string | Ναι | Η κλειδί ταξινόμησης που θέλετε να αφαιρέσετε |

**Επιστροφή** `{ "success": true, "slug": "project-category" }`

---

## Design System {#design-system}

Οι δυνατότητες του Design System τροποποιούν την οπτική παρουσίαση του WordPress site — από το custom CSS μέχρι τα block patterns και το logo του site.

### `inject_custom_css` {#injectcustomcss}

Προσθέτει CSS στο `<head>` του site μέσω της συνάρτησης `wp_add_inline_style`. Το CSS αποθηκεύεται στην επιλογή (option) `gratis_ai_agent_custom_css` και αφαιρείται καθαρά όταν η δυνατότητα επαναφέρεται.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `css` | string | Ναι | Εγκυνού CSS για εισαγωγή |
| `label` | string | Όχι | Ανθρώπινη αναγνώσιμη ετικέτα για αυτό το block CSS, χρησιμοποιείται στα debug logs. Προεπιλογή `"agent-injected"` |
| `replace` | boolean | Όχι | Εάν είναι `true`, αντικαθιστά όλο το CSS που εισήχθη από προηγού παλαιότερα. Προεπιλογή `false` (προσθέτει) |

**Παράδειγμα**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Επιστροφή** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Εντοπίζει ένα επαναχρησιμοποιούμενο μοτίβο block στην βιβλιοθήκη patterns του WordPress.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `slug` | string | Ναι | Αναγνωριστικό μοτίβου, π.χ. `gratis/hero-dark` |
| `title` | string | Ναι | Ο ανθρώπινος ορατός όρος του μοτίβου που εμφανίζεται στον editor |
| `content` | string | Ναι | Αποσυμπιεσμένο markup block (HTML) για το μοτίβο |
| `categories` | array | Όχι | Slugs των κατηγοριών του μοτίβου, π.χ. `["featured", "hero"]` |
| `description` | string | Όχι | Κλήση περιγραφής που εμφανίζεται στο επιλογικό παράθυρο μοτίβων |
| `keywords` | array | Όχι | Λέξεις-κλειδιά αναζήτησης |

**Επιστροφή** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Εμφανίζει όλα τα block patterns που έχουν καταχωρηθεί από τον agent.

**Παράμετροι** — κανένας

**Επιστροφή**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo` {#setsitelogo}

Συμπυρώνει το logo του WordPress σε ένα δεδομένο attachment ID ή μια απομακρυσμένη URL εικόνας. Όταν παρέχεται URL, η εικόνα κατεβάζεται και εισάγεται στη Media Library.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `attachment_id` | integer | Όχι | ID μιας υπάρχουσας καταχώρησης στη Media Library |
| `url` | string | Όχι | URL απομακρυσμένης εικόνας για εισαγωγή και ως logo |

Πρέπει να παρέχετε είτε το `attachment_id` είτε την `url`.

**Επιστροφή** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Εφαρμόζει ένα προκαθορισμένο πακέτο χρώματος/τυπογραφίας σε το `theme.json` (ή `global-styles`) του ενεργού θέματος. Τα presets είναι συνδυαστικά πακέτα που διατηρούνται από την ομάδα Gratis AI Agent.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `preset` | string | Ναι | Όνομα του preset, π.χ. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Όχι | Αν είναι `true`, συνδυάζεται με τις υπάρχουσες τιμές αντί να αντικαθίσταται. Ελάχιστη τιμή: `false` |

**Διαθέσιμα presets**

| Preset | Περιγραφή |
|---|---|
| `minimal-dark` | Φόντο σχεδόν μαύρο, λευκό κείμενο, μία χρώμα έμφασης |
| `warm-editorial` | Ζεστό οξωτικό φόντο, serif τίτλοι, γήινα χρώματα έμφασης |
| `corporate-blue` | Παλέτα navy και λευκού με επαγγελματική τυπογραφία |
| `vibrant-startup` | Σοβαρά γραμμογραμμές (gradients), στρογγυλεμένες γωνίες, σύγχρονη sans-serif γραμματοσειρά |
| `classic-blog` | Νευροχρωματικά γκρι, άνετη γραμμή ανάγνωσης, παραδοσιακή διαρρύθμιση κειμένου |

**Επιστροφή** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Οι δυνατότητες Global Styles διαβάζουν και γράφουν τιμές στο `theme.json` μέσω της WordPress Global Styles API, επηρεάζοντας όλα τα blocks και τα templates σε όλο το site.

### `get_global_styles` {#getglobalstyles}

Επιστρέφει τη σημερινή ρύθμιση των global styles.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `path` | string | Όχι | JSON pointer σε μια συγκεκριμένη τιμή, π.χ. `/color/palette` ή `/typography/fontSizes`. Επιστρέφει το όλο αν δεν παραλειφθεί. |

**Επιστρέφει** το πλήρες αντικείμενο των παγκόσμιων στυλ ή την τιμή στην `path`.

---

### `set_global_styles` {#setglobalstyles}

Ενημερώνει μία ή περισσότερες τιμές στις ρυθμίσεις των παγκόσμιων στυλ.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `path` | string | Ναι | JSON pointer στην τιμή που θέλετε να ρυθμίσετε, π.χ. `/color/palette` |
| `value` | any | Ναι | Η νέα τιμή |

**Παράδειγμα** — προσθήκη χρώματος στη παλέτα

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Επιστρέφει** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Επαναφέρει όλες τις αλλαγές των παγκόσμιων στυλ που εφαρμόστηκαν από τον agent, επαναφέρον τα προεπιλεγμένα του theme.

**Παράμετροι** — κανένας

**Επιστρέφει** `{ "success": true }`

---

## Μενού Πλοήγησης (Navigation Menus) {#navigation-menus}

Οι δυνατότητες των Navigation Menu δημιουργούν και διαχειρίζονται τα WordPress nav menus και τα στοιχεία τους.

### `create_menu` {#createmenu}

Δημιουργεί ένα νέο WordPress navigation menu.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `name` | string | Ναι | Όνομα του menu, π.χ. `Primary Navigation` |
| `location` | string | Όχι | Τοποθεσία του theme στην οποία αντιστοιχίζεται αυτό το menu, π.χ. `primary` |

**Επιστρέφει** `{ "success": true, "menu_id": 7 }`

### `update_menu` {#updatemenu}

Αναθέτει νέο όνομα σε ένα μενού ή το επανασύρει σε μια θέση του θέματος.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `menu_id` | integer | Ναι | ID του μενού που θέλεις να ενημερώσεις |
| `name` | string | Όχι | Νέο όνομα για το μενού |
| `location` | string | Όχι | Θέση του θέματος στην οποία θα ορίσεις ή επανασύρσεις το μενού |

**Επιστροφή** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Προσθέτει ένα αντικείμενο σε ένα υπάρχον μενού πλοήγησης.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `menu_id` | integer | Ναι | ID του στόχου μενού |
| `type` | string | Ναι | Τύπος αντικειμένου: `custom`, `post_type` ή `taxonomy` |
| `title` | string | Όχι | Επικεφαλίδα για το στοιχείο του μενού (απαραίτητο για τον τύπο `custom`) |
| `url` | string | Όχι | URL για τα στοιχεία τύπου `custom` |
| `object_id` | integer | Όχι | ID ανάρτησης ή όρου για στοιχεία τύπου `post_type`/`taxonomy` |
| `parent_id` | integer | Όχι | ID του στοιχείου μενού κάτω από το οποίο θα τοποθετηθεί αυτό στοιχείο |
| `position` | integer | Όχι | Χωρική θέση (από μηδέν) μέσα στο μενού |

**Επιστροφή** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Αφαιρεί ένα αντικείμενο από ένα μενού πλοήγησης.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `item_id` | integer | Ναι | ID του στοιχείου μενού που θέλεις να αφαιρέσεις |

**Επιστροφή** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Διαສະθέτει όλα τα μενού πλοήγησης WordPress, συμπεριλαμβανομένων των σχετικών τους θέσεων του θέματος.

**Παράμετροι** — κανένας

**Επιστροφή**

## Διαχείριση Επιλογών (Options Management) {#options-management}

Οι δυνατότητες επιλογών σας permettent να διαβάζετε και να γράφετε τις επιλογές του WordPress μέσω των συναρτήσεων `get_option` / `update_option`. Ένα ενσωματωμένο φίλτρο ασφαλείας αποτρέπει την τυχαία τροποποίηση κρίσιμων ρυθμίσεων.

### `get_option` {#getoption}

Διαβάζει μια επιλογή του WordPress.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `option_name` | string | Ναι | Η κλειδί της επιλογής, π.χ. `blogname` |

**Επιστρέφει** `{ "option_name": "blogname", "value": "My Site" }`

Επιστρέφει σφάλμα αν το `option_name` βρίσκεται στη λίστα ασφαλείας ελέγχου (safety blocklist).

---

### `set_option` {#setoption}

Γράφει μια επιλογή του WordPress.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `option_name` | string | Ναι | Η κλειδί της επιλογής |
| `value` | any | Ναι | Η νέα τιμή (αυτό μετατρέπεται αυτόματα σε σειριακό για arrays/objects) |
| `autoload` | string | Όχι | `"yes"` ή `"no"`. Η προεπιλογή διατηρεί τη υπάρχου ρύθιση autoload. |

Επιστρέφει σφάλμα αν το `option_name` βρίσκεται στη λίστα ασφαλείας ελέγχου (safety blocklist).

**Επιστρέφει** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Διαγράφει μια επιλογή του WordPress.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `option_name` | string | Ναι | Η κλειδί της επιλογής που θέλετε να διαγράψετε |

Επιστρέφει σφάλμα αν το `option_name` βρίσκεται στη λίστα ασφαλείας ελέγχου (safety blocklist).

**Επιστρέφει** `{ "success": true, "option_name": "my_custom_option" }`

### `list_options` {#listoptions}

Εμφανίζει τις επιλογές του WordPress που ταιριάζουν σε ένα μοτίβο (pattern).

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `pattern` | string | Όχι | Μοτίβο SQL LIKE για να φιλτράρετε τα ονόματα των επιλογών, π.χ. `gratis_%`. Επιστρέφει όλες τις επιλογές αν δεν παραθέσετε τίποτα (προσοχή σε μεγάλους διατιθέμενους βάσεις δεδομένων). |
| `limit` | integer | Όχι | Μέγιστο αριθμό αποτελεσμάτων. Προεπιλογή `50`, μέγιστο `500`. |

**Επιστροφή**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Διαχείριση Περιεχομένου (Content Management) {#content-management}

Οι δυνατότητες διαχείρισης περιεχομένου δημιουργούν και επεξεργάζονται WordPress posts και pages. Επιστρέφονται τα ID των posts για να αναφέρονται σε αυτά τα περιεχόμενα στα επόμενα βήματα των σχεδίων με πολλαπλές ικανότητες (multi-ability plans).

### `create_post` {#createpost}

Δημιουργεί ένα νέο WordPress post, page ή entry ενός custom post type.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `title` | string | Ναι | Τίτλος της ανάρτησης |
| `content` | string | Όχι | Το περιεχόμενο της ανάρτησης — akzeptiert κείμενο, HTML ή σειριακή μορφοποίηση block markup |
| `status` | string | Όχι | `draft`, `publish`, `pending`, `private`. Ελάχιστο είναι το `draft`. |
| `post_type` | string | Όχι | Το slug του τύπου ανάρτησης, π.χ. `post`, `page`, ή οποιοδήποτε καταχωρημένο CPT (Custom Post Type). Προεπιλογή: `post`. |
| `excerpt` | string | Όχι | Κορτογραφία που εμφανίζεται σε αρχεία διατήρησης και αποτελέσματα αναζήτησης. |
| `categories` | array | Όχι | Σύνολο ονομάτων ή ID κατηγοριών να προσθέσετε. |
| `tags` | array | Όχι | Σύνολο ονομάτων ή IDแท็ก να προσθέσετε. |
| `author` | integer | Όχι | WordPress User ID που θέτετε ως συγγραφέας της ανάρτησης. Προεπιλογή: ο τρέχων χρήστης. |
| `date` | string | Όχι | Η ημερομηνία δημοσίευσης σε μορφή ISO 8601, π.χ. `2026-05-01T09:00:00`. |
| `page_template` | string | Όχι | Αρχείο template που να προσδιορίζετε για αυτήν την ανάρτηση ή σε μια σελίδα, π.χ. `page-full-width.php`. Σημασιολογικό μόνο όταν ο `post_type` είναι `page` ή ένα CPT που υποστηρίζει page templates. |

**Παράδειγμα**

```json
{
  "title": "Καλώς ήρθατε στον νέο μας ιστότοπο",
  "content": "<!-- wp:paragraph --><p>Γεια σας τον κόσμο!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Επιστρέφει** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Ενημερώνει μια υπάρχουσα ανάρτηση ή σελίδα στο WordPress.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `post_id` | integer | Ναι | ID του post που θέλεις να ενημερώσεις |
| `title` | string | Όχι | Νέο τίτλο του post |
| `content` | string | Όχι | Νέο περιεχόμενο του post |
| `status` | string | Όχι | Νέο κατάσταση: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Όχι | Νέος σύντομος κείμενο (excerpt) |
| `categories` | array | Όχι | Αντικατάσταση της πλήρους λίστας κατηγοριών με αυτήν την ανάρτηση ονομάτων ή ID |
| `tags` | array | Όχι | Αντικατάσταση της πλήρους λίσταςแท็ก με αυτήν την ανάρτηση ονομάτων ή ID |
| `page_template` | string | Όχι | Νέο αρχείο template που να προσδιορίζεται σε αυτό το post ή σε σελίδα, π.χ. `page-full-width.php`. Δώσε μια κενή συμβολοσειρά για να αφαιρέσεις την προσκόμιση του template και να επιστρέψεις στην προεπιλεγμένη θέμα (theme) του WordPress. |

**Παράδειγμα** — αλλαγή template μετά τη δημιουργία

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Επιστρέφει** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Δημιουργεί πολλαπλούς posts με μία μόνο κλήση (ability call), μειώνοντας τις διαδρομές επικοινωνίας κατά τη διάρκεια της δημιουργίας του site ή όταν κάνεις bulk import περιεχομένου. Τα posts δημιουργούνται στη σειρά· αν ένα αποτύχει, συνεχίζονται τα υπόλοιπα και η αποτυχία αναφέρεται στην ανάρτηση αποτελεσμάτων (results array).

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `posts` | array | Ναι | Λίστα objects posts, όπου κάθε ένα περιλαμβάνει τις ίδιες παραμέτρους με το `create_post` |
| `stop_on_error` | boolean | Όχι | Αν είναι `true`, σταματά την επεξεργασία μετά την πρώτη αποτυχία. Προεπιλεγμένο: `false` |

**Παράδειγμα**

```json
{
  "posts": [
    {
      "title": "Σχετικά με εμάς",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Υπηρεσίες",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Επικοινωνία",
      "post_type": "page",
      "status": "publish"
    }
  ]
}

**Επιστρέφεται**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "Σχετικά με εμάς" },
    { "success": true, "post_id": 43, "title": "Υπηρεσίες" },
    { "success": true, "post_id": 44, "title": "Επικοινωνία" }
  ]
}
```

---

### `set_featured_image`

Προσθέτει μια εικόνα προβολής (thumbnail) σε ένα υπάρχον άρθρο ή σε μια σελίδα. Λαμβάνει είτε το ID μιας υπάρχουσας καταχώρισης από τη Media Library είτε μια διεύθυνση URL μιας εικόνας εξωτερικής πηγής· αν δοθεί URL, η εικόνα κατέβγεται και εισάγεται αυτόματα.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `post_id` | integer | Ναι | ID του άρθρου ή της σελίδας που θέλεις να ενημερώσεις |
| `attachment_id` | integer | Όχι | ID μιας υπάρχουσας καταχώρισης από τη Media Library |
| `url` | string | Όχι | Διεύθυνση URL μιας εικόνας εξωτερικής πηγής για εισαγωγή και ως εικόνα προβολής |
| `alt_text` | string | Όχι | Το κείμενο περιγραφής (alt text) που θα εφαρμοστεί στην καταχώριση αν εισάγεται από URL |

Πρέπει να παρέχεις είτε το `attachment_id` είτε την `url`.

**Επιστρέφεται** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Создает форму обратной связи с помощью активного плагина форм (Contact Form 7, WPForms, Fluent Forms или Gravity Forms в зависимости от того, какой установлен). Возвращает шорткод, который можно вставить в любой пост или страницу.

**Параметры**

| Параметр | Тип | Обязательно | Описание |
|---|---|---|---|
| `title` | string | Да | Имя формы, отображаемое в админке плагина форм |
| `fields` | array | Да | Упорядоченный список полей формы (см. объект Field ниже) |
| `recipient` | string | Нет | Адрес электронной почты для получения отправлений. По умолчанию — почта администратора WordPress |
| `subject` | string | Нет | Тема письма. Поддерживает плейсхолдеры `[your-name]` и `[your-subject]` при использовании Contact Form 7 |
| `confirmation_message` | string | Нет | Сообщение, отображаемое после успешной отправки. По умолчанию: `"Thank you for your message. We'll be in touch soon."` |

**Объект поля (Field object)**

| Ключ | Тип | Обязательно | Описание |
|---|---|---|---|
| `name` | string | Да | Внутреннее имя поля / машинный ключ |
| `label` | string | Да | Человекочитаемое название, отображаемое на форме |
| `type` | string | Да | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Нет | Требуется ли заполнение поля перед отправкой. По умолчанию `false` |
| `options` | array | Нет | Опции для полей `select`, `checkbox` и `radio` |
| `placeholder` | string | Нет | Текст-заполнитель для текстовых полей ввода |

**Пример**

```json
{
  "title": "Ερώτηση Κράτησης Σπιτιού",
  "fields": [
    { "name": "your-name",    "label": "Όνομα",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Αριθμός ατόμων",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Ειδικές αιτήσεις", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "Νέα αίτηση κράτησης από [your-name]"
}
```

**Επιστρέφεται**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Οπτική Εξέταση (Visual Review)

Οι δυνατότητες Οπτικής Εξέτασης επιτρέπουν στον agent να παίρνει στιγμιότυπα οθόνης από ζωντανές σελίδες και να τις αναλύει, επιτρέποντας την αυτόνομη εξέταση σχεδιασμού, συγκρίσεις πριν/μετά και ελέγχους διαρροής (visual regression checks) χωρίς να χρειάζεται καμία επέκταση του browser.

### `capture_screenshot`

Παίρνει ένα στιγμιότυπο οθόνης μιας σελίδας WordPress από μια δεδομένη URL χρησιμοποιώντας έναν server-side headless browser. Η εικόνα αποθηκεύεται στην Media Library και επιστρέφεται μια διεύθυνση CDN.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `url` | string | Ναι | Ο πλήρης URL της σελίδας που θέλετε να κάνετε screenshot, π.χ. `https://example.com/about/` |
| `width` | integer | Όχι | Πλάτος ορατού παράθυρου σε pixels. Εύρος προεπιλογής: `1280` |
| `height` | integer | Όχι | Ύψος ορατού παράθυρου σε pixels. Εύρος προεπιλογής: `800` |
| `full_page` | boolean | Όχι | Αντιλαμβάνεται την πλήρη, κύλιση σελίδας αντί μόνο το ορατό παράθυρο. Εύρος προεπιλογής: `false` |
| `delay_ms` | integer | Όχι | Τα milliseconds που να περιμένει μετά τη φόρτωση της σελίδας πριν γίνει η λήψη, χρήσιμο για περιεχόμενο με κίνηση. Εύρος προεπιλογής: `500` |
| `label` | string | Όχι | Ο ανθρώπινος αναγνώσιμο τίτλος που αποθηκεύεται μαζί με την επισυναπτόμενη εικόνα στη Media Library |

**Επιστρέφεται**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots`

Λαμβάνει δύο screenshots και επιστρέφει ένα σκορ διαφοράς οπτικού (visual diff score) συν μια εικόνα διαφοράς που τονίζει τις μεταβολές. Χρήσιμο για να επιβεβαιώσετε ότι μια αλλαγή σχεδιασμού έδωσε το αναμενόμενο αποτέλεσμα ή για να εντοπίσετε μη προενηματισμένες αποτυχίες (regressions).

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `before_url` | string | Ναι | URL της σελίδας που να αποτυπώνεται ως το "πριν" (before) |
| `after_url` | string | Ναι | URL της σελίδας που να αποτυπώνεται ως το "μετά" (after). Μπορεί να είναι η ίδια URL αν συγκρίνετε σε διαφορετικό χρόνο. |
| `width` | integer | Όχι | Πλάτος οθόνης για τις δύο λήψεις. Εύρος προεπιλογής: `1280` |
| `threshold` | float | Όχι | Αποδεκτό όριο διαφοράς σε pixels (0.0–1.0). Τα pixels εντός αυτής της αντοχής θεωρούνται αμετάβλητα. Εύρος προεπιλογής: `0.1` |

**Επιστρέφεται**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

Ένα `diff_score` της `0.0` σημαίνει μηδενική ορατή αλλαγή, ενώ το `1.0` σημαίνει ότι κάθε pixel άλλαξε.

---

### `review_page_design`

Λαμβάνει ένα στιγμιότυπο οθόνης μιας σελίδας και το στέλνει στο language model για οπτική ανάλυση. Επιστρέφει μια δομημένη αξιολόγηση που καλύπτει τη διάταξη, την τυπογραφία, τη χρήση χρωμάτων και τις ανησυχίες σχετικά με την προσβασιμότητα (accessibility).

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `url` | string | Ναι | Ο πλήρης URL της σελίδας που πρέπει να αξιολογηθεί |
| `focus` | string | Όχι | Λίστα με κόμματα των περιοχών αξιολόγησης που θέλετε να τονιστούν: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Προεπιλογή: όλες οι περιοχές |
| `width` | integer | Όχι | Πλάτος οθόνης. Εύρος προεπιλογής: `1280` |

**Επιστρέφεται**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## Εγκαταστάσιμες Ικανότητες (Installable Abilities)

Το Installable Abilities Registry σας επιτρέπει να επεκτείνετε τον agent με additional ability packs που διανέμονται ως WordPress plugins. Κάθε πακέτο καταγράφει μία ή περισσότερες ικανότητες χρησιμοποιώντας την τυπική ability API.

### `list_available_abilities`

Επιστρέφει το κατάλογο των ability packs διαθέσιμων για εγκατάσταση από το registry.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `category` | string | Όχι | Φιλτράρετε ανά κατηγορία: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Επιστροφή**

### `install_ability`

Κατεβάζει και ενεργοποιεί ένα ability pack από το registry.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `slug` | string | Ναι | Slug του plugin ability pack |

**Επιστρέφει** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Ερωτά στο registry των abilities για να βρει το καλύτερο plugin για ένα περιγραφόμενο use case και, προαιρετικά, το εγκαθιστά.

**Παράμετροι**

| Παράμετρος | Τύπος | Απαραίτητο | Περιγραφή |
|---|---|---|---|
| `description` | string | Ναι | Περιγραφή σε φυσική γλώσσα της επιθυμητής λειτουργικότητας |
| `install` | boolean | Όχι | Αν είναι `true`, εγκαθιστά αμέσως το προτεινόμενο plugin. Ελάχιστο (default) είναι `false` |

**Παράδειγμα**

```json
{
  "description": "Χρειάζομαι ένα formulάκι επικοινωνίας με υποστήριξη upload αρχείων και προστασία από spam",
  "install": false
}
```

**Επιστρέφει**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Πολύ δημοφιλές, υποστηρίζει upload αρχείων και ενσωματώνεται με Akismet για φιλτράρισμα spam.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
