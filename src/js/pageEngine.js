var pageEngine = {
    init:function(selector,colorsArray,duration){
        this.$W = $(selector);
        this.colorsArray = colorsArray;
        this.duration = duration;
        this.slideFlag = false;
        return this;
    },
    addSection:function(className){
        this.slideFlag = false;
        this.page = $('<div class = "section"></div>');
        className ? this.page.addClass(className):'';
        this.$W.append(this.page);
        return this;
    },
    addSlide:function(className){
        this.slideFlag = true;
        this.slide = $('<div class = "slide"></div>');
        className ? this.slide.addClass(className):'';
        this.page.append(this.slide);
        return this;
    },
    addComponent:function(config){
        var type = config.type;
        var oCp = null;
        switch(type){
            case 'base':
                oCp = ComponentFactory(config);
                break;
        }
        this.slideFlag ? this.slide.append(oCp) : this.page.append(oCp);
        return this;
    },
    bindEvent:function(){
        this.$W.find('.section').on('_leave',function(){
            $(this).find('.component').trigger('cpLeave');
        })
        this.$W.find('.section').on('_load',function(){
            $(this).find('.component').trigger('cpLoad');
        })
    },
    load:function(){
        var self = this;
        this.bindEvent();
        this.$W.myFullPage({
            colorsArray:self.colorsArray,
            onLeave:function(index,dir){
                self.$W.find('.section').eq(index).trigger('_leave');
            },
            onLoad:function(index,dir){
                self.$W.find('.section').eq(index).trigger('_load');
            }
        })
        this.$W.find('.section').eq(0).trigger('_load');
        return this;
    }
}