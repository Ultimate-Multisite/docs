---
title: Lisäosan rakentaja ja sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 tuo käyttöön **Plugin Builder & Sandbox System**, joka antaa tekoälyassistentille luoda, aktiivistaa ja hallita WordPress-lisäosia verkossasi — kaikki turvallisessa, eristetyssä sandbox-ympäristössä.

## Yleiskatsaus {#overview}

Plugin Builder mahdollistaa AI-assistentin kirjoittaa räätälöityjä WordPress-lisäosia vastauksena luonnollisiin kielen pyyntöihin. Luodut lisäosat validoidaan, tallennetaan ja aktivoidaan sandbox-kerroksen sisällä ennen kuin ne koskettavat live-sivuston toiminnallisuutta.

Käyttötapaukset ovat esimerkiksi:

- Kevyiden työkalu-lisäosien luominen ilman kehittäjän osallistumista.
- Ominaisuuksien prototyyppaus, jotka vaativat WordPress hookeja tai räätälöityjä postityyppejä (custom post types).
- Lyhytaikaisen automaatiokoodin luominen erätoimintoja varten.

## Lisäosan luominen AI:n avulla {#generating-a-plugin-via-ai}

Lisäosan luomiseksi avaa Gratis AI Agent -chatkäyttöliittymän ja kuvaile, mitä tarvitset. Esimerkiksi:

> "Luo lisäosa, joka lisää räätälöidyn hallintapalkin ilmoituksen."

AI tekee seuraavaa:

1. Tuottaa lisäosan PHP-koodin rakenteellisen koodaluonninnalla (structured code generation).
2. Validointi tulosteesta syntaksivirheiden ja turvattomien mallien suhteen.
3. Tallentaa luodun lisäosan sandbox-varastoon.
4. Palauttaa vahvistuksen lisäosan slugilla ja **Aktivoi sandboxissa** -painikkeella.

Voit hioa tulosta jatkamalla samassa keskusteluketjussa ennen aktivoimista.

## Sandboxin aktivoiminen {#sandbox-activation}

Luodun lisäosan aktivoiminen sandboxissa on erillistä kuin sen aktivoiminen live-verkossa. Sandbox:

- Suorittaa lisäosan eristetyssä WordPress-ympäristössä (wp-env).
- Tallentaa kaikki PHP-virheet, varoitukset tai hook-konfliktit.
- Ilmoittaa aktivaation tuloksen takaisin chatkäyttöliittymässä.

Lisäosan aktivoimiseksi sandboxissa klikkaa AI-chatvastauksessa olevaa **Aktivoi sandboxissa** -painiketta, tai käytä slash-komentoa:

```
/activate-plugin <plugin-slug>
```

Tila tila viestin vahvistaa, onko aktivoituminen onnistunut vai epäonnistunut. Epäonnistumisessa virheilmoitus näytetään keskusteluketjussa.

## Generoitujen pluginien hallinta {#managing-generated-plugins}

Generoidut pluginit luetellaan **Gratis AI Agent → Plugin Builder → Manage Plugins** -osiossa. Tältä näytöltä voit:

| Toiminto | Kuvaus |
|---|---|
| **View source** (Katso lähdekoodi) | Tarkastele koko pluginin PHP-koodia. |
| **Re-activate in sandbox** (Aktivoi uudelleen sandboxissa) | Suorita sandbox-aktivaatiotarkistuksen uudelleen. |
| **Install on network** (Asenna verkkoon) | Deployaa pluginin suoraan elävään WordPress multisiteen (vaatii manuaalista vahvistusta). |
| **Update** (Päivitä) | Tarjoa uusi versio AI:lle, joka korvaa olemassa olevan koodin. |
| **Delete** (Poista) | Poista plugin sandbox-varastosta. Aktivoi se ensin kaikilta sivustoille. |

:::warning
**Install on network** -toiminto deployaa generoidun pluginin suoraan elävään WordPress multisiteesi. Tarkastele pluginin koodia ennen jatkamista. Gratis AI Agent pyytää vahvistusta ennen live-asennuksen viimeistelyä.
:::

## Generoidun pluginin asennus verkkoon {#installing-a-generated-plugin-on-the-network}

Kun olet tyytyväinen sandboxissa olevaan pluginiin, voit asentaa sen elävään verkkoon:

1. Mene **Gratis AI Agent → Plugin Builder → Manage Plugins** -sivulle.
2. Napsauta **Install on Network** -painiketta haluamasi pluginin vieressä.
3. Vahvista dialogi. Plugin asennetaan hakemistoon `wp-content/plugins/` ja aktivoitu verkossa.

Vaihtoehtoisesti käytä slash-komentoa chat-rajapinnassa:

```
/install-plugin <plugin-slug>
```

## Pluginien päivitykset {#plugin-updates}

Generoidun pluginin päivittämiseksi kuvaile muutos AI-avustajalle uudessa keskustelussa:

> "Päivitä dashboard-notice -plugin näyttämään ilmoituksen vain ylläpitäjille."

AI luo uuden version, joka ilmestyy sandboxiin rinnalla nykyisen version kanssa. Tarkastelet diffin ja vahvistat ennen päivityksen soveltamista.

## HookScanner -Integraatio {#hookscanner-integration}

Plugin Builder käyttää integroitu **HookScanneria** analysoidakseen jokaiselta luodulta pluginilta rekisteröityjä hookkeja ja suodattimia. HookScannerin tuloste näytetään chat-vastauksessa ja sisältää:

- Rekisteröidyt toimintohookit (`add_action` -kutsuja).
- Rekisteröidyt suodattinhookit (`add_filter` -kutsuja).
- Mahdolliset hookit pluginin riippuvuuksissa (tietokoneen/node_modules-/ hakemistoja ohitetaan).

Tämä auttaa ymmärtämään pluginin käyttäytymistä ennen sen aktivoimista.

## Turvallisuusnäkökohdat {#security-considerations}

- Luodut pluginit tallennetaan erikseen manuaalisesti asennettujen pluginien joukosta ja niihin ei pääse käsiksi vakiomuotoisen WordPress-pluginhallintanäkymän kautta, ennen kuin asennat niitä nimenomaisesti verkkoon.
- Sandbox käyttää polun validointia estää hakemistojen läpikäyntiä (directory traversal) pluginien tiedostojen kirjoitessa.
- Pluginit, joissa on vaarallisia funktioita kutsutaan (esim. `eval`, `exec`, `system`), merkitään validoinnin aikana ja niitä ei aktivoida.
