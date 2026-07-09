---
title: Buildar og sandkjar
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0 hefurinn **Plugin Builder & Sandbox System**, sem lelar AI-hjálparinn að gera, aktíva og stjórna WordPress pluginum á netinu þínu – allt í tryggjum, skýrri sandbox umhverfi.

## Översiktur {#overview}

Plugin Builder gerir því mögulegt að AI-hjálparinn skapið sérsniðna WordPress plugins sem svari til náttúrulegum textforritunshópum. Generaðar plugins eru valdið, lagda og aktívað í sandbox lástökkun áður en þau hafa nánast áhrif á vinnu á livenessítandi síðu.

Notkunarþættir eru:

- Skapa ljósa, hlutverfisþjónustaplag (utility plugins) án þess að þarf að vera þegar þú ert að greina.
- Prototyping eiginleika sem krefjast WordPress hooks eða custom post types.
- Skapa stuttlifna skript fyrir flokkunarverkningar (batch operations).

## Genera Plugin með AI {#generating-a-plugin-via-ai}

Til að gera plugin, opna chat-menningu Gratis AI Agent og lýsi því hvað þú þarft. Til dæmis:

> "Skapa plugin sem bætir sérsniðnum admin tilkynningu á dashboard."

AI-hjálparinn mun:

1. Skapa plugin PHP kóða með stöðugum kódagengnum.
2. Valdið úr útflutningu fyrir syntaktískan villur og ótryggja mönnun.
3. Lagða geraðar plugin í sandbox storeinn.
4. Skapa staðfesting með slug-inum fyrir plugininn og knapp **Activate in Sandbox** (Aktíva í Sandbox).

Þú getur fínst því sem er gerað með því að eftirfylgja í sama samræðartré fyrir aktíva.

## Aktíva í Sandbox {#sandbox-activation}

Aktívað plugin í sandbox er annleitt af aktíva í livenessítandi netinu. Sandboxin:

- Skapar plugininn í skýrri WordPress umhverfi (wp-env).
- Fangar upp alla PHP villur, varningar eða hook konfliktar.
- Skýrni aktívaðar niðurstöðu aftur í chat-menninguna.

Til að aktíva plugin í sandbox, klikka á knappa **Activate in Sandbox** (Aktíva í Sandbox) í svari AI-chatins, eða nota slash kommando:

/activate-plugin <plugin-slug>
```

Staðfestingstextur gefur þér vita hvort aktivering hefur verið rétt eða ekki. Ef það er feil, sýnist villunni í chattráðnum.

## Stjórnun gerðra pluginna

Gerðir pluginir eru listir í **Gratis AI Agent → Plugin Builder → Manage Plugins**. Frá þessum skráningu geturð þú:

| Ágeng | Skjalði |
|---|---|
| **View source** | Sjá fúlla PHP kóða pluginins. |
| **Re-activate in sandbox** | Velja að ferja aktiveringsskilningann í sandbox aftur. |
| **Install on network** | Drifta plugininn á live netverk (krefst mannvægranum staðfestingar). |
| **Update** | Gefa nýja útgáfu með AI, sem skiftar upphaflega kóða. |
| **Delete** | Fjara pluginann úr sandbox store. Inaktivarðu hann frá öllum vörum fyrst. |

:::warning
**Install on network** drifur gerða plugininn á live WordPress multisite þínu. Sjá upp í plugin kóða áður en þú halda fram. Gratis AI Agent mun spyrast um staðfestingu fyrir að fullfða live-innstallsinn.
:::

## Innstilling gerðra pluginans á netverk

Þegar þú ert ánægður með einn plugin í sandbox, geturðu þú innstilla hann á live netverki:

1. Gangi **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klikkaðu á **Install on Network** við plugininn sem þú vilt drifta.
3. Staðfesta dialoginn. Pluginurinn er inntinn í `wp-content/plugins/` og aktivert á netverki.

Eftir að það, notaðu sláttakoma í chat interface:

```
/install-plugin <plugin-slug>
```

## Uppvöxtir pluginna

Til uppvöxtar gerða pluginans skrifa þú breytinguna fyrir AI hjá nýjum samræð:

> "Uppvöxtu dashboard-notice plugininn til að sýna aðeins tilkynningu fyrir stjórnendur."

AI gerir nýja útgáfuna, sem kemur í sandbox saman við núverandi útgáfuna. Þú sjá diff-skiptingu og staðfestir það áður en uppvöxturinn er settur í gang.

## HookScanner Inngang

Plugin Builder notar inn **HookScanner** til að skoða og greina alla hooks og filters sem hverja generert plugin hefur sett upp. Utgangurinn frá HookScanner sýnist í chat-svar og fyllir eftirfarandi upplýsingar:

- Ágengishooks sem eru sett upp (`add_action` kalla).
- Filter hooks sem eru sett upp (`add_filter` kalla).
- Öll hooks sem eru finn í plugin samþættingum (skipta `vendor/` og `node_modules/` forðan).

Þetta hjálpar þér að skilja hvernig einn plugin virkar áður en þú aktivarðir hann.

## Tryggisþróunarstafanir

- Genererte plugins eru lagda sjálft af sig undan manuelle installaðum pluginum og eru ekki aðgengileg með standard skráningarpósti WordPress til þess að þú hefur sérstaklega sett þeim upp á netinu.
- Sandboxinn notar leiðarstafanir til að koma í veg fyrir að forvitna leitaferli (directory traversal) sé notað við skráning pluginanna.
- Plugins sem hafa faranlegar funkstafanir (t.d. `eval`, `exec`, `system`) eru merkt á meðan leiðarstafanirnar eru skoðað og verða ekki aktivarðar.
