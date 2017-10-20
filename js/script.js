var cont = 0;
var cont1 = 0;
var cont2 = 0;
var resto;
var resto1;
var resto2;
var restoweb;
var restoapp;
var restointr;
var contweb = 0;
var contapp = 0;
var contintr = 0;
var flagweb = 0;
var flagapp = 0;
var flagintr = 0;
var flagweb1 = 0;
var flagapp1 = 0;
var flagintr1 = 0;

$(document).ready(function()
{$("#xuscitaweb").hide();
});

$(document).ready(function()
{$("#xuscitaapp").hide();
});

$(document).ready(function()
{$("#xuscitaintr").hide();
});


function frecciaweb(){

  if(flagapp == 1){
    document.getElementById("divapplicazioni").style.height="300px";
    document.getElementById("bouncefrecciaappcapovolta").style.transform="rotate(360deg)";
    document.getElementById("bouncefrecciaappcapovolta").style.width="20%";
    document.getElementById("bouncefrecciaappcapovolta").style.height="20%";
    document.getElementById("bouncefrecciaappcapovolta").style.marginTop="0px";
    document.getElementById("scoprdimenoapp").innerHTML="";
    document.getElementById("marginepapp").innerHTML="Mostra di più";
    document.getElementById("divapplicazioni").style.opacity="0.8";

    $(document).ready(function()
    {$("#xuscitaapp").hide();
    });

    flagapp = 0;

    document.getElementById("back_to_top1").id="back_to_topvuoto1";
    document.getElementById("idenimgapp").src="";
    $(document).ready(function()
    {$("#back_to_topvuoto").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto1").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto2").hide();
    });
    cont1++;
  }

  if(flagintr == 1){
    document.getElementById("divintranet").style.height="300px";
    document.getElementById("bouncefrecciaintrcapovolta").style.transform="rotate(360deg)";
    document.getElementById("bouncefrecciaintrcapovolta").style.width="20%";
    document.getElementById("bouncefrecciaintrcapovolta").style.height="20%";
    document.getElementById("bouncefrecciaintrcapovolta").style.marginTop="0px";
    document.getElementById("scoprdimenointr").innerHTML="";
    document.getElementById("marginepintr").innerHTML="Mostra di più";
    document.getElementById("divintranet").style.opacity="0.8";

    $(document).ready(function()
    {$("#xuscitaintr").hide();
    });

    flagintr = 0;

    document.getElementById("back_to_top2").id="back_to_topvuoto2";
    document.getElementById("idenimgintr").src="";

    $(document).ready(function()
    {$("#back_to_topvuoto").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto1").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto2").hide();
    });
    cont2++;
  }


  flagweb = 1;

  resto = cont%2;
  if(resto==0){

  document.getElementById("divweb").style.height="2000px";
  document.getElementById("bouncefrecciawebcapovolta").style.transform="rotate(180deg)";
  document.getElementById("bouncefrecciawebcapovolta").style.width="5%";
  document.getElementById("bouncefrecciawebcapovolta").style.height="5%";
  document.getElementById("bouncefrecciawebcapovolta").style.marginTop="1670px";
  document.getElementById("marginepweb").innerHTML="";
  document.getElementById("scoprdimenoweb").innerHTML="Mostra di meno";
  document.getElementById("divweb").style.opacity="1";

  $(document).ready(function()
  {$("#xuscitaweb").show();
  });

  $(document).ready(function(){
    $("#xuscitaweb").click(function(){
      document.getElementById("divweb").style.height="300px";
      document.getElementById("bouncefrecciawebcapovolta").style.transform="rotate(360deg)";
      document.getElementById("bouncefrecciawebcapovolta").style.width="20%";
      document.getElementById("bouncefrecciawebcapovolta").style.height="20%";
      document.getElementById("bouncefrecciawebcapovolta").style.marginTop="0px";
      document.getElementById("scoprdimenoweb").innerHTML="";
      document.getElementById("marginepweb").innerHTML="Mostra di più";
      document.getElementById("divweb").style.opacity="0.8";


      $(document).ready(function()
      {$("#xuscitaweb").hide();
      });

      flagweb = 0;
      document.getElementById("back_to_top").id="back_to_topvuoto";
      document.getElementById("idenimgweb").src="";

      $(document).ready(function()
      {$("#back_to_topvuoto").hide();
      });

      $(document).ready(function()
      {$("#back_to_topvuoto1").hide();
      });

      $(document).ready(function()
      {$("#back_to_topvuoto2").hide();
      });

      cont++;
    });
});

if(flagweb == 1){document.getElementById("back_to_topvuoto").id="back_to_top"; document.getElementById("idenimgweb").src="../img/frecciabacktop.png";}


 $(document).ready(function()
  {
      // Nascondo l'icona al caricamento della pagina
      $("#back_to_top").hide();

      // Intercetto lo scroll di pagina
    $(window).scroll(function()
      {
        if ($(document).scrollTop() > 600){
          // Se l'evento scroll si verifica, mostro l'icona (invisibile) con effetto dissolvenza
          if ($("#back_to_top").is(":hidden")) {
              $("#back_to_top").fadeIn(500);
          }
   }
          // Se si verifica il ritorno ad inizio pagina, nascondo l'icona con effetto dissolvenza
          if ($(document).scrollTop() < 600){

               $("#back_to_top").fadeOut(500);

           }
      });

      // Al click sull'icona, torno ad inizio pagina con movenza fluida
      $("#back_to_top").click(function()
      {
          $("html,body").animate({scrollTop: 0}, 500, function(){});
      });
  });

}

if(resto!=0){

document.getElementById("divweb").style.height="300px";
document.getElementById("bouncefrecciawebcapovolta").style.transform="rotate(360deg)";
document.getElementById("bouncefrecciawebcapovolta").style.width="20%";
document.getElementById("bouncefrecciawebcapovolta").style.height="20%";
document.getElementById("bouncefrecciawebcapovolta").style.marginTop="0px";
document.getElementById("scoprdimenoweb").innerHTML="";
document.getElementById("marginepweb").innerHTML="Mostra di più";
document.getElementById("divweb").style.opacity="0.8";


$(document).ready(function()
{$("#xuscitaweb").hide();
});

flagweb = 0;
document.getElementById("back_to_top").id="back_to_topvuoto";
document.getElementById("idenimgweb").src="";

$(document).ready(function()
{$("#back_to_topvuoto").hide();
});

$(document).ready(function()
{$("#back_to_topvuoto1").hide();
});

$(document).ready(function()
{$("#back_to_topvuoto2").hide();
});
}
cont++;
}



function frecciaapp(){

  if(flagweb == 1){
    document.getElementById("divweb").style.height="300px";
    document.getElementById("bouncefrecciawebcapovolta").style.transform="rotate(360deg)";
    document.getElementById("bouncefrecciawebcapovolta").style.width="20%";
    document.getElementById("bouncefrecciawebcapovolta").style.height="20%";
    document.getElementById("bouncefrecciawebcapovolta").style.marginTop="0px";
    document.getElementById("scoprdimenoweb").innerHTML="";
    document.getElementById("marginepweb").innerHTML="Mostra di più";
    document.getElementById("divweb").style.opacity="0.8";

    $(document).ready(function()
    {$("#xuscitaweb").hide();
    });

    flagweb = 0;
    document.getElementById("back_to_top").id="back_to_topvuoto";
    document.getElementById("idenimgweb").src="";

    $(document).ready(function()
    {$("#back_to_topvuoto").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto1").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto2").hide();
    });
    cont++;
  }

  if(flagintr == 1){
    document.getElementById("divintranet").style.height="300px";
    document.getElementById("bouncefrecciaintrcapovolta").style.transform="rotate(360deg)";
    document.getElementById("bouncefrecciaintrcapovolta").style.width="20%";
    document.getElementById("bouncefrecciaintrcapovolta").style.height="20%";
    document.getElementById("bouncefrecciaintrcapovolta").style.marginTop="0px";
    document.getElementById("scoprdimenointr").innerHTML="";
    document.getElementById("marginepintr").innerHTML="Mostra di più";
    document.getElementById("divintranet").style.opacity="0.8";

    $(document).ready(function()
    {$("#xuscitaintr").hide();
    });


    flagintr = 0;

    document.getElementById("back_to_top2").id="back_to_topvuoto2";
    document.getElementById("idenimgintr").src="";

    $(document).ready(function()
    {$("#back_to_topvuoto").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto1").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto2").hide();
    });
      cont2++;
  }
  flagapp = 1;

  resto1= cont1%2;
  if(resto1==0){

  document.getElementById("divapplicazioni").style.height="2000px";
  document.getElementById("bouncefrecciaappcapovolta").style.transform="rotate(180deg)";
  document.getElementById("bouncefrecciaappcapovolta").style.width="5%";
  document.getElementById("bouncefrecciaappcapovolta").style.height="5%";
  document.getElementById("bouncefrecciaappcapovolta").style.marginTop="1670px";
  document.getElementById("marginepapp").innerHTML="";
  document.getElementById("scoprdimenoapp").innerHTML="Mostra di meno";
  document.getElementById("divapplicazioni").style.opacity="1";

  $(document).ready(function()
  {$("#xuscitaapp").show();
  });

  $(document).ready(function(){
    $("#xuscitaapp").click(function(){
      document.getElementById("divapplicazioni").style.height="300px";
      document.getElementById("bouncefrecciaappcapovolta").style.transform="rotate(360deg)";
      document.getElementById("bouncefrecciaappcapovolta").style.width="20%";
      document.getElementById("bouncefrecciaappcapovolta").style.height="20%";
      document.getElementById("bouncefrecciaappcapovolta").style.marginTop="0px";
      document.getElementById("scoprdimenoapp").innerHTML="";
      document.getElementById("marginepapp").innerHTML="Mostra di più";
      document.getElementById("divapplicazioni").style.opacity="0.8";

      $(document).ready(function()
      {$("#xuscitaapp").hide();
      });

      flagapp = 0;

      document.getElementById("back_to_top1").id="back_to_topvuoto1";
      document.getElementById("idenimgapp").src="";
      $(document).ready(function()
      {$("#back_to_topvuoto").hide();
      });

      $(document).ready(function()
      {$("#back_to_topvuoto1").hide();
      });

      $(document).ready(function()
      {$("#back_to_topvuoto2").hide();
      });

      cont1++;
    });
});
  if(flagapp == 1){document.getElementById("back_to_topvuoto1").id="back_to_top1"; document.getElementById("idenimgapp").src="../img/frecciabacktop.png";}

 $(document).ready(function()
  {
      // Nascondo l'icona al caricamento della pagina
      $("#back_to_top1").hide();

      // Intercetto lo scroll di pagina
      $(window).scroll(function()
      {
        if ($(document).scrollTop() > 1200){
          // Se l'evento scroll si verifica, mostro l'icona (invisibile) con effetto dissolvenza
          if ($("#back_to_top1").is(":hidden")) {
              $("#back_to_top1").fadeIn(500);
          }
   }
          // Se si verifica il ritorno ad inizio pagina, nascondo l'icona con effetto dissolvenza
          if ($(document).scrollTop() < 1200){

               $("#back_to_top1").fadeOut(500);

           }
      });

      // Al click sull'icona, torno ad inizio pagina con movenza fluida
      $("#back_to_top1").click(function()
      {
          $("html,body").animate({scrollTop: 500}, 500, function(){});

      });
  });


}

if(resto1!=0){

document.getElementById("divapplicazioni").style.height="300px";
document.getElementById("bouncefrecciaappcapovolta").style.transform="rotate(360deg)";
document.getElementById("bouncefrecciaappcapovolta").style.width="20%";
document.getElementById("bouncefrecciaappcapovolta").style.height="20%";
document.getElementById("bouncefrecciaappcapovolta").style.marginTop="0px";
document.getElementById("scoprdimenoapp").innerHTML="";
document.getElementById("marginepapp").innerHTML="Mostra di più";
document.getElementById("divapplicazioni").style.opacity="0.8";

$(document).ready(function()
{$("#xuscitaapp").hide();
});

flagapp = 0;

document.getElementById("back_to_top1").id="back_to_topvuoto1";
document.getElementById("idenimgapp").src="";
$(document).ready(function()
{$("#back_to_topvuoto").hide();
});

$(document).ready(function()
{$("#back_to_topvuoto1").hide();
});

$(document).ready(function()
{$("#back_to_topvuoto2").hide();
});
}
cont1++;
}




function frecciaintr(){

  flagintr = 1;

if(flagweb == 1){document.getElementById("divweb").style.height="300px";
                 document.getElementById("bouncefrecciawebcapovolta").style.transform="rotate(360deg)";
                 document.getElementById("bouncefrecciawebcapovolta").style.width="20%";
                 document.getElementById("bouncefrecciawebcapovolta").style.height="20%";
                 document.getElementById("bouncefrecciawebcapovolta").style.marginTop="0px";
                 document.getElementById("scoprdimenoweb").innerHTML="";
                 document.getElementById("marginepweb").innerHTML="Mostra di più";
                 document.getElementById("divweb").style.opacity="0.8";

                 $(document).ready(function()
                 {$("#xuscitaweb").hide();
                 });

                 flagweb = 0;

                 document.getElementById("back_to_top").id="back_to_topvuoto";
                 document.getElementById("idenimgweb").src="";

                 $(document).ready(function()
                 {$("#back_to_topvuoto").hide();
               });

               $(document).ready(function()
               {$("#back_to_topvuoto1").hide();
             });

             $(document).ready(function()
             {$("#back_to_topvuoto2").hide();
           });
          cont++;
         }

  if(flagapp == 1){
    document.getElementById("divapplicazioni").style.height="300px";
    document.getElementById("bouncefrecciaappcapovolta").style.transform="rotate(360deg)";
    document.getElementById("bouncefrecciaappcapovolta").style.width="20%";
    document.getElementById("bouncefrecciaappcapovolta").style.height="20%";
    document.getElementById("bouncefrecciaappcapovolta").style.marginTop="0px";
    document.getElementById("scoprdimenoapp").innerHTML="";
    document.getElementById("marginepapp").innerHTML="Mostra di più";
    document.getElementById("divapplicazioni").style.opacity="0.8";

    $(document).ready(function()
    {$("#xuscitaapp").hide();
    });

    flagapp = 0;

    document.getElementById("back_to_top1").id="back_to_topvuoto1";
    document.getElementById("idenimgapp").src="";

    $(document).ready(function()
    {$("#back_to_topvuoto").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto1").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto2").hide();
    });
    cont1++;
  }
  resto2= cont2%2;
  if(resto2==0){

  document.getElementById("divintranet").style.height="2000px";
  document.getElementById("bouncefrecciaintrcapovolta").style.transform="rotate(180deg)";
  document.getElementById("bouncefrecciaintrcapovolta").style.width="5%";
  document.getElementById("bouncefrecciaintrcapovolta").style.height="5%";
  document.getElementById("bouncefrecciaintrcapovolta").style.marginTop="1670px";
  document.getElementById("marginepintr").innerHTML="";
  document.getElementById("scoprdimenointr").innerHTML="Mostra di meno";
  document.getElementById("divintranet").style.opacity="1";

  $(document).ready(function()
  {$("#xuscitaintr").show();
  });

  $(document).ready(function(){
    $("#xuscitaintr").click(function(){
      document.getElementById("divintranet").style.height="300px";
      document.getElementById("bouncefrecciaintrcapovolta").style.transform="rotate(360deg)";
      document.getElementById("bouncefrecciaintrcapovolta").style.width="20%";
      document.getElementById("bouncefrecciaintrcapovolta").style.height="20%";
      document.getElementById("bouncefrecciaintrcapovolta").style.marginTop="0px";
      document.getElementById("scoprdimenointr").innerHTML="";
      document.getElementById("marginepintr").innerHTML="Mostra di più";
      document.getElementById("divintranet").style.opacity="0.8";

      $(document).ready(function()
      {$("#xuscitaintr").hide();
      });

      flagintr = 0;

      document.getElementById("back_to_top2").id="back_to_topvuoto2";
      document.getElementById("idenimgintr").src="";

      $(document).ready(function()
      {$("#back_to_topvuoto").hide();
      });

      $(document).ready(function()
      {$("#back_to_topvuoto1").hide();
      });

      $(document).ready(function()
      {$("#back_to_topvuoto2").hide();
      });

      cont2++;
    });
   });
  if(flagintr == 1){document.getElementById("back_to_topvuoto2").id="back_to_top2"; document.getElementById("idenimgintr").src="../img/frecciabacktop.png";}


$(document).ready(function()
  {
      // Nascondo l'icona al caricamento della pagina
      $("#back_to_top2").hide();

      // Intercetto lo scroll di pagina
      $(window).scroll(function()
      {
        if ($(document).scrollTop() > 1400){
          // Se l'evento scroll si verifica, mostro l'icona (invisibile) con effetto dissolvenza
          if ($("#back_to_top2").is(":hidden")) {
              $("#back_to_top2").fadeIn(500);
          }
   }
          // Se si verifica il ritorno ad inizio pagina, nascondo l'icona con effetto dissolvenza
          if ($(document).scrollTop() < 1400){

               $("#back_to_top2").fadeOut(500);

           }
      });

      // Al click sull'icona, torno ad inizio pagina con movenza fluida
      $("#back_to_top2").click(function()
      {
          $("html,body").animate({scrollTop: 900}, 500, function(){});

      });
  });
}

if(resto2!=0){

document.getElementById("divintranet").style.height="300px";
document.getElementById("bouncefrecciaintrcapovolta").style.transform="rotate(360deg)";
document.getElementById("bouncefrecciaintrcapovolta").style.width="20%";
document.getElementById("bouncefrecciaintrcapovolta").style.height="20%";
document.getElementById("bouncefrecciaintrcapovolta").style.marginTop="0px";
document.getElementById("scoprdimenointr").innerHTML="";
document.getElementById("marginepintr").innerHTML="Mostra di più";
document.getElementById("divintranet").style.opacity="0.8";

$(document).ready(function()
{$("#xuscitaintr").hide();
});

flagintr = 0;

document.getElementById("back_to_top2").id="back_to_topvuoto2";
document.getElementById("idenimgintr").src="";

$(document).ready(function()
{$("#back_to_topvuoto").hide();
});

$(document).ready(function()
{$("#back_to_topvuoto1").hide();
});

$(document).ready(function()
{$("#back_to_topvuoto2").hide();
});

}
cont2++;
}

function prova(){

  if(flagapp == 1){
    document.getElementById("divapplicazioni").style.height="300px";
    document.getElementById("bouncefrecciaappcapovolta").style.transform="rotate(360deg)";
    document.getElementById("bouncefrecciaappcapovolta").style.width="20%";
    document.getElementById("bouncefrecciaappcapovolta").style.height="20%";
    document.getElementById("bouncefrecciaappcapovolta").style.marginTop="0px";
    document.getElementById("scoprdimenoapp").innerHTML="";
    document.getElementById("marginepapp").innerHTML="Mostra di più";
    document.getElementById("divapplicazioni").style.opacity="0.8";

    $(document).ready(function()
    {$("#xuscitaapp").hide();
    });

    flagapp = 0;

    document.getElementById("back_to_top1").id="back_to_topvuoto1";
    document.getElementById("idenimgapp").src="";
    $(document).ready(function()
    {$("#back_to_topvuoto").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto1").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto2").hide();
    });
    cont1++;
  }

  if(flagintr == 1){
    document.getElementById("divintranet").style.height="300px";
    document.getElementById("bouncefrecciaintrcapovolta").style.transform="rotate(360deg)";
    document.getElementById("bouncefrecciaintrcapovolta").style.width="20%";
    document.getElementById("bouncefrecciaintrcapovolta").style.height="20%";
    document.getElementById("bouncefrecciaintrcapovolta").style.marginTop="0px";
    document.getElementById("scoprdimenointr").innerHTML="";
    document.getElementById("marginepintr").innerHTML="Mostra di più";
    document.getElementById("divintranet").style.opacity="0.8";

    $(document).ready(function()
    {$("#xuscitaintr").hide();
    });

    flagintr = 0;

    document.getElementById("back_to_top2").id="back_to_topvuoto2";
    document.getElementById("idenimgintr").src="";

    $(document).ready(function()
    {$("#back_to_topvuoto").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto1").hide();
    });

    $(document).ready(function()
    {$("#back_to_topvuoto2").hide();
    });
    cont2++;
  }


  flagweb = 1;

  resto = cont%2;
  if(resto==0){

  document.getElementById("divweb").style.height="2000px";
  document.getElementById("bouncefrecciawebcapovolta").style.transform="rotate(180deg)";
  document.getElementById("bouncefrecciawebcapovolta").style.width="5%";
  document.getElementById("bouncefrecciawebcapovolta").style.height="5%";
  document.getElementById("bouncefrecciawebcapovolta").style.marginTop="1670px";
  document.getElementById("marginepweb").innerHTML="";
  document.getElementById("scoprdimenoweb").innerHTML="Mostra di meno";
  document.getElementById("divweb").style.opacity="1";

  $(document).ready(function()
  {$("#xuscitaweb").show();
  });

  $(document).ready(function(){
    $("#xuscitaweb").click(function(){
      document.getElementById("divweb").style.height="300px";
      document.getElementById("bouncefrecciawebcapovolta").style.transform="rotate(360deg)";
      document.getElementById("bouncefrecciawebcapovolta").style.width="20%";
      document.getElementById("bouncefrecciawebcapovolta").style.height="20%";
      document.getElementById("bouncefrecciawebcapovolta").style.marginTop="0px";
      document.getElementById("scoprdimenoweb").innerHTML="";
      document.getElementById("marginepweb").innerHTML="Mostra di più";
      document.getElementById("divweb").style.opacity="0.8";


      $(document).ready(function()
      {$("#xuscitaweb").hide();
      });

      flagweb = 0;
      document.getElementById("back_to_top").id="back_to_topvuoto";
      document.getElementById("idenimgweb").src="";

      $(document).ready(function()
      {$("#back_to_topvuoto").hide();
      });

      $(document).ready(function()
      {$("#back_to_topvuoto1").hide();
      });

      $(document).ready(function()
      {$("#back_to_topvuoto2").hide();
      });

      cont++;
    });
});

if(flagweb == 1){document.getElementById("back_to_topvuoto").id="back_to_top"; document.getElementById("idenimgweb").src="../img/frecciabacktop.png";}


 $(document).ready(function()
  {
      // Nascondo l'icona al caricamento della pagina
      $("#back_to_top").hide();

      // Intercetto lo scroll di pagina
    $(window).scroll(function()
      {
        if ($(document).scrollTop() > 600){
          // Se l'evento scroll si verifica, mostro l'icona (invisibile) con effetto dissolvenza
          if ($("#back_to_top").is(":hidden")) {
              $("#back_to_top").fadeIn(500);
          }
   }
          // Se si verifica il ritorno ad inizio pagina, nascondo l'icona con effetto dissolvenza
          if ($(document).scrollTop() < 600){

               $("#back_to_top").fadeOut(500);

           }
      });

      // Al click sull'icona, torno ad inizio pagina con movenza fluida
      $("#back_to_top").click(function()
      {
          $("html,body").animate({scrollTop: 0}, 500, function(){});
      });
  });

}

if(resto!=0){

document.getElementById("divweb").style.height="300px";
document.getElementById("bouncefrecciawebcapovolta").style.transform="rotate(360deg)";
document.getElementById("bouncefrecciawebcapovolta").style.width="20%";
document.getElementById("bouncefrecciawebcapovolta").style.height="20%";
document.getElementById("bouncefrecciawebcapovolta").style.marginTop="0px";
document.getElementById("scoprdimenoweb").innerHTML="";
document.getElementById("marginepweb").innerHTML="Mostra di più";
document.getElementById("divweb").style.opacity="0.8";


$(document).ready(function()
{$("#xuscitaweb").hide();
});

flagweb = 0;
document.getElementById("back_to_top").id="back_to_topvuoto";
document.getElementById("idenimgweb").src="";

$(document).ready(function()
{$("#back_to_topvuoto").hide();
});

$(document).ready(function()
{$("#back_to_topvuoto1").hide();
});

$(document).ready(function()
{$("#back_to_topvuoto2").hide();
});
}
cont++;
}

/*function verificaclickhomeweb(){

  flagweb1 = flagwebb();


  if(flagweb1 == 1) {document.body.onload = frecciaweb(); flagweb1 = 0;}



}

function flagwebb(){

  flagweb1 = 1;

  return flagweb1;

}

function verificaclickhomeapp(){

  flagweb1 = flagwebb();


  if(flagweb1 == 1) {document.body.onload = frecciaweb(); flagweb1 = 0;}



}


function flagappp(){

  flagapp1 = 1;


  return flagapp1;

}

function flagintrr(){

  flagintr1 = 1;

  return flagintr1;

}*/
