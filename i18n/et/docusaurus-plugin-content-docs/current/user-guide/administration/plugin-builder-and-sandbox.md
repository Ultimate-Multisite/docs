---
title: Plugi ehitija ja sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 sisse esileb **Plugin Builder & Sandbox System**, mis võimaldab AI assistentile WordPress pluginid luua, aktiveerida ja hallata oma võrku pluginid – kõik turvalise, eraldatud sandboxi keskkonna abil.

## Üldine ülevaade

Plugin Builder võimaldab AI assistentit laussida loodud WordPress pluginid vastavalt loomulasteelnele küsimustele. Loodud pluginid valideeruvad, salvestatakse ja aktiveeruvad sandboxi kerki all enne kui nad mõjutavad elujahtluse funktsioone.

Kasutusteemaid on:

- Väike kasutusalendite pluginide loomine ilma arendaja osalemata.
- Funktsioonide prototüütimine, mis nõuavad WordPress hookide või kujutatud sisu tüüpi (custom post types).
- Lühikese automaatsusskriptide luomine partioperaatsioonide jaoks.

## Plugin loomine AI abil

Plugin loomiseks avage Gratis AI Agent chatipea ja kirjeldage, mida te vajate. Näiteks:

> "Loo plugin, mis lisab dashboardile kujutatud admini teavituskohta."

AI:

1. Loob plugin PHP koodi struktureeritud koodiloomise abil.
2. Valideerib väljundit sintaksilise viga ja turvalise skeemide suhtes.
3. Salvestab loodud plugin sandboxi poolesse.
4. Tagastab kinnituse plugin-slugiga ja **Aktiveeri Sandboxis** nupuga.

Võite tulemust täpustada samas kesksekonnas jätkamise abil aktiveerimise enne aktiivamist.

## Sandboxi aktiveerimine

Loodud pluginide aktiveerimine sandboxis on erinev elujahtluse võrku aktiveerimast. Sandbox:

- Järdab pluginid eraldatud WordPress keskkonnas (wp-env).
- Kujustab kõik PHP vigu, varningud või hooki konfliktid.
- Teatab aktiveerimise tulemuse chatipea tagasi.

Pluginide aktiveerimiseks sandboxis klõpsake AI chati vastuse all olev **Aktiveeri Sandboxis** nupulile, või kasutage slashi käsku:

/activate-plugin <plugin-slug>
```

Statuusviid on teeb, kas aktiveerimine õnnestus või ebaõnnestus oli. Ebaõnnestuse korral näidetakse viga logi jutust.

## Generatsioonide pluginide haldamine

Generatsioonide pluginid on n listitud **Gratis AI Agent → Plugin Builder → Manage Plugins**-ist. Selle ekraanilt saavad teada:

| Tegutuse | Kirjeldus |
|---|---|
| **Vaata allikust** | Vaadige kogu plugin PHP koodi üle. |
| **Uuest aktiveerida sandboxis** | Käija sandbox aktivaerimise kontrolli uuesti. |
| **Installaati võrkule** | Lükka plugin elavale võrku (soovitab manuaalset kinnitust). |
| **Päivitus** | Anna AI-assistentile uus versioon ja asenda olemasoleva koodi. |
| **Eelamine** | Eemaldage plugin sandboxi laendist. Lülitage see välja kõikidest veebitest esmalt. |

:::warning
**Installaati võrkule** lükkab generatsiooni pluginile teie elavale WordPress multisite'ile. Vaadige plugin koodi üle enne jätkamist. Gratis AI Agent küsib kinnitust enne elavale installaati lõpetamist.
:::

## Generatsioonide pluginil installimine võrkule

Kui olete rahul sandboxis oleva pluginiga, saate seda installida elavale võrkule:

1. Minenda **Gratis AI Agent → Plugin Builder → Manage Plugins**-i külastesse.
2. Klõpsake **Install on Network**-ile soovitud pluginil kõrval.
3. Kinnitage dialoog. Plugin installiti `wp-content/plugins/` ja aktiiviti võrkule.

Alternatiivselt, kasutage jutust interface'is:

```
/install-plugin <plugin-slug>
```

## Pluginipäivitusid

Generatsiooni pluginil uuendamiseks kirjeldage muudatus AI-assistentile uues jutust:

> "Päivita dashboard-notice plugin, et näitaks ainult administratoritele teavet."

AI genereerib uue versiooni, mis ilmub sandboxi kõrvale oleva versioni kõrval. Vaadige diffi ja kinnitage enne uuenduse kasutamist.

## HookScanner Integreerimine

Plugin Builder kasutab integreeritud **HookScanner**i analüüsiks, et tuvastada iga loodud pluginiga registreeritud hookid ja filterid. HookScanner väljund näed chati vastuses ja sisaldab:

- Tegevushookid (registreeritud `add_action` kutsed).
- Filterhookid (registreeritud `add_filter` kutsed).
- Kõik hookid, mida leiti pluginide sõltuvustest (skandib `vendor/` ja `node_modules/` direktoriumeid).

See aitab teile mõista pluginiga oleva käitumist enne selle aktiveerimist.

## Turvalisuse arvestused

- Loodud pluginid on salvestatud eraldatult manuaalselt installitud pluginidest ja on saadaval ainult siis, kui installite neid eksplisiitselt võrku sisse.
- Sandbox kasutab teel validerimist (path validation) direktoriumeid laadida, et vältida direktoriumide ületamist pluginifailide kirjeldamisel.
- Pluginid, mis sisaldavad ohtlikke funktsioonikutske (nt `eval`, `exec`, `system`), on validatsiooni ajal märkimisväärsed ja neid ei aktiveerita.
