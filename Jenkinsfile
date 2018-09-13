node {
  def techtest_repository = checkout scm
  def git_branch = techtest_repository.GIT_BRANCH
  def git_commit = techtest_repository.GIT_COMMIT

  echo "Branch: ${git_branch}"
  echo "Revision: ${git_commit}"

  stage ('Build Docker Image') {
    docker.build("techtest-ssbkang-nodejs:${git_branch}-${git_commit}")
  }

  stage ('Delete the existing Docker Container') {
  }
  
  stage ('Redeploy the newer image version') {
  }
}
