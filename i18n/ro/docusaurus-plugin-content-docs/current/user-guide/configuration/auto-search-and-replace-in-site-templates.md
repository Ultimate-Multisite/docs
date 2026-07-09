---
title: Căutare și înlocuire automată în șabloanele de site
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Căutare și înlocuire automată în șabloanele de site (v2)

_**Acest tutorial necesită WP UItimo versiunea 2.x.**_

Una dintre cele mai puternice funcționalități ale Ultimate Multisite este capacitatea de a adăuga câmpuri arbitrare de text, culoare și selecție în formularul de înregistrare. După ce am capturat acele date, le putem folosi pentru a precompleta conținutul din anumite părți ale șablonului de site selectat. Apoi, când noul site este publicat, Ultimate Multisite va înlocui substituenții cu informațiile reale introduse în timpul înregistrării.

De exemplu, îți poți realiza site-urile șablon cu substituenți. Substituenții trebuie adăugați încadrați de acolade duble - {{placeholder_name}}.

Apoi, poți adăuga pur și simplu un câmp de înregistrare corespunzător pentru a captura acele date

Clientul tău va putea apoi să completeze acel câmp în timpul înregistrării.

Ultimate Multisite va înlocui apoi automat substituenții cu datele furnizate de client.

## **Rezolvarea problemei „șablon plin de substituenți”**

Toate acestea sunt grozave, dar ne lovim de o problemă neplăcută: acum șabloanele noastre de site - care pot fi vizitate de clienții noștri - sunt pline de substituenți urâți care nu spun prea multe.

Pentru a rezolva asta, oferim opțiunea de a seta valori false pentru substituenți și folosim acele valori pentru a căuta și înlocui conținutul lor pe site-urile șablon în timp ce clienții tăi le vizitează.

Poți avea acces la editorul de substituenți ai șablonului mergând la **Ultimate Multisite > Settings > Sites**, derulând până la zona Opțiuni pentru șablonul de site, apoi făcând clic pe linkul **Editează substituenții**.

![Zona Opțiuni pentru șablonul de site din pagina de setări Sites](/img/config/settings-sites-templates-section.png)

Asta te va duce la editorul de conținut al substituenților, unde poți adăuga substituenți și conținutul lor respectiv.

![Punct de intrare în editorul de substituenți ai șablonului](/img/config/settings-sites-templates-section.png)
