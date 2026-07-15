---
title: Xuất và Nhập
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Exporte & Imporote

Ultimate Multisite 2.9.0 nui **Export & Import** tū, he taonga pēnei i te **Tools > Export & Import**. Whakarongo i ai ko te whakamahi i a ia i roto i ngā wā e tino pai ana ki te whakatō (package) site WordPress mā te ZIP file, hei whakauru i tēnei ZIP, hengei te mihi i te site i waenga i Ultimate Multisite me single-site WordPress e tika.

## Whakawhanaungatanga tino nui {#required-permissions}

Me whakamāhi koe mō administrator e taea ai te whai i te menu **Tools** o WordPress i te site e whakaputa ana hengei, hengei te whakauru. I te wāhanga multisite, he mea nui te whakamahi i he account administrator o te wero (network) ko te whakaputa hengei hengei te subsites mō ngā taonga Ultimate Multisite o te wero.

Ko ngā download ZIP e whakaputa ana i roto i he endpoint whakatika (authenticated), kia mārama koe, kia whakahou koe i te session administrator i te wā e whawhai anō ko te download noho, ā, kia mau koe i ngā URL o te download e whai ake nei. I raro i te mana o te admin, kia mau koe i te session administrator i te wā e whawhai anō ko te download noho, ā, kia mau koe i ngā URL o te download e whai ake nei.

## Whakaputa site ki te ZIP {#exporting-a-site-to-a-zip}

1. I te WordPress admin mō te site e tino pai ana ki te whakopero (copy) i, pahi ki **Tools > Export & Import**.
2. Whakawatea te wā whakaputa hengei hengei ko te site e tino pai ana ki te whakatō (package).
3. Whakawatea ngā mea e tika ana kia whakauru, pēnei i uploads, plugins, me themes, i roto i te wā e taea.
4. Whakaaro te whakaputa hengei hengei ko te whakaora i te whakataunga (process) ki te whawhai anō ko te ZIP he hoki. He tino site nui ana hei whawhai anō i te wā e hoki i te ZIP he hoki.
5. Whakauru te ZIP he pēnei i te list o ngā whakaputa hengei hengei.

Mau te ZIP i wāhi ā-māhi (secure location). He tino pai ana ia ki te whai i te mōhaka o te site, ngā whakaritenga, ngā file media, me ngā taonga code e whai tika.

## Ko wai e hoki ai i te whakaputa hengei? {#what-the-export-includes}

He tino site e taea te whakauru:

- Ngā mea o te database o te site e whai tika ana ko ngā whakaritenga.
- Ngā file media e whai tika ana ko ngā uploads e hoki ana.
- Ngā plugins me themes e whai tika ana ko ngā wā e tika ana kia whakawatea.
- Ngā metadata o te whakaputa hengei hengei e whakamahia e te Export & Import tool mō te whakatō i te site ki te whakataunga (installation) e tika ana.

E tūai o te ZIP size e taea ai ngā mea e hoki i te mea e taea ai te mea e hoki, e ngā plugin me ngā theme e whai ake ana, me te whānui o ngā table o te database o te waka.

## Importing site mai te ZIP {#importing-a-site-from-a-zip}

1. Pā te **Tools > Export & Import** ki te waka WordPress e tika ana.
2. Pā te wā o te import me te upload i te ZIP e whakawhiti atu e te tūā i te whare hoki e te Export & Import tool.
3. Whakarite URL pōuri (replacement URL) kia rāua noa te waka, he tino pai ki te whakahoki i te URL pūriri (original URL).
4. Whakarite mō te whakaputa i te ZIP e hoki i te wae e hoki i te import ka whakatika.
5. Whakawā te **Begin Import**.
6. Tātai te pending import ko te wae e hoki i te wae e hoki i te import ka whakatika. Whakarite te **Cancel Import** anō ki te whakamutunga o te mahi i te wae e hoki i te whakaputa.
7. Whakawā te site e hoki mai i te import mō te whaiaro, i te mea he tino pai ana ko te whaiora o te waka me ngā mea e pēnei.

I te waka WordPress e tōtika, ka whakakihoki te ZIP te site e tōtika ki te site e hoki mai. Whakarite whakaputa whakamua (full backup) o te site e tika ana mō i roto i te mahi, me te whakatika i te whaiaro i te whakaputa nui ake mō te waka e tōtika i te wā eke.

## Ngā pōuri me ngā mea e taea ai (Limitations and compatibility notes) {#limitations-and-compatibility-notes}

Māhi nui: Mahi i directory upload (upload) ka tino whitu, ahau e tino pai ana ki te whakamahi i te wāhanga o te site. He tino tika ana koe ki te whakaohanga (confirm) i ngā limita o PHP upload, ngā limita o whakahaere (execution limits), te wāhi o disk (disk space), te memory, me ngā whakaritenga o server timeout mō te whai ake nei i te whero (export) akorua site ka tino nui.

He mea nui ki te whakaaro: He mea nui ki te whakawhiti (move) ngā media library nui ki te wā o whakamahinga lite (low-traffic maintenance window).

Me pēnei te whakamahi i te WordPress installation target: Me haere ana te WordPress, PHP, Ultimate Multisite, plugin, me theme versions e tino tika.

He import a site whakatō (single-site import) ka whakakere ake (replaces) te site target. He kore he taonga (not a merge tool).

He pēnei te whakamahi i ngā move: He pēnei te whakamahi i Multisite-to-single-site me single-site-to-multisite moves, ko e tika ana akorua te environment target ki te haere ana i ngā plugins, themes, URLs, me ngā whānau Ultimate Multisite e kaha ake o te site e whakawhiti mai.

Kia tino whai i te ZIP he pōutu (private). He mea nui ki te whakaaro: He mea taea te whakaurua i database content, files e upload ake, me ngā korero o configuration (configuration details) mai te site e whakawhiti mai.

Mō ngā workflows o export mō te whenua (network-level) e pōutu ake, he tino tika ana koe ki te whakaaro i [Site Export](/user-guide/administration/site-export).
