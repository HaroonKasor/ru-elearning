
  fetch(`${window.API}/api/my-courses`, { credentials: 'include' })
    .then(r => r.json())
    .then(data => {
      console.log('my courses:', data);
      // TODO: render รายการคอร์สของผู้ใช้
    })
    .catch(err => console.error('fetch my-courses error:', err));
