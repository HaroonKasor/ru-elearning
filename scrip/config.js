// ให้ทุกหน้าเรียก API base ได้เหมือนกัน
  window.API = (window.__ENV__ && window.__ENV__.API_BASE) || 'http://localhost:8080';

