var wms_layers = [];

var lyr_plantilla_modified_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "plantilla_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/plantilla_modified_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8581174.270284, 2257716.530481, -8387832.733132, 2342100.917442]
                            })
                        });

lyr_plantilla_modified_0.setVisible(true);
var layersList = [lyr_plantilla_modified_0];
