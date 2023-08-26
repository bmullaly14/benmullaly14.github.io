<template>
  <div>
    <h1>Resume</h1>
    <div id="mission">
      <p class="mission">
        Creative solution seeker with dynamic experience in fast-paced,
        challenging environments.
      </p>
      <p class="mission">
        Excited to begin my career as a developer to uncover, create, and
        implement novel technologies in a collaborative environment.
      </p>
    </div>
    <resume-search v-bind:skills="this.skills" v-if="this.showSearch" />
    <div id="resume_div">
      <div id="skills" class="section">
        <div class="card accordion">
          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                width="100vw"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="collapseOne"
                target="collapseOne"
                v-on:click="
                  toggleAccordion('collapseOne');
                  toggleCollapse($event);
                "
              >
                Skills
              </button>
            </h3>
            <div class="card-body accordion-collapse collapse" id="collapseOne">
              <div id="skill_flex" class="accordion-body">
                <p v-for="skill in skills" v-bind:key="skill.id">
                  {{ skill }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" class="section">
        <div class="card accordion">
          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="collapseTwo"
                v-on:click="
                  toggleAccordion('collapseTwo');
                  toggleCollapse($event);
                "
              >
                Projects
              </button>
            </h3>
            <div class="card-body accordion-collapse collapse" id="collapseTwo">
              <div id="project_flex" class="accordion-body">
                <div
                  class="card accordion"
                  v-for="project in projects"
                  v-bind:key="project.id"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        v-on:click="
                          toggleAccordion(project.project);
                          toggleCollapse($event);
                        "
                      >
                        {{ project.project }}
                      </button>
                    </h2>
                    <div
                      class="card-body accordion-collapse collapse"
                      :id="`${project.project}`"
                    >
                      <p>{{ project.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="work_experience" class="section">
        <div class="card accordion">
          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="collapseThree"
                v-on:click="
                  toggleAccordion('collapseThree');
                  toggleCollapse($event);
                "
              >
                Work Experience
              </button>
            </h3>
            <div
              class="card-body accordion-collapse collapse"
              id="collapseThree"
            >
              <div id="work_flex" class="accordion-body">
                <div
                  class="card accordion"
                  v-for="job in work_experience"
                  v-bind:key="job.id"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        v-on:click="
                          toggleAccordion(job.company);
                          toggleCollapse($event);
                        "
                      >
                        {{ job.company }}
                      </button>
                    </h2>
                    <div
                      class="card-body accordion-collapse collapse"
                      :id="`${job.company}`"
                    >
                      <p>{{ job.title }}</p>
                      <p>{{ job.dates }}</p>
                      <p v-for="point in job.description" v-bind:key="point.id">
                        {{ point }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="education" class="section">
        <div class="card accordion">
          <div class="accordion-item">
            <h3 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="collapseFour"
                v-on:click="
                  toggleAccordion('collapseFour');
                  toggleCollapse($event);
                "
              >
                Education
              </button>
            </h3>
            <div
              class="card-body accordion-collapse collapse"
              id="collapseFour"
            >
              <div id="project_flex" class="accordion-body">
                <div
                  class="card accordion"
                  v-for="ed in education"
                  v-bind:key="ed.id"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        v-on:click="
                          toggleAccordion(ed.school);
                          toggleCollapse($event);
                        "
                      >
                        {{ ed.school }}
                      </button>
                    </h2>
                    <div
                      class="card-body accordion-collapse collapse"
                      :id="`${ed.school}`"
                    >
                      <div id="schoolInfo">
                        <p>{{ ed.location }}</p>
                        <p>{{ ed.dates }}</p>
                      </div>
                      <p>{{ ed.description }}</p>
                      <p>{{ ed.gpa }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="download">
      <a
        href="../assets/Resume.pdf"
        attributes-list
        download="BenMullaly_Resume"
        >Download</a
      >
    </div>
  </div>
</template>

<script>
import ResumeSearch from "@/components/ResumeSearch.vue";
export default {
  components: { ResumeSearch },
  data() {
    return {
      showSearch: false,
      skills: [
        "ASP.NET Web API",
        " C#/.NET",
        " SQL",
        " HTML",
        " CSS",
        " JavaScript",
        " TypeScript",
        " Vue.js",
        " ReactJS",
        "Responsive Design",
        " Visual Studio 2019",
        " Git",
        " MS SQL",
        " Unit Testing",
        " JSON",
        " Agile Methodologies",
        " Kotlin",
        " PHP",
        " Apache",
        " GitHub Actions",
        " Azure",
      ],
      projects: [
        {
          project: "Apache Server",
          description:
            "Utilizing Autonomic Controls’ Mirage MMS-2 media server hardware, created a local server to deploy and host personal projects. Used PowerShell scripting to partition, format, and set up the hard drive for an open-sourced Apache web server on Windows 8.1 OS.",
        },
        {
          project: "Insight2Weather",
          description:
            "Full stack web application written in TypeScript, JavaScript, CSS, MS SQL, and C# with React frontend which displays the weather for a given address or zip code. Temporarily hosted on Azure with GitHub Actions with CI/CD pipeline through PowerShell.",
        },
        {
          project: "Pet Health App",
          description:
            "Utilizing C#, DAO model, and RESTful API server, create a “WebMD” style application for owners to triage their pets at home and communicate with a veterinary clinic as needed.",
        },
        {
          project: "“iReview”",
          description:
            "C# Full Stack web app utilizing openAI’s GPT-3.5 API to create review flashcards and conduct mock interviews. Vue.js front-end utilizes the Bootstrap library, C#/.NET server with JWT authentication, and MS SQL database. Will move to OAuth authentication before going live.",
        },
        {
          project: "Agave Atlas - TE Final Capstone",
          description:
            "Agile team of 5 using Scrum methodology created a dynamic and responsive full-stack web application in 10 days which allows users to find, review, and share margaritas and the restaurants that serve them. Technologies include: Vue.js front end interacting with REST API server built in C# with .NET CORE using MVC and DAO design patterns to manage the SQL database and Yelp, NOAA, Zip Code, Outlook SMTP, and Twitter APIs.",
        },
      ],
      work_experience: [
        {
          company: "Autonomic Controls, Inc.",
          location: "Armonk, NY (Remote)",
          dates: "June 2023 - Present",
          role: "C#/.NET Full Stack Intern",
          description: [
            "Learned best practices and object-oriented programming techniques to contribute to and maintain source code for server-based multi-room audio systems by contributing to source code via Apache Subversion and GitLab.",
            "Utilized Jira to maintain workflow, report, test, validate and fix bugs, and coordinate firmware and hotfix code releases.",
          ],
        },
        {
          company: "Banfield Pet Hospital",
          location: "South Euclid, OH",
          info: "January 2022 – December 2022",
          role: "Veterinary Technician / Veterinary Assistant",
          description: [
            "Provided excellent customer service in person and over the phone during appointment check-ins, triage, and patient discharge instructions.",
            "Educated clients compassionately on pet diagnoses, prognoses, treatments, testing, and preventative care.",
          ],
        },
      ],
      education: [
        {
          school: "Tech Elevator",
          location: "Cleveland, OH",
          dates: "January 2023 – April 2023",
          description:
            "Completed a 14-week full-stack coding boot camp learning how to create dynamic web-based software systems using .NET/C# providing 800+ hours of development education and application. Collaborated with classmates to debug, diagnose, and troubleshoot programs during development.",
        },
        {
          school: "University of Mount Union",
          location: "Alliance, OH",
          dates: "2015 – 2019",
          description:
            "Bachelor of Science in Biology, Minors in Peacebuilding & Social Justice, and Chemistry",
          gpa: "Major GPA: 3.67",
        },
      ],
    };
  },
  methods: {
    toggleAccordion(t) {
      this.activeAcc = t;
      let tElement = document.getElementById(t);
      if (tElement.classList.contains("show")) {
        tElement.classList.remove("show");
      } else {
        tElement.classList.add("show");
      }
    },
    toggleCollapse(event) {
      if (event.target.classList.contains("collapsed")) {
        event.target.classList.remove("collapsed");
      } else {
        event.target.classList.add("collapsed");
      }
    },
  },
};
</script>

<style>
img {
  height: 100%;
}
#skill_flex {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  column-gap: 4vw;
}
#schoolInfo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.section {
  width: 90vw;
  margin: auto;
}
.mission {
  text-align: center;
  font-size: small;
  width: 80vw;
  margin: 0 auto;
}
#mission {
  margin: 0 0 10px 0;
}
#download {
  margin: 10px 0 0 0;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
