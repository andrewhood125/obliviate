var defocus_element = $('h2:contains("Activity Log")');
var rows = $('._55pe:not(:has(i.sp_VWSEqA9GSxi))');
var index = 0;
var interval_id;
function analyze_edit_icon()
{
  defocus_element.click();

  if( index + 1 > rows.length) {
    index_out_of_bounds();
    return;
  }

  console.log("Clicking row " + index);
  rows[index].scrollIntoView();
  scrollBy(0, -150);
  rows[index].click();

  // Is report/remove? Wait
  // Click Continue
  // Click Continue
  // Click Okay

  // Is unlike?
  var like =  $('span._54nh:contains("Unlike")');

  if( like.length > 0 )
    remove_like_post(like);

  // is deletable?
  var post = $('span._54nh:contains("Delete")');

  if( post.length > 0)
    remove_like_post(post);

  // Can be hidden?
  var hideable = $('span._54nh:contains("Hidden from Timeline")');
  if(hideable.length > 0)
    hideable.click();

  increment_index();

  // Check if there is another row available
  index_out_of_bounds();
}

function increment_index()
{
  console.log("Incrementing index..");
  index = index + 1;
}

function index_out_of_bounds()
{
  if(index == rows.length) {
    scrollTo(0,document.body.scrollHeight);
    console.log("Scroll to bottom and refresh rows..");
    index = 0;
    rows = $('._55pe:not(:has(i.sp_VWSEqA9GSxi))');
  }
}


function warning_box_modal()
{
  var warning = $('span:contains("Close")');

  if( warning.length > 0 ) {
    console.log("Closing warning box...");
    warning.click();
  }
}

function remove_like_post(element)
{
  console.log("Like/Post is being removed..");
  element.click();
}

function confirmation_modal()
{
  confirmation = $('button:contains("Delete Post")');

  if(confirmation.length > 0) {
    console.log("Confirning delete post...");
    confirmation.first().click();
  }
}

setTimeout(function() {
  setInterval(confirmation_modal, 250);
  setInterval(warning_box_modal, 250);
  interval_id = setInterval(analyze_edit_icon, 2000);
}, 500);
