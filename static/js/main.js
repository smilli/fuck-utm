$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['The Ugly', 'The Great', 'Fuck UTM', 'LOL', 'Inspiration'],
    scrollOverflow: true,
  });

  var $downloadBtn = $('#download');
  var $trial = $('#trial');
  var WEBSTORE_URL = 'https://chrome.google.com/webstore/detail/jjaagodohagklnhkkjlbojpbecdgfbcc'; 

  if (chrome.app.isInstalled){
    $downloadBtn.hide();
    $trial.show();
  }

  var handleDownloadSuccess = function() {
    $downloadBtn.fadeOut(750, function(){
      $trial.fadeIn(750);
    });
  };

  $downloadBtn.click(function() { 
    chrome.webstore.install(WEBSTORE_URL, handleDownloadSuccess);
  });
});

