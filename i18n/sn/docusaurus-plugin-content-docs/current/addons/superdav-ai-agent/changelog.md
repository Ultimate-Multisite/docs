---
title: Nhoroondo yekuchinja
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Nhoroondo yeshanduko

## 1.18.0 — Yakaburitswa musi wa 2026-06-29 {#1180--released-on-2026-06-29}

### Zvitsva {#new}

- **Zvishandiso zveGoogle Calendar** — verenga makarenda nezviitiko zvakagadziriswa kuitira maautomations anoziva hurongwa
- **Kufananidza macontact nevabatsiri vevapindi** — fananidza vapindi vekarenda nevashandisi vesaiti nemacontact
- **Magedhi ekubvumidzwa nemunhu uye marekodhi ezviyeuchidzo** — misa maautomations kuti aongororwe uye dzivirira zviziviso zvakapetwa
- **TextBee SMS provider** — tumira zviziviso zvemameseji akagadziriswa kuburikidza neTextBee
- **Advanced companion package** — wedzera trusted-developer filesystem, database, WP-CLI, REST dispatcher, plugin builder, git snapshot, user-management, uye benchmark tools zvinoparadzirwa zvakasiyana neWordPress.org build

### Zvakavandudzwa {#improved}

- **Managed Superdav service setup** — wedzera maendpoint ebasa rakahostwa uye kugadzira kubatana otomatiki kumasaiti anotsigirwa
- **Kurongedza kuburitswa** — gadzira maZIP akasiyana ecore neAdvanced, buritsa ese paGitHub, uye tumira package yecore chete kuWordPress.org

### Zvakagadziriswa {#fixed}

- **Kuvimbika kwezvikumbiro zveAI** — vandudza kusarudzwa kwemodel, nguva dzekupera kwezvikumbiro, default setup model, kubata reasoning-text, uye nhungamiro yekuedzazve pamacall etool asiri pamutemo
- **Kusimbisa Calendar nezviyeuchidzo** — simbisa Google Calendar tokens uye kudzivirira kupetwa kwezviyeuchidzo
- **Onboarding nekutangazve kwemvumo** — gadzirisa kutangwa kweonboarding kufrontend uye kutangazve kwemano akasimbiswa
- **Nyaya dzekuongororwa kwekurongedza paWordPress.org** — gadzirisa mhinduro dzekuongororwa kwekurongedza pakuburitswa kwecore

## 1.16.0 — Yakaburitswa musi wa 2026-05-20 {#1160--released-on-2026-05-20}

### Zvitsva {#new-1}

- **Generate Logo SVG ability** — Theme Builder yava kugona kugadzira uye kuisa custom logo SVGs dzine namespace-safe sanitisation
- **Kukwidzwa kwemufananidzo muhurukuro yekutsvaga** — hurukuro yekutsvaga yeTheme Builder yava kusanganisira nhanho yekukwidza mufananidzo kuitira mamiriro edhizaini akapfuma
- **Validate Palette Contrast ability** — tarisa mapeya emavara kuti aenderane neWCAG usati waashandisa kutheme
- **Mamenu eHospitality** — Theme Builder yava kugona kugadzira mapeji emamenu echikafu nezvinwiwa akarongwa emabhizimisi ehospitality
- **Kuratidza preview padesktop nepamobile** — ona preview yedhizaini yako pamidziyo yedesktop nepamobile panguva yekusarudza gwara redhizaini
- **Navigation label parameter** — Create Menu ability yava kutsigira `navigation_label` yakasiyana kubva kumusoro wepeji
- **Kuwanikwa kweTier 1 tool** — sd-ai-agent/site-scrape yava Tier 1 tool inowanikwa by default muTheme Builder

### Zvakagadziriswa {#fixed-1}

- **AI Client cache** — yava kutsigirwa nema transients kuitira kuramba iripo pakati pezvikumbiro, ichidzivirira kurasika kwedata pamabasa eagent anomhanya kwenguva refu
- **Plugin row action links** — dzakagadziriswa uye dzakapiwa mazita matsva kuti dzinyatsojeka

## 1.10.0 — Yakaburitswa musi wa 2026-05-05 {#1100--released-on-2026-05-05}

### Zvitsva {#new-2}

- **Tavily internet search** — wedzera Tavily se search provider kuitira mhedzisiro yekutsvaga painternet yakapfuma pamwe chete neBrave Search
- **Unyanzvi hwakavakirwa mukati hunoziva theme** — magwara eunskill eBlock Themes, Classic Themes, Kadence Blocks, neKadence Theme ava kuuya neplugin
- **Site builder contact form ability** — wedzera fomu rekubatana kune chero peji zvakananga kubva muchat interface

### Zvakavandudzwa {#improved-1}

- **WooCommerce integration refactored** — yava kushandisa maAPI eWooCommerce echizvarwa kuitira kuvimbika nekukodzerana zviri nani
- **Rondedzero yeprovider inozvizorodza otomatiki** — kana chero plugin yaitwa active kana deactivated

### Zvakagadziriswa {#fixed-2}

- **navigate-to ability** — yakagadzirisa infinite reload loop pane mamwe mapeji eadmin
- **list-posts ability** — yava kugadzirisa nemazvo mazita emacategory nematag kuita slugs
- **WP-CLI commands** — dzakadzorera namespace aliases dzakanga dzashaikwa mushure merefactor yakapfuura
- **Event automation** — inobata zvakanaka masaiti uko matafura eautomation asati agadzirwa
- **memory-save ability** — yava kushandisa namespace prefix chaiyo mu system instruction builder
- **Scalar tool results** — dzava kuputirwa nemazvo dzisati dzadzoserwa kuAI
- **Usage statistics** — dzava kubata nemazvo legacy ability key format pa upgrade kubva kumavhezheni ekare
