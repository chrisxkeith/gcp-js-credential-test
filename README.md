# gcp-js-credential-test
- Create a Google Cloud Platform project.
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
node ./test_cloud_storage.js
[Output]
Buckets:
node ./test_get_email_labels.js
[Output]
...
GaxiosError: Insufficient Permission
...
```
