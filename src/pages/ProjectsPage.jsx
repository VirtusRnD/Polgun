// ============================================================
// PROJECTS PAGE — Virtus ArGe Gerçek Proje Verileri (88 proje)
// ============================================================
import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// ── Proje Görselleri (Vite Glob Loader - Prod & Dev Destekli) ───────────────
const projectImages = import.meta.glob("/src/assets/projects/**/*.{avif,png,jpg,jpeg,webp,svg,AVIF,PNG,JPG,JPEG,WEBP,SVG}", {
  eager: true,
  import: "default",
});
const getImg = (path) => projectImages[path] || path;

const p1i0 = getImg("/src/assets/projects/adenya-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/001.avif");
const p1i1 = getImg("/src/assets/projects/adenya-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/002.avif");
const p1i2 = getImg("/src/assets/projects/adenya-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/003.avif");
const p1i3 = getImg("/src/assets/projects/adenya-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/004.avif");
const p1i4 = getImg("/src/assets/projects/adenya-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/005.avif");
const p1i5 = getImg("/src/assets/projects/adenya-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1001.avif");
const p1i6 = getImg("/src/assets/projects/adenya-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1002.avif");
const p2i0 = getImg("/src/assets/projects/amazonia-aquapark-timis-oara-romanya-ac-ik-alan-su-parki-avr/1001.avif");
const p2i1 = getImg("/src/assets/projects/amazonia-aquapark-timis-oara-romanya-ac-ik-alan-su-parki-avr/1002.avif");
const p2i2 = getImg("/src/assets/projects/amazonia-aquapark-timis-oara-romanya-ac-ik-alan-su-parki-avr/1003.avif");
const p2i3 = getImg("/src/assets/projects/amazonia-aquapark-timis-oara-romanya-ac-ik-alan-su-parki-avr/1004.avif");
const p2i4 = getImg("/src/assets/projects/amazonia-aquapark-timis-oara-romanya-ac-ik-alan-su-parki-avr/1005.avif");
const p3i0 = getImg("/src/assets/projects/apollonion-asterias-resort-and-spa-kefalonya-yunanistan-ac-i/1001.avif");
const p3i1 = getImg("/src/assets/projects/apollonion-asterias-resort-and-spa-kefalonya-yunanistan-ac-i/1002.avif");
const p3i2 = getImg("/src/assets/projects/apollonion-asterias-resort-and-spa-kefalonya-yunanistan-ac-i/1003.avif");
const p4i0 = getImg("/src/assets/projects/aqualand-benidorm-benidorm-i-spanya-ac-ik-alan-su-parki-avru/1001.avif");
const p4i1 = getImg("/src/assets/projects/aqualand-benidorm-benidorm-i-spanya-ac-ik-alan-su-parki-avru/1002.avif");
const p4i2 = getImg("/src/assets/projects/aqualand-benidorm-benidorm-i-spanya-ac-ik-alan-su-parki-avru/1003.avif");
const p5i0 = getImg("/src/assets/projects/aqualand-costa-adeje-tenerife-i-spanya-ac-ik-alan-su-parki-a/1001.avif");
const p5i1 = getImg("/src/assets/projects/aqualand-costa-adeje-tenerife-i-spanya-ac-ik-alan-su-parki-a/1002.avif");
const p5i2 = getImg("/src/assets/projects/aqualand-costa-adeje-tenerife-i-spanya-ac-ik-alan-su-parki-a/1004.avif");
const p5i3 = getImg("/src/assets/projects/aqualand-costa-adeje-tenerife-i-spanya-ac-ik-alan-su-parki-a/1005.avif");
const p6i0 = getImg("/src/assets/projects/aqualand-maspalomas-gran-canaria-i-spanya-ac-ik-alan-su-park/001.avif");
const p6i1 = getImg("/src/assets/projects/aqualand-maspalomas-gran-canaria-i-spanya-ac-ik-alan-su-park/002.avif");
const p6i2 = getImg("/src/assets/projects/aqualand-maspalomas-gran-canaria-i-spanya-ac-ik-alan-su-park/003.avif");
const p6i3 = getImg("/src/assets/projects/aqualand-maspalomas-gran-canaria-i-spanya-ac-ik-alan-su-park/1002.avif");
const p7i0 = getImg("/src/assets/projects/aqualand-moravia-moravya-c-ekya-ac-ik-alan-su-parki-avrupa/1001.avif");
const p7i1 = getImg("/src/assets/projects/aqualand-moravia-moravya-c-ekya-ac-ik-alan-su-parki-avrupa/1002.avif");
const p7i2 = getImg("/src/assets/projects/aqualand-moravia-moravya-c-ekya-ac-ik-alan-su-parki-avrupa/1003.avif");
const p8i0 = getImg("/src/assets/projects/aqualand-saint-cyprien-saint-cyprien-fransa-ac-ik-alan-su-pa/1001.avif");
const p8i1 = getImg("/src/assets/projects/aqualand-saint-cyprien-saint-cyprien-fransa-ac-ik-alan-su-pa/1003.avif");
const p9i0 = getImg("/src/assets/projects/aqualand-mallorca-i-spanya-ac-ik-alan-su-parki-avrupa/1001.avif");
const p9i1 = getImg("/src/assets/projects/aqualand-mallorca-i-spanya-ac-ik-alan-su-parki-avrupa/1002.avif");
const p9i2 = getImg("/src/assets/projects/aqualand-mallorca-i-spanya-ac-ik-alan-su-parki-avrupa/1003.avif");
const p9i3 = getImg("/src/assets/projects/aqualand-mallorca-i-spanya-ac-ik-alan-su-parki-avrupa/1004.avif");
const p9i4 = getImg("/src/assets/projects/aqualand-mallorca-i-spanya-ac-ik-alan-su-parki-avrupa/1005.avif");
const p9i5 = getImg("/src/assets/projects/aqualand-mallorca-i-spanya-ac-ik-alan-su-parki-avrupa/1006.avif");
const p9i6 = getImg("/src/assets/projects/aqualand-mallorca-i-spanya-ac-ik-alan-su-parki-avrupa/1007.avif");
const p9i7 = getImg("/src/assets/projects/aqualand-mallorca-i-spanya-ac-ik-alan-su-parki-avrupa/1008.avif");
const p10i0 = getImg("/src/assets/projects/aqualand-torremolinos-i-spanya-ac-ik-alan-su-parki-avrupa/Torremolinos001.avif");
const p10i1 = getImg("/src/assets/projects/aqualand-torremolinos-i-spanya-ac-ik-alan-su-parki-avrupa/Torremolinos002.avif");
const p11i0 = getImg("/src/assets/projects/aquila-rithymna-beach-rethymno-yunanistan-otel-ac-ik-alan-su/1002.avif");
const p11i1 = getImg("/src/assets/projects/aquila-rithymna-beach-rethymno-yunanistan-otel-ac-ik-alan-su/1003.avif");
const p11i2 = getImg("/src/assets/projects/aquila-rithymna-beach-rethymno-yunanistan-otel-ac-ik-alan-su/1004.avif");
const p11i3 = getImg("/src/assets/projects/aquila-rithymna-beach-rethymno-yunanistan-otel-ac-ik-alan-su/1005.avif");
const p11i4 = getImg("/src/assets/projects/aquila-rithymna-beach-rethymno-yunanistan-otel-ac-ik-alan-su/1006.avif");
const p12i0 = getImg("/src/assets/projects/arcanus-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1001.avif");
const p12i1 = getImg("/src/assets/projects/arcanus-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1002.avif");
const p12i2 = getImg("/src/assets/projects/arcanus-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1003.avif");
const p13i0 = getImg("/src/assets/projects/blue-waters-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1020.avif");
const p13i1 = getImg("/src/assets/projects/blue-waters-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Blue Waters Club 001.avif");
const p14i0 = getImg("/src/assets/projects/blue-wave-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1001.avif");
const p14i1 = getImg("/src/assets/projects/blue-wave-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1002.avif");
const p15i0 = getImg("/src/assets/projects/boga-cs-gyo-gy-e-s-strandfu-rdo-boga-cs-macaristan-ac-ik-ala/1001.avif");
const p15i1 = getImg("/src/assets/projects/boga-cs-gyo-gy-e-s-strandfu-rdo-boga-cs-macaristan-ac-ik-ala/1002.avif");
const p15i2 = getImg("/src/assets/projects/boga-cs-gyo-gy-e-s-strandfu-rdo-boga-cs-macaristan-ac-ik-ala/1003.avif");
const p16i0 = getImg("/src/assets/projects/caldera-beach-hanya-yunanistan-ac-ik-alan-su-parki-avrupa/1002.avif");
const p16i1 = getImg("/src/assets/projects/caldera-beach-hanya-yunanistan-ac-ik-alan-su-parki-avrupa/1007.avif");
const p16i2 = getImg("/src/assets/projects/caldera-beach-hanya-yunanistan-ac-ik-alan-su-parki-avrupa/1009.avif");
const p16i3 = getImg("/src/assets/projects/caldera-beach-hanya-yunanistan-ac-ik-alan-su-parki-avrupa/1010.avif");
const p16i4 = getImg("/src/assets/projects/caldera-beach-hanya-yunanistan-ac-ik-alan-su-parki-avrupa/1015.avif");
const p16i5 = getImg("/src/assets/projects/caldera-beach-hanya-yunanistan-ac-ik-alan-su-parki-avrupa/1018.avif");
const p16i6 = getImg("/src/assets/projects/caldera-beach-hanya-yunanistan-ac-ik-alan-su-parki-avrupa/1019.avif");
const p16i7 = getImg("/src/assets/projects/caldera-beach-hanya-yunanistan-ac-ik-alan-su-parki-avrupa/1025.avif");
const p16i8 = getImg("/src/assets/projects/caldera-beach-hanya-yunanistan-ac-ik-alan-su-parki-avrupa/1026.avif");
const p17i0 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP01836-Enhanced-NR.avif");
const p17i1 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP01846-Enhanced-NR.avif");
const p17i2 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP01881-Enhanced-NR.avif");
const p17i3 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP02189-Enhanced-NR.avif");
const p17i4 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP02336-Enhanced-NR.avif");
const p17i5 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP02387-Enhanced-NR.avif");
const p17i6 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP07148-Enhanced-NR.avif");
const p17i7 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP07156-Enhanced-NR.avif");
const p17i8 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0370-Enhanced-NR.avif");
const p17i9 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0373-Enhanced-NR.avif");
const p17i10 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0385-Enhanced-NR.avif");
const p17i11 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0388-Enhanced-NR.avif");
const p17i12 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0389-Enhanced-NR.avif");
const p17i13 = getImg("/src/assets/projects/calimera-serra-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0425-Enhanced-NR.avif");
const p18i0 = getImg("/src/assets/projects/calyptus-kirman-premium-antalya-tu-rkiye-otel-ac-ik-alan-su-/1001.avif");
const p18i1 = getImg("/src/assets/projects/calyptus-kirman-premium-antalya-tu-rkiye-otel-ac-ik-alan-su-/1002.avif");
const p18i2 = getImg("/src/assets/projects/calyptus-kirman-premium-antalya-tu-rkiye-otel-ac-ik-alan-su-/1003.avif");
const p19i0 = getImg("/src/assets/projects/camping-le-domaine-du-clarys-saint-jean-de-monts-fransa-ac-i/1001.avif");
const p19i1 = getImg("/src/assets/projects/camping-le-domaine-du-clarys-saint-jean-de-monts-fransa-ac-i/1002.avif");
const p20i0 = getImg("/src/assets/projects/cha-teau-de-l-hom-fransa-ac-ik-alan-su-parki-avrupa/1001.avif");
const p20i1 = getImg("/src/assets/projects/cha-teau-de-l-hom-fransa-ac-ik-alan-su-parki-avrupa/1002.avif");
const p20i2 = getImg("/src/assets/projects/cha-teau-de-l-hom-fransa-ac-ik-alan-su-parki-avrupa/1003.avif");
const p20i3 = getImg("/src/assets/projects/cha-teau-de-l-hom-fransa-ac-ik-alan-su-parki-avrupa/1004.avif");
const p20i4 = getImg("/src/assets/projects/cha-teau-de-l-hom-fransa-ac-ik-alan-su-parki-avrupa/1005.avif");
const p21i0 = getImg("/src/assets/projects/crystal-centro-pearl-collection-antalya-tu-rkiye-otel-ac-ik-/1001.avif");
const p21i1 = getImg("/src/assets/projects/crystal-centro-pearl-collection-antalya-tu-rkiye-otel-ac-ik-/1002.avif");
const p22i0 = getImg("/src/assets/projects/danialand-agadir-fas-ac-ik-alan-su-parki-afrika/1001.avif");
const p22i1 = getImg("/src/assets/projects/danialand-agadir-fas-ac-ik-alan-su-parki-afrika/1002.avif");
const p22i2 = getImg("/src/assets/projects/danialand-agadir-fas-ac-ik-alan-su-parki-afrika/1003.avif");
const p22i3 = getImg("/src/assets/projects/danialand-agadir-fas-ac-ik-alan-su-parki-afrika/1004.avif");
const p22i4 = getImg("/src/assets/projects/danialand-agadir-fas-ac-ik-alan-su-parki-afrika/1005.avif");
const p22i5 = getImg("/src/assets/projects/danialand-agadir-fas-ac-ik-alan-su-parki-afrika/1006.avif");
const p22i6 = getImg("/src/assets/projects/danialand-agadir-fas-ac-ik-alan-su-parki-afrika/1007.avif");
const p23i0 = getImg("/src/assets/projects/delphin-imperial-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DAP01274-Enhanced-NR.avif");
const p23i1 = getImg("/src/assets/projects/delphin-imperial-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DAP01277-Enhanced-NR.avif");
const p23i2 = getImg("/src/assets/projects/delphin-imperial-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DAP01282-Enhanced-NR.avif");
const p23i3 = getImg("/src/assets/projects/delphin-imperial-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DAP01288-Enhanced-NR.avif");
const p23i4 = getImg("/src/assets/projects/delphin-imperial-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DAP01334-Enhanced-NR.avif");
const p23i5 = getImg("/src/assets/projects/delphin-imperial-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DAP01347-Enhanced-NR.avif");
const p23i6 = getImg("/src/assets/projects/delphin-imperial-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DAP01401-Enhanced-NR.avif");
const p24i0 = getImg("/src/assets/projects/delphin-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP00843-Enhanced-NR.avif");
const p24i1 = getImg("/src/assets/projects/delphin-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP00979-Enhanced-NR.avif");
const p24i2 = getImg("/src/assets/projects/delphin-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP01210-Enhanced-NR.avif");
const p24i3 = getImg("/src/assets/projects/delphin-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP01254-Enhanced-NR.avif");
const p24i4 = getImg("/src/assets/projects/delphin-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP07140-Enhanced-NR.avif");
const p24i5 = getImg("/src/assets/projects/delphin-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0993-Enhanced-NR.avif");
const p24i6 = getImg("/src/assets/projects/delphin-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0997-Enhanced-NR.avif");
const p24i7 = getImg("/src/assets/projects/delphin-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/delphin palace001.avif");
const p24i8 = getImg("/src/assets/projects/delphin-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/delphin palace002.avif");
const p25i0 = getImg("/src/assets/projects/dream-fun-world-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-as/1002.avif");
const p25i1 = getImg("/src/assets/projects/dream-fun-world-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-as/1003.avif");
const p26i0 = getImg("/src/assets/projects/dream-world-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki/1001.avif");
const p26i1 = getImg("/src/assets/projects/dream-world-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki/1002.avif");
const p26i2 = getImg("/src/assets/projects/dream-world-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki/1003.avif");
const p27i0 = getImg("/src/assets/projects/duja-didim-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1006.avif");
const p27i1 = getImg("/src/assets/projects/duja-didim-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1039.avif");
const p27i2 = getImg("/src/assets/projects/duja-didim-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1052.avif");
const p27i3 = getImg("/src/assets/projects/duja-didim-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1055.avif");
const p27i4 = getImg("/src/assets/projects/duja-didim-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1079.avif");
const p27i5 = getImg("/src/assets/projects/duja-didim-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1080.avif");
const p27i6 = getImg("/src/assets/projects/duja-didim-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1095.avif");
const p27i7 = getImg("/src/assets/projects/duja-didim-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1096.avif");
const p28i0 = getImg("/src/assets/projects/eftalia-blue-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1001.avif");
const p28i1 = getImg("/src/assets/projects/eftalia-blue-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1002.avif");
const p28i2 = getImg("/src/assets/projects/eftalia-blue-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1003.avif");
const p28i3 = getImg("/src/assets/projects/eftalia-blue-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1004.avif");
const p29i0 = getImg("/src/assets/projects/eftalia-sol-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Eftalia Sol001.avif");
const p29i1 = getImg("/src/assets/projects/eftalia-sol-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Eftalia Sol002.avif");
const p29i2 = getImg("/src/assets/projects/eftalia-sol-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Eftalia Sol003.avif");
const p29i3 = getImg("/src/assets/projects/eftalia-sol-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Eftalia Sol004.avif");
const p30i0 = getImg("/src/assets/projects/ethno-belek-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/ethno belek001.avif");
const p30i1 = getImg("/src/assets/projects/ethno-belek-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/ethno belek002.avif");
const p30i2 = getImg("/src/assets/projects/ethno-belek-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/ethno belek003.avif");
const p31i0 = getImg("/src/assets/projects/fairy-park-selangor-malezya-ac-ik-alan-su-parki-asya/1009.avif");
const p31i1 = getImg("/src/assets/projects/fairy-park-selangor-malezya-ac-ik-alan-su-parki-asya/1010.avif");
const p32i0 = getImg("/src/assets/projects/fantazia-marsa-alam-marsa-alam-misir-otel-ac-ik-alan-su-park/Fantazia Marsa Alam001 (1).avif");
const p32i1 = getImg("/src/assets/projects/fantazia-marsa-alam-marsa-alam-misir-otel-ac-ik-alan-su-park/Fantazia Marsa Alam002.avif");
const p33i0 = getImg("/src/assets/projects/frenzy-waterpark-torreilles-fransa-ac-ik-alan-su-parki-avrup/frenzy001.avif");
const p33i1 = getImg("/src/assets/projects/frenzy-waterpark-torreilles-fransa-ac-ik-alan-su-parki-avrup/frenzy002.avif");
const p33i2 = getImg("/src/assets/projects/frenzy-waterpark-torreilles-fransa-ac-ik-alan-su-parki-avrup/frenzy003.avif");
const p33i3 = getImg("/src/assets/projects/frenzy-waterpark-torreilles-fransa-ac-ik-alan-su-parki-avrup/frenzy004.avif");
const p33i4 = getImg("/src/assets/projects/frenzy-waterpark-torreilles-fransa-ac-ik-alan-su-parki-avrup/frenzy005.avif");
const p34i0 = getImg("/src/assets/projects/golden-beach-nana-girit-yunanistan-ac-ik-alan-su-parki-avrup/Golden Beach Nana001.avif");
const p34i1 = getImg("/src/assets/projects/golden-beach-nana-girit-yunanistan-ac-ik-alan-su-parki-avrup/Golden Beach Nana002.avif");
const p35i0 = getImg("/src/assets/projects/gu-ral-premier-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/1001.avif");
const p35i1 = getImg("/src/assets/projects/gu-ral-premier-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/1002.avif");
const p35i2 = getImg("/src/assets/projects/gu-ral-premier-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/1003.avif");
const p35i3 = getImg("/src/assets/projects/gu-ral-premier-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/1004.avif");
const p36i0 = getImg("/src/assets/projects/iberostar-waves-creta-panorama-and-mare-rethymno-yunanistan-/1002.avif");
const p36i1 = getImg("/src/assets/projects/iberostar-waves-creta-panorama-and-mare-rethymno-yunanistan-/1003.avif");
const p36i2 = getImg("/src/assets/projects/iberostar-waves-creta-panorama-and-mare-rethymno-yunanistan-/1007.avif");
const p36i3 = getImg("/src/assets/projects/iberostar-waves-creta-panorama-and-mare-rethymno-yunanistan-/1008.avif");
const p36i4 = getImg("/src/assets/projects/iberostar-waves-creta-panorama-and-mare-rethymno-yunanistan-/1010.avif");
const p36i5 = getImg("/src/assets/projects/iberostar-waves-creta-panorama-and-mare-rethymno-yunanistan-/1011.avif");
const p37i0 = getImg("/src/assets/projects/jazeerat-bag-dat-irak-ac-ik-alan-su-parki-asya/1001.avif");
const p37i1 = getImg("/src/assets/projects/jazeerat-bag-dat-irak-ac-ik-alan-su-parki-asya/1004.avif");
const p37i2 = getImg("/src/assets/projects/jazeerat-bag-dat-irak-ac-ik-alan-su-parki-asya/1006.avif");
const p37i3 = getImg("/src/assets/projects/jazeerat-bag-dat-irak-ac-ik-alan-su-parki-asya/1014.avif");
const p37i4 = getImg("/src/assets/projects/jazeerat-bag-dat-irak-ac-ik-alan-su-parki-asya/1015.avif");
const p37i5 = getImg("/src/assets/projects/jazeerat-bag-dat-irak-ac-ik-alan-su-parki-asya/1016.avif");
const p37i6 = getImg("/src/assets/projects/jazeerat-bag-dat-irak-ac-ik-alan-su-parki-asya/1017.avif");
const p38i0 = getImg("/src/assets/projects/justiniano-park-conti-antalya-tu-rkiye-otel-ac-ik-alan-su-pa/1001.avif");
const p38i1 = getImg("/src/assets/projects/justiniano-park-conti-antalya-tu-rkiye-otel-ac-ik-alan-su-pa/1003.avif");
const p39i0 = getImg("/src/assets/projects/kass-splash-d-city-i-srail-kapali-alan-su-parki-asya/Kass Splash 003 (1).avif");
const p39i1 = getImg("/src/assets/projects/kass-splash-d-city-i-srail-kapali-alan-su-parki-asya/Kass Splash 005.avif");
const p39i2 = getImg("/src/assets/projects/kass-splash-d-city-i-srail-kapali-alan-su-parki-asya/Kass Splash001.avif");
const p39i3 = getImg("/src/assets/projects/kass-splash-d-city-i-srail-kapali-alan-su-parki-asya/Kass Splash002.avif");
const p39i4 = getImg("/src/assets/projects/kass-splash-d-city-i-srail-kapali-alan-su-parki-asya/KassSplash001.avif");
const p39i5 = getImg("/src/assets/projects/kass-splash-d-city-i-srail-kapali-alan-su-parki-asya/KassSplash002.avif");
const p40i0 = getImg("/src/assets/projects/kirman-sidera-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1007.avif");
const p40i1 = getImg("/src/assets/projects/kirman-sidera-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1009.avif");
const p40i2 = getImg("/src/assets/projects/kirman-sidera-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1010.avif");
const p40i3 = getImg("/src/assets/projects/kirman-sidera-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1011.avif");
const p40i4 = getImg("/src/assets/projects/kirman-sidera-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1012.avif");
const p40i5 = getImg("/src/assets/projects/kirman-sidera-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Kirman Sidera001.avif");
const p40i6 = getImg("/src/assets/projects/kirman-sidera-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Kirman Sidera002.avif");
const p40i7 = getImg("/src/assets/projects/kirman-sidera-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Kirman Sidera003.avif");
const p40i8 = getImg("/src/assets/projects/kirman-sidera-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Kirman Sidera004.avif");
const p41i0 = getImg("/src/assets/projects/kremlin-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/Kremlin Palace001.avif");
const p41i1 = getImg("/src/assets/projects/kremlin-palace-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/Kremlin Palace002.avif");
const p42i0 = getImg("/src/assets/projects/kunuku-resort-karayipler-asyapasifik-resort-tatil-ko-yu-amer/kunuku aqua resort001.avif");
const p42i1 = getImg("/src/assets/projects/kunuku-resort-karayipler-asyapasifik-resort-tatil-ko-yu-amer/kunuku aqua resort002.avif");
const p42i2 = getImg("/src/assets/projects/kunuku-resort-karayipler-asyapasifik-resort-tatil-ko-yu-amer/kunuku aqua resort003.avif");
const p43i0 = getImg("/src/assets/projects/liu-resorts-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1001.avif");
const p43i1 = getImg("/src/assets/projects/liu-resorts-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1002.avif");
const p43i2 = getImg("/src/assets/projects/liu-resorts-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1003.avif");
const p43i3 = getImg("/src/assets/projects/liu-resorts-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1004.avif");
const p44i0 = getImg("/src/assets/projects/long-beach-club-nature-aydin-tu-rkiye-otel-ac-ik-alan-su-par/1001.avif");
const p44i1 = getImg("/src/assets/projects/long-beach-club-nature-aydin-tu-rkiye-otel-ac-ik-alan-su-par/1002.avif");
const p44i2 = getImg("/src/assets/projects/long-beach-club-nature-aydin-tu-rkiye-otel-ac-ik-alan-su-par/1003.avif");
const p45i0 = getImg("/src/assets/projects/lonicera-premium-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DAP02961-Enhanced-NR.avif");
const p45i1 = getImg("/src/assets/projects/lonicera-premium-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DAP03099-Enhanced-NR.avif");
const p45i2 = getImg("/src/assets/projects/lonicera-premium-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DAP07167-Enhanced-NR.avif");
const p45i3 = getImg("/src/assets/projects/lonicera-premium-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DJI_0539-Enhanced-NR.avif");
const p45i4 = getImg("/src/assets/projects/lonicera-premium-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DJI_0583-Enhanced-NR.avif");
const p45i5 = getImg("/src/assets/projects/lonicera-premium-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DJI_0586-Enhanced-NR.avif");
const p45i6 = getImg("/src/assets/projects/lonicera-premium-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DJI_0590-Enhanced-NR.avif");
const p45i7 = getImg("/src/assets/projects/lonicera-premium-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DJI_0597-Enhanced-NR.avif");
const p45i8 = getImg("/src/assets/projects/lonicera-premium-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DJI_20240719113402_0009_D.avif");
const p45i9 = getImg("/src/assets/projects/lonicera-premium-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-a/DJI_20240719113905_0013_D.avif");
const p46i0 = getImg("/src/assets/projects/lusso-sorgun-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1126.avif");
const p46i1 = getImg("/src/assets/projects/lusso-sorgun-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1127.avif");
const p46i2 = getImg("/src/assets/projects/lusso-sorgun-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1132.avif");
const p46i3 = getImg("/src/assets/projects/lusso-sorgun-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1143.avif");
const p46i4 = getImg("/src/assets/projects/lusso-sorgun-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1144.avif");
const p46i5 = getImg("/src/assets/projects/lusso-sorgun-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1145.avif");
const p47i0 = getImg("/src/assets/projects/maxeria-blue-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1001.avif");
const p47i1 = getImg("/src/assets/projects/maxeria-blue-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1002.avif");
const p47i2 = getImg("/src/assets/projects/maxeria-blue-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1003.avif");
const p47i3 = getImg("/src/assets/projects/maxeria-blue-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1004.avif");
const p47i4 = getImg("/src/assets/projects/maxeria-blue-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1005.avif");
const p47i5 = getImg("/src/assets/projects/maxeria-blue-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1006.avif");
const p47i6 = getImg("/src/assets/projects/maxeria-blue-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1007.avif");
const p47i7 = getImg("/src/assets/projects/maxeria-blue-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1008.avif");
const p48i0 = getImg("/src/assets/projects/melas-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/IMG-20250925-WA0098.avif");
const p48i1 = getImg("/src/assets/projects/melas-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/IMG_1528.avif");
const p48i2 = getImg("/src/assets/projects/melas-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/IMG_1547.avif");
const p48i3 = getImg("/src/assets/projects/melas-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/IMG_1560.avif");
const p48i4 = getImg("/src/assets/projects/melas-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/WhatsApp Görsel 2025-11-28 saat 14.18.58_8f6abc13.avif");
const p49i0 = getImg("/src/assets/projects/mo-venpick-resort-antalya-tu-rkiye-ac-ik-alan-su-parki-asya/1001.avif");
const p49i1 = getImg("/src/assets/projects/mo-venpick-resort-antalya-tu-rkiye-ac-ik-alan-su-parki-asya/1002.avif");
const p49i2 = getImg("/src/assets/projects/mo-venpick-resort-antalya-tu-rkiye-ac-ik-alan-su-parki-asya/1003.avif");
const p49i3 = getImg("/src/assets/projects/mo-venpick-resort-antalya-tu-rkiye-ac-ik-alan-su-parki-asya/1004.avif");
const p50i0 = getImg("/src/assets/projects/mo-venpick-waterpark-resort-and-spa-soma-bay-soma-bay-misir-/1001.avif");
const p50i1 = getImg("/src/assets/projects/mo-venpick-waterpark-resort-and-spa-soma-bay-soma-bay-misir-/1002.avif");
const p50i2 = getImg("/src/assets/projects/mo-venpick-waterpark-resort-and-spa-soma-bay-soma-bay-misir-/1003.avif");
const p51i0 = getImg("/src/assets/projects/nirvana-cosmopolitan-antalya-otel-tu-rkiye-ac-ik-alan-su-par/1001.avif");
const p51i1 = getImg("/src/assets/projects/nirvana-cosmopolitan-antalya-otel-tu-rkiye-ac-ik-alan-su-par/1002.avif");
const p52i0 = getImg("/src/assets/projects/nirvana-cosmopolitan-antalya-tu-rkiye-otel-ac-ik-alan-su-par/Nirvana Cosmopolitan001.avif");
const p52i1 = getImg("/src/assets/projects/nirvana-cosmopolitan-antalya-tu-rkiye-otel-ac-ik-alan-su-par/Nirvana Cosmopolitan002.avif");
const p52i2 = getImg("/src/assets/projects/nirvana-cosmopolitan-antalya-tu-rkiye-otel-ac-ik-alan-su-par/Nirvana Cosmopolitan003.avif");
const p52i3 = getImg("/src/assets/projects/nirvana-cosmopolitan-antalya-tu-rkiye-otel-ac-ik-alan-su-par/Nirvana Cosmopolitan004.avif");
const p53i0 = getImg("/src/assets/projects/nirvana-dolce-vita-antalya-tu-rkiye-otel-ac-ik-alan-su-parki/webhh, (1).avif");
const p53i1 = getImg("/src/assets/projects/nirvana-dolce-vita-antalya-tu-rkiye-otel-ac-ik-alan-su-parki/webhh,.avif");
const p54i0 = getImg("/src/assets/projects/numa-bay-exclusive-antalya-tu-rkiye-otel-ac-ik-alan-su-parki/Numa Bay Exclusive001.avif");
const p54i1 = getImg("/src/assets/projects/numa-bay-exclusive-antalya-tu-rkiye-otel-ac-ik-alan-su-parki/Numa Bay Exclusive002.avif");
const p54i2 = getImg("/src/assets/projects/numa-bay-exclusive-antalya-tu-rkiye-otel-ac-ik-alan-su-parki/Numa Bay Exclusive003.avif");
const p54i3 = getImg("/src/assets/projects/numa-bay-exclusive-antalya-tu-rkiye-otel-ac-ik-alan-su-parki/Numa Bay Exclusive004.avif");
const p55i0 = getImg("/src/assets/projects/orka-world-waterpark-mug-la-tu-rkiye-ac-ik-alan-su-parki/1011.avif");
const p55i1 = getImg("/src/assets/projects/orka-world-waterpark-mug-la-tu-rkiye-ac-ik-alan-su-parki/1012.avif");
const p55i2 = getImg("/src/assets/projects/orka-world-waterpark-mug-la-tu-rkiye-ac-ik-alan-su-parki/1013.avif");
const p55i3 = getImg("/src/assets/projects/orka-world-waterpark-mug-la-tu-rkiye-ac-ik-alan-su-parki/1014.avif");
const p55i4 = getImg("/src/assets/projects/orka-world-waterpark-mug-la-tu-rkiye-ac-ik-alan-su-parki/1016.avif");
const p55i5 = getImg("/src/assets/projects/orka-world-waterpark-mug-la-tu-rkiye-ac-ik-alan-su-parki/1019.avif");
const p56i0 = getImg("/src/assets/projects/palm-wings-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1004.avif");
const p56i1 = getImg("/src/assets/projects/palm-wings-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1024.avif");
const p56i2 = getImg("/src/assets/projects/palm-wings-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1025.avif");
const p56i3 = getImg("/src/assets/projects/palm-wings-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1031.avif");
const p56i4 = getImg("/src/assets/projects/palm-wings-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1042.avif");
const p56i5 = getImg("/src/assets/projects/palm-wings-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1051.avif");
const p56i6 = getImg("/src/assets/projects/palm-wings-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1059.avif");
const p56i7 = getImg("/src/assets/projects/palm-wings-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1078.avif");
const p57i0 = getImg("/src/assets/projects/paloma-grida-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Palomaa Grida001.avif");
const p57i1 = getImg("/src/assets/projects/paloma-grida-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Palomaa Grida002.avif");
const p57i2 = getImg("/src/assets/projects/paloma-grida-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Palomaa Grida003.avif");
const p57i3 = getImg("/src/assets/projects/paloma-grida-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Palomaa Grida004.avif");
const p57i4 = getImg("/src/assets/projects/paloma-grida-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Palomaa Grida005.avif");
const p58i0 = getImg("/src/assets/projects/paradise-spa-dogo-asan-gu-ney-kore-ac-ik-alan-su-parki-asya/Paadise Spa Dogo001.avif");
const p58i1 = getImg("/src/assets/projects/paradise-spa-dogo-asan-gu-ney-kore-ac-ik-alan-su-parki-asya/Paadise Spa Dogo002.avif");
const p58i2 = getImg("/src/assets/projects/paradise-spa-dogo-asan-gu-ney-kore-ac-ik-alan-su-parki-asya/Paadise Spa Dogo003.avif");
const p59i0 = getImg("/src/assets/projects/parque-aqua-tico-de-fafe-fafe-portekiz-ac-ik-alan-su-parki-a/1001.avif");
const p59i1 = getImg("/src/assets/projects/parque-aqua-tico-de-fafe-fafe-portekiz-ac-ik-alan-su-parki-a/1002.avif");
const p59i2 = getImg("/src/assets/projects/parque-aqua-tico-de-fafe-fafe-portekiz-ac-ik-alan-su-parki-a/1005.avif");
const p60i0 = getImg("/src/assets/projects/pickalbatros-aqua-fun-club-marakes-fas-ac-ik-alan-su-parki-a/1001.avif");
const p60i1 = getImg("/src/assets/projects/pickalbatros-aqua-fun-club-marakes-fas-ac-ik-alan-su-parki-a/1002.avif");
const p61i0 = getImg("/src/assets/projects/pickalbatros-laguna-vista-resort-s-arm-el-s-eyh-misir-ac-ik-/1003.avif");
const p61i1 = getImg("/src/assets/projects/pickalbatros-laguna-vista-resort-s-arm-el-s-eyh-misir-ac-ik-/1004.avif");
const p61i2 = getImg("/src/assets/projects/pickalbatros-laguna-vista-resort-s-arm-el-s-eyh-misir-ac-ik-/1005.avif");
const p62i0 = getImg("/src/assets/projects/pickalbatros-port-ghalib-port-ghalib-misir-ac-ik-alan-su-par/7001.avif");
const p62i1 = getImg("/src/assets/projects/pickalbatros-port-ghalib-port-ghalib-misir-ac-ik-alan-su-par/7002.avif");
const p63i0 = getImg("/src/assets/projects/pickalbatros-sungo-hurgada-misir-ac-ik-alan-su-parki-afrika/Pickalbatros Sungo001.avif");
const p63i1 = getImg("/src/assets/projects/pickalbatros-sungo-hurgada-misir-ac-ik-alan-su-parki-afrika/Pickalbatros Sungo002.avif");
const p63i2 = getImg("/src/assets/projects/pickalbatros-sungo-hurgada-misir-ac-ik-alan-su-parki-afrika/Pickalbatros Sungo003.avif");
const p63i3 = getImg("/src/assets/projects/pickalbatros-sungo-hurgada-misir-ac-ik-alan-su-parki-afrika/Pickalbatros Sungo004.avif");
const p63i4 = getImg("/src/assets/projects/pickalbatros-sungo-hurgada-misir-ac-ik-alan-su-parki-afrika/Pickalbatros Sungo006.avif");
const p64i0 = getImg("/src/assets/projects/pine-beach-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Pine Beach001.avif");
const p64i1 = getImg("/src/assets/projects/pine-beach-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Pine Beach002.avif");
const p64i2 = getImg("/src/assets/projects/pine-beach-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Pine Beach003.avif");
const p64i3 = getImg("/src/assets/projects/pine-beach-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Pine Beach004.avif");
const p64i4 = getImg("/src/assets/projects/pine-beach-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Pine Beach005.avif");
const p64i5 = getImg("/src/assets/projects/pine-beach-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/Pine Beach006.avif");
const p65i0 = getImg("/src/assets/projects/rixos-murjana-cidde-suudi-arabistan-otel-ac-ik-alan-su-parki/Rixos Murjana001.avif");
const p66i0 = getImg("/src/assets/projects/roj-park-nasiriye-irak-kapali-alan-su-parki-tu-rkiye-and-ort/Roj Park001.avif");
const p66i1 = getImg("/src/assets/projects/roj-park-nasiriye-irak-kapali-alan-su-parki-tu-rkiye-and-ort/Roj Park002.avif");
const p67i0 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DAP02494.avif");
const p67i1 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DAP02566.avif");
const p67i2 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DAP02755.avif");
const p67i3 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DAP02803.avif");
const p67i4 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DAP02808.avif");
const p67i5 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DJI_0431.avif");
const p67i6 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DJI_0440.avif");
const p67i7 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DJI_0443.avif");
const p67i8 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DJI_0466.avif");
const p67i9 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DJI_0479.avif");
const p67i10 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DJI_0486.avif");
const p67i11 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DJI_20240718150037_0057_D.avif");
const p67i12 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DJI_20240718150422_0062_D.avif");
const p67i13 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DJI_20240718151729_0083_D.avif");
const p67i14 = getImg("/src/assets/projects/royal-garden-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/DJI_20240718151837_0090_D.avif");
const p68i0 = getImg("/src/assets/projects/rusica-park-skikda-cezayir-ac-ik-alan-su-parki-afrika/1001.avif");
const p68i1 = getImg("/src/assets/projects/rusica-park-skikda-cezayir-ac-ik-alan-su-parki-afrika/1002.avif");
const p68i2 = getImg("/src/assets/projects/rusica-park-skikda-cezayir-ac-ik-alan-su-parki-afrika/1003.avif");
const p68i3 = getImg("/src/assets/projects/rusica-park-skikda-cezayir-ac-ik-alan-su-parki-afrika/1004.avif");
const p69i0 = getImg("/src/assets/projects/s-club-jakovo-sirbistan-otel-ac-ik-alan-su-parki-avrupa/1002.avif");
const p69i1 = getImg("/src/assets/projects/s-club-jakovo-sirbistan-otel-ac-ik-alan-su-parki-avrupa/1003.avif");
const p69i2 = getImg("/src/assets/projects/s-club-jakovo-sirbistan-otel-ac-ik-alan-su-parki-avrupa/1005.avif");
const p69i3 = getImg("/src/assets/projects/s-club-jakovo-sirbistan-otel-ac-ik-alan-su-parki-avrupa/1006.avif");
const p69i4 = getImg("/src/assets/projects/s-club-jakovo-sirbistan-otel-ac-ik-alan-su-parki-avrupa/1001.avif");
const p70i0 = getImg("/src/assets/projects/sy-antalya-tu-rkiye-otelac-ik-alan-su-parki-asya/1001.avif");
const p70i1 = getImg("/src/assets/projects/sy-antalya-tu-rkiye-otelac-ik-alan-su-parki-asya/1002.avif");
const p70i2 = getImg("/src/assets/projects/sy-antalya-tu-rkiye-otelac-ik-alan-su-parki-asya/1003.avif");
const p70i3 = getImg("/src/assets/projects/sy-antalya-tu-rkiye-otelac-ik-alan-su-parki-asya/1004.avif");
const p70i4 = getImg("/src/assets/projects/sy-antalya-tu-rkiye-otelac-ik-alan-su-parki-asya/1005.avif");
const p70i5 = getImg("/src/assets/projects/sy-antalya-tu-rkiye-otelac-ik-alan-su-parki-asya/1006.avif");
const p70i6 = getImg("/src/assets/projects/sy-antalya-tu-rkiye-otelac-ik-alan-su-parki-asya/1007.avif");
const p70i7 = getImg("/src/assets/projects/sy-antalya-tu-rkiye-otelac-ik-alan-su-parki-asya/1008.avif");
const p71i0 = getImg("/src/assets/projects/sarvar-furdo-sa-rva-r-macaristan-ac-ik-alan-su-parki-avrupa/Sarvar001.avif");
const p71i1 = getImg("/src/assets/projects/sarvar-furdo-sa-rva-r-macaristan-ac-ik-alan-su-parki-avrupa/Sarvar002.avif");
const p71i2 = getImg("/src/assets/projects/sarvar-furdo-sa-rva-r-macaristan-ac-ik-alan-su-parki-avrupa/Sarvar003.avif");
const p71i3 = getImg("/src/assets/projects/sarvar-furdo-sa-rva-r-macaristan-ac-ik-alan-su-parki-avrupa/Sarvar004.avif");
const p71i4 = getImg("/src/assets/projects/sarvar-furdo-sa-rva-r-macaristan-ac-ik-alan-su-parki-avrupa/sarvar005.avif");
const p71i5 = getImg("/src/assets/projects/sarvar-furdo-sa-rva-r-macaristan-ac-ik-alan-su-parki-avrupa/sarvar006.avif");
const p72i0 = getImg("/src/assets/projects/sataya-resort-marsa-alam-misir-ac-ik-alan-su-parki-afrika/1001.avif");
const p72i1 = getImg("/src/assets/projects/sataya-resort-marsa-alam-misir-ac-ik-alan-su-parki-afrika/1002.avif");
const p72i2 = getImg("/src/assets/projects/sataya-resort-marsa-alam-misir-ac-ik-alan-su-parki-afrika/1003.avif");
const p72i3 = getImg("/src/assets/projects/sataya-resort-marsa-alam-misir-ac-ik-alan-su-parki-afrika/1004.avif");
const p73i0 = getImg("/src/assets/projects/seignosse-atlantic-seignosse-fransa-ac-ik-alan-su-parki-avru/Seignosse Atlantic Park001.avif");
const p74i0 = getImg("/src/assets/projects/seven-seas-bay-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP03131-Enhanced-NR.avif");
const p74i1 = getImg("/src/assets/projects/seven-seas-bay-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP07380-Enhanced-NR.avif");
const p74i2 = getImg("/src/assets/projects/seven-seas-bay-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DAP07414-Enhanced-NR.avif");
const p74i3 = getImg("/src/assets/projects/seven-seas-bay-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0622-Enhanced-NR.avif");
const p74i4 = getImg("/src/assets/projects/seven-seas-bay-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0632-Enhanced-NR.avif");
const p74i5 = getImg("/src/assets/projects/seven-seas-bay-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0659-Enhanced-NR.avif");
const p74i6 = getImg("/src/assets/projects/seven-seas-bay-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0662-Enhanced-NR.avif");
const p74i7 = getImg("/src/assets/projects/seven-seas-bay-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0676-Enhanced-NR.avif");
const p74i8 = getImg("/src/assets/projects/seven-seas-bay-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0683-Enhanced-NR.avif");
const p74i9 = getImg("/src/assets/projects/seven-seas-bay-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0676-Enhanced-NR.avif");
const p74i10 = getImg("/src/assets/projects/seven-seas-bay-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asy/DJI_0711-Enhanced-NR.avif");
const p75i0 = getImg("/src/assets/projects/sofia-waterpark-sofya-bulgaristan-ac-ik-alan-su-parki-avrupa/1001.avif");
const p75i1 = getImg("/src/assets/projects/sofia-waterpark-sofya-bulgaristan-ac-ik-alan-su-parki-avrupa/1002.avif");
const p75i2 = getImg("/src/assets/projects/sofia-waterpark-sofya-bulgaristan-ac-ik-alan-su-parki-avrupa/1004.avif");
const p76i0 = getImg("/src/assets/projects/stella-beach-resort-hurgada-misir-otel-ac-ik-alan-su-parki-a/Stella Beach Resort001.avif");
const p76i1 = getImg("/src/assets/projects/stella-beach-resort-hurgada-misir-otel-ac-ik-alan-su-parki-a/Stella Beach Resort002.avif");
const p77i0 = getImg("/src/assets/projects/stella-makadi-beach-makadi-bay-misir-ac-ik-alan-su-parki-afr/0001.avif");
const p77i1 = getImg("/src/assets/projects/stella-makadi-beach-makadi-bay-misir-ac-ik-alan-su-parki-afr/0002.avif");
const p77i2 = getImg("/src/assets/projects/stella-makadi-beach-makadi-bay-misir-ac-ik-alan-su-parki-afr/0003.avif");
const p78i0 = getImg("/src/assets/projects/sterlitamak-sterlitamak-rusya-kapali-alan-su-parki-avrupa/1022.avif");
const p78i1 = getImg("/src/assets/projects/sterlitamak-sterlitamak-rusya-kapali-alan-su-parki-avrupa/1024.avif");
const p79i0 = getImg("/src/assets/projects/terra-mi-tica-benidorm-i-spanya-ac-ik-alan-su-parki-avrupa/1011.avif");
const p79i1 = getImg("/src/assets/projects/terra-mi-tica-benidorm-i-spanya-ac-ik-alan-su-parki-avrupa/1012.avif");
const p79i2 = getImg("/src/assets/projects/terra-mi-tica-benidorm-i-spanya-ac-ik-alan-su-parki-avrupa/1013.avif");
const p79i3 = getImg("/src/assets/projects/terra-mi-tica-benidorm-i-spanya-ac-ik-alan-su-parki-avrupa/1014.avif");
const p80i0 = getImg("/src/assets/projects/the-land-of-legends-antalya-tu-rkiye-ac-ik-alan-su-parki-asy/the land of legends001.avif");
const p80i1 = getImg("/src/assets/projects/the-land-of-legends-antalya-tu-rkiye-ac-ik-alan-su-parki-asy/the land of legends002.avif");
const p81i0 = getImg("/src/assets/projects/trendy-perge-antalya-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1002.avif");
const p82i0 = getImg("/src/assets/projects/vacances-camping-me-doc-plage-vendays-montalivet-fransa-ac-i/1001.avif");
const p83i0 = getImg("/src/assets/projects/valamar-istra-premium-camping-resort-porec-hirvatistan-ac-ik/1001.avif");
const p84i0 = getImg("/src/assets/projects/venosa-beach-resort-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-/1001.avif");
const p84i1 = getImg("/src/assets/projects/venosa-beach-resort-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-/1002.avif");
const p84i2 = getImg("/src/assets/projects/venosa-beach-resort-aydin-tu-rkiye-otel-ac-ik-alan-su-parki-/1003.avif");
const p85i0 = getImg("/src/assets/projects/volgograd-volgograd-rusya-ac-ik-alan-su-parki-avrupa/2025-10-06 16-32-48.avif");
const p85i1 = getImg("/src/assets/projects/volgograd-volgograd-rusya-ac-ik-alan-su-parki-avrupa/2025-10-06 16-33-41.avif");
const p85i2 = getImg("/src/assets/projects/volgograd-volgograd-rusya-ac-ik-alan-su-parki-avrupa/2025-10-08 11-51-29.avif");
const p85i3 = getImg("/src/assets/projects/volgograd-volgograd-rusya-ac-ik-alan-su-parki-avrupa/2025-10-08 12-04-36.avif");
const p85i4 = getImg("/src/assets/projects/volgograd-volgograd-rusya-ac-ik-alan-su-parki-avrupa/2025-10-08 12-05-27.avif");
const p86i0 = getImg("/src/assets/projects/voyage-torba-mug-la-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1001.avif");
const p86i1 = getImg("/src/assets/projects/voyage-torba-mug-la-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1002.avif");
const p87i0 = getImg("/src/assets/projects/wonderla-holidays-bangalore-hindistan-ac-ik-alan-su-parki-as/1001.avif");
const p88i0 = getImg("/src/assets/projects/xo-cape-arnna-mug-la-tu-rkiye-otel-ac-ik-alan-su-parki-asya/1001.jpg");

// ── Proje Verisi ───────────────────────────────────────────
const PROJECTS = [
  {
    id: 65,
    name: 'Rixos Murjana',
    location: 'Cidde, Suudi Arabistan',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p65i0,
    imgAlt: 'Rixos Murjana - Cidde, Suudi Arabistan',
    slides: [
      { id: 1, title: 'Rixos Murjana', location: 'Cidde, Suudi Arabistan', img: p65i0 }
    ],
  },
  {
    id: 33,
    name: 'Frenzy Waterpark',
    location: 'Torreilles, Fransa',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p33i0,
    imgAlt: 'Frenzy Waterpark - Torreilles, Fransa',
    slides: [
      { id: 1, title: 'Frenzy Waterpark', location: 'Torreilles, Fransa', img: p33i0 },
      { id: 2, title: 'Frenzy Waterpark', location: 'Torreilles, Fransa', img: p33i1 },
      { id: 3, title: 'Frenzy Waterpark', location: 'Torreilles, Fransa', img: p33i2 },
      { id: 4, title: 'Frenzy Waterpark', location: 'Torreilles, Fransa', img: p33i3 },
      { id: 5, title: 'Frenzy Waterpark', location: 'Torreilles, Fransa', img: p33i4 }
    ],
  },
  {
    id: 73,
    name: 'Seignosse Atlantic',
    location: 'Seignosse, Fransa',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p73i0,
    imgAlt: 'Seignosse Atlantic - Seignosse, Fransa',
    slides: [
      { id: 1, title: 'Seignosse Atlantic', location: 'Seignosse, Fransa', img: p73i0 }
    ],
  },
  {
    id: 64,
    name: 'Pine Beach',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p64i0,
    imgAlt: 'Pine Beach - Antalya',
    slides: [
      { id: 1, title: 'Pine Beach', location: 'Antalya', img: p64i0 },
      { id: 2, title: 'Pine Beach', location: 'Antalya', img: p64i1 },
      { id: 3, title: 'Pine Beach', location: 'Antalya', img: p64i2 },
      { id: 4, title: 'Pine Beach', location: 'Antalya', img: p64i3 },
      { id: 5, title: 'Pine Beach', location: 'Antalya', img: p64i4 },
      { id: 6, title: 'Pine Beach', location: 'Antalya', img: p64i5 }
    ],
  },
  {
    id: 53,
    name: 'Nirvana Dolce Vita',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p53i0,
    imgAlt: 'Nirvana Dolce Vita - Antalya',
    slides: [
      { id: 1, title: 'Nirvana Dolce Vita', location: 'Antalya', img: p53i0 },
      { id: 2, title: 'Nirvana Dolce Vita', location: 'Antalya', img: p53i1 }
    ],
  },
  {
    id: 80,
    name: 'The Land of Legends',
    location: 'Antalya',
    type: 'Açık Alan Su Parkı',
    region: 'Asya',
    img: p80i0,
    imgAlt: 'The Land of Legends - Antalya',
    slides: [
      { id: 1, title: 'The Land of Legends', location: 'Antalya', img: p80i0 },
      { id: 2, title: 'The Land of Legends', location: 'Antalya', img: p80i1 }
    ],
  },
  {
    id: 1,
    name: 'Adenya',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p1i0,
    imgAlt: 'Adenya - Antalya',
    slides: [
      { id: 1, title: 'Adenya', location: 'Antalya', img: p1i0 },
      { id: 2, title: 'Adenya', location: 'Antalya', img: p1i1 },
      { id: 3, title: 'Adenya', location: 'Antalya', img: p1i2 },
      { id: 4, title: 'Adenya', location: 'Antalya', img: p1i3 },
      { id: 5, title: 'Adenya', location: 'Antalya', img: p1i4 },
      { id: 6, title: 'Adenya', location: 'Antalya', img: p1i5 },
      { id: 7, title: 'Adenya', location: 'Antalya', img: p1i6 }
    ],
  },
  {
    id: 2,
    name: 'Amazonia Aquapark',
    location: 'Timişoara, Romanya',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p2i0,
    imgAlt: 'Amazonia Aquapark - Timişoara, Romanya',
    slides: [
      { id: 1, title: 'Amazonia Aquapark', location: 'Timişoara, Romanya', img: p2i0 },
      { id: 2, title: 'Amazonia Aquapark', location: 'Timişoara, Romanya', img: p2i1 },
      { id: 3, title: 'Amazonia Aquapark', location: 'Timişoara, Romanya', img: p2i2 },
      { id: 4, title: 'Amazonia Aquapark', location: 'Timişoara, Romanya', img: p2i3 },
      { id: 5, title: 'Amazonia Aquapark', location: 'Timişoara, Romanya', img: p2i4 }
    ],
  },
  {
    id: 3,
    name: 'Apollonion Asterias Resort and Spa',
    location: 'Kefalonya, Yunanistan',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p3i0,
    imgAlt: 'Apollonion Asterias Resort and Spa - Kefalonya, Yunanistan',
    slides: [
      { id: 1, title: 'Apollonion Asterias Resort and Spa', location: 'Kefalonya, Yunanistan', img: p3i0 },
      { id: 2, title: 'Apollonion Asterias Resort and Spa', location: 'Kefalonya, Yunanistan', img: p3i1 },
      { id: 3, title: 'Apollonion Asterias Resort and Spa', location: 'Kefalonya, Yunanistan', img: p3i2 }
    ],
  },
  {
    id: 4,
    name: 'Aqualand Benidorm',
    location: 'Benidorm',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p4i0,
    imgAlt: 'Aqualand Benidorm - Benidorm',
    slides: [
      { id: 1, title: 'Aqualand Benidorm', location: 'Benidorm', img: p4i0 },
      { id: 2, title: 'Aqualand Benidorm', location: 'Benidorm', img: p4i1 },
      { id: 3, title: 'Aqualand Benidorm', location: 'Benidorm', img: p4i2 }
    ],
  },
  {
    id: 5,
    name: 'Aqualand Costa Adeje',
    location: 'Tenerife',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p5i0,
    imgAlt: 'Aqualand Costa Adeje - Tenerife',
    slides: [
      { id: 1, title: 'Aqualand Costa Adeje', location: 'Tenerife', img: p5i0 },
      { id: 2, title: 'Aqualand Costa Adeje', location: 'Tenerife', img: p5i1 },
      { id: 3, title: 'Aqualand Costa Adeje', location: 'Tenerife', img: p5i2 },
      { id: 4, title: 'Aqualand Costa Adeje', location: 'Tenerife', img: p5i3 }
    ],
  },
  {
    id: 6,
    name: 'Aqualand Maspalomas',
    location: 'Gran Canaria',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p6i0,
    imgAlt: 'Aqualand Maspalomas - Gran Canaria',
    slides: [
      { id: 1, title: 'Aqualand Maspalomas', location: 'Gran Canaria', img: p6i0 },
      { id: 2, title: 'Aqualand Maspalomas', location: 'Gran Canaria', img: p6i1 },
      { id: 3, title: 'Aqualand Maspalomas', location: 'Gran Canaria', img: p6i2 },
      { id: 4, title: 'Aqualand Maspalomas', location: 'Gran Canaria', img: p6i3 }
    ],
  },
  {
    id: 7,
    name: 'Aqualand Moravia',
    location: 'Moravya',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p7i0,
    imgAlt: 'Aqualand Moravia - Moravya',
    slides: [
      { id: 1, title: 'Aqualand Moravia', location: 'Moravya', img: p7i0 },
      { id: 2, title: 'Aqualand Moravia', location: 'Moravya', img: p7i1 },
      { id: 3, title: 'Aqualand Moravia', location: 'Moravya', img: p7i2 }
    ],
  },
  {
    id: 8,
    name: 'Aqualand Saint-Cyprien',
    location: 'Saint-Cyprien, Fransa',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p8i0,
    imgAlt: 'Aqualand Saint-Cyprien - Saint-Cyprien, Fransa',
    slides: [
      { id: 1, title: 'Aqualand Saint-Cyprien', location: 'Saint-Cyprien, Fransa', img: p8i0 },
      { id: 2, title: 'Aqualand Saint-Cyprien', location: 'Saint-Cyprien, Fransa', img: p8i1 }
    ],
  },
  {
    id: 9,
    name: 'Aqualand',
    location: 'Mallorca',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p9i7,
    imgAlt: 'Aqualand - Mallorca',
    slides: [
      { id: 1, title: 'Aqualand', location: 'Mallorca', img: p9i7 },
      { id: 2, title: 'Aqualand', location: 'Mallorca', img: p9i1 },
      { id: 3, title: 'Aqualand', location: 'Mallorca', img: p9i2 },
      { id: 4, title: 'Aqualand', location: 'Mallorca', img: p9i3 },
      { id: 5, title: 'Aqualand', location: 'Mallorca', img: p9i4 },
      { id: 6, title: 'Aqualand', location: 'Mallorca', img: p9i5 },
      { id: 7, title: 'Aqualand', location: 'Mallorca', img: p9i6 },
      { id: 8, title: 'Aqualand', location: 'Mallorca', img: p9i0 }
    ],
  },
  {
    id: 10,
    name: 'Aqualand',
    location: 'Torremolinos',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p10i0,
    imgAlt: 'Aqualand - Torremolinos',
    slides: [
      { id: 1, title: 'Aqualand', location: 'Torremolinos', img: p10i0 },
      { id: 2, title: 'Aqualand', location: 'Torremolinos', img: p10i1 }
    ],
  },
  {
    id: 11,
    name: 'Aquila Rithymna Beach',
    location: 'Rethymno, Yunanistan',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p11i0,
    imgAlt: 'Aquila Rithymna Beach - Rethymno, Yunanistan',
    slides: [
      { id: 1, title: 'Aquila Rithymna Beach', location: 'Rethymno, Yunanistan', img: p11i0 },
      { id: 2, title: 'Aquila Rithymna Beach', location: 'Rethymno, Yunanistan', img: p11i1 },
      { id: 3, title: 'Aquila Rithymna Beach', location: 'Rethymno, Yunanistan', img: p11i2 },
      { id: 4, title: 'Aquila Rithymna Beach', location: 'Rethymno, Yunanistan', img: p11i3 },
      { id: 5, title: 'Aquila Rithymna Beach', location: 'Rethymno, Yunanistan', img: p11i4 }
    ],
  },
  {
    id: 12,
    name: 'Arcanus',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p12i0,
    imgAlt: 'Arcanus - Antalya',
    slides: [
      { id: 1, title: 'Arcanus', location: 'Antalya', img: p12i0 },
      { id: 2, title: 'Arcanus', location: 'Antalya', img: p12i1 },
      { id: 3, title: 'Arcanus', location: 'Antalya', img: p12i2 }
    ],
  },
  {
    id: 13,
    name: 'Blue Waters',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p13i0,
    imgAlt: 'Blue Waters - Antalya',
    slides: [
      { id: 1, title: 'Blue Waters', location: 'Antalya', img: p13i0 },
      { id: 2, title: 'Blue Waters', location: 'Antalya', img: p13i1 }
    ],
  },
  {
    id: 14,
    name: 'Blue Wave',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p14i0,
    imgAlt: 'Blue Wave - Antalya',
    slides: [
      { id: 1, title: 'Blue Wave', location: 'Antalya', img: p14i0 },
      { id: 2, title: 'Blue Wave', location: 'Antalya', img: p14i1 }
    ],
  },
  {
    id: 15,
    name: 'Bogács Gyógy- és Strandfürdő',
    location: 'Bogács, Macaristan',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p15i0,
    imgAlt: 'Bogács Gyógy- és Strandfürdő - Bogács, Macaristan',
    slides: [
      { id: 1, title: 'Bogács Gyógy- és Strandfürdő', location: 'Bogács, Macaristan', img: p15i0 },
      { id: 2, title: 'Bogács Gyógy- és Strandfürdő', location: 'Bogács, Macaristan', img: p15i1 },
      { id: 3, title: 'Bogács Gyógy- és Strandfürdő', location: 'Bogács, Macaristan', img: p15i2 }
    ],
  },
  {
    id: 16,
    name: 'Caldera Beach',
    location: 'Hanya, Yunanistan',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p16i0,
    imgAlt: 'Caldera Beach - Hanya, Yunanistan',
    slides: [
      { id: 1, title: 'Caldera Beach', location: 'Hanya, Yunanistan', img: p16i0 },
      { id: 2, title: 'Caldera Beach', location: 'Hanya, Yunanistan', img: p16i1 },
      { id: 3, title: 'Caldera Beach', location: 'Hanya, Yunanistan', img: p16i2 },
      { id: 4, title: 'Caldera Beach', location: 'Hanya, Yunanistan', img: p16i3 },
      { id: 5, title: 'Caldera Beach', location: 'Hanya, Yunanistan', img: p16i4 },
      { id: 6, title: 'Caldera Beach', location: 'Hanya, Yunanistan', img: p16i5 },
      { id: 7, title: 'Caldera Beach', location: 'Hanya, Yunanistan', img: p16i6 },
      { id: 8, title: 'Caldera Beach', location: 'Hanya, Yunanistan', img: p16i7 },
      { id: 9, title: 'Caldera Beach', location: 'Hanya, Yunanistan', img: p16i8 }
    ],
  },
  {
    id: 17,
    name: 'Calimera Serra',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p17i9,
    imgAlt: 'Calimera Serra - Antalya',
    slides: [
      { id: 10, title: 'Calimera Serra', location: 'Antalya', img: p17i9 },
      { id: 1, title: 'Calimera Serra', location: 'Antalya', img: p17i0 },
      { id: 2, title: 'Calimera Serra', location: 'Antalya', img: p17i1 },
      { id: 3, title: 'Calimera Serra', location: 'Antalya', img: p17i2 },
      { id: 4, title: 'Calimera Serra', location: 'Antalya', img: p17i3 },
      { id: 5, title: 'Calimera Serra', location: 'Antalya', img: p17i4 },
      { id: 6, title: 'Calimera Serra', location: 'Antalya', img: p17i5 },
      { id: 7, title: 'Calimera Serra', location: 'Antalya', img: p17i6 },
      { id: 8, title: 'Calimera Serra', location: 'Antalya', img: p17i7 },

      { id: 12, title: 'Calimera Serra', location: 'Antalya', img: p17i11 },
      { id: 13, title: 'Calimera Serra', location: 'Antalya', img: p17i12 },
      { id: 14, title: 'Calimera Serra', location: 'Antalya', img: p17i13 }
    ],
  },
  {
    id: 18,
    name: 'Calyptus Kirman Premium',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p18i0,
    imgAlt: 'Calyptus Kirman Premium - Antalya',
    slides: [
      { id: 1, title: 'Calyptus Kirman Premium', location: 'Antalya', img: p18i0 },
      { id: 2, title: 'Calyptus Kirman Premium', location: 'Antalya', img: p18i1 },
      { id: 3, title: 'Calyptus Kirman Premium', location: 'Antalya', img: p18i2 }
    ],
  },
  {
    id: 19,
    name: 'Camping Le Domaine du Clarys',
    location: 'Saint-Jean-de-Monts, Fransa',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p19i0,
    imgAlt: 'Camping Le Domaine du Clarys - Saint-Jean-de-Monts, Fransa',
    slides: [
      { id: 1, title: 'Camping Le Domaine du Clarys', location: 'Saint-Jean-de-Monts, Fransa', img: p19i0 },
      { id: 2, title: 'Camping Le Domaine du Clarys', location: 'Saint-Jean-de-Monts, Fransa', img: p19i1 }
    ],
  },
  {
    id: 20,
    name: 'Château de l\'Hom',
    location: 'Fransa, Fransa',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p20i0,
    imgAlt: 'Château de l\'Hom - Fransa, Fransa',
    slides: [
      { id: 1, title: 'Château de l\'Hom', location: 'Fransa, Fransa', img: p20i0 },
      { id: 2, title: 'Château de l\'Hom', location: 'Fransa, Fransa', img: p20i1 },
      { id: 3, title: 'Château de l\'Hom', location: 'Fransa, Fransa', img: p20i2 },
      { id: 4, title: 'Château de l\'Hom', location: 'Fransa, Fransa', img: p20i3 },
      { id: 5, title: 'Château de l\'Hom', location: 'Fransa, Fransa', img: p20i4 }
    ],
  },
  {
    id: 21,
    name: 'Crystal Centro Pearl Collection',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p21i0,
    imgAlt: 'Crystal Centro Pearl Collection - Antalya',
    slides: [
      { id: 1, title: 'Crystal Centro Pearl Collection', location: 'Antalya', img: p21i0 },
      { id: 2, title: 'Crystal Centro Pearl Collection', location: 'Antalya', img: p21i1 }
    ],
  },
  {
    id: 22,
    name: 'DaniaLand',
    location: 'Agadir, Fas',
    type: 'Açık Alan Su Parkı',
    region: 'Afrika',
    img: p22i0,
    imgAlt: 'DaniaLand - Agadir, Fas',
    slides: [
      { id: 1, title: 'DaniaLand', location: 'Agadir, Fas', img: p22i0 },
      { id: 2, title: 'DaniaLand', location: 'Agadir, Fas', img: p22i1 },
      { id: 3, title: 'DaniaLand', location: 'Agadir, Fas', img: p22i2 },
      { id: 4, title: 'DaniaLand', location: 'Agadir, Fas', img: p22i3 },
      { id: 5, title: 'DaniaLand', location: 'Agadir, Fas', img: p22i4 },
      { id: 6, title: 'DaniaLand', location: 'Agadir, Fas', img: p22i5 },
      { id: 7, title: 'DaniaLand', location: 'Agadir, Fas', img: p22i6 }
    ],
  },
  {
    id: 23,
    name: 'Delphin Imperial',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p23i0,
    imgAlt: 'Delphin Imperial - Antalya',
    slides: [
      { id: 1, title: 'Delphin Imperial', location: 'Antalya', img: p23i0 },
      { id: 2, title: 'Delphin Imperial', location: 'Antalya', img: p23i1 },
      { id: 3, title: 'Delphin Imperial', location: 'Antalya', img: p23i2 },
      { id: 4, title: 'Delphin Imperial', location: 'Antalya', img: p23i3 },
      { id: 5, title: 'Delphin Imperial', location: 'Antalya', img: p23i4 },
      { id: 6, title: 'Delphin Imperial', location: 'Antalya', img: p23i5 },
      { id: 7, title: 'Delphin Imperial', location: 'Antalya', img: p23i6 }
    ],
  },
  {
    id: 24,
    name: 'Delphin Palace',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p24i5,
    imgAlt: 'Delphin Palace - Antalya',
    slides: [
      { id: 6, title: 'Delphin Palace', location: 'Antalya', img: p24i5 },
      { id: 1, title: 'Delphin Palace', location: 'Antalya', img: p24i0 },
      { id: 2, title: 'Delphin Palace', location: 'Antalya', img: p24i1 },
      { id: 3, title: 'Delphin Palace', location: 'Antalya', img: p24i2 },
      { id: 4, title: 'Delphin Palace', location: 'Antalya', img: p24i3 },
      { id: 5, title: 'Delphin Palace', location: 'Antalya', img: p24i4 },

      { id: 7, title: 'Delphin Palace', location: 'Antalya', img: p24i6 },
      { id: 8, title: 'Delphin Palace', location: 'Antalya', img: p24i7 },
      { id: 9, title: 'Delphin Palace', location: 'Antalya', img: p24i8 }
    ],
  },
  {
    id: 25,
    name: 'Dream Fun World',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p25i0,
    imgAlt: 'Dream Fun World - Antalya',
    slides: [
      { id: 1, title: 'Dream Fun World', location: 'Antalya', img: p25i0 },
      { id: 2, title: 'Dream Fun World', location: 'Antalya', img: p25i1 }
    ],
  },
  {
    id: 26,
    name: 'Dream World Palace',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p26i0,
    imgAlt: 'Dream World Palace - Antalya',
    slides: [
      { id: 1, title: 'Dream World Palace', location: 'Antalya', img: p26i0 },
      { id: 2, title: 'Dream World Palace', location: 'Antalya', img: p26i1 },
      { id: 3, title: 'Dream World Palace', location: 'Antalya', img: p26i2 }
    ],
  },
  {
    id: 27,
    name: 'Duja',
    location: 'Didim',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p27i0,
    imgAlt: 'Duja - Didim',
    slides: [
      { id: 1, title: 'Duja', location: 'Didim', img: p27i0 },
      { id: 2, title: 'Duja', location: 'Didim', img: p27i1 },
      { id: 3, title: 'Duja', location: 'Didim', img: p27i2 },
      { id: 4, title: 'Duja', location: 'Didim', img: p27i3 },
      { id: 5, title: 'Duja', location: 'Didim', img: p27i4 },
      { id: 6, title: 'Duja', location: 'Didim', img: p27i5 },
      { id: 7, title: 'Duja', location: 'Didim', img: p27i6 },
      { id: 8, title: 'Duja', location: 'Didim', img: p27i7 }
    ],
  },
  {
    id: 28,
    name: 'Eftalia Blue',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p28i0,
    imgAlt: 'Eftalia Blue - Antalya',
    slides: [
      { id: 1, title: 'Eftalia Blue', location: 'Antalya', img: p28i0 },
      { id: 2, title: 'Eftalia Blue', location: 'Antalya', img: p28i1 },
      { id: 3, title: 'Eftalia Blue', location: 'Antalya', img: p28i2 },
      { id: 4, title: 'Eftalia Blue', location: 'Antalya', img: p28i3 }
    ],
  },
  {
    id: 29,
    name: 'Eftalia Sol',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p29i0,
    imgAlt: 'Eftalia Sol - Antalya',
    slides: [
      { id: 1, title: 'Eftalia Sol', location: 'Antalya', img: p29i0 },
      { id: 2, title: 'Eftalia Sol', location: 'Antalya', img: p29i1 },
      { id: 3, title: 'Eftalia Sol', location: 'Antalya', img: p29i2 },
      { id: 4, title: 'Eftalia Sol', location: 'Antalya', img: p29i3 }
    ],
  },
  {
    id: 30,
    name: 'Ethno Belek',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p30i0,
    imgAlt: 'Ethno Belek - Antalya',
    slides: [
      { id: 1, title: 'Ethno Belek', location: 'Antalya', img: p30i0 },
      { id: 2, title: 'Ethno Belek', location: 'Antalya', img: p30i1 },
      { id: 3, title: 'Ethno Belek', location: 'Antalya', img: p30i2 }
    ],
  },
  {
    id: 31,
    name: 'Fairy Park',
    location: 'Selangor, Malezya',
    type: 'Açık Alan Su Parkı',
    region: 'Asya',
    img: p31i0,
    imgAlt: 'Fairy Park - Selangor, Malezya',
    slides: [
      { id: 1, title: 'Fairy Park', location: 'Selangor, Malezya', img: p31i0 },
      { id: 2, title: 'Fairy Park', location: 'Selangor, Malezya', img: p31i1 }
    ],
  },
  {
    id: 32,
    name: 'Fantazia Marsa Alam',
    location: 'Marsa Alam, Mısır',
    type: 'Otel & Su Parkı',
    region: 'Afrika',
    img: p32i0,
    imgAlt: 'Fantazia Marsa Alam - Marsa Alam, Mısır',
    slides: [
      { id: 1, title: 'Fantazia Marsa Alam', location: 'Marsa Alam, Mısır', img: p32i0 },
      { id: 2, title: 'Fantazia Marsa Alam', location: 'Marsa Alam, Mısır', img: p32i1 }
    ],
  },

  {
    id: 34,
    name: 'Golden Beach Nana',
    location: 'Girit, Yunanistan',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p34i0,
    imgAlt: 'Golden Beach Nana - Girit, Yunanistan',
    slides: [
      { id: 1, title: 'Golden Beach Nana', location: 'Girit, Yunanistan', img: p34i0 },
      { id: 2, title: 'Golden Beach Nana', location: 'Girit, Yunanistan', img: p34i1 }
    ],
  },
  {
    id: 35,
    name: 'Güral Premier',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p35i0,
    imgAlt: 'Güral Premier - Antalya',
    slides: [
      { id: 1, title: 'Güral Premier', location: 'Antalya', img: p35i0 },
      { id: 2, title: 'Güral Premier', location: 'Antalya', img: p35i1 },
      { id: 3, title: 'Güral Premier', location: 'Antalya', img: p35i2 },
      { id: 4, title: 'Güral Premier', location: 'Antalya', img: p35i3 }
    ],
  },
  {
    id: 36,
    name: 'Iberostar Waves Creta Panorama & Mare',
    location: 'Rethymno, Yunanistan',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p36i0,
    imgAlt: 'Iberostar Waves Creta Panorama & Mare - Rethymno, Yunanistan',
    slides: [
      { id: 1, title: 'Iberostar Waves Creta Panorama & Mare', location: 'Rethymno, Yunanistan', img: p36i0 },
      { id: 2, title: 'Iberostar Waves Creta Panorama & Mare', location: 'Rethymno, Yunanistan', img: p36i1 },
      { id: 3, title: 'Iberostar Waves Creta Panorama & Mare', location: 'Rethymno, Yunanistan', img: p36i2 },
      { id: 4, title: 'Iberostar Waves Creta Panorama & Mare', location: 'Rethymno, Yunanistan', img: p36i3 },
      { id: 5, title: 'Iberostar Waves Creta Panorama & Mare', location: 'Rethymno, Yunanistan', img: p36i4 },
      { id: 6, title: 'Iberostar Waves Creta Panorama & Mare', location: 'Rethymno, Yunanistan', img: p36i5 }
    ],
  },
  {
    id: 37,
    name: 'Jazeerat',
    location: 'Bağdat, Irak',
    type: 'Açık Alan Su Parkı',
    region: 'Asya',
    img: p37i0,
    imgAlt: 'Jazeerat - Bağdat, Irak',
    slides: [
      { id: 1, title: 'Jazeerat', location: 'Bağdat, Irak', img: p37i0 },
      { id: 2, title: 'Jazeerat', location: 'Bağdat, Irak', img: p37i1 },
      { id: 3, title: 'Jazeerat', location: 'Bağdat, Irak', img: p37i2 },
      { id: 4, title: 'Jazeerat', location: 'Bağdat, Irak', img: p37i3 },
      { id: 5, title: 'Jazeerat', location: 'Bağdat, Irak', img: p37i4 },
      { id: 6, title: 'Jazeerat', location: 'Bağdat, Irak', img: p37i5 },
      { id: 7, title: 'Jazeerat', location: 'Bağdat, Irak', img: p37i6 }
    ],
  },
  {
    id: 38,
    name: 'Justiniano Park Conti',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p38i0,
    imgAlt: 'Justiniano Park Conti - Antalya',
    slides: [
      { id: 1, title: 'Justiniano Park Conti', location: 'Antalya', img: p38i0 },
      { id: 2, title: 'Justiniano Park Conti', location: 'Antalya', img: p38i1 }
    ],
  },
  {
    id: 39,
    name: 'Kass Splash',
    location: 'D City',
    type: 'Kapalı Alan Su Parkı',
    region: 'Asya',
    img: p39i0,
    imgAlt: 'Kass Splash - D City',
    slides: [
      { id: 1, title: 'Kass Splash', location: 'D City', img: p39i0 },
      { id: 2, title: 'Kass Splash', location: 'D City', img: p39i1 },
      { id: 3, title: 'Kass Splash', location: 'D City', img: p39i2 },
      { id: 4, title: 'Kass Splash', location: 'D City', img: p39i3 },
      { id: 5, title: 'Kass Splash', location: 'D City', img: p39i4 },
      { id: 6, title: 'Kass Splash', location: 'D City', img: p39i5 }
    ],
  },
  {
    id: 40,
    name: 'Kirman Sidera',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p40i0,
    imgAlt: 'Kirman Sidera - Antalya',
    slides: [
      { id: 1, title: 'Kirman Sidera', location: 'Antalya', img: p40i0 },
      { id: 2, title: 'Kirman Sidera', location: 'Antalya', img: p40i1 },
      { id: 3, title: 'Kirman Sidera', location: 'Antalya', img: p40i2 },
      { id: 4, title: 'Kirman Sidera', location: 'Antalya', img: p40i3 },
      { id: 5, title: 'Kirman Sidera', location: 'Antalya', img: p40i4 },
      { id: 6, title: 'Kirman Sidera', location: 'Antalya', img: p40i5 },
      { id: 7, title: 'Kirman Sidera', location: 'Antalya', img: p40i6 },
      { id: 8, title: 'Kirman Sidera', location: 'Antalya', img: p40i7 },
      { id: 9, title: 'Kirman Sidera', location: 'Antalya', img: p40i8 }
    ],
  },
  {
    id: 41,
    name: 'Kremlin Palace',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p41i0,
    imgAlt: 'Kremlin Palace - Antalya',
    slides: [
      { id: 1, title: 'Kremlin Palace', location: 'Antalya', img: p41i0 },
      { id: 2, title: 'Kremlin Palace', location: 'Antalya', img: p41i1 }
    ],
  },
  {
    id: 42,
    name: 'Kunuku Resort',
    location: 'Karayipler',
    type: 'Resort Tatil Köyü',
    region: 'Amerika',
    img: p42i0,
    imgAlt: 'Kunuku Resort - Karayipler',
    slides: [
      { id: 1, title: 'Kunuku Resort', location: 'Karayipler', img: p42i0 },
      { id: 2, title: 'Kunuku Resort', location: 'Karayipler', img: p42i1 },
      { id: 3, title: 'Kunuku Resort', location: 'Karayipler', img: p42i2 }
    ],
  },
  {
    id: 43,
    name: 'Liu Resorts',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p43i0,
    imgAlt: 'Liu Resorts - Antalya',
    slides: [
      { id: 1, title: 'Liu Resorts', location: 'Antalya', img: p43i0 },
      { id: 2, title: 'Liu Resorts', location: 'Antalya', img: p43i1 },
      { id: 3, title: 'Liu Resorts', location: 'Antalya', img: p43i2 },
      { id: 4, title: 'Liu Resorts', location: 'Antalya', img: p43i3 }
    ],
  },
  {
    id: 44,
    name: 'Long Beach Club Nature',
    location: 'Aydın',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p44i0,
    imgAlt: 'Long Beach Club Nature - Aydın',
    slides: [
      { id: 1, title: 'Long Beach Club Nature', location: 'Aydın', img: p44i0 },
      { id: 2, title: 'Long Beach Club Nature', location: 'Aydın', img: p44i1 },
      { id: 3, title: 'Long Beach Club Nature', location: 'Aydın', img: p44i2 }
    ],
  },
  {
    id: 45,
    name: 'Lonicera Premium',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p45i2,
    imgAlt: 'Lonicera Premium - Antalya',
    slides: [
      { id: 1, title: 'Lonicera Premium', location: 'Antalya', img: p45i2 },
      { id: 2, title: 'Lonicera Premium', location: 'Antalya', img: p45i1 },
      { id: 3, title: 'Lonicera Premium', location: 'Antalya', img: p45i0 },
      { id: 4, title: 'Lonicera Premium', location: 'Antalya', img: p45i3 },
      { id: 5, title: 'Lonicera Premium', location: 'Antalya', img: p45i4 },
      { id: 6, title: 'Lonicera Premium', location: 'Antalya', img: p45i5 },
      { id: 7, title: 'Lonicera Premium', location: 'Antalya', img: p45i6 },
      { id: 8, title: 'Lonicera Premium', location: 'Antalya', img: p45i7 },
      { id: 9, title: 'Lonicera Premium', location: 'Antalya', img: p45i8 },
      { id: 10, title: 'Lonicera Premium', location: 'Antalya', img: p45i9 }
    ],
  },
  {
    id: 46,
    name: 'Lusso Sorgun',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p46i0,
    imgAlt: 'Lusso Sorgun - Antalya',
    slides: [
      { id: 1, title: 'Lusso Sorgun', location: 'Antalya', img: p46i0 },
      { id: 2, title: 'Lusso Sorgun', location: 'Antalya', img: p46i1 },
      { id: 3, title: 'Lusso Sorgun', location: 'Antalya', img: p46i2 },
      { id: 4, title: 'Lusso Sorgun', location: 'Antalya', img: p46i3 },
      { id: 5, title: 'Lusso Sorgun', location: 'Antalya', img: p46i4 },
      { id: 6, title: 'Lusso Sorgun', location: 'Antalya', img: p46i5 }
    ],
  },
  {
    id: 47,
    name: 'Maxeria Blue',
    location: 'Aydın',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p47i0,
    imgAlt: 'Maxeria Blue - Aydın',
    slides: [
      { id: 1, title: 'Maxeria Blue', location: 'Aydın', img: p47i0 },
      { id: 2, title: 'Maxeria Blue', location: 'Aydın', img: p47i1 },
      { id: 3, title: 'Maxeria Blue', location: 'Aydın', img: p47i2 },
      { id: 4, title: 'Maxeria Blue', location: 'Aydın', img: p47i3 },
      { id: 5, title: 'Maxeria Blue', location: 'Aydın', img: p47i4 },
      { id: 6, title: 'Maxeria Blue', location: 'Aydın', img: p47i5 },
      { id: 7, title: 'Maxeria Blue', location: 'Aydın', img: p47i6 },
      { id: 8, title: 'Maxeria Blue', location: 'Aydın', img: p47i7 }
    ],
  },
  {
    id: 48,
    name: 'Melas',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p48i0,
    imgAlt: 'Melas - Antalya',
    slides: [
      { id: 1, title: 'Melas', location: 'Antalya', img: p48i0 },
      { id: 2, title: 'Melas', location: 'Antalya', img: p48i1 },
      { id: 3, title: 'Melas', location: 'Antalya', img: p48i2 },
      { id: 4, title: 'Melas', location: 'Antalya', img: p48i3 },
      { id: 5, title: 'Melas', location: 'Antalya', img: p48i4 }
    ],
  },
  {
    id: 49,
    name: 'Mövenpick Resort',
    location: 'Antalya',
    type: 'Açık Alan Su Parkı',
    region: 'Asya',
    img: p49i0,
    imgAlt: 'Mövenpick Resort - Antalya',
    slides: [
      { id: 1, title: 'Mövenpick Resort', location: 'Antalya', img: p49i0 },
      { id: 2, title: 'Mövenpick Resort', location: 'Antalya', img: p49i1 },
      { id: 3, title: 'Mövenpick Resort', location: 'Antalya', img: p49i2 },
      { id: 4, title: 'Mövenpick Resort', location: 'Antalya', img: p49i3 }
    ],
  },
  {
    id: 50,
    name: 'Mövenpick Waterpark Resort & Spa Soma Bay',
    location: 'Soma Bay, Mısır',
    type: 'Açık Alan Su Parkı',
    region: 'Afrika',
    img: p50i0,
    imgAlt: 'Mövenpick Waterpark Resort & Spa Soma Bay - Soma Bay, Mısır',
    slides: [
      { id: 1, title: 'Mövenpick Waterpark Resort & Spa Soma Bay', location: 'Soma Bay, Mısır', img: p50i0 },
      { id: 2, title: 'Mövenpick Waterpark Resort & Spa Soma Bay', location: 'Soma Bay, Mısır', img: p50i1 },
      { id: 3, title: 'Mövenpick Waterpark Resort & Spa Soma Bay', location: 'Soma Bay, Mısır', img: p50i2 }
    ],
  },
  {
    id: 51,
    name: 'Nirvana Cosmopolitan',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p51i0,
    imgAlt: 'Nirvana Cosmopolitan - Antalya',
    slides: [
      { id: 1, title: 'Nirvana Cosmopolitan', location: 'Antalya', img: p51i0 },
      { id: 2, title: 'Nirvana Cosmopolitan', location: 'Antalya', img: p51i1 }
    ],
  },
  {
    id: 52,
    name: 'Nirvana Cosmopolitan',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p52i0,
    imgAlt: 'Nirvana Cosmopolitan - Antalya',
    slides: [
      { id: 1, title: 'Nirvana Cosmopolitan', location: 'Antalya', img: p52i0 },
      { id: 2, title: 'Nirvana Cosmopolitan', location: 'Antalya', img: p52i1 },
      { id: 3, title: 'Nirvana Cosmopolitan', location: 'Antalya', img: p52i2 },
      { id: 4, title: 'Nirvana Cosmopolitan', location: 'Antalya', img: p52i3 }
    ],
  },

  {
    id: 54,
    name: 'Numa Bay Exclusive',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p54i0,
    imgAlt: 'Numa Bay Exclusive - Antalya',
    slides: [
      { id: 1, title: 'Numa Bay Exclusive', location: 'Antalya', img: p54i0 },
      { id: 2, title: 'Numa Bay Exclusive', location: 'Antalya', img: p54i1 },
      { id: 3, title: 'Numa Bay Exclusive', location: 'Antalya', img: p54i2 },
      { id: 4, title: 'Numa Bay Exclusive', location: 'Antalya', img: p54i3 }
    ],
  },
  {
    id: 55,
    name: 'Orka World Waterpark',
    location: 'Muğla',
    type: 'Açık Alan Su Parkı',
    region: 'Asya',
    img: p55i0,
    imgAlt: 'Orka World Waterpark - Muğla',
    slides: [
      { id: 1, title: 'Orka World Waterpark', location: 'Muğla', img: p55i0 },
      { id: 2, title: 'Orka World Waterpark', location: 'Muğla', img: p55i1 },
      { id: 3, title: 'Orka World Waterpark', location: 'Muğla', img: p55i2 },
      { id: 4, title: 'Orka World Waterpark', location: 'Muğla', img: p55i3 },
      { id: 5, title: 'Orka World Waterpark', location: 'Muğla', img: p55i4 },
      { id: 6, title: 'Orka World Waterpark', location: 'Muğla', img: p55i5 }
    ],
  },
  {
    id: 56,
    name: 'Palm Wings',
    location: 'Aydın',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p56i0,
    imgAlt: 'Palm Wings - Aydın',
    slides: [
      { id: 1, title: 'Palm Wings', location: 'Aydın', img: p56i0 },
      { id: 2, title: 'Palm Wings', location: 'Aydın', img: p56i1 },
      { id: 3, title: 'Palm Wings', location: 'Aydın', img: p56i2 },
      { id: 4, title: 'Palm Wings', location: 'Aydın', img: p56i3 },
      { id: 5, title: 'Palm Wings', location: 'Aydın', img: p56i4 },
      { id: 6, title: 'Palm Wings', location: 'Aydın', img: p56i5 },
      { id: 7, title: 'Palm Wings', location: 'Aydın', img: p56i6 },
      { id: 8, title: 'Palm Wings', location: 'Aydın', img: p56i7 }
    ],
  },
  {
    id: 57,
    name: 'Paloma Grida',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p57i0,
    imgAlt: 'Paloma Grida - Antalya',
    slides: [
      { id: 1, title: 'Paloma Grida', location: 'Antalya', img: p57i0 },
      { id: 2, title: 'Paloma Grida', location: 'Antalya', img: p57i1 },
      { id: 3, title: 'Paloma Grida', location: 'Antalya', img: p57i2 },
      { id: 4, title: 'Paloma Grida', location: 'Antalya', img: p57i3 },
      { id: 5, title: 'Paloma Grida', location: 'Antalya', img: p57i4 }
    ],
  },
  {
    id: 58,
    name: 'Paradise Spa Dogo',
    location: 'Asan',
    type: 'Açık Alan Su Parkı',
    region: 'Asya',
    img: p58i0,
    imgAlt: 'Paradise Spa Dogo - Asan',
    slides: [
      { id: 1, title: 'Paradise Spa Dogo', location: 'Asan', img: p58i0 },
      { id: 2, title: 'Paradise Spa Dogo', location: 'Asan', img: p58i1 },
      { id: 3, title: 'Paradise Spa Dogo', location: 'Asan', img: p58i2 }
    ],
  },
  {
    id: 59,
    name: 'Parque Aquático de Fafe',
    location: 'Fafe, Portekiz',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p59i0,
    imgAlt: 'Parque Aquático de Fafe - Fafe, Portekiz',
    slides: [
      { id: 1, title: 'Parque Aquático de Fafe', location: 'Fafe, Portekiz', img: p59i0 },
      { id: 2, title: 'Parque Aquático de Fafe', location: 'Fafe, Portekiz', img: p59i1 },
      { id: 3, title: 'Parque Aquático de Fafe', location: 'Fafe, Portekiz', img: p59i2 }
    ],
  },
  {
    id: 60,
    name: 'Pickalbatros Aqua Fun Club',
    location: 'Marakeş, Fas',
    type: 'Açık Alan Su Parkı',
    region: 'Afrika',
    img: p60i0,
    imgAlt: 'Pickalbatros Aqua Fun Club - Marakeş, Fas',
    slides: [
      { id: 1, title: 'Pickalbatros Aqua Fun Club', location: 'Marakeş, Fas', img: p60i0 },
      { id: 2, title: 'Pickalbatros Aqua Fun Club', location: 'Marakeş, Fas', img: p60i1 }
    ],
  },
  {
    id: 61,
    name: 'Pickalbatros Laguna Vista Resort',
    location: 'Şarm El-Şeyh, Mısır',
    type: 'Açık Alan Su Parkı',
    region: 'Afrika',
    img: p61i0,
    imgAlt: 'Pickalbatros Laguna Vista Resort - Şarm El-Şeyh, Mısır',
    slides: [
      { id: 1, title: 'Pickalbatros Laguna Vista Resort', location: 'Şarm El-Şeyh, Mısır', img: p61i0 },
      { id: 2, title: 'Pickalbatros Laguna Vista Resort', location: 'Şarm El-Şeyh, Mısır', img: p61i1 },
      { id: 3, title: 'Pickalbatros Laguna Vista Resort', location: 'Şarm El-Şeyh, Mısır', img: p61i2 }
    ],
  },
  {
    id: 62,
    name: 'Pickalbatros Port Ghalib',
    location: 'Port Ghalib, Mısır',
    type: 'Açık Alan Su Parkı',
    region: 'Afrika',
    img: p62i0,
    imgAlt: 'Pickalbatros Port Ghalib - Port Ghalib, Mısır',
    slides: [
      { id: 1, title: 'Pickalbatros Port Ghalib', location: 'Port Ghalib, Mısır', img: p62i0 },
      { id: 2, title: 'Pickalbatros Port Ghalib', location: 'Port Ghalib, Mısır', img: p62i1 }
    ],
  },
  {
    id: 63,
    name: 'Pickalbatros Sungo',
    location: 'Hurgada, Mısır',
    type: 'Açık Alan Su Parkı',
    region: 'Afrika',
    img: p63i1,
    imgAlt: 'Pickalbatros Sungo - Hurgada, Mısır',
    slides: [
      { id: 1, title: 'Pickalbatros Sungo', location: 'Hurgada, Mısır', img: p63i1 },
      { id: 2, title: 'Pickalbatros Sungo', location: 'Hurgada, Mısır', img: p63i0 },
      { id: 3, title: 'Pickalbatros Sungo', location: 'Hurgada, Mısır', img: p63i2 },
      { id: 4, title: 'Pickalbatros Sungo', location: 'Hurgada, Mısır', img: p63i3 },
      { id: 5, title: 'Pickalbatros Sungo', location: 'Hurgada, Mısır', img: p63i4 }
    ],
  },


  {
    id: 66,
    name: 'Roj Park',
    location: 'Nasıriye, Irak',
    type: 'Kapalı Alan Su Parkı',
    region: 'Asya',
    img: p66i0,
    imgAlt: 'Roj Park - Nasıriye, Irak',
    slides: [
      { id: 1, title: 'Roj Park', location: 'Nasıriye, Irak', img: p66i0 },
      { id: 2, title: 'Roj Park', location: 'Nasıriye, Irak', img: p66i1 }
    ],
  },
  {
    id: 67,
    name: 'Royal Garden',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p67i0,
    imgAlt: 'Royal Garden - Antalya',
    slides: [
      { id: 1, title: 'Royal Garden', location: 'Antalya', img: p67i0 },
      { id: 2, title: 'Royal Garden', location: 'Antalya', img: p67i1 },
      { id: 3, title: 'Royal Garden', location: 'Antalya', img: p67i2 },
      { id: 4, title: 'Royal Garden', location: 'Antalya', img: p67i3 },
      { id: 5, title: 'Royal Garden', location: 'Antalya', img: p67i4 },
      { id: 6, title: 'Royal Garden', location: 'Antalya', img: p67i5 },
      { id: 7, title: 'Royal Garden', location: 'Antalya', img: p67i6 },
      { id: 8, title: 'Royal Garden', location: 'Antalya', img: p67i7 },
      { id: 9, title: 'Royal Garden', location: 'Antalya', img: p67i8 },
      { id: 10, title: 'Royal Garden', location: 'Antalya', img: p67i9 },
      { id: 11, title: 'Royal Garden', location: 'Antalya', img: p67i10 },
      { id: 12, title: 'Royal Garden', location: 'Antalya', img: p67i11 },
      { id: 13, title: 'Royal Garden', location: 'Antalya', img: p67i12 },
      { id: 14, title: 'Royal Garden', location: 'Antalya', img: p67i13 },
      { id: 15, title: 'Royal Garden', location: 'Antalya', img: p67i14 }
    ],
  },
  {
    id: 68,
    name: 'Rusica Park',
    location: 'Skikda, Cezayir',
    type: 'Açık Alan Su Parkı',
    region: 'Afrika',
    img: p68i0,
    imgAlt: 'Rusica Park - Skikda, Cezayir',
    slides: [
      { id: 1, title: 'Rusica Park', location: 'Skikda, Cezayir', img: p68i0 },
      { id: 2, title: 'Rusica Park', location: 'Skikda, Cezayir', img: p68i1 },
      { id: 3, title: 'Rusica Park', location: 'Skikda, Cezayir', img: p68i2 },
      { id: 4, title: 'Rusica Park', location: 'Skikda, Cezayir', img: p68i3 }
    ],
  },
  {
    id: 69,
    name: 'S Club',
    location: 'Jakovo, Sırbistan',
    type: 'Otel & Su Parkı',
    region: 'Avrupa',
    img: p69i4,
    imgAlt: 'S Club - Jakovo, Sırbistan',
    slides: [
      { id: 5, title: 'S Club', location: 'Jakovo, Sırbistan', img: p69i4 },
      { id: 1, title: 'S Club', location: 'Jakovo, Sırbistan', img: p69i0 },
      { id: 2, title: 'S Club', location: 'Jakovo, Sırbistan', img: p69i1 },
      { id: 3, title: 'S Club', location: 'Jakovo, Sırbistan', img: p69i2 },
      { id: 4, title: 'S Club', location: 'Jakovo, Sırbistan', img: p69i3 },

    ],
  },
  {
    id: 70,
    name: 'SY',
    location: 'Antalya',
    type: 'Açık Alan Su Parkı',
    region: 'Asya',
    img: p70i0,
    imgAlt: 'SY - Antalya',
    slides: [
      { id: 1, title: 'SY', location: 'Antalya', img: p70i0 },
      { id: 2, title: 'SY', location: 'Antalya', img: p70i1 },
      { id: 3, title: 'SY', location: 'Antalya', img: p70i2 },
      { id: 4, title: 'SY', location: 'Antalya', img: p70i3 },
      { id: 5, title: 'SY', location: 'Antalya', img: p70i4 },
      { id: 6, title: 'SY', location: 'Antalya', img: p70i5 },
      { id: 7, title: 'SY', location: 'Antalya', img: p70i6 },
      { id: 8, title: 'SY', location: 'Antalya', img: p70i7 }
    ],
  },
  {
    id: 71,
    name: 'Sarvar Furdo',
    location: 'Sárvár, Macaristan',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p71i0,
    imgAlt: 'Sarvar Furdo - Sárvár, Macaristan',
    slides: [
      { id: 1, title: 'Sarvar Furdo', location: 'Sárvár, Macaristan', img: p71i0 },
      { id: 2, title: 'Sarvar Furdo', location: 'Sárvár, Macaristan', img: p71i1 },
      { id: 3, title: 'Sarvar Furdo', location: 'Sárvár, Macaristan', img: p71i2 },
      { id: 4, title: 'Sarvar Furdo', location: 'Sárvár, Macaristan', img: p71i3 },
      { id: 5, title: 'Sarvar Furdo', location: 'Sárvár, Macaristan', img: p71i4 },
      { id: 6, title: 'Sarvar Furdo', location: 'Sárvár, Macaristan', img: p71i5 }
    ],
  },
  {
    id: 72,
    name: 'Sataya Resort',
    location: 'Marsa Alam, Mısır',
    type: 'Açık Alan Su Parkı',
    region: 'Afrika',
    img: p72i0,
    imgAlt: 'Sataya Resort - Marsa Alam, Mısır',
    slides: [
      { id: 1, title: 'Sataya Resort', location: 'Marsa Alam, Mısır', img: p72i0 },
      { id: 2, title: 'Sataya Resort', location: 'Marsa Alam, Mısır', img: p72i1 },
      { id: 3, title: 'Sataya Resort', location: 'Marsa Alam, Mısır', img: p72i2 },
      { id: 4, title: 'Sataya Resort', location: 'Marsa Alam, Mısır', img: p72i3 }
    ],
  },

  {
    id: 74,
    name: 'Seven Seas Bay',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p74i0,
    imgAlt: 'Seven Seas Bay - Antalya',
    slides: [
      { id: 1, title: 'Seven Seas Bay', location: 'Antalya', img: p74i0 },
      { id: 2, title: 'Seven Seas Bay', location: 'Antalya', img: p74i1 },
      { id: 3, title: 'Seven Seas Bay', location: 'Antalya', img: p74i2 },
      { id: 4, title: 'Seven Seas Bay', location: 'Antalya', img: p74i3 },
      { id: 5, title: 'Seven Seas Bay', location: 'Antalya', img: p74i4 },
      { id: 6, title: 'Seven Seas Bay', location: 'Antalya', img: p74i5 },
      { id: 7, title: 'Seven Seas Bay', location: 'Antalya', img: p74i6 },
      { id: 8, title: 'Seven Seas Bay', location: 'Antalya', img: p74i7 },
      { id: 9, title: 'Seven Seas Bay', location: 'Antalya', img: p74i8 },
      { id: 10, title: 'Seven Seas Bay', location: 'Antalya', img: p74i9 },
      { id: 11, title: 'Seven Seas Bay', location: 'Antalya', img: p74i10 }
    ],
  },
  {
    id: 75,
    name: 'Sofia Waterpark',
    location: 'Sofya, Bulgaristan',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p75i0,
    imgAlt: 'Sofia Waterpark - Sofya, Bulgaristan',
    slides: [
      { id: 1, title: 'Sofia Waterpark', location: 'Sofya, Bulgaristan', img: p75i0 },
      { id: 2, title: 'Sofia Waterpark', location: 'Sofya, Bulgaristan', img: p75i1 },
      { id: 3, title: 'Sofia Waterpark', location: 'Sofya, Bulgaristan', img: p75i2 }
    ],
  },

  {
    id: 77,
    name: 'Stella Makadi Beach',
    location: 'Makadi Bay, Mısır',
    type: 'Açık Alan Su Parkı',
    region: 'Afrika',
    img: p77i0,
    imgAlt: 'Stella Makadi Beach - Makadi Bay, Mısır',
    slides: [
      { id: 1, title: 'Stella Makadi Beach', location: 'Makadi Bay, Mısır', img: p77i0 },
      { id: 2, title: 'Stella Makadi Beach', location: 'Makadi Bay, Mısır', img: p77i1 },
      { id: 3, title: 'Stella Makadi Beach', location: 'Makadi Bay, Mısır', img: p77i2 }
    ],
  },
  {
    id: 78,
    name: 'Sterlitamak',
    location: 'Sterlitamak, Rusya',
    type: 'Kapalı Alan Su Parkı',
    region: 'Avrupa',
    img: p78i0,
    imgAlt: 'Sterlitamak - Sterlitamak, Rusya',
    slides: [
      { id: 1, title: 'Sterlitamak', location: 'Sterlitamak, Rusya', img: p78i0 },
      { id: 2, title: 'Sterlitamak', location: 'Sterlitamak, Rusya', img: p78i1 }
    ],
  },
  {
    id: 79,
    name: 'Terra Mítica',
    location: 'Benidorm',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p79i0,
    imgAlt: 'Terra Mítica - Benidorm',
    slides: [
      { id: 1, title: 'Terra Mítica', location: 'Benidorm', img: p79i0 },
      { id: 2, title: 'Terra Mítica', location: 'Benidorm', img: p79i1 },
      { id: 3, title: 'Terra Mítica', location: 'Benidorm', img: p79i2 },
      { id: 4, title: 'Terra Mítica', location: 'Benidorm', img: p79i3 }
    ],
  },

  {
    id: 81,
    name: 'Trendy Perge',
    location: 'Antalya',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p81i0,
    imgAlt: 'Trendy Perge - Antalya',
    slides: [
      { id: 1, title: 'Trendy Perge', location: 'Antalya', img: p81i0 }
    ],
  },
  {
    id: 82,
    name: 'Vacances Camping Médoc Plage',
    location: 'Vendays-Montalivet, Fransa',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p82i0,
    imgAlt: 'Vacances Camping Médoc Plage - Vendays-Montalivet, Fransa',
    slides: [
      { id: 1, title: 'Vacances Camping Médoc Plage', location: 'Vendays-Montalivet, Fransa', img: p82i0 }
    ],
  },
  {
    id: 83,
    name: 'Valamar Istra Premium Camping Resort',
    location: 'Poreč, Hırvatistan',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p83i0,
    imgAlt: 'Valamar Istra Premium Camping Resort - Poreč, Hırvatistan',
    slides: [
      { id: 1, title: 'Valamar Istra Premium Camping Resort', location: 'Poreč, Hırvatistan', img: p83i0 }
    ],
  },
  {
    id: 84,
    name: 'Venosa Beach Resort',
    location: 'Aydın',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p84i0,
    imgAlt: 'Venosa Beach Resort - Aydın',
    slides: [
      { id: 1, title: 'Venosa Beach Resort', location: 'Aydın', img: p84i0 },
      { id: 2, title: 'Venosa Beach Resort', location: 'Aydın', img: p84i1 },
      { id: 3, title: 'Venosa Beach Resort', location: 'Aydın', img: p84i2 }
    ],
  },
  {
    id: 85,
    name: 'Volgograd',
    location: 'Volgograd, Rusya',
    type: 'Açık Alan Su Parkı',
    region: 'Avrupa',
    img: p85i0,
    imgAlt: 'Volgograd - Volgograd, Rusya',
    slides: [
      { id: 1, title: 'Volgograd', location: 'Volgograd, Rusya', img: p85i0 },
      { id: 2, title: 'Volgograd', location: 'Volgograd, Rusya', img: p85i1 },
      { id: 3, title: 'Volgograd', location: 'Volgograd, Rusya', img: p85i2 },
      { id: 4, title: 'Volgograd', location: 'Volgograd, Rusya', img: p85i3 },
      { id: 5, title: 'Volgograd', location: 'Volgograd, Rusya', img: p85i4 }
    ],
  },
  {
    id: 86,
    name: 'Voyage Torba',
    location: 'Muğla',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p86i0,
    imgAlt: 'Voyage Torba - Muğla',
    slides: [
      { id: 1, title: 'Voyage Torba', location: 'Muğla', img: p86i0 },
      { id: 2, title: 'Voyage Torba', location: 'Muğla', img: p86i1 }
    ],
  },
  {
    id: 87,
    name: 'Wonderla Holidays',
    location: 'Bangalore, Hindistan',
    type: 'Açık Alan Su Parkı',
    region: 'Asya',
    img: p87i0,
    imgAlt: 'Wonderla Holidays - Bangalore, Hindistan',
    slides: [
      { id: 1, title: 'Wonderla Holidays', location: 'Bangalore, Hindistan', img: p87i0 }
    ],
  },
  {
    id: 88,
    name: 'XO Cape Arnna',
    location: 'Muğla',
    type: 'Otel & Su Parkı',
    region: 'Asya',
    img: p88i0,
    imgAlt: 'XO Cape Arnna - Muğla',
    slides: [
      { id: 1, title: 'XO Cape Arnna', location: 'Muğla', img: p88i0 }
    ],
  }
]

const REGIONS = ['Tümü', 'Asya', 'Avrupa', 'Afrika', 'Amerika']
const TYPES = ['Tümü', 'Açık Alan Su Parkı', 'Otel & Su Parkı', 'Kapalı Alan Su Parkı', 'Resort Tatil Köyü']

// ── Slider Modal Bileşeni ──────────────────────────────────
function ProjectSliderModal({ project, isOpen, onClose, translateLocation }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const autoplayRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    setCurrentIndex(0)
    setIsPlaying(true)
  }, [isOpen, project?.id])

  useEffect(() => {
    if (!isOpen || !isPlaying || !project?.slides?.length || project.slides.length <= 1) {
      clearInterval(autoplayRef.current)
      return
    }
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.slides.length)
    }, 4500)
    return () => clearInterval(autoplayRef.current)
  }, [isOpen, isPlaying, project?.id, project?.slides?.length])

  const go = (dir) => {
    setCurrentIndex((prev) => {
      if (dir === 'prev') return prev === 0 ? project.slides.length - 1 : prev - 1
      return (prev + 1) % project.slides.length
    })
  }

  const togglePlay = () => {
    setIsPlaying((prev) => !prev)
  }

  if (!isOpen) return null
  const slide = project.slides[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl"
        style={{ width: 'min(96vw,1200px)', maxHeight: '92vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Görsel */}
        <div className="relative bg-gray-900" style={{ height: 'min(76vh,65vw)', minHeight: '260px' }}>
          <img
            key={slide.img}
            src={slide.img}
            alt={slide.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.15) 55%,transparent 100%)' }} />

          {/* Bilgi */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase mb-1.5 opacity-60">{translateLocation ? translateLocation(slide.location) : slide.location}</p>
            <h3 className="text-2xl font-black leading-tight">{slide.title}</h3>
          </div>

          {/* Nav butonlar */}
          {project.slides.length > 1 && (<>
            <button onClick={() => go('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => go('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 flex-wrap justify-center px-4 max-w-full">
              {project.slides.map((_, idx) => (
                <button key={idx} onClick={() => setCurrentIndex(idx)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{ backgroundColor: idx === currentIndex ? '#fff' : 'rgba(255,255,255,0.35)', width: idx === currentIndex ? '20px' : '6px' }}
                />
              ))}
            </div>
          </>)}
        </div>

        {/* Alt bar */}
        <div className="px-6 py-4 bg-neutral-900 flex items-center justify-between text-white gap-4">
          <div>
            <p className="font-black text-base">{project.name}</p>
            <p className="text-sm text-white/45 mt-0.5">{project.location} · {project.type}</p>
          </div>
          {project.slides.length > 1 && (
            <span className="text-sm text-white/35 shrink-0">{currentIndex + 1} / {project.slides.length}</span>
          )}
        </div>

        {/* Üst Sağ Kontroller (Durdur/Oynat + Kapat) */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
          {project.slides.length > 1 && (
            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all shadow-md"
              title={isPlaying ? 'Durdur' : 'Oynat'}
              aria-label={isPlaying ? 'Durdur' : 'Oynat'}
            >
              {isPlaying ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          )}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center text-white transition-all shadow-md"
            title="Kapat"
            aria-label="Kapat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage({ setActivePage }) {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  const getMatchedRegion = () => {
    const raw = searchParams.get('region') || searchParams.get('bolge') || location.state?.region;
    if (raw) {
      try {
        const decoded = decodeURIComponent(raw).trim();
        const normalizedParam = decoded.toLowerCase().replace(/[-_\s]/g, '');
        const matched = REGIONS.find((r) => {
          const normR = r.toLowerCase().replace(/[-_\s]/g, '');
          return normR === normalizedParam || r.toLowerCase() === decoded.toLowerCase();
        });
        if (matched) return matched;
      } catch (e) {
        // fallback
      }
    }
    return 'Tümü';
  };

  const getMatchedType = () => {
    const raw = searchParams.get('type') || searchParams.get('tur') || searchParams.get('category') || location.state?.type;
    if (raw) {
      try {
        const decoded = decodeURIComponent(raw).trim();
        const normalizedParam = decoded.toLowerCase().replace(/[-_&\s]/g, '');
        const matched = TYPES.find((typ) => {
          const normT = typ.toLowerCase().replace(/[-_&\s]/g, '');
          if (normT === normalizedParam || typ.toLowerCase() === decoded.toLowerCase()) return true;
          if (normalizedParam.includes('otel') && typ.includes('Otel')) return true;
          if (normalizedParam.includes('kapali') && typ.includes('Kapalı')) return true;
          if (normalizedParam.includes('acik') && typ.includes('Açık')) return true;
          if (normalizedParam.includes('resort') && typ.includes('Resort')) return true;
          return false;
        });
        if (matched) return matched;
      } catch (e) {
        // fallback
      }
    }
    return 'Tümü';
  };

  const [region, setRegion] = useState(getMatchedRegion)
  const [type, setType] = useState(getMatchedType)
  const [selectedProject, setSelectedProject] = useState(null)
  const [sliderOpen, setSliderOpen] = useState(false)

  const handleRegionChange = (newRegion) => {
    setRegion(newRegion);
    const newParams = {};
    if (newRegion !== 'Tümü') newParams.region = newRegion;
    if (type !== 'Tümü') newParams.type = type;
    setSearchParams(newParams);
  };

  const handleTypeChange = (newType) => {
    setType(newType);
    const newParams = {};
    if (region !== 'Tümü') newParams.region = region;
    if (newType !== 'Tümü') newParams.type = newType;
    setSearchParams(newParams);
  };

  useEffect(() => {
    const targetRegion = getMatchedRegion();
    setRegion(targetRegion);
    const targetType = getMatchedType();
    setType(targetType);
  }, [searchParams, location.search, location.state]);

  const regionTranslationMap = {
    'Tümü': t('common.all'),
    'Asya': t('regions.asia', { defaultValue: 'Asya' }),
    'Avrupa': t('regions.europe', { defaultValue: 'Avrupa' }),
    'Afrika': t('regions.africa', { defaultValue: 'Afrika' }),
    'Amerika': t('regions.america', { defaultValue: 'Amerika' })
  }

  const typeTranslationMap = {
    'Tümü': t('common.all'),
    'Açık Alan Su Parkı': t('projects.types.outdoor', { defaultValue: 'Açık Alan Su Parkı' }),
    'Otel & Su Parkı': t('projects.types.hotel', { defaultValue: 'Otel & Su Parkı' }),
    'Kapalı Alan Su Parkı': t('projects.types.indoor', { defaultValue: 'Kapalı Alan Su Parkı' }),
    'Resort Tatil Köyü': t('projects.types.resort', { defaultValue: 'Resort Tatil Köyü' })
  }

  const locationTranslations = {
    // Cities
    'girit': { tr: 'Girit', en: 'Crete', es: 'Creta', ru: 'Крит', ar: 'كريت', fr: 'Crète', zh: '克里特岛' },
    'hanya': { tr: 'Hanya', en: 'Chania', es: 'La Canea', ru: 'Ханья', ar: 'خانية', fr: 'La Canée', zh: '哈尼亚' },
    'kefalonya': { tr: 'Kefalonya', en: 'Kefalonia', es: 'Cefalonia', ru: 'Кефалония', ar: 'كفالونيا', fr: 'Céphalonie', zh: '凯法利尼亚' },
    'moravya': { tr: 'Moravya', en: 'Moravia', es: 'Moravia', ru: 'Моравия', ar: 'مورافيا', fr: 'Moravie', zh: '摩拉维亚' },
    'rethymno': { tr: 'Rethymno', en: 'Rethymno', es: 'Rétino', ru: 'Ретимно', ar: 'ريثيمنو', fr: 'Rethymnon', zh: '雷斯蒙' },
    'selangor': { tr: 'Selangor', en: 'Selangor', es: 'Selangor', ru: 'Селангор', ar: 'سيلانجور', fr: 'Selangor', zh: '雪兰莪' },
    'timisoara': { tr: 'Timișoara', en: 'Timișoara', es: 'Timișoara', ru: 'Тимишоара', ar: 'تيميشوارا', fr: 'Timișoara', zh: '蒂米什瓦拉' },
    'benidorm': { tr: 'Benidorm', en: 'Benidorm', es: 'Benidorm', ru: 'Бенидорм', ar: 'بينيدورم', fr: 'Benidorm', zh: '贝尼多姆' },
    'tenerife': { tr: 'Tenerife', en: 'Tenerife', es: 'Tenerife', ru: 'Тенерифе', ar: 'تينيريفي', fr: 'Tenerife', zh: '特内里费' },
    'gran canaria': { tr: 'Gran Canaria', en: 'Gran Canaria', es: 'Gran Canaria', ru: 'Гран-Канария', ar: 'جران كناريا', fr: 'Grande Canarie', zh: '大加那利岛' },
    'mallorca': { tr: 'Mallorca', en: 'Mallorca', es: 'Mallorca', ru: 'Мальорка', ar: 'مايوركا', fr: 'Majorque', zh: '马略卡岛' },
    'torremolinos': { tr: 'Torremolinos', en: 'Torremolinos', es: 'Torremolinos', ru: 'Торремолинос', ar: 'توريمولينوس', fr: 'Torremolinos', zh: '托雷莫利诺斯' },
    'saint-cyprien': { tr: 'Saint-Cyprien', en: 'Saint-Cyprien', es: 'Saint-Cyprien', ru: 'Сен-Сиприен', ar: 'سان سيبريان', fr: 'Saint-Cyprien', zh: '圣西普里安' },
    'torreilles': { tr: 'Torreilles', en: 'Torreilles', es: 'Torreilles', ru: 'Торрей', ar: 'توريي', fr: 'Torreilles', zh: '托雷耶' },
    'saint-jean-de-monts': { tr: 'Saint-Jean-de-Monts', en: 'Saint-Jean-de-Monts', es: 'Saint-Jean-de-Monts', ru: 'Сен-Жан-де-Мон', ar: 'سان جان دي مونتس', fr: 'Saint-Jean-de-Monts', zh: '圣让德蒙' },
    'marsa alam': { tr: 'Marsa Alam', en: 'Marsa Alam', es: 'Marsa Alam', ru: 'Марса-Алам', ar: 'مرسى علم', fr: 'Marsa Alam', zh: '马萨阿拉姆' },
    'hurghada': { tr: 'Hurghada', en: 'Hurghada', es: 'Hurghada', ru: 'Хургада', ar: 'الغردقة', fr: 'Hurghada', zh: '赫尔格达' },
    'hurgada': { tr: 'Hurgada', en: 'Hurghada', es: 'Hurghada', ru: 'Хургада', ar: 'الغردقة', fr: 'Hurghada', zh: '赫尔格达' },
    'sharm el sheikh': { tr: 'Sharm El Sheikh', en: 'Sharm El Sheikh', es: 'Sharm El Sheikh', ru: 'Шарм-эль-Шейх', ar: 'شرم الشيخ', fr: 'Charm el-Cheikh', zh: '沙姆沙伊赫' },
    'sarm el-seyh': { tr: 'Şarm El-Şeyh', en: 'Sharm El Sheikh', es: 'Sharm El Sheikh', ru: 'Шарм-эль-Шейх', ar: 'شرم الشيخ', fr: 'Charm el-Cheikh', zh: '沙姆沙伊赫' },
    'bigacs': { tr: 'Bogács', en: 'Bogács', es: 'Bogács', ru: 'Богач', ar: 'بوغاتش', fr: 'Bogács', zh: '博加奇' },
    'bogacs': { tr: 'Bogács', en: 'Bogács', es: 'Bogács', ru: 'Богач', ar: 'بوغاتش', fr: 'Bogács', zh: '博加奇' },
    'gyula': { tr: 'Gyula', en: 'Gyula', es: 'Gyula', ru: 'Дьюла', ar: 'جيولا', fr: 'Gyula', zh: '久洛' },
    'nyiregyhaza': { tr: 'Nyíregyháza', en: 'Nyíregyháza', es: 'Nyíregyháza', ru: 'Ньиредьхаза', ar: 'نيريغيهازا', fr: 'Nyíregyháza', zh: '尼赖吉哈佐' },
    'sarvar': { tr: 'Sárvár', en: 'Sárvár', es: 'Sárvár', ru: 'Шарвар', ar: 'شارفار', fr: 'Sárvár', zh: '沙尔瓦尔' },
    'zalakaros': { tr: 'Zalakaros', en: 'Zalakaros', es: 'Zalakaros', ru: 'Залакарош', ar: 'زالاكاروس', fr: 'Zalakaros', zh: '佐洛考罗什' },
    'jakovo': { tr: 'Jakovo', en: 'Jakovo', es: 'Jakovo', ru: 'Яково', ar: 'ياكوفو', fr: 'Jakovo', zh: '雅科沃' },
    'novi sad': { tr: 'Novi Sad', en: 'Novi Sad', es: 'Novi Sad', ru: 'Нови-Сад', ar: 'نوفي ساد', fr: 'Novi Sad', zh: '诺维萨德' },
    'vrnjacka banja': { tr: 'Vrnjačka Banja', en: 'Vrnjačka Banja', es: 'Vrnjačka Banja', ru: 'Врнячка-Баня', ar: 'فرنياتشكا بانيا', fr: 'Vrnjačka Banja', zh: '弗尔尼亚奇卡矿泉镇' },
    'jeddah': { tr: 'Cidde', en: 'Jeddah', es: 'Yeda', ru: 'Джидда', ar: 'جدة', fr: 'Djeddah', zh: '吉达' },
    'cidde': { tr: 'Cidde', en: 'Jeddah', es: 'Yeda', ru: 'Джидда', ar: 'جدة', fr: 'Djeddah', zh: '吉达' },
    'riyadh': { tr: 'Riyad', en: 'Riyadh', es: 'Riad', ru: 'Эр-Рияд', ar: 'الرياض', fr: 'Riyad', zh: '利雅得' },
    'doha': { tr: 'Doha', en: 'Doha', es: 'Doha', ru: 'Доха', ar: 'الدوحة', fr: 'Doha', zh: '多哈' },
    'seoul': { tr: 'Seul', en: 'Seoul', es: 'Seúl', ru: 'Сеул', ar: 'سيول', fr: 'Séoul', zh: '首尔' },
    'almaty': { tr: 'Almatı', en: 'Almaty', es: 'Almatí', ru: 'Алматы', ar: 'ألماتي', fr: 'Almaty', zh: '阿拉木图' },
    'tashkent': { tr: 'Taşkent', en: 'Tashkent', es: 'Taskent', ru: 'Ташкент', ar: 'طشقند', fr: 'Tachkent', zh: '塔什干' },
    'baku': { tr: 'Bakü', en: 'Baku', es: 'Bakú', ru: 'Баку', ar: 'باكو', fr: 'Bakou', zh: '巴库' },
    'budva': { tr: 'Budva', en: 'Budva', es: 'Budva', ru: 'Будва', ar: 'بودفا', fr: 'Budva', zh: '布德瓦' },
    'zakopane': { tr: 'Zakopane', en: 'Zakopane', es: 'Zakopane', ru: 'Закопане', ar: 'زاكوباني', fr: 'Zakopane', zh: '扎科帕内' },
    'senec': { tr: 'Senec', en: 'Senec', es: 'Senec', ru: 'Сенец', ar: 'سينيتس', fr: 'Senec', zh: '塞内茨' },
    'chisinau': { tr: 'Kişinev', en: 'Chisinau', es: 'Chisinau', ru: 'Кишинёв', ar: 'كيشيناو', fr: 'Chișinău', zh: '基希讷乌' },
    'tbilisi': { tr: 'Tiflis', en: 'Tbilisi', es: 'Tiflis', ru: 'Тбилиси', ar: 'تبليسي', fr: 'Tbilissi', zh: '第比利斯' },
    'kyrenia': { tr: 'Girne', en: 'Kyrenia', es: 'Kyrenia', ru: 'Кирения', ar: 'كيرينيا', fr: 'Kyrenia', zh: '凯里尼亚' },
    'oran': { tr: 'Vahran', en: 'Oran', es: 'Orán', ru: 'Оран', ar: 'وهران', fr: 'Oran', zh: '奥兰' },
    'marrakech': { tr: 'Marakeş', en: 'Marrakech', es: 'Marrakech', ru: 'Марракеш', ar: 'مراكش', fr: 'Marrakech', zh: '马拉喀什' },
    'marakes': { tr: 'Marakeş', en: 'Marrakech', es: 'Marrakech', ru: 'Марракеш', ar: 'مراكش', fr: 'Marrakech', zh: '马拉喀什' },
    'agadir': { tr: 'Agadir', en: 'Agadir', es: 'Agadir', ru: 'Агадир', ar: 'أكادير', fr: 'Agadir', zh: '阿加迪尔' },
    'sousse': { tr: 'Susa', en: 'Sousse', es: 'Susa', ru: 'Сус', ar: 'سوسة', fr: 'Sousse', zh: '苏塞' },
    'antalya': { tr: 'Antalya', en: 'Antalya', es: 'Antalya', ru: 'Анталья', ar: 'أنطاليا', fr: 'Antalya', zh: '安塔利亚' },
    'mugla': { tr: 'Muğla', en: 'Muğla', es: 'Muğla', ru: 'Мугла', ar: 'موغla', fr: 'Muğla', zh: '穆拉' },
    'izmir': { tr: 'İzmir', en: 'Izmir', es: 'Esmirna', ru: 'Измир', ar: 'إزمير', fr: 'Izmir', zh: '伊兹密尔' },
    'bodrum': { tr: 'Bodrum', en: 'Bodrum', es: 'Bodrum', ru: 'Бодрум', ar: 'بودروم', fr: 'Bodrum', zh: '博德鲁姆' },
    'fethiye': { tr: 'Fethiye', en: 'Fethiye', es: 'Fethiye', ru: 'Фетхие', ar: 'فتحية', fr: 'Fethiye', zh: '费特希耶' },
    'didim': { tr: 'Didim', en: 'Didim', es: 'Didim', ru: 'Дидим', ar: 'ديديم', fr: 'Didim', zh: '迪迪姆' },
    'aydin': { tr: 'Aydın', en: 'Aydin', es: 'Aydın', ru: 'Айдын', ar: 'أيدين', fr: 'Aydın', zh: '艾登' },
    'aydın': { tr: 'Aydın', en: 'Aydin', es: 'Aydın', ru: 'Айдын', ar: 'أيدين', fr: 'Aydın', zh: '艾登' },
    'asan': { tr: 'Asan', en: 'Asan', es: 'Asan', ru: 'Асан', ar: 'أسان', fr: 'Asan', zh: '牙山' },
    'bagdat': { tr: 'Bağdat', en: 'Baghdad', es: 'Bagdad', ru: 'Багдад', ar: 'بغداد', fr: 'Bagdad', zh: '巴格达' },
    'bangalore': { tr: 'Bangalore', en: 'Bangalore', es: 'Bangalore', ru: 'Бангалор', ar: 'بنغالور', fr: 'Bangalore', zh: '班加罗尔' },
    'd city': { tr: 'D City', en: 'D City', es: 'D City', ru: 'D City', ar: 'دي سيتي', fr: 'D City', zh: 'D City' },
    'fafe': { tr: 'Fafe', en: 'Fafe', es: 'Fafe', ru: 'Фафе', ar: 'فافي', fr: 'Fafe', zh: '法菲' },
    'karayipler': { tr: 'Karayipler', en: 'Caribbean', es: 'Caribe', ru: 'Карибы', ar: 'الكاريبي', fr: 'Caraïbes', zh: '加勒比' },
    'makadi bay': { tr: 'Makadi Bay', en: 'Makadi Bay', es: 'Makadi Bay', ru: 'Макади Бэй', ar: 'خليج مكادي', fr: 'Makadi Bay', zh: '马卡迪湾' },
    'nasiriye': { tr: 'Nasıriye', en: 'Nasiriyah', es: 'Nasiriya', ru: 'Эн-Насирия', ar: 'الناصرية', fr: 'Nassiriya', zh: '纳西里耶' },
    'nasıriye': { tr: 'Nasıriye', en: 'Nasiriyah', es: 'Nasiriya', ru: 'Эн-Насирия', ar: 'الناصرية', fr: 'Nassiriya', zh: '纳西里耶' },
    'porec': { tr: 'Poreč', en: 'Porec', es: 'Poreč', ru: 'Пореч', ar: 'بوريتش', fr: 'Poreč', zh: '波雷奇' },
    'port ghalib': { tr: 'Port Ghalib', en: 'Port Ghalib', es: 'Port Ghalib', ru: 'Порт Галиб', ar: 'بورت غالب', fr: 'Port Ghalib', zh: '加利卜港' },
    'seignosse': { tr: 'Seignosse', en: 'Seignosse', es: 'Seignosse', ru: 'Сеньос', ar: 'سينيوس', fr: 'Seignosse', zh: '塞尼奥斯' },
    'skikda': { tr: 'Skikda', en: 'Skikda', es: 'Skikda', ru: 'Скикда', ar: 'سكيكدة', fr: 'Skikda', zh: '斯基克达' },
    'sofya': { tr: 'Sofya', en: 'Sofia', es: 'Sofía', ru: 'София', ar: 'صوفيا', fr: 'Sofia', zh: '索菲亚' },
    'soma bay': { tr: 'Soma Bay', en: 'Soma Bay', es: 'Soma Bay', ru: 'Сома Бэй', ar: 'خليج سوما', fr: 'Soma Bay', zh: '索马湾' },
    'sterlitamak': { tr: 'Sterlitamak', en: 'Sterlitamak', es: 'Sterlitamak', ru: 'Стерлитамак', ar: 'ستيرليتاماك', fr: 'Sterlitamak', zh: '斯捷尔利塔马克' },
    'vendays-montalivet': { tr: 'Vendays-Montalivet', en: 'Vendays-Montalivet', es: 'Vendays-Montalivet', ru: 'Ванде-Монталиве', ar: 'فانديه مونتاليفيه', fr: 'Vendays-Montalivet', zh: '旺代蒙塔利韦' },
    'volgograd': { tr: 'Volgograd', en: 'Volgograd', es: 'Volgogrado', ru: 'Волгоград', ar: 'فولغوغراد', fr: 'Volgograd', zh: '伏尔加格勒' },

    // Countries
    'türkiye': { tr: 'Türkiye', en: 'Turkey', es: 'Turquía', ru: 'Турция', ar: 'تركيا', fr: 'Turquie', zh: '土耳其' },
    'romanya': { tr: 'Romanya', en: 'Romania', es: 'Rumania', ru: 'Румыния', ar: 'رومانيا', fr: 'Roumanie', zh: '罗马尼亚' },
    'yunanistan': { tr: 'Yunanistan', en: 'Greece', es: 'Grecia', ru: 'Греция', ar: 'اليونان', fr: 'Grèce', zh: '希腊' },
    'fransa': { tr: 'Fransa', en: 'France', es: 'Francia', ru: 'Франция', ar: 'فرنسا', fr: 'France', zh: '法国' },
    'malezya': { tr: 'Malezya', en: 'Malaysia', es: 'Malasia', ru: 'Малайзия', ar: 'ماليزيا', fr: 'Malaisie', zh: '马来西亚' },
    'mısır': { tr: 'Mısır', en: 'Egypt', es: 'Egipto', ru: 'Египет', ar: 'مصر', fr: 'Égypte', zh: '埃及' },
    'macaristan': { tr: 'Macaristan', en: 'Hungary', es: 'Hungría', ru: 'Венгрия', ar: 'المجر', fr: 'Hongrie', zh: '匈牙利' },
    'bulgaristan': { tr: 'Bulgaristan', en: 'Bulgaria', es: 'Bulgaria', ru: 'Богария', ar: 'بلغاريا', fr: 'Bulgarie', zh: '保加利亚' },
    'sırbistan': { tr: 'Sırbistan', en: 'Serbia', es: 'Serbia', ru: 'Сербия', ar: 'صربيا', fr: 'Serbie', zh: '塞尔维亚' },
    'katar': { tr: 'Katar', en: 'Qatar', es: 'Qatar', ru: 'Катар', ar: 'قطر', fr: 'Qatar', zh: '卡塔尔' },
    'vietnam': { tr: 'Vietnam', en: 'Vietnam', es: 'Vietnam', ru: 'Вьетнам', ar: 'فيتنام', fr: 'Vietnam', zh: '越南' },
    'özbekistan': { tr: 'Özbekistan', en: 'Uzbekistan', es: 'Uzbekistán', ru: 'Узбекистан', ar: 'أوزبكستان', fr: 'Ouzbékistan', zh: '乌兹别克斯坦' },
    'güney kore': { tr: 'Güney Kore', en: 'South Korea', es: 'Corea del Sur', ru: 'Южная Корея', ar: 'كوريا الجنوبية', fr: 'Corée du Sud', zh: '韩国' },
    'kuzey kıbrıs': { tr: 'Kuzey Kıbrıs', en: 'Northern Cyprus', es: 'Chipre del Norte', ru: 'Северный Кипр', ar: 'قبرص الشمالية', fr: 'Chypre du Nord', zh: '北塞浦路斯' },
    'kazakistan': { tr: 'Kazakistan', en: 'Kazakhstan', es: 'Kazajistán', ru: 'Казахстан', ar: 'كازاخستان', fr: 'Kazakhstan', zh: '哈萨克斯坦' },
    'karadağ': { tr: 'Karadağ', en: 'Montenegro', es: 'Montenegro', ru: 'Черногория', ar: 'الجبل الأسود', fr: 'Monténégro', zh: '黑山' },
    'curaçao': { tr: 'Curaçao', en: 'Curaçao', es: 'Curaçao', ru: 'Кюрасао', ar: 'كوراساو', fr: 'Curaçao', zh: '库拉索' },
    'irak': { tr: 'Irak', en: 'Iraq', es: 'Irak', ru: 'Ирак', ar: 'العراق', fr: 'Irak', zh: '伊拉克' },
    'azerbaycan': { tr: 'Azerbaycan', en: 'Azerbaijan', es: 'Azerbaiyán', ru: 'Азербайджан', ar: 'أذربيجان', fr: 'Azerbaïdjan', zh: '阿塞拜疆' },
    'polonya': { tr: 'Polonya', en: 'Poland', es: 'Polonia', ru: 'Польша', ar: 'بولندا', fr: 'Pologne', zh: '波兰' },
    'slovakya': { tr: 'Slovakya', en: 'Slovakia', es: 'Eslovaquia', ru: 'Словакия', ar: 'سلوفاкия', fr: 'Slovaquie', zh: '斯洛伐克' },
    'moldova': { tr: 'Moldova', en: 'Moldova', es: 'Moldova', ru: 'Молдова', ar: 'مولدوفا', fr: 'Moldavie', zh: '摩尔多瓦' },
    'gürcistan': { tr: 'Gürcistan', en: 'Georgia', es: 'Georgia', ru: 'Грузия', ar: 'جورجيا', fr: 'Géorgie', zh: '格鲁吉亚' },
    'cezayir': { tr: 'Cezayir', en: 'Algeria', es: 'Argelia', ru: 'Алжир', ar: 'الجزائر', fr: 'Algérie', zh: '阿尔及利亚' },
    'fas': { tr: 'Fas', en: 'Morocco', es: 'Marruecos', ru: 'Марокко', ar: 'المغرب', fr: 'Maroc', zh: '摩洛哥' },
    'tunus': { tr: 'Tunus', en: 'Tunisia', es: 'Túnez', ru: 'Тунис', ar: 'تونس', fr: 'Tunisie', zh: '突尼斯' },
    'ispanya': { tr: 'İspanya', en: 'Spain', es: 'España', ru: 'Испания', ar: 'إسبانيا', fr: 'Espagne', zh: '西班牙' },
    'suudi arabistan': { tr: 'Suudi Arabistan', en: 'Saudi Arabia', es: 'Arabia Saudita', ru: 'Саудовская Аравия', ar: 'المملكة العربية السعودية', fr: 'Arabie Saoudite', zh: '沙特阿拉伯' },
    'portekiz': { tr: 'Portekiz', en: 'Portugal', es: 'Portugal', ru: 'Португалия', ar: 'البرتغال', fr: 'Portugal', zh: '葡萄牙' },
    'hirvatistan': { tr: 'Hırvatistan', en: 'Croatia', es: 'Croacia', ru: 'Хорватия', ar: 'كرواتيا', fr: 'Croatie', zh: '克罗地亚' },
    'hırvatistan': { tr: 'Hırvatistan', en: 'Croatia', es: 'Croacia', ru: 'Хорватия', ar: 'كرواتيا', fr: 'Croatie', zh: '克罗地亚' },
    'rusya': { tr: 'Rusya', en: 'Russia', es: 'Rusia', ru: 'Россия', ar: 'روسيا', fr: 'Russie', zh: '俄罗斯' },
    'hindistan': { tr: 'Hindistan', en: 'India', es: 'India', ru: 'Индия', ar: 'الهند', fr: 'Inde', zh: '印度' }
  };

  const translateLocation = (locStr) => {
    if (!locStr) return '';
    const currentLangCode = i18n.language || 'tr';
    const cleanStr = locStr.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

    // Split by comma
    const parts = locStr.split(', ');
    const translatedParts = parts.map(part => {
      // Normalize part to matching key (removing accents/diacritics to map correctly)
      const key = part.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (locationTranslations[key] && locationTranslations[key][currentLangCode]) {
        return locationTranslations[key][currentLangCode];
      }
      return part;
    });

    let result = translatedParts.join(', ');
    if (currentLangCode !== 'tr' && parts.length === 1 && (cleanStr === 'antalya' || cleanStr === 'mugla' || cleanStr === 'izmir' || cleanStr === 'bodrum' || cleanStr === 'fethiye')) {
      // If it is just a Turkish city, add Turkey suffix in non-Turkish languages
      result += `, ${locationTranslations['türkiye'][currentLangCode]}`;
    }
    return result;
  }

  const getProjectTranslated = (p) => {
    return {
      ...p,
      region: regionTranslationMap[p.region] || p.region,
      type: typeTranslationMap[p.type] || p.type,
      location: translateLocation(p.location)
    }
  }

  const filtered = PROJECTS.filter((p) =>
    (region === 'Tümü' || p.region === region) &&
    (type === 'Tümü' || p.type === type)
  ).map(getProjectTranslated)

  return (
    <main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>

      {/* Hero */}
      <section className="relative py-20 lg:py-24 min-h-[320px] lg:min-h-[360px] flex items-center" style={{ backgroundColor: 'var(--th-primary)' }}>
        <div className="w-full max-w-[var(--layout-max)] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
                {t('projects.portfolio_tag', { defaultValue: 'Proje Portföyümüz' })}
              </p>
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
                {t('projects.title')}
              </h1>
            </div>
            <div>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                {t('projects.desc')}
              </p>
              <div className="flex gap-8 flex-wrap">
                <div>
                  <p className="text-3xl font-black text-white">3000+</p>
                  <p className="text-[11px] text-white/50 tracking-wider uppercase mt-1">{t('projects.stats.completed', { defaultValue: 'Tamamlanan Proje' })}</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">70+</p>
                  <p className="text-[11px] text-white/50 tracking-wider uppercase mt-1">{t('projects.stats.countries', { defaultValue: 'Ülke' })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtreler */}
      <div className="border-b sticky top-[72px] z-30"
        style={{ backgroundColor: 'color-mix(in srgb,var(--th-bg) 97%,transparent)', backdropFilter: 'blur(14px)', borderColor: 'color-mix(in srgb,var(--th-border) 10%,transparent)' }}>
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14 py-3.5 flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-black tracking-widest uppercase shrink-0"
              style={{ color: 'color-mix(in srgb,var(--th-text-muted) 50%,transparent)' }}>{t('projects.filters.region', { defaultValue: 'Bölge' })}</span>
            {REGIONS.map((r) => (
              <button key={r} onClick={() => handleRegionChange(r)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={region === r ? { backgroundColor: 'var(--th-primary)', color: '#fff' } : { color: 'var(--th-text-muted)' }}
                onMouseEnter={(e) => { if (region !== r) e.currentTarget.style.backgroundColor = 'color-mix(in srgb,var(--th-primary) 10%,transparent)' }}
                onMouseLeave={(e) => { if (region !== r) e.currentTarget.style.backgroundColor = 'transparent' }}
              >{regionTranslationMap[r] || r}</button>
            ))}
          </div>
          <div className="w-px h-5 hidden sm:block" style={{ backgroundColor: 'color-mix(in srgb,var(--th-border) 20%,transparent)' }} />
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-black tracking-widest uppercase shrink-0"
              style={{ color: 'color-mix(in srgb,var(--th-text-muted) 50%,transparent)' }}>{t('projects.filters.type', { defaultValue: 'Tür' })}</span>
            {TYPES.map((t) => (
              <button key={t} onClick={() => handleTypeChange(t)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={type === t ? { backgroundColor: 'var(--th-polgun-blue)', color: '#fff' } : { color: 'var(--th-text-muted)' }}
                onMouseEnter={(e) => { if (type !== t) e.currentTarget.style.backgroundColor = 'color-mix(in srgb,var(--th-polgun-blue) 10%,transparent)' }}
                onMouseLeave={(e) => { if (type !== t) e.currentTarget.style.backgroundColor = 'transparent' }}
              >{typeTranslationMap[t] || t}</button>
            ))}
          </div>
          <div className="ml-auto text-xs font-bold shrink-0" style={{ color: 'var(--th-text-muted)' }}>
            {filtered.length} {t('projects.stats.project_count', { defaultValue: 'proje' })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-14">
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((proj) => (
              <article
                key={proj.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}
                onClick={() => { setSelectedProject(proj); setSliderOpen(true) }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.16)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={proj.img} alt={proj.imgAlt} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.78) 0%,rgba(0,0,0,0.12) 52%,transparent 100%)' }} />
                {proj.slides.length > 1 && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-[10px] font-bold"
                    style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {proj.slides.length}
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
                    style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}>{proj.type}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h2 className="text-lg font-black text-white leading-tight mb-0.5">{proj.name}</h2>
                  <p className="text-sm text-white/55">{proj.location}</p>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-24" style={{ color: 'var(--th-text-muted)' }}>
              <p className="text-lg font-semibold">{t('common.no_content')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Slider Modal */}
      {selectedProject && (
        <ProjectSliderModal project={selectedProject} isOpen={sliderOpen} onClose={() => setSliderOpen(false)} translateLocation={translateLocation} />
      )}

      {/* CTA */}
      <section className="py-32" style={{ backgroundColor: 'var(--th-bg)' }}>
        <div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
          <div className="relative rounded-3xl overflow-hidden px-12 py-20"
            style={{ background: 'linear-gradient(135deg,var(--th-primary) 0%,var(--th-polgun-blue) 100%)' }}>
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 1400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <circle cx="200" cy="150" r="300" fill="white" />
                <circle cx="1200" cy="150" r="200" fill="white" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div>
                <p className="text-[11px] font-black tracking-[0.3em] uppercase mb-3 text-white/50">{t('projects.cta_tag', { defaultValue: 'Sonraki Proje' })}</p>
                <h2 className="text-3xl font-black text-white">{t('projects.cta_title', { defaultValue: 'Projeniz bu listede olsun.' })}</h2>
                <p className="text-white/40 text-sm mt-2 max-w-md">{t('projects.cta_desc', { defaultValue: 'Hayalinizdeki su parkını veya eğlence merkezini tasarlamak için uzman mühendis ve mimar kadromuzla iletişime geçin.' })}</p>
              </div>
              <button onClick={() => navigate('/contact')}
                className="shrink-0 px-10 py-4 font-bold text-sm rounded-full transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: '#FFFFFF', color: 'var(--th-primary-darker)', boxShadow: '0 0 40px rgba(0,0,0,0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {t('projects.cta_btn', { defaultValue: 'Projeyi Başlat' })}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
