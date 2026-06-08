---
title: Produse și Prețuri pentru Domenii
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produse de domenii și prețuri

Produsele de domenii vă permit să gestionați prețurile, TLD-urile, confidențialitatea WHOIS și selectarea furnizorului. Fiecare produs de domeniu este un produs standard Ultimate Multisite, dar cu un tab separat numit **Domain Settings**.

## Crearea unui produs de domeniu

1. Mergeți la **Network Admin › Ultimate Multisite › Products**
2. Faceți clic pe **Add New**
3. Setați tipul produsului pe **Domain**
4. Configurați tab-ul **Domain Settings** (vezi mai jos)
5. Salvați

Produsele de domenii apar cu un badge **Domain** de culoare mov în lista de produse și pot fi filtrate folosind tab-ul **Domain Products**.

## Tab-ul cu setările domeniului

### Furnizor (Provider)

Alegeți ce registrar se ocupă de înregistrarea acestui produs. Implicit este setat **Default provider** la nivel global în setările Domain Seller.

### TLD-uri suportate (Supported TLDs)

Lăsați câmpul gol pentru a crea un **produs universal (catch-all)** care se aplică tuturor TLD-urilor care nu sunt acoperite de alt produs.

Introduceți o listă separată prin virgulă de TLD-uri (ex: `.com, .net, .org`) pentru a crea un **produs specific TLD-ului** care se aplică doar extinsiunilor menționate.

**Cum funcționează potrivirea produselor:** Când un client caută un domeniu, addon-ul selectează produsul cel mai specific care se potrivește. Un produs cu `.com` în lista sa de TLD-uri are prioritate față de un produs universal. Dacă niciun produs specific TLD-ului nu se potrivește, se folosește produsul universal. Dacă nu există produse, căutarea domeniului nu este afișată.

### Tip de marjă (Markup type)

Cele trei moduri controlează cum vă este calculat prețul retail în raport cu costul de gros:

| Mod | Cum funcționează |
|---|---|
| **Percentage** | Adaugă un procent peste costul de gros. O marjă de 20% pe un domeniu de gros de $10 oferă $12. |
| **Fixed markup** | Adaugă un anumit sumă fixă în dolari. O marjă de $5 pe un domeniu de $10 oferă $15. |
| **Fixed price** | Ignorează complet costul de gros. Încarcă întotdeauna suma pe care o introduceți. |

### Preț inițial (Introductory pricing)

Activați această opțiune pentru a oferi un preț redus pentru prima lună. Setați un **Introductory price** separat (prețul pentru anul 1) alături de **Renewal price** (prețul pentru anul 2 și următor). Clientul vede ambele prețuri afișate în timpul checkout-ului, astfel că știe ce să aștepte la reînnoire.

### Confidențialitatea WHOIS (WHOIS privacy)

Controlează dacă confidențialitatea WHOIS este oferită pentru domeniile înregistrate prin acest produs.

| Setare | Comportament |
|---|---|
| **Disabled** | Confidențialitatea WHOIS nu este niciodată oferită sau activată. |
| **Always Included** | Confidențialitatea WHOIS este activată automat la înregistrare, fără cost. |
| **Customer Choice** | Apare o casetă de bifat în timpul checkout-ului. Setați **Privacy price** pentru a percepe un cost pe an, sau lăsați la $0 pentru a oferi serviciul gratuit. |

Pentru Namecheap, confidențialitatea WHOIS folosește WhoisGuard (întotdeauna gratuit). Pentru OpenSRS, folosește serviciul de confidențialitate OpenSRS (poate avea un cost la nivel de gros).

---

## Importarea și sincronizarea TLD-urilor

Produsele de domenii afișează prețuri de gros în timp real, prelevate de la furnizorul conectat. Pentru ca acest lucru să funcționeze, TLD-urile trebuie importate.

- **Sincronizare manuală:** Settings › Domain Seller › Sync TLDs (per provider)
- **Sincronizare automată:** Rulează zilnic printr-o sarcină cron programată pe toate furnizorii configurați

După o sincronizare, mergeți la tab-ul Domain Settings al oricărui produs de domeniu și folosiți selectorul TLD pentru a vedea TLD-urile disponibile cu prețurile lor actuale de gros.

---

## Reînnoirea automată (Auto-renewal)

Reînnoirea domeniilor este legată de statutul de membru al clientului:

- Când o membresie se reînnoie și un domeniu este legat, reînnoirea domeniului este pusă automat în coadă
- Tentativele de reînnoire folosesc gateway-ul de plăți activ al clientului
- Reînnoirile eșuate sunt relănțiate automat cu *backoff* exponențial
- Notificările prin e-mail sunt trimise pentru reînnoiri reușite, eșecuri și expirări iminente

ID-urile de șablon pentru evenimentele ciclului de viață ale domeniului:

| Eveniment | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Înregistrarea manuală a domeniului

Pentru a înregistra un domeniu în numele unui client, fără ca acesta să treacă prin checkout:

1. Mergeți la **Network Admin › Ultimate Multisite › Register Domain**
2. Selectați clientul și introduceți numele domeniului
3. Completați detaliile de contact ale înregistratorului (nume, adresă, telefon)
4. Faceți clic pe **Register**

Înregistrarea domeniului este creată și legată de contul clientului.
