---
title: Üýtgeşmeler žurnaly
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Üýtgeşmeler sanawy {#changelog}

## 1.18.0 — 2026-06-29 senesinde çykaryldy {#1180--released-on-2026-06-29}

### Täze {#new}

- **Google Calendar gurallary** — tertipnamadan habarly awtomatlaşdyrmalar üçin sazlanan kalendarlary we wakalary okaň
- **Kontakt kartalaşdyrmasy we gatnaşyjy kömekçileri** — kalendar gatnaşyjylaryny saýtyň ulanyjylary we kontaktlary bilen gabat getiriň
- **Adam tassyklama tapgyrlary we ýatlatma ýazgylary** — awtomatlaşdyrmalary gözden geçirmek üçin duruzyň we gaýtalanýan habarnamalardan gaça duruň
- **TextBee SMS üpjün edijisi** — sazlanan tekst-habar habarnamalaryny TextBee arkaly iberiň
- **Ösen ýoldaş paket** — WordPress.org gurluşyndan aýratyn paýlanylýan ynamdar-işläp düzüji faýl ulgamy, maglumat bazasy, WP-CLI, REST paýlaýjy, plugin dörediji, git snapshot, ulanyjy-dolandyryş we benchmark gurallaryny goşuň

### Kämilleşdirildi {#improved}

- **Dolandyrylýan Superdav hyzmat gurnawy** — goldanýan saýtlar üçin hosted hyzmat endpoint-lerini we awtomatik birikme üpjünçiligini goşuň
- **Çykyş paketlemesi** — aýratyn core we Ösen ZIP-leri guruň, ikisini-de GitHub-da çap ediň we WordPress.org-a diňe core paketi iberiň

### Düzedildi {#fixed}

- **AI haýyşlarynyň ygtybarlylygy** — model saýlawyny, haýyş timeout-laryny, deslapky gurnama modelini, pikir ýöretme-tekstini işlemegi we nädogry gural çagyryşlary üçin gaýtadan synanyşma görkezmesini kämilleşdiriň
- **Kalendar we ýatlatma berkidilmesi** — Google Calendar token-lerini we ýatlatma gaýtalanmasyny aýyrmagy güýçlendiriň
- **Başlangyç tanyşdyryş we tassyklama dowam etdirmeleri** — frontend başlangyç tanyşdyryşlarynyň işe girizilmegini we tassyklanan başarnyklaryň dowam etdirilmegini düzedýär
- **WordPress.org paketleme gözden geçiriş meseleleri** — core çykarylyş üçin paketleme gözden geçiriş pikirlerini çözüň

## 1.16.0 — 2026-05-20 senesinde çykaryldy {#1160--released-on-2026-05-20}

### Täze {#new-1}

- **Logo SVG döretmek başarnygy** — Theme Builder indi namespace taýdan howpsuz arassalama bilen ýörite logo SVG-lerini döredip we ýerleşdirip bilýär
- **Açyş söhbetdeşliginde surat ýükleme** — Theme Builder açyş söhbetdeşligi indi has baý dizaýn konteksti üçin surat ýükleme ädimini öz içine alýar
- **Palitra kontrastyny barlamak başarnygy** — tema ulanmazdan ozal reňk jübütleriniň WCAG laýyklygyny barlaň
- **Myhmansöýerlik menýulary** — Theme Builder indi myhmansöýerlik kärhanalary üçin gurluşly iýmit we içgi menýu sahypalaryny döredip bilýär
- **Desktop we mobil öňden görkeziş renderingi** — dizaýn ugruny saýlamak wagtynda dizaýnyňyzy desktop we mobil enjamlarda öňden görüň
- **Navigasiýa belligi parametri** — Menu döretmek başarnygy indi sahypa adyndan aýratyn `navigation_label` goldaýar
- **Tier 1 gural elýeterliligi** — sd-ai-agent/site-scrape indi Theme Builder-de deslapky ýagdaýda elýeterli Tier 1 guraldyr

### Düzedildi {#fixed-1}

- **AI Client keşi** — indi haýyşlaryň arasynda dowamlylyk üçin transients bilen goldanýar, uzak işleýän agent wezipelerinde maglumat ýitgisiniň öňüni alýar
- **Plugin setir hereket baglanyşyklary** — düşnüklilik üçin düzedildi we ady üýtgedildi

## 1.10.0 — 2026-05-05 senesinde çykaryldy {#1100--released-on-2026-05-05}

### Täze {#new-2}

- **Tavily internet gözlegi** — Brave Search bilen birlikde has baý internet gözleg netijeleri üçin Tavily-ni gözleg üpjün edijisi hökmünde goşuň
- **Tema-bilen baglanyşykly içerki başarnyklar** — Block Themes, Classic Themes, Kadence Blocks we Kadence Theme başarnyk gollanmalary indi plugin bilen bile iberilýär
- **Saýt dörediji kontakt formasy başarnygy** — chat interfeýsinden islendik sahypa gönüden-göni kontakt formasyny goşuň

### Kämilleşdirildi {#improved-1}

- **WooCommerce integrasiýasy täzeden düzüldi** — indi has gowy ygtybarlylyk we utgaşyklyk üçin ýerli WooCommerce API-lerini ulanýar
- **Üpjin ediji sanawy awtomatik täzelenýär** — islendik plugin işjeňleşdirilende ýa-da işjeňligi ýatyrylanda

### Düzedildi {#fixed-2}

- **navigate-to başarnygy** — käbir admin sahypalarynda tükeniksiz gaýtadan ýükleme aýlawy düzedildi
- **list-posts başarnygy** — indi kategoriýa we tag atlaryny slug-lara dogry çözýär
- **WP-CLI buýruklary** — öňki refactor-dan soň ýiten namespace alias-lary dikeldildi
- **Waka awtomatlaşdyrmasy** — awtomatlaşdyrma tablisalary entek döredilmedik saýtlary sypaýylyk bilen işleýär
- **memory-save başarnygy** — indi ulgam görkezmesi döredijisinde dogry namespace prefiksini ulanýar
- **Scalar gural netijeleri** — indi AI-a gaýtarylmazdan ozal dogry gaplanýar
- **Ulanyş statistikasy** — indi köne wersiýalardan upgrade edilende miras galan başarnyk açary formatyny dogry işleýär
