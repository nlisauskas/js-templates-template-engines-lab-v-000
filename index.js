function createPost() {
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  var pageTemplate = document.getElementById("page-template").innerHTML;
  var commentsTemplate = document.getElementById("comment-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;

  var templateFn = _.template(pageTemplate);

  var templateHTML = templateFn();

  document.getElementById("start").innerHTML = templateHTML;

  templateFn = _.template(postTemplate);

  templateHTML = templateFn({'title': title, 'body': body, 'author': author})
}

function postComment() {

}
