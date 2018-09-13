node {
  stage 'Checkout'
  def techtest_repository = checkout scm
  def git_branch = techtest_repository.GIT_BRANCH
  def git_commit = techtest_repository.GIT_COMMIT

  stage 'Build Docker Image'
  sh "sudo docker build -t techtest-ssbkang-nodejs:${git_branch}-${git_commit}"

  stage 'Delete the existing Docker Container'
  sh "sudo docker rm -f techtest-ssbkang-nodejs-application"

  stage 'Redeploy the newer image version'
  sh "sudo docker run -d -p 80:3000 --name techtest-ssbkang-nodejs-application techtest-ssbkang-nodejs:${git_branch}-${git_commit}"
}
