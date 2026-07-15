---
title: Raadinta Domain-ka ee Header
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Raadinta Domain-ka ee Header-ka

Adeegso dejintan marka aad rabto foom yar oo header-ka ku jira kaas oo bilaaba raadinta domain-ka, kadibna u oggolaada macmiilka inuu ka doorto domain-nada la heli karo gudaha hubinta bixinta ee Ultimate Multisite.

## Shuruudaha {#requirements}

- Ultimate Multisite oo shabakadda ka shaqaynaya.
- Iibiyaha Domain-ka ee Ultimate Multisite oo shabakadda ka shaqaynaya.
- Ugu yaraan hal badeecad diiwaangelin domain oo firfircoon oo leh:
  - `domain_provider` oo loo dejiyay bixiye la habeeyay.
  - TLD-yada la taageero oo la habeeyay, tusaale ahaan `com`, `net`, iyo `org`.
- Foom hubinta bixinta oo sax ah oo ka kooban goobta **Xulashada Domain-ka**.

## Foomka hubinta bixinta {#checkout-form}

1. Samee ama tafatir foomka hubinta bixinta ee bogga diiwaangelintu adeegsado.
2. Ku dar goobaha caadiga ah ee loo baahan yahay ee hubinta bixinta/Account, oo ay ku jirto **Magaca isticmaalaha**. Foom hubinta bixinta oo ka kooban kaliya goobta domain-ka waxaa diida ansixinta Ultimate Multisite.
3. Ku dar goob **Xulashada Domain-ka**.
4. Habka Xulashada Domain-ka u deji **Diiwaangeli Kaliya** marka socodku diiradda saarayo domain-nada la diiwaangeliyay halkii uu ka ahaan lahaa subdomain-no bilaash ah ama domain-no jira.
5. U qoondee badeecadda diiwaangelinta domain-ka goobtaas.

Bogga diiwaangelintu waa inuu soo bandhigaa foomka hubinta bixinta, tusaale ahaan:

```text
[wu_checkout slug="domain-form"]
```

## Foomka header-ka {#header-form}

Ku dar foom yar oo `GET` ah gudaha header-ka goobta kaas oo erayga raadinta ee la geliyay ugu dira bogga hubinta bixinta sida `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ha hore ugu dooran domain gudaha JavaScript header gaar ah. Header-ku waa inuu kaliya gudbiyaa erayga raadinta. Qoraalka hubinta bixinta ee Iibiyaha Domain-ku wuxuu akhriyaa `?domain_name=example`, wuxuu buuxiyaa sanduuqa raadinta ee hubinta bixinta, wuxuuna socodsiiyaa raadinta helitaanka si macmiilku uga doorto domain-nada la soo celiyay.

## Habdhaqanka la filayo {#expected-behaviour}

Raadinta `example` gudaha header-ka waa inay furtaa:

```text
/register/?domain_name=example
```

Hubinta bixintu kadib waa inay muujisaa natiijooyin la dooran karo sida:

- `example.com`
- `example.net`
- `example.org` lama heli karo
- TLD-yo kale oo bixiyuhu taageero

Kadib marka la doorto natiijo la heli karo, soo koobidda dalabku waa inay ku jirtaa badeecadda diiwaangelinta domain-ka iyo magaca domain-ka la doortay.

## Xaqiijinta {#verification}

1. Fur bogga guriga.
2. Raadi magac qaawan, tusaale ahaan `example`.
3. Xaqiiji in URL-ka hubinta bixintu ku jiro `?domain_name=example`.
4. Xaqiiji in goobta domain-ka ee hubinta bixintu ka kooban tahay `example`.
5. Xaqiiji in liis doorashooyin domain ah soo muuqdo.
6. Guji **Dooro** domain la heli karo.
7. Xaqiiji in soo koobidda dalabku ka kooban tahay `Domain Registration - example.com` ama domain-ka la doortay.

## Xallinta dhibaatooyinka {#troubleshooting}

- Haddii liis uusan muuqan, hubi tab-ka shabakadda ee biraawsarka `admin-ajax.php?action=wu_domain_search` oo xaqiiji inuu soo celiyo `domains` ama `results` aan madhnayn.
- Haddii foomka hubinta bixintu ku guuldareysto ansixinta marka la kaydinayo, ku dar goobaha Account ee loo baahan yahay sida **Magaca isticmaalaha**.
- Haddii doorashada domain aysan cusboonaysiin gaadhiga, xaqiiji in `window.wu_checkout_form` jiro iyo in agabyada hubinta bixinta ee Iibiyaha Domain-ka lagu raray bogga hubinta bixinta.
