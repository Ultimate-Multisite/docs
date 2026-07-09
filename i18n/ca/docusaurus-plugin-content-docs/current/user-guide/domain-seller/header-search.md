---
title: Cerca de dominis de la capçalera
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Cerca de dominis a la capçalera

Fes servir aquesta configuració quan vulguis un formulari petit a la capçalera que iniciï una cerca de dominis i després permeti al client triar entre els dominis disponibles dins del procés de pagament d'Ultimate Multisite.

## Requisits

- Ultimate Multisite actiu a la xarxa.
- Multisite Ultimate Domain Seller actiu a la xarxa.
- Com a mínim un producte actiu de registre de dominis amb:
  - `domain_provider` definit com a proveïdor configurat.
  - TLDs compatibles configurats, per exemple `com`, `net` i `org`.
- Un formulari de pagament vàlid que contingui el camp **Selecció de domini**.

## Formulari de pagament

1. Crea o edita el formulari de pagament utilitzat per la pàgina de registre.
2. Afegeix els camps obligatoris normals de pagament/compte, incloent-hi **Nom d'usuari**. Ultimate Multisite rebutja en la validació un formulari de pagament que contingui només el camp de domini.
3. Afegeix un camp **Selecció de domini**.
4. Defineix el mode de Selecció de domini com a **Només registre** quan el flux s'hagi de centrar en dominis registrats en lloc de subdominis gratuïts o dominis existents.
5. Assigna el producte de registre de dominis a aquest camp.

La pàgina de registre hauria de mostrar el formulari de pagament, per exemple:

```text
[wu_checkout slug="domain-form"]
```

## Formulari de capçalera

Afegeix un petit formulari `GET` a la capçalera del lloc que enviï el terme de cerca introduït a la pàgina de pagament com a `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

No preseleccionis cap domini amb JavaScript personalitzat de capçalera. La capçalera només hauria de passar el terme de cerca. L'script de pagament de Domain Seller llegeix `?domain_name=example`, omple el quadre de cerca del pagament i executa la cerca de disponibilitat perquè el client pugui triar entre els dominis retornats.

## Comportament esperat

Cercar `example` a la capçalera hauria d'obrir:

```text
/register/?domain_name=example
```

A continuació, el pagament hauria de mostrar resultats seleccionables com ara:

- `example.com`
- `example.net`
- `example.org` no disponible
- altres TLDs compatibles amb el proveïdor

Després de seleccionar un resultat disponible, el resum de la comanda hauria d'incloure el producte de registre de dominis i el nom de domini seleccionat.

## Verificació

1. Obre la pàgina d'inici.
2. Cerca un nom sense TLD, per exemple `example`.
3. Confirma que l'URL de pagament inclou `?domain_name=example`.
4. Confirma que el camp de domini del pagament conté `example`.
5. Confirma que apareix una llista d'opcions de domini.
6. Fes clic a **Selecciona** per a un domini disponible.
7. Confirma que el resum de la comanda conté `Domain Registration - example.com` o el domini seleccionat.

## Resolució de problemes

- Si no apareix cap llista, comprova la pestanya de xarxa del navegador per a `admin-ajax.php?action=wu_domain_search` i confirma que retorna `domains` o `results` no buits.
- Si el formulari de pagament falla la validació en desar, afegeix els camps de compte obligatoris com ara **Nom d'usuari**.
- Si seleccionar un domini no actualitza el carretó, confirma que `window.wu_checkout_form` existeix i que els recursos de pagament de Domain Seller estan carregats a la pàgina de pagament.
