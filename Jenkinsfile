pipeline {
    agent any

    environment {
        ORDER_IMAGE_NAME = "orderservice" 
        PRODUCT_IMAGE_NAME = "productservice" 
        USER_IMAGE_NAME = "userservice" 
        LOCAL_REGISTRY = "localhost:5000"
    }

    stages {

        stage('Clone Repository') {
            steps {
                withCredentials([string(credentialsId: 'nodejs', variable: 'Nodejs')]) {
                sh 'git clone https://github.com/Shrij34/Git-for-devops-workshop.git'
                }
            }
        }

        // Order Service
        stage('Build Order Service Image') {
            steps {
                dir('orderService') {
                    sh 'docker build -t $ORDER_IMAGE_NAME -f Dockerfile .'
                    sh 'docker tag $ORDER_IMAGE_NAME $LOCAL_REGISTRY/$ORDER_IMAGE_NAME'
                }
            }
        }
        stage('Push Order Service Image to Registry') {
            steps {
                sh 'docker push $LOCAL_REGISTRY/$ORDER_IMAGE_NAME'
            }
        }

        // Product Service
        stage('Build Product Service Image') {
            steps {
                dir('productService') {
                    sh 'docker build -t $PRODUCT_IMAGE_NAME -f Dockerfile .'
                    sh 'docker tag $PRODUCT_IMAGE_NAME $LOCAL_REGISTRY/$PRODUCT_IMAGE_NAME'
                }
            }
        }
        stage('Push Product Service Image to Registry') {
            steps {
                sh 'docker push $LOCAL_REGISTRY/$PRODUCT_IMAGE_NAME'
            }
        }

        // User Service
        stage('Build User Service Image') {
            steps {
                dir('userService') {
                    sh 'docker build -t $USER_IMAGE_NAME -f Dockerfile .'
                    sh 'docker tag $USER_IMAGE_NAME $LOCAL_REGISTRY/$USER_IMAGE_NAME'
                }
            }
        }
        stage('Push User Service Image to Registry') {
            steps {
                sh 'docker push $LOCAL_REGISTRY/$USER_IMAGE_NAME'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s-deployment.yml'
            }
        }
    }
}
