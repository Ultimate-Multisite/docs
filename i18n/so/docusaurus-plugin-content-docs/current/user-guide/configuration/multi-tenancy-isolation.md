---
title: Iska-duubidda Waa-la-dhafan
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Iskaashiga Waa-soo-dhinta Badan Weyn (Multi-Tenancy Isolation) {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 waxay taageertaa iskaashiga database iyo fayl-qaadarka ee subsite-kasta si ay u ilaaliyaan qoysaska gaarka ah (sovereign tenants). Tani waxay hubisaa in macluumaadka qoysaska kala duwan ay si cad uga fogaadaan, intaas oo la ilaaliyo hababka diyaarinaya shirkadda (provisioning), la rabaa lacag bixinta (billing), iyo maamulka heerka shabakadaha.

## Istaraatiirka iskaashiga (Isolation strategy) {#isolation-strategy}

Isticmaal iskaashiga gaarka ah (sovereign isolation) kuwa macaamiisha u baahan kala fogaansho dhimis ah oo macluumaadka, kayd fayl-qaadarkii gaarka ah, ama xuduud host-kaal ah.

Qoys kasta oo gaar ah waa inuu lahaayo:

- Database gaar ah oo qoys ah ama istiraatiir prefix database oo lagu ogolaado host-ka.
- Midig (root) fayl-qaadarkii gaarka ah ee qoyska.
- Qayb ka mid ah diiwaanka qoysaska (tenant registry entry) kaas oo isku xiya site-kaaga database-kiisa, goobta asalka (root path), magaca host-ka (hostname), iyo qaabka iskaashiga (isolation model).
- Natiijada xaqiijinta miigreesha (migration verification result) ka hor inta aan la tixgeliyo in qoysku yahay mid socda.

## Xiriirka Host-ka Database-ga (Database host binding) {#database-host-binding}

Version 1.2.0 waxay beddeshaa habka default ee xiriirka host-ka isku-machiga ah (same-machine host binding behavior) ee install-ka gaarka ah. Waxaa la hagaajiyay qiimaha isku-machiga ah sida `localhost` si Bedrock, FrankenPHP, iyo WordPress-ka lagu dhex geliyo container-ka ay u awoodaan inay ogolaadaan oo ay xaqiijiyaan oggolaanshaha (permissions) iyagoo la eegaya xiriirka host-ka MySQL-ku arko.

Marka aad dejinayso qoys gaar ah:

1. Dejinta database host-ka qiimaha u baahan hababka socda (runtime) ee qoyska.
2. Isticmaal `localhost` haddii aad isticmaalayso install-ka socket-ka ah oo host-ku uu filayo xiriirro goobta (local connections).
3. Isticmaal `127.0.0.1` ama magaca adeegga (service hostname) kaliya haddii server-ka database-guuu u ogolaado xuquuqda (privileges) host-kan.
4. Socot xaqiijinta miigreesha (migration verification) ka dib markaad beddesho xiriirka host-ka.

Haddii warbixinnada xaqiijinta ay soo sheegaan fashilmo oo xuquuq ah, is barbardhiga xuquuqda isticmaalka database-ka qoyska (tenant DB user grants) iyo xiriirka host-ka la dejiyay. Isticmaaluhu laga siiyo `user@localhost` waa mid ka duwan `user@127.0.0.1` ama `user@%`.

## Midig Fayl-qaadarka (Filesystem root) {#filesystem-root}

Xiddigga koobka (tenant root) waa inuu si joogto ah u sii ahaado marka la dib u bilaabo ama la cusboonaysiiyo. Ka fogaanshaha meelaha ku xiran oo aan ahayn kuwa qaybta horumarinta (temporary mount paths). Marka la isticmaalayo install-ka nooca Bedrock, hubi in xiddigga koobka uu si cad u tilmaamo goobta web-ka WordPress ee ay u baahan yihiin bootstrap-ka tenant-ka, ma aha oo kaliya goobta project-ka.

## Tirada habka diyaarin (Provisioning order) {#provisioning-order}

Marka la abuuro tenant cusub oo madaxbannaan (sovereign tenants), isticmaal tiracoodkan:

1. Abuurista saddexda qodob ee registry-ga tenant-ka.
2. Abuurista database-ka iyo user-ka database-ka tenant-ka.
3. Bootstrap-ka qaabdhismeedka (schema) tenant-ka.
4. Diyaarinta isticdellada (users) tenant-ka.
5. Qorsheynta meelaha faylasha (filesystem paths) tenant-ka.
6. Samaynta xaqiijinta wareejinta (migration verification).
7. Isbeddelka wareejinta ama DNS-ka ka dib markii la xaqiijiyay.

Tiracdan waxay ka horjoogsataa in tenant-yada qaybta ah oo aan si buuxda u kala go'aansanayn ay helaan traffic-ka inta aysan diyaar u ahayn writer-ka database-ka, isticdellada (users), iyo faylasha.

## Hababka maamulka macaamiisha madaxbannaan (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 waxay ilaalinaysaa hawlaha maamulka macaamiisha meesha ugu weyn marka mode-ka madaxbannaan (sovereign mode) la shaqeeyo. Tenant-ku weli wuxuu noqon karaa install-ka WordPress oo si gaar ah u kala go'aansan, laakiin hawlaha macaamiisha ee ku xiran lacag bixinta shabakadta (network billing), aab-galista (membership), ama xogta ay la wadaagaan (shared account data) waa inay dib u dirayaan macaamiisha meesha ugu weyn halkii ay isku dayaystaan inay dhammaystiraan hawsha gudaha waqtiga tenant-ka.

Habka meesha ugu weyn (main-site flow) wuxuu kuugu maamulayaa:

- Isbeddellada lacag bixinta iyo qorshaha.
- Aragtida guud ee account-ka iyo hawlaha profile-ka macaamiisha.
- Cusboonaysiinta ciwaanka lacagta (billing address) iyo shaashadaha maamulka lacag bixinta.
- Aragyada invoice-ka iyo taariikhda lacag bixinta.
- Hawlaha maamulka meesha sida ku daridda sites ama la saarista site.
- Isbeddelka template-yada (Template switching).
- Qorsheynta domain-ka iyo isbeddellada domain-ka ugu muhiimsan (primary-domain changes).

Markii macmiilku uu bilaabo mid ka mid ah hawlahan laga qaadayo qoys (tenant) madaxbannaan (sovereign tenant), Ultimate Multisite wuxuu samaynayaa URL-ka labada ee muhiimka ah ee website-ka weyn (main-site URL) isagoo ilaalinaya qoyska asalka ah si uu u noqdo meesha la dib u laabto marka ay tahay mid ammaan ah. Tani waxay u oggolaanaysaa macmiilka inuu dhammaystiro hawsha la maamulayo iyadoo la isticmaalayo diiwaannada shirkadda (network records), ka dibna uu ku laabto xaaladda qoyska (tenant context) iyadoon la isku-duubiyo xog bixinta ama xaaladda aab-urriminta (membership state) ee database-ka madaxbannaanka.

Waxaa la tixgelinayaa maamulayaasha (operators), qaybta waxqabadka ah waa: ilaali bogga bixinta (billing), bogga xisaabta (account), bogga checkout-ka, bogga invoice-ka, template-ka, iyo maamulka domain-ka ku jira website-ka weyn si ay u noqdaan kuwa la heli karo qoysaska madaxbannaan. Dashboard-yada qoyska (tenant dashboards) waxay isku xirnaan karaan boggaggaas, laakiin bogga weyn wuxuu ahaan doonaa maamulaha ugu dambeeya ee hawshaas.
