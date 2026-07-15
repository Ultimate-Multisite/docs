---
title: Lenane la liphetoho
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Lenane la diphetoho

## 1.18.0 — E lokollotswe ka 2026-06-29 {#1180--released-on-2026-06-29}

### Tse ntjha {#new}

- **Disebediswa tsa Google Calendar** — bala dikhalendara le diketsahalo tse hlophisitsweng bakeng sa di-automation tse tsebang kemiso
- **Ho hokahanya mabitso le bathusi ba ba bang teng** — bapisa bankakarolo ba khalendara le basebedisi ba sebaka le mabitso
- **Dikeiti tsa tumello ya motho le direkoto tsa dikgopotso** — emisa di-automation bakeng sa tlhahlobo mme o qobe ditsebiso tse phetwang
- **Mofani wa TextBee SMS** — romela ditsebiso tsa melaetsa ya mongolo tse hlophisitsweng ka TextBee
- **Sephuthelwana se tswetseng pele se tsamayang mmoho** — eketsa filesystem ya moqapi ya tshepehang, database, WP-CLI, REST dispatcher, sehahi sa plugin, git snapshot, taolo ya basebedisi, le disebediswa tsa benchmark tse abuwang ka thoko ho moaho wa WordPress.org

### E ntlafaditswe {#improved}

- **Tlhophiso ya tshebeletso ya Managed Superdav** — eketsa di-endpoint tsa tshebeletso e amohetsweng le phepelo ya kgokahano ya othomathike bakeng sa dibaka tse tshehetswang
- **Ho paka tokollo** — aha di-ZIP tsa core le Advanced tse arohaneng, phatlalatsa bobedi ho GitHub, mme o romele sephuthelwana sa core feela ho WordPress.org

### E lokisitswe {#fixed}

- **Botshepehi ba kopo ya AI** — ntlafatsa kgetho ya mohlala, dinako tsa ho fela ha kopo, mohlala wa tlhophiso ya kamehla, tshwaro ya reasoning-text, le tataiso ya ho leka hape bakeng sa dipitso tsa disebediswa tse sa nepahalang
- **Ho tiisa khalendara le dikgopotso** — matlafatsa di-token tsa Google Calendar le ho tlosa diphetapheto tsa dikgopotso
- **Ho qala tshebediso le ho tswela pele ka ditumello** — lokisa ho thakgolwa ha onboarding ya frontend le ho tswela pele ha bokgoni bo netefaditsweng
- **Mathata a tlhahlobo ya ho paka ya WordPress.org** — rarolla maikutlo a tlhahlobo ya ho paka bakeng sa tokollo ya core

## 1.16.0 — E lokollotswe ka 2026-05-20 {#1160--released-on-2026-05-20}

### Tse ntjha {#new-1}

- **Bokgoni ba Generate Logo SVG** — Theme Builder jwale e ka hlahisa le ho kenya di-SVG tsa logo tse ikgethileng ka tlhwekiso e bolokehileng bakeng sa namespace
- **Ho kenya senepe puisano ya discovery** — puisano ya discovery ya Theme Builder jwale e kenyelletsa mohato wa ho kenya senepe bakeng sa maemo a moralo a nonneng
- **Bokgoni ba Validate Palette Contrast** — hlahloba dipara tsa mebala bakeng sa boikamahanyo le WCAG pele o di sebedisa ho theme
- **Dimenu tsa kamohelo ya baeti** — Theme Builder jwale e ka hlahisa maqephe a dimenu tsa dijo le dino a hlophisitsweng bakeng sa dikgwebo tsa kamohelo ya baeti
- **Ho bontsha ponelopele ya desktop le mobile** — bona ponelopele ya moralo wa hao ho disebediswa tsa desktop le mobile nakong ya kgetho ya tataiso ya moralo
- **Parametha ya leibole ya ho tsamaya** — bokgoni ba Create Menu jwale bo tshehetsa `navigation_label` e ikemetseng e arohaneng le sehlooho sa leqephe
- **Ho fumaneha ha disebediswa tsa Tier 1** — sd-ai-agent/site-scrape jwale ke sesebediswa sa Tier 1 se fumanehang ka kamehla ho Theme Builder

### E lokisitswe {#fixed-1}

- **Cache ya AI Client** — jwale e tshehetswa ke transients bakeng sa ho phehella pakeng tsa dikopo, ho thibela tahlehelo ya data mesebetsing ya agent e nkang nako e telele
- **Dihokelo tsa diketso tsa mola wa plugin** — di lokisitswe mme tsa bitswa hape bakeng sa ho hlaka

## 1.10.0 — E lokollotswe ka 2026-05-05 {#1100--released-on-2026-05-05}

### Tse ntjha {#new-2}

- **Patlo ya inthanete ya Tavily** — eketsa Tavily e le mofani wa patlo bakeng sa diphetho tsa patlo ya inthanete tse nonneng mmoho le Brave Search
- **Bokgoni bo hahelletsweng ka hare bo tsebang theme** — ditataiso tsa bokgoni tsa Block Themes, Classic Themes, Kadence Blocks, le Kadence Theme jwale di tla le plugin
- **Bokgoni ba foromo ya kgokahano ya sehahi sa sebaka** — eketsa foromo ya kgokahano leqepheng lefe kapa lefe ka kotloloho ho tswa sehokelong sa puisano

### E ntlafaditswe {#improved-1}

- **Kopanyo ya WooCommerce e hlophisitswe botjha** — jwale e sebedisa di-API tsa tlhaho tsa WooCommerce bakeng sa botshepehi le kgokahano e betere
- **Lenane la bafani le ntjhafala ka bo lona** — ha plugin efe kapa efe e kenngwa tshebetsong kapa e tloswa tshebetsong

### E lokisitswe {#fixed-2}

- **Bokgoni ba navigate-to** — ho lokisitswe potoloho e sa feleng ya ho laela hape maqepheng a mang a admin
- **Bokgoni ba list-posts** — jwale bo rarolla ka nepo mabitso a mekgahlelo le di-tag hore e be di-slug
- **Ditaelo tsa WP-CLI** — ho kgutlisitswe di-alias tsa namespace tse neng di haella ka mora refactor e fetileng
- **Automation ya diketsahalo** — e sebetsana ka bonolo le dibaka moo ditafole tsa automation di so kang di hlahiswa
- **Bokgoni ba memory-save** — jwale bo sebedisa prefix e nepahetseng ya namespace ho sehahi sa ditaelo tsa system
- **Diphetho tsa disebediswa tsa Scalar** — jwale di phuthetswe ka nepo pele di kgutlisetswa ho AI
- **Dipalo-palo tsa tshebediso** — jwale di sebetsana ka nepo le sebopeho sa kgale sa senotlolo sa bokgoni ha ho ntlafatswa ho tswa diphetolelong tsa kgale
