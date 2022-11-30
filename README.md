# over-susbscribed-activity-allocation

A lottery system for oversubscribed activities.

All Pii is on the client side, and never reaches the server.

The administrator sets up a number of activities with limited subscriptions. 
The administrator then creates a number of token bearing links. 
The administrator downloads the tokens.

The tokens are then communicated to the users.
(Outside of this application.)

The users log-in using the links.
The users choose the activites they are interested in and order them in order of preference.

The administrator can monitor progress on the app.

The administrator provides shuffled list of tokens.
The list of tokens is used to allocate tasks according to the preferences chosen.

The first token gets their first choice.
The second token gets their first choice, and so on, until their first choice is full. 
Then they get their second choice, and so on, until they run out of choices.
When at the end of the list, the first user is picked again.

The allocations, and an explanation of every step taken is provided to the administrator, and the users 

# dev
## run lambda with dynamodb

inspired by 

  -    https://github.com/ganshan/sam-dynamodb-local
  -  https://github.com/lvthillo/aws-lambda-sam-demo,
  -  https://stackoverflow.com/questions/48926260/connecting-aws-sam-local-with-dynamodb-in-docker
  -  https://github.com/rynop/abp-sam-nestjs
  -  for stream support: https://stackoverflow.com/questions/34883142/stream-support-for-local-dynamodb


```
cd ./activity-allocation
docker network create sam-local
docker-compose start
# access the shell at http://localhost:8000/shell/

alias mydocker='docker run --rm --network sam-local -e AWS_REGION=eu-west-1 -e AWS_ACCESS_KEY_ID=aaa -e AWS_SECRET_ACCESS_KEY=xxx'

mydocker amazon/aws-cli dynamodb list-tables --endpoint-url http://dynamodb:8000

mydocker -v $PWD/dev:/mnt/dev amazon/aws-cli dynamodb create-table --cli-input-json file:///mnt/dev/create-devSampleTable.json --endpoint-url http://dynamodb:8000

sam local invoke --docker-network sam-local -n ./env.json  putItemFunction --event dev/events/event-post-item.json

```
