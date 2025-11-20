import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';
import { NextResponse } from 'next/server';

+// @aws-sdk/client-cognito-identity-provider is using HOME environment variable to construct some paths
+// for optional configuration files loading. This is null leading to
+// > TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received null
+// errors. To workaround this issue we set HOME to an empty string. We still won't be able to load any local
+// configuration files, but at least logic that determines paths to attempt to load won't throw anymore.
process.env.HOME = "";


export async function proxy() {
  new CognitoIdentityProviderClient({ region: 'us-east-1' });
  return NextResponse.next();
}