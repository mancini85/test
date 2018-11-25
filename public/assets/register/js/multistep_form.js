$(document).ready(function(){
    if ($('#step-1').focus()){
        console.log('awesome!')
        $('#step-2').hide();
        $('#step-3').hide();
        $('#step-4').hide();
        $('#step-1').show();
    }
    $(document).on('click','#next-1', function(){
        $('#step-2').focus();
        $('#step-1').hide();
        $('#step-4').hide();
        $('#step-3').hide();
        $('#step-2').show();
        $('#step-2-progress').removeClass('btn-default');
        $('#step-2-progress').addClass('btn-success');
    });
    $(document).on('click','#next-2', function(){
        $('#step-3').focus();
        $('#step-1').hide();
        $('#step-4').hide();
        $('#step-2').hide();
        $('#step-3').show();
        $('#step-3-progress').removeClass('btn-default');
        $('#step-3-progress').addClass('btn-success');
    });
    $(document).on('click','#next-3', function(){
        $('#step-4').focus()
        $('#step-1').hide();
        $('#step-2').hide();
        $('#step-3').hide();
        $('#step-4').show();
        $('#step-4-progress').removeClass('btn-default');
        $('#step-4-progress').addClass('btn-success');
    });
     $(document).on('click','#back-1', function(){
        $('#step-1').focus();
        $('#step-4').hide();
        $('#step-2').hide();
        $('#step-3').hide();
        $('#step-1').show();
        $('#step-2-progress').removeClass('btn-success');
        $('#step-2-progress').addClass('btn-default');
    });
      $(document).on('click','#back-2', function(){
        $('#step-2').focus();
        $('#step-1').hide();
        $('#step-4').hide();
        $('#step-3').hide();
        $('#step-2').show();
        $('#step-3-progress').removeClass('btn-success');
        $('#step-3-progress').addClass('btn-default');
    });
      $(document).on('click','#back-3', function(){
        $('#step-3').focus();
        $('#step-1').hide();
        $('#step-4').hide();
        $('#step-2').hide();
        $('#step-3').show();
        $('#step-4-progress').removeClass('btn-success');
        $('#step-4-progress').addClass('btn-default');
    });
    
});
