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
var format_Tauxdescolarisation_1 = new ol.format.GeoJSON();
var features_Tauxdescolarisation_1 = format_Tauxdescolarisation_1.readFeatures(json_Tauxdescolarisation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tauxdescolarisation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tauxdescolarisation_1.addFeatures(features_Tauxdescolarisation_1);
var lyr_Tauxdescolarisation_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tauxdescolarisation_1, 
                style: style_Tauxdescolarisation_1,
                interactive: true,
    title: 'Taux de scolarisation (%)<br />\
    <img src="styles/legend/Tauxdescolarisation_1_0.png" /> Pas de données<br />\
    <img src="styles/legend/Tauxdescolarisation_1_1.png" /> 10.6 - 30.7 <br />\
    <img src="styles/legend/Tauxdescolarisation_1_2.png" /> 30.7 - 44.7 <br />\
    <img src="styles/legend/Tauxdescolarisation_1_3.png" /> 44.7 - 59.2 <br />\
    <img src="styles/legend/Tauxdescolarisation_1_4.png" /> 59.2 - 75.8 <br />\
    <img src="styles/legend/Tauxdescolarisation_1_5.png" /> 75.8 - 97.5 <br />'
        });
var format_colesaveccantine_2 = new ol.format.GeoJSON();
var features_colesaveccantine_2 = format_colesaveccantine_2.readFeatures(json_colesaveccantine_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colesaveccantine_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colesaveccantine_2.addFeatures(features_colesaveccantine_2);
var lyr_colesaveccantine_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colesaveccantine_2, 
                style: style_colesaveccantine_2,
                interactive: true,
    title: 'Écoles avec cantine (%)<br />\
    <img src="styles/legend/colesaveccantine_2_0.png" /> Pas de données<br />\
    <img src="styles/legend/colesaveccantine_2_1.png" /> 0.0<br />\
    <img src="styles/legend/colesaveccantine_2_2.png" /> 0.1 - 19.2 <br />\
    <img src="styles/legend/colesaveccantine_2_3.png" /> 19.2 - 40.0<br />\
    <img src="styles/legend/colesaveccantine_2_4.png" /> 40.0 - 75.0<br />'
        });
var format_Campsderfugies_3 = new ol.format.GeoJSON();
var features_Campsderfugies_3 = format_Campsderfugies_3.readFeatures(json_Campsderfugies_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campsderfugies_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campsderfugies_3.addFeatures(features_Campsderfugies_3);
var lyr_Campsderfugies_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campsderfugies_3, 
                style: style_Campsderfugies_3,
                interactive: true,
    title: 'Camps de réfugiées<br />\
    <img src="styles/legend/Campsderfugies_3_0.png" /> Pas de données<br />\
    <img src="styles/legend/Campsderfugies_3_1.png" /> Oui<br />\
    <img src="styles/legend/Campsderfugies_3_2.png" /> Non<br />'
        });
var format_Conflitsintercommunautaires_4 = new ol.format.GeoJSON();
var features_Conflitsintercommunautaires_4 = format_Conflitsintercommunautaires_4.readFeatures(json_Conflitsintercommunautaires_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conflitsintercommunautaires_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conflitsintercommunautaires_4.addFeatures(features_Conflitsintercommunautaires_4);
var lyr_Conflitsintercommunautaires_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Conflitsintercommunautaires_4, 
                style: style_Conflitsintercommunautaires_4,
                interactive: true,
    title: 'Conflits intercommunautaires<br />\
    <img src="styles/legend/Conflitsintercommunautaires_4_0.png" /> Pas de données<br />\
    <img src="styles/legend/Conflitsintercommunautaires_4_1.png" /> 0<br />\
    <img src="styles/legend/Conflitsintercommunautaires_4_2.png" /> 1 - 100 <br />\
    <img src="styles/legend/Conflitsintercommunautaires_4_3.png" /> 100 - 528 <br />\
    <img src="styles/legend/Conflitsintercommunautaires_4_4.png" /> 528 - 10700 <br />'
        });
var format_coleindex_5 = new ol.format.GeoJSON();
var features_coleindex_5 = format_coleindex_5.readFeatures(json_coleindex_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coleindex_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coleindex_5.addFeatures(features_coleindex_5);
var lyr_coleindex_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coleindex_5, 
                style: style_coleindex_5,
                interactive: true,
    title: 'École index<br />\
    <img src="styles/legend/coleindex_5_0.png" /> Pas de données<br />\
    <img src="styles/legend/coleindex_5_1.png" /> 0.00 - 1.01<br />\
    <img src="styles/legend/coleindex_5_2.png" /> 1.01 - 2.58<br />\
    <img src="styles/legend/coleindex_5_3.png" /> 2.58 - 3.95<br />\
    <img src="styles/legend/coleindex_5_4.png" /> 3.95 - 6.10<br />\
    <img src="styles/legend/coleindex_5_5.png" /> 6.10 - 9.98<br />'
        });
var format_colesaveclectricit_6 = new ol.format.GeoJSON();
var features_colesaveclectricit_6 = format_colesaveclectricit_6.readFeatures(json_colesaveclectricit_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colesaveclectricit_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colesaveclectricit_6.addFeatures(features_colesaveclectricit_6);
var lyr_colesaveclectricit_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colesaveclectricit_6, 
                style: style_colesaveclectricit_6,
                interactive: true,
    title: 'Écoles avec électricité (%)<br />\
    <img src="styles/legend/colesaveclectricit_6_0.png" /> Pas de données<br />\
    <img src="styles/legend/colesaveclectricit_6_1.png" /> 0.0 - 3.5 <br />\
    <img src="styles/legend/colesaveclectricit_6_2.png" /> 3.5 - 12.5 <br />\
    <img src="styles/legend/colesaveclectricit_6_3.png" /> 12.5 - 24.5 <br />\
    <img src="styles/legend/colesaveclectricit_6_4.png" /> 24.5 - 40 <br />\
    <img src="styles/legend/colesaveclectricit_6_5.png" /> 40 - 56.4 <br />'
        });
var format_colesaveceau_7 = new ol.format.GeoJSON();
var features_colesaveceau_7 = format_colesaveceau_7.readFeatures(json_colesaveceau_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colesaveceau_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colesaveceau_7.addFeatures(features_colesaveceau_7);
var lyr_colesaveceau_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colesaveceau_7, 
                style: style_colesaveceau_7,
                interactive: true,
    title: 'Écoles avec eau (%)<br />\
    <img src="styles/legend/colesaveceau_7_0.png" /> Pas de données<br />\
    <img src="styles/legend/colesaveceau_7_1.png" /> 0.0 - 10.5 <br />\
    <img src="styles/legend/colesaveceau_7_2.png" /> 10.5 - 23.4 <br />\
    <img src="styles/legend/colesaveceau_7_3.png" /> 23.4 - 43.9 <br />\
    <img src="styles/legend/colesaveceau_7_4.png" /> 43.9 - 69.4 <br />\
    <img src="styles/legend/colesaveceau_7_5.png" /> 69.4 - 100 <br />'
        });
var format_Ratiopublicpriv_8 = new ol.format.GeoJSON();
var features_Ratiopublicpriv_8 = format_Ratiopublicpriv_8.readFeatures(json_Ratiopublicpriv_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ratiopublicpriv_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ratiopublicpriv_8.addFeatures(features_Ratiopublicpriv_8);
var lyr_Ratiopublicpriv_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ratiopublicpriv_8, 
                style: style_Ratiopublicpriv_8,
                interactive: true,
    title: 'Ratio public-privé<br />\
    <img src="styles/legend/Ratiopublicpriv_8_0.png" /> Pas de données<br />\
    <img src="styles/legend/Ratiopublicpriv_8_1.png" /> 0.53 - 0.83 <br />\
    <img src="styles/legend/Ratiopublicpriv_8_2.png" /> 0.83 - 0.96 <br />\
    <img src="styles/legend/Ratiopublicpriv_8_3.png" /> 0.96 - 1 <br />'
        });
var format_Proportionenseignantstitulaires_9 = new ol.format.GeoJSON();
var features_Proportionenseignantstitulaires_9 = format_Proportionenseignantstitulaires_9.readFeatures(json_Proportionenseignantstitulaires_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proportionenseignantstitulaires_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proportionenseignantstitulaires_9.addFeatures(features_Proportionenseignantstitulaires_9);
var lyr_Proportionenseignantstitulaires_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Proportionenseignantstitulaires_9, 
                style: style_Proportionenseignantstitulaires_9,
                interactive: true,
    title: 'Proportion enseignants titulaires<br />\
    <img src="styles/legend/Proportionenseignantstitulaires_9_0.png" /> Pas de données<br />\
    <img src="styles/legend/Proportionenseignantstitulaires_9_1.png" /> 0.00 - 0.11<br />\
    <img src="styles/legend/Proportionenseignantstitulaires_9_2.png" /> 0.11 - 0.17<br />\
    <img src="styles/legend/Proportionenseignantstitulaires_9_3.png" /> 0.17 - 0.24<br />\
    <img src="styles/legend/Proportionenseignantstitulaires_9_4.png" /> 0.24 - 0.36<br />\
    <img src="styles/legend/Proportionenseignantstitulaires_9_5.png" /> 0.36 - 0.51<br />'
        });
var format_colesrurale_10 = new ol.format.GeoJSON();
var features_colesrurale_10 = format_colesrurale_10.readFeatures(json_colesrurale_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colesrurale_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colesrurale_10.addFeatures(features_colesrurale_10);
var lyr_colesrurale_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colesrurale_10, 
                style: style_colesrurale_10,
                interactive: true,
    title: 'Écoles rurale (%)<br />\
    <img src="styles/legend/colesrurale_10_0.png" /> Pas de données<br />\
    <img src="styles/legend/colesrurale_10_1.png" /> 0.0 - 12.8 <br />\
    <img src="styles/legend/colesrurale_10_2.png" /> 12.8 - 50.0 <br />\
    <img src="styles/legend/colesrurale_10_3.png" /> 50.0 - 77.5 <br />\
    <img src="styles/legend/colesrurale_10_4.png" /> 77.5 - 94.1 <br />\
    <img src="styles/legend/colesrurale_10_5.png" /> 94.1 - 100 <br />'
        });
var format_Dviationmoyennelveens_11 = new ol.format.GeoJSON();
var features_Dviationmoyennelveens_11 = format_Dviationmoyennelveens_11.readFeatures(json_Dviationmoyennelveens_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dviationmoyennelveens_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dviationmoyennelveens_11.addFeatures(features_Dviationmoyennelveens_11);
var lyr_Dviationmoyennelveens_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dviationmoyennelveens_11, 
                style: style_Dviationmoyennelveens_11,
                interactive: true,
    title: 'Déviation moyenne élève/ens.<br />\
    <img src="styles/legend/Dviationmoyennelveens_11_0.png" /> Pas de données<br />\
    <img src="styles/legend/Dviationmoyennelveens_11_1.png" /> -21.97 - -12.51<br />\
    <img src="styles/legend/Dviationmoyennelveens_11_2.png" /> -12.51 - -4.62<br />\
    <img src="styles/legend/Dviationmoyennelveens_11_3.png" /> -4.62 - 0.00<br />\
    <img src="styles/legend/Dviationmoyennelveens_11_4.png" /> 0.00 - 7.32<br />\
    <img src="styles/legend/Dviationmoyennelveens_11_5.png" /> 7.32 - 14.54<br />\
    <img src="styles/legend/Dviationmoyennelveens_11_6.png" /> 14.54 - 21.11<br />'
        });
var format_lvesenseignantratio_12 = new ol.format.GeoJSON();
var features_lvesenseignantratio_12 = format_lvesenseignantratio_12.readFeatures(json_lvesenseignantratio_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lvesenseignantratio_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lvesenseignantratio_12.addFeatures(features_lvesenseignantratio_12);
var lyr_lvesenseignantratio_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lvesenseignantratio_12, 
                style: style_lvesenseignantratio_12,
                interactive: true,
    title: 'Élèves-enseignant ratio<br />\
    <img src="styles/legend/lvesenseignantratio_12_0.png" /> Pas de données<br />\
    <img src="styles/legend/lvesenseignantratio_12_1.png" /> 13.75 - 23.21<br />\
    <img src="styles/legend/lvesenseignantratio_12_2.png" /> 23.21 - 31.50<br />\
    <img src="styles/legend/lvesenseignantratio_12_3.png" /> 31.50 - 38.44<br />\
    <img src="styles/legend/lvesenseignantratio_12_4.png" /> 38.44 - 45.43<br />\
    <img src="styles/legend/lvesenseignantratio_12_5.png" /> 45.43 - 56.83<br />'
        });
var format_colespour1000habitants_13 = new ol.format.GeoJSON();
var features_colespour1000habitants_13 = format_colespour1000habitants_13.readFeatures(json_colespour1000habitants_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colespour1000habitants_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colespour1000habitants_13.addFeatures(features_colespour1000habitants_13);
var lyr_colespour1000habitants_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colespour1000habitants_13, 
                style: style_colespour1000habitants_13,
                interactive: true,
    title: 'Écoles pour 1000 habitants<br />\
    <img src="styles/legend/colespour1000habitants_13_0.png" /> Pas de données<br />\
    <img src="styles/legend/colespour1000habitants_13_1.png" /> 0.00 - 0.06 <br />\
    <img src="styles/legend/colespour1000habitants_13_2.png" /> 0.06 - 0.09 <br />\
    <img src="styles/legend/colespour1000habitants_13_3.png" /> 0.09 - 0.12 <br />\
    <img src="styles/legend/colespour1000habitants_13_4.png" /> 0.12 - 0.19 <br />\
    <img src="styles/legend/colespour1000habitants_13_5.png" /> 0.19 - 0.34 <br />'
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

lyr_Cartedebase_0.setVisible(true);lyr_Tauxdescolarisation_1.setVisible(false);lyr_colesaveccantine_2.setVisible(false);lyr_Campsderfugies_3.setVisible(false);lyr_Conflitsintercommunautaires_4.setVisible(false);lyr_coleindex_5.setVisible(false);lyr_colesaveclectricit_6.setVisible(false);lyr_colesaveceau_7.setVisible(false);lyr_Ratiopublicpriv_8.setVisible(false);lyr_Proportionenseignantstitulaires_9.setVisible(false);lyr_colesrurale_10.setVisible(false);lyr_Dviationmoyennelveens_11.setVisible(false);lyr_lvesenseignantratio_12.setVisible(false);lyr_colespour1000habitants_13.setVisible(true);lyr_Rgion_14.setVisible(true);
var layersList = [lyr_Cartedebase_0,lyr_Tauxdescolarisation_1,lyr_colesaveccantine_2,lyr_Campsderfugies_3,lyr_Conflitsintercommunautaires_4,lyr_coleindex_5,lyr_colesaveclectricit_6,lyr_colesaveceau_7,lyr_Ratiopublicpriv_8,lyr_Proportionenseignantstitulaires_9,lyr_colesrurale_10,lyr_Dviationmoyennelveens_11,lyr_lvesenseignantratio_12,lyr_colespour1000habitants_13,lyr_Rgion_14];
lyr_Tauxdescolarisation_1.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Taux de scolarisation': 'Taux de scolarisation', 'link_online': 'link_online', });
lyr_colesaveccantine_2.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Écoles avec cantine': 'Écoles avec cantine', 'link_online': 'link_online', });
lyr_Campsderfugies_3.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Camps de réfugiées': 'Camps de réfugiées', 'link_online': 'link_online', });
lyr_Conflitsintercommunautaires_4.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Conflits intercommunautaires': 'Conflits intercommunautaires', 'link_online': 'link_online', });
lyr_coleindex_5.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'École index': 'École index', 'link_online': 'link_online', });
lyr_colesaveclectricit_6.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Écoles avec électricité': 'Écoles avec électricité', 'linkonline': 'linkonline', });
lyr_colesaveceau_7.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Écoles avec eau': 'Écoles avec eau', 'linkonline': 'linkonline', });
lyr_Ratiopublicpriv_8.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Ratio public-privé': 'Ratio public-privé', 'link_online': 'link_online', });
lyr_Proportionenseignantstitulaires_9.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Proportion titulaires': 'Proportion titulaires', 'link_online': 'link_online', });
lyr_colesrurale_10.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Écoles rurale': 'Écoles rurale', 'linkonline': 'linkonline', });
lyr_Dviationmoyennelveens_11.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Déviation': 'Déviation', 'link_online': 'link_online', });
lyr_lvesenseignantratio_12.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Élèves-enseignant ratio': 'Élèves-enseignant ratio', 'link_online': 'link_online', });
lyr_colespour1000habitants_13.set('fieldAliases', {'Commune': 'Commune', 'Départament': 'Départament', 'Ânnée': 'Ânnée', 'Écoles population': 'Écoles population', 'link_online': 'link_online', });
lyr_Rgion_14.set('fieldAliases', {'adm_01': 'Région', });
lyr_Tauxdescolarisation_1.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Taux de scolarisation': 'TextEdit', 'link_online': 'TextEdit', });
lyr_colesaveccantine_2.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Écoles avec cantine': 'TextEdit', 'link_online': 'TextEdit', });
lyr_Campsderfugies_3.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Camps de réfugiées': 'Range', 'link_online': 'TextEdit', });
lyr_Conflitsintercommunautaires_4.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Conflits intercommunautaires': 'Range', 'link_online': 'TextEdit', });
lyr_coleindex_5.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'École index': 'TextEdit', 'link_online': '', });
lyr_colesaveclectricit_6.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Écoles avec électricité': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_colesaveceau_7.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Écoles avec eau': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_Ratiopublicpriv_8.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Ratio public-privé': 'TextEdit', 'link_online': 'TextEdit', });
lyr_Proportionenseignantstitulaires_9.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Proportion titulaires': 'TextEdit', 'link_online': 'TextEdit', });
lyr_colesrurale_10.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Écoles rurale': 'TextEdit', 'linkonline': 'TextEdit', });
lyr_Dviationmoyennelveens_11.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Déviation': 'TextEdit', 'link_online': 'TextEdit', });
lyr_lvesenseignantratio_12.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Élèves-enseignant ratio': 'TextEdit', 'link_online': 'TextEdit', });
lyr_colespour1000habitants_13.set('fieldImages', {'Commune': 'TextEdit', 'Départament': 'TextEdit', 'Ânnée': 'Range', 'Écoles population': 'TextEdit', 'link_online': 'TextEdit', });
lyr_Rgion_14.set('fieldImages', {'adm_01': 'TextEdit', });
lyr_Tauxdescolarisation_1.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Taux de scolarisation': 'inline label', 'link_online': 'no label', });
lyr_colesaveccantine_2.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Écoles avec cantine': 'inline label', 'link_online': 'no label', });
lyr_Campsderfugies_3.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Camps de réfugiées': 'inline label', 'link_online': 'no label', });
lyr_Conflitsintercommunautaires_4.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Conflits intercommunautaires': 'inline label', 'link_online': 'no label', });
lyr_coleindex_5.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'École index': 'inline label', 'link_online': 'no label', });
lyr_colesaveclectricit_6.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Écoles avec électricité': 'inline label', 'linkonline': 'no label', });
lyr_colesaveceau_7.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Écoles avec eau': 'inline label', 'linkonline': 'no label', });
lyr_Ratiopublicpriv_8.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Ratio public-privé': 'inline label', 'link_online': 'no label', });
lyr_Proportionenseignantstitulaires_9.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Proportion titulaires': 'inline label', 'link_online': 'no label', });
lyr_colesrurale_10.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Écoles rurale': 'inline label', 'linkonline': 'no label', });
lyr_Dviationmoyennelveens_11.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Déviation': 'inline label', 'link_online': 'no label', });
lyr_lvesenseignantratio_12.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Élèves-enseignant ratio': 'inline label', 'link_online': 'no label', });
lyr_colespour1000habitants_13.set('fieldLabels', {'Commune': 'inline label', 'Départament': 'inline label', 'Ânnée': 'inline label', 'Écoles population': 'inline label', 'link_online': 'no label', });
lyr_Rgion_14.set('fieldLabels', {'adm_01': 'inline label', });
lyr_Rgion_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});