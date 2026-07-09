---
title: Paghahanap ng Domain sa Header
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Paghahanap ng Domain sa Header {#header-domain-search}

Gamitin ang setup na ito kapag gusto mo ng maliit na form sa header na nagsisimula ng paghahanap ng domain, pagkatapos ay hinahayaan ang customer na pumili mula sa mga available na domain sa loob ng Ultimate Multisite checkout.

## Mga Kinakailangan {#requirements}

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Hindi bababa sa isang aktibong produkto sa pagrerehistro ng domain na may:
  - `domain_provider` na nakatakda sa isang naka-configure na provider.
  - Mga suportadong TLD na naka-configure, halimbawa `com`, `net`, at `org`.
- Isang valid na checkout form na naglalaman ng field na **Pagpili ng Domain**.

## Checkout form {#checkout-form}

1. Gumawa o mag-edit ng checkout form na ginagamit ng registration page.
2. Idagdag ang normal na kinakailangang mga field ng checkout/account, kabilang ang **Username**. Ang checkout form na naglalaman lamang ng field ng domain ay tinatanggihan ng Ultimate Multisite validation.
3. Magdagdag ng field na **Pagpili ng Domain**.
4. Itakda ang mode ng Pagpili ng Domain sa **Rehistro Lamang** kapag dapat nakatuon ang daloy sa mga rehistradong domain sa halip na mga libreng subdomain o umiiral na domain.
5. Italaga ang produkto sa pagrerehistro ng domain sa field na iyon.

Dapat i-render ng registration page ang checkout form, halimbawa:

```text
[wu_checkout slug="domain-form"]
```

## Form sa header {#header-form}

Magdagdag ng maliit na `GET` form sa site header na nagpapadala ng inilagay na termino sa paghahanap papunta sa checkout page bilang `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Huwag mag-preselect ng domain sa custom na JavaScript ng header. Dapat ipasa lamang ng header ang termino sa paghahanap. Binabasa ng checkout script ng Domain Seller ang `?domain_name=example`, pinupunan ang search box ng checkout, at pinapatakbo ang paghahanap ng availability upang makapili ang customer mula sa mga ibinalik na domain.

## Inaasahang asal {#expected-behaviour}

Ang paghahanap ng `example` sa header ay dapat magbukas ng:

```text
/register/?domain_name=example
```

Pagkatapos, dapat magpakita ang checkout ng mga napipiling resulta tulad ng:

- `example.com`
- `example.net`
- `example.org` hindi available
- iba pang TLD na suportado ng provider

Pagkatapos pumili ng available na resulta, dapat isama sa buod ng order ang produkto sa pagrerehistro ng domain at ang napiling pangalan ng domain.

## Pagberipika {#verification}

1. Buksan ang home page.
2. Maghanap ng bare name, halimbawa `example`.
3. Kumpirmahing kasama sa checkout URL ang `?domain_name=example`.
4. Kumpirmahing naglalaman ang field ng domain sa checkout ng `example`.
5. Kumpirmahing lumilitaw ang listahan ng mga pagpipilian ng domain.
6. I-click ang **Piliin** para sa isang available na domain.
7. Kumpirmahing naglalaman ang buod ng order ng `Domain Registration - example.com` o ng napiling domain.

## Pag-troubleshoot {#troubleshooting}

- Kung walang lumilitaw na listahan, tingnan ang browser network tab para sa `admin-ajax.php?action=wu_domain_search` at kumpirmahing nagbabalik ito ng hindi bakanteng `domains` o `results`.
- Kung nabibigo ang validation ng checkout form habang sine-save, idagdag ang kinakailangang mga field ng account tulad ng **Username**.
- Kung hindi ina-update ng pagpili ng domain ang cart, kumpirmahing umiiral ang `window.wu_checkout_form` at na-load ang mga checkout asset ng Domain Seller sa checkout page.
