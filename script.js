//your JS code here. If required.
window.onload = function() {
  const button = document.querySelector('input[type="button"][value="Select and Remove"]');
  const select = document.getElementById('colorSelect');

  button.addEventListener('click', function() {
    if (select.selectedIndex >= 0) {
      select.remove(select.selectedIndex);
    }
  });
};