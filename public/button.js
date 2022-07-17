const deleteBtn = document.getElementsByClassName('delete');

const delete = async () => {
    // Make a POST request to delete the row 
    const response = await fetch('/delete/:shortUrl', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // Refresh page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

deleteBtn.addEventListener('click', delete);
  
