const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
menu.classList.toggle("active");
}); 

function toggleText(dotsId, buttonId) {
    var dots = document.getElementById(dotsId);
    var button = document.getElementById(buttonId);

    if (dots.style.display === "none" || dots.style.display === "") {
      dots.style.display = "inline";
      button.innerHTML = "Show Less";
    } else {
      dots.style.display = "none";
      button.innerHTML = "Show More";
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('category-select');
    const posts = document.querySelectorAll('.blog-post');
  
    categorySelect.addEventListener('change', function () {
      const selectedCategory = categorySelect.value;
      
      posts.forEach(function (post) {
        const postCategory = post.getAttribute('data-category');
        
        if (selectedCategory === 'all' || selectedCategory === postCategory) {
          post.style.display = 'block'; // Show posts that match the selected category or 'All Categories'
        } else {
          post.style.display = 'none'; // Hide posts that don't match the selected category
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const searchBox = document.getElementById('search-input');
    const posts = document.querySelectorAll('.blog-post');
  
    searchBox.addEventListener('input', function () {
      const searchText = searchBox.value.toLowerCase();
  
      posts.forEach(function (post) {
        const postTitle = post.querySelector('h2').textContent.toLowerCase();
  
        if (postTitle.includes(searchText)) {
          post.style.display = 'block'; // Show posts with matching titles
        } else {
          post.style.display = 'none'; // Hide posts without matching titles
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const dataContainer = document.getElementById('data-container');
  
    // Simulated JSON data (replace with actual API call)
    const jsonData = [
      {
        category: 'Visitors',
        value: 5000
      },
      {
        category: 'totalBlogs',
        value: 10
      },
      {
        category: 'Page Views',
        value: 25000
      }
    ];
  
    // Function to display the JSON data
    function displayData() {
      jsonData.forEach(function (item) {
        const dataItem = document.createElement('div');
        dataItem.innerHTML = `<strong>${item.category}:</strong> ${item.value}`;
        dataContainer.appendChild(dataItem);
      });
    }
  
    // Call the function to display data
    displayData();
  });

  document.addEventListener('DOMContentLoaded', function () {
    const blogList = document.getElementById('blog-list');
  
    // Fetch blog data from a JSON file or an API (replace with actual source)
    fetch('blog.json')
      .then(response => response.json())
      .then(data => {
        // Process and display blog data
        data.blogs.forEach(blog => {
          const blogItem = document.createElement('div');
          blogItem.className = 'blog-item';
  
          const title = document.createElement('h2');
          title.className = 'blog-title';
          title.textContent = blog.title;
  
          const category = document.createElement('div');
          category.className = 'blog-category';
          category.textContent = `Category: ${blog.category}`;
  
          const content = document.createElement('div');
          content.className = 'blog-content';
          content.textContent = blog.content;
  
          blogItem.appendChild(title);
          blogItem.appendChild(category);
          blogItem.appendChild(content);
  
          blogList.appendChild(blogItem);
        });
      })
      .catch(error => {
        console.error('Error fetching blog data:', error);
      });
  });
  