---
title: 'Thuto ea 12: Ho tsamaisa Khoebo'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Thuto ya 12: Ho Tsamaisa Khoebo

Sethala ha se projeke eo o e qetang -- ke khoebo eo o e tsamaisang. Thuto ena e akaretsa ditshebetso tsa letsatsi le letsatsi tsa ho laola FitSite: tshehetso, ditefiso, tlhokomelo, le ho boloka bareki ba thabile.

## Moo re Ileng ra Emisa Teng

FitSite e se e phela mme bareki ba a ingodisa. Jwale o hloka ho tsamaisa tshebetso ka tsela e tsitsitseng.

## Ditshebetso tsa Letsatsi le Letsatsi

### Tlhokomelo

Lekola tsena letsatsi le letsatsi (kapa o behe ditemoso):

- **Nako ya ho sebetsa**: Na sethala se a fumaneha? Sebedisa tshebeletso ya ho lekola nako ya ho sebetsa.
- **Dingodiso tse ntjha**: Ke bareki ba bakae ba batjha ba ingodisitseng kajeno?
- **Ditefo tse hlolehileng**: Na ho na le ho hloleha ha ditefo ho hlokang tlhokomelo?
- **Dikopo tsa tshehetso**: Na ho na le dipotso tsa bareki tse sa arajwang?

### Tshehetso ya Bareki

Tsepamiso ya hao ho niche ke monyetla mona. Hobane bareki bohle ba hao ke di-studio tsa boikoetliso, o tla bona dipotso tse tshwanang kgafetsa:

**Dipotso tse tlwaelehileng tseo o tla di fumana:**

- "Ke ntlafatsa jwang kemiso ya ka ya ditlelase?"
- "Na nka fetola mebala ya sebaka sa ka sa marang-rang?"
- "Ke kenya jwang mokoetlisi e motjha sebakeng sa ka sa marang-rang?"
- "Domain ya ka ha e sebetse"
- "Ke hlakola/ntlafatsa moralo wa ka jwang?"

Haha polokelo ya hao ya tsebo (e qadileng Thutong ya 8) ho potoloha dipotso tsena tse iphetang. Tekete e nngwe le e nngwe ya tshehetso e neng e ka ba sengolwa sa polokelo ya tsebo ke pontsho ya hore o ngole sengolwa seo.

### Maemo a Tshehetso

Ha o ntse o hola, hlophisa tshehetso ho ya ka moralo:

| Moralo | Boemo ba Tshehetso | Nako ya Karabelo |
|------|--------------|---------------|
| Starter | Polokelo ya tsebo + imeile | dihora tse 48 |
| Growth | Tshehetso ya imeile | dihora tse 24 |
| Pro | Imeile ya pele + mohala wa onboarding | dihora tse 4 |

[Katoloso ya Support Tickets](/addons/support-tickets) e ka thusa ho laola dikopo tsa tshehetso ka hara sethala.

## Ditshebetso tsa Ditefiso

### Ditefo tse Iphetang

Ultimate Multisite e sebetsana le ditefiso tse iphetang ka boiketsetso ka payment gateway ya hao. Mosebetsi wa hao ke ho lekola:

- **Ditefo tse hlolehileng**: Latela kapele. Ho hloleha ho hongata ke dikarete tse fedileng nako, eseng ho hlakola ka boomo.
- **Dunning**: Beha logic ya ho leka hape ka boiketsetso ka payment gateway ya hao (Stripe e sebetsana le sena hantle)
- **Dikopo tsa ho hlakola**: Utloisisa hore na hobaneng bareki ba tloha. Ho hlakola ho hong le ho hong ke maikutlo.

### Ho Laola Botho

Eya ho **Ultimate Multisite > Botho** ho:

- Bona dipeeletso tsohle tse sebetsang
- Sebetsana le dikopo tsa ho nyolla le ho theola maemo
- Sebetsa dipusetso tsa tjhelete ha ho hlokahala
- Laola ho fela ha diteko

Bona [Ho Laola Botho](/user-guide/administration/managing-memberships) bakeng sa tshupiso e felletseng.

### Di-invoice

Netefatsa hore di-invoice di hlahiswa ka nepo bakeng sa tefo e nngwe le e nngwe. Bareki ba ka hloka di-invoice bakeng sa tlaleho ya ditshenyehelo tsa khoebo. Bona [Ho Laola Ditefo le Di-invoice](/user-guide/administration/managing-payments-and-invoices).

## Tlhokomelo ya Sethala

### Dintlafatso tsa WordPress le Katoloso

Jwalo ka motsamaisi wa network, o ikarabella bakeng sa:

- **Dintlafatso tsa mantlha tsa WordPress**: Lekola sebakeng sa staging pele o di kenya ho production
- **Dintlafatso tsa katoloso**: Ho tshwanang -- lekola pele, ebe o kenya network-wide
- **Dintlafatso tsa theme**: Netefatsa hore ditempleite di ntse di shebahala hantle ka mora dintlafatso tsa theme
- **Dintlafatso tsa Ultimate Multisite**: Latela changelog mme o lekole pele o ntlafatsa

:::warning Le ka Mohla o se ke wa Ntlafatsa ho Production Ntle le ho Lekola
Ntlafatso e robehileng e ama sebaka se seng le se seng sa moreki ho network ya hao. Kamehla lekola dintlafatso pele koping ya staging ya network ya hao.
:::

### Tshireletso

- Boloka software yohle e le maemong a moraorao
- Sebedisa diphasewete tse matla le netefatso ya mehato e mmedi bakeng sa di-account tsa admin
- Lekola diketso tse belaetsang
- Eba le moralo bakeng sa diketsahalo tsa tshireletso

### Tshebetso

Ha network ya hao e ntse e hola, lekola:

- **Dinako tsa ho laela maqephe**: Na dibaka tsa bareki tsa marang-rang di potlakile?
- **Tshebediso ya disebediswa tsa server**: CPU, memori, sebaka sa disk
- **Tshebetso ya database**: Dinetwork tse kgolo di hloka ntlafatso ya database ha nako e ntse e ya

Nahana ka ho kenya caching tshebetsong (page cache, object cache) le CDN haeba ha o so etse jwalo. [Kopanyo ya Cloudflare](/user-guide/host-integrations/cloudflare) e sebetsana le boholo ba sena.

## Taolo ya Potoloho ya Bophelo ba Moreki

### Ho Fokotsa ho Tlohela

Ho tlohela ke peresente ya bareki ba hlakolang kgwedi le kgwedi. Bakeng sa khoebo ya peeletso, ho fokotsa ho tlohela ho bohlokwa jwaloka ho fumana bareki ba batjha.

**Mabaka a tlwaelehileng ao bareki ba di-studio tsa boikoetliso ba tlohelang ka ona:**

- Ha ba a ka ba kgona ho utlwisisa hore na ba sebedise sethala jwang → ntlafatsa onboarding
- Sebaka sa marang-rang se ne se sa shebahale hantle ho lekana → ntlafatsa ditempleite
- Ha ba a ka ba bona boleng → ntlafatsa dikarolo kapa puisano
- Ba fumane kgetho e nngwe e theko e tlase → matlafatsa boleng ba hao ba niche
- Khoebo ya bona e kwetse → ha ho qojwe, empa sala sena morao ka thoko

### Ho Kgothaletsa Dintlafatso

Bareki ba ho Starter ba atlehang ba lokela ho kgothaletswa ho ntlafatsa:

- Ha ba fihla meeding ya moralo (dibaka tsa marang-rang, polokelo), bontsha ditlhahiso tsa ho ntlafatsa
- Romela di-imeile tse lebisitsweng tse totobatsang dikarolo tsa moralo wa Growth tseo ba ka ruang molemo ho tsona
- Bontsha seo bareki ba Growth/Pro ba se hahileng

### Matsholo a ho Kgutlisa

Ha moreki a hlakola:

1. Botsa hore na hobaneng (phuputso ya ho tswa kapa imeile)
2. Rarolla taba ya hae haeba ho kgoneha
3. Fana ka theolelo hore a kgutle (matsatsi a 30-60 ka mora ho hlakola)

## Ditlwaelo tsa Beke le Beke le tsa Kgwedi le Kgwedi

### Beke le Beke

- Hlahloba dingodiso tse ntjha le ho hlakolwa
- Arabela ditekete tsohle tsa tshehetso tse bulehileng
- Lekola tshebetso ya sethala le nako ya ho sebetsa
- Hlahloba ditefo dife kapa dife tse hlolehileng

### Kgwedi le Kgwedi

- Sekaseka metrics tsa bohlokwa (MRR, ho tlohela, bareki ba batjha, dintlafatso)
- Kenya dintlafatso tsa WordPress le katoloso (ka mora teko ya staging)
- Hlahloba le ho ntlafatsa polokelo ya tsebo ho ya ka dipaterone tsa tshehetso
- Romela newsletter kapa ntlafatso ho bareki (dikarolo tse ntjha, malebela, ditaba tsa indasteri ya boikoetliso)

### Kotara le Kotara

- Hlahloba ditheko kgahlanong le bahlolisani le maikutlo a bareki
- Lekola meralo ya ditempleite -- na e hloka ho ntjhafatswa?
- Lekola bokgoni ba hosting -- na o hloka ho hodisa?
- Hlahloba le ho ntlafatsa onboarding ho ya ka data ya activation

## Seo re se Hahileng Thutong Ena

- **Mekgwa ya letsatsi le letsatsi ya ho lekola** bakeng sa uptime, boingodiso, ditefo, le tshehetso
- **Sebopeho sa tshehetso se nang le maemo** se tsamaellanang le maemo a plan
- **Tshebetso ya billing** ho kenyeletswa dunning le ho sebetsana le cancellation
- **Mekgwa ya tlhokomelo** bakeng sa diapdeite, tshireletso, le tshebetso
- **Maano a ho fokotsa churn** a ikgethileng bakeng sa lekala la fitness
- **Mekgwa ya tshebetso ya beke le beke, kgwedi le kgwedi, le kotara le kotara**

---

**E latelang:** [Thuto 13: Ho Atolosa](lesson-13-growth) -- ho hodisa FitSite ho tloha tshebetsong e nyane ho ya kgwebong ya nnete.
