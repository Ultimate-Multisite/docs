---
title: Tantaran'ny fanovana
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Diarin’ny fanovana

## 1.18.0 — Navoaka tamin’ny 2026-06-29 {#1180--released-on-2026-06-29}

### Vaovao {#new}

- **Fitaovana Google Calendar** — mamaky kalandrie sy hetsika voarindra ho an’ny automatisation mahafantatra fandaharam-potoana
- **Fampifandraisana fifandraisana sy mpanampy mpanatrika** — mampifanaraka ny mpandray anjara amin’ny kalandrie amin’ny mpampiasa sy fifandraisana ao amin’ny site
- **Vavahadin’ny fankatoavan’olombelona sy firaketana fampahatsiahivana** — mampiato ny automatisation hojerena ary misoroka fampahafantarana miverimberina
- **Mpamatsy SMS TextBee** — mandefa fampahafantarana hafatra an-tsoratra voarindra amin’ny alalan’ny TextBee
- **Fonosana mpiara-miasa mandroso** — manampy fitaovana filesystem ho an’ny mpamorona azo itokisana, database, WP-CLI, mpandefa REST, mpanamboatra plugin, git snapshot, fitantanana mpampiasa, ary benchmark zaraina misaraka amin’ny build WordPress.org

### Nohatsaraina {#improved}

- **Fananganana serivisy Superdav tantanana** — manampy endpoints serivisy nampiantranoina sy famatsiana fifandraisana mandeha ho azy ho an’ny sites tohanana
- **Fonosana famoahana** — manamboatra ZIP fototra sy Advanced misaraka, mamoaka azy roa ao amin’ny GitHub, ary mandefa ny fonosana fototra ihany any amin’ny WordPress.org

### Namboarina {#fixed}

- **Fahatokisana fangatahana AI** — manatsara ny fifantenana modely, fe-potoana fangatahana, modely fananganana default, fikirakirana reasoning-text, ary torolalana retry ho an’ny antso fitaovana tsy manankery
- **Fanamafisana kalandrie sy fampahatsiahivana** — manamafy ny token Google Calendar sy ny fanesorana fampahatsiahivana miverimberina
- **Onboarding sy fanohizana fankatoavana** — manamboatra ny fandefasana onboarding amin’ny frontend sy ny fanohizana fahaiza-manao voamarina
- **Olana tamin’ny famerenana fonosana WordPress.org** — mamaly ny hevitra avy amin’ny famerenana fonosana ho an’ny famoahana fototra

## 1.16.0 — Navoaka tamin’ny 2026-05-20 {#1160--released-on-2026-05-20}

### Vaovao {#new-1}

- **Fahaiza-manao Generate Logo SVG** — Theme Builder dia afaka mamorona sy mampiditra SVG logo manokana miaraka amin’ny fanadiovana azo antoka amin’ny namespace
- **Fampakarana sary ao amin’ny dinidinika fikarohana** — ny dinidinika fikarohana an’ny Theme Builder izao dia ahitana dingana fampakarana sary ho an’ny tontolon-kevitra famolavolana manankarena kokoa
- **Fahaiza-manao Validate Palette Contrast** — manamarina tsiroaroa loko ho mifanaraka amin’ny WCAG alohan’ny hampiharana amin’ny theme
- **Menus fandraisam-bahiny** — Theme Builder izao dia afaka mamorona pejy menu sakafo sy zava-pisotro voarafitra ho an’ny orinasa fandraisam-bahiny
- **Fampisehoana topimaso desktop sy mobile** — asehoy topimaso ny famolavolanao amin’ny fitaovana desktop sy mobile mandritra ny fifantenana lalan’ny famolavolana
- **Parameter etikety navigation** — ny fahaiza-manao Create Menu izao dia manohana `navigation_label` miavaka misaraka amin’ny lohatenin’ny pejy
- **Fisian’ny fitaovana Tier 1** — sd-ai-agent/site-scrape izao dia fitaovana Tier 1 misy amin’ny default ao amin’ny Theme Builder

### Namboarina {#fixed-1}

- **Cache AI Client** — tohanan’ny transients izao ho an’ny faharetana manerana fangatahana, misoroka fahaverezan’angona amin’ny asan’ny agent maharitra
- **Rohy hetsika amin’ny andalana plugin** — nahitsy sy novana anarana mba hazava kokoa

## 1.10.0 — Navoaka tamin’ny 2026-05-05 {#1100--released-on-2026-05-05}

### Vaovao {#new-2}

- **Fikarohana internet Tavily** — manampy Tavily ho mpamatsy fikarohana ho an’ny valin’ny fikarohana internet manankarena kokoa miaraka amin’ny Brave Search
- **Fahaiza-manao anatiny mahafantatra theme** — ny torolalana fahaiza-manao Block Themes, Classic Themes, Kadence Blocks, ary Kadence Theme izao dia tafiditra miaraka amin’ny plugin
- **Fahaiza-manao contact form an’ny mpanamboatra site** — manampy contact form amin’izay pejy rehetra mivantana avy amin’ny interface chat

### Nohatsaraina {#improved-1}

- **Nohavaozina ny fampidirana WooCommerce** — mampiasa API WooCommerce teratany izao ho an’ny fahatokisana sy fifanarahana tsara kokoa
- **Mihavao mandeha ho azy ny lisitry ny mpamatsy** — rehefa misy plugin alefa na vonoina

### Namboarina {#fixed-2}

- **Fahaiza-manao navigate-to** — namboarina ny fihodinana famerenana pejy tsy misy farany amin’ny pejy admin sasany
- **Fahaiza-manao list-posts** — mamaha tsara ankehitriny ny anaran’ny sokajy sy tag ho slugs
- **Baiko WP-CLI** — naverina ny aliases namespace tsy hita taorian’ny refactor teo aloha
- **Automatisation hetsika** — mikirakira am-pilaminana sites izay mbola tsy noforonina ny latabatra automatisation
- **Fahaiza-manao memory-save** — mampiasa ny prefix namespace marina ankehitriny ao amin’ny mpanamboatra toromarika rafitra
- **Valin’ny fitaovana Scalar** — voafono tsara ankehitriny alohan’ny haverina amin’ny AI
- **Antontan’isa fampiasana** — mikirakira tsara ankehitriny ny endrika ability key taloha rehefa manao upgrade avy amin’ny dikan-teny tranainy kokoa
