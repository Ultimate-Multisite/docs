---
title: Ultimate AI Connector για WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM Κατάλογος Αλλαγών

## Έκδοση 1.1.0 — Έκβηκε στις 2026-04-09 {#version-110--released-on-2026-04-09}

* Νέο: Παραπλέον widget chat με ένδειξη κατάστασης στο admin-bar — οποιοσδήποτε συνδεδεμένος χρήστης μπορεί να δώσει prompt απευθείας από το front end, χρησιμοποιώντας το LLM που τρέχει στο browser.
* Νέο: SharedWorker runtime — ο μηχανισμός MLC τώρα τρέχει σε SharedWorker, ώστε πολλαπλές καρτέλες να μοιράζονται μία συνεδρία GPU αντί να ανταγωνίζονται για αυτήν.
* Νέο: apiFetch middleware interceptor — οι αιτήσεις WordPress REST που ταιριάζουν με το pattern του AI Client SDK ανακατευθύνονται αυτόματα στο τοπικό WebLLM broker, χωρίς να χρειάζεται να γίνει HTTP round-trip loopback.
* Νέο: Διεπαφή (UI) ρυθμίσεων widget στο πάνελ του Connector για την ενεργοποίηση/απενεργοποίηση του chat widget και τη διαμόρφωση της συμπεριφοράς του αυτόματου prompt.
* Διόρθωση: Αναγκαστική χρήση του cache backend IndexedDB ώστε οι λήψεις βαρών μοντέλων να επιβιώνουν από τις redirections του HuggingFace xet CDN που διακόπτουν τη default Cache API path.
* Διόρθωση: Αποφυγή της αναθεώρησης του KV-cache του context_window για τα embedding models (δεν έχουν decoder και η αναθεώρηση προκάλεσε ένα runtime error).
* Διόρθωση: Δημοσίευση του υποψηφίου μοντέλου για cold-start στο /webllm/v1/models πριν καν φορτώσει η καρτέλα του worker, ώστε οι καταναλωτές του SDK να δουν ένα μοντέλο αμέσως.
* Διόρθωση: Σύνδεση του WebLLM στο φίλτρο wpai_preferred_text_models ώστε η λειτουργία AI Experiments να κατευθύνεται στον browser engine όταν έχει ρυθმდεί ένα μοντέλο.
* Βελτίωση: Διόρθωση cache-busting, κανονικοποίηση περιεχομένου και διορθώσεις αναφοράς υλικού που αναδείχθηκαν κατά τις end-to-end δοκιμές.

## Έκδοση 1.0.0 — Αρχική Έκδοση {#version-100--initial-release}
