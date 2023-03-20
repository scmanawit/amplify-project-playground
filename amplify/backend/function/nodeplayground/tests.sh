# install backend/functions dependencies
export ENV="dev"
export REGION="ap-southeast-2"

export TEST="true"
export AWS_PROFILE="mb-trainee"
echo $NODE_PATH
# npx jest --coverage
npx jest --coverage $@