---
title: Căutare domeniu în antet
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Căutare de domeniu în antet

Folosiți această configurare când doriți un formular mic în antet care pornește o căutare de domeniu, apoi îi permite clientului să aleagă dintre domeniile disponibile în finalizarea comenzii Ultimate Multisite.

## Cerințe {#requirements}

- Ultimate Multisite activ la nivel de rețea.
- Multisite Ultimate Domain Seller activ la nivel de rețea.
- Cel puțin un produs activ de înregistrare a domeniilor cu:
  - `domain_provider` setat la un furnizor configurat.
  - TLD-uri acceptate configurate, de exemplu `com`, `net` și `org`.
- Un formular valid de finalizare a comenzii care conține câmpul **Selecție domeniu**.

## Formular de finalizare a comenzii {#checkout-form}

1. Creați sau editați formularul de finalizare a comenzii folosit de pagina de înregistrare.
2. Adăugați câmpurile normale obligatorii de finalizare a comenzii/cont, inclusiv **Nume de utilizator**. Un formular de finalizare a comenzii care conține doar câmpul pentru domeniu este respins de validarea Ultimate Multisite.
3. Adăugați un câmp **Selecție domeniu**.
4. Setați modul Selecție domeniu la **Doar înregistrare** când fluxul ar trebui să se concentreze pe domenii înregistrate, nu pe subdomenii gratuite sau domenii existente.
5. Atribuiți produsul de înregistrare a domeniului acelui câmp.

Pagina de înregistrare ar trebui să redea formularul de finalizare a comenzii, de exemplu:

```text
[wu_checkout slug="domain-form"]
```

## Formular în antet {#header-form}

Adăugați un mic formular `GET` în antetul site-ului care trimite termenul de căutare introdus către pagina de finalizare a comenzii ca `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Nu preselectați un domeniu în JavaScript personalizat pentru antet. Antetul ar trebui doar să transmită termenul de căutare. Scriptul de finalizare a comenzii Domain Seller citește `?domain_name=example`, completează caseta de căutare din finalizarea comenzii și rulează căutarea de disponibilitate, astfel încât clientul să poată alege dintre domeniile returnate.

## Comportament așteptat {#expected-behaviour}

Căutarea `example` în antet ar trebui să deschidă:

```text
/register/?domain_name=example
```

Finalizarea comenzii ar trebui apoi să afișeze rezultate selectabile precum:

- `example.com`
- `example.net`
- `example.org` indisponibil
- alte TLD-uri acceptate de furnizor

După selectarea unui rezultat disponibil, sumarul comenzii ar trebui să includă produsul de înregistrare a domeniului și numele de domeniu selectat.

## Verificare {#verification}

1. Deschideți pagina principală.
2. Căutați un nume simplu, de exemplu `example`.
3. Confirmați că URL-ul de finalizare a comenzii include `?domain_name=example`.
4. Confirmați că câmpul de domeniu din finalizarea comenzii conține `example`.
5. Confirmați că apare o listă de opțiuni de domenii.
6. Faceți clic pe **Selectează** pentru un domeniu disponibil.
7. Confirmați că sumarul comenzii conține `Domain Registration - example.com` sau domeniul selectat.

## Depanare {#troubleshooting}

- Dacă nu apare nicio listă, verificați fila de rețea a browserului pentru `admin-ajax.php?action=wu_domain_search` și confirmați că returnează `domains` sau `results` necompletate.
- Dacă formularul de finalizare a comenzii nu trece validarea la salvare, adăugați câmpurile obligatorii de cont, precum **Nume de utilizator**.
- Dacă selectarea unui domeniu nu actualizează coșul, confirmați că `window.wu_checkout_form` există și că resursele Domain Seller pentru finalizarea comenzii sunt încărcate pe pagina de finalizare a comenzii.
