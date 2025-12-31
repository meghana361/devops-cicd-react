// pipeline {
//     agent any

//     environment {
//         IMAGE_NAME = "react-cicd"
//         IMAGE_TAG = "v1"
//     }

//     stages {
//         stage('Clone Repo') {
//             steps {
//                 git branch: 'main',
//                     url: 'https://github.com/meghana361/devops-cicd-react.git'
//             }
//         }

//         stage('Build Docker Image') {
//             steps {
//                 sh '''
//                 cd frontend
//                 docker build -t $IMAGE_NAME:$IMAGE_TAG .
//                 '''
//             }
//         }

//         stage('Verify Image') {
//             steps {
//                 sh 'docker images | grep react-cicd'
//             }
//         }
//     }

//     post {
//         success {
//             echo "Docker image built successfully!"
//         }
//         failure {
//             echo "Build failed"
//         }
//     }
// }
pipeline {
    agent any

    environment {
        IMAGE_NAME = "react-cicd"
        IMAGE_TAG = "v1"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                sh '''
                cd frontend
                docker build -t $IMAGE_NAME:$IMAGE_TAG .
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                kubectl get pods
                kubectl get svc
                '''
            }
        }
    }

    post {
        success {
            echo "Application deployed successfully to Kubernetes!"
        }
        failure {
            echo "Deployment failed"
        }
    }
}
