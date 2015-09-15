// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

$('form').on('submit',function(e){
  e.preventDefault();
  console.log("hey");
  var payload = {
    name:$('#name').val(),
    age:$('#age').val(),

  };
  $.post('api/users', payload,function(data){
    console.log(payload);

  });


});
