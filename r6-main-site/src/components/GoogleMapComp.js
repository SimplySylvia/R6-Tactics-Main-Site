import React, {Component} from 'react';

class GoogleMapComp extends Component {
    constructor() {
        super();
        this.state = {
          zoom: 1,
          maptype: [],
        }
      }

    componentDidMount() {
      this.createMap();
        
      }

      componentWillReceiveProps(nextProps) {
        if(JSON.stringify(this.props.selectedFloor) !== JSON.stringify(nextProps.selectedFloor))
        {
               this.createMap();
        }
      } 

      createMap(){
        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 60, lng: 0},
          zoom: 2,
          streetViewControl: false,
          mapTypeControlOptions: {
            mapTypeIds: [this.props.selectedFloor.name]
          }
        });
        const floorimg = `http://localhost:8000${this.props.selectedFloor.img}`
        var MapType = new window.google.maps.ImageMapType({
            getTileUrl: function(coord, zoom) {
                var normalizedCoord = getNormalizedCoord(coord, zoom);
                if (!normalizedCoord) {
                  return null;
                }
                var bound = Math.pow(2, zoom);
                return floorimg +
                       zoom + '/tile_' + normalizedCoord.x + '_' +
                    (normalizedCoord.y) + '.png';
            },
            tileSize: new window.google.maps.Size(256, 256),
            maxZoom: 4,
            minZoom: 2,
            radius: 1738000,
            name: this.props.selectedFloor.name
          });
        
          map.mapTypes.set(this.props.selectedFloor.name, MapType);
          map.setMapTypeId(this.props.selectedFloor.name);
          

          // Normalizes the coords that tiles repeat across the x axis (horizontally)
            // like the standard Google map tiles.
            function getNormalizedCoord(coord, zoom) {
                var y = coord.y;
                var x = coord.x;
            
                // tile range in one direction range is dependent on zoom level
                // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
                var tileRange = 1 << zoom;
            
                // don't repeat across y-axis (vertically)
                if (y < 0 || y >= tileRange) {
                return null;
                }
            
                // repeat across x-axis
                if (x < 0 || x >= tileRange) {
                x = (x % tileRange + tileRange) % tileRange;
                }
            
                return {x: x, y: y};
            }
        
        map.addListener('zoom_changed', () => {
            this.setState({
              zoom: map.getZoom(),
            });
          });
          
          map.addListener('maptypeid_changed', () => {
            this.setState({
              maptype: map.getMapTypeId(),
            });
          });
      }
  render(){
    //render out the div with the idea so the div is being created when the function is ran solving nonrender issue
    //<div id='map' />
    return(
        <div id='app'>
        <h2>{this.props.selectedFloor.name}</h2>
        <div id='map' />
      </div>
    )
  }
}


export default GoogleMapComp