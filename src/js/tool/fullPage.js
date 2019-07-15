$.fn.extend({
    myFullPage:function(config){
        var colorsArray = config.colorsArray;
        var duration = config.duration || 500;
        var onLeave = config.onLeave;
        var onLoad = config.onLoad;
        var $W = $(this);
        var $section = $('.section');
        var commonStyle = {
            width:'100%',
            height:'100%'
        };
        var w = $(window).outerWidth();
        var h = $(window).outerHeight();
        var curIndex = 0;
        var lock = true;

        $('html').add('body').css({
            position:'relative',
            overflow:'hidden',
            margin:0
        })
        .add('.wrapper')
        .add('.section')
        .css(commonStyle);

        $W.css({
            position:'absolute',
            top:0,
            left:0
        })
        .find('.section').each(function(index,ele){
            $(ele).css({
                background:colorsArray[index],
                backgroundSize:'100% 100%',
                position:'relative'
            }).find('.slide').css({
                position:'relative',
                float:'left',
                width:w,
                height:h,
            }).wrapAll('<div class = "slideWrapper"></div>');
        })

        $W.find('.slideWrapper').each(function(index,ele){
            $(ele).css({
                width:$(ele).find('.slide').length * w,
                height:h,
                position:'absolute',
                top:0,
                left:0
            })
        })

        $section.eq(0).addClass('active');
        $('.slideWrapper').each(function(index,ele){
            $(ele).find('.slide').eq(0).addClass('innerActive');
        })

        $(document).on('keydown',function(e){
            var keyCode = e.which;
            //37 ←  39 →  38 ↑ 40 ↓
            if(keyCode == 38 || keyCode == 40){
                if(lock){
                    lock = false;
                    var newTop = $W.offset().top;
                    var dir = '';
                    if(keyCode == 38 && curIndex != 0){
                        dir = 'top';
                        onLeave(curIndex,dir)
                        curIndex --;
                        newTop += h;
                    }
                    if(keyCode == 40 && curIndex != $section.length - 1){
                        dir = 'bottom';
                        onLeave(curIndex,dir);
                        curIndex ++;
                        newTop -= h;    
                    }
                    $W.animate({
                        top:newTop
                    },duration,'swing',function(){
                        lock = true;
                        $section.eq(curIndex).addClass('active');
                        if(dir == 'top'){
                            $section.eq(curIndex + 1).removeClass('active');
                        }else{
                            $section.eq(curIndex - 1).removeClass('active');
                        }
                        onLoad(curIndex,dir);
                    })
                }   
            }
            
            if((keyCode == 37 || keyCode == 39) && $('.active').find('.slide').length){
                if(lock){
                    lock = false;
                    var $SW = $('.active').find('.slideWrapper');
                    // 
                    var $curShowDom = $SW.find('.innerActive');
                    var newLeft = $SW.offset().left;
                    var direction = null;
                    if(keyCode == 37 && $curShowDom.index() != 0){
                        newLeft += w;
                        direction = 'left';
                    }

                    if(keyCode == 39 && $curShowDom.index() != $SW.find('.slide').length - 1){
                        newLeft -= w;
                        direction = 'right';
                    }

                    $SW.animate({
                        left:newLeft
                    },duration,'swing',function(){
                        lock = true;
                        direction !== null ? $curShowDom.removeClass('innerActive'):'';
                        if(direction == 'left'){
                            $curShowDom.prev().addClass('innerActive');
                        }else if(direction == 'right'){
                            $curShowDom.next().addClass('innerActive');
                        }
                    })
                }
            }
        })


    }
})