import React, {Component} from 'react';
import {BASEPATH} from '../config/constants'

class GoogleMapComp extends Component {
    constructor() {
        super();
        this.state = {
          zoom: 2,
          center: {lat: 60, lng: 0},
        }
      }

    componentDidMount() {
        this.createMap();
        console.log('component mounted', this.props.selectedFloor)

      }
      
      componentDidUpdate(prevProps) {
        if(this.props.selectedFloor !== prevProps.selectedFloor)
        {
          this.createMap();
        }
        if (this.props.canDraw !== prevProps.canDraw){
          this.createMap();
        }
        if (this.props.selectedBomb !== prevProps.selectedBomb){
          this.createMap();
        }
        if (this.props.selectedSecure !== prevProps.selectedSecure){
          this.createMap();
        }
        if (this.props.selectedHostage !== prevProps.selectedHostage){
          this.createMap();
        }
        if (this.props.selectedAtk !== prevProps.selectedAtk){
          this.createMap();
        }
        
      } 

      createMap(){
        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: this.state.center,
          zoom: this.state.zoom,
          streetViewControl: false,
          mapTypeControlOptions: {
            mapTypeIds: [this.props.selectedFloor.name]
          }
        });
        const floorimg = `${BASEPATH}${this.props.selectedFloor.img}`
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
          
          map.addListener('center_changed', () => {
            this.setState({
              center: map.getCenter(),
            });
          });
          let colorChoice = this.props.selectedColor
          if (this.props.canDraw == true){
            (function(m,o){
              var goo   = window.google.maps,
                  _this ={cache   : {},
                          map     : m,
                          options : o||{strokeColor: colorChoice },
                          poly    : false,
                          draw    : function(e){
                                      if(!e || !this.poly){
                                        this.poly=false;
                                        return;
                                      }
                                      var l = this.cache[this.poly],
                                          p = l.getPath();
                                          p.insertAt(p.getLength(),e.latLng);
                                          l.setPath(p);
                                    },
                          init    : function(e){
                                      var options           = this.options;
                                          options.map       = this.map;
                                          options.clickable = false;
                                      
                                      this.poly ='p'  + new Date().getTime();
                                  
                                      this.cache[this.poly]=
                                        new goo.Polyline(options);
                                        this.draw(e);
                                    }
                              
                       };
              goo.event.addListener(m,'mousemove',function(e){_this.draw(e);})        
              goo.event.addListener(m,'mouseup',  function(e){_this.draw(0);})        
              goo.event.addListener(m,'mouseout', function(e){_this.draw(0);})        
              goo.event.addListener(m,'mousedown',function(e){_this.init(e);}) 
              m.setOptions({draggable:false});
              return _this;
            })(map)
          }

          var bombIcon = new window.google.maps.MarkerImage(`${BASEPATH}/images/bomb.png`, null, null, null, new window.google.maps.Size(43,70));
          var secureIcon = new window.google.maps.MarkerImage(`${BASEPATH}/images/securearea.png`, null, null, null, new window.google.maps.Size(55,70));
          var hostageIcon = new window.google.maps.MarkerImage(`${BASEPATH}/images/hostage.png`, null, null, null, new window.google.maps.Size(55,70));
          var atkIcon = new window.google.maps.MarkerImage(`${BASEPATH}/images/atk.png`, null, null, null, new window.google.maps.Size(55,70));
           
          // conditional statement for bomb site 3

          if( this.props.selectedFloor === this.props.map.floors[0] && this.props.selectedBomb === this.props.map.bombsites[2]){

          let marker1 = new window.google.maps.Marker({
            position: {lat: 63, lng: -20},
            map: map,
            title: '3A',
            icon: bombIcon,
                    });

          let marker2 = new window.google.maps.Marker({
              position: {lat: 55, lng: 10},
              map: map,
              title: '3B',
              icon: bombIcon,
                              });
          } 
            // conditional statement for bomb site 2
            
          if( this.props.selectedFloor === this.props.map.floors[0] && this.props.selectedBomb === this.props.map.bombsites[1]){
 
          let marker1 = new window.google.maps.Marker({
            position: {lat: 63, lng: -20},
            map: map,
            title: '3A',
            icon: bombIcon,
                    });
          }

            // conditional statement for bomb site 2-2
            
            if( this.props.selectedFloor === this.props.map.floors[1] && this.props.selectedBomb === this.props.map.bombsites[1]){

              let marker1 = new window.google.maps.Marker({
                position: {lat: 63, lng: -20},
                map: map,
                title: '3A',
                icon: bombIcon,
                        });
              }

            // conditional statement for bomb site 1
            
            if( this.props.selectedFloor === this.props.map.floors[2] && this.props.selectedBomb === this.props.map.bombsites[0]){

              let marker1 = new window.google.maps.Marker({
                position: {lat: 67, lng: -23},
                map: map,
                title: '3A',
                icon: bombIcon,
                        });

              let marker2 = new window.google.maps.Marker({
                  position: {lat: 53, lng: -20},
                  map: map,
                  title: '3B',
                  icon: bombIcon,
                        });

              }

               // conditional statement for secure 1
            
            if( this.props.selectedFloor === this.props.map.floors[0] && this.props.selectedSecure === this.props.map.securearea.area1){

              let marker1 = new window.google.maps.Marker({
                position: {lat: 55, lng: 6},
                map: map,
                title: '3A',
                icon: secureIcon,
                        });

              }
                // conditional statement for secure 2
            
            if( this.props.selectedFloor === this.props.map.floors[1] && this.props.selectedSecure === this.props.map.securearea.area2){

              let marker1 = new window.google.maps.Marker({
                position: {lat: 63, lng: -18},
                map: map,
                title: '3A',
                icon: secureIcon,
                        });

              }    

                  // conditional statement for secure 3
            
            if( this.props.selectedFloor === this.props.map.floors[2] && this.props.selectedSecure === this.props.map.securearea.area3){

              let marker1 = new window.google.maps.Marker({
                position: {lat: 50, lng: -18},
                map: map,
                title: '3A',
                icon: secureIcon,
                        });

              } 
                  // conditional statement for secure 4
            
            if( this.props.selectedFloor === this.props.map.floors[2] && this.props.selectedSecure === this.props.map.securearea.area4){

              let marker1 = new window.google.maps.Marker({
                position: {lat: 55, lng: 8},
                map: map,
                title: '3A',
                icon: secureIcon,
                        });

              } 

                  // conditional statement for hostage 1
            
            if( this.props.selectedFloor === this.props.map.floors[0] && this.props.selectedHostage === this.props.map.hostage.area1){

                    let marker1 = new window.google.maps.Marker({
                      position: {lat: 55, lng: -8},
                      map: map,
                      title: '3A',
                      icon: hostageIcon,
                              });
      
                    } 

            // conditional statement for hostage 2
            
            if( this.props.selectedFloor === this.props.map.floors[1] && this.props.selectedHostage === this.props.map.hostage.area2){

              let marker1 = new window.google.maps.Marker({
                position: {lat: 55, lng: 14},
                map: map,
                title: '3A',
                icon: hostageIcon,
                        });

              } 

            // conditional statement for hostage 3
            
            if( this.props.selectedFloor === this.props.map.floors[2] && this.props.selectedHostage === this.props.map.hostage.area3){

              let marker1 = new window.google.maps.Marker({
                position: {lat: 64, lng: -22},
                map: map,
                title: '3A',
                icon: hostageIcon,
                        });

              } 

              // conditional statement for hostage 4
            
            if( this.props.selectedFloor === this.props.map.floors[2] && this.props.selectedHostage === this.props.map.hostage.area4){

              let marker1 = new window.google.maps.Marker({
                position: {lat: 55, lng: 14},
                map: map,
                title: '3A',
                icon: hostageIcon,
                        });

              } 

               // conditional statement for Atk1
            
            if(this.props.selectedAtk === this.props.map.atkspawns.atkspawn1){

              let marker1 = new window.google.maps.Marker({
                position: {lat: -10, lng: -18},
                map: map,
                title: '3A',
                icon: atkIcon,
                        });

              }

               // conditional statement for Atk2
            
            if(this.props.selectedAtk === this.props.map.atkspawns.atkspawn2){

              let marker1 = new window.google.maps.Marker({
                position: {lat: 80, lng: -18},
                map: map,
                title: '3A',
                icon: atkIcon,
                        });

              }

                // conditional statement for Atk3
            
            if(this.props.selectedAtk === this.props.map.atkspawns.atkspawn3){

              let marker1 = new window.google.maps.Marker({
                position: {lat: -10, lng: 60},
                map: map,
                title: '3A',
                icon: atkIcon,
                        });

              }
              // conditional statement for Atk3
            
            if(this.props.selectedAtk === this.props.map.atkspawns.atkspawn4){

              let marker1 = new window.google.maps.Marker({
                position: {lat: 18, lng: 80},
                map: map,
                title: '3A',
                icon: atkIcon,
                        });

              }
      }
  render(){
    return(
        <div id='app'>
        <div id='map'>
        <canvas className="canvas"/>
        </div>
      </div>
    )
  }
}


export default GoogleMapComp