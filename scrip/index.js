  fetch(`${window.API}/api/courses`)
    .then(r => r.json())
    .then(data => {
      console.log('courses:', data);
      // TODO: render ลงหน้า index
    })
    .catch(err => console.error('fetch courses error:', err));