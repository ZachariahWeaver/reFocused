// content.js

// Arrays of IDs and classes of elements to be removed
const idsToRemove = ['sr-header-area'];  // Replace with your actual ids
const classesToRemove = ['tabmenu ', 'listing-chooser initialized', 'sitetable sitetable linklisting', 'titlebox rounded filtered-details', 'titlebox rounded','sidebox create', 'sidebox submit submit-text', 'sidebox submit submit-link', 'account-activity-box', 'footer-parent', 'debuginfo'];  // Replace with your actual classes

// Function to remove elements by id
function removeElementsByIds(ids) {
  ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.parentNode.removeChild(element);
    }
  });
}

// Function to remove elements by class
function removeElementsByClasses(classes) {
  classes.forEach(className => {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  });
}

// Function to check if current page is a base subreddit page
function isBaseSubredditPage() {
  // Get the current path
  const path = window.location.pathname;

  // Split the path into segments
  const pathSegments = path.split('/').filter(segment => segment);

  // If there are exactly two segments and the first one is 'r', it's a base subreddit page
  return pathSegments.length === 2 && pathSegments[0] === 'r';
}

// If the current page is a base subreddit page...
if (isBaseSubredditPage()) {
  // ...call the functions to remove elements by ids and classes
  removeElementsByIds(idsToRemove);
  removeElementsByClasses(classesToRemove);
}
