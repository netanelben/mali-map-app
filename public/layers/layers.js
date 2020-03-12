var wms_layers = [];


        var lyr_Cartedebase_0 = new ol.layer.Tile({
            'title': 'Carte de base',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_colesaveccomitte_1 = new ol.format.GeoJSON();
var features_colesaveccomitte_1 = format_colesaveccomitte_1.readFeatures(json_colesaveccomitte_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colesaveccomitte_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colesaveccomitte_1.addFeatures(features_colesaveccomitte_1);
var lyr_colesaveccomitte_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colesaveccomitte_1, 
                style: style_colesaveccomitte_1,
                interactive: true,
    title: 'Écoles avec comittée (%)<br />\
    <img src="styles/legend/colesaveccomitte_1_0.png" /> Pas de données<br />\
    <img src="styles/legend/colesaveccomitte_1_1.png" /> 0 - 10 <br />\
    <img src="styles/legend/colesaveccomitte_1_2.png" /> 10 - 59 <br />\
    <img src="styles/legend/colesaveccomitte_1_3.png" /> 59 - 79 <br />\
    <img src="styles/legend/colesaveccomitte_1_4.png" /> 79 - 92 <br />\
    <img src="styles/legend/colesaveccomitte_1_5.png" /> 92 - 100 <br />'
        });
var format_Tauxdescolardifffillgar_2 = new ol.format.GeoJSON();
var features_Tauxdescolardifffillgar_2 = format_Tauxdescolardifffillgar_2.readFeatures(json_Tauxdescolardifffillgar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tauxdescolardifffillgar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tauxdescolardifffillgar_2.addFeatures(features_Tauxdescolardifffillgar_2);
var lyr_Tauxdescolardifffillgar_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tauxdescolardifffillgar_2, 
                style: style_Tauxdescolardifffillgar_2,
                interactive: true,
    title: 'Taux de scolar. diff fill gar<br />\
    <img src="styles/legend/Tauxdescolardifffillgar_2_0.png" /> Pas de données<br />\
    <img src="styles/legend/Tauxdescolardifffillgar_2_1.png" /> -81.0 - -46.4 <br />\
    <img src="styles/legend/Tauxdescolardifffillgar_2_2.png" /> -46.4 - -26.4 <br />\
    <img src="styles/legend/Tauxdescolardifffillgar_2_3.png" /> -26.4 - -11.0<br />\
    <img src="styles/legend/Tauxdescolardifffillgar_2_4.png" /> -11.0 - 0.0 <br />\
    <img src="styles/legend/Tauxdescolardifffillgar_2_5.png" /> 0 - 18.7 <br />\
    <img src="styles/legend/Tauxdescolardifffillgar_2_6.png" /> 18.7 - 68.1 <br />'
        });
var format_Tauxdescolargar_3 = new ol.format.GeoJSON();
var features_Tauxdescolargar_3 = format_Tauxdescolargar_3.readFeatures(json_Tauxdescolargar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tauxdescolargar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tauxdescolargar_3.addFeatures(features_Tauxdescolargar_3);
var lyr_Tauxdescolargar_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tauxdescolargar_3, 
                style: style_Tauxdescolargar_3,
                interactive: true,
    title: 'Taux de scolar. gar (%)<br />\
    <img src="styles/legend/Tauxdescolargar_3_0.png" /> Pas de données<br />\
    <img src="styles/legend/Tauxdescolargar_3_1.png" /> 0 - 32 <br />\
    <img src="styles/legend/Tauxdescolargar_3_2.png" /> 32 - 62 <br />\
    <img src="styles/legend/Tauxdescolargar_3_3.png" /> 62 - 90 <br />\
    <img src="styles/legend/Tauxdescolargar_3_4.png" /> 90 - 126 <br />\
    <img src="styles/legend/Tauxdescolargar_3_5.png" /> 126 - 187 <br />'
        });
var format_Tauxdescolarfill_4 = new ol.format.GeoJSON();
var features_Tauxdescolarfill_4 = format_Tauxdescolarfill_4.readFeatures(json_Tauxdescolarfill_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tauxdescolarfill_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tauxdescolarfill_4.addFeatures(features_Tauxdescolarfill_4);
var lyr_Tauxdescolarfill_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tauxdescolarfill_4, 
                style: style_Tauxdescolarfill_4,
                interactive: true,
    title: 'Taux de scolar. fill (%)<br />\
    <img src="styles/legend/Tauxdescolarfill_4_0.png" /> Pas de données<br />\
    <img src="styles/legend/Tauxdescolarfill_4_1.png" /> 0.0 - 22<br />\
    <img src="styles/legend/Tauxdescolarfill_4_2.png" /> 22 - 44<br />\
    <img src="styles/legend/Tauxdescolarfill_4_3.png" /> 44 - 66<br />\
    <img src="styles/legend/Tauxdescolarfill_4_4.png" /> 66 - 96<br />\
    <img src="styles/legend/Tauxdescolarfill_4_5.png" /> 96 - 163<br />'
        });
var format_Ecartmoytauxscolar_5 = new ol.format.GeoJSON();
var features_Ecartmoytauxscolar_5 = format_Ecartmoytauxscolar_5.readFeatures(json_Ecartmoytauxscolar_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecartmoytauxscolar_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecartmoytauxscolar_5.addFeatures(features_Ecartmoytauxscolar_5);
var lyr_Ecartmoytauxscolar_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ecartmoytauxscolar_5, 
                style: style_Ecartmoytauxscolar_5,
                interactive: true,
    title: 'Ecart moy. taux scolar. (%)<br />\
    <img src="styles/legend/Ecartmoytauxscolar_5_0.png" /> Pas de données<br />\
    <img src="styles/legend/Ecartmoytauxscolar_5_1.png" /> -35.0 - -22.2 <br />\
    <img src="styles/legend/Ecartmoytauxscolar_5_2.png" /> -22.2 - 0.0 <br />\
    <img src="styles/legend/Ecartmoytauxscolar_5_3.png" /> 0.0 - 12.0 <br />\
    <img src="styles/legend/Ecartmoytauxscolar_5_4.png" /> 12 - 36.3 <br />\
    <img src="styles/legend/Ecartmoytauxscolar_5_5.png" /> 36.3 - 69.8 <br />\
    <img src="styles/legend/Ecartmoytauxscolar_5_6.png" /> 69.8 - 124.4 <br />'
        });
var format_Tauxdescolarisation_6 = new ol.format.GeoJSON();
var features_Tauxdescolarisation_6 = format_Tauxdescolarisation_6.readFeatures(json_Tauxdescolarisation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tauxdescolarisation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tauxdescolarisation_6.addFeatures(features_Tauxdescolarisation_6);
var lyr_Tauxdescolarisation_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tauxdescolarisation_6, 
                style: style_Tauxdescolarisation_6,
                interactive: true,
    title: 'Taux de scolarisation (%)<br />\
    <img src="styles/legend/Tauxdescolarisation_6_0.png" /> Pas de données<br />\
    <img src="styles/legend/Tauxdescolarisation_6_1.png" /> 0.0 - 21.5 <br />\
    <img src="styles/legend/Tauxdescolarisation_6_2.png" /> 21.5 - 44.2 <br />\
    <img src="styles/legend/Tauxdescolarisation_6_3.png" /> 44.2 - 70.1 <br />\
    <img src="styles/legend/Tauxdescolarisation_6_4.png" /> 70.1 - 104.8 <br />\
    <img src="styles/legend/Tauxdescolarisation_6_5.png" /> 104.8 - 159.4 <br />'
        });
var format_coleindex_7 = new ol.format.GeoJSON();
var features_coleindex_7 = format_coleindex_7.readFeatures(json_coleindex_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coleindex_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coleindex_7.addFeatures(features_coleindex_7);
var lyr_coleindex_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coleindex_7, 
                style: style_coleindex_7,
                interactive: true,
    title: 'École index<br />\
    <img src="styles/legend/coleindex_7_0.png" /> Pas de données<br />\
    <img src="styles/legend/coleindex_7_1.png" /> 0.00 - 0.52<br />\
    <img src="styles/legend/coleindex_7_2.png" /> 0.52 - 0.87<br />\
    <img src="styles/legend/coleindex_7_3.png" /> 0.87 - 1.21<br />\
    <img src="styles/legend/coleindex_7_4.png" /> 1.21 - 1.58<br />\
    <img src="styles/legend/coleindex_7_5.png" /> 1.58 - 2.30<br />'
        });
var format_colesaveclectricit_8 = new ol.format.GeoJSON();
var features_colesaveclectricit_8 = format_colesaveclectricit_8.readFeatures(json_colesaveclectricit_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colesaveclectricit_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colesaveclectricit_8.addFeatures(features_colesaveclectricit_8);
var lyr_colesaveclectricit_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colesaveclectricit_8, 
                style: style_colesaveclectricit_8,
                interactive: true,
    title: 'Écoles avec électricité (%)<br />\
    <img src="styles/legend/colesaveclectricit_8_0.png" /> Pas de données<br />\
    <img src="styles/legend/colesaveclectricit_8_1.png" /> 0 - 4 <br />\
    <img src="styles/legend/colesaveclectricit_8_2.png" /> 4 - 13.6 <br />\
    <img src="styles/legend/colesaveclectricit_8_3.png" /> 13.6 - 26.7 <br />\
    <img src="styles/legend/colesaveclectricit_8_4.png" /> 26.7 - 46.4 <br />\
    <img src="styles/legend/colesaveclectricit_8_5.png" /> 46.4 - 79.3 <br />'
        });
var format_colesaveceau_9 = new ol.format.GeoJSON();
var features_colesaveceau_9 = format_colesaveceau_9.readFeatures(json_colesaveceau_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colesaveceau_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colesaveceau_9.addFeatures(features_colesaveceau_9);
var lyr_colesaveceau_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colesaveceau_9, 
                style: style_colesaveceau_9,
                interactive: true,
    title: 'Écoles avec eau (%)<br />\
    <img src="styles/legend/colesaveceau_9_0.png" /> Pas de données<br />\
    <img src="styles/legend/colesaveceau_9_1.png" /> 0 - 16.7 <br />\
    <img src="styles/legend/colesaveceau_9_2.png" /> 16.7 - 35.1 <br />\
    <img src="styles/legend/colesaveceau_9_3.png" /> 35.1 - 52.6 <br />\
    <img src="styles/legend/colesaveceau_9_4.png" /> 52.6 - 72.8 <br />\
    <img src="styles/legend/colesaveceau_9_5.png" /> 72.8 - 100 <br />'
        });
var format_Propenseigntitulaires_10 = new ol.format.GeoJSON();
var features_Propenseigntitulaires_10 = format_Propenseigntitulaires_10.readFeatures(json_Propenseigntitulaires_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Propenseigntitulaires_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Propenseigntitulaires_10.addFeatures(features_Propenseigntitulaires_10);
var lyr_Propenseigntitulaires_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Propenseigntitulaires_10, 
                style: style_Propenseigntitulaires_10,
                interactive: true,
    title: 'Prop. enseign. titulaires<br />\
    <img src="styles/legend/Propenseigntitulaires_10_0.png" /> Pas de données<br />\
    <img src="styles/legend/Propenseigntitulaires_10_1.png" /> 0.00 - 0.28 <br />\
    <img src="styles/legend/Propenseigntitulaires_10_2.png" /> 0.28 - 0.44 <br />\
    <img src="styles/legend/Propenseigntitulaires_10_3.png" /> 0.44 - 0.60 <br />\
    <img src="styles/legend/Propenseigntitulaires_10_4.png" /> 0.60 - 0.80 <br />\
    <img src="styles/legend/Propenseigntitulaires_10_5.png" /> 0.80 - 1 <br />'
        });
var format_cartmoylvesenseign_11 = new ol.format.GeoJSON();
var features_cartmoylvesenseign_11 = format_cartmoylvesenseign_11.readFeatures(json_cartmoylvesenseign_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cartmoylvesenseign_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cartmoylvesenseign_11.addFeatures(features_cartmoylvesenseign_11);
var lyr_cartmoylvesenseign_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cartmoylvesenseign_11, 
                style: style_cartmoylvesenseign_11,
                interactive: true,
    title: 'Écart moy. élèves /enseign.<br />\
    <img src="styles/legend/cartmoylvesenseign_11_0.png" /> Pas de données<br />\
    <img src="styles/legend/cartmoylvesenseign_11_1.png" /> -22 - -9 <br />\
    <img src="styles/legend/cartmoylvesenseign_11_2.png" /> -9 - 0 <br />\
    <img src="styles/legend/cartmoylvesenseign_11_3.png" /> 0 - 26 <br />\
    <img src="styles/legend/cartmoylvesenseign_11_4.png" /> 26 - 79 <br />\
    <img src="styles/legend/cartmoylvesenseign_11_5.png" /> 79 - 207 <br />'
        });
var format_lvesenseignratio_12 = new ol.format.GeoJSON();
var features_lvesenseignratio_12 = format_lvesenseignratio_12.readFeatures(json_lvesenseignratio_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lvesenseignratio_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lvesenseignratio_12.addFeatures(features_lvesenseignratio_12);
var lyr_lvesenseignratio_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lvesenseignratio_12, 
                style: style_lvesenseignratio_12,
                interactive: true,
    title: 'Élèves / enseign. ratio<br />\
    <img src="styles/legend/lvesenseignratio_12_0.png" /> Pas de données<br />\
    <img src="styles/legend/lvesenseignratio_12_1.png" /> 0 - 13 <br />\
    <img src="styles/legend/lvesenseignratio_12_2.png" /> 13 - 28 <br />\
    <img src="styles/legend/lvesenseignratio_12_3.png" /> 28 - 48 <br />\
    <img src="styles/legend/lvesenseignratio_12_4.png" /> 48 - 101 <br />\
    <img src="styles/legend/lvesenseignratio_12_5.png" /> 101 - 229 <br />'
        });
var format_coles1000hab_13 = new ol.format.GeoJSON();
var features_coles1000hab_13 = format_coles1000hab_13.readFeatures(json_coles1000hab_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coles1000hab_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coles1000hab_13.addFeatures(features_coles1000hab_13);
var lyr_coles1000hab_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coles1000hab_13, 
                style: style_coles1000hab_13,
                interactive: true,
    title: 'Écoles / 1000 hab.<br />\
    <img src="styles/legend/coles1000hab_13_0.png" /> Pas de données<br />\
    <img src="styles/legend/coles1000hab_13_1.png" /> 0.00 - 0.73<br />\
    <img src="styles/legend/coles1000hab_13_2.png" /> 0.73 - 1.12 <br />\
    <img src="styles/legend/coles1000hab_13_3.png" /> 1.12 - 1.71 <br />\
    <img src="styles/legend/coles1000hab_13_4.png" /> 1.71 - 2.98 <br />\
    <img src="styles/legend/coles1000hab_13_5.png" /> 2.98 - 5.99<br />'
        });
var format_Rgion_14 = new ol.format.GeoJSON();
var features_Rgion_14 = format_Rgion_14.readFeatures(json_Rgion_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rgion_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rgion_14.addFeatures(features_Rgion_14);
var lyr_Rgion_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rgion_14, 
                style: style_Rgion_14,
                interactive: true,
                title: '<img src="styles/legend/Rgion_14.png" /> Région'
            });

lyr_Cartedebase_0.setVisible(true);lyr_colesaveccomitte_1.setVisible(false);lyr_Tauxdescolardifffillgar_2.setVisible(false);lyr_Tauxdescolargar_3.setVisible(false);lyr_Tauxdescolarfill_4.setVisible(false);lyr_Ecartmoytauxscolar_5.setVisible(false);lyr_Tauxdescolarisation_6.setVisible(false);lyr_coleindex_7.setVisible(false);lyr_colesaveclectricit_8.setVisible(false);lyr_colesaveceau_9.setVisible(false);lyr_Propenseigntitulaires_10.setVisible(false);lyr_cartmoylvesenseign_11.setVisible(false);lyr_lvesenseignratio_12.setVisible(false);lyr_coles1000hab_13.setVisible(true);lyr_Rgion_14.setVisible(true);
var layersList = [lyr_Cartedebase_0,lyr_colesaveccomitte_1,lyr_Tauxdescolardifffillgar_2,lyr_Tauxdescolargar_3,lyr_Tauxdescolarfill_4,lyr_Ecartmoytauxscolar_5,lyr_Tauxdescolarisation_6,lyr_coleindex_7,lyr_colesaveclectricit_8,lyr_colesaveceau_9,lyr_Propenseigntitulaires_10,lyr_cartmoylvesenseign_11,lyr_lvesenseignratio_12,lyr_coles1000hab_13,lyr_Rgion_14];
lyr_colesaveccomitte_1.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Écoles avec comittée (%)': 'Écoles avec comittée (%)', 'linkonline': 'linkonline', });
lyr_Tauxdescolardifffillgar_2.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Taux de scolar. diff fill gar': 'Taux de scolar. diff fill gar', 'linkonline': 'linkonline', });
lyr_Tauxdescolargar_3.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Taux de scolar. gar (%)': 'Taux de scolar. gar (%)', 'linkonline': 'linkonline', });
lyr_Tauxdescolarfill_4.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Taux de scolar. fill (%)': 'Taux de scolar. fill (%)', 'linkonline': 'linkonline', });
lyr_Ecartmoytauxscolar_5.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Ecart moy. taux de scolar. (%)': 'Ecart moy. taux de scolar. (%)', 'linkonline': 'linkonline', });
lyr_Tauxdescolarisation_6.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Taux de scolarisation (%)': 'Taux de scolarisation (%)', 'linkonline': 'linkonline', });
lyr_coleindex_7.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'École index': 'École index', 'linkonline': 'linkonline', });
lyr_colesaveclectricit_8.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Écoles avec eléctricité (%)': 'Écoles avec eléctricité (%)', 'linkonline': 'linkonline', });
lyr_colesaveceau_9.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Écoles avec eau (%)': 'Écoles avec eau (%)', 'linkonline': 'linkonline', });
lyr_Propenseigntitulaires_10.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Prop. enseign. titulaires': 'Prop. enseign. titulaires', 'linkonline': 'linkonline', });
lyr_cartmoylvesenseign_11.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Écart moy. élèves/enseign.': 'Écart moy. élèves/enseign.', 'linkonline': 'linkonline', });
lyr_lvesenseignratio_12.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Élèves/enseign. ratio': 'Élèves/enseign. ratio', 'linkonline': 'linkonline', });
lyr_coles1000hab_13.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Écoles/1000 hab.': 'Écoles/1000 hab.', 'linkonline': 'linkonline', });
lyr_Rgion_14.set('fieldAliases', {'Région': 'Région', });
lyr_colesaveccomitte_1.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Écoles avec comittée (%)': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_Tauxdescolardifffillgar_2.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Taux de scolar. diff fill gar': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_Tauxdescolargar_3.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Taux de scolar. gar (%)': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_Tauxdescolarfill_4.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Taux de scolar. fill (%)': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_Ecartmoytauxscolar_5.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Ecart moy. taux de scolar. (%)': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_Tauxdescolarisation_6.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Taux de scolarisation (%)': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_coleindex_7.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'École index': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_colesaveclectricit_8.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Écoles avec eléctricité (%)': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_colesaveceau_9.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Écoles avec eau (%)': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_Propenseigntitulaires_10.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Prop. enseign. titulaires': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_cartmoylvesenseign_11.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Écart moy. élèves/enseign.': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_lvesenseignratio_12.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Élèves/enseign. ratio': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_coles1000hab_13.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Écoles/1000 hab.': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_Rgion_14.set('fieldImages', {'Région': '', });
lyr_colesaveccomitte_1.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Écoles avec comittée (%)': 'inline label', 'linkonline': 'no label', });
lyr_Tauxdescolardifffillgar_2.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Taux de scolar. diff fill gar': 'inline label', 'linkonline': 'no label', });
lyr_Tauxdescolargar_3.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Taux de scolar. gar (%)': 'inline label', 'linkonline': 'no label', });
lyr_Tauxdescolarfill_4.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Taux de scolar. fill (%)': 'inline label', 'linkonline': 'no label', });
lyr_Ecartmoytauxscolar_5.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Ecart moy. taux de scolar. (%)': 'inline label', 'linkonline': 'no label', });
lyr_Tauxdescolarisation_6.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Taux de scolarisation (%)': 'inline label', 'linkonline': 'no label', });
lyr_coleindex_7.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'École index': 'inline label', 'linkonline': 'no label', });
lyr_colesaveclectricit_8.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Écoles avec eléctricité (%)': 'inline label', 'linkonline': 'no label', });
lyr_colesaveceau_9.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Écoles avec eau (%)': 'inline label', 'linkonline': 'no label', });
lyr_Propenseigntitulaires_10.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Prop. enseign. titulaires': 'inline label', 'linkonline': 'no label', });
lyr_cartmoylvesenseign_11.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Écart moy. élèves/enseign.': 'inline label', 'linkonline': 'no label', });
lyr_lvesenseignratio_12.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Élèves/enseign. ratio': 'inline label', 'linkonline': 'no label', });
lyr_coles1000hab_13.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Écoles/1000 hab.': 'inline label', 'linkonline': 'no label', });
lyr_Rgion_14.set('fieldLabels', {'Région': 'no label', });
lyr_Rgion_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});