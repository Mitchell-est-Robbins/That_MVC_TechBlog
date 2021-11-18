const newFormHandler = async (event) => {
    event.preventDefault();
    const text = document.querySelector('#comtext').value.trim();
    const project_id= document.querySelector('#post_id').value.trim();
    

    if (text) { //just like the one in login
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ project_id, text }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
  .querySelector('#comPost')
  .addEventListener('submit', newFormHandler);