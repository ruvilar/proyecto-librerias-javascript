const button = document.getElementById('newTask'),
      asideForm = document.getElementById('aside-form'),
      cancelForm = document.getElementById('cancelForm')

      button.addEventListener('click', () => {
          asideForm.classList.add('active')
      });

      cancelForm.addEventListener('click', () => {
        asideForm.classList.remove('active')
      });