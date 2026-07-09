---
title: Gurallar we konfigurasiýa
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Gurallar we konfigurasiýa

Theme Builder WordPress saýtňyzy seljermek, dizaýn etmek we gurmak üçin gurallar toplumyny ulanýar. 1.16.0 wersiýasynda **sd-ai-agent/site-scrape indi Tier 1 guraldyr**, şonuň üçin ol Theme Builder-de deslapdan elýeterlidir. Superdav AI Agent v1.18.0 ynamdar işläp düzüji iş akymlary üçin aýratyn paýlanylýan Advanced ýoldaş paketini hem hödürleýär; bu gurallar WordPress.org esasy paketiniň bölegi däldir we aýratyn gurnalmaly hem-de ygtyýarlandyrylmaly.

## Elýeterli gurallar

### Tier 1 gurallary (elmydama elýeterli)

Tier 1 gurallary goşmaça konfigurasiýa bolmazdan Theme Builder-de deslapdan elýeterlidir.

#### sd-ai-agent/site-scrape

**Maksat:** Dizaýn ylhamyny, mazmun gurluşyny we funksiýany almak üçin bar bolan websaýtlary seljermek.

**Mümkinçilikler:**

- **Websaýt seljermesi** — bäsdeş ýa-da ylham beriji websaýtlary scrape etmek we seljermek
- **Dizaýn çykarmak** — reňkleri, şriftleri we ýerleşiş nagyşlaryny kesgitlemek
- **Mazmun gurluşy** — sahypa guramaçylygyna we iýerarhiýasyna düşünmek
- **Aýratynlyk tapmak** — pluginleri we funksiýany kesgitlemek
- **Öndürijilik seljermesi** — sahypa tizligini we optimizasiýany barlamak
- **SEO seljermesi** — meta belliklerini we gurluşly maglumatlary gözden geçirmek

**Ulanylyşy:**

```
example.com saýtynyň dizaýnyny seljer we ony meniň saýtym üçin ylham hökmünde ulan.
```

**Onuň çykarýan zatlary:**

- Reňk palitrasy we reňk ulanylyşy
- Tipografiýa (şriftler we ölçegler)
- Ýerleşiş gurluşy we aralyk goýuş
- Nawigasiýa nagyşlary
- Mazmun guramaçylygy
- Suratlar we media ulanylyşy
- Interaktiw elementler
- Mobil duýgurlyk

**Çäklendirmeler:**

- Parol bilen goralan saýtlary scrape edip bilmeýär
- robots.txt we saýt syýasatlaryna hormat goýýar
- Dinamik mazmuny doly alyp bilmez
- JavaScript köp ulanylýan saýtlarda seljerme çäkli bolup biler
- Uly saýtlary seljermek has köp wagt alyp biler

### Tier 2 gurallary (islege görä)

Tier 2 gurallary Theme Builder sazlamalarynda aç-açan işledilende elýeterli bolýar.

#### Giňişleýin analitika

Jikme-jik öndürijilik ölçeglerini berýär:

- Sahypanyň ýükleniş wagtlary
- Core Web Vitals
- SEO bahasy
- Elýeterlilik bahasy
- Iň gowy tejribeler bahasy

#### Mazmun optimizatory

Şular üçin seljerýär we gowulandyrmalary teklip edýär:

- Okalyp bilijilik
- SEO optimizasiýasy
- Açar söz ulanylyşy
- Mazmun gurluşy
- Çagyryş-çäre ýerleşişi

### Tier 3 gurallary (Premium)

Tier 3 gurallary goşmaça konfigurasiýa ýa-da premium aýratynlyklary talap edýär.

#### AI mazmun generatory

Şular üçin mazmun döredýär:

- Önüm düşündirişleri
- Hyzmat sahypalary
- Blog ýazgylary
- Meta düşündirişler
- Çagyryş-çäre nusgasy

#### Giňişleýin dizaýn gurallary

Giňişleýin dizaýn mümkinçiliklerini berýär:

- Hususy CSS döretmek
- Animasiýa döretmek
- Interaktiw element dizaýny
- Giňişleýin reňk teoriýasy
- Tipografiýa optimizasiýasy

### Advanced ýoldaş gurallary (aýratyn paket)

Advanced ýoldaş paketi esasy Superdav AI Agent çykarylyşyndan aýratyn paýlanylýar. Ol administratorlaryň agente ýokary täsirli gurallary ulanmaga aç-açan rugsat berýän ynamdar işläp düzüji we saýt eýesi gurşawlary üçin niýetlenendir.

Advanced ýoldaş mümkinçilikleri şulary öz içine alyp biler:

- **Faýl ulgamy gurallary** — ynamdar gurşawlarda tassyklanan faýllary barlamak we üýtgetmek
- **Maglumat bazasy gurallary** — aç-açan ygtyýar berilende saýt maglumatlaryny soramak ýa-da täzelmek
- **WP-CLI gurallary** — WordPress hyzmat ediş we barlag buýruklaryny işletmek
- **REST dispatcher gurallary** — gözegçilik edilýän dispatch iş akymlary arkaly bellige alnan REST endpointlere ýüzlenmek
- **Plugin builder gurallary** — plugin kodunyň skeletini döretmek we üstünde gaýtalap işlemek
- **Git snapshot gurallary** — töwekgelçilikli işläp düzüji amallaryndan öň snapshot döretmek
- **Ulanyjy dolandyryş gurallary** — rugsat berlen ýerlerde ulanyjy ýazgylaryny gözden geçirmäge ýa-da sazlamaga kömek etmek
- **Benchmark gurallary** — işläp düzmek gözden geçirmesi üçin öndürijilik ýa-da mümkinçilik benchmarklaryny işletmek

Bulary her gurnama üçin umumy elýeterli Theme Builder gurallary hökmünde resminamalaşdyrmaň. Olar diňe Advanced ýoldaş paketi gurlanda, işledilende we ynamdar administratorlar bilen çäklendirilende elýeterlidir.

## Gural konfigurasiýasy

### Gurallary işletmek

Theme Builder-de goşmaça gurallary işletmek üçin:

1. **Gratis AI Agent → Settings** bölümine geçiň
2. **Theme Builder → Tools** bölümine gidiň
3. Zerur bolşy ýaly gurallary açyň/ýapyň
4. Sazlamalary saklaň

### Gural rugsatlary

Käbir gurallar rugsatlary talap edýär:

- **Saýt scraping** — internet elýeterliligini talap edýär
- **Analitika** — Google Analytics integrasiýasyny talap edýär
- **Mazmun döretmek** — API açarlaryny talap edýär
- **Giňişleýin aýratynlyklar** — premium abunaçylygy talap edip biler
- **Advanced ýoldaş gurallary** — aýratyn paýlanylýan Advanced paketini we administratoryň aç-açan ynamyny talap edýär

### API açarlary we giriş maglumatlary

Olary talap edýän gurallar üçin API açarlaryny sazlaň:

1. **Gratis AI Agent → Settings → API Keys** bölümine gidiň
2. Her gural üçin giriş maglumatlaryny giriziň
3. Baglanyşygy synap görüň
4. Howpsuz ýagdaýda saklaň

### Advanced ýoldaş paketini gurnamak

Advanced ýoldaş paketi WordPress.org esasy ZIP-den aýratyn çykarylýar. Ony diňe çykarylyş üçin resmi taslama paýlaýyş kanalyndan gurnaň, soňra elýeterliligi ynamdar administratorlar bilen çäklendiriň. Önümçilik saýtynda faýl ulgamy, maglumat bazasy, WP-CLI, REST dispatcher, plugin builder, ulanyjy dolandyryş ýa-da benchmark gurallaryny işletmezden öň adam tassyklama derwezelerini we git snapshot hereketini gözden geçiriň.

## sd-ai-agent/site-scrape ulanmak

### Esasy ulanylyş

Theme Builder-den websaýty seljermegi soraň:

```
competitor.com salgysyndaky bäsdeşimiň saýtynyň dizaýnyny seljer
we meniň saýtym üçin dizaýn gowulandyrmalaryny teklip et.
```

### Anyk seljerme

Anyk seljerme görnüşlerini soraň:

```
example.com saýtyndan reňk palitrasyny çykar we ony ylham hökmünde ulan.
```

```
example.com saýtynyň nawigasiýa gurluşyny seljer we meňzeş
guramaçylygy meniň saýtyma ulan.
```

```
example.com saýtynyň mobil duýgurlygyny barla we meniň saýtymyň
şonça duýgur bolmagyny üpjün et.
```

### Deňeşdirme seljermesi

Birnäçe saýty deňeşdiriň:

```
site1.com we site2.com dizaýnlaryny deňeşdir we ikisiniň hem iň gowy
elementlerini birleşdirýän dizaýn döret.
```

## Gural çäklendirmeleri we göz öňünde tutulmaly zatlar

### Tizlik çäklendirmesi

- Scraping serweriň aşa ýüklenmeginiň öňüni almak üçin tizlik boýunça çäklendirilýär
- Şol bir site-a birnäçe haýyş çäklendirilip bilner
- Uly site-lary seljermek has köp wagt alyp biler

### Mazmunyň takyklygy

- Dinamiki mazmun doly ele alynman biler
- JavaScript arkaly görkezilýän mazmun doly bolman biler
- Hakyky wagt maglumatlary görkezilmän biler
- Käbir mazmun tölegli diwaryň aňyrsynda bolup biler

### Hukuk we etiki garalmaly zatlar

- robots.txt we site syýasatlaryna hormat goýuň
- Awtorlyk hukugy bilen goralan mazmuny gaýtadan neşir etmek üçin scrape etmäň
- Seljermäni göçürmek üçin däl-de, ylham almak üçin ulanyň
- Çykarylan mazmuny ulanmaga hukugyňyzyň bardygyny tassyklaň
- Seljerilen site-laryň hyzmat şertlerine eýeriň

### Öndürijilige täsiri

- Uly site-lary scraping etmek wagt alyp biler
- Bir wagtda birnäçe scrape etmek has haýal bolup biler
- Tor birikmesi tizlige täsir edýär
- Uly maglumat toplumlary has köp işläp taýýarlamagy talap edip biler

## Iň gowy tejribeler

### Site seljermesini ulanmak

1. **Birnäçe site-y seljeriň** — birnäçe çeşmeden ylham ýygnaň
2. **Gurluşa üns beriň** — ýerleşiş we guramaçylyk nusgalaryny öwreniň
3. **Reňkleri çykaryň** — reňk palitralaryny başlangyç nokat hökmünde ulanyň
4. **Tipografiýany öwreniň** — halanýan şrift utgaşmalaryňyzy kesgitläň
5. **Navigasiýany gözden geçiriň** — menýu guramaçylygyna düşüniň

### Etiki Scraping

1. **robots.txt-e hormat goýuň** — site görkezmelerine eýeriň
2. **Mazmuny göçürmäň** — seljermäni diňe ylham üçin ulanyň
3. **Hukuklary tassyklaň** — çykarylan mazmuny ulanyp bilýändigiňize göz ýetiriň
4. **Çeşmeleri görkeziň** — ylham çeşmelerine salgylanyň
5. **Şertlere eýeriň** — site hyzmat şertlerini berjaý ediň

### Guralyň netijeliligini ýokarlandyrmak

1. **Anygy boluň** — belli seljerme görnüşlerini soraň
2. **Kontekst beriň** — site-yňyzyň maksadyny düşündiriň
3. **Garaşylýan netijeleri belläň** — dizaýn maksatlaryňyzy beýan ediň
4. **Gaýtalaň** — netijelere esaslanyp kämilleşdiriň
5. **Gurallary birleşdiriň** — giňişleýin seljerme üçin birnäçe gural ulanyň

## Näsazlyklary düzetmek

### Site Scrape bolmaýar

- Site-yň köpçülige elýeterlidigini barlaň
- robots.txt-iň scraping-e rugsat berýändigini tassyklaň
- Başga site synap görüň
- Internet birikmesini barlaň
- Mesele dowam etse, goldaw bilen habarlaşyň

### Doly däl seljerme

- Site-da dinamiki mazmun bolup biler
- JavaScript doly görkezilmedik bolup biler
- Uly site-larda wagt çägi dolup biler
- Munuň ýerine belli sahypalary seljerip görüň
- Belli seljerme görnüşlerini soraň

### Haýal öndürijilik

- Uly site-lary seljermek has köp wagt alýar
- Bir wagtda birnäçe scrape etmek has haýaldyr
- Tor birikmesi tizlige täsir edýär
- Ýük az wagty synap görüň
- Ilki kiçiräk bölümleri seljeriň

## Baglanyşykly resminamalar

- [Açyş söhbetdeşligi](./discovery-interview.md) — dizaýn maglumatlaryny ýygnaň
- [Dizaýn ugry](./design-direction.md) — dizaýnyňyzy kämilleşdiriň
- [Myhmansöýerlik menýulary](./hospitality-menus.md) — menýu sahypalaryny dörediň
