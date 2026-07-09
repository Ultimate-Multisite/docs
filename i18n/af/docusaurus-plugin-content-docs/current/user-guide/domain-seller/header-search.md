---
title: Opskrif vir domeinsoektog
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header Domain Search {#header-domain-search}

Gebruik hierdie opstelling wanneer jy ’n klein kopvorm wil hê wat ’n domeinsoektog begin, en dan die kliënt uit beskikbare domeine binne die Ultimate Multisite-betaalproses laat kies.

## Vereistes {#requirements}

- Ultimate Multisite netwerk-aktief.
- Multisite Ultimate Domain Seller netwerk-aktief.
- Ten minste een aktiewe domeinregistrasieproduk met:
  - `domain_provider` gestel op ’n gekonfigureerde verskaffer.
  - Ondersteunde TLDs gekonfigureer, byvoorbeeld `com`, `net`, en `org`.
- ’n Geldige betaalvorm wat die **Domeinkeuse**-veld bevat.

## Betaalvorm {#checkout-form}

1. Skep of wysig die betaalvorm wat deur die registrasiebladsy gebruik word.
2. Voeg die normale vereiste betaal-/Account-velde by, insluitend **Gebruikersnaam**. ’n Betaalvorm wat slegs die domeinveld bevat, word deur Ultimate Multisite-validering afgekeur.
3. Voeg ’n **Domeinkeuse**-veld by.
4. Stel die Domain Selection-modus op **Register Only** wanneer die vloei op geregistreerde domeine eerder as gratis subdomeine of bestaande domeine moet fokus.
5. Ken die domeinregistrasieproduk aan daardie veld toe.

Die registrasiebladsy behoort die betaalvorm te vertoon, byvoorbeeld:

```text
[wu_checkout slug="domain-form"]
```

## Kopvorm {#header-form}

Voeg ’n klein `GET`-vorm in die site-kop by wat die ingevoerde soekterm as `domain_name` na die betaalbladsy stuur:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Moenie ’n domein vooraf kies in pasgemaakte kop-JavaScript nie. Die kop behoort slegs die soekterm deur te gee. Die Domain Seller-betaalskrip lees `?domain_name=example`, vul die betaalsoekkassie in, en voer die beskikbaarheidsoektog uit sodat die kliënt uit die teruggestuurde domeine kan kies.

## Verwagte gedrag {#expected-behaviour}

Om `example` in die kop te soek, behoort die volgende oop te maak:

```text
/register/?domain_name=example
```

Die betaalproses behoort dan kiesbare resultate te vertoon soos:

- `example.com`
- `example.net`
- `example.org` nie beskikbaar nie
- ander verskaffer-ondersteunde TLDs

Nadat ’n beskikbare resultaat gekies is, behoort die bestelopsomming die domeinregistrasieproduk en die gekose domeinnaam in te sluit.

## Verifikasie {#verification}

1. Maak die tuisblad oop.
2. Soek vir ’n kaal naam, byvoorbeeld `example`.
3. Bevestig die betaal-URL sluit `?domain_name=example` in.
4. Bevestig die betaaldomeinveld bevat `example`.
5. Bevestig ’n lys domeinkeuses verskyn.
6. Klik **Kies** vir ’n beskikbare domein.
7. Bevestig die bestelopsomming bevat `Domain Registration - example.com` of die gekose domein.

## Probleemoplossing {#troubleshooting}

- As geen lys verskyn nie, gaan die blaaier se netwerk-oortjie na vir `admin-ajax.php?action=wu_domain_search` en bevestig dat dit nie-leë `domains` of `results` terugstuur.
- As die betaalvorm se validering misluk terwyl dit gestoor word, voeg die vereiste Account-velde soos **Gebruikersnaam** by.
- As die kies van ’n domein nie die mandjie opdateer nie, bevestig dat `window.wu_checkout_form` bestaan en dat die Domain Seller-betaalbates op die betaalbladsy gelaai is.
