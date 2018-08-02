$(document).ready(function(){ init()});
function init(){

    $("a[rel=thumb]").fancybox({'transitionIn': 'none','transitionOut': 'none','titlePosition': 'over', 'showNavArrows':'false'});

    setfixedheader();
    $(window).scroll(function() {setfixedheader();});


    $(window).resize(function(){
        setfixedheader();
    });

    $(window).resize();

    $(".menu-line .menu .showmwnu").click(function(){
        $(".menu-line .menu").toggleClass("show");
        return false;
    });
    if($(".main_slider").length>0){
        $('.main_slider .owl-carousel').owlCarousel({
            center: true,
            items: 1,
            nav:true,
            loop: true,
        });
    }
    if($(".about .sert").length>0){
        $('.about .sert .owl-carousel').owlCarousel({
            center: true,
            items: 1,
            nav:true,
            loop: true,
        });
    }

    if($(".mywork").length>0){
        $('.mywork .owl-carousel').owlCarousel({
            items: 1,
            margin:20,
            nav:true,
            loop: true,
            responsive: {
                500: {
                    items: 2
                },
                700: {
                    items: 3
                }
            }
        });
    }

    if($(".review").length>0){
        $('.review .owl-carousel').owlCarousel({
            items: 1,
            margin:20,
            nav:true,
            loop: true,
            responsive: {
                500: {
                    items: 1
                },
                650: {
                    items: 2
                },
                870: {
                    items: 3
                },
            }
        });
    }

    $("button.review_button").click(function() {
        opendlg($(".dialogs.backform"), "fixed");
        return false;
    });

    $(".closedlg-tnx").click(function(){
        $(".overlay-tnx").fadeOut(100);
        $(".dialog-tnx").fadeOut(100);
        return false;
    });

    $(".closedlg").click(function(){
        $(".overlay").fadeOut(100);
        $(".dialogs").fadeOut(100);
        return false;
    });

    if($("#tnxmessage").length>0)opentnx($("#tnxcaption").html(),$("#tnxmessage").html(),0,false);


    submitfn();

    $("header .menu button").click(function(){
        $("header .menu").toggleClass("show320");

        return false;
    });

    $(".swrapper .leftmenu button").click(function(){
        $(".swrapper .leftmenu").toggleClass("show768");

        return false;
    });




}


function setfixedheader(){
    var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var h = window.innerHeight;
    if(w > 730){
        $("header .menu").removeClass("show320");
        $(".swrapper .leftmenu").removeClass("show768");

    }
  //  $(".ainfo").text(w+" "+h);

}

function submitfn(){

    $("form.submitfm").submit(function(){

        var p=$(this);
        var rtid = $("input[name=rtid]", p).val();
        var error_text="";
        $('.required input',p).removeClass("error");
        var error=0;
        var sa=$("input.rq",p);

        if($(sa).size()>0){
            $(sa).each(function(i,n){
                var name=$(this).attr("name");
                if(name!="email")
                {
                    if($.trim($(this).val())==""){error=true; $(this).addClass("error"); error_text+='<span class="efield"><i></i>'+$(this).data("error")+'</span>';}
                }
                else
                {
                    if(!isValidEmailAddress($(this).val())){error=true;   $(this).addClass("error"); error_text+='<span class="efield"><i></i>'+$(this).data("error")+'</span>';}
                }
            });
        }
        sa=$("textarea.rq",p);
        if($(sa).size()>0){
            $(sa).each(function(i,n){
                if($.trim($(this).val())==""){error=true;  $(this).addClass("error"); error_text+='<span class="efield"><i></i>'+$(this).data("error")+'</span>';}
            });
        }



        if(error==1){
            error_text='<div class="errors-list">'+error_text+'<div>';
            opentnx("Внимание","В форме обнаружены ошибки!"+error_text,0,true);
            return false;
        }
        var ht = '<input name="formsp" type="hidden" value="' + rtid + '">';
        p.append(ht);


        return true;
    });
}
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}



function opentnx(caption,txt,delay,error){
    $(".dialog-tnx h2").html(caption);
    $(".jstxt",".dialog-tnx").html(txt);
    var name= $(".dialog-tnx");
    name.removeClass("error");
    if(error)name.addClass("error");
    var dlg_fade_speed=1;
    $(name).hide();
    var w=Math.round((name.outerWidth())/2);
    var h=name.height();
    var g=$("body").height();
    var offset=0;
    if(h<g)offset=Math.round((g/2)-(h/2));
    name.css("margin-left","-"+w+"px");
    name.css("top",offset);
    name.fadeIn(dlg_fade_speed);
    $(".overlay-tnx").fadeIn(dlg_fade_speed);

    if(delay>0)
    {
        setTimeout(function(){
            $(".overlay-tnx").fadeOut(100);
            $(".dialog-tnx").fadeOut(100);
        }, delay);
    }
}


function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

function opendlg( name, position){
    $("input[type=text]", name).val("");
    $("textarea", name).val("");

    $("input", name).removeClass("error");
    $("textarea", name).removeClass("error");

    var dlg_fade_speed=300;
    $(".dialogs").hide();
    var w=Math.round((name.outerWidth())/2);
    var h=name.height();
    var g=$("body").height();
    var offset=0;
    if(h<g)offset=Math.round((g/2)-(h/2));
    name.css("position",position);
    name.css("margin-left","-"+w+"px");
    var xc=$(document).scrollTop()+offset;
    if(xc<0)xc=0;
    if(position=="absolute")name.css("top",xc);
    if(position=="fixed")name.css("top",offset);
    name.fadeIn(dlg_fade_speed);
    $(".overlay").fadeIn(dlg_fade_speed);
}


function newMyWindow(href) {
    var d = document.documentElement,
        h = 600,
        w = 1000,
        myWindow = window.open(href, 'myWindow', 'scrollbars=1,height='+Math.min(h, screen.availHeight)+',width='+Math.min(w, screen.availWidth)+',left='+Math.max(0, ((d.clientWidth - w)/2 + window.screenX))+',top='+Math.max(0, ((d.clientHeight - h)/2 + window.screenY)));

    // абзац для Chrome
    if (myWindow.screenY >= (screen.availHeight - myWindow.outerHeight)) {myWindow.moveTo(myWindow.screenX, (screen.availHeight - myWindow.outerHeight))};
    if (myWindow.screenX >= (screen.availWidth - myWindow.outerWidth)) {myWindow.moveTo((screen.availWidth - myWindow.outerWidth), myWindow.screenY)};

}
