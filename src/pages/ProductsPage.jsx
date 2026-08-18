import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom' // useNavigate eklendi
import heroImage from '../assets/polgun-featured-projects-4.avif'
import underwater1 from '../assets/hero/13.MaxeriaBlue.avif'
import pirate1 from '../assets/splash/pirateTheme/1001.avif'
import navatu1 from '../assets/navatu/navatu1.avif'
import navatu2 from '../assets/navatu/navatu2.avif'
import savana1 from '../assets/savana/savana1.avif'
import savana2 from '../assets/savana/savana2.avif'
import bigholeImg from '../assets/products/slides/bighole.avif'
import bigraftImg from '../assets/products/slides/bigraft.avif'
import familyraftImg from '../assets/products/slides/familyraft.avif'
import familytornadoImg from '../assets/products/slides/familytornado.avif'
import midholeImg from '../assets/products/slides/midhole.avif'
import ufoslideImg from '../assets/products/slides/ufoslide.avif'
import freefallImg from '../assets/products/slides/freefall.avif'
import hydroriverImg from '../assets/products/slides/hydroriver.avif'
import rocketsldeImg from '../assets/products/slides/rocketslde.avif'
import uphillImg from '../assets/products/slides/uphill.avif'
import kamikazeImg from '../assets/products/slides/kamikaze.avif'
import slipandflyImg from '../assets/products/slides/slipandfly.avif'
import babochkaImg from '../assets/products/slides/babochka.avif'
import boomerangoImg from '../assets/products/slides/boomerango.avif'
import canyonslideImg from '../assets/products/slides/canyonslide.avif'
import crazyconeImg from '../assets/products/slides/crazycone.avif'
import droneImg from '../assets/products/slides/drone.avif'
import hillslideImg from '../assets/products/slides/hillslide.avif'
import hydraslideImg from '../assets/products/slides/hydraslide.avif'
import magictrayImg from '../assets/products/slides/magictray.avif'
import miniboomerangoImg from '../assets/products/slides/miniboomerango.avif'
import spacerocketImg from '../assets/products/slides/spacerocket.avif'
import superbowlImg from '../assets/products/slides/superbowl.avif'
import spacebowlImg from '../assets/products/slides/spacebowl.avif'
import tornadoslideImg from '../assets/products/slides/tornadoslide.avif'
import planetaImg from '../assets/products/slides/planeta.avif'
import bodyracerImg from '../assets/products/slides/bodyracer.avif'
import multislideImg from '../assets/products/slides/multislide.avif'
import twisterslideImg from '../assets/products/slides/twisterslide.avif'
import racerslideImg from '../assets/products/slides/racerslide.avif'
import spiderslideImg from '../assets/products/slides/spiderslide.avif'
import aquatubeImg from '../assets/products/slides/aquatube.avif'
import blackholeImg from '../assets/products/slides/blackhole.avif'
import compactslideImg from '../assets/products/slides/compactslide.avif'
import raftingslideImg from '../assets/products/slides/raftingslide.avif'
import wideslideImg from '../assets/products/slides/wideslide.avif'
import bodyslideImg from '../assets/products/slides/bodyslide.avif'

// ── Ürün Verisi ────────────────────────────────────────────
const PRODUCTS = [

	{
		category: 'Splash Tower',
		title: 'Pirate Theme',
		sub: 'Korsan Temalı Su Kaydırakları',
		desc: 'Polgün\'ün imza teması olan Korsan Tema, çocukların korsanlarla dolu açık denizlerde yelken açmaları ve bu hayal dünyasında eğlenmeleri için tasarlanmıştır.',
		specs: [
			{ label: 'Tema', val: 'Korsan' },
			{ label: 'Aktivite', val: 'Özelleştirilebilir' },
			{ label: 'Yaş Grubu', val: 'Tüm Yaşlar' },
			{ label: 'Kapasite', val: 'Yüksek' },
		],
		img: pirate1,
		imgAlt: 'Pirate Theme Splash Tower',
		badge: 'İmza Tema',
	},
	{
		category: 'Splash Tower',
		title: 'Underwater Theme',
		sub: 'Sualtı Dünyası Temalı Yapılar',
		desc: 'Çocukların sualtı dünyası ile ilgili merakını uyandıran, keşfedilmeyi bekleyen farklı türler ve rengarenk mercanlardan yola çıkılarak tasarlanmış interaktif oyun alanı.',
		specs: [
			{ label: 'Tema', val: 'Sualtı' },
			{ label: 'Aktivite', val: 'Özelleştirilebilir' },
			{ label: 'Yaş Grubu', val: 'Tüm Yaşlar' },
			{ label: 'Kapasite', val: 'Yüksek' },
		],
		img: underwater1,
		imgAlt: 'Underwater Theme Splash Tower',
		badge: null,
	},
	{
		category: 'Ar-Ge Ürünleri',
		title: 'Navatu',
		sub: 'IAAPA Brass Ring Ödüllü Dalga Sistemi',
		desc: 'Navatu, Polgün bünyesindeki Ar-Ge Merkezi\'nde geliştirilen ve IAAPA Expo Orlando\'da Brass Ring ödülüne layık görülen yenilikçi su parkı sistemidir. Doğal dalga deneyimini yeni bir boyuta taşır.',
		specs: [
			{ label: 'Ödül', val: 'IAAPA Brass Ring' },
			{ label: 'Tür', val: 'Dalga Sistemi' },
			{ label: 'Geliştirme', val: 'Ar-Ge Merkezi' },
			{ label: 'Kapasite', val: 'Yüksek' },
		],
		img: navatu1,
		img2: navatu2,
		imgAlt: 'Navatu dalga sistemi',
		badge: 'Ar-Ge',
	},
	{
		category: 'Ar-Ge Ürünleri',
		title: 'Savana',
		sub: 'Çoklu Kayma Yollu Temalı Su Kaydırağı',
		desc: 'Savana, aynı gövdede dört farklı kayma yolunu bir araya getiren, aynı anda sekiz kullanıcının farklı kayma stillerini deneyimleyebildiği yenilikçi bir Ar-Ge projesidir. 2024 yılında tasarımı tescillenmiştir.',
		specs: [
			{ label: 'Kaydırak Yolu', val: '4 Adet' },
			{ label: 'Kapasite', val: '8 Kişi/seans' },
			{ label: 'Tescil', val: '2024' },
			{ label: 'Malzeme', val: 'Kompozit+Çelik' },
		],
		img: savana1,
		img2: savana2,
		imgAlt: 'Savana su kaydırağı',
		badge: 'Ar-Ge',
	},

	{
		category: 'Family Slides',
		title: 'Big Hole',
		sub: '',
		desc: `Big Hole, aile tipi botlarla ortak kullanım deneyimi sunmak üzere tasarlanmış, büyük ölçekli kapalı bir su kaydırağıdır. Geniş kesitli tüp yapısı, hız ve hareket hissini etkileyici bir şekilde yaşatırken, klasik kapalı kaydırak konseptini aileler ve gruplar için eğlenceli, sosyal ve unutulmaz bir su parkı deneyimine dönüştürür.`,
		specs: [],
		img: bigholeImg,
		imgAlt: 'Big Hole',
		badge: null,
	},
	{
		category: 'Family Slides',
		title: 'Big Raft',
		sub: '',
		desc: `Big Raft, ortak kullanım için tasarlanmış geniş ve konforlu bir aile botu kaydırağıdır. Geniş kayma yüzeyi sayesinde ailelerin ve arkadaş gruplarının akış, hız ve heyecanı birlikte deneyimlemesine olanak tanır. Yüksek aile çekiciliğine sahip bu kaydırak, eğlenceyi ve sosyal etkileşimi bir araya getiren keyifli bir su parkı deneyimi sunar.`,
		specs: [],
		img: bigraftImg,
		imgAlt: 'Big Raft',
		badge: null,
	},
	{
		category: 'Family Slides',
		title: 'Family Slide',
		sub: '',
		desc: `Family Slide, ailelerin ve grupların birlikte keyifle kullanabilmesi için tasarlanmış çok kişilik botlu bir su kaydırağıdır. Geniş virajları, yumuşak geçişleri ve dört kişiye kadar kullanım imkânı sunan botları sayesinde etkileşimli eğlence, dinamik bir kayış deneyimi ve yüksek kapasiteli su parkı eğlencesi sunar.`,
		specs: [],
		img: familyraftImg,
		imgAlt: 'Famil Slide',
		badge: null,
	},
	{
		category: 'Family Slides',
		title: 'Family Tornado',
		sub: '',
		desc: `Family Tornado, ikonik huni (funnel) deneyimini daha büyük ölçekte sunarak daha kalabalık grupların heyecanı birlikte yaşamasına olanak tanır. Geniş huni yapısı ve güçlü salınım hareketi sayesinde yüksek hızlanma, anlık ağırlıksızlık hissi ve dinamik geçişler sunar. Yüksek kapasitesi, etkileyici görsel yapısı ve tekrar binme isteği uyandıran deneyimiyle su parklarının öne çıkan aile tipi kaydıraklarından biridir.`,
		specs: [],
		img: familytornadoImg,
		imgAlt: 'Family Tornado',
		badge: null,
	},
	{
		category: 'Family Slides',
		title: 'Mid Hole',
		sub: '',
		desc: `Mid Hole, geniş ve etkileyici bir sürüş deneyimi sunan kapalı aile tipi bir su kaydırağıdır. Kapalı tüp tasarımı, yolculuk boyunca merak ve heyecan duygusunu artırırken, aileler ve gruplar için eğlenceli, konforlu ve birlikte paylaşılabilen bir kayma deneyimi sunar.`,
		specs: [],
		img: midholeImg,
		imgAlt: 'Mid Hole',
		badge: null,
	},
	{
		category: 'Family Slides',
		title: 'UFO Slide',
		sub: '',
		desc: `UFO Slide, kendine özgü eliptik formundan ilham alan aile dostu bir botlu su kaydırağıdır. Kapalı tüp yapısı sayesinde dört kişiye kadar kullanıcı için akıcı ve konforlu bir kayma deneyimi sunarken, paylaşılan eğlenceyi yüksek eğlence değeriyle birleştirerek su parklarına dikkat çekici bir aile atraksiyonu kazandırır.`,
		specs: [],
		img: ufoslideImg,
		imgAlt: 'UFO Slide',
		badge: null,
	},
	{
		category: 'Fast Slide',
		title: 'Freefall',
		sub: '',
		desc: `Freefall, serbest düşüş hissini en yoğun şekilde yaşatmak için tasarlanmış yüksek adrenalinli bir su kaydırağıdır. Neredeyse dikey iniş açısı ve kesintisiz yüksek hızlı parkuru sayesinde kısa ancak son derece etkileyici bir kayma deneyimi sunar. Heyecan arayan kullanıcılar için vazgeçilmez bir su parkı atraksiyonudur.`,
		specs: [],
		img: freefallImg,
		imgAlt: 'Freefall',
		badge: null,
	},
	{
		category: 'Fast Slide',
		title: 'Hydro River',
		sub: '',
		desc: `Hydro River, gelişmiş su jeti teknolojisiyle çalışan yeni nesil bir botlu su kaydırağıdır. Sürekli hareketi su jetleriyle sağlayarak akıcı, dinamik ve kesintisiz bir kayma deneyimi sunar. Yenilikçi teknolojiyi, konforu ve eğlenceyi bir araya getirerek su parkları için benzersiz bir atraksiyon oluşturur.`,
		specs: [],
		img: hydroriverImg,
		imgAlt: 'Hydro River',
		badge: null,
	},
	{
		category: 'Fast Slide',
		title: 'Rocket Slide',
		sub: '',
		desc: `Rocket Slide, kapan (trapdoor) mekanizmalı başlangıç sistemiyle kullanıcıyı aniden serbest bırakarak yerçekimi etkisiyle yüksek hızda inişe geçiren yüksek adrenalinli bir su kaydırağıdır. Geri sayımın ardından beklenmedik şekilde açılan zemin, serbest düşüş hissi ve isteğe bağlı döngü (looping) seçenekleriyle birleşerek yüksek hızlı kaydırak kategorisinin en heyecan verici deneyimlerinden birini sunar.`,
		specs: [],
		img: rocketsldeImg,
		imgAlt: 'Rocket Slide',
		badge: null,
	},
	{
		category: 'Fast Slide',
		title: 'Uphill Slide',
		sub: '',
		desc: `Uphill Slide, dalgalı parkuru boyunca ardışık iniş ve çıkışlar sunarak dinamik bir kayma deneyimi yaşatır. Değişen hızlanma ve yavaşlama etkisi, akıcı ve ritmik bir hareket hissi oluşturarak kullanıcılarına uzun süreli heyecan ve yüksek eğlence değeri sunar.`,
		specs: [],
		img: uphillImg,
		imgAlt: 'Uphill Slide',
		badge: null,
	},
	{
		category: 'Fast Slide',
		title: 'Kamikaze',
		sub: '',
		desc: `Kamikaze, kademeli kayma yüzeyi sayesinde yüksek hız ve yoğun adrenalin sunan klasik bir su kaydırağıdır. Ani hızlanma ve yavaşlama etkileri, hız hissini daha da artırırken akıcı kayma deneyimiyle heyecan arayan kullanıcılar için su parklarının en popüler atraksiyonlarından biridir.`,
		specs: [],
		img: kamikazeImg,
		imgAlt: 'Kamikaze',
		badge: null,
	},
	{
		category: 'Fast Slide',
		title: 'Slip & Fly',
		sub: '',
		desc: `Slip & Fly, Polgün tarafından geliştirilen özgün bir su kaydırağı olup, su yüzeyinin üzerinde sıçrama ve uçuyormuş hissi yaşatacak şekilde tasarlanmıştır. Yüksek hız, etkileyici görsel deneyim ve yoğun adrenalin hissini bir araya getirerek heyecanı bir üst seviyeye taşıyan, su parklarının öne çıkan atraksiyonlarından biridir.`,
		specs: [],
		img: slipandflyImg,
		imgAlt: 'Slip and Fly',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Babochka',
		sub: '',
		desc: `Babochka, kelebekten ilham alan özgün geometrisini aile tipi botlu kaydırak deneyimiyle birleştirir. Geniş eğimli geçişleri ve kontrollü hızlanma yapısı sayesinde akıcı ve dinamik bir kayma deneyimi sunarken, simetrik ve dikkat çekici tasarımı su parklarına güçlü bir görsel etki ve farklı tema konseptlerine uyarlanabilen özelleştirme imkânı sağlar.`,
		specs: [],
		img: babochkaImg,
		imgAlt: 'Babochka',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Boomerango',
		sub: '',
		desc: `Boomerango, bumerangın geri dönüş hareketinden ilham alan yüksek adrenalinli bir botlu su kaydırağıdır. Kullanıcılar yüksek hızla iniş yaptıktan sonra neredeyse dik bir duvara tırmanır, anlık ağırlıksızlık hissini yaşar ve ardından kaydırak parkuruna geri dönerek yolculuğuna devam eder. Dinamik hareket yapısı ve ikonik tasarımıyla, adrenalin odaklı su parklarının en dikkat çekici atraksiyonlarından biridir.`,
		specs: [],
		img: boomerangoImg,
		imgAlt: 'Boomerango',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Canyon Slide',
		sub: '',
		desc: `Canyon, kompakt ve alan tasarrufu sağlayan tasarımıyla heyecan verici bir botlu su kaydırağı deneyimi sunar. Dinamik parkuru boyunca kullanıcılar yükselme, savrulma ve geri dönüş hissini bir arada yaşarken, sınırlı kurulum alanlarında bile unutulmaz bir kayma deneyimi sunan etkileyici bir atraksiyon oluşturur.`,
		specs: [],
		img: canyonslideImg,
		imgAlt: 'Canyon Slide',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Crazy Cone',
		sub: '',
		desc: `Crazy Cone, kendine özgü konik tasarımı ve akıcı salınım hareketiyle eğlenceli ve enerjik bir kayma deneyimi sunar. Kullanıcılar geniş koni bölümüne geçiş yaptıktan sonra değişen yön hareketleri sayesinde heyecan verici ve sürprizlerle dolu bir yolculuk yaşar. Dikkat çekici görünümü ve farklı yerleşim seçeneklerine uyum sağlayan yapısıyla, ailelere ve gençlere yönelik su parkı projeleri için öne çıkan bir atraksiyondur.`,
		specs: [],
		img: crazyconeImg,
		imgAlt: 'Crazy Cone',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Drone',
		sub: '',
		desc: `Drone, ani genişleme etkisi ve etkileyici mekânsal hissiyle kayma deneyimini zenginleştiren, görsel açıdan dikkat çekici bir kaydırak modülüdür. Geniş kubbe formundaki bölüm, kullanıcıya ferah ve etkileyici bir alan hissi yaşattıktan sonra kayma parkuru devam eder. Görsel etkisi, aydınlatma uygulamalarına uygun yapısı ve farklı kaydırak sistemlerine kolayca entegre edilebilmesi sayesinde su parklarına heyecan ve estetik değer katan yenilikçi bir çözümdür.`,
		specs: [],
		img: droneImg,
		imgAlt: 'Drone',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Hill Slide',
		sub: '',
		desc: `Hill Slide, dik bir inişin ardından etkileyici bir yokuş tırmanışı sunarak yüksek hız ve adrenalin hissi yaşatan botlu bir su kaydırağıdır. Dinamik parkur yapısı, tekrar binme isteği uyandıran sürüş deneyimi ve farklı renk ile desen seçenekleriyle özelleştirilebilen tasarımı sayesinde her su parkına dikkat çekici ve özgün bir atraksiyon kazandırır.`,
		specs: [],
		img: hillslideImg,
		imgAlt: 'Hill Slide',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Hydra Slide',
		sub: '',
		desc: `Hydra, yüksek kapasiteyi cesur ve ikonik bir mimari tasarımla bir araya getiren çok şeritli bir yarış kaydırağıdır. Çok başlı özgün yapısı, eş zamanlı yüksek hızlı inişler sunarak rekabet duygusunu ve kullanıcı etkileşimini artırır. Klasik mat yarış kaydırağı konseptini, su parklarının simge atraksiyonlarından biri hâline getiren etkileyici bir deneyime dönüştürür.`,
		specs: [],
		img: hydraslideImg,
		imgAlt: 'Hydra Slide',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Magic Tray',
		sub: '',
		desc: `Magic Tray, akıcı eğimli dönüşler, sürekli yön değişimleri ve kontrollü hızlanma sayesinde dinamik bir botlu kaydırak deneyimi sunar. Tabak (saucer) formundan ilham alan özgün tasarımı, kesintisiz ve ritmik bir kayma hissi oluştururken; aile dostu heyecanı, konforu ve güçlü görsel etkisiyle su parklarına dikkat çekici bir atraksiyon kazandırır.`,
		specs: [],
		img: magictrayImg,
		imgAlt: 'Magic Tray',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Mini Boomerango',
		sub: '',
		desc: `Mini Boomerango, bumerang kaydırağının karakteristik ileri–geri hareketini ve heyecanını kompakt bir tasarımla sunar. Daha düşük yüksekliği ve daha az yer kaplayan yapısı sayesinde sınırlı alana sahip projeler, Splash Tower sistemleri ve kompakt su parkları için ideal bir çözümdür. Küçük ölçülerine rağmen büyük bir kayma deneyimi sunarak esnek ve verimli bir atraksiyon alternatifi oluşturur.`,
		specs: [],
		img: miniboomerangoImg,
		imgAlt: 'Mini Boomerango',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Space Rocket',
		sub: '',
		desc: `Space Rocket, fütüristik tasarımı yüksek hızlı kayma deneyimiyle birleştirerek heyecan dolu tematik bir macera sunar. Roketten ilham alan özgün yapısı boyunca kullanıcılar hızlı ve akıcı geçişler yaşarken, güçlü görsel etkisiyle unutulmaz bir kayma deneyimi elde eder.`,
		specs: [],
		img: spacerocketImg,
		imgAlt: 'Space Rocket',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Super Bowl',
		sub: '',
		desc: 'Super Bowl, klasik çanak (bowl) kaydırak deneyimini daha uzun dönüş hareketi ve dinamik hızlanma ile yeniden yorumlar. Kullanıcılar, geniş çanak bölümünün içinde birden fazla tur attıktan sonra çıkış parkuruna geçerek yüksek adrenalinli ve görsel açıdan etkileyici bir kayma deneyimi yaşar. Esnek tasarım seçenekleri ve yüksek operasyonel verimliliği sayesinde su parkları için öne çıkan, dikkat çekici bir atraksiyondur.',
		specs: [],
		img: superbowlImg,
		imgAlt: 'Super Bowl',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Space Bowl',
		sub: '',
		desc: `Space Bowl, hız, dönüş hareketi ve görsel heyecanı bir araya getiren kompakt ancak etkileyici bir su kaydırağıdır. Kullanıcılar yüksek hızlı kapalı tüp parkurundan çanak bölümüne girer, burada birden fazla tur attıktan sonra heyecan verici son düşüşle kayma deneyimini tamamlar. İkonik tasarımı, izleyiciler üzerinde bıraktığı güçlü görsel etki ve az alan gerektiren kompakt yapısıyla her su parkına değer katan dikkat çekici bir atraksiyondur.`,
		specs: [],
		img: spacebowlImg,
		imgAlt: 'Space Bowl',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Tornado Slide',
		sub: '',
		desc: `Tornado, geniş huni (funnel) yapısı ve güçlü salınım hareketiyle yüksek adrenalinli bir botlu su kaydırağı deneyimi sunar. Kullanıcılar huni duvarlarında yüksek noktalara kadar yükseldikten sonra dinamik geçişlerle parkura devam ederek doğal bir girdabın içinde hareket ediyormuş hissini yaşar. Etkileyici tasarımı ve yoğun heyecan sunan sürüş deneyimiyle, su parklarının simge atraksiyonlarından biri olarak öne çıkar.`,
		specs: [],
		img: tornadoslideImg,
		imgAlt: 'Tornado Slide',
		badge: null,
	},
	{
		category: 'Jumbo Slides',
		title: 'Planeta',
		sub: '',
		desc: `Planeta, gezegeni andıran yuvarlak formu ve etkileyici kayma profiliyle aile dostu heyecanı dinamik hareketlerle buluşturan ikonik bir su kaydırağıdır. Kullanıcılar akıcı geçişler, geniş dönüşler ve hızlanan spiral hareketler boyunca uzayda yörüngede ilerliyormuş hissini deneyimler. Heykelsi tasarımı su parkının görsel kimliğini güçlendirirken, her yaştan ziyaretçi için eğlenceyi, hareketi ve tekrar binme isteğini bir araya getiren dengeli ve unutulmaz bir atraksiyon sunar.`,
		specs: [],
		img: planetaImg,
		imgAlt: 'Planeta',
		badge: null,
	},
	{
		category: 'Racer Slides',
		title: 'Body Racer',
		sub: '',
		desc: `Body Racer, kullanıcıların yan yana yarışabildiği, rekabet odaklı çok şeritli bir vücut kaydırağıdır. Açık veya kapalı tüp seçenekleriyle üretilebilen tasarımı, yarış boyunca kullanıcıların birbirini görebilmesini sağlayarak rekabet heyecanını artırır. Yüksek hız, eğlence ve etkileşimi bir araya getiren bu atraksiyon, modern su parklarının vazgeçilmez yarış kaydıraklarından biridir.`,
		specs: [],
		img: bodyracerImg,
		imgAlt: 'Body Racer',
		badge: null,
	},
	{
		category: 'Racer Slides',
		title: 'Multi Slide',
		sub: '',
		desc: `Multi Slide, çoklu şerit seçenekleri ve heyecan verici serbest düşüş başlangıcıyla yan yana yarışmanın keyfini sunan çok şeritli bir su kaydırağıdır. Yüksek hız, rekabet dolu eğlence ve yüksek kullanıcı kapasitesini bir araya getirerek su parkları için dinamik, sosyal ve dikkat çekici bir atraksiyon oluşturur.`,
		specs: [],
		img: multislideImg,
		imgAlt: 'Multi Slide',
		badge: null,
	},
	{
		category: 'Racer Slides',
		title: 'Twister Slide',
		sub: '',
		desc: `Twister Slide, 2 veya 3 spiral tüpten oluşan, rekabet odaklı çok şeritli bir su kaydırağıdır. Kullanıcılar kapalı spiral parkurlar boyunca yan yana yarışırken, kıvrımlı geçişler ve sürekli yön değişimleri heyecanı artırır. Yarışın galibinin bitiş çizgisine kadar belli olmaması ise sürpriz, rekabet ve yüksek eğlence değerini bir araya getirerek unutulmaz bir deneyim sunar.`,
		specs: [],
		img: twisterslideImg,
		imgAlt: 'Twister Slide',
		badge: null,
	},
	{
		category: 'Racer Slides',
		title: 'Racer Slide',
		sub: '',
		desc: `Racer Slide, hız, rekabet ve sosyal etkileşimi bir araya getiren iki şeritli bir yarış kaydırağıdır. Kullanıcılar eş zamanlı parkurlarda yan yana yarışarak eğlenceli ve tekrar binme isteği uyandıran bir deneyim yaşar. Farklı renk ve desen seçenekleriyle özelleştirilebilen tasarımı sayesinde her su parkına dinamik ve dikkat çekici bir görünüm kazandırır.`,
		specs: [],
		img: racerslideImg,
		imgAlt: 'Racer Slide',
		badge: null,
	},
	{
		category: 'Racer Slides',
		title: 'Spider Slide',
		sub: '',
		desc: `Spider Slide, sıkı dönüşleri ve keskin virajlarıyla dinamik ve rekabet dolu bir kayma deneyimi sunan çok şeritli bir su kaydırağıdır. Birbirine dolanmış tünel yapısı sayesinde aynı anda dört kullanıcıya kadar yan yana yarışma imkânı sunarak heyecanı ve etkileşimi artırır. Etkileyici mimari tasarımı ve güçlü görsel görünümüyle su parklarının dikkat çeken yarış atraksiyonlarından biridir.`,
		specs: [],
		img: spiderslideImg,
		imgAlt: 'Spider Slide',
		badge: null,
	},
	{
		category: 'Classic Slides',
		title: 'Aquatube',
		sub: '',
		desc: `Aquatube, yüksek hızı etkileyici kapalı tüp deneyimiyle birleştiren klasik bir vücut kaydırağıdır. Aydınlatma efektleri ile şeffaf veya yarı şeffaf bölümlerle zenginleştirilebilen tasarımı, kullanıcılarına görsel açıdan etkileyici bir kayma deneyimi sunar. Zamansız tasarımı ve geniş kullanıcı kitlesine hitap eden yapısıyla, su parklarının en popüler ve vazgeçilmez atraksiyonlarından biri olmaya devam etmektedir.`,
		specs: [],
		img: aquatubeImg,
		imgAlt: 'Aquatube',
		badge: null,
	},
	{
		category: 'Classic Slides',
		title: 'Black Hole',
		sub: '',
		desc: `Black Hole, etkileyici ışık efektleriyle zenginleştirilmiş klasik bir botlu su kaydırağıdır. Kapalı tüp yapısı boyunca sunulan görsel efektler, kayma deneyimini sürükleyici bir maceraya dönüştürür. Hızı, atmosferi ve eğlenceyi bir araya getiren yapısıyla, su parklarının en popüler ve zamana meydan okuyan atraksiyonlarından biri olmaya devam etmektedir.`,
		specs: [],
		img: blackholeImg,
		imgAlt: 'Black Hole',
		badge: null,
	},
	{
		category: 'Classic Slides',
		title: 'Compact Slide',
		sub: '',
		desc: `Compact Slide, sınırlı alanlar için geliştirilmiş, kolay montaj ve bakım avantajı sunan pratik bir su kaydırağı çözümüdür. Splash Tower sistemlerinde, su parklarında veya bağımsız uygulamalarda kullanılabilen bu model; farklı ölçü, renk ve tasarım seçenekleriyle özelleştirilebilir. Esnek yapısı ve verimli alan kullanımı sayesinde her ölçekten projeye uygun, fonksiyonel ve ekonomik bir atraksiyon sunar.`,
		specs: [],
		img: compactslideImg,
		imgAlt: 'Compact Slide',
		badge: null,
	},
	{
		category: 'Classic Slides',
		title: 'Rafting Slide',
		sub: '',
		desc: `Rafting Slide, dünyanın en başarılı aile tipi botlu kaydıraklarından ilham alınarak tasarlanmış, yüksek kapasiteli bir grup kaydırağıdır. Hız, geniş duvar geçişleri ve kesintisiz yön değişimleri üzerine kurgulanan parkuru sayesinde kullanıcılarına dinamik bir kayma deneyimi sunar. Etkileyici inişler, geniş yarıçaplı virajlar ve akıcı parkur geçişleri; aileler ve heyecan arayan kullanıcılar için konfor ile adrenalini dengeli şekilde bir araya getirerek unutulmaz bir su parkı deneyimi oluşturur.`,
		specs: [],
		img: raftingslideImg,
		imgAlt: 'Rafting Slide',
		badge: null,
	},
	{
		category: 'Classic Slides',
		title: 'Wide Slide',
		sub: '',
		desc: `Wide Slide, aynı anda üç kullanıcıya kadar birlikte kayma imkânı sunan eğlenceli ve sosyal bir su kaydırağıdır. Geniş kayma yüzeyi sayesinde ailelerin ve arkadaş gruplarının birlikte keyifli bir deneyim yaşamasına olanak tanır. Farklı renk, desen ve ölçü seçenekleriyle özelleştirilebilen yapısı, her su parkına uyum sağlayan esnek ve görsel açıdan dikkat çekici bir atraksiyon sunar.`,
		specs: [],
		img: wideslideImg,
		imgAlt: 'Wide Slide',
		badge: null,
	},
	{
		category: 'Classic Slides',
		title: 'Body Slide',
		sub: '',
		desc: `Body Slide, akıcı ve keyifli bir kayma deneyimi sunan klasik bir vücut kaydırağıdır. Çok yönlü tasarımı sayesinde bağımsız bir atraksiyon olarak kullanılabileceği gibi daha büyük kaydırak komplekslerine de kolayca entegre edilebilir. Zamansız tasarımı, geniş kullanıcı kitlesine hitap eden yapısı ve yüksek uyarlanabilirliğiyle su parklar`,
		specs: [],
		img: bodyslideImg,
		imgAlt: 'Body Slide',
		badge: null,
	},
]

const CATEGORIES = [
	'Tümü',
	'Su Kaydırakları',
	'Splash Tower',
	'Ar-Ge Ürünleri',
	'Splash Zone',
	'Family Slides',
	'Fast Slide',
	'Jumbo Slides',
	'Racer Slides',
	'Classic Slides',
]

// ── Glass Kart bileşeni ────────────────────────────────────
function GlassTag({ children }) {
	return (
		<span
			className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
			style={{
				background: 'rgba(255,255,255,0.18)',
				backdropFilter: 'blur(8px)',
				border: '1px solid rgba(255,255,255,0.2)',
				color: 'rgba(255,255,255,0.9)',
			}}
		>
			{children}
		</span>
	)
}

export default function ProductsPage() {
	const navigate = useNavigate();
	const [activeFilter, setActiveFilter] = useState('Tümü')
	const [catalogs, setCatalogs] = useState([])

	useEffect(() => {
		async function fetchCatalogs() {
			try {
				const res = await fetch('/api/catalog/visible');
				const data = await res.json();
				if (Array.isArray(data)) {
					setCatalogs(data);
				}
			} catch (err) {
				console.error('Failed to fetch catalogs:', err);
			}
		}
		fetchCatalogs();
	}, []);

	// Badge stilleri
	const BADGE_STYLE = {
		'Çok Satılan': { backgroundColor: 'var(--th-primary)', color: '#fff' },
		'Yeni': { backgroundColor: 'var(--th-polgun-blue)', color: '#fff' },
		'Premium': { backgroundColor: 'var(--th-polgun-antrasit)', color: '#fff' },
	}

	const filtered =
		activeFilter === 'Tümü'
			? PRODUCTS
			: PRODUCTS.filter((p) => p.category === activeFilter)

	return (
		<main className="pt-20" style={{ backgroundColor: 'var(--th-bg)' }}>
			{/* ── Page Hero ── */}
			<section className="py-28" style={{ backgroundColor: 'var(--th-primary)' }}>
				{/* Content */}
				<div className="max-w-7xl  mx-auto px-6 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-16 items-end">

						<div>
							<p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--th-text)' }}>
								Ürün Kataloğu
							</p>
							<h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.02]">
								Ürünlerimiz
							</h1>
						</div>
						<p className="text-white/50 text-lg leading-relaxed">
							Yenilikçi teknolojiler, estetik tasarımlar ve uluslararası standartlarda üretim ile geliştirdiğimiz su parkı sistemlerimiz. Her projeye değer katan, güvenli ve sürdürülebilir ürünlerimizle tanışın.
						</p>
						<div className="flex gap-4 flex-wrap">
							<button
								type="button"
								onClick={() => navigate('/contact')}
								className="px-8 py-4 font-bold text-white rounded-full transition-all duration-300 hover:-translate-y-1"
								style={{ backgroundColor: 'var(--th-polgun-antrasit)', boxShadow: `0 0 32px var(--th-polgun-antrasit)66` }}
								onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--th-text-muted)'}
								onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--th-polgun-antrasit)'}
							>
								Ürün Talebi
							</button>
							<button
								onClick={() => {
									if (catalogs.length > 0) {
										const path = catalogs[0].file_path.startsWith('/') ? catalogs[0].file_path : '/' + catalogs[0].file_path;
										window.open(path, '_blank');
									} else {
										alert('Şu anda indirilebilir katalog bulunmamaktadır.');
									}
								}}
								className="px-8 py-4 font-bold rounded-full transition-all duration-300 border-2"
								style={{ color: 'var(--th-polgun-antrasit)', borderColor: 'var(--th-polgun-antrasit)', backgroundColor: `var(--th-surface)0D`, backdropFilter: 'blur(8px)' }}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor = `var(--th-polgun-antrasit)26`;
									e.currentTarget.style.transform = 'translateY(-4px)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor = `var(--th-surface)0D`;
									e.currentTarget.style.transform = 'translateY(0)';
								}}
							>
								Katalog İndir
							</button>
						</div>
					</div>
				</div>

			</section>

			{/* ── Filtre Şeridi ── */}
			<div
				className="top-[72px] z-30 border-b"
				style={{
					backgroundColor:
						'color-mix(in srgb,var(--th-bg) 95%,transparent)',
					backdropFilter: 'blur(12px)',
					borderColor:
						'color-mix(in srgb,var(--th-border) 10%,transparent)',
				}}
			>
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="flex gap-2 overflow-x-auto py-4 scrollbar-none">
						{CATEGORIES.map((cat) => (
							<button
								key={cat}
								onClick={() => setActiveFilter(cat)}
								className="shrink-0 px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
								style={
									activeFilter === cat
										? {
											backgroundColor: 'var(--th-primary)',
											color: '#fff',
											boxShadow:
												`0 4px 16px var(--th-primary)4D`,
										}
										: { color: 'var(--th-text-muted)' }
								}
								onMouseEnter={(e) => {
									if (activeFilter !== cat)
										e.currentTarget.style.backgroundColor =
											`var(--th-primary-light)`
								}}
								onMouseLeave={(e) => {
									if (activeFilter !== cat)
										e.currentTarget.style.backgroundColor = 'transparent'
								}}
							>
								{cat}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* ── Ürün Grid ── */}
			<section className="py-16 lg:py-24">
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{filtered.map((product, i) => (
							<article
								key={i}
								className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
								style={{
									backgroundColor: 'var(--th-surface)',
									border:
										'1px solid color-mix(in srgb,var(--th-border) 8%,transparent)',
									boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
								}}
								onMouseEnter={(e) =>
								(e.currentTarget.style.boxShadow =
									'0 20px 60px rgba(0,0,0,0.1)')
								}
								onMouseLeave={(e) =>
								(e.currentTarget.style.boxShadow =
									'0 2px 16px rgba(0,0,0,0.04)')
								}
							>
								{/* Gerçek Görsel */}
								<div className="relative h-56 overflow-hidden">
									<img
										src={product.img}
										alt={product.imgAlt}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									{/* Gradient overlay */}
									<div
										className="absolute inset-0"
										style={{
											background:
												'linear-gradient(to top,rgba(0,0,0,0.3) 0%,transparent 60%)',
										}}
									/>
									{/* Badge'ler */}
									<div className="absolute top-4 left-4 flex gap-2">
										{product.badge && (
											<span
												className="text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full"
												style={BADGE_STYLE[product.badge]}
											>
												{product.badge}
											</span>
										)}
										<GlassTag>{product.category}</GlassTag>
									</div>
								</div>

								{/* İçerik */}
								<div className="p-8 flex flex-col grow">
									<p
										className="text-[10px] font-black tracking-[0.2em] uppercase mb-2"
										style={{ color: 'var(--th-polgun-blue)' }}
									>
										{product.sub}
									</p>
									<h2
										className="text-xl font-black mb-3 transition-colors"
										style={{ color: 'var(--th-text)' }}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = 'var(--th-polgun-blue)')
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = 'var(--th-text)')
										}
									>
										{product.title}
									</h2>
									<p
										className="text-sm leading-relaxed mb-6 text-justify"
										style={{
											color:
												'color-mix(in srgb,var(--th-text-muted) 70%,transparent)',
										}}
									>
										{product.desc}
									</p>

									{/* Teknik Özellikler */}
									<div
										className="grid grid-cols-2 gap-px rounded-xl overflow-hidden mb-6"
										style={{
											backgroundColor:
												'color-mix(in srgb,var(--th-border) 8%,transparent)',
										}}
									>
										{product.specs.map((spec) => (
											<div
												key={spec.label}
												className="px-3 py-3"
												style={{ backgroundColor: 'var(--th-bg)' }}
											>
												<div // İçeriğin sığmaması durumunda kelimelerin kırılmasını sağlar
													className="text-[10px] font-semibold uppercase tracking-wider mb-1"
													style={{
														color:
															'color-mix(in srgb,var(--th-text-muted) 60%,transparent)',
													}}
												>
													{spec.label}
												</div>
												<div // İçeriğin sığmaması durumunda kelimelerin kırılmasını sağlar
													className="text-xs font-black"
													style={{ color: 'var(--th-text)' }}
												>
													{spec.val}
												</div>
											</div>
										))}
									</div>

									{/* CTA */}
									<div className="flex gap-3 mt-auto">
										<button
											onClick={() => navigate('/contact')}
											className="flex-1 py-3 text-white text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
											style={{ backgroundColor: 'var(--th-polgun-blue)', boxShadow: `0 0 32px var(--th-polgun-blue)66` }}
											onMouseEnter={(e) =>
											(e.currentTarget.style.backgroundColor =
												'var(--th-primary)')
											}
											onMouseLeave={(e) =>
											(e.currentTarget.style.backgroundColor =
												'var(--th-polgun-blue)')
											}
										>
											Teklif Al
										</button>
										<button
											className="px-5 py-3 text-sm font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"
											style={{
												border:
													`1px solid var(--th-polgun-blue)`,
												color: 'var(--th-polgun-blue)',
											}}
											onMouseEnter={(e) => {
												e.currentTarget.style.borderColor = 'var(--th-primary)';
												e.currentTarget.style.color = 'var(--th-primary)'
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.borderColor =
													`var(--th-polgun-blue)`
												e.currentTarget.style.color = 'var(--th-polgun-blue)'
											}}
										>
											Detaylar
										</button>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* ── Özel Proje CTA ── */}
			<section className="py-32" style={{ backgroundColor: 'var(--th-bg)' }}>
				<div className="max-w-[var(--layout-max)] mx-auto px-6 lg:px-14">
					<div className="relative rounded-3xl overflow-hidden px-12 py-20" style={{ background: `linear-gradient(135deg,var(--th-primary) 0%,var(--th-polgun-blue) 100%)` }}>
						<div className="absolute inset-0 opacity-10">
							<svg
								viewBox="0 0 1400 300"
								className="w-full h-full"
								preserveAspectRatio="xMidYMid slice"
							>
								<circle cx="200" cy="150" r="250" fill="white" />
								<circle cx="1200" cy="150" r="200" fill="white" />
							</svg>
						</div>
						<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
							<div>
								<p
									className="text-[11px] font-black tracking-[0.3em] uppercase mb-3 text-white/50"
								>
									Özel Proje
								</p>
								<h2 className="text-3xl font-black text-white">
									Aradığınızı bulamadınız mı?
								</h2>
								<p className="text-white/40 mt-3 max-w-lg">
									Hayalinizdeki su parkını gerçeğe dönüştürmek için geniş ürün yelpazemizi inceleyin ve projenize en uygun çözümleri birlikte tasarlayalım.
								</p>
							</div>
							<button
								onClick={() => setActivePage('contact')}
								className="shrink-0 px-10 py-4 text-sm font-bold rounded-full transition-all duration-300 hover:-translate-y-1"
								style={{
									backgroundColor: '#FFFFFF',
									color: 'var(--th-primary)',
									boxShadow: `0 0 40px var(--th-primary)33`,
								}}
								onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
								onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
							>
								Özel Çözüm Talep Et
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
