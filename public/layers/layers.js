var wms_layers = [];


        var lyr_ESRITerrain_0 = new ol.layer.Tile({
            'title': 'ESRI Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_colespopulation_1 = new ol.format.GeoJSON();
var features_colespopulation_1 = format_colespopulation_1.readFeatures(json_colespopulation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colespopulation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colespopulation_1.addFeatures(features_colespopulation_1);
var lyr_colespopulation_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colespopulation_1, 
                style: style_colespopulation_1,
                interactive: true,
    title: 'Écoles population<br />\
    <img src="styles/legend/colespopulation_1_0.png" /> Pas de données<br />\
    <img src="styles/legend/colespopulation_1_1.png" /> 0.030 - 0.060<br />\
    <img src="styles/legend/colespopulation_1_2.png" /> 0.060 - 0.090<br />\
    <img src="styles/legend/colespopulation_1_3.png" /> 0.090 - 0.120<br />\
    <img src="styles/legend/colespopulation_1_4.png" /> 0.120 - 0.190<br />\
    <img src="styles/legend/colespopulation_1_5.png" /> 0.190 - 0.340<br />'
        });
var format_Rgion_2 = new ol.format.GeoJSON();
var features_Rgion_2 = format_Rgion_2.readFeatures(json_Rgion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rgion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rgion_2.addFeatures(features_Rgion_2);
var lyr_Rgion_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rgion_2, 
                style: style_Rgion_2,
                interactive: true,
                title: '<img src="styles/legend/Rgion_2.png" /> Région'
            });

lyr_ESRITerrain_0.setVisible(true);lyr_colespopulation_1.setVisible(true);lyr_Rgion_2.setVisible(true);
var layersList = [lyr_ESRITerrain_0,lyr_colespopulation_1,lyr_Rgion_2];
lyr_colespopulation_1.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Écoles population': 'Écoles population', 'image_path': 'image_path', });
lyr_Rgion_2.set('fieldAliases', {'adm_01': 'Région', });
lyr_colespopulation_1.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Écoles population': 'TextEdit', 'image_path': 'TextEdit', });
lyr_Rgion_2.set('fieldImages', {'adm_01': 'TextEdit', });
lyr_colespopulation_1.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Écoles population': 'inline label', 'image_path': 'no label', });
lyr_Rgion_2.set('fieldLabels', {'adm_01': 'inline label', });
lyr_Rgion_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});