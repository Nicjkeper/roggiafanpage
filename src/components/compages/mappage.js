import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Importa gli stili di Leaflet
import roggiamadre from './favicon.ico'
import galati from './galati.jpg'
import giurgeni from './giurgenidanubio.jpg'
import giurgeniroggia from './giurgeni.jpg'
import borgolavezzaro from './borgolavezzaro.jpg'
import tandarei from './Tandarei.jpg'
import arona from './arona.jpg'
import albonese from './albonese.jpg'
import canalgrande from './canalgrande.jpg'
import naviglio from './naviglio.jpg'
import piccolini from './piccolini.jpg'
import satanici from './666.jpg'
import rggrande from './rggrande.jpg'
import morsella from './morsella.jpg'
import pontetresa from './pontetresa.jpg'
import ferrera from './ferrera.jpg'
import muline from './muline.jpg'
import ardesio from './ardesio.jpg'
import grave from './grave.jpg'
import fucine from './fucine.jpg'
const Mappage = () => {
  useEffect(() => {
    // Inizializza la mappa
    const map = L.map('map').setView([60, 90], 60);

    // Aggiungi il layer di OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Aggiungi i tuoi avamposti personalizzati
    const customMarker = L.icon({
      iconUrl: roggiamadre,
      iconSize: [60, 60], // Dimensioni dell'icona del marker
      iconAnchor: [10, 10], // Punto di ancoraggio dell'icona (dove il marker tocca la mappa)
    });

    const galatiMarker = L.icon({
      iconUrl: galati,
      iconSize: [60, 60], // Dimensioni dell'icona del marker
      iconAnchor: [10, 10], // Punto di ancoraggio dell'icona (dove il marker tocca la mappa)
    });

    const giurgeniMarker = L.icon({
      iconUrl: giurgeni,
      iconSize: [60,60],
      iconAnchor: [10,10],
    })

    const giurgeniroggiaMarker = L.icon ({
      iconUrl: giurgeniroggia,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })

    const tandareiMarker = L.icon ({
      iconUrl: tandarei,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })
    const borgoMarker = L.icon ({
      iconUrl: borgolavezzaro,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })

    const AlboneseMarker = L.icon ({
      iconUrl: albonese,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })

    const AronaMarker = L.icon ({
      iconUrl: arona,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })

    const CanalGrandeMarker = L.icon ({
      iconUrl: canalgrande,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })

    const NaviglioGrandeMarker = L.icon ({
      iconUrl: naviglio,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })
    
    const PiccoliniMarker = L.icon ({
      iconUrl: piccolini,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })

    const MorsellaMarker = L.icon ({
      iconUrl: morsella,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })

    const RggrandeMarker = L.icon ({
      iconUrl: rggrande,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })

    const SataniciMarker = L.icon ({
      iconUrl: satanici,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })
    const LagoLuganoMarker = L.icon ({
      iconUrl: pontetresa,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })
    const FerreraMarker = L.icon ({
      iconUrl: ferrera,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })
    const MulineMarker = L.icon ({
      iconUrl: muline,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })
    const ArdesioMarker = L.icon ({
      iconUrl: ardesio,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })
    const GraveCasalMarker = L.icon ({
      iconUrl: grave,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })
    const FucineMarker = L.icon ({
      iconUrl: grave,
      iconSize: [60,60],
      iconAnchor: [10,10]
    })

    const LATITUDE_AVAMPOSTO_1 = 45.316494342749564; // Sostituisci con la latitudine del primo avamposto
    const LONGITUDE_AVAMPOSTO_1 = 8.738621920089287; // Sostituisci con la longitudine del primo avamposto
    const LATITUDE_AVAMPOSTO_2 = 45.435142582118694;
    const LONGITUDE_AVAMPOSTO_2 = 28.06650869415713;
    const LATITUDE_AVAMPOSTO_3 = 44.75053963406961;
    const LONGITUDE_AVAMPOSTO_3 = 27.871714181437984;
    const LATITUDE_AVAMPOSTO_4 = 44.703426389822255;
    const LONGITUDE_AVAMPOSTO_4 = 27.846889775027176;
    const LATITUDE_AVAMPOSTO_5 = 45.431581803554984; 
    const LONGITUDE_AVAMPOSTO_5 = 12.328858243155569;
    const LATITUDE_AVAMPOSTO_6 = 44.638683336237825;
    const LONGITUDE_AVAMPOSTO_6 = 27.62444669183102;
    const LATITUDE_AVAMPOSTO_7 = 45.32313708616848;
    const LONGITUDE_AVAMPOSTO_7= 8.721044177151642;
    const LATITUDE_AVAMPOSTO_8 = 45.29543785176539; 
    const LONGITUDE_AVAMPOSTO_8 = 8.709263523014927;
    const LATITUDE_AVAMPOSTO_9 = 45.39778496723913;
    const LONGITUDE_AVAMPOSTO_9 = 8.92836046288537;
    const LATITUDE_AVAMPOSTO_10 = 45.324854181529425;
    const LONGITUDE_AVAMPOSTO_10 = 8.818204346360128;
    const LATITUDE_AVAMPOSTO_11 = 45.31487947508824;
    const LONGITUDE_AVAMPOSTO_11= 8.753897548612139;
    const LATITUDE_AVAMPOSTO_12 = 45.306015468856174;
    const LONGITUDE_AVAMPOSTO_12= 8.749256522874012;
    const LATITUDE_AVAMPOSTO_13 = 45.285853853920386;
    const LONGITUDE_AVAMPOSTO_13 = 8.817858944007115;
    const LATITUDE_AVAMPOSTO_14 = 45.964604921121314;
    const LONGITUDE_AVAMPOSTO_14= 8.8591773021845;
    const LATITUDE_AVAMPOSTO_15 = 45.93618533923536;
    const LONGITUDE_AVAMPOSTO_15= 8.786671474744667;
    const LATITUDE_AVAMPOSTO_16 = 45.75895422890405;
    const LONGITUDE_AVAMPOSTO_16 =  8.55765564172761;
    const LATITUDE_AVAMPOSTO_17 = 45.330448032919556;
    const LONGITUDE_AVAMPOSTO_17 = 8.76534828915868;
    const LATITUDE_AVAMPOSTO_18 = 45.94598881652982;
    const LONGITUDE_AVAMPOSTO_18=  9.924835110580691;
    const LATITUDE_AVAMPOSTO_19 = 45.335133096835;
    const LONGITUDE_AVAMPOSTO_19 = 8.762885126588932;
    const LATITUDE_AVAMPOSTO_20 = 45.68980589910301;
    const LONGITUDE_AVAMPOSTO_20= 10.31086857515072;


    const avamposto1 = L.marker([LATITUDE_AVAMPOSTO_1, LONGITUDE_AVAMPOSTO_1], {
      icon: customMarker,
    }).addTo(map);

    const avamposto2 = L.marker([LATITUDE_AVAMPOSTO_2, LONGITUDE_AVAMPOSTO_2], {
      icon: galatiMarker,
    }).addTo(map);
    
    const avamposto3 = L.marker([LATITUDE_AVAMPOSTO_3, LONGITUDE_AVAMPOSTO_3],{
      icon: giurgeniMarker,
    }).addTo(map);
    // Aggiungi altri avamposti come sopra...
    const avamposto4 = L.marker([LATITUDE_AVAMPOSTO_4, LONGITUDE_AVAMPOSTO_4],{
      icon: giurgeniroggiaMarker,
    }).addTo(map);
    const avamposto5 = L.marker([LATITUDE_AVAMPOSTO_5, LONGITUDE_AVAMPOSTO_5],{
      icon: CanalGrandeMarker,
    }).addTo(map);
    const avamposto6 = L.marker([LATITUDE_AVAMPOSTO_6, LONGITUDE_AVAMPOSTO_6],{
      icon: tandareiMarker,
    }).addTo(map);
    const avamposto7 = L.marker([LATITUDE_AVAMPOSTO_7, LONGITUDE_AVAMPOSTO_7],{
      icon: borgoMarker,
    }).addTo(map);
    const avamposto8 = L.marker([LATITUDE_AVAMPOSTO_8, LONGITUDE_AVAMPOSTO_8],{
      icon: AlboneseMarker,
    }).addTo(map);
    const avamposto9 = L.marker([LATITUDE_AVAMPOSTO_9, LONGITUDE_AVAMPOSTO_9],{
      icon: NaviglioGrandeMarker,
    }).addTo(map);
    const avamposto10 = L.marker([LATITUDE_AVAMPOSTO_10, LONGITUDE_AVAMPOSTO_10],{
      icon: PiccoliniMarker,
    }).addTo(map);
    const avamposto11 = L.marker([LATITUDE_AVAMPOSTO_11, LONGITUDE_AVAMPOSTO_11],{
      icon: RggrandeMarker,
    }).addTo(map);
    const avamposto12 = L.marker([LATITUDE_AVAMPOSTO_12, LONGITUDE_AVAMPOSTO_12],{
      icon: SataniciMarker,
    }).addTo(map);
    const avamposto13 = L.marker([LATITUDE_AVAMPOSTO_13, LONGITUDE_AVAMPOSTO_13],{
      icon: MorsellaMarker,
    }).addTo(map);
    const avamposto14 = L.marker([LATITUDE_AVAMPOSTO_14, LONGITUDE_AVAMPOSTO_14],{
      icon: LagoLuganoMarker,
    }).addTo(map);
    const avamposto15 = L.marker([LATITUDE_AVAMPOSTO_15, LONGITUDE_AVAMPOSTO_15],{
      icon: FerreraMarker,
    }).addTo(map);
    const avamposto16 = L.marker([LATITUDE_AVAMPOSTO_16, LONGITUDE_AVAMPOSTO_16],{
      icon: AronaMarker,
    }).addTo(map);
    const avamposto17 = L.marker([LATITUDE_AVAMPOSTO_17, LONGITUDE_AVAMPOSTO_17],{
      icon: MulineMarker,
    }).addTo(map);
    const avamposto18 = L.marker([LATITUDE_AVAMPOSTO_18, LONGITUDE_AVAMPOSTO_18],{
      icon: ArdesioMarker,
    }).addTo(map);
    const avamposto19 = L.marker([LATITUDE_AVAMPOSTO_19, LONGITUDE_AVAMPOSTO_19],{
      icon: GraveCasalMarker,
    }).addTo(map);
    const avamposto20 = L.marker([LATITUDE_AVAMPOSTO_20, LONGITUDE_AVAMPOSTO_20],{
      icon: FucineMarker,
    }).addTo(map);
        // Puoi anche aggiungere una popup personalizzata per ciascun avamposto
    avamposto1.bindPopup('Roggia Madre').openPopup();
    avamposto2.bindPopup('Danubio Galati').openPopup();
    avamposto3.bindPopup('Danubio Giurgeni').openPopup();
    avamposto4.bindPopup('Roggia di Giurgeni').openPopup();
    avamposto5.bindPopup('Canal Grande di Venezia').openPopup();
    avamposto6.bindPopup('Roggia di Tandarei').openPopup();
    avamposto7.bindPopup('Roggia di Borgolavezzaro 1').openPopup();
    avamposto8.bindPopup('Roggia di Albonese 1').openPopup();
    avamposto9.bindPopup('Naviglio grande (Abbiategrasso)').openPopup();
    avamposto10.bindPopup('Roggia di Piccolini').openPopup();
    avamposto11.bindPopup('Dir. QUintino Sella (Cilavegna)').openPopup();
    avamposto12.bindPopup('Roggia dei riti satanici (666)').openPopup();
    avamposto13.bindPopup('Roggia di Morsella').openPopup();
    avamposto14.bindPopup('Lago di Lugano').openPopup();
    avamposto15.bindPopup('Cascata di Ferrera di Varese').openPopup();
    avamposto16.bindPopup('Roggia del lungolago di Arona').openPopup();
    avamposto17.bindPopup('Roggia del Parco dei tre Laghi di Gravellona Lomellina').openPopup();
    avamposto18.bindPopup('Fiume serio in val Brembana').openPopup();
    avamposto19.bindPopup('Roggia Gravellonese Casalinga').openPopup();
    avamposto20.bindPopup('Roggia del Parco Delle Fucine (BS)').openPopup();

    // Aggiungi altre popups come sopra...
  }, []);

  return <div id="map" style={{ width: '1600px', height: '600px' }}></div>;
};

export default Mappage;
