pipeline {
    agent any

    environment {
        CONTAINER_NAME = "nestjs-app"
        IMAGE_NAME = "nestjs-image"
        EMAIL = "mishrarabin92@gmail.com"
        PORT = "3000"
    }

    stages {
        stage('Clone Repo'){
            steps{
                git branch: 'main', url: 'https://github.com/Rabin-Mishra/CICD_Pipeline_Using_Jenkins_Azure_Github_Email.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }
        stage('Stop & Remove Previous Container') {
            steps {
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                '''
            }
        }
        stage('Docker Container Run') {
            steps {
                sh '''
                    docker run -d -p ${PORT}:${PORT} --name $CONTAINER_NAME $IMAGE_NAME
                '''
            }
        }
        stage('Send Email Notification') {
            steps {
               emailext(
                subject: "NestJS App Deployed Successfully on AZure",
                body: "Your Nest JS app is Deployed! http://135.235.138.154:${PORT}/",
                to: "${EMAIL}"
               )
            }
        }

    }
}