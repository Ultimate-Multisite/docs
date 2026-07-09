---
title: Goiburuaren domeinu-bilaketa
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Goiburuaren domeinu-bilaketa

Erabili konfigurazio hau goiburuan formulario txiki bat nahi duzunean, domeinu-bilaketa bat hasteko, eta gero bezeroari Ultimate Multisite checkout barruan eskuragarri dauden domeinuen artean aukeratzen uzteko.

## Eskakizunak

- Ultimate Multisite sarean aktibo.
- Multisite Ultimate Domain Seller sarean aktibo.
- Gutxienez domeinu-erregistroko produktu aktibo bat, hauekin:
  - `domain_provider` konfiguratutako hornitzaile gisa ezarrita.
  - Onartutako TLDak konfiguratuta, adibidez `com`, `net` eta `org`.
- **Domain Selection** eremua duen checkout formulario baliodun bat.

## Checkout formularioa

1. Sortu edo editatu erregistro-orriak erabiltzen duen checkout formularioa.
2. Gehitu checkout/Account-eremu arrunt eta beharrezkoak, **Username** barne. Domeinu-eremua bakarrik duen checkout formulario bat Ultimate Multisite baliozkotzeak baztertzen du.
3. Gehitu **Domain Selection** eremu bat.
4. Ezarri Domain Selection modua **Register Only** gisa, fluxuak doako azpidomeinuetan edo lehendik dauden domeinuetan baino erregistratutako domeinuetan zentratu behar duenean.
5. Esleitu domeinu-erregistroko produktua eremu horri.

Erregistro-orriak checkout formularioa errenderizatu beharko luke, adibidez:

```text
[wu_checkout slug="domain-form"]
```

## Goiburuko formularioa

Gehitu `GET` formulario txiki bat gunearen goiburuan, sartutako bilaketa-terminoa checkout orrira `domain_name` gisa bidal dezan:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ez hautatu aurrez domeinurik goiburuko JavaScript pertsonalizatuan. Goiburuak bilaketa-terminoa bakarrik pasatu beharko luke. Domain Seller checkout scriptak `?domain_name=example` irakurtzen du, checkout bilaketa-koadroa betetzen du, eta erabilgarritasun-bilaketa exekutatzen du bezeroak itzulitako domeinuen artean aukeratu ahal izan dezan.

## Espero den portaera

Goiburuan `example` bilatzeak hau ireki beharko luke:

```text
/register/?domain_name=example
```

Checkout-ak, ondoren, hauta daitezkeen emaitzak erakutsi beharko lituzke, hala nola:

- `example.com`
- `example.net`
- `example.org` ez dago eskuragarri
- hornitzaileak onartutako beste TLD batzuk

Eskuragarri dagoen emaitza bat hautatu ondoren, eskaeraren laburpenak domeinu-erregistroko produktua eta hautatutako domeinu-izena jaso beharko lituzke.

## Egiaztapena

1. Ireki hasiera-orria.
2. Bilatu izen soil bat, adibidez `example`.
3. Berretsi checkout URLak `?domain_name=example` barne hartzen duela.
4. Berretsi checkout domeinu-eremuak `example` duela.
5. Berretsi domeinu-aukeraren zerrenda bat agertzen dela.
6. Egin klik **Select** aukeran eskuragarri dagoen domeinu baterako.
7. Berretsi eskaeraren laburpenak `Domain Registration - example.com` edo hautatutako domeinua duela.

## Arazoak konpontzea

- Zerrendarik agertzen ez bada, egiaztatu nabigatzailearen sare-fitxa `admin-ajax.php?action=wu_domain_search` bilatzeko, eta berretsi `domains` edo `results` hutsik ez daudela itzultzen duela.
- Checkout formularioak gordetzean baliozkotzean huts egiten badu, gehitu beharrezko Account-eremuak, hala nola **Username**.
- Domeinu bat hautatzeak saskia eguneratzen ez badu, berretsi `window.wu_checkout_form` badagoela eta Domain Seller checkout baliabideak checkout orrian kargatuta daudela.
