# munna-ki-pahachaan
Portfolio
1. git clone https://github.com/LearnWithBiswajit/Website-Hosting-Nginx.git
2. cd Website-Hosting-Nginx
3. sudo chmod +x run.sh
4. bash run.sh  ---> Boooom💥💥💥💥 It will work very fine nothing no need to change any thing else..........🤡💥
5. Install Docker
6. Create Docker file or You can use My Dockerfile
7. docker bulid -t mypage .
8. docker run -d -p 8081:80 -v $(pwd):/usr/share/nginx/html mywebnginx


======================Boom================================


Git Hut Jenkins Pipeline Setup for CI-CD
1.	 Setup One Jenkins Server (On prem or EC2)
2.	Install Jenkins On that Server.
•	sudo apt-get update
•	sudo apt install fontconfig openjdk-17-jre
•	sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \ https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
•	echo "deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc]" \ https://pkg.jenkins.io/debian-stable binary/ | sudo tee \ /etc/apt/sources.list.d/jenkins.list > /dev/null
•	sudo apt-get update
•	sudo apt-get install Jenkins
•	sudo systemctl enable jenkins
•	sudo systemctl start jenkins
•	sudo systemctl status Jenkins
3.	Login To Jenkins Portal on 8080 port and Install Default Plugins. Setup admin password.
4.	Create new Job. Goto Dashboard and Click on new item.
Give a job name and choose free style.
Give Description add Git Project URL.
Now Add Git Credential.
Click On ADD bottom.
Enter the Private Key You Got from the ssh-keygen from server.
And Give the Jenkins server Public Key to Git hub for SSH communication. Goto git Hub setting  SSH
Webhook Configure.	 
Wait until.
Install one Plugin in Jenkins.
Go to manage Jenkins  GitHub Integration Plugin for Jenkins.
Now If any changes committed in Repo automatically Deploy on the server.
Now if you commit any Changes in git hub that will tigger auto build.
 
