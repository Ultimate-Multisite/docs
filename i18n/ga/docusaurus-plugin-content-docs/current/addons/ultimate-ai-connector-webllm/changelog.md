---
title: Loga athruithe Ultimate AI Connector do WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Loga Athruithe Ultimate AI Connector do WebLLM

## Leagan 1.1.0 — Eisithe ar 2026-04-09 {#version-110--released-on-2026-04-09}

* Nua: Giuirléid chomhrá ar snámh le táscaire stádais sa bharra riaracháin — is féidir le haon úsáideoir logáilte isteach leid a thabhairt don LLM ar thaobh an bhrabhsálaí go díreach ón gceann tosaigh.
* Nua: Am rite SharedWorker — ritheann inneall MLC anois i SharedWorker ionas go roinneann ilchluaisíní seisiún GPU amháin in ionad dul in iomaíocht faoina choinne.
* Nua: Idircheapóir meánbhogearraí apiFetch — cuirtear iarratais WordPress REST a mheaitseálann patrún AI Client SDK ar aghaidh go trédhearcach chuig an mbróicéir áitiúil WebLLM, gan gá le turas fillte HTTP loopback.
* Nua: Comhéadan socruithe giuirléide sa phainéal Connector chun an ghiuirléid chomhrá a scoránú agus iompar uathleid a chumrú.
* Ceartú: Cuir iallach ar inneall taisce IndexedDB ionas go mairfidh íoslódálacha meáchain samhla atreoruithe HuggingFace xet CDN a bhriseann cosán réamhshocraithe Cache API.
* Ceartú: Ná cuir an sárú KV-cache context_window i bhfeidhm do shamhlacha leabaithe (níl díchódóir acu agus ba chúis leis an sárú earráid am rite).
* Ceartú: Fógair samhail iarrthóra an tosaithe fhuair in /webllm/v1/models sula mbeidh cluaisín an worker luchtaithe, ionas go bhfeiceann tomhaltóirí SDK samhail láithreach.
* Ceartú: Ceangail WebLLM leis an scagaire wpai_preferred_text_models ionas go seolann an ghné AI Experiments iarratais chuig inneall an bhrabhsálaí nuair atá samhail cumraithe.
* Feabhsaithe: Ceartúcháin maidir le sárú taisce, normalú ábhair, agus tagairtí crua-earraí a tháinig chun solais le linn tástála ó cheann go ceann.

## Leagan 1.0.0 — Eisiúint Tosaigh {#version-100--initial-release}
