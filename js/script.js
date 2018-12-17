$('.section').hide();

setTimeout(function() {
  $(document).ready(function () {

    // SHOW SECTIONS
    $('.section').fadeIn();

    // HIDE PRELOADER
    $('.loader').fadeOut();

    // INIT SIDENAV
    $('.button-collapse').sideNav();

    // INIT MODALS
    $('.modal').modal();

    // INIT SELECT
    $('select').material_select();
  
    // COUNTER ANIMATION
    $('.count').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 1200,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

    // COMMENTS TOAST (APPROVE || DENY)
    $('.approve').click(function(e) {
      Materialize.toast('Comment Approved', 1500);
      e.preventDefault();
    });
    $('.deny').click(function(e) {
      Materialize.toast('Comment Denied', 1500);
      e.preventDefault();
    });

    // QUICK TODOS
    $('#todo-form').submit(function(e) {
      const output = `<li class="collection-item">
        <div>
          ${$('#todo').val()} 
          <a href="#!" class="secondary-content delete">
            <i class="material-icons">close</i>
          </a>
        </div>
      </li>`;

      $('.todos').append(output);

      Materialize.toast(`${$('#todo').val()} Todo Added`, 1700);
      e.preventDefault();
    });

    // DELETE TODOS
    $('.todos').on('click', '.delete', function(e) {
      $(this).parent().parent().remove();
      Materialize.toast(`Todo Removed`, 1700);
      e.preventDefault();
    });

    // INIT CKEDITOR
    CKEDITOR.replace('body');

  });
}, 1000);

// CHART ON LOAD
window.onload = function() {
  var chart = new CanvasJS.Chart("chart-container", {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: "Daily Visitors"
    },
    axisY: {
      includeZero: false
    },
    data: [{
      type: 'line',
      dataPoints: [
        { y: 450 },
        { y: 414 },
        {
          y: 520,
          indexLabel: 'highest',
          markerColor: 'red',
          markerType: 'triangle'
        },
        { y: 460 },
        { y: 450 },
        { y: 500 },
        { y: 480 },
        { y: 480 },
        {
          y: 410,
          indexLabel: 'lowest',
          markerColor: 'DarkSlateGrey',
          markerType: 'cross'
        },
        { y: 500 },
        { y: 450 },
        { y: 510 }
      ]
    }]
  });
  
  setTimeout(function() {
    chart.render();
  }, 1000);
}

