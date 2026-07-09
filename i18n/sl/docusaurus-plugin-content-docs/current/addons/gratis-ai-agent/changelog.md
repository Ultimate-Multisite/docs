---
title: Dnevnik sprememb
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Dnevnik sprememb {#changelog}

## 1.9.0 — Izdano 2026-04-28 {#190--released-on-2026-04-28}

### Novo {#new}

- **Zmožnost `create_contact_form`** — ustvari kontaktni obrazec z uporabo aktivnega vtičnika za obrazce (Contact Form 7, WPForms, Fluent Forms ali Gravity Forms) in vrne shortcode, pripravljen za vdelavo v kateri koli prispevek ali stran.
- **Zmožnost `set_featured_image`** — dodeli prikazno sliko prispevku ali strani iz obstoječega ID-ja priloge v Media Library ali oddaljenega URL-ja; samodejno uvozi sliko, ko je naveden URL.
- **Zmožnost `batch_create_posts`** — ustvari več prispevkov v enem klicu zmožnosti. Podpira enake parametre kot `create_post`, poroča o uspehu/neuspehu za vsak prispevek in ima izbirni način `stop_on_error`.
- **Parameter `page_template`** — dodan v `create_post` in `update_post`. Dodeli datoteko predloge strani PHP (npr. `page-full-width.php`) ob ustvarjanju ali posodobitvi. Posredujte prazen niz v `update_post`, da se vrnete na privzeto vrednost teme.
- **Zmožnosti posnetkov zaslona na strani odjemalca** — `capture_screenshot`, `compare_screenshots` in `review_page_design`. Zajemite celostranske posnetke zaslona ali posnetke vidnega polja živih strani prek strežniškega brezglavega brskalnika, primerjajte dva posnetka zaslona in pridobite pregled zasnove, ustvarjen z AI, ki zajema postavitev, tipografijo, barvo in dostopnost.
- **Pet vgrajenih agentov** — Content Writer, Site Builder, Design Studio, Plugin Manager in Support Assistant. Vsak agent ima namenski nabor orodij, prilagojen sistemski poziv in začetne predloge. Preklapljanje je mogoče prek novega **izbirnika agentov** v glavi klepeta. Glejte [Vgrajeni agenti](../../user-guide/configuration/built-in-agents).
- **Zastavice funkcij** — nov zavihek **Settings → Feature Flags** s preklopi za nadzor dostopa (omejitev na skrbnike, omejitev na skrbnike omrežja, dostop naročnikov, onemogoči za nečlane) in možnostmi blagovne znamke (skrij pripis v nogi, ime agenta po meri, skrij izbirnik agentov, uporabi ikono spletnega mesta kot avatar klepeta). Glejte [Nastavitve Gratis AI Agent](../../user-guide/administration/gratis-ai-agent-settings).
- **Obnovitev zadnje seje** — plošča klepeta zdaj samodejno znova naloži najnovejši pogovor ob nalaganju strani in ob odprtju gradnika, zato se kontekst med navigacijo po straneh nikoli ne izgubi.
- **Povezave dejanj vtičnika** — hitre povezave do Settings in registra zmožnosti se zdaj prikažejo na zaslonu WordPress **Plugins → Installed Plugins** pod opisom vtičnika.

### Izboljšano {#improved}

- **Ponovni poskus vira slike** — agent zdaj znova poskusi vse konfigurirane brezplačne vire slik, preden se ob neuspelem prenosu vrne na sliko, ustvarjeno z AI.
- **Plošča z informacijami o modelu** — vedno vidna v glavi klepeta; po prvem sporočilu ni več skrita.
- **Vedenje samodejnega drsenja** — samodejno drsenje se začasno ustavi, ko se uporabnik pomakne navzgor za branje; prikaže se plavajoči gumb **Pomakni se na dno** in se samodejno zapre, ko uporabnik doseže najnovejše sporočilo.
- **Uporabniški vmesnik izbirnika agentov** — preoblikovan kot prekrivni prikaz s tabelo obrazca in ikonami za posamezne agente, kar olajša prepoznavanje in hitro preklapljanje agentov.
- **Leno naloženi kosi JS** — začetni paket JavaScript gradnika klepeta je zdaj razdeljen na leno naložene kose, kar zmanjša začetne velikosti paketov za 75–90 %.
- **Preoblikovanje gradnika klepeta** — poenotena ikona AI nadomešča prejšnji avatar po meri; skladno z vgrajenim sistemom agentov.
- **Pretvorba URL-jev v povezave** — URL-ji, ki se pojavijo v sistemskih sporočilih in oblačkih sporočil o napakah, so zdaj prikazani kot klikljive povezave.

### Popravljeno {#fixed}

- **Odkrivnost zmožnosti** — popravljeni opisi, sklici v sistemskem pozivu in uskladitev imenskega prostora, da se vse zmožnosti zanesljivo pojavijo na seznamu orodij agenta.
- **Predpomnilnik ponudnikov** — ponudniki so zdaj predpomnjeni na ravni celotnega spletnega mesta prek števca različic, kar preprečuje težave z zastarelimi ponudniki v omrežjih multisite.
- **`ability_invalid_output`** — odpravljeno v 12 obdelovalnikih zmožnosti; vsi vračajo pravilno strukturirane odgovore JSON.
- **Cevovod `pending_client_tool_calls`** — povezan od začetka do konca, tako da se klici orodij na strani odjemalca pravilno dokončajo in vrnejo rezultate modelu.
- **Predal zgodovine** — spremembe, ki jih ni mogoče razveljaviti, so izključene s seznama za razveljavitev; povezava **Ogled celotne zgodovine** zdaj deluje pravilno.
- **Sistem sprememb/razveljavitve** — popravljenih pet ločenih napak in poenotenih v novem skrbniškem vmesniku.
- **Obvestilo Save Settings** — obvestilo snackbar se zdaj zanesljivo prikaže po kliku na **Save Settings**.
- **Kontekstni meni koša** — dodana možnost **Trajno izbriši**, da je elemente mogoče trajno izbrisati, ne da bi zapustili pogled koša.
- **Uredi in ponovno pošlji** — klik na ikono za urejanje zdaj vstopi v način urejanja samo za kliknjeno sporočilo, ne za vsa sporočila v niti.
- **Višina postavitve klepeta** — plošča klepeta prilagodi svojo višino, ko se nad stranjo pojavi vsebina, vstavljena z vtičnikom (skrbniška obvestila, pasice), s čimer prepreči, da bi bilo vnosno območje potisnjeno izven zaslona.

---

## 1.4.0 — Izdano 2026-04-09 {#140--released-on-2026-04-09}

### Novo {#new-1}

- **WP-CLI benchmark ukaz** (`wp gratis-ai-agent benchmark`) — zažene Agent Capabilities v1 benchmark suite iz ukazne vrstice za CI cevovode in poteke dela za vrednotenje modelov. Podpira zagone po posameznih vprašanjih, preglasitve ponudnika/modela ter izhod JSON/CSV.
- **Agent Capabilities v1 benchmark suite** — strukturiran nabor kompleksnih večstopenjskih pozivov, ki preizkusijo celotno površino zmožnosti, z ocenjevanjem ter poročanjem o tokenih/trajanju.
- **Zmožnosti vrst objav po meri** — `register_post_type`, `list_post_types`, `delete_post_type`. Registracije se prek tabele options ohranijo tudi po ponovnih zagonih.
- **Zmožnosti taksonomij po meri** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Podpira hierarhične in ploske taksonomije z izbirnimi rewrite slugi.
- **Zmožnosti Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Vključuje pet izbranih prednastavitev: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Zmožnosti Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Bere in zapisuje vrednosti theme.json prek WordPress Global Styles API.
- **Zmožnost upravljanja navigacijskega menija** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Podpira ugnezdene menije in dodelitev lokacije teme.
- **Zmožnost upravljanja možnosti** — `get_option`, `set_option`, `delete_option`, `list_options`. Vključuje vgrajen varnostni seznam blokiranja, ki ščiti kritične WordPress možnosti pred spreminjanjem.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Odkrijte in aktivirajte pakete zmožnosti, distribuirane kot WordPress plugini.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Večfazni načrti gradnje spletnega mesta z odkrivanjem pluginov, sklici na izhode korakov, sledenjem napredku in avtonomnim odpravljanjem napak.
- **Benchmark vprašanje za restavracijsko spletno mesto** (`q-restaurant-website`) — celovit test, ki zajema registracijo CPT, design system, navigacijo in odkrivanje pluginov.
- **PluginI povezovalnikov ponudnikov AI** so dodani v WordPress Playground blueprinte za hitrejšo nastavitev lokalnega razvoja.

### Izboljšano {#improved-1}

- README posodobljen z dokumentacijo povezovalnikov ponudnikov AI in navodili za nastavitev.

### Popravljeno {#fixed-1}

- Odpravljenih 25 napak testov PHPUnit na veji `main`.
- Popravljen format URL-ja izdaj GitHub v `blueprint.json`.
- Preštevilčenje ID-jev opravil za preprečevanje trkov s starimi ID-ji.

---

## 1.3.x {#13x}

_Prejšnje opombe ob izdaji se vzdržujejo v repozitoriju plugina._
