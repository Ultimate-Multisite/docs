---
title: Ultimate AI Connector for WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector for WebLLM નું Changelog

## Version 1.1.0 — Released on 2026-04-09 {#version-110--released-on-2026-04-09}

* નવું: એડમિન-બાર સ્ટેટસ ઇન્ડિકેટર સાથે ફ્લોટિંગ ચેટ વિજેટ — કોઈપણ લોગ-ઇન યુઝર ફ્રન્ટ એન્ડથી સીધું બ્રાઉઝર-સાઇડ LLM ને પ્રોમ્પ્ટ આપી શકે છે.
* નવું: SharedWorker runtime — હવે MLC એન્જિન SharedWorker માં ચાલે છે, જેથી એકસાથે ખુલ્લી ઘણી ટેબ્સ એક જ GPU સેશન વહેંચી શકે છે, અને તેની લડાઈ ન થાય.
* નવું: apiFetch middleware interceptor — જે WordPress REST requests AI Client SDK pattern સાથે મેચ થાય છે, તે આપમેળે (transparently) સ્થાનિક WebLLM broker પર રીરાઉટ થાય છે, જેના માટે loopback HTTP round-trip ની જરૂર નથી.
* નવું: કનેક્ટર પેનલમાં વિજેટને ટૉગલ કરવા અને auto-prompt વર્તણૂક (behaviour) ગોઠવવા માટે વિજેટ સેટિંગ્સ UI.
* સુધારો: IndexedDB cache backend ને ફોર્સ કરવામાં આવ્યો છે, જેથી HuggingFace xet CDN રીડાયરેક્ટ્સને કારણે તૂટતા ડિફોલ્ટ Cache API પાથ પર મોડેલ વજન ડાઉનલોડ્સ સુરક્ષિત રહે.
* સુધારો: એમ્બેડિંગ મોડેલો માટે context_window KV-cache ઓવરરાઇડનેスキપ કરવામાં આવ્યો છે (તેમાં કોઈ decoder હોતો નથી અને આ ઓવરરાઇડને કારણે runtime error આવતો હતો).
* સુધારો: worker ટેબ લોડ થાય તે પહેલાં જ /webllm/v1/models માં cold-start candidate મોડેલ જાહેર કરવામાં આવે છે, જેથી SDK ગ્રાહકોને તરત જ મોડેલ દેખાય.
* સુધારો: WebLLM ને wpai_preferred_text_models ફિલ્ટરમાં જોડવામાં આવ્યું છે, જેથી મોડેલ કન્ફિગર થાય ત્યારે AI Experiments ફીચર બ્રાઉઝર એન્જિન પર રીરાઉટ થાય.
* સુધારેલ: એન્ડ-ટુ-એન્ડ ટેસ્ટિંગ દરમિયાન Cache-busting, content normalisation, અને hardware-reference સંબંધિત સુધારાઓ કરવામાં આવ્યા છે.

## Version 1.0.0 — Initial Release {#version-100--initial-release}
