---
title: Ingxelo yabaThengi & Ukuxela iiNgxaki
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Ingxelo yabathengi kunye nokuxela iingxaki {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 izisa inkqubo eyakhelwe ngaphakathi yengxelo kunye nokuxela iingxaki evumela abasebenzisi bokugqibela ukuba baphawule iimpendulo ezingeloncedo baze baxele iingxaki ngqo kujongano lwencoko. Le nkqubo iquka ulawulo lwemvume, umyalelo wokuxela ngokuzenzekelayo, kunye nokuhlelwa koncedo nge-AI kwi-backend.

## Iqhosha likabhontsi-ezantsi {#thumbs-down-button}

Wonke umyalezo othunyelwe ngumncedisi we-AI ubonisa iqhosha **likabhontsi-ezantsi** (👎). Xa umsebenzisi elicofa, angaphawula impendulo njengengeloncedo okanye engachanekanga.

- Iqhosha livela xa ku-hover ecaleni komyalezo ngamnye womncedisi.
- Ukulicofa kuvula **Imodal yemvume yengxelo**.
- Ingxelo inxulunyaniswa nomsonto wencoko kunye nomyalezo othile.

## Imodal yemvume yengxelo {#feedback-consent-modal}

Xa umsebenzisi ecofa iqhosha likabhontsi-ezantsi, kuvela imodal yemvume ngaphambi kokuba nayiphi na idatha ithunyelwe. Imodal:

- Ichaza ukuba loluphi ulwazi oluza kuqokelelwa (icatshulwa lencoko, imeko yesikhangeli).
- Icela umsebenzisi aqinisekise ukuba uyavuma ukwabelana ngale datha.
- Inika indawo yokubhala isicatshulwa simahla ukuze umsebenzisi achaze ukuba yintoni engahambanga kakuhle.
- Inika ukhetho **Rhoxisa** ukuze kuvalwe ngaphandle kokungenisa.

Akukho ngxelo irekhodwayo de umsebenzisi aqinisekise ngokucacileyo.

## Ibhena yengxelo yesikhuthazo esizenzekelayo {#auto-prompt-feedback-banner}

Ekupheleni kwencoko, umncedisi angabonisa **ibhena yengxelo yesikhuthazo esizenzekelayo** — umyalezo ongaphazamisiyo obuza ukuba iseshoni ibiluncedo na.

Le bhena ivela ngokuzenzekelayo ngokusekelwe kubude bencoko kunye neendlela zokuqikelela isiphumo. Idibanisa kwindlela enye yengxelo njengeqhosha likabhontsi-ezantsi. Abasebenzisi bangayivala ibhena ngaphandle kokunika ingxelo.

## Umyalelo we-Slash /report-issue {#report-issue-slash-command}

Abasebenzisi banokuvula indlela yengxelo ngqo ngokuchwetheza `/report-issue` kwigalelo lencoko. Lo myalelo:

- Uvula Imodal yemvume yengxelo kwangoko.
- Uzalisa kwangaphambili indawo yenkcazelo ngomxholo malunga nencoko yangoku.
- Uvumela abasebenzisi ukuba bongeze iinkcukacha ezongezelelekileyo ngaphambi kokungenisa.

Umyalelo `/report-issue` uyafumaneka kuzo zonke iindlela zencoko (emgceni, iwijethi edadayo, isikrini esipheleleyo).

## Ukuhlelwa koncedo nge-AI {#ai-assisted-triage}

Ingxelo engenisiweyo ithunyelwa kumaleko wokuhlela nge-AI othi:

- Uhlele ingxelo ngokodidi (impazamo yenyaniso, impendulo engeloncedo, umxholo ongafanelekanga, njl.).
- Uncamathisele imetadata efanelekileyo yencoko.
- Uthumele isishwankathelo sokuhlela kwisiphhelo sengxelo esiqwalaselweyo (jonga [Iisetingi > Okuphambili](#settings-advanced)).

Oku kunciphisa ixesha lokuphonononga ngesandla ngokubonisa iingxaki ezibaluleke kakhulu kuqala.

## Iisetingi > Okuphambili {#settings-advanced}

Ukuze uvule i-backend yengxelo, qwalasela la macandelo alandelayo phantsi kwe-**Gratis AI Agent → Iisetingi → Okuphambili**:

| Icandelo | Inkcazelo |
|---|---|
| **I-URL yesiphhelo sengxelo** | I-URL efumana izicelo ze-POST ezineepayload zengxelo (JSON). |
| **Feedback API Key** | Bearer token ethunyelwa kwi-`Authorization` header ukuze kuqinisekiswe ungeniso lwengxelo. |

Shiya omabini amacandelo engenanto ukuze ucime ukuqokelelwa kwengxelo. Amaqhosha engxelo ngamanye ahlala ebonakala kubasebenzisi, kodwa ungeniso aluyi kudluliselwa phambili.

:::tip
Isiphhelo sengxelo kufuneka samkele umzimba we-JSON onamacandelo ubuncinane athi `message_id`, `conversation_id`, `feedback_text`, kunye `triage_category`. Jonga amaxwebhu omboneleli wesiphhelo sakho ngeschema elindelekileyo.
:::
