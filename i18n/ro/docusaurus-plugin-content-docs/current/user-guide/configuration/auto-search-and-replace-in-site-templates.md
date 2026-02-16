---
title: Căutare și Înlocuire Automată în Șabloanele Site-ului
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Căutare și înlocuire automată în șabloanele de site (v2)

_**Acest tutorial necesită WP Ultimo versiunea 2.x.**_

Una dintre cele mai puternice funcții ale Ultimate Multisite este posibilitatea de a adăuga câmpuri de text, culoare și selecție personalizate în formularul de înregistrare. Odată ce am capturat aceste date, le putem folosi pentru a pre-completa conținutul în anumite părți ale șablonului de site selectat. Apoi, când noul site este publicat, Ultimate Multisite va înlocui substituenții cu informațiile reale introduse în timpul înregistrării.

De exemplu, poți crea șabloanele de site folosind substituenți. Substituenții trebuie adăugați între acolade duble - {{placeholder_name}}.

Apoi, poți adăuga pur și simplu un câmp de înregistrare corespunzător pentru a captura acele date.

Clientul tău va putea apoi să completeze acel câmp în timpul înregistrării.

Ultimate Multisite va înlocui automat substituenții cu datele furnizate de client.

## **Rezolvarea problemei „șablonului plin de substituenți"**

Toate acestea sunt foarte utile, dar ne lovim de o problemă neplăcută: acum șabloanele noastre de site - care pot fi vizitate de clienții noștri - sunt pline de substituenți care nu transmit prea multe informații.

Pentru a rezolva această problemă, oferim opțiunea de a seta valori fictive pentru substituenți, pe care le folosim pentru a căuta și înlocui conținutul acestora pe site-urile șablon în timp ce clienții tăi le vizitează.

Poți accesa editorul de substituenți pentru șabloane navigând la **Ultimate Multisite > Setări > Site-uri**, apoi, în bara laterală, făcând clic pe linkul Editare substituenți.

![Linkul Editare substituenți în bara laterală din setările Site-uri](/img/config/settings-sites.png)

Aceasta te va duce la editorul de conținut pentru substituenți, unde poți adăuga substituenți și valorile corespunzătoare acestora.

![Editorul de conținut pentru substituenți cu numele și valorile substituenților](/img/config/settings-sites.png)
