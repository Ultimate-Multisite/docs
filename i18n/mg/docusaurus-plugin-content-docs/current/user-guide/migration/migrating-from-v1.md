---
title: Mifindra avy amin'ny V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Manova avy amin'ny V1

## Nova ny Ultimate Multisite avy amin'ny fianakaviany voalohany 1.x mankany amin'ny fianakaviana 2.x.

Ny dikan'ny Ultimate Multisite version 2.0 sy mihoatra dia fanovana tanteraka ny code (codebase rewrite), izay midika fa tsy misy zavatra maro mifampiankina eo amin'ny dikan'ny taloha sy ilay vaovao. Noho izany, rehefa manova avy amin'ny 1.x ho 2.x ianao, mila manova ny data anao amin'ny endrika azona antsoina (understand) ny dikan-tsarotra vaovao ireo.

Misaotra anao fa ny Ultimate Multisite 2.0+ dia **misy migrator** (migrator) voalohany ao anatin'ny core izay afaka mamantatra ny data avy amin'ny dikan-taloha taloha sy manova azy ho endrika vaovao izy. Ity fanovana ity dia mitranga mandritra ny **Setup Wizard** an'ny version 2.0+.

Ity lesona ity dia mitazona ny fomba fiasan'ity migrator ity, izay tokony hatao raha misy tsy nahomby, ary ny fomba hanamboarana olana mety hitranga mandritra ity dingana ity.

_**ZAVA-MITANTERAKA: Alohan'ny manombohanao ny fanovana avy amin'ny version 1.x ho version 2.0 dia ataovy antoka fa nanao backup ny database anao ianao**_

## Dingana voalohany

Ny dingana voalohany dia ny mandefa (download) ilay zip file an'ny plugin ary mametraka ny version 2.0 eo amin'ny dashboard an'ny admin an'ny tambajotra (network admin).

Aorian'ny [mametraka sy manome fa aktiva ny version 2.0](../getting-started/installing-ultimate-multisite.md), dia ho fantatry ny rafitra avy hatrany fa mampiasa dikan-taloha taloha (legacy version) ny Multisite anao ary hahita io hafatra io eo amin'ny lohan'ny pejy plugin ianao.

_**FANAMARIHANA:** Raha manana Ultimate Multisite 1.x ao amin'ny Multisite anao ianao, dia hisy safidy ho hanoloana ny plugin amin'ilay version izay vao nampiditrao ianao. Aza misalasala ary tsindrio mba **Hanoloana ny ankehitriny amin'ny nampiditra**._

<!-- Screenshot tsy azo jerena: Pejy plugin mampiseho safidy hanoloana v1 amin'ilay version vaovao nampiditra -->

Ny pejy manarika dia hanazava anao izay legacy add-ons (fampidirana taloha) napetrakao miaraka amin'ny dikan-teny 1.x. Ho misy toromarika momba raha mifanaraka amin'ny dikan-teny 2.0 ny dikan-teny ampiasainao na mila mametraka dikan-teny nohavaozina (upgraded version) an'ilay add-on ianao aorian'ny migration.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Rehefa vonona ianao hanohy, dia afaka tsindrio ilay bokotra miteny hoe **Visit the Installer to finish the upgrade** (Mandehana any amin'ny Installer mba hamaranana ny fanavaozana).

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Ho hitondra anao amin'ny pejy fampidirana (installation wizard) misy hafatra fandraisana anareo. Mila tsindrio fotsiny ianao hoe **Get Started** (Manomboha) mba handefasana azy any amin'ny pejy manaraka.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Aorian'ny tsipika ny **Get Started**, dia hamerina anao amin'ny Pre-install Checks_._ Ity dia haneho ny fampahalalana momba ny rafitrao (System Information) sy ny fanatanterahana WordPress ary hanazava raha mifanaraka amin'ny **Ultimate Multisite's requirements** (fepetra takian'ny Ultimate Multisite).

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Ny dingana manaraka dia ny fametrahana ny license key an'ny Ultimate Multisite sy ny fanatanterahana azy. Izany dia hiantohana fa ho azo ampiasaina avokoa ireo tolotra rehetra, anisan'ireo add-ons, eo amin'ny tranonkalanao.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Aorian'ny fametrahana ny key anao, tsindrio hoe **Agree & Activate** (Manao fifanarahana sy Manatanteraka).

Aorian'ny fanatanterahana ny licence, dia afaka manomboka ny fampidirana (installation) marina ianao amin'ny alalan'ny tsipika hoe **Install** (Ampidiro) amin'ny pejy manaraka. Izany dia hamorona ho azy ireo rakitra sy database ilaina mba hiatoana ny dikan-teny 2.0.

## Anke, ny migrasyon

Ny migrator dia manana fepetra fiarovana ao anatiny izay hanamarina ny tantara rehetra amin'ny multisite anao mba hahazoana antoka fa azo atao ny mitondrana ny data Ultimate Multisite-nao tsy misy olana. Tsindrio ny bokotra **Run Check** mba hanombohana ilay dingana.

Aorian'ny fanaovana ny check, dia misy safidy roa ianao: ny vokatra dia azo **miaraka amin'ny fahadisoana** na **tsy miaraka amin'ny fahadisoana**.

### Miara-miaraka amin'ny Fahadisoana

Raha mahazo hafatra fahadisoana ianao, mila mifandray amin'ny ekipanay fanohanana (support team) ianao mba hanampiana anao amin'ny fanamboarana ilay fahadisoana. Ataovy antoka fa **manome ny error log** rehefa mamorona ticket ianao. Afaka manao download ny log na tsindrio ilay link milaza hoe contact our support team. Ho afaka manokatra ny help widget eo an-kanan'ny lafiny ankavanana amin'ny pejy anao izay efa voaomana ireo toerana ho anao, izay ahitana ireo error logs ao anatin'ny famaritana (description).

_**Satria nahita fahadisoana ny rafitra, tsy afaka mandroso amin'ny migrasiana mankany amin'ny dikan-teny 2.0 ianao. Afaka mamerina any amin'ny dikan-teny 1.x ianao mba hanohy ny fiasan'ny tambajotra anao mandra-pahatongan'ny fanamboarana ilay fahadisoana.**_

### Tsy Miara-miaraka amin'ny Fahadisoana

Raha tsy mahita fahadisoana ny rafitra, dia ho hitanao hafatra fahombiazana (success message) sy bokotra **Migrate** eo ambany izay ahafahanao mandroso amin'ilay migrasiana. Amin'ity pejy ity, dia horaisina ianao mba hamorona backup an'ny database-nao alohan'ny hanatratrarana izany, izay tena manoro hevitra antsika. Tsindrio ny **Migrate** raha efa manana backup ianao.

Ity no ilaina rehetra!

Afaka manandehina ny Wizard setup ianao mba hanavaozana ny logo sy zavatra hafa eo amin'ny tambajy anao na dia afaka manomboka mianatra ny endrika vaovao (interface) an'ny Ultimate Multisite version 2.0 ianao. Andramo faly!
