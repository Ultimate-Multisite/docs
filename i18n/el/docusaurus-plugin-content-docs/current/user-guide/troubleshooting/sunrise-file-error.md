---
title: Σφάλμα Αρχείου Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Σφάλμα κατά την Εγκατάσταση του Αρχείου Sunrise

Το αρχείο sunrise.php είναι ένα ειδικό αρχείο που αναζητά το WordPress κατά την εκκίνησή του. Για να μπορέσει το WordPress να εντοπίσει το αρχείο sunrise.php, πρέπει να βρίσκεται μέσα στον **φάκελο wp-content**.

Όταν ενεργοποιείτε το Ultimate Multisite και ακολουθείτε τον οδηγό εγκατάστασης όπως αυτός που βλέπετε στο στιγμιότυπο οθόνης, το Ultimate Multisite προσπαθεί να αντιγράψει το αρχείο sunrise.php στον φάκελο wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Τις περισσότερες φορές, η αντιγραφή του αρχείου ολοκληρώνεται επιτυχώς και όλα λειτουργούν κανονικά. Ωστόσο, αν κάτι δεν είναι σωστά ρυθμισμένο (π.χ. τα δικαιώματα φακέλων), μπορεί να αντιμετωπίσετε μια κατάσταση όπου το Ultimate Multisite δεν μπορεί να αντιγράψει το αρχείο.

Αν διαβάσετε το μήνυμα σφάλματος που εμφανίζει το Ultimo, θα δείτε ότι ακριβώς αυτό συνέβη: **Η αντιγραφή του Sunrise απέτυχε**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Για να το διορθώσετε, μπορείτε απλά να αντιγράψετε το αρχείο sunrise.php από τον φάκελο του plugin wp-ultimo και να το επικολλήσετε στον φάκελο wp-content. Αφού το κάνετε αυτό, ανανεώστε τη σελίδα του οδηγού και οι έλεγχοι θα πρέπει να περάσουν επιτυχώς.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Σε κάθε περίπτωση, αυτό μπορεί να υποδεικνύει ότι χρειάζεται ένας γενικός έλεγχος των δικαιωμάτων των φακέλων σας, ώστε να αποφύγετε προβλήματα στο μέλλον (όχι μόνο με το Ultimate Multisite αλλά και με άλλα plugins και θέματα).

Το εργαλείο **Health Check** που περιλαμβάνεται στο WordPress (μπορείτε να το βρείτε μέσω του **πίνακα διαχείρισης του κύριου ιστότοπου > Εργαλεία > Health Check**) μπορεί να σας ενημερώσει αν έχετε δικαιώματα φακέλων που ενδέχεται να προκαλέσουν προβλήματα με το WordPress.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
