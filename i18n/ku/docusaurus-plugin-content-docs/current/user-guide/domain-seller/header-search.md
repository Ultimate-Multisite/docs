---
title: Lêgerîna Domaina Headerê
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Lêgerîna Domain a Header

Vê sazkirinê bikar bîne dema ku tu dixwazî formeke biçûk a header hebe ku lêgerîna domain dest pê bike, paşê bihêle ku kiryar ji nav domainên berdest di nav checkout a Ultimate Multisite de hilbijêre.

## Pêdivî

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Bi kêmanî yek product a tomar kirina domainê ya çalak bi:
  - `domain_provider` ku li providerê sazkirî hatiye danîn.
  - TLDyên piştgirîkirî hatine sazkirin, mînak `com`, `net`, û `org`.
- Formeke checkout ya derbasdar ku qada **Hilbijartina Domain** tê de heye.

## Forma checkout

1. Forma checkout ya ku ji aliyê rûpela tomarbûnê ve tê bikaranîn biafirîne an biguherîne.
2. Qadên checkout/account ên pêwîst ên asayî zêde bike, di nav de **Username**. Formeke checkout ku tenê qada domainê tê de heye ji aliyê rastandina Ultimate Multisite ve tê redkirin.
3. Qadeke **Hilbijartina Domain** zêde bike.
4. Moda Hilbijartina Domain bike **Tenê Tomarkirin** dema ku herikîn divê li ser domainên tomarkirî bisekine, ne li ser subdomainên belaş an domainên heyî.
5. Product a tomar kirina domainê bi wê qadê ve girê bide.

Rûpela tomarbûnê divê forma checkout nîşan bide, mînak:

```text
[wu_checkout slug="domain-form"]
```

## Forma header

Formeke biçûk a `GET` di header a malperê de zêde bike ku peyva lêgerînê ya hatî nivîsandin wek `domain_name` dişîne rûpela checkout:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Di JavaScript a header a xwerû de domainê ji pêş ve hilnebijêre. Header divê tenê peyva lêgerînê derbas bike. Skrîpta checkout a Domain Seller `?domain_name=example` dixwîne, qutiya lêgerîna checkout tijî dike, û lêgerîna berdestbûnê dimeşîne da ku kiryar bikare ji domainên vegerandî hilbijêre.

## Reftara tê payîn

Lêgerîna `example` di header de divê vê veke:

```text
/register/?domain_name=example
```

Checkout paşê divê encamên ku dikarin bêne hilbijartin nîşan bide, wek:

- `example.com`
- `example.net`
- `example.org` ne berdest e
- TLDyên din ên provider-piştgirîkirî

Piştî hilbijartina encameke berdest, kurteya fermanê divê product a tomar kirina domainê û navê domainê yê hilbijartî tê de hebe.

## Piştrastkirin

1. Rûpela malê veke.
2. Li navek sade bigere, mînak `example`.
3. Piştrast bike ku URL a checkout `?domain_name=example` tê de heye.
4. Piştrast bike ku qada domainê ya checkout `example` tê de heye.
5. Piştrast bike ku lîsteyeke hilbijartinên domainê xuya dibe.
6. Ji bo domaineke berdest li **Hilbijêre** bitikîne.
7. Piştrast bike ku kurteya fermanê `Domain Registration - example.com` an domaina hilbijartî tê de heye.

## Çareserkirina pirsgirêkan

- Heke lîste xuya nebe, taba network a gerokê ji bo `admin-ajax.php?action=wu_domain_search` kontrol bike û piştrast bike ku ew `domains` an `results` ên ne-valahî vedigerîne.
- Heke forma checkout di dema tomar kirinê de di rastandinê de têk biçe, qadên account ên pêwîst wek **Username** zêde bike.
- Heke hilbijartina domainê cart nû neke, piştrast bike ku `window.wu_checkout_form` heye û assetên checkout a Domain Seller li ser rûpela checkout hatine barkirin.
