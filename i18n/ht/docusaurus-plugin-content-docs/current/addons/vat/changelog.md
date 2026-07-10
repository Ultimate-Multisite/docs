---
title: Jounal chanjman VAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Jounal chanjman VAT {#vat-changelog}

Vèsyon 1.0.7 - Pibliye 2026-02-03

* Koreksyon: Nimewo VAT Alman (DE) yo te echwe validasyon akoz erè MS_MAX_CONCURRENT_REQ nan sèvis VIES SOAP. Chanje soti nan ansyen SOAP API a pou ale nan EU VIES REST API ofisyèl la pou validasyon ki pi fyab.
* Koreksyon: Kounye a yo aksepte nimewo VAT lè sèvis VIES la pa disponib tanporèman, olye pou yo rejte yo pa erè. Yo kreye yon antre nan jounal la pou revizyon pita.
* Koreksyon: Chan VAT/Tax ID la kounye a vizib pou tout peyi, pa sèlman manm EU yo. ID taks ki pa nan EU yo (pa egzanp nimewo CHE Swis yo) estoke pou afichaj fakti san validasyon VIES.
* Koreksyon: Rechèch prefiks VAT pou Lagrès (GR), Monako (MC), ak Isle of Man (IM) te kraze akoz lojik rechèch array ki pa t kòrèk.
* Amelyorasyon: Retire depandans dev wp-cli-bundle ki pa nesesè, ki te ka lakòz erè fatal lè yo itilize l ansanm ak ekstansyon Site Exporter la.
* Amelyorasyon: Ajoute yon seri tès inite konplè (53 tès).

Vèsyon 1.0.6 - Pibliye 2026-01-25

* Koreksyon: Tranzaksyon B2B domestik yo kounye a chaje VAT kòrèkteman. Dapre règ VAT EU yo, chaj ranvèse aplike sèlman pou tranzaksyon B2B kwa-fontyè, pa lè peyi kliyan an matche ak peyi konpayi an.

Vèsyon 1.0.5 - Pibliye 2026-01-22

* Koreksyon: Ekstansyon an pa t ap chaje oswa pa t ap fonksyone byen.
* Chanjman: Chanje sous done pousantaj VAT la soti nan euvatrates.com pou ale nan depo ibericode/vat-rates pou done ki pi fyab epi ki antreteni aktivman.
* Koreksyon: Korije fot tipografik nan valè opsyon super_reduced_rates la.
* Amelyorasyon: Ajoute verifikasyon null pou manyen kòd peyi yo pou anpeche erè.
* Chanjman: Retire fichye tradiksyon ki te vini ansanm yo an favè mizajou otomatik atravè Traduttore.

Vèsyon: 1.0.3 - Pibliye 2025-09-28

* Chanje non prefiks la pou ultimate-multisite; mete text domain ajou; ogmante vèsyon an.

Vèsyon 1.0.0-beta.4 - 2021-09-24

* Ajoute: filtè wp_ultimo_skip_network_active_check pou konfigirasyon ki baze sou mu-plugins;

Vèsyon 1.0.0 - 05/08/2021 - Premye piblikasyon
