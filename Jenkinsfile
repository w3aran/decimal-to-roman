pipeline {
    agent any
    environment { 
        CI = 'true'
    }
    tools {
        nodejs 'v6.11.4'
    }
    stages {
        stage('Initialize') {
            steps {
                sh '''
                node --version
                npm --version
                '''
            }
        }
        stage('NPM Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Static Code Analysis') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Tag with Version') {
            when {
                branch 'master'
            }
            steps {
                sh 'npm run tag' 
            }
        }
        stage('Build Artifact') {
            when {
                anyOf {
                    branch 'master'
                    environment name: 'NODE_APP_ENV', value: 'development'
                }
            }
            steps {
                sh 'npm run artifact'
            }
        }
        stage('Publish to Artifactory') {
            when {
                branch 'master'
            }
            steps {
                echo 'publish to artifactory' 
            }
        }
        stage('Deploy to Dev environment') {
            when {
                environment name: 'NODE_APP_ENV', value: 'development'
            }
            steps {
                echo 'Deploy to QA server' 
            }
        }
        stage('Deploy to QA environment') {
            when {
                branch 'master'
            }
            steps {
                echo 'deploying to qa servers' 
            }
        }
        stage('Trigger to Deploy Staging environment Build') {
            when {
                branch 'master'
            }
            steps {
                echo 'Triggering to Deploy Staging environment manually' 
            }
        }
        stage('Trigger to Deploy Production environment Build') {
            when {
                branch 'master'
            }
            steps {
                echo 'Triggering to Deploy Production environment manually' 
            }
        }
    }
    post { 
        always { 
            echo 'always run'
        }
        changed { 
            echo 'changed run'
        }
        failure { 
            echo 'failure run'
        }
        success { 
            echo 'success run'
        }
        unstable { 
            echo 'unstable run'
        }
        aborted { 
            echo 'aborted run'
        }
    }
}
