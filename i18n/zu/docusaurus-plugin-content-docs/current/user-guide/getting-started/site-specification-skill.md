---
title: Ikhono Lokucacisa Isayithi
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Ikhono Lokucacisa Isayithi

**Ikhono Lokucacisa Isayithi** liyindlela ehlelekile yokubamba imigomo yesayithi lakho, izethameli, nobuwena bomkhiqizo. Lolu lwazi lugcinwa enkumbulweni yakho ye-**site_brief**, ama-agent ayibhekisela kuyo kuzo zonke izikhathi ukuze anikeze usizo olungaguquguquki, oluqonda umongo.

## Kuyini Ukucacisa Isayithi?

Ukucacisa Isayithi kuyinqubo yokubhala:

- **Inhloso yesayithi**: Lokho isayithi lakho elikwenzayo nokuthi kungani likhona
- **Izethameli eziqondiwe**: Ubani ovakashela isayithi lakho nokuthi yini abayidingayo
- **Ubuwena bomkhiqizo**: Imibala yakho, ithoni, nesitayela sokubukeka
- **Imigomo yebhizinisi**: Impumelelo ibukeka kanjani kusayithi lakho
- **Isakhiwo sokuqukethwe**: Indlela isayithi lakho elihlelwe ngayo

Lokhu kucaciswa kuba yi-**site_brief** yakho, inkumbulo eqhubekayo ama-agent ayisebenzisayo ukuze aqonde umongo wesayithi lakho.

## Kungani Usebenzise Ukucacisa Isayithi?

### Ukungaguquguquki Kuzo Zonke Izikhathi

Ngaphandle kwe-site_brief, kuzodingeka uphinde uchaze inhloso yesayithi lakho njalo uma uqala isikhathi esisha. Ngayo, ama-agent aqonda ngokushesha:

- Imigomo nezethameli zesayithi lakho
- Imibala nethoni yomkhiqizo wakho
- Isakhiwo sokuqukethwe kwakho
- Izinhloso zakho zebhizinisi

### Izincomo Ezingcono

Ama-agent asebenzisa i-site_brief yakho ukuze:

- Aphakamise izici ezihambisana nenhloso yesayithi lakho
- Ancome izakhiwo zokuqukethwe ezihambisana nemigomo yakho
- Aphakamise imiklamo ehambisana nomkhiqizo wakho
- Agweme ukuphakamisa izici ezingahambisani

### Ukuqalisa Ngokushesha

Ama-agent amasha (noma ama-agent ezikhathini ezintsha) angashesha aqonde isimo ngokufunda i-site_brief yakho esikhundleni sokubuza imibuzo yokucacisa.

## Ukuqalisa Ukucacisa Isayithi

### Ngesikhathi Sokuqalisa se-Theme Builder

Ikhono Lokucacisa Isayithi liqalwa ngokuzenzakalela ngesikhathi se-**Theme Builder onboarding flow**. I-Setup Assistant agent ibuza imibuzo futhi yakha i-site_brief yakho.

### Ukuqalisa Mathupha

Ungaqala Ukucacisa Isayithi nganoma yisiphi isikhathi:

```
"Ake sichaze ukucaciswa kwesayithi lami"
```

noma

```
"Ngisize ngidale i-site brief"
```

## Inqubo Yokucacisa Isayithi

### Isinyathelo 1: Inhloso Yesayithi

I-agent iyabuza:

```
Iyini inhloso eyinhloko yesayithi lakho?
- Isitolo se-e-commerce
- Ibhulogi noma isayithi lokuqukethwe
- Iphothifoliyo noma umbukiso
- Uhlelo lwe-SaaS
- Umphakathi noma iforamu
- Okunye: [chaza]
```

Ungakhetha isigaba noma uchaze inhloso yakho.

### Isinyathelo 2: Izethameli Eziqondiwe

```
Ubani izethameli zakho eziyinhloko?
- Abathengi / umphakathi jikelele
- Ochwepheshe bebhizinisi
- Abathuthukisi / abasebenzisi bezobuchwepheshe
- Abafundi / othisha
- Okunye: [chaza]

Yiziphi izidingo zabo eziyinhloko?
```

### Isinyathelo 3: Ubuwena Bomkhiqizo

```
Iyini imibala yomkhiqizo wakho?
- Umbala oyinhloko: [isikhethi sombala noma ikhodi ye-hex]
- Umbala wesibili: [isikhethi sombala noma ikhodi ye-hex]
- Umbala wokugcizelela: [ongakukhetha]

Ungayichaza kanjani ithoni yomkhiqizo wakho?
- Esezingeni lobungcweti / eyenkampani
- Enobuciko / yobuciko
- Enokudlala / ekhululekile
- Encane / yesimanje
- Efudumele / enobungane
```

### Isinyathelo 4: Imigomo Yebhizinisi

```
Impumelelo ibukeka kanjani kusayithi lakho?
- Ukukhiqiza amathuba okuthengisa
- Ukuthengisa imikhiqizo
- Ukwakha umphakathi
- Ukwabelana ngolwazi
- Ukusungula igunya
- Okunye: [chaza]

Iyiphi inkomba yakho eyinhloko?
- Imali engenayo
- Ukuzibandakanya kwabasebenzisi
- Ukufinyelela kokuqukethwe
- Ukuguqulwa
- Okunye
```

### Isinyathelo 5: Isakhiwo Sokuqukethwe

```
Okuqukethwe kwakho kuhlelwe kanjani?
- Okuyisicaba (konke okuqukethwe kusezingeni elifanayo)
- Okunezigaba (izigaba nezigatshana)
- Okulandelana kwesikhathi (isitayela sebhulogi)
- Okusekelwe kumkhiqizo (ikhathalogi)
- Okunye: [chaza]

Yiziphi izinhlobo zokuqukethwe ozisebenzisayo?
- Okuthunyelwe kwebhulogi
- Amakhasi omkhiqizo
- Izifundo zamacala
- Imibhalo yokuchaza
- Amavidiyo
- Okunye
```

## Inkumbulo Yakho ye-site_brief

Ngemva kokuqeda Ukucacisa Isayithi, ulwazi lwakho lugcinwa njenge-**site_brief** enkumbulweni ye-agent yakho. Leli irekhodi elihlelekile eliqukethe:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## Ukubuka Nokubuyekeza i-site_brief Yakho

### Buka i-site_brief Yakho

Buza i-agent:

```
"Ngibonise i-site brief yami"
```

noma

```
"Wazini ngesayithi lami?"
```

I-agent izobonisa ukucaciswa kwakho okugcinwe.

### Buyekeza i-site_brief Yakho

Uma isayithi lakho lithuthuka, ungayibuyekeza:

```
"Buyekeza i-site brief yami: manje sesiqondise amakhasimende e-B2B"
```

noma

```
"Vuselela ukucaciswa kwesayithi lami"
```

Lokhu kuzophinda kuqalise ikhono Lokucacisa Isayithi ngolwazi lwakho olukhona njengendawo yokuqala.

## Ama-agent Ayisebenzisa Kanjani i-site_brief

### Izincomo Zomklamo

Uma ucela izinguquko zomklamo, ama-agent abhekisela ku-site_brief yakho:

```
Wena: "Hlela kabusha ikhasi lami lasekhaya"
Agent: "Ngokusekelwe ku-site brief yakho, uqondise kwabesifazane abaneminyaka engu-25-45
ngethoni efudumele, yobuciko bezandla. Ngizodala umklamo ogcizelela
ubucwebe bakho obenziwe ngesandla namanani akho okusimama."
```

### Iziphakamiso Zezici

Ama-agent aphakamisa izici ezihambisana nemigomo yakho:

```
Wena: "Yiziphi izici okufanele ngizengeze?"
Agent: "Esitolo se-e-commerce esigxile ekwethembekeni kwamakhasimende,
ngingancoma: uhlelo lokwethembeka, ukubuyekezwa kwamakhasimende, incwadi yezindaba ye-imeyili,
nezincomo zemikhiqizo."
```

### Isakhiwo Sokuqukethwe

Ama-agent aphakamisa ukuhlelwa kokuqukethwe ngokusekelwe esakhiweni sakho:

```
Wena: "Kufanele ngiyihlele kanjani ibhulogi yami?"
Agent: "Njengoba usebenzisa ikhathalogi yomkhiqizo enebhulogi, ngingaphakamisa
ukuhlela okuthunyelwe ngesigaba somkhiqizo nokudala 'imihlahlandlela yesitayela'
ekhombisa imikhiqizo eminingi ndawonye."
```

## Imikhuba Engcono Kakhulu

### Cacisa Ngokunembile

Esikhundleni sokuthi "izethameli ezijwayelekile," chaza izethameli zakho zangempela:

- ✓ "Abesifazane abaneminyaka engu-25-45, abanentshisekelo emfashinini esimeme"
- ✗ "Wonke umuntu"

### Buyekeza Njalo

Njengoba isayithi lakho lithuthuka, buyekeza i-site_brief yakho:

- Lapho ushintshela ezethamelini ezintsha
- Lapho wengeza imigqa emisha yemikhiqizo
- Lapho ubuwena bomkhiqizo wakho bushintsha
- Lapho imigomo yakho yebhizinisi ishintsha

### Sebenzisa Amagama Angaguquguquki

Sebenzisa amagama afanayo kuzo zonke izikhathi:

- ✓ Hlala uthi "ubucwebe obuzinzile" (hhayi "ubucwebe obungalimazi imvelo" noma "imikhiqizo eluhlaza")
- ✓ Bhekisela njalo ezethamelini zakho ngendlela efanayo

### Faka Umongo

Nikeza isizinda esisiza ama-agent aqonde izinqumo zakho:

- "Siqondise kochwepheshe ababeka ikhwalithi ngaphezu kwentengo"
- "Izethameli zethu ziyaluqonda ubuchwepheshe futhi zilindele idizayini yesimanje"
- "Siyi-startup ezixhasayo, ngakho sidinga izixazululo ezingabizi kakhulu"

## Ubudlelwano Nokwamukeliswa kwe-Theme Builder

Ikhono Lokucaciswa Kwesayithi lihlanganiswe **nenqubo yokwamukeliswa kwe-Theme Builder**. Uma uqeda ukwamukeliswa, i-site_brief yakho idalwa ngokuzenzakalelayo ngolwazi olunikezile.

Ungakwazi futhi ukusebenzisa Ukucaciswa Kwesayithi ngokuzimela uma ufuna uku:

- Cacisa kabusha ukucaciswa kwakho ngemva kokusetha kokuqala
- Buyekeza isifingqo sesayithi lakho njengoba isayithi lakho lithuthuka
- Dala ukucaciswa okunemininingwane ngaphambi kokuqala i-Theme Builder

## Ukuxazulula Izinkinga

**I-site_brief yami ayisetshenziswa**
- Qinisekisa ukuthi i-agent inokufinyelela enkumbulweni
- Cela i-agent ukuthi "ikhumbule isifingqo sesayithi lami"
- Hlola ukuthi inkumbulo ivuliwe kuzilungiselelo zakho

**Ngifuna ukuqala kabusha nge-site_brief entsha**
- Cela i-agent: "Sula isifingqo sesayithi lami bese uqala kabusha"
- Bese usebenzisa Ukucaciswa Kwesayithi futhi

**I-agent yenza izincomo ezingahambisani ne-site_brief yami**
- Cela i-agent ukuthi "ibuyekeze isifingqo sesayithi lami"
- Buyekeza i-site_brief yakho uma isiphelelwe yisikhathi
- Nikeza umongo owengeziwe ezicelweni zakho

## Izinyathelo Ezilandelayo

Ngemva kokuchaza ukucaciswa kwesayithi lakho:

1. **Sebenzisa i-Theme Builder**: Dala itimu yangokwezifiso esekelwe ku-site_brief yakho
2. **Cacisa Idizayini**: Sebenzisa ikhono Lobuhle Besistimu Yokuklama ukuze wenze umsebenzi wedizayini onemininingwane
3. **Hlela Okuqukethwe**: Cela ama-agent izincomo zesakhiwo sokuqukethwe
4. **Yakha Izici**: Cela izici ezihambisana nezinhloso zebhizinisi lakho
