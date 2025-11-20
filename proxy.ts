import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';
import { NextResponse } from 'next/server';

export async function proxy() {
  new CognitoIdentityProviderClient({ region: 'us-east-1' });
  return NextResponse.next();
}