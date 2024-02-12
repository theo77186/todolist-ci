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

        stage("Install packages") {
            steps {
                sh "npm install"
            }
        }

        stage("Build app") {
            steps {
                sh "npm run build"
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
