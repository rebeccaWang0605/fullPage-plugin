pageEngine.init('.wrapper',['url(./src/img/1bg.jpg)','url(./src/img/2bg.jpg)','url(./src/img/3bg.jpg)','url(./src/img/4bg.jpg)'],500)
    .addSection('section1')
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '忘记输入 享受Mac',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            top: 0,                      
            padding: '10px 15px 10px 15px',
            textAlign: 'justify',
            fontSize: '60px',
            fontWeight: '400',
            borderBottom:'1px solid rgba(0,0,0,0.3)',
            lineHeight:'70px',
            color:'rgba(0,0,0,0.3)'
        },
        animateIn: {
            opacity: 1,
            top: 120,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '搜狗拼音输入法 for Mac 3.5.0',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            left: '100%',
            top: 230,                     
            padding: '10px 15px 10px 15px',
            textAlign: 'justify',
            fontSize: '40px',
            fontWeight: '400',
            lineHeight: '25px',
            color:'rgba(0,0,0,0.6)'
        },
        animateIn: {
            opacity: 1,
            left: '50%',
        },
        animateOut: {
            opacity: 0,
            left: '100%'
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '我们相信，在Mac的世界中，你只需放飞自己的想象力享受一切理所应当的美好！',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            left: 0, 
            top:300,               
            padding: '10px 15px 10px 15px',
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: '400',
            lineHeight: '40px',
            color:'rgba(0,0,0,0.5)'
        },
        animateIn: {
            opacity: 1,
            left: '50%',
        },
        animateOut: {
            opacity: 0,
            left: 0
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '立即下载',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            bottom: 0,                      
            padding: '5px 40px',
            textAlign: 'justify',
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '40px',
            color:'#fff',
            borderRadius:'40px',
            background:'rgb(75, 191, 195)'
        },
        animateIn: {
            opacity: 1,
            bottom: 200,
        },
        animateOut: {
            opacity: 0,
            bottom: 0
        },
        delay: 500
    })
    .addSection('section2')
    .addSlide('slide-1')
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '不为另类 只因喜爱',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            top: 0,                      
            padding: '10px 15px 10px 15px',
            textAlign: 'justify',
            fontSize: '60px',
            fontWeight: '400',
            borderBottom:'1px solid rgba(255,255,255,1)',
            lineHeight:'70px',
            color:'rgba(255,255,255,1)'
        },
        animateIn: {
            opacity: 1,
            top: 120,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '搜狗五笔输入法 for Mac 1.0.0',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            left: '100%',
            top: 230,                     
            padding: '10px 15px 10px 15px',
            textAlign: 'justify',
            fontSize: '40px',
            fontWeight: '400',
            lineHeight: '25px',
            color:'rgba(255,255,255,1)'
        },
        animateIn: {
            opacity: 1,
            left: '50%',
        },
        animateOut: {
            opacity: 0,
            left: '100%'
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '从PC到Mac，我们力求让你的五笔输入法得到同样的优质体验继承Windows输入法的完美血统',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            left: 0, 
            top:300,               
            padding: '10px 15px 10px 15px',
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: '400',
            lineHeight: '40px',
            color:'rgba(255,255,255,0.6)'
        },
        animateIn: {
            opacity: 1,
            left: '50%',
        },
        animateOut: {
            opacity: 0,
            left: 0
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '立即下载',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            bottom: 0,                      
            padding: '5px 40px',
            textAlign: 'justify',
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '40px',
            color:'#fff',
            borderRadius:'40px',
            background:'rgb(75, 191, 195)'
        },
        animateIn: {
            opacity: 1,
            bottom: 200,
        },
        animateOut: {
            opacity: 0,
            bottom: 0
        },
        delay: 500
    })
    .addSlide('slide-2')
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '不为另类 只因喜爱',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            top: 0,                      
            padding: '10px 15px 10px 15px',
            textAlign: 'justify',
            fontSize: '60px',
            fontWeight: '400',
            borderBottom:'1px solid rgba(255,255,255,1)',
            lineHeight:'70px',
            color:'rgba(255,255,255,1)'
        },
        animateIn: {
            opacity: 1,
            top: 120,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '搜狗五笔输入法 for Mac 1.0.0',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            left: '100%',
            top: 230,                     
            padding: '10px 15px 10px 15px',
            textAlign: 'justify',
            fontSize: '40px',
            fontWeight: '400',
            lineHeight: '25px',
            color:'rgba(255,255,255,1)'
        },
        animateIn: {
            opacity: 1,
            left: '50%',
        },
        animateOut: {
            opacity: 0,
            left: '100%'
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '从PC到Mac，我们力求让你的五笔输入法得到同样的优质体验继承Windows输入法的完美血统',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            left: 0, 
            top:300,               
            padding: '10px 15px 10px 15px',
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: '400',
            lineHeight: '40px',
            color:'rgba(255,255,255,0.6)'
        },
        animateIn: {
            opacity: 1,
            left: '50%',
        },
        animateOut: {
            opacity: 0,
            left: 0
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '立即下载',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            bottom: 0,                      
            padding: '5px 40px',
            textAlign: 'justify',
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '40px',
            color:'#fff',
            borderRadius:'40px',
            background:'rgb(75, 191, 195)'
        },
        animateIn: {
            opacity: 1,
            bottom: 200,
        },
        animateOut: {
            opacity: 0,
            bottom: 0
        },
        delay: 500
    })
    .addSlide('slide-3')
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '不为另类 只因喜爱',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            top: 0,                      
            padding: '10px 15px 10px 15px',
            textAlign: 'justify',
            fontSize: '60px',
            fontWeight: '400',
            borderBottom:'1px solid rgba(255,255,255,1)',
            lineHeight:'70px',
            color:'rgba(255,255,255,1)'
        },
        animateIn: {
            opacity: 1,
            top: 120,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '搜狗五笔输入法 for Mac 1.0.0',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            left: '100%',
            top: 230,                     
            padding: '10px 15px 10px 15px',
            textAlign: 'justify',
            fontSize: '40px',
            fontWeight: '400',
            lineHeight: '25px',
            color:'rgba(255,255,255,1)'
        },
        animateIn: {
            opacity: 1,
            left: '50%',
        },
        animateOut: {
            opacity: 0,
            left: '100%'
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '从PC到Mac，我们力求让你的五笔输入法得到同样的优质体验继承Windows输入法的完美血统',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            left: 0, 
            top:300,               
            padding: '10px 15px 10px 15px',
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: '400',
            lineHeight: '40px',
            color:'rgba(255,255,255,0.6)'
        },
        animateIn: {
            opacity: 1,
            left: '50%',
        },
        animateOut: {
            opacity: 0,
            left: 0
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '立即下载',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            bottom: 0,                      
            padding: '5px 40px',
            textAlign: 'justify',
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '40px',
            color:'#fff',
            borderRadius:'40px',
            background:'rgb(75, 191, 195)'
        },
        animateIn: {
            opacity: 1,
            bottom: 200,
        },
        animateOut: {
            opacity: 0,
            bottom: 0
        },
        delay: 500
    })
    .addSection('section3')
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: 'Hello,Mac!',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            top: 0,                      
            padding: '10px 15px 10px 15px',
            textAlign: 'justify',
            fontSize: '60px',
            fontWeight: '400',
            borderBottom:'1px solid rgba(255,255,255,1)',
            lineHeight:'70px',
            color:'rgba(255,255,255,1)'
        },
        animateIn: {
            opacity: 1,
            top: 120,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '皮肤编辑器 for Mac 1.0.0',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            left: '100%',
            top: 230,                     
            padding: '10px 15px 10px 15px',
            textAlign: 'justify',
            fontSize: '40px',
            fontWeight: '400',
            lineHeight: '25px',
            color:'rgba(255,255,255,1)'
        },
        animateIn: {
            opacity: 1,
            left: '50%',
        },
        animateOut: {
            opacity: 0,
            left: '100%'
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '无论你是轻车熟路的皮肤作者，还是灵感爆棚的设计师，都将在这里找到归属感带来梦想照进现实般的创作体验',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            left: 0, 
            top:300,               
            padding: '10px 15px 10px 15px',
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: '400',
            lineHeight: '40px',
            color:'rgba(255,255,255,0.5)'
        },
        animateIn: {
            opacity: 1,
            left: '50%',
        },
        animateOut: {
            opacity: 0,
            left: 0
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '立即下载',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            bottom: 0,                      
            padding: '5px 40px',
            textAlign: 'justify',
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '40px',
            color:'#fff',
            borderRadius:'40px',
            background:'rgb(75, 191, 195)'
        },
        animateIn: {
            opacity: 1,
            bottom: 150,
        },
        animateOut: {
            opacity: 0,
            bottom: 0
        },
        delay: 500
    })
    .addSection('section4')
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '个性输入 缤纷心情',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            top: 0,                      
            padding: '10px 15px 10px 15px',
            textAlign: 'justify',
            fontSize: '60px',
            fontWeight: '400',
            borderBottom:'1px solid rgba(0,0,0,0.3)',
            lineHeight:'70px',
            color:'rgba(0,0,0,0.3)'
        },
        animateIn: {
            opacity: 1,
            top: 120,
        },
        animateOut: {
            opacity: 0,
            top: 0
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '海量精美皮肤 for Mac',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            left: '100%',
            top: 230,                     
            padding: '10px 15px 10px 15px',
            textAlign: 'justify',
            fontSize: '40px',
            fontWeight: '400',
            lineHeight: '25px',
            color:'rgba(0,0,0,0.6)'
        },
        animateIn: {
            opacity: 1,
            left: '50%',
        },
        animateOut: {
            opacity: 0,
            left: '100%'
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '简约派，或是萌系一族，我们都能给你想要的与众不同打字这件小事，也可玩味十足',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            left: 0, 
            top:300,               
            padding: '10px 15px 10px 15px',
            textAlign: 'center',
            fontSize: '28px',
            fontWeight: '400',
            lineHeight: '40px',
            color:'rgba(0,0,0,0.5)'
        },
        animateIn: {
            opacity: 1,
            left: '50%',
        },
        animateOut: {
            opacity: 0,
            left: 0
        },
        delay: 500
    })
    .addComponent({
        type: 'base',
        className: 'fullPage',
        text: '前往皮肤Store',
        center: true,
        css: {
            position: 'absolute',
            opacity: 0,
            bottom: 0,                      
            padding: '5px 40px',
            textAlign: 'justify',
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '40px',
            color:'#fff',
            borderRadius:'40px',
            background:'rgb(75, 191, 195)'
        },
        animateIn: {
            opacity: 1,
            bottom: 200,
        },
        animateOut: {
            opacity: 0,
            bottom: 0
        },
        delay: 500
    })
    .load();







// $('.wrapper').myFullPage({
//     colorsArray:['rgb(27, 188, 155)','rgb(75, 191, 195)','rgb(123, 170, 190)'],
//     onLeave:function(index,dir){
//         $('.section').eq(index).trigger('_leave');
//     },
//     onLoad:function(index,dir){
//         $('.section').eq(index).trigger('_load');
//     }
// })



// $('.section').append( ComponentFactory({
//     type: 'base',
//     className: 'fullPage',
//     width: 300,
//     height: 300,
//     text: '世界那么大,我想去看看',
//     center: true,
//     css: {
//         position: 'absolute',
//         opacity: 0,
//         top: 0,
//         backgroundImage: 'url(./src/img/3.jpg)',
//         backgroundSize: '100% 100%',                        
//         padding: '10px 15px 10px 15px',
//         textAlign: 'justify',
//         fontSize: '18px',
//         fontWeight: '900',
//         lineHeight: '25px'
//     },
//     animateIn: {
//         opacity: 1,
//         top: 150,
//     },
//     animateOut: {
//         opacity: 0,
//         top: 0
//     },
//     delay: 200,
//     event: {
//         click: function () {
//             alert($(this).text());
//         },
//         mouseenter:function(){
//             console.log(111);
//         }
//     }
// }) );
// $('.section').on('_leave',function(){
//     $(this).find('.component').trigger('cpLeave');
// })
// $('.section').on('_load',function(){
//     $(this).find('.component').trigger('cpLoad');
// })