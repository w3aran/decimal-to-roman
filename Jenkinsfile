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
        stage('Install NPM Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Static Code Analysis') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Tag Version') {
            when {
                branch 'master'
            }
            steps {
                sh 'npm run tag' 
            }
        }
        stage('Build Artifact') {
            when {
                branch 'master'
            }
            steps {
                sh 'npm run artifact'
            }
        }
        stage('Publish to Artifactory') { 
            steps {
                echo 'publish to artifactory' 
            }
        }
        stage('Deploy to QA environment') { 
            steps {
                echo 'deploying to qa servers' 
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
