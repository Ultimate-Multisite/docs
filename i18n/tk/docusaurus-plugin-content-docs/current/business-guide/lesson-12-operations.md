---
title: '12-nji sapak: Biznesi ýöretmek'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Sapak 12: Biznesi ýöretmek

Platforma tamamlaýan taslamaňyz däl -- ol ýöredýän biznesiňizdir. Bu sapak FitSite-i dolandyrmagyň gündelik amallaryny öz içine alýar: goldaw, hasaplaşyk, tehniki hyzmat we müşderileri razy saklamak.

## Nirä çenli gelipdik

FitSite işläp dur we müşderiler ýazylýarlar. Indi amallary durnukly görnüşde ýöretmeli.

## Gündelik amallar

### Gözegçilik

Bulary her gün barlaň (ýa-da duýduryşlary sazlaň):

- **Iş wagty**: Platforma elýeterlimi? Iş wagtyna gözegçilik edýän hyzmat ulanyň.
- **Täze ýazylmalar**: Şu gün näçe täze müşderi ýazyldy?
- **Şowsuz tölegler**: Üns berilmeli töleg şowsuzlyklary barmy?
- **Goldaw haýyşlary**: Jogapsyz galan müşderi soraglary barmy?

### Müşderi goldawy

Siziň belli bir ugra gönükmegiňiz bu ýerde artykmaçlykdyr. Müşderileriňiziň ählisi fitness studiýalary bolandygy üçin, şol bir soraglary gaýta-gaýta görersiňiz:

**Aljak adaty soraglaryňyz:**

- "Sapak tertibimi nädip täzeläp bilerin?"
- "Saýtymyň reňklerini üýtgedip bilerinmi?"
- "Saýtyma täze tälimçini nädip goşmaly?"
- "Domenim işlemeýär"
- "Meýilnamamy nädip ýatyrmaly/täzelemeli?"

Bilim bazaryňyzy (Sapak 8-de başlanan) şu gaýtalanýan soraglaryň töwereginde guruň. Bilim bazasy makalasy bolup biljek her bir goldaw bileti şol makalany ýazmak üçin signaldyr.

### Goldaw derejeleri

Öseniňizçe, goldawy meýilnama boýunça düzümleşdiriň:

| Meýilnama | Goldaw derejesi | Jogap wagty |
|------|--------------|---------------|
| Starter | Bilim bazasy + email | 48 sagat |
| Growth | Email goldawy | 24 sagat |
| Pro | Ileri tutulýan email + işe giriş jaňy | 4 sagat |

[Support Tickets addon](/addons/support-tickets) platformanyň içinde goldaw haýyşlaryny dolandyrmaga kömek edip biler.

## Hasaplaşyk amallary

### Gaýtalanýan tölegler

Ultimate Multisite gaýtalanýan hasaplaşygy töleg geçelgäňiz arkaly awtomatiki dolandyrýar. Siziň wezipäňiz şulary gözegçilik etmekdir:

- **Şowsuz tölegler**: Dessine habarlaşyň. Şowsuzlyklaryň köpüsi bilkastlaýyn ýatyrmalar däl-de, möhleti geçen kartalardyr.
- **Dunning**: Töleg geçelgäňiz arkaly awtomatiki gaýtadan synanyşmak logikasyny sazlaň (Stripe muny gowy ýerine ýetirýär)
- **Ýatyrma haýyşlary**: Müşderileriň näme üçin gidýändigine düşüniň. Her bir ýatyrma seslenmedir.

### Agzalyklary dolandyrmak

Şular üçin **Ultimate Multisite > Memberships** bölümine geçiň:

- Ähli işjeň abunalary görmek
- Täzeleme we peseltme haýyşlaryny çözmek
- Zerur bolanda pul gaýtaryşlaryny işlemek
- Synag möhletleriniň tamamlanmagyny dolandyrmak

Doly salgylanma üçin [Agzalyklary dolandyrmak](/user-guide/administration/managing-memberships) serediň.

### Hasap-fakturalar

Her töleg üçin hasap-fakturalaryň dogry döredilýändigine göz ýetiriň. Müşderilere biznes çykdajylaryny hasabat bermek üçin hasap-fakturalar gerek bolup biler. [Tölegleri we hasap-fakturalary dolandyrmak](/user-guide/administration/managing-payments-and-invoices) serediň.

## Platforma tehniki hyzmaty

### WordPress we goşmaça täzelenmeleri

Tor administratory hökmünde siz şu zatlar üçin jogapkärsiňiz:

- **WordPress ýadro täzelenmeleri**: Önümçilige ulanmazdan öň staging saýtda synag ediň
- **Goşmaça täzelenmeleri**: Edil şonuň ýaly -- ilki synag ediň, soňra tutuş tor boýunça ulanyň
- **Tema täzelenmeleri**: Tema täzelenmelerinden soň şablonlaryň henizem dogry görünýändigini barlaň
- **Ultimate Multisite täzelenmeleri**: Täze üýtgeşmeler sanawyny yzarlaň we täzelenmezden öň synag ediň

:::warning Önümçilikde synag etmän hiç haçan täzelenme geçirmäň
Bozulan täzelenme toruňyzdaky her bir müşderi saýtyna täsir edýär. Täzelenmeleri hemişe ilki toruňyzyň staging nusgasynda synag ediň.
:::

### Howpsuzlyk

- Ähli programma üpjünçiligini täzeläp saklaň
- Admin Account-lary üçin güýçli parollary we iki faktorly tassyklamany ulanyň
- Şübheli işjeňlige gözegçilik ediň
- Howpsuzlyk wakalary üçin meýilnamaňyz bolsun

### Öndürijilik

Toruňyz ulaldygyça, şulara gözegçilik ediň:

- **Sahypa ýükleniş wagtlary**: Müşderi saýtlary çaltmy?
- **Serwer resurslarynyň ulanylyşy**: CPU, ýat, disk giňişligi
- **Maglumatlar bazasynyň öndürijiligi**: Uly torlar wagtyň geçmegi bilen maglumatlar bazasynyň optimizasiýasyny talap edýär

Eger entek etmedik bolsaňyz, caching (sahypa cache-i, obýekt cache-i) we CDN ornaşdyrmagy göz öňünde tutuň. [Cloudflare integrasiýasy](/user-guide/host-integrations/cloudflare) munuň köp bölegini dolandyrýar.

## Müşderi ýaşaýyş aýlawyny dolandyrmak

### Churn-y azaltmak

Churn her aý ýatyrýan müşderileriň göterimidir. Abuna biznesi üçin churn-y azaltmak täze müşderileri gazanmak ýaly möhümdir.

**Fitness studiýa müşderileriniň churn etmeginiň adaty sebäpleri:**

- Platformany nähili ulanmalydygyna düşünip bilmediler → işe giriş prosesini gowulandyryň
- Saýt ýeterlik gowy görünmedi → şablonlary gowulandyryň
- Gymmatyny görmediler → aýratynlyklary ýa-da aragatnaşygy gowulandyryň
- Arzan alternatiwa tapdylar → öz ugurlaýyn gymmatyňyzy güýçlendiriň
- Biznesleri ýapyldy → öňüni alyp bolmaýar, ýöne muny aýratyn yzarlaň

### Täzelemeleri höweslendirmek

Üstünlik gazanýan Starter müşderilerini täzelemäge höweslendirmeli:

- Meýilnama çäklerine ýetenlerinde (saýtlar, saklaýyş), täzeleme tekliplerini görkeziň
- Peýda getirjek Growth meýilnamasynyň aýratynlyklaryny nygtaýan maksatly email-ler iberiň
- Growth/Pro müşderileriniň näme gurandygyny görkeziň

### Gaýtaryp almak kampaniýalary

Müşderi ýatyranda:

1. Näme üçinini soraň (çykış soragnamasy ýa-da email)
2. Mümkin bolsa, aladasyny çözüň
3. Gaýdyp gelmek üçin arzanladyş teklip ediň (ýatyrmadan 30-60 gün soň)

## Hepdelik we aýlyk tertipler

### Hepdelik

- Täze ýazylmalary we ýatyrmalary gözden geçiriň
- Ähli açyk goldaw biletlerine jogap beriň
- Platformanyň öndürijiligini we iş wagtyny barlaň
- Islendik şowsuz tölegleri gözden geçiriň

### Aýlyk

- Esasy görkezijileri seljeriň (MRR, churn, täze müşderiler, täzelenmeler)
- WordPress we goşmaça täzelenmelerini ulanyň (staging synagyndan soň)
- Goldaw nusgalaryna esaslanyp bilim bazasyny gözden geçiriň we täzeläň
- Müşderilere habar býulleteni ýa-da täzelenme iberiň (täze aýratynlyklar, maslahatlar, fitness pudagy habarlary)

### Çärýeklik

- Baha goýumy bäsdeşler we müşderi seslenmeleri bilen deňeşdirip gözden geçiriň
- Şablon dizaýnlaryna baha beriň -- olary täzeltmek gerekmi?
- Hosting kuwwatyny bahalandyryň -- giňeltmek gerekmi?
- Işjeňleşme maglumatlaryna esaslanyp işe giriş prosesini gözden geçiriň we gowulandyryň

## Bu sapakda näme gurduk

- **Gündelik gözegçilik tertipleri** iş wagty, ýazylmalar, tölegler we goldaw üçin
- **Derejeli goldaw gurluşy** plan derejelerine laýyklaşdyrylan
- **Hasaplaşyk amallary** dunning we ýatyrmak bilen iş salyşmagy hem öz içine alýar
- **Hyzmat ediş proseduralary** täzelenmeler, howpsuzlyk we öndürijilik üçin
- **Churn azaltmak strategiýalary** fitness ugruna mahsus
- **Hepdelik, aýlyk we çärýeklik amal tertipleri**

---

**Indiki:** [13-nji sapak: Giňeltmek](lesson-13-growth) -- FitSite-i kiçi amaldan hakyky biznese ösdürmek.
