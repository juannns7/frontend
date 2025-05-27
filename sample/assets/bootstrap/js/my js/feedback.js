    function handleSubmit(event) {
      event.preventDefault();
      const feedback = document.getElementById('form-feedback');
      const form = event.target;
      feedback.style.display = 'none';
      feedback.textContent = '';

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if(name.length < 2) {
        feedback.style.display = 'block';
        feedback.textContent = 'Please enter a valid name (at least 2 characters).';
        form.name.focus();
        return;
      }
      if(!email.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)) {
        feedback.style.display = 'block';
        feedback.textContent = 'Please enter a valid email address.';
        form.email.focus();
        return;
      }
      if(message.length < 24) {
        feedback.style.display = 'block';
        feedback.textContent = 'Please enter a message of at least 10 characters.';
        form.message.focus();
        return;
      }

      // Simulate form submission success
      alert('Thank you for reaching out! We will get back to you soon.');
      form.reset();
    }