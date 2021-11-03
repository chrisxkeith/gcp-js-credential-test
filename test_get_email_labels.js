// From example embedded in v1.d.ts ('Go To Definition' on the list function, line 1912)
const {google} = require('googleapis'); 
const gmail = google.gmail('v1');

async function testEmail() {
    const auth = new google.auth.GoogleAuth({
        // Scopes can be specified either as an array or as a single, space-delimited string.
        scopes: [
            'https://mail.google.com/',
            'https://www.googleapis.com/auth/gmail.labels',
            'https://www.googleapis.com/auth/gmail.metadata',
            'https://www.googleapis.com/auth/gmail.modify',
            'https://www.googleapis.com/auth/gmail.readonly',
        ],
    });

    // Acquire an auth client, and bind it to all future calls
    const authClient = await auth.getClient();
    google.options({auth: authClient});

    // Do the magic
    const res = await gmail.users.labels.list({
        // The user's email address. The special value `me` can be used to indicate the authenticated user.
        userId: 'me',
    });
    console.log(res.data);
}

testEmail();
