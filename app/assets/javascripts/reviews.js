jQuery(function () {

  var offset = 100;

  $('#reviews-summary').scrollspy({
    offset: offset,
    target: '#review-categories'
  });

  $('#review-categories li a').click(function(event) {
    window.location.hash = $(this).attr('href');

    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();

    scrollBy(0, -offset);
  });

  $('.datepicker').datepicker({
    startDate: "today",
    todayBtn: "linked",
    daysOfWeekDisabled: "0,6",
    autoclose: true,
    todayHighlight: true,
    format: "yyyy-mm-dd"
  });

  $('.send_email_link').click(function() {
    $(this).text("Sent").addClass('improvement_text');
  });

  $( document ).tooltip();

});
