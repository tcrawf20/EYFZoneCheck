var wms_layers = [];

var format_knoxtracts_0 = new ol.format.GeoJSON();
var features_knoxtracts_0 = format_knoxtracts_0.readFeatures(json_knoxtracts_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_knoxtracts_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_knoxtracts_0.addFeatures(features_knoxtracts_0);
var lyr_knoxtracts_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_knoxtracts_0, 
                style: style_knoxtracts_0,
                popuplayertitle: 'knoxtracts',
                interactive: false,
                title: '<img src="styles/legend/knoxtracts_0.png" /> knoxtracts'
            });
var format_eligible_tracts_1 = new ol.format.GeoJSON();
var features_eligible_tracts_1 = format_eligible_tracts_1.readFeatures(json_eligible_tracts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eligible_tracts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eligible_tracts_1.addFeatures(features_eligible_tracts_1);
var lyr_eligible_tracts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eligible_tracts_1, 
                style: style_eligible_tracts_1,
                popuplayertitle: 'eligible_tracts',
                interactive: false,
                title: '<img src="styles/legend/eligible_tracts_1.png" /> eligible_tracts'
            });
var format_eligible_zips_2 = new ol.format.GeoJSON();
var features_eligible_zips_2 = format_eligible_zips_2.readFeatures(json_eligible_zips_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eligible_zips_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eligible_zips_2.addFeatures(features_eligible_zips_2);
var lyr_eligible_zips_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eligible_zips_2, 
                style: style_eligible_zips_2,
                popuplayertitle: 'eligible_zips',
                interactive: false,
                title: '<img src="styles/legend/eligible_zips_2.png" /> eligible_zips'
            });

lyr_knoxtracts_0.setVisible(true);lyr_eligible_tracts_1.setVisible(true);lyr_eligible_zips_2.setVisible(true);
var layersList = [lyr_knoxtracts_0,lyr_eligible_tracts_1,lyr_eligible_zips_2];
lyr_knoxtracts_0.set('fieldAliases', {'TFID': 'TFID', 'STATEFP20': 'STATEFP20', 'COUNTYFP20': 'COUNTYFP20', 'TRACTCE20': 'TRACTCE20', 'BLKGRPCE20': 'BLKGRPCE20', 'BLOCKCE20': 'BLOCKCE20', 'SUFFIX1CE': 'SUFFIX1CE', 'ZCTA5CE20': 'ZCTA5CE20', 'UACE20': 'UACE20', 'PUMACE20': 'PUMACE20', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'COUSUBFP': 'COUSUBFP', 'SUBMCDFP': 'SUBMCDFP', 'ESTATEFP': 'ESTATEFP', 'CONCTYFP': 'CONCTYFP', 'PLACEFP': 'PLACEFP', 'AIANNHFP': 'AIANNHFP', 'AIANNHCE': 'AIANNHCE', 'COMPTYP': 'COMPTYP', 'TRSUBFP': 'TRSUBFP', 'TRSUBCE': 'TRSUBCE', 'ANRCFP': 'ANRCFP', 'TTRACTCE': 'TTRACTCE', 'TBLKGPCE': 'TBLKGPCE', 'ELSDLEA': 'ELSDLEA', 'SCSDLEA': 'SCSDLEA', 'UNSDLEA': 'UNSDLEA', 'CD118FP': 'CD118FP', 'SLDUST': 'SLDUST', 'SLDLST': 'SLDLST', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'CNECTAFP': 'CNECTAFP', 'NECTAFP': 'NECTAFP', 'NCTADVFP': 'NCTADVFP', 'LWFLAG': 'LWFLAG', 'OFFSET': 'OFFSET', 'ATOTAL': 'ATOTAL', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'tractmatch': 'tractmatch', });
lyr_eligible_tracts_1.set('fieldAliases', {'TFID': 'TFID', 'STATEFP20': 'STATEFP20', 'COUNTYFP20': 'COUNTYFP20', 'TRACTCE20': 'TRACTCE20', 'BLKGRPCE20': 'BLKGRPCE20', 'BLOCKCE20': 'BLOCKCE20', 'SUFFIX1CE': 'SUFFIX1CE', 'ZCTA5CE20': 'ZCTA5CE20', 'UACE20': 'UACE20', 'PUMACE20': 'PUMACE20', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'COUSUBFP': 'COUSUBFP', 'SUBMCDFP': 'SUBMCDFP', 'ESTATEFP': 'ESTATEFP', 'CONCTYFP': 'CONCTYFP', 'PLACEFP': 'PLACEFP', 'AIANNHFP': 'AIANNHFP', 'AIANNHCE': 'AIANNHCE', 'COMPTYP': 'COMPTYP', 'TRSUBFP': 'TRSUBFP', 'TRSUBCE': 'TRSUBCE', 'ANRCFP': 'ANRCFP', 'TTRACTCE': 'TTRACTCE', 'TBLKGPCE': 'TBLKGPCE', 'ELSDLEA': 'ELSDLEA', 'SCSDLEA': 'SCSDLEA', 'UNSDLEA': 'UNSDLEA', 'CD118FP': 'CD118FP', 'SLDUST': 'SLDUST', 'SLDLST': 'SLDLST', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'CNECTAFP': 'CNECTAFP', 'NECTAFP': 'NECTAFP', 'NCTADVFP': 'NCTADVFP', 'LWFLAG': 'LWFLAG', 'OFFSET': 'OFFSET', 'ATOTAL': 'ATOTAL', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'tractmatch': 'tractmatch', 'tract': 'tract', });
lyr_eligible_zips_2.set('fieldAliases', {'ZCTA5CE20': 'ZCTA5CE20', 'GEOID20': 'GEOID20', 'CLASSFP20': 'CLASSFP20', 'MTFCC20': 'MTFCC20', 'FUNCSTAT20': 'FUNCSTAT20', 'ALAND20': 'ALAND20', 'AWATER20': 'AWATER20', 'INTPTLAT20': 'INTPTLAT20', 'INTPTLON20': 'INTPTLON20', 'Zip': 'Zip', });
lyr_knoxtracts_0.set('fieldImages', {'TFID': 'TextEdit', 'STATEFP20': 'TextEdit', 'COUNTYFP20': 'TextEdit', 'TRACTCE20': 'TextEdit', 'BLKGRPCE20': 'TextEdit', 'BLOCKCE20': 'TextEdit', 'SUFFIX1CE': 'TextEdit', 'ZCTA5CE20': 'TextEdit', 'UACE20': 'TextEdit', 'PUMACE20': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'BLKGRPCE': 'TextEdit', 'COUSUBFP': 'TextEdit', 'SUBMCDFP': 'TextEdit', 'ESTATEFP': 'TextEdit', 'CONCTYFP': 'TextEdit', 'PLACEFP': 'TextEdit', 'AIANNHFP': 'TextEdit', 'AIANNHCE': 'TextEdit', 'COMPTYP': 'TextEdit', 'TRSUBFP': 'TextEdit', 'TRSUBCE': 'TextEdit', 'ANRCFP': 'TextEdit', 'TTRACTCE': 'TextEdit', 'TBLKGPCE': 'TextEdit', 'ELSDLEA': 'TextEdit', 'SCSDLEA': 'TextEdit', 'UNSDLEA': 'TextEdit', 'CD118FP': 'TextEdit', 'SLDUST': 'TextEdit', 'SLDLST': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'CNECTAFP': 'TextEdit', 'NECTAFP': 'TextEdit', 'NCTADVFP': 'TextEdit', 'LWFLAG': 'TextEdit', 'OFFSET': 'TextEdit', 'ATOTAL': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'tractmatch': 'TextEdit', });
lyr_eligible_tracts_1.set('fieldImages', {'TFID': 'TextEdit', 'STATEFP20': 'TextEdit', 'COUNTYFP20': 'TextEdit', 'TRACTCE20': 'TextEdit', 'BLKGRPCE20': 'TextEdit', 'BLOCKCE20': 'TextEdit', 'SUFFIX1CE': 'TextEdit', 'ZCTA5CE20': 'TextEdit', 'UACE20': 'TextEdit', 'PUMACE20': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'BLKGRPCE': 'TextEdit', 'COUSUBFP': 'TextEdit', 'SUBMCDFP': 'TextEdit', 'ESTATEFP': 'TextEdit', 'CONCTYFP': 'TextEdit', 'PLACEFP': 'TextEdit', 'AIANNHFP': 'TextEdit', 'AIANNHCE': 'TextEdit', 'COMPTYP': 'TextEdit', 'TRSUBFP': 'TextEdit', 'TRSUBCE': 'TextEdit', 'ANRCFP': 'TextEdit', 'TTRACTCE': 'TextEdit', 'TBLKGPCE': 'TextEdit', 'ELSDLEA': 'TextEdit', 'SCSDLEA': 'TextEdit', 'UNSDLEA': 'TextEdit', 'CD118FP': 'TextEdit', 'SLDUST': 'TextEdit', 'SLDLST': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'CNECTAFP': 'TextEdit', 'NECTAFP': 'TextEdit', 'NCTADVFP': 'TextEdit', 'LWFLAG': 'TextEdit', 'OFFSET': 'TextEdit', 'ATOTAL': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'tractmatch': 'TextEdit', 'tract': 'TextEdit', });
lyr_eligible_zips_2.set('fieldImages', {'ZCTA5CE20': 'TextEdit', 'GEOID20': 'TextEdit', 'CLASSFP20': 'TextEdit', 'MTFCC20': 'TextEdit', 'FUNCSTAT20': 'TextEdit', 'ALAND20': 'TextEdit', 'AWATER20': 'TextEdit', 'INTPTLAT20': 'TextEdit', 'INTPTLON20': 'TextEdit', 'Zip': 'TextEdit', });
lyr_knoxtracts_0.set('fieldLabels', {'TFID': 'hidden field', 'STATEFP20': 'hidden field', 'COUNTYFP20': 'hidden field', 'TRACTCE20': 'inline label - visible with data', 'BLKGRPCE20': 'hidden field', 'BLOCKCE20': 'hidden field', 'SUFFIX1CE': 'hidden field', 'ZCTA5CE20': 'hidden field', 'UACE20': 'hidden field', 'PUMACE20': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'COUSUBFP': 'hidden field', 'SUBMCDFP': 'hidden field', 'ESTATEFP': 'hidden field', 'CONCTYFP': 'hidden field', 'PLACEFP': 'hidden field', 'AIANNHFP': 'hidden field', 'AIANNHCE': 'hidden field', 'COMPTYP': 'hidden field', 'TRSUBFP': 'hidden field', 'TRSUBCE': 'hidden field', 'ANRCFP': 'hidden field', 'TTRACTCE': 'hidden field', 'TBLKGPCE': 'hidden field', 'ELSDLEA': 'hidden field', 'SCSDLEA': 'hidden field', 'UNSDLEA': 'hidden field', 'CD118FP': 'hidden field', 'SLDUST': 'hidden field', 'SLDLST': 'hidden field', 'CSAFP': 'hidden field', 'CBSAFP': 'hidden field', 'METDIVFP': 'hidden field', 'CNECTAFP': 'hidden field', 'NECTAFP': 'hidden field', 'NCTADVFP': 'hidden field', 'LWFLAG': 'hidden field', 'OFFSET': 'hidden field', 'ATOTAL': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'tractmatch': 'hidden field', });
lyr_eligible_tracts_1.set('fieldLabels', {'TFID': 'hidden field', 'STATEFP20': 'hidden field', 'COUNTYFP20': 'hidden field', 'TRACTCE20': 'hidden field', 'BLKGRPCE20': 'hidden field', 'BLOCKCE20': 'hidden field', 'SUFFIX1CE': 'hidden field', 'ZCTA5CE20': 'hidden field', 'UACE20': 'hidden field', 'PUMACE20': 'hidden field', 'STATEFP': 'hidden field', 'COUNTYFP': 'hidden field', 'TRACTCE': 'hidden field', 'BLKGRPCE': 'hidden field', 'COUSUBFP': 'hidden field', 'SUBMCDFP': 'hidden field', 'ESTATEFP': 'hidden field', 'CONCTYFP': 'hidden field', 'PLACEFP': 'hidden field', 'AIANNHFP': 'hidden field', 'AIANNHCE': 'hidden field', 'COMPTYP': 'hidden field', 'TRSUBFP': 'hidden field', 'TRSUBCE': 'hidden field', 'ANRCFP': 'hidden field', 'TTRACTCE': 'hidden field', 'TBLKGPCE': 'hidden field', 'ELSDLEA': 'hidden field', 'SCSDLEA': 'hidden field', 'UNSDLEA': 'hidden field', 'CD118FP': 'hidden field', 'SLDUST': 'hidden field', 'SLDLST': 'hidden field', 'CSAFP': 'hidden field', 'CBSAFP': 'hidden field', 'METDIVFP': 'hidden field', 'CNECTAFP': 'hidden field', 'NECTAFP': 'hidden field', 'NCTADVFP': 'hidden field', 'LWFLAG': 'hidden field', 'OFFSET': 'hidden field', 'ATOTAL': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'tractmatch': 'hidden field', 'tract': 'inline label - visible with data', });
lyr_eligible_zips_2.set('fieldLabels', {'ZCTA5CE20': 'hidden field', 'GEOID20': 'hidden field', 'CLASSFP20': 'hidden field', 'MTFCC20': 'hidden field', 'FUNCSTAT20': 'hidden field', 'ALAND20': 'hidden field', 'AWATER20': 'hidden field', 'INTPTLAT20': 'hidden field', 'INTPTLON20': 'hidden field', 'Zip': 'inline label - visible with data', });
lyr_eligible_zips_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});