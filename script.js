// ===== Initialize all functionality when DOM is ready =====
function initAll() {
  // ===== Gallery Filter Logic =====
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const projectItems = document.querySelectorAll('[data-category]');

  // Show only "views" projects on initial load (pro-1 and pro-2)
  const outerDivs = document.querySelectorAll('.outer-div');
  
  projectItems.forEach(item => {
    const category = item.getAttribute('data-category');
    if (category === 'views') {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  // Show outer-div containers for views on initial load
  outerDivs.forEach(div => {
    const project = div.querySelector('[data-category]');
    if (project && project.getAttribute('data-category') === 'views') {
      div.style.display = 'flex';
    } else {
      div.style.display = 'none';
    }
  });

  // Handle filter button clicks
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const activeBtn = document.querySelector('.filter-buttons button.active');
      if (activeBtn) activeBtn.classList.remove('active');
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      // Get all outer-div containers
      const outerDivs = document.querySelectorAll('.outer-div');
      
      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (category === filterValue) {
          // Use flex for pro-3, block for others
          if (item.classList.contains('pro-3')) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'block';
          }
        } else {
          item.style.display = 'none';
        }
      });

      // Hide/show outer-div containers based on filter
      if (filterValue === 'concepts') {
        // Hide all outer-div containers when concepts is selected
        outerDivs.forEach(div => {
          div.style.display = 'none';
        });
      } else {
        // Show outer-div containers for views and portfolio
        outerDivs.forEach(div => {
          const project = div.querySelector('[data-category]');
          if (project && project.getAttribute('data-category') === filterValue) {
            div.style.display = 'flex';
          } else {
            div.style.display = 'none';
          }
        });
      }
    });
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initAll);

// PRICING SECTION

  function activateCard(card) {
    document.querySelectorAll('.pricing-card')
      .forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  }

