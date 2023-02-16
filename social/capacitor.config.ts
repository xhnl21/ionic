import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email', 'userId', 'displayName', 'imageUrl'],
      serverClientId: '427726351463-aescnj8vdgvqm8e0oej377r7qqemc961.apps.googleusercontent.com',
      forceCodeForRefreshToke: true,
    },
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: [ "google.com","twitter.com", "phone"],
    },
  },
  appId: 'io.ionic.starter',
  appName: 'social',
  webDir: 'dist',
  bundledWebRuntime: false
};

export default config;
