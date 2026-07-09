---
title: Paghahanap ng Domain sa Header
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Paghahanap ng Domain sa Header

Gamitin ang setup na ito kapag gusto mo ng maliit na form sa header na nagsisimula ng paghahanap ng domain, pagkatapos ay hinahayaan ang customer na pumili mula sa mga available na domain sa loob ng pag-checkout ng Ultimate Multisite.

## Mga Kinakailangan

- Ultimate Multisite na naka-activate sa network.
- Multisite Ultimate Domain Seller na naka-activate sa network.
- Kahit isang aktibong produkto para sa pagpaparehistro ng domain na may:
  - `domain_provider` na nakatakda sa isang naka-configure na provider.
  - Mga suportadong TLD na naka-configure, halimbawa `com`, `net`, at `org`.
- Isang valid na form ng pag-checkout na naglalaman ng field na **Pagpili ng Domain**.

## Form ng pag-checkout

1. Gumawa o mag-edit ng form ng pag-checkout na ginagamit ng pahina ng pagpaparehistro.
2. Idagdag ang karaniwang kinakailangang mga field ng pag-checkout/account, kabilang ang **Username**. Ang form ng pag-checkout na naglalaman lamang ng field ng domain ay tinatanggihan ng validation ng Ultimate Multisite.
3. Magdagdag ng field na **Pagpili ng Domain**.
4. Itakda ang mode ng Pagpili ng Domain sa **Magrehistro Lamang** kapag ang daloy ay dapat magpokus sa mga rehistradong domain sa halip na mga libreng subdomain o umiiral na domain.
5. Italaga ang produkto para sa pagpaparehistro ng domain sa field na iyon.

Dapat i-render ng pahina ng pagpaparehistro ang form ng pag-checkout, halimbawa:

```text
[wu_checkout slug="domain-form"]
```

## Form sa header

Magdagdag ng maliit na form na `GET` sa header ng site na nagpapadala ng inilagay na termino ng paghahanap sa pahina ng pag-checkout bilang `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Huwag mag-preselect ng domain sa custom na JavaScript ng header. Dapat ipasa lamang ng header ang termino ng paghahanap. Binabasa ng script ng pag-checkout ng Domain Seller ang `?domain_name=example`, pinupunan ang search box ng pag-checkout, at pinapatakbo ang availability search upang makapili ang customer mula sa mga ibinalik na domain.

## Inaasahang gawi

Ang paghahanap ng `example` sa header ay dapat magbukas ng:

```text
/register/?domain_name=example
```

Pagkatapos, dapat magpakita ang pag-checkout ng mga mapipiling resulta gaya ng:

- `example.com`
- `example.net`
- hindi available ang `example.org`
- iba pang TLD na sinusuportahan ng provider

Pagkatapos pumili ng available na resulta, dapat isama ng buod ng order ang produkto para sa pagpaparehistro ng domain at ang napiling pangalan ng domain.

## Pag-verify

1. Buksan ang home page.
2. Maghanap ng bare na pangalan, halimbawa `example`.
3. Kumpirmahin na kasama sa URL ng pag-checkout ang `?domain_name=example`.
4. Kumpirmahin na naglalaman ang field ng domain sa pag-checkout ng `example`.
5. Kumpirmahin na lumilitaw ang listahan ng mga pagpipilian sa domain.
6. I-click ang **Piliin** para sa isang available na domain.
7. Kumpirmahin na naglalaman ang buod ng order ng `Domain Registration - example.com` o ng napiling domain.

## Pag-troubleshoot

- Kung walang lumilitaw na listahan, tingnan ang network tab ng browser para sa `admin-ajax.php?action=wu_domain_search` at kumpirmahing nagbabalik ito ng hindi bakanteng `domains` o `results`.
- Kung nabigo ang validation ng form ng pag-checkout habang sine-save, idagdag ang kinakailangang mga field ng account gaya ng **Username**.
- Kung hindi ina-update ng pagpili ng domain ang cart, kumpirmahing umiiral ang `window.wu_checkout_form` at naka-load ang mga asset ng pag-checkout ng Domain Seller sa pahina ng pag-checkout.
