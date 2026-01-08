pipeline {
    agent any

    tools {
        nodejs 'NodeJS_25'   // Must match NodeJS name in Jenkins Global Tool Configuration
    }

    environment {
        CI = 'true'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ChetanAbhishek/LDB_Playwright.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    node -v
                    npm -v
                    npm ci
                    npx playwright install --with-deps
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh '''
                    npx playwright test
                '''
            }
        }
    }

    post {
        always {
            echo 'Archiving Playwright Report'
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }

        success {
            echo '✅ Playwright tests passed'
        }

        failure {
            echo '❌ Playwright tests failed'
        }
    }
}