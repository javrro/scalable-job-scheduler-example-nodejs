# scalable-job-scheduler-example-nodejs
small example to setup an scalable dockered job scheduler microservice powered by the Bull library for Nodejs.

requires a running instance of Kafka(Kafka not included in this repo. try https://github.com/wurstmeister/kafka-docker) to get events from a main API (test-api included).

--Scheduler schedules the queue of jobs/tasks to resolve.
--Handler resolves the queue of jobs one by one. In order to resolve jobs in parallel scale up the number of Handler instances.
