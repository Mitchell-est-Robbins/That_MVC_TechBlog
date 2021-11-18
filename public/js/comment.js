const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#project-name').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
  