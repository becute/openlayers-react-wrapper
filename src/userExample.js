import * as React from 'react';
import * as ol from './ol';
import 'ol/ol.css';
import ol_source_Vector from 'ol/source/vector'
import ol_format_geojson from 'ol/format/geojson';
import ol_source_OSM from 'ol/source/osm';

var geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              103.833444444,
              1.41183333333
            ],
            [
              103.83410365652763,
              1.4119743541165486
            ],
            [
              103.83411797314798,
              1.4118570046172196
            ],
            [
              103.8341118249254,
              1.4117389358806165
            ],
            [
              103.83408539867354,
              1.4116237353653993
            ],
            [
              103.83403949734344,
              1.4115149033802645
            ],
            [
              103.83397551562591,
              1.4114157467289252
            ],
            [
              103.83389539757432,
              1.411329278234677
            ],
            [
              103.83385003093449,
              1.411291640411312
            ],
            [
              103.833444444,
              1.41183333333
            ]
          ]
        ]
      },
      "properties": {
        	"id": "4@735883",
        	"name": "735883-4(4)",
       }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              103.833444444,
              1.41183333333
            ],
            [
              103.83280348921164,
              1.4120429311164207
            ],
            [
              103.83284939049463,
              1.4121517631256126
            ],
            [
              103.83291337218456,
              1.4122509198075053
            ],
            [
              103.83299349023143,
              1.4123373883351167
            ],
            [
              103.83308731028912,
              1.4124085414044851
            ],
            [
              103.83319198168182,
              1.4124622170641512
            ],
            [
              103.83330432402043,
              1.4124967844051368
            ],
            [
              103.83336231138921,
              1.4125065505558028
            ],
            [
              103.833444444,
              1.41183333333
            ]
          ]
        ]
      },
      "properties": {
        "id": "6@735883",
        "name": "735883-6(6)",
        "coordinate": {
          "lon": 103.83308731028912,
          "lat": 1.4124085414044851
        }},
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              103.833444444,
              1.41183333333
            ],
            [
              103.8345431315902,
              1.412068367869657
            ],
            [
              103.83456699258755,
              1.4118727853662885
            ],
            [
              103.83455674551244,
              1.4116760041405676
            ],
            [
              103.83451270172546,
              1.4114840032900233
            ],
            [
              103.83443619948245,
              1.4113026166615021
            ],
            [
              103.83432956327127,
              1.411137355592911
            ],
            [
              103.83419603318265,
              1.4109932414543636
            ],
            [
              103.83412042211988,
              1.4109305117579085
            ],
            [
              103.833444444,
              1.41183333333
            ]
          ]
        ]
      },
      "properties": {
        "id": "14@735883",
        "name": "735883-14(14)",
        "coordinate": {
          "lon": 103.83443619948245,
          "lat": 1.4113026166615021
        },
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              103.833444444,
              1.41183333333
            ],
            [
              103.83291711836134,
              1.4108352007840312
            ],
            [
              103.83275291309316,
              1.4109425225619652
            ],
            [
              103.83260971961789,
              1.4110769111671613
            ],
            [
              103.83249188879626,
              1.4112342832740337
            ],
            [
              103.83240300086047,
              1.4114098572147762
            ],
            [
              103.83234575663047,
              1.4115982982674373
            ],
            [
              103.83232189545026,
              1.4117938807483321
            ],
            [
              103.83232275051145,
              1.4118924964987811
            ],
            [
              103.833444444,
              1.41183333333
            ]
          ]
        ]
      },
      "properties": {
        "id": "15@735883",
        "name": "735883-15(15)",
        "coordinate": {
          "lon": 103.83240300086047,
          "lat": 1.4114098572147762
        },
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              103.833444444,
              1.41183333333
            ],
            [
              103.83237618595562,
              1.4121826628750327
            ],
            [
              103.83245268806775,
              1.412364049570381
            ],
            [
              103.8325593242023,
              1.4125293107238421
            ],
            [
              103.83269285427777,
              1.412673424955064
            ],
            [
              103.83284922105098,
              1.4127920134218763
            ],
            [
              103.8330236733943,
              1.41288147286969
            ],
            [
              103.83321091065656,
              1.41293908511506
            ],
            [
              103.8333075562891,
              1.4129553620358735
            ],
            [
              103.833444444,
              1.41183333333
            ]
          ]
        ]
      },
      "properties": {
        "id": "16@735883",
        "name": "735883-16(16)",
        "coordinate": {
          "lon": 103.83284922105098,
          "lat": 1.4127920134218763
        },
      }
    },
    ]
}
var vectorSource = new ol_source_Vector({
	defaultDataProjection: 'EPSG:4326',
	features: (new ol_format_geojson()).readFeatures(geojson)
});


class MapWrap extends React.Component{
  constructor(props){
    super(props);
    this.state = { fullscreen : false}
  }

  componentDidMount() {
    console.log('userExample Did ')
  }

  singleClick(e) {
    this.props.mapComponent.map.forEachFeatureAtPixel(e.pixel,function(){
      console.log('you click a feature');
    });
  }

  enableFullStreen() {
    this.setState({
      fullscreen : true
    })
  }

  render() {
    console.log('userExample render ')
    return (
        <div>
        <ol.Map onClick={this.singleClick.bind(this)}>
          <ol.Layers>
          <ol.Layer.Vector name="cell" source={vectorSource}/>
            {
              (this.state.fullscreen) ? (
                <ol.Layer.Tile name="osm" source={new ol_source_OSM()}/>	
              ) :
              null
            }  
          </ol.Layers>
          <ol.View projection="EPSG:4326" center = {[103.83308731028912,1.4124085414044851]} zoom={16} />
        </ol.Map>
        <button onClick={() => this.enableFullStreen()}></button>
        </div>
    );
  }
}
 
export default props => (
  <ol.MapContext.Consumer>
    {mapComponent => <MapWrap mapComponent={mapComponent}/>}
  </ol.MapContext.Consumer>
)

