fetch("links.json")
  .then(response => response.json())
  .then((json) => {

    let obj = [];
    
    $(json).each(function(){
        var $el = '<li>' + $(this)[0].link + $(this)[0].nome + '</li>';
        $('#linkslist > ul').append($el)
        
    })

  });