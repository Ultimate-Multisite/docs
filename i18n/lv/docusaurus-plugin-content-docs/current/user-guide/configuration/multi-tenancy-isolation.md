---
title: Datu izolācija multi-tenantu
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Vadu-tenantu izolācija

Ultimate Multisite: Multi-Tenancy 1.2.0 atbalsta subsites datubāzes un failkristiju izolāciju soverētiem īpašiem klientiem. Tas saglabā klienta datus atšķirīgus, nodrošinot tieši tīkla līmeņa sniegšanu, fakturēšanu un administrāciju.

## Izolācijas stratēģija

Izmantojiet soverēto izolāciju klientiem, kuriem nepieciešams stiprāks datu atšķirība, dedīta failkristijas lietošana vai atsevišķa hosta robeža.

Katram soverētam klientam jābūt:

- Dedītai klienta datubāzēm vai datubāzes priekšporta stratēģijai, apstiprinātajai hosta.
- Dedītai klienta failkristijas galvenajai vietai (root).
- Klienta reģistrācijas ierakstam, kas mapē vietu ar datubāzi, galveno ceļu, hostname un izolācijas modeli.
- Migrācijas apstiprinātās rezultāta, pirms klient ir uzskatīts par aktīvu (live).

## Datubāzes hosta savienojums (Database host binding)

Versija 1.2.0 maina defaultu vadības veidību hosta savienojumā pašas mašīnas instalācijām soverētiem klientiem. Pašmašīnas vērtības, piemēram `localhost`, tiek normalizētas, lai Bedrock, FrankenPHP un kontainerizētu WordPress instalācijas varētu sniegt iļaujas un apstiprināt atļaujas pret hosta stringu, ko MySQL pat redz.

Konfigurējot soverīgu klientu:

1. Iestati datubāzes hosta vērtību, kas nepieciešama klienta runtime (veiktspējas) veidarbībai.
2. Izmantojiet `localhost` vietējās soket instalācijām, ja hosta gaida vietēju savienojumu.
3. Izmantojiet `127.0.0.1` vai tikai pakalpojuma hostname, tikai tad, ja datubāzes server sniegs atļaujas šai hostai.
4. Veiciet migrācijas apstiprināšanu pēc hosta savienojuma izmaiņas.

Ja apstiprinātās rezultāti norāda uz iļauju nepieciešamību, salīdzinājiet klienta DB lietotāju iļaujas ar konfiguriētu hosta savienojumu. Lietotājam, kuram ir sniegta atļauja `user@localhost`, ir atšķirīga no `user@127.0.0.1` vai `user@%`.

## Failkristijas galvenais virsraksts (Filesystem root)

Uzņēmēja galvenā rootis (tenant root) jābūt stabilam atjauninājumos un deployiem. Izvēlējieties neizmantot atkārtotas montēšanas ceļus (temporary mount paths). Bedrock stila instalācijās pārliecināt, ka uzņēmēja galvenais rootis norāda uz WordPress vebrootu, ko jāgaida uzņēmēja bootstrapa, bet ne tikai uz projekta rooti.

## Izveide apakšdā (Provisioning order)

Ja izveidojat jaunas suverēnas (sovereign) mājas, izmantojiet šo secību:

1. Izveidot uzņēmēja reģistrācijas ierakstu (tenant registry entry).
2. Izveidot uzņēmēja datubāzu un datubāzes lietotāju.
3. Bootstrapēt uzņēmēja skemu (schema).
4. Izveidot uzņēmēja lietotājus.
5. Konfigurēt uzņēmēja faila ceļus (filesystem paths).
6. Veikt migrācijas apstiprinājumu (migration verification).
7. Pēc apstiprinājuma veikšanas pārvietot routingu vai DNS.

Šī secība novērš to situāciju, ka daudz izolēti uzņēmēji saņem trafiku, kamēr datubāzes rakstnieks (writer), lietotāji un faila sistēma vēl nav sagatavoti.

## Suverēno klientu pārvaldības plūsmas (Sovereign customer management flows)

Ultimate Multisite v2.13.0, ja ir ieslēgts suverēnis režīms (sovereign mode), saglabā klientu pārvaldības darbības galvenajā vietnē. Uzņēmējais var turpināt darbojoties kā izolēta WordPress instalācija, bet klientu saites darbi, kas atkarīgi no tīkla fakturēšanas, pieejamības vai dalīto konta datus, jānosaucas uz galveno vietni, nevis mēģina pabeigt darbību iekš uzņēmēja runtime.

Galvenās vietnes plūsmas piemērojas šādi:

- Pirkuma un plāna izmaiņas (Checkout and plan changes).
- Konta pārskatu un klientu profila darbi.
- Fakturēšanas adresses atjauninājumi un maksājumu pārvaldības ekrani.
- Fakturas un maksājumu vēstures skati.
- Vietnes pārvaldības darbības, piemēram, vietņu pievienošana vai iznīcināšana.
- Šablonu (template) mainīšana.
- Domenes mapiņa (domain mapping) un galvenās domēnas (primary-domain) izmaiņas.

Kad klienta sāks vienu no šiem darbībām no suverēnojiem tenantiem Ultimate Multisite izveido atbilstošu galvenās vietnes URL un saglabā avotiem tenantu kā atgriešanas mērķi, ja tas ir droši iespējams. Tas ļauj klientiem pabeigt vadīto darbību pret tīkla reģistrētām informācijām, pēc tam atgriezties tenant kontekstā bez billinga vai pievienošanās statusa duplikācijas suverēnā databasē.

Operatoriem praktiskais noteikums ir: saglabāt galvenajā vietnē lietojamās billingas, konta, checkout, faktūras, šablona un domānu pārvaldības lapas suverēnām tīklām. Tenantu dashboardi var saistīties ar šiem lapām, bet galvenā vārdzība (source of truth) darbību paliek galvenajā vietnē.
