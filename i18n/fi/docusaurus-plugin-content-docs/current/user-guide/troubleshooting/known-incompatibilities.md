---
title: Tuntemattomat yhteensopivuusongelmat
sidebar_position: 15
_i18n_hash: 93136dc6fe62867e55f770e7b74473e8
---
# Tunnetutkimuksia muista lisäosista {#known-incompatibilities-with-other-plugins}

Ultimate Multisiten asennuksen ja aktivoimisen jälkeen saatat kohdata ongelmia, jos olet jättänyt huomioimatta yhteensopivuusongelmia muiden pluginien kanssa.

Teemme aktiivisesti työtä tämän listan vähentämiseksi jokaiseen uuteen julkaisuun, mutta jos plugin on lueteltu tähän, saatat tarvita sen deaktivoimista, jotta Ultimate Multisite -verkko toimii täysin normaalisti.

Tässä on lista niistä ja mitä sinun pitäisi tehdä näissä tapauksissa:

**Joitakin WPMU DEV -plugin-lisäosista** Jotkin pluginit, joita WPMU DEV ei enää ylläpidä, aiheuttavat tiedettua ongelmaa Ultimate Multisite -rekisteröintiprosessin pysähtymisen viimeisellä vaiheella (käyttäjä ei pysty luomaan tiliä). Tässä on lista plugin-lisäosista, jotka aiheuttavat nämä ongelmat:

  * Signup Language: _Ultimate Multisiten on lisäosa, joka tarjoaa saman toiminnallisuuden nimeltä Ultimate Multisite: Language Switcher._

  * Set Blog Description on Blog Creation: _Tämä on sisäänrakennettu Ultimate Multisiteen, joten erillisen pluginin tarvitsee olla._

  * New Blog Templates: _Tämä on sisäänrakennettu Ultimate Multisiteen, joten erillisen pluginin tarvitsee olla._

  * Set Password on Multisite Blog Creation: _Tämä on sisäänrakennettu Ultimate Multisiteen, joten erillisen pluginin tarvitsee olla._

  * Signup TOS: _Tämä on sisäänrakennettu Ultimate Multisiteen, joten erillisen pluginin tarvitsee olla._

  * Anti-Splog: Vaikka se ei ole yhtä tehokas, tämä on myös _sisäänrakennettu Ultimate Multisiteen._

**Huomautus**: Kaikki muut WPMU Dev -pluginit voidaan käyttää normaalisti rinnakkain Ultimate Multisiten kanssa. Esimerkkejä ovat _Smush_, _Forminator_, _Defender_ jne.
