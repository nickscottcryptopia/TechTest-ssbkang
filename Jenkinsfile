node {
  def techtest_repository = checkout scm
  def git_branch = techtest_repository.GIT_BRANCH
  def git_commit = techtest_repository.GIT_COMMIT

  echo "Branch: ${git_branch}"
  echo "Revision: ${git_commit}"

  echo "Update extracontent.txt file"

  sh "echo Branch := ${git_branch} >> extracontent.txt"
  sh "echo Revision := ${git_commit} >> extracontent.txt"
  
  
  stage ('Build Docker image') {
    script {
        try {
            sh "docker build -t techtest-ssbkang-nodejs:${git_commit} ."
        } catch (err) {
            echo err
        }
    }
    echo currentBuild.result
    }
  }

  stage ('Delete the existing Docker Container') {
    sh "docker rm -f techtest-ssbkang-nodejs-application"
  }

  stage ('Redeploy the Docker Container with the newer image version') {
    sh "docker run -d -p 80:3000 --name techtest-ssbkang-nodejs-application techtest-ssbkang-nodejs:${git_commit}"
  }
}
