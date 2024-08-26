# docker test local

Go to the folder FILE-PROXY in a terminal

Build your image it will use the DockerFile

````
docker build -t commande-test
````

Launch the container from the image in local environnement

````
docker run -p 3000:3000 --name commande-test-service commande-test
````

You will have issue right gcp on call, you can just test that launching to debug the docker

## GCP deployment

### azure pipeline

In devops, you can launch the azure pipeline *release-cloud-run* with choosing the environment

### manully (to not use anymore)

Go to the folder FILE-PROXY in a terminal

create the image

````
docker build -t europe-west1-docker.pkg.dev/sxb-emotors-mde/command-test/api:latest .
````

authentification to the system by gcloud with your account

````
gcloud auth configure-docker europe-west1-docker.pkg.dev
````

put the image in the cloud gcp artefact registry to be available for cloud run

````
docker push europe-west1-docker.pkg.dev/sxb-emotors-mde/command-test/api:latest 
````
