
var ComponentFactory = function(config){
    var $Div = $('<div class = "component base"></div>');
    config.className && $Div.addClass(config.className);
    config.width && $Div.width(config.width);
    config.height && $Div.height(config.height);
    config.text && $Div.text(config.text);
    config.center && $Div.css({
        position:'absolute',
        left:'50%',
        transform:'translateX(-50%)'
    })
    config.css && $Div.css(config.css);
    if(config.event){
        for(var prop in config.event){
            $Div.on(prop,config.event[prop]);
        }
    }
    $Div.on('cpLeave',function(){
        var self = this;
        if(config.delay){
            setTimeout(function(){
                config.animateOut && $(self).animate(config.animateOut);
            },config.delay || 0)
        }        
    })
    $Div.on('cpLoad',function(){
        var self = this;
        if(config.delay){
            setTimeout(function(){
                $(self).animate(config.animateIn);
            },config.delay || 0)
        }    
    })
    return $Div;
}