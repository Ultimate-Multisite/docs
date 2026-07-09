---
title: 'Leciono 13: Skalado'
sidebar_position: 14
_i18n_hash: 44dd9e49f54ba924696a428224c5aae0
---
# Leciono 13: Pligrandiĝo

Vi havas funkciantan platformon kun pagantaj klientoj. Ĉi tiu leciono traktas kiel kreski de malgranda operacio al daŭripova komerco -- skalante infrastrukturon, aŭtomatigante operaciojn, kaj pliigante enspezon por ĉiu kliento.

## Kie Ni Ĉesis

FitSite estas publika, klientoj registriĝas, kaj vi administras ĉiutagajn operaciojn. Nun ni fokusiĝas al kresko.

## Konu Viajn Nombrojn

Antaŭ skalado, komprenu kie vi staras:

### Ĉefaj Metrikoj

- **MRR (Monata Ripetiĝanta Enspezo)**: Totala monata abona enspezo
- **Klientonombro**: Totalo de aktivaj abonantoj
- **ARPU (Meza Enspezo Por Uzanto)**: MRR dividita per klientonombro
- **Nuliga indico**: Procento de klientoj kiuj nuligas ĉiumonate
- **LTV (Dumviva Valoro)**: Meza enspezo por kliento dum ilia tuta abono
- **CAC (Kosto de Klientakiro)**: Meza kosto por akiri unu klienton

### Ekzemplo: FitSite ĉe 50 Klientoj

| Metriko | Valoro |
|--------|-------|
| Klientoj | 50 (30 Komenca, 15 Kreska, 5 Profesia) |
| MRR | $4,450 ($1,470 + $1,485 + $995 + $500 mendaj aldonofertoj) |
| ARPU | $89/monato |
| Monata nuligo | 4% (2 nuligoj/monato) |
| LTV | $89 x 25 monatoj = $2,225 |

Ĉi tiuj nombroj diras al vi pri kio fokusiĝi. Alta nuligo? Riparu retenadon. Malalta ARPU? Antaŭenigu ĝisdatigojn. Alta CAC? Optimumigu akirkanalojn.

## Skalado de Infrastrukturo

### Kiam Skali

Skalu gastigadon kiam:

- Paĝaj ŝargotempoj rimarkeble pliiĝas
- Servila CPU aŭ memoro regule superas 70% uzadon
- Vi alproksimiĝas al 100+ aktivaj retejoj
- Klientaj plendoj pri rapideco pliiĝas

### Kiel Skali

- **Vertikala skalado**: Ĝisdatigu al pli granda servilo (pli da CPU, RAM)
- **Kaŝmemoraj tavoloj**: Aldonu Redis/Memcached por objekta kaŝmemorado, paĝa kaŝmemorado por statika enhavo
- **CDN**: Se vi ankoraŭ ne uzas Cloudflare aŭ similan, aldonu CDN por statikaj havaĵoj
- **Datumbaza optimumigo**: Dum la reto kreskas, datumbazaj demandoj malrapidiĝas. Optimumigu tabelojn, aldonu indeksojn, konsideru dediĉitan datumbazan servilon.
- **Apartigu respondecojn**: Movu amaskomunikilan stokadon al objekta stokado (S3-kongrua), transŝarĝu retpoŝton al transakcia retpoŝta servo

### Gastigada Migrado

Se via nuna gastiganto ne povas skali plu, planu migradon:

1. Agordu la novan medion
2. Testu ĝisfunde per kopio de via reto
3. Planu migradon dum horoj kun malalta trafiko
4. Ĝisdatigu DNS kun minimuma TTL antaŭe
5. Kontrolu ke ĉio funkcias post migrado

## Aŭtomatigado de Operacioj

Dum vi kreskas, manaj procezoj fariĝas botelkoloj. Aŭtomatigu tion, kion vi povas:

### Webhooks kaj Zapier

Uzu [Webhooks](/user-guide/integrations/webhooks) aŭ [Zapier](/user-guide/integrations/zapier) por aŭtomatigi:

- **Sciigoj pri novaj registriĝoj** → Slack-kanalo aŭ CRM
- **Nuligaj alarmoj** → ekigu retgajnan retpoŝtan sinsekvon
- **Pagaj malsukcesoj** → alarmu en via monitora ilo
- **Planaj ĝisdatigoj** → gratula retpoŝto kun gvidilo pri novaj funkcioj

### Retpoŝta Aŭtomatigo

Transiru de manaj retpoŝtoj al aŭtomatigitaj sinsekvoj:

- Enkonduka sinsekvo (jam konstruita en Leciono 8)
- Reengaĝiĝa sinsekvo por neaktivaj klientoj
- Ĝisdatigaj instigoj kiam klientoj alproksimiĝas al planaj limoj
- Renovigaj memorigiloj por jaraj abonantoj

### Subtena Aŭtomatigo

- **Pretaj respondoj** por oftaj demandoj
- **Aŭtomataj respondoj** kiuj konfirmas ricevon de subtenaj petoj
- **Scibazaj sugestoj** kiam klientoj sendas petojn kiuj kongruas kun ekzistantaj artikoloj

## Pliigo de Enspezo

Kresko ne temas nur pri pli da klientoj. Ĝi temas ankaŭ pri pli da enspezo por ĉiu kliento.

### Suprenvendado al Ekzistantaj Klientoj

- **Planaj ĝisdatigoj**: Celitaj kampanjoj montrantaj funkciojn de Kreska/Profesia al Komencaj klientoj
- **Mendaj aldonofertoj**: Reklamu aldonajn produktojn al ekzistantaj klientoj per retpoŝto
- **Jara konvertiĝo**: Proponu al monataj klientoj rabaton por transiri al jara fakturado

### Novaj Enspezfluoj

- **Farita-por-vi agordo**: Postulu superpagon por agordi kaj personecigi retejon de kliento por ili
- **Propraj dezajnaj servoj**: Proponu laŭmendan dezajnlaboron aldone al la ŝablono
- **Trejnaj sesioj**: Pagataj unu-kontraŭ-unu promenigoj por klientoj kiuj volas praktikan helpon
- **Superaj kromprogramoj**: Proponu niĉ-specifajn superajn kromprogramojn kiel pagatajn aldonaĵojn (ekz., fenestraĵo por rezervi taŭgecklasojn)

### Altigo de Prezoj

Dum via platformo maturiĝas kaj aldonas valoron:

- Konservu ekzistantajn klientojn ĉe ilia nuna prezo
- Altigu prezojn por novaj registriĝoj
- Pravigu altigojn per novaj funkcioj kaj plibonigoj

## Konstruado de Teamo

Iam, vi ne povas fari ĉion sola. Oftaj unuaj dungoj:

1. **Subtena persono**: Pritraktas ĉiutagajn klientajn demandojn (komence partatempe)
2. **Enhavkreanto**: Verkadas scibazajn artikolojn, blogajn afiŝojn, kaj merkatikan enhavon
3. **Dezajnisto**: Plibonigas ŝablonojn kaj kreas novajn

Vi ne bezonas dungitojn. Kontraktistoj kaj sendependaj laboristoj bone funkcias por platforma komerco.

## Kreskaj Mejloŝtonoj

| Mejloŝtono | Proksimuma MRR | Fokuso |
|-----------|-----------------|-------|
| 0-25 klientoj | $0-$2,500 | Produkto-merkata kongruo, rekta kontaktado |
| 25-100 klientoj | $2,500-$10,000 | Sistemigu operaciojn, enhava merkatiko |
| 100-250 klientoj | $10,000-$25,000 | Dungu subtenon, optimumigu konvertiĝon, skalu gastigadon |
| 250-500 klientoj | $25,000-$50,000 | Teamkonstruado, novaj enspezfluoj, superaj funkcioj |
| 500+ klientoj | $50,000+ | Platforma matureco, apudaj niĉoj, ebla eliro |

## Kion Ni Konstruis Ĉi-lecione

- **Metrika kadro** por kompreni komercan sanon
- **Plano por skalado de infrastrukturo** por kreski de dekoj al centoj da retejoj
- **Aŭtomatigaj strategioj** por subteno, retpoŝto, kaj operacioj
- **Taktikoj por enspeza kresko** preter nur akiri novajn klientojn
- **Gvidado pri teamkonstruado** por kiam vi elkreskas solan operacion
- **Kreskaj mejloŝtonoj** kun fokusaj areoj por ĉiu etapo

---

**Sekva:** [Leciono 14: Kio Venas Poste](lesson-14-whats-next) -- vastiĝo preter via unua niĉo.
