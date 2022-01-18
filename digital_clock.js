/*
 * Class Name: DigitalClock
 * Start Date Project: 05/03/2020 03:00 PM
 * End Date Project: 05/03/2020 03:11 PM
 * Description: use this class for show time
 */
var DigitalClock = function(options){
 
    /*
     * init Variable
     */
    var vars = {
        elementID: '',
        fontSize: '46',
        dots: ':',
        dotsHexColor: '',
        dotsCssClass: '',
        System: 12,
        HexColor: '',
        cssClass: '',
        PMCssClass: ''
    };
 
    var Time = {
        Hours: "12",
        Minutes: "00",
        Seconds: "00",
        PM: ""
    };

    var init = function(){
        if(vars.elementID.length > 0){
            if(vars.elementID.indexOf('#') == -1){
                vars.elementID = "#" + vars.elementID;
            }
        }else{
            vars.elementID = 'body';
        }
        GetTime();
        var div = "";
        if(vars.HexColor.length > 0){
            div += "<div class='"+vars.cssClass+"' style='font-size:"+vars.fontSize+"px;color:"+vars.HexColor+" !important'>";
        }else{
            div += "<div class='"+vars.cssClass+"' style='font-size:"+vars.fontSize+"px'>";
        }
        div += "<span id='CHours'>"+Time.hours+"</span>";
        if(vars.dotsHexColor.length > 0){
            div +=  "<span id='dots' class='"+vars.dotsCssClass+"' style='color:"+vars.dotsHexColor+" !important'>"+vars.dots+"</span>";
        }else{
            div += "<span id='dots' class='"+vars.dotsCssClass+"'>"+vars.dots+"</span>";
        }
        div +=  "<span id='CMinutes'>"+Time.minutes+"</span>";
        if(vars.dotsHexColor.length > 0){
            div +=  "<span id='dots' class='"+vars.dotsCssClass+"' style='color:"+vars.dotsHexColor+" !important'>"+vars.dots+"</span>";
            }else{
                div += "<span id='dots' class='"+vars.dotsCssClass+"'>"+vars.dots+"</span>";
            }
        div +=  "<span id='CSeconds'>"+Time.seconds+"</span>"
        + "<span id='CPM' class='"+vars.PMCssClass+"'>" + Time.PM + "</span>"
        + "</div>";

        $(vars.elementID).append(div);
        
        setInterval(function(){
            GetTime();
            $("#CHours").html(Time.hours);
            $("#CMinutes").html(Time.minutes);
            $("#CSeconds").html(Time.seconds);
            $("#CPM").html(Time.PM);
        },1000);
    }
    /*
     * Can access this.method
     * inside other methods using
     * root.method()
     */
    var root = this;
 
    /*
     * Constructor
     */
    this.construct = function(options){
        $.extend(vars , options);
        init();
    };
 
    /*
     * Public method
     * Can be called outside class
     */
    this.ShowTime = function(){
        GetTime();
        console.log(Time.hours + vars.dots + Time.minutes + vars.dots + Time.seconds + " " + Time.PM);
    };
 
    /*
     * Private method
     * Can only be called inside class
     */
    var GetTime = function() {
        var now = new Date();
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours();
        
        if(vars.System == 12)
        {
            Time.PM = hours > 11 ? "PM" : "AM";
            hours = hours > 12 ? hours - 12 : hours;
            hours = hours == 0 ? 12 : hours;
        }

        Time.hours = hours.toString().length == 1 ? "0" + hours.toString() : hours.toString();
        Time.minutes = minutes.toString().length == 1 ? "0" + minutes.toString() : minutes.toString();
        Time.seconds = seconds.toString().length == 1 ? "0" + seconds.toString() : seconds.toString();
    };
 
 
    /*
     * Pass options when class instantiated
     */
    this.construct(options);
 
};
 
 
