---
title: Menaxhimi i pagesave dhe fakturave
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Menaxhimi i Pagesave dhe Fakturave

## Caktimet e Pagesave {#payment-settings}

Para se të filloni të merrni pagesa, do të duhet të konfigurosh cilësimet që lidhen me pagesat. Shko te **Ultimate Multisite → Settings** dhe kliko te tab-i **Payment**.

![Tabet e cilësimeve të pagesave](/img/admin/settings-payments-top.png)

Këtu është një pamje e plotë e faqes së cilësimeve të pagesave:

![Faqja e plotë e cilësimeve të pagesave](/img/admin/settings-payments-full.png)

### Opsionet e Përgjithshme të Pagesave {#general-payment-options}

Në cilësimet e përgjithshme mund të konfigurosh:

- **Moneda (Currency)** — Moneda që përdoret si default për transaksione.
- **Pozicioni i Monetës (Currency Position)** — Ku shfaqet simbolet e monetës (para/pas shumës).

![Përgjithësimi i opsioneve të pagesave](/img/admin/settings-payments-options.png)

### Pikat e Pagesave (Payment Gateways) {#payment-gateways}

Ultimate Multisite mbështet disa metoda pagesash (payment gateways). Mund t'i aktivizoni dhe t'i konfigurosh çdo një nga ato nga tab-i i cilësimeve të pagesave (Payment settings).

![Konfigurimi i dyqanit për rrjetat e pagesave](/img/admin/settings-payments-gateways.png)

Rrjetat e disponueshme janë:

- **Stripe** — Pagesa me kartë krediti përmes Stripe
- **PayPal** — Pagesa me PayPal
- **Manual** — Për përpunim të pagesave offline ose të personalizuar

Çdo gateway ka seksionin e tij të veçantë ku vendosni klavjet API dhe të tista të tjera.

![Settings for additional gateways](/img/admin/settings-payments-gateways-2.png)

### Rrënia Sandbox (Sandbox Mode) {#sandbox-mode}

Mund të aktivizoni **Sandbox Mode** për të testuar integrimin tuaj të pagesave para se ta lëreni në prodhim (live). Kur sandbox mode është i aktivizuar, nuk do të bëhen asnjë pagesa reale.

## Shikimi i Pagesave {#viewing-payments}

Shkoni te faqja **Payments** nën Ultimate Multisite për të parë të gjitha transaksionet e ndodura në rrjetin tuaj.

![Payments list](/img/admin/payments-list.png)

Mund të filtroni pagesat sipas statusit (përfunduar, në pritje, dështuar, të kthyera) dhe të kërkoni transaksione specifike.

Klikoni mbi një pagesë për të parë detajet e saj të plotë, duke përfshirë artikujt, anëtarinë që lidhet, informacionin e klientit dhe të dhënat e rrjetit të pagesave.

## Fatura {#invoices}

Ultimate Multisite mund të gjenerojë automatikisht faturat për pagesat. Mund të personalizoni shablonin e faturës dhe formatin e numërimit nga cilësimet e pagesave (Payment settings).

Opsionet për personalizimin e faturës përfshijnë:

* Emri dhe adresa e kompanisë që shfaqen në fakturë
* Formatimi dhe sekvenca e numërimit të fakturave
* Logja që shfaqet në kokën e fakturës
* Teksti i bazuar (footer) i projektuar për kushte, shënime ose informacion ligjor

Për të personalizuar shabllonin e fakturës (invoice), shko te **Ultimate Multisite → Settings → Payment** dhe kërko cilësimet që lidhen me fakturën.
