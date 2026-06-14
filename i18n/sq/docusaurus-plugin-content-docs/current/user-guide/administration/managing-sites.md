---
title: Menaxhimi i Shteve
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Menaxhimi i Shteve

Shtevat (ose subshtevet) janë thelbi i biznesit tuaj WaaS. Ultimate Multisite ka 3 lloje shtevësh:

- **Shte i klientit** — Shte që i përkojnë klientëve të caktuar
- **Shabllone të Siti** — Shte të parapërcaktuar që klientët mund t'i zgjedhin si pikë fillestare
- **Siti Kryesor** — Siti primar i rrjetit tuaj

Shkoni te **Ultimate Multisite → Sites** për të parë të gjitha subsitet në rrjetin tuaj. Çdo site i etiketuar me llojin e saj dhe mund ta filtroni sipas Të Gjithë Site, Customer-Owned (Përmjetur nga Klienti), Templates (Shabllone) ose Pending (Nën proces).

![Sites list page](/img/admin/sites-list.png)

## Shtimi i një Shteve

Klikoni butonin **Add Site** (Shtoj Shte) për të krijuar një shte të ri. Do të duhet të keni këto informacione gati:

- **Titulli i faqes (Site Title)** — Emri i faqes së re
- **URL-ja e faqes (Site URL)** — Domeni/rruga për faqen
- **Lloji i faqes (Site Type)** — Ajo nëse është një faqe klientësh, një template apo faqe normale

Opsioni i **Kopjimi i Sitet (Copy Site)** ju lejon të krijoni një vitin e ri bazuar në një model (template) ekzistues. Kur është i aktivizuar, mund të zgjidhni cilin model do të përdorni si pikë fillestare. Sigurohuni që **Kopjimi i Medias në Duplikim** të jetë i aktivizuar për të përfshirë edhe skedarët e medies.

## Menaxhimi i një Siti Ekzistues

Klikoni në **Manage** (Menaxho) mbi çdo site për të hapur faqen **Edit Site** (Redigjo Siti). Këtu do të gjeni:

### Informacion Bazë

Emri i faqes, tipi i saj, ID-ja e faqes dhe përshkrimi. Do të shihni gjithashtu domenit të mapuar, anëtarin e lidhur dhe llogarinë e klientit që vërteton faqen.

### Opsionet e faqes

Konfigurojeni aftësitë dhe kufizimet e faqes:

- **Limitimet e vizitave** — Maksimumi i numrit vizitave të faqes së internetit
- **Limitimet e llogarive përdoruesve** — Limitimet për rolet e përdoruesve
- **Shpaza disk** — Kuota magjinë për faqen tuaj
- **Domani i ulët (Custom domain)** — Aktivizoni mapi domanit për këtë faqe

**Vizibiliteti i plugin-eve dhe temave** — Kontrolloni cilat plugin-e dhe tema janë të dukshme, të fshehta ose të preaktivizuara

Në rastin e përdorimit standard, faqet ndjekin kufizimet e vendosura në nivelin e anëtarisë (membership). Vendosja e kufizimeve në nivelin e faqes do të mbledhë dhe do të zbehet mbi cilësimet e anëtarisë.

### Asociacionet

Mbi opsioneve të faqes, do të gjesh informacion rreth:

- **Domeneve të mapuara** që janë të lidhura me faqen
- **Membresën** në të cilën është faqja
- **Llogaria e klientit** e lidhur me faqen

### Paneli i Dytë (Right Sidebar)

Në anën e djathtë mund të bësh:

* Aktivizo/Deaktivizo faqen me një butonin ndërveprimi (toggle button).
* Ndrysho tipin e faqes ose riorganizoni pronësinë.
* Vendos një imazh/thumbnail për faqen (i shfaqet në frontend për template të faqes).
* Fshi faqen përgjithmonë.

:::warning
Fshirja e një siti nuk mund të kthehet pas. Siti dhe gjithë përmbajtja e tij do të fshihen përgjithmonë.
:::
