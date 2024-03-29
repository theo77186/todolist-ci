pipeline {
    environment {
        registry = "theo77186/todolist"
        registryCredential = "docker-id"
        dockerImage = ""
        PUBLIC_URL = "/"
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

        stage("Test app") {
            steps {
                sh "npm run test -- --watchAll=false"
            }
        }

        stage("Audit packages") {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') { // should be UNSTABLE on prod
                    sh "npm audit"
                }
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
