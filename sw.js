importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"b2dae42ebf85bbfdace2444f4ea67bc2","url":"contributors.html"},{"revision":"e6c7eee7884d00ebd618f307708956a6","url":"feedback.html"},{"revision":"6244c8d41a96db3c1ca5b110a0af290b","url":"images/DV.png"},{"revision":"46d7027f8d6ffeb4d585ee7ee6ab476c","url":"images/eq1.png"},{"revision":"f6b0e2ba00415940c571e4ed9ee2721b","url":"images/eq2_intro.png"},{"revision":"8d7338cd55e58a3c148bf910f7b27ffc","url":"images/eq2.jpg"},{"revision":"57462785f67c38eede83f9eba4b171e3","url":"images/eq3.png"},{"revision":"9638879900d5b01c779afd07607f6504","url":"images/FOH_DO.png"},{"revision":"b6978fe82454e9a46bf41a62fed5e223","url":"images/FOH.jpg"},{"revision":"6cf743a3b0684170bcd0301a31d56249","url":"images/iitkgp.png"},{"revision":"ba3522afd703a93fa6cc7c2d8676d586","url":"images/ps1.png"},{"revision":"0b5c94f315e8896fca97c661880403ba","url":"images/q1.png"},{"revision":"ad0696bd039e302241a435b646c85cc5","url":"images/Q1a.png"},{"revision":"5f5ed452eab3d71375bc79dc5b55c567","url":"images/Q1b.png"},{"revision":"4b7239335f6f86a9a62acdd4515bfc46","url":"images/Q1c.png"},{"revision":"76ed5fb8a30597610da3ef0a78cd9b72","url":"images/Q1d.png"},{"revision":"3e1f59324d03399e449610155db4289d","url":"images/Q2a.png"},{"revision":"e25371781d86503317a0a4ff408fc9e7","url":"images/Q2b.png"},{"revision":"e6770fead0114833df85b3aa4f7559ea","url":"images/Q2c.png"},{"revision":"ccbcddd03442d0be06f6548eaf505261","url":"images/Q2d.png"},{"revision":"a2b4cc5dba2e9611f57b00e427657c66","url":"images/Q3a.png"},{"revision":"ee2127595ecd38ce620c4a2578aa1aed","url":"images/Q3b.png"},{"revision":"f89bd12a7beff5952e2e2c4cfa86d3bd","url":"images/Q3c.png"},{"revision":"5e6a41236839a07d032a09bd5187cbb9","url":"images/Q3d.png"},{"revision":"6529e54ab33f7cd7a0ba73eaa1e19a03","url":"images/Q4a.png"},{"revision":"63fbdd7095336e850e8bee39586d1523","url":"images/Q4b.png"},{"revision":"a97951efcf738477d93b75bbfca47cbf","url":"images/Q4c.png"},{"revision":"ace7ace8cfd4e4fe8943455401a4ecee","url":"images/Q4d.png"},{"revision":"309021bb6459e2f1b19d0a9fe346746a","url":"images/t_kT.png"},{"revision":"4c9c370d4f5dd510be819f6563765b07","url":"images/u(t) = u(k).jpg"},{"revision":"010ec4d8fea845667ac17ff7f9303d3b","url":"images/vlabs.png"},{"revision":"1c56c44b8bea104ffdda31435c9c7cb8","url":"images/y_a(t)_t0.png"},{"revision":"2fd9bdf0553390c50116a2ac4c780a6b","url":"images/y0_y1_yk.png"},{"revision":"21f664b36ece61bc65b593499eb6d613","url":"images/ya_t.png"},{"revision":"e61c8a20b177d1ff345d4adcc4acdafe","url":"images/yk.png"},{"revision":"cf2ce9089096391b61d3b0500afc5a0f","url":"images/ZOH block.jpg"},{"revision":"6ea60225874e689640a1655846d51950","url":"images/ZOH_DO.png"},{"revision":"05401aab0197d8c19148a21e7e365347","url":"images/ZOH.jpg"},{"revision":"c45bdbeb60dcbf77e63d3399f9baabe4","url":"index.html"},{"revision":"f8c8327b897cca13a8b1824ba599f094","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"d835ce744493e4fbeaacb21ade3ee5a4","url":"posttest.html"},{"revision":"04e12737023943da45eeaa0c5bc32616","url":"posttest.json"},{"revision":"c243591c073378fb1cd56ad6bc70b318","url":"pretest.html"},{"revision":"942abf05468f8832c6d5d8689b12b3dc","url":"pretest.json"},{"revision":"9d38631e52ed529e1729c0e5520bbb4a","url":"procedure.html"},{"revision":"74b65fad5022ff70094e56313c0c6884","url":"references.html"},{"revision":"aef26880d144b2e7fa596e73f247ff72","url":"simulation.html"},{"revision":"76f57baaaa7c1a438f7d228f7b1aa56c","url":"simulation/css/TC.css"},{"revision":"5e1cdd735aca572c60aee9f065b87994","url":"simulation/images/build.png"},{"revision":"dded22174fa2f622fcbcd6ff47d52cf8","url":"simulation/images/config-1.png"},{"revision":"5285b27d070223d5cd6c3f03c7a7917f","url":"simulation/images/config-2.png"},{"revision":"6871f28de44f0d9331b296bd0efebbe2","url":"simulation/images/conn.png"},{"revision":"6cf743a3b0684170bcd0301a31d56249","url":"simulation/images/iitkgp.png"},{"revision":"c65e54722c3db018be41e1c69071c61e","url":"simulation/images/logo.jpg"},{"revision":"92b8b021628bfd1c5e1bc9ca105c512b","url":"simulation/images/pause.png"},{"revision":"30ce22d1e609e0646de40641db164624","url":"simulation/images/plant actul ol mdl.png"},{"revision":"fe71508364c1beca6060096089f41636","url":"simulation/images/plant.png"},{"revision":"baa67278a5b7cd9ce207303d0e75d695","url":"simulation/images/run.png"},{"revision":"89c89d828df78f54ea08f3f351194953","url":"simulation/images/simu_scope.png"},{"revision":"010ec4d8fea845667ac17ff7f9303d3b","url":"simulation/images/vlabs.png"},{"revision":"e1f1f8edea471303969f04b191f0387b","url":"simulation/index.html"},{"revision":"8bc8995cad7b9af2c21ea9a8a9e3d48c","url":"simulation/js/ZOH_FOH.js"},{"revision":"017dfbb2599ad079724d0eb470cc9a41","url":"theory.html"},{"revision":"8fd8ee00b8a7012addbc060f09e6233d","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );