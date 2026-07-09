---
title: Impendulo yamakhasimende & Ukubika izinkinga
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Impendulo Yamakhasimende Nokubika Izinkinga

Gratis AI Agent v1.5.0 yethula uhlelo olwakhelwe ngaphakathi lwempendulo nokubika izinkinga oluvumela abasebenzisi bokugcina ukumaka izimpendulo ezingasizi nokubika izinkinga ngqo kusixhumi sengxoxo. Lolu hlelo luhlanganisa ukuphathwa kwemvume, umyalo wokubika ozenzakalelayo, kanye nokuhlunga okusizwa yi-AI ohlangothini lwangemuva.

## Inkinobho Yesithupha-Phansi

Wonke umyalezo othunyelwa umsizi we-AI ubonisa inkinobho **yesithupha-phansi** (👎). Lapho umsebenzisi eyichofoza, angamaka impendulo njengengasizi noma engalungile.

- Inkinobho ivela lapho kudlulwa phezu kwayo eduze komyalezo ngamunye womsizi.
- Ukuyichofoza kuvula **Iwindi Lemvume Yempendulo**.
- Impendulo ihlotshaniswa nochungechunge lwengxoxo kanye nomyalezo othile.

## Iwindi Lemvume Yempendulo

Lapho umsebenzisi echofoza inkinobho yesithupha-phansi, kuvela iwindi lemvume ngaphambi kokuba kuthunyelwe noma iyiphi idatha. Iwindi:

- Lichaza ukuthi yiluphi ulwazi oluzoqoqwa (isicashunwa sengxoxo, umongo wesiphequluli).
- Licela umsebenzisi ukuthi aqinisekise ukuthi uyavuma ukwabelana ngale datha.
- Linikeza inkambu yombhalo okhululekile ukuze umsebenzisi achaze ukuthi yini ehambe kabi.
- Linikeza inketho ethi **Khansela** ukuze kuvalwe ngaphandle kokuthumela.

Ayikho impendulo erekhodwayo kuze kube yilapho umsebenzisi eqinisekisa ngokusobala.

## Isibhengezo Sempendulo Esizivelela Ngokuzenzakalelayo

Ekupheleni kwengxoxo, umsizi angabonisa **isibhengezo sempendulo esizivelela ngokuzenzakalelayo** — umyalezo ongaphazamisi obuza ukuthi iseshini ibisiza yini.

Lesi sibhengezo sivela ngokuzenzakalelayo ngokusekelwe kubude bengxoxo nasekuqageleni komphumela. Sixhumanisa nokugeleza kwempendulo okufanayo nenkinobho yesithupha-phansi. Abasebenzisi bangasivala isibhengezo ngaphandle kokunikeza impendulo.

## Umyalo we-Slash /report-issue

Abasebenzisi bangavusa ukugeleza kwempendulo ngokuqondile ngokuthayipha `/report-issue` kokufakwayo kwengxoxo. Lo myalo:

- Uvula Iwindi Lemvume Yempendulo ngokushesha.
- Ugcwalisa kusengaphambili inkambu yencazelo ngomongo mayelana nengxoxo yamanje.
- Uvumela abasebenzisi ukuthi bengeze imininingwane eyengeziwe ngaphambi kokuthumela.

Umyalo othi `/report-issue` uyatholakala kuzo zonke izindlela zengxoxo (ngaphakathi komugqa, iwidijethi elintantayo, isikrini esigcwele).

## Ukuhlunga Okusizwa yi-AI

Impendulo ethunyelwe idluliselwa kusendlalelo sokuhlunga se-AI esenza lokhu:

- Sihlukanisa umbiko ngezigaba (iphutha lamaqiniso, impendulo engasizi, okuqukethwe okungafanele, njll.).
- Sinamathisela imethadatha efanele yengxoxo.
- Sidlulisela isifinyezo sokuhlunga **Ephoyintini Lokugcina Lempendulo** elilungiselelwe (bheka [Izilungiselelo > Okuthuthukisiwe](#settings-advanced)).

Lokhu kunciphisa isikhathi sokubuyekeza ngesandla ngokuletha izinkinga ezibucayi kakhulu kuqala.

## Izilungiselelo > Okuthuthukisiwe {#settings-advanced}

Ukuze unike amandla uhlangothi lwangemuva lwempendulo, lungiselela izinkambu ezilandelayo ngaphansi kwe-**Gratis AI Agent → Izilungiselelo → Okuthuthukisiwe**:

| Inkambu | Incazelo |
|---|---|
| **I-URL Yephoyinti Lokugcina Lempendulo** | I-URL ethola izicelo ze-POST ezinamaphayloadi empendulo (JSON). |
| **Feedback API Key** | bearer token ethunyelwa ku-`Authorization` header ukuze kuqinisekiswe ukuthunyelwa kwempendulo. |

Shiya zombili izinkambu zingenalutho ukuze ukhubaze ukuqoqwa kwempendulo. Izinkinobho zempendulo ngazinye zihlala zibonakala kubasebenzisi, kodwa ukuthunyelwa ngeke kudluliselwe phambili.

:::tip
Iphoyinti lokugcina lempendulo kufanele lamukele umzimba we-JSON onezinkambu okungenani ezithi `message_id`, `conversation_id`, `feedback_text`, kanye ne-`triage_category`. Bheka amadokhumenti omhlinzeki wephoyinti lakho lokugcina ukuze uthole isikimu esilindelekile.
:::
