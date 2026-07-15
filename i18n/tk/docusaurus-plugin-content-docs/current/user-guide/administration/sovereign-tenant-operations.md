---
title: Hükümdar Kirýetji Operasiýalary
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Sovereign Tenant Operasiýalary

Ultimate Multisite: Multi-Tenancy 1.2.0 özüniňde hakyky özerk (sovereign) kiramlary üçin operasion guralary goşdirýär: bu subsite-ler özleri bilen öz bazasyny, dosya ulgamyny we ýol görkezijini işleýärler, ýöne ulgamanyň administratory tarapyndan ulanylyp görüp bilnerler.

Bu sahany adatda izole edilen müşderi sazlaryny dolandyrmak, uzak uzaklykda bolan site-ler arasyndaky geçişleri ýa-da standart subsite-i özerk infrastruktur üçin özüni geçirmek üçin ulanylýar.

## Administratolar üçin näme üýtgedik? {#what-changes-for-administrators}

- **Stateless tenant autologiniň** — Ulga administratory, uzyn wagty saklanýan paylaşımlı sessiýa hallaryna garaşmadyk bir özerk kirama barlap biljekdir. SSO tokeni maksat bilen çäklenendir (purpose-scoped), manzil bilen bellemelidir (origin-pinned), täsir edilendigini goramak üçin (replay-protected) we gysga wagtyň geçip gitmegi üçin çäklendirilendir.
- **Özerk-aýnaşykly ýol görkezijisi** — Köne izole edilen ulgamlary we özerk kiramalar birmejle site router yoly arkaly çözeler, bu bolsa köne we täze izole edilen kurmalardaky başlanmagyň tapawudyny azaltýar.
- **Tekeýetlenen geçiş dowamy** — Geçişi barlamak ulgam goýulmagyny, bazany ýazyp biljek haklaryny, kuyly (queue) boşadýan dowamyny we köne tablisaň ýokdugyny kontrol edýär, bu bolsa kirama tamamlanmagyň dowamy üçin gözegçilikdir.
- **Hasaplaýjy tebigatdan has howpsuzlyk** — Özüni geçirmekde (teardown) kirama haklary arassyk ýagdaýda saklanmadyk bazany arkaly galmagyň öňüni almak üçin, özüni geçiren kirama girdeji hasapnamalary arassyk düşündiriş bilen ýok edilýär.

## Özerk kirama barlamak {#visiting-a-sovereign-tenant}

1. **Network Admin > Ultimate Multisite > Sites**-a girip.
2. Öz özerk kiramany saýlaň.
3. Mümkin bolsa parol ýazmakdan ýa-da geçici administrasiýa hasapnamalary döretmekden soň, **Visit (SSO)** funksionalyndan ulanyň.

Bu barlamak dowamynda ol kirama üçin gysga wagty saklanýan login tokeni döredilip, SSO hadysasy kiraman audit izlemede ýazylmaga goýulýar. Eger düwät işjeňlik etmese, kirama domany gözden geçirilip, ol kiramanyň ulgamy bilen baglanyşykly girdeji (endpoint) bar bolup baýlandyp biljekdigini barlap görüň.

## Uzak uzaklykda site operasiýalary kesgitdeji {#remote-site-operations-checklist}

Özerk ýa-da uzak uzaklykda kiramany üýtgetmekden önce, aşakdaky zatlary anyklap göräň:

- Kirýanter domaina kirýan (tenant domain) kirýan fayl tizimini (filesystem) saklaýan hosta aýlanýar.
- Kirýan bazasynyň hosty şol kuramak üçin kesgitlenipdirilen host bağlama (host binding) bilen sazlaşdyrylýar.
- Migrasiýa barlaglaýan komandalar kirýan üçin geçýär.
- DNS ýa-da eýe haklaryndaky üýtgeşmelerden önce asyn (async) migrasiýa kuylyklary boşadylýar.
- Kirýan administratiw ulanyjys migrasiýa dowamynda taýýarlanan we SSO arkaly giriş edip bilýär.

## Hükümdarlik kirýanlary (sovereign tenants) silmek {#deleting-sovereign-tenants}

Hükümdarlik kirýanı silmek tapawutlydyr. Öňden yedekleme we eksport dowamyny barlap, soňra sayt dolandyryş ekranından silip bilersiňiz. 1.2.0-daky aşakdan galdyrmak (teardown) prosesi arassalamak üçin kirýan bazasynyň agzalaryny aýyrýar, ýöne eýe haklaryndan we klasterden dolandyryş panelderini ulanyp bilseňiz host derejesindäki bazasynyň ulanyjylary we klaserleri ýok edilendigini barlap geçmelisiniz.

:::warning
Migrasiýa barlaglaýyş dowamlydyr ýa-da asyn (async) göndermäji işler kuylyp durýan wagtda hükümdarlik kirýanyny silmeň. Barlaglaýyş tamamlanmagyny garaşyp, aşakdan galdyrmak dowamynda dowam edýän işler üçin zerur bolan agzalary aýyrýan zatlar ýok edilmändigini barlap geçiň.
:::
