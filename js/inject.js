$(function(){
  $(document).on('click', 'a', function(e){
    e.preventDefault();
    handleLinkClick($(this));
  });
});

var UTM_CODES = [
  'utm_source',
  'utm_medium',
  'utm_term',
  'utm_content',
  'utm_campaign'
];

var handleLinkClick = function(elem) {
  var linkTarget = $(this).attr('target') ? $(this).attr('target') : '_self';
  var linkHref = $(this).attr('href');
  linkHref = replaceUrl(linkHref);
  window.open(linkHref, linkTarget);
};

// Gets the index of the separator in the string
// Returns the length of the string if seperator not found
var getSeperatorIndex = function(sep, str) {
  var ind = str.indexOf(sep) !== -1 ? str.indexOf(sep) : str.length;
  return ind;
};

var replaceUrl = function(url) {
  var urlParts = [];
  var sepInd = getSeperatorIndex('?', url);
  urlParts.push(url.substring(0, sepInd + 1));
  var endOfUrl = url.substring(sepInd + 1);
  var queryParamsEndInd = getSeperatorIndex('#', endOfUrl);
  urlParts.push(replaceQueryParams(endOfUrl.substring(0, queryParamsEndInd)));
  urlParts.push(endOfUrl.substring(queryParamsEndInd));
  return urlParts.join('');
};

var replaceQueryParams = function(queryParamsStr) {
  var params = queryParamsStr.split('&');
  var editedParams = [];
  for (var i = 0; i < params.length; i++) {
    var param = params[i].split('=');
    if (UTM_CODES.indexOf(param[0]) !== -1) {
      param[1] = 'YO+MAMA';
    }
    param = param.join('=');
    editedParams.push(param);
  }
  return editedParams.join('&');
};
