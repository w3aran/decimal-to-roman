pipeline {
  agent {
    node none
  }
  stages {
    stage('Initialize') {
      steps {
        nvm(version: '6.11.5', nvmIoJsOrgMirror: 'https://nodejs.org/dist', nvmNodeJsOrgMirror: 'https://iojs.org/dist', nvmInstallURL: 'https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh') {
          sh '''node --version
npm --version'''
        }
        
      }
    }
    stage('Install Dependency') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}
