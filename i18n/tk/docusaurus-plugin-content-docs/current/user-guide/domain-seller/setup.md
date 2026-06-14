---
title: Kursetmek we Ulanmak Tassyklary
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Kuramak ve Sağlayıcı Yapılandırması

Domain Seller eklentisi, sizi her bir gerekli adımdan geçiren rehberli bir kurulum sihirbazıyla birlikte gelir. Bu sayfa sihirbaz akışını ve sonrasında sağlayıcıları nasıl yapılandıracağınızı veya yeniden yapılandıracağınızı anlatır.

## Gereksinimler

- **Multisite Ultimate** v2.4.12 veya daha yenisi, ağa aktif edilmiş olması gerekir
- **PHP** 7.4+
- En az bir desteklenen kayıt kuruluşu için API kimlik bilgileri

## İlk çalıştırma kurulum sihirbazı

Kurulum sihirbazı eklentiyi ilk kez ağa bağladığınızda otomatik olarak başlar. Ayrıca her zaman **Network Admin › Ultimate Multisite › Domain Seller Setup** yolundan erişilebilir.

### Adım 1 — Bir sağlayıcı seçin

Bağlamak istediğiniz kayıt kuruluşunu seçin. Desteklenen seçenekler:

| Sağlayıcı | DNS yönetimi | WHOIS gizliliği |
|---|---|---|
| OpenSRS | Evet | Evet |
| Namecheap | Hayır | Evet (WhoisGuard, ücretsiz) |
| HostAfrica | Evet | Evet (ID koruması) |
| Openprovider | Evet | Evet |
| Hostinger | Barındırılan alan adları için ana Hostinger alan haritalaması yoluyla | Evet |
| GoDaddy | Hayır | Hayır |
| ResellerClub | Evet | Hayır |
| NameSilo | Hayır | Hayır |
| Enom | Evet | Hayır |

### Adım 2 — Kimlik bilgilerini girin

Her sağlayıcının farklı kimlik bilgisi alanları vardır:

**OpenSRS** — Kullanıcı adı ve özel anahtar (OpenSRS Reseller Control Panel'den)

**Namecheap** — Kullanıcı adı ve API anahtarı (Account › Tools › API Access'ten)

**HostAfrica** — HostAfrica reseller modülünden Alan Adı Satıcısı API uç noktası ve kimlik bilgileri. Şu anda ayrı bir sandbox uç noktası belgelenmemiştir; canlı kayıtlar çalıştırmadan önce güvenli okuma-yalnız erişim kontrolleriyle test edin.

**Openprovider** — API erişimi etkinleştirilmiş kullanıcı adı ve şifre. İsteğe bağlı sandbox modu Openprovider sandbox API'sini kullanır ve isteğe bağlı varsayılan müşteri kimliği kayıtlar için yeniden kullanılabilir.

**Hostinger** — Ana Hostinger hPanel API tokeni, bu core Hostinger integrasiinden gelen paylaşılan token. Bu aynı token ana domen haritalamasy we Domen Satyjileri (Domain Seller) qeydiyyat işlemleri üçin isledilir.

**GoDaddy** — API açaryly we sirli (developer.godaddy.com-dan)

**ResellerClub** — Reseller ID we API açaryly (ResellerClub kontrol paneli-den)

**NameSilo** — API açaryly (namesilo.com › Account › API Manager-dan)

**Enom** — Hesap ID we API tokeni

Canli işe geçmeden önce, hasapda varsa **Sandbox mode**-u barlap test etmek üçin provider'in test mühiti bilen test etseň.

### 3-nji ädim — Bağlananylygy barlapla

**Test Connection**-a basyň. Wizard (işlem asbaty) açaryly we bağlantylary barlamak üçin hafif API çagyryşyny göndereýär. Dowam etmeden önce islendik açar meselelerini düzetseň.

### 4-nji ädim — TLDleri import etmek

Bağlanany providerdan ähli bar bolan TLDleri we tolgda narap (wholesale pricing) getirmek üçin **Import TLDs**-a basyň. Bu, domen önümleri üçin ulanylýan TLDler listini dolyt edýär. Ulanýan kataloglary uly providerlar üçin import 30–60 saniça çykyp biler.

TLDler her bir günde bir we planlanan cron işi arkaly awtomatiki ýa-da täzelenip bilner.

### 5-nji ädim — Domen önümi döretmek

Wizard (işlem asbaty) 10% narap bilen standart, ähli önüm üçin ulanylýan domen önümini döredendir. Siz bu önümi hemen redaktir edip bilersiňiz ýa-da **Ultimate Multisite › Products** aşagy manual önümleri döretmek üçin geçip bilerisiz.

Doly önüm görkezmesi üçin [Domain Products and Pricing](./domain-products) bilen tanyşyň.

---

## Provideri redaktir etmek (Reconfiguring a provider)

**Network Admin › Ultimate Multisite › Settings › Domain Seller** aşagyka gitdiň (ýa-da plugin listinde **Settings**-e basyň).

Sagatlaşdyrmalar sahypasy şu zatlary öz içine alýar:

- **Domain satyny etmegi** — bu funksionanyň tamamyny öndüriň/öndürmäni (on/off) üýtgetmek üçin düğme.
- **Default provider** — domain goýmak we täze önümçilikler üçin ulanylýan provider.
- **Max TLDs per search** — bir müşderi goýan wagtyň, näçe TLD (Top-Level Domain) barlamak üçin ulanylýar; ýokary bahalar has köp opsionlary görkezýär, ýöne has çalt bolýar.
- **Availability cache duration** — barada we narjy resminleri näçe wagtdan saklamak üçin; aşak bahalar has dogrydyr, ýöne API çagyrylarlary artýar.
- **Manage domain products** — Önümçilikler listine çalt link.
- **Configure providers** — Providerleri goşmak ýa-da dürlilemek üçin Integration Wizard (Integrasiýa Wizarady) açýar.

### Ikinji provider goşmak

**Configure providers** düwmenine basyň we täze registrator üçin wizarady bedeldir. Siz birnäçe provideri bir wagtda dürlilemek bilerisiz. Her bir domain önümçilikini belli bir providera laýyklaşdyryp bilersiňiz, ýa-da defaultda saklap bilersiňiz.

### TLDleri manual senkronlamak

Täze narjy resminlerini çykarmazdan, goşmaça görkezmek üçin, sazlamalar sahasynda (settings page) ulanylan her bir provideriň ýagnyndan soň **Sync TLDs** düwmenine basyň. Bu, bir provider hasyk resminleri ýa-da täze TLDleri goşanda amatlydyr.

---

## Logs

Her bir provider özüniň log kanalyna ýazýar. Loglar **Network Admin › Ultimate Multisite › Logs** başlygyny görkezmek arkaly görüp bilneris:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Elýeterlik bar bolan ähli ýeterlikleri (başarnyklary we tapawutlary) |
| `domain-seller-renewal` | Ýenilendirme işi netijeleri |
| `domain-seller-opensrs` | Raw OpenSRS API faelliği |
| `domain-seller-namecheap` | Raw Namecheap API faelliği |
| `domain-seller-hostafrica` | Raw HostAfrica API faelliği |
| `domain-seller-openprovider` | Raw Openprovider API faelliği |
| `domain-seller-hostinger` | Raw Hostinger API faelliği |
| `domain-seller-godaddy` | Raw GoDaddy API faelliği |
| `domain-seller-resellerclub` | Raw ResellerClub API faelliği |
| `domain-seller-namesilo` | Raw NameSilo API faelliği |
| `domain-seller-enom` | Raw Enom API faelliği |

---

## Provider mümkinlikleri barada ýazgylar

Her bir registrar API hasapda aynı işleri açyp bilmez. Addonlar bu desteklenmeyen işleri sessizce tapawut etmek yerine, net administrator görýän hatalar bilen göstederler.

- **HostAfrica** iň giňişleýin canlı reseller iş akymyny (lookup, TLD/narap bermek, ýeterlik, yenilendirme, geçirmek, nameserver güncellemeleri, DNS resmileri, EPP kodlary, registrar bloklamasy we ID goragyny) goldaýar.
- **Openprovider** reseller narap bilen TLD senkronizasiýasyny, ýeterlik, yenilendirme, geçirmeleri, nameserver güncellemelerini, DNS zonalar, EPP kodlary, registrar bloklamasy we WHOIS gizlinliğini goldaýar. Ol addon tarapyndan awtomatiki täzelenip bilýän gysga wagty bolan bearer token bilen tassyklama edýär.
- **Hostinger** paylaşılan hPanel API tokeni arkaly tapawut barada gözleg, ýeterlik, portfoliýa goldawy, nameserver güncellemeleri, registrar bloklamasy we WHOIS gizlinliğini goldaýar. Hostinger'in halkara Domainlar API-si reseller/göçme narapyny, girýän geçirmeleri, aşakdaky yenilendirmeleri ýa-da EPP kodlaryny almagy barada açyp bilmez; yenilendirmeler awtomatiki yenilenir.
