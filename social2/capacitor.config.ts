import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'social2',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: [
        "profile",
        "email"
      ],
      serverClientId: "684898322638-trlo32dvpb2m2c03hhk3t2eqvf8ainth.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }    
  },
};

export default config;
