// Utility function to format the date
function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const comments = [
      {
        author: 'John Doe',
        time: new Date(Date.now() - 7200000), // 2 hours ago
        body: "This is a sample comment. It's great to see how HTML and CSS come together to create beautiful pages."
      },
      {
        author: 'Jane Smith',
        time: new Date(Date.now() - 86400000), // 1 day ago
        body: "I totally agree! It's amazing how simple and powerful HTML and CSS are for web design."
      }
    ];
  
    const commentsContainer = document.getElementById('comments-container');
    const newCommentTextarea = document.getElementById('new-comment');
    const postCommentButton = document.getElementById('post-comment-btn');
  
    function renderComments() {
      commentsContainer.innerHTML = '';
      if (comments.length === 0) {
        commentsContainer.innerHTML = '<p class="text-gray-500">No comments yet. Be the first to comment!</p>';
      } else {
        comments.forEach((comment) => {
          const commentElement = document.createElement('div');
          commentElement.classList.add('comment', 'border-b', 'border-gray-200', 'py-4');
          commentElement.innerHTML = `
            <div class="comment-header font-bold text-gray-900">
              ${comment.author} <span class="comment-time text-sm text-gray-500">${formatDate(comment.time)}</span>
            </div>
            <div class="comment-body text-gray-700 mt-2">
              ${comment.body}
            </div>
          `;
          commentsContainer.appendChild(commentElement);
        });
      }
    }
  
    postCommentButton.addEventListener('click', () => {
      const newComment = newCommentTextarea.value.trim();
      if (newComment) {
        comments.push({ author: 'Anonymous', time: new Date(), body: newComment });
        newCommentTextarea.value = ''; // Clear the textarea
        renderComments(); // Re-render the comments
      }
    });
  
    renderComments();
  });
  