pipeline {
  agent any
  stages {
    stage('Initialize') {
      steps {
        nvm(version: 'v6.11.5', nvmIoJsOrgMirror: 'https://nodejs.org/dist', nvmNodeJsOrgMirror: 'https://nodejs.org/dist', nvmInstallURL: 'https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh') {
          sh '''
          node --version
          npm --version
          '''
        }
        
      }
    }
    stage('Install Dependency') {
      steps {
        nvm(version: 'v6.11.5') {
          sh '''
          npm install
          '''
        }
        
      }
    }
    stage('Test') {
      steps {
        nvm(version: 'v6.11.5') {
          sh '''
          npm test
          '''
        }
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
