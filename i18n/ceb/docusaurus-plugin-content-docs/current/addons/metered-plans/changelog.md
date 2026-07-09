---
title: Changelog sa Metered Plans
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
- Bag-o: AI token billing para sa multisite subsites — masubay ug maabay ang paggamit sa AI tokens sa nagkalain-laing site sa kustomer nga adunay configurable per-token rates
- Bag-o: Gihimo og bag-o ang Connector enforcement uban ang dynamic limit discovery ug write-through, nagsiguro sa real-time accuracy sa tanang connectors
- Fix: Ang pag-upgrade sa database table karon husto nang nag-align sa BerlinDB schema definitions, nga nakapugong sa mga kapakyasan sa upgrade sa bag-o nga install
- Fix: Gihubad ang database upgrade callbacks ngadto sa saktong format, nga nakasulbad sa silent upgrade failures
- Fix: Ang fractional values karon madawat na sa AI Usage Overage Markup input field
- Fix: Nasulbad ang fatal errors ug double-initialization issues pagka-load sa plugin
- Improved: Gipadugang ang check-env npm script aron ang developer environments makakompleto og self-configuration sa unang pagpadagan

### 1.0.3 {#metered-plans-changelog}
* Gi-update ngadto sa Plugin Update Checker v5
* Gipadugang ang modern WordPress plugin headers
* Gipaayo ang compatibility sa pinaka-latest nga mga bersyon sa WordPress
* Gipalambo ang performance sa usage tracking

### 1.0.2 {#103}
* Mga pag-ayo sa bug ug pagpaayo sa performance
* Gipalambo ang usage reporting

### 1.0.0 {#102}
* Initial release
* Core metered billing functionality
* Usage tracking ug overage calculation
* Automatic invoice generation
