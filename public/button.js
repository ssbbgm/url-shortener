const deleteBtn = document.querySelectorAll('.delete');

const deleteUrl = async (e) => {
    // Make a POST request to delete the row 
    let short = e.target.getAttribute('url');

    const response = await fetch(`/delete/${short}`, {
      method: 'DELETE',
      body: JSON.stringify({
        short: short
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // Refresh page
      console.log('Button deleted')
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

deleteBtn.forEach(element => {
  element.addEventListener('click', deleteUrl);
});
  
