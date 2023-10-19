document.addEventListener("DOMContentLoaded", function () {
    const committeeSection = document.querySelector(".committee-section");

    // Fetch data from the JSON file
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
            let membersHTML = ""; // Create an empty string to store HTML

            // Iterate through each member and create HTML
            data.member.forEach((member, index) => {
                // Check if it's the first member or a multiple of three
                if (index === 0 || index % 3 === 0) {
                    // Add space between rows
                    membersHTML += '<ul class="nospace group btmspace-80">';
                }

                // Create HTML for each member
                membersHTML += `
                    <li class="one_third">
                        <figure>
                            <a class="imgover" href="#">
                                <img src="${member.image}" alt="">
                            </a>
                            <figcaption>
                                <h6 class="heading text-uppercase">${member.Id}</h6>
                                <p class="text-uppercase text-yellow">${member.title}</p>
                                <p class="text-uppercase"><br></p>
                                <div>
                                    <p>${member.intro}</p>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                `;

                // If it's the last member in the row, close the ul
                if ((index + 1) % 3 === 0 || index === data.member.length - 1) {
                    membersHTML += '</ul>';
                }
            });

            // Append the HTML to the committee section
            committeeSection.innerHTML = membersHTML;
        })
        .catch((error) => console.error("Error fetching committee data:", error));
});

  