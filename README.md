# gcp-js-credential-test
*Steps still in-progress*
- Create a GCP project.
- Add a service account to it.
- Enable Cloud Storage and GMail API's for it.
```
gcloud auth login <your-account>
gcloud config set project <your-project-name>
gcloud auth application-default login

cd <parent-directory-of-your-repos>
git clone https://github.com/chrisxkeith/gcp-js-credential-test.git
cd gcp-js-credential-test
npm install @google-cloud/storage
npm install googleapis
node .\test.js
```
