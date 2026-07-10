---
title: '8-nji sapak: Müşderileri başlangyç ugrukdyrmak'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Sapak 8: Müşderini başlangyçdan geçirmek {#lesson-8-customer-onboarding}

Müşderini hasaba ýazylmaga getirmek işiň diňe ýarysy. Eger olar girip, özüni aljyraňňy duýup, hiç haçan gaýdyp gelmese, siz olary ýitirdiňiz. Bu sapak täze hasaba ýazylany işjeň we gyzyklanýan müşderä öwürýän tejribäni dizaýn edýär.

## Nirede saklanypdyk {#where-we-left-off}

FitSite işleýän checkout akymy bilen doly brendleşdirildi. Indi fitness studiýasynyň eýesi hasaba ýazylmagy tamamlandan soň, täze saýtyna ilkinji gezek düşende näme bolýandygyna üns berýäris.

## Näme üçin başlangyçdan geçirmek möhüm {#why-onboarding-matters}

Hasaba ýazylmadan soňky ilkinji 30 minut müşderiniň galjakdygyny ýa-da gitjekdigini kesgitleýär. Fitness studiýasynyň eýesi:

- Girýär we eýýäm fitness websaýtyna meňzeýän saýt görýär → galýar
- Indiki näme etmelidigini anyk bilýär → galýar
- Umumy WordPress Dashboard-da özüni ýiten ýaly duýýar → gidýär

Siziň ugurlaýyn şablonlaryňyz (Sapak 4) birinji meseläni çözýär. Bu sapak ikinjisini çözýär.

## Ilkinji giriş tejribesi {#the-first-login-experience}

### Hoş geldiňiz Dashboard widjeti {#welcome-dashboard-widget}

Täze müşderileri garşylaýan we olary sazlamadan geçirýän ýörite Dashboard widjetini dörediň. Bu olar ilkinji gezek girende görnükli ýerde peýda bolmaly.

**FitSite Çalt başlangyç:**

1. **Studiýa adyňyzy we logotipiňizi goşuň** -- Customizer ýa-da Saýt şahsyýeti sazlamalaryna baglanyşyk
2. **Sapak tertibiňizi täzeläň** -- Göni Classes sahypasynyň redaktoryna baglanyşyk
3. **Tälimçileriňizi goşuň** -- Trainers sahypasynyň redaktoryna baglanyşyk
4. **Habarlaşmak maglumatlaryňyzy sazlaň** -- Contact sahypasynyň redaktoryna baglanyşyk
5. **Saýtyňyzy öňünden görüň** -- Frontende baglanyşyk

Her ädim degişli sahypa ýa-da sazlama göni baglanýar. Menýularda gözleg ýok.

### Dashboard-y ýönekeýleşdiriň {#simplify-the-dashboard}

Täze müşderilere WordPress-iň her bir menýu elementini görmek gerek däl. Şulary göz öňünde tutuň:

- Fitness saýtyny dolandyrmak üçin degişli bolmadyk menýu elementlerini gizlemek (mysal üçin, ulanylmaýan bolsa Comments)
- Iň köp ulanylýan elementleri öňe goýmak üçin menýuny täzeden tertiplemek
- Ugruň manysyna laýyk gelýän ýörite menýu ýazgylaryny goşmak ("Appearance" ýerine "Siziň studiýaňyz")

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) goşmaçasy müşderileriň näme görýändigini dolandyrmaga kömek edip biler.

## Hoş geldiňiz e-poçta yzygiderligi {#welcome-email-sequence}

Bir sany hoş geldiňiz e-poçtasy ýeterlik däl. Müşderileri ilkinji hepdesinden geçirýän yzygiderligi sazlaň:

### E-poçta 1: Hoş geldiňiz (Hasaba ýazylmadan dessine soň) {#email-1-welcome-immediately-after-signup}

- Tema: "FitSite-e hoş geldiňiz -- studiýa websaýtyňyz işjeň"
- Mazmun: Giriş baglanyşygy, çalt başlangyç ädimleri, kömek çeşmelerine baglanyşyk
- Äheň: Tolgundyryjy, höweslendiriji, fitness-e mahsus

### E-poçta 2: Çalt üstünlikler (1-nji gün) {#email-2-quick-wins-day-1}

- Tema: "FitSite-iňizde ilki edilmeli 3 zat"
- Mazmun: Logotipiňizi goşuň, baş sahypanyň hero suratyny täzeläň, sapak tertibiňizi goşuň
- Nire basmalydygyny anyk görkezýän ekran suratlaryny goşuň

### E-poçta 3: Öz stiliňizi beriň (3-nji gün) {#email-3-make-it-yours-day-3}

- Tema: "Fitness saýtyňyzy tapawutlandyryň"
- Mazmun: Reňkleri sazlaň, tälimçi suratlaryny goşuň, studiýa hekaýaňyzy ýazyň
- Platformadaky ajaýyp fitness saýtlarynyň mysallaryna baglanyşyk beriň

### E-poçta 4: Işe goýberiň (7-nji gün) {#email-4-go-live-day-7}

- Tema: "FitSite-iňizi dünýä bilen paýlaşmaga taýýarmy?"
- Mazmun: Paýlaşmazdan öň barlamaly zatlaryň sanawy, ýörite domeni nädip birikdirmeli (Growth/Pro-da bolsa), sosial paýlaşma maslahatlary

:::tip E-poçta awtomatlaşdyrma
Bu e-poçtalary e-poçta marketing platformaňyz arkaly işe girizmek üçin [Webhooks](/user-guide/integrations/webhooks) ýa-da [Zapier](/user-guide/integrations/zapier) ulanyň. Bu size wagty has gowy dolandyrmaga mümkinçilik berýär we gatnaşygyny yzarlamaga ýol açýar.
:::

## Kömek çeşmeleri {#help-resources}

Fitness studiýasynyň eýeleriniň hakykatdan sorajak soraglaryna jogap berýän ugurlaýyn kömek mazmunyny dörediň:

### Bilim binýady makalalary {#knowledge-base-articles}

- "Sapak tertibiňizi nädip täzelemeli"
- "Tälimçi profillerini goşmak we redaktirlemek"
- "Studiýaňyzyň logotipini we reňklerini üýtgetmek"
- "Öz domen adyňyzy birikdirmek" (Growth/Pro müşderileri üçin)
- "Saýtyňyza bronlamak widjetini goşmak"

Bulary tehniki däl ulanyjylar üçin ýazyň. Ekran suratlaryny ulanyň. WordPress žargonynyň öňüni alyň.

### Wideo görkezmeler {#video-walkthroughs}

Şulary görkezýän gysga (2-3 minutlyk) ekran ýazgylary:

- Ilkinji giriş we ugrukdyrma
- Baş sahypany redaktirlemek
- Sapak tertibini täzelemek
- Täze tälimçi goşmak

Bular ýylmanan önümçilikler bolmaly däl. Aýdyň, peýdaly we ugurlaýyn bolmagy möhümdir.

## Account sahypasy {#the-account-page}

Ultimate Multisite müşderileriň öz subscription-yny dolandyrýan müşderä gönükdirilen [Account Page](/user-guide/client-management/account-page) öz içine alýar. Muny şular üçin sazlaň:

- Häzirki FitSite plan-yny görkezmek
- Fitness-e mahsus peýdalar bilen upgrade mümkinçiliklerini görkezmek
- Töleg taryhyny we hasap-faktura ýüklemelerini bermek
- Kömek çeşmelerine baglanyşyk bermek

## Başlangyçdan geçirmegiň üstünligini ölçemek {#measuring-onboarding-success}

Başlangyçdan geçirmegiňiziň işleýändigini bilmek üçin şu görkezijileri yzarlaň:

- **Işjeňleşme derejesi**: Hasaba ýazylanlaryň näçe göterimi ilkinji hepdäniň içinde saýtyny hakykatdan sazlaýar?
- **Ilkinji hepde girişleri**: Täze müşderi ilkinji hepdesinde näçe gezek girýär?
- **Täze müşderilerden goldaw biletleri**: Köp möçber başlangyçdan geçirmegiňizde boşluklaryň bardygyny aňladýar
- **Synagdan töleglä geçiş**: Synag hödürleýän bolsaňyz, näçe göterimi geçýär?

## Häzire çenli FitSite tory {#the-fitsite-network-so-far}

```
FitSite tory
├── WordPress Multisite (subdomain tertibi)
├── Ultimate Multisite (sazlanan + brendleşdirilen)
├── Platforma domeni (fitsite.com + wildcard SSL)
├── Saýt şablonlary (Studio Essential, Gym Pro, Fitness Chain)
├── Önümler (Starter, Growth, Pro + Order Bumps)
├── Checkout akymy (ugurlaýyn, synagdan geçirilen)
├── Brendleşdirme (giriş, Dashboard, e-poçtalar, hasap-fakturalar, marketing saýty)
├── Müşderini başlangyçdan geçirmek
│   ├── Quick Start Dashboard widjeti
│   ├── Fitness saýtyny dolandyrmak üçin ýönekeýleşdirilen Dashboard
│   ├── 4 e-poçtalyk hoş geldiňiz yzygiderligi
│   ├── Ugurlaýyn bilim binýady
│   ├── Wideo görkezmeler
│   └── Sazlanan Account sahypasy
└── Nyrh strategiýasy üçin taýýar (indiki sapak)
```

## Bu sapakda näme gurduk {#what-we-built-this-lesson}

- **Ugrukdyrylýan ilkinji giriş tejribesi** Quick Start widjeti bilen
- **Ýönekeýleşdirilen Dashboard** fitness saýtyny dolandyrmak meselelerine gönükdirilen
- **Hoş geldiňiz e-poçta yzygiderligi** müşderileri ilkinji hepdesinden geçirýän
- **Ugurlaýyn kömek çeşmeleri** tehniki däl fitness studiýa eýeleri üçin ýazylan
- **Başlangyçdan geçirme metrikalary** tejribäni yzarlamak we gowulandyrmak üçin

---

**Indiki:** [9-njy sapak: Peýda üçin nyrh kesgitlemek](lesson-9-pricing) -- girdejini iň ýokary derejä çykarmak we churn-y iň az derejä düşürmek üçin nyrh strategiýasyny kämilleşdirýäris.
