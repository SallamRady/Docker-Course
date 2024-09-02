# base image : alpine is used for it's small size from alpine
FROM alpine

# packages or dep.
RUN apk --no-cache add redis

# commands to run on image
CMD [ "redis-server" ]