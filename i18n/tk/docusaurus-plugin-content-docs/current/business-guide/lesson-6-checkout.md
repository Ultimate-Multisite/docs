---
title: 'Sapak 6: Hasaba ýazylmak tejribesi'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# 6-njy sapak: Hasaba ýazylmak tejribesi

Checkout akymy gyzyklanmanyň girdejä öwrülýän ýeridir. Bulaşyk ýa-da umumy hasaba ýazylmak prosesi müşderileri ýitirýär. Olaryň dilinde gepleýän we kynçylyksyz duýulýan nişa mahsus akym bolsa olary müşderä öwürýär.

## Nirede galypdyk

FitSite-de şablonlar we meýilnamalar sazlandy. Indi biz fitness studiýa eýelerini töleýän müşderilere öwürýän hasaba alyş we checkout tejribesini gurýarys.

## Hasaba alyş akymyna düşünmek

Ultimate Multisite-iň checkout formalary doly sazlap bolýan köp ädimli formalardyr. FitSite üçin biz şeýle akym isleýäris:

1. Fitness kärhanalary üçin gurlan ýaly duýulsyn
2. Diňe zerur zatlary ýygnasyn
3. Müşderini mümkin boldugyça çalt işleýän saýta eltsin

Doly tehniki salgylanma üçin [Hasaba alyş akymy](/user-guide/configuration/the-registration-flow) sahypasyna serediň.

## FitSite Checkout-yny taslamak

**Ultimate Multisite > Checkout Forms** bölümine geçiň we täze forma dörediň.

### 1-nji ädim: Meýilnama saýlamak

Fitness studiýa eýesiniň ilkinji görmeli zady, özüne düşnükli sözler bilen görkezilen meýilnamalar bolmaly.

- **Bahalar tablisasy** meýdançasyny goşuň
- Ony üç FitSite meýilnamasynyň hemmesini görkezmäge sazlaň
- 5-nji sapakda ýazan meýilnama düşündirişleriňiz şu ýerde görünýär -- olaryň tehniki aýratynlyklar däl-de, fitness biznesiniň zerurlyklary barada gepleýändigine göz ýetiriň

:::tip Nişa mahsus dil möhümdir
"1 GB ammar" sport zaly eýesi üçin hiç zat aňlatmaýar. "Professional studiýa websaýty üçin size gerek zatlaryň hemmesi" bolsa hemme zady aňladýar. Meýilnama düşündirişlerini müşderiňiziň dilinde ýazyň.
:::

### 2-nji ädim: Şablon saýlamak

Meýilnama saýlanyndan soň, müşderi başlangyç şablonyny saýlaýar.

- **Şablon saýlamak** meýdançasyny goşuň
- Elýeterli şablonlar olaryň saýlan meýilnamasy boýunça süzülýär (5-nji sapakda sazlandy)
- Her şablonda fitness-e mahsus dizaýny görkezýän öňünden syn şekili bolmaly

### 3-nji ädim: Account döretmek

Muny mümkin boldugyça ýönekeý saklaň. Diňe şulary ýygnaň:

- E-poçta salgysy
- Parol
- Studiýa/biznes ady (bu olaryň saýt adyna öwrülýär)

Hasaba ýazylmakda zerur bolmadyk maglumatlary soramaň. Her goşmaça meýdança öwrülişikleri azaldýar.

### 4-nji ädim: Saýt sazlamasy

- **Saýt ady**: 3-nji ädimde girizilen studiýa adyndan öňünden dolduryň
- **Saýt URL-i**: Studiýa adyndan awtomatik dörediň (meselem, `ironworks.fitsite.com`)

### 5-nji ädim: Töleg

- **Töleg** meýdançasyny goşuň
- Töleg şlýuzyňyzy sazlaň (abuna tölegleri üçin [Stripe](/user-guide/payment-gateways/stripe) maslahat berilýär)
- 5-nji sapakda goşmaça sargyt tekliplerini döreden bolsaňyz, töleg ädiminden öň **Goşmaça sargyt teklibi** meýdançasyny goşuň

### 6-njy ädim: Tassyklama

- Tassyklama habaryny fitness-e mahsus dil bilen özleşdiriň
- Mysal: "Fitness studiýa websaýtyňyz döredilýär. Birnäçe sekuntdan täze saýtyňyza ugrukdyrylarsyňyz."

## Döwür saýlamak düwmesini goşmak

Meýilnamalaryňyzda baha wariantlaryny sazlan bolsaňyz (aýlyk we ýyllyk), müşderiler hasaplaşyk döwürleriniň arasynda geçip biler ýaly checkout formasyna **Döwür saýlamak** meýdançasyny goşuň. Görkezmeler üçin [Checkout formalary](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) sahypasyna serediň.

## Tölegi sazlamak

Eger töleg şlýuzyny entek sazlamadyk bolsaňyz:

1. **Ultimate Multisite > Settings > Payment Gateways** bölümine geçiň
2. [Stripe sazlama gollanmasyna](/user-guide/payment-gateways/stripe) ýa-da öz halaýan şlýuzyňyza eýeriň
3. Synag tölegi bilen doly checkout akymyny synap görüň

Tölegleriň Account-yňyza nähili akýandygy barada jikme-jiklikler üçin [Töleg almak](/user-guide/payment-gateways/getting-paid) sahypasyna serediň.

## Akymy synag etmek

Dowam etmezden öň, doly synag hasaba ýazylmagyny tamamlaň:

1. Checkout formasyny inkognito/şahsy brauzer penjiresinde açyň
2. Meýilnama saýlaň
3. Şablon saýlaň
4. Account dörediň
5. Tölegi tamamlaň (synag tertibini ulanyň)
6. Saýtyň dogry şablon bilen döredilendigini barlaň

Şulary barlaň:

- [ ] Meýilnama düşündirişleri düşnükli we nişa mahsus
- [ ] Şablon öňünden synlary fitness-e laýyk dizaýnlary görkezýär
- [ ] Saýt URL-i studiýa adyndan dogry döredilýär
- [ ] Töleg üstünlikli işlenýär
- [ ] Müşderi saýlanan şablonly işleýän saýta düşýär
- [ ] Tassyklama e-poçtalary fitness-e mahsus dili ulanýar

## Häzire çenli FitSite ulgamy

```
FitSite ulgamy
├── WordPress Multisite (subdomain tertibi)
├── Ultimate Multisite (sazlanan)
├── Wildcard SSL + domen kartalaşdyrmasy bilen hosting
├── Saýt şablonlary (Studio Essential, Gym Pro, Fitness Chain)
├── Önümler (Starter, Growth, Pro + goşmaça sargyt teklipleri)
├── Checkout akymy
│   ├── Nişa mahsus düşündirişler bilen meýilnama saýlamak
│   ├── Fitness öňünden synlary bilen şablon saýlamak
│   ├── Minimal Account döretmek
│   ├── Stripe arkaly töleg
│   └── Fitness-e mahsus tassyklama
└── Branding üçin taýýar (indiki sapak)
```

## Bu sapakda näme gurduk

- Fitness studiýa eýeleri üçin uýgunlaşdyrylan **köp ädimli checkout formasy**
- Hasaba ýazylmak akymynyň dowamynda **nişa mahsus dil**
- **Minimal päsgelçilik** -- diňe esasy meýdançalar, işleýän saýta çalt ýol
- Synag barlagy bilen **töleg integrasiýasy**
- Meýilnama saýlamakdan işleýän saýta çenli **synagdan geçirilen başdan-aýak akym**

---

**Indiki:** [7-nji sapak: Ony özüňiziňki etmek](lesson-7-branding) -- platformany white-label edýäris we FitSite-i brand hökmünde döredýäris.
