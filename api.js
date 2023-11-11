function fetchUserDetails() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        const userDetails = document.getElementById("userDetails");
        data.forEach((user) => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `
                        <div class="card-body">
                            <h5 class="card-title"><b class="userNametitle"><i class="fa fa-user"></i> User Name:</b><span class="userName"> ${user.name}</span></h5>
                            <h6 class="card-subtitle mb-2 text-muted"><b class="userEmail"><i class="fa fa-envelope"></i> Email:</b> ${user.email}</h6>
                            <p class="card-text"><b class="userComment"><i class="fa fa-comment"></i> Comment: </b><span class="comments">${user.body}</span></p>
                        </div>
                    `;
          userDetails.appendChild(card);
        });
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }
  fetchUserDetails();