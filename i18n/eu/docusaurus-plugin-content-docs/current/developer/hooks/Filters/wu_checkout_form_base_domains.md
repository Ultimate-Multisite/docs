---
id: wu_checkout_form_base_domains
title: Iragazkia - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Iragazkia: wu_checkout_form_base_domains

Checkout-inprimakiko oinarri-domeinu partekatuak iragazten ditu, mapped-domain erregistro bihurtu behar ez direnak.

Erabili iragazki hau integrazio batek checkout-inprimakiko **Site URL** eremuetarako oinarri-domeinu gehigarriak ematen dituenean. Iragazki honek itzultzen dituen domeinuak erregistro-host partekatu gisa tratatzen dira, gune bakoitzeko domeinu pertsonalizatu gisa beharrean.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $domains | `array` | Checkout-inprimakiaren konfiguraziotik bildutako oinarri-domeinu partekatuak. |

### Noiztik {#since}

- 2.13.0

### Iturburua {#source}

`inc/functions/domain.php` fitxategian definituta.


## Itzultzen du {#returns}

Normalizatutako checkout-inprimakiko oinarri-domeinuen array-a.
