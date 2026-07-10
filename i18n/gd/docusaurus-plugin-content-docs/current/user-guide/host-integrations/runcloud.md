---
title: RannCloud Intighneachadh
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integras {#runcloud-integration}

## Aims {#overview}
RunCloud is un platform airson sàbhailtean serveran a tha air a thabhail agus a leige sinn a' chlàradh agus a' sgrùdadh àitean web ar eadar. A tha an sinneachadh seo a' toirt sealladh ùr (domain syncing) agus sgrùdadh certficatean SSL gu sònraich air a' chlàradh Ultimate Multisite agus RunCloud.

## Feàinean {#features}
- Sàbhailtean ùr (Automatic domain syncing)
- Sgrùdadh certficatean SSL
- A' chlàradh a' tòiseachadh gu sònraich nuair a thàndraidh na mhaighmean (Domain removal when mappings are deleted)

## Riaghailtean {#requirements}
Feumaidh na stianta a tha air a thabhail a bhith ag obair anns an `wp-config.php` agad:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Amasachadh a' chlàradh {#setup-instructions}

### 1. Ghràdh Riaghailtean API RunCloud (Get Your RunCloud API Credentials) {#1-get-your-runcloud-api-credentials}

1. Bhearr an t-synchran air do dashboard RunCloud.
2. Rinn gu "User Profile" (thàndraidh an t-sìladh agad anns a' chùirglach a' chùir air a' chùirghairt a' chùir air a' chùirglach a' chùirghairt a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a' chùirglach a'

1. Iar a admin WordPress-a, ràdh an t-seallach (Ultimate Multisite) > Settings go.
2. Tuisgeadh an tab "Domain Mapping" (Mappáil Dòmnain).
3. Scroladh a' chùl ar "Host Integrations".
4. Enable the RunCloud integration (Enableadh an t-integration RunCloud).
5. Click "Save Changes" (Sgeuladh Amdiridhean).

## Conas Aird a tha e? {#2-get-your-server-and-app-ids}

Nuair a thànd a' chlàradh dòmnain mar Ultimate Multisite:

1. A thànd a' chlàradh a' chlàradh (integration) seann tòran do RunCloud API gu fhaighinn an dòmnain is eartachadh do chàrachad.
2. Mar a tha an dòmnain a' chlàradh gu sgaidh, beir an t-integration a' chlàradh (redeploy) certficatean SSL.
3. Nuair a thànd a' chlàradh dòmnain a' latha, beir an t-integration an dòmnain a' latha do RunCloud.

Para installadh subdomains, beir an t-integration a' chlàradh (handle) an creachd subdomainan mar RunCloud nuair a thànd sitean ùra do chnàthnaidh agad.

## A' chùlchnaich {#3-add-constants-to-wp-configphp}

### Crisbhinn a' sgaidh API {#4-enable-the-integration}
- Bhaigh an t-creidheann API agad gu fìor (Verify).
- Bhaigh an t-ID na server agus an app agad gu fìor (Check).
- Bhaigh an t-account RunCloud agad gu fìor (Ensure) gu cunbhaldaidh a tha ag iarraidh.

### Crisbhinn SSL Certficatean {#how-it-works}
- Beir an t-RunCloud am fhaighinn certficatean SSL seann.
- Bhaigh an dòmnain agad a' chlàradh gu fìor do IP na server (Verify).
- Bhaigh an setadh SSL RunCloud agad airson an àrachas (application) agad a' chlàradh.

### Dòmnain a' latha {#troubleshooting}
- Bhaigh an logair Ultimate Multisite a' chlàradh airson aon chruinneachadh (error message).
- Beir an dòmnain a' chlàradh gu sgaidh do RunCloud (Verify) gu bheil e air a' chlàradh air an-diugh.
- Bhaigh an plan RunCloud agad a' tòlastadh (supports) dòmnain uile.
