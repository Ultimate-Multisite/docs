---
title: Konstruktor pluginů a sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 představuje **Plugin Builder & Sandbox System**, který umožňuje AI asistenta generovat, aktivovat a spravovat WordPress pluginy na vaší síti — vše v rámci bezpečného, izolovaného sandbox prostředí.

## Přehled {#overview}

Plugin Builder umožňuje AI asistenta psát vlastní WordPress pluginy na základě přirozeně formulovaných požadavků. Vygenerované pluginy jsou ověřeny, uloženy a aktivovány uvnitř vrstvy sandbox, než kdy ovlivní funkčnost živého webu.

Použití zahrnuje:

- Generování jednoduchých utilitních pluginů bez zapojení vývojáře.
- Prototypování funkcí, které vyžadují WordPress hooks nebo vlastní typy příspěvků (custom post types).
- Vytváření krátkodobých automatizačních skriptů pro dávkové operace.

## Generování pluginu pomocí AI {#generating-a-plugin-via-ai}

Pro vygenerování pluginu otevřete chatovací rozhraní Gratis AI Agent a popište, co potřebujete. Například:

> "Vytvoř plugin, který přidá vlastní administrátorskou notifikaci na dashboard."

AI provede následující kroky:

1. Vygeneruje PHP kód pluginu pomocí strukturovaného generování kódu.
2. Ověří výstup na syntaxe chyby a nebezpečné vzorce.
3. Uloží vygenerovaný plugin do sandbox úložiště.
4. Vrátí potvrzení s pouzdrem (slug) pluginu a tlačítkem **Activate in Sandbox**.

Můžete vylepšit výsledek pokračováním v téže konverzaci před aktivací.

## Aktivace v sandboxu {#sandbox-activation}

Aktivace vygenerovaného pluginu v sandboxu je odlišná od jeho aktivace na živé síti. Sandbox:

- Spouští plugin v izolovaném WordPress prostředí (wp-env).
- Zachytí jakékoli PHP chyby, varování nebo konflikty hooků.
- Zobrazí výsledek aktivace zpět v chatovém rozhraní.

Pro aktivaci pluginu v sandboxu klikněte na tlačítko **Activate in Sandbox** v odpovědi AI chatu, nebo použijte příkazem vykřičníku:

```
/activate-plugin <plugin-slug>
```

Statusová zpráva potvrdí, zda byla aktivace úspěšná nebo neúspěšná. Při selhání je log chyb zobrazen v konverzaci.

## Správa vygenerovaných pluginů {#managing-generated-plugins}

Vygenerované pluginy jsou uvedeny v sekci **Gratis AI Agent → Plugin Builder → Manage Plugins**. Z tohoto okna můžete:

| Akce | Popis |
|---|---|
| **View source** | Prohlédnout si celý PHP kód pluginu. |
| **Re-activate in sandbox** | Opětovně provést kontrolu aktivace v sandboxu. |
| **Install on network** | Nasadit plugin na živou síť (vyžaduje ruční potvrzení). |
| **Update** | Poskytnout novou verzi přes AI, která nahradí stávající kód. |
| **Delete** | Odebrat plugin ze sandbox úložiště. Nejprve ho deaktivuje ze všech sítí. |

:::warning
**Install on network** nasadí vygenerovaný plugin na vaši živou WordPress multisite. Před pokračováním si prohlédněte kód pluginu. Gratis AI Agent vás požádá o potvrzení před dokončením živé instalace.
:::

## Instalace vygenerovaného pluginu na síti {#installing-a-generated-plugin-on-the-network}

Pokud jste s pluginem v sandboxu spokojeni, můžete ho nainstalovat na živou síť:

1. Přejděte na **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klikněte na **Install on Network** vedle pluginu, který chcete nasadit.
3. Potvrďte dialog. Plugin je nainstalován do `wp-content/plugins/` a aktivován na síti.

Alternativně použijte příkaz vykřičníkem v chatovém rozhraní:

```
/install-plugin <plugin-slug>
```

## Aktualizace pluginů {#plugin-updates}

Pro aktualizaci vygenerovaného pluginu popište změnu AI asistenta v nové konverzaci:

> "Aktualizuj plugin dashboard-notice tak, aby notifikaci zobrazoval pouze administrátorům."

AI vygeneruje novou verzi, která se objeví v sandboxu vedle aktuální verze. Vyhledáte rozdíly (diff) a potvrdíte, než bude aktualizace aplikována.

## Integrace HookScanner {#hookscanner-integration}

Plugin Builder používá integrovaný **HookScanner** k analýze hooků a filtrů registrovaných každým vygenerovaným pluginem. Výstup HookScanner je zobrazen v chatové odpovědi a zahrnuje:

- Registrované action hooky (`add_action` volání).
- Registrované filter hooky (`add_filter` volání).
- Jakékoli hooky nalezené v závislostech pluginu (skakuje adresáře `vendor/` a `node_modules/`).

To vám pomůže pochopit chování pluginu před jeho aktivací.

## Bezpečnostní ohledu {#security-considerations}

- Vygenerované pluginy jsou uloženy zvlášť od ručně nainstalovaných pluginů a nejsou dostupné přes standardní panel správy pluginů WordPress, dokud je explicitně na síti nainstalujete.
- Sandbox používá ověření cesty (path validation), aby zabránil procházení adresářů při zápisu souborů pluginu.
- Pluginy s nebezpečnými voláními funkcí (např. `eval`, `exec`, `system`) jsou označeny během validace a nebudou aktivovány.
