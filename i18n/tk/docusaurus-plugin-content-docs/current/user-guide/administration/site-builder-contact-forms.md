---
title: Sayt Qurýjy Kontakt Formalary
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Sayt Qurýjy Formalary {#site-builder-contact-forms}

Superdav AI Agent v1.10.0, Site Builder agentini ulanyp chat arxalygyndan (chat interface) ýüzlenip sazlaşykly kontakt formalar döretmek mümkinçiligini goşdirýär. Bu, chatdan çykmasa hem her bir sahka üçin toly işje edýän kontakt formalary goşmaga bolýar.

## Umumy Barlag {#overview}

Site Builder kontakt formasy döretmek (`create_contact_form`) sizi ulanyp bilýän form pluginini awtomatiki tanap we şondan hasaplaýan pluginin özü bilen sazlaşykly kontakt formany döredýär. Durnukli form pluginleri şu görnüşde:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Asistenti siziň saytda bar bolan iň gowy form pluginini awtomatiki saýlaýar we şondan hasaplaýan plugin üçin sazlaşykly kontakt formany döredýär.

## Kontakt Formasy Döretmek {#creating-a-contact-form}

Site Builder arkaly kontakt formasy döretmek üçin:

1. WordPress administrasiýasynyň **Gratis AI Agent** chat panelini açyň.
2. Chat başlygyndaky agent ikonyna basyp, **Site Builder** agentine geçiň.
3. Döretmek isleýän kontakt formany düşündiriň. Mysal üçin:

   > "Contact sahypasynda ad, e-poçta, mesaga we telefon nömreri üçin ulanyp biljek ulgamlary goşdur."

   Ýa-da sadada:

   > "Contact sahypasy üçin kontakt formasy döredip ber."

4. Site Builder kontakt formany döredip, onu goýmak üçin taýyn bolan shortcode (kısa kod) hasaplaýar.

## Döredilen Shortcode-y Ulanmak {#using-the-generated-shortcode}

Site Builder kontakt formany döredenden soň, ol bir shortcode-i (mysal üçin, `[contact-form-7 id="123"]`) hasaplaýar. Siz:

1. **Sahypa ýa-da posta goşmaga** — Shortcode-y köçürip, blok redaktoryndan ýa-da klassiki redaktor bilen her bir sahka ýa-da postanyň içine ýa-da ýazyp bilersiňiz.
2. **Site Builder arkaly goşmagy** — Site Builderden belli bir formany awtomatiki belent sahypa goşmaga soraýa bilersiňiz:

   > "Kontakt formany Contact sahypasyna goş."

3. **Onu şablonda ulan** — PHP bilen biri bolsa, bu shortcode-u tema şablon dosyasına ekleyip bilersiňiz.

## Kontakt Formuny Özelleşdirmek {#customizing-the-contact-form}

Site Builder kontakt formany döredip biler, ondan soň onu has gowy özelleşdire bilersiňiz:

### Chat Arayüzü Üzere {#via-the-chat-interface}

Site Builder-den formany üýtgetmek üçin soraň:

> "Kontakt formany öwü (subject) alanı goşmak we mesaj alanı mütlək (required) etmek üçin güncelleň."

Site Builder formu güncelleşdirip özüni gowulandyrylan shortcode-u geri berer.

### Form Plugininiň Admin Arayüzü Üzere {#via-the-form-plugins-admin-interface}

Formany dogrudan form plugininiň sozlamalarynda hem özelleşdire bilersiňiz:

1. WordPress admini içinde **Contact Form 7** (ýa-da size ýüklendiän form pluginini) açyň.
2. Site Builder-i dörediji formany tapyň.
3. Gerek bolsa, form alanlaryny, barlaglama kurallaryny we elektronik habarlar üçin bildirişleri üýtgediň.

## Form Pluginleri we Birlilik {#form-plugins-and-compatibility}

Site Builder siziň sahypada nähili form pluginini goýandygy bilen awtomatiki tanap we kontakt formany döretmek üçin onu ulanýar. Birnäçe form pluginleri ýüklän bolsa, Site Builder olary şu görkeziji ardykda hasaplary:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Bu pluginlerden hiç hili ýüklän bolsa, Site Builder kontakt formany döretmekden önce birini goýmagy barada maslahat berer.

##Elektron Habarlar

Site Builder-i dörediji kontakt formalary awtomatiki olar sahypa administratoruna elektronik habarlary göndermegi üpjün edýär. Siz aljyma (recipient) elektronik adresi we bildiriş mesajyny özelleşdire bilersiňiz:

1. Form plugininiň admin arayüzüne gidiň.
2. Site Builder-i dörediji formany tapyň.
3. Elektron habar bildirişlerini üýtgediň.

Has doly resminamalar üçin, form plugininiň resminamalaryna müraciň:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Mysalanylydykler (Example Use Cases) {#email-notifications}

### Sadalyk Contact Form (Simple Contact Form) {#example-use-cases}

> "Adyry isim, email we mesage ulanyşyklar bilen sadaly bir kontakt формы döredin."

### Çörekli Forma (Multi-Step Form) {#simple-contact-form}

> "Kontakt maglumatlary üçin ilkin ädim we mesage we tercih edilen kontakt usul üçin ikindi ädim bilen kontakt formu döredin."

### Şartly Logika Barada Forma (Form with Conditional Logic) {#multi-step-form}

> "Dropdowndaky ulanyjynyň seçimine görä dürli ulanyşyklar bilen üýtgeýän bir kontakt formu döredin."

### Dosya Ýükleme Barada Forma (Form with File Upload) {#form-with-conditional-logic}

> "Ulanyjylara dosya ýa ýazgysy ýüklemegi mümkin bolan bir kontakt formu döredin."

:::note
Kontakt formu döretmek Superdav AI Agent v1.10.0 we sonrakı versiyada bar. Bu mümkinçilikden peýdalanmak üçin Site Builder agenti işje edip durmaly.
