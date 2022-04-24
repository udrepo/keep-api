import admin from "firebase-admin";
import 'dotenv/config'

admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "keep-e0085",
        "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC3leozSubcdTen\nXZtuuVlygmINZlJISAUB6EmFKeoOQyiFMeVqmGmx5r9QERS9j1753lw2tEOi/PVF\n5485+j9I+Fp2KnrhgL9GJiE7u87nQcawqsNHhrf1uujvx8a/ddVmPjEJRFwMr0TU\nRa+adHXPIaqpCg5dZGdC6v4/TLe7QDxhzmD7ts+d5Kxc9LmrH4mH8ehQOAIXWND6\n0dL+I33CrWmeK+k5zvrB71Xvp3JqgPJ1thkZfOkBIOu0DHk1TVKFj57q9vdDBsdu\nLmBF5IMsTrwAqG56BS2xILq131O5YgowwLAZStuI1t4chSYoWgZ6/+12zkkpZ4dx\ng7yf+fZhAgMBAAECggEACwWhI1CNPmcl3ufWe8tSUiGp1AwfRzUBDUruPw8efO9j\nRhE804LbCvyY4oG5W7gj3PSQrL1zN3Hgd+tIb2lVgK1dy60OkO4Ijc70PSswEjT3\nbNvpECjyb8+3nyMWDPX8yJVV9Fck/6NLiphfIUgkr+Q25CHfwuj9mh2UWNCOUgZA\ncGhFQoXGDcEg9rgtpUkQBFl6uLn7VL327L6mIokYkTXyoyttOv/LsORLw+rfNePI\nxMr7PamOcbdjReYS7dD6S0VABRbT3AXuqHHTXlkES7cDD6NPz5GWoxgfnPTHsH01\nncI4ZQJbpJmnbzqWTfqjq5ETpRXSFH+q8yhnsVxF0QKBgQDvmKpS/wj0t0WwGRAs\nsMpeTUMu/DRuj26b89tN1COpt2s2G98FQ3hjsMcgDaIq11nnHivdsLxuX+FBRM8P\ni1/ZFkav08l0pM7DGs3yqNVk20VEt+NYNHBul9KVyCXGts4jhirp40g8Nq5N3BfZ\newJIL0buF3oa73gl5Pcnmamw7wKBgQDEJ5DRVyLBxiST0+kf7J+aQ7GlqnVNWKNw\ny5wzBXDV45+kH/b7UFF4ZkKKMLR8LsLZKapT1LQ9hKzoHfQ6epFs1vsqRogaPtm3\n6uXcurPb0Xju08NNFYRhc27Ce8vQKLB6eBtnLs3sKaYAiSpm7PS9obr1FPmq6LW6\nXvXijSAtrwKBgQDtib+jVTG93E18zvxYMlYPtC3dUTFyQ0V33AYaXS2WP0BNfshW\n4ZNj0ok4YAvcyXBaUHFQ8r19+BTMrrlSQe2evhUKkL/zoslSaSqxX21g9nrwLBd7\nBVJKcr7WvH2nSumIEqZNB4ZAHD4m9wO2G9whUK3Tsvbd6XiGqT/XxOKVhQKBgACa\nAnax5rhjbC9L4hYn+qFVfdD9QdjX4cBxz2vUo3D0fsPZGT/SEj3lSmT0G0maNxzF\nZPFW4Kqjoogft2UKhTGpQyHxD2/NK4vF26iepfiRnuZUne+5litaWEeea5Sa21e0\n0JizawxDYG/1+7xPE70VJuajhtSAXDZTHjvwpN2fAoGALFQCmDvKhpxzg/6EVajS\n6gpFYK4UgOZt17pUSL6LC8Oec3MSf4Dt0amAVFJJOVNObHhS+E6mrjxOWKZ3OIzq\nka+4/tEQK/82lT4r0nUPUbylwVDNwpMOiwxKpv8CUOrP9UAhYgquA9SD5hGLGMfg\nQIeWuJCbk2YTaRI28kXRJvk=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-3op8g@keep-e0085.iam.gserviceaccount.com",
        "client_id": process.env.FIREBASE_CLIENT_ID,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3op8g%40keep-e0085.iam.gserviceaccount.com"
    })
});

export default admin;