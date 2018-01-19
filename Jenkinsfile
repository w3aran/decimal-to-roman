pipeline {
  agent any
  stages {
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