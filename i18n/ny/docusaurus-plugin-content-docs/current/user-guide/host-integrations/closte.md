---
title: Kukonse Kukhala
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Usumbu wa Closte

## Umuwamba (Overview) {#overview}
Closte ndi platform ya WordPress yomwe imapangidwa pa Google Cloud infrastructure. Izi zikufotokozera kukhazikitsa kuwamba kwa domain monga momwe ndi SSL certificate management monga momwe ndi Ultimate Multisite ndi Closte.

## Mafunso (Features) {#features}
- Kuwamba kwa domain monga momwe (Automatic domain syncing)
- Kukhazikitsa SSL certificate management
- Kukonza wildcard domain support
- Samanira kuti muli ndi Closte m'moyo osati muli ndi configuration yomwe yomwe.

## Zomwe Zikufunika (Requirements) {#requirements}
M'mene mwagwiritsa ntchito Closte, munenera kukhazikitsa constant imodzi m'file yanu ya `wp-config.php`:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Izi constant imodzi monga momwe imapangidwa ngati muli ndi Closte.

## Mwayi Wopanga (Setup Instructions) {#setup-instructions}

### 1. Kuti Muthi API Key ya Closte {#1-verify-your-closte-api-key}

Ngati muli ndi Closte, constant `CLOSTE_CLIENT_API_KEY` imodzi monga momwe imapangidwa m'file yanu ya `wp-config.php`. Muli ndi umodzi kuti mufotokozere izi m'file yanu ya `wp-config.php`.

### 2. Kukhazikitsa Umuwamba (Enable the Integration) {#2-enable-the-integration}

1. M'moyo wanu wa WordPress, ndi lankhula ku Ultimate Multisite > Settings
2. Lankhulani ku tabu "Domain Mapping"
3. Lankhulani m'moyo kuti "Host Integrations"
4. Kukhazikitsa integration ya Closte
5. Lankhulani ku "Save Changes"

## Kodi Imayamba Bwera bwanji (How It Works) {#how-it-works}

Pamene domain imapangidwa m'Ultimate Multisite:

1. Integration imapeto request ku API ya Closte kuti ipereke domain yanu kwa application yanu
2. Closte imapangidwa SSL certificate automatically
3. Pamene mapangidwa domain amalimbidwa, integration imapanga domain iwo m'Closte

Integration imayamba ndi kukhazikitsa DNS check interval setting m'Ultimate Multisite, imapangidwa kuti muli ndi umodzi momwe muli ndi system imapereka kuwamba kwa DNS propagation ndi SSL certificate issuance.

## Kukhazikitsa Record ya Domain (Domain Record Creation) {#domain-record-creation}

Kusangalira kupeza ndalama yawo. Izi zikusonye kuti pamene site imaperekedwa kapena kuperekedwa, kukhala kuli chifukwa cha kukwera kuti record ya domain ikwerekedwe m'moyo. Izi zikukwera kwambiri pa integration ya Closte, chifukwa kuwo kukwera kwa record ya domain kukuwera API ya Closte kuti ikwerekere domain ndi SSL certificate.

## Kukhala Kuti Mwachidwe {#troubleshooting}
### Masulira a API Connection {#api-connection-issues}
- Ngati ndikwera kuti key ya Closte API yanu imakwanira, ngati ndikwera kuti account ya Closte yanu imana mwayi woperekera.

### Masulira a SSL Certificate {#ssl-certificate-issues}
- Closte mungafune nthawi yomwe kuti ikwerekere SSL certificates (kudzera kwa nthawi yomwe ndi 5-10 minutes).
- Ngati ndikwera kuti domains yanu zikupitira m'moyo woperekera wa server ya Closte, ngati ndikwera kuti DNS records za domain yanu zikuyenera kukhala zikugwirizana bwino.

### Domain Siku Likwerekedwa {#domain-not-added}
- Ngati ndikwera logs za Ultimate Multisite kuti muli ndi maithawi a chidziwa, ngati ndikwera kuti domain imayenera ikuwerekedwa ku Closte.
- Ngati ndikwera kuti DNS records za domain yanu zikuyenera kukhala zikugwirizana bwino.

### Interval ya DNS Check {#dns-check-interval}
- Ngati SSL certificates zimayenera nthawi yomwe yambiri kuti ikwerekere, munguperekere interval ya DNS check m'Domain Mapping settings.
- Interval yomwe imayenera ndi 300 seconds (5 minutes), koma munguperekere kuti ikhale lili lili pansi poyamba ndi 10 seconds kuti mwayi woperekera wakhale wogwirizana bwino m'mwayi woperekera.
