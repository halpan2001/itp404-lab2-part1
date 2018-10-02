let resultTemplateString = document.getElementById('result-template').innerHTML;
let renderResults = Handlebars.compile(resultTemplateString);

  let url = "https://thejsguy.com/teaching/2018/api/restaurants.json";

  let loadhtml= '<div class="loader">Loading...</div>';
  console.log(loadhtml);
  $('#results').html(loadhtml);

 console.log(url)

  let promise = $.ajax({
    type:'GET',
    url: url
  });

  promise.then(function(response){
    console.log('success', response);
    let renderedResults = renderResults({
      result: response.data
    });
    //console.log(renderedResults);
    $('#results').html(renderedResults);

});
