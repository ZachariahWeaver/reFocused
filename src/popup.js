let websites = ['facebook', 'twitter', 'instagram', 'google', 'reddit']; // Replace this with your list of websites
let listContainer = document.getElementById('websiteList');

websites.forEach(website => {
  let listItem = document.createElement('div');
  listItem.className = 'websiteItem';
  
  let toggleButton = document.createElement('input');
  toggleButton.type = 'checkbox';
  toggleButton.className = 'toggleButton';
  
  let websiteName = document.createElement('span');
  websiteName.textContent = website;
  
  listItem.appendChild(toggleButton);
  listItem.appendChild(websiteName);
  listContainer.appendChild(listItem);
});
