---
title: Diiwaanka isbeddellada
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Diiwaanka isbeddellada {#changelog}

## 1.18.0 — La sii daayay 2026-06-29 {#1180--released-on-2026-06-29}

### Cusub {#new}

- **Qalabka Google Calendar** — akhri jadwallada iyo dhacdooyinka la habeeyey si otomaatigyo jadwal-og ah loo sameeyo
- **Khariidaynta xiriirrada iyo kaaliyayaasha ka qaybgalayaasha** — is waafaji ka qaybgalayaasha jadwalka isticmaalayaasha iyo xiriirrada bogga
- **Albaabbada oggolaanshaha aadanaha iyo diiwaannada xusuusinta** — hakad geli otomaatigyada si dib-u-eegis loo sameeyo, kana fogow ogeysiisyada nuqulka ah
- **Bixiyaha SMS ee TextBee** — dir ogeysiisyada fariin-qoraalka ah ee la habeeyey adigoo adeegsanaya TextBee
- **Xirmo wehel horumarsan** — ku dar qalabka nidaamka faylasha horumariye-lagu-kalsoon-yahay, xog-ururinta, WP-CLI, qaybiyaha REST, dhisaha plugin, sawir-qaadista git, maareynta isticmaalaha, iyo cabbirka waxqabadka oo si gaar ah looga qaybiyo dhismaha WordPress.org

### La hagaajiyey {#improved}

- **Dejinta adeegga Superdav la maareeyo** — ku dar endpoints adeeg martigelin ah iyo bixinta isku xirka otomaatiga ah ee bogagga la taageero
- **Xirmeynta sii-daynta** — dhis ZIP-yo core iyo Advanced oo kala duwan, labadaba ku daabac GitHub, kuna dir kaliya xirmada core WordPress.org

### La saxay {#fixed}

- **Kalsoonida codsiga AI** — hagaaji xulashada model-ka, waqtiga-dhaca codsiyada, model-ka dejinta caadiga ah, maaraynta qoraalka sababeynta, iyo hagidda isku-dayga mar kale ee wicitaannada qalab ee aan sax ahayn
- **Adkaynta jadwalka iyo xusuusinta** — xooji Google Calendar tokens iyo ka saarista nuqulka xusuusinnada
- **Onboarding iyo sii-wadidda oggolaanshaha** — sax bilaabidda onboarding-ka frontend iyo sii-wadidda awoodaha la xaqiijiyey
- **Arrimaha dib-u-eegista xirmeynta WordPress.org** — wax ka qabso falcelinta dib-u-eegista xirmeynta ee sii-daynta core

## 1.16.0 — La sii daayay 2026-05-20 {#1160--released-on-2026-05-20}

### Cusub {#new-1}

- **Awoodda Generate Logo SVG** — Theme Builder hadda wuu abuuri karaa oo dhexgelin karaa SVG-yo astaamo gaar ah leh oo lagu nadiifiyey si namespace-ammaan ah
- **Sawir gelin wareysiga ogaanshaha** — wareysiga ogaanshaha ee Theme Builder hadda waxa ku jira tallaabo sawir lagu geliyo si loo helo macne naqshadeed oo hodan ah
- **Awoodda Validate Palette Contrast** — hubi lammaanaha midabbada si ay ugu hoggaansamaan WCAG ka hor inta aan lagu dabaqin theme
- **Menus martigelin** — Theme Builder hadda wuu abuuri karaa bogag menus cunto iyo cabitaan oo qaabaysan oo loogu talagalay ganacsiyada martigelinta
- **Soo-bandhigga desktop iyo mobile** — horay u eeg naqshaddaada qalabka desktop iyo mobile inta lagu jiro xulashada jihada naqshadda
- **Parameter-ka calaamadda navigation-ka** — awoodda Create Menu hadda waxay taageertaa `navigation_label` gaar ah oo ka duwan cinwaanka bogga
- **Helitaanka qalabka Tier 1** — sd-ai-agent/site-scrape hadda waa qalab Tier 1 ah oo si caadi ah looga heli karo Theme Builder

### La saxay {#fixed-1}

- **Kaydka AI Client** — hadda waxaa taageera transients si joogteyn is-dhaafsi-codsi ah loo helo, taasoo ka hortagaysa luminta xogta hawlaha agent-ka ee muddo dheer socda
- **Xiriiriyeyaasha ficilka safka plugin** — waa la saxay oo dib ayaa loogu magac daray si ay u caddaadaan

## 1.10.0 — La sii daayay 2026-05-05 {#1100--released-on-2026-05-05}

### Cusub {#new-2}

- **Raadinta internet-ka Tavily** — ku dar Tavily sida bixiye raadin si loo helo natiijooyin raadinta internet-ka oo hodan ah, iyadoo lala adeegsanayo Brave Search
- **Xirfado gudaha ku jira oo theme-og ah** — hagayaasha xirfadaha Block Themes, Classic Themes, Kadence Blocks, iyo Kadence Theme hadda waxay la yimaadaan plugin-ka
- **Awoodda foomka xiriirka dhisaha bogga** — ku dar foom xiriir bog kasta si toos ah uga imanaya interface-ka chat-ka

### La hagaajiyey {#improved-1}

- **Isdhexgalka WooCommerce dib ayaa loo habeeyey** — hadda wuxuu adeegsadaa APIs-ka asalka ah ee WooCommerce si loo helo kalsooni iyo waafaqid ka fiican
- **Liiska bixiyeyaasha si otomaatig ah ayuu u cusboonaadaa** — marka plugin kasta la hawlgeliyo ama la damiyo

### La saxay {#fixed-2}

- **Awoodda navigate-to** — waxaa la saxay wareegga dib-u-raridda aan dhammaadka lahayn ee bogagga admin qaarkood
- **Awoodda list-posts** — hadda si sax ah ayay u xallisaa magacyada category iyo tag una beddeshaa slugs
- **Amarrada WP-CLI** — waxaa la soo celiyey magacyo-namespace aliases oo maqnaa ka dib dib-u-habayn hore
- **Otomaatigga dhacdooyinka** — si deggan ayuu u maareeyaa bogagga aan weli la abuurin miisaska otomaatigga
- **Awoodda memory-save** — hadda waxay adeegsataa horgalaha namespace-ka saxda ah ee dhisaha tilmaanta nidaamka
- **Natiijooyinka qalabka scalar** — hadda si sax ah ayaa loo duubaa ka hor inta aan loo celin AI
- **Tirakoobka isticmaalka** — hadda si sax ah ayay u maareeyaan qaabka hore ee furaha awoodda marka laga cusboonaysiinayo noocyo duug ah
