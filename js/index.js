async function getUsers() {
    let url = './data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

//display members in html format
async function displayMembers() {
  const users = await getUsers();
  let html = "";
  users.members.forEach((member) => {
    html += ` 
        <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 border rounded space-x-0.5">
                        <div class="flex flex-col">
                            <!-- Avatar -->
                            <a href="#" class="mx-auto">
                                <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 p-3"
                                    src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80">
                            </a>

                            <!-- Details -->
                            <div class="text-center mt-6">
                                <!-- Name -->
                                <h1 class="text-gray-900 text-xl font-bold mb-1">
                                    ${member.name}
                                </h1>

                                <!-- Title -->
                                <div class="text-gray-700 font-light mb-2">
                                    ${member.title}
                                </div>

                                <!-- Social Icons -->
                                <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    <!-- Linkedin -->
                                    <a href="${member.social.linkedin}" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i class="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                    </a>

                                    <!-- Twitter -->
                                    <a href="${member.social.twitter}" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i class="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                                    </a>

                                    <!-- Facebook -->
                                    <a href="${member.social.facebook}" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i class="mdi mdi-facebook text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                    <!-- Github -->
                                    <a href="${member.social.github}" class="flex rounded-full hover:bg-gray-50 h-10 w-10">
                                        <i class="mdi mdi-github text-black-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>`;
  });
  document.getElementById("members").innerHTML = html;
};

async function displayTeam() {
    const users = await getUsers();
    let html = "";
    users.team.forEach((member) => {
      html += ` 
          <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4 border rounded px-5 space-x-12">
                          <div class="flex flex-col">
                              <!-- Avatar -->
                              <a href="#" class="mx-auto">
                                  <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 p-3"
                                      src="${member.avatar}">
                              </a>
  
                              <!-- Details -->
                              <div class="text-center mt-6">
                                  <!-- Name -->
                                  <h1 class="text-gray-900 text-xl font-bold mb-1">
                                      ${member.name}
                                  </h1>
  
                                  <!-- Title -->
                                  <div class="text-gray-700 font-light mb-2">
                                      ${member.position}
                                  </div>

                                  <!-- About -->
                                  <div class="text-gray-900 font-light mb-2">
                                      ${member.about}
                                  </div>
  
                                  <!-- Social Icons -->
                                  <div class="flex items-center justify-center opacity-50 hover:opacity-100
                                  transition-opacity duration-300">
                                  <!-- Linkedin -->
                                  <a href="${member.social.linkedin}" class="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                      <i class="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                  </a>

                                  <!-- Twitter -->
                                  <a href="${member.social.twitter}" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                      <i class="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                                  </a>

                                  <!-- Facebook -->
                                  <a href="${member.social.facebook}" class="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                      <i class="mdi mdi-facebook text-blue-400 mx-auto mt-2"></i>
                                  </a>

                                  <!-- Github -->
                                  <a href="${member.social.github}" class="flex rounded-full hover:bg-gray-50 h-10 w-10">
                                      <i class="mdi mdi-github text-black-400 mx-auto mt-2"></i>
                                  </a>
                                  </div>
                              </div>
                          </div>
                      </div>`;
    });
    document.getElementById("team").innerHTML = html;
  };

  displayTeam();
displayMembers();
