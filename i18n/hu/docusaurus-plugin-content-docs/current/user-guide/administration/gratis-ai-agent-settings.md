---
title: Ingyenes AI Agent Beállítások
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Beállításai

A **Beállítások → Haladó** képernyő a Gratis AI Agent-ben adminisztrátor szintű konfigurációt biztosít a v1.5.0-ban bevezetett háttérintegrációk számára. Ez az oldal a **Feedback Endpoint** mezőit és azok várható formátumát dokumentálja.

## Beállítások Elérésé

1. A WordPress adminisztrációban navigáljon a **Gratis AI Agent → Beállítások** menüpontra.
2. Kattintson a **Haladó** fülre.

## Feedback Endpoint Konfiguráció

A feedback endpointet az AI agent küldi POST kéréseket, amikor egy felhasználó visszajelzést küld egy "thumbs-down" gombokkal, az automatikus prompt sávval vagy a `/report-issue` parancskal.

| Mező | Leírás |
|---|---|
| **Feedback Endpoint URL** | Az URL, amely HTTP POST kérésekkel, JSON testtel fogadja a visszajelzéseket. |
| **Feedback API Key** | Egy hordozó token (bearer token), amelyet minden visszajelzési kéréshez küld az `Authorization` fejben. Üresen hagyja, ha az endpointje nem igényel hitelesítést. |

### Várható JSON Payload

A visszajelzési endpointje legalább az alábbi mezőket tartalmazó JSON testet kell elfogadnia:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

További mezők is szerepelhetnek a payload-ban, attól függően, hogy milyen konverziációs kontextusban történt a visszajelzés.

### `triage_category` Értékek

Az AI szűrési réteg (triage layer) az alábbi értékek egyikét adja hozzá a `triage_category` mezőhöz, mielőtt továbbítja a payload-ot:

| Érték | Jelentés |
|---|---|
| `factual_error` | Az asszisztens téves tényeket szolgáltatott. |
| `unhelpful_answer` | A válasz technikai értelemben helyes volt, de nem hasznos. |
| `inappropriate_content` | A válasz olyan tartalmat tartalmazott, amelyet nem szabad felhasználónak mutatni. |
| `other` | A visszajelzés nem illeszkedett egy ismert kategóriához. |

### Hitelesítés

Ha az endpointje hitelesítést igényel, állítsa be a **Feedback API Key** mezőt a hordozó tokenjával. Az agent küldi:

```
Authorization: Bearer <your-api-key>
```

Ha az **Feedback API Key** mező üres, nem küldet `Authorization` fej.

### Visszajelzés Gyűjtésének Kikapcsolása

Üresen hagyja mind a **Feedback Endpoint URL** és a **Feedback API Key** mezőket. A thumbs-down gomb és a visszajelzés felhasználói felülete továbbra is látható a felhasználók számára, de a visszajelzések nem kerülnek küldésre külső szolgáltatásra.

## Brave Search API Key

Az **Haladó** fülön található **Brave Search API Key** mező lehetővé teszi az [Internet Search](../configuration/internet-search) képesség használatát.

| Mező | Leírás |
|---|---|
| **Brave Search API Key** | Az API kulcsa, amelyet a Brave Search fejlesztői irányítói felületen kap. Előfeltétele az internetkeresés elindításához az AI asszisztensben. |

A mező címkéje tartalmaz egy kattintható linket a Brave Search API regisztrációs oldalára. Üresen hagyja, ha kikapcsolni akarja az internetkeresést.

Látogasson el a [Internet Search](../configuration/internet-search) oldalra a végfelhasználói dokumentációért ezzel a funkcióval kapcsolatban.

## Funkciók Kapcsolója (Feature Flags)

A v1.9.0-ban is bevezetett **Beállítások → Funkciók Kapcsolója** fül opcionális funkciók kapcsolóválasztóját biztosítja. Minden kapcsoló vagy ki van kapcsolva a teljes hálózat számára; jelenleg nincs helyi (per-site) átírás lehetőség.

### Funkciók Kapcsolója Elérése

1. A WordPress adminisztrációban navigáljon a **Gratis AI Agent → Beállítások** menüpontra.
2. Kattintson a **Funkciók Kapcsolója** fülre.

###Hozzáférés Kontroll Kapcsolója

| Kapcsoló | Alapértelmezett | Leírás |
|---|---|---|
| **Restrict to Administrators** | Ki van kapcsolva | Ha ki van kapcsolva, csak az `administrator` szerepkörű felhasználók nyithatják meg az AI Agent chat paneljét. Minden más szerepkörű felhasználó helyette "Kérjük, vegye fel az adminisztrátorral a kapcsolatot" üzenetet lát. |
| **Restrict to Network Admins** | Ki van kapcsolva | Ha ki van kapcsolva egy multisite hálózatokon, csak a Super Adminok használhatják az agentet. Az egyedi oldal adminjai blokkolva vannak. Előnyben részesül a "Restrict to Administrators" felett, ha mindkettő ki van kapcsolva. |
| **Allow Subscriber Access** | Ki van kapcsolva | Ha ki van kapcsolva, az `subscriber` szerepkörű felhasználók használhatják a chat felületet, de csak olvasásra korlátozva (nem hozhatnak posztot létre, és nem változtathatják beállításokat). |
| **Disable for Non-Members** | Ki van kapcsolva | Integrálódik az Ultimate Multisite tagsági státuszával. Ha ki van kapcsolva, a chat elrejtődik az olyan oldalakról, amelyek aktív tagsággal nem rendelkeznek. |

### Márkaazonosító Kapcsolója (Branding Flags)

| Kapcsoló | Alapértelmezett | Leírás |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Ki van kapcsolva | Eltávolítja a chat widget alján megjelenő márkaazonosító szöveget. Ajánlott fehér címkézésű (white-label) triểnásokhoz. |
| **Custom Agent Name** | *(üres)* | Felülírja az alapértelmezett "Gratis AI Agent" címkét a chat fejben és az adminisztrációs menüben saját terméknevével. Üresen hagyja, ha az alapértelmezett használatát akarja. |
| **Hide Agent Picker** | Ki van kapcsolva | Ha ki van kapcsolva, a felhasználók nem tudják váltani a öt beépített agent között. Az aktuális agent a Beállítások → Általános menüpontban beállított alapértelmezettre van fixálva. |
| **Use Site Icon as Chat Avatar** | Ki van kapcsolva | Eltávolítja az alapértelmezett AI ikonot a chat widget fejéből, és helyette a WordPress oldal ikonját használja (beállítások a Megjelenés → Testreszabás → Oldali azonosító alatt). |

### Alkakítások Alkalmazása

Kattintson a **Beállítások mentése** gombra, ha bármilyen kapcsolót állított. A változtatások azonnal érvényesek – nem szükséges cache törlés vagy plugin újraaktiválás.
