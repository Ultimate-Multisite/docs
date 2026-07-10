---
title: Oldaltíró kapcsolatfelvételi űrlapok
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Oldaltíró Kapcsolatfelvételi Űrlapok {#site-builder-contact-forms}

A Superdav AI Agent v1.10.0 funkciója lehetővé teszi, hogy a Site Builder agent segítségével közvetlenül a chat felületéről hozzak létre kapcsolatfelvételi űrlapokat. Ez lehetővé teszi, hogy funkcionális kapcsolatfelvételi űrlapokat adjanak hozzá bármilyen oldalhoz anélkül, hogy elhagynák a chatet.

## Áttekintő {#overview}

A Site Builder kapcsolatfelvételi űrlap funkciója (`create_contact_form`) automatikusan felismeri az általad telepített űrlap plugin-ját, és az adott plugin natív képességeit használva hoz létre egy kapcsolatfelvételi űrlapot. Az támogatott űrlap plugin-jai a következők:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Az asszisztens automatikusan kiválasztja az oldalak legjobb elérhető űrlap plugin-ját, és az adott pluginhez igazított kapcsolatfelvételi űrlapot generál.

## Kapcsolatfelvételi Űrlap Létrehozása {#creating-a-contact-form}

Ahhoz, hogy kapcsolatfelvételi űrlapot hozz létre a Site Builder segítségével:

1. Nyitssza meg a **Gratis AI Agent** chat paneljét a WordPress admin felületén.
2. Váltásítsa át a **Site Builder** agentre az agent ikon rákattintásával a chat fejlécin.
3. Írja le azt a kapcsolatfelvételi űrlapot, amit létre szeretne hozni. Például:

   > "Adjak hozzá egy kapcsolatfelvételi űrlapot a Kapcsolat oldalhoz, amelynek mezői a név, az e-mail cím, az üzenet és a telefonszám."

   Vagy egyszerűen:

   > "Létrehozz egy kapcsolatfelvételi űrlapot a Kapcsolat oldalra."

4. A Site Builder generálja a kapcsolatfelvételi űrlapot, és visszaküldi egy rövidkódot (shortcode), amelyet beillesthetőként.

## A Generált Rövidkód Használata {#using-the-generated-shortcode}

Miután a Site Builder létrehozta a kapcsolatfelvételi űrlapot, egy rövidkódot ad vissza (például: `[contact-form-7 id="123"]`). A következőképpen használhatja:

1. **Beillesztése egy oldalra vagy posztra** — Másolja ki a rövidkódot, és illítsé be bármilyen oldalra vagy posztra a block editor vagy a klasszikus editor segítségével.
2. **Hozzáadása a Site Builder segítségével** — Kérje a Site Builder-től, hogy automatikusan adja hozzá az űrlapot egy meghatározott oldalhoz:

   > "Adja hozzá a kapcsolatfelvételi űrlapot a Kapcsolat oldalhoz."

3. **Használata egy sablonban** — Ha magabiztos PHP használatában, hozzáadhatja a rövidkódot egy téma sablon fájlához.

## A Kapcsolatfelvételi Űrlap Testre szabása {#customizing-the-contact-form}

Miután a Site Builder létrehozta a kapcsolatfelvételi űrlapot, tovább testre szabhatja:

### A Chat Felületen keresztül {#via-the-chat-interface}

Kérje a Site Builder-től, hogy módosítsa az űrlapot:

> "Frissítsd a kapcsolatfelvételi űrlapot egy tárgymező hozzáadásával és az üzenetmező kötelezővé tételevel."

A Site Builder frissíti az űrlapot, és visszaküldi az általa frissített rövidkódot.

### Az Űrlap Plugin Admin Felületén keresztül {#via-the-form-plugins-admin-interface}

Az űrlapot közvetlenül az űrlap plugin beállításain keresztül is testre szabhatja:

1. Navigáljon a **Contact Form 7**-re (vagy az általad telepített űrlap plugin-jához) a WordPress admin felületén.
2. Keresse meg az űrlapot, amelyet a Site Builder hozott létre.
3. Szerkessghegye az űrlapmezőket, a validációs szabályokat és az e-mail értesítéseket szükség szerint.

## Űrlap Plugin-ok és Kompatibilitás {#form-plugins-and-compatibility}

A Site Builder automatikusan felismeri, hogy milyen űrlap plugin van telepítve az oldalakra, és azt használja a kapcsolatfelvételi űrlap létrehozásához. Ha több űrlap plugin van telepítve, a Site Builder az alábbi sorrendben részesíti előnyben:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Ha egyik plugin sem van telepítve, a Site Builder javasolni fog, hogy telepítsen egyet, mielőtt létrehozza a kapcsolatfelvételi űrlapot.

## E-mail Értesítések {#email-notifications}

A Site Builder által létrehozott kapcsolatfelvételi űrlapok alapértelmezés szerint e-mail értesítéseket küldenek az oldal adminisztrátorának. Testre szabhatja a címzett e-mail címet és az értesítési üzenetet:

1. Navigáljon az űrlap plugin admin felületére.
2. Keresse meg az űrlapot, amelyet a Site Builder hozott létre.
3. Szerkessghegye az e-mail értesítési beállításokat.

Részletes utasításokhoz tekintse meg az űrlap plugin dokumentációját:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Példa Használati Esetek {#example-use-cases}

### Egyszerű Kapcsolatfelvételi Űrlap {#simple-contact-form}

> "Létrehozz egy egyszerű kapcsolatfelvételi űrlapot név-, e-mail és üzenetmezővel."

### Több Lépéses Űrlap {#multi-step-form}

> "Létrehozz egy kapcsolatfelvételi űrlapot, amelynek az első lépése a kapcsolatfelvételi adatok, és a második lépése az üzenet és a kívánt kapcsolatfelvételi módszer."

### Feltételezett Logikával Rendelkező Űrlap {#form-with-conditional-logic}

> "Létrehozz egy kapcsolatfelvételi űrlapot, amely eltérő mezőket mutat a felhasználó választásán alapulően egy legördülő menüből."

### Fájtlátó Funkcióval Rendelkező Űrlap {#form-with-file-upload}

> "Létrehozz egy kapcsolatfelvételi űrlapot, amely lehetővé teszi a felhasználók számára, hogy feltöltsenek egy fájlt vagy mellékletet."

:::note
A kapcsolatfelvételi űrlap létrehozása elérhető a Superdav AI Agent v1.10.0 és újabb verzióktól. A Site Builder agent aktív állapotban kell lennie, hogy ezt a funkciót használja.
:::
