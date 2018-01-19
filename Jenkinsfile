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
        stage('Initialize') {
         steps {
           nvm(version: '6.11.5', nvmIoJsOrgMirror: 'https://nodejs.org/dist', nvmNodeJsOrgMirror: 'https://iojs.org/dist', nvmInstallURL: 'https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh') {
             sh '''node --version
 npm --version'''
           }
           
         }
       }
      }
    }
  }
}
