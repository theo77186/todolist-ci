pipeline {
    environment {
        registry = "theo77186/todolist"
        registryCredential = "docker-id"
        dockerImage = ""
    }
    agent any
    stages {
        stage("Git checkout") {
            steps {
                checkout scm
            }
        }

        stage("Run tests") {
            steps {
                sh "npm run test"
            }
        }

        stage("Building image") {
            steps {
                script {
                    dockerImage = docker.build registry
                }
            }
        }

        stage("Publish image") {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push()
                        dockerImage.push("latest")
                    }
                }
                echo "trying to push Docker Build to DockerHub"
            }
        }
    }
}
