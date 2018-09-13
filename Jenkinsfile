node {
  def techtest_repository = checkout scm
  def git_branch = techtest_repository.GIT_BRANCH
  def git_commit = techtest_repository.GIT_COMMIT

  echo "Branch: ${git_branch}"
  echo "Revision: ${git_commit}"

  stage ('Build Docker Image') {
    sh "docker build -t techtest-ssbkang-nodejs:${git_commit} ."
  }

  stage ('Delete the existing Docker Container') {
    sh "docker rm -f techtest-ssbkang-nodejs-application"
  }
  
  stage ('Redeploy the Docker Container with the newer image version') {
    sh "docker run -d -p 80:3000 --name techtest-ssbkang-nodejs-application techtest-ssbkang-nodejs:${git_commit}"
  }
}
