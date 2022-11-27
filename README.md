# over-susbscribed-activity-allocation

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
