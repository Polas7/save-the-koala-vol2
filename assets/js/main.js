$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

/*modal*/
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
/*car*/
$('.carousel').carousel()