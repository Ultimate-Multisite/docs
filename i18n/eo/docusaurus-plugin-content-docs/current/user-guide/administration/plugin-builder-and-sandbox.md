---
title: Plugin-konstruisto kaj Sandboksado
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 introducit la **Plugin Builder & Sandbox System**, kiu per permetti al AI assistant generi, aktivi e administra WordPress pluginojn sur viajn de anda — ĉio per segura, izolita sandbox aĉento.

## Vido {#overview}

La Plugin Builder permesas al la AI assistant skribi memaj WordPress pluginojn respondiendo al naturaj lingva petoj. Generitaj pluginoj estas validitaj, estas konservitaj kaj aktivate en sandbox capa antaŭ ol ili afectus vivan siton funkcionon.

Uzo-kazo inkluzivas:

- Generi legaj utilaj pluginojn sen programistaj involvojoj.
- Prototipi funkciojn, kiuj postulas WordPress hooks aŭ memaj posttipojn de artikoloj.
- Krei maldaŭran automatigon skriptojn por batach operacioj.

## Plugin generado per AI {#generating-a-plugin-via-ai}

Por generi pluginon, ofri la ŝaltan interfacon de chato de Gratis AI Agent kaj deskribi, kion vi bezonas. Ekzemple:

> "Krei pluginon, kiu aĉetas memran administrajn notiron sur la dashboardo."

La AI faros:

1. Producijn la PHP kodon de la plugino uzante strukturitan kod generadon.
2. Validoni la rezulton por sintaksaj eraroj kaj neseguraj pateroj.
3. Konservi la generitan pluginon en la sandbox storo.
4. Rekiti konfirmajon kun la slug de la plugino kaj unuan butonon **Aktivi en Sandbox**.

Vi povas perfami rezulton per sekvi en la sama konversacia filbo antaŭ aktiva.

## Sandbox Aktivaĵo {#sandbox-activation}

Aktivaĵa de generita plugino en la sandbox estas apartigita de aktivaĵa sur la vivan retoj. La sandbox:

- Faras la pluginon en izolita WordPress aĉenta (wp-env) aĉento.
- Capturas ĉiujn PHP erarojn, avizojn aŭ hook konfliktojn.
- Raportas la rezulton de aktivaĵo ĉe la chata interfacco.

Por aktivi pluginon en la sandbox, kliku sur butonon **Aktivi en Sandbox** en la respondo de la AI chato, aŭ uzu la slash command:

`/activate-plugin <plugin-slug>`

Un certa statusmeldung konfirmi se si la aktivação sukcesisita aŭ ne. En caso de nefolg, la erorlogi estas prezentita en la chata temo.

## Administriĝo de generitaj pluginoj {#managing-generated-plugins}

Generitaj pluginoj estas listita en **Gratis AI Agent → Plugin Builder → Manage Plugins**. De ĉi tiu skrimi vi povas:

| Ação | Deskribo |
|---|---|
| **View source** | Revizi la tian plenon PHP-koden de la plugino. |
| **Re-activate in sandbox** | Riniti la kontrolon de aktivação en la sandbox. |
| **Install on network** | Dekloji la pluginon al la viva reto (postulilas manĝa konfirma). |
| **Update** | Doni novan versionon per la AI, substituante la ekzistantan kodon. |
| **Delete** | Eliminigi la pluginon el la sandbox stoaro. Neaktive bloki ĝin de ĉiuj sitoj unue privalebile. |

:::warning
**Install on network** dekloji la generitan pluginon al via viva WordPress multisite. Revizi la kodon de la plugino antaŭ la progresado. Gratis AI Agent demandos konfirmon antaŭ finita viva instalado.
:::

## Instalado de generita plugino sur la reto {#installing-a-generated-plugin-on-the-network}

Kiam vi estas satisfacita per la sandbox-plugin, vi povas instali ĝin sur la viva reto:

1. Aliri **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Kliki sur **Install on Network** apud la plugino, kiun vi volas dekloji.
3. Konfirme la dialogon. La plugino estas instalita en `wp-content/plugins/` kaj aktiva pri reto.

Alternativne, uzu la slash command en la chata interfaco:

```
/install-plugin <plugin-slug>
```

## Plugin updatoj {#plugin-updates}

Por aktualizi generitan pluginon, deskribi la ŝanĝon al la AI-asisto en nova konversacio:

> "Aktualizi la dashboard-notice plugin por montri nur la notadon al administratoroj."

La AI generas novan versionon, kiu aparas en la sandbox kiam la aktuala versiono. Vi revizi la diff kaj konfirme antaŭ ol la updato aplikiĝas.

## HookScanner Integation {#hookscanner-integration}

La Plugin Builder uzas **HookScanner** integritan por analizare la hooks kaj filterojn, kiuj estas registritaj de ĉiu generita plugino. La rezultoj de HookScanner estas montritaj en la chata respondo kaj inkluzivas:

- Ação hooks registritaj (`add_action` vokoj).
- Filtro hooks registritaj (`add_filter` vokoj).
- Ĉiokaj hooks, kiuj estas trovitaj en plugin dependencoj (skiptas direktiojn `vendor/` kaj `node_modules/`).

Tio helpas vi kompreni la vivman de plugino antaŭ ol aktivi ĝin.

## Sektura Konsideraĵoj {#security-considerations}

- Generitaj pluginoj estas apartaj de manicial instalitaj pluginoj kaj ne estas aksesaj per la standarda WordPress plugin-menĝa skrianto, ĝis vi eksplice instalas ilin sur la retoj.
- La sandbox uzas jarvajn validigon por preveni direktio-traveron kiam skribas plugin filojn.
- Pluginoj kun danĝeraj funkcio vokoj (ekz., `eval`, `exec`, `system`) estas markiritaj dum validado kaj ne komencos aktiviĝi.
