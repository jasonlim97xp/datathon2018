var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
      height:"400px",
    background_color: "#ffffff",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "",
    state_color: "#d8d8d8",
    state_hover_color: "grey",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect"
  },
  state_specific: {
    MYS1139: {
      name: "Pulau Pinang"
    },
    MYS1140: {
      name: "Kedah"
    },
    MYS1141: {
      name: "Perlis"
    },
    MYS1143: {
      name: "Johor"
    },
    MYS1144: {
      name: "Kelantan"
    },
    MYS1145: {
      name: "Melaka"
    },
    MYS1146: {
      name: "Negeri Sembilan"
    },
    MYS1147: {
      name: "Pahang"
    },
    MYS1148: {
      name: "Selangor"
    },
    MYS1149: {
      name: "Terengganu"
    },
    MYS1186: {
      name: "Sabah"
    },
    MYS1187: {
      name: "Sarawak"
    },
    MYS4831: {
      name: "Kuala Lumpur"
    },
    MYS4832: {
      name: "Putrajaya"
    },
    MYS4833: {
      name: "Labuan"
    },
    MYS1137: {
      name: "Perak"
    }
  },
  labels: {},
  regions: {}
};

$.ajax({ 
  type: 'GET', 
    url: 'http://10.112.16.100/datathon/pages/state.php', 
  data: { get_param: 'value' }, 
  dataType: 'json',
  success: function (data) { 
      $.each(data, function(index, element) {
          for(var i=0; i<1; i++){
            if(data[i][0] == "MYS1139"){
              simplemaps_countrymap_mapdata.state_specific.MYS1139.color = "#99ccff";
              simplemaps_countrymap_mapdata.state_specific.MYS1139.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1139.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1140"){
              simplemaps_countrymap_mapdata.state_specific.MYS1140.color = "#ff4d4d";
              simplemaps_countrymap_mapdata.state_specific.MYS1140.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1140.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1141"){
              simplemaps_countrymap_mapdata.state_specific.MYS1141.color = "#4d0000";
              simplemaps_countrymap_mapdata.state_specific.MYS1141.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1141.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1143"){
              simplemaps_countrymap_mapdata.state_specific.MYS1143.color = "#9ee833";
              simplemaps_countrymap_mapdata.state_specific.MYS1143.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1143.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1144"){
              simplemaps_countrymap_mapdata.state_specific.MYS1144.color = "#41e8c2";
              simplemaps_countrymap_mapdata.state_specific.MYS1144.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1144.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1145"){
              simplemaps_countrymap_mapdata.state_specific.MYS1145.color = "#ff8080";
              simplemaps_countrymap_mapdata.state_specific.MYS1145.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1145.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1146"){
              simplemaps_countrymap_mapdata.state_specific.MYS1146.color = "#cc00cc";
              simplemaps_countrymap_mapdata.state_specific.MYS1146.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1146.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1147"){
              simplemaps_countrymap_mapdata.state_specific.MYS1147.color = "#ff2aa3";
              simplemaps_countrymap_mapdata.state_specific.MYS1147.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1147.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1148"){
              simplemaps_countrymap_mapdata.state_specific.MYS1148.color = "#007bff";
              simplemaps_countrymap_mapdata.state_specific.MYS1148.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1148.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1149"){
              simplemaps_countrymap_mapdata.state_specific.MYS1149.color = "#b74c21";
              simplemaps_countrymap_mapdata.state_specific.MYS1149.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1149.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1186"){
              simplemaps_countrymap_mapdata.state_specific.MYS1186.color = "#e60000";
              simplemaps_countrymap_mapdata.state_specific.MYS1186.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1186.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1187"){
              simplemaps_countrymap_mapdata.state_specific.MYS1187.color = "#ff8533";
              simplemaps_countrymap_mapdata.state_specific.MYS1187.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1187.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS4831"){
              simplemaps_countrymap_mapdata.state_specific.MYS4831.color = "#99ccff";
              simplemaps_countrymap_mapdata.state_specific.MYS4831.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS4831.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS4832"){
              simplemaps_countrymap_mapdata.state_specific.MYS4832.color = "#ffb3b3";
              simplemaps_countrymap_mapdata.state_specific.MYS4832.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS4832.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS4833"){
              simplemaps_countrymap_mapdata.state_specific.MYS4833.color = "#33cc33";
              simplemaps_countrymap_mapdata.state_specific.MYS4833.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS4833.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1137"){
              simplemaps_countrymap_mapdata.state_specific.MYS1137.color = "#ffd52a";
              simplemaps_countrymap_mapdata.state_specific.MYS1137.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1137.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }

            // console.log(data[i][0]);
          }
          for(var i=0; i<data.length; i++){
            if(data[i][0] == "MYS1139"){
              simplemaps_countrymap_mapdata.state_specific.MYS1139.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1139.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1140"){
              simplemaps_countrymap_mapdata.state_specific.MYS1140.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1140.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1141"){
              simplemaps_countrymap_mapdata.state_specific.MYS1141.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1141.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1143"){
              simplemaps_countrymap_mapdata.state_specific.MYS1143.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1143.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1144"){
              simplemaps_countrymap_mapdata.state_specific.MYS1144.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1144.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1145"){
              simplemaps_countrymap_mapdata.state_specific.MYS1145.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1145.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1146"){
              simplemaps_countrymap_mapdata.state_specific.MYS1146.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1146.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1147"){
              simplemaps_countrymap_mapdata.state_specific.MYS1147.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1147.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1148"){
              simplemaps_countrymap_mapdata.state_specific.MYS1148.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1148.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1149"){
              simplemaps_countrymap_mapdata.state_specific.MYS1149.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1149.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1186"){
              simplemaps_countrymap_mapdata.state_specific.MYS1186.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1186.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1187"){
              simplemaps_countrymap_mapdata.state_specific.MYS1187.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1187.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS4831"){
              simplemaps_countrymap_mapdata.state_specific.MYS4831.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS4831.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS4832"){
              simplemaps_countrymap_mapdata.state_specific.MYS4832.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS4832.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS4833"){
              simplemaps_countrymap_mapdata.state_specific.MYS4833.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS4833.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
            else if(data[i][0] == "MYS1137"){
              simplemaps_countrymap_mapdata.state_specific.MYS1137.inactive = "no";
              simplemaps_countrymap_mapdata.state_specific.MYS1137.description = "Ranking: "+data[i][3] +"<br>Population: "+data[i][2];
            }
          }
          
      });
  }
});


// simplemaps_countrymap_mapdata.state_specific.MYS1148.color = "blue";
console.log(simplemaps_countrymap_mapdata.state_specific.MYS1148);