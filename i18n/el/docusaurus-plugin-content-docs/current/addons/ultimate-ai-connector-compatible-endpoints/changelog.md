---
title: Ultimate AI Connector for Compatible Endpoints Changelog
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ενημερωτικό Συγγραφέιo (Changelog) για τον Ultimate AI Connector για Συμβατά Endpoints

## Version 2.0.0 — Released on 2026-04-24 {#version-200--released-on-2026-04-24}

* Νέο: Υποστήριξη πολλαπλών παρόχων (Multi-provider support) — επιτρέπετε τη ρύθμιση πολλαπλών AI endpoints και τη διαδρομή αιτημάτων με αυτόματη ανακατεύθυνση (fallback) μεταξύ των παρόχων.
* Διόρθωση: Ενσωμάτωση SDK πολλαπλών παρόχων με σωστούς αναγνωριστικούς παρόχων (provider IDs), URL εγγραφής και περιορισμό (scoping) φίλτρου HTTP ανά πάροχο.
* Διόρθωση: Η νέα κάρτα παρόχου (provider card) επεκτείνεται αυτόματα κατά την προσθήκη· αποφυγή cache (cache busting) του script κατά την ενημέρωση του plugin.
* Διόρθωση: Δυναμικό namespace κλάσης παρόχου για το eval() και αυτόματη συμπεριφορά επέκτασης για τα πρόσφατα προστιθέμενα παρόχους.
* Διόρθωση: Χρησιμοποιεί σταθερά components (Card/CardBody/CardHeader/CardDivider) (πλέον όχι πειραματικά) για συμβατότητα με το WordPress 6.9+.
* Διόρθωση: Αντικατέστησε το μη ορισμένο DragHandle με ένα unicode εικονίδιο λαβής (grip icon) για τη λειτουργία αναδιάταξης παρόχων με σύρσιμο.
* Διόρθωση: Αφαιρέθηκε το μπλοκάρισμα HTTP αιτήματος που εκδொννούσε σε κάθε φόρτωση σελίδας.
* Βελτίωση: Οι ροές εργασίας (workflows) του GitHub Actions αναβαθμίστηκαν στο Node.js 24.

## Version 1.0.0 — Initial Release {#version-100--initial-release}
