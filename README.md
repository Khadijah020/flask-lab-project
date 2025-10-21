# Flask Lab Project

A collaborative Flask web application built, containerized, and deployed using GitHub Actions and Docker.  
This project demonstrates teamwork using version control, CI/CD automation, and web development best practices.

---

## 👥 Team Members and Roles
Member 1 - Backend Lead
Implemented Flask api routes: (/, /health, /data)
Managed app logic in main/app.py
Checked API endpoints by implementing test cases in test_app.py

Mmeber 2 - Frontend / API Integration
Designed user interface using HTML, CSS, and JS in `templates/` and `static/`
Connected forms with Flask routes
Improved the overall aesthetics and interactivity of the app


Member 3 - Devops Engineer
Created and configured the `Dockerfile`
Wrote `ci-cd.yml` GitHub Actions workflow for testing and deployment automation
Pushed image to DockerHub



How to run, test, and deploy:

Clone the repository:
git clone https://github.com/Khadijah020>/flask-lab-project.git

Navigate to the main directory:
cd flask-lab-project/main
pip install -r requirements.txt

(Optional) Build the Docker image:
docker build -t flask-lab-project .

Test the Project
Run the unit tests using pytest:
pytest

Run the Project
Run locally:
python app.py
Then open your browser and go to:
http://127.0.0.1:5000/

Or run with Docker:
docker run -p 5000:5000 flask-lab-project
