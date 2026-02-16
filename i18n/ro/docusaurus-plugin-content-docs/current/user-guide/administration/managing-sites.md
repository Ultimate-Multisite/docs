---
title: Gestionarea Site-urilor
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Gestionarea site-urilor

Site-urile (sau subsite-urile) reprezintă nucleul afacerii tale WaaS. Ultimate Multisite oferă 3 tipuri de site-uri:

- **Deținute de clienți** — Site-uri care aparțin unor clienți specifici
- **Șabloane de site** — Site-uri predefinite pe care clienții le pot alege ca punct de plecare
- **Site-ul principal** — Site-ul principal al rețelei tale

## Vizualizarea site-urilor

Navighează la **Ultimate Multisite → Sites** pentru a vedea toate subsite-urile din rețeaua ta. Fiecare site este etichetat în funcție de tip și poți filtra după Toate site-urile, Deținute de clienți, Șabloane sau În așteptare.

![Pagina cu lista site-urilor](/img/admin/sites-list.png)

## Adăugarea unui site nou

Apasă butonul **Add Site** pentru a crea un site nou. Va trebui să furnizezi:

- **Site Title** — Numele noului site
- **Site URL** — Domeniul/calea pentru site
- **Site Type** — Dacă este un site de client, șablon sau site obișnuit

Opțiunea **Copy Site** îți permite să creezi un site nou pe baza unui șablon de site existent. Când este activată, poți selecta ce șablon să folosești ca punct de plecare. Asigură-te că opțiunea **Copy Media on Duplication** este activată pentru a include și fișierele media.

## Gestionarea unui site existent

Apasă **Manage** pe orice site pentru a deschide pagina **Edit Site**. Aici vei găsi:

### Informații de bază

Numele site-ului, tipul, ID-ul site-ului și descrierea. Vei vedea, de asemenea, domeniul mapat, membership-ul asociat și contul de client care deține site-ul.

### Opțiuni pentru site

Configurează capabilitățile și limitele site-ului:

- **Limite de vizite** — Numărul maxim de vizite pe site
- **Limite de conturi de utilizator** — Limite pe rol de utilizator
- **Spațiu pe disc** — Cota de stocare pentru site
- **Domeniu personalizat** — Activează maparea de domeniu pentru acest site
- **Vizibilitatea plugin-urilor și temelor** — Controlează ce plugin-uri și teme sunt vizibile, ascunse sau preactivate

În mod implicit, site-urile respectă limitele setate la nivelul membership-ului. Setarea limitelor la nivel de site va suprascrie setările membership-ului.

### Asocieri

Sub opțiunile site-ului vei găsi informații despre:

- **Domeniile mapate** asociate cu site-ul
- **Membership-ul** sub care se află site-ul
- **Contul de client** legat de site

### Bara laterală din dreapta

În partea dreaptă poți:

- **Activa/dezactiva site-ul** cu un buton de comutare
- **Schimba tipul site-ului** sau reatribui proprietatea
- **Seta o imagine/miniatură pentru site** (afișată în frontend pentru șabloanele de site)
- **Șterge site-ul** permanent

:::warning
Ștergerea unui site este ireversibilă. Site-ul și tot conținutul său vor fi eliminate permanent.
:::
