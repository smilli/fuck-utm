describe('fuck-utm', function(){
  it('should replace utm params', function(){
    var queryParamsStr = (
      'utm_source=google&param1=lelouch&utm_term=term&utm_content=content' +
      '&param2=neopets&utm_campaign=sales');
    var expectedEditedParams = (
      'utm_source=' + REPLACER + '&param1=lelouch&utm_term=' + REPLACER +
      '&utm_content=' + REPLACER + '&param2=neopets&utm_campaign=' + REPLACER);
    var editedParams = replaceQueryParams(queryParamsStr);
    expect(editedParams).toBe(expectedEditedParams);
  });

  it('should not change the url if there are no params', function() {
    var url = 'http://google.com:80#section';
    var editedUrl = replaceUrl(url);
    expect(editedUrl).toBe(url);

    url = 'http://google.com:80#section?badurl';
    editedUrl = replaceUrl(url);
    expect(editedUrl).toBe(url);
  });

  it('should keep anchors intact', function() {
    var url = (
      'http://google.com/?utm_source=google&param1=lelouch&utm_term=term&' +
      'utm_content=content&param2=neopets&utm_campaign=sales#section');
    var expectedEditedUrl = (
      'http://google.com/?utm_source=' + REPLACER + '&param1=lelouch&' +
      'utm_term=' + REPLACER + '&utm_content=' + REPLACER + '&param2=neopets' +
      '&utm_campaign=' + REPLACER + '#section');
    var editedUrl = replaceUrl(expectedEditedUrl);
    expect(editedUrl).toBe(expectedEditedUrl);
  });
});
