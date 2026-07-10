---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Το Gratis AI Agent v1.5.0 εισάγει το **Plugin Builder & Sandbox System**, το οποίο επιτρέπει στον βοηθό AI να δημιουργεί, να ενεργοποιεί και να διαχειρίζεται plugins του WordPress στο δικό σας network — όλα μέσα από ένα ασφαλές, απομονωμένο περιβάλλον sandbox.

## Γενική Επισκόπηση {#overview}

Το Plugin Builder επιτρέπει στον βοηθό AI να γράφει προσαρμοσμένα plugins του WordPress σε απάντηση σε αιτήματα φυσικής γλώσσας. Τα δημιουργημένα plugins επικυρώνονται, αποθηκεύονται και ενεργοποιούνται μέσα σε ένα επίπεδο sandbox πριν επηρεάσουν ποτέ τη λειτουργικότητα του live site.

Οι περιπτώσεις χρήσης περιλαμβάνουν:

- Τη δημιουργία ελαφρών utility plugins χωρίς ανάγκη εμπλοκής προγραμματιστή.
- Το prototyping (προσομοίωση) λειτουργιών που απαιτούν WordPress hooks ή custom post types.
- Τη δημιουργία σύντομων αυτοματοποιημένων scripts για παρτίδες λειτουργιών.

## Δημιουργία Plugin μέσω AI {#generating-a-plugin-via-ai}

Για να δημιουργήσετε ένα plugin, ανοίξτε τη διεπαφή chat του Gratis AI Agent και περιγράψτε τι χρειάζεστε. Για παράδειγμα:

> "Δημιούργησε ένα plugin που προσθέτει μια προσαρμοσμένη ειδοποίηση στο dashboard."

Το AI θα:

1. Παράγει τον κώδικα PHP του plugin χρησιμοποιώντας δομημένη δημιουργία κώδικα.
2. Επικυρώσει την έξοδο για σφάλματα σύνταξης και μη ασφαλή μοτίβα.
3. Αποθηκεύσει το δημιουργημένο plugin στο sandbox store.
4. Επιστρέψει μια επιβεβαίωση με το slug του plugin και ένα κουμπί **Activate in Sandbox**.

Μπορείτε να βελτιώσετε το αποτέλεσμα συνεχίζοντας τη συνομιλία στο ίδιο thread πριν την ενεργοποίηση.

## Ενεργοποίηση στο Sandbox {#sandbox-activation}

Η ενεργοποίηση ενός δημιουργημένου plugin στο sandbox διαφέρει από την ενεργοποίησή του στο live network. Το sandbox:

- Τρέχει το plugin σε ένα απομονωμένο περιβάλλον WordPress (wp-env).
- Συλλέγει οποιαδήποτε PHP σφάλματα, προειδοποιήσεις ή συγκρούσεις hooks.
- Αναφέρει το αποτέλεσμα της ενεργοποίησης πίσω στη διεπαφή chat.

Για να ενεργοποιήσετε ένα plugin στο sandbox, κάντε κλικ στο κουμπί **Activate in Sandbox** στην απάντηση του AI chat, ή χρησιμοποιήστε την slash εντολή:

```
/activate-plugin <plugin-slug>
```

Ένα μήνυμα κατάστασης επιβεβαιώνει αν η ενεργοποίηση ήταν επιτυχής ή αποτυχημένη. Σε περίπτωση αποτυχίας, το αρχείο καταγραφής σφαλμάτων εμφανίζεται στο thread chat.

## Διαχείριση Δημιουργημένων Plugins {#managing-generated-plugins}

Τα δημιουργημένα plugins εμφανίζονται στο **Gratis AI Agent → Plugin Builder → Manage Plugins**. Από αυτή τη σελίδα μπορείτε να:

| Action | Description |
|---|---|
| **View source** | Ελέγξτε τον πλήρη κώδικα PHP του plugin. |
| **Re-activate in sandbox** | Επανατρέξτε τον έλεγχο ενεργοποίησης στο sandbox. |
| **Install on network** | Αναπτύξτε το plugin στο live network (απαιτεί χειροκίνητη επιβεβαίωση). |
| **Update** | Παρέχετε μια νέα έκδοση μέσω του AI, αντικαθιστώντας τον υπάρχοντα κώδικα. |
| **Delete** | Αφαιρείτε το plugin από το sandbox store. Το απενεργοποιεί πρώτα από όλα τα sites. |

:::warning
Το **Install on network** αναπτύσσει το δημιουργημένο plugin στο live WordPress multisite σας. Ελέγξτε τον κώδικα του plugin πριν προχωρήσετε. Το Gratis AI Agent θα ζητήσει επιβεβαίωση πριν ολοκληρώσει μια live εγκατάσταση.
:::

## Εγκατάσταση Δημιουργημένου Plugin στο Network {#installing-a-generated-plugin-on-the-network}

Όταν είστε ικανοποιημένοι με ένα plugin που έχει δοκιμαστεί στο sandbox, μπορείτε να το εγκαταστήσετε στο live network:

1. Πηγαίνετε στο **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Κάντε κλικ στο **Install on Network** δίπλα στο plugin που θέλετε να αναπτύξετε.
3. Επιβεβαιώστε το dialog. Το plugin εγκαθίσταται στο `wp-content/plugins/` και ενεργοποιείται στο network.

Εναλλακτικά, χρησιμοποιήστε την slash εντολή στη διεπαφή chat:

```
/install-plugin <plugin-slug>
```

## Ενημερώσεις Plugins {#plugin-updates}

Για να ενημερώσετε ένα δημιουργημένο plugin, περιγράψτε την αλλαγή στον βοηθό AI σε μια νέα συνομιλία:

> "Ενημέρωσε το dashboard-notice plugin ώστε να εμφανίζει την ειδοποίηση μόνο στους διαχειριστές."

Το AI δημιουργεί μια νέα έκδοση, η οποία εμφανίζεται στο sandbox δίπλα στην τρέχουσα έκδοση. Ελέγχετε τη διαφορά (diff) και επιβεβαιώνετε πριν εφαρμοστεί η ενημέρωση.

## Ενσωμάτωση HookScanner {#hookscanner-integration}

Το Plugin Builder χρησιμοποιεί ένα ενσωματωμένο **HookScanner** για να αναλύσει τους hooks και τα filters που καταγράφονται από κάθε δημιουργημένο plugin. Η έξοδος του HookScanner εμφανίζεται στην απάντηση chat και περιλαμβάνει:

- Καταγεγραμμένα action hooks (`add_action` calls).
- Καταγεγραμμένα filter hooks (`add_filter` calls).
- Οποιαδήποτε hooks εντοπίζονται στις εξαρτήσεις του plugin (αποβλέπει τα καταλόγια `vendor/` και `node_modules/`).

Αυτό σας βοηθά να κατανοήσετε τη συμπεριφορά ενός plugin πριν το ενεργοποιήσετε.

## Σημεία Προσοχής Ασφαλείας {#security-considerations}

- Τα δημιουργημένα plugins αποθηκεύονται ξεχωριστά από τα χειροκίνητα εγκατεστημένα plugins και δεν είναι προσβάσιμα μέσω της τυπικής οθόνης διαχείρισης plugins του WordPress μέχρι να τα εγκαταστήσετε ρητά στο network.
- Το sandbox χρησιμοποιεί path validation για να αποτρέψει τη διαδρομική περιήγηση (directory traversal) κατά τη συγγραφή των αρχείων του plugin.
- Τα plugins με επικίνδυνες κλήσεις συναρτήσεων (π.χ. `eval`, `exec`, `system`) σημειώνονται κατά την επικύρωση και δεν θα ενεργοποιηθούν.
