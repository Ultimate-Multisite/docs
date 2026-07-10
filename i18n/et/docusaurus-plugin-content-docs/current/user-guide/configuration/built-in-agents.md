---
title: Sisseehitatud agendid
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Sisseehitatud agendid {#built-in-agents}

Gratis AI Agent v1.9.0 sisaldab viit sisseehitatud agenti, millest igaüks on eelkonfigureeritud keskendunud tööriistakomplekti, kohandatud süsteemiviiba ja alustamissoovitustega, mis sobivad selle valdkonna levinud ülesannetega. Agentide vahel vahetamine muudab seda, mida assistent teha saab ja kuidas ta vastab — ilma et peaksid midagi seadistama. Superdav AI Agent v1.18.0 saab neile töövoogudele lisada ajakavaga arvestavaid tööriistu, meeldetuletuste kirjeid, kinnituse väravaid ja SMS-teavitusi, kui seotud integratsioonid on seadistatud.

## Mis on agent? {#what-is-an-agent}

Iga agent on nimega konfiguratsiooniprofiil, mis ühendab:

- **Tööriistad** — võimed, mida agent võib käivitada (nt Content Writeril on juurdepääs postituste loomise võimetele; Design Studiol on juurdepääs CSS-i ja theme.json-i võimetele)
- **Süsteemiviip** — juhised, mis määravad agendi tooni, prioriteedid ja piirangud
- **Soovitused** — eelkirjutatud viibad, mida näidatakse vestlusliideses, et aidata sul kiiresti alustada

## Agendi valija avamine {#accessing-the-agent-picker}

1. Ava **Gratis AI Agent** paneel WordPressi halduse külgribal.
2. Klõpsa vestluse päise vasakus ülanurgas **agendi ikoonil** (ikoon muutub vastavalt aktiivsele agendile).
3. **Agent Picker** avaneb vormi-tabeli ülekattena. Iga agent on loetletud koos oma ikooni, nime ja üherealise kirjeldusega.
4. Klõpsa agendi real, et see aktiveerida. Vestluse päis uueneb kohe.

Võid agente vahetada ka vestluse keskel — uue agendi süsteemiviip hakkab kehtima alates järgmisest sõnumist.

## Viis sisseehitatud agenti {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Fookus:** Postituste, lehtede ja kontaktvormide loomine ning redigeerimine.

**Saadaolevad tööriistad:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Kui Superdav AI Agent v1.18.0 integratsioonid on lubatud, võivad heakskiidetud töövoogudele olla saadaval ka seadistatud kalendrikontekst, kinnituse väravad, meeldetuletused ja SMS-teavituste tööriistad.

**Milles see on hea:**
- Blogipostituste mustandite koostamine ja avaldamine lühikirjelduse või kava põhjal
- Uue saidi jaoks maandumislehtede kogumite loomine
- Kontakt- ja päringuvormide koostamine
- Postitustele tunnuspiltide määramine URL-i või otsingu põhjal
- Sündmuse järelteadete koostamine seadistatud Google Calendar konteksti põhjal ning seejärel enne teavituste saatmist kinnituse ootamine

**Alustamissoovitused:**
- *Kirjuta 500-sõnaline blogipostitus WordPress multisite’i eelistest.*
- *Loo lehed Meist, Teenused ja Kontakt ning avalda need.*
- *Lisa Kontakt-lehele broneerimispäringu vorm.*
- *Koosta homse seadistatud kalendrisündmuse osalejatele meeldetuletus ja oota enne selle saatmist kinnitust.*

---

### Site Builder {#site-builder}

**Fookus:** Veebisaidi otsast lõpuni loomine ühe viiba põhjal.

**Saadaolevad tööriistad:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 puhul võivad seadistatud hallatud teenuse, kinnituse, meeldetuletuse, kalendri ja SMS-i tööriistad olla saadaval seal, kus administraatorid need lubavad.

**Milles see on hea:**
- Mitmefaasilise saidi ehitusplaani loomine kirjeldatud ettevõttetüübi jaoks
- Iga faasi autonoomne teostamine — struktuur, sisu, navigeerimine, kujundus
- Plaani keskel tekkinud vigadest taastumine ilma käsitsi sekkumist nõudmata
- Soovitatud pluginate installimine ehituse osana
- Kontaktvormide loomine otse vestlusliidesest (Superdav AI Agent v1.10.0+)
- Käivitamise meeldetuletuste või osalejate järelteadete koordineerimine ilma duplikaatteavitusteta, kui kinnituse väravad ja meeldetuletuse kirjed on lubatud

**Alustamissoovitused:**
- *Ehita fotograafiaportfoolio sait galeriipostituse tüübiga, broneerimislehega ja kontaktvormiga.*
- *Loo restorani veebisait veebimenüü, lahtiolekuaegade ja laua broneerimise päringuvormiga.*
- *Seadista vabakutselise konsultandi sait teenuselehtede, portfoolio jaotise ja blogiga.*
- *Lisa saidiehitaja abil Kontakt-lehele kontaktvorm.*
- *Pärast saidi käivitamise kontrollnimekirja kinnitamist saada seadistatud huvirühma kontaktile SMS-meeldetuletus.*

---

### Design Studio {#design-studio}

**Fookus:** Visuaalne kohandamine — värvid, tüpograafia, CSS ja plokimustrid.

**Saadaolevad tööriistad:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Milles see on hea:**
- Nimega teema eelseadistuste rakendamine (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Globaalse tüpograafia ja värvipalettide peenhäälestus theme.json-i kaudu
- Kohandatud CSS-i lisamine brändispetsiifiliste ülekirjutuste jaoks
- Lehe ekraanipildi tegemine ja selle kujundusprobleemide hindamine

**Alustamissoovitused:**
- *Rakenda warm-editorial eelseadistus ja määra seejärel põhivärviks #2d6a4f.*
- *Tee avalehest ekraanipilt ja ütle, mida sa parandaksid.*
- *Loo korduskasutatav hero-plokimuster täislaiuses taustapildi ja keskele joondatud pealkirjaga.*

### Plugin Manager {#plugin-manager}

**Fookus:** WordPressi pluginate avastamine, installimine ja haldamine.

**Saadaolevad tööriistad:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Milles see on hea:**
- Parima plugina soovitamine kirjeldatud kasutusjuhtumi jaoks
- Võimepakettide installimine registrist
- Saadaoleva võimekataloogi sirvimine kategooria järgi

**Alustamissoovitused:**
- *Mis on parim plugin liikmete kataloogi jaoks?*
- *Installi WooCommerce’i võimepakett.*
- *Näita mulle kõiki saadaolevaid e-kaubanduse võimepakette.*

---

### Support Assistant {#support-assistant}

**Fookus:** Küsimustele vastamine saidi sisu, seadete ja WordPressi konfiguratsiooni kohta.

**Saadaolevad tööriistad:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Mida see hästi teeb:**
- Praeguste saidi seadete ja valikute otsimine
- Selgitamine, millised postituste tüübid, taksonoomiad ja menüüd on saidil konfigureeritud
- Küsimustele „mida see seade teeb?” vastamine, lugedes reaalajas väärtusi
- Toimimine ainult lugemiseks mõeldud diagnostikakihina enne muudatuste tegemist

**Alustamissoovitused:**
- *Millised pluginad ja seaded on sellel saidil praegu aktiivsed?*
- *Loetle kõik sellel saidil registreeritud kohandatud postituste tüübid.*
- *Millised navigeerimismenüüd on olemas ja kuhu need on määratud?*

---

## Superdav automatiseerimise integratsioonid {#superdav-automation-integrations}

Kui Superdav AI Agent v1.18.0 integratsioonid on konfigureeritud, saavad sisseehitatud agendid osaleda turvalisemates ajakavaga arvestavates automatiseerimise töövoogudes:

- **Google Calendar lugemistööriistad** võimaldavad agentidel kontrollida konfigureeritud kalendreid ja sündmusi enne järeltegevuste koostamist.
- **Kontaktide ja osalejate vastendamine** aitab sobitada sündmuse osalejaid WordPress kasutajate või teadaolevate kontaktidega.
- **Inimese kinnituse väravad** peatavad tundlikud toimingud, kuni volitatud kasutaja need üle vaatab ja kinnitab.
- **Meeldetuletuste kirjed** takistavad dubleeritud teavitusi, kui ajastatud tööd uuesti proovivad või korduvad.
- **TextBee SMS-teavitused** saadavad konfigureeritud tekstsõnumeid ainult siis, kui SMS-i mandaatandmed ja töövoo õigused on lubatud.

Soovitatav töövoog: palu agendil sõnum või toiming ette valmistada, vaata kinnituse viip üle ja luba seejärel kinnitatud toimingul jätkuda. Korduvate meeldetuletuste puhul hoia meeldetuletuste duplikaatide eemaldamine lubatuna, et sama sündmust või kontakti ei teavitataks korduvalt.

---

## Agentide kohandamine {#customising-agents}

Iga sisseehitatud agenti saab laiendada või asendada `gratis_ai_agent_agents` filtri kaudu.

### Kohandatud süsteemiviiba lisamine olemasolevale agendile {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Uue agendi registreerimine {#registering-a-new-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Uus agent ilmub agendi valijasse kohe pärast filtri käivitumist.

### Sisseehitatud agendi eemaldamine {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
