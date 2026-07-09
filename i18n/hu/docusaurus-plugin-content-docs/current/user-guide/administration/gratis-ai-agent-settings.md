---
title: Gratis AI Agent beállításai
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent beállításai

A Gratis AI Agent **Beállítások → Speciális** képernyője adminisztrátori szintű konfigurációt biztosít a backend integrációkhoz. Ez az oldal dokumentálja a visszajelzés-továbbítást, a keresőszolgáltatói kulcsokat, a felügyelt Superdav szolgáltatás beállítását, a Google Calendar vezérlőit, a TextBee SMS-beállításokat és a hálózatszintű funkciójelzőket.

## Beállítások elérése

1. A WordPress admin felületén lépj a **Gratis AI Agent → Beállítások** menüpontra.
2. Kattints a **Speciális** fülre.

## Visszajelzési végpont konfigurálása

A visszajelzési végpont POST-kéréseket fogad az AI agenttől, amikor egy felhasználó visszajelzést küld a lefelé mutató hüvelykujj gombbal, az automatikus kérdés bannerrel vagy a `/report-issue` paranccsal.

| Mező | Leírás |
|---|---|
| **Visszajelzési végpont URL-je** | Az URL, amely a visszajelzés-beküldéseket HTTP POST-kérésekként, JSON törzzsel fogadja. |
| **Feedback API Key** | Egy bearer token, amely minden visszajelzési kérés `Authorization` headerében kerül elküldésre. Hagyd üresen, ha a végpontod nem igényel hitelesítést. |

### Várt JSON hasznos teher

A visszajelzési végpontodnak el kell fogadnia egy JSON törzset legalább a következő mezőkkel:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

A hasznos teherben a beszélgetési kontextustól függően további mezők is jelen lehetnek.

### `triage_category` értékek

Az AI triázsréteg az alábbi értékek egyikét rendeli a `triage_category` mezőhöz, mielőtt továbbítja a hasznos terhet:

| Érték | Jelentés |
|---|---|
| `factual_error` | Az asszisztens helytelen ténybeli információt adott. |
| `unhelpful_answer` | A válasz technikailag helyes volt, de nem volt hasznos. |
| `inappropriate_content` | A válasz olyan tartalmat tartalmazott, amelyet nem szabad megjeleníteni a felhasználóknak. |
| `other` | A visszajelzés nem felelt meg egy ismert kategóriának sem. |

### Hitelesítés

Ha a végpontod hitelesítést igényel, állítsd a **Feedback API Key** mezőt a bearer tokenedre. Az agent ezt küldi:

```
Authorization: Bearer <your-api-key>
```

Ha a **Feedback API Key** mező üres, nem kerül elküldésre `Authorization` header.

### Visszajelzésgyűjtés letiltása

Hagyd üresen a **Visszajelzési végpont URL-je** és a **Feedback API Key** mezőt is. A lefelé mutató hüvelykujj gomb és a visszajelzési felület látható marad a felhasználók számára, de a beküldések nem kerülnek továbbításra semmilyen külső szolgáltatásnak.

## Brave Search API Key

Szintén a **Speciális** fülön a **Brave Search API Key** mező engedélyezi az [internetes keresés](../configuration/internet-search) képességet.

| Mező | Leírás |
|---|---|
| **Brave Search API Key** | Az API-kulcsod a Brave Search fejlesztői dashboardjáról. Szükséges az internetes keresés engedélyezéséhez az AI asszisztensben. |

A mezőcímke kattintható hivatkozást tartalmaz a Brave Search API regisztrációs oldalára. Hagyd üresen az internetes keresés letiltásához.

Lásd az [Internetes keresés](../configuration/internet-search) oldalt a funkció végfelhasználói dokumentációjához.

## Felügyelt Superdav szolgáltatás

A Superdav AI Agent v1.18.0 felügyelt Superdav szolgáltatásvégpontokat és automatikus kapcsolatkiépítést ad hozzá a támogatott webhelyekhez. Akkor használd ezeket a vezérlőket, ha a webhelyednek a manuálisan konfigurált szolgáltatásvégpont helyett a hosztolt szolgáltatóhoz kell kapcsolódnia.

| Mező | Leírás |
|---|---|
| **Felügyelt Superdav szolgáltatás** | Engedélyezi a hosztolt Superdav szolgáltatáskapcsolatot a támogatott webhelyekhez. |
| **Kapcsolat kiépítése** | Elindítja az automatikus végpont- és hitelesítőadat-kiépítést. Ezt azután használd, hogy megerősítetted: a webhelynek a felügyelt szolgáltatót kell használnia. |
| **Szolgáltatásvégpont / kapcsolat állapota** | Megjeleníti az aktuális végpontot vagy kapcsolati állapotot a kiépítés után. |

A kiépítés után mentsd a beállításokat, és ellenőrizd a kapcsolat állapotát, mielőtt a felügyelt szolgáltatás munkafolyamataira támaszkodnál. Ha a kiépítés sikertelen, tekintsd át a megjelenített újrapróbálkozási útmutatást, és erősítsd meg, hogy a webhely jogosult a hosztolt szolgáltató használatára.

## Google Calendar konfiguráció

Amikor a Superdav AI Agent v1.18.0 naptárfunkciói engedélyezve vannak, az agent képes olvasni a konfigurált naptárakat és az eseményrészleteket. A naptáreszközök olvasásközpontúak, és hasznosak az ütemezést figyelembe vevő emlékeztetőkhöz, a résztvevői utánkövetéshez és a kontaktok egyeztetéséhez.

| Mező | Leírás |
|---|---|
| **Google Calendar hitelesítő adatok** | Tárolja a naptáradatok olvasásához szükséges hitelesítő adatokat vagy tokenkapcsolatot. |
| **Naptár kiválasztása** | Korlátozza, hogy az agent mely konfigurált naptárakat vizsgálhatja. |
| **Naptárkapcsolat állapota** | Megerősíti, hogy az aktuális hitelesítő adatok képesek-e naptárakat és eseményeket olvasni. |

A naptár hitelesítő adatait korlátozd azokra a naptárakra, amelyekre az agentnek szüksége van. Csatlakoztasd újra vagy rotáld a hitelesítő adatokat, ha az állapot lejárt tokent jelez.

## TextBee SMS-értesítések

A Superdav AI Agent v1.18.0 hozzáadja a TextBee-t SMS-szolgáltatóként a konfigurált értesítési munkafolyamatokhoz. Az SMS-értesítéseket érzékeny vagy felhasználók felé irányuló üzenetek esetén emberi jóváhagyási kapukkal kell párosítani.

| Mező | Leírás |
|---|---|
| **TextBee API-kulcs** | Hitelesíti a TextBee SMS-szolgáltató felé irányuló kéréseket. |
| **TextBee eszköz / küldő** | Kiválasztja a kimenő üzenetekhez használt TextBee küldőt vagy eszközt, ha a szolgáltató ezt megköveteli. |
| **SMS-értesítések engedélyezve** | Lehetővé teszi, hogy a jóváhagyott munkafolyamatok szövegesüzenet-értesítéseket küldjenek. Hagyd letiltva az SMS-küldések megakadályozásához. |

Tesztüzenetet csak adminisztrátor tulajdonában lévő számra küldj, majd erősítsd meg a jóváhagyási kapu viselkedését, mielőtt engedélyeznéd az ütemezett vagy résztvevők felé irányuló emlékeztetőket.

## Funkciójelzők

A v1.9.0-ban szintén bevezetett **Beállítások → Funkciójelzők** fül kapcsolókat biztosít az opcionális funkcionalitáshoz. Minden jelző hálózatszinten vagy engedélyezett, vagy letiltott; jelenleg nincs webhelyenkénti felülbírálás.

### Funkciójelzők elérése

1. A WordPress admin felületén lépj a **Gratis AI Agent → Beállítások** menüpontra.
2. Kattints a **Funkciójelzők** fülre.

### Hozzáférés-vezérlési jelzők

| Jelölő | Alapértelmezett | Leírás |
|---|---|---|
| **Korlátozás adminisztrátorokra** | Ki | Ha engedélyezve van, csak az `administrator` szerepkörrel rendelkező felhasználók nyithatják meg az AI Agent csevegőpanelt. Minden más szerepkör helyette egy „Fordulj az adminisztrátorodhoz” üzenetet lát. |
| **Korlátozás Network Adminokra** | Ki | Ha egy multisite hálózaton engedélyezve van, csak a Super Adminok használhatják az agentet. Az egyes site-adminok blokkolva vannak. Elsőbbséget élvez a „Korlátozás adminisztrátorokra” beállítással szemben, ha mindkettő engedélyezve van. |
| **Subscriber hozzáférés engedélyezése** | Ki | Ha engedélyezve van, a `subscriber` szerepkörrel rendelkező felhasználók használhatják a csevegőfelületet, de csak olvasási jogosultságokra vannak korlátozva (nincs bejegyzéslétrehozás vagy beállításmódosítás). |
| **Letiltás nem tagok számára** | Ki | Integrálódik az Ultimate Multisite tagsági állapotával. Ha engedélyezve van, a csevegés el van rejtve azoknál a site-oknál, amelyeknek nincs aktív tagságuk. |

### Márkajelzési jelölők

| Jelölő | Alapértelmezett | Leírás |
|---|---|---|
| **„Powered by Gratis AI Agent” lábléc elrejtése** | Ki | Eltávolítja a csevegő widget alján megjelenő márkajelzési attribúciós sort. White-label telepítésekhez ajánlott. |
| **Egyéni agentnév** | *(üres)* | Lecseréli az alapértelmezett „Gratis AI Agent” címkét a csevegés fejlécében és az admin menüben a saját terméknevedre. Hagyd üresen az alapértelmezett használatához. |
| **Agentválasztó elrejtése** | Ki | Ha engedélyezve van, a felhasználók nem válthatnak az öt beépített agent között. Az aktuális agent arra van rögzítve, ami a Settings → General részben alapértelmezettként van beállítva. |
| **Site ikon használata csevegő avatarként** | Ki | Lecseréli az alapértelmezett AI ikont a csevegő widget fejlécében a WordPress site ikonjára (beállítható itt: Appearance → Customize → Site Identity). |

### Automatizálási biztonsági jelölők

A Superdav AI Agent v1.18.0 emberi jóváhagyási kapukat és emlékeztető rekordokat vezet be a biztonságosabb automatizálási futásokhoz. Ezek a vezérlők a feature flagek között vagy a haladó automatizálási beállításokban jelenhetnek meg, a telepített csomagtól függően.

| Jelölő | Alapértelmezett | Leírás |
|---|---|---|
| **Emberi jóváhagyás megkövetelése** | Ajánlott bekapcsolva | Szünetelteti az érzékeny automatizálásokat, amíg egy jogosult felhasználó át nem nézi és meg nem erősíti a javasolt műveletet. |
| **Emlékeztetők deduplikálása** | Be | Rögzíti az elküldött emlékeztetőket, hogy az újrapróbálkozások vagy ütemezett futások ne küldjenek duplikált értesítéseket. |
| **Naptáreszközök engedélyezése** | Ki, amíg nincs konfigurálva | Lehetővé teszi az agent számára a konfigurált Google naptárak és események olvasását. |
| **SMS-értesítések engedélyezése** | Ki, amíg nincs konfigurálva | Lehetővé teszi a jóváhagyott munkafolyamatok számára TextBee SMS-értesítések küldését a hitelesítő adatok mentése után. |

### Módosítások alkalmazása

Kattints a **Save Settings** gombra bármely jelölő átkapcsolása után. A módosítások azonnal életbe lépnek — nincs szükség cache ürítésére vagy a plugin újraaktiválására.
