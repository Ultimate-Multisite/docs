---
title: 'Sapak 3: Toruňyzy sazlamak'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Sapak 3: Toruňyzy gurnamak

Gurmaga wagt geldi. Bu sapakda Ultimate Multisite gurnarsyňyz we FitSite torunyň binýadyny sazlamaga başlarsyňyz. Bu ýerdäki her bir karar fitness ugruny göz öňünde tutup kabul edilýär.

## Nirä çenli gelipdik {#where-we-left-off}

Biz fitness studiýalaryny öz ugrumyz hökmünde saýladyk we mümkinçilikleri barladyk. Indi şol pikiri işleýän platforma öwürýäris.

## Hosting saýlamak {#choosing-your-hosting}

Hosting saýlawyňyz aýratyn bir websaýtdan has köp, ýörite ugra gönükdirilen platforma üçin has möhümdir. Siz diňe bir saýty ýerleşdirmeýärsiňiz -- siz onlarça ýa-da ýüzlerçe saýta çenli ösjek tor ýerleşdirýärsiňiz.

### Näme gözlemeli {#what-to-look-for}

- **WordPress Multisite goldawy**: Ähli hostlar multisite bilen gowy işlemeýär
- **Wildcard SSL**: Subdomen esasly torlar üçin hökmany
- **Giňeldilip bilinýän resurslar**: Migrasiýa etmezden ösmek üçin giňişlik gerek
- **Ultimate Multisite integrasiýasy**: Awtomatlaşdyrylan domen baglanyşygy we SSL ep-esli operasiýa zähmetini tygşytlaýar

### Maslahat berilýän çemeleşme {#recommended-approach}

[Utgaşykly üpjün edijiler](/user-guide/host-integrations/closte) sanawyndan host saýlaň. Bular Ultimate Multisite bilen synagdan geçirildi we domen baglanyşygy hem-de SSL awtomatlaşdyrmasy üçin zerur integrasiýalary üpjün edýär.

FitSite üçin biz subdomen konfigurasiýasyny ulanarys. Bu, müşderi saýtlarynyň öz domenlerini islege görä baglamazdan ozal ilki `studioname.fitsite.com` görnüşinde görünjekdigini aňladýar.

## WordPress Multisite gurnamak {#installing-wordpress-multisite}

Eger sizde entek WordPress Multisite gurnamasy ýok bolsa:

1. Hosting üpjün edijiňizde WordPress gurnaň
2. [WordPress Multisite nädip gurnamaly](/user-guide/getting-started/how-to-install-wordpress-multisite) gollanmasyna eýeriň
3. Soralsa, **subdomen** konfigurasiýasyny saýlaň

:::tip Näme üçin subdomenler?
Subdomenler her müşderi saýtyna ýol (`fitsite.com/studio`) däl-de, öz aýratyn salgysyny (`studio.fitsite.com`) berýär. Bu müşderileriňiz üçin has hünärli görünýär we permalink gapma-garşylyklarynyň öňüni alýar. Jikme-jik deňeşdirme üçin [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) serediň.
:::

## Ultimate Multisite gurnamak {#installing-ultimate-multisite}

[Ultimate Multisite gurnamak](/user-guide/getting-started/installing-ultimate-multisite) gollanmasyna eýerip:

1. Plugini bütin tor boýunça ýükläň we işjeňleşdiriň
2. [Gurnama jadygöýini](/user-guide/getting-started/multisite-setup-wizard) işlediň

Gurnama jadygöýiniň dowamynda FitSite ugruny ýatda saklaň:

- **Walýuta**: Fitness studiýasy müşderileriňiziň ulanýan walýutasyna sazlaň
- **Kompaniýanyň ady**: "FitSite" (ýa-da saýlan brand adyňyz)
- **Kompaniýanyň logotipi**: Brand logotipiňizi ýükläň -- bu hasap-fakturalarda we email-lerde görünýär

## Fitness ugry üçin sazlamak {#configuring-for-the-fitness-niche}

Ultimate Multisite gurnalandan soň, şu ugra mahsus konfigurasiýa saýlawlaryny ediň:

### Umumy sazlamalar {#general-settings}

**Ultimate Multisite > Settings** bölümine geçiň we sazlaň:

- **Saýtyň ady**: FitSite
- **Bellenen rol**: Administrator -- fitness studiýasynyň eýelerine saýtynyň mazmunyna doly gözegçilik gerek
- **Hasaba alyş**: Ulanyjy hasaba alşyny işjeňleşdiriň, şeýlelikde studiýa eýeleri özleri ýazylyp bilerler

### Email konfigurasiýasy {#email-configuration}

Ulgam email-leriňiz ugruňyzyň dilinde geplemeli. **Ultimate Multisite > Settings > Emails** bölümine geçiň we özleşdiriň:

- Umumy "siziň täze saýtyňyz" görnüşli dilini fitness-e mahsus habarlar bilen çalşyň
- Garşylama temasy üçin mysal: "Fitness studiýa websaýtyňyz taýýar"
- Garşylama mazmuny üçin mysal: Olaryň studiýasyna, sapaklaryna we fitness saýty bilen işe başlamaga salgylanyň

Bulary 8-nji sapakda (Müşderini uýgunlaşdyrmak) has-da kämilleşdireris, emma indi äheňi kesgitlemek hatda irki synag ýazylmalarynyň hem ugra mahsus duýulmagyny üpjün edýär.

### Domen konfigurasiýasy {#domain-configuration}

Eger utgaşykly hosting üpjün edijisini ulanýan bolsaňyz, domen baglanyşygyny indi sazlaň:

1. **Ultimate Multisite > Settings > Domain Mapping** bölümine geçiň
2. Öz anyk hostuňyz üçin integrasiýa gollanmasyna eýeriň
3. Täze subsaýtlaryň SSL-i awtomatik alýandygyny synap görüň

Bu indiki sapakda şablonlary we synag saýtlaryny döretmäge başlanymyzda, hemme zadyň başyndan ahyryna çenli işlemegini üpjün edýär.

## Häzirki wagta çenli FitSite tory {#the-fitsite-network-so-far}

Bu sapagyň ahyrynda sizde şular bar:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## Bu sapakda näme gurdymyz {#what-we-built-this-lesson}

- Subdomen režiminde **işleýän WordPress Multisite** gurnamasy
- FitSite branding bilen sazlanan we **Ultimate Multisite gurnalan**
- Ösýän tor üçin **hosting we SSL** gurnalan
- Hosting üpjün edijiňiz üçin **domen baglanyşygy** sazlanan
- Birinji günden **ugra mahsus email äheňi** döredilen

---

**Indiki:** [Sapak 4: Ugra mahsus şablonlary gurmak](lesson-4-templates) -- fitness studiýasynyň eýeleriniň hakykatdan hem ulanmak islejek saýtyň şablonlaryny döredýäris.
