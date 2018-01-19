pipeline {
  agent any
  tools { nodejs "v6.11.4" }
  stages {
    stage('Initialize') {
      steps {
          sh '''
          node --version
          npm --version
          '''
      }
    }
    stage('Install Dependency') {
      steps {
          sh '''
          npm install
          '''
      }
    }
    stage('Test') {
      steps {
          sh '''
          npm test
          '''
      }
    }
    stage('hello') {
      parallel {
        stage('hello') {
          steps {
            sh 'echo "hello world"'
          }
        }
        stage('hello2') {
          steps {
            sh 'echo "heloo 2"'
          }
        }
        
      }
    }
  }
}
