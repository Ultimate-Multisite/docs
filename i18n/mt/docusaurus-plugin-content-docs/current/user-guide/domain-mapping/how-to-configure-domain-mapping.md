---
title: Kif Tikkonfigura l-Immappjar tad-Dominji
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Kif Tikkonfigura l-Immappjar tad-Domain (v2)

_**NOTA IMPORTANTI: Dan l-artiklu jirreferi għall-verżjoni 2.x ta' Ultimate Multisite.**_

Waħda mill-aktar karatteristiċi b'saħħithom ta' network premium hija l-abbiltà li noffru lill-klijenti tagħna ċ-ċans li jwaħħlu domain ta' livell għoli mas-siti tagħhom. Wara kollox, liema jidher aktar professjonali: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) jew [_**joesbikeshop.com**_](http://joesbikeshop.com)? Għalhekk Ultimate Multisite joffri din il-karatteristika integrata, mingħajr il-ħtieġa li tuża plugins ta' terzi.

## X'inhu l-immappjar tad-domain?

Kif jissuġġerixxi l-isem, l-immappjar tad-domain huwa l-abbiltà offruta minn Ultimate Multisite li jaċċetta talba għal domain personalizzat u jimmappja dik it-talba mas-sit korrispondenti fin-network li għandu dak id-domain partikolari mwaħħal miegħu.

### Kif tissettja l-immappjar tad-domain fuq in-Network Ultimate Multisite tiegħek

L-immappjar tad-domain jeħtieġ xi setup min-naħa tiegħek biex jaħdem. B'xorti tajba, Ultimate Multisite jawtomatizza x-xogħol iebes għalik sabiex tkun tista' tissodisfa r-rekwiżiti faċilment.

Waqt l-installazzjoni ta' Ultimate Multisite, il-wizard awtomatikament jikkopja u jinstalla **sunrise.php** fil-folder magħżul. **Il-wizard ma jħallikx tkompli sakemm dan il-pass jitlesta**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Dan ifisser li ladarba l-wizard tal-installazzjoni ta' Ultimate Multisite ikun lesta s-setup tan-network tiegħek, tista' tibda timmappja d-domain personalizzat minnufih.

Innota li l-immappjar tad-domain f'Ultimate Multisite mhuwiex obbligatorju. Għandek għażla li tuża l-funzjoni nattiva tal-immappjar tad-domain ta' WordPress Multisite jew kwalunkwe soluzzjoni oħra għall-immappjar tad-domain.

Jekk ikollok bżonn tiddiżattiva l-immappjar tad-domain ta' Ultimate Multisite biex tagħti spazju għal soluzzjonijiet oħra ta' immappjar tad-domain, tista' tiddiżattiva din il-karatteristika taħt **Ultimate Multisite > Settings > Domain Mapping**.

![Paġna tas-settings tal-Immappjar tad-Domain li turi ridirezzjoni tal-admin, messaġġ tal-immappjar u għażliet DNS](/img/config/domain-mapping-settings.png)

Eżatt taħt din l-għażla, tista' tara wkoll l-għażla **Force Admin Redirect**. Din l-għażla tippermettilek tikkontrolla jekk il-klijenti tiegħek ikunux jistgħu jaċċessaw id-Dashboard tal-admin tagħhom kemm fuq id-domain personalizzat kif ukoll fuq is-subdomain tagħhom, jew fuq wieħed minnhom biss.

Jekk tagħżel **Force redirect to mapped domain** , il-klijenti tiegħek ikunu jistgħu jaċċessaw id-Dashboard tal-admin tagħhom biss fuq id-domains personalizzati tagħhom.

L-għażla **Force redirect to** **network domain** tagħmel eżattament l-oppost - il-klijenti tiegħek jitħallew jaċċessaw id-Dashboards tagħhom biss fuq is-subdomain tagħhom, anke jekk jippruvaw jidħlu fuq id-domains personalizzati tagħhom.

U l-għażla **Allow access to the admin by both mapped domain domain and network domain** tippermettilhom jaċċessaw id-Dashboards tal-admin tagħhom kemm fuq is-subdomain kif ukoll fuq id-domain personalizzat.

![Dropdown tar-Ridirezzjoni tal-Admin miftuħ li juri t-tliet għażliet ta' ridirezzjoni](/img/config/domain-mapping-redirect-options.png)

Hemm żewġ modi kif timmappja domain personalizzat. L-ewwel wieħed huwa billi timmappja l-isem tad-domain mid-Dashboard tal-admin tan-network tiegħek bħala s-super admin u t-tieni huwa permezz tad-Dashboard tal-admin tas-sottosit taħt il-paġna Account.

Iżda qabel tibda timmappja d-domain personalizzat ma' wieħed mis-sottositi fin-network tiegħek, ser ikollok bżonn tiżgura li s-**settings DNS** tal-isem tad-domain huma kkonfigurati sew.

###

### Tiżgura li s-settings DNS tad-domain huma kkonfigurati sew

Biex immappjar jaħdem, trid tiżgura li d-domain li qed tippjana li timmappja qed jipponta lejn l-indirizz IP tan-Network tiegħek. Innota li għandek bżonn l-indirizz IP tan-Network - l-indirizz IP tad-domain fejn Ultimate Multisite huwa installat - mhux l-indirizz IP tad-domain personalizzat li trid timmappja. Biex tfittex l-indirizz IP ta' domain speċifiku, nissuġġerixxu li tmur fuq [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), pereżempju.

Biex timmappja d-domain b'mod korrett, trid iżżid **A RECORD** fil-konfigurazzjoni **DNS** tiegħek li jipponta lejn dak l-**indirizz IP**. Il-ġestjoni tad-DNS tvarja ħafna bejn reġistraturi tad-domains differenti, iżda hemm ħafna tutorials online li jkopru dan jekk tfittex " _Creating A Record on XXXX_ " fejn XXXX huwa r-reġistratur tad-domain tiegħek (eż.: " _Creating A Record on_ _GoDaddy_ ").

Jekk issib ruħek qed ikollok problemi biex dan jaħdem, **ikkuntattja l-appoġġ tar-reġistratur tad-domain tiegħek** u jkunu jistgħu jgħinuk b'din il-parti.

Jekk qed tippjana li tippermetti lill-klijenti tiegħek jimmappjaw id-domains tagħhom stess, huma jkollhom jagħmlu x-xogħol fuq din il-parti huma stess. Iddirezzjonahom lejn is-sistema ta' appoġġ tar-reġistratur tagħhom jekk isibu ruħhom ma jistgħux joħolqu l-A Record.

### Immappjar ta' isem ta' domain personalizzat bħala Super Admin

Meta tkun illoggjat bħala super admin fuq in-network tiegħek, tista' faċilment iżżid u timmaniġġja ismijiet ta' domains personalizzati billi tmur taħt **Ultimate Multisite > Domains**.

![Paġna tal-lista tad-Domains f'Ultimate Multisite](/img/admin/domains-list.png)

Taħt din il-paġna, tista' tikklikkja fuq il-buttuna **Add Domain** fil-parti ta' fuq u dan jiftaħ tieqa modal fejn tista' tissettja u timla l-**isem tad-domain personalizzat** , **is-sottosit** li tixtieq tapplika l-isem tad-domain personalizzat għalih, u tiddeċiedi jekk tridx tissettjah bħala l-isem tad-**domain primarju** jew le (innota li tista' timmappja **ismijiet ta' domains multipli ma' sottosit wieħed**).

![Modal Add Domain b'isem tad-domain, għażla tas-sit u toggle tad-domain primarju](/img/admin/domain-add-modal.png)

Wara li ddaħħal l-informazzjoni kollha, tista' mbagħad tikklikkja l-buttuna **Add Existing Domain** fil-qiegħ.

Dan jibda l-proċess ta' verifika u ġbir tal-informazzjoni DNS tad-domain personalizzat. Se tara wkoll log fil-qiegħ tal-paġna sabiex issegwi l-proċess li jkun għaddej minnu. Dan il-proċess jista' jieħu ftit minuti biex jitlesta.

Ultimate Multisite v2.13.0 joħloq ukoll ir-rekord intern tad-dominju awtomatikament meta jinħoloq sit ġdid fuq host li għandu jitqies bħala dominju għal kull sit. Jekk il-host huwa d-dominju primarju tan-netwerk, jew wieħed mid-dominji bażi kondiviżi tal-formola taċ-checkout ikkonfigurati fuq qasam **URL tas-Sit**, ir-rekord awtomatiku tad-dominju mmappjat jinqabeż sabiex dak id-dominju bażi kondiviż jibqa' disponibbli għal kull sit li jużah.

Meta klijent jirreġistra dominju ġdid permezz ta' Domain Seller v1.3.0 jew aktar ġdid, Ultimate Multisite awtomatikament jimmappja d-dominju rreġistrat mas-sit tan-netwerk tal-klijent b'mod awtomatiku. L-amministraturi m'għadx għandhom bżonn iżidu rekord separat ta' dominju mmappjat wara reġistrazzjoni b'suċċess sakemm ma jkunux iridu jaġġustaw għażliet bħall-bandiera tad-dominju primarju, l-istat ta' attivazzjoni, jew l-immaniġġjar tal-SSL.

Il-**Stadju** jew l-istatus għandu jinbidel minn **Qed jiġi ċċekkjat id-DNS** għal **Lest** jekk kollox huwa ssettjat kif suppost.

<!-- Screenshot mhux disponibbli: Ringiela tad-dominju li turi l-istadju Qed jiġi ċċekkjat id-DNS fil-lista tad-dominji -->

<!-- Screenshot mhux disponibbli: Ringiela tad-dominju li turi l-istadju Lest bl-indikatur tal-istatus aħdar -->

Jekk tikklikkja fuq l-isem tad-dominju, tkun tista' tara xi għażliet ġewwa fih. Ejja nagħtu ħarsa malajr lejhom:

![Paġna tad-dettalji tad-dominju bit-toggles tal-istadju, sit, attiv, primarju u SSL](/img/admin/domain-edit.png)

**Stadju:** Dan huwa l-istadju li fih jinsab id-dominju. Meta żżid id-dominju għall-ewwel darba, probabbilment ikun fl-istadju **Qed jiġi ċċekkjat id-DNS**. Il-proċess jiċċekkja l-entrati tad-DNS u jikkonferma li huma korretti. Imbagħad, id-dominju jitqiegħed fl-istadju **Qed jiġi ċċekkjat l-SSL**. Ultimate Multisite jiċċekkja jekk id-dominju għandux SSL jew le u jikklassifika d-dominju tiegħek bħala **Lest** jew **Lest (mingħajr SSL)**.

**Sit:** Is-sottodominju li huwa assoċjat ma' dan id-dominju. Id-dominju mmappjat se juri l-kontenut ta' dan is-sit speċifiku.

**Attiv:** Tista' taqleb din l-għażla mixgħula jew mitfija biex tattiva jew tiddiżattiva d-dominju.

**Huwa Dominju Primarju?:** Il-klijenti tiegħek jista' jkollhom aktar minn dominju mmappjat wieħed għal kull sit. Uża din l-għażla biex tagħżel jekk dan huwiex id-dominju primarju għas-sit speċifiku.

**Huwa Sigur?:** Għalkemm Ultimate Multisite jiċċekkja jekk id-dominju għandux ċertifikat SSL jew le qabel ma jattivah, tista' tagħżel manwalment li ttella' d-dominju bi jew mingħajr ċertifikat SSL. Innota li jekk il-websajt m'għandhiex ċertifikat SSL u tipprova ġġiegħelha titla' b'SSL, tista' tagħtik żbalji.

### Immappjar ta' isem ta' dominju personalizzat bħala utent ta' sottosit

L-amministraturi tas-sottositi jistgħu wkoll jimmappjaw ismijiet ta' dominji personalizzati mid-dashboard tal-amministrazzjoni tas-sottosit tagħhom.

L-ewwel, trid tiżgura li tattiva din l-għażla taħt is-settings tal-**Immappjar tad-dominji**. Ara l-screenshot hawn taħt.

<!-- Screenshot mhux disponibbli: Settings tal-immappjar tad-dominji li jippermettu lill-utenti tas-sottositi jimmappjaw dominji permezz tat-toggle Ġestjoni tad-DNS tal-Klijenti -->

Tista' wkoll tissettja jew tikkonfigura din l-għażla taħt il-livell tal-**Pjan** jew l-għażliet tal-prodott fuq **Ultimate Multisite > Prodotti**.

![Taqsima Dominji Personalizzati fuq il-paġna tal-editjar tal-prodott](/img/config/product-custom-domains.png)

Meta kwalunkwe minn dawk l-għażliet tkun attivata u utent ta' sottosit ikun permess jimmappja ismijiet ta' dominji personalizzati, l-utent tas-sottosit għandu jara metabox taħt il-paġna **Account** imsejħa **Dominji**.

<!-- Screenshot mhux disponibbli: Metabox tad-Dominji fuq il-paġna Account tas-sottosit bil-buttuna Żid Dominju -->

L-utent jista' jikklikkja l-buttuna **Żid Dominju** u din tiftaħ tieqa modal b'xi struzzjonijiet.

<!-- Screenshot mhux disponibbli: Modal Żid Dominju li juri struzzjonijiet ta' rekord A tad-DNS għall-utenti tas-sottositi -->

Imbagħad l-utent jista' jikklikkja **Pass Li Jmiss** u jipproċedi biex iżid l-isem tad-dominju personalizzat. Jista' wkoll jagħżel jekk dan ikunx id-dominju primarju jew le.

<!-- Screenshot mhux disponibbli: Formola Żid Dominju b'qasam tal-isem tad-dominju personalizzat u toggle tad-dominju primarju -->

<!-- Screenshot mhux disponibbli: Pass ta' konferma Żid Dominju li jqabbad il-verifika tad-DNS -->

Ikklikkja **Żid Dominju** biex jibda l-proċess ta' verifika u ġbir tal-informazzjoni tad-DNS tad-dominju personalizzat.

### Dwar is-Sinkronizzazzjoni tad-Dominji

Is-Sinkronizzazzjoni tad-Dominji hija proċess fejn Ultimate Multisite iżid l-isem tad-dominju personalizzat mal-kont tal-hosting tiegħek bħala dominju add-on **biex l-immappjar tad-dominju jaħdem**.

Is-sinkronizzazzjoni tad-dominji sseħħ awtomatikament jekk il-fornitur tal-hosting tiegħek għandu integrazzjoni mal-karatteristika tal-immappjar tad-dominji ta' Ultimate Multisite. Bħalissa, dawn il-fornituri tal-hosting huma _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ u _Cpanel._

Meta integrazzjoni ta' fornitur tal-host tkun attiva, Ultimate Multisite jista' wkoll idaħħal fil-kju l-kompitu tal-ħolqien tad-DNS jew tas-sottodominju min-naħa tal-fornitur għal siti maħluqa ġodda. Jekk l-ebda integrazzjoni ma tkun qed tisma' għal dak il-kompitu, ix-xogħol fl-isfond jinqabeż biex jiġu evitati entrati fil-kju li ma jagħmlu xejn. Il-verifiki tad-DNS u tal-SSL għad-dominji mmappjati jkomplu jaħdmu permezz tal-proċess normali tal-istadji tad-dominju.

Ikollok bżonn tattiva din l-integrazzjoni fis-settings ta' Ultimate Multisite taħt it-tab **Integrazzjoni**.

![Tab tal-Integrazzjonijiet fis-settings ta' Ultimate Multisite li turi l-fornituri tal-hosting](/img/config/integrations-tab.png)

<!-- Screenshot mhux disponibbli: Links tal-Konfigurazzjoni tal-fornitur tal-hosting fit-tab tas-settings tal-Integrazzjonijiet -->

_Innota li jekk il-fornitur tal-hosting tiegħek mhuwiex wieħed minn dawk il-fornituri msemmija hawn fuq,**ikollok bżonn tissinkronizza jew iżżid manwalment l-isem tad-dominju** mal-kont tal-hosting tiegħek._
