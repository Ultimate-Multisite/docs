---
title: Whakamārama pakihi o te file i te rā
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Pākehā Erori i te Whakaritenga o te File Sunrise

He file sunrise.php he file ā-āhi ahau e whakaaroa ai WordPress i roto i te wā ia pōutu (bootstraps). Mo ka taea ai i WordPress te mōhaka i te file sunrise.php, ia mea me te hoako i te **folder wp-content**.

I roto i te wā ka whakatau koe i Ultimate Multisite he tino pai, ko i roto i te whakamārama (setup wizard) ki te pēpi (screenshot) kua roa, ka tino whakatika Ultimate Multisite te whakopaimi (copy) o tō file sunrise.php ki te folder wp-content.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

I te wā nui, ka taea ai i a koe te whakopaimi i te file aca me ka whakatika katoa. Engari, ko, he tino pai ahau, ko, he mea e hiahia ana (folder permissions, mōtake) he tino pai, he pēnei i te mea, ka taea e Ultimate Multisite ona reira i whakopaimi te file.

Ko i roto i te whakamārama o te ere rero (error message) Ultimo i mau ana, ka whakaaroa koe he te mea i tēnei: **Sunrise copy failed** (Whakopaimi Sunrise ka pēto).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Mō te whakamaoritanga o tēnei, e taea ai i a koe ona whakopaimi te file sunrise.php i roto i te folder wp-ultimo plugin me te whakatika i ia ki te folder wp-content. I tēnei mea kua whakatau koe, ka rere i te whakamārama (wizard page) i te wā, ko e taea ai ngā whakamārama (checks).

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> He aha te mea, he tino pai ahau ona whakaaro i tō mōtake (folder permissions) ki te whakatika i ngā mea e hiahia ana kia whai anga i te ora (avoid having problems in the future), ko he mea e hiahia ana (not only with Ultimate Multisite but with other plugins and themes as well).

Ko te **Health Check tool** (taonga whakamaoritanga) o WordPress (e tino pai ahau ona whai i ai i a koe i tō site ana **admin panel > Tools > Health Check**) he kaha ki te mōhaka i a koe, ko he mea e hiahia ana ia i ngā mōtake (folder permissions) kua whakatika i ngā wāhanga e taea te hoki i te papai (cause problems with WordPress).

<!-- Screenshot nei ka taea te whakatō: Whakawhiti i te mana o ngā folder i te taonga WordPress Health Check tool -->
