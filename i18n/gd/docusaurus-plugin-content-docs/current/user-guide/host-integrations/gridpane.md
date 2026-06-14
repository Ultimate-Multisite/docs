---
title: Còmhraidh GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integration

## Aims (Overview)
GridPane is a control panel for hosting WordPress, designed for serious WordPress professionals. This link enables automatic syncing of your domain and SSL certificate management between Ultimate Multisite and GridPane.

## Features
- Automatic domain syncing
- SSL certificate management
- Automatic configuration of SUNRISE constant

## Requirements
Caidh e cheann seo a bhith ag iarraidh dìonfadhnaidh seannachnan seo anns an t-file `wp-config.php` agad:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## Setup Instructions

### 1. Ghràdh an API Credentials agad

1. Roghainn (Log in) air do dashboard GridPane
2. Comharr chùsga "Settings" > "API"
3. Gnàth an API key a leugh thu chan thuair a tha thu ag eadar-fheuchain
4. Cop an API key agad

### 2. Ghràdh ID na Seannach agus na Sitean agad

1. An dashboard GridPane agad, rinn air "Servers"
2. Taisg an seannach a màiridh a tha thu WordPress multisite agad
3. Gnàth an Server ID (a tha e sgairta anns an URL no ar an seannach de seannach)
4. Rinn air "Sites" agus taisg an site WordPress agad
5. Gnàth an Site ID (a tha e sgairta anns an URL no ar an site de seannach)

### 3. Añadh Seannachnan i wp-config.php

Añdh an seannachnan seo i an t-file `wp-config.php` agad:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Bheir an Seannachanna a' ghlamaidh (Enable the Integration)

1. An admin WordPress agad, rinn air Ultimate Multisite > Settings
2. Taisg an tab "Domain Mapping"
3. Glac an cur an "Host Integrations"
4. Bheir an GridPane integration a' ghlamaidh
5. Cop an "Save Changes"

## Conas A tha e ag obair (How It Works)

Nuair a thàir seannach a' ghlamaidh i Ultimate Multisite:

1. Aig an tòiseachadh aithrisnadh gu robh an API de GridPane a chruinneachadh airson an domhain agad ar eògan.
2. Bidh GridPane a' ghràdhachadh (provisioning) certfeid SSL air a' ghràdhachadh gu àirde.
3. Nuair a tharann am fhadhachaidh domhain (domain mapping) a' sgeuladh, beidh an tòiseachadh a' sgeuladh an domhain a' sgeuladh de GridPane.

Bidh an tòiseachadh a' ghràdhachadh air a' ghràdhachadh constant SUNRISE yn fhaighinn gu àirde san latha wp-config.php, a tha riatach airson fhadhachaidh domhain a' sgeuladh gu fìor.

## Bhrat airson Constant SUNRISE

Tha eadar-dhearg an tòiseachadh GridPane a tha air a' ghràdhachadh constant SUNRISE san wp-config.php a' sgeuladh gu àirde airson earrachda le siostam fhadhachaidh domhain de GridPane. Tha seo a' sgeuladh gu robh am beathaidhean a' sgeuladh gu fìor air a' ghràdhachadh a tha a' sgeuladh gu àirde.

## Bhrat airson an tòiseachadh (Troubleshooting)

### Bhrat air coimhnichean API (API Connection Issues)
- Bidh thu a' faighinn gu robh tèarann API agad fìor.
- Bidh thu a' faighinn gu robh idirichean server agus site ID agad fìor.
- Bidh thu a' faighinn gu robh an tòiseachadh GridPane agad de chàrchean riatach.

### Bhrat air certfeid SSL (SSL Certificate Issues)
- Beirigidh GridPane am beathaidhean airson certfeid SSL a tharann a' sgeuladh.
- Bidh thu a' faighinn gu robh domhain agad a' sgeuladh gu fìor air an IP de server agad.
- Bidh thu a' faighinn gu robh am beathaidhean SSL de GridPane airson site agad.

### Domhain a tha a' sgeuladh (Domain Not Added)
- Bidh thu a' faighinn gu robh am beathaidhean log Ultimate Multisite air am beathaidhean earrachda.
- Bidh thu a' faighinn gu robh an domhain a' sgeuladh de GridPane air a' ghràdhachadh.
- Bidh thu a' faighinn gu robh na fhadhachaidhean DNS de do chàrchean a' sgeuladh gu fìor.
