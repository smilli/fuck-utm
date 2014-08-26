$(function(){
  $(document).on('click', 'a', function(e){
    e.preventDefault();
    handleLinkClick($(this));
  });
});

var handleLinkClick = function(elem) {
  // TODO(smilli): Replace UDM params
  var link_target = $(this).attr('target') ? $(this).attr('target') : '_self';
  var link_href = $(this).attr('href');
  window.open(link_href, link_target);
};
