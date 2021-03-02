$(document).ready(function() {



 
       
    
    $('#btn-all').addClass("myactive");
 
    // alert("jquery is ready !!");
    
    $('#btn-all').click(function() {
      $('#btn-all').addClass("myactive");
      $('#btn-gouvernance').removeClass("myactive");
      $('#btn-securite').removeClass("myactive");
      $('#btn-bigdata').removeClass("myactive");
      $('#btn-it').removeClass("myactive");
      $('#btn-qualite').removeClass("myactive");
      $('#btn-virtual').removeClass("myactive");
      $('#btn-risque').removeClass("myactive");

      $('#gouvernance').removeClass("hidden");
      $('#securite').removeClass("hidden");
      $('#bigdata').removeClass("hidden");
      $('#it').removeClass("hidden");
      $('#qualite').removeClass("hidden");
      $('#virtual').removeClass("hidden");
      $('#risque').removeClass("hidden");
    });

    $('#btn-gouvernance').click(function() {
      $('#btn-all').removeClass("myactive");
      $('#btn-gouvernance').addClass("myactive");
      $('#btn-securite').removeClass("myactive");
      $('#btn-bigdata').removeClass("myactive");
      $('#btn-it').removeClass("myactive");
      $('#btn-qualite').removeClass("myactive");
      $('#btn-virtual').removeClass("myactive");
      $('#btn-risque').removeClass("myactive");

      $('#gouvernance').removeClass("hidden");
      $('#securite').addClass("hidden");
      $('#bigdata').addClass("hidden");
      $('#it').addClass("hidden");
      $('#qualite').addClass("hidden");
      $('#virtual').addClass("hidden");
      $('#risque').addClass("hidden");
    });

    $('#btn-securite').click(function() {
      $('#btn-all').removeClass("myactive");
      $('#btn-gouvernance').removeClass("myactive");
      $('#btn-securite').addClass("myactive");
      $('#btn-bigdata').removeClass("myactive");
      $('#btn-it').removeClass("myactive");
      $('#btn-qualite').removeClass("myactive");
      $('#btn-virtual').removeClass("myactive");
      $('#btn-risque').removeClass("myactive");

      $('#gouvernance').addClass("hidden");
      $('#securite').removeClass("hidden");
      $('#bigdata').addClass("hidden");
      $('#it').addClass("hidden");
      $('#qualite').addClass("hidden");
      $('#virtual').addClass("hidden");
      $('#risque').addClass("hidden");
    });

    $('#btn-bigdata').click(function() {
      $('#btn-all').removeClass("myactive");
      $('#btn-gouvernance').removeClass("myactive");
      $('#btn-securite').removeClass("myactive");
      $('#btn-bigdata').addClass("myactive");
      $('#btn-it').removeClass("myactive");
      $('#btn-qualite').removeClass("myactive");
      $('#btn-virtual').removeClass("myactive");
      $('#btn-risque').removeClass("myactive");




      $('#gouvernance').addClass("hidden");
      $('#securite').addClass("hidden");
      $('#bigdata').removeClass("hidden");
      $('#it').addClass("hidden");
      $('#qualite').addClass("hidden");
      $('#virtual').addClass("hidden");
      $('#risque').addClass("hidden");
    });

    $('#btn-it').click(function() {
      $('#btn-all').removeClass("myactive");
      $('#btn-gouvernance').removeClass("myactive");
      $('#btn-securite').removeClass("myactive");
      $('#btn-bigdata').removeClass("myactive");
      $('#btn-it').addClass("myactive");
      $('#btn-qualite').removeClass("myactive");
      $('#btn-virtual').removeClass("myactive");
      $('#btn-risque').removeClass("myactive");



      $('#gouvernance').addClass("hidden");
      $('#securite').addClass("hidden");
      $('#bigdata').addClass("hidden");
      $('#it').removeClass("hidden");
      $('#qualite').addClass("hidden");
      $('#virtual').addClass("hidden");
      $('#risque').addClass("hidden");
    });

    $('#btn-qualite').click(function() {
      $('#btn-all').removeClass("myactive");
      $('#btn-gouvernance').removeClass("myactive");
      $('#btn-securite').removeClass("myactive");
      $('#btn-bigdata').removeClass("myactive");
      $('#btn-it').removeClass("myactive");
      $('#btn-qualite').addClass("myactive");
      $('#btn-virtual').removeClass("myactive");
      $('#btn-risque').removeClass("myactive");




      $('#gouvernance').addClass("hidden");
      $('#securite').addClass("hidden");
      $('#bigdata').addClass("hidden");
      $('#it').addClass("hidden");
      $('#qualite').removeClass("hidden");
      $('#virtual').addClass("hidden");
      $('#risque').addClass("hidden");
    });

    $('#btn-virtual').click(function() {
      $('#btn-all').removeClass("myactive");
      $('#btn-gouvernance').removeClass("myactive");
      $('#btn-securite').removeClass("myactive");
      $('#btn-bigdata').removeClass("myactive");
      $('#btn-it').removeClass("myactive");
      $('#btn-qualite').removeClass("myactive");
      $('#btn-virtual').addClass("myactive");
      $('#btn-risque').removeClass("myactive");


      
      $('#gouvernance').addClass("hidden");
      $('#securite').addClass("hidden");
      $('#bigdata').addClass("hidden");
      $('#it').addClass("hidden");
      $('#qualite').addClass("hidden");
      $('#virtual').removeClass("hidden");
      $('#risque').addClass("hidden");
    });

      $('#btn-risque').click(function() {

        $('#btn-all').removeClass("myactive");
      $('#btn-gouvernance').removeClass("myactive");
      $('#btn-securite').removeClass("myactive");
      $('#btn-bigdata').removeClass("myactive");
      $('#btn-it').removeClass("myactive");
      $('#btn-qualite').removeClass("myactive");
      $('#btn-virtual').removeClass("myactive");
      $('#btn-risque').addClass("myactive");




        $('#gouvernance').addClass("hidden");
        $('#securite').addClass("hidden");
        $('#bigdata').addClass("hidden");
        $('#it').addClass("hidden");
        $('#qualite').addClass("hidden");
        $('#virtual').addClass("hidden");
        $('#risque').removeClass("hidden");
    });
  });