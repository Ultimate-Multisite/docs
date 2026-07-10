---
title: Isolazzjoni Multi-Tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolament Multi-Tenancy {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 supporta isolament database u filesystem per subsite għall tenant sovrani (sovereign). Dan jippassiva dati tal-tenant b'mod separat, wa jippreserva l-provisioning ta' reġistrazzjoni n-network, il-billing u l-administrazzjoni.

## Estrateġija tal-isolament {#isolation-strategy}

Uża l-isolament sovran (sovereign isolation) għall kliementi li għandhom bżonn separazzjoni aktar qawwija tal-data, storage filesystem dedikatu, jew ħdarja host separata.

Kull tenant sovran għandu:

- Database tenant dedikatu jew strategia prefiss database approvata għall-host.
- Root filesystem tenant dedikatu.
- Entry ta' reġistru tenant li jippaġġa is-sitemap mal-database tiegħu, il-root path, l-hostname u l-modu tal-isolament.
- Risultatu verifikazzjoni tal-migrazzjoni qabel ma jkun il-tenant aktar (live).

## Binding host database {#database-host-binding}

Il-versjoni 1.2.0 tġiegħel xi mudelli default ta' binding host is-stess macchina għall installazzjonijiet sovran. Valuri is-stess macchina bħal `localhost` jkunyu normalizzati biex Bedrock, FrankenPHP u installazzjonijiet WordPress containerizzati jistgħu jgħintu u jverifikaw permess kontra l-string host li MySQL qed jara.

Meta tikkonga tenant sovran:

1. Istawla l-host database għall-valur li jħtieġu il-runtime tal-tenant.
2. Uża `localhost` għall-installazzjonijiet socket lokali meta l-host jista' jgħin konezzjoni lokali.
3. Uża `127.0.0.1` jew hostname ta' servizz biss meta il-server database jgħin privilegi għall-host kien din.
4. Esegui verifikazzjoni tal-migrazzjoni wara ma tġiegħel binding host.

Meta verifikazzjoni tipprovdi falli ta' grant, iqrar il-grant ta' l-user tal-DB tenant mal-binding host konfigurat. L-user li jgħin għal `user@localhost` huwa differenti min `user@127.0.0.1` jew `user@%`.

## Root filesystem {#filesystem-root}

Jekk il root tal-tenant għandu jkun stabil b'mod li jipprovvdi (restart) u jiġi implementat (deploy). Evita l-temporary mount paths. B'installazzjonijiet stile Bedrock, konfirmaw li il tenant root jista' jgħaqod mal-WordPress web root li jista' aspettatt mill-bootstrap tal-tenant, mhux biss il project root.

## Ordine ta provisionament (Provisioning order) {#provisioning-order}

B'mod kif jidħol tenants sovrani nuovi, użaw dan l-ordine:

1. Icrea l-entry tal-tenant registry.
2. Icrea il database tal-tenant u l-database user.
3. Bootstrap il schema tal-tenant.
4. Provvidi l-utenti tal-tenant.
5. Konfigura il path tal-filesystem tal-tenant.
6. Esegui verifikazzjoni tal-migration.
7. Iġiegħel (Switch) routing jew DNS wara li jkun passat il-verifikazzjoni.

Dan l-ordine jipprevjeni li tenants mwettqaf b'mod parziale jieħdu traffiku qabel ma jkunu aktivi il writer tal-database, l-utenti u il filesystem.

## Flussi tal-ġestjoni tal-customer sovran {#sovereign-customer-management-flows}
Ultimate Multisite v2.13.0 jipprovvidi l-azioni tal-customer fuq is-siti primari meta jkun mode sovran tivveglat (enabled). Tenant x'inqasir jkun jiegħol bħal installazzjoni WordPress isolata, iżda l-azioni li jidawqa għall-customer u li jippid għall-network billing, membership, jew dati tal-account ġeneral għandhom jgħadu l-customer meta jgħandu l-siti primari invece ta' ma jipprovvdu l-azione f'mod interna tal-runtime tal-tenant.

Il-flusso tal-siti primari japplika għal:

- Checkout u bidżi muġġġeb (plan) b'modifikat.
- Panġvern tal-account u azzjonijiet profil tal-customer.
- Aġġuntament addr tal-billing u skrini tal-managament tal-pagamenti.
- Viste ta l-fattura u istori pagamenti.
- Azjonijiet tal-managament tal-siti bħal iddinja siti jew il-eliminazzjoni tal-siti.
- Iġiegħel (Switch) template.
- Mapping tal-domain u bidżi primari tal-domain.

Meta l-istruttura tal-Ultimate Multisite, meta l-kunsiddra li l-klijent jibda waħda min dan l-azioni mill-tenant sovrani, jilmu b'URL tal-main-site correspond u jippreserva l-tenant ta sorgizzjoni bħala destinazzjoni retta meta huwa it-tajjeb. Dan jagħti l-klijenti l-possibbiltà ta li jikkonplu l-azione gestita kontra l-rekordi tal-network, u mridu rittien għall-kontekst tal-tenant b'mod li ma jkunx jkun kopja tal-billing jew stat tal-membership f'database sovrana.

B'mod ta' operatori, il-regola prattika hija: għandu jkun disponibili l-main site l-pajni tal-billing, account, checkout, invoice, template, u domain-management għall-network sovrani. Dashboard tal-tenant tistaq linka għal dan l-pajni, iżda l-main site tistabbil bħala sorgizzjoni tal-verità għall-azione.
