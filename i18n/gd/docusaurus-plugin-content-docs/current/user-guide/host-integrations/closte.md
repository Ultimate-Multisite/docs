---
title: Còmhlaidais Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integration {#closte-integration}

## Aims (Overview) {#overview}
Closte is a platform airson WordPress a tha a th'annachdaidh Google Cloud infrastructure. Tha an tòisich seo a' bheachd a' chluichdachadh domhainn (domain syncing) agus leithid an SSL certificate gu sònraichte air a' chluichdachadh a' mheasdaidh Ultimate Multisite agus Closte.

## Feàinean (Features) {#features}
- Chluichdachadh domhainn gu sònraichte
- Leithid an SSL certificate
- Suidheachadh domhan wildcards (Wildcard domain support)
- Fada a tha e cheannach a' bheachd mar thuair a tha e air Closte

## Aighean (Requirements) {#requirements}
Tha an constant seo a' bheachd a' chluichdachadh anns a' chuid `wp-config.php` thu air a' bheachd a' mheasdaidh Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Tha an constant seo a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a' bheachd a

Se sinne a chluarach airson an tòiseachadh seo:

## Tòiseachadh {#setup-instructions}

Ais a tha seo a' ghnìomhachais, a' faighinn an tòiseachadh gu robh site a chruthailt air a' chlàradhdaidh (duplicated), tha seachdaidh an tòiseachadh a chruthachadh curthaireachd domhainn (domain record) gu fhaighinn. Tha seo a' leithidreach airson an tòiseachadh Closte, mar a tha an tòiseachadh a chruthachadh curthaireachd domhainn a' ghnìomhachais a' tòiseachadh a' API Closte a chruthachadh an domhainn agus an sertificat SSL.

## Tòiseachadh (Troubleshooting) {#1-verify-your-closte-api-key}

### Crisbeidhean ar an t-API (API Connection Issues) {#2-enable-the-integration}
- Bhaigh air a chluarach an chìaith Closte API key agad gu sònraichte.
- Sealltainn gu bheil an earrach Closte agad deatamach.

### Crisbeidhean ar sertificat SSL (SSL Certificate Issues) {#how-it-works}
- Leog nach eil Closte a' ghnìomhachais airson sertificat SSLan (a tha thuairidh 5-10 minut).
- Sealltainn gu bheil tòiseachadh agad a' curthaireachd gu fhaighinn air an chluas IP de server Closte.
- Crisbeidh na curthaireacha DNS airson tòiseachadh agad airson a' faicinn gu sònraichte.

### Domhainn cha tha a' ghnìomhachais (Domain Not Added) {#domain-record-creation}
- Bhaigh air a chluarach an log Ultimate Multisite airson amrachan earrach.
- Sealltainn gu bheil an domhainn a' curthaireachd air Closte an sin.
- Sealltainn gu bheil na curthaireacha DNS de tòiseachadh agad a' curthaireachd gu sònraichte.

### Crisbeidhean ar an t-curthaireach DNS (DNS Check Interval) {#troubleshooting}
- Mar a tha sertificat SSLan a' tòiseachadh a' tòiseachadh a' ghnìomhachais, leugh thu an tòiseachadh a' curthaireachd DNS anns an t-seòl curthaireacha domhainn.
- Tha an tòiseachadh deatamach 300 second (5 minut), ach leugh thu e gu sònraichte air 10 second airson curthaireachd a' tòiseachadh a' ghnìomhachais anns an tòiseachadh.
