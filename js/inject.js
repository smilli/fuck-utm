$(function(){
  var handleLinkClick = function(e) {
    // TODO(smilli): Replace UDM params
    e.preventDefault();
    var link_target = $(this).attr('target') ? $(this).attr('target') : '_self';
    var link_href = $(this).attr('href');
    window.open(link_href, link_target);
  };

  $(document).on('click', 'a', handleLinkClick);
});
