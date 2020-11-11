var panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12, viewer, container, infospot, font;
var panorama13, panorama14, panorama15, panorama16, panorama17, panorama18, panorama19, panorama20, panorama21, panorama22;

container = document.querySelector( '#container' );

function createTextShape ( message, size = 10, count ) {
        message = makeMultiLine( message, count );
        var shapes = font.generateShapes( message, size );
        var geometry = new THREE.ShapeGeometry( shapes );
        var matLite = new THREE.MeshBasicMaterial( {
          color: 0xffffff,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide
        } );
        geometry.computeBoundingBox();
        var xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
        geometry.translate( xMid, 0, 0 );
        return new THREE.Mesh( geometry, matLite );
}
function makeMultiLine ( text = '', count = 40 ) {
        let lineCharacterLimit = 0;
        return text.split(' ').map( word => {
          lineCharacterLimit += word.length;
          if ( lineCharacterLimit > count ) {
            word += '\n';
            lineCharacterLimit = 0;
          }
          return word;
        }).join(' ').replace( /\n /g, '\n' );
}

panorama1 = new PANOLENS.ImagePanorama( './asset/PIC_1.jpg' );
panorama2 = new PANOLENS.ImagePanorama( './asset/PIC_2.jpg' );
panorama3 = new PANOLENS.ImagePanorama( './asset/PIC_3.jpg' );
panorama4 = new PANOLENS.ImagePanorama( './asset/PIC_4.jpg' );
panorama5 = new PANOLENS.ImagePanorama( './asset/PIC_5.jpg' );
panorama6 = new PANOLENS.ImagePanorama( './asset/PIC_6.jpg' );
panorama7 = new PANOLENS.ImagePanorama( './asset/PIC_7.jpg' );
panorama8 = new PANOLENS.ImagePanorama( './asset/PIC_8.jpg' );
panorama9 = new PANOLENS.ImagePanorama( './asset/PIC_9.jpg' );
panorama10 = new PANOLENS.ImagePanorama( './asset/PIC_10.jpg' );
panorama11 = new PANOLENS.ImagePanorama( './asset/PIC_11.jpg' );
panorama12 = new PANOLENS.ImagePanorama( './asset/PIC_12.jpg' );

panorama13 = new PANOLENS.ImagePanorama( './asset/PIC_13.jpg' );
panorama14 = new PANOLENS.ImagePanorama( './asset/PIC_14.jpg' );
panorama15 = new PANOLENS.ImagePanorama( './asset/PIC_15.jpg' );
panorama16 = new PANOLENS.ImagePanorama( './asset/PIC_16.jpg' );
panorama17 = new PANOLENS.ImagePanorama( './asset/PIC_17.jpg' );
panorama18 = new PANOLENS.ImagePanorama( './asset/PIC_18.jpg' );
panorama19 = new PANOLENS.ImagePanorama( './asset/PIC_19.jpg' );
panorama20 = new PANOLENS.ImagePanorama( './asset/PIC_20.jpg' );
panorama21 = new PANOLENS.ImagePanorama( './asset/PIC_21.jpg' );
panorama22 = new PANOLENS.ImagePanorama( './asset/PIC_22.jpg' );


viewer = new PANOLENS.Viewer( {output: 'console', container: container});
viewer.add( panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12);
viewer.add( panorama13, panorama14, panorama15, panorama16, panorama17, panorama18, panorama19, panorama20, panorama21, panorama22);

panorama1.link( panorama2, new THREE.Vector3( -1429.46, 163.73, -4779.61 ) );

panorama1.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-1429.46, 163.73, -4779.61), 0 );
} );

panorama2.link( panorama1, new THREE.Vector3( -3326.53, -281.25, -3717.01 ) );
panorama2.link( panorama3, new THREE.Vector3( -817.64, -440.01, 4904.59 ) );

panorama2.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-817.64, -440.01, 4904.59), 0 );
} );

panorama3.link( panorama2, new THREE.Vector3( 49.03, -1577.41, 4740.79 ) );
panorama3.link( panorama4, new THREE.Vector3( 4583.91, -371.77, -1950.81 ) );

panorama3.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4583.91, -371.77, -1950.81), 0 );
} );

panorama4.link( panorama3, new THREE.Vector3( -3521.06, -413.86, 3514.95 ) );
panorama4.link( panorama5, new THREE.Vector3( 4789.69, -325.50, 1367.32 ) );
panorama4.link( panorama18, new THREE.Vector3( -4691.24, -298.80, -1679.22 ) );

panorama4.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(1498.68, -52.07, -4765.60), 0 );
} );

panorama5.link( panorama4, new THREE.Vector3( -3992.16, -70.05, 2999.92 ) );
panorama5.link( panorama6, new THREE.Vector3( -4566.66, -574.73, -1933.33 ) );

panorama5.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3094.28, -614.32, -3865.70), 0 );
} );

panorama6.link( panorama5, new THREE.Vector3( 4946.72, -300.90, 610.63 ) );
panorama6.link( panorama19, new THREE.Vector3( 498.70, -198.50, -4966.07 ) );


panorama6.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4054.96, -376.77, 2896.58), 0 );
} );

panorama19.link( panorama6, new THREE.Vector3( 4787.01, -397.26, 1364.93 ) );
panorama19.link( panorama7, new THREE.Vector3( -1291.67, -391.54, 4807.28 ) );

panorama19.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(2599.09, -48.77, 4263.49), 0 );
} );

panorama7.link( panorama19, new THREE.Vector3( 4690.49, -314.87, 1679.40 ) );
panorama7.link( panorama20, new THREE.Vector3( 1852.35, -270.58, -4625.96 ) );

panorama7.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4770.31, -203.02, 1458.23), 0 );
} );

panorama20.link( panorama7, new THREE.Vector3( 4900.75, -508.82, 789.91 ) );
panorama20.link( panorama8, new THREE.Vector3( -1160.39, -437.01, 4836.95 ) );

panorama20.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(2851.69, -447.66, 4075.58), 0 );
} );

panorama8.link( panorama20, new THREE.Vector3( 4912.17, -394.47, 804.23 ) );
panorama8.link( panorama21, new THREE.Vector3( 103.72, -541.91, -4961.44 ) );

panorama8.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3815.22, -491.61, 3179.68), 0 );
} );

panorama21.link( panorama8, new THREE.Vector3( 4062.12, -638.89, 2830.92 ) );
panorama21.link( panorama9, new THREE.Vector3( -2688.64, -371.38, 4190.25 ) );

panorama21.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-562.67, -817.30, 4896.96), 0 );
} );

panorama9.link( panorama21, new THREE.Vector3( 4969.69, -445.50, 164.05 ) );
panorama9.link( panorama22, new THREE.Vector3( -14.52, -341.14, -4985.84 ) );

panorama9.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3553.10, -509.90, 3466.85), 0 );
} );

panorama22.link( panorama9, new THREE.Vector3( 4924.46, -485.49, 657.85 ) );
panorama22.link( panorama10, new THREE.Vector3( -92.90, -768.07, 4935.24 ) );

panorama22.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(3439.23, -497.42, 3582.81), 0 );
} );

panorama10.link( panorama22, new THREE.Vector3( 4745.94, -377.07, 1522.78 ) );
panorama10.link( panorama11, new THREE.Vector3( 1322.35, -161.25, -4808.41 ) );

panorama10.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4406.61, -423.51, 2307.87), 0 );
} );

panorama11.link( panorama10, new THREE.Vector3( -2514.97, -351.35, 4303.97 ) );
panorama11.link( panorama12, new THREE.Vector3( 2661.04, -139.40, -4219.03 ) );

panorama11.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4150.72, -554.32, -2712.84), 0 );
} );

panorama12.link( panorama11, new THREE.Vector3( -3866.08, -376.30, 3136.52 ) );
panorama12.link( panorama13, new THREE.Vector3( -4187.95, -624.76, -2640.23 ) );

panorama12.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4958.43, -433.69, 405.68), 0 );
} );

panorama13.link( panorama12, new THREE.Vector3( -1355.67, -405.13, -4788.53 ) );
panorama13.link( panorama14, new THREE.Vector3( -4569.21, -598.47, 1918.88 ) );

panorama13.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4630.72, -529.24, 1781.46), 0 );
} );

panorama14.link( panorama13, new THREE.Vector3( -1973.88, -711.78, -4533.75 ) );
panorama14.link( panorama15, new THREE.Vector3( -4286.87, -516.09, 2511.48 ) );

panorama14.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4781.71, -732.62, 1231.55), 0 );
} );

panorama15.link( panorama14, new THREE.Vector3( -3213.69, -543.01, -3779.86 ) );
panorama15.link( panorama16, new THREE.Vector3( -4668.04, -384.85, 1730.22 ) );

panorama15.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4708.70, -1018.50, 1300.04), 0 );
} );

panorama16.link( panorama15, new THREE.Vector3( -2091.85, -550.86, -4499.78 ) );
panorama16.link( panorama17, new THREE.Vector3( -4782.68, -790.08, 1199.24 ) );

panorama16.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4617.12, -787.35, 1730.60), 0 );
} );

panorama17.link( panorama16, new THREE.Vector3( -2459.87, -717.87, -4290.11 ) );
panorama17.link( panorama18, new THREE.Vector3( -4533.57, -438.35, 2054.84 ) );

panorama17.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4623.33, -873.60, 1666.62), 0 );
} );

panorama18.link( panorama17, new THREE.Vector3( -1206.19, -629.58, -4801.12 ) );
panorama18.link( panorama4, new THREE.Vector3( 4825.40, -1287.17, -49.97 ) );

panorama18.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-218.46, -194.84, -4980.90), 0 );
} );



radius = 1500;
var loader = new THREE.FontLoader();
var info_p2_1, info_p6_1, info_p8_1, info_p9_1, info_p9_2, info_p10_1, info_p11_1, info_p13_1_1, info_p13_1_2, info_p13_2_1, info_p13_4_1, info_p13_4_2, info_p13_4_3, info_p13_4_4, info_p14_1_1, info_p14_1_2, info_p14_1_3, info_p15_2_1, info_p15_2_2;

loader.load( './fonts/tbi.json', onFontLoaded );
function onFontLoaded ( _font ) {
        font = _font;

p3_t1 = createLabel('Конференц-зал', 0.7, 170);
//panorama3.add( p3_t1 );
p5_t1 = createLabel('Кабинет дополнительного \n        образования', 2.4, -50);
//panorama5.add( p5_t1 );
p5_t2 = createLabel('Мастерские', 1.1, -130);
//panorama5.add( p5_t2 );
p1_t4 = createLabel('3-й этаж', 0.8, 80);
//panorama1.add( p1_t4 );
p1_t5 = createLabel('Кабинет для работы \n    с документами', 0.7, -175);
//panorama1.add( p1_t5 );

p17_1_t1 = createLabel('Коридор 1-го этажа', 5.9, -175);
//panorama17_1.add( p17_1_t1 );

p17_2_t1 = createLabel('Коридор 1-го этажа', 4.5, -175);
//panorama17_2.add( p17_2_t1 );

p2_t1 = createLabel('К лабораториям', 4.6, 20);
//panorama2.add( p2_t1 );
p2_t2 = createLabel('Коридор 1-го этажа', 1.3, -250);
//panorama2.add( p2_t2 );

p3_t1 = createLabel('Санпропускник', 5.05, -20);
//panorama3.add( p3_t1 );
p3_t2 = createLabel('Автоклавная', 4.83, -330);
//panorama3.add( p3_t2 );
p3_t3 = createLabel('Микробиологические \n      исследования', 0.65, -100);
//panorama3.add( p3_t3 );
p3_t4 = createLabel('Микробиологические \n      исследования', 1.4, 00);
//panorama3.add( p3_t4 );
p3_t5 = createLabel('Микологические исследования', 3.2, -45);
//panorama3.add( p3_t5 );
p3_t6 = createLabel('Забор проб', 2.83, -55);
//panorama3.add( p3_t6 );

p4_t1 = createLabel('Коридор 1-го этажа', 0.55, -150);
//panorama4.add( p4_t1 );

p5_t1 = createLabel('Коридор 1-го этажа', 3.4, -175);
//panorama5.add( p5_t1 );

p6_t1 = createLabel('Коридор 1-го этажа', 2.4, -20);
//panorama6.add( p6_t1 );

p7_t1 = createLabel('Коридор 1-го этажа', 0.3, -20);
//panorama7.add( p7_t1 );

p8_t1 = createLabel('Коридор 1-го этажа', 2.2, -200);
//panorama8.add( p8_t1 );

p9_t1 = createLabel('Коридор 1-го этажа', 0.1, -100);
//panorama9.add( p9_t1 );

p10_t1 = createLabel('Коридор 1-го этажа', 1.16, -130);
//panorama10.add( p10_t1 );
p10_t2 = createLabel('Термостатная', 4.2, -10);
//panorama10.add( p10_t2 );

p12_t1 = createLabel('На 1-й этаж', 5.35, -130);
//panorama12.add( p12_t1 );
p12_t2 = createLabel('    Проведение \n физико-химических \n    исследований', 0.85, 250);
//panorama12.add( p12_t2 );
p12_t3 = createLabel('    Проведение \n физико-химических \n    исследований', 2.35, 100);
//panorama12.add( p12_t3 );
p12_t4 = createLabel('    Проведение \n физико-химических \n    исследований', 3.95, 50);
//panorama12.add( p12_t4 );

info_p5_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p5_1.position.set( -2519.86, -2234.82, 3687.60 );
info_p5_1.addHoverElement( document.getElementById( 'desc-p5_1' ), 200 );
//panorama5.add( info_p5_1 );

info_p6_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p6_1.position.set( 2870.49, -2174.70, 3456.64 );
info_p6_1.addHoverElement( document.getElementById( 'desc-p6_1' ), 200 );
//panorama6.add( info_p6_1 );

info_p8_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p8_1.position.set( -1157.05, 220.09, -4850.32 );
info_p8_1.addHoverElement( document.getElementById( 'desc-p8_1' ), 200 );
//panorama8.add( info_p8_1 );

info_p9_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p9_1.position.set( 4585.20, 326.18, 1952.45 );
info_p9_1.addHoverElement( document.getElementById( 'desc-p9_1' ), 200 );
//panorama9.add( info_p9_1 );

info_p9_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p9_2.position.set( 4462.10, -1174.62, -1918.06 );
info_p9_2.addHoverElement( document.getElementById( 'desc-p9_2' ), 200 );
//panorama9.add( info_p9_2 );

info_p10_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p10_1.position.set( 2853.84, 443.19, -4074.81 );
info_p10_1.addHoverElement( document.getElementById( 'desc-p10_1' ), 200 );
//panorama10.add( info_p10_1 );

info_p11_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p11_1.position.set( 3079.23, -373.10, 3912.63 );
info_p11_1.addHoverElement( document.getElementById( 'desc-p11_1' ), 200 );
//panorama11.add( info_p11_1 );

info_p13_1_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_1_1.position.set( 3745.09, -2321.64, 2348.57 );
info_p13_1_1.addHoverElement( document.getElementById( 'desc-p13_1_1' ), 200 );
//panorama13_1.add( info_p13_1_1 );
info_p13_1_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_1_2.position.set( -910.80, -2366.09, -4305.69 );
info_p13_1_2.addHoverElement( document.getElementById( 'desc-p13_1_2' ), 200 );
//panorama13_1.add( info_p13_1_2 );

info_p13_2_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_2_1.position.set( -4919.62, 225.32, 800.70 );
info_p13_2_1.addHoverElement( document.getElementById( 'desc-p13_2_1' ), 200 );
//panorama13_2.add( info_p13_2_1 );

info_p13_4_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_1.position.set( 2255.78, -2283.40, 3830.85 );
info_p13_4_1.addHoverElement( document.getElementById( 'desc-p13_4_1' ), 200 );
//panorama13_4.add( info_p13_4_1 );
info_p13_4_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_2.position.set( 3963.87, -1368.49, 2706.61 );
info_p13_4_2.addHoverElement( document.getElementById( 'desc-p13_4_2' ), 200 );
//panorama13_4.add( info_p13_4_2 );
info_p13_4_3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_3.position.set( 4585.53, -1505.99, -1276.95 );
info_p13_4_3.addHoverElement( document.getElementById( 'desc-p13_4_3' ), 200 );
//panorama13_4.add( info_p13_4_3 );
info_p13_4_4 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_4.position.set( -1331.62, -3079.72, -3697.05 );
info_p13_4_4.addHoverElement( document.getElementById( 'desc-p13_4_4' ), 200 );
//panorama13_4.add( info_p13_4_4 );

info_p14_1_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_1.position.set( -4615.91, -1770.56, -681.55 );
info_p14_1_1.addHoverElement( document.getElementById( 'desc-p14_1_1' ), 200 );
//panorama14_1.add( info_p14_1_1 );
info_p14_1_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_2.position.set( -4950.63, -539.46, -315.52 );
info_p14_1_2.addHoverElement( document.getElementById( 'desc-p14_1_2' ), 200 );
//panorama14_1.add( info_p14_1_2 );
info_p14_1_3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_3.position.set( -2884.14, -1090.44, 3931.56 );
info_p14_1_3.addHoverElement( document.getElementById( 'desc-p14_1_3' ), 200 );
//panorama14_1.add( info_p14_1_3 );

info_p15_2_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p15_2_1.position.set( 4173.26, -1802.17, 2060.94 );
info_p15_2_1.addHoverElement( document.getElementById( 'desc-p15_2_1' ), 200 );
//panorama15_2.add( info_p15_2_1 );
info_p15_2_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p15_2_2.position.set( -4820.01, -821.60, -1035.75 );
info_p15_2_2.addHoverElement( document.getElementById( 'desc-p15_2_2' ), 200 );
//panorama15_2.add( info_p15_2_2 );

}

function createLabel(text='', angle=0, height=0)
{
    titleSprite = createTextShape( text, 15);
    titleSprite.position.set( radius * Math.sin( -angle ), height, radius * Math.cos( -angle ) );
    titleSprite.position.y += 45;
    titleSprite.rotation.y = Math.PI - angle;
    titleSprite.scale.multiplyScalar( 2 );
    return titleSprite;
}




