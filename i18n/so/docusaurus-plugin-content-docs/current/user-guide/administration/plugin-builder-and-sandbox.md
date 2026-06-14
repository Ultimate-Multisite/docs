---
title: Wax-soo-beddelka Plugin & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 waxay soo bandhigaysaa **Plugin Builder & Sandbox System**, kaas oo u oggolaanaya agensi AI inuu abuuro, fuliyo (activate), iyo maamulo WordPress plugins-kaaga ee shirkaddaada — dhammaantood iyadoo la isticmaalayo deegaan ammaan ah oo gaar ah (sandbox environment).

## Aragtida Guud (Overview)

Plugin Builder wuxuu u oggolaanaya agensi AI inuu qoro plugin-yada WordPress-kaaga ee gaarka ah jawaabta codsiyada luuqadda caadiga ah. Plugin-yada la abuuro waxaa la hubiyaa, lagu kaydiyaa, lana fuliyaa gudaha qayb ammaan ah (sandbox layer) ka hor inta aysan waxba saarin shaqada website-ka dhabta ah.

Waxyaabaha la isticmaali karo waa:

- Abuurista plugin-yada fudud ee caawiyaya (utility plugins) iyadoo aan loo baahnayn developer-ka.
- Sameynta qaabab cusub oo u baahan hook-yada WordPress ama custom post types.
- Abuurista scripts automation ah oo gaaban oo loogu talagalay hawlo isku mar ah (batch operations).

## Plugin Abuurista iyadoo la isticmaalayo AI

Si aad u abuurtid plugin, fur interface-ka chat-ka Gratis AI Agent oo qeex waxa aad u baahan tahay. Tusaale ahaan:

> "Abuur plugin oo ku dar farriin admin gaar ah (custom admin notice) dashboard-ka."

AI-ga wuxuu samayn doonaa:

1. Waxay soo saari doontaa koodhka PHP ee plugin-ka iyadoo la isticmaalayo qaab dhismeedka koodhka (structured code generation).
2. Waxay hubin doontaa waxyaabaha ka dhasha qaladka syntax-ka iyo qaababka aan ammaan ahayn.
3. Waxay kaydsataa plugin-ka la soo saaray sandbox store-ka.
4. Waxay soo celisaa xaqiijin adigoo bixinaysa slug-ga plugin-ka iyo badhka **Activate in Sandbox**.

Waxaad hagaajin kartaa natiijada iyadoo la raacayo haddii aad su'aal kale weydiinayso isku-dhafka wixii hore ka dhashay intaadan ma hawlgalka bilaabin.

## Sandbox Activation (Ficilista Sandbox)

Ficilista plugin la soo saaray sandbox-ka waa mid kala duwan oo ka duwan ficilista haddii aad si toos ah u fulinayso shabakadta dhabta ah (live network). Sandbox-ku:

Waxay plugin-ka ku shaqeeyaa deegaan WordPress oo la kala go'aabay (wp-env).
Wuxuu qaatayaa dhammaan qaladkii PHP, digniirrada (warnings), ama isku dhacdooyinka hook-yada.
Waxuu soo celinayaa natiijada fulinta (activation result) qaybta chat-ka.

Si aad plugin u fulin sandbox-ka, riix badhka **Activate in Sandbox** ee jawaabta AI chat-ka, ama isticmaal amarka slash-ka:

```
/activate-plugin <plugin-slug>
```

Fariin xaalad ah ayaa kuu ogeysa haddii fulinta ay guuleysatay ama ay ku fashanayso. Haddii ay fashato, log-ga qaladka (error log) waxaa lagu soo bandhigaa dhagaxa chat-ka.

## Maareynta Plugins-ka La Sameeyay (Generated Plugins)

Plugins-ka la sameeyay waxaa laga heli karaa **Gratis AI Agent → Plugin Builder → Manage Plugins**. Middaas ayaad samayn kartaa:

| Action | Sharaxaad |
|---|---|
| **View source** | Code-ka PHP-ga dhammaystira ee plugin-ka eeg. |
| **Re-activate in sandbox** | Mar kale socodka hubinta sandboxed-ka (sandbox activation check). |
| **Install on network** | Plugin-ka ku soo dejinta shabakadta dhabta ah (waxay u baahan tahay xaqiijin gacanta). |
| **Update** | Version cusub oo AI-ga bixisa, oo beddelaya koodka jira. |
| **Delete** | Ka saar plugin-ka sandboxed-ka. Waa inuu marka hore la xirtaa dhammaan goobaha (sites) si uu u joojiyo shaqadiisa. |

:::warning
**Install on network** waxay ku soo dejisaa plugin-ka la sameeyay shabakadda WordPress-kaaga dhabta ah ee multisite. Ka hor intaadan sii socon, hubi koodka plugin-ka. AI Agent bilaashka ah wuxuu weydiin doonaa xaqiijin ka hor inta aanu dhammaystirno soo dejinta dhab ah.
:::

## Soo Dejita Plugin La Sameeyay Shabakadda (Network)

Marka aad ku qanacsan tahay plugin la sandboxed-ka, waxaad si toos ah ugu soo dejin kartaa shabakadda dhabta ah:

1. Tag **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Guji **Install on Network** oo ku yaalla plugin-ka aad rabto inaad soo dejiso.
3. Hubi dialog-ka. Plugin-ku wuxuu lagu soo installay `wp-content/plugins/` wuxuuna bilaabmay shaqada ee network-ka.

Sida kale, isticmaal amarka slash (slash command) ee interface-ka chat-ka:

```
/install-plugin <plugin-slug>
```

## Cusboonaysiinta Plugin-yada (Plugin Updates)

Si aad u cusboonaysiiso plugin la abuuro, qoraalka isbeddelka ku siiyo caawiyaha AI wada hadalka cusub:

> "Update the dashboard-notice plugin si uu kaliya u muujiyo ogeysiga maamulayaasha."

AI-gu wuxuu abuuraa nooc cusub oo ku yaalla sandbox-ka isagoo la mid ah nooca hadda jira. Waxaad dib u eegaysaa diff-ka (diff) ka hor intaadan la adeegsado cusboonaysiinta.

## HookScanner Integration

Plugin Builder-ku wuxuu isticmaalayaa **HookScanner** oo isdhexgeli ah si uu u falanqeeyo hooks iyo filters-ka ay plugin kasta soo saaro. Waxa natiijada HookScanner lagu muujinayaa jawaabta chat-ka waxayna ku jirtaa:

- Action hooks la diiwaangeliyay (`add_action` calls).
- Filter hooks la diiwaangeliyay (`add_filter` calls).
- Halkee ay la helaan hooks-ka ku jira dacwada plugin-ka (waxa uu ka iska saaraa directories-ka `vendor/` iyo `node_modules/`).

Tani waxay kaa caawinaysaa inaad fahanto sida plugin-ka u shaqeeyo intaadan siiso hawlgalka.

## Tixgelinta Amniga

Plugins-ka la abuuro waxaa lagu kaydiyo si kala duwan oo ka mid ah kuwa aad si gacanta u installay, waxaana aanu ku heli karaan screen-ka maamulka plugin-ka ee WordPress intaadan si cad u installin shirkaddaada.
Sandbox-ku wuxuu isticmaalaa xaqiijinta habka (path validation) si looga horjoogsado in la galo faylasha plugin-ka marka la qorayo.
Plugins-ka leh hawlo khatar ah (sida `eval`, `exec`, `system`) waxaa lagu calaamadi doonaa inta lagu jiro xaqiijinta waxayna ma shaqayn doonaan.
