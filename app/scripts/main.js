var suggestions = $('.game-suggestions tr');
var suggestion = $(_.sample(suggestions));
var id = suggestion.data('id');
var title = suggestion.find('td:first-child').text();
var genre = suggestion.find('td:last-child').text();
$('.game-title').text(title);
$('.game-genre').text(genre);
$('.game-image').attr('src', 'http://www.co-optimus.com/image.php?id=' + id);
